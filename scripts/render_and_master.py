import sys
import subprocess
import os

VIDEOS = {
    "V1": ("01_Course_Overview_Agenda.mp4", 53.0),
    "V2": ("02_Datacenter.mp4", 77.0),
    "V3": ("03_Desktop_Service_Virtualization.mp4", 99.0),
    "V4": ("04_Multimedia_Network_Application.mp4", 72.0),
    "V5": ("05_Network_Management.mp4", 54.5),
    "V6": ("06_Firewall.mp4", 80.5),
    "V7": ("07_SAN_NAS_Storage_Networks.mp4", 75.0),
    "V8": ("08_SDN.mp4", 85.5),
}

if len(sys.argv) < 2:
    print("Usage: python render_and_master.py <V1..V8> [...] or 'all'")
    sys.exit(1)

targets = []
if sys.argv[1].lower() == "all":
    targets = list(VIDEOS.keys())
else:
    for arg in sys.argv[1:]:
        v = arg.upper()
        if v in VIDEOS:
            targets.append(v)
        else:
            print(f"Unknown video: {v}")
            sys.exit(1)

for v_id in targets:
    fname, dur = VIDEOS[v_id]
    raw_path = f"out/raw/{fname}"
    final_path = f"out/final/{fname}"

    print(f"=== RENDERING {v_id} ({fname}) ===")
    cmd_render = [
        "npx", "remotion", "render", "src/index.ts", v_id, raw_path, "--gl=angle"
    ]
    res1 = subprocess.run(cmd_render, shell=True)
    if res1.returncode != 0:
        print(f"Render failed for {v_id}")
        sys.exit(res1.returncode)

    print(f"=== MASTERING AUDIO FOR {v_id} ===")
    cmd_master = [
        "python", "scripts/master_audio.py", raw_path, final_path
    ]
    res2 = subprocess.run(cmd_master)
    if res2.returncode != 0:
        print(f"Mastering failed for {v_id}")
        sys.exit(res2.returncode)

    print(f"=== {v_id} COMPLETED SUCCESSFULLY ===")

print("=== ALL REQUESTED RENDERS COMPLETED ===")
