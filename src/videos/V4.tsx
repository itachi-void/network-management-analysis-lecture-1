// src/videos/V4.tsx
import React from 'react';
import {AbsoluteFill, Sequence, useCurrentFrame, interpolate, staticFile, Easing} from 'remotion';
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
  GlowPulse,
  PinnedPhoto,
  Tag,
  LayoutL,
  BidiText,
} from '../components';
import {
  IconCloud,
  IconPlayScreen,
  IconSmartphone,
  IconMusicHeadphones,
  IconSpeakerWaves,
  IconVideoCamera,
  IconTv,
  IconBigFile,
  IconSmallFile,
  IconPressVise,
} from '../icons';
import {texts} from './V4.data';

const getText = (scene: string, id: string): string => {
  const found = texts.find((t) => t.scene === scene && t.id === id);
  if (!found) {
    throw new Error(`Missing text in V4.data.ts for scene=${scene}, id=${id}`);
  }
  return found.text;
};

// ============================================================================
// SCENE 1 (0.00 -> 5.50s, 132 frames, LAYOUT_H)
// ============================================================================
const Scene1: React.FC = () => {
  const frame = useCurrentFrame();

  const items = [
    {id: 'ico1', x: 330, t: 2.0, sfx: 'media_play', Comp: IconPlayScreen},
    {id: 'ico2', x: 670, t: 2.4, sfx: 'pop_soft', Comp: IconSmartphone},
    {id: 'ico3', x: 1010, t: 2.8, sfx: 'pop_soft', Comp: IconMusicHeadphones},
  ];

  const cloudP = interpolate(frame, [77, 89], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  return (
    <AbsoluteFill>
      <AgendaChip topicNumber={3} topicTitle={getText('V4-S1', 'agenda_chip')} />
      <SlideBadge text="Lecture 1 · 4/8" />

      {/* Audio */}
      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="marker_loop" at={0.4} dur={1.1} />
      <Sfx name="marker_loop" at={1.55} dur={0.35} />
      <Sfx name="media_play" at={2.0} gainDb={-3} />
      <Sfx name="pop_soft" at={2.4} gainDb={-3} />
      <Sfx name="pop_soft" at={2.8} gainDb={-3} />
      <Sfx name="pencil_loop" at={3.2} dur={0.5} />
      <Sfx name="pencil_loop" at={4.0} dur={0.35} />

      <Character src="karim_K6.png" x={1520} height={820} baseY={1000} side="right" startFrame={0} />
      <NameOval name={getText('V4-S1', 'karim_name')} cx={1520} cy={120} startFrame={96} />

      <HandWrite
        text={getText('V4-S1', 'hook_title')}
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
          fontSize: 82,
          lineHeight: 1.3,
          color: COLORS.INK,
          zIndex: 20,
        }}
      />
      <HandUnderline x1={160} x2={1180} y={260} startFrame={37} durationFrames={8} rtl />

      {/* Cloud & Dashed lines at 3.20..3.70s (frames 77..89) */}
      {frame >= 77 && (
        <>
          <div style={{position: 'absolute', left: 670 - 80, top: 380 - 60, opacity: cloudP, zIndex: 16}}>
            <IconCloud size={160} />
          </div>
          <svg style={{position: 'absolute', left: 0, top: 0, width: 1920, height: 1080, pointerEvents: 'none', zIndex: 14}}>
            {[330, 670, 1010].map((ix, i) => (
              <line
                key={i}
                x1={ix}
                y1={560}
                x2={ix + (670 - ix) * cloudP}
                y2={560 + (420 - 560) * cloudP}
                stroke={COLORS.INK}
                strokeWidth={4}
                strokeDasharray="10 8"
              />
            ))}
          </svg>
        </>
      )}

      {/* 3 Icons at y=620 */}
      {items.map((it, idx) => {
        const sf = Math.round(it.t * 24);
        return (
          <Pop
            key={idx}
            startFrame={sf}
            style={{
              position: 'absolute',
              left: it.x - 70,
              top: 560,
              width: 140,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              zIndex: 18,
            }}
          >
            <it.Comp size={120} />
            <div
              dir="rtl"
              style={{
                marginTop: 10,
                fontFamily: FONTS.BODY,
                fontWeight: 500,
                fontSize: 32,
                color: COLORS.INK,
              }}
            >
              {getText('V4-S1', it.id)}
            </div>
          </Pop>
        );
      })}

      <Caption text="بتتفرج وبتكلّم وبتسمع على النت كل يوم... ده اسمه إيه؟" />
      <SceneFade startFrame={124} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 2 (5.50 -> 12.00s, 156 frames, LAYOUT_A)
// ============================================================================
const Scene2: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 4/8 · Slide 7" />

      {/* Audio */}
      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="pencil_loop" at={0.35} dur={0.6} />
      <Sfx name="marker_loop" at={1.0} dur={0.9} />
      <Sfx name="pencil_loop" at={1.95} dur={0.5} />
      <Sfx name="pencil_loop" at={2.55} dur={1.4} gainDb={-3} />
      <Sfx name="highlight_swipe" at={4.0} dur={0.3} />
      <Sfx name="highlight_swipe" at={4.3} dur={0.3} />
      <Sfx name="media_play" at={4.65} />
      <Sfx name="pop_soft" at={4.95} />
      <Sfx name="pencil_loop" at={5.2} dur={0.35} gainDb={-6} />

      <Character src="omar_O4.png" x={400} height={820} baseY={1000} side="left" startFrame={0} />
      <NameOval name={getText('V4-S2', 'omar_name')} cx={400} cy={120} startFrame={125} />

      <SketchBox x={700} y={130} w={1140} h={770} startFrame={8} drawDurationFrames={14} seed={402} />

      <HandWrite
        text={getText('V4-S2', 'title_en')}
        startFrame={24}
        durationFrames={22}
        style={{
          position: 'absolute',
          left: 1270,
          top: 220,
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.EN_TITLE,
          fontWeight: 700,
          fontSize: 58,
          color: COLORS.INK,
          zIndex: 22,
        }}
      />

      <HandWrite
        text={getText('V4-S2', 'title_ar')}
        startFrame={47}
        durationFrames={12}
        rtl
        style={{
          position: 'absolute',
          left: 1270,
          top: 320,
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.HOOK,
          fontWeight: 700,
          fontSize: 56,
          color: COLORS.INK,
          zIndex: 22,
        }}
      />

      {/* Sentence A at y=420..520 */}
      {frame >= 61 && (
        <div
          dir="ltr"
          aria-label={getText('V4-S2', 'sent_a')}
          style={{
            position: 'absolute',
            left: 760,
            top: 420,
            maxWidth: 1020,
            fontFamily: FONTS.BODY,
            fontWeight: 600,
            fontSize: 40,
            lineHeight: 1.4,
            color: COLORS.INK,
            zIndex: 22,
          }}
        >
          {frame < 96 ? (
            <WordReveal text={getText('V4-S2', 'sent_a')} startFrame={61} durationFrames={34} rtl={false} />
          ) : (
            <span>
              Multimedia network application refers to any network application that employs{' '}
              <HighlightText text="audio" startFrame={96} durationFrames={7} rtl={false} /> or{' '}
              {frame >= 103 ? <HighlightText text="video" startFrame={103} durationFrames={7} rtl={false} /> : 'video'}
              .
            </span>
          )}
        </div>
      )}

      {/* Speaker + audio at (1050, 720) */}
      <Pop
        startFrame={112}
        style={{
          position: 'absolute',
          left: 1050 - 70,
          top: 640,
          width: 140,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: 22,
        }}
      >
        <IconSpeakerWaves size={120} />
        <span style={{fontFamily: FONTS.EN_TITLE, fontWeight: 700, fontSize: 34, color: COLORS.INK, marginTop: 6}}>
          {getText('V4-S2', 'lbl_audio')}
        </span>
      </Pop>

      {/* Video camera + video at (1490, 720) */}
      <Pop
        startFrame={119}
        style={{
          position: 'absolute',
          left: 1490 - 70,
          top: 640,
          width: 140,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: 22,
        }}
      >
        <IconVideoCamera size={120} />
        <span style={{fontFamily: FONTS.EN_TITLE, fontWeight: 700, fontSize: 34, color: COLORS.INK, marginTop: 6}}>
          {getText('V4-S2', 'lbl_video')}
        </span>
      </Pop>

      <Caption text="يعني أي network application بيستخدم audio أو video." />
      <SceneFade startFrame={148} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 3 (12.00 -> 17.50s, 132 frames, LAYOUT_P)
// ============================================================================
const Scene3: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 4/8 · Slide 7" />

      {/* Audio */}
      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="page_turn" at={0.3} />
      <Sfx name="remote_click" at={0.9} />
      <Sfx name="pencil_loop" at={1.4} dur={0.35} />
      <Sfx name="pencil_loop" at={1.9} dur={0.5} />
      <Sfx name="marker_loop" at={2.45} dur={0.8} />
      <Sfx name="pencil_loop" at={3.3} dur={0.7} gainDb={-3} />
      <Sfx name="pop_soft" at={4.1} />

      <PinnedPhoto
        src="slides/s07_media_streaming.jpg"
        x={140}
        y={110}
        w={500}
        h={750}
        tiltDeg={-1.2}
        startFrame={7}
      />

      {/* Remote label + arrow to R_REMOTE (0-22%, 22-93%) -> approx (200, 500) */}
      <Tag text={getText('V4-S3', 'lbl_remote')} x={50} y={320} fontSize={30} color={COLORS.RED} startFrame={22} />
      <Arrow x1={140} y1={360} x2={210} y2={440} color={COLORS.RED} startFrame={22} durationFrames={8} />

      {/* Streaming box label + arrow to R_CUBE (27-99%, 49-95%) -> approx (450, 620) */}
      <Tag text={getText('V4-S3', 'lbl_box')} x={420} y={870} fontSize={30} color={COLORS.RED} startFrame={34} />
      <Arrow x1={520} y1={865} x2={470} y2={740} color={COLORS.RED} startFrame={34} durationFrames={8} />

      {/* Card x 760..1800, y 250..760 */}
      <SketchBox x={760} y={250} w={1040} h={510} startFrame={46} drawDurationFrames={12} seed={403} />

      <HandWrite
        text={getText('V4-S3', 'card_en')}
        startFrame={59}
        durationFrames={19}
        style={{
          position: 'absolute',
          left: 1280,
          top: 360,
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.EN_TITLE,
          fontWeight: 700,
          fontSize: 54,
          color: COLORS.INK,
          zIndex: 22,
        }}
      />

      {frame >= 79 && (
        <div
          dir="rtl"
          style={{
            position: 'absolute',
            left: 1280,
            top: 470,
            transform: 'translate(-50%, -50%)',
            fontFamily: FONTS.BODY,
            fontWeight: 500,
            fontSize: 38,
            color: COLORS.INK,
            whiteSpace: 'nowrap',
            zIndex: 22,
          }}
        >
          <WordReveal text={getText('V4-S3', 'card_ar')} startFrame={79} durationFrames={17} rtl />
        </div>
      )}

      {/* TV & Cloud icons with arrow at (1280, 630) */}
      <Pop startFrame={98} style={{position: 'absolute', left: 1080, top: 570, zIndex: 22}}>
        <IconCloud size={120} />
      </Pop>
      <Arrow x1={1220} y1={630} x2={1340} y2={630} color={COLORS.RED} startFrame={100} durationFrames={6} />
      <Pop startFrame={101} style={{position: 'absolute', left: 1360, top: 570, zIndex: 22}}>
        <IconTv size={120} />
      </Pop>

      <Caption text="زي الـ Media Streaming Device: فيديو وصوت من النت على طول." />
      <SceneFade startFrame={124} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 4 (17.50 -> 24.50s, 168 frames, LAYOUT_C)
// ============================================================================
const Scene4: React.FC = () => {
  const frame = useCurrentFrame();

  const rows = [
    {enId: 'row1_en', arId: 'row1_ar', t: 2.2},
    {enId: 'row2_en', arId: 'row2_ar', t: 3.5},
    {enId: 'row3_en', arId: 'row3_ar', t: 4.8},
  ];

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 4/8 · Slide 7" />

      {/* Audio */}
      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="pencil_loop" at={0.35} dur={0.6} />
      <Sfx name="pencil_loop" at={1.0} dur={0.83} gainDb={-3} />
      {rows.map((r, i) => (
        <React.Fragment key={i}>
          <Sfx name="pencil_loop" at={r.t} dur={0.6} gainDb={-3} />
          <Sfx name="check_soft" at={r.t + 0.6} />
          <Sfx name="highlight_swipe" at={r.t + 0.85} dur={0.3} gainDb={-3} />
        </React.Fragment>
      ))}

      <Character src="omar_O3.png" x={1540} height={820} baseY={1000} side="right" startFrame={0} />
      <Sparkle cx={1540} cy={220} startFrame={146} />

      <SketchBox x={80} y={140} w={1180} h={760} startFrame={8} drawDurationFrames={14} seed={404} />

      <div
        dir="ltr"
        style={{
          position: 'absolute',
          left: 140,
          top: 210,
          fontFamily: FONTS.BODY,
          fontWeight: 700,
          fontSize: 44,
          color: COLORS.INK,
          zIndex: 22,
        }}
      >
        <WordReveal text={getText('V4-S4', 'title_en')} startFrame={24} durationFrames={20} rtl={false} />
      </div>
      <HandUnderline x1={140} x2={820} y={275} startFrame={43} durationFrames={5} rtl={false} />

      {rows.map((r, idx) => {
        const ry = 340 + idx * 170;
        const wrF = Math.round(r.t * 24);
        const chkF = Math.round((r.t + 0.6) * 24);
        const hlF = Math.round((r.t + 0.85) * 24);
        const arF = Math.round((r.t + 0.9) * 24);
        const enText = getText('V4-S4', r.enId);
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
                  maxWidth: 960,
                  fontFamily: FONTS.BODY,
                  fontWeight: 600,
                  fontSize: idx === 2 ? 36 : 40,
                  lineHeight: 1.25,
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
                  top: ry + (idx === 2 ? 85 : 58),
                  fontFamily: FONTS.BODY,
                  fontWeight: 500,
                  fontSize: 28,
                  color: COLORS.MUTED,
                  opacity: Math.min(1, (frame - arF) / 5),
                  zIndex: 22,
                }}
              >
                {getText('V4-S4', r.arId)}
              </div>
            )}
          </React.Fragment>
        );
      })}

      <Caption text="هندرس خصائص الصوت والفيديو، والـ compression formats، والأنواع." />
      <SceneFade startFrame={160} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 5 (24.50 -> 30.50s, 144 frames, LAYOUT_D)
