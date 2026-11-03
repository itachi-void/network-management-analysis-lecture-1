#!/usr/bin/env bash
# الاستخدام: bash scripts/master_audio.sh out/raw/V1.mp4 out/final/01_Course_Overview_Agenda.mp4
# بيعمل: تنعيم الحدّة (high-shelf −3 dB فوق 7 kHz) + Loudness −22 LUFS + True peak ≤ −3 dBTP (تمريرتين) — الصورة مبتتلمسش
set -euo pipefail
IN="$1"; OUT="$2"
mkdir -p "$(dirname "$OUT")"
PRE="highshelf=f=7000:g=-3"
J=$(ffmpeg -hide_banner -nostats -i "$IN" -vn -af "$PRE,loudnorm=I=-22:TP=-3:LRA=11:print_format=json" -f null - 2>&1 | sed -n '/^{/,/^}/p')
val () { echo "$J" | grep "\"$1\"" | sed -E 's/.*: *"([^"]+)".*/\1/'; }
ffmpeg -y -v error -i "$IN" -c:v copy -af "$PRE,loudnorm=I=-22:TP=-3:LRA=11:measured_I=$(val input_i):measured_TP=$(val input_tp):measured_LRA=$(val input_lra):measured_thresh=$(val input_thresh):offset=$(val target_offset):linear=true,aresample=48000" -c:a aac -b:a 192k -ar 48000 -ac 2 "$OUT"
ffmpeg -hide_banner -nostats -i "$OUT" -vn -af ebur128=peak=true -f null - 2>&1 | grep -A14 "Summary" | grep -E "I:|Peak:"
