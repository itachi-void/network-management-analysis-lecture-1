#!/usr/bin/env python3
"""
Process multi-pose character sheets generated on solid #FF00FF magenta background:
1. Chroma-key magenta background + despill magenta fringes
2. Split horizontal poses into individual character figures using connected components
3. Crop at mid-thigh if full body was drawn
4. Standardize to 1000x1600 RGBA with 6px white sticker outline and transparent outer margin
"""
import os
import sys
import shutil
import numpy as np
from PIL import Image, ImageDraw
import scipy.ndimage

sys.stdout.reconfigure(encoding='utf-8')


def remove_magenta_bg(im: Image.Image) -> np.ndarray:
    arr = np.array(im.convert('RGBA'), dtype=np.float32)
    H, W, _ = arr.shape

    # Sample background color from corners/top edge
    edge_pixels = np.concatenate([
        arr[0:10, 0:10, :3].reshape(-1, 3),
        arr[0:10, W-10:W, :3].reshape(-1, 3),
        arr[0:5, :, :3].reshape(-1, 3),
    ], axis=0)
    bg_color = np.median(edge_pixels, axis=0)

    R = arr[:, :, 0]
    G = arr[:, :, 1]
    B = arr[:, :, 2]

    d = np.sqrt((R - bg_color[0])**2 + (G - bg_color[1])**2 + (B - bg_color[2])**2)
    mag = np.minimum(R, B) - G

    # Flood-fill from borders so internal tones aren't accidentally keyed
    cand_bg = (d < 130) | (mag > 80)
    labeled_bg, _ = scipy.ndimage.label(cand_bg)
    border_labels = set(
        np.unique(labeled_bg[0, :]).tolist() +
        np.unique(labeled_bg[-1, :]).tolist() +
        np.unique(labeled_bg[:, 0]).tolist() +
        np.unique(labeled_bg[:, -1]).tolist()
    ) - {0}
    ext_bg = np.isin(labeled_bg, list(border_labels))

    # Also catch any enclosed background holes (like between arm and torso or between cable loops)
    # where pixel is strongly magenta (d < 95 and mag > 110)
    enclosed_mag = (mag > 60) & (R > 150) & (B > 150) & (G < 115)
    full_bg = ext_bg | enclosed_mag

    new_alpha = np.ones((H, W), dtype=np.float32) * 255.0
    new_alpha[full_bg] = 0.0

    # Smooth transition at boundary of full_bg
    dilated_bg1 = scipy.ndimage.binary_dilation(full_bg, iterations=2)
    boundary = dilated_bg1 & (~full_bg)
    new_alpha[boundary] = np.clip((110.0 - np.maximum(0.0, mag[boundary] - 30.0)) / 110.0 * 255.0, 0.0, 255.0)

    arr[:, :, 3] = new_alpha

    # Despill magenta on boundary edges (up to 5px inside)
    dilated_bg5 = scipy.ndimage.binary_dilation(full_bg, iterations=5)
    m = np.minimum(R, B) - G
    despill_mask = dilated_bg5 & (arr[:, :, 3] > 0) & (m > 0)
    arr[:, :, 0] = np.where(despill_mask, R - m * 0.9, R)
    arr[:, :, 2] = np.where(despill_mask, B - m * 0.9, B)

    return np.clip(arr, 0, 255).astype(np.uint8)


def split_poses(arr: np.ndarray, expected_count: int):
    H, W, _ = arr.shape
    mask = arr[:, :, 3] > 25

    labeled, num_feat = scipy.ndimage.label(mask, structure=np.ones((3, 3), dtype=int))
    comps = []
    for fid in range(1, num_feat + 1):
        cm = (labeled == fid)
        area = int(np.sum(cm))
        if area < 40:
            arr[cm, 3] = 0
            continue
        ys, xs = np.where(cm)
        comps.append({
            'id': fid,
            'area': area,
            'bbox': (int(xs.min()), int(ys.min()), int(xs.max()), int(ys.max())),
            'center': (float(xs.mean()), float(ys.mean())),
            'mask': cm,
        })

    if not comps:
        raise RuntimeError("No foreground components found!")

    comps.sort(key=lambda c: c['area'], reverse=True)
    big = comps[:expected_count]
    small = comps[expected_count:]
    for sc in small:
        scx, scy = sc['center']
        best = min(big, key=lambda bc: (bc['center'][0] - scx)**2 + (bc['center'][1] - scy)**2)
        best['mask'] = best['mask'] | sc['mask']
        bx1, by1, bx2, by2 = best['bbox']
        sx1, sy1, sx2, sy2 = sc['bbox']
        best['bbox'] = (min(bx1, sx1), min(by1, sy1), max(bx2, sx2), max(by2, sy2))
    big.sort(key=lambda c: c['bbox'][0])
    poses = []
    for bc in big:
        pa = np.zeros_like(arr)
        pa[bc['mask']] = arr[bc['mask']]
        x1, y1, x2, y2 = bc['bbox']
        poses.append(Image.fromarray(pa[y1:y2+1, x1:x2+1]))
    return poses