// ============================================================================
const Scene5: React.FC = () => {
  const frame = useCurrentFrame();

  // Squeeze animation 2.20..2.80s (frames 53..67)
  const sqP = interpolate(frame, [53, 67], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const pipeP = interpolate(frame, [84, 94], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const travelP = interpolate(frame, [98, 113], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 4/8 · Slide 7" />

      {/* Audio */}
      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="pop_soft" at={0.4} />
      <Sfx name="pencil_loop" at={0.58} dur={0.25} />
      <Sfx name="pencil_loop" at={1.1} dur={0.4} />
      <Sfx name="pencil_loop" at={1.75} dur={0.38} />
      <Sfx name="squeeze" at={2.2} />
      <Sfx name="pop_soft" at={2.9} />
      <Sfx name="pencil_loop" at={3.5} dur={0.4} />
      <Sfx name="pop_soft" at={4.0} gainDb={-3} />
      <Sfx name="whoosh_soft" at={4.1} gainDb={-6} />

      {/* Big File at (300, 450) */}
      <Pop startFrame={10} style={{position: 'absolute', left: 300 - 110, top: 450 - 140, zIndex: 18}}>
        <div style={{transform: `scaleX(${1 - 0.15 * sqP})`}}>
          <IconBigFile size={240} />
        </div>
      </Pop>
      <HandWrite
        text={getText('V4-S5', 'raw_en')}
        startFrame={14}
        durationFrames={6}
        style={{
          position: 'absolute',
          left: 300,
          top: 640,
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.EN_TITLE,
          fontWeight: 700,
          fontSize: 36,
          color: COLORS.INK,
          zIndex: 20,
        }}
      />
      {frame >= 18 && (
        <div
          dir="rtl"
          style={{
            position: 'absolute',
            left: 300,
            top: 690,
            transform: 'translate(-50%, -50%)',
            fontFamily: FONTS.BODY,
            fontWeight: 500,
            fontSize: 30,
            color: COLORS.RED,
            zIndex: 20,
          }}
        >
          {getText('V4-S5', 'raw_ar')}
        </div>
      )}

      {/* Arrow 1: x 500 -> 700 at y=450 */}
      <Arrow x1={500} y1={450} x2={700} y2={450} color={COLORS.INK} startFrame={26} durationFrames={10} />

      {/* Press Vise at (900, 450) */}
      <Pop startFrame={38} style={{position: 'absolute', left: 900 - 140, top: 450 - 130, zIndex: 19}}>
        <IconPressVise size={260} />
      </Pop>
      <HandWrite
        text={getText('V4-S5', 'vise_en')}
        startFrame={42}
        durationFrames={9}
        style={{
          position: 'absolute',
          left: 900,
          top: 300,
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.EN_TITLE,
          fontWeight: 700,
          fontSize: 34,
          color: COLORS.INK,
          zIndex: 22,
        }}
      />

      {/* Arrow 2: x 1060 -> 1220 at y=450 */}
      <Arrow x1={1060} y1={450} x2={1220} y2={450} color={COLORS.INK} startFrame={74} durationFrames={7} />

      {/* Small File at (1300, 450) */}
      <Pop
        startFrame={70}
        style={{
          position: 'absolute',
          left: 1300 - 55 + travelP * 380,
          top: 450 - 70,
          zIndex: 20,
        }}
      >
        <IconSmallFile size={120} />
      </Pop>
      {frame >= 76 && (
        <div
          dir="rtl"
          style={{
            position: 'absolute',
            left: 1300,
            top: 560,
            transform: 'translate(-50%, -50%)',
            fontFamily: FONTS.BODY,
            fontWeight: 500,
            fontSize: 30,
            color: COLORS.GREEN_DARK,
            zIndex: 20,
          }}
        >
          {getText('V4-S5', 'small_ar')}
        </div>
      )}

      {/* Network pipe: 2 parallel lines at y=430 and y=470 from x=1380 to 1700 */}
      {frame >= 84 && (
        <svg style={{position: 'absolute', left: 0, top: 0, width: 1920, height: 1080, pointerEvents: 'none', zIndex: 15}}>
          <line x1={1380} y1={430} x2={1380 + 320 * pipeP} y2={430} stroke={COLORS.INK} strokeWidth={4} />
          <line x1={1380} y1={470} x2={1380 + 320 * pipeP} y2={470} stroke={COLORS.INK} strokeWidth={4} />
        </svg>
      )}

      {/* Smartphone at (1780, 450) */}
      <Pop startFrame={96} style={{position: 'absolute', left: 1780 - 65, top: 450 - 75, zIndex: 20}}>
        <IconSmartphone size={135} />
      </Pop>

      {/* Examples under press vise */}
      {frame >= 115 && (
        <div
          dir="ltr"
          style={{
            position: 'absolute',
            left: 900,
            top: 640,
            transform: 'translate(-50%, -50%)',
            fontFamily: FONTS.BODY,
            fontWeight: 500,
            fontSize: 28,
            color: COLORS.MUTED,
            opacity: Math.min(1, (frame - 115) / 5),
            zIndex: 20,
          }}
        >
          {getText('V4-S5', 'ex_audio')}
        </div>
      )}
      {frame >= 120 && (
        <div
          dir="ltr"
          style={{
            position: 'absolute',
            left: 900,
            top: 690,
            transform: 'translate(-50%, -50%)',
            fontFamily: FONTS.BODY,
            fontWeight: 500,
            fontSize: 28,
            color: COLORS.MUTED,
            opacity: Math.min(1, (frame - 120) / 5),
            zIndex: 20,
          }}
        >
          {getText('V4-S5', 'ex_video')}
        </div>
      )}

      <Caption text="الصوت والفيديو حجمهم كبير... فلازم compression عشان الشبكة تستحمل." />
      <SceneFade startFrame={136} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 6 (30.50 -> 37.00s, 156 frames, LAYOUT_P: s16_voip_globe)
// ============================================================================
const Scene6: React.FC = () => {
  const devices = [
    {id: 'lbl_tablet', t: 2.0, tx: 180, ty: 340, gx: 630, gy: 400},
    {id: 'lbl_smart', t: 2.7, tx: 220, ty: 720, gx: 805, gy: 690},
    {id: 'lbl_ipphone', t: 3.4, tx: 1540, ty: 440, gx: 1175, gy: 495},
    {id: 'lbl_vidphone', t: 4.1, tx: 1540, ty: 720, gx: 1245, gy: 680},
  ];

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 4/8 · Slide 16" />

      {/* Audio */}
      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="marker_loop" at={0.3} dur={0.8} />
      <Sfx name="pop_soft" at={1.15} gainDb={-3} />
      <Sfx name="page_turn" at={1.3} />
      <Sfx name="pop_soft" at={2.0} gainDb={-6} />
      <Sfx name="pop_soft" at={2.7} gainDb={-6} />
      <Sfx name="phone_trill" at={3.4} />
      <Sfx name="pop_soft" at={4.1} gainDb={-6} />
      <Sfx name="pencil_loop" at={4.7} dur={0.35} />

      {/* Top-left Slide 16 Title + Dr. Tamer Fathy Tag */}
      <HandWrite
        text={getText('V4-S6', 's16_title')}
        startFrame={7}
        durationFrames={19}
        style={{
          position: 'absolute',
          left: 100,
          top: 60,
          fontFamily: FONTS.EN_TITLE,
          fontWeight: 700,
          fontSize: 48,
          color: COLORS.INK,
          zIndex: 25,
        }}
      />
      <Tag text={getText('V4-S6', 's16_author')} x={860} y={56} fontSize={32} color={COLORS.INK} startFrame={28} />

      <PinnedPhoto
        src="slides_up/s16_voip_globe.jpg"
        x={460}
        y={180}
        w={1000}
        h={706}
        tiltDeg={1}
        startFrame={31}
      />

      {/* 4 Device Labels + Arrows + GlowPulses */}
      {devices.map((d, idx) => {
        const sf = Math.round(d.t * 24);
        const fromX = d.tx < 960 ? d.tx + 210 : d.tx;
        return (
          <React.Fragment key={idx}>
            <GlowPulse cx={d.gx} cy={d.gy} r={60} startFrame={sf} />
            <Tag text={getText('V4-S6', d.id)} x={d.tx} y={d.ty} fontSize={30} color={COLORS.RED} startFrame={sf} />
            <Arrow x1={fromX} y1={d.ty + 25} x2={d.gx} y2={d.gy} color={COLORS.RED} startFrame={sf} durationFrames={8} />
          </React.Fragment>
        );
      })}

      {/* Internet tag on Globe at (930, 355) */}
      <Tag text={getText('V4-S6', 'lbl_net')} x={930} y={355} fontSize={30} color={COLORS.NAVY} centered startFrame={113} />

      <Caption text="الصوت والفيديو بيتنقلوا بين Tablet وSmartphone وIP Phone." />
      <SceneFade startFrame={148} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 7 (37.00 -> 43.50s, 156 frames, LAYOUT_P Phone Frame)
// ============================================================================
const Scene7: React.FC = () => {
  const frame = useCurrentFrame();
  const frameP = interpolate(frame, [7, 19], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const imgP = interpolate(frame, [20, 29], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  // Screen inside phone: x = 960 - 480 = 480, y = 480 - 320 = 160, w = 960, h = 639
  const sx = 480;
  const sy = 160;
  const sw = 960;
  const sh = 639;

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 4/8 · Slide 16" />

      {/* Audio */}
      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="pencil_loop" at={0.3} dur={0.5} />
      <Sfx name="media_play" at={0.85} />
      <Sfx name="marker_loop" at={1.4} dur={0.5} />
      <Sfx name="pencil_loop" at={1.95} dur={0.3} gainDb={-6} />
      <Sfx name="marker_loop" at={2.4} dur={0.5} />
      <Sfx name="pencil_loop" at={2.95} dur={0.3} gainDb={-6} />
      <Sfx name="marker_loop" at={3.4} dur={0.5} />
      <Sfx name="pencil_loop" at={3.95} dur={0.3} gainDb={-6} />
      <Sfx name="remote_click" at={4.4} />

      {/* Phone outer bezel: 1080x700 centered at (960, 480) */}
      {frame >= 7 && (
        <div
          style={{
            position: 'absolute',
            left: 960 - 540,
            top: 480 - 350,
            width: 1080,
            height: 700,
            borderRadius: 70,
            border: `6px solid ${COLORS.INK}`,
            backgroundColor: COLORS.INK,
            opacity: frameP,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 15,
          }}
        >
          <img
            src={staticFile('slides_up/s16_video_player.jpg')}
            alt="Video Player"
            style={{
              width: 960,
              height: 639,
              objectFit: 'fill',
              opacity: imgP,
              borderRadius: 12,
            }}
          />
        </div>
      )}

      {/* 3:07 (13-23%, 8-17.5%) */}
      <RedEllipse
        cx={sx + 0.18 * sw}
        cy={sy + 0.128 * sh}
        rx={0.065 * sw}
        ry={0.06 * sh}
        startFrame={34}
        durationFrames={12}
      />
      {frame >= 47 && (
        <div
          dir="rtl"
          style={{
            position: 'absolute',
            left: 560,
            top: 85,
            transform: 'translate(-50%, -50%)',
            fontFamily: FONTS.BODY,
            fontWeight: 600,
            fontSize: 32,
            color: COLORS.INK,
            zIndex: 25,
          }}
        >
          <WordReveal text={getText('V4-S7', 'note_seen')} startFrame={47} durationFrames={7} rtl />
        </div>
      )}

      {/* -39:04 (74.5-88%, 8-17.5%) */}
      <RedEllipse
        cx={sx + 0.812 * sw}
        cy={sy + 0.128 * sh}
        rx={0.08 * sw}
        ry={0.06 * sh}
        startFrame={58}
        durationFrames={12}
      />
      {frame >= 71 && (
        <div
          dir="rtl"
          style={{
            position: 'absolute',
            left: 1360,
            top: 85,
            transform: 'translate(-50%, -50%)',
            fontFamily: FONTS.BODY,
            fontWeight: 600,
            fontSize: 32,
            color: COLORS.INK,
            zIndex: 25,
          }}
        >
          <WordReveal text={getText('V4-S7', 'note_rem')} startFrame={71} durationFrames={7} rtl />
        </div>
      )}

      {/* 3G (20-30%, 0-7%) */}
      <RedEllipse
        cx={sx + 0.25 * sw}
        cy={sy + 0.035 * sh}
        rx={0.06 * sw}
        ry={0.045 * sh}
        startFrame={82}
        durationFrames={12}
      />
      {frame >= 95 && (
        <div
          dir="rtl"
          style={{
            position: 'absolute',
            left: 960,
            top: 870,
            transform: 'translate(-50%, -50%)',
            fontFamily: FONTS.BODY,
            fontWeight: 600,
            fontSize: 32,
            color: COLORS.INK,
            zIndex: 25,
          }}
        >
          <WordReveal text={getText('V4-S7', 'note_3g')} startFrame={95} durationFrames={7} rtl />
        </div>
      )}

      {/* Play button (45-58%, 70-85%) */}
      <GlowPulse cx={sx + 0.515 * sw} cy={sy + 0.775 * sh} r={55} startFrame={106} />

      <Caption text="ده Video streaming على الموبايل: الفيديو بيوصل وإنت بتتفرج." />
      <SceneFade startFrame={148} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 8 (43.50 -> 50.50s, 168 frames, LAYOUT_P: s16_cisco_phones)
// ============================================================================
const Scene8: React.FC = () => {
  const frame = useCurrentFrame();

  // PinnedPhoto x=360..1560 (w=1200), y=120..758 (h=638)
  const px = 374;
  const py = 134;
  const pw = 1172;
  const ph = 610;

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 4/8 · Slide 16" />

      {/* Audio */}
      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="page_turn" at={0.3} />
      <Sfx name="phone_trill" at={0.8} gainDb={-3} />
      <Sfx name="marker_loop" at={1.0} dur={0.8} />
      <Sfx name="highlight_swipe" at={1.85} dur={0.35} />
      <Sfx name="marker_loop" at={2.4} dur={0.5} />
      <Sfx name="marker_loop" at={3.1} dur={0.5} />
      <Sfx name="marker_loop" at={3.8} dur={0.4} />
      <Sfx name="pop_soft" at={4.5} />

      <PinnedPhoto
        src="slides_up/s16_cisco_phones.jpg"
        x={360}
        y={120}
        w={1200}
        h={638}
        tiltDeg={-0.8}
        startFrame={7}
      />

      {/* VoIP = Voice over IP at (960, 850) */}
      <div
        dir="ltr"
        style={{
          position: 'absolute',
          left: 960,
          top: 850,
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.EN_TITLE,
          fontWeight: 700,
          fontSize: 54,
          color: COLORS.INK,
          zIndex: 25,
        }}
      >
        {frame < 44 ? (
          <HandWrite text={getText('V4-S8', 'voip_en')} startFrame={24} durationFrames={19} />
        ) : (
          <HighlightText text={getText('V4-S8', 'voip_en')} startFrame={44} durationFrames={8} rtl={false} />
        )}
      </div>

      {/* P7 Wireless IP Phone (51-62%, 62-90%) */}
      <RedEllipse
        cx={px + 0.565 * pw}
        cy={py + 0.76 * ph}
        rx={0.065 * pw}
        ry={0.15 * ph}
        startFrame={58}
        durationFrames={12}
      />
      <Tag text={getText('V4-S8', 'lbl_wireless')} x={60} y={640} fontSize={30} color={COLORS.RED} startFrame={64} />
      <Arrow x1={350} y1={665} x2={px + 0.52 * pw} y2={py + 0.76 * ph} color={COLORS.RED} startFrame={64} durationFrames={7} />

      {/* P8 Color screen (63-93%, 50-97%) */}
      <RedEllipse
        cx={px + 0.78 * pw}
        cy={py + 0.735 * ph}
        rx={0.16 * pw}
        ry={0.23 * ph}
        startFrame={74}
        durationFrames={12}
      />
      <Tag text={getText('V4-S8', 'lbl_color')} x={1590} y={560} fontSize={30} color={COLORS.RED} startFrame={80} />
      <Arrow x1={1590} y1={585} x2={px + 0.9 * pw} y2={py + 0.73 * ph} color={COLORS.RED} startFrame={80} durationFrames={7} />

      {/* P2 Expansion module (80-94%, 13-46%) */}
      <RedEllipse
        cx={px + 0.87 * pw}
        cy={py + 0.295 * ph}
        rx={0.08 * pw}
        ry={0.17 * ph}
        startFrame={91}
        durationFrames={10}
      />
      <Tag text={getText('V4-S8', 'lbl_exp')} x={1580} y={280} fontSize={30} color={COLORS.RED} startFrame={96} />
      <Arrow x1={1580} y1={305} x2={px + 0.92 * pw} y2={py + 0.295 * ph} color={COLORS.RED} startFrame={96} durationFrames={7} />

      {/* 8 devices tag top-left of photo */}
      <Tag text={getText('V4-S8', 'tag_8dev')} x={340} y={85} fontSize={34} color={COLORS.RED} startFrame={108} />

      <Caption text="ودي IP Phones بتعمل VoIP: صوتك بيتحوّل IP packets على الشبكة." />
      <SceneFade startFrame={160} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 8b (50.50 -> 56.00s, 132 frames, LAYOUT_L Single Link)
// ============================================================================
const Scene8b: React.FC = () => {
  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 4/8" />

      {/* Single-link LAYOUT_L Audio */}
      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="marker_loop" at={0.2} dur={0.6} />
      <Sfx name="pencil_loop" at={0.85} dur={0.45} />
      <Sfx name="pencil_loop" at={1.4} dur={0.3} gainDb={-6} />
      <Sfx name="pop_soft" at={1.65} gainDb={-3} />
      <Sfx name="pencil_loop" at={1.95} dur={0.5} gainDb={-6} />
      <Sfx name="tick_soft" at={2.6} gainDb={-3} />

      <LayoutL
        centerTopicTitle={getText('V4-S8b', 'center_title')}
        centerSlideTag="Slides 7, 16"
        nextTopicTitle={getText('V4-S8b', 'next_topic')}
        nodes={[
          {
            position: 'N3',
            directionText: 'Slide 16 مع Slide 7',
            topicTitle: getText('V4-S8b', 'n3_topic'),
            arabicText: 'Slide 16 جاية في آخر المحاضرة، بس هي تكملة لموضوع Slide 7',
            labels: [getText('V4-S8b', 'lbl_s16'), getText('V4-S8b', 'lbl_dr')],
            crop: {
              src: 'slides_up/s16_voip_globe.jpg',
              region: {x0: 0, x1: 100, y0: 0, y1: 100},
            },
          },
        ]}
      />

      <Caption text="Slide 16 في آخر المحاضرة... بس هي نفس موضوع Slide 7." />
      <SceneFade startFrame={124} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 9 (56.00 -> 66.00s, 240 frames, LAYOUT_R: StudyCard)
// ============================================================================
const Scene9: React.FC = () => {
  const frame = useCurrentFrame();
  const showTitle = frame >= 18;
  const showTags = frame >= 30;
  const showLines = frame >= 32;
  const showBlocks = frame >= 36;
  const showGlossary = frame >= 79;

  const glossary = [
    {term: 'Multimedia network application', meaning: 'تطبيقات الشبكة متعددة الوسائط'},
    {term: 'audio / video', meaning: 'صوت / فيديو'},
    {term: 'compression format', meaning: 'صيغة ضغط (زي MP3 وH.264)'},
    {term: 'Media streaming device', meaning: 'جهاز بيشغّل فيديو وصوت من النت'},
    {term: 'VoIP (Voice over IP)', meaning: 'مكالمات صوت على شبكة IP'},
    {term: 'IP Phone · Video IP Phone', meaning: 'تليفون شبكي · تليفون شبكي بفيديو'},
  ];

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 4/8 · Slides 7, 16" />

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
                {['Slide 7', 'Slide 16'].map((tag, i) => (
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
              {/* Left Column: Verbatim Slide 7 & Slide 16 */}
              <div
                dir="ltr"
                style={{
                  flex: 1.7,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 20,
                  opacity: showBlocks ? 1 : 0,
                }}
              >
                {/* Slide 7 */}
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
                      Slide 7
                    </span>
                    <span style={{fontFamily: FONTS.BODY, fontWeight: 700, fontSize: 31, color: COLORS.INK}}>
                      {getText('V4-S9', 's7_title')}
                    </span>
                  </div>

                  <div
                    aria-label={getText('V4-S9', 's7_p1')}
                    style={{
                      fontFamily: FONTS.BODY,
                      fontWeight: 600,
                      fontSize: 26,
                      lineHeight: 1.48,
                      color: COLORS.INK,
                    }}
                  >
                    Multimedia network application refers to any network application that employs{' '}
                    <HighlightText text="audio or video" startFrame={0} durationFrames={1} rtl={false} />. In this
                    section, we will discuss the properties of video and audio, their{' '}
                    <HighlightText text="compression formats" startFrame={0} durationFrames={1} rtl={false} />, and the
                    different types of multimedia network applications.
                  </div>
                </div>

                {/* Slide 16 */}
                <div style={{display: 'flex', flexDirection: 'column', gap: 8, marginTop: 14}}>
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
                      Slide 16
                    </span>
                    <span style={{fontFamily: FONTS.BODY, fontWeight: 700, fontSize: 31, color: COLORS.INK}}>
                      {getText('V4-S9', 's16_title')}
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
                    {getText('V4-S9', 's16_author')}
                  </div>
                </div>
              </div>

              {showLines && (
                <div style={{width: 2, height: '94%', backgroundColor: COLORS.INK, alignSelf: 'center'}} />
              )}

              {/* Right Column: 6 Glossary rows */}
              <div
                dir="rtl"
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
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
                      height: 76,
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      dir="ltr"
                      style={{
                        fontFamily: FONTS.EN_TITLE,
                        fontWeight: 700,
                        fontSize: 26,
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
                        fontSize: 24,
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
// SCENE 10 (66.00 -> 72.00s, 144 frames, LAYOUT_F)
// ============================================================================
const Scene10: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 4/8" />

      {/* Audio */}
      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="marker_loop" at={0.4} dur={0.8} />
      <Sfx name="marker_loop" at={1.2} dur={0.7} />
      <Sfx name="marker_loop" at={1.95} dur={0.6} />
      <Sfx name="chime_success" at={2.55} />
      <Sfx name="pencil_loop" at={2.7} dur={0.6} />
      <Sfx name="pencil_loop" at={3.4} dur={0.7} gainDb={-3} />
      <Sfx name="highlight_swipe" at={4.15} dur={0.35} />
      <Sfx name="pop_soft" at={4.55} />
      <Sfx name="pop_soft" at={4.8} gainDb={-3} />

      <HandWrite
        text={getText('V4-S10', 'f_top')}
        startFrame={10}
        durationFrames={19}
        style={{
          position: 'absolute',
          left: 1100,
          top: 230,
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.KEY_EN,
          fontWeight: 400,
          fontSize: 120,
          color: COLORS.INK,
          zIndex: 22,
        }}
      />

      <HandWrite
        text={getText('V4-S10', 'f_main')}
        startFrame={29}
        durationFrames={17}
        style={{
          position: 'absolute',
          left: 1100,
          top: 350,
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.KEY_EN,
          fontWeight: 400,
          fontSize: 96,
          color: COLORS.INK,
          zIndex: 22,
        }}
      />

      <RedEllipse cx={1100} cy={290} rx={520} ry={180} startFrame={47} durationFrames={14} />

      <HandWrite
        text={getText('V4-S10', 'f_ar')}
        startFrame={65}
        durationFrames={14}
        rtl
        style={{
          position: 'absolute',
          left: 1100,
          top: 540,
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.HOOK,
          fontWeight: 700,
          fontSize: 64,
          color: COLORS.INK,
          zIndex: 22,
        }}
      />

      <Character src="karim_K6.png" x={280} height={680} baseY={1000} side="left" startFrame={70} />

      {frame >= 82 && (
        <div
          dir="rtl"
          style={{
            position: 'absolute',
            left: 1100,
            top: 660,
            transform: 'translate(-50%, -50%)',
            fontFamily: FONTS.BODY,
            fontWeight: 600,
            fontSize: 40,
            color: COLORS.INK,
            whiteSpace: 'nowrap',
            zIndex: 22,
          }}
        >
          {frame < 100 ? (
            <WordReveal text={getText('V4-S10', 'f_sub')} startFrame={82} durationFrames={17} rtl />
          ) : (
            <HighlightText text={getText('V4-S10', 'f_sub')} startFrame={100} durationFrames={8} rtl />
          )}
        </div>
      )}

      {/* Speaker & Video Camera icons at (1760, 260) and (1760, 400) */}
      <Pop startFrame={109} style={{position: 'absolute', left: 1760 - 60, top: 260 - 60, zIndex: 22}}>
        <IconSpeakerWaves size={120} />
      </Pop>
      <Pop startFrame={113} style={{position: 'absolute', left: 1760 - 60, top: 400 - 60, zIndex: 22}}>
        <IconVideoCamera size={120} />
      </Pop>

      {/* فهمت! above Karim */}
      <Pop
        startFrame={115}
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
        {getText('V4-S10', 'karim_yay')}
      </Pop>

      <Caption text="ده اسمه Multimedia Network Application." />
      <SceneFade startFrame={127} durationFrames={17} />
    </AbsoluteFill>
  );
};

// ============================================================================
// MAIN V4 COMPOSITION (72.0s = 1728 frames @ 24fps)
// ============================================================================
export const V4: React.FC = () => {
  return (
    <AbsoluteFill>
      <Paper />
      <AbsoluteFill style={{zIndex: 1}}>
        {/* S1: 0.00 -> 5.50s (0..132) */}
        <Sequence from={0} durationInFrames={132}>
          <Scene1 />
        </Sequence>

        {/* S2: 5.50 -> 12.00s (132..288) */}
        <Sequence from={132} durationInFrames={156}>
          <Scene2 />
        </Sequence>

        {/* S3: 12.00 -> 17.50s (288..420) */}
        <Sequence from={288} durationInFrames={132}>
          <Scene3 />
        </Sequence>

        {/* S4: 17.50 -> 24.50s (420..588) */}
        <Sequence from={420} durationInFrames={168}>
          <Scene4 />
        </Sequence>

        {/* S5: 24.50 -> 30.50s (588..732) */}
        <Sequence from={588} durationInFrames={144}>
          <Scene5 />
        </Sequence>

        {/* S6: 30.50 -> 37.00s (732..888) */}
        <Sequence from={732} durationInFrames={156}>
          <Scene6 />
        </Sequence>

        {/* S7: 37.00 -> 43.50s (888..1044) */}
        <Sequence from={888} durationInFrames={156}>
          <Scene7 />
        </Sequence>

        {/* S8: 43.50 -> 50.50s (1044..1212) */}
        <Sequence from={1044} durationInFrames={168}>
          <Scene8 />
        </Sequence>

        {/* S8b: 50.50 -> 56.00s (1212..1344) */}
        <Sequence from={1212} durationInFrames={132}>
          <Scene8b />
        </Sequence>

        {/* S9: 56.00 -> 66.00s (1344..1584) */}
        <Sequence from={1344} durationInFrames={240}>
          <Scene9 />
        </Sequence>

        {/* S10: 66.00 -> 72.00s (1584..1728) */}
        <Sequence from={1584} durationInFrames={144}>
          <Scene10 />
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
