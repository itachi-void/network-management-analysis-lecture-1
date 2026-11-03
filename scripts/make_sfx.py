import os, subprocess, re, sys, math

FFMPEG = r"C:\Users\itachi\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-9.0.2-full_build\bin\ffmpeg.exe"
if not os.path.exists(FFMPEG):
    # Try system ffmpeg
    FFMPEG = "ffmpeg"

OUT = sys.argv[1] if len(sys.argv) > 1 else "public/sfx"
os.makedirs(OUT, exist_ok=True)
SR = 48000

def run_cmd(cmd):
    p = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True, shell=False)
    if p.returncode != 0:
        print(f"Command failed: {' '.join(cmd)}\nStderr: {p.stderr}")
        sys.exit(1)
    return p.stdout, p.stderr

print(f"Generating 31 sound effects in {OUT} using ffmpeg...")

# 1. Noise sounds
noise_cmds = [
    ("whoosh_soft", "anoisesrc=d=0.45:c=pink:a=0.5:seed=11",
     "highpass=f=180,lowpass=f=1300,afade=t=in:st=0:d=0.20:curve=qsin,afade=t=out:st=0.20:d=0.25:curve=qsin,volume=0.55"),
    ("pencil_loop", "anoisesrc=d=4:c=pink:a=0.5:seed=7",
     "highpass=f=1400,lowpass=f=4800,tremolo=f=7:d=0.45,volume=0.30"),
    ("marker_loop", "anoisesrc=d=4:c=pink:a=0.5:seed=21",
     "highpass=f=550,lowpass=f=3000,tremolo=f=5:d=0.35,volume=0.38"),
    ("highlight_swipe", "anoisesrc=d=0.35:c=pink:a=0.5:seed=5",
     "highpass=f=2200,lowpass=f=6500,afade=t=in:st=0:d=0.05,afade=t=out:st=0.10:d=0.25:curve=qsin,volume=0.22"),
    ("page_turn", "anoisesrc=d=0.5:c=pink:a=0.5:seed=3",
     "highpass=f=900,lowpass=f=5500,tremolo=f=16:d=0.7,afade=t=in:st=0:d=0.08,afade=t=out:st=0.18:d=0.32:curve=qsin,volume=0.40"),
    ("zoom_in", "anoisesrc=d=0.5:c=pink:a=0.5:seed=9",
     "highpass=f=300,lowpass=f=2400,afade=t=in:st=0:d=0.40:curve=exp,afade=t=out:st=0.40:d=0.10,volume=0.50"),
    ("hum_server", "anoisesrc=d=3:c=brown:a=0.5:seed=2",
     "lowpass=f=320,afade=t=in:st=0:d=0.4,afade=t=out:st=2.5:d=0.5,volume=0.22"),
    ("typing_soft", "anoisesrc=d=1.5:c=white:a=0.6:seed=4",
     "volume='if(lt(mod(t,0.105),0.012),1,0)':eval=frame,highpass=f=1500,lowpass=f=5500,volume=0.25")
]

for name, src, af in noise_cmds:
    dst = os.path.join(OUT, f"{name}.wav")
    cmd = [FFMPEG, "-y", "-v", "error", "-f", "lavfi", "-i", src, "-af", af, "-ar", str(SR), "-ac", "2", "-c:a", "pcm_s16le", dst]
    run_cmd(cmd)

# 2. Tonal sounds
A = 0.004
ENV = f"(1-exp(-t/{A}))"