def format_character_1000x1600(pose_im: Image.Image, crop_full_body_ratio: float = None) -> Image.Image:
    bbox = pose_im.getbbox()
    if bbox:
        pose_im = pose_im.crop(bbox)

    w, h = pose_im.size
    if crop_full_body_ratio is not None:
        new_h_crop = int(h * crop_full_body_ratio)
        pose_im = pose_im.crop((0, 0, w, new_h_crop))
        bbox = pose_im.getbbox()
        if bbox:
            pose_im = pose_im.crop(bbox)
        w, h = pose_im.size

    target_w, target_h = 1000, 1600
    # Leave room for 6px white sticker + >=8px transparent margin on top/left/right
    scale = min(956.0 / w, 1480.0 / h)
    new_w = int(round(w * scale))
    new_h = int(round(h * scale))

    im_scaled = pose_im.resize((new_w, new_h), Image.Resampling.LANCZOS)

    # Add 6px white sticker border
    pad = 14
    padded = Image.new('RGBA', (new_w + 2 * pad, new_h + 2 * pad), (0, 0, 0, 0))
    padded.paste(im_scaled, (pad, pad))

    alpha = np.array(padded.getchannel('A'))
    y_g, x_g = np.ogrid[-6:7, -6:7]
    disk6 = (x_g**2 + y_g**2) <= 36
    dilated = scipy.ndimage.binary_dilation(alpha > 25, structure=disk6).astype(np.float32) * 255.0
    dilated = scipy.ndimage.gaussian_filter(dilated, sigma=0.5)

    sticker = Image.new('RGBA', padded.size, (255, 255, 255, 0))
    sticker.putalpha(Image.fromarray(np.clip(dilated, 0, 255).astype(np.uint8)))

    comp = Image.alpha_composite(sticker, padded)
    c_bbox = comp.getbbox()
    if c_bbox:
        comp = comp.crop(c_bbox)

    cw, ch = comp.size
    canvas = Image.new('RGBA', (target_w, target_h), (0, 0, 0, 0))
    ox = (target_w - cw) // 2
    # Bottom align so mid-thigh cut sits at bottom of canvas (y=1600)
    oy = target_h - ch
    if oy < 10:
        oy = 10
    canvas.paste(comp, (ox, oy), comp)

    # Ensure outer 6px on top, left, right are strictly alpha=0 (as required by verify_phase0.py)
    c_arr = np.array(canvas)
    c_arr[:6, :, 3] = 0
    c_arr[:, :6, 3] = 0
    c_arr[:, -6:, 3] = 0
    return Image.fromarray(c_arr)


def main():
    os.makedirs('public/characters', exist_ok=True)
    os.makedirs('out/debug', exist_ok=True)

    sheets = [
        ('work/chars/omar_poses_1.jpg', ['omar_O1', 'omar_O2', 'omar_O3'], None),
        ('work/chars/omar_poses_2.jpg', ['omar_O4', 'omar_O6'], None),
        ('work/chars/karim_poses_1.jpg', ['karim_K1', 'karim_K2', 'karim_K3'], 0.72),
        ('work/chars/karim_poses_2.jpg', ['karim_K4', 'karim_K5', 'karim_K6'], None),
        ('work/chars/shabah_poses.jpg', ['hacker_H1', 'hacker_H2'], 0.68),
    ]

    for sheet_path, names, crop_ratio in sheets:
        im = Image.open(sheet_path)
        keyed = remove_magenta_bg(im)
        poses = split_poses(keyed, len(names))
        for name, pose_im in zip(names, poses):
            final_im = format_character_1000x1600(pose_im, crop_full_body_ratio=crop_ratio)
            out_path = f'public/characters/{name}.png'
            final_im.save(out_path)
            print(f'Saved {out_path} ({final_im.size})')

    print('All 13 poses processed!')


if __name__ == '__main__':
    main()
