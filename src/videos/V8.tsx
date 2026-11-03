// src/videos/V8.tsx
import React from 'react';
import {AbsoluteFill, Sequence, useCurrentFrame, interpolate, Easing, staticFile} from 'remotion';
import {COLORS, FONTS} from '../theme';
import {Sfx} from '../lib/sfx';
import {
  Paper,
  SketchBox,
  HandUnderline,
  RedEllipse,
  HighlightText,
  CheckMark,
  Arrow,
  WordReveal,
  Caption,
  Character,
  SceneFade,
  SlideBadge,
  AgendaChip,
  NameOval,
  HandWrite,
  Sparkle,
  Pop,
  PinnedPhoto,
  Spotlight,
  Camera,
  LayoutL,
} from '../components';
import {
  IconSwitch,
  IconRouter,
  IconFirewallWall,
  IconServerTower,
  IconLaptop,
  IconGear,
  IconTradSwitch,
  IconProgSwitch,
  IconControllerRed,
  IconDashboard,
} from '../icons';
import {getText} from './V8.data';

// ============================================================================
// SCENE 1 (0.00 -> 5.50s, 132 frames, LAYOUT_H)
// ============================================================================
const Scene1: React.FC = () => {
  const frame = useCurrentFrame();

  const devices = [
    {x: 320, y: 450, type: 'switch', startF: 46},
    {x: 650, y: 420, type: 'router', startF: 49},
    {x: 980, y: 460, type: 'firewall', startF: 53},
    {x: 360, y: 740, type: 'server', startF: 56},
    {x: 680, y: 750, type: 'switch', startF: 60},
    {x: 980, y: 730, type: 'server', startF: 64},
  ];

  const linesP = interpolate(frame, [67, 82], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  const pairs = [
    [0, 1],
    [1, 2],
    [0, 3],
    [0, 4],
    [1, 3],
    [1, 4],
    [1, 5],
    [2, 4],
    [2, 5],
    [3, 4],
    [4, 5],
    [0, 5],
  ];

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 8/8 · Slide 14" />
      <AgendaChip topicNumber={7} topicTitle={getText('V8-S1', 'agenda_chip')} startFrame={0} />

      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="marker_loop" at={0.4} dur={1.0} />
      <Sfx name="marker_loop" at={1.45} dur={0.35} />
      <Sfx name="pop_soft" at={1.9} gainDb={-6} />
      <Sfx name="pop_soft" at={2.35} gainDb={-6} />
      <Sfx name="pencil_loop" at={2.8} dur={0.6} />
      <Sfx name="boing_question" at={3.5} />
      <Sfx name="pencil_loop" at={4.0} dur={0.35} />

      <Character src="karim_K3.png" x={1520} side="right" startFrame={0} />
      <NameOval name={getText('V8-S1', 'name_karim')} cx={1520} cy={130} startFrame={96} seed={8101} />

      <HandWrite
        text={getText('V8-S1', 'hook_title')}
        startFrame={10}
        durationFrames={24}
        rtl={true}
        style={{
          position: 'absolute',
          left: 220,
          width: 960,
          top: 140,
          textAlign: 'center',
          fontFamily: FONTS.HOOK,
          fontWeight: 700,
          fontSize: 92,
          color: COLORS.INK,
          zIndex: 20,
        }}
      />
      <HandUnderline x1={300} x2={1100} y={265} startFrame={35} durationFrames={8} color={COLORS.RED} strokeWidth={6} />

      {/* Tangled lines between all devices */}
      {linesP > 0 && (
        <svg width={1920} height={1080} style={{position: 'absolute', left: 0, top: 0, pointerEvents: 'none', zIndex: 14}}>
          {pairs.map(([a, b], idx) => {
            const da = devices[a];
            const db = devices[b];
            return (
              <line
                key={idx}
                x1={da.x}
                y1={da.y}
                x2={da.x + (db.x - da.x) * linesP}
                y2={da.y + (db.y - da.y) * linesP}
                stroke={COLORS.INK}
                strokeWidth={3}
                strokeDasharray="8 6"
              />
            );
          })}
        </svg>
      )}

      {/* 6 scattered devices + "!" on each */}
      {devices.map((d, idx) => (
        <React.Fragment key={idx}>
          <Pop startFrame={d.startF} style={{position: 'absolute', left: d.x - 55, top: d.y - 55, zIndex: 16}}>
            {d.type === 'switch' && <IconSwitch size={110} />}
            {d.type === 'router' && <IconRouter size={110} />}
            {d.type === 'firewall' && <IconFirewallWall size={110} />}
            {d.type === 'server' && <IconServerTower size={110} />}
          </Pop>
          <Pop
            startFrame={84 + idx * 2}
            style={{
              position: 'absolute',
              left: d.x + 35,
              top: d.y - 85,
              fontFamily: FONTS.HOOK,
              fontWeight: 700,
              fontSize: 48,
              color: COLORS.RED,
              zIndex: 22,
            }}
          >
            {getText('V8-S1', 'excl')}
          </Pop>
        </React.Fragment>
      ))}

      <Caption text="فيها switches وrouters وfirewall وservers... نظبط كل واحد لوحده؟!" />
      <SceneFade startFrame={124} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 2 (5.50 -> 13.00s, 180 frames, LAYOUT_P + Legend)
// ============================================================================
const Scene2: React.FC = () => {
  const frame = useCurrentFrame();
  const photoRect = {x: 100, y: 160, w: 480, h: 720};

  const items = [
    {en: getText('V8-S2', 's14_1'), ar: getText('V8-S2', 's14_1_ar'), reg: {x0: 0, x1: 17, y0: 68, y1: 80}},
    {en: getText('V8-S2', 's14_2'), ar: getText('V8-S2', 's14_2_ar'), reg: {x0: 45, x1: 64, y0: 69, y1: 82}},
    {en: getText('V8-S2', 's14_3'), ar: getText('V8-S2', 's14_3_ar'), reg: {x0: 1, x1: 38, y0: 51, y1: 70}},
    {en: getText('V8-S2', 's14_4'), ar: getText('V8-S2', 's14_4_ar'), reg: {x0: 39, x1: 57, y0: 50, y1: 63}},
    {en: getText('V8-S2', 's14_5'), ar: getText('V8-S2', 's14_5_ar'), reg: {x0: 62, x1: 83, y0: 36, y1: 54}},
    {en: getText('V8-S2', 's14_6'), ar: getText('V8-S2', 's14_6_ar'), reg: {x0: 81, x1: 100, y0: 35, y1: 44}},
    {en: getText('V8-S2', 's14_7'), ar: getText('V8-S2', 's14_7_ar'), reg: {x0: 82, x1: 100, y0: 50, y1: 63}},
    {en: getText('V8-S2', 's14_8'), ar: getText('V8-S2', 's14_8_ar'), reg: {x0: 26, x1: 55, y0: 0, y1: 15}},
    {en: getText('V8-S2', 's14_9'), ar: getText('V8-S2', 's14_9_ar'), reg: {x0: 58, x1: 86, y0: 5, y1: 26}},
    {en: getText('V8-S2', 's14_10'), ar: getText('V8-S2', 's14_10_ar'), reg: {x0: 58, x1: 86, y0: 5, y1: 26}},
  ];

  // Active Spotlight for current row
  let activeSpot: {reg: {x0: number; x1: number; y0: number; y1: number}; startF: number} | null = null;
  for (let i = 0; i < items.length; i++) {
    const sf = Math.round((2.0 + i * 0.48) * 24);
    if (frame >= sf && frame < sf + 10) {
      activeSpot = {reg: items[i].reg, startF: sf};
    }
  }

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 8/8 · Slide 14" />

      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="page_turn" at={0.3} />
      <Sfx name="pencil_loop" at={0.7} dur={0.5} />
      <Sfx name="pencil_loop" at={1.25} dur={0.6} gainDb={-3} />
      {items.map((_, idx) => (
        <Sfx key={idx} name="pencil_loop" at={2.0 + idx * 0.48} dur={0.3} gainDb={-8} />
      ))}

      <PinnedPhoto
        src="slides_up/s14_network_3d.png"
        x={photoRect.x}
        y={photoRect.y}
        w={photoRect.w}
        h={photoRect.h}
        tiltDeg={0}
        startFrame={7}
      />

      {activeSpot && (
        <Spotlight
          photoRect={photoRect}
          region={activeSpot.reg}
          startFrame={activeSpot.startF}
          drawFrames={5}
          maskId={`v8-s2-${activeSpot.startF}`}
        />
      )}

      {/* Legend Card x 640->1840, y 120->920 */}
      <SketchBox x={640} y={120} w={1200} h={800} startFrame={17} drawDurationFrames={12} seed={8201} />

      <div
        style={{
          position: 'absolute',
          left: 1240,
          top: 180,
          transform: 'translate(-50%, -50%)',
          whiteSpace: 'nowrap',
          zIndex: 20,
        }}
      >
        <WordReveal
          text={getText('V8-S2', 's2_card_head')}
          startFrame={30}
          durationFrames={14}
          rtl={true}
          style={{fontFamily: FONTS.BODY, fontWeight: 600, fontSize: 38, color: COLORS.INK}}
        />
      </div>

      {/* 10 rows in 2 columns */}
      {items.map((it, idx) => {
        const col = idx < 5 ? 0 : 1;
        const row = idx % 5;
        const x = col === 0 ? 680 : 1270;
        const y = 260 + row * 120;
        const sf = Math.round((2.0 + idx * 0.48) * 24);
        if (frame < sf) return null;
        const op = interpolate(frame, [sf, sf + 8], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

        return (
          <div
            key={idx}
            style={{
              position: 'absolute',
              left: x,
              width: 550,
              top: y,
              opacity: op,
              zIndex: 22,
            }}
          >
            <div
              dir="ltr"
              style={{
                fontFamily: FONTS.EN_TITLE,
                fontWeight: 700,
                fontSize: 32,
                color: COLORS.INK,
                lineHeight: 1.2,
              }}
            >
              {it.en}
            </div>
            <div
              dir="rtl"
              style={{
                fontFamily: FONTS.BODY,
                fontWeight: 500,
                fontSize: 25,
                color: COLORS.MUTED,
                textAlign: 'left',
                marginTop: 2,
              }}
            >
              {it.ar}
            </div>
          </div>
        );
      })}

      <Caption text="كل جهاز هنا ليه إعداداته لوحده... والإدارة كده صعبة جدًا." />
      <SceneFade startFrame={172} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 3 (13.00 -> 20.00s, 168 frames, LAYOUT_A)
// ============================================================================
const Scene3: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 8/8 · Slide 14" />

      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="pencil_loop" at={0.35} dur={0.6} />
      <Sfx name="marker_loop" at={1.0} dur={0.9} />
      <Sfx name="pencil_loop" at={1.95} dur={0.5} />
      <Sfx name="pencil_loop" at={2.55} dur={2.0} gainDb={-3} />
      <Sfx name="highlight_swipe" at={4.6} dur={0.35} />
      <Sfx name="highlight_swipe" at={5.0} dur={0.35} />
      <Sfx name="lightbulb_ding" at={5.4} />
      <Sfx name="pencil_loop" at={5.7} dur={0.3} gainDb={-6} />

      <Character src="omar_O4.png" x={400} side="left" startFrame={0} />
      <NameOval name={getText('V8-S3', 'name_omar')} cx={400} cy={130} startFrame={137} seed={8301} />

      <SketchBox x={700} y={120} w={1140} h={790} startFrame={8} drawDurationFrames={15} seed={8300} />

      <HandWrite
        text={getText('V8-S3', 's14_title')}
        startFrame={24}
        durationFrames={22}
        style={{
          position: 'absolute',
          left: 1270,
          top: 205,
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.EN_TITLE,
          fontWeight: 700,
          fontSize: 54,
          color: COLORS.INK,
          whiteSpace: 'nowrap',
          zIndex: 20,
        }}
      />
      <HandWrite
        text={getText('V8-S3', 's14_title_ar')}
        startFrame={47}
        durationFrames={12}
        rtl={true}
        style={{
          position: 'absolute',
          left: 1270,
          top: 295,
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.HOOK,
          fontWeight: 700,
          fontSize: 52,
          color: COLORS.INK,
          whiteSpace: 'nowrap',
          zIndex: 20,
        }}
      />

      {/* Definition paragraph */}
      <div
        style={{
          position: 'absolute',
          left: 760,
          width: 1020,
          top: 380,
          zIndex: 20,
        }}
      >
        {frame < 110 ? (
          <WordReveal
            text={getText('V8-S3', 's14_def')}
            startFrame={61}
            durationFrames={48}
            rtl={false}
            style={{
              fontFamily: FONTS.BODY,
              fontWeight: 600,
              fontSize: 38,
              lineHeight: 1.45,
              color: COLORS.INK,
            }}
          />
        ) : (
          <div
            dir="ltr"
            style={{
              fontFamily: FONTS.BODY,
              fontWeight: 600,
              fontSize: 38,
              lineHeight: 1.45,
              color: COLORS.INK,
            }}
          >
            Software-defined networking (SDN) is an architectural approach to network management that enables the{' '}
            <HighlightText text="centralized management" startFrame={110} durationFrames={8} rtl={false} /> of network
            infrastructures{' '}
            {frame >= 120 ? (
              <HighlightText text="through software" startFrame={120} durationFrames={8} rtl={false} />
            ) : (
              'through software'
            )}
            .
          </div>
        )}
      </div>

      {/* Icon centered at (1270, 760): laptop with </> connected by dashed lines to 3 small switches */}
      <Pop
        startFrame={131}
        style={{
          position: 'absolute',
          left: 970,
          top: 660,
          width: 600,
          height: 200,
          zIndex: 22,
        }}
      >
        <svg width={600} height={200} style={{position: 'absolute', left: 0, top: 0}}>
          <line x1={230} y1={100} x2={420} y2={40} stroke={COLORS.SDN_DOT} strokeWidth={4} strokeDasharray="6 8" />
          <line x1={230} y1={100} x2={420} y2={100} stroke={COLORS.SDN_DOT} strokeWidth={4} strokeDasharray="6 8" />
          <line x1={230} y1={100} x2={420} y2={160} stroke={COLORS.SDN_DOT} strokeWidth={4} strokeDasharray="6 8" />
        </svg>
        <div style={{position: 'absolute', left: 100, top: 40}}>
          <IconLaptop size={125} />
          <div
            style={{
              position: 'absolute',
              left: 36,
              top: 22,
              fontFamily: FONTS.EN_TITLE,
              fontWeight: 700,
              fontSize: 28,
              color: COLORS.RED,
            }}
          >
            {'</>'}
          </div>
        </div>
        {[15, 75, 135].map((sy, idx) => (
          <div key={idx} style={{position: 'absolute', left: 420, top: sy}}>
            <IconSwitch size={65} />
          </div>
        ))}
      </Pop>

      <Caption text="SDN: نعمل centralized management للشبكة كلها through software." />
      <SceneFade startFrame={160} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENES 4 -> 8 (20.00 -> 51.00s, 744 frames, Slide 15 Vector Comparison CONT)
// ============================================================================
const Scenes4To8: React.FC = () => {
  const frame = useCurrentFrame();

  // Sub-scene frame offsets within 0..744:
  // S4: 0..144 (6.0s)
  // S5: 144..288 (6.0s)
  // S6: 288..432 (6.0s)
  // S7: 432..600 (7.0s)
  // S8: 600..744 (6.0s)

  const divP = interpolate(frame, [19, 34], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const tradLinesP = interpolate(frame, [86, 101], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const sdnLinesP = interpolate(frame, [432 + 46, 432 + 55], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  // Camera in S5: TS1 (384, 497) -> (700, 450), scale 1 -> 1.8 at 144..158, back at 269..283
  let camScale = 1;
  let camTx = 0;
  let camTy = 0;
  if (frame >= 144 && frame <= 283) {
    const zIn = interpolate(frame, [144, 158], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.inOut(Easing.cubic),
    });
    const zOut = interpolate(frame, [269, 283], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.inOut(Easing.cubic),
    });
    const z = zIn - zOut;
    camScale = 1 + 0.8 * z;
    const targetTx = 700 - 1.8 * 384;
    const targetTy = 450 - 1.8 * 497;
    camTx = targetTx * z;
    camTy = targetTy * z;
  }

  // S5 notes opacity (fade out at 264..269)
  const s5Note1Op =
    frame >= 178 && frame < 269
      ? interpolate(frame, [178, 186, 264, 269], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})
      : 0;
  const s5Note2Op =
    frame >= 216 && frame < 269
      ? interpolate(frame, [216, 224, 264, 269], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})
      : 0;

  // S6 elements opacity (fade out at 425..432)
  const s6FadeOut = interpolate(frame, [425, 432], [1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const gearAngle = interpolate(frame, [288 + 29, 288 + 58], [0, 360], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // S6 moving laptop position (288 + 34 .. 288 + 91)
  let lapX = 384;
  let lapY = 420;
  if (frame >= 322 && frame < 432) {
    if (frame < 341) {
      lapX = 384;
      lapY = 420;
    } else if (frame < 348) {
      const p = (frame - 341) / 7;
      lapX = 384 + (196 - 384) * p;
      lapY = 420 + (595 - 420) * p;
    } else if (frame < 360) {
      lapX = 196;
      lapY = 595;
    } else if (frame < 367) {
      const p = (frame - 360) / 7;
      lapX = 196 + (573 - 196) * p;
      lapY = 595 + (605 - 595) * p;
    } else {
      lapX = 573;
      lapY = 605;
    }
  }

  // S8 blue switches bounce at 600 + 108 = 708f
  const s8Bounce =
    frame >= 708 && frame <= 718
      ? interpolate(frame, [708, 713, 718], [1, 1.08, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})
      : 1;

  // Caption per sub-scene
  let captionText = 'في الـ Traditional Network: كل Switch شايل العقل والشغل مع بعض.';
  let captionStart = 4;
  if (frame >= 600) {
    captionText = 'والـ Programmable Switches بتنفّذ أوامر الـ Controller على طول.';
    captionStart = 600;
  } else if (frame >= 432) {
    captionText = 'في الـ SDN جمعنا الـ Control Plane في Controller Machine واحدة.';
    captionStart = 432;
  } else if (frame >= 288) {
    captionText = 'كل switch بيفكّر لوحده... وأي تغيير لازم تظبط كل جهاز بإيدك!';
    captionStart = 288;
  } else if (frame >= 144) {
    captionText = 'Control Plane = العقل اللي بيقرّر... وData Plane = بينقل الداتا.';
    captionStart = 144;
  }

  const tradSwitches = [
    {x: 384, y: 497, sf: 55},
    {x: 196, y: 670, sf: 65},
    {x: 573, y: 680, sf: 74},
  ];

  const progSwitches = [
    {x: 1401, y: 497, sf: 432 + 24},
    {x: 1181, y: 701, sf: 432 + 31},
    {x: 1605, y: 701, sf: 432 + 38},
  ];

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 8/8 · Slide 15" />

      {/* S4 Audio */}
      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="pencil_loop" at={0.3} dur={0.4} />
      <Sfx name="pencil_loop" at={0.8} dur={0.6} />
      <Sfx name="marker_loop" at={1.5} dur={0.6} />
      <Sfx name="pop_soft" at={2.3} gainDb={-3} />
      <Sfx name="pop_soft" at={2.7} gainDb={-3} />
      <Sfx name="pop_soft" at={3.1} gainDb={-3} />
      <Sfx name="pencil_loop" at={3.6} dur={0.6} />
      <Sfx name="pencil_loop" at={4.3} dur={0.4} />

      {/* S5 Audio (+6.0s) */}
      <Sfx name="zoom_in" at={6.0} />
      <Sfx name="pencil_loop" at={6.0 + 0.8} dur={0.4} />
      <Sfx name="pop_soft" at={6.0 + 1.2} gainDb={-3} />
      <Sfx name="pencil_loop" at={6.0 + 1.4} dur={0.7} gainDb={-6} />
      <Sfx name="pencil_loop" at={6.0 + 2.4} dur={0.4} />
      <Sfx name="pop_soft" at={6.0 + 2.8} gainDb={-3} />
      <Sfx name="pencil_loop" at={6.0 + 3.0} dur={0.7} gainDb={-6} />
      <Sfx name="whoosh_soft" at={6.0 + 5.2} gainDb={-6} />

      {/* S6 Audio (+12.0s) */}
      <Sfx name="pop_soft" at={12.0 + 0.3} gainDb={-3} />
      <Sfx name="pop_soft" at={12.0 + 0.6} gainDb={-3} />
      <Sfx name="pop_soft" at={12.0 + 0.9} gainDb={-3} />
      <Sfx name="typing_soft" at={12.0 + 1.7} dur={0.5} gainDb={-6} />
      <Sfx name="typing_soft" at={12.0 + 2.5} dur={0.5} gainDb={-6} />
      <Sfx name="typing_soft" at={12.0 + 3.3} dur={0.5} gainDb={-6} />
      <Sfx name="warn_soft" at={12.0 + 4.0} gainDb={-3} />

      {/* S7 Audio (+18.0s) */}
      <Sfx name="marker_loop" at={18.0 + 0.3} dur={0.6} />
      <Sfx name="pop_soft" at={18.0 + 1.0} gainDb={-3} />
      <Sfx name="pop_soft" at={18.0 + 1.3} gainDb={-3} />
      <Sfx name="pop_soft" at={18.0 + 1.6} gainDb={-3} />
      <Sfx name="pencil_loop" at={18.0 + 1.9} dur={0.4} />
      <Sfx name="whoosh_soft" at={18.0 + 2.5} />
      <Sfx name="stamp_thud" at={18.0 + 3.8} />
      <Sfx name="pencil_loop" at={18.0 + 4.1} dur={0.5} />

      {/* S8 Audio (+25.0s) */}
      <Sfx name="pencil_loop" at={25.0 + 0.3} dur={1.0} gainDb={-3} />
      <Sfx name="pencil_loop" at={25.0 + 1.5} dur={0.4} />
      <Sfx name="signal_pips" at={25.0 + 2.1} gainDb={-3} />
      <Sfx name="signal_pips" at={25.0 + 2.9} gainDb={-3} />
      <Sfx name="signal_pips" at={25.0 + 3.7} gainDb={-3} />
      <Sfx name="tick_soft" at={25.0 + 4.5} gainDb={-3} />

      {/* Top-left Slide 15 Title Tag */}
      <HandWrite
        text={getText('V8-S4', 's15_title')}
        startFrame={7}
        durationFrames={10}
        style={{
          position: 'absolute',
          left: 60,
          top: 40,
          fontFamily: FONTS.EN_TITLE,
          fontWeight: 700,
          fontSize: 36,
          color: COLORS.INK,
          zIndex: 35,
        }}
      />

      <Camera scale={camScale} translateX={camTx} translateY={camTy}>
        {/* Divider line at x=960 from y=130 to 900 */}
        <svg width={1920} height={1080} style={{position: 'absolute', left: 0, top: 0, pointerEvents: 'none', zIndex: 10}}>
          <line x1={960} y1={130} x2={960} y2={130 + 770 * divP} stroke={COLORS.INK} strokeWidth={5} />

          {/* Traditional switch links */}
          {tradLinesP > 0 && (
            <>
              <line
                x1={384}
                y1={497}
                x2={384 + (196 - 384) * tradLinesP}
                y2={497 + (670 - 497) * tradLinesP}
                stroke={COLORS.INK}
                strokeWidth={5}
              />
              <line
                x1={384}
                y1={497}
                x2={384 + (573 - 384) * tradLinesP}
                y2={497 + (680 - 497) * tradLinesP}
                stroke={COLORS.INK}
                strokeWidth={5}
              />
              <line
                x1={196}
                y1={670}
                x2={196 + (573 - 196) * tradLinesP}
                y2={670 + (680 - 670) * tradLinesP}
                stroke={COLORS.INK}
                strokeWidth={5}
              />
            </>
          )}

          {/* SDN programmable switch links */}
          {sdnLinesP > 0 && (
            <>
              <line
                x1={1401}
                y1={497}
                x2={1401 + (1181 - 1401) * sdnLinesP}
                y2={497 + (701 - 497) * sdnLinesP}
                stroke={COLORS.INK}
                strokeWidth={5}
              />
              <line
                x1={1401}
                y1={497}
                x2={1401 + (1605 - 1401) * sdnLinesP}
                y2={497 + (701 - 497) * sdnLinesP}
                stroke={COLORS.INK}
                strokeWidth={5}
              />
              <line
                x1={1181}
                y1={701}
                x2={1181 + (1605 - 1181) * sdnLinesP}
                y2={701}
                stroke={COLORS.INK}
                strokeWidth={5}
              />
            </>
          )}

          {/* S8 Dotted lines from Controller (1784, 482) to the 3 Programmable Switches */}
          {frame >= 607 &&
            progSwitches.map((ps, idx) => {
              const p = interpolate(frame, [607 + idx * 7, 607 + idx * 7 + 10], [0, 1], {
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
              });
              if (p <= 0) return null;
              return (
                <line
                  key={idx}
                  x1={1784}
                  y1={482}
                  x2={1784 + (ps.x - 1784) * p}
                  y2={482 + (ps.y - 482) * p}
                  stroke={COLORS.SDN_DOT}
                  strokeWidth={5}
                  strokeDasharray="4 12"
                  strokeLinecap="round"
                />
              );
            })}

          {/* S8 Pulse waves at 2.10, 2.90, 3.70s of S8 (650, 670, 689f) */}
          {[650, 670, 689].map((waveStart) => {
            if (frame < waveStart || frame > waveStart + 12) return null;
            const wp = (frame - waveStart) / 12;
            return progSwitches.map((ps, idx) => (
              <circle
                key={`${waveStart}-${idx}`}
                cx={1784 + (ps.x - 1784) * wp}
                cy={482 + (ps.y - 482) * wp}
                r={8}
                fill={COLORS.SDN_DOT}
              />
            ));
          })}
        </svg>

        {/* Left Header: Traditional Network */}
        <HandWrite
          text={getText('V8-S4', 's15_trad')}
          startFrame={36}
          durationFrames={14}
          style={{
            position: 'absolute',
            left: 431,
            top: 202,
            transform: 'translate(-50%, -50%)',
            fontFamily: FONTS.BODY,
            fontWeight: 700,
            fontSize: 44,
            color: COLORS.INK,
            whiteSpace: 'nowrap',
            zIndex: 20,
          }}
        />

        {/* 3 Traditional Switches */}
        {tradSwitches.map((ts, idx) => (
          <Pop
            key={idx}
            startFrame={ts.sf}
            style={{
              position: 'absolute',
              left: ts.x - 125,
              top: ts.y - 100,
              zIndex: 18,
            }}
          >
            <IconTradSwitch size={250} />
          </Pop>
        ))}

        {/* "Switch" label at (255, 322) + arrow to TS1 */}
        <HandWrite
          text={getText('V8-S4', 's15_sw')}
          startFrame={103}
          durationFrames={10}
          style={{
            position: 'absolute',
            left: 255,
            top: 322,
            transform: 'translate(-50%, -50%)',
            fontFamily: FONTS.EN_TITLE,
            fontWeight: 700,
            fontSize: 36,
            color: COLORS.INK,
            zIndex: 20,
          }}
        />
        <Arrow x1={275} y1={345} x2={345} y2={425} startFrame={105} durationFrames={8} color={COLORS.INK} strokeWidth={4} />

        {/* S5: Control Plane & Data Plane labels + arrows */}
        <HandWrite
          text={getText('V8-S5', 's15_cp')}
          startFrame={163}
          durationFrames={10}
          style={{
            position: 'absolute',
            left: 758,
            top: 413,
            transform: 'translate(-50%, -50%)',
            fontFamily: FONTS.EN_TITLE,
            fontWeight: 700,
            fontSize: 34,
            color: COLORS.INK,
            whiteSpace: 'nowrap',
            zIndex: 22,
          }}
        />
        <Arrow x1={645} y1={418} x2={495} y2={455} startFrame={165} durationFrames={8} color={COLORS.RED} strokeWidth={4} />

        <HandWrite
          text={getText('V8-S5', 's15_dp')}
          startFrame={202}
          durationFrames={10}
          style={{
            position: 'absolute',
            left: 770,
            top: 507,
            transform: 'translate(-50%, -50%)',
            fontFamily: FONTS.EN_TITLE,
            fontWeight: 700,
            fontSize: 34,
            color: COLORS.INK,
            whiteSpace: 'nowrap',
            zIndex: 22,
          }}
        />
        <Arrow x1={665} y1={512} x2={495} y2={520} startFrame={204} durationFrames={8} color={COLORS.INK} strokeWidth={4} />

        {/* S6: "!" + gears + moving laptop */}
        {frame >= 288 && frame < 432 && (
          <div style={{opacity: s6FadeOut}}>
            {tradSwitches.map((ts, idx) => (
              <React.Fragment key={idx}>
                <Pop
                  startFrame={295 + idx * 7}
                  style={{
                    position: 'absolute',
                    left: ts.x - 15,
                    top: ts.y - 165,
                    fontFamily: FONTS.HOOK,
                    fontWeight: 700,
                    fontSize: 70,
                    color: COLORS.RED,
                    zIndex: 26,
                  }}
                >
                  !
                </Pop>
                {frame >= 317 && (
                  <div
                    style={{
                      position: 'absolute',
                      left: ts.x - 24,
                      top: ts.y - 70,
                      transform: `rotate(${gearAngle}deg)`,
                      zIndex: 25,
                    }}
                  >
                    <IconGear size={48} />
                  </div>
                )}
              </React.Fragment>
            ))}

            {frame >= 322 && (
              <div style={{position: 'absolute', left: lapX - 45, top: lapY - 45, zIndex: 28}}>
                <IconLaptop size={90} />
              </div>
            )}

            {frame >= 389 && (
              <div
                dir="rtl"
                style={{
                  position: 'absolute',
                  left: 480,
                  top: 840,
                  transform: 'translate(-50%, -50%)',
                  fontFamily: FONTS.BODY,
                  fontWeight: 500,
                  fontSize: 32,
                  color: COLORS.RED,
                  background: COLORS.CARD,
                  padding: '6px 18px',
                  borderRadius: 10,
                  border: `2px solid ${COLORS.RED}`,
                  whiteSpace: 'nowrap',
                  zIndex: 28,
                }}
              >
                {getText('V8-S6', 's6_note')}
              </div>
            )}
          </div>
        )}

        {/* S7: Right side — Software-Defined Network */}
        <HandWrite
          text={getText('V8-S7', 's15_sdn')}
          startFrame={439}
          durationFrames={15}
          style={{
            position: 'absolute',
            left: 1464,
            top: 202,
            transform: 'translate(-50%, -50%)',
            fontFamily: FONTS.BODY,
            fontWeight: 700,
            fontSize: 44,
            color: COLORS.INK,
            whiteSpace: 'nowrap',
            zIndex: 20,
          }}
        />

        {/* 3 Programmable Switches (blue plates) */}
        {progSwitches.map((ps, idx) => (
          <Pop
            key={idx}
            startFrame={ps.sf}
            style={{
              position: 'absolute',
              left: ps.x - 125,
              top: ps.y - 88,
              transform: `scale(${s8Bounce})`,
              zIndex: 18,
            }}
          >
            <IconProgSwitch size={250} />
          </Pop>
        ))}

        {/* Ghost copies of the 3 red plates flying to Controller (1784, 482) at 492..523f */}
        {frame >= 492 &&
          frame < 524 &&
          tradSwitches.map((ts, idx) => {
            const riseP = interpolate(frame, [492, 499], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
            const flyP = interpolate(frame, [499, 523], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.inOut(Easing.cubic),
            });
            const startX = ts.x;
            const startY = ts.y - 30 * riseP;
            const gx = startX + (1784 - startX) * flyP;
            const gy = startY + (482 - startY) * flyP - Math.sin(flyP * Math.PI) * 140;
            const gScale = 1 - 0.5 * flyP;
            return (
              <div
                key={idx}
                style={{
                  position: 'absolute',
                  left: gx - 90,
                  top: gy - 35,
                  width: 180,
                  height: 55,
                  background: COLORS.SDN_RED,
                  border: `3px solid ${COLORS.INK}`,
                  borderRadius: 8,
                  opacity: 0.75,
                  transform: `scale(${gScale})`,
                  zIndex: 30,
                }}
              />
            );
          })}

        {/* Controller Machine (IconControllerRed) at (1784, 482) */}
        <Pop
          startFrame={523}
          style={{
            position: 'absolute',
            left: 1784 - 68,
            top: 482 - 90,
            zIndex: 22,
          }}
        >
          <IconControllerRed size={180} />
        </Pop>

        {/* Controller Machine label at (1542, 375) */}
        <HandWrite
          text={getText('V8-S7', 's15_ctrl')}
          startFrame={530}
          durationFrames={12}
          style={{
            position: 'absolute',
            left: 1542,
            top: 375,
            transform: 'translate(-50%, -50%)',
            fontFamily: FONTS.EN_TITLE,
            fontWeight: 700,
            fontSize: 34,
            color: COLORS.INK,
            whiteSpace: 'nowrap',
            zIndex: 24,
          }}
        />
        <Arrow x1={1640} y1={390} x2={1715} y2={435} startFrame={534} durationFrames={8} color={COLORS.RED} strokeWidth={4} />

        {/* S8: Programmable Switch label at (1197, 350) + arrow */}
        <HandWrite
          text={getText('V8-S8', 's15_prog')}
          startFrame={636}
          durationFrames={10}
          style={{
            position: 'absolute',
            left: 1197,
            top: 350,
            transform: 'translate(-50%, -50%)',
            fontFamily: FONTS.EN_TITLE,
            fontWeight: 700,
            fontSize: 34,
            color: COLORS.INK,
            whiteSpace: 'nowrap',
            zIndex: 24,
          }}
        />
        <Arrow x1={1240} y1={375} x2={1330} y2={445} startFrame={638} durationFrames={8} color={COLORS.INK} strokeWidth={4} />
      </Camera>

      {/* S5 Temporary Arabic Notes (outside Camera) */}
      {s5Note1Op > 0 && (
        <div
          dir="rtl"
          style={{
            position: 'absolute',
            left: 1320,
            top: 340,
            transform: 'translate(-50%, -50%)',
            opacity: s5Note1Op,
            fontFamily: FONTS.BODY,
            fontWeight: 600,
            fontSize: 30,
            color: COLORS.RED,
            background: COLORS.CARD,
            padding: '8px 20px',
            borderRadius: 10,
            border: `2.5px solid ${COLORS.RED}`,
            zIndex: 40,
          }}
        >
          {getText('V8-S5', 's15_cp_ar')}
        </div>
      )}
      {s5Note2Op > 0 && (
        <div
          dir="rtl"
          style={{
            position: 'absolute',
            left: 1320,
            top: 560,
            transform: 'translate(-50%, -50%)',
            opacity: s5Note2Op,
            fontFamily: FONTS.BODY,
            fontWeight: 600,
            fontSize: 30,
            color: COLORS.INK,
            background: COLORS.CARD,
            padding: '8px 20px',
            borderRadius: 10,
            border: `2.5px solid ${COLORS.INK}`,
            zIndex: 40,
          }}
        >
          {getText('V8-S5', 's15_dp_ar')}
        </div>
      )}

      <Caption text={captionText} startFrame={captionStart} />
      <SceneFade startFrame={736} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 9 (51.00 -> 55.50s, 108 frames, LAYOUT_P, Slide 15 Original Photo)
// ============================================================================
const Scene9: React.FC = () => {
  const photoRect = {x: 210, y: 170, w: 1500, h: 623};

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 8/8 · Slide 15" />

      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="page_turn" at={0.3} />
      <Sfx name="pencil_loop" at={0.9} dur={0.4} />
      <Sfx name="marker_loop" at={1.6} dur={0.5} />

      <HandWrite
        text={getText('V8-S9', 's9_tag')}
        startFrame={22}
        durationFrames={10}
        style={{
          position: 'absolute',
          left: 60,
          top: 60,
          fontFamily: FONTS.EN_TITLE,
          fontWeight: 700,
          fontSize: 36,
          color: COLORS.INK,
          zIndex: 25,
        }}
      />

      <PinnedPhoto
        src="slides_up/s15_traditional_vs_sdn.png"
        x={photoRect.x}
        y={photoRect.y}
        w={photoRect.w}
        h={photoRect.h}
        tiltDeg={0}
        startFrame={7}
      />

      {/* RedEllipse around Controller Machine (74-98%, 22-60%) */}
      <RedEllipse
        cx={photoRect.x + 0.86 * photoRect.w}
        cy={photoRect.y + 0.41 * photoRect.h}
        rx={0.13 * photoRect.w}
        ry={0.2 * photoRect.h}
        startFrame={38}
        durationFrames={12}
      />

      <Caption text="ودي نفس المقارنة اللي في Slide 15 بالظبط." />
      <SceneFade startFrame={100} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 10 (55.50 -> 61.50s, 144 frames, LAYOUT_C, Slide 14)
// ============================================================================
const Scene10: React.FC = () => {
  const frame = useCurrentFrame();

  const rows = [
    {en: getText('V8-S10', 'sec_1'), ar: getText('V8-S10', 'sec_1_ar'), startF: 48, y: 410},
    {en: getText('V8-S10', 'sec_2'), ar: getText('V8-S10', 'sec_2_ar'), startF: 76, y: 590},
    {en: getText('V8-S10', 'sec_3'), ar: getText('V8-S10', 'sec_3_ar'), startF: 103, y: 770},
  ];

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 8/8 · Slide 14" />

      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="pencil_loop" at={0.35} dur={0.6} />
      <Sfx name="pencil_loop" at={1.0} dur={0.9} gainDb={-3} />
      <Sfx name="pencil_loop" at={2.0} dur={0.5} gainDb={-3} />
      <Sfx name="check_soft" at={2.5} />
      <Sfx name="highlight_swipe" at={2.75} dur={0.3} gainDb={-3} />
      <Sfx name="pencil_loop" at={3.15} dur={0.5} gainDb={-3} />
      <Sfx name="check_soft" at={3.65} />
      <Sfx name="highlight_swipe" at={3.9} dur={0.3} gainDb={-3} />
      <Sfx name="pencil_loop" at={4.3} dur={0.5} gainDb={-3} />
      <Sfx name="check_soft" at={4.8} />
      <Sfx name="highlight_swipe" at={5.05} dur={0.3} gainDb={-3} />

      <Character src="omar_O3.png" x={1580} side="right" startFrame={0} />
      <Sparkle cx={1580} cy={220} startFrame={131} />

      <SketchBox x={105} y={140} w={1077} h={777} startFrame={8} drawDurationFrames={15} seed={8100} />

      <HandWrite
        text={getText('V8-S10', 'sec_head')}
        startFrame={24}
        durationFrames={16}
        style={{
          position: 'absolute',
          left: 170,
          top: 195,
          fontFamily: FONTS.EN_TITLE,
          fontWeight: 700,
          fontSize: 52,
          color: COLORS.INK,
          zIndex: 15,
        }}
      />
      <HandUnderline x1={170} x2={960} y={272} startFrame={38} durationFrames={8} color={COLORS.INK} strokeWidth={3} />

      {rows.map((r, i) => {
        const wrDur = 12; // 0.50s
        const chkF = r.startF + 12;
        const hlF = r.startF + 18; // +0.75s
        const arF = r.startF + 19; // +0.80s
        const arOp = interpolate(frame, [arF, arF + 7], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

        return (
          <React.Fragment key={i}>
            <CheckMark x={190} y={r.y + 28} startFrame={chkF} />
            <div style={{position: 'absolute', left: 245, top: r.y, zIndex: 15}}>
              {frame < hlF ? (
                <WordReveal
                  text={r.en}
                  startFrame={r.startF}
                  durationFrames={wrDur}
                  rtl={false}
                  style={{fontFamily: FONTS.BODY, fontWeight: 600, fontSize: 40, color: COLORS.INK}}
                />
              ) : (
                <HighlightText
                  text={r.en}
                  startFrame={hlF}
                  durationFrames={7}
                  rtl={false}
                  style={{fontFamily: FONTS.BODY, fontWeight: 600, fontSize: 40, color: COLORS.INK}}
                />
              )}
            </div>
            <div
              dir="rtl"
              style={{
                position: 'absolute',
                left: 245,
                top: r.y + 62,
                opacity: arOp,
                fontFamily: FONTS.BODY,
                fontWeight: 500,
                fontSize: 30,
                color: COLORS.MUTED,
                zIndex: 15,
              }}
            >
              {r.ar}
            </div>
          </React.Fragment>
        );
      })}

      <Caption text="هنعرف SDN بتشتغل إزاي، وفوايدها، ودورها في الـ network management." />
      <SceneFade startFrame={136} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 10b (61.50 -> 68.50s, 168 frames, LAYOUT_L without NextChip)
// ============================================================================
const Scene10b: React.FC = () => {
  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 8/8 · Slides 14–15" />

      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="marker_loop" at={0.2} dur={0.6} />
      <Sfx name="pencil_loop" at={0.85} dur={0.45} />
      <Sfx name="pencil_loop" at={1.4} dur={0.35} gainDb={-3} />
      <Sfx name="pop_soft" at={1.7} gainDb={-3} />
      <Sfx name="pencil_loop" at={1.9} dur={0.5} gainDb={-6} />
      <Sfx name="pencil_loop" at={2.5} dur={0.35} gainDb={-3} />
      <Sfx name="pop_soft" at={2.8} gainDb={-3} />
      <Sfx name="pencil_loop" at={3.0} dur={0.5} gainDb={-6} />
      <Sfx name="pencil_loop" at={3.6} dur={0.35} gainDb={-3} />
      <Sfx name="pop_soft" at={3.9} gainDb={-3} />
      <Sfx name="pencil_loop" at={4.1} dur={0.5} gainDb={-6} />

      <LayoutL
        centerTopicTitle={getText('V8-S10b', 'link_center')}
        centerSlideTag={getText('V8-S10b', 'link_tag')}
        nodes={[
          {
            position: 'N1',
            directionText: getText('V8-S10b', 'n1_dir'),
            topicTitle: getText('V8-S10b', 'n1_title'),
            arabicText: getText('V8-S10b', 'n1_ar'),
            labels: [getText('V8-S10b', 'n1_l1')],
            icon: <IconDashboard size={115} />,
          },
          {
            position: 'N2',
            directionText: getText('V8-S10b', 'n2_dir'),
            topicTitle: getText('V8-S10b', 'n2_title'),
            arabicText: getText('V8-S10b', 'n2_ar'),
            labels: [getText('V8-S10b', 'n2_l1')],
            crop: {src: 'slides_up/s14_network_3d.png', region: {x0: 1, x1: 38, y0: 51, y1: 70}},
          },
          {
            position: 'N3',
            directionText: getText('V8-S10b', 'n3_dir'),
            topicTitle: getText('V8-S10b', 'n3_title'),
            arabicText: getText('V8-S10b', 'n3_ar'),
            labels: [getText('V8-S10b', 'n3_l1'), getText('V8-S10b', 'n3_l2')],
            crop: {src: 'slides_up/s06_paloalto_ngfw.jpg', region: {x0: 25, x1: 98, y0: 12, y1: 42}},
          },
        ]}
      />

      <Caption text="الـ SDN = network management مركزية... وفيها Firewall كمان." />
      <SceneFade startFrame={160} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 11 (68.50 -> 78.50s, 240 frames, LAYOUT_R: Study Card)
// ============================================================================
const Scene11: React.FC = () => {
  const frame = useCurrentFrame();
  const rel = Math.max(0, frame - 5);
  const showTitle = rel >= 13;
  const showTags = rel >= 25;
  const showLines = rel >= 28;
  const showBlocks = rel >= 31;
  const showGlossary = rel >= 70;

  const glossary = [
    {term: 'SDN (Software-defined networking)', meaning: 'الشبكات المعرّفة بالبرمجيات'},
    {term: 'centralized management', meaning: 'إدارة مركزية من مكان واحد'},
    {term: 'Control Plane', meaning: 'العقل: بيقرّر الـ traffic يروح فين'},
    {term: 'Data Plane', meaning: 'الشغل: بينقل الـ packets فعلًا'},
    {term: 'Traditional Network', meaning: 'كل switch فيه Control Plane + Data Plane'},
    {term: 'Controller Machine', meaning: 'جهاز واحد فيه الـ Control Plane لكل الشبكة'},
    {term: 'Programmable Switch', meaning: 'switch بينفّذ أوامر الـ Controller'},
  ];

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 8/8 · Slides 14–15" />

      <Sfx name="page_turn" at={0.0} />
      <Sfx name="pencil_loop" at={0.2} dur={0.6} gainDb={-3} />
      <Sfx name="marker_loop" at={0.5} dur={0.5} gainDb={-3} />
      <Sfx name="highlight_swipe" at={1.8} dur={0.35} gainDb={-3} />

      <div style={{position: 'absolute', left: 60, top: 80, width: 1800, height: 870, zIndex: 20}}>
        <SketchBox x={0} y={0} w={1800} h={870} seed={8900} startFrame={5} drawDurationFrames={12}>
          <div style={{padding: '20px 36px', height: '100%', boxSizing: 'border-box', position: 'relative'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 54}}>
              <div style={{display: 'flex', gap: 12, opacity: showTags ? 1 : 0}}>
                {['Slide 14', 'Slide 15'].map((tag) => (
                  <div
                    key={tag}
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
                    {tag}
                  </div>
                ))}
              </div>
              {showTitle && (
                <div dir="rtl" style={{fontFamily: FONTS.HOOK, fontWeight: 700, fontSize: 46, color: COLORS.INK}}>
                  بطاقة المذاكرة: نص المحاضرة كامل
                </div>
              )}
            </div>

            {showLines && (
              <div style={{width: '100%', height: 2, backgroundColor: COLORS.INK, marginTop: 10, marginBottom: 14}} />
            )}

            <div style={{display: 'flex', height: 745, gap: 30}}>
              {/* Left Column */}
              <div
                dir="ltr"
                style={{
                  flex: 1.7,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 14,
                  opacity: showBlocks ? 1 : 0,
                }}
              >
                {/* Slide 14 */}
                <div style={{display: 'flex', flexDirection: 'column', gap: 6}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
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
                      Slide 14
                    </span>
                    <span style={{fontFamily: FONTS.BODY, fontWeight: 700, fontSize: 30, color: COLORS.INK}}>
                      {getText('V8-S11', 'sc_s14_title')}
                    </span>
                  </div>

                  <div
                    aria-label={getText('V8-S11', 'sc_s14_p1')}
                    style={{
                      fontFamily: FONTS.BODY,
                      fontWeight: 600,
                      fontSize: 25,
                      lineHeight: 1.42,
                      color: COLORS.INK,
                    }}
                  >
                    Software-defined networking (SDN) is an architectural approach to network management that enables
                    the <HighlightText text="centralized management" startFrame={0} durationFrames={1} rtl={false} /> of
                    network infrastructures{' '}
                    <HighlightText text="through software" startFrame={0} durationFrames={1} rtl={false} />.
                  </div>

                  <div
                    style={{
                      fontFamily: FONTS.BODY,
                      fontWeight: 600,
                      fontSize: 25,
                      lineHeight: 1.42,
                      color: COLORS.INK,
                    }}
                  >
                    {getText('V8-S11', 'sc_s14_p2')}
                  </div>
                </div>

                {/* Slide 15 */}
                <div style={{display: 'flex', flexDirection: 'column', gap: 8, marginTop: 8}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
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
                      Slide 15
                    </span>
                    <span style={{fontFamily: FONTS.BODY, fontWeight: 700, fontSize: 30, color: COLORS.INK}}>
                      {getText('V8-S11', 'sc_s14_title')}
                    </span>
                  </div>

                  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 4}}>
                    <img
                      src={staticFile('slides_up/s15_traditional_vs_sdn.png')}
                      alt="Slide 15"
                      style={{
                        height: 240,
                        border: `3px solid ${COLORS.INK}`,
                        background: '#FFFFFF',
                        padding: 6,
                        objectFit: 'contain',
                      }}
                    />
                    <span style={{fontFamily: FONTS.BODY, fontWeight: 500, fontSize: 22, color: COLORS.MUTED, marginTop: 4}}>
                      (رسمة الشريحة)
                    </span>
                  </div>
                </div>
              </div>

              {showLines && (
                <div style={{width: 2, height: '94%', backgroundColor: COLORS.INK, alignSelf: 'center'}} />
              )}

              {/* Right Column */}
              <div
                dir="rtl"
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 6,
                  opacity: showGlossary ? 1 : 0,
                }}
              >
                <div style={{fontFamily: FONTS.HOOK, fontWeight: 700, fontSize: 36, color: COLORS.INK, marginBottom: 4}}>
                  مصطلحات مهمة
                </div>
                {glossary.map((g, gi) => (
                  <div key={gi} style={{display: 'flex', flexDirection: 'column', height: 68, justifyContent: 'center'}}>
                    <div
                      dir="ltr"
                      style={{
                        fontFamily: FONTS.EN_TITLE,
                        fontWeight: 700,
                        fontSize: 24,
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

      <Caption text="ده نص المحاضرة كامل... وقّف الفيديو وذاكره براحتك." />
      <SceneFade startFrame={232} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 12 (78.50 -> 85.50s, 168 frames, LAYOUT_F: Grand Finale)
// ============================================================================
const Scene12: React.FC = () => {
  const frame = useCurrentFrame();

  const agendaTopics = [
    getText('V8-S12', 'ag_1'),
    getText('V8-S12', 'ag_2'),
    getText('V8-S12', 'ag_3'),
    getText('V8-S12', 'ag_4'),
    getText('V8-S12', 'ag_5'),
    getText('V8-S12', 'ag_6'),
    getText('V8-S12', 'ag_7'),
  ];

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 8/8 · Slides 14–15" />

      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="marker_loop" at={0.4} dur={0.7} />
      <Sfx name="marker_loop" at={1.15} dur={0.6} />
      <Sfx name="chime_success" at={1.75} gainDb={-3} />
      <Sfx name="marker_loop" at={1.9} dur={0.7} gainDb={-3} />
      <Sfx name="pencil_loop" at={2.65} dur={0.5} />
      <Sfx name="pencil_loop" at={3.4} dur={0.8} gainDb={-3} />
      <Sfx name="highlight_swipe" at={4.25} dur={0.35} />
      <Sfx name="finale_arp" at={4.7} />

      {/* SDN + RedEllipse */}
      <HandWrite
        text={getText('V8-S12', 'fin_sdn')}
        startFrame={10}
        durationFrames={17}
        style={{
          position: 'absolute',
          left: 960,
          top: 230,
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.KEY_EN,
          fontSize: 190,
          color: COLORS.INK,
          zIndex: 20,
        }}
      />
      <RedEllipse cx={960} cy={230} rx={260} ry={130} startFrame={28} durationFrames={14} />

      {/* Software-Defined Networking */}
      <HandWrite
        text={getText('V8-S12', 'fin_sub')}
        startFrame={46}
        durationFrames={17}
        style={{
          position: 'absolute',
          left: 960,
          top: 380,
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.KEY_EN,
          fontSize: 64,
          color: COLORS.INK,
          whiteSpace: 'nowrap',
          zIndex: 20,
        }}
      />

      {/* Arabic meaning */}
      <HandWrite
        text={getText('V8-S12', 'fin_ar')}
        startFrame={64}
        durationFrames={12}
        rtl={true}
        style={{
          position: 'absolute',
          left: 960,
          top: 480,
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.HOOK,
          fontWeight: 700,
          fontSize: 64,
          color: COLORS.INK,
          whiteSpace: 'nowrap',
          zIndex: 20,
        }}
      />

      {/* Omar O6 bottom-left (x=200, h=600) & Karim K5 bottom-right (x=1720, h=600) */}
      {frame >= 77 && (
        <>
          <Character src="omar_O6.png" x={200} height={600} baseY={1000} side="left" startFrame={77} />
          <Character src="karim_K5.png" x={1720} height={600} baseY={1000} side="right" startFrame={77} />
        </>
      )}
      <Sparkle cx={200} cy={380} startFrame={137} />
      <Sparkle cx={1720} cy={380} startFrame={137} />

      {/* Summary sentence */}
      {frame >= 82 && (
        <div
          dir="rtl"
          style={{
            position: 'absolute',
            left: 960,
            top: 590,
            transform: 'translate(-50%, -50%)',
            fontFamily: FONTS.BODY,
            fontWeight: 600,
            fontSize: 38,
            color: COLORS.INK,
            whiteSpace: 'nowrap',
            zIndex: 20,
          }}
        >
          {frame < 102 ? (
            <WordReveal text={getText('V8-S12', 'fin_sum')} startFrame={82} durationFrames={19} rtl={true} />
          ) : (
            <HighlightText text={getText('V8-S12', 'fin_sum')} startFrame={102} durationFrames={8} rtl={true} />
          )}
        </div>
      )}

      {/* 7 Agenda Checkboxes at y=720 from x=360 to 1560 step 200 */}
      {agendaTopics.map((topic, idx) => {
        const cx = 360 + idx * 200;
        const sf = 113 + idx * 3;
        if (frame < sf) return null;
        return (
          <Pop
            key={idx}
            startFrame={sf}
            style={{
              position: 'absolute',
              left: cx - 80,
              top: 700,
              width: 160,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              zIndex: 25,
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                border: `3.5px solid ${COLORS.INK}`,
                borderRadius: 6,
                background: COLORS.CARD,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width={32} height={32} viewBox="0 0 32 32">
                <path d="M5,16 L13,24 L27,7" fill="none" stroke={COLORS.RED} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div
              dir="ltr"
              style={{
                fontFamily: FONTS.EN_TITLE,
                fontWeight: 700,
                fontSize: 20,
                color: COLORS.INK,
                marginTop: 6,
                whiteSpace: 'nowrap',
              }}
            >
              {topic}
            </div>
          </Pop>
        );
      })}

      <Caption text="وده اسمه SDN... وكده خلّصنا الـ Overview بتاع Lecture 1 كله!" />
      <SceneFade startFrame={151} durationFrames={17} />
    </AbsoluteFill>
  );
};

// ============================================================================
// MAIN V8 COMPOSITION (85.5s = 2052 frames)
// ============================================================================
export const V8: React.FC = () => {
  return (
    <AbsoluteFill>
      <Paper />
      <AbsoluteFill style={{zIndex: 1}}>
        {/* S1: 0.00 -> 5.50 (0 -> 132) */}
        <Sequence from={0} durationInFrames={132}>
          <Scene1 />
        </Sequence>

        {/* S2: 5.50 -> 13.00 (132 -> 312) */}
        <Sequence from={132} durationInFrames={180}>
          <Scene2 />
        </Sequence>

        {/* S3: 13.00 -> 20.00 (312 -> 480) */}
        <Sequence from={312} durationInFrames={168}>
          <Scene3 />
        </Sequence>

        {/* S4..S8 CONT: 20.00 -> 51.00 (480 -> 1224) */}
        <Sequence from={480} durationInFrames={744}>
          <Scenes4To8 />
        </Sequence>

        {/* S9: 51.00 -> 55.50 (1224 -> 1332) */}
        <Sequence from={1224} durationInFrames={108}>
          <Scene9 />
        </Sequence>

        {/* S10: 55.50 -> 61.50 (1332 -> 1476) */}
        <Sequence from={1332} durationInFrames={144}>
          <Scene10 />
        </Sequence>

        {/* S10b: 61.50 -> 68.50 (1476 -> 1644) */}
        <Sequence from={1476} durationInFrames={168}>
          <Scene10b />
        </Sequence>

        {/* S11: 68.50 -> 78.50 (1644 -> 1884) */}
        <Sequence from={1644} durationInFrames={240}>
          <Scene11 />
        </Sequence>

        {/* S12: 78.50 -> 85.50 (1884 -> 2052) */}
        <Sequence from={1884} durationInFrames={168}>
          <Scene12 />
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
