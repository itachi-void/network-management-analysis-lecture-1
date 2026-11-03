import subprocess
import sys
import os
import math
from PIL import Image

def main():
    vid_num = sys.argv[1]      # e.g. "V2"
    mp4_path = sys.argv[2]     # e.g. "out/final/02_Datacenter.mp4"
    dur_sec = float(sys.argv[3]) # e.g. 77.0

    card_path = f"out/debug/{vid_num}_card.png"
    sheet_path = f"out/debug/{vid_num}_sheet.png"
    preview_path = f"work/{vid_num.lower()}_preview.jpg"

    num_tiles = math.ceil(dur_sec / 2.0) + 1
    cols = 6
    rows = math.ceil(num_tiles / cols)

    cmd = [
        "ffmpeg", "-y", "-i", mp4_path,
        "-vf", f"fps=1/2,scale=480:270,tile={cols}x{rows}",
        "-frames:v", "1",
        sheet_path
    ]
    subprocess.run(cmd, check=True)

    card = Image.open(card_path).convert("RGB")
    sheet = Image.open(sheet_path).convert("RGB")

    card_w = 1024
    card_h = int(card.height * (card_w / card.width))
    card_r = card.resize((card_w, card_h), Image.Resampling.LANCZOS)

    sheet_w = 1024
    sheet_h = int(sheet.height * (sheet_w / sheet.width))
    sheet_r = sheet.resize((sheet_w, sheet_h), Image.Resampling.LANCZOS)

    combined = Image.new("RGB", (1024, card_h + sheet_h + 20), (245, 240, 230))
    combined.paste(card_r, (0, 0))
    combined.paste(sheet_r, (0, card_h + 20))
    combined.save(preview_path, "JPEG", quality=78, optimize=True)
    print(f"Saved {sheet_path} ({os.path.getsize(sheet_path)} B) and {preview_path} ({os.path.getsize(preview_path)} B)")

if __name__ == "__main__":
    main()