tonal_defs = [
    ("pop_soft", 0.14, f"0.42*{ENV}*sin(2*PI*(300*t+2800*t*t))*exp(-26*t)", "lowpass=f=2500"),
    ("tick_soft", 0.35, f"{ENV}*(0.34*sin(2*PI*880*t)*exp(-14*t)+0.06*sin(2*PI*3520*t)*exp(-45*t))", "lowpass=f=5000"),
    ("check_soft", 0.40, f"{ENV}*(0.32*sin(2*PI*1046.5*t)*exp(-12*t)+0.05*sin(2*PI*4186*t)*exp(-45*t))", "lowpass=f=5500"),
    ("chime_success", 1.6, f"{ENV}*(0.20*sin(2*PI*1046.5*t)*exp(-3.2*t)+gte(t,0.09)*0.18*sin(2*PI*1318.5*(t-0.09))*exp(-3.2*(t-0.09))+gte(t,0.18)*0.17*sin(2*PI*1568*(t-0.18))*exp(-3.0*(t-0.18)))", "aecho=0.8:0.6:70|140:0.22|0.12,lowpass=f=6000"),
    ("lightbulb_ding", 1.0, f"{ENV}*(0.24*sin(2*PI*1318.5*t)*exp(-4*t)+0.05*sin(2*PI*2637*t)*exp(-7*t))", "aecho=0.8:0.6:60:0.2,lowpass=f=6000"),
    ("lock_click", 0.16, f"0.30*sin(2*PI*1400*t)*exp(-70*t)*{ENV}+gte(t,0.06)*0.22*sin(2*PI*1900*(t-0.06))*exp(-90*(t-0.06))", "lowpass=f=4500"),
    ("warn_soft", 0.60, f"{ENV}*(0.28*sin(2*PI*659.25*t)*exp(-9*t)+gte(t,0.18)*0.28*sin(2*PI*523.25*(t-0.18))*exp(-9*(t-0.18)))", "lowpass=f=3500"),
    ("warn_beeps", 0.45, f"0.16*sin(2*PI*880*t)*(lt(t,0.09)*{ENV}+gte(t,0.22)*lt(t,0.31))*1", "afade=t=in:d=0.005,lowpass=f=3000"),
    ("bonk_soft", 0.26, f"0.45*{ENV}*sin(2*PI*(220*t-175*t*t))*exp(-13*t)", "lowpass=f=1200"),
    ("stamp_thud", 0.28, f"{ENV}*(0.55*sin(2*PI*110*t)*exp(-18*t))", "lowpass=f=600"),
    ("boing_question", 0.38, f"0.26*{ENV}*sin(2*PI*(420*t+290*t*t)+0.6*sin(2*PI*6*t))*exp(-6*t)", "lowpass=f=2500"),
    ("glass_knock", 0.35, f"{ENV}*(0.18*sin(2*PI*1700*t)+0.09*sin(2*PI*2550*t))*exp(-70*t)+gte(t,0.15)*(0.16*sin(2*PI*1700*(t-0.15))+0.08*sin(2*PI*2550*(t-0.15)))*exp(-70*(t-0.15))", "lowpass=f=5000"),
    ("shield_clink", 0.55, f"{ENV}*(0.16*sin(2*PI*1318.5*t)+0.10*sin(2*PI*1975.5*t)+0.05*sin(2*PI*2637*t))*exp(-9*t)", "lowpass=f=6000"),
    ("coins_soft", 0.60, f"{ENV}*0.10*(sin(2*PI*2637*t)*exp(-30*t)+gte(t,0.07)*sin(2*PI*3136*(t-0.07))*exp(-30*(t-0.07))+gte(t,0.15)*sin(2*PI*2793*(t-0.15))*exp(-30*(t-0.15))+gte(t,0.24)*sin(2*PI*3520*(t-0.24))*exp(-30*(t-0.24)))", "lowpass=f=6500"),
    ("radar_ping", 1.0, f"0.20*{ENV}*sin(2*PI*1200*t)*exp(-5*t)", "aecho=0.8:0.5:180:0.3,lowpass=f=4000"),
    ("squeeze", 0.40, f"0.26*{ENV}*sin(2*PI*(700*t-560*t*t)+0.4*sin(2*PI*18*t))*exp(-4*t)", "lowpass=f=2500"),
    ("media_play", 0.50, f"{ENV}*(0.24*sin(2*PI*784*t)*exp(-10*t)+gte(t,0.12)*0.24*sin(2*PI*1046.5*(t-0.12))*exp(-9*(t-0.12)))", "lowpass=f=4500"),
    ("phone_trill", 0.60, f"{ENV}*0.10*(sin(2*PI*1318.5*t)+sin(2*PI*1046.5*t))*(0.5+0.5*sin(2*PI*12*t))*exp(-3*t)", "lowpass=f=4500"),
    ("signal_pips", 0.40, "0.14*sin(2*PI*1500*t)*(lt(t,0.05)+gte(t,0.12)*lt(t,0.17)+gte(t,0.24)*lt(t,0.29))", "afade=t=in:d=0.004,lowpass=f=4000"),
    ("beep_soft", 0.16, f"0.16*{ENV}*sin(2*PI*1320*t)", "lowpass=f=4000"),
    ("remote_click", 0.10, f"0.22*{ENV}*sin(2*PI*1760*t)*exp(-80*t)", "lowpass=f=5000"),
    ("hdd_whir", 1.2, f"{ENV}*0.10*sin(2*PI*(170*t+40*t*t))*(1-exp(-4*t))*exp(-1.2*t)", "lowpass=f=900"),
    ("finale_arp", 1.8, f"{ENV}*(0.20*sin(2*PI*523.25*t)*exp(-4*t)+gte(t,0.11)*0.20*sin(2*PI*659.25*(t-0.11))*exp(-4*(t-0.11))+gte(t,0.22)*0.20*sin(2*PI*784*(t-0.22))*exp(-4*(t-0.22))+gte(t,0.33)*0.22*sin(2*PI*1046.5*(t-0.33))*exp(-2.6*(t-0.33)))", "aecho=0.8:0.6:80|160:0.22|0.12,lowpass=f=6000")
]

