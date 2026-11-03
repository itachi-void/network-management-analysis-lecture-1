import os
from PIL import Image, ImageDraw, ImageFont

os.makedirs('out/debug', exist_ok=True)

# Regions definition from section 3.4
# (x1%, x2%, y1%, y2%, label)
regions = {
    's01_cloud_devices': [
        (1, 61, 6, 33, 'Cloud'),
        (0, 31, 44, 73, 'Laptop'),
        (62, 100, 32, 62, 'Desktop PC'),
        (44, 56, 68, 87, 'Smartphone'),
        (76, 100, 59, 87, 'Tablet'),
    ],
    's02_agenda_figure': [
        (0, 100, 0, 100, 'Agenda figure (white figurine + checkboxes)'),
    ],
    's06_paloalto_ngfw': [
        (5, 95, 4, 11, 'R_TITLE'),
        (25, 46, 15, 32, 'R_CLUSTER'),
        (75, 85, 17, 36, 'R_PANORAMA'),
        (85, 97, 19, 33, 'R_ADMINS'),
        (62, 77, 30, 39, 'R_POLICY'),
        (40, 49, 34, 40, 'R_GREENCARD'),
        (10, 39, 37, 85, 'R_LEFT_HOST'),
        (10, 39, 70, 85, 'R_PHYS'),
        (10, 39, 64, 72, 'R_HYPER'),
        (10, 39, 54, 67, 'R_VSW'),
        (10, 39, 38, 59, 'R_LEFT_TOP'),
        (18, 37, 40, 58, 'R_LEFT_VMS'),
        (11, 20, 42, 54, 'R_LEFT_NGFW'),
        (73, 81, 45, 56, 'R_RIGHT_NGFW'),
        (60, 98, 14, 42, 'R_TOPRIGHT'),
        (49, 62, 47, 65, 'R_INTERNET'),
        (37, 72, 62, 92, 'R_SWITCHES'),
        (2, 12, 57, 67, 'R_TS_LABEL'),
    ],
    's07_media_streaming': [
        (0, 100, 4, 12, 'MEDIA STREAMING DEV'),
        (0, 22, 22, 93, 'R_REMOTE'),
        (27, 99, 49, 95, 'R_CUBE'),
    ],
    's08_rack_servers': [
        (58, 66, 10, 40, 'R_DRIVE'),
        (8, 13, 0, 100, 'R_LEDS_BLUE'),
        (49, 53, 15, 60, 'R_LEDS_GREEN'),
    ],
    's10_fig8_33': [
        (16, 62, 6, 84, 'blob'),
        (46, 59, 0, 75, 'Firewall plane'),
        (69, 87, 28, 49, 'Public Internet'),
        (16, 86, 89.5, 98, 'Figure text'),
    ],
    's11_storage_media': [
        (0, 89, 37.5, 96, 'CD'),
        (40, 90, 11, 32, 'Memory cards'),
        (0, 34, 4, 36, 'FinePix camera'),
        (40, 57, 23.5, 34.5, 'Coin'),
        (94, 100, 2, 50, 'White body right edge'),
    ],
    's12_conduant_ltx3': [
        (10, 43, 23, 73, '4 HDDs Left'),
        (47, 84, 14, 50, '4 HDDs Right'),
        (31, 72, 16, 67, 'R_BOARD'),
        (10, 52, 10, 24, 'R_FANS'),
        (71, 81, 56, 63, 'R_PORTS'),
        (50, 59, 67, 78, 'R_LCD'),
        (78, 90, 51, 61, 'R_BRAND'),
    ],
    's13_compellent_racks': [
        (5, 99, 18, 97, 'Drive shelves'),
        (6, 75, 7, 18.5, 'R_CTRL'),
        (25, 75, 34, 58, 'R_KVM'),
    ],
    's14_network_3d': [
        (0, 17, 68, 80, 'R_SWP'),
        (45, 64, 69, 82, 'R_RVDF'),
        (1, 38, 51, 70, 'R_FW'),
        (39, 57, 50, 63, 'R_DMZ'),
        (62, 83, 36, 54, 'R_BAL'),
        (81, 100, 35, 44, 'R_LAN'),
        (82, 100, 50, 63, 'R_MOXA'),
        (26, 55, 0, 15, 'R_MORF'),
        (58, 86, 5, 26, 'R_CL'),
    ],
    's16_voip_globe': [
        (6.5, 27.5, 19, 43, 'Tablet 20:35'),
        (29, 40, 59, 86, 'Smartphone'),
        (63, 80.5, 33, 55.5, 'IP Phone'),
        (65, 92.5, 60, 81.5, 'Video IP Phone'),
        (32, 62, 1.5, 48, 'Globe'),
    ],
    's16_video_player': [
        (13, 23, 8, 17.5, '3:07'),
        (74.5, 88, 8, 17.5, '-39:04'),
        (20, 30, 0, 7, '3G'),
        (45, 58, 70, 85, 'Play button'),
    ],
    's16_cisco_phones': [
        (27, 50, 3, 42, 'P1 Top-Mid'),
        (65, 94, 0, 46, 'P2 Top-Right + Module'),
        (80, 94, 13, 46, 'P2 Expansion Module'),
        (9.5, 29, 27, 57, 'P3 Mid-Left'),
        (48, 72, 18, 57, 'P4 Mid'),
        (9.5, 31, 52, 94, 'P5 Bot-Left'),
        (32, 50, 46, 82, 'P6 Bot-Mid'),
        (51, 62, 62, 90, 'P7 Wireless on base'),
        (63, 93, 50, 97, 'P8 Color screen Bot-Right'),
    ],
}

colors = [
    '#D52739', '#1E7A45', '#003E7E', '#7E57C2', '#F79A52',
    '#0CB0F0', '#DC2E36', '#668A9C', '#2A2723', '#F5CD63'
]

# Find image files in public/slides
for stem, regs in regions.items():
    # find corresponding file
    matches = [f for f in os.listdir('public/slides') if f.startswith(stem)]
    if not matches:
        print(f"Warning: No file found for {stem}")
        continue
    img_name = matches[0]
    img_path = os.path.join('public/slides', img_name)
    
    with Image.open(img_path) as im:
        im = im.convert('RGB')
        w, h = im.size
        draw = ImageDraw.Draw(im)
        
        for idx, (x1, x2, y1, y2, label) in enumerate(regs):
            col = colors[idx % len(colors)]
            px1 = int(round(x1 * w / 100.0))
            px2 = int(round(x2 * w / 100.0))
            py1 = int(round(y1 * h / 100.0))
            py2 = int(round(y2 * h / 100.0))
            
            # Draw rectangle with thickness 3
            for offset in range(3):
                draw.rectangle([px1 - offset, py1 - offset, px2 + offset, py2 + offset], outline=col)
            
            # Draw label box
            draw.rectangle([px1, max(0, py1 - 16), px1 + len(label) * 8 + 6, max(16, py1)], fill=col)
            draw.text((px1 + 3, max(0, py1 - 15)), label, fill='white')
        
        out_file = os.path.join('out/debug', f'regions_{stem}.png')
        im.save(out_file)
        print(f"Saved {out_file} ({w}x{h}, {len(regs)} regions)")

print("SUCCESS: All region debug images generated.")
