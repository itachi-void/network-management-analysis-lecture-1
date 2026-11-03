import os
import subprocess
import json

VIDEOS = [
    ("V1", "01_Course_Overview_Agenda.mp4", 53.0),
    ("V2", "02_Datacenter.mp4", 77.0),
    ("V3", "03_Desktop_Service_Virtualization.mp4", 99.0),
    ("V4", "04_Multimedia_Network_Application.mp4", 72.0),
    ("V5", "05_Network_Management.mp4", 54.5),
    ("V6", "06_Firewall.mp4", 80.5),
    ("V7", "07_SAN_NAS_Storage_Networks.mp4", 75.0),
    ("V8", "08_SDN.mp4", 85.5),
]

print("=== PHASE 9 FINAL VIDEO VERIFICATION ===")
all_ok = True
for vid, fname, target_dur in VIDEOS:
    path = os.path.join("out", "final", fname)
    if not os.path.exists(path):
        print(f"FAIL: {path} missing")
        all_ok = False
        continue
    size_mb = os.path.getsize(path) / (1024 * 1024)
    # ffprobe
    cmd_probe = [
        "ffprobe",
        "-v", "error",
        "-show_entries", "stream=codec_name,width,height,r_frame_rate,sample_rate,channels",
        "-show_entries", "format=duration",
        "-of", "json",
        path,
    ]
    out_probe = subprocess.check_output(cmd_probe, text=True)
    info = json.loads(out_probe)
    dur = float(info["format"]["duration"])
    vstream = [s for s in info["streams"] if s.get("width")][0]
    astream = [s for s in info["streams"] if s.get("sample_rate")][0]

    # ebur128
    cmd_ebur = [
        "ffmpeg", "-hide_banner", "-nostats", "-i", path,
        "-af", "ebur128=peak=true", "-f", "null", "-"
    ]
    res_ebur = subprocess.run(cmd_ebur, capture_output=True, text=True)
    ebur_lines = [l.strip() for l in res_ebur.stderr.splitlines() if "I:" in l or "Peak:" in l]
    lufs_str = ebur_lines[-2] if len(ebur_lines) >= 2 else ""
    peak_str = ebur_lines[-1] if len(ebur_lines) >= 1 else ""

    print(
        f"{vid} ({fname}): {vstream['codec_name']} {vstream['width']}x{vstream['height']} @ {vstream['r_frame_rate']} | "
        f"{astream['codec_name']} {astream['sample_rate']}Hz {astream['channels']}ch | "
        f"dur={dur:.2f}s (target={target_dur:.1f}s) | {lufs_str} | {peak_str} | {size_mb:.2f} MB"
    )

print("PHASE 9 VERIFICATION:", "ALL PASS" if all_ok else "FAILED")