for name, dur, expr, flt in tonal_defs:
    dst = os.path.join(OUT, f"{name}.wav")
    fade_st = dur - 0.03
    af = f"{flt},afade=t=out:st={fade_st:.4f}:d=0.03"
    cmd = [FFMPEG, "-y", "-v", "error", "-f", "lavfi", "-i", f"aevalsrc=exprs='{expr}':s={SR}:d={dur}",
           "-af", af, "-ar", str(SR), "-ac", "2", "-c:a", "pcm_s16le", dst]
    run_cmd(cmd)

# 3. Normalization function
def norm(name, mode, target_db):
    fpath = os.path.join(OUT, f"{name}.wav")
    # measure astats
    cmd_stat = [FFMPEG, "-hide_banner", "-i", fpath, "-af", "astats=measure_perchannel=none", "-f", "null", "-"]
    p = subprocess.run(cmd_stat, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
    out = p.stderr
    
    key = "Peak level dB:" if mode == "peak" else "RMS level dB:"
    cur = None
    for line in out.splitlines():
        if key in line:
            parts = line.split(":")
            val_str = parts[-1].strip()
            try:
                cur = float(val_str)
            except:
                pass
    if cur is None:
        print(f"Warning: could not parse {key} for {name}")
        return
    
    gain = target_db - cur
    tmp = os.path.join(OUT, "_tmp.wav")
    cmd_norm = [FFMPEG, "-y", "-v", "error", "-i", fpath, "-af", f"volume={gain:.2f}dB,alimiter=limit=0.5:level=disabled",
                "-ar", str(SR), "-ac", "2", "-c:a", "pcm_s16le", tmp]
    run_cmd(cmd_norm)
    os.replace(tmp, fpath)

rms_targets = [
    ("pencil_loop", -34), ("marker_loop", -32), ("highlight_swipe", -40), ("whoosh_soft", -30),
    ("page_turn", -33), ("zoom_in", -34), ("hum_server", -42), ("typing_soft", -36)
]
for n, t in rms_targets:
    norm(n, "rms", t)

peak_targets_12 = ["pop_soft", "tick_soft", "check_soft", "lock_click", "bonk_soft", "stamp_thud",
                   "chime_success", "finale_arp", "lightbulb_ding", "media_play", "warn_soft"]
for n in peak_targets_12:
    norm(n, "peak", -12)

peak_targets_14 = ["boing_question", "glass_knock", "shield_clink", "squeeze", "phone_trill", "radar_ping"]
for n in peak_targets_14:
    norm(n, "peak", -14)

peak_targets_16 = ["coins_soft", "signal_pips", "beep_soft", "remote_click", "warn_beeps", "hdd_whir"]
for n in peak_targets_16:
    norm(n, "peak", -16)

# Verify count
wavs = [f for f in os.listdir(OUT) if f.endswith(".wav")]
print(f"normalized ({len(wavs)} files) -> {OUT}")
if len(wavs) != 31:
    print(f"ERROR: expected 31 files, got {len(wavs)}")
    sys.exit(1)
print("SUCCESS: 31 sound effects normalized and ready.")
