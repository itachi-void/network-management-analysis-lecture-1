#!/usr/bin/env python3
# scripts/verify_phase0.py — فحص المرحلة 0 على «المحتوى» مش على وجود الملفات (ملحق F — انسخه زي ما هو).
# الاستخدام:  python3 scripts/verify_phase0.py                 ← كل البنود
#             python3 scripts/verify_phase0.py assets glyphs   ← بنود معيّنة
# البنود: assets sfx regions glyphs bidi cal icons characters notes
# المتطلبات: Python 3.9+ و Pillow (python3 -m pip install pillow). بيتشغّل من أي مكان (بيروح لجذر المشروع لوحده).
# كل رقم هنا اتقاس على مخرجات حقيقية (الريفرنس + رندر Remotion 4). ممنوع تغيّر رقم عشان بند يعدّي — صلّح المخرج نفسه.
import sys, os, re, wave, array, math
if sys.platform == 'win32':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
        sys.stderr.reconfigure(encoding='utf-8')
    except Exception:
        pass
from PIL import Image, ImageChops, ImageDraw, ImageStat

os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
FAILS = []

def check(g, cond, msg):
    print(('PASS' if cond else 'FAIL') + f' [{g}] {msg}')
    if not cond:
        FAILS.append(f'[{g}] {msg}')
    return cond

def exists(g, p):
    return os.path.isfile(p) or check(g, False, f'missing file: {p}')

def L(q): return 0.299 * q[0] + 0.587 * q[1] + 0.114 * q[2]
def rgb(p): return Image.open(p).convert('RGB')
def px(img, box): return img.crop(box).getdata()
def count(img, box, f): return sum(1 for q in px(img, box) if f(q))
def near(c, tol): return lambda q: abs(q[0] - c[0]) <= tol and abs(q[1] - c[1]) <= tol and abs(q[2] - c[2]) <= tol
def ink(thr=110): return lambda q: L(q) < thr

