#!/usr/bin/env bash
# يولّد مكتبة المؤثرات الصوتية الناعمة كلها بـ ffmpeg بس (48kHz / stereo / 16-bit WAV)
# الاستخدام: bash scripts/make_sfx.sh public/sfx
set -euo pipefail
OUT="${1:-public/sfx}"
mkdir -p "$OUT"
SR=48000
F="-y -v error"
ENC="-ar $SR -ac 2 -c:a pcm_s16le"

# ---------- 1) أصوات ضوضاء (رسم/كتابة/هوا) ----------
ffmpeg $F -f lavfi -i "anoisesrc=d=0.45:c=pink:a=0.5:seed=11" -af "highpass=f=180,lowpass=f=1300,afade=t=in:st=0:d=0.20:curve=qsin,afade=t=out:st=0.20:d=0.25:curve=qsin,volume=0.55" $ENC "$OUT/whoosh_soft.wav"
ffmpeg $F -f lavfi -i "anoisesrc=d=4:c=pink:a=0.5:seed=7" -af "highpass=f=1400,lowpass=f=4800,tremolo=f=7:d=0.45,volume=0.30" $ENC "$OUT/pencil_loop.wav"
ffmpeg $F -f lavfi -i "anoisesrc=d=4:c=pink:a=0.5:seed=21" -af "highpass=f=550,lowpass=f=3000,tremolo=f=5:d=0.35,volume=0.38" $ENC "$OUT/marker_loop.wav"
ffmpeg $F -f lavfi -i "anoisesrc=d=0.35:c=pink:a=0.5:seed=5" -af "highpass=f=2200,lowpass=f=6500,afade=t=in:st=0:d=0.05,afade=t=out:st=0.10:d=0.25:curve=qsin,volume=0.22" $ENC "$OUT/highlight_swipe.wav"
ffmpeg $F -f lavfi -i "anoisesrc=d=0.5:c=pink:a=0.5:seed=3" -af "highpass=f=900,lowpass=f=5500,tremolo=f=16:d=0.7,afade=t=in:st=0:d=0.08,afade=t=out:st=0.18:d=0.32:curve=qsin,volume=0.40" $ENC "$OUT/page_turn.wav"
ffmpeg $F -f lavfi -i "anoisesrc=d=0.5:c=pink:a=0.5:seed=9" -af "highpass=f=300,lowpass=f=2400,afade=t=in:st=0:d=0.40:curve=exp,afade=t=out:st=0.40:d=0.10,volume=0.50" $ENC "$OUT/zoom_in.wav"
ffmpeg $F -f lavfi -i "anoisesrc=d=3:c=brown:a=0.5:seed=2" -af "lowpass=f=320,afade=t=in:st=0:d=0.4,afade=t=out:st=2.5:d=0.5,volume=0.22" $ENC "$OUT/hum_server.wav"
ffmpeg $F -f lavfi -i "anoisesrc=d=1.5:c=white:a=0.6:seed=4" -af "volume='if(lt(mod(t\,0.105)\,0.012)\,1\,0)':eval=frame,highpass=f=1500,lowpass=f=5500,volume=0.25" $ENC "$OUT/typing_soft.wav"

