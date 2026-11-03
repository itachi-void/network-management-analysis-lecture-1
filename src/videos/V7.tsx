// src/videos/V7.tsx
import React from 'react';
import {AbsoluteFill, Sequence, useCurrentFrame, interpolate} from 'remotion';
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
  Pop,
  PinnedPhoto,
  Spotlight,
  LayoutL,
  BidiText,
} from '../components';
import {
  IconNasBox,
  IconFolder,
  IconDesktopPc,
  IconServerTower,
  IconStorageCylinder,
  IconBlockGrid,
} from '../icons';
import {getText} from './V7.data';

// Helper SVG Bracket component for V7-S6 and V7-S8
const SvgBracket: React.FC<{
  x: number;
  y1: number;
  y2: number;
  side: 'left' | 'right';
  startFrame: number;
  durationFrames?: number;
}> = ({x, y1, y2, side, startFrame, durationFrames = 10}) => {
  const frame = useCurrentFrame();
  if (frame < startFrame) return null;
  const p = interpolate(frame - startFrame, [0, durationFrames], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const dir = side === 'left' ? 18 : -18;
  const h = (y2 - y1) * p;
  return (
    <svg width={1920} height={1080} style={{position: 'absolute', left: 0, top: 0, pointerEvents: 'none', zIndex: 24}}>
      <path
        d={`M ${x + dir} ${y1} L ${x} ${y1} L ${x} ${y1 + h} L ${x + dir} ${y1 + h}`}
        fill="none"
        stroke={COLORS.RED}
        strokeWidth={5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// ============================================================================
// SCENE 1 (0.00 -> 6.00s, 144 frames, LAYOUT_H: photo left + character right)
// ============================================================================
const Scene1: React.FC = () => {
  const frame = useCurrentFrame();

  const xProgress = interpolate(frame, [98, 108], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const labels = [
    {
      startF: 62,
      text: getText('V7-S1', 'lbl_cam'),
      sub: undefined,
      lx: 600,
      ly: 390,
      ax1: 590,
      ay1: 395,
      ax2: 240,
      ay2: 335,
    },
    {
      startF: 71,
      text: getText('V7-S1', 'lbl_mem'),
      sub: undefined,
      lx: 600,
      ly: 465,
      ax1: 590,
      ay1: 470,
      ax2: 450,
      ay2: 350,
    },
    {
      startF: 79,
      text: getText('V7-S1', 'lbl_coin'),
      sub: getText('V7-S1', 'lbl_coin_ar'),
      lx: 600,
      ly: 545,
      ax1: 590,
      ay1: 550,
      ax2: 350,
      ay2: 405,
    },
    {
      startF: 88,
      text: getText('V7-S1', 'lbl_cd'),
      sub: undefined,
      lx: 600,
      ly: 660,
      ax1: 590,
      ay1: 665,
      ax2: 360,
      ay2: 640,
    },
  ];

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 7/8 · Slide 11" />
      <AgendaChip topicNumber={6} topicTitle={getText('V7-S1', 'agenda_chip')} startFrame={0} />

      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="page_turn" at={0.3} />
      <Sfx name="marker_loop" at={0.8} dur={1.2} />
      <Sfx name="marker_loop" at={2.05} dur={0.35} />
      <Sfx name="pencil_loop" at={2.6} dur={0.25} gainDb={-6} />
      <Sfx name="pencil_loop" at={2.95} dur={0.25} gainDb={-6} />
      <Sfx name="pencil_loop" at={3.3} dur={0.25} gainDb={-6} />
      <Sfx name="pencil_loop" at={3.65} dur={0.25} gainDb={-6} />
      <Sfx name="marker_loop" at={4.1} dur={0.4} />
      <Sfx name="bonk_soft" at={4.5} gainDb={-6} />
      <Sfx name="pencil_loop" at={4.6} dur={0.35} gainDb={-6} />

      {/* Karim K1 on Right */}
      <Character src="karim_K1.png" x={1580} side="right" startFrame={0} />
      <NameOval name={getText('V7-S1', 'name_karim')} cx={1580} cy={130} startFrame={110} seed={7105} />

      {/* PinnedPhoto s11_storage_media at x 120->580, y 200->890, tilt -1.5 */}
      <PinnedPhoto
        src="slides_up/s11_storage_media.png"
        x={120}
        y={200}
        w={460}
        h={690}
        tiltDeg={-1.5}
        startFrame={7}
      />

      {/* Light Red X over photo at 4.10-4.50s (98-108f) */}
      {xProgress > 0 && (
        <svg
          width={1920}
          height={1080}
          style={{position: 'absolute', left: 0, top: 0, pointerEvents: 'none', zIndex: 25, opacity: 0.7}}
        >
          <line
            x1={150}
            y1={230}
            x2={150 + 400 * Math.min(1, xProgress * 2)}
            y2={230 + 630 * Math.min(1, xProgress * 2)}
            stroke={COLORS.RED}
            strokeWidth={8}
            strokeLinecap="round"
          />
          {xProgress > 0.5 && (
            <line
              x1={550}
              y1={230}
              x2={550 - 400 * Math.min(1, (xProgress - 0.5) * 2)}
              y2={230 + 630 * Math.min(1, (xProgress - 0.5) * 2)}
              stroke={COLORS.RED}
              strokeWidth={8}
              strokeLinecap="round"
            />
          )}
        </svg>
      )}

      {/* Two-line Ruqaa Hook Title (80px) in x 640->1300, y 100->330 */}
      <HandWrite
        text={getText('V7-S1', 'hook_1')}
        startFrame={19}
        durationFrames={15}
        rtl={true}
        style={{
          position: 'absolute',
          left: 640,
          width: 660,
          top: 105,
          textAlign: 'center',
          fontFamily: FONTS.HOOK,
          fontWeight: 700,
          fontSize: 80,
          color: COLORS.INK,
          zIndex: 20,
        }}
      />
      <HandWrite
        text={getText('V7-S1', 'hook_2')}
        startFrame={34}
        durationFrames={14}
        rtl={true}
        style={{
          position: 'absolute',
          left: 640,
          width: 660,
          top: 220,
          textAlign: 'center',
          fontFamily: FONTS.HOOK,
          fontWeight: 700,
          fontSize: 80,
          color: COLORS.INK,
          zIndex: 20,
        }}
      />
      <HandUnderline
        x1={730}
        x2={1210}
        y={350}
        startFrame={49}
        durationFrames={8}
        color={COLORS.RED}
        strokeWidth={6}
      />

      {/* 4 Labels with arrows */}
      {labels.map((lb, idx) => {
        const op = interpolate(frame, [lb.startF, lb.startF + 6], [0, 1], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
        });
        return (
          <React.Fragment key={idx}>
            <Arrow
              x1={lb.ax1}
              y1={lb.ay1}
              x2={lb.ax2}
              y2={lb.ay2}
              startFrame={lb.startF}
              durationFrames={6}
              color={COLORS.INK}
              strokeWidth={3.5}
            />
            <div
              style={{
                position: 'absolute',
                left: lb.lx,
                top: lb.ly - 18,
                opacity: op,
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                zIndex: 22,
              }}
            >
              <span
                dir="ltr"
                style={{
                  fontFamily: FONTS.EN_TITLE,
                  fontWeight: 700,
                  fontSize: 28,
                  color: COLORS.INK,
                  background: 'rgba(253,251,245,0.9)',
                  padding: '2px 10px',
                  borderRadius: 6,
                }}
              >
                {lb.text}
              </span>
              {lb.sub && (
                <span
                  dir="rtl"
                  style={{
                    fontFamily: FONTS.BODY,
                    fontWeight: 500,
                    fontSize: 22,
                    color: COLORS.MUTED,
                  }}
                >
                  {lb.sub}
                </span>
              )}
            </div>
          </React.Fragment>
        );
      })}

      <Caption text="CD وكارت ميموري ينفعوا لشخص... لكن الشركات محتاجة storage شبكي!" />
      <SceneFade startFrame={136} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENES 2 & 3 (6.00 -> 18.50s, 300 frames, LAYOUT_D CONT)
// ============================================================================
const Scene2And3: React.FC = () => {
  const frame = useCurrentFrame();

  const ar1Op = interpolate(frame, [79, 86], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const ar2Op = interpolate(frame, [125, 132], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  // Bounce at 3.60s of S3 = 156 + 86 = 242f
  const bounceScale =
    frame >= 242 && frame <= 254
      ? interpolate(frame, [242, 248, 254], [1, 1.02, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})
      : 1;

  const captionText =
    frame < 156
      ? 'SAN = Storage Area Network... وNAS = Network Attached Storage.'
      : 'الاتنين storage architectures لتخزين وإدارة الـ data في الشبكات.';

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 7/8 · Slide 11" />

      {/* S2 Audio */}
      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="marker_loop" at={0.3} dur={1.0} />
      <Sfx name="pencil_loop" at={1.35} dur={0.5} />
      <Sfx name="pencil_loop" at={2.0} dur={0.5} />
      <Sfx name="pencil_loop" at={2.55} dur={0.7} gainDb={-3} />
      <Sfx name="pencil_loop" at={3.5} dur={0.25} gainDb={-6} />
      <Sfx name="pencil_loop" at={3.9} dur={0.5} />
      <Sfx name="pencil_loop" at={4.45} dur={0.7} gainDb={-3} />
      <Sfx name="highlight_swipe" at={5.4} dur={0.3} />
      <Sfx name="highlight_swipe" at={5.75} dur={0.3} />

      {/* S3 Audio (offset +6.5s) */}
      <Sfx name="pencil_loop" at={6.5 + 0.3} dur={1.6} gainDb={-3} />
      <Sfx name="highlight_swipe" at={6.5 + 2.0} dur={0.4} />
      <Sfx name="pencil_loop" at={6.5 + 2.6} dur={0.8} gainDb={-6} />
      <Sfx name="tick_soft" at={6.5 + 3.6} gainDb={-3} />

      {/* Title */}
      <HandWrite
        text={getText('V7-S2', 's11_title')}
        startFrame={7}
        durationFrames={24}
        style={{
          position: 'absolute',
          left: 960,
          top: 130,
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.EN_TITLE,
          fontWeight: 700,
          fontSize: 64,
          color: COLORS.INK,
          whiteSpace: 'nowrap',
          zIndex: 20,
        }}
      />
      <HandWrite
        text={getText('V7-S2', 's11_title_ar')}
        startFrame={32}
        durationFrames={12}
        rtl={true}
        style={{
          position: 'absolute',
          left: 960,
          top: 225,
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.HOOK,
          fontWeight: 700,
          fontSize: 56,
          color: COLORS.INK,
          whiteSpace: 'nowrap',
          zIndex: 20,
        }}
      />

      {/* Box A: x 140->860, y 300->520 */}
      <div style={{transform: `scale(${bounceScale})`, transformOrigin: '500px 410px'}}>
        <SketchBox x={140} y={300} w={720} h={220} startFrame={48} drawDurationFrames={12} seed={7201} />
        <div
          style={{
            position: 'absolute',
            left: 500,
            top: 380,
            transform: 'translate(-50%, -50%)',
            whiteSpace: 'nowrap',
            zIndex: 15,
          }}
        >
          {frame < 130 ? (
            <WordReveal
              text={getText('V7-S2', 'def_san')}
              startFrame={61}
              durationFrames={17}
              rtl={false}
              style={{fontFamily: FONTS.BODY, fontWeight: 700, fontSize: 44, color: COLORS.INK}}
            />
          ) : (
            <span dir="ltr" style={{fontFamily: FONTS.BODY, fontWeight: 700, fontSize: 44, color: COLORS.INK}}>
              Storage Area Network{' '}
              <HighlightText text="(SAN)" startFrame={130} durationFrames={7} rtl={false} />
            </span>
          )}
        </div>
        <div
          dir="rtl"
          style={{
            position: 'absolute',
            left: 500,
            top: 455,
            transform: 'translate(-50%, -50%)',
            opacity: ar1Op,
            fontFamily: FONTS.BODY,
            fontWeight: 500,
            fontSize: 30,
            color: COLORS.MUTED,
            zIndex: 15,
          }}
        >
          {getText('V7-S2', 'def_san_ar')}
        </div>
      </div>

      {/* "and" at (960, 410) */}
      <HandWrite
        text={getText('V7-S2', 'def_and')}
        startFrame={84}
        durationFrames={6}
        style={{
          position: 'absolute',
          left: 960,
          top: 410,
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.EN_TITLE,
          fontWeight: 700,
          fontSize: 44,
          color: COLORS.INK,
          zIndex: 15,
        }}
      />

      {/* Box B: x 1060->1780, y 300->520 */}
      <div style={{transform: `scale(${bounceScale})`, transformOrigin: '1420px 410px'}}>
        <SketchBox x={1060} y={300} w={720} h={220} startFrame={94} drawDurationFrames={12} seed={7203} />
        <div
          style={{
            position: 'absolute',
            left: 1420,
            top: 380,
            transform: 'translate(-50%, -50%)',
            whiteSpace: 'nowrap',
            zIndex: 15,
          }}
        >
          {frame < 138 ? (
            <WordReveal
              text={getText('V7-S2', 'def_nas')}
              startFrame={107}
              durationFrames={17}
              rtl={false}
              style={{fontFamily: FONTS.BODY, fontWeight: 700, fontSize: 44, color: COLORS.INK}}
            />
          ) : (
            <span dir="ltr" style={{fontFamily: FONTS.BODY, fontWeight: 700, fontSize: 44, color: COLORS.INK}}>
              Network Attached Storage{' '}
              <HighlightText text="(NAS)" startFrame={138} durationFrames={7} rtl={false} />
            </span>
          )}
        </div>
        <div
          dir="rtl"
          style={{
            position: 'absolute',
            left: 1420,
            top: 455,
            transform: 'translate(-50%, -50%)',
            opacity: ar2Op,
            fontFamily: FONTS.BODY,
            fontWeight: 500,
            fontSize: 30,
            color: COLORS.MUTED,
            zIndex: 15,
          }}
        >
          {getText('V7-S2', 'def_nas_ar')}
        </div>
      </div>

      {/* S3 continuation below boxes */}
      {frame >= 156 && (
        <>
          <div
            style={{
              position: 'absolute',
              left: 260,
              width: 1400,
              top: 600,
              textAlign: 'center',
              zIndex: 15,
            }}
          >
            {frame < 204 ? (
              <WordReveal
                text={getText('V7-S3', 'def_rest')}
                startFrame={156 + 7}
                durationFrames={38}
                rtl={false}
                style={{
                  fontFamily: FONTS.BODY,
                  fontWeight: 600,
                  fontSize: 42,
                  color: COLORS.INK,
                }}
              />
            ) : (
              <div
                dir="ltr"
                style={{
                  fontFamily: FONTS.BODY,
                  fontWeight: 600,
                  fontSize: 42,
                  lineHeight: 1.45,
                  color: COLORS.INK,
                }}
              >
                are{' '}
                <HighlightText
                  text="two different storage architectures"
                  startFrame={204}
                  durationFrames={10}
                  rtl={false}
                />{' '}
                that are used to store and manage data in computer networks.
              </div>
            )}
          </div>
          <div
            style={{
              position: 'absolute',
              left: 960,
              top: 810,
              transform: 'translate(-50%, -50%)',
              whiteSpace: 'nowrap',
              zIndex: 15,
            }}
          >
            <WordReveal
              text={getText('V7-S3', 'def_rest_ar')}
              startFrame={156 + 62}
              durationFrames={19}
              rtl={true}
              style={{
                fontFamily: FONTS.BODY,
                fontWeight: 500,
                fontSize: 34,
                color: COLORS.INK,
              }}
            />
          </div>
        </>
      )}

      <Caption text={captionText} startFrame={frame < 156 ? 4 : 156} />
      <SceneFade startFrame={292} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 4 (18.50 -> 25.00s, 156 frames, LAYOUT_S [توضيح])
// ============================================================================
const Scene4: React.FC = () => {
  const frame = useCurrentFrame();

  const divP = interpolate(frame, [7, 17], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const lanP = interpolate(frame, [73, 80], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const sanDashP = interpolate(frame, [127, 134], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 7/8 · Slide 11" />

      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="pencil_loop" at={0.3} dur={0.4} />
      <Sfx name="marker_loop" at={0.8} dur={0.6} />
      <Sfx name="pencil_loop" at={1.45} dur={0.4} />
      <Sfx name="pencil_loop" at={1.9} dur={0.5} gainDb={-3} />
      <Sfx name="pop_soft" at={2.5} />
      <Sfx name="pop_soft" at={2.7} gainDb={-6} />
      <Sfx name="pencil_loop" at={3.05} dur={0.3} />
      <Sfx name="marker_loop" at={3.45} dur={0.6} />
      <Sfx name="pencil_loop" at={4.1} dur={0.4} />
      <Sfx name="pencil_loop" at={4.55} dur={0.5} gainDb={-3} />
      <Sfx name="pop_soft" at={5.1} />
      <Sfx name="pencil_loop" at={5.3} dur={0.3} />
      <Sfx name="pop_soft" at={5.65} gainDb={-6} />

      {/* Center vertical divider */}
      <svg width={1920} height={1080} style={{position: 'absolute', left: 0, top: 0, pointerEvents: 'none', zIndex: 10}}>
        <line
          x1={960}
          y1={110}
          x2={960}
          y2={110 + 780 * divP}
          stroke={COLORS.INK}
          strokeWidth={4}
          strokeDasharray="10 10"
        />
      </svg>

      {/* LEFT: NAS */}
      <HandWrite
        text={getText('V7-S4', 's4_nas')}
        startFrame={19}
        durationFrames={14}
        style={{
          position: 'absolute',
          left: 480,
          top: 170,
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.KEY_EN,
          fontSize: 110,
          color: COLORS.INK,
          zIndex: 15,
        }}
      />
      <HandWrite
        text={getText('V7-S4', 's4_file')}
        startFrame={35}
        durationFrames={10}
        style={{
          position: 'absolute',
          left: 480,
          top: 260,
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.EN_TITLE,
          fontWeight: 700,
          fontSize: 40,
          color: COLORS.INK,
          zIndex: 15,
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 480,
          top: 320,
          transform: 'translate(-50%, -50%)',
          whiteSpace: 'nowrap',
          zIndex: 15,
        }}
      >
        <WordReveal
          text={getText('V7-S4', 's4_nas_ar')}
          startFrame={46}
          durationFrames={12}
          rtl={true}
          style={{fontFamily: FONTS.BODY, fontWeight: 500, fontSize: 32, color: COLORS.INK}}
        />
      </div>

      {/* NAS Box at (480, 520) + 3 folders */}
      <Pop startFrame={60} style={{position: 'absolute', left: 480 - 110, top: 520 - 80, zIndex: 16}}>
        <IconNasBox size={220} />
      </Pop>
      {[360, 480, 600].map((fx, idx) => (
        <Pop
          key={idx}
          startFrame={65 + idx * 2}
          style={{position: 'absolute', left: fx - 35, top: 385, zIndex: 18}}
        >
          <IconFolder size={70} />
        </Pop>
      ))}

      {/* LAN horizontal line at y=700 from x=200 to 760 + 3 desktop_pc at (260, 480, 700, y=780) */}
      {lanP > 0 && (
        <svg width={1920} height={1080} style={{position: 'absolute', left: 0, top: 0, pointerEvents: 'none', zIndex: 14}}>
          <line x1={480} y1={600} x2={480} y2={700} stroke={COLORS.INK} strokeWidth={4} />
          <line x1={200} y1={700} x2={200 + 560 * lanP} y2={700} stroke={COLORS.INK} strokeWidth={5} />
          {[260, 480, 700].map((px) => (
            <line key={px} x1={px} y1={700} x2={px} y2={740} stroke={COLORS.INK} strokeWidth={3.5} />
          ))}
        </svg>
      )}
      {[260, 480, 700].map((px, idx) => (
        <Pop
          key={idx}
          startFrame={75 + idx * 2}
          style={{position: 'absolute', left: px - 50, top: 780 - 45, zIndex: 16}}
        >
          <IconDesktopPc size={100} />
        </Pop>
      ))}

      {/* RIGHT: SAN */}
      <HandWrite
        text={getText('V7-S4', 's4_san')}
        startFrame={83}
        durationFrames={14}
        style={{
          position: 'absolute',
          left: 1440,
          top: 170,
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.KEY_EN,
          fontSize: 110,
          color: COLORS.INK,
          zIndex: 15,
        }}
      />
      <HandWrite
        text={getText('V7-S4', 's4_block')}
        startFrame={98}
        durationFrames={10}
        style={{
          position: 'absolute',
          left: 1440,
          top: 260,
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.EN_TITLE,
          fontWeight: 700,
          fontSize: 40,
          color: COLORS.INK,
          zIndex: 15,
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 1440,
          top: 320,
          transform: 'translate(-50%, -50%)',
          whiteSpace: 'nowrap',
          zIndex: 15,
        }}
      >
        <WordReveal
          text={getText('V7-S4', 's4_san_ar')}
          startFrame={109}
          durationFrames={12}
          rtl={true}
          style={{fontFamily: FONTS.BODY, fontWeight: 500, fontSize: 32, color: COLORS.INK}}
        />
      </div>

      {/* 2 server_tower at (1300, 460) and (1580, 460) */}
      {[1300, 1580].map((sx, idx) => (
        <Pop
          key={idx}
          startFrame={122 + idx * 2}
          style={{position: 'absolute', left: sx - 55, top: 460 - 65, zIndex: 16}}
        >
          <IconServerTower size={115} />
        </Pop>
      ))}

      {/* Dashed rounded rect with SAN inside at x 1180->1700, y 560->680 with crossed lines */}
      {sanDashP > 0 && (
        <div
          style={{
            position: 'absolute',
            left: 1180,
            top: 560,
            width: 520,
            height: 120,
            border: `4px dashed ${COLORS.INK}`,
            borderRadius: 24,
            background: 'rgba(220,234,246,0.45)',
            opacity: sanDashP,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 15,
          }}
        >
          <svg width={520} height={120} style={{position: 'absolute', left: 0, top: 0}}>
            <line x1={120} y1={10} x2={400} y2={110} stroke={COLORS.MUTED} strokeWidth={2.5} strokeDasharray="6 6" />
            <line x1={400} y1={10} x2={120} y2={110} stroke={COLORS.MUTED} strokeWidth={2.5} strokeDasharray="6 6" />
          </svg>
          <span
            style={{
              fontFamily: FONTS.EN_TITLE,
              fontWeight: 700,
              fontSize: 38,
              color: COLORS.INK,
              background: COLORS.CARD,
              padding: '2px 18px',
              borderRadius: 10,
              zIndex: 2,
            }}
          >
            {getText('V7-S4', 's4_san')}
          </span>
        </div>
      )}

      {/* 3 storage_cylinder centered at (1400, 790) + block_grid next to them */}
      {[1260, 1380, 1500].map((cx, idx) => (
        <Pop
          key={idx}
          startFrame={136 + idx * 2}
          style={{position: 'absolute', left: cx - 50, top: 790 - 55, zIndex: 16}}
        >
          <IconStorageCylinder size={105} />
        </Pop>
      ))}
      <Pop startFrame={140} style={{position: 'absolute', left: 1620, top: 735, zIndex: 17}}>
        <IconBlockGrid size={110} />
      </Pop>

      <Caption text="الـ NAS بيشارك files على الـ LAN... والـ SAN بيدّي blocks." />
      <SceneFade startFrame={148} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 5 (25.00 -> 31.50s, 156 frames, LAYOUT_C)
// ============================================================================
const Scene5: React.FC = () => {
  const frame = useCurrentFrame();

  const rows = [
    {
      en: getText('V7-S5', 'sec_1'),
      ar: getText('V7-S5', 'sec_1_ar'),
      startF: 48, // 2.00s
      y: 410,
    },
    {
      en: getText('V7-S5', 'sec_2'),
      ar: getText('V7-S5', 'sec_2_ar'),
      startF: 77, // 3.20s
      y: 590,
    },
    {
      en: getText('V7-S5', 'sec_3'),
      ar: getText('V7-S5', 'sec_3_ar'),
      startF: 106, // 4.40s
      y: 770,
    },
  ];

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 7/8 · Slide 11" />

      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="pencil_loop" at={0.35} dur={0.6} />
      <Sfx name="pencil_loop" at={1.0} dur={0.9} gainDb={-3} />
      <Sfx name="pencil_loop" at={2.0} dur={0.55} gainDb={-3} />
      <Sfx name="check_soft" at={2.55} />
      <Sfx name="highlight_swipe" at={2.8} dur={0.3} gainDb={-3} />
      <Sfx name="pencil_loop" at={3.2} dur={0.55} gainDb={-3} />
      <Sfx name="check_soft" at={3.75} />
      <Sfx name="highlight_swipe" at={4.0} dur={0.3} gainDb={-3} />
      <Sfx name="pencil_loop" at={4.4} dur={0.55} gainDb={-3} />
      <Sfx name="check_soft" at={4.95} />
      <Sfx name="highlight_swipe" at={5.2} dur={0.3} gainDb={-3} />
      <Sfx name="pencil_loop" at={5.55} dur={0.3} gainDb={-6} />

      <Character src="omar_O3.png" x={1580} side="right" startFrame={0} />
      <NameOval name={getText('V7-S5', 'name_omar')} cx={1580} cy={130} startFrame={133} seed={7510} />

      <SketchBox x={105} y={140} w={1077} h={777} startFrame={8} drawDurationFrames={15} seed={7500} />

      <HandWrite
        text={getText('V7-S5', 'sec_head')}
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
        const wrDur = 13; // 0.55s
        const chkF = r.startF + 13;
        const hlF = r.startF + 19; // +0.80s
        const arF = r.startF + 20; // +0.85s
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

      <Caption text="هنعرف الفرق بينهم، والـ benefits والـ disadvantages، ودورهم." />
      <SceneFade startFrame={148} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENES 6 & 7 (31.50 -> 44.00s, 300 frames, LAYOUT_P CONT, Slide 12)
// ============================================================================
const Scene6And7: React.FC = () => {
  const frame = useCurrentFrame();

  const photoRect = {x: 560, y: 190, w: 1080, h: 720};
  const s6LabelsOp =
    frame < 156
      ? 1
      : interpolate(frame, [156, 162], [1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  const s7Cards = [
    {
      startF: 163, // 0.30s of S7
      x: 120,
      y: 280,
      w: 400,
      h: 130,
      en: getText('V7-S7', 's7_board'),
      ar: getText('V7-S7', 's7_board_ar'),
      isBrand: false,
      seed: 7701,
      region: {x0: 31, x1: 72, y0: 16, y1: 67},
    },
    {
      startF: 187, // 1.30s of S7
      x: 120,
      y: 450,
      w: 400,
      h: 130,
      en: getText('V7-S7', 's7_fans'),
      ar: getText('V7-S7', 's7_fans_ar'),
      isBrand: false,
      seed: 7702,
      region: {x0: 10, x1: 52, y0: 10, y1: 24},
    },
    {
      startF: 211, // 2.30s of S7
      x: 1660,
      y: 380,
      w: 240,
      h: 130,
      en: getText('V7-S7', 's7_ports'),
      ar: getText('V7-S7', 's7_ports_ar'),
      isBrand: false,
      seed: 7703,
      region: {x0: 71, x1: 81, y0: 56, y1: 63},
    },
    {
      startF: 235, // 3.30s of S7
      x: 120,
      y: 620,
      w: 400,
      h: 130,
      en: getText('V7-S7', 's7_lcd'),
      ar: getText('V7-S7', 's7_lcd_ar'),
      isBrand: false,
      seed: 7704,
      region: {x0: 50, x1: 59, y0: 67, y1: 78},
    },
    {
      startF: 259, // 4.30s of S7
      x: 1660,
      y: 580,
      w: 240,
      h: 130,
      en: getText('V7-S7', 's7_brand1'),
      ar: getText('V7-S7', 's7_brand2'),
      isBrand: true,
      seed: 7705,
      region: {x0: 78, x1: 90, y0: 51, y1: 61},
    },
  ];

  // Active Spotlight region
  let activeRegion: {x0: number; x1: number; y0: number; y1: number} | null = null;
  let spotStartF = 50;
  if (frame >= 50 && frame < 74) {
    activeRegion = {x0: 10, x1: 43, y0: 23, y1: 73};
    spotStartF = 50;
  } else if (frame >= 74 && frame < 98) {
    activeRegion = {x0: 47, x1: 84, y0: 14, y1: 50};
    spotStartF = 74;
  } else if (frame >= 163 && frame < 285) {
    const s7Idx = Math.floor((frame - 163) / 24);
    if (s7Idx >= 0 && s7Idx < s7Cards.length) {
      activeRegion = s7Cards[s7Idx].region;
      spotStartF = s7Cards[s7Idx].startF;
    }
  }

  const captionText =
    frame < 156
      ? 'Example of Storage Array: 8 hard drives شغالين كوحدة تخزين واحدة.'
      : 'في النص controller board بيدير الهاردات... وقدّام ports للشبكة.';

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 7/8 · Slide 12" />

      {/* S6 Audio */}
      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="pencil_loop" at={0.3} dur={0.5} />
      <Sfx name="marker_loop" at={0.85} dur={0.6} />
      <Sfx name="page_turn" at={1.5} />
      <Sfx name="hdd_whir" at={2.0} gainDb={-3} />
      <Sfx name="marker_loop" at={2.1} dur={0.4} />
      <Sfx name="pencil_loop" at={2.55} dur={0.3} gainDb={-6} />
      <Sfx name="marker_loop" at={3.1} dur={0.4} />
      <Sfx name="pencil_loop" at={3.55} dur={0.3} gainDb={-6} />
      <Sfx name="pop_soft" at={4.1} />

      {/* S7 Audio (offset +6.5s) */}
      {[0.3, 1.3, 2.3, 3.3, 4.3].map((t, i) => (
        <React.Fragment key={i}>
          <Sfx name="marker_loop" at={6.5 + t} dur={0.35} gainDb={-3} />
          <Sfx name="beep_soft" at={6.5 + t + 0.4} />
          <Sfx name="pencil_loop" at={6.5 + t + 0.45} dur={0.4} gainDb={-6} />
        </React.Fragment>
      ))}

      {/* Tag1 & Tag2 */}
      <HandWrite
        text={getText('V7-S6', 's12_title')}
        startFrame={7}
        durationFrames={12}
        style={{
          position: 'absolute',
          left: 80,
          top: 50,
          fontFamily: FONTS.EN_TITLE,
          fontWeight: 700,
          fontSize: 38,
          color: COLORS.INK,
          zIndex: 25,
        }}
      />
      {frame >= 20 && (
        <div
          style={{
            position: 'absolute',
            left: 80,
            top: 105,
            border: `3.5px solid ${COLORS.RED}`,
            background: COLORS.CARD,
            borderRadius: 10,
            padding: '4px 18px',
            zIndex: 25,
          }}
        >
          <HandWrite
            text={getText('V7-S6', 's12_sub')}
            startFrame={20}
            durationFrames={14}
            style={{
              fontFamily: FONTS.EN_TITLE,
              fontWeight: 700,
              fontSize: 44,
              color: COLORS.INK,
            }}
          />
        </div>
      )}

      {/* PinnedPhoto s12_conduant_ltx3 */}
      <PinnedPhoto
        src="slides_up/s12_conduant_ltx3.jpg"
        x={photoRect.x}
        y={photoRect.y}
        w={photoRect.w}
        h={photoRect.h}
        tiltDeg={0}
        startFrame={36}
      />

      {activeRegion && (
        <Spotlight
          photoRect={photoRect}
          region={activeRegion}
          startFrame={spotStartF}
          drawFrames={8}
          maskId={`v7-s67-${spotStartF}`}
        />
      )}

      {/* S6 Brackets & Labels */}
      {s6LabelsOp > 0 && (
        <div style={{opacity: s6LabelsOp}}>
          <SvgBracket
            x={photoRect.x + 0.08 * photoRect.w}
            y1={photoRect.y + 0.23 * photoRect.h}
            y2={photoRect.y + 0.73 * photoRect.h}
            side="left"
            startFrame={50}
            durationFrames={10}
          />
          <HandWrite
            text={getText('V7-S6', 's6_4hdd_l')}
            startFrame={61}
            durationFrames={8}
            style={{
              position: 'absolute',
              left: 300,
              top: 520,
              transform: 'translate(-50%, -50%)',
              fontFamily: FONTS.EN_TITLE,
              fontWeight: 700,
              fontSize: 36,
              color: COLORS.RED,
              background: COLORS.CARD,
              padding: '4px 14px',
              borderRadius: 8,
              zIndex: 25,
            }}
          />

          <SvgBracket
            x={photoRect.x + 0.85 * photoRect.w}
            y1={photoRect.y + 0.14 * photoRect.h}
            y2={photoRect.y + 0.5 * photoRect.h}
            side="right"
            startFrame={74}
            durationFrames={10}
          />
          <HandWrite
            text={getText('V7-S6', 's6_4hdd_r')}
            startFrame={85}
            durationFrames={8}
            style={{
              position: 'absolute',
              left: 1740,
              top: 330,
              transform: 'translate(-50%, -50%)',
              fontFamily: FONTS.EN_TITLE,
              fontWeight: 700,
              fontSize: 36,
              color: COLORS.RED,
              background: COLORS.CARD,
              padding: '4px 14px',
              borderRadius: 8,
              zIndex: 25,
            }}
          />

          <Pop
            startFrame={98}
            style={{
              position: 'absolute',
              left: 1500,
              top: 105,
              border: `3.5px solid ${COLORS.INK}`,
              background: COLORS.HILITE,
              borderRadius: 10,
              padding: '6px 20px',
              fontFamily: FONTS.EN_TITLE,
              fontWeight: 700,
              fontSize: 36,
              color: COLORS.INK,
              zIndex: 26,
            }}
          >
            {getText('V7-S6', 's6_8hdd')}
          </Pop>
        </div>
      )}

      {/* S7 Note Cards */}
      {frame >= 156 &&
        s7Cards.map((c, idx) => {
          const popF = c.startF + 9; // +0.40s
          if (frame < popF) return null;
          return (
            <Pop key={idx} startFrame={popF} style={{position: 'absolute', left: 0, top: 0, zIndex: 28}}>
              <SketchBox x={c.x} y={c.y} w={c.w} h={c.h} startFrame={popF} drawDurationFrames={8} seed={c.seed} />
              <div
                style={{
                  position: 'absolute',
                  left: c.x + 12,
                  width: c.w - 24,
                  top: c.y + 20,
                  textAlign: 'center',
                  fontFamily: FONTS.EN_TITLE,
                  fontWeight: 700,
                  fontSize: 28,
                  color: COLORS.INK,
                  zIndex: 30,
                }}
              >
                {c.en}
              </div>
              <div
                dir={c.isBrand ? 'ltr' : 'rtl'}
                style={{
                  position: 'absolute',
                  left: c.x + 12,
                  width: c.w - 24,
                  top: c.y + 68,
                  textAlign: 'center',
                  fontFamily: c.isBrand ? FONTS.EN_TITLE : FONTS.BODY,
                  fontWeight: c.isBrand ? 700 : 500,
                  fontSize: 23,
                  color: COLORS.MUTED,
                  zIndex: 30,
                }}
              >
                {c.ar}
              </div>
            </Pop>
          );
        })}

      <Caption text={captionText} startFrame={frame < 156 ? 4 : 156} />
      <SceneFade startFrame={292} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 8 (44.00 -> 51.00s, 168 frames, LAYOUT_P, Slide 13)
// ============================================================================
const Scene8: React.FC = () => {
  const frame = useCurrentFrame();
  const photoRect = {x: 700, y: 170, w: 560, h: 760};

  const glowOp =
    frame >= 106
      ? interpolate(frame, [106, 118, 130], [0, 0.75, 0.35], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})
      : 0;

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 7/8 · Slide 13" />

      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="page_turn" at={0.3} />
      <Sfx name="marker_loop" at={0.9} dur={0.4} />
      <Sfx name="pencil_loop" at={1.4} dur={0.3} gainDb={-6} />
      <Sfx name="pencil_loop" at={2.0} dur={0.4} />
      <Sfx name="marker_loop" at={2.9} dur={0.5} />
      <Sfx name="pencil_loop" at={3.45} dur={0.35} gainDb={-6} />
      <Sfx name="typing_soft" at={3.5} dur={0.8} gainDb={-3} />
      <Sfx name="beep_soft" at={4.4} gainDb={-3} />

      {/* Same Tag1 & Tag2 for Slide 13 */}
      <div
        style={{
          position: 'absolute',
          left: 80,
          top: 50,
          fontFamily: FONTS.EN_TITLE,
          fontWeight: 700,
          fontSize: 38,
          color: COLORS.INK,
          zIndex: 25,
        }}
      >
        {getText('V7-S8', 's13_title')}
      </div>
      <div
        style={{
          position: 'absolute',
          left: 80,
          top: 105,
          border: `3.5px solid ${COLORS.RED}`,
          background: COLORS.CARD,
          borderRadius: 10,
          padding: '4px 18px',
          fontFamily: FONTS.EN_TITLE,
          fontWeight: 700,
          fontSize: 44,
          color: COLORS.INK,
          zIndex: 25,
        }}
      >
        {getText('V7-S8', 's13_sub')}
      </div>

      {/* PinnedPhoto s13_compellent_racks */}
      <PinnedPhoto
        src="slides_up/s13_compellent_racks.jpg"
        x={photoRect.x}
        y={photoRect.y}
        w={photoRect.w}
        h={photoRect.h}
        tiltDeg={0}
        startFrame={7}
      />

      {/* KVM screen glow at 4.40s (106f) */}
      {glowOp > 0 && (
        <div
          style={{
            position: 'absolute',
            left: photoRect.x + 0.35 * photoRect.w,
            top: photoRect.y + 0.36 * photoRect.h,
            width: 0.25 * photoRect.w,
            height: 0.14 * photoRect.h,
            borderRadius: 12,
            background: 'radial-gradient(circle, rgba(75,212,126,0.75) 0%, rgba(75,212,126,0) 75%)',
            opacity: glowOp,
            pointerEvents: 'none',
            zIndex: 22,
          }}
        />
      )}

      {/* Right red bracket on drive shelves (0.90-1.30s = 22-31f) + label at (1300, 600) */}
      <SvgBracket
        x={photoRect.x + photoRect.w + 16}
        y1={photoRect.y + 0.18 * photoRect.h}
        y2={photoRect.y + 0.96 * photoRect.h}
        side="right"
        startFrame={22}
        durationFrames={10}
      />
      <HandWrite
        text={getText('V7-S8', 's8_hdds_ar')}
        startFrame={34}
        durationFrames={8}
        rtl={true}
        style={{
          position: 'absolute',
          left: 1310,
          top: 580,
          fontFamily: FONTS.BODY,
          fontWeight: 600,
          fontSize: 34,
          color: COLORS.INK,
          background: COLORS.CARD,
          padding: '6px 16px',
          borderRadius: 8,
          zIndex: 25,
        }}
      />

      {/* Arrow to R_CTRL (6-75, 7-18.5) + label Storage controllers at (300, 230) */}
      <Arrow
        x1={460}
        y1={230}
        x2={photoRect.x + 0.3 * photoRect.w}
        y2={photoRect.y + 0.12 * photoRect.h}
        startFrame={48}
        durationFrames={10}
        color={COLORS.INK}
        strokeWidth={4}
      />
      <HandWrite
        text={getText('V7-S8', 's8_ctrl')}
        startFrame={50}
        durationFrames={10}
        style={{
          position: 'absolute',
          left: 300,
          top: 230,
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.EN_TITLE,
          fontWeight: 700,
          fontSize: 32,
          color: COLORS.INK,
          background: COLORS.CARD,
          padding: '6px 16px',
          borderRadius: 8,
          zIndex: 25,
        }}
      />

      {/* RedEllipse around R_KVM (25-75, 34-58) + label KVM console at (300, 450) */}
      <RedEllipse
        cx={photoRect.x + 0.5 * photoRect.w}
        cy={photoRect.y + 0.46 * photoRect.h}
        rx={0.28 * photoRect.w}
        ry={0.13 * photoRect.h}
        startFrame={70}
        durationFrames={12}
      />
      <Arrow
        x1={470}
        y1={450}
        x2={photoRect.x + 0.24 * photoRect.w}
        y2={photoRect.y + 0.46 * photoRect.h}
        startFrame={78}
        durationFrames={6}
        color={COLORS.RED}
        strokeWidth={3.5}
      />
      {frame >= 83 && (
        <div
          style={{
            position: 'absolute',
            left: 300,
            top: 450,
            transform: 'translate(-50%, -50%)',
            background: COLORS.CARD,
            border: `2.5px solid ${COLORS.INK}`,
            borderRadius: 10,
            padding: '8px 18px',
            textAlign: 'center',
            zIndex: 25,
          }}
        >
          <div style={{fontFamily: FONTS.EN_TITLE, fontWeight: 700, fontSize: 32, color: COLORS.INK}}>
            {getText('V7-S8', 's8_kvm')}
          </div>
          <div dir="rtl" style={{fontFamily: FONTS.BODY, fontWeight: 500, fontSize: 25, color: COLORS.MUTED}}>
            {getText('V7-S8', 's8_kvm_ar')}
          </div>
        </div>
      )}

      <Caption text="ولما الداتا تكبر: كبائن Storage Array بمئات الهاردات وشاشة إدارة." />
      <SceneFade startFrame={160} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 8b (51.00 -> 58.00s, 168 frames, LAYOUT_L)
// ============================================================================
const Scene8b: React.FC = () => {
  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 7/8 · Slides 11–13" />
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
      <Sfx name="tick_soft" at={4.8} gainDb={-3} />

      <LayoutL
        centerTopicTitle={getText('V7-S8b', 'link_center')}
        centerSlideTag={getText('V7-S8b', 'link_tag')}
        nextTopicTitle={getText('V7-S8b', 'next_chip')}
        nodes={[
          {
            position: 'N1',
            directionText: getText('V7-S8b', 'n1_dir'),
            topicTitle: getText('V7-S8b', 'n1_title'),
            arabicText: getText('V7-S8b', 'n1_ar'),
            labels: [
              getText('V7-S8b', 'n1_l1'),
              getText('V7-S8b', 'n1_l2'),
              getText('V7-S8b', 'n1_l3'),
            ],
            crop: {src: 'slides_up/s04_datacenter.png', region: {x0: 33, x1: 86, y0: 79, y1: 100}},
          },
          {
            position: 'N2',
            directionText: getText('V7-S8b', 'n2_dir'),
            topicTitle: getText('V7-S8b', 'n2_title'),
            arabicText: getText('V7-S8b', 'n2_ar'),
            labels: [getText('V7-S8b', 'n2_l1')],
            crop: {src: 'slides_up/s04_datacenter.png', region: {x0: 29, x1: 96, y0: 62, y1: 80}},
          },
          {
            position: 'N3',
            directionText: getText('V7-S8b', 'n3_dir'),
            topicTitle: getText('V7-S8b', 'n3_title'),
            arabicText: getText('V7-S8b', 'n3_ar'),
            labels: [getText('V7-S8b', 'n3_l1')],
            crop: {src: 'slides_up/s12_conduant_ltx3.jpg', region: {x0: 0, x1: 100, y0: 0, y1: 100}},
          },
        ]}
      />

      <Caption text="الـ storage arrays اللي في رسمة الـ Datacenter هي موضوع SAN & NAS." />
      <SceneFade startFrame={160} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 9 (58.00 -> 69.00s, 264 frames, LAYOUT_R: Study Card)
// ============================================================================
const Scene9: React.FC = () => {
  const frame = useCurrentFrame();
  const rel = Math.max(0, frame - 5);
  const showTitle = rel >= 13;
  const showTags = rel >= 25;
  const showLines = rel >= 28;
  const showBlocks = rel >= 31;
  const showGlossary = rel >= 70;

  const glossary = [
    {term: 'SAN (Storage Area Network)', meaning: 'شبكة تخزين مخصوصة للسيرفرات'},
    {term: 'NAS (Network Attached Storage)', meaning: 'تخزين متوصل بالشبكة'},
    {term: 'storage architectures', meaning: 'طرق تنظيم التخزين'},
    {term: 'Storage Array', meaning: 'مصفوفة تخزين: هاردات كتير كوحدة واحدة'},
    {term: 'SAN: block-level', meaning: 'بيدّي السيرفرات blocks'},
    {term: 'NAS: file-level', meaning: 'بيشارك files على الـ LAN'},
    {term: 'KVM console', meaning: 'شاشة + كيبورد للإدارة'},
  ];

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 7/8 · Slides 11–13" />

      <Sfx name="page_turn" at={0.0} />
      <Sfx name="pencil_loop" at={0.2} dur={0.6} gainDb={-3} />
      <Sfx name="marker_loop" at={0.5} dur={0.5} gainDb={-3} />
      <Sfx name="highlight_swipe" at={1.8} dur={0.35} gainDb={-3} />

      <div style={{position: 'absolute', left: 60, top: 80, width: 1800, height: 870, zIndex: 20}}>
        <SketchBox x={0} y={0} w={1800} h={870} seed={7900} startFrame={5} drawDurationFrames={12}>
          <div style={{padding: '20px 36px', height: '100%', boxSizing: 'border-box', position: 'relative'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 54}}>
              <div style={{display: 'flex', gap: 12, opacity: showTags ? 1 : 0}}>
                {['Slide 11', 'Slide 12', 'Slide 13'].map((tag) => (
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
                {/* Slide 11 */}
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
                      Slide 11
                    </span>
                    <span style={{fontFamily: FONTS.BODY, fontWeight: 700, fontSize: 30, color: COLORS.INK}}>
                      {getText('V7-S9', 'sc_s11_title')}
                    </span>
                  </div>

                  <div
                    aria-label={getText('V7-S9', 'sc_s11_p1')}
                    style={{
                      fontFamily: FONTS.BODY,
                      fontWeight: 600,
                      fontSize: 25,
                      lineHeight: 1.42,
                      color: COLORS.INK,
                    }}
                  >
                    <HighlightText text="Storage Area Network (SAN)" startFrame={0} durationFrames={1} rtl={false} /> and{' '}
                    <HighlightText text="Network Attached Storage (NAS)" startFrame={0} durationFrames={1} rtl={false} />{' '}
                    are{' '}
                    <HighlightText
                      text="two different storage architectures"
                      startFrame={0}
                      durationFrames={1}
                      rtl={false}
                    />{' '}
                    that are used to store and manage data in computer networks.
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
                    {getText('V7-S9', 'sc_s11_p2')}
                  </div>
                </div>

                {/* Slide 12 */}
                <div style={{display: 'flex', flexDirection: 'column', gap: 6, marginTop: 6}}>
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
                      Slide 12
                    </span>
                    <span style={{fontFamily: FONTS.BODY, fontWeight: 700, fontSize: 30, color: COLORS.INK}}>
                      {getText('V7-S9', 'sc_s11_title')}
                    </span>
                  </div>
                  <div style={{fontFamily: FONTS.BODY, fontWeight: 600, fontSize: 25, color: COLORS.INK}}>
                    {getText('V7-S9', 'sc_s12_sub')}
                  </div>
                </div>

                {/* Slide 13 */}
                <div style={{display: 'flex', flexDirection: 'column', gap: 6, marginTop: 6}}>
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
                      Slide 13
                    </span>
                    <span style={{fontFamily: FONTS.BODY, fontWeight: 700, fontSize: 30, color: COLORS.INK}}>
                      {getText('V7-S9', 'sc_s11_title')}
                    </span>
                  </div>
                  <div style={{fontFamily: FONTS.BODY, fontWeight: 600, fontSize: 25, color: COLORS.INK}}>
                    {getText('V7-S9', 'sc_s12_sub')}
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
                        fontSize: 25,
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
      <SceneFade startFrame={256} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 10 (69.00 -> 75.00s, 144 frames, LAYOUT_F: Finale)
// ============================================================================
const Scene10: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 7/8 · Slides 11–13" />

      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="marker_loop" at={0.4} dur={0.8} />
      <Sfx name="marker_loop" at={1.2} dur={0.6} />
      <Sfx name="marker_loop" at={1.85} dur={0.6} />
      <Sfx name="chime_success" at={2.45} />
      <Sfx name="pencil_loop" at={2.6} dur={0.5} />
      <Sfx name="pencil_loop" at={3.2} dur={0.8} gainDb={-3} />
      <Sfx name="highlight_swipe" at={4.05} dur={0.35} />
      <Sfx name="pop_soft" at={4.45} />
      <Sfx name="pop_soft" at={4.65} gainDb={-3} />

      {/* Karim K5 bottom-left + "فهمت!" */}
      {frame >= 70 && <Character src="karim_K5.png" x={270} height={680} baseY={1000} side="left" startFrame={70} />}
      <Pop
        startFrame={112}
        style={{
          position: 'absolute',
          left: 270 - 80,
          top: 260,
          fontFamily: FONTS.HOOK,
          fontWeight: 700,
          fontSize: 64,
          color: COLORS.RED,
          zIndex: 25,
        }}
      >
        {getText('V7-S10', 'fin_fihimt')}
      </Pop>

      {/* SAN & NAS + Storage Networks + RedEllipse */}
      <HandWrite
        text={getText('V7-S10', 'fin_en1')}
        startFrame={10}
        durationFrames={19}
        style={{
          position: 'absolute',
          left: 1100,
          top: 250,
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.KEY_EN,
          fontSize: 150,
          color: COLORS.INK,
          whiteSpace: 'nowrap',
          zIndex: 20,
        }}
      />
      <HandWrite
        text={getText('V7-S10', 'fin_en2')}
        startFrame={29}
        durationFrames={14}
        style={{
          position: 'absolute',
          left: 1100,
          top: 370,
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.KEY_EN,
          fontSize: 70,
          color: COLORS.INK,
          whiteSpace: 'nowrap',
          zIndex: 20,
        }}
      />
      <RedEllipse cx={1100} cy={300} rx={470} ry={170} startFrame={44} durationFrames={15} />

      <HandWrite
        text={getText('V7-S10', 'fin_ar')}
        startFrame={62}
        durationFrames={12}
        rtl={true}
        style={{
          position: 'absolute',
          left: 1100,
          top: 530,
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.HOOK,
          fontWeight: 700,
          fontSize: 72,
          color: COLORS.INK,
          whiteSpace: 'nowrap',
          zIndex: 20,
        }}
      />

      {frame >= 77 && (
        <div
          dir="rtl"
          style={{
            position: 'absolute',
            left: 1100,
            top: 650,
            transform: 'translate(-50%, -50%)',
            fontFamily: FONTS.BODY,
            fontWeight: 600,
            fontSize: 40,
            color: COLORS.INK,
            whiteSpace: 'nowrap',
            zIndex: 20,
          }}
        >
          {frame < 97 ? (
            <WordReveal text={getText('V7-S10', 'fin_sum')} startFrame={77} durationFrames={19} rtl={true} />
          ) : (
            <HighlightText text={getText('V7-S10', 'fin_sum')} startFrame={97} durationFrames={8} rtl={true} />
          )}
        </div>
      )}

      {/* 3 stacked storage_cylinder at (1770, 290) */}
      <Pop startFrame={107} style={{position: 'absolute', left: 1715, top: 150, zIndex: 22}}>
        <div style={{display: 'flex', flexDirection: 'column', gap: 6}}>
          <IconStorageCylinder size={95} />
          <IconStorageCylinder size={95} />
          <IconStorageCylinder size={95} />
        </div>
      </Pop>

      <Caption text="ودول الـ SAN & NAS Storage Networks." />
      <SceneFade startFrame={127} durationFrames={17} />
    </AbsoluteFill>
  );
};

// ============================================================================
// MAIN V7 COMPOSITION (75.0s = 1800 frames)
// ============================================================================
export const V7: React.FC = () => {
  return (
    <AbsoluteFill>
      <Paper />
      <AbsoluteFill style={{zIndex: 1}}>
        {/* S1: 0.00 -> 6.00 (0 -> 144) */}
        <Sequence from={0} durationInFrames={144}>
          <Scene1 />
        </Sequence>

        {/* S2 & S3 CONT: 6.00 -> 18.50 (144 -> 444) */}
        <Sequence from={144} durationInFrames={300}>
          <Scene2And3 />
        </Sequence>

        {/* S4: 18.50 -> 25.00 (444 -> 600) */}
        <Sequence from={444} durationInFrames={156}>
          <Scene4 />
        </Sequence>

        {/* S5: 25.00 -> 31.50 (600 -> 756) */}
        <Sequence from={600} durationInFrames={156}>
          <Scene5 />
        </Sequence>

        {/* S6 & S7 CONT: 31.50 -> 44.00 (756 -> 1056) */}
        <Sequence from={756} durationInFrames={300}>
          <Scene6And7 />
        </Sequence>

        {/* S8: 44.00 -> 51.00 (1056 -> 1224) */}
        <Sequence from={1056} durationInFrames={168}>
          <Scene8 />
        </Sequence>

        {/* S8b: 51.00 -> 58.00 (1224 -> 1392) */}
        <Sequence from={1224} durationInFrames={168}>
          <Scene8b />
        </Sequence>

        {/* S9: 58.00 -> 69.00 (1392 -> 1656) */}
        <Sequence from={1392} durationInFrames={264}>
          <Scene9 />
        </Sequence>

        {/* S10: 69.00 -> 75.00 (1656 -> 1800) */}
        <Sequence from={1656} durationInFrames={144}>
          <Scene10 />
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