def bbox(img, box, f):
    x0, y0, x1, y1 = box
    w = x1 - x0
    xs, ys = [], []
    for i, q in enumerate(px(img, box)):
        if f(q):
            xs.append(x0 + i % w)
            ys.append(y0 + i // w)
    if not xs:
        return {'n': 0, 'w': 0, 'cx': -1, 'cy': -1}
    return {'n': len(xs), 'x0': min(xs), 'x1': max(xs), 'y0': min(ys), 'y1': max(ys), 'w': max(xs) - min(xs) + 1,
            'cx': (min(xs) + max(xs)) / 2, 'cy': (min(ys) + max(ys)) / 2}

def centroid(img, box, f):
    x0, y0, x1, y1 = box
    w = x1 - x0
    n = sx = sy = 0
    for i, q in enumerate(px(img, box)):
        if f(q):
            n += 1
            sx += x0 + i % w
            sy += y0 + i // w
    return (n, sx / n, sy / n) if n else (0, -1, -1)

PAPER = (248, 244, 236)
GREEN, HILITE, RED = (0x4B, 0xD4, 0x7E), (0xFC, 0xF0, 0xB2), (0xD5, 0x27, 0x39)

# ---------------------------------------------------------------- assets (3.2 → 3.6)
SLIDES = {  # الاسم: (العرض، الارتفاع، معامل التكبير في 3.3)
    's01_avatar_a.png': (45, 45, 1), 's01_cloud_devices.png': (720, 1080, 1), 's02_agenda_figure.jpg': (256, 256, 3),
    's04_datacenter.png': (470, 432, 3), 's05_virtualization_banner.png': (1920, 365, 1), 's06_paloalto_ngfw.jpg': (800, 600, 4),
    's07_media_streaming.png': (720, 1080, 1), 's08_rack_servers.png': (1920, 365, 1), 's09_firewall_icon.png': (720, 1080, 1),
    's10_fig8_33.png': (1366, 768, 1), 's11_storage_media.png': (720, 1080, 1), 's12_conduant_ltx3.jpg': (900, 600, 2),
    's13_compellent_racks.jpg': (400, 542, 2), 's14_network_3d.png': (720, 1080, 1), 's15_traditional_vs_sdn.png': (590, 245, 3),
    's16_voip_globe.jpg': (460, 325, 3), 's16_video_player.jpg': (275, 183, 4), 's16_cisco_phones.png': (470, 250, 3)}

def g_assets():
    g = 'assets'
    found = sorted(f for f in os.listdir('public/slides') if not f.startswith('.')) if os.path.isdir('public/slides') else []
    check(g, found == sorted(SLIDES), f'public/slides has exactly the 18 files of 3.2 ({len(found)} found)')
    for n, (w, h, f) in SLIDES.items():
        p, u = f'public/slides/{n}', f'public/slides_up/{n}'
        if exists(g, p):
            s = Image.open(p).size
            check(g, s == (w, h), f'{p} = {w}x{h} (got {s[0]}x{s[1]})')
        if exists(g, u):
            s = Image.open(u).size
            check(g, abs(s[0] - w * f) <= 2 and abs(s[1] - h * f) <= 2, f'{u} = x{f} → {w * f}x{h * f} (got {s[0]}x{s[1]})')
    o, c = 'public/slides/s10_fig8_33.png', 'public/slides_up/s10_fig8_33_clean.png'
    if exists(g, o) and exists(g, c):
        O, C = rgb(o), rgb(c)
        if check(g, C.size == O.size, '_clean has the size of the original (1366x768)'):
            box = (995, 689, 1321, 713)
            dark = count(O, box, ink(100))
            lost = sum(1 for a, b in zip(px(O, box), px(C, box)) if L(a) < 100 <= L(b))
            check(g, dark >= 600 and lost == 0, f'_clean keeps every dark caption pixel in x995-1320 y689-712 (dark={dark}, erased={lost})')
            nonwhite = lambda q: min(q) < 250
            a0, a1 = count(O, (995, 644, 1320, 689), nonwhite), count(C, (995, 644, 1320, 689), nonwhite)
            check(g, a0 > 1000 and a1 == 0, f'_clean removed "Activate Windows" (non-white px {a0} → {a1})')
            b0, b1 = count(O, (1305, 0, 1345, 22), nonwhite), count(C, (1305, 0, 1345, 22), nonwhite)
            check(g, b0 > 10 and b1 == 0, f'_clean removed the small arrow top-right (non-white px {b0} → {b1})')
            d = ImageChops.difference(O, C)
            dr = ImageDraw.Draw(d)
            dr.rectangle((995, 644, 1319, 699), fill=(0, 0, 0))
            dr.rectangle((1305, 0, 1344, 21), fill=(0, 0, 0))
            check(g, d.getbbox() is None, '_clean: no pixel changed outside the 2 rectangles of the 3.5 command')
    p = 'public/paper.png'
    if exists(g, p):
        P = rgb(p)
        st = ImageStat.Stat(P)
        check(g, P.size == (1920, 1080), 'paper.png = 1920x1080')
        check(g, all(abs(st.mean[i] - PAPER[i]) <= 3 for i in range(3)), f'paper mean ≈ #F8F4EC ±3 (got {[round(v, 1) for v in st.mean]})')
        check(g, all(1.2 <= st.stddev[i] <= 2.2 for i in range(3)), f'paper grain std 1.2–2.2 (got {[round(v, 2) for v in st.stddev]})')

# ---------------------------------------------------------------- sfx (ملحق B)
SFX_RMS = {'pencil_loop': -34, 'marker_loop': -32, 'highlight_swipe': -40, 'whoosh_soft': -30, 'page_turn': -33,
           'zoom_in': -34, 'hum_server': -42, 'typing_soft': -36}
SFX_PEAK = {**{s: -12 for s in 'pop_soft tick_soft check_soft lock_click bonk_soft stamp_thud chime_success finale_arp lightbulb_ding media_play warn_soft'.split()},
            **{s: -14 for s in 'boing_question glass_knock shield_clink squeeze phone_trill radar_ping'.split()},
            **{s: -16 for s in 'coins_soft signal_pips beep_soft remote_click warn_beeps hdd_whir'.split()}}

def wav_load(p):
    w = wave.open(p, 'rb')
    info = (w.getframerate(), w.getnchannels(), w.getsampwidth())
    a = array.array('h', w.readframes(w.getnframes()))
    w.close()
    if sys.byteorder == 'big':
        a.byteswap()
    return info, a

def db(v): return -999.0 if v <= 0 else 20 * math.log10(v / 32768)

def g_sfx():
    g = 'sfx'
    want = sorted(list(SFX_RMS) + list(SFX_PEAK))
    found = sorted(f[:-4] for f in os.listdir('public/sfx') if f.endswith('.wav')) if os.path.isdir('public/sfx') else []
    check(g, found == want, f'public/sfx has exactly the 31 sounds of 7.2 ({len(found)} found)')
    for n in want:
        p = f'public/sfx/{n}.wav'
        if not exists(g, p):
            continue
        info, a = wav_load(p)
        if not check(g, info == (48000, 2, 2) and len(a) > 0, f'{n}: 48 kHz / stereo / 16-bit (got {info})'):
            continue
        if n in SFX_RMS:
            v, t, kind = db(math.sqrt(sum(x * x for x in a) / len(a))), SFX_RMS[n], 'RMS'
        else:
            v, t, kind = db(max(abs(x) for x in a)), SFX_PEAK[n], 'peak'
        check(g, abs(v - t) <= 1.5, f'{n}: {kind} {v:.1f} dBFS (target {t} ±1.5 → make_sfx.sh normalised it)')

# ---------------------------------------------------------------- regions (0.2 خطوة 5)
REGION_IMAGES = ['s01_cloud_devices.png', 's06_paloalto_ngfw.jpg', 's07_media_streaming.png', 's08_rack_servers.png',
                 's10_fig8_33.png', 's11_storage_media.png', 's12_conduant_ltx3.jpg', 's13_compellent_racks.jpg',
                 's14_network_3d.png', 's16_voip_globe.jpg', 's16_video_player.jpg', 's16_cisco_phones.png']

def g_regions():
    g = 'regions'
    for n in REGION_IMAGES:
        p, o = f'out/debug/regions_{n.rsplit(".", 1)[0]}.png', f'public/slides/{n}'
        if exists(g, p) and exists(g, o):
            R, O = rgb(p), rgb(o)
            if check(g, R.size == O.size, f'{p} drawn on the original ({O.size[0]}x{O.size[1]})'):
                isred, wasred = near(RED, 50), near(RED, 90)
                d = sum(1 for a, b in zip(R.getdata(), O.getdata()) if isred(a) and not wasred(b))
                check(g, d >= 150, f'{p}: RED region rectangles drawn ({d} new red px)')

# ---------------------------------------------------------------- glyphs (0.5)
def g_glyphs():
    g, p = 'glyphs', 'out/debug/glyphs.png'
    if not exists(g, p):
        return
    G = rgb(p)
    check(g, G.size == (1920, 1080), 'glyphs.png = 1920x1080')
    for i, (font, y) in enumerate([('Aref Ruqaa', 200), ('Cairo', 420), ('Caveat Brush', 640), ('Kalam', 860)]):
        b = bbox(G, (60, y - 70, 1860, y + 70), ink(120))
        check(g, b['n'] >= 2500 and b['w'] >= 800, f'row {i + 1} ({font}) visible around y={y} (ink px={b["n"]}, width={b["w"]})')
    col = count(G, (0, 0, 1920, 1080), lambda q: max(q) - min(q) > 0.45 * max(q) and L(q) < 230)
    check(g, col <= 40, f'no colour (emoji) glyphs (saturated px={col})')

# ---------------------------------------------------------------- bidi (0.7)
def components(mask, w, h):
    seen, out = bytearray(w * h), []
    for s in range(w * h):
        if mask[s] and not seen[s]:
            seen[s] = 1
            stack, xs, ys = [s], [], []
            while stack:
                k = stack.pop()
                x, y = k % w, k // w
                xs.append(x)
                ys.append(y)
                for dy in (-1, 0, 1):
                    for dx in (-1, 0, 1):
                        nx, ny = x + dx, y + dy
                        if 0 <= nx < w and 0 <= ny < h:
                            j = ny * w + nx
                            if mask[j] and not seen[j]:
                                seen[j] = 1
                                stack.append(j)
            out.append((min(xs), min(ys), max(xs), max(ys)))
    return sorted(out)

def g_bidi():
    g = 'bidi'
    for k in (1, 2):
        p = f'out/debug/bidi_{k}.png'
        if not exists(g, p):
            continue
        B, box = rgb(p), (100, 960, 1820, 1052)
        b = bbox(B, box, ink(130))
        if not check(g, b['n'] >= 600, f'bidi_{k}: caption visible at full opacity (ink px={b["n"]})'):
            continue
        check(g, abs(b['cx'] - 960) <= 30 and 995 <= b['cy'] <= 1025, f'bidi_{k}: caption centred near (960, 1006) (got ({b["cx"]:.0f}, {b["cy"]:.0f}))')
        w, h = box[2] - box[0], box[3] - box[1]
        mask = bytes(1 if L(q) < 130 else 0 for q in px(B, box))
        x0, y0, x1, y1 = components(mask, w, h)[0]
        cw, ch, cy = x1 - x0 + 1, y1 - y0 + 1, box[1] + (y0 + y1) / 2
        check(g, cw <= 14 and ch <= 14 and cy >= b['cy'], f'bidi_{k}: left-most glyph is the full stop on the baseline (w={cw}, h={ch})')

# ---------------------------------------------------------------- cal (0.6)
TITLE_W, ITEM_W, CAPTION_W = 535, (293, 678, 668), 1007   # اتقاسوا على الريفرنس عند 23.8 ث
ITEM_Y = (440, 615, 790)

def within(v, target, pct): return abs(v - target) <= target * pct

def wav_rms_db(a, sr, ch, t0, t1):
    seg = a[int(t0 * sr) * ch:int(t1 * sr) * ch]
    return db(math.sqrt(sum(x * x for x in seg) / len(seg))) if seg else -999.0

def g_cal():
    g = 'cal'
    p = 'out/debug/cal_ours.png'
    if exists(g, p):
        C = rgb(p)
        m = ImageStat.Stat(C.crop((30, 30, 71, 71))).mean
        check(g, all(abs(m[i] - PAPER[i]) <= 3 for i in range(3)), f'paper colour top-left ≈ #F8F4EC ±3 (got {[round(v) for v in m]})')
        for name, box, key, t in [('left', (92, 250, 120, 850), 'cx', 105), ('right', (1168, 250, 1196, 850), 'cx', 1182),
                                  ('top', (200, 128, 1100, 160), 'cy', 144), ('bottom', (200, 901, 1100, 933), 'cy', 917)]:
            b = bbox(C, box, ink(110))
            check(g, b['n'] >= 1200 and abs(b[key] - t) <= 6, f'card {name} edge at {t} ±6 (got {b[key]:.0f}, ink px={b["n"]})')
        b = bbox(C, (150, 195, 1150, 292), ink(110))
        check(g, within(b['w'], TITLE_W, 0.05) and abs(b['cx'] - 644) <= 20 and abs(b['cy'] - 252) <= 20,
              f'title width {TITLE_W} ±5% centred (644, 250) (got w={b["w"]} at ({b["cx"]:.0f}, {b["cy"]:.0f}))')
        b = bbox(C, (150, 293, 1150, 306), ink(110))
        check(g, within(b['w'], 920, 0.05) and abs(b['cy'] - 298) <= 5, f'underline x185→1105 at y298 (got w={b["w"]}, y={b["cy"]:.0f})')
        for i, y in enumerate(ITEM_Y):
            b = bbox(C, (150, y - 45, 1000, y + 45), ink(110))
            check(g, within(b['w'], ITEM_W[i], 0.05) and abs(b['cx'] - 592) <= 20 and abs(b['cy'] - y) <= 20,
                  f'item {i + 1} width {ITEM_W[i]} ±5% centred (592, {y}) (got w={b["w"]} at ({b["cx"]:.0f}, {b["cy"]:.0f}))')
            n, cx, cy = centroid(C, (1000, y - 70, 1160, y + 70), near(GREEN, 45))
            check(g, n >= 300 and abs(cx - 1077) <= 20 and abs(cy - y) <= 25, f'check {i + 1} green at (1077, {y}) (got {n} px at ({cx:.0f}, {cy:.0f}))')
            hl = count(C, (150, y - 50, 1000, y + 50), near(HILITE, 14))
            need = 5000 if i < 2 else 800
            check(g, hl >= need, f'highlight {i + 1} present (≥{need} px, got {hl})')
        b = bbox(C, (100, 975, 1820, 1045), ink(140))
        check(g, within(b['w'], CAPTION_W, 0.05) and abs(b['cx'] - 960) <= 20 and 1000 <= b['cy'] <= 1022,
              f'caption 45px: width {CAPTION_W} ±5% centred (960, 1006) (got w={b["w"]} at ({b["cx"]:.0f}, {b["cy"]:.0f}))')
        q = list(C.crop((1330, 150, 1830, 1000)).reduce(2).getdata())
        frac = sum(1 for v in q if abs(v[0] - PAPER[0]) + abs(v[1] - PAPER[1]) + abs(v[2] - PAPER[2]) > 40) / len(q)
        check(g, frac >= 0.15, f'Omar O3 on the right ({frac:.0%} of his box is drawn)')
    p = 'out/debug/cal_compare.png'
    if exists(g, p):
        check(g, Image.open(p).size == (3840, 1080), 'cal_compare.png = reference | ours side by side (3840x1080)')
    # الترتيب في كل بند: الكلام ← الصح ← التظليل (بند 1)
    frames = {f: f'out/debug/cal_f{f:03d}.png' for f in (34, 41, 51, 110, 115)}
    if all(exists(g, v) for v in frames.values()):
        F = {f: rgb(v) for f, v in frames.items()}
        t1 = count(F[34], (150, 395, 1000, 485), ink(110))
        g34 = count(F[34], (1000, 370, 1160, 510), near(GREEN, 45))
        h34 = count(F[34], (150, 390, 1000, 490), near(HILITE, 14))
        check(g, t1 >= 2000 and g34 < 50 and h34 < 300, f'frame 34: item 1 written, no check, no highlight yet (ink={t1}, green={g34}, hilite={h34})')
        g41 = count(F[41], (1000, 370, 1160, 510), near(GREEN, 45))
        h41 = count(F[41], (150, 390, 1000, 490), near(HILITE, 14))
        check(g, g41 >= 300 and h41 < 600, f'frame 41: check 1 drawn, highlight not yet (green={g41}, hilite={h41})')
        h51 = count(F[51], (150, 390, 1000, 490), near(HILITE, 14))
        check(g, h51 >= 5000, f'frame 51: highlight 1 done (hilite={h51})')
        d = ImageChops.difference(F[110], F[115]).convert('L').point(lambda v: 255 if v > 8 else 0)
        moved = sum(1 for v in d.getdata() if v)
        check(g, moved <= 200, f'frames 110 vs 115 identical → nothing jitters (changed px={moved})')
    p = 'out/debug/cal_audio.wav'
    if exists(g, p):
        (sr, ch, sw), a = wav_load(p)
        for t0, t1 in [(1.09, 1.19), (2.14, 2.44), (3.39, 3.69), (4.64, 5.10)]:
            v = wav_rms_db(a, sr, ch, t0, t1)
            check(g, v < -60, f'audio silent {t0}–{t1} s → loops cut to the drawing (got {v:.1f} dBFS)')
        for t0, t1 in [(0.02, 0.10), (1.23, 1.38), (1.47, 1.60), (2.48, 2.65), (3.73, 3.90)]:
            v = wav_rms_db(a, sr, ch, t0, t1)
            check(g, v > -50, f'audio present {t0}–{t1} s (got {v:.1f} dBFS)')

# ---------------------------------------------------------------- icons (0.5)
def g_icons():
    g, p = 'icons', 'out/debug/icons.png'
    if exists(g, p):
        I = rgb(p)
        w, h = I.size
        q = list(I.reduce(2).getdata())
        frac = sum(1 for v in q if abs(v[0] - PAPER[0]) + abs(v[1] - PAPER[1]) + abs(v[2] - PAPER[2]) > 60) / len(q)
        check(g, w >= 1600 and h >= 900 and 0.04 <= frac <= 0.70, f'icons.png ≥1600x900 and really drawn ({w}x{h}, {frac:.1%} ink/colour)')

# ---------------------------------------------------------------- characters (6.4)
CHARS = ['omar_O1', 'omar_O2', 'omar_O3', 'omar_O4', 'omar_O6', 'karim_K1', 'karim_K2', 'karim_K3', 'karim_K4', 'karim_K5',
         'karim_K6', 'hacker_H1', 'hacker_H2']

def g_characters():
    g = 'characters'
    for n in CHARS:
        p = f'public/characters/{n}.png'
        if not exists(g, p):
            continue
        im = Image.open(p)
        alpha = im.mode in ('RGBA', 'LA') or (im.mode == 'P' and 'transparency' in im.info)
        if not check(g, alpha, f'{n}: PNG with real transparency (mode {im.mode})'):
            continue
        im = im.convert('RGBA')
        w, h = im.size
        check(g, 1600 <= h <= 1640 and 450 <= w <= 1500, f'{n}: {w}x{h} (height 1600–1640)')
        a = im.getchannel('A')
        edge = max(a.crop((0, 0, w, 6)).getextrema()[1], a.crop((0, 0, 6, h)).getextrema()[1], a.crop((w - 6, 0, w, h)).getextrema()[1])
        check(g, edge <= 10, f'{n}: transparent margin top/left/right (max alpha {edge})')
        q = [v for v in im.reduce(4).getdata()]
        solid = [v for v in q if v[3] > 200]
        frac = len(solid) / len(q)
        check(g, 0.15 <= frac <= 0.85, f'{n}: figure fills {frac:.0%} of the canvas (15–85%)')
        bins = {}
        for v in solid:
            k = (v[0] >> 4, v[1] >> 4, v[2] >> 4)
            bins[k] = bins.get(k, 0) + 1
        rich = sum(1 for c in bins.values() if c >= max(3, len(solid) // 2000))
        check(g, rich >= 16, f'{n}: real shaded illustration, not a flat placeholder ({rich} colour bins, need ≥16)')
    p = 'out/debug/characters_sheet.png'
    if exists(g, p):
        check(g, Image.open(p).size[0] >= 1500, 'characters_sheet.png = contact sheet of the 13 poses')

# ---------------------------------------------------------------- notes (الفحص بالعين — قاعدة 19)
VISUAL = ['public/slides_up/s10_fig8_33_clean.png', 'out/debug/regions_*.png', 'out/debug/glyphs.png', 'out/debug/bidi_1.png',
          'out/debug/bidi_2.png', 'out/debug/cal_compare.png', 'out/debug/icons.png', 'out/debug/characters_sheet.png']

def g_notes():
    g = 'notes'
    if not exists(g, 'NOTES.md'):
        return
    t = open('NOTES.md', encoding='utf-8').read()
    for v in VISUAL:
        pat = re.compile(r'^[ \t]*[-*]?[ \t]*\[VISUAL\][ \t]+' + re.escape(v) + r'[ \t]+[—–-]+[ \t]*PASS[ \t]*[—–-]+[ \t]*\S.{9,}$', re.M)
        check(g, bool(pat.search(t)), f'NOTES.md has "- [VISUAL] {v} — PASS — <what you actually saw>"')

GROUPS = {'assets': g_assets, 'sfx': g_sfx, 'regions': g_regions, 'glyphs': g_glyphs, 'bidi': g_bidi, 'cal': g_cal,
          'icons': g_icons, 'characters': g_characters, 'notes': g_notes}

if __name__ == '__main__':
    sel = sys.argv[1:] or list(GROUPS)
    for s in sel:
        if s not in GROUPS:
            print('unknown group:', s, '— use:', ' '.join(GROUPS))
            sys.exit(2)
        GROUPS[s]()
    print('PHASE 0: ALL PASS' if not FAILS else f'PHASE 0: {len(FAILS)} FAIL(S)')
    sys.exit(0 if not FAILS else 1)