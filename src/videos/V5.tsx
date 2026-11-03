// src/videos/V5.tsx
import React from 'react';
import {AbsoluteFill, Sequence, useCurrentFrame, interpolate} from 'remotion';
import {evolvePath} from '@remotion/paths';
import {COLORS, FONTS} from '../theme';
import {Sfx} from '../lib/sfx';
import {
  Paper,
  SketchBox,
  HandUnderline,
  RedEllipse,
  HighlightText,
  CheckMark,
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
  LayoutL,
  BidiText,
} from '../components';
import {
  IconRack,
  IconWarningTriangle,
  IconClipboardGear,
  IconDashboard,
  IconWrench,
  IconSpeedometer,
  IconPowerClock,
  IconShield,
  IconMagnifier,
  IconToolbox,
  IconMonitorChart,
  IconGear,
} from '../icons';
import {texts} from './V5.data';

const getText = (scene: string, id: string): string => {
  const found = texts.find((t) => t.scene === scene && t.id === id);
  if (!found) {
    throw new Error(`Missing text in V5.data.ts for scene=${scene}, id=${id}`);
  }
  return found.text;
};

// ============================================================================
// SCENE 1 (0.00 -> 5.50s, 132 frames, LAYOUT_H)
// ============================================================================
const Scene1: React.FC = () => {
  const frame = useCurrentFrame();

  const racks = [
    {x: 300, t: 1.8},
    {x: 520, t: 1.95},
    {x: 740, t: 2.1},
  ];

  // Blinking RED LEDs at 2 Hz starting t=2.40s (frame 58)
  const ledOn = frame >= 58 && Math.floor((frame - 58) / 6) % 2 === 0;

  // Broken cable zigzag at 3.40..3.80s (frames 82..91)
  const cablePath = 'M 360 640 L 420 670 L 400 700 L 450 720 M 490 720 L 530 690 L 510 660 L 660 650';
  const cableP = interpolate(frame, [82, 91], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const evolvedCable = evolvePath(cableP, cablePath);

  return (
    <AbsoluteFill>
      <AgendaChip topicNumber={4} topicTitle={getText('V5-S1', 'agenda_chip')} />
      <SlideBadge text="Lecture 1 · 5/8" />

      {/* Audio */}
      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="marker_loop" at={0.4} dur={0.9} />
      <Sfx name="marker_loop" at={1.35} dur={0.35} />
      <Sfx name="pop_soft" at={1.8} gainDb={-6} />
      <Sfx name="warn_beeps" at={2.4} />
      <Sfx name="warn_soft" at={2.9} />
      <Sfx name="pencil_loop" at={3.4} dur={0.4} />
      <Sfx name="pencil_loop" at={4.0} dur={0.35} />

      <Character src="karim_K2.png" x={1520} height={820} baseY={1000} side="right" startFrame={0} />
      <NameOval name={getText('V5-S1', 'karim_name')} cx={1520} cy={120} startFrame={96} />

      <HandWrite
        text={getText('V5-S1', 'hook_title')}
        startFrame={10}
        durationFrames={22}
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
      <HandUnderline x1={420} x2={1180} y={260} startFrame={32} durationFrames={8} rtl />

      {/* 3 Racks with blinking red LEDs */}
      {racks.map((r, idx) => {
        const sf = Math.round(r.t * 24);
        return (
          <Pop
            key={idx}
            startFrame={sf}
            style={{
              position: 'absolute',
              left: r.x - 75,
              top: 410,
              zIndex: 16,
            }}
          >
            <div style={{position: 'relative'}}>
              <IconRack size={240} />
              {ledOn && (
                <svg
                  style={{position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', pointerEvents: 'none'}}
                  viewBox="0 0 120 200"
                >
                  {[45, 75, 105, 135].map((ly, li) => (
                    <circle key={li} cx={88} cy={ly} r={6} fill={COLORS.RED} />
                  ))}
                </svg>
              )}
            </div>
          </Pop>
        );
      })}

      {/* Warning triangle at (980, 470) */}
      <Pop startFrame={70} style={{position: 'absolute', left: 980 - 80, top: 470 - 80, zIndex: 20}}>
        <IconWarningTriangle size={160} />
      </Pop>

      {/* Broken cable */}
      {frame >= 82 && (
        <svg style={{position: 'absolute', left: 0, top: 0, width: 1920, height: 1080, pointerEvents: 'none', zIndex: 18}}>
          <path
            d={cablePath}
            fill="none"
            stroke={COLORS.RED}
            strokeWidth={6}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={evolvedCable.strokeDasharray}
            strokeDashoffset={evolvedCable.strokeDashoffset}
          />
        </svg>
      )}

      <Caption text="أقوى شبكة في الدنيا... من غير متابعة ممكن تقع في لحظة!" />
      <SceneFade startFrame={124} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 2 (5.50 -> 12.50s, 168 frames, LAYOUT_A)
// ============================================================================
const Scene2: React.FC = () => {
  const frame = useCurrentFrame();

  const rows = [
    {enId: 'r1_en', arId: 'r1_ar', t: 3.4, Comp: IconClipboardGear},
    {enId: 'r2_en', arId: 'r2_ar', t: 4.2, Comp: IconDashboard},
    {enId: 'r3_en', arId: 'r3_ar', t: 5.0, Comp: IconWrench},
  ];

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 5/8 · Slide 8" />

      {/* Audio */}
      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="pencil_loop" at={0.35} dur={0.6} />
      <Sfx name="marker_loop" at={1.0} dur={0.9} />
      <Sfx name="pencil_loop" at={1.95} dur={0.45} />
      <Sfx name="pencil_loop" at={2.5} dur={0.8} gainDb={-3} />
      {rows.map((r, i) => (
        <React.Fragment key={i}>
          <Sfx name="pop_soft" at={r.t} gainDb={-3} />
          <Sfx name="pencil_loop" at={r.t + 0.1} dur={0.35} gainDb={-3} />
        </React.Fragment>
      ))}
      <Sfx name="pencil_loop" at={5.6} dur={0.5} gainDb={-3} />
      <Sfx name="pencil_loop" at={6.15} dur={0.3} gainDb={-6} />

      <Character src="omar_O2.png" x={400} height={820} baseY={1000} side="left" startFrame={0} />
      <NameOval name={getText('V5-S2', 'omar_name')} cx={400} cy={120} startFrame={148} />

      <SketchBox x={700} y={120} w={1140} h={790} startFrame={8} drawDurationFrames={14} seed={502} />

      <HandWrite
        text={getText('V5-S2', 'title_en')}
        startFrame={24}
        durationFrames={22}
        style={{
          position: 'absolute',
          left: 1270,
          top: 210,
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.EN_TITLE,
          fontWeight: 700,
          fontSize: 60,
          color: COLORS.INK,
          zIndex: 22,
        }}
      />

      <HandWrite
        text={getText('V5-S2', 'title_ar')}
        startFrame={47}
        durationFrames={11}
        rtl
        style={{
          position: 'absolute',
          left: 1270,
          top: 300,
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.HOOK,
          fontWeight: 700,
          fontSize: 56,
          color: COLORS.INK,
          zIndex: 22,
        }}
      />

      {/* Line 1 at y=390 */}
      {frame >= 60 && (
        <div
          dir="ltr"
          style={{
            position: 'absolute',
            left: 760,
            top: 375,
            fontFamily: FONTS.BODY,
            fontWeight: 600,
            fontSize: 40,
            color: COLORS.INK,
            zIndex: 22,
          }}
        >
          <WordReveal text={getText('V5-S2', 'line1')} startFrame={60} durationFrames={19} rtl={false} />
        </div>
      )}

      {/* 3 Rows at y=470, 570, 670 */}
      {rows.map((r, idx) => {
        const ry = 465 + idx * 100;
        const popF = Math.round(r.t * 24);
        const enF = Math.round((r.t + 0.1) * 24);
        const arF = Math.round((r.t + 0.5) * 24);
        return (
          <React.Fragment key={idx}>
            <Pop startFrame={popF} style={{position: 'absolute', left: 765, top: ry, zIndex: 22}}>
              <r.Comp size={68} />
            </Pop>
            <HandWrite
              text={getText('V5-S2', r.enId)}
              startFrame={enF}
              durationFrames={8}
              style={{
                position: 'absolute',
                left: 860,
                top: ry + 4,
                fontFamily: FONTS.BODY,
                fontWeight: 600,
                fontSize: 44,
                color: COLORS.INK,
                zIndex: 22,
              }}
            />
            {frame >= arF && (
              <div
                dir="rtl"
                style={{
                  position: 'absolute',
                  right: 1920 - 1800,
                  top: ry + 12,
                  fontFamily: FONTS.BODY,
                  fontWeight: 500,
                  fontSize: 30,
                  color: COLORS.MUTED,
                  opacity: Math.min(1, (frame - arF) / 5),
                  zIndex: 22,
                }}
              >
                {getText('V5-S2', r.arId)}
              </div>
            )}
          </React.Fragment>
        );
      })}

      {/* Line 2 at y=780 */}
      {frame >= 134 && (
        <div
          dir="ltr"
          style={{
            position: 'absolute',
            left: 760,
            top: 780,
            fontFamily: FONTS.BODY,
            fontWeight: 600,
            fontSize: 40,
            color: COLORS.INK,
            zIndex: 22,
          }}
        >
          <WordReveal text={getText('V5-S2', 'line2')} startFrame={134} durationFrames={12} rtl={false} />
        </div>
      )}

      <Caption text="يعني administering وmanaging وmaintaining للـ infrastructure." />
      <SceneFade startFrame={160} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 3 (12.50 -> 19.50s, 168 frames, LAYOUT_B)
// ============================================================================
const Scene3: React.FC = () => {
  const frame = useCurrentFrame();

  const rows = [
    {enId: 'r1_en', arId: 'r1_ar', t: 1.7, Comp: IconSpeedometer},
    {enId: 'r2_en', arId: 'r2_ar', t: 3.0, Comp: IconPowerClock},
    {enId: 'r3_en', arId: 'r3_ar', t: 4.3, Comp: IconShield},
  ];

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 5/8 · Slide 8" />

      {/* Audio */}
      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="pencil_loop" at={0.35} dur={0.6} />
      <Sfx name="pencil_loop" at={1.0} dur={0.5} gainDb={-3} />
      {rows.map((r, i) => (
        <React.Fragment key={i}>
          <Sfx name="pencil_loop" at={r.t} dur={0.4} gainDb={-3} />
          <Sfx name="check_soft" at={r.t + 0.4} />
          <Sfx name="highlight_swipe" at={r.t + 0.65} dur={0.3} gainDb={-3} />
        </React.Fragment>
      ))}
      <Sfx name="pencil_loop" at={5.45} dur={0.6} gainDb={-3} />

      <Character src="omar_O4.png" x={1520} height={820} baseY={1000} side="right" mirror startFrame={0} />
      <SketchBox x={100} y={120} w={1140} h={790} startFrame={8} drawDurationFrames={14} seed={503} />

      {/* Line 1 at y=210 */}
      {frame >= 24 && (
        <div
          dir="ltr"
          style={{
            position: 'absolute',
            left: 160,
            top: 195,
            fontFamily: FONTS.BODY,
            fontWeight: 600,
            fontSize: 40,
            color: COLORS.INK,
            zIndex: 22,
          }}
        >
          <WordReveal text={getText('V5-S3', 'line1')} startFrame={24} durationFrames={12} rtl={false} />
        </div>
      )}

      {/* 3 Rows at y=310, 450, 590 */}
      {rows.map((r, idx) => {
        const ry = 310 + idx * 140;
        const wrF = Math.round(r.t * 24);
        const chkF = Math.round((r.t + 0.4) * 24);
        const hlF = Math.round((r.t + 0.65) * 24);
        const popF = Math.round((r.t + 0.95) * 24);
        const arF = Math.round((r.t + 1.0) * 24);
        const enText = getText('V5-S3', r.enId);
        return (
          <React.Fragment key={idx}>
            <CheckMark x={190} y={ry + 25} startFrame={chkF} />
            {frame >= wrF && (
              <div
                dir="ltr"
                style={{
                  position: 'absolute',
                  left: 270,
                  top: ry,
                  fontFamily: FONTS.BODY,
                  fontWeight: 600,
                  fontSize: 48,
                  color: COLORS.INK,
                  zIndex: 22,
                }}
              >
                {frame < hlF ? (
                  <WordReveal text={enText} startFrame={wrF} durationFrames={10} rtl={false} />
                ) : (
                  <HighlightText text={enText} startFrame={hlF} durationFrames={7} rtl={false} />
                )}
              </div>
            )}
            <Pop startFrame={popF} style={{position: 'absolute', left: 1080, top: ry + 4, zIndex: 22}}>
              <r.Comp size={80} />
            </Pop>
            {frame >= arF && (
              <div
                dir="rtl"
                style={{
                  position: 'absolute',
                  left: 270,
                  top: ry + 62,
                  fontFamily: FONTS.BODY,
                  fontWeight: 500,
                  fontSize: 30,
                  color: COLORS.MUTED,
                  opacity: Math.min(1, (frame - arF) / 5),
                  zIndex: 22,
                }}
              >
                {getText('V5-S3', r.arId)}
              </div>
            )}
          </React.Fragment>
        );
      })}

      {/* Line 2 at y=780 */}
      {frame >= 131 && (
        <div
          dir="ltr"
          style={{
            position: 'absolute',
            left: 160,
            top: 775,
            fontFamily: FONTS.BODY,
            fontWeight: 600,
            fontSize: 40,
            color: COLORS.INK,
            zIndex: 22,
          }}
        >
          <WordReveal text={getText('V5-S3', 'line2')} startFrame={131} durationFrames={14} rtl={false} />
        </div>
      )}

      <Caption text="وبتضمن 3 حاجات: performance وavailability وsecurity للشبكة." />
      <SceneFade startFrame={160} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 4 (19.50 -> 25.50s, 144 frames, LAYOUT_P Banner)
// ============================================================================
const Scene4: React.FC = () => {
  const frame = useCurrentFrame();

  const photoRect = {x: 174, y: 174, w: 1572, h: 276};
  const rDrive = {x0: 58, x1: 66, y0: 10, y1: 40};
  const rLedsBlue = {x0: 8, x1: 13, y0: 0, y1: 100};
  const rLedsGreen = {x0: 49, x1: 53, y0: 15, y1: 60};

  // Magnifier sweeping left to right 4.30..5.00s (frames 103..120)
  const magP = interpolate(frame, [103, 120], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 5/8 · Slide 8" />

      {/* Audio */}
      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="hum_server" at={0.0} dur={6.0} gainDb={-6} />
      <Sfx name="page_turn" at={0.3} />
      <Sfx name="marker_loop" at={1.0} dur={0.4} />
      <Sfx name="pop_soft" at={1.5} />
      <Sfx name="pencil_loop" at={1.55} dur={0.5} gainDb={-6} />
      <Sfx name="marker_loop" at={2.4} dur={0.4} />
      <Sfx name="beep_soft" at={3.2} />
      <Sfx name="pop_soft" at={3.5} />
      <Sfx name="pencil_loop" at={3.55} dur={0.6} gainDb={-6} />

      <PinnedPhoto
        src="slides/s08_rack_servers.jpg"
        x={160}
        y={160}
        w={1600}
        h={304}
        tiltDeg={0}
        startFrame={7}
      />

      {/* Spotlights */}
      {frame >= 24 && frame < 58 && (
        <Spotlight photoRect={photoRect} region={rDrive} startFrame={24} drawFrames={9} maskId="v5-drive" />
      )}
      {frame >= 58 && frame < 72 && (
        <Spotlight photoRect={photoRect} region={rLedsBlue} startFrame={58} drawFrames={9} maskId="v5-leds-b" />
      )}
      {frame >= 72 && frame < 103 && (
        <Spotlight photoRect={photoRect} region={rLedsGreen} startFrame={72} drawFrames={9} maskId="v5-leds-g" />
      )}

      {/* Magnifier sweeping */}
      {frame >= 103 && frame <= 125 && (
        <div
          style={{
            position: 'absolute',
            left: 300 + magP * 1200,
            top: 230,
            zIndex: 28,
          }}
        >
          <IconMagnifier size={160} />
        </div>
      )}

      {/* Left Note Card: x 260..860, y 560..800 */}
      <Pop startFrame={36} style={{position: 'absolute', left: 260, top: 560, width: 600, height: 240, zIndex: 22}}>
        <SketchBox x={0} y={0} w={600} h={240} startFrame={0} drawDurationFrames={7} seed={5041}>
          <div style={{padding: '28px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', boxSizing: 'border-box', gap: 12}}>
            <div dir="ltr" style={{fontFamily: FONTS.EN_TITLE, fontWeight: 700, fontSize: 40, color: COLORS.INK}}>
              {getText('V5-S4', 'c1_en')}
            </div>
            {frame >= 37 && (
              <div dir="rtl" style={{fontFamily: FONTS.BODY, fontWeight: 500, fontSize: 32, color: COLORS.INK}}>
                <WordReveal text={getText('V5-S4', 'c1_ar')} startFrame={37} durationFrames={12} rtl />
              </div>
            )}
          </div>
        </SketchBox>
      </Pop>

      {/* Right Note Card: x 1060..1660, y 560..800 */}
      <Pop startFrame={84} style={{position: 'absolute', left: 1060, top: 560, width: 600, height: 240, zIndex: 22}}>
        <SketchBox x={0} y={0} w={600} h={240} startFrame={0} drawDurationFrames={7} seed={5042}>
          <div style={{padding: '28px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', boxSizing: 'border-box', gap: 12}}>
            <div dir="ltr" style={{fontFamily: FONTS.EN_TITLE, fontWeight: 700, fontSize: 40, color: COLORS.INK}}>
              {getText('V5-S4', 'c2_en')}
            </div>
            {frame >= 85 && (
              <div dir="rtl" style={{fontFamily: FONTS.BODY, fontWeight: 500, fontSize: 30, color: COLORS.INK}}>
                <WordReveal text={getText('V5-S4', 'c2_ar')} startFrame={85} durationFrames={14} rtl />
              </div>
            )}
          </div>
        </SketchBox>
      </Pop>

      <Caption text="مدير الشبكة بيتابع كل server وكل hard drive من لمبات الحالة." />
      <SceneFade startFrame={136} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 5 (25.50 -> 31.50s, 144 frames, LAYOUT_C)
// ============================================================================
const Scene5: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 5/8 · Slide 8" />

      {/* Audio */}
      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="pencil_loop" at={0.35} dur={0.6} />
      <Sfx name="pencil_loop" at={1.0} dur={0.9} gainDb={-3} />
      <Sfx name="marker_loop" at={2.0} dur={0.7} />
      <Sfx name="highlight_swipe" at={2.75} dur={0.35} />
      <Sfx name="pencil_loop" at={3.2} dur={1.0} gainDb={-3} />
      <Sfx name="pop_soft" at={4.3} gainDb={-3} />

      <Character src="omar_O3.png" x={1540} height={820} baseY={1000} side="right" startFrame={0} />
      <Sparkle cx={1540} cy={220} startFrame={118} />

      <SketchBox x={80} y={150} w={1160} h={730} startFrame={8} drawDurationFrames={14} seed={505} />

      {/* L1 at y=220 */}
      {frame >= 24 && (
        <div
          dir="ltr"
          style={{
            position: 'absolute',
            left: 140,
            top: 220,
            fontFamily: FONTS.BODY,
            fontWeight: 600,
            fontSize: 40,
            color: COLORS.INK,
            zIndex: 22,
          }}
        >
          <WordReveal text={getText('V5-S5', 'l1')} startFrame={24} durationFrames={22} rtl={false} />
        </div>
      )}

      {/* L2 at y=340 */}
      <div
        dir="ltr"
        style={{
          position: 'absolute',
          left: 140,
          top: 335,
          fontFamily: FONTS.BODY,
          fontWeight: 700,
          fontSize: 46,
          color: COLORS.INK,
          zIndex: 22,
        }}
      >
        {frame < 66 ? (
          <HandWrite text={getText('V5-S5', 'l2')} startFrame={48} durationFrames={17} />
        ) : (
          <HighlightText text={getText('V5-S5', 'l2')} startFrame={66} durationFrames={8} rtl={false} />
        )}
      </div>

      {/* L3 at y=450 */}
      {frame >= 77 && (
        <div
          dir="ltr"
          style={{
            position: 'absolute',
            left: 140,
            top: 450,
            maxWidth: 1020,
            fontFamily: FONTS.BODY,
            fontWeight: 600,
            fontSize: 40,
            lineHeight: 1.35,
            color: COLORS.INK,
            zIndex: 22,
          }}
        >
          <WordReveal text={getText('V5-S5', 'l3')} startFrame={77} durationFrames={24} rtl={false} />
        </div>
      )}

      {/* 3 Icons at y=700 (x=400, 700, 1000) */}
      <Pop startFrame={103} style={{position: 'absolute', left: 400 - 65, top: 640, zIndex: 22}}>
        <IconToolbox size={130} />
      </Pop>
      <Pop startFrame={107} style={{position: 'absolute', left: 700 - 65, top: 640, zIndex: 22}}>
        <IconMonitorChart size={130} />
      </Pop>
      <Pop startFrame={110} style={{position: 'absolute', left: 1000 - 65, top: 640, zIndex: 22}}>
        <IconGear size={130} />
      </Pop>

      <Caption text="هنتعلم الـ tools والـ techniques اللي بندير بيها الشبكة." />
      <SceneFade startFrame={136} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 5b (31.50 -> 38.50s, 168 frames, LAYOUT_L)
// ============================================================================
const Scene5b: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 5/8" />

      {/* Unified LAYOUT_L Audio */}
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
        centerTopicTitle={getText('V5-S5b', 'center_title')}
        centerSlideTag="Slide 8"
        nextTopicTitle={getText('V5-S5b', 'next_topic')}
        nodes={[
          {
            position: 'N1',
            directionText: 'شفناه في V2 · Slide 4',
            topicTitle: getText('V5-S5b', 'n1_topic'),
            arabicText: 'أمثلة على الـ tools اللي بندير بيها الشبكة',
            labels: [
              getText('V5-S5b', 'lbl_vcenter'),
              getText('V5-S5b', 'lbl_vsphere'),
              getText('V5-S5b', 'lbl_vsphere_web'),
              getText('V5-S5b', 'lbl_term'),
            ],
            crop: {
              src: 'slides_up/s04_datacenter.png',
              region: {x0: 6, x1: 88, y0: 0, y1: 19},
            },
          },
          {
            position: 'N2',
            directionText: 'هنشوفه في V6 · Slides 9–10',
            topicTitle: getText('V5-S5b', 'n2_topic'),
            arabicText: 'الإدارة بتضمن الـ security... والـ Firewall أداة أساسية ليها',
            labels: [getText('V5-S5b', 'lbl_sec')],
            crop: {
              src: 'slides/s09_firewall_icon.png',
              region: {x0: 0, x1: 100, y0: 0, y1: 100},
            },
          },
          {
            position: 'N3',
            directionText: 'هنشوفه في V8 · Slides 14–15',
            topicTitle: getText('V5-S5b', 'n3_topic'),
            arabicText: 'الـ SDN طريقة جديدة للـ network management: إدارة مركزية',
            labels: [getText('V5-S5b', 'lbl_sdn')],
            crop: {
              src: 'slides_up/s15_traditional_vs_sdn.png',
              region: {x0: 52, x1: 100, y0: 0, y1: 100},
            },
          },
        ]}
      />

      {/* Footer note appearing with NextChip at 4.8s (frame 115) */}
      {frame >= 115 && (
        <div
          dir="rtl"
          style={{
            position: 'absolute',
            right: 1920 - 1200,
            top: 912,
            fontFamily: FONTS.BODY,
            fontWeight: 500,
            fontSize: 24,
            color: COLORS.MUTED,
            opacity: Math.min(1, (frame - 115) / 6),
            zIndex: 35,
          }}
        >
          {getText('V5-S5b', 'footer_note')}
        </div>
      )}

      <Caption text="الـ Network Management هي المظلة اللي كل المواضيع تحتها." />
      <SceneFade startFrame={160} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 6 (38.50 -> 48.50s, 240 frames, LAYOUT_R: StudyCard)
// ============================================================================
const Scene6: React.FC = () => {
  const frame = useCurrentFrame();
  const showTitle = frame >= 18;
  const showTags = frame >= 30;
  const showLines = frame >= 32;
  const showBlocks = frame >= 36;
  const showGlossary = frame >= 79;

  const glossary = [
    {term: 'Network management', meaning: 'إدارة الشبكات'},
    {term: 'administering', meaning: 'تجهيز وتنظيم'},
    {term: 'managing', meaning: 'تشغيل ومتابعة'},
    {term: 'maintaining', meaning: 'صيانة مستمرة'},
    {term: 'network infrastructure', meaning: 'البنية التحتية للشبكة'},
    {term: 'performance · availability · security', meaning: 'الأداء · الإتاحة · الأمان'},
    {term: 'tools and techniques', meaning: 'الأدوات والأساليب'},
  ];

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 5/8 · Slide 8" />

      {/* Unified StudyCard Audio */}
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
                  Slide 8
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
              {/* Left Column: Verbatim Slide 8 */}
              <div
                dir="ltr"
                style={{
                  flex: 1.7,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 18,
                  opacity: showBlocks ? 1 : 0,
                }}
              >
                <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
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
                      Slide 8
                    </span>
                    <span style={{fontFamily: FONTS.BODY, fontWeight: 700, fontSize: 31, color: COLORS.INK}}>
                      {getText('V5-S6', 's8_title')}
                    </span>
                  </div>

                  <div
                    aria-label={getText('V5-S6', 's8_p1')}
                    style={{
                      fontFamily: FONTS.BODY,
                      fontWeight: 600,
                      fontSize: 26,
                      lineHeight: 1.48,
                      color: COLORS.INK,
                    }}
                  >
                    Network management is the process of{' '}
                    <HighlightText
                      text="administering, managing, and maintaining"
                      startFrame={0}
                      durationFrames={1}
                      rtl={false}
                    />{' '}
                    a network infrastructure. It ensures the{' '}
                    <HighlightText
                      text="performance, availability, and security"
                      startFrame={0}
                      durationFrames={1}
                      rtl={false}
                    />{' '}
                    of the network infrastructure.
                  </div>

                  <div
                    aria-label={getText('V5-S6', 's8_p2')}
                    style={{
                      fontFamily: FONTS.BODY,
                      fontWeight: 600,
                      fontSize: 26,
                      lineHeight: 1.48,
                      color: COLORS.INK,
                    }}
                  >
                    In this section, we will discuss the different network management{' '}
                    <HighlightText text="tools and techniques" startFrame={0} durationFrames={1} rtl={false} /> that are
                    used to manage a computer network effectively.
                  </div>
                </div>
              </div>

              {showLines && (
                <div style={{width: 2, height: '94%', backgroundColor: COLORS.INK, alignSelf: 'center'}} />
              )}

              {/* Right Column: 7 Glossary rows */}
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
                <div
                  style={{
                    fontFamily: FONTS.HOOK,
                    fontWeight: 700,
                    fontSize: 36,
                    lineHeight: 1.15,
                    color: COLORS.INK,
                    marginBottom: 6,
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
                      height: 70,
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      dir="ltr"
                      style={{
                        fontFamily: FONTS.EN_TITLE,
                        fontWeight: 700,
                        fontSize: 25,
                        lineHeight: 1.15,
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
                        fontSize: 23,
                        lineHeight: 1.2,
                        color: COLORS.MUTED,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <BidiText text={g.meaning} />
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
// SCENE 7 (48.50 -> 54.50s, 144 frames, LAYOUT_F)
// ============================================================================
const Scene7: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 5/8" />

      {/* Audio */}
      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="marker_loop" at={0.4} dur={1.1} />
      <Sfx name="marker_loop" at={1.55} dur={0.6} />
      <Sfx name="chime_success" at={2.15} />
      <Sfx name="pencil_loop" at={2.3} dur={0.5} />
      <Sfx name="pencil_loop" at={3.1} dur={0.7} gainDb={-3} />
      <Sfx name="highlight_swipe" at={3.85} dur={0.35} />
      <Sfx name="shield_clink" at={4.3} gainDb={-3} />
      <Sfx name="pop_soft" at={4.55} gainDb={-3} />

      <HandWrite
        text={getText('V5-S7', 'f_main')}
        startFrame={10}
        durationFrames={26}
        style={{
          position: 'absolute',
          left: 1100,
          top: 290,
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.KEY_EN,
          fontWeight: 400,
          fontSize: 120,
          color: COLORS.INK,
          zIndex: 22,
        }}
      />

      <RedEllipse cx={1100} cy={290} rx={560} ry={130} startFrame={37} durationFrames={15} />

      <HandWrite
        text={getText('V5-S7', 'f_ar')}
        startFrame={55}
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
          zIndex: 22,
        }}
      />

      <Character src="karim_K5.png" x={280} height={680} baseY={1000} side="left" startFrame={70} />

      {frame >= 74 && (
        <div
          dir="ltr"
          style={{
            position: 'absolute',
            left: 1100,
            top: 600,
            transform: 'translate(-50%, -50%)',
            fontFamily: FONTS.BODY,
            fontWeight: 600,
            fontSize: 40,
            color: COLORS.INK,
            whiteSpace: 'nowrap',
            zIndex: 22,
          }}
        >
          {frame < 92 ? (
            <WordReveal text={getText('V5-S7', 'f_sub')} startFrame={74} durationFrames={17} rtl={false} />
          ) : (
            <HighlightText text={getText('V5-S7', 'f_sub')} startFrame={92} durationFrames={8} rtl={false} />
          )}
        </div>
      )}

      {/* Shield icon at (1780, 290) */}
      <Pop startFrame={103} style={{position: 'absolute', left: 1780 - 70, top: 290 - 70, zIndex: 22}}>
        <IconShield size={140} />
      </Pop>

      {/* اطّمنت! above Karim */}
      <Pop
        startFrame={109}
        style={{
          position: 'absolute',
          left: 280 - 90,
          top: 240,
          fontFamily: FONTS.HOOK,
          fontWeight: 700,
          fontSize: 56,
          color: COLORS.GREEN_DARK,
          zIndex: 25,
        }}
      >
        {getText('V5-S7', 'karim_yay')}
      </Pop>

      <Caption text="وده اسمه Network Management." />
      <SceneFade startFrame={127} durationFrames={17} />
    </AbsoluteFill>
  );
};

// ============================================================================
// MAIN V5 COMPOSITION (54.5s = 1308 frames @ 24fps)
// ============================================================================
export const V5: React.FC = () => {
  return (
    <AbsoluteFill>
      <Paper />
      <AbsoluteFill style={{zIndex: 1}}>
        {/* S1: 0.00 -> 5.50s (0..132) */}
        <Sequence from={0} durationInFrames={132}>
          <Scene1 />
        </Sequence>

        {/* S2: 5.50 -> 12.50s (132..300) */}
        <Sequence from={132} durationInFrames={168}>
          <Scene2 />
        </Sequence>

        {/* S3: 12.50 -> 19.50s (300..468) */}
        <Sequence from={300} durationInFrames={168}>
          <Scene3 />
        </Sequence>

        {/* S4: 19.50 -> 25.50s (468..612) */}
        <Sequence from={468} durationInFrames={144}>
          <Scene4 />
        </Sequence>

        {/* S5: 25.50 -> 31.50s (612..756) */}
        <Sequence from={612} durationInFrames={144}>
          <Scene5 />
        </Sequence>

        {/* S5b: 31.50 -> 38.50s (756..924) */}
        <Sequence from={756} durationInFrames={168}>
          <Scene5b />
        </Sequence>

        {/* S6: 38.50 -> 48.50s (924..1164) */}
        <Sequence from={924} durationInFrames={240}>
          <Scene6 />
        </Sequence>

        {/* S7: 48.50 -> 54.50s (1164..1308) */}
        <Sequence from={1164} durationInFrames={144}>
          <Scene7 />
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
