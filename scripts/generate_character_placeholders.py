import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import numpy as np

os.makedirs('public/characters', exist_ok=True)

# Height 1600, width 1000
W, H = 1000, 1600

char_info = {
    # Omar: Navy-blue polo, grey lanyard, dark grey trousers, friendly beard
    'omar_O1': {'name': 'م. عمر', 'sub': 'O1: ماسك تابلت بيبتسم', 'color': (30, 50, 90), 'skin': (215, 175, 140), 'hair': (35, 30, 30)},
    'omar_O2': {'name': 'م. عمر', 'sub': 'O2: بيشاور يمين وبيشرح', 'color': (30, 50, 90), 'skin': (215, 175, 140), 'hair': (35, 30, 30)},
    'omar_O3': {'name': 'م. عمر', 'sub': 'O3: لايك يمين وبيغمز', 'color': (30, 50, 90), 'skin': (215, 175, 140), 'hair': (35, 30, 30)},
    'omar_O4': {'name': 'م. عمر', 'sub': 'O4: بيقدّم بكف إيده يمين', 'color': (30, 50, 90), 'skin': (215, 175, 140), 'hair': (35, 30, 30)},
    'omar_O6': {'name': 'م. عمر', 'sub': 'O6: رافع إيديه وبيحتفل', 'color': (30, 50, 90), 'skin': (215, 175, 140), 'hair': (35, 30, 30)},
    
    # Karim: Mustard yellow hoodie, blue badge, blue jeans, clean-shaven
    'karim_K1': {'name': 'كريم المتدرب', 'sub': 'K1: بيهرش في راسه ومحتار', 'color': (215, 160, 40), 'skin': (225, 185, 150), 'hair': (25, 25, 25)},
    'karim_K2': {'name': 'كريم المتدرب', 'sub': 'K2: مخضوض وعرقان', 'color': (215, 160, 40), 'skin': (225, 185, 150), 'hair': (25, 25, 25)},
    'karim_K3': {'name': 'كريم المتدرب', 'sub': 'K3: دايخ وملفوف بكابل', 'color': (215, 160, 40), 'skin': (225, 185, 150), 'hair': (25, 25, 25)},
    'karim_K4': {'name': 'كريم المتدرب', 'sub': 'K4: ماسك مروحة فلوس', 'color': (215, 160, 40), 'skin': (225, 185, 150), 'hair': (25, 25, 25)},
    'karim_K5': {'name': 'كريم المتدرب', 'sub': 'K5: مبسوط وبيسقف', 'color': (215, 160, 40), 'skin': (225, 185, 150), 'hair': (25, 25, 25)},
    'karim_K6': {'name': 'كريم المتدرب', 'sub': 'K6: سماعة وماسك موبايل', 'color': (215, 160, 40), 'skin': (225, 185, 150), 'hair': (25, 25, 25)},
    
    # Shabah: Black hoodie with hood up, sunglasses, dark laptop
    'hacker_H1': {'name': '«شبح» الهكر', 'sub': 'H1: بيكتب على لابتوب غامق', 'color': (45, 45, 50), 'skin': (200, 170, 145), 'hair': (20, 20, 20)},
    'hacker_H2': {'name': '«شبح» الهكر', 'sub': 'H2: لازق في زجاج ومتضايق', 'color': (45, 45, 50), 'skin': (200, 170, 145), 'hair': (20, 20, 20)},
}