# ---------- 2) أصوات نغمية ناعمة ----------
A="0.004"
gen () { # $1=الاسم $2=المدة $3=المعادلة $4=فلاتر
  ffmpeg $F -f lavfi -i "aevalsrc=exprs='$3':s=$SR:d=$2" -af "${4:-anull},afade=t=out:st=$(awk "BEGIN{print $2-0.03}"):d=0.03" $ENC "$OUT/$1.wav"
}
ENV="(1-exp(-t/$A))"
gen pop_soft 0.14 "0.42*$ENV*sin(2*PI*(300*t+2800*t*t))*exp(-26*t)" "lowpass=f=2500"
gen tick_soft 0.35 "$ENV*(0.34*sin(2*PI*880*t)*exp(-14*t)+0.06*sin(2*PI*3520*t)*exp(-45*t))" "lowpass=f=5000"
gen check_soft 0.40 "$ENV*(0.32*sin(2*PI*1046.5*t)*exp(-12*t)+0.05*sin(2*PI*4186*t)*exp(-45*t))" "lowpass=f=5500"
gen chime_success 1.6 "$ENV*(0.20*sin(2*PI*1046.5*t)*exp(-3.2*t)+gte(t,0.09)*0.18*sin(2*PI*1318.5*(t-0.09))*exp(-3.2*(t-0.09))+gte(t,0.18)*0.17*sin(2*PI*1568*(t-0.18))*exp(-3.0*(t-0.18)))" "aecho=0.8:0.6:70|140:0.22|0.12,lowpass=f=6000"
gen lightbulb_ding 1.0 "$ENV*(0.24*sin(2*PI*1318.5*t)*exp(-4*t)+0.05*sin(2*PI*2637*t)*exp(-7*t))" "aecho=0.8:0.6:60:0.2,lowpass=f=6000"
gen lock_click 0.16 "0.30*sin(2*PI*1400*t)*exp(-70*t)*$ENV+gte(t,0.06)*0.22*sin(2*PI*1900*(t-0.06))*exp(-90*(t-0.06))" "lowpass=f=4500"
gen warn_soft 0.60 "$ENV*(0.28*sin(2*PI*659.25*t)*exp(-9*t)+gte(t,0.18)*0.28*sin(2*PI*523.25*(t-0.18))*exp(-9*(t-0.18)))" "lowpass=f=3500"
gen warn_beeps 0.45 "0.16*sin(2*PI*880*t)*(lt(t,0.09)*$ENV+gte(t,0.22)*lt(t,0.31))*1" "afade=t=in:d=0.005,lowpass=f=3000"
gen bonk_soft 0.26 "0.45*$ENV*sin(2*PI*(220*t-175*t*t))*exp(-13*t)" "lowpass=f=1200"
gen stamp_thud 0.28 "$ENV*(0.55*sin(2*PI*110*t)*exp(-18*t))" "lowpass=f=600"
gen boing_question 0.38 "0.26*$ENV*sin(2*PI*(420*t+290*t*t)+0.6*sin(2*PI*6*t))*exp(-6*t)" "lowpass=f=2500"
gen glass_knock 0.35 "$ENV*(0.18*sin(2*PI*1700*t)+0.09*sin(2*PI*2550*t))*exp(-70*t)+gte(t,0.15)*(0.16*sin(2*PI*1700*(t-0.15))+0.08*sin(2*PI*2550*(t-0.15)))*exp(-70*(t-0.15))" "lowpass=f=5000"
gen shield_clink 0.55 "$ENV*(0.16*sin(2*PI*1318.5*t)+0.10*sin(2*PI*1975.5*t)+0.05*sin(2*PI*2637*t))*exp(-9*t)" "lowpass=f=6000"
gen coins_soft 0.60 "$ENV*0.10*(sin(2*PI*2637*t)*exp(-30*t)+gte(t,0.07)*sin(2*PI*3136*(t-0.07))*exp(-30*(t-0.07))+gte(t,0.15)*sin(2*PI*2793*(t-0.15))*exp(-30*(t-0.15))+gte(t,0.24)*sin(2*PI*3520*(t-0.24))*exp(-30*(t-0.24)))" "lowpass=f=6500"
gen radar_ping 1.0 "0.20*$ENV*sin(2*PI*1200*t)*exp(-5*t)" "aecho=0.8:0.5:180:0.3,lowpass=f=4000"
gen squeeze 0.40 "0.26*$ENV*sin(2*PI*(700*t-560*t*t)+0.4*sin(2*PI*18*t))*exp(-4*t)" "lowpass=f=2500"
gen media_play 0.50 "$ENV*(0.24*sin(2*PI*784*t)*exp(-10*t)+gte(t,0.12)*0.24*sin(2*PI*1046.5*(t-0.12))*exp(-9*(t-0.12)))" "lowpass=f=4500"
gen phone_trill 0.60 "$ENV*0.10*(sin(2*PI*1318.5*t)+sin(2*PI*1046.5*t))*(0.5+0.5*sin(2*PI*12*t))*exp(-3*t)" "lowpass=f=4500"
gen signal_pips 0.40 "0.14*sin(2*PI*1500*t)*(lt(t,0.05)+gte(t,0.12)*lt(t,0.17)+gte(t,0.24)*lt(t,0.29))" "afade=t=in:d=0.004,lowpass=f=4000"
gen beep_soft 0.16 "0.16*$ENV*sin(2*PI*1320*t)" "lowpass=f=4000"
gen remote_click 0.10 "0.22*$ENV*sin(2*PI*1760*t)*exp(-80*t)" "lowpass=f=5000"
gen hdd_whir 1.2 "$ENV*0.10*sin(2*PI*(170*t+40*t*t))*(1-exp(-4*t))*exp(-1.2*t)" "lowpass=f=900"
gen finale_arp 1.8 "$ENV*(0.20*sin(2*PI*523.25*t)*exp(-4*t)+gte(t,0.11)*0.20*sin(2*PI*659.25*(t-0.11))*exp(-4*(t-0.11))+gte(t,0.22)*0.20*sin(2*PI*784*(t-0.22))*exp(-4*(t-0.22))+gte(t,0.33)*0.22*sin(2*PI*1046.5*(t-0.33))*exp(-2.6*(t-0.33)))" "aecho=0.8:0.6:80|160:0.22|0.12,lowpass=f=6000"

# ---------- 3) ضبط المستويات ----------
norm () { # $1=الاسم $2=peak|rms $3=الهدف بالـ dB
  local f="$OUT/$1.wav" key cur gain
  if [ "$2" = "peak" ]; then key="Peak level dB"; else key="RMS level dB"; fi
  cur=$(ffmpeg -hide_banner -i "$f" -af astats=measure_perchannel=none -f null - 2>&1 | grep "$key" | tail -1 | awk -F: '{gsub(/ /,"",$2); print $2}')
  gain=$(awk "BEGIN{print $3 - ($cur)}")
  ffmpeg $F -i "$f" -af "volume=${gain}dB,alimiter=limit=0.5:level=disabled" $ENC "$OUT/_tmp.wav" && mv "$OUT/_tmp.wav" "$f"
}
norm pencil_loop rms -34; norm marker_loop rms -32; norm highlight_swipe rms -40; norm whoosh_soft rms -30
norm page_turn rms -33; norm zoom_in rms -34; norm hum_server rms -42; norm typing_soft rms -36
for s in pop_soft tick_soft check_soft lock_click bonk_soft stamp_thud; do norm $s peak -12; done
for s in chime_success finale_arp lightbulb_ding media_play warn_soft; do norm $s peak -12; done
for s in boing_question glass_knock shield_clink squeeze phone_trill radar_ping; do norm $s peak -14; done
for s in coins_soft signal_pips beep_soft remote_click warn_beeps hdd_whir; do norm $s peak -16; done

N=$(ls "$OUT"/*.wav | wc -l)
[ "$N" -eq 31 ] || { echo "ERROR: expected 31 files, got $N"; exit 1; }
echo "normalized ($N files) -> $OUT"
