#!/usr/bin/env python3
import sys, os, subprocess, json, re

def main():
    if len(sys.argv) < 3:
        print("Usage: python master_audio.py <input.mp4> <output.mp4>")
        sys.exit(1)
        
    in_file = sys.argv[1]
    out_file = sys.argv[2]
    
    os.makedirs(os.path.dirname(os.path.abspath(out_file)), exist_ok=True)
    
    pre = "highshelf=f=7000:g=-3"
    cmd_pass1 = [
        "ffmpeg", "-hide_banner", "-nostats", "-i", in_file, "-vn",
        "-af", f"{pre},loudnorm=I=-22:TP=-3:LRA=11:print_format=json",
        "-f", "null", "-"
    ]
    res1 = subprocess.run(cmd_pass1, capture_output=True, text=True, encoding="utf-8", errors="ignore")
    out1 = res1.stderr
    
    # Extract json block
    m = re.search(r'\{[^{}]*"input_i"[^{}]*\}', out1, re.DOTALL)
    if not m:
        print("Failed to parse loudnorm JSON pass 1 output:", out1)
        sys.exit(1)
        
    j = json.loads(m.group(0))
    input_i = j.get("input_i", "-22.0")
    input_tp = j.get("input_tp", "-3.0")
    input_lra = j.get("input_lra", "11.0")
    input_thresh = j.get("input_thresh", "-32.0")
    target_offset = j.get("target_offset", "0.0")
    
    cmd_pass2 = [
        "ffmpeg", "-y", "-v", "error", "-i", in_file, "-c:v", "copy",
        "-af", f"{pre},loudnorm=I=-22:TP=-3:LRA=11:measured_I={input_i}:measured_TP={input_tp}:measured_LRA={input_lra}:measured_thresh={input_thresh}:offset={target_offset}:linear=true,aresample=48000",
        "-c:a", "aac", "-b:a", "192k", "-ar", "48000", "-ac", "2", "-shortest",
        out_file
    ]
    res2 = subprocess.run(cmd_pass2, capture_output=True, text=True, encoding="utf-8", errors="ignore")
    if res2.returncode != 0:
        print("Error in pass 2:", res2.stderr)
        sys.exit(res2.returncode)
        
    cmd_check = [
        "ffmpeg", "-hide_banner", "-nostats", "-i", out_file, "-vn",
        "-af", "ebur128=peak=true", "-f", "null", "-"
    ]
    res3 = subprocess.run(cmd_check, capture_output=True, text=True, encoding="utf-8", errors="ignore")
    for line in res3.stderr.splitlines():
        if "I:" in line or "Peak:" in line:
            print(line.strip())

if __name__ == "__main__":
    main()
