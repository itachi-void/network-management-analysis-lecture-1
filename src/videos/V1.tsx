// src/videos/V1.tsx
import React, {useMemo} from 'react';
import {AbsoluteFill, Sequence, useCurrentFrame, interpolate} from 'remotion';
import rough from 'roughjs';
import {COLORS, FONTS} from '../theme';
import {FONT_FAMILIES} from '../lib/fonts';
import {Sfx} from '../lib/sfx';
import {
  Paper,
  SketchBox,
  HandUnderline,
  RedEllipse,
  HighlightText,
  RedTick,
  WordReveal,
  Caption,
  Character,
  SceneFade,
  SlideBadge,
  PinnedPhoto,
  BidiText,
} from '../components';
import {IconCalendar, IconChecklist} from '../icons';
import {texts} from './V1.data';

const getText = (scene: string, id: string): string => {
  const found = texts.find((t) => t.scene === scene && t.id === id);
  if (!found) {
    throw new Error(`Missing text in V1.data.ts for scene=${scene}, id=${id}`);
  }
  return found.text;
};

// Helper for HandWrite reveal (LTR or RTL)
const HandWrite: React.FC<{
  text: string;
  startFrame: number;
  durationFrames: number;
  rtl?: boolean;
  style?: React.CSSProperties;
  ariaLabel?: string;
}> = ({text, startFrame, durationFrames, rtl = false, style, ariaLabel}) => {
  const frame = useCurrentFrame();
  if (frame < startFrame) return null;
  const p = Math.min(1, (frame - startFrame) / Math.max(1, durationFrames));
  const clip = rtl
    ? `inset(-15% 0 -15% ${Math.max(0, (1 - p) * 100)}%)`
    : `inset(-15% ${Math.max(0, (1 - p) * 100)}% -15% 0)`;
  return (
    <div
      dir={rtl ? 'rtl' : 'ltr'}
      aria-label={ariaLabel}
      style={{
        clipPath: clip,
        whiteSpace: 'nowrap',
        ...style,
      }}
    >
      {rtl ? <BidiText text={text} /> : text}
    </div>
  );
};

