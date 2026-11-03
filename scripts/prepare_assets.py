import os, shutil
import numpy as np
from PIL import Image, ImageFilter

os.makedirs('public/slides_up', exist_ok=True)

# 1. Upscale
upscale_factors = {
    's02_agenda_figure.jpg': 3,
    's04_datacenter.png': 3,
    's06_paloalto_ngfw.jpg': 4,
    's12_conduant_ltx3.jpg': 2,
    's13_compellent_racks.jpg': 2,
    's15_traditional_vs_sdn.png': 3,
    's16_voip_globe.jpg': 3,
    's16_video_player.jpg': 4,
    's16_cisco_phones.png': 3,
}

slides_files = os.listdir('public/slides')
for fname in sorted(slides_files):
    in_path = os.path.join('public/slides', fname)
    out_path = os.path.join('public/slides_up', fname)
    if fname in upscale_factors:
        factor = upscale_factors[fname]
        with Image.open(in_path) as im:
            new_size = (int(im.width * factor), int(im.height * factor))
            # Lanczos resize
            up = im.resize(new_size, Image.Resampling.LANCZOS)
            # unsharp mask radius=0.8, percent=60, threshold=1
            up = up.filter(ImageFilter.UnsharpMask(radius=0.8, percent=60, threshold=1))
            up.save(out_path, quality=95)
            print(f"Upscaled {fname} x{factor}: {im.size} -> {up.size}")
    else:
        shutil.copy2(in_path, out_path)
        print(f"Copied {fname} as-is")

# 2. Clean s10_fig8_33_clean.png
# -region 325x56+995+644 -white-threshold 55% +region
# -region 40x22+1305+0  -white-threshold 1%  +region
s10_path = 'public/slides/s10_fig8_33.png'
s10_clean_path = 'public/slides_up/s10_fig8_33_clean.png'
with Image.open(s10_path) as im:
    im_clean = im.convert('RGB')
    arr = np.array(im_clean)
    
    # Region 1: x=995, y=644, w=325, h=56
    # threshold 55% -> pixels with luminance/val >= 0.55 * 255 = 140.25 become white (255,255,255)
    # The watermark is faint grey text on white, so setting luminance > 140 to 255 cleans it completely.
    # In fact, setting the entire box to 255 since there's no diagram content in that blank white margin:
    sub1 = arr[644:644+56, 995:995+325]
    # mask where any channel is >= 140 or entire box is white background
    mask1 = (sub1.mean(axis=2) >= 140)
    sub1[mask1] = [255, 255, 255]
    
    # Region 2: x=1305, y=0, w=40, h=22
    # threshold 1% -> remove arrow completely
    sub2 = arr[0:22, 1305:1305+40]
    sub2[:, :] = [255, 255, 255]
    
    clean_img = Image.fromarray(arr)
    clean_img.save(s10_clean_path)
    print(f"Created cleaned s10: {s10_clean_path}")

# 3. Paper texture: public/paper.png
# Base color #F8F4EC = (248, 244, 236)
# Standard deviation ~ 1.65
np.random.seed(42)
h, w = 1080, 1920
base = np.array([248.0, 244.0, 236.0], dtype=np.float32)

# Generate fine noise, fiber noise, blot noise
from scipy.ndimage import gaussian_filter, uniform_filter1d

# Fine noise: blur radius 0.8
fine = np.random.normal(0, 1.0, (h, w)).astype(np.float32)
fine = gaussian_filter(fine, sigma=0.8)

# Fiber noise: vertical blur
fiber = np.random.normal(0, 1.0, (h, w)).astype(np.float32)
fiber = uniform_filter1d(fiber, size=7, axis=0)

# Blot noise: low frequency noise
blot = np.random.normal(0, 1.0, (270, 480)).astype(np.float32)
blot = gaussian_filter(blot, sigma=5.0)
blot_im = Image.fromarray(blot, mode='F').resize((w, h), Image.Resampling.BILINEAR)
blot = np.array(blot_im)

# Combine: composite with base color
# Target std dev around 1.6 - 1.65
composite = (
    base[np.newaxis, np.newaxis, :]
    + fine[:, :, np.newaxis] * 0.85
    + fiber[:, :, np.newaxis] * 0.95
    + blot[:, :, np.newaxis] * 1.5
)
composite = np.clip(np.round(composite), 0, 255).astype(np.uint8)

paper_im = Image.fromarray(composite)
paper_im.save('public/paper.png')

# Measure color stats
paper_arr = np.array(paper_im, dtype=np.float32)
mean_rgb = paper_arr.mean(axis=(0, 1))
std_gray = np.std(paper_arr.mean(axis=2))
print(f"Paper texture: Mean RGB={mean_rgb}, StdDev Gray={std_gray:.3f}")
