// src/videos/V2.tsx
import React, {useMemo} from 'react';
import {AbsoluteFill, Sequence, useCurrentFrame, interpolate, staticFile, Easing} from 'remotion';
import {evolvePath} from '@remotion/paths';
import rough from 'roughjs';
import {COLORS, FONTS} from '../theme';
import {Sfx} from '../lib/sfx';
import {
  Paper,
  SketchBox,
  HandUnderline,
  RedEllipse,
  HighlightText,
  WordReveal,
  Caption,
  Character,
  SceneFade,
  SlideBadge,
  AgendaChip,
  NameOval,
  HandWrite,
  Pop,
  PinnedPhoto,
  LayoutL,
  StudyCard,
} from '../components';
import {
  IconServerBox,
  IconDesktopPc,
  IconLaptopBrowser,
  IconTerminalCrt,
  IconRack,
  IconStorageCylinder,
  IconDatacenterBuilding,
} from '../icons';
import {texts} from './V2.data';

const getText = (scene: string, id: string): string => {
  const found = texts.find((t) => t.scene === scene && t.id === id);
  if (!found) {
    throw new Error(`Missing text in V2.data.ts for scene=${scene}, id=${id}`);
  }
  return found.text;
};

// ============================================================================
// SCENE 1 (0.00 -> 5.50s, 132 frames, LAYOUT_H)
// ============================================================================
const Scene1: React.FC = () => {
  const frame = useCurrentFrame();

  const servers = [
    {x: 340, y: 420, rot: -5, t: 2.0},
    {x: 640, y: 400, rot: 4, t: 2.15},
    {x: 940, y: 430, rot: -6, t: 2.3},
    {x: 360, y: 650, rot: 5, t: 2.45},
    {x: 660, y: 670, rot: -4, t: 2.6},
    {x: 950, y: 640, rot: 6, t: 2.75},
  ];

  const cablePath = 'M 340 420 C 500 280, 820 560, 940 430 C 1040 520, 480 780, 360 650 C 520 500, 840 760, 950 640';
  const cableProgress = interpolate(frame, [71, 83], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const evolvedCable = evolvePath(cableProgress, cablePath);

  const qMarks = [
    {x: 260, y: 360, t: 3.55},
    {x: 660, y: 330, t: 3.67},
    {x: 1060, y: 370, t: 3.79},
  ];

  return (
    <AbsoluteFill>
      <AgendaChip topicNumber={1} topicTitle={getText('V2-S1', 'agenda_chip')} />
      <SlideBadge text="Lecture 1 · 2/8" />

      {/* Audio */}
      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="marker_loop" at={0.4} dur={1.1} />
      <Sfx name="marker_loop" at={1.55} dur={0.35} />
      <Sfx name="pop_soft" at={2.0} gainDb={-6} />
      <Sfx name="pop_soft" at={2.3} gainDb={-6} />
      <Sfx name="pop_soft" at={2.6} gainDb={-6} />
      <Sfx name="pencil_loop" at={2.95} dur={0.5} />
      <Sfx name="boing_question" at={3.55} />
      <Sfx name="pencil_loop" at={4.0} dur={0.35} />

      {/* Karim K1 right at x=1520 */}
      <Character src="karim_K1.png" x={1520} height={820} baseY={1000} side="right" startFrame={0} />
      <NameOval name={getText('V2-S1', 'karim_name')} cx={1520} cy={120} startFrame={96} />

      {/* Hook Title right-aligned at x=1180, center y=180 */}
      <HandWrite
        text={getText('V2-S1', 'hook_title')}
        startFrame={10}
        durationFrames={26}
        rtl
        style={{
          position: 'absolute',
          right: 1920 - 1180,
          top: 180,
          transform: 'translateY(-50%)',
          fontFamily: FONTS.HOOK,
          fontWeight: 700,
          fontSize: 92,
          lineHeight: 1.3,
          color: COLORS.INK,
          zIndex: 20,
        }}
      />
      <HandUnderline x1={160} x2={1180} y={265} startFrame={37} durationFrames={8} rtl />

      {/* 6 tilted server boxes */}
      {servers.map((s, idx) => {
        const sf = Math.round(s.t * 24);
        return (
          <Pop
            key={idx}
            startFrame={sf}
            style={{
              position: 'absolute',
              left: s.x - 90,
              top: s.y - 45,
              zIndex: 15,
            }}
          >
            <div style={{transform: `rotate(${s.rot}deg)`}}>
              <IconServerBox size={180} />
            </div>
          </Pop>
        );
      })}

      {/* Tangled cables */}
      {frame >= 71 && (
        <svg style={{position: 'absolute', left: 0, top: 0, width: 1920, height: 1080, pointerEvents: 'none', zIndex: 18}}>
          <path
            d={cablePath}
            fill="none"
            stroke={COLORS.INK}
            strokeWidth={3}
            strokeLinecap="round"
            strokeDasharray={evolvedCable.strokeDasharray}
            strokeDashoffset={evolvedCable.strokeDashoffset}
          />
        </svg>
      )}

      {/* 3 Question marks */}
      {qMarks.map((q, idx) => {
        const qf = Math.round(q.t * 24);
        return (
          <Pop
            key={idx}
            startFrame={qf}
            style={{
              position: 'absolute',
              left: q.x,
              top: q.y,
              fontFamily: FONTS.HOOK,
              fontWeight: 700,
              fontSize: 80,
              color: COLORS.RED,
              zIndex: 22,
            }}
          >
            ؟
          </Pop>
        );
      })}

      <Caption text="مئات السيرفرات والهاردات... إزاي بنجمعهم وندرهم في مكان واحد؟" />
      <SceneFade startFrame={124} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 2 (5.50 -> 11.00s, 132 frames, LAYOUT_A)
// ============================================================================
const Scene2: React.FC = () => {
  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 2/8 · Slide 4" />

      {/* Audio */}
      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="pencil_loop" at={0.35} dur={0.6} />
      <Sfx name="marker_loop" at={1.0} dur={0.9} />
      <Sfx name="pencil_loop" at={2.0} dur={0.5} />
      <Sfx name="pop_soft" at={2.6} />
      <Sfx name="pencil_loop" at={3.0} dur={0.7} gainDb={-3} />
      <Sfx name="pencil_loop" at={3.9} dur={0.35} />

      <Character src="omar_O4.png" x={400} height={820} baseY={1000} side="left" startFrame={0} />
      <NameOval name={getText('V2-S2', 'omar_name')} cx={400} cy={120} startFrame={94} />

      <SketchBox x={760} y={180} w={1040} h={680} startFrame={8} drawDurationFrames={14} seed={202} />

      {/* Datacenter (Caveat Brush, 140px) at (1280, 330) */}
      <HandWrite
        text={getText('V2-S2', 'title_en')}
        startFrame={24}
        durationFrames={22}
        style={{
          position: 'absolute',
          left: 1280,
          top: 330,
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.KEY_EN,
          fontWeight: 400,
          fontSize: 140,
          color: COLORS.INK,
          zIndex: 22,
        }}
      />

      {/* مركز البيانات (Aref Ruqaa, 72px) at (1280, 470) */}
      <HandWrite
        text={getText('V2-S2', 'title_ar')}
        startFrame={48}
        durationFrames={12}
        rtl
        style={{
          position: 'absolute',
          left: 1280,
          top: 470,
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.HOOK,
          fontWeight: 700,
          fontSize: 72,
          color: COLORS.INK,
          zIndex: 22,
        }}
      />

      {/* IconDatacenterBuilding at (1280, 620) */}
      <Pop
        startFrame={62}
        style={{
          position: 'absolute',
          left: 1280 - 110,
          top: 620 - 80,
          zIndex: 22,
        }}
      >
        <IconDatacenterBuilding size={200} />
      </Pop>

      {/* Description sentence at (1280, 780) */}
      <div
        dir="rtl"
        style={{
          position: 'absolute',
          left: 1280,
          top: 780,
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.BODY,
          fontWeight: 500,
          fontSize: 38,
          color: COLORS.INK,
          whiteSpace: 'nowrap',
          zIndex: 22,
        }}
      >
        <WordReveal text={getText('V2-S2', 'desc_ar')} startFrame={72} durationFrames={17} rtl />
      </div>

      <Caption text="المكان ده اسمه Datacenter... يلا نشوف الـ architecture بتاعته." />
      <SceneFade startFrame={124} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENES 3 -> 8 COMBINED VECTOR DATACENTER ARCHITECTURE (11.00 -> 48.50s, 900 frames)
// S3: 0..156 (6.5s)
// S4: 156..288 (5.5s)
// S5: 288..444 (6.5s)
// S6: 444..588 (6.0s)
// S7: 588..744 (6.5s)
// S8: 744..900 (6.5s)
// ============================================================================
const Scenes3To8: React.FC = () => {
  const frame = useCurrentFrame();

  // S5 Camera Zoom (frames 288..444: local 0..156)
  // 0.00-0.70s (frames 288..305): point (310, 425) goes to (760, 480), scale 1 -> 1.6
  // 5.70-6.40s (frames 425..442): return to scale 1
  const zoomInP = interpolate(frame, [288, 305], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.inOut(Easing.cubic),
  });
  const zoomOutP = interpolate(frame, [425, 442], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.inOut(Easing.cubic),
  });
  const camP = zoomInP - zoomOutP;
  const camScale = 1 + 0.6 * camP;
  const targetTx = 760 - 1.6 * 310; // 264
  const targetTy = 480 - 1.6 * 425; // -200
  const camTx = targetTx * camP;
  const camTy = targetTy * camP;

  // Bus line (S3 0.30-1.00s -> frames 7..24)
  const busProgress = interpolate(frame, [7, 24], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  // Management devices
  const mgmtDevices = [
    {id: 'd1', arId: 'd1_ar', x: 360, t: 1.1, Comp: IconServerBox},
    {id: 'd2', arId: 'd2_ar', x: 760, t: 1.9, Comp: IconDesktopPc},
    {id: 'd3', arId: 'd3_ar', x: 1060, t: 2.7, Comp: IconLaptopBrowser},
    {id: 'd4', arId: 'd4_ar', x: 1360, t: 3.5, Comp: IconTerminalCrt},
  ];

  // S3 temporary Arabic notes opacity (fade in 4.40-5.00s -> frames 106..120, fade out 6.20-6.50s -> frames 149..156)
  const s3NotesOpacity =
    frame >= 106 && frame < 156
      ? Math.min(interpolate(frame, [106, 120], [0, 1], {extrapolateRight: 'clamp'}), interpolate(frame, [149, 156], [1, 0], {extrapolateLeft: 'clamp'}))
      : 0;

  // S4 Server Racks (offset = 156 frames = 6.50s)
  const dropLineP = interpolate(frame, [156 + 5, 156 + 12], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const racks = [
    {id: 'sg1', line1: 'server', line2: 'group 1', x: 700, t: 6.5 + 0.6},
    {id: 'sg2', line1: 'server', line2: 'group 2', x: 1060, t: 6.5 + 1.2},
    {id: 'sg3', line1: 'server', line2: 'group 3', x: 1420, t: 6.5 + 1.8},
  ];
  const s4NoteOpacity =
    frame >= 156 + 67 && frame < 288
      ? Math.min(interpolate(frame, [156 + 67, 156 + 74], [0, 1], {extrapolateRight: 'clamp'}), interpolate(frame, [280, 288], [1, 0], {extrapolateLeft: 'clamp'}))
      : 0;

  // S5 ESXi Zoom (offset = 288 frames = 12.00s)
  const triScaleX = interpolate(frame, [288 + 19, 288 + 26], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const s5BubbleOpacity =
    frame >= 288 + 79 && frame < 288 + 136
      ? Math.min(interpolate(frame, [288 + 79, 288 + 85], [0, 1], {extrapolateRight: 'clamp'}), interpolate(frame, [288 + 130, 288 + 136], [1, 0], {extrapolateLeft: 'clamp'}))
      : 0;

  // S6 Storage Fabric (offset = 444 frames = 18.50s)
  const blueLinesP = interpolate(frame, [444 + 5, 444 + 22], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const cloudStrokeP = interpolate(frame, [444 + 24, 444 + 38], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const cloudFillP = interpolate(frame, [444 + 31, 444 + 38], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const cloudPath = 'M 560 645 C 540 615, 620 590, 740 595 C 860 585, 1020 588, 1180 595 C 1340 588, 1500 592, 1600 620 C 1630 645, 1615 685, 1560 695 C 1360 705, 800 705, 580 695 C 545 685, 540 660, 560 645 Z';
  const evolvedCloud = evolvePath(cloudStrokeP, cloudPath);
  const s6NoteOpacity =
    frame >= 444 + 77 && frame < 588
      ? Math.min(interpolate(frame, [444 + 77, 444 + 84], [0, 1], {extrapolateRight: 'clamp'}), interpolate(frame, [580, 588], [1, 0], {extrapolateLeft: 'clamp'}))
      : 0;

  // S7 Storage Arrays (offset = 588 frames = 24.50s)
  const cylLinesP = interpolate(frame, [588 + 5, 588 + 12], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const storageArrays = [
    {id: 'sa1', line1: 'fibre channel', line2: 'storage array', x: 820, t: 24.5 + 0.6, hlStart: 30.5 + 0.9},
    {id: 'sa2', line1: 'iSCSI', line2: 'storage array', x: 1080, t: 24.5 + 1.4, hlStart: 30.5 + 2.2},
    {id: 'sa3', line1: 'NAS', line2: 'storage array', x: 1340, t: 24.5 + 2.2, hlStart: 30.5 + 3.5},
  ];

  // S8 Legend (offset = 744 frames = 30.50s)
  const legendRows = [
    {enId: 'leg1_en', arId: 'leg1_ar', startSec: 30.5 + 1.2},
    {enId: 'leg2_en', arId: 'leg2_ar', startSec: 30.5 + 2.5},
    {enId: 'leg3_en', arId: 'leg3_ar', startSec: 30.5 + 3.8},
  ];

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 2/8 · Slide 4" />

      {/* S3 Audio (t = 0..6.5) */}
      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="pencil_loop" at={0.3} dur={0.7} />
      {mgmtDevices.map((d, i) => (
        <React.Fragment key={i}>
          <Sfx name="pop_soft" at={d.t} />
          <Sfx name="pencil_loop" at={d.t + 0.15} dur={0.35} gainDb={-3} />
        </React.Fragment>
      ))}

      {/* S4 Audio (offset = 6.5) */}
      <Sfx name="pencil_loop" at={6.5 + 0.2} dur={0.3} />
      {racks.map((r, i) => (
        <React.Fragment key={i}>
          <Sfx name="stamp_thud" at={r.t} gainDb={-3} />
          <Sfx name="pencil_loop" at={r.t + 0.3} dur={0.3} gainDb={-3} />
        </React.Fragment>
      ))}

      {/* S5 Audio (offset = 12.0) */}
      <Sfx name="zoom_in" at={12.0} />
      <Sfx name="pencil_loop" at={12.0 + 0.8} dur={0.3} gainDb={-6} />
      <Sfx name="pencil_loop" at={12.0 + 1.1} dur={0.5} />
      <Sfx name="pencil_loop" at={12.0 + 1.65} dur={0.3} gainDb={-3} />
      <Sfx name="pop_soft" at={12.0 + 2.0} gainDb={-6} />
      <Sfx name="pop_soft" at={12.0 + 2.3} gainDb={-6} />
      <Sfx name="pop_soft" at={12.0 + 2.75} gainDb={-6} />
      <Sfx name="pencil_loop" at={12.0 + 2.85} dur={0.3} />
      <Sfx name="highlight_swipe" at={12.0 + 3.6} dur={0.3} />
      <Sfx name="whoosh_soft" at={12.0 + 5.7} gainDb={-6} />

      {/* S6 Audio (offset = 18.5) */}
      <Sfx name="pencil_loop" at={18.5 + 0.2} dur={0.7} />
      <Sfx name="marker_loop" at={18.5 + 1.0} dur={0.6} />
      <Sfx name="pencil_loop" at={18.5 + 1.7} dur={0.8} gainDb={-3} />
      <Sfx name="whoosh_soft" at={18.5 + 2.7} gainDb={-6} />

      {/* S7 Audio (offset = 24.5) */}
      <Sfx name="pencil_loop" at={24.5 + 0.2} dur={0.3} />
      {storageArrays.map((sa, i) => (
        <React.Fragment key={i}>
          <Sfx name="pop_soft" at={sa.t} />
          <Sfx name="pencil_loop" at={sa.t + 0.2} dur={0.45} gainDb={-3} />
        </React.Fragment>
      ))}

      {/* S8 Audio (offset = 30.5) */}
      <Sfx name="pencil_loop" at={30.5 + 0.2} dur={0.5} />
      {storageArrays.map((sa, i) => (
        <React.Fragment key={i}>
          <Sfx name="highlight_swipe" at={sa.hlStart} dur={0.3} />
          <Sfx name="pencil_loop" at={sa.hlStart + 0.3} dur={0.6} gainDb={-3} />
        </React.Fragment>
      ))}

      {/* ==================== CAMERA LAYER ==================== */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: 1920,
          height: 1080,
          transformOrigin: '0 0',
          transform: `translate(${camTx}px, ${camTy}px) scale(${camScale})`,
        }}
      >
        {/* S6: Blue Storage Lines (behind racks & cloud) */}
        {frame >= 444 + 5 && (
          <svg style={{position: 'absolute', left: 0, top: 0, width: 1920, height: 1080, pointerEvents: 'none', zIndex: 5}}>
            {[700, 1060, 1420].map((rx, idx) => (
              <React.Fragment key={idx}>
                <line
                  x1={rx + 82}
                  y1={300}
                  x2={rx + 82}
                  y2={300 + 300 * blueLinesP}
                  stroke={COLORS.NAVY}
                  strokeWidth={6}
                />
                <line
                  x1={rx + 94}
                  y1={300}
                  x2={rx + 94}
                  y2={300 + 300 * blueLinesP}
                  stroke={COLORS.NAVY}
                  strokeWidth={6}
                />
                {/* Moving white dots during S6 (frames 444+65 .. 444+137) */}
                {frame >= 444 + 65 && frame <= 444 + 137 && (
                  <circle
                    cx={rx + 88}
                    cy={320 + (((frame - 444 - 65) % 19) / 19) * 260}
                    r={5}
                    fill="#FFFFFF"
                  />
                )}
              </React.Fragment>
            ))}
          </svg>
        )}

        {/* S5: Orange Zoom Triangle (625,350) (625,430) (500,550) (500,300) */}
        {frame >= 288 + 19 && (
          <svg
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: 1920,
              height: 1080,
              pointerEvents: 'none',
              zIndex: 8,
            }}
          >
            <g style={{transformOrigin: '625px 400px', transform: `scaleX(${triScaleX})`}}>
              <polygon points="625,350 625,430 500,550 500,300" fill={COLORS.ORANGE_ZOOM} />
            </g>
          </svg>
        )}

        {/* S3: Bus Line y=205, x=150..1760 */}
        {frame >= 7 && (
          <svg style={{position: 'absolute', left: 0, top: 0, width: 1920, height: 1080, pointerEvents: 'none', zIndex: 10}}>
            <line
              x1={150}
              y1={205}
              x2={150 + (1760 - 150) * busProgress}
              y2={205}
              stroke={COLORS.INK}
              strokeWidth={4}
              strokeLinecap="round"
            />
          </svg>
        )}

        {/* S3: 4 Management Devices */}
        {mgmtDevices.map((d, idx) => {
          const popFrame = Math.round(d.t * 24);
          const nameFrame = Math.round((d.t + 0.15) * 24);
          return (
            <React.Fragment key={idx}>
              {frame >= popFrame && (
                <svg style={{position: 'absolute', left: 0, top: 0, width: 1920, height: 1080, pointerEvents: 'none', zIndex: 11}}>
                  <line x1={d.x} y1={185} x2={d.x} y2={205} stroke={COLORS.INK} strokeWidth={4} />
                </svg>
              )}
              <Pop
                startFrame={popFrame}
                style={{
                  position: 'absolute',
                  left: d.x - 65,
                  top: 85,
                  width: 130,
                  height: 100,
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  zIndex: 12,
                }}
              >
                <d.Comp size={115} />
              </Pop>
              <HandWrite
                text={getText('V2-S3', d.id)}
                startFrame={nameFrame}
                durationFrames={8}
                style={{
                  position: 'absolute',
                  left: d.x,
                  top: 58,
                  transform: 'translate(-50%, -50%)',
                  fontFamily: FONTS.EN_TITLE,
                  fontWeight: 700,
                  fontSize: 30,
                  color: COLORS.INK,
                  zIndex: 14,
                }}
              />
              {s3NotesOpacity > 0 && (
                <div
                  dir="rtl"
                  style={{
                    position: 'absolute',
                    left: d.x,
                    top: 235,
                    transform: 'translate(-50%, -50%)',
                    fontFamily: FONTS.BODY,
                    fontWeight: 500,
                    fontSize: 24,
                    color: COLORS.MUTED,
                    opacity: s3NotesOpacity,
                    whiteSpace: 'nowrap',
                    zIndex: 14,
                  }}
                >
                  {getText('V2-S3', d.arId)}
                </div>
              )}
            </React.Fragment>
          );
        })}

        {/* S3 Dots at (1600, 150) */}
        {frame >= Math.round(4.2 * 24) && (
          <svg style={{position: 'absolute', left: 0, top: 0, width: 1920, height: 1080, pointerEvents: 'none', zIndex: 12}}>
            {[0, 1, 2].map((i) => (
              <circle key={i} cx={1600 + (i - 1) * 24} cy={150} r={6} fill={COLORS.INK} />
            ))}
          </svg>
        )}

        {/* S4: Drop lines & 3 Server Racks */}
        {frame >= 156 + 5 && (
          <svg style={{position: 'absolute', left: 0, top: 0, width: 1920, height: 1080, pointerEvents: 'none', zIndex: 10}}>
            {[700, 1060, 1420].map((rx, i) => (
              <line key={i} x1={rx} y1={205} x2={rx} y2={205 + 57 * dropLineP} stroke={COLORS.INK} strokeWidth={4} />
            ))}
          </svg>
        )}
        {racks.map((r, idx) => {
          const rf = Math.round(r.t * 24);
          const nameF = Math.round((r.t + 0.3) * 24);
          if (frame < rf) return null;
          const p = Math.min(1, (frame - rf) / 7);
          return (
            <React.Fragment key={idx}>
              <div
                style={{
                  position: 'absolute',
                  left: r.x - 75,
                  top: 262,
                  width: 150,
                  height: 260,
                  opacity: p,
                  transform: `translateY(${(1 - p) * 30}px)`,
                  display: 'flex',
                  justifyContent: 'center',
                  zIndex: 12,
                }}
              >
                <IconRack size={250} />
              </div>
              {frame >= nameF && (
                <div
                  dir="ltr"
                  aria-label={getText('V2-S4', r.id)}
                  style={{
                    position: 'absolute',
                    left: r.x + 90,
                    top: 270,
                    fontFamily: FONTS.EN_TITLE,
                    fontWeight: 700,
                    fontSize: 28,
                    lineHeight: 1.15,
                    color: COLORS.INK,
                    opacity: Math.min(1, (frame - nameF) / 7),
                    zIndex: 14,
                  }}
                >
                  <div>{r.line1}</div>
                  <div>{r.line2}</div>
                </div>
              )}
            </React.Fragment>
          );
        })}
        {/* S4 Dots at (1660, 400) */}
        {frame >= Math.round((6.5 + 2.5) * 24) && (
          <svg style={{position: 'absolute', left: 0, top: 0, width: 1920, height: 1080, pointerEvents: 'none', zIndex: 12}}>
            {[0, 1, 2].map((i) => (
              <circle key={i} cx={1660 + (i - 1) * 24} cy={400} r={6} fill={COLORS.INK} />
            ))}
          </svg>
        )}
        {/* S4 Temporary Note at (1060, 560) */}
        {s4NoteOpacity > 0 && (
          <div
            dir="rtl"
            style={{
              position: 'absolute',
              left: 1060,
              top: 560,
              transform: 'translate(-50%, -50%)',
              fontFamily: FONTS.BODY,
              fontWeight: 500,
              fontSize: 30,
              color: COLORS.MUTED,
              opacity: s4NoteOpacity,
              whiteSpace: 'nowrap',
              zIndex: 14,
            }}
          >
            {getText('V2-S4', 'phys_ar')}
          </div>
        )}

        {/* S5: ESXi Box x 120..500, y 300..550 */}
        {frame >= 288 + 26 && (
          <div
            style={{
              position: 'absolute',
              left: 120,
              top: 300,
              width: 380,
              height: 250,
              backgroundColor: COLORS.ESXI_GREY,
              border: `3px solid ${COLORS.INK}`,
              boxSizing: 'border-box',
              zIndex: 14,
            }}
          >
            {/* virtual machines at y=330 (local y=30) */}
            {frame >= 288 + 40 && (
              <div
                dir="ltr"
                style={{
                  position: 'absolute',
                  left: 190,
                  top: 26,
                  transform: 'translate(-50%, -50%)',
                  fontFamily: FONTS.BODY,
                  fontWeight: 600,
                  fontSize: 28,
                  color: COLORS.INK,
                  whiteSpace: 'nowrap',
                }}
              >
                <WordReveal text={getText('V2-S5', 'vms')} startFrame={288 + 40} durationFrames={7} rtl={false} />
              </div>
            )}

            {/* 6 VM boxes (2 rows x 3 cols, 92x58, starting x=150->local 30, y=360->local 60, hGap=22, vGap=20) */}
            {[0, 1, 2, 3, 4, 5].map((idx) => {
              const r = Math.floor(idx / 3);
              const c = idx % 3;
              const vmStart = 288 + Math.round((2.0 + idx * 0.15) * 24);
              if (frame < vmStart) return null;
              const p = Math.min(1, (frame - vmStart) / 5);
              return (
                <div
                  key={idx}
                  style={{
                    position: 'absolute',
                    left: 30 + c * (92 + 22),
                    top: 56 + r * (58 + 16),
                    width: 92,
                    height: 58,
                    backgroundColor: COLORS.VM_BLUE,
                    border: `3px solid ${COLORS.NAVY}`,
                    boxSizing: 'border-box',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: FONTS.BODY,
                    fontWeight: 700,
                    fontSize: 26,
                    color: COLORS.NAVY,
                    transform: `scale(${p})`,
                  }}
                >
                  {getText('V2-S5', 'vm')}
                </div>
              );
            })}

            {/* ESXi at y=520 (local y=220) */}
            <HandWrite
              text={getText('V2-S5', 'esxi')}
              startFrame={288 + 68}
              durationFrames={7}
              style={{
                position: 'absolute',
                left: 190,
                top: 218,
                transform: 'translate(-50%, -50%)',
                fontFamily: FONTS.BODY,
                fontWeight: 700,
                fontSize: 34,
                color: COLORS.INK,
              }}
            />
          </div>
        )}

        {/* S6: Storage Fabric Cloud x 540..1620, y 590..700 */}
        {frame >= 444 + 24 && (
          <>
            <svg style={{position: 'absolute', left: 0, top: 0, width: 1920, height: 1080, pointerEvents: 'none', zIndex: 12}}>
              <path
                d={cloudPath}
                fill={COLORS.NAVY}
                fillOpacity={cloudFillP}
                stroke={COLORS.INK}
                strokeWidth={3}
                strokeDasharray={evolvedCloud.strokeDasharray}
                strokeDashoffset={evolvedCloud.strokeDashoffset}
              />
            </svg>
            {frame >= 444 + 41 && (
              <div
                dir="ltr"
                style={{
                  position: 'absolute',
                  left: 1080,
                  top: 645,
                  transform: 'translate(-50%, -50%)',
                  fontFamily: FONTS.BODY,
                  fontWeight: 600,
                  fontSize: 32,
                  color: '#FFFFFF',
                  whiteSpace: 'nowrap',
                  zIndex: 14,
                }}
              >
                <WordReveal text={getText('V2-S6', 'fabric')} startFrame={444 + 41} durationFrames={19} rtl={false} />
              </div>
            )}
          </>
        )}
        {s6NoteOpacity > 0 && (
          <div
            dir="rtl"
            style={{
              position: 'absolute',
              left: 1080,
              top: 735,
              transform: 'translate(-50%, -50%)',
              fontFamily: FONTS.BODY,
              fontWeight: 500,
              fontSize: 28,
              color: COLORS.MUTED,
              opacity: s6NoteOpacity,
              whiteSpace: 'nowrap',
              zIndex: 14,
            }}
          >
            {getText('V2-S6', 'fabric_ar')}
          </div>
        )}

        {/* S7: Lines to Cylinders & 3 Storage Arrays */}
        {frame >= 588 + 5 && (
          <svg style={{position: 'absolute', left: 0, top: 0, width: 1920, height: 1080, pointerEvents: 'none', zIndex: 10}}>
            {[820, 1080, 1340].map((cx, i) => (
              <line key={i} x1={cx} y1={695} x2={cx} y2={695 + 55 * cylLinesP} stroke={COLORS.NAVY} strokeWidth={6} />
            ))}
          </svg>
        )}
        {storageArrays.map((sa, idx) => {
          const sf = Math.round(sa.t * 24);
          const nameF = Math.round((sa.t + 0.2) * 24);
          const hlF = Math.round(sa.hlStart * 24);
          return (
            <React.Fragment key={idx}>
              <Pop
                startFrame={sf}
                style={{
                  position: 'absolute',
                  left: sa.x - 65,
                  top: 750,
                  width: 130,
                  height: 100,
                  backgroundColor: '#DDE5EE',
                  border: `3px solid ${COLORS.INK}`,
                  boxSizing: 'border-box',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 13,
                }}
              >
                <IconStorageCylinder size={86} />
              </Pop>
              {frame >= nameF && (
                <div
                  dir="ltr"
                  aria-label={getText('V2-S7', sa.id)}
                  style={{
                    position: 'absolute',
                    left: sa.x,
                    top: 895,
                    transform: 'translate(-50%, -50%)',
                    fontFamily: FONTS.EN_TITLE,
                    fontWeight: 700,
                    fontSize: 26,
                    lineHeight: 1.15,
                    color: COLORS.INK,
                    textAlign: 'center',
                    opacity: Math.min(1, (frame - nameF) / 9),
                    zIndex: 14,
                  }}
                >
                  <div>
                    {frame >= hlF ? (
                      <HighlightText text={sa.line1} startFrame={hlF} durationFrames={7} rtl={false} />
                    ) : (
                      sa.line1
                    )}
                  </div>
                  <div>{sa.line2}</div>
                </div>
              )}
            </React.Fragment>
          );
        })}
        {/* S7 Dots at (1470, 800) */}
        {frame >= Math.round((24.5 + 3.0) * 24) && (
          <svg style={{position: 'absolute', left: 0, top: 0, width: 1920, height: 1080, pointerEvents: 'none', zIndex: 12}}>
            {[0, 1, 2].map((i) => (
              <circle key={i} cx={1470 + (i - 1) * 24} cy={800} r={6} fill={COLORS.INK} />
            ))}
          </svg>
        )}

        {/* S8: Legend Card x 110..520, y 600..930 */}
        {frame >= 744 + 5 && (
          <SketchBox x={110} y={600} w={410} h={330} startFrame={744 + 5} drawDurationFrames={12} seed={208}>
            <div
              style={{
                padding: '20px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                boxSizing: 'border-box',
              }}
            >
              {legendRows.map((lr, idx) => {
                const lf = Math.round(lr.startSec * 24);
                if (frame < lf) return <div key={idx} style={{height: 80}} />;
                return (
                  <div key={idx} style={{display: 'flex', flexDirection: 'column', gap: 4}}>
                    <div
                      dir="ltr"
                      style={{
                        fontFamily: FONTS.BODY,
                        fontWeight: 700,
                        fontSize: 26,
                        color: COLORS.INK,
                      }}
                    >
                      {getText('V2-S8', lr.enId)}
                    </div>
                    <div
                      dir="rtl"
                      style={{
                        fontFamily: FONTS.BODY,
                        fontWeight: 500,
                        fontSize: 24,
                        color: COLORS.INK,
                      }}
                    >
                      <WordReveal text={getText('V2-S8', lr.arId)} startFrame={lf} durationFrames={14} rtl />
                    </div>
                  </div>
                );
              })}
            </div>
          </SketchBox>
        )}
      </div>

      {/* ==================== OUTSIDE CAMERA: S5 EXPLANATION BUBBLE ==================== */}
      {s5BubbleOpacity > 0 && (
        <div style={{opacity: s5BubbleOpacity, zIndex: 35}}>
          <SketchBox x={1180} y={380} w={620} h={180} startFrame={288 + 79} drawDurationFrames={6} seed={205}>
            <div
              dir="rtl"
              aria-label={getText('V2-S5', 'esxi_note')}
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px 24px',
                boxSizing: 'border-box',
                fontFamily: FONTS.BODY,
                fontWeight: 500,
                fontSize: 32,
                color: COLORS.INK,
                textAlign: 'center',
              }}
            >
              <span>
                <bdi dir="ltr">
                  <HighlightText text="ESXi" startFrame={288 + 86} durationFrames={7} rtl={false} />
                </bdi>
                {' = '}
                <bdi dir="ltr">Hypervisor</bdi>
                {' بيشغّل كذا '}
                <bdi dir="ltr">VM</bdi>
                {' على نفس السيرفر'}
              </span>
            </div>
          </SketchBox>
        </div>
      )}

      {/* ==================== CAPTIONS FOR S3..S8 ==================== */}
      {frame < 156 && (
        <Caption text="طبقة الإدارة: vCenter Server، وبندخله من vSphere أو terminal." fadeOutStartFrame={151} />
      )}
      {frame >= 156 && frame < 288 && (
        <Caption text="تحتها مجموعات السيرفرات الحقيقية: server group 1 و2 و3... وأكتر." startFrame={156} fadeOutStartFrame={283} />
      )}
      {frame >= 288 && frame < 444 && (
        <Caption text="جوه كل سيرفر نظام ESXi بيشغّل كذا virtual machine (VM) مع بعض." startFrame={288} fadeOutStartFrame={439} />
      )}
      {frame >= 444 && frame < 588 && (
        <Caption text="السيرفرات متوصلة بـ fibre channel switch fabric أو IP network." startFrame={444} fadeOutStartFrame={583} />
      )}
      {frame >= 588 && frame < 744 && (
        <Caption text="وتحت خالص وحدات التخزين: fibre channel وiSCSI وNAS storage arrays." startFrame={588} fadeOutStartFrame={739} />
      )}
      {frame >= 744 && (
        <Caption text="Fibre Channel وiSCSI بيدّوا blocks... والـ NAS بيدّي files." startFrame={744} />
      )}

      <SceneFade startFrame={892} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 9 (48.50 -> 54.00s, 132 frames, LAYOUT_P)
// ============================================================================
const Scene9: React.FC = () => {
  const frame = useCurrentFrame();

  const brackets = [
    {num: '1', id: 'layer1', y0: 125, y1: 300, t: 1.4},
    {num: '2', id: 'layer2', y0: 310, y1: 580, t: 2.1},
    {num: '3', id: 'layer3', y0: 590, y1: 725, t: 2.8},
    {num: '4', id: 'layer4', y0: 735, y1: 895, t: 3.5},
  ];

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 2/8 · Slide 4" />

      {/* Audio */}
      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="page_turn" at={0.3} />
      <Sfx name="pencil_loop" at={0.8} dur={0.4} />
      {brackets.map((b, i) => (
        <React.Fragment key={i}>
          <Sfx name="marker_loop" at={b.t} dur={0.3} />
          <Sfx name="tick_soft" at={b.t + 0.3} />
        </React.Fragment>
      ))}

      {/* Tag top-left at (120, 60) */}
      <HandWrite
        text={getText('V2-S9', 'tag_s4')}
        startFrame={19}
        durationFrames={10}
        style={{
          position: 'absolute',
          left: 120,
          top: 40,
          border: `3px solid ${COLORS.INK}`,
          borderRadius: 12,
          backgroundColor: COLORS.CARD,
          padding: '4px 18px',
          fontFamily: FONTS.EN_TITLE,
          fontWeight: 700,
          fontSize: 40,
          color: COLORS.INK,
          zIndex: 25,
        }}
      />

      {/* PinnedPhoto s04_datacenter in x 470..1340, y 110..910 (870x800), tilt -1 deg */}
      <PinnedPhoto
        src="slides_up/s04_datacenter.png"
        x={470}
        y={110}
        w={870}
        h={800}
        tiltDeg={-1}
        startFrame={7}
      />

      {/* 4 Red Brackets at x=1370 + labels from x=1400 */}
      {brackets.map((b, idx) => {
        const bf = Math.round(b.t * 24);
        const lf = Math.round((b.t + 0.3) * 24);
        if (frame < bf) return null;
        const p = Math.min(1, (frame - bf) / 7);
        const midY = (b.y0 + b.y1) / 2;
        const pathD = `M 1355 ${b.y0} L 1375 ${b.y0} L 1375 ${b.y1} L 1355 ${b.y1}`;
        const evolved = evolvePath(p, pathD);

        return (
          <React.Fragment key={idx}>
            <svg style={{position: 'absolute', left: 0, top: 0, width: 1920, height: 1080, pointerEvents: 'none', zIndex: 22}}>
              <path
                d={pathD}
                fill="none"
                stroke={COLORS.RED}
                strokeWidth={5}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray={evolved.strokeDasharray}
                strokeDashoffset={evolved.strokeDashoffset}
              />
            </svg>
            {frame >= lf && (
              <div
                dir="ltr"
                style={{
                  position: 'absolute',
                  left: 1400,
                  top: midY,
                  transform: 'translateY(-50%)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  opacity: Math.min(1, (frame - lf) / 5),
                  zIndex: 24,
                }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: '50%',
                    border: `4px solid ${COLORS.RED}`,
                    backgroundColor: COLORS.CARD,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: FONTS.EN_TITLE,
                    fontWeight: 700,
                    fontSize: 26,
                    color: COLORS.RED,
                  }}
                >
                  {b.num}
                </div>
                <span
                  style={{
                    fontFamily: FONTS.EN_TITLE,
                    fontWeight: 700,
                    fontSize: 34,
                    color: COLORS.INK,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {getText('V2-S9', b.id)}
                </span>
              </div>
            )}
          </React.Fragment>
        );
      })}

      <Caption text="ودي نفس رسمة الـ Datacenter في Slide 4... بطبقاتها الأربعة." />
      <SceneFade startFrame={124} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 9b (54.00 -> 61.00s, 168 frames, LAYOUT_L)
// ============================================================================
const Scene9b: React.FC = () => {
  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 2/8" />

      {/* Unified LAYOUT_L Audio (Section 5.4) */}
      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="marker_loop" at={0.2} dur={0.6} />
      <Sfx name="pencil_loop" at={0.85} dur={0.45} />
      {[1.4, 2.5, 3.6].map((t0, i) => (
        <React.Fragment key={i}>
          <Sfx name="pencil_loop" at={t0} dur={0.3} gainDb={-6} />
          <Sfx name="pop_soft" at={t0 + 0.25} gainDb={-3} />
          <Sfx name="pencil_loop" at={t0 + 0.55} dur={0.5} gainDb={-6} />
        </React.Fragment>
      ))}
      <Sfx name="tick_soft" at={4.8} gainDb={-3} />

      <LayoutL
        centerTopicTitle={getText('V2-S9b', 'center_title')}
        centerSlideTag="Slide 4"
        nextTopicTitle={getText('V2-S9b', 'n1_topic')}
        nodes={[
          {
            position: 'N1',
            directionText: 'هنشوفه في V3 · Slides 5–6',
            topicTitle: getText('V2-S9b', 'n1_topic'),
            arabicText: 'الـ VMs اللي شغالة على ESXi هي فكرة الـ Virtualization',
            labels: [getText('V2-S9b', 'lbl_esxi'), getText('V2-S9b', 'lbl_vms')],
            crop: {
              src: 'slides_up/s04_datacenter.png',
              region: {x0: 1, x1: 24, y0: 50, y1: 70},
            },
          },
          {
            position: 'N2',
            directionText: 'هنشوفه في V5 · Slide 8',
            topicTitle: getText('V2-S9b', 'n2_topic'),
            arabicText: 'دي tools بندير بيها الـ Datacenter: ده الـ network management',
            labels: [
              getText('V2-S9b', 'lbl_vcenter'),
              getText('V2-S9b', 'lbl_vsphere'),
              getText('V2-S9b', 'lbl_vsphere_web'),
              getText('V2-S9b', 'lbl_term'),
            ],
            crop: {
              src: 'slides_up/s04_datacenter.png',
              region: {x0: 6, x1: 88, y0: 0, y1: 19},
            },
          },
          {
            position: 'N3',
            directionText: 'هنشوفه في V7 · Slides 11–13',
            topicTitle: getText('V2-S9b', 'n3_topic'),
            arabicText: 'التخزين ده بالتفصيل هو موضوع الـ SAN والـ NAS',
            labels: [
              getText('V2-S9b', 'lbl_fc'),
              getText('V2-S9b', 'lbl_iscsi'),
              getText('V2-S9b', 'lbl_nas'),
            ],
            crop: {
              src: 'slides_up/s04_datacenter.png',
              region: {x0: 29, x1: 96, y0: 62, y1: 100},
            },
          },
        ]}
      />

      <Caption text="الـ Datacenter فيه بداية 3 مواضيع جايين: VMs وإدارة وتخزين." />
      <SceneFade startFrame={160} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 10 (61.00 -> 71.00s, 240 frames, LAYOUT_R: StudyCard)
// ============================================================================
const Scene10: React.FC = () => {
  const frame = useCurrentFrame();
  const showTitle = frame >= 18;
  const showTags = frame >= 30;
  const showLines = frame >= 32;
  const showBlocks = frame >= 36;
  const showGlossary = frame >= 79;

  const glossary = [
    {term: 'vCenter Server', meaning: 'سيرفر الإدارة المركزي'},
    {term: 'vSphere Client / vSphere Web Client', meaning: 'برنامج الإدارة / الإدارة من الـ browser'},
    {term: 'terminal', meaning: 'دخول بالأوامر (command line)'},
    {term: 'server group', meaning: 'مجموعة سيرفرات حقيقية'},
    {term: 'ESXi', meaning: 'Hypervisor بيشغّل الـ VMs'},
    {term: 'virtual machines (VM)', meaning: 'أجهزة افتراضية'},
    {term: 'fibre channel switch fabric / IP network', meaning: 'شبكة التخزين بين السيرفرات والتخزين'},
    {term: 'fibre channel storage array', meaning: 'تخزين block على Fibre Channel'},
    {term: 'iSCSI storage array', meaning: 'تخزين block على شبكة IP'},
    {term: 'NAS storage array', meaning: 'تخزين files على الشبكة'},
  ];

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 2/8 · Slide 4" />

      {/* Unified StudyCard Audio (Section 5.4) */}
      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="pencil_loop" at={0.2} dur={0.5} />
      <Sfx name="marker_loop" at={0.75} dur={0.5} />
      <Sfx name="pop_soft" at={1.25} gainDb={-6} />
      <Sfx name="page_turn" at={1.5} gainDb={-6} />
      <Sfx name="tick_soft" at={3.2} gainDb={-3} />

      <div style={{position: 'absolute', left: 60, top: 80, width: 1800, height: 870, zIndex: 20}}>
        <SketchBox x={0} y={0} w={1800} h={870} seed={99} startFrame={5} drawDurationFrames={12}>
          <div style={{padding: '20px 36px', height: '100%', boxSizing: 'border-box', position: 'relative'}}>
            {/* Header */}
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 54}}>
              <div style={{display: 'flex', gap: 12, opacity: showTags ? 1 : 0}}>
                <div
                  style={{
                    border: `2px solid ${COLORS.INK}`,
                    borderRadius: 8,
                    padding: '3px 12px',
                    fontFamily: FONTS.EN_TITLE,
                    fontWeight: 700,
                    fontSize: 26,
                    color: COLORS.INK,
                  }}
                >
                  Slide 4
                </div>
              </div>
              {showTitle && (
                <div
                  dir="rtl"
                  style={{
                    fontFamily: FONTS.HOOK,
                    fontWeight: 700,
                    fontSize: 46,
                    color: COLORS.INK,
                  }}
                >
                  بطاقة المذاكرة: نص المحاضرة كامل
                </div>
              )}
            </div>

            {showLines && (
              <div style={{width: '100%', height: 2, backgroundColor: COLORS.INK, marginTop: 10, marginBottom: 14}} />
            )}

            <div style={{display: 'flex', height: 745, gap: 30}}>
              {/* Left Column: Slide 4 + Datacenter + Diagram (height 560) */}
              <div
                dir="ltr"
                style={{
                  flex: 1.7,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                  opacity: showBlocks ? 1 : 0,
                }}
              >
                <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                  <span
                    style={{
                      border: `2px solid ${COLORS.INK}`,
                      borderRadius: 6,
                      padding: '1px 10px',
                      fontFamily: FONTS.EN_TITLE,
                      fontWeight: 700,
                      fontSize: 25,
                      color: COLORS.INK,
                    }}
                  >
                    Slide 4
                  </span>
                  <span style={{fontFamily: FONTS.BODY, fontWeight: 700, fontSize: 32, color: COLORS.INK}}>
                    {getText('V2-S10', 'study_title')}
                  </span>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 4}}>
                  <img
                    src={staticFile('slides_up/s04_datacenter.png')}
                    alt="Datacenter"
                    style={{
                      height: 560,
                      border: `3px solid ${COLORS.INK}`,
                      backgroundColor: '#FFFFFF',
                      padding: 8,
                      boxSizing: 'border-box',
                      objectFit: 'contain',
                    }}
                  />
                  <span style={{fontFamily: FONTS.BODY, fontWeight: 500, fontSize: 22, color: COLORS.MUTED, marginTop: 6}}>
                    (رسمة الشريحة)
                  </span>
                </div>
              </div>

              {showLines && (
                <div style={{width: 2, height: '94%', backgroundColor: COLORS.INK, alignSelf: 'center'}} />
              )}

              {/* Right Column: 10 Glossary items */}
              <div
                dir="rtl"
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  opacity: showGlossary ? 1 : 0,
                }}
              >
                <div
                  style={{
                    fontFamily: FONTS.HOOK,
                    fontWeight: 700,
                    fontSize: 36,
                    lineHeight: 1.15,
                    color: COLORS.INK,
                    marginBottom: 4,
                  }}
                >
                  مصطلحات مهمة
                </div>
                {glossary.map((g, gi) => (
                  <div
                    key={gi}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      height: 64,
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      dir="ltr"
                      style={{
                        fontFamily: FONTS.EN_TITLE,
                        fontWeight: 700,
                        fontSize: 24,
                        lineHeight: 1.1,
                        color: COLORS.INK,
                        textAlign: 'right',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {g.term}
                    </div>
                    <div
                      dir="rtl"
                      style={{
                        fontFamily: FONTS.BODY,
                        fontWeight: 500,
                        fontSize: 22,
                        lineHeight: 1.15,
                        color: COLORS.MUTED,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {g.meaning}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SketchBox>
      </div>

      <Caption text="دي رسمة المحاضرة ومصطلحاتها... وقّف الفيديو وذاكرها براحتك." />
      <SceneFade startFrame={232} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 11 (71.00 -> 77.00s, 144 frames, LAYOUT_F: Outro)
// ============================================================================
const Scene11: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 2/8" />

      {/* Audio */}
      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="marker_loop" at={0.4} dur={0.9} />
      <Sfx name="marker_loop" at={1.35} dur={0.6} />
      <Sfx name="chime_success" at={1.95} />
      <Sfx name="pencil_loop" at={2.1} dur={0.5} />
      <Sfx name="pencil_loop" at={3.0} dur={0.8} gainDb={-3} />
      <Sfx name="highlight_swipe" at={3.85} dur={0.35} />
      <Sfx name="pop_soft" at={4.3} />
      <Sfx name="pop_soft" at={4.5} gainDb={-3} />

      {/* Datacenter (Caveat Brush, 150px) at (1100, 290) */}
      <HandWrite
        text={getText('V2-S11', 'outro_en')}
        startFrame={10}
        durationFrames={22}
        style={{
          position: 'absolute',
          left: 1100,
          top: 290,
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.KEY_EN,
          fontWeight: 400,
          fontSize: 150,
          color: COLORS.INK,
          zIndex: 20,
        }}
      />

      {/* RedEllipse (rx 380, ry 120) */}
      <RedEllipse cx={1100} cy={290} rx={380} ry={120} startFrame={32} durationFrames={14} />

      {/* مركز البيانات (Aref Ruqaa, 80px) at (1100, 470) */}
      <HandWrite
        text={getText('V2-S11', 'outro_ar')}
        startFrame={50}
        durationFrames={12}
        rtl
        style={{
          position: 'absolute',
          left: 1100,
          top: 470,
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.HOOK,
          fontWeight: 700,
          fontSize: 80,
          color: COLORS.INK,
          zIndex: 20,
        }}
      />

      {/* Karim K5 bottom-left (x=330, height=720) at 2.70s (frame 65) */}
      {frame >= 65 && (
        <Character src="karim_K5.png" x={330} height={720} baseY={1000} side="left" startFrame={65} />
      )}

      {/* فهمت! at (330, 250) at 4.50s (frame 108) */}
      <Pop
        startFrame={108}
        style={{
          position: 'absolute',
          left: 330,
          top: 250,
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.HOOK,
          fontWeight: 700,
          fontSize: 56,
          color: COLORS.RED,
          zIndex: 25,
        }}
      >
        {getText('V2-S11', 'exclaim')}
      </Pop>

      {/* Highlighted LTR sentence at (1100, 610) */}
      {frame >= 72 && (
        <div
          dir="ltr"
          style={{
            position: 'absolute',
            left: 1100,
            top: 610,
            transform: 'translate(-50%, -50%)',
            fontFamily: FONTS.BODY,
            fontWeight: 600,
            fontSize: 38,
            color: COLORS.INK,
            whiteSpace: 'nowrap',
            zIndex: 20,
          }}
        >
          {frame < 92 ? (
            <WordReveal text={getText('V2-S11', 'outro_summary')} startFrame={72} durationFrames={19} rtl={false} />
          ) : (
            <HighlightText text={getText('V2-S11', 'outro_summary')} startFrame={92} durationFrames={8} rtl={false} />
          )}
        </div>
      )}

      {/* IconDatacenterBuilding (140px) at (1760, 290) at 4.30s (frame 103) */}
      <Pop
        startFrame={103}
        style={{
          position: 'absolute',
          left: 1760 - 70,
          top: 290 - 63,
          zIndex: 22,
        }}
      >
        <IconDatacenterBuilding size={140} />
      </Pop>

      <Caption text="ودي معمارية الـ Datacenter بطبقاتها الأربعة!" />
      <SceneFade startFrame={127} durationFrames={17} />
    </AbsoluteFill>
  );
};

// ============================================================================
// MAIN V2 COMPOSITION (77.0s = 1848 frames at 24fps)
// ============================================================================
export const V2: React.FC = () => {
  return (
    <AbsoluteFill>
      <Paper />
      <AbsoluteFill style={{zIndex: 1}}>
        {/* S1: 0.00 -> 5.50s (0..132) */}
        <Sequence from={0} durationInFrames={132}>
          <Scene1 />
        </Sequence>

        {/* S2: 5.50 -> 11.00s (132..264) */}
        <Sequence from={132} durationInFrames={132}>
          <Scene2 />
        </Sequence>

        {/* S3..S8 Continuous Vector Build: 11.00 -> 48.50s (264..1164, 900 frames) */}
        <Sequence from={264} durationInFrames={900}>
          <Scenes3To8 />
        </Sequence>

        {/* S9: 48.50 -> 54.00s (1164..1296, 132 frames) */}
        <Sequence from={1164} durationInFrames={132}>
          <Scene9 />
        </Sequence>

        {/* S9b: 54.00 -> 61.00s (1296..1464, 168 frames) */}
        <Sequence from={1296} durationInFrames={168}>
          <Scene9b />
        </Sequence>

        {/* S10: 61.00 -> 71.00s (1464..1704, 240 frames) */}
        <Sequence from={1464} durationInFrames={240}>
          <Scene10 />
        </Sequence>

        {/* S11: 71.00 -> 77.00s (1704..1848, 144 frames) */}
        <Sequence from={1704} durationInFrames={144}>
          <Scene11 />
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