// Sparkle rays around character head
const HeadSparkle: React.FC<{cx: number; cy: number; startFrame: number}> = ({cx, cy, startFrame}) => {
  const frame = useCurrentFrame();
  if (frame < startFrame) return null;
  const p = Math.min(1, (frame - startFrame) / 5);
  const angles = [-45, -15, 15, 45, 135, 165, 195];
  return (
    <svg
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: 1920,
        height: 1080,
        pointerEvents: 'none',
        zIndex: 35,
      }}
    >
      {angles.map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const r1 = 44;
        const r2 = 44 + 28 * p;
        return (
          <line
            key={i}
            x1={cx + Math.cos(rad) * r1}
            y1={cy - Math.sin(rad) * r1}
            x2={cx + Math.cos(rad) * r2}
            y2={cy - Math.sin(rad) * r2}
            stroke={COLORS.WARN}
            strokeWidth={6}
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
};

// ============================================================================
// SCENE 1 (0.00 -> 6.00s, 144 frames, LAYOUT_A)
// ============================================================================
const Scene1: React.FC = () => {
  const frame = useCurrentFrame();

  // Avatar pop at 3.50s (frame 84)
  const avatarPop = frame >= 84 ? Math.min(1, (frame - 84) / 5) : 0;
  const avatarScale = frame >= 84 && frame < 90 ? 1 + Math.sin(((frame - 84) / 6) * Math.PI) * 0.14 : avatarPop;

  // Name oval at 4.40-4.75s (frames 106 -> 114)
  const ovalP = frame >= 106 ? Math.min(1, (frame - 106) / 8) : 0;
  const ovalPath = useMemo(() => {
    const gen = rough.generator();
    const d = gen.ellipse(400, 130, 210, 74, {
      seed: 11,
      roughness: 0.8,
      stroke: COLORS.INK,
      strokeWidth: 4,
      fill: COLORS.CARD,
      fillStyle: 'solid',
    });
    return gen.toPaths(d);
  }, []);

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 1/8 · Slide 1" />

      {/* Audio */}
      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="marker_loop" at={0.4} dur={1.2} />
      <Sfx name="marker_loop" at={1.6} dur={0.7} />
      <Sfx name="marker_loop" at={2.35} dur={0.4} />
      <Sfx name="pencil_loop" at={2.85} dur={0.5} />
      <Sfx name="pop_soft" at={3.5} />
      <Sfx name="pencil_loop" at={3.7} dur={0.6} gainDb={-3} />
      <Sfx name="pencil_loop" at={4.4} dur={0.35} />

      {/* Character Omar O1 at x=400 */}
      <Character src="omar_O1.png" x={400} height={800} baseY={1000} side="left" startFrame={0} />

      {/* Name oval «م. عمر» center (400, 130) */}
      {frame >= 106 && (
        <>
          <svg
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: 1920,
              height: 1080,
              pointerEvents: 'none',
              zIndex: 25,
              opacity: ovalP,
            }}
          >
            {ovalPath.map((p, i) => (
              <path
                key={i}
                d={p.d}
                fill={p.fill || 'none'}
                stroke={p.stroke}
                strokeWidth={p.strokeWidth}
              />
            ))}
          </svg>
          <div
            dir="rtl"
            style={{
              position: 'absolute',
              left: 400,
              top: 130,
              transform: 'translate(-50%, -50%)',
              fontFamily: FONTS.BODY,
              fontWeight: 600,
              fontSize: 34,
              color: COLORS.INK,
              opacity: ovalP,
              zIndex: 26,
              whiteSpace: 'nowrap',
            }}
          >
            {getText('V1-S1', 'char_name')}
          </div>
        </>
      )}

      {/* English Title Line 1: Network Management at (1280, 230) */}
      <HandWrite
        text={getText('V1-S1', 'title_part1')}
        ariaLabel={getText('V1-S1', 'title_full')}
        startFrame={10}
        durationFrames={29}
        style={{
          position: 'absolute',
          left: 1280,
          top: 230,
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.KEY_EN,
          fontWeight: 400,
          fontSize: 104,
          color: COLORS.INK,
          zIndex: 15,
        }}
      />

      {/* English Title Line 2: and Analysis at (1280, 350) */}
      <HandWrite
        text={getText('V1-S1', 'title_part2')}
        startFrame={38}
        durationFrames={17}
        style={{
          position: 'absolute',
          left: 1280,
          top: 350,
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.KEY_EN,
          fontWeight: 400,
          fontSize: 104,
          color: COLORS.INK,
          zIndex: 15,
        }}
      />

      {/* Red line under Line 2: x 1000 -> 1560 at y 410 */}
      {frame >= 56 && (
        <HandUnderline
          x1={1000}
          x2={1560}
          y={410}
          startFrame={56}
          durationFrames={10}
        />
      )}

      {/* Arabic meaning: «إدارة وتحليل الشبكات» center (1280, 500) */}
      <HandWrite
        text={getText('V1-S1', 'title_ar')}
        startFrame={68}
        durationFrames={12}
        rtl
        style={{
          position: 'absolute',
          left: 1280,
          top: 500,
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.HOOK,
          fontWeight: 700,
          fontSize: 64,
          color: COLORS.INK,
          zIndex: 15,
        }}
      />

      {/* Doctor line center (1280, 640): Avatar circle 72px + 24px gap + by Dr /Amina Mohamed */}
      <div
        dir="ltr"
        style={{
          position: 'absolute',
          left: 1280,
          top: 640,
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          alignItems: 'center',
          gap: 24,
          zIndex: 15,
        }}
      >
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: '50%',
            backgroundColor: COLORS.AVATAR,
            border: `3px solid ${COLORS.INK}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: FONTS.BODY,
            fontWeight: 700,
            fontSize: 44,
            color: '#FFFFFF',
            transform: `scale(${avatarScale})`,
            opacity: avatarPop > 0 ? 1 : 0,
          }}
        >
          a
        </div>
        <div
          style={{
            fontFamily: FONTS.BODY,
            fontWeight: 600,
            fontSize: 44,
            color: COLORS.INK,
            minWidth: 420,
          }}
        >
          {frame >= 89 && (
            <WordReveal
              text={getText('V1-S1', 'doctor')}
              startFrame={89}
              durationFrames={14}
              rtl={false}
            />
          )}
        </div>
      </div>

      <Caption text="أهلاً بيك في Network Management and Analysis مع د. أمينة محمد." />
      <SceneFade startFrame={136} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 2 (6.00 -> 11.50s, 132 frames, LAYOUT_A)
// ============================================================================
const Scene2: React.FC = () => {
  const frame = useCurrentFrame();

  const calPop = frame >= 86 ? Math.min(1, (frame - 86) / 5) : 0;

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 1/8 · Slide 1" />

      {/* Audio */}
      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="pencil_loop" at={0.35} dur={0.6} />
      <Sfx name="pencil_loop" at={1.0} dur={0.5} gainDb={-3} />
      <Sfx name="pencil_loop" at={1.8} dur={0.6} gainDb={-3} />
      <Sfx name="pencil_loop" at={2.7} dur={0.6} gainDb={-3} />
      <Sfx name="pop_soft" at={3.6} />
      <Sfx name="pencil_loop" at={3.75} dur={0.4} gainDb={-3} />

      {/* Character Omar O2 at x=400 */}
      <Character src="omar_O2.png" x={400} height={800} baseY={1000} side="left" startFrame={0} />

      {/* Card x 760 -> 1800 (w 1040), y 200 -> 860 (h 660) */}
      {frame >= 8 && (
        <SketchBox x={760} y={200} w={1040} h={660} startFrame={8} drawDurationFrames={14} seed={22} />
      )}

      {/* Line 1: Menoufia University at (1280, 290) + جامعة المنوفية at (1280, 345) */}
      {frame >= 24 && (
        <div
          style={{
            position: 'absolute',
            left: 1280,
            top: 290,
            transform: 'translate(-50%, -50%)',
            fontFamily: FONTS.BODY,
            fontWeight: 700,
            fontSize: 54,
            color: COLORS.INK,
            whiteSpace: 'nowrap',
            zIndex: 20,
          }}
        >
          <WordReveal text={getText('V1-S2', 'univ_en')} startFrame={24} durationFrames={12} rtl={false} />
        </div>
      )}
      {frame >= 37 && (
        <div
          dir="rtl"
          style={{
            position: 'absolute',
            left: 1280,
            top: 345,
            transform: 'translate(-50%, -50%)',
            fontFamily: FONTS.BODY,
            fontWeight: 500,
            fontSize: 30,
            color: COLORS.MUTED,
            opacity: Math.min(1, (frame - 37) / 5),
            zIndex: 20,
          }}
        >
          {getText('V1-S2', 'univ_ar')}
        </div>
      )}

      {/* Line 2: Faculty of Computers and Information at (1280, 430) + كلية الحاسبات والمعلومات at (1280, 480) */}
      {frame >= 43 && (
        <div
          style={{
            position: 'absolute',
            left: 1280,
            top: 430,
            transform: 'translate(-50%, -50%)',
            fontFamily: FONTS.BODY,
            fontWeight: 600,
            fontSize: 44,
            color: COLORS.INK,
            whiteSpace: 'nowrap',
            zIndex: 20,
          }}
        >
          <WordReveal text={getText('V1-S2', 'faculty_en')} startFrame={43} durationFrames={14} rtl={false} />
        </div>
      )}
      {frame >= 59 && (
        <div
          dir="rtl"
          style={{
            position: 'absolute',
            left: 1280,
            top: 480,
            transform: 'translate(-50%, -50%)',
            fontFamily: FONTS.BODY,
            fontWeight: 500,
            fontSize: 30,
            color: COLORS.MUTED,
            opacity: Math.min(1, (frame - 59) / 5),
            zIndex: 20,
          }}
        >
          {getText('V1-S2', 'faculty_ar')}
        </div>
      )}

      {/* Line 3: Department of Information Technology at (1280, 565) + قسم تكنولوجيا المعلومات at (1280, 615) */}
      {frame >= 65 && (
        <div
          style={{
            position: 'absolute',
            left: 1280,
            top: 565,
            transform: 'translate(-50%, -50%)',
            fontFamily: FONTS.BODY,
            fontWeight: 600,
            fontSize: 44,
            color: COLORS.INK,
            whiteSpace: 'nowrap',
            zIndex: 20,
          }}
        >
          <WordReveal text={getText('V1-S2', 'dept_en')} startFrame={65} durationFrames={14} rtl={false} />
        </div>
      )}
      {frame >= 80 && (
        <div
          dir="rtl"
          style={{
            position: 'absolute',
            left: 1280,
            top: 615,
            transform: 'translate(-50%, -50%)',
            fontFamily: FONTS.BODY,
            fontWeight: 500,
            fontSize: 30,
            color: COLORS.MUTED,
            opacity: Math.min(1, (frame - 80) / 5),
            zIndex: 20,
          }}
        >
          {getText('V1-S2', 'dept_ar')}
        </div>
      )}

      {/* Date row at (1280, 730): calendar icon 56px + 4 -10 -2023 */}
      <div
        dir="ltr"
        style={{
          position: 'absolute',
          left: 1280,
          top: 730,
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          zIndex: 20,
        }}
      >
        <div style={{transform: `scale(${calPop})`, opacity: calPop}}>
          <IconCalendar size={56} />
        </div>
        <div
          style={{
            fontFamily: FONTS.BODY,
            fontWeight: 600,
            fontSize: 44,
            color: COLORS.INK,
            minWidth: 230,
          }}
        >
          {frame >= 90 && (
            <WordReveal text={getText('V1-S2', 'date')} startFrame={90} durationFrames={10} rtl={false} />
          )}
        </div>
      </div>

      <Caption text="جامعة المنوفية – كلية الحاسبات – قسم Information Technology." />
      <SceneFade startFrame={124} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 3 (11.50 -> 18.00s, 156 frames, LAYOUT_P)
// ============================================================================
const Scene3: React.FC = () => {
  const frame = useCurrentFrame();

  // 5 callout labels on s01_cloud_devices (x: 120->620, y: 100->850)
  // Photo regions from 3.4:
  // Cloud (50%, 50%) -> (370, 475)
  // Laptop (28%, 18%) -> (260, 235)
  // Desktop PC (74%, 19%) -> (490, 242)
  // Smartphone (26%, 80%) -> (250, 700)
  // Tablet (73%, 80%) -> (485, 700)
  const callouts = [
    {id: 'lbl_cloud', lx: 95, ly: 465, tx: 255, ty: 475, f: 19},
    {id: 'lbl_laptop', lx: 85, ly: 175, tx: 220, ty: 225, f: 23},
    {id: 'lbl_desktop', lx: 525, ly: 145, tx: 495, ty: 215, f: 27},
    {id: 'lbl_phone', lx: 75, ly: 785, tx: 215, ty: 725, f: 31},
    {id: 'lbl_tablet', lx: 540, ly: 785, tx: 500, ty: 725, f: 35},
  ];

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 1/8 · Slide 1" />

      {/* Audio */}
      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="page_turn" at={0.3} />
      <Sfx name="pencil_loop" at={0.8} dur={0.8} gainDb={-3} />
      <Sfx name="pencil_loop" at={1.7} dur={0.5} />
      <Sfx name="pencil_loop" at={2.3} dur={0.7} gainDb={-3} />
      <Sfx name="pencil_loop" at={3.1} dur={1.2} gainDb={-3} />
      <Sfx name="highlight_swipe" at={4.4} dur={0.35} />

      {/* PinnedPhoto s01_cloud_devices in x 120 -> 620, y 100 -> 850 (500x750), tilt -1.2 deg */}
      <PinnedPhoto
        src="slides_up/s01_cloud_devices.png"
        x={120}
        y={100}
        w={500}
        h={750}
        tiltDeg={-1.2}
        startFrame={7}
      />

      {/* 5 Callout Labels + Short Arrows */}
      <svg
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: 1920,
          height: 1080,
          pointerEvents: 'none',
          zIndex: 28,
        }}
      >
        {callouts.map((c, idx) => {
          if (frame < c.f) return null;
          const p = Math.min(1, (frame - c.f) / 4);
          return (
            <g key={idx} opacity={p}>
              <line
                x1={c.lx + 45}
                y1={c.ly}
                x2={c.lx + 45 + (c.tx - (c.lx + 45)) * p}
                y2={c.ly + (c.ty - c.ly) * p}
                stroke={COLORS.INK}
                strokeWidth={3}
                strokeLinecap="round"
              />
              <circle cx={c.tx} cy={c.ty} r={5} fill={COLORS.RED} />
            </g>
          );
        })}
      </svg>
      {callouts.map((c, idx) => {
        if (frame < c.f) return null;
        const p = Math.min(1, (frame - c.f) / 4);
        return (
          <div
            key={idx}
            dir="ltr"
            style={{
              position: 'absolute',
              left: c.lx,
              top: c.ly - 22,
              backgroundColor: COLORS.CARD,
              border: `2px solid ${COLORS.INK}`,
              borderRadius: 8,
              padding: '2px 10px',
              fontFamily: FONTS.EN_TITLE,
              fontWeight: 700,
              fontSize: 30,
              color: COLORS.INK,
              opacity: p,
              zIndex: 30,
              whiteSpace: 'nowrap',
            }}
          >
            {getText('V1-S3', c.id)}
          </div>
        );
      })}

      {/* Card x 700 -> 1800 (w 1100), y 220 -> 820 (h 600) */}
      {frame >= 41 && (
        <SketchBox x={700} y={220} w={1100} h={600} startFrame={41} drawDurationFrames={12} seed={33} />
      )}

      {/* Inside Card: LTR text from x 760, max width 980 (Cairo 600, 44px) */}
      <div
        dir="ltr"
        style={{
          position: 'absolute',
          left: 760,
          top: 320,
          width: 980,
          display: 'flex',
          flexDirection: 'column',
          gap: 44,
          fontFamily: FONTS.BODY,
          fontWeight: 600,
          fontSize: 44,
          lineHeight: 1.55,
          color: COLORS.INK,
          zIndex: 22,
        }}
      >
        {frame >= 55 && (
          <div>
            <WordReveal text={getText('V1-S3', 'p1')} startFrame={55} durationFrames={17} rtl={false} />
          </div>
        )}

        {frame >= 74 && (
          <div style={{position: 'relative'}}>
            {/* Yellow highlight behind 'overview of the different topics' at 4.40-4.75s (frames 106 -> 114) */}
            {frame < 106 ? (
              <WordReveal text={getText('V1-S3', 'p2')} startFrame={74} durationFrames={29} rtl={false} />
            ) : (
              <span>
                This will be an{' '}
                <HighlightText
                  text="overview of the different topics"
                  startFrame={106}
                  durationFrames={8}
                  rtl={false}
                />{' '}
                that we will cover in this course.
              </span>
            )}
          </div>
        )}
      </div>

      <Caption text="المحاضرة دي Overview لكل المواضيع اللي هنغطيها في الكورس." />
      <SceneFade startFrame={148} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 4 (18.00 -> 23.00s, 120 frames, LAYOUT_P)
// ============================================================================
const Scene4: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 1/8 · Slide 2" />

      {/* Audio */}
      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="page_turn" at={0.3} />
      <Sfx name="marker_loop" at={0.8} dur={0.8} />
      <Sfx name="marker_loop" at={1.65} dur={0.35} />
      <Sfx name="pencil_loop" at={2.15} dur={0.4} />
      <Sfx name="pencil_loop" at={2.6} dur={0.4} />

      {/* PinnedPhoto s02_agenda_figure in x 1160 -> 1760 (w 600), y 200 -> 800 (h 600), tilt +1.2 deg */}
      <PinnedPhoto
        src="slides_up/s02_agenda_figure.jpg"
        x={1160}
        y={200}
        w={600}
        h={600}
        tiltDeg={1.2}
        startFrame={7}
      />

      {/* Agenda (Caveat Brush, 150px) center (600, 360) */}
      <HandWrite
        text={getText('V1-S4', 'agenda_title')}
        startFrame={19}
        durationFrames={19}
        style={{
          position: 'absolute',
          left: 600,
          top: 360,
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.KEY_EN,
          fontWeight: 400,
          fontSize: 150,
          color: COLORS.INK,
          zIndex: 20,
        }}
      />

      {/* Red line from x 400 to 800 at y 450 */}
      {frame >= 40 && (
        <HandUnderline
          x1={400}
          x2={800}
          y={450}
          startFrame={40}
          durationFrames={8}
        />
      )}

      {/* Tag (rect 360x100) center (600, 590) -> x=420, y=540 */}
      {frame >= 52 && (
        <SketchBox x={420} y={540} w={360} h={100} startFrame={52} drawDurationFrames={9} seed={44} />
      )}
      <HandWrite
        text={getText('V1-S4', 'tag_lec1')}
        startFrame={62}
        durationFrames={10}
        style={{
          position: 'absolute',
          left: 600,
          top: 590,
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.EN_TITLE,
          fontWeight: 700,
          fontSize: 60,
          color: COLORS.INK,
          zIndex: 22,
        }}
      />

      {/* Note «المحاضرة الأولى – خريطة المواضيع» center (600, 700) */}
      {frame >= 74 && (
        <div
          dir="rtl"
          style={{
            position: 'absolute',
            left: 600,
            top: 700,
            transform: 'translate(-50%, -50%)',
            fontFamily: FONTS.BODY,
            fontWeight: 500,
            fontSize: 36,
            color: COLORS.MUTED,
            opacity: Math.min(1, (frame - 74) / 6),
            zIndex: 20,
            whiteSpace: 'nowrap',
          }}
        >
          {getText('V1-S4', 'note_ar')}
        </div>
      )}

      <Caption text="دي الـ Agenda بتاعة Lecture 1... يلا نشوف هندرس إيه." />
      <SceneFade startFrame={112} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 5 & 6 COMBINED (23.00 -> 35.00s, 288 frames: S5=0..156, S6=156..288)
// ============================================================================
const Scene5And6: React.FC = () => {
  const frame = useCurrentFrame();

  const rows = [
    {scene: 'V1-S5', enId: 'topic1', arId: 'topic1_ar', startSec: 2.3},
    {scene: 'V1-S5', enId: 'topic2', arId: 'topic2_ar', startSec: 3.25},
    {scene: 'V1-S5', enId: 'topic3', arId: 'topic3_ar', startSec: 4.2},
    {scene: 'V1-S5', enId: 'topic4', arId: 'topic4_ar', startSec: 5.15},
    {scene: 'V1-S6', enId: 'topic5', arId: 'topic5_ar', startSec: 6.5 + 0.2},
    {scene: 'V1-S6', enId: 'topic6', arId: 'topic6_ar', startSec: 6.5 + 1.15},
    {scene: 'V1-S6', enId: 'topic7', arId: 'topic7_ar', startSec: 6.5 + 2.1},
  ];

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 1/8 · Slide 3" />

      {/* S5 Audio */}
      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="pencil_loop" at={0.3} dur={0.6} />
      <Sfx name="marker_loop" at={1.2} dur={0.8} />
      <Sfx name="page_turn" at={1.9} gainDb={-3} />

      {/* Row SFX for all 7 rows */}
      {rows.map((r, i) => (
        <React.Fragment key={i}>
          <Sfx name="pencil_loop" at={r.startSec} dur={0.2} />
          <Sfx name="pencil_loop" at={r.startSec + 0.2} dur={0.4} gainDb={-3} />
          <Sfx name="tick_soft" at={r.startSec + 0.6} />
        </React.Fragment>
      ))}

      {/* S6 Bounce Chime at 6.50 + 3.20 = 9.70s */}
      <Sfx name="chime_success" at={9.7} />

      {/* Card x 100 -> 1400 (w 1300), y 90 -> 940 (h 850) */}
      {frame >= 7 && (
        <SketchBox x={100} y={90} w={1300} h={850} startFrame={7} drawDurationFrames={14} seed={55} />
      )}

      {/* Small Tag inside card top-left at (170, 130): Agenda (Kalam 700, 34px) */}
      {frame >= 23 && (
        <div
          dir="ltr"
          style={{
            position: 'absolute',
            left: 170,
            top: 112,
            border: `2px solid ${COLORS.INK}`,
            borderRadius: 8,
            padding: '2px 14px',
            fontFamily: FONTS.EN_TITLE,
            fontWeight: 700,
            fontSize: 34,
            color: COLORS.INK,
            opacity: Math.min(1, (frame - 23) / 5),
            zIndex: 22,
          }}
        >
          {getText('V1-S5', 'agenda_tag')}
        </div>
      )}

      {/* Title Main course topics (Kalam 700, 58px) from x 170 at y 200 */}
      <HandWrite
        text={getText('V1-S5', 'topics_title')}
        startFrame={29}
        durationFrames={14}
        style={{
          position: 'absolute',
          left: 170,
          top: 172,
          fontFamily: FONTS.EN_TITLE,
          fontWeight: 700,
          fontSize: 58,
          color: COLORS.INK,
          zIndex: 22,
        }}
      />

      {/* INK 3px line under title from x 170 to 720 at y 240 */}
      {frame >= 43 && (
        <HandUnderline
          x1={170}
          x2={720}
          y={245}
          startFrame={43}
          durationFrames={5}
        />
      )}

      {/* Small PinnedPhoto s02_agenda_figure in x 1440 -> 1800 (360x360), y 560 -> 920, tilt +1.5 deg */}
      <PinnedPhoto
        src="slides_up/s02_agenda_figure.jpg"
        x={1440}
        y={560}
        w={360}
        h={360}
        tiltDeg={1.5}
        startFrame={46}
      />

      {/* 7 Topic Rows starting at y=300, step 88px */}
      {rows.map((r, idx) => {
        const y = 300 + idx * 88;
        const rFrame = Math.round(r.startSec * 24);
        const wordFrame = Math.round((r.startSec + 0.2) * 24);
        const tickFrame = Math.round((r.startSec + 0.6) * 24);
        const arFrame = Math.round((r.startSec + 0.8) * 24);

        // Bounce at 9.70s + idx * 0.05s
        const bounceStart = Math.round((9.7 + idx * 0.05) * 24);
        const bounceDur = 7; // 0.30s
        let bounceScale = 1;
        if (frame >= bounceStart && frame < bounceStart + bounceDur) {
          bounceScale = 1 + Math.sin(((frame - bounceStart) / bounceDur) * Math.PI) * 0.15;
        }

        if (frame < rFrame) return null;

        return (
          <React.Fragment key={idx}>
            {/* Checkbox 46x46 at x=170 */}
            <div
              style={{
                position: 'absolute',
                left: 170,
                top: y - 23,
                width: 46,
                height: 46,
                border: `4px solid ${COLORS.INK}`,
                borderRadius: 6,
                backgroundColor: COLORS.CARD,
                boxSizing: 'border-box',
                transform: `scale(${bounceScale})`,
                zIndex: 22,
              }}
            />
            {/* RedTick inside checkbox */}
            {frame >= tickFrame && (
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  width: 1920,
                  height: 1080,
                  transform: `scale(${bounceScale})`,
                  transformOrigin: `${193}px ${y}px`,
                  pointerEvents: 'none',
                  zIndex: 25,
                }}
              >
                <RedTick x={193} y={y} startFrame={tickFrame} />
              </div>
            )}

            {/* English text from x=240 (Cairo 600, 42px) */}
            {frame >= wordFrame && (
              <div
                dir="ltr"
                style={{
                  position: 'absolute',
                  left: 240,
                  top: y,
                  transform: 'translateY(-50%)',
                  fontFamily: FONTS.BODY,
                  fontWeight: 600,
                  fontSize: 42,
                  color: COLORS.INK,
                  whiteSpace: 'nowrap',
                  zIndex: 22,
                }}
              >
                <WordReveal
                  text={getText(r.scene, r.enId)}
                  startFrame={wordFrame}
                  durationFrames={10}
                  rtl={false}
                />
              </div>
            )}

            {/* Arabic meaning right-aligned ending at x=1360 */}
            {frame >= arFrame && (
              <div
                dir="rtl"
                style={{
                  position: 'absolute',
                  right: 1920 - 1360,
                  top: y,
                  transform: 'translateY(-50%)',
                  fontFamily: FONTS.BODY,
                  fontWeight: 500,
                  fontSize: 30,
                  color: COLORS.MUTED,
                  opacity: Math.min(1, (frame - arFrame) / 5),
                  whiteSpace: 'nowrap',
                  zIndex: 22,
                }}
              >
                {getText(r.scene, r.arId)}
              </div>
            )}
          </React.Fragment>
        );
      })}

      {/* Captions for S5 (0..156) and S6 (156..288) */}
      {frame < 156 ? (
        <Caption text="عندنا 7 مواضيع في الكورس... ودول أول 4." fadeOutStartFrame={151} />
      ) : (
        <Caption text="وبعدهم Firewall وSAN & NAS... ونختم بالـ SDN." startFrame={156} />
      )}

      <SceneFade startFrame={280} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 7 (35.00 -> 47.00s, 288 frames, LAYOUT_R: Study Card)
// ============================================================================
const Scene7: React.FC = () => {
  const frame = useCurrentFrame();

  const showTitle = frame >= 18;
  const showTags = frame >= 30;
  const showLine = frame >= 33;
  const col1Opacity = interpolate(frame, [36, 52], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const col2Opacity = interpolate(frame, [52, 74], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  const slide3Topics = [
    getText('V1-S7', 'study_topic1'),
    getText('V1-S7', 'study_topic2'),
    getText('V1-S7', 'study_topic3'),
    getText('V1-S7', 'study_topic4'),
    getText('V1-S7', 'study_topic5'),
    getText('V1-S7', 'study_topic6'),
    getText('V1-S7', 'study_topic7'),
  ];

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 1/8 · Slides 1–3" />

      {/* Audio (Unified StudyCard timing 5.4) */}
      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="pencil_loop" at={0.2} dur={0.5} />
      <Sfx name="pencil_loop" at={0.75} dur={0.5} gainDb={-3} />
      <Sfx name="pencil_loop" at={1.35} dur={0.2} gainDb={-6} />
      <Sfx name="pencil_loop" at={1.5} dur={1.6} gainDb={-3} />

      {/* Outer Card x 60 -> 1860 (w 1800), y 80 -> 950 (h 870) */}
      <div style={{position: 'absolute', left: 60, top: 80, width: 1800, height: 870, zIndex: 20}}>
        <SketchBox x={0} y={0} w={1800} h={870} seed={99} startFrame={5} drawDurationFrames={12}>
          <div style={{padding: '22px 44px', height: '100%', boxSizing: 'border-box', position: 'relative'}}>
            {/* Header */}
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 58}}>
              <div style={{display: 'flex', gap: 12, opacity: showTags ? 1 : 0}}>
                {['Slide 1', 'Slide 2', 'Slide 3'].map((t, i) => (
                  <div
                    key={i}
                    style={{
                      border: `2px solid ${COLORS.INK}`,
                      borderRadius: 8,
                      padding: '3px 14px',
                      fontFamily: FONTS.EN_TITLE,
                      fontWeight: 700,
                      fontSize: 26,
                      color: COLORS.INK,
                    }}
                  >
                    {t}
                  </div>
                ))}
              </div>
              {showTitle && (
                <div
                  dir="rtl"
                  style={{
                    fontFamily: FONTS.HOOK,
                    fontWeight: 700,
                    fontSize: 48,
                    color: COLORS.INK,
                  }}
                >
                  بطاقة المذاكرة: نص المحاضرة كامل
                </div>
              )}
            </div>

            {/* Horizontal separator */}
            {showLine && (
              <div
                style={{
                  width: '100%',
                  height: 3,
                  backgroundColor: COLORS.INK,
                  marginTop: 10,
                  marginBottom: 18,
                }}
              />
            )}

            {/* Two Verbatim Text Columns: Left (x 110..930) and Right (x 990..1810) */}
            <div style={{display: 'flex', height: 730, gap: 48}}>
              {/* LEFT COLUMN: Slide 1 + Slide 2 */}
              <div
                dir="ltr"
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                  opacity: col1Opacity,
                  fontFamily: FONTS.BODY,
                  color: COLORS.INK,
                }}
              >
                {/* 1. Tag Slide 1 */}
                <div
                  style={{
                    alignSelf: 'flex-start',
                    border: `2px solid ${COLORS.INK}`,
                    borderRadius: 6,
                    padding: '1px 10px',
                    fontFamily: FONTS.EN_TITLE,
                    fontWeight: 700,
                    fontSize: 24,
                  }}
                >
                  Slide 1
                </div>

                {/* 2. Title: Network Management and Analysis */}
                <div style={{fontWeight: 700, fontSize: 34, lineHeight: 1.25}}>
                  {getText('V1-S7', 'study_s1_title')}
                </div>

                {/* 3. Paragraph with static highlight behind 'overview of the different topics' */}
                <div
                  aria-label={getText('V1-S7', 'study_s1_p')}
                  style={{fontWeight: 600, fontSize: 26, lineHeight: 1.42}}
                >
                  Network Management and Analysis course. This will be an{' '}
                  <HighlightText
                    text="overview of the different topics"
                    startFrame={0}
                    durationFrames={1}
                    rtl={false}
                  />{' '}
                  that we will cover in this course.
                </div>

                {/* 4..8: Author, Univ, Faculty, Dept, Date */}
                <div style={{fontWeight: 600, fontSize: 25, lineHeight: 1.35, marginTop: 4}}>
                  <div>{getText('V1-S7', 'study_s1_doc')}</div>
                  <div>{getText('V1-S7', 'study_s1_univ')}</div>
                  <div>{getText('V1-S7', 'study_s1_fac')}</div>
                  <div>{getText('V1-S7', 'study_s1_dept')}</div>
                  <div>{getText('V1-S7', 'study_s1_date')}</div>
                </div>

                {/* Divider between Slide 1 and Slide 2 */}
                <div style={{width: '85%', height: 2, backgroundColor: COLORS.MUTED, opacity: 0.35, margin: '8px 0'}} />

                {/* 9. Tag Slide 2 */}
                <div
                  style={{
                    alignSelf: 'flex-start',
                    border: `2px solid ${COLORS.INK}`,
                    borderRadius: 6,
                    padding: '1px 10px',
                    fontFamily: FONTS.EN_TITLE,
                    fontWeight: 700,
                    fontSize: 24,
                  }}
                >
                  Slide 2
                </div>

                {/* 10. Title: Agenda */}
                <div style={{fontWeight: 700, fontSize: 34, lineHeight: 1.2}}>
                  {getText('V1-S7', 'study_s2_agenda')}
                </div>

                {/* 11. Lecture 1 */}
                <div style={{fontWeight: 600, fontSize: 27}}>{getText('V1-S7', 'study_s2_lec')}</div>
              </div>

              {/* Vertical Divider at center */}
              {showLine && <div style={{width: 3, height: '94%', backgroundColor: COLORS.INK, alignSelf: 'center'}} />}

              {/* RIGHT COLUMN: Slide 3 */}
              <div
                dir="ltr"
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                  opacity: col2Opacity,
                  fontFamily: FONTS.BODY,
                  color: COLORS.INK,
                }}
              >
                {/* 1. Tag Slide 3 */}
                <div
                  style={{
                    alignSelf: 'flex-start',
                    border: `2px solid ${COLORS.INK}`,
                    borderRadius: 6,
                    padding: '1px 10px',
                    fontFamily: FONTS.EN_TITLE,
                    fontWeight: 700,
                    fontSize: 24,
                  }}
                >
                  Slide 3
                </div>

                {/* 2. Title: Agenda */}
                <div style={{fontWeight: 700, fontSize: 34, lineHeight: 1.2}}>
                  {getText('V1-S7', 'study_s3_agenda')}
                </div>

                {/* 3. Main course topics */}
                <div style={{fontWeight: 700, fontSize: 30, color: COLORS.INK, marginBottom: 4}}>
                  {getText('V1-S7', 'study_s3_main')}
                </div>

                {/* 4. 7 bullet items */}
                <div style={{display: 'flex', flexDirection: 'column', gap: 14, paddingLeft: 8}}>
                  {slide3Topics.map((item, idx) => (
                    <div key={idx} style={{display: 'flex', alignItems: 'center', gap: 14}}>
                      <div
                        style={{
                          width: 12,
                          height: 12,
                          borderRadius: '50%',
                          backgroundColor: COLORS.INK,
                          flexShrink: 0,
                        }}
                      />
                      <span style={{fontWeight: 600, fontSize: 28, lineHeight: 1.3}}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SketchBox>
      </div>

      <Caption text="ده نص المحاضرة كامل... وقّف الفيديو وذاكره براحتك." />
      <SceneFade startFrame={280} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 8 (47.00 -> 53.00s, 144 frames, LAYOUT_F: Outro)
// ============================================================================
const Scene8: React.FC = () => {
  const frame = useCurrentFrame();

  const iconPop = frame >= 106 ? Math.min(1, (frame - 106) / 5) : 0;

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 1/8" />

      {/* Audio */}
      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="marker_loop" at={0.4} dur={1.0} />
      <Sfx name="marker_loop" at={1.4} dur={0.6} />
      <Sfx name="marker_loop" at={2.05} dur={0.6} />
      <Sfx name="chime_success" at={2.65} />
      <Sfx name="pencil_loop" at={2.75} dur={0.5} />
      <Sfx name="pencil_loop" at={3.35} dur={0.6} gainDb={-3} />
      <Sfx name="highlight_swipe" at={4.0} dur={0.35} />
      <Sfx name="pop_soft" at={4.4} />

      {/* Network Management (Caveat Brush, 120px) center (1120, 250) */}
      <HandWrite
        text={getText('V1-S8', 'outro_title1')}
        startFrame={10}
        durationFrames={24}
        style={{
          position: 'absolute',
          left: 1120,
          top: 250,
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.KEY_EN,
          fontWeight: 400,
          fontSize: 120,
          color: COLORS.INK,
          zIndex: 20,
        }}
      />

      {/* and Analysis (Caveat Brush, 120px) center (1120, 380) */}
      <HandWrite
        text={getText('V1-S8', 'outro_title2')}
        startFrame={34}
        durationFrames={14}
        style={{
          position: 'absolute',
          left: 1120,
          top: 380,
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.KEY_EN,
          fontWeight: 400,
          fontSize: 120,
          color: COLORS.INK,
          zIndex: 20,
        }}
      />

      {/* RedEllipse around the 2 lines: center (1120, 315), rx 560, ry 190 */}
      {frame >= 49 && (
        <RedEllipse cx={1120} cy={315} rx={560} ry={190} startFrame={49} durationFrames={15} />
      )}

      {/* «إدارة وتحليل الشبكات» (Aref Ruqaa, 80px) center (1120, 590) */}
      <HandWrite
        text={getText('V1-S8', 'outro_title_ar')}
        startFrame={66}
        durationFrames={12}
        rtl
        style={{
          position: 'absolute',
          left: 1120,
          top: 590,
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.HOOK,
          fontWeight: 700,
          fontSize: 80,
          color: COLORS.INK,
          zIndex: 20,
        }}
      />

      {/* Omar O3 bottom left: center x 330, height 720, base y 1000, enters at 3.00s (frame 72) */}
      {frame >= 72 && (
        <Character src="omar_O3.png" x={330} height={720} baseY={1000} side="left" startFrame={72} />
      )}
      <HeadSparkle cx={330} cy={320} startFrame={110} />

      {/* Highlighted sentence (Cairo 600, 42px, RTL) center (1120, 720) */}
      {frame >= 80 && (
        <div
          dir="rtl"
          style={{
            position: 'absolute',
            left: 1120,
            top: 720,
            transform: 'translate(-50%, -50%)',
            fontFamily: FONTS.BODY,
            fontWeight: 600,
            fontSize: 42,
            color: COLORS.INK,
            whiteSpace: 'nowrap',
            zIndex: 22,
          }}
        >
          {frame < 96 ? (
            <WordReveal text={getText('V1-S8', 'outro_note')} startFrame={80} durationFrames={14} rtl />
          ) : (
            <HighlightText
              text={getText('V1-S8', 'outro_note')}
              startFrame={96}
              durationFrames={8}
              rtl
            />
          )}
        </div>
      )}

      {/* Checklist icon (110px) center (1780, 300) */}
      {frame >= 106 && (
        <div
          style={{
            position: 'absolute',
            left: 1780,
            top: 300,
            transform: `translate(-50%, -50%) scale(${iconPop})`,
            opacity: iconPop,
            zIndex: 25,
          }}
        >
          <IconChecklist size={110} />
        </div>
      )}

      <Caption text="يلا نمسك المواضيع واحد واحد في الفيديوهات الجاية!" />
      <SceneFade startFrame={127} durationFrames={17} />
    </AbsoluteFill>
  );
};

// ============================================================================
// MAIN V1 COMPOSITION (53.0s = 1272 frames at 24 fps)
// ============================================================================
export const V1: React.FC = () => {
  return (
    <AbsoluteFill>
      <Paper />
      <AbsoluteFill style={{zIndex: 1}}>
        {/* S1: 0 -> 144 (6.0s) */}
        <Sequence from={0} durationInFrames={144}>
          <Scene1 />
        </Sequence>

        {/* S2: 144 -> 276 (5.5s) */}
        <Sequence from={144} durationInFrames={132}>
          <Scene2 />
        </Sequence>

        {/* S3: 276 -> 432 (6.5s) */}
        <Sequence from={276} durationInFrames={156}>
          <Scene3 />
        </Sequence>

        {/* S4: 432 -> 552 (5.0s) */}
        <Sequence from={432} durationInFrames={120}>
          <Scene4 />
        </Sequence>

        {/* S5 + S6 (CONT): 552 -> 840 (12.0s) */}
        <Sequence from={552} durationInFrames={288}>
          <Scene5And6 />
        </Sequence>

        {/* S7 (StudyCard): 840 -> 1128 (12.0s) */}
        <Sequence from={840} durationInFrames={288}>
          <Scene7 />
        </Sequence>

        {/* S8 (Outro): 1128 -> 1272 (6.0s) */}
        <Sequence from={1128} durationInFrames={144}>
          <Scene8 />
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