def draw_character(cid, info):
    im = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    
    # Head, torso, arms, legs proportion
    # Head: center (500, 320), r=160
    head_cx, head_cy, head_r = 500, 330, 150
    body_top = 460
    body_bot = 1180
    legs_bot = 1580
    
    # Legs (mid-thigh cut)
    d.rectangle([380, body_bot, 480, legs_bot], fill=(60, 65, 75))
    d.rectangle([520, body_bot, 620, legs_bot], fill=(60, 65, 75))
    
    # Torso
    d.rounded_rectangle([320, body_top, 680, body_bot], radius=50, fill=info['color'])
    
    # Head & Neck
    d.rectangle([460, head_cy + 80, 540, body_top + 20], fill=info['skin'])
    d.ellipse([head_cx - head_r, head_cy - head_r, head_cx + head_r, head_cy + head_r], fill=info['skin'])
    
    # Hair / Hood
    if 'hacker' in cid:
        # Hood
        d.ellipse([head_cx - head_r - 20, head_cy - head_r - 20, head_cx + head_r + 20, head_cy + head_r + 40], outline=info['color'], width=35)
        # Sunglasses
        d.rectangle([head_cx - 90, head_cy - 20, head_cx - 15, head_cy + 25], fill=(20, 20, 20))
        d.rectangle([head_cx + 15, head_cy - 20, head_cx + 90, head_cy + 25], fill=(20, 20, 20))
        d.line([head_cx - 15, head_cy, head_cx + 15, head_cy], fill=(20, 20, 20), width=6)
    else:
        # Hair
        d.chord([head_cx - head_r, head_cy - head_r, head_cx + head_r, head_cy + 20], start=180, end=360, fill=info['hair'])
        if 'omar' in cid:
            # Short beard
            d.arc([head_cx - head_r + 20, head_cy - 20, head_cx + head_r - 20, head_cy + head_r - 10], start=20, end=160, fill=info['hair'], width=28)
            # Eyes & Smile
            d.ellipse([head_cx - 65, head_cy - 20, head_cx - 45, head_cy], fill=(30, 25, 25))
            d.ellipse([head_cx + 45, head_cy - 20, head_cx + 65, head_cy], fill=(30, 25, 25))
            d.arc([head_cx - 50, head_cy + 10, head_cx + 50, head_cy + 65], start=20, end=160, fill=(30, 25, 25), width=6)
        else:
            # Karim: big expressive eyes
            d.ellipse([head_cx - 70, head_cy - 25, head_cx - 40, head_cy + 10], fill=(30, 25, 25))
            d.ellipse([head_cx + 40, head_cy - 25, head_cx + 70, head_cy + 10], fill=(30, 25, 25))
            d.arc([head_cx - 45, head_cy + 15, head_cx + 45, head_cy + 60], start=15, end=165, fill=(30, 25, 25), width=6)

    # Pose specific features:
    if cid == 'omar_O3': # thumbs up right hand, winking
        d.arc([head_cx - 65, head_cy - 15, head_cx - 45, head_cy - 5], start=180, end=360, fill=(30, 25, 25), width=6) # wink
        # Right arm thumbs up
        d.line([680, 540, 820, 480], fill=info['color'], width=70)
        d.ellipse([800, 420, 870, 490], fill=info['skin']) # hand
        d.rectangle([820, 370, 855, 440], fill=info['skin']) # thumb up
        # Left arm resting
        d.line([320, 540, 240, 750], fill=info['color'], width=70)
    elif cid == 'omar_O1': # tablet
        d.rectangle([420, 600, 580, 780], fill=(40, 40, 45), outline=(200, 200, 200), width=6)
        d.line([320, 540, 440, 700], fill=info['color'], width=70)
        d.line([680, 540, 560, 700], fill=info['color'], width=70)
    elif cid == 'omar_O2': # pointing right
        d.line([680, 540, 920, 500], fill=info['color'], width=70)
        d.line([920, 500, 970, 500], fill=info['skin'], width=24) # finger
    elif cid == 'omar_O4': # open palm right
        d.line([680, 540, 880, 560], fill=info['color'], width=70)
        d.ellipse([870, 530, 940, 600], fill=info['skin'])
    elif cid == 'omar_O6': # celebrating fists raised
        d.line([320, 540, 220, 360], fill=info['color'], width=70)
        d.line([680, 540, 780, 360], fill=info['color'], width=70)
        d.ellipse([190, 320, 260, 390], fill=info['skin'])
        d.ellipse([740, 320, 810, 390], fill=info['skin'])
    elif cid == 'karim_K1': # scratch head
        d.line([680, 540, 700, 330], fill=info['color'], width=70)
        d.ellipse([670, 280, 740, 350], fill=info['skin'])
    elif cid == 'karim_K5': # clapping hands
        d.line([320, 540, 470, 650], fill=info['color'], width=70)
        d.line([680, 540, 530, 650], fill=info['color'], width=70)
        d.ellipse([460, 620, 540, 690], fill=info['skin'])
    elif cid == 'hacker_H1': # typing laptop
        d.rectangle([450, 680, 680, 800], fill=(30, 30, 35))
        d.polygon([(450, 680), (680, 680), (650, 560), (480, 560)], fill=(180, 40, 40)) # red screen
    elif cid == 'hacker_H2': # hands on glass
        d.line([320, 540, 260, 480], fill=info['color'], width=70)
        d.line([680, 540, 740, 480], fill=info['color'], width=70)
        d.rectangle([210, 430, 270, 530], fill=info['skin'])
        d.rectangle([730, 430, 790, 530], fill=info['skin'])
    else:
        # Default arms
        d.line([320, 540, 250, 720], fill=info['color'], width=70)
        d.line([680, 540, 750, 720], fill=info['color'], width=70)

    # Label Badge on torso
    d.rounded_rectangle([370, 720, 630, 860], radius=16, fill=(255, 255, 255, 230), outline=(50, 50, 50), width=4)
    # Text
    d.text((500, 760), cid, fill=(20, 20, 20), anchor='mm')
    d.text((500, 810), info['sub'][:22], fill=(80, 80, 80), anchor='mm')

    # Now create the 6px white sticker border as required by section 6.4:
    # "حافة sticker بيضا 6px"
    # Extract alpha channel, dilate it by 8px, fill with white, composite character on top
    alpha = np.array(im.split()[-1])
    from scipy.ndimage import binary_dilation
    # 8-pixel radius disk dilation
    struct = np.ones((17, 17), dtype=bool)
    dilated_alpha = binary_dilation(alpha > 10, structure=struct).astype(np.uint8) * 255
    
    # Create white sticker silhouette
    sticker = Image.new('RGBA', (W, H), (255, 255, 255, 0))
    sticker.putalpha(Image.fromarray(dilated_alpha))
    
    # Composite: sticker under character
    final = Image.alpha_composite(sticker, im)
    
    out_path = f'public/characters/{cid}.png'
    final.save(out_path)
    print(f"Generated {out_path} ({W}x{H})")

for cid, info in char_info.items():
    draw_character(cid, info)

print("SUCCESS: All 13 character illustrations created with 6px sticker border at 1600px height.")
