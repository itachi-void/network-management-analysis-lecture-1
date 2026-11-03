import zipfile, os
from PIL import Image

mapping = [
    ('image1.png', 's01_avatar_a.png', (45, 45)),
    ('image2.png', 's01_cloud_devices.png', (720, 1080)),
    ('image3.jpeg', 's02_agenda_figure.jpg', (256, 256)),
    ('image4.png', 's04_datacenter.png', (470, 432)),
    ('image5.png', 's05_virtualization_banner.png', (1920, 365)),
    ('image6.jpeg', 's06_paloalto_ngfw.jpg', (800, 600)),
    ('image7.png', 's07_media_streaming.png', (720, 1080)),
    ('image8.png', 's08_rack_servers.png', (1920, 365)),
    ('image9.png', 's09_firewall_icon.png', (720, 1080)),
    ('image10.png', 's10_fig8_33.png', (1366, 768)),
    ('image11.png', 's11_storage_media.png', (720, 1080)),
    ('image12.jpeg', 's12_conduant_ltx3.jpg', (900, 600)),
    ('image13.jpeg', 's13_compellent_racks.jpg', (400, 542)),
    ('image14.png', 's14_network_3d.png', (720, 1080)),
    ('image15.png', 's15_traditional_vs_sdn.png', (590, 245)),
    ('image16.jpeg', 's16_voip_globe.jpg', (460, 325)),
    ('image17.jpeg', 's16_video_player.jpg', (275, 183)),
    ('image18.gif', 's16_cisco_phones.png', (470, 250)),
]

os.makedirs('public/slides', exist_ok=True)
all_ok = True

with zipfile.ZipFile('inputs/lecture.pptx') as z:
    for orig, dest, (exp_w, exp_h) in mapping:
        data = z.read(f'ppt/media/{orig}')
        dest_path = os.path.join('public/slides', dest)
        if orig.endswith('.gif'):
            import io
            im = Image.open(io.BytesIO(data))
            im.seek(0)
            im.convert('RGBA').save(dest_path)
        else:
            with open(dest_path, 'wb') as f:
                f.write(data)
        
        with Image.open(dest_path) as im:
            w, h = im.size
            ok = (w == exp_w and h == exp_h)
            if not ok: all_ok = False
            status = "OK" if ok else "FAIL"
            print(f"{dest:30} {w}x{h} (expected {exp_w}x{exp_h}) -> {status}")

if not all_ok:
    print("ERROR: Some dimensions mismatch!")
    exit(1)
print("SUCCESS: All 18 slides extracted with exact dimensions.")
