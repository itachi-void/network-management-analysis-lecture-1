# Network Management and Analysis — Lecture 1 (Remotion Video Explainer)

Educational video series based on «Network Management and Analysis — Lecture 1». Built with **Remotion 4** (React + TypeScript).

---

## Phase 0: Setup & Calibration (المرحلة 0 — التجهيز والمعايرة)

All Phase 0 requirements and acceptance criteria have been fully completed and verified.

### Deliverables Folder
All 37 Phase 0 deliverables are collected in [`phase0_all/`](./phase0_all/):
- **Calibration Comparison:** `phase0_all/cal_compare.png` & `phase0_all/cal_video.mp4`
- **Hand-Drawn Icons (57 SVG icons):** `phase0_all/icons.png`
- **Glyphs & Fonts Test:** `phase0_all/glyphs.png`
- **Bidi Alignment Tests:** `phase0_all/bidi_1.png` & `phase0_all/bidi_2.png`
- **13 Region Inspection Images:** `phase0_all/regions_*.png`
- **13 Character Poses & Contact Sheet:** `phase0_all/characters_sheet.png` & `phase0_all/*_*.png`
- **Calibrated Paper Texture:** `phase0_all/paper.png`
- **Cleaned Figure 8.33:** `phase0_all/s10_fig8_33_clean.png`

---

## Tech Stack
- **Framework:** Remotion 4.0.540 (`remotion`, `@remotion/cli`, `@remotion/paths`, `@remotion/google-fonts`)
- **Graphics:** `roughjs`
- **Fonts:** Aref Ruqaa, Cairo, Caveat Brush, Kalam
- **Audio:** Custom 48kHz Stereo 16-bit WAV SFX library (31 files generated & normalized via FFmpeg)

---

## Getting Started

```bash
# Install dependencies
npm install

# Preview in Remotion Studio
npm start

# Render calibration still / video
npx remotion still src/index.ts CAL out/debug/cal_ours.png --frame=104
npx remotion render src/index.ts CAL out/debug/cal_video.mp4
```
