// src/videos/V3.tsx
import React, {useMemo} from 'react';
import {AbsoluteFill, Sequence, useCurrentFrame, interpolate, Easing} from 'remotion';
import {evolvePath} from '@remotion/paths';
import {COLORS, FONTS} from '../theme';
import {Sfx} from '../lib/sfx';
import {computeRegionTransform} from '../lib/camera';
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
  Tag,
  LayoutL,
} from '../components';
import {
  IconServerTower,
  IconBanknote,
  IconServerBox,
  IconHardDrive,
  IconSpeedometer,
  IconCoinDown,
  IconRisingChart,
  IconRack,
  IconVmBox,
  IconLaptopBrowser,
  IconTablet,
  IconDesktopPc,
  IconSwitch,
} from '../icons';
import {texts} from './V3.data';

const getText = (scene: string, id: string): string => {
  const found = texts.find((t) => t.scene === scene && t.id === id);
  if (!found) {
    throw new Error(`Missing text in V3.data.ts for scene=${scene}, id=${id}`);
  }
  return found.text;
};

// ============================================================================
// SCENE 1 (0.00 -> 5.50s, 132 frames, LAYOUT_H)
// ============================================================================
const Scene1: React.FC = () => {
  const frame = useCurrentFrame();

  const towers = useMemo(() => {
    const arr: {x: number; y: number; t: number}[] = [];
    for (let i = 0; i < 10; i++) {
      const r = Math.floor(i / 5);
      const c = i % 5;
      arr.push({
        x: 255 + c * 200,
        y: 455 + r * 210,
        t: 1.95 + i * 0.105,
      });
    }
    return arr;
  }, []);

  const banknotes = [
    {t0: 3.2, t1: 3.65, endX: 480, endY: 440, rot: -18},
    {t0: 3.3, t1: 3.72, endX: 660, endY: 510, rot: 14},
    {t0: 3.4, t1: 3.8, endX: 840, endY: 460, rot: -10},
  ];

  return (
    <AbsoluteFill>
      <AgendaChip topicNumber={2} topicTitle={getText('V3-S1', 'agenda_chip')} />
      <SlideBadge text="Lecture 1 · 3/8" />

      {/* Audio */}
      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="marker_loop" at={0.4} dur={1.0} />
      <Sfx name="marker_loop" at={1.45} dur={0.35} />
      <Sfx name="pop_soft" at={1.95} gainDb={-6} />
      <Sfx name="pop_soft" at={2.27} gainDb={-6} />
      <Sfx name="pop_soft" at={2.58} gainDb={-6} />
      <Sfx name="pop_soft" at={2.9} gainDb={-6} />
      <Sfx name="coins_soft" at={3.6} />
      <Sfx name="pencil_loop" at={4.0} dur={0.35} />

      <Character src="karim_K4.png" x={1520} height={820} baseY={1000} side="right" startFrame={0} />
      <NameOval name={getText('V3-S1', 'karim_name')} cx={1520} cy={120} startFrame={96} />

      {/* Hook Title */}
      <HandWrite
        text={getText('V3-S1', 'hook_title')}
        startFrame={10}
        durationFrames={24}
        rtl
        style={{
          position: 'absolute',
          right: 1920 - 1180,
          top: 180,
          transform: 'translateY(-50%)',
          fontFamily: FONTS.HOOK,
          fontWeight: 700,
          fontSize: 88,
          lineHeight: 1.3,
          color: COLORS.INK,
          zIndex: 20,
        }}
      />
      <HandUnderline x1={220} x2={1180} y={260} startFrame={35} durationFrames={8} rtl />

      {/* 10 Server Towers */}
      {towers.map((tw, idx) => {
        const sf = Math.round(tw.t * 24);
        return (
          <Pop
            key={idx}
            startFrame={sf}
            style={{
              position: 'absolute',
              left: tw.x - 55,
              top: tw.y - 75,
              zIndex: 15,
            }}
          >
            <IconServerTower size={135} />
          </Pop>
        );
      })}

      {/* 3 Flying Banknotes */}
      {banknotes.map((bn, idx) => {
        const f0 = Math.round(bn.t0 * 24);
        const f1 = Math.round(bn.t1 * 24);
        if (frame < f0) return null;
        const p = interpolate(frame, [f0, f1], [0, 1], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
          easing: Easing.out(Easing.cubic),
        });
        const bx = interpolate(p, [0, 1], [1340, bn.endX]);
        const by = interpolate(p, [0, 1], [540, bn.endY]) - Math.sin(p * Math.PI) * 140;
        return (
          <div
            key={idx}
            style={{
              position: 'absolute',
              left: bx - 50,
              top: by - 30,
              transform: `rotate(${bn.rot * p}deg)`,
              zIndex: 22,
            }}
          >
            <IconBanknote size={100} />
          </div>
        );
      })}

      <Caption text="زمان كل خدمة كان ليها جهاز لوحدها... فلوس وموارد بتضيع!" />
      <SceneFade startFrame={124} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 2 (5.50 -> 11.50s, 144 frames, LAYOUT_P Banner)
// ============================================================================
const Scene2: React.FC = () => {
  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 3/8 · Slide 5" />

      {/* Audio */}
      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="page_turn" at={0.3} />
      <Sfx name="marker_loop" at={0.9} dur={1.2} />
      <Sfx name="marker_loop" at={2.15} dur={0.35} />
      <Sfx name="pencil_loop" at={2.6} dur={0.7} />
      <Sfx name="pencil_loop" at={3.9} dur={0.35} />

      <PinnedPhoto
        src="slides/s05_virtualization_banner.jpg"
        x={160}
        y={100}
        w={1600}
        h={304}
        tiltDeg={-0.6}
        startFrame={7}
      />

      <HandWrite
        text={getText('V3-S2', 'title_en')}
        startFrame={22}
        durationFrames={29}
        style={{
          position: 'absolute',
          left: 1060,
          top: 530,
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.EN_TITLE,
          fontWeight: 700,
          fontSize: 68,
          color: COLORS.INK,
          zIndex: 22,
        }}
      />
      <HandUnderline x1={520} x2={1600} y={585} startFrame={52} durationFrames={8} rtl={false} />

      <HandWrite
        text={getText('V3-S2', 'title_ar')}
        startFrame={62}
        durationFrames={17}
        rtl
        style={{
          position: 'absolute',
          left: 1060,
          top: 680,
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.HOOK,
          fontWeight: 700,
          fontSize: 60,
          color: COLORS.INK,
          zIndex: 22,
        }}
      />

      {/* Omar O1 small bottom-left */}
      <Character src="omar_O1.png" x={200} height={560} baseY={1000} side="left" startFrame={82} />
      <NameOval name={getText('V3-S2', 'omar_name')} cx={200} cy={430} startFrame={94} />

      <Caption text="الحل اسمه Desktop and Service Virtualization." />
      <SceneFade startFrame={136} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 3 (11.50 -> 19.00s, 180 frames, LAYOUT_A)
// ============================================================================
const Scene3: React.FC = () => {
  const frame = useCurrentFrame();

  const boxes = [
    {enId: 'box1_en', arId: 'box1_ar', t: 2.95, Comp: IconServerBox},
    {enId: 'box2_en', arId: 'box2_ar', t: 3.7, Comp: IconVmBox},
    {enId: 'box3_en', arId: 'box3_ar', t: 4.45, Comp: IconHardDrive},
    {enId: 'box4_en', arId: 'box4_ar', t: 5.2, Comp: IconSwitch},
  ];

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 3/8 · Slide 5" />

      {/* Audio */}
      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="pencil_loop" at={0.35} dur={0.6} />
      <Sfx name="pencil_loop" at={1.0} dur={1.4} gainDb={-3} />
      <Sfx name="highlight_swipe" at={2.45} dur={0.35} />
      {boxes.map((b, i) => (
        <React.Fragment key={i}>
          <Sfx name="pop_soft" at={b.t} />
          <Sfx name="pencil_loop" at={b.t + 0.15} dur={0.35} gainDb={-3} />
        </React.Fragment>
      ))}
      <Sfx name="pencil_loop" at={5.85} dur={0.6} gainDb={-3} />

      <Character src="omar_O2.png" x={400} height={820} baseY={1000} side="left" startFrame={0} />
      <SketchBox x={700} y={130} w={1140} h={770} startFrame={8} drawDurationFrames={14} seed={303} />

      {/* Line A at y=220 */}
      <div
        dir="ltr"
        aria-label={getText('V3-S3', 'line_a')}
        style={{
          position: 'absolute',
          left: 760,
          top: 195,
          maxWidth: 1020,
          fontFamily: FONTS.BODY,
          fontWeight: 600,
          fontSize: 40,
          lineHeight: 1.4,
          color: COLORS.INK,
          zIndex: 22,
        }}
      >
        {frame < 59 ? (
          <WordReveal text={getText('V3-S3', 'line_a')} startFrame={24} durationFrames={34} rtl={false} />
        ) : (
          <span>
            Virtualization is the creation of a{' '}
            <HighlightText text="virtual version" startFrame={59} durationFrames={8} rtl={false} /> of something,
          </span>
        )}
      </div>

      {/* 4 Boxes in a row: x=770, w=240, gap=20, y=400..640 */}
      {boxes.map((b, idx) => {
        const bx = 770 + idx * 260;
        const popF = Math.round(b.t * 24);
        const enF = Math.round((b.t + 0.15) * 24);
        const arF = Math.round((b.t + 0.5) * 24);
        return (
          <div
            key={idx}
            style={{
              position: 'absolute',
              left: bx,
              top: 390,
              width: 240,
              height: 270,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              zIndex: 22,
            }}
          >
            <Pop startFrame={popF}>
              <b.Comp size={120} />
            </Pop>
            {frame >= enF && (
              <div
                dir="ltr"
                style={{
                  marginTop: 12,
                  fontFamily: FONTS.BODY,
                  fontWeight: 600,
                  fontSize: 30,
                  lineHeight: 1.25,
                  color: COLORS.INK,
                  textAlign: 'center',
                }}
              >
                <WordReveal text={getText('V3-S3', b.enId)} startFrame={enF} durationFrames={8} rtl={false} />
              </div>
            )}
            {frame >= arF && (
              <div
                dir="rtl"
                style={{
                  marginTop: 6,
                  fontFamily: FONTS.BODY,
                  fontWeight: 500,
                  fontSize: 26,
                  color: COLORS.MUTED,
                  opacity: Math.min(1, (frame - arF) / 5),
                }}
              >
                {getText('V3-S3', b.arId)}
              </div>
            )}
          </div>
        );
      })}

      {/* Note sentence at (1270, 800) */}
      {frame >= 140 && (
        <div
          dir="rtl"
          style={{
            position: 'absolute',
            left: 1270,
            top: 800,
            transform: 'translate(-50%, -50%)',
            fontFamily: FONTS.BODY,
            fontWeight: 500,
            fontSize: 36,
            color: COLORS.INK,
            whiteSpace: 'nowrap',
            zIndex: 22,
          }}
        >
          <WordReveal text={getText('V3-S3', 'note_ar')} startFrame={140} durationFrames={15} rtl />
        </div>
      )}

      <Caption text="يعني نسخة virtual من server أو OS أو storage أو network." />
      <SceneFade startFrame={172} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 4 (19.00 -> 25.50s, 156 frames, LAYOUT_A)
// ============================================================================
const Scene4: React.FC = () => {
  const frame = useCurrentFrame();

  const rows = [
    {enId: 'row1_en', arId: 'row1_ar', t: 2.4, Comp: IconSpeedometer},
    {enId: 'row2_en', arId: 'row2_ar', t: 3.4, Comp: IconCoinDown},
    {enId: 'row3_en', arId: 'row3_ar', t: 4.4, Comp: IconRisingChart},
  ];

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 3/8 · Slide 5" />

      {/* Audio */}
      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="pencil_loop" at={0.35} dur={0.6} />
      <Sfx name="pencil_loop" at={1.0} dur={1.2} gainDb={-3} />
      {rows.map((r, i) => (
        <React.Fragment key={i}>
          <Sfx name="pencil_loop" at={r.t} dur={0.4} gainDb={-3} />
          <Sfx name="check_soft" at={r.t + 0.4} />
          <Sfx name="highlight_swipe" at={r.t + 0.65} dur={0.3} gainDb={-3} />
        </React.Fragment>
      ))}

      <Character src="omar_O4.png" x={400} height={820} baseY={1000} side="left" startFrame={0} />
      <SketchBox x={700} y={150} w={1140} h={730} startFrame={8} drawDurationFrames={14} seed={304} />

      {/* Line B at y=230 */}
      <div
        dir="ltr"
        style={{
          position: 'absolute',
          left: 760,
          top: 210,
          maxWidth: 1020,
          fontFamily: FONTS.BODY,
          fontWeight: 600,
          fontSize: 40,
          lineHeight: 1.35,
          color: COLORS.INK,
          zIndex: 22,
        }}
      >
        <WordReveal text={getText('V3-S4', 'line_b')} startFrame={24} durationFrames={29} rtl={false} />
      </div>

      {/* 3 Benefit Rows */}
      {rows.map((r, idx) => {
        const ry = 370 + idx * 145;
        const wrF = Math.round(r.t * 24);
        const chkF = Math.round((r.t + 0.4) * 24);
        const hlF = Math.round((r.t + 0.65) * 24);
        const arF = Math.round((r.t + 0.7) * 24);
        const enText = getText('V3-S4', r.enId);
        return (
          <React.Fragment key={idx}>
            <CheckMark x={790} y={ry + 20} startFrame={chkF} />
            {frame >= wrF && (
              <div
                dir="ltr"
                style={{
                  position: 'absolute',
                  left: 870,
                  top: ry,
                  fontFamily: FONTS.BODY,
                  fontWeight: 600,
                  fontSize: 44,
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
            {frame >= arF && (
              <>
                <div
                  dir="rtl"
                  style={{
                    position: 'absolute',
                    left: 870,
                    top: ry + 60,
                    fontFamily: FONTS.BODY,
                    fontWeight: 500,
                    fontSize: 28,
                    color: COLORS.MUTED,
                    opacity: Math.min(1, (frame - arF) / 5),
                    zIndex: 22,
                  }}
                >
                  {getText('V3-S4', r.arId)}
                </div>
                <Pop
                  startFrame={arF}
                  style={{
                    position: 'absolute',
                    left: 1705,
                    top: ry,
                    zIndex: 22,
                  }}
                >
                  <r.Comp size={76} />
                </Pop>
              </>
            )}
          </React.Fragment>
        );
      })}

      <Caption text="فوايده: optimize resources وreduce costs وimprove efficiency." />
      <SceneFade startFrame={148} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 5 (25.50 -> 31.50s, 144 frames, LAYOUT_S)
// ============================================================================
const Scene5: React.FC = () => {
  const frame = useCurrentFrame();
  const divP = interpolate(frame, [7, 17], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 3/8 · Slide 5" />

      {/* Audio */}
      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="pencil_loop" at={0.3} dur={0.4} />
      <Sfx name="marker_loop" at={0.8} dur={0.6} />
      <Sfx name="pencil_loop" at={1.45} dur={0.5} gainDb={-3} />
      <Sfx name="pop_soft" at={2.05} />
      <Sfx name="pop_soft" at={2.8} gainDb={-6} />
      <Sfx name="marker_loop" at={3.1} dur={0.6} />
      <Sfx name="pencil_loop" at={3.75} dur={0.5} gainDb={-3} />
      <Sfx name="pencil_loop" at={4.35} dur={0.3} />
      <Sfx name="pop_soft" at={4.7} gainDb={-6} />
      <Sfx name="shield_clink" at={5.0} gainDb={-3} />

      {/* Center vertical divider */}
      {frame >= 7 && (
        <svg style={{position: 'absolute', left: 0, top: 0, width: 1920, height: 1080, pointerEvents: 'none', zIndex: 15}}>
          <line x1={960} y1={130} x2={960} y2={130 + 790 * divP} stroke={COLORS.INK} strokeWidth={4} />
        </svg>
      )}

      {/* LEFT SIDE: Desktop Virtualization */}
      <HandWrite
        text={getText('V3-S5', 'left_title')}
        startFrame={19}
        durationFrames={14}
        style={{
          position: 'absolute',
          left: 500,
          top: 170,
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.EN_TITLE,
          fontWeight: 700,
          fontSize: 48,
          color: COLORS.INK,
          zIndex: 20,
        }}
      />
      {frame >= 35 && (
        <div
          dir="rtl"
          style={{
            position: 'absolute',
            left: 500,
            top: 240,
            transform: 'translate(-50%, -50%)',
            fontFamily: FONTS.BODY,
            fontWeight: 500,
            fontSize: 32,
            color: COLORS.INK,
            whiteSpace: 'nowrap',
            zIndex: 20,
          }}
        >
          <WordReveal text={getText('V3-S5', 'left_ar')} startFrame={35} durationFrames={12} rtl />
        </div>
      )}

      {/* Left Illustration: Rack + 3 OS windows + dashed lines to devices */}
      <Pop startFrame={49} style={{position: 'absolute', left: 500 - 80, top: 470, zIndex: 18}}>
        <IconRack size={160} />
      </Pop>
      {[-120, 0, 120].map((dx, i) => (
        <Pop key={i} startFrame={55 + i * 2} style={{position: 'absolute', left: 500 + dx - 40, top: 340, zIndex: 19}}>
          <IconVmBox size={80} />
        </Pop>
      ))}
      {frame >= 62 && (
        <>
          <svg style={{position: 'absolute', left: 0, top: 0, width: 1920, height: 1080, pointerEvents: 'none', zIndex: 16}}>
            <line x1={450} y1={630} x2={260} y2={740} stroke={COLORS.INK} strokeWidth={3} strokeDasharray="8 6" />
            <line x1={500} y1={640} x2={500} y2={740} stroke={COLORS.INK} strokeWidth={3} strokeDasharray="8 6" />
            <line x1={550} y1={630} x2={740} y2={740} stroke={COLORS.INK} strokeWidth={3} strokeDasharray="8 6" />
          </svg>
          <Pop startFrame={65} style={{position: 'absolute', left: 260 - 50, top: 740, zIndex: 18}}>
            <IconLaptopBrowser size={100} />
          </Pop>
          <Pop startFrame={67} style={{position: 'absolute', left: 500 - 50, top: 740, zIndex: 18}}>
            <IconTablet size={100} />
          </Pop>
          <Pop startFrame={69} style={{position: 'absolute', left: 740 - 50, top: 740, zIndex: 18}}>
            <IconDesktopPc size={100} />
          </Pop>
        </>
      )}

      {/* RIGHT SIDE: Service Virtualization */}
      <HandWrite
        text={getText('V3-S5', 'right_title')}
        startFrame={74}
        durationFrames={14}
        style={{
          position: 'absolute',
          left: 1420,
          top: 170,
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.EN_TITLE,
          fontWeight: 700,
          fontSize: 48,
          color: COLORS.INK,
          zIndex: 20,
        }}
      />
      {frame >= 90 && (
        <div
          dir="rtl"
          style={{
            position: 'absolute',
            left: 1420,
            top: 240,
            transform: 'translate(-50%, -50%)',
            fontFamily: FONTS.BODY,
            fontWeight: 500,
            fontSize: 32,
            color: COLORS.INK,
            whiteSpace: 'nowrap',
            zIndex: 20,
          }}
        >
          <WordReveal text={getText('V3-S5', 'right_ar')} startFrame={90} durationFrames={12} rtl />
        </div>
      )}

      {/* Right Illustration: Server Box (420x300) containing 3 VMs, 3rd is Firewall */}
      {frame >= 104 && (
        <SketchBox x={1210} y={400} w={420} h={300} startFrame={104} drawDurationFrames={7} seed={305}>
          <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '0 16px', boxSizing: 'border-box'}}>
            <Pop startFrame={113}>
              <IconVmBox size={110} />
            </Pop>
            <Pop startFrame={116}>
              <IconVmBox size={110} />
            </Pop>
            <Pop startFrame={119}>
              <div
                style={{
                  width: 115,
                  height: 95,
                  backgroundColor: COLORS.SALMON,
                  border: `3px solid ${COLORS.INK}`,
                  borderRadius: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span style={{fontFamily: FONTS.EN_TITLE, fontWeight: 700, fontSize: 22, color: '#FFFFFF'}}>
                  Firewall
                </span>
                <span style={{fontFamily: FONTS.BODY, fontWeight: 700, fontSize: 18, color: '#FFFFFF'}}>
                  VM
                </span>
              </div>
            </Pop>
          </div>
        </SketchBox>
      )}

      <Caption text="Desktop: الديسكتوب على سيرفر... وService: الخدمة بقت VM." />
      <SceneFade startFrame={136} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 6 (31.50 -> 37.50s, 144 frames, LAYOUT_C)
// ============================================================================
const Scene6: React.FC = () => {
  const frame = useCurrentFrame();

  const rows = [
    {enId: 'row1_en', arId: 'row1_ar', t: 2.2},
    {enId: 'row2_en', arId: 'row2_ar', t: 3.4},
  ];

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 3/8 · Slide 5" />

      {/* Audio */}
      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="pencil_loop" at={0.35} dur={0.6} />
      <Sfx name="pencil_loop" at={1.0} dur={1.0} gainDb={-3} />
      {rows.map((r, i) => (
        <React.Fragment key={i}>
          <Sfx name="pencil_loop" at={r.t} dur={0.6} gainDb={-3} />
          <Sfx name="check_soft" at={r.t + 0.6} />
          <Sfx name="highlight_swipe" at={r.t + 0.85} dur={0.3} gainDb={-3} />
        </React.Fragment>
      ))}

      <Character src="omar_O3.png" x={1540} height={820} baseY={1000} side="right" startFrame={0} />
      <Sparkle cx={1540} cy={220} startFrame={115} />

      <SketchBox x={80} y={160} w={1160} h={720} startFrame={8} drawDurationFrames={14} seed={306} />

      {/* Title */}
      <div
        dir="ltr"
        style={{
          position: 'absolute',
          left: 140,
          top: 230,
          fontFamily: FONTS.BODY,
          fontWeight: 700,
          fontSize: 44,
          color: COLORS.INK,
          zIndex: 22,
        }}
      >
        <WordReveal text={getText('V3-S6', 'title_en')} startFrame={24} durationFrames={20} rtl={false} />
      </div>
      <HandUnderline x1={140} x2={820} y={295} startFrame={43} durationFrames={5} rtl={false} />

      {/* 2 Rows */}
      {rows.map((r, idx) => {
        const ry = 380 + idx * 180;
        const wrF = Math.round(r.t * 24);
        const chkF = Math.round((r.t + 0.6) * 24);
        const hlF = Math.round((r.t + 0.85) * 24);
        const arF = Math.round((r.t + 0.9) * 24);
        const enText = getText('V3-S6', r.enId);
        return (
          <React.Fragment key={idx}>
            <CheckMark x={170} y={ry + 20} startFrame={chkF} />
            {frame >= wrF && (
              <div
                dir="ltr"
                style={{
                  position: 'absolute',
                  left: 250,
                  top: ry,
                  fontFamily: FONTS.BODY,
                  fontWeight: 600,
                  fontSize: 42,
                  color: COLORS.INK,
                  zIndex: 22,
                }}
              >
                {frame < hlF ? (
                  <WordReveal text={enText} startFrame={wrF} durationFrames={14} rtl={false} />
                ) : (
                  <HighlightText text={enText} startFrame={hlF} durationFrames={7} rtl={false} />
                )}
              </div>
            )}
            {frame >= arF && (
              <div
                dir="rtl"
                style={{
                  position: 'absolute',
                  left: 250,
                  top: ry + 64,
                  fontFamily: FONTS.BODY,
                  fontWeight: 500,
                  fontSize: 30,
                  color: COLORS.MUTED,
                  opacity: Math.min(1, (frame - arF) / 5),
                  zIndex: 22,
                }}
              >
                {getText('V3-S6', r.arId)}
              </div>
            )}
          </React.Fragment>
        );
      })}

      <Caption text="هنشوف الاتنين بيشتغلوا إزاي... وفايدتهم في الـ network management." />
      <SceneFade startFrame={136} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENES 7 -> 12 CONTINUOUS PALO ALTO NGFW WALKTHROUGH (37.50 -> 74.00s, 876 frames)
// S7:  0..132   (5.5s)
// S8:  132..288 (6.5s)
// S9:  288..432 (6.0s)
// S10: 432..576 (6.0s)
// S11: 576..720 (6.0s)
// S12: 720..876 (6.5s)
// ============================================================================
const PHOTO_RECT = {x: 434, y: 144, w: 1012, h: 752};

const REGIONS = {
  R_TITLE: {x0: 5, x1: 95, y0: 4, y1: 11},
  R_CLUSTER: {x0: 25, x1: 46, y0: 15, y1: 32},
  R_PANORAMA: {x0: 75, x1: 85, y0: 17, y1: 36},
  R_ADMINS: {x0: 85, x1: 97, y0: 19, y1: 33},
  R_POLICY: {x0: 62, x1: 77, y0: 30, y1: 39},
  R_GREENCARD: {x0: 40, x1: 49, y0: 34, y1: 40},
  R_LEFT_HOST: {x0: 10, x1: 39, y0: 37, y1: 85},
  R_PHYS: {x0: 10, x1: 39, y0: 70, y1: 85},
  R_HYPER: {x0: 10, x1: 39, y0: 64, y1: 72},
  R_VSW: {x0: 10, x1: 39, y0: 54, y1: 67},
  R_LEFT_TOP: {x0: 10, x1: 39, y0: 38, y1: 59},
  R_LEFT_VMS: {x0: 18, x1: 37, y0: 40, y1: 58},
  R_LEFT_NGFW: {x0: 11, x1: 20, y0: 42, y1: 54},
  R_RIGHT_NGFW: {x0: 73, x1: 81, y0: 45, y1: 56},
  R_TOPRIGHT: {x0: 60, x1: 98, y0: 14, y1: 42},
  R_INTERNET: {x0: 49, x1: 62, y0: 47, y1: 65},
  R_SWITCHES: {x0: 37, x1: 72, y0: 62, y1: 92},
  R_TS_LABEL: {x0: 2, x1: 12, y0: 57, y1: 67},
};

const pctToPx = (pxPct: number, pyPct: number) => ({
  x: PHOTO_RECT.x + (pxPct / 100) * PHOTO_RECT.w,
  y: PHOTO_RECT.y + (pyPct / 100) * PHOTO_RECT.h,
});

const regionCenterAndRadius = (reg: {x0: number; x1: number; y0: number; y1: number}) => {
  const cx = PHOTO_RECT.x + ((reg.x0 + reg.x1) / 200) * PHOTO_RECT.w;
  const cy = PHOTO_RECT.y + ((reg.y0 + reg.y1) / 200) * PHOTO_RECT.h;
  const rx = ((reg.x1 - reg.x0) / 200) * PHOTO_RECT.w + 14;
  const ry = ((reg.y1 - reg.y0) / 200) * PHOTO_RECT.h + 14;
  return {cx, cy, rx, ry};
};

const FlowLine: React.FC<{
  ptsPct: [number, number][];
  startFrame: number;
  durationFrames: number;
}> = ({ptsPct, startFrame, durationFrames}) => {
  const frame = useCurrentFrame();
  if (frame < startFrame) return null;
  const rel = frame - startFrame;
  const p = Math.min(1, rel / Math.max(1, durationFrames));

  const pts = ptsPct.map(([px, py]) => pctToPx(px, py));
  const pathD = pts.map((pt, i) => (i === 0 ? `M ${pt.x.toFixed(1)} ${pt.y.toFixed(1)}` : `L ${pt.x.toFixed(1)} ${pt.y.toFixed(1)}`)).join(' ');

  // Compute point along polyline at fraction p
  const segIndex = Math.min(pts.length - 2, Math.floor(p * (pts.length - 1)));
  const segFrac = p * (pts.length - 1) - segIndex;
  const dotX = pts[segIndex].x + (pts[segIndex + 1].x - pts[segIndex].x) * segFrac;
  const dotY = pts[segIndex].y + (pts[segIndex + 1].y - pts[segIndex].y) * segFrac;

  return (
    <svg style={{position: 'absolute', left: 0, top: 0, width: 1920, height: 1080, pointerEvents: 'none', zIndex: 26}}>
      <path
        d={pathD}
        fill="none"
        stroke={COLORS.RED}
        strokeWidth={6}
        strokeDasharray="14 10"
        strokeDashoffset={-rel * 3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={dotX} cy={dotY} r={10} fill={COLORS.RED} />
    </svg>
  );
};

const NoteCard: React.FC<{
  x: number;
  y: number;
  w?: number;
  h?: number;
  titleEn: string;
  titleEn2?: string;
  bodyAr?: string;
  startFrame: number;
  endFrame: number;
  seed: number;
}> = ({x, y, w = 500, h = 170, titleEn, titleEn2, bodyAr, startFrame, endFrame, seed}) => {
  const frame = useCurrentFrame();
  if (frame < startFrame || frame >= endFrame) return null;
  const rel = frame - startFrame;
  const fadeOut = frame >= endFrame - 6 ? (endFrame - frame) / 6 : 1;

  return (
    <div style={{opacity: fadeOut, zIndex: 35}}>
      <Pop startFrame={startFrame} style={{position: 'absolute', left: x, top: y, width: w, height: h}}>
        <SketchBox x={0} y={0} w={w} h={h} startFrame={0} drawDurationFrames={6} seed={seed}>
          <div
            style={{
              padding: '14px 22px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '100%',
              boxSizing: 'border-box',
              gap: 6,
            }}
          >
            {titleEn && (
              <div
                dir="ltr"
                style={{
                  fontFamily: FONTS.EN_TITLE,
                  fontWeight: 700,
                  fontSize: 34,
                  lineHeight: 1.15,
                  color: COLORS.INK,
                }}
              >
                {titleEn}
                {titleEn2 ? ` ${titleEn2}` : ''}
              </div>
            )}
            {bodyAr && rel >= 1 && (
              <div
                dir="rtl"
                style={{
                  fontFamily: FONTS.BODY,
                  fontWeight: 500,
                  fontSize: 28,
                  lineHeight: 1.3,
                  color: COLORS.INK,
                }}
              >
                <WordReveal text={bodyAr} startFrame={startFrame + 1} durationFrames={12} rtl />
              </div>
            )}
          </div>
        </SketchBox>
      </Pop>
    </div>
  );
};

const Scenes7To12: React.FC = () => {
  const frame = useCurrentFrame();

  // Compute camera transforms for each stage
  const camS8 = useMemo(
    () =>
      computeRegionTransform(
        PHOTO_RECT,
        REGIONS.R_LEFT_HOST,
        760,
        {cx: 700, cy: 520}
      ),
    []
  );
  const camS9Left = useMemo(
    () =>
      computeRegionTransform(
        PHOTO_RECT,
        REGIONS.R_LEFT_TOP,
        600,
        {cx: 700, cy: 500},
        3.0
      ),
    []
  );
  const camS9Right = useMemo(
    () =>
      computeRegionTransform(
        PHOTO_RECT,
        REGIONS.R_RIGHT_NGFW,
        280,
        {cx: 700, cy: 500},
        camS9Left.scale
      ),
    [camS9Left.scale]
  );
  const camS10 = useMemo(
    () =>
      computeRegionTransform(
        PHOTO_RECT,
        REGIONS.R_TOPRIGHT,
        610,
        {cx: 760, cy: 450}
      ),
    []
  );

  // Camera keyframe interpolation across S7..S12
  let scale = 1;
  let tx = 0;
  let ty = 0;

  if (frame >= 132 && frame < 288) {
    // S8: 132..149 zoom into R_LEFT_HOST
    const p = interpolate(frame, [132, 149], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.inOut(Easing.cubic)});
    scale = interpolate(p, [0, 1], [1, camS8.scale]);
    tx = interpolate(p, [0, 1], [0, camS8.translateX]);
    ty = interpolate(p, [0, 1], [0, camS8.translateY]);
  } else if (frame >= 288 && frame < 432) {
    // S9: 293..307 pan to R_LEFT_TOP, then 377..391 pan to R_RIGHT_NGFW
    if (frame < 377) {
      const p = interpolate(frame, [293, 307], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.inOut(Easing.cubic)});
      scale = interpolate(p, [0, 1], [camS8.scale, camS9Left.scale]);
      tx = interpolate(p, [0, 1], [camS8.translateX, camS9Left.translateX]);
      ty = interpolate(p, [0, 1], [camS8.translateY, camS9Left.translateY]);
    } else {
      const p = interpolate(frame, [377, 391], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.inOut(Easing.cubic)});
      scale = camS9Left.scale;
      tx = interpolate(p, [0, 1], [camS9Left.translateX, camS9Right.translateX]);
      ty = interpolate(p, [0, 1], [camS9Left.translateY, camS9Right.translateY]);
    }
  } else if (frame >= 432 && frame < 576) {
    // S10: 437..454 pan+zoom to R_TOPRIGHT
    const p = interpolate(frame, [437, 454], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.inOut(Easing.cubic)});
    scale = interpolate(p, [0, 1], [camS9Left.scale, camS10.scale]);
    tx = interpolate(p, [0, 1], [camS9Right.translateX, camS10.translateX]);
    ty = interpolate(p, [0, 1], [camS9Right.translateY, camS10.translateY]);
  } else if (frame >= 576) {
    // S11..S12: 578..595 return to scale 1
    const p = interpolate(frame, [578, 595], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.inOut(Easing.cubic)});
    scale = interpolate(p, [0, 1], [camS10.scale, 1]);
    tx = interpolate(p, [0, 1], [camS10.translateX, 0]);
    ty = interpolate(p, [0, 1], [camS10.translateY, 0]);
  }

  // Ellipses in image coordinates
  const elLeftNgfw = regionCenterAndRadius(REGIONS.R_LEFT_NGFW);
  const elRightNgfw = regionCenterAndRadius(REGIONS.R_RIGHT_NGFW);
  const elCluster = regionCenterAndRadius(REGIONS.R_CLUSTER);
  const elTsLabel = regionCenterAndRadius(REGIONS.R_TS_LABEL);
  const greenCardPos = pctToPx(44.5, 37);
  const vmCheckPos = pctToPx(25, 50);

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 3/8 · Slide 6" />

      {/* ==================== AUDIO S7..S12 ==================== */}
      {/* S7 (offset 0.0) */}
      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="pencil_loop" at={0.3} dur={0.5} />
      <Sfx name="page_turn" at={0.8} />
      <Sfx name="marker_loop" at={1.4} dur={0.4} />
      <Sfx name="highlight_swipe" at={2.0} dur={0.3} />
      <Sfx name="pop_soft" at={2.5} />
      <Sfx name="pencil_loop" at={2.6} dur={0.6} gainDb={-3} />

      {/* S8 (offset 5.5) */}
      <Sfx name="zoom_in" at={5.5} />
      {[1.0, 2.3, 3.6].map((t, i) => (
        <React.Fragment key={i}>
          <Sfx name="marker_loop" at={5.5 + t} dur={0.4} />
          <Sfx name="tick_soft" at={5.5 + t + 0.4} />
          <Sfx name="pencil_loop" at={5.5 + t + 0.45} dur={0.5} gainDb={-6} />
        </React.Fragment>
      ))}

      {/* S9 (offset 12.0) */}
      <Sfx name="whoosh_soft" at={12.0 + 0.2} gainDb={-6} />
      <Sfx name="marker_loop" at={12.0 + 1.0} dur={0.4} />
      <Sfx name="tick_soft" at={12.0 + 1.4} />
      <Sfx name="pencil_loop" at={12.0 + 1.45} dur={0.5} gainDb={-6} />
      <Sfx name="marker_loop" at={12.0 + 2.3} dur={0.5} />
      <Sfx name="shield_clink" at={12.0 + 2.8} />
      <Sfx name="pencil_loop" at={12.0 + 2.9} dur={0.5} gainDb={-6} />
      <Sfx name="whoosh_soft" at={12.0 + 3.7} gainDb={-6} />
      <Sfx name="marker_loop" at={12.0 + 4.35} dur={0.5} />

      {/* S10 (offset 18.0) */}
      <Sfx name="whoosh_soft" at={18.0 + 0.2} gainDb={-6} />
      {[1.1, 2.5, 3.9].map((t, i) => (
        <React.Fragment key={i}>
          <Sfx name="marker_loop" at={18.0 + t} dur={0.4} />
          <Sfx name="tick_soft" at={18.0 + t + 0.4} />
          <Sfx name="pencil_loop" at={18.0 + t + 0.45} dur={0.5} gainDb={-6} />
        </React.Fragment>
      ))}
      <Sfx name="typing_soft" at={18.0 + 1.5} dur={0.8} gainDb={-6} />

      {/* S11 (offset 24.0) */}
      <Sfx name="whoosh_soft" at={24.0 + 0.1} gainDb={-6} />
      <Sfx name="signal_pips" at={24.0 + 1.0} />
      <Sfx name="marker_loop" at={24.0 + 1.85} dur={0.5} />
      <Sfx name="tick_soft" at={24.0 + 2.4} />
      <Sfx name="pencil_loop" at={24.0 + 2.45} dur={0.5} gainDb={-6} />
      <Sfx name="signal_pips" at={24.0 + 3.1} />
      <Sfx name="pop_soft" at={24.0 + 4.1} gainDb={-3} />

      {/* S12 (offset 30.0) */}
      <Sfx name="marker_loop" at={30.0 + 0.2} dur={0.4} />
      <Sfx name="tick_soft" at={30.0 + 0.6} />
      <Sfx name="marker_loop" at={30.0 + 1.2} dur={0.4} />
      <Sfx name="tick_soft" at={30.0 + 1.6} />
      <Sfx name="marker_loop" at={30.0 + 2.2} dur={0.5} />
      <Sfx name="tick_soft" at={30.0 + 2.75} />
      <Sfx name="pencil_loop" at={30.0 + 2.8} dur={0.5} gainDb={-6} />
      <Sfx name="whoosh_soft" at={30.0 + 3.5} gainDb={-6} />
      <Sfx name="radar_ping" at={30.0 + 4.6} />
      <Sfx name="check_soft" at={30.0 + 5.4} />

      {/* Top-left Slide 6 Title Tag */}
      <HandWrite
        text={getText('V3-S7', 'tag_s6')}
        startFrame={7}
        durationFrames={12}
        style={{
          position: 'absolute',
          left: 60,
          top: 30,
          border: `3px solid ${COLORS.INK}`,
          borderRadius: 12,
          backgroundColor: COLORS.CARD,
          padding: '4px 16px',
          fontFamily: FONTS.EN_TITLE,
          fontWeight: 700,
          fontSize: 36,
          color: COLORS.INK,
          zIndex: 30,
        }}
      />

      {/* ==================== CAMERA LAYER ==================== */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: 1920,
          height: 1080,
          transformOrigin: '0 0',
          transform: `translate(${tx}px, ${ty}px) scale(${scale})`,
        }}
      >
        <PinnedPhoto
          src="slides_up/s06_paloalto_ngfw.jpg"
          x={420}
          y={130}
          w={1040}
          h={780}
          tiltDeg={0}
          startFrame={19}
        />

        {/* S7: Spotlight on R_TITLE + yellow highlight */}
        {frame >= 34 && frame < 125 && (
          <Spotlight photoRect={PHOTO_RECT} region={REGIONS.R_TITLE} startFrame={34} drawFrames={9} maskId="s7-title" />
        )}
        {frame >= 48 && frame < 125 && (
          <div
            style={{
              position: 'absolute',
              left: PHOTO_RECT.x + 0.05 * PHOTO_RECT.w,
              top: PHOTO_RECT.y + 0.04 * PHOTO_RECT.h,
              width: 0.9 * PHOTO_RECT.w * Math.min(1, (frame - 48) / 7),
              height: 0.07 * PHOTO_RECT.h,
              backgroundColor: COLORS.HILITE,
              opacity: 0.55,
              mixBlendMode: 'multiply',
              pointerEvents: 'none',
              zIndex: 24,
            }}
          />
        )}

        {/* S8: Spotlights on R_PHYS, R_HYPER, R_VSW */}
        {frame >= 156 && frame < 187 && (
          <Spotlight photoRect={PHOTO_RECT} region={REGIONS.R_PHYS} startFrame={156} drawFrames={9} maskId="s8-phys" />
        )}
        {frame >= 187 && frame < 218 && (
          <Spotlight photoRect={PHOTO_RECT} region={REGIONS.R_HYPER} startFrame={187} drawFrames={9} maskId="s8-hyper" />
        )}
        {frame >= 218 && frame < 288 && (
          <Spotlight photoRect={PHOTO_RECT} region={REGIONS.R_VSW} startFrame={218} drawFrames={9} maskId="s8-vsw" />
        )}

        {/* S9: Spotlight R_LEFT_VMS + RedEllipse R_LEFT_NGFW + RedEllipse R_RIGHT_NGFW */}
        {frame >= 312 && frame < 343 && (
          <Spotlight photoRect={PHOTO_RECT} region={REGIONS.R_LEFT_VMS} startFrame={312} drawFrames={9} maskId="s9-vms" />
        )}
        {frame >= 343 && frame < 432 && (
          <RedEllipse cx={elLeftNgfw.cx} cy={elLeftNgfw.cy} rx={elLeftNgfw.rx} ry={elLeftNgfw.ry} startFrame={343} durationFrames={12} />
        )}
        {frame >= 392 && frame < 432 && (
          <RedEllipse cx={elRightNgfw.cx} cy={elRightNgfw.cy} rx={elRightNgfw.rx} ry={elRightNgfw.ry} startFrame={392} durationFrames={12} />
        )}

        {/* S10: Spotlights on R_ADMINS, R_PANORAMA, R_POLICY */}
        {frame >= 458 && frame < 492 && (
          <Spotlight photoRect={PHOTO_RECT} region={REGIONS.R_ADMINS} startFrame={458} drawFrames={9} maskId="s10-adm" />
        )}
        {frame >= 492 && frame < 525 && (
          <Spotlight photoRect={PHOTO_RECT} region={REGIONS.R_PANORAMA} startFrame={492} drawFrames={9} maskId="s10-pan" />
        )}
        {frame >= 525 && frame < 576 && (
          <Spotlight photoRect={PHOTO_RECT} region={REGIONS.R_POLICY} startFrame={525} drawFrames={9} maskId="s10-pol" />
        )}

        {/* S11: Flow F1, RedEllipse R_CLUSTER, Flows F2 & F3, policy tag */}
        {frame >= 600 && frame < 720 && (
          <>
            <FlowLine ptsPct={[[76, 23], [45, 23]]} startFrame={600} durationFrames={19} />
            <RedEllipse cx={elCluster.cx} cy={elCluster.cy} rx={elCluster.rx} ry={elCluster.ry} startFrame={620} durationFrames={12} />
            <FlowLine ptsPct={[[31, 31], [17, 45]]} startFrame={650} durationFrames={19} />
            <FlowLine ptsPct={[[43, 30], [74, 49]]} startFrame={650} durationFrames={19} />
            <Tag
              text={getText('V3-S11', 'tag_policy')}
              x={greenCardPos.x + 35}
              y={greenCardPos.y - 18}
              fontSize={26}
              color={COLORS.RED}
              startFrame={674}
            />
          </>
        )}

        {/* S12: Spotlights R_INTERNET & R_SWITCHES, RedEllipse R_TS_LABEL, Flow P, CheckMark */}
        {frame >= 725 && frame < 749 && (
          <Spotlight photoRect={PHOTO_RECT} region={REGIONS.R_INTERNET} startFrame={725} drawFrames={9} maskId="s12-int" />
        )}
        {frame >= 749 && frame < 773 && (
          <Spotlight photoRect={PHOTO_RECT} region={REGIONS.R_SWITCHES} startFrame={749} drawFrames={9} maskId="s12-sw" />
        )}
        {frame >= 773 && frame < 876 && (
          <RedEllipse cx={elTsLabel.cx} cy={elTsLabel.cy} rx={elTsLabel.rx} ry={elTsLabel.ry} startFrame={773} durationFrames={12} />
        )}
        {frame >= 804 && (
          <FlowLine
            ptsPct={[
              [55, 52],
              [55, 68],
              [45, 78],
              [25, 80],
              [25, 63],
              [16, 49],
              [25, 50],
            ]}
            startFrame={804}
            durationFrames={48}
          />
        )}
        <CheckMark x={vmCheckPos.x} y={vmCheckPos.y} startFrame={850} />
      </div>

      {/* ==================== OUTSIDE CAMERA NOTE CARDS ==================== */}
      {/* S7 Note Card */}
      <NoteCard
        x={1480}
        y={180}
        w={400}
        h={210}
        titleEn={getText('V3-S7', 'card_en1')}
        titleEn2={getText('V3-S7', 'card_en2')}
        bodyAr={getText('V3-S7', 'card_ar')}
        startFrame={60}
        endFrame={130}
        seed={307}
      />

      {/* S8 Note Cards */}
      <NoteCard
        x={1320}
        y={200}
        titleEn={getText('V3-S8', 'c1_en')}
        bodyAr={getText('V3-S8', 'c1_ar')}
        startFrame={165}
        endFrame={292}
        seed={3081}
      />
      <NoteCard
        x={1320}
        y={420}
        titleEn={getText('V3-S8', 'c2_en')}
        bodyAr={getText('V3-S8', 'c2_ar')}
        startFrame={197}
        endFrame={292}
        seed={3082}
      />
      <NoteCard
        x={1320}
        y={640}
        titleEn={getText('V3-S8', 'c3_en')}
        bodyAr={getText('V3-S8', 'c3_ar')}
        startFrame={228}
        endFrame={292}
        seed={3083}
      />

      {/* S9 Note Cards */}
      <NoteCard
        x={1320}
        y={200}
        titleEn={getText('V3-S9', 'c1_en')}
        bodyAr={getText('V3-S9', 'c1_ar')}
        startFrame={322}
        endFrame={436}
        seed={3091}
      />
      <NoteCard
        x={1320}
        y={420}
        titleEn={getText('V3-S9', 'c2_en')}
        bodyAr={getText('V3-S9', 'c2_ar')}
        startFrame={356}
        endFrame={436}
        seed={3092}
      />
      <NoteCard
        x={1320}
        y={640}
        titleEn=""
        bodyAr={getText('V3-S9', 'c3_ar')}
        startFrame={406}
        endFrame={436}
        seed={3093}
      />

      {/* S10 Note Cards */}
      <NoteCard
        x={1360}
        y={200}
        titleEn={getText('V3-S10', 'c1_en')}
        bodyAr={getText('V3-S10', 'c1_ar')}
        startFrame={468}
        endFrame={580}
        seed={3101}
      />
      <NoteCard
        x={1360}
        y={420}
        titleEn={getText('V3-S10', 'c2_en')}
        bodyAr={getText('V3-S10', 'c2_ar')}
        startFrame={502}
        endFrame={580}
        seed={3102}
      />
      <NoteCard
        x={1360}
        y={640}
        titleEn={getText('V3-S10', 'c3_en')}
        bodyAr={getText('V3-S10', 'c3_ar')}
        startFrame={535}
        endFrame={580}
        seed={3103}
      />

      {/* S11 Note Card */}
      <NoteCard
        x={40}
        y={150}
        w={360}
        h={190}
        titleEn={getText('V3-S11', 'c1_en')}
        bodyAr={getText('V3-S11', 'c1_ar')}
        startFrame={634}
        endFrame={724}
        seed={3111}
      />

      {/* S12 Note Cards */}
      <NoteCard
        x={1480}
        y={200}
        w={400}
        h={140}
        titleEn={getText('V3-S12', 'c1_en')}
        startFrame={734}
        endFrame={876}
        seed={3121}
      />
      <NoteCard
        x={1480}
        y={390}
        w={400}
        h={180}
        titleEn={getText('V3-S12', 'c2_en')}
        bodyAr={getText('V3-S12', 'c2_ar')}
        startFrame={758}
        endFrame={876}
        seed={3122}
      />
      <NoteCard
        x={1480}
        y={610}
        w={400}
        h={210}
        titleEn={getText('V3-S12', 'c3_en')}
        bodyAr={getText('V3-S12', 'c3_ar')}
        startFrame={786}
        endFrame={876}
        seed={3123}
      />

      {/* ==================== CAPTIONS S7..S12 ==================== */}
      {frame < 132 && (
        <Caption text="مثال: Advanced Services Insertion بـ Palo Alto Networks NGFW." fadeOutStartFrame={127} />
      )}
      {frame >= 132 && frame < 288 && (
        <Caption text="Physical Host فوقه Hypervisor، وفوقه vSwitch بيوصّل الـ VMs." startFrame={132} fadeOutStartFrame={283} />
      )}
      {frame >= 288 && frame < 432 && (
        <Caption text="فوق الـ vSwitch الـ VMs... ووسطهم Firewall افتراضي شغال كـ VM." startFrame={288} fadeOutStartFrame={427} />
      )}
      {frame >= 432 && frame < 576 && (
        <Caption text="الـ Security Admin بيكتب الـ Security Policy على Panorama." startFrame={432} fadeOutStartFrame={571} />
      )}
      {frame >= 576 && frame < 720 && (
        <Caption text="Panorama يبعت للـ Cluster Controller... وهو يوزّع على الـ NGFW." startFrame={576} fadeOutStartFrame={715} />
      )}
      {frame >= 720 && (
        <Caption text="Traffic Steering: الترافيك يعدّي على الـ NGFW الأول قبل الـ VM." startFrame={720} />
      )}

      <SceneFade startFrame={868} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 12b (74.00 -> 81.00s, 168 frames, LAYOUT_L)
// ============================================================================
const Scene12b: React.FC = () => {
  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 3/8" />

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
        centerTopicTitle={getText('V3-S12b', 'center_title')}
        centerSlideTag="Slides 5–6"
        nextTopicTitle={getText('V3-S12b', 'next_topic')}
        nodes={[
          {
            position: 'N1',
            directionText: 'شفناه في V2 · Slide 4',
            topicTitle: getText('V3-S12b', 'n1_topic'),
            arabicText: 'صندوق ESXi في الـ Datacenter هو Hypervisor بيشغّل كذا VM',
            labels: [getText('V3-S12b', 'lbl_esxi'), getText('V3-S12b', 'lbl_vm')],
            crop: {
              src: 'slides_up/s04_datacenter.png',
              region: {x0: 1, x1: 24, y0: 50, y1: 70},
            },
          },
          {
            position: 'N2',
            directionText: 'هنشوفه في V6 · Slides 9–10',
            topicTitle: getText('V3-S12b', 'n2_topic'),
            arabicText: 'الـ NGFW جدار حماية جيل جديد... شغال هنا كـ VM',
            labels: [getText('V3-S12b', 'lbl_ngfw')],
            crop: {
              src: 'slides_up/s06_paloalto_ngfw.jpg',
              region: {x0: 11, x1: 20, y0: 42, y1: 54},
            },
          },
          {
            position: 'N3',
            directionText: 'هنشوفه في V5 · Slide 8',
            topicTitle: getText('V3-S12b', 'n3_topic'),
            arabicText: 'Panorama = الإدارة المركزية للـ firewalls، ودي network management',
            labels: [getText('V3-S12b', 'lbl_panorama'), getText('V3-S12b', 'lbl_policy')],
            crop: {
              src: 'slides_up/s06_paloalto_ngfw.jpg',
              region: {x0: 60, x1: 98, y0: 14, y1: 42},
            },
          },
        ]}
      />

      <Caption text="الـ Virtualization متوصّلة بالـ Datacenter والـ Firewall والإدارة." />
      <SceneFade startFrame={160} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 13 (81.00 -> 93.00s, 288 frames, LAYOUT_R: StudyCard)
// ============================================================================
const Scene13: React.FC = () => {
  const frame = useCurrentFrame();
  const showTitle = frame >= 18;
  const showTags = frame >= 30;
  const showLines = frame >= 32;
  const showBlocks = frame >= 36;
  const showGlossary = frame >= 79;

  const glossary = [
    {term: 'Virtualization', meaning: 'المحاكاة الافتراضية'},
    {term: 'Physical Host', meaning: 'السيرفر الحقيقي (hardware)'},
    {term: 'Hypervisor', meaning: 'الطبقة اللي بتشغّل الـ VMs'},
    {term: 'vSwitch', meaning: 'سويتش virtual جوه السيرفر'},
    {term: 'VM (Virtual Machine)', meaning: 'جهاز افتراضي'},
    {term: 'NGFW (Next-Generation Firewall)', meaning: 'جدار حماية جيل جديد'},
    {term: 'Security Admin · Security Policy', meaning: 'فريق الأمان · قواعد الأمان'},
    {term: 'Panorama', meaning: 'الإدارة المركزية للـ firewalls'},
    {term: 'Cluster Controller', meaning: 'بيوزّع الـ policy على السيرفرات'},
    {term: 'Traffic Steering', meaning: 'توجيه الترافيك للـ Firewall الأول'},
  ];

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 3/8 · Slides 5–6" />

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
                {['Slide 5', 'Slide 6'].map((tag, i) => (
                  <div
                    key={i}
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
              {/* Left Column: Verbatim Slide 5 & Slide 6 */}
              <div
                dir="ltr"
                style={{
                  flex: 1.7,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                  opacity: showBlocks ? 1 : 0,
                }}
              >
                {/* Slide 5 */}
                <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
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
                      Slide 5
                    </span>
                    <span style={{fontFamily: FONTS.BODY, fontWeight: 700, fontSize: 31, color: COLORS.INK}}>
                      {getText('V3-S13', 's5_title')}
                    </span>
                  </div>

                  <div
                    aria-label={getText('V3-S13', 's5_p1')}
                    style={{
                      fontFamily: FONTS.BODY,
                      fontWeight: 600,
                      fontSize: 26,
                      lineHeight: 1.45,
                      color: COLORS.INK,
                    }}
                  >
                    Virtualization is the creation of a{' '}
                    <HighlightText text="virtual version" startFrame={0} durationFrames={1} rtl={false} /> of something,
                    such as a server, operating system, storage device, or network resource. Desktop and service
                    virtualization allows organizations to{' '}
                    <HighlightText text="optimize resources" startFrame={0} durationFrames={1} rtl={false} />,{' '}
                    <HighlightText text="reduce costs" startFrame={0} durationFrames={1} rtl={false} />, and{' '}
                    <HighlightText text="improve efficiency" startFrame={0} durationFrames={1} rtl={false} />.
                  </div>

                  <div
                    style={{
                      fontFamily: FONTS.BODY,
                      fontWeight: 600,
                      fontSize: 26,
                      lineHeight: 1.45,
                      color: COLORS.INK,
                    }}
                  >
                    {getText('V3-S13', 's5_p2')}
                  </div>
                </div>

                {/* Slide 6 */}
                <div style={{display: 'flex', flexDirection: 'column', gap: 8, marginTop: 12}}>
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
                      Slide 6
                    </span>
                    <span style={{fontFamily: FONTS.BODY, fontWeight: 700, fontSize: 31, color: COLORS.INK}}>
                      {getText('V3-S13', 's6_title')}
                    </span>
                  </div>

                  <div
                    style={{
                      fontFamily: FONTS.BODY,
                      fontWeight: 600,
                      fontSize: 26,
                      lineHeight: 1.42,
                      color: COLORS.INK,
                    }}
                  >
                    {getText('V3-S13', 's6_img_title')}{' '}
                    <span style={{fontFamily: FONTS.BODY, fontWeight: 500, fontSize: 22, color: COLORS.MUTED}}>
                      (من جوه الصورة)
                    </span>
                  </div>
                </div>
              </div>

              {showLines && (
                <div style={{width: 2, height: '94%', backgroundColor: COLORS.INK, alignSelf: 'center'}} />
              )}

              {/* Right Column: 10 Glossary rows */}
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

      <Caption text="ده نص المحاضرة كامل... وقّف الفيديو وذاكره براحتك." />
      <SceneFade startFrame={280} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 14 (93.00 -> 99.00s, 144 frames, LAYOUT_F)
// ============================================================================
const Scene14: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 3/8" />

      {/* Audio */}
      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="marker_loop" at={0.4} dur={0.5} />
      <Sfx name="marker_loop" at={0.9} dur={0.9} />
      <Sfx name="marker_loop" at={1.85} dur={0.6} />
      <Sfx name="chime_success" at={2.45} />
      <Sfx name="pencil_loop" at={2.6} dur={0.5} />
      <Sfx name="pencil_loop" at={3.2} dur={0.8} gainDb={-3} />
      <Sfx name="highlight_swipe" at={4.05} dur={0.35} />
      <Sfx name="pop_soft" at={4.45} />
      <Sfx name="pop_soft" at={4.65} gainDb={-3} />

      <HandWrite
        text={getText('V3-S14', 'f_top')}
        startFrame={10}
        durationFrames={12}
        style={{
          position: 'absolute',
          left: 1100,
          top: 170,
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.KEY_EN,
          fontWeight: 400,
          fontSize: 64,
          color: COLORS.INK,
          zIndex: 22,
        }}
      />

      <HandWrite
        text={getText('V3-S14', 'f_main')}
        startFrame={22}
        durationFrames={22}
        style={{
          position: 'absolute',
          left: 1100,
          top: 290,
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.KEY_EN,
          fontWeight: 400,
          fontSize: 140,
          color: COLORS.INK,
          zIndex: 22,
        }}
      />

      <RedEllipse cx={1100} cy={250} rx={520} ry={170} startFrame={44} durationFrames={15} />

      <HandWrite
        text={getText('V3-S14', 'f_ar')}
        startFrame={62}
        durationFrames={12}
        rtl
        style={{
          position: 'absolute',
          left: 1100,
          top: 500,
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.HOOK,
          fontWeight: 700,
          fontSize: 80,
          color: COLORS.INK,
          zIndex: 22,
        }}
      />

      <Character src="karim_K5.png" x={280} height={680} baseY={1000} side="left" startFrame={70} />

      {frame >= 77 && (
        <div
          dir="ltr"
          style={{
            position: 'absolute',
            left: 1100,
            top: 630,
            transform: 'translate(-50%, -50%)',
            fontFamily: FONTS.BODY,
            fontWeight: 600,
            fontSize: 38,
            color: COLORS.INK,
            whiteSpace: 'nowrap',
            zIndex: 22,
          }}
        >
          {frame < 97 ? (
            <WordReveal text={getText('V3-S14', 'f_sub')} startFrame={77} durationFrames={19} rtl={false} />
          ) : (
            <HighlightText text={getText('V3-S14', 'f_sub')} startFrame={97} durationFrames={8} rtl={false} />
          )}
        </div>
      )}

      {/* Server icon with 3 VMs at (1760, 280) */}
      <Pop startFrame={107} style={{position: 'absolute', left: 1760 - 70, top: 280 - 70, zIndex: 22}}>
        <IconRack size={140} />
      </Pop>

      {/* وفّرنا! above Karim's head */}
      <Pop
        startFrame={112}
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
        {getText('V3-S14', 'karim_yay')}
      </Pop>

      <Caption text="ودي الـ Desktop & Service Virtualization بكل تفاصيلها!" />
      <SceneFade startFrame={127} durationFrames={17} />
    </AbsoluteFill>
  );
};

// ============================================================================
// MAIN V3 COMPOSITION (99.0s = 2376 frames @ 24fps)
// ============================================================================
export const V3: React.FC = () => {
  return (
    <AbsoluteFill>
      <Paper />
      <AbsoluteFill style={{zIndex: 1}}>
        {/* S1: 0.00 -> 5.50s (0..132) */}
        <Sequence from={0} durationInFrames={132}>
          <Scene1 />
        </Sequence>

        {/* S2: 5.50 -> 11.50s (132..276) */}
        <Sequence from={132} durationInFrames={144}>
          <Scene2 />
        </Sequence>

        {/* S3: 11.50 -> 19.00s (276..456) */}
        <Sequence from={276} durationInFrames={180}>
          <Scene3 />
        </Sequence>

        {/* S4: 19.00 -> 25.50s (456..612) */}
        <Sequence from={456} durationInFrames={156}>
          <Scene4 />
        </Sequence>

        {/* S5: 25.50 -> 31.50s (612..756) */}
        <Sequence from={612} durationInFrames={144}>
          <Scene5 />
        </Sequence>

        {/* S6: 31.50 -> 37.50s (756..900) */}
        <Sequence from={756} durationInFrames={144}>
          <Scene6 />
        </Sequence>

        {/* S7..S12: 37.50 -> 74.00s (900..1776, 876 frames) */}
        <Sequence from={900} durationInFrames={876}>
          <Scenes7To12 />
        </Sequence>

        {/* S12b: 74.00 -> 81.00s (1776..1944) */}
        <Sequence from={1776} durationInFrames={168}>
          <Scene12b />
        </Sequence>

        {/* S13: 81.00 -> 93.00s (1944..2232) */}
        <Sequence from={1944} durationInFrames={288}>
          <Scene13 />
        </Sequence>

        {/* S14: 93.00 -> 99.00s (2232..2376) */}
        <Sequence from={2232} durationInFrames={144}>
          <Scene14 />
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
