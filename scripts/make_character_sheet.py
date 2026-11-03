import os
from PIL import Image, ImageDraw, ImageFont

os.makedirs('out/debug', exist_ok=True)

chars = [
    'omar_O1', 'omar_O2', 'omar_O3', 'omar_O4', 'omar_O6',
    'karim_K1', 'karim_K2', 'karim_K3', 'karim_K4', 'karim_K5', 'karim_K6',
    'hacker_H1', 'hacker_H2'
]

# Create a grid: 5 columns x 3 rows
cols = 5
rows = 3
tile_w, tile_h = 320, 512
sheet_w = cols * tile_w
sheet_h = rows * tile_h

sheet = Image.new('RGB', (sheet_w, sheet_h), (248, 244, 236)) # paper color
draw = ImageDraw.Draw(sheet)

for idx, cid in enumerate(chars):
    r = idx // cols
    c = idx % cols
    x = c * tile_w
    y = r * tile_h
    
    # Draw tile border
    draw.rectangle([x + 6, y + 6, x + tile_w - 6, y + tile_h - 6], outline=(200, 195, 185), width=2)
    
    cpath = f'public/characters/{cid}.png'
    if os.path.exists(cpath):
        with Image.open(cpath) as im:
            # resize to fit
            im_thumb = im.resize((tile_w - 40, int((tile_w - 40) * 1.6)), Image.Resampling.LANCZOS)
            sheet.paste(im_thumb, (x + 20, y + 20), im_thumb)
    
    # Title
    draw.rectangle([x + 10, y + tile_h - 36, x + tile_w - 10, y + tile_h - 10], fill=(42, 39, 35))
    draw.text((x + tile_w // 2, y + tile_h - 24), cid, fill=(255, 255, 255), anchor='mm')

sheet.save('out/debug/characters_sheet.png', quality=85)
print("SUCCESS: Created out/debug/characters_sheet.png")
