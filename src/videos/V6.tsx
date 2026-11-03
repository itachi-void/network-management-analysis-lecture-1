// src/videos/V6.tsx
import React from 'react';
import {AbsoluteFill, Sequence, useCurrentFrame, interpolate, Easing} from 'remotion';
import {COLORS, FONTS} from '../theme';
import {Sfx} from '../lib/sfx';
import {
  Paper,
  SketchBox,
  HandUnderline,
  RedEllipse,
  HighlightText,
  CheckMark,
  CrossMark,
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
  SvgDiamond,
  LayoutL,
  BidiText,
} from '../components';
import {
  IconOfficeBuilding,
  IconGateOpen,
  IconPacketCube,
  IconLaptop,
  IconServerBox,
  IconFirewallWall,
  IconCloud,
  IconMagnifier,
  IconLock,
  IconDesktopPc,
  IconSwitch,
  IconRouter,
  IconServerTower,
  IconShield,
} from '../icons';
import {texts} from './V6.data';

const getText = (scene: string, id: string): string => {
  const found = texts.find((t) => t.scene === scene && t.id === id);
  if (!found) {
    throw new Error(`Missing text in V6.data.ts for scene=${scene}, id=${id}`);
  }
  return found.text;
};

// ============================================================================
// SCENE 1 (0.00 -> 5.50s, 132 frames, LAYOUT_H)
// ============================================================================
const Scene1: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      <AgendaChip topicNumber={5} topicTitle={getText('V6-S1', 'agenda_chip')} />
      <SlideBadge text="Lecture 1 · 6/8" />

      {/* Audio */}
      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="marker_loop" at={0.4} dur={1.1} />
      <Sfx name="marker_loop" at={1.55} dur={0.35} />
      <Sfx name="pencil_loop" at={2.0} dur={0.6} />
      <Sfx name="whoosh_soft" at={2.8} gainDb={-6} />
      <Sfx name="warn_soft" at={3.3} />
      <Sfx name="pencil_loop" at={3.8} dur={0.35} />

      <Character src="hacker_H1.png" x={1540} height={820} baseY={1000} side="right" startFrame={0} />
      <NameOval name={getText('V6-S1', 'shabah_name')} cx={1540} cy={120} startFrame={91} />

      <HandWrite
        text={getText('V6-S1', 'hook_title')}
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
      <HandUnderline x1={180} x2={1180} y={260} startFrame={37} durationFrames={8} rtl />

      {/* Office building at (360, 620) & Open Gate at (700, 680) */}
      <Pop startFrame={48} style={{position: 'absolute', left: 360 - 130, top: 620 - 150, zIndex: 16}}>
        <IconOfficeBuilding size={260} />
      </Pop>
      <Pop startFrame={54} style={{position: 'absolute', left: 700 - 70, top: 680 - 60, zIndex: 17}}>
        <IconGateOpen size={140} />
      </Pop>

      {/* 5 Red Packet Cubes flying in an arc from x=1300 to gate at (700, 680) */}
      {[0, 1, 2, 3, 4].map((i) => {
        const startF = 67 + i * 6;
        if (frame < startF) return null;
        const p = ((frame - startF) % 36) / 36;
        const px = interpolate(p, [0, 1], [1300, 700]);
        const py = interpolate(p, [0, 1], [560, 680]) - Math.sin(p * Math.PI) * 160;
        return (
          <div key={i} style={{position: 'absolute', left: px - 25, top: py - 25, zIndex: 22}}>
            <IconPacketCube size={55} variant="malicious" />
          </div>
        );
      })}

      <Caption text="الإنترنت مليان تهديدات... ولو البوابة مفتوحة أي هكر يدخل!" />
      <SceneFade startFrame={124} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 2 (5.50 -> 12.00s, 156 frames, LAYOUT_P + Card)
// ============================================================================
const Scene2: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 6/8 · Slide 9" />

      {/* Audio */}
      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="page_turn" at={0.3} />
      <Sfx name="stamp_thud" at={0.7} gainDb={-6} />
      <Sfx name="pencil_loop" at={0.9} dur={0.5} />
      <Sfx name="marker_loop" at={1.45} dur={0.9} />
      <Sfx name="pencil_loop" at={2.4} dur={0.5} />
      <Sfx name="pencil_loop" at={3.0} dur={1.2} gainDb={-3} />
      <Sfx name="highlight_swipe" at={4.25} dur={0.35} />
      <Sfx name="pop_soft" at={4.75} />
      <Sfx name="pop_soft" at={5.1} />

      <PinnedPhoto
        src="slides/s09_firewall_icon.png"
        x={140}
        y={150}
        w={480}
        h={720}
        tiltDeg={-1.2}
        startFrame={7}
      />

      <SketchBox x={700} y={140} w={1140} h={760} startFrame={22} drawDurationFrames={12} seed={602} />

      <HandWrite
        text={getText('V6-S2', 'title_en')}
        startFrame={35}
        durationFrames={22}
        style={{
          position: 'absolute',
          left: 1270,
          top: 250,
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.KEY_EN,
          fontWeight: 400,
          fontSize: 130,
          color: COLORS.INK,
          zIndex: 22,
        }}
      />

      <HandWrite
        text={getText('V6-S2', 'title_ar')}
        startFrame={58}
        durationFrames={12}
        rtl
        style={{
          position: 'absolute',
          left: 1270,
          top: 380,
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.HOOK,
          fontWeight: 700,
          fontSize: 60,
          color: COLORS.INK,
          zIndex: 22,
        }}
      />

      {/* Sentence 1 at y=470..570 */}
      {frame >= 72 && (
        <div
          dir="ltr"
          aria-label={getText('V6-S2', 'sent_1')}
          style={{
            position: 'absolute',
            left: 760,
            top: 470,
            maxWidth: 1020,
            fontFamily: FONTS.BODY,
            fontWeight: 600,
            fontSize: 40,
            lineHeight: 1.4,
            color: COLORS.INK,
            zIndex: 22,
          }}
        >
          {frame < 102 ? (
            <WordReveal text={getText('V6-S2', 'sent_1')} startFrame={72} durationFrames={29} rtl={false} />
          ) : (
            <span>
              A firewall is a software or hardware-based{' '}
              <HighlightText text="network security system" startFrame={102} durationFrames={8} rtl={false} />
            </span>
          )}
        </div>
      )}

      {/* Tag 1: x 820..1220, y 680..820 */}
      <Pop startFrame={114} style={{position: 'absolute', left: 820, top: 680, width: 400, height: 140, zIndex: 22}}>
        <SketchBox x={0} y={0} w={400} h={140} startFrame={0} drawDurationFrames={6} seed={6021}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 18, height: '100%'}}>
            <IconLaptop size={80} />
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <span dir="ltr" style={{fontFamily: FONTS.EN_TITLE, fontWeight: 700, fontSize: 36, color: COLORS.INK}}>
                {getText('V6-S2', 'tag1_en')}
              </span>
              <span dir="rtl" style={{fontFamily: FONTS.BODY, fontWeight: 500, fontSize: 28, color: COLORS.MUTED}}>
                {getText('V6-S2', 'tag1_ar')}
              </span>
            </div>
          </div>
        </SketchBox>
      </Pop>

      {/* Tag 2: x 1320..1720, y 680..820 */}
      <Pop startFrame={122} style={{position: 'absolute', left: 1320, top: 680, width: 400, height: 140, zIndex: 22}}>
        <SketchBox x={0} y={0} w={400} h={140} startFrame={0} drawDurationFrames={6} seed={6022}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 18, height: '100%'}}>
            <IconServerBox size={80} />
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <span dir="ltr" style={{fontFamily: FONTS.EN_TITLE, fontWeight: 700, fontSize: 34, color: COLORS.INK}}>
                {getText('V6-S2', 'tag2_en')}
              </span>
              <span dir="rtl" style={{fontFamily: FONTS.BODY, fontWeight: 500, fontSize: 28, color: COLORS.MUTED}}>
                {getText('V6-S2', 'tag2_ar')}
              </span>
            </div>
          </div>
        </SketchBox>
      </Pop>

      <Caption text="الـ Firewall = network security system... software أو hardware." />
      <SceneFade startFrame={148} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 3 (12.00 -> 18.00s, 144 frames, LAYOUT_D)
// ============================================================================
const Scene3: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 6/8 · Slide 9" />

      {/* Audio */}
      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="pencil_loop" at={0.3} dur={1.1} gainDb={-3} />
      <Sfx name="pop_soft" at={1.5} />
      <Sfx name="pop_soft" at={1.75} gainDb={-3} />
      <Sfx name="stamp_thud" at={2.0} gainDb={-3} />
      <Sfx name="pencil_loop" at={2.6} dur={0.8} />
      <Sfx name="pencil_loop" at={3.7} dur={0.8} />
      <Sfx name="highlight_swipe" at={4.8} dur={0.35} />

      {/* Top sentence */}
      {frame >= 7 && (
        <div
          dir="ltr"
          aria-label={getText('V6-S3', 'sent_2')}
          style={{
            position: 'absolute',
            left: 960,
            top: 130,
            transform: 'translate(-50%, -50%)',
            fontFamily: FONTS.BODY,
            fontWeight: 600,
            fontSize: 44,
            color: COLORS.INK,
            whiteSpace: 'nowrap',
            zIndex: 22,
          }}
        >
          {frame < 115 ? (
            <WordReveal text={getText('V6-S3', 'sent_2')} startFrame={7} durationFrames={26} rtl={false} />
          ) : (
            <span>
              that controls <HighlightText text="incoming and outgoing" startFrame={115} durationFrames={8} rtl={false} />{' '}
              network traffic
            </span>
          )}
        </div>
      )}

      {/* Office building at (330, 560) */}
      <Pop startFrame={36} style={{position: 'absolute', left: 330 - 110, top: 560 - 130, display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 18}}>
        <IconOfficeBuilding size={220} />
        <span dir="rtl" style={{fontFamily: FONTS.BODY, fontWeight: 500, fontSize: 30, color: COLORS.INK, marginTop: 8}}>
          {getText('V6-S3', 'our_net')}
        </span>
      </Pop>

      {/* Cloud + Internet at (1590, 560) */}
      <Pop startFrame={42} style={{position: 'absolute', left: 1590 - 110, top: 560 - 100, display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 18}}>
        <IconCloud size={220} />
        <span dir="ltr" style={{fontFamily: FONTS.EN_TITLE, fontWeight: 700, fontSize: 34, color: COLORS.INK, marginTop: 6}}>
          {getText('V6-S3', 'internet')}
        </span>
      </Pop>

      {/* Firewall Wall at (960, 560) */}
      <Pop startFrame={48} style={{position: 'absolute', left: 960 - 130, top: 560 - 130, zIndex: 20}}>
        <IconFirewallWall size={260} />
      </Pop>

      {/* Incoming Arrow (1450, 500) -> (480, 500) */}
      <Arrow x1={1450} y1={500} x2={480} y2={500} color={COLORS.INK} strokeWidth={5} startFrame={62} durationFrames={19} bow={0} />
      {frame >= 82 && (
        <div
          style={{
            position: 'absolute',
            left: 1200,
            top: 445,
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            zIndex: 22,
          }}
        >
          <span dir="ltr" style={{fontFamily: FONTS.EN_TITLE, fontWeight: 700, fontSize: 34, color: COLORS.INK}}>
            {getText('V6-S3', 'inc_en')}
          </span>
          <span dir="rtl" style={{fontFamily: FONTS.BODY, fontWeight: 500, fontSize: 28, color: COLORS.MUTED}}>
            ({getText('V6-S3', 'inc_ar')})
          </span>
        </div>
      )}

      {/* Outgoing Arrow (480, 640) -> (1450, 640) */}
      <Arrow x1={480} y1={640} x2={1450} y2={640} color={COLORS.INK} strokeWidth={5} startFrame={89} durationFrames={19} bow={0} />
      {frame >= 108 && (
        <div
          style={{
            position: 'absolute',
            left: 720,
            top: 695,
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            zIndex: 22,
          }}
        >
          <span dir="ltr" style={{fontFamily: FONTS.EN_TITLE, fontWeight: 700, fontSize: 34, color: COLORS.INK}}>
            {getText('V6-S3', 'out_en')}
          </span>
          <span dir="rtl" style={{fontFamily: FONTS.BODY, fontWeight: 500, fontSize: 28, color: COLORS.MUTED}}>
            ({getText('V6-S3', 'out_ar')})
          </span>
        </div>
      )}

      <Caption text="بيتحكّم في الـ incoming والـ outgoing network traffic." />
      <SceneFade startFrame={136} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 4 (18.00 -> 25.00s, 168 frames, LAYOUT_D Packet Inspection)
// ============================================================================
const Scene4: React.FC = () => {
  const frame = useCurrentFrame();

  // P1 (safe): 2.10..2.70s (50..65) 1500->1120, wait 65..77, 3.20..3.70s (77..89) 1120->460
  let p1X = 1500;
  if (frame >= 50 && frame < 65) p1X = interpolate(frame, [50, 65], [1500, 1120]);
  else if (frame >= 65 && frame < 77) p1X = 1120;
  else if (frame >= 77) p1X = interpolate(frame, [77, 89], [1120, 460], {extrapolateRight: 'clamp'});

  // P2 (malicious): 3.80..4.30s (91..103) 1500->1120, wait 103..113, bounce 113..122 (x+200, rot 20, fade)
  let p2X = 1500;
  let p2Rot = 0;
  let p2Op = 1;
  if (frame >= 91 && frame < 103) p2X = interpolate(frame, [91, 103], [1500, 1120]);
  else if (frame >= 103 && frame < 113) p2X = 1120;
  else if (frame >= 113) {
    const bp = interpolate(frame, [113, 122], [0, 1], {extrapolateRight: 'clamp'});
    p2X = 1120 + bp * 200;
    p2Rot = bp * 20;
    p2Op = 1 - bp;
  }

  // P3 (safe): 5.20..5.60s (125..134) 1500->1120, wait 134..143, 5.95..6.40s (143..154) 1120->540
  let p3X = 1500;
  if (frame >= 125 && frame < 134) p3X = interpolate(frame, [125, 134], [1500, 1120]);
  else if (frame >= 134 && frame < 143) p3X = 1120;
  else if (frame >= 143) p3X = interpolate(frame, [143, 154], [1120, 540], {extrapolateRight: 'clamp'});

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 6/8 · Slide 9" />

      {/* Audio */}
      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="pencil_loop" at={0.3} dur={1.4} gainDb={-3} />
      <Sfx name="radar_ping" at={2.7} gainDb={-6} />
      <Sfx name="check_soft" at={3.1} />
      <Sfx name="pencil_loop" at={3.7} dur={0.35} gainDb={-6} />
      <Sfx name="radar_ping" at={4.3} gainDb={-6} />
      <Sfx name="bonk_soft" at={4.7} />
      <Sfx name="pencil_loop" at={4.95} dur={0.3} gainDb={-6} />
      <Sfx name="check_soft" at={5.9} gainDb={-3} />

      {/* Top sentence */}
      {frame >= 7 && (
        <div
          dir="ltr"
          style={{
            position: 'absolute',
            left: 960,
            top: 145,
            transform: 'translate(-50%, -50%)',
            maxWidth: 1500,
            textAlign: 'center',
            fontFamily: FONTS.BODY,
            fontWeight: 600,
            fontSize: 40,
            lineHeight: 1.35,
            color: COLORS.INK,
            zIndex: 22,
          }}
        >
          <WordReveal text={getText('V6-S4', 'sent_3')} startFrame={7} durationFrames={34} rtl={false} />
        </div>
      )}

      {/* Building, Wall, Cloud, Magnifier */}
      {frame >= 43 && (
        <div style={{opacity: Math.min(1, (frame - 43) / 7)}}>
          <div style={{position: 'absolute', left: 300 - 110, top: 600 - 130, zIndex: 16}}>
            <IconOfficeBuilding size={220} />
          </div>
          <div style={{position: 'absolute', left: 960 - 130, top: 600 - 130, zIndex: 20}}>
            <IconFirewallWall size={260} />
          </div>
          <div style={{position: 'absolute', left: 960 - 60, top: 380 - 60, zIndex: 22}}>
            <IconMagnifier size={120} />
          </div>
          <div style={{position: 'absolute', left: 1620 - 110, top: 600 - 100, zIndex: 16}}>
            <IconCloud size={220} />
          </div>
        </div>
      )}

      {/* P1 */}
      {frame >= 50 && (
        <div style={{position: 'absolute', left: p1X - 35, top: 600 - 35, display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 24}}>
          <IconPacketCube size={70} variant="safe" />
          <span style={{fontFamily: FONTS.EN_TITLE, fontWeight: 700, fontSize: 24, color: COLORS.INK}}>
            {getText('V6-S4', 'pkt')}
          </span>
        </div>
      )}
      {frame >= 74 && frame < 91 && <CheckMark x={1120} y={510} startFrame={74} />}
      {frame >= 89 && (
        <HandWrite
          text={getText('V6-S4', 'lbl_allow')}
          startFrame={89}
          durationFrames={8}
          style={{
            position: 'absolute',
            left: 520,
            top: 470,
            transform: 'translate(-50%, -50%)',
            fontFamily: FONTS.EN_TITLE,
            fontWeight: 700,
            fontSize: 34,
            color: COLORS.GREEN_TEXT,
            zIndex: 25,
          }}
        />
      )}

      {/* P2 */}
      {frame >= 91 && p2Op > 0 && (
        <div
          style={{
            position: 'absolute',
            left: p2X - 35,
            top: 600 - 35,
            opacity: p2Op,
            transform: `rotate(${p2Rot}deg)`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex: 24,
          }}
        >
          <IconPacketCube size={70} variant="malicious" />
          <span style={{fontFamily: FONTS.EN_TITLE, fontWeight: 700, fontSize: 24, color: COLORS.RED}}>
            {getText('V6-S4', 'pkt')}
          </span>
        </div>
      )}
      {frame >= 113 && frame < 130 && <CrossMark x={1120} y={510} startFrame={113} />}
      {frame >= 119 && (
        <HandWrite
          text={getText('V6-S4', 'lbl_not')}
          startFrame={119}
          durationFrames={7}
          style={{
            position: 'absolute',
            left: 1220,
            top: 470,
            transform: 'translate(-50%, -50%)',
            fontFamily: FONTS.EN_TITLE,
            fontWeight: 700,
            fontSize: 34,
            color: COLORS.RED,
            zIndex: 25,
          }}
        />
      )}

      {/* P3 */}
      {frame >= 125 && (
        <div style={{position: 'absolute', left: p3X - 35, top: 600 - 35, display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 24}}>
          <IconPacketCube size={70} variant="safe" />
          <span style={{fontFamily: FONTS.EN_TITLE, fontWeight: 700, fontSize: 24, color: COLORS.INK}}>
            {getText('V6-S4', 'pkt')}
          </span>
        </div>
      )}
      {frame >= 142 && <CheckMark x={1120} y={510} startFrame={142} />}

      <Caption text="بيفحص كل data packet... ويقرّر: تعدّي ولا لأ." />
      <SceneFade startFrame={160} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 5 (25.00 -> 31.00s, 144 frames, LAYOUT_D)
// ============================================================================
const Scene5: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 6/8 · Slide 9" />

      {/* Audio */}
      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="pencil_loop" at={0.3} dur={1.3} gainDb={-3} />
      <Sfx name="highlight_swipe" at={1.7} dur={0.3} />
      <Sfx name="highlight_swipe" at={2.05} dur={0.35} />
      <Sfx name="bonk_soft" at={3.1} gainDb={-6} />
      <Sfx name="bonk_soft" at={3.5} gainDb={-6} />
      <Sfx name="bonk_soft" at={3.9} gainDb={-6} />
      <Sfx name="lock_click" at={4.3} />

      {/* Top sentence */}
      {frame >= 7 && (
        <div
          dir="ltr"
          aria-label={getText('V6-S5', 'sent_4')}
          style={{
            position: 'absolute',
            left: 960,
            top: 145,
            transform: 'translate(-50%, -50%)',
            maxWidth: 1450,
            textAlign: 'center',
            fontFamily: FONTS.BODY,
            fontWeight: 600,
            fontSize: 42,
            lineHeight: 1.35,
            color: COLORS.INK,
            zIndex: 22,
          }}
        >
          {frame < 41 ? (
            <WordReveal text={getText('V6-S5', 'sent_4')} startFrame={7} durationFrames={31} rtl={false} />
          ) : (
            <span>
              Firewall protection is <HighlightText text="essential" startFrame={41} durationFrames={7} rtl={false} />{' '}
              to secure a network from{' '}
              {frame >= 49 ? (
                <HighlightText text="external threats" startFrame={49} durationFrames={8} rtl={false} />
              ) : (
                'external threats'
              )}
              .
            </span>
          )}
        </div>
      )}

      {frame >= 60 && (
        <div style={{opacity: Math.min(1, (frame - 60) / 7)}}>
          <div style={{position: 'absolute', left: 330 - 110, top: 620 - 130, zIndex: 16}}>
            <IconOfficeBuilding size={220} />
          </div>
          <div style={{position: 'absolute', left: 960 - 130, top: 600 - 130, zIndex: 20}}>
            <IconFirewallWall size={260} />
          </div>
        </div>
      )}

      <Character src="hacker_H2.png" x={1560} height={700} baseY={1000} side="right" startFrame={65} />

      {/* 3 Red packets hitting the wall and falling at 3.10, 3.50, 3.90s */}
      {[3.1, 3.5, 3.9].map((t, idx) => {
        const hitF = Math.round(t * 24);
        const startF = hitF - 8;
        if (frame < startF || frame > hitF + 12) return null;
        let px = 1350;
        let py = 540 + idx * 45;
        if (frame <= hitF) {
          px = interpolate(frame, [startF, hitF], [1350, 1100]);
        } else {
          const fp = (frame - hitF) / 12;
          px = 1100 + fp * 80;
          py = py + fp * fp * 220;
        }
        return (
          <div key={idx} style={{position: 'absolute', left: px - 30, top: py - 30, zIndex: 24}}>
            <IconPacketCube size={60} variant="malicious" />
          </div>
        );
      })}

      {/* Lock above building at (330, 420) */}
      <Pop startFrame={103} style={{position: 'absolute', left: 330 - 60, top: 420 - 60, zIndex: 22}}>
        <IconLock size={120} />
      </Pop>

      <Caption text="حماية الـ Firewall أساسية ضد الـ external threats." />
      <SceneFade startFrame={136} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 6 (31.00 -> 37.00s, 144 frames, LAYOUT_C)
// ============================================================================
const Scene6: React.FC = () => {
  const frame = useCurrentFrame();

  const rows = [
    {enId: 'row1_en', arId: 'row1_ar', t: 2.2},
    {enId: 'row2_en', arId: 'row2_ar', t: 3.4},
  ];

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 6/8 · Slide 9" />

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
      <Sfx name="pencil_loop" at={4.7} dur={0.35} gainDb={-6} />

      <Character src="omar_O3.png" x={1580} height={820} baseY={1000} side="right" startFrame={0} />
      <NameOval name={getText('V6-S6', 'omar_name')} cx={1580} cy={120} startFrame={113} />
      <Sparkle cx={1580} cy={220} startFrame={122} />

      <SketchBox x={80} y={160} w={1160} h={720} startFrame={8} drawDurationFrames={14} seed={606} />

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
        <WordReveal text={getText('V6-S6', 'title_en')} startFrame={24} durationFrames={20} rtl={false} />
      </div>
      <HandUnderline x1={140} x2={820} y={295} startFrame={43} durationFrames={5} rtl={false} />

      {rows.map((r, idx) => {
        const ry = 380 + idx * 180;
        const wrF = Math.round(r.t * 24);
        const chkF = Math.round((r.t + 0.6) * 24);
        const hlF = Math.round((r.t + 0.85) * 24);
        const arF = Math.round((r.t + 0.9) * 24);
        const enText = getText('V6-S6', r.enId);
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
                {getText('V6-S6', r.arId)}
              </div>
            )}
          </React.Fragment>
        );
      })}

      <Caption text="هنشوف الـ firewalls بتشتغل إزاي، ودورها في الـ network management." />
      <SceneFade startFrame={136} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENES 7 & 8 COMBINED VECTOR FIGURE 8.33 (37.00 -> 51.00s, 336 frames)
// S7: 0..168 (7.0s)
// S8: 168..336 (7.0s)
// Coordinate mapping: X = 311 + x * 0.95, Y = 140 + y * 0.95
// ============================================================================
const fx = (x: number) => 311 + x * 0.95;
const fy = (y: number) => 140 + y * 0.95;

const Scenes7And8: React.FC = () => {
  const frame = useCurrentFrame();

  const blobP = interpolate(frame, [31, 46], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const fwDropP = interpolate(frame, [168 + 5, 168 + 17], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.back(1.1)),
  });

  const blobPts: [number, number][] = [
    [300, 60],
    [520, 52],
    [700, 75],
    [800, 150],
    [840, 330],
    [810, 520],
    [700, 600],
    [560, 640],
    [380, 645],
    [270, 600],
    [250, 450],
    [215, 300],
    [225, 130],
  ];
  const blobPath =
    blobPts.map(([px, py], i) => `${i === 0 ? 'M' : 'L'} ${fx(px).toFixed(1)} ${fy(py).toFixed(1)}`).join(' ') + ' Z';

  // Green dot from Internet (1000,301) through Firewall to Network (460,301) at S8 4.40..5.10s (168+106..168+122)
  const gDotP = interpolate(frame, [168 + 106, 168 + 122], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  // Red dot from Internet (1000,330) stopping at Firewall (745,330) at S8 5.00..5.40s (168+120..168+130)
  const rDotP = interpolate(frame, [168 + 120, 168 + 130], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 6/8 · Slide 10" />

      {/* S7 Audio */}
      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="marker_loop" at={0.3} dur={0.8} />
      <Sfx name="whoosh_soft" at={1.3} gainDb={-6} />
      <Sfx name="pop_soft" at={2.0} gainDb={-3} />
      <Sfx name="pencil_loop" at={2.2} dur={0.2} />
      <Sfx name="pop_soft" at={2.45} gainDb={-6} />
      <Sfx name="pencil_loop" at={2.6} dur={0.2} />
      <Sfx name="pop_soft" at={3.05} gainDb={-6} />
      <Sfx name="pencil_loop" at={3.2} dur={0.2} />
      <Sfx name="pop_soft" at={3.65} gainDb={-6} />
      <Sfx name="pencil_loop" at={3.8} dur={0.2} />
      <Sfx name="pop_soft" at={4.05} gainDb={-6} />
      <Sfx name="pencil_loop" at={4.4} dur={0.6} />

      {/* S8 Audio (offset 7.0) */}
      <Sfx name="whoosh_soft" at={7.0 + 0.2} gainDb={-6} />
      <Sfx name="stamp_thud" at={7.0 + 0.7} />
      <Sfx name="pop_soft" at={7.0 + 0.8} gainDb={-6} />
      <Sfx name="pencil_loop" at={7.0 + 0.9} dur={0.2} />
      <Sfx name="pencil_loop" at={7.0 + 1.2} dur={0.4} />
      <Sfx name="pencil_loop" at={7.0 + 1.7} dur={0.6} />
      <Sfx name="marker_loop" at={7.0 + 2.3} dur={0.5} />
      <Sfx name="pencil_loop" at={7.0 + 2.9} dur={1.4} gainDb={-6} />
      <Sfx name="bonk_soft" at={7.0 + 5.4} />

      {/* Top-left Slide 10 Title + Arabic */}
      <HandWrite
        text={getText('V6-S7', 's10_title')}
        startFrame={7}
        durationFrames={19}
        style={{
          position: 'absolute',
          left: 100,
          top: 40,
          fontFamily: FONTS.EN_TITLE,
          fontWeight: 700,
          fontSize: 46,
          color: COLORS.INK,
          zIndex: 25,
        }}
      />
      {frame >= 28 && (
        <div
          dir="rtl"
          style={{
            position: 'absolute',
            left: 100,
            top: 95,
            fontFamily: FONTS.BODY,
            fontWeight: 500,
            fontSize: 30,
            color: COLORS.MUTED,
            opacity: Math.min(1, (frame - 28) / 5),
            zIndex: 25,
          }}
        >
          {getText('V6-S7', 's10_ar')}
        </div>
      )}

      {/* ==================== VECTOR FIGURE 8.33 ==================== */}
      <svg style={{position: 'absolute', left: 0, top: 0, width: 1920, height: 1080, pointerEvents: 'none', zIndex: 10}}>
        {/* Blob */}
        {frame >= 31 && (
          <path
            d={blobPath}
            fill={COLORS.FW_BLOB}
            stroke="#C9D6E0"
            strokeWidth={2}
            opacity={blobP}
          />
        )}

        {/* Network Lines */}
        {frame >= 53 && <line x1={fx(300)} y1={fy(240)} x2={fx(345)} y2={fy(290)} stroke={COLORS.INK} strokeWidth={3} />}
        {frame >= 62 && (
          <>
            <line x1={fx(322)} y1={fy(305)} x2={fx(282)} y2={fy(312)} stroke={COLORS.INK} strokeWidth={3} />
            <line x1={fx(335)} y1={fy(318)} x2={fx(302)} y2={fy(383)} stroke={COLORS.INK} strokeWidth={3} />
          </>
        )}
        {frame >= 68 && <line x1={fx(386)} y1={fy(301)} x2={fx(424)} y2={fy(301)} stroke={COLORS.INK} strokeWidth={3} />}
        {frame >= 77 && (
          <>
            <line x1={fx(440)} y1={fy(282)} x2={fx(428)} y2={fy(250)} stroke={COLORS.INK} strokeWidth={3} />
            <line x1={fx(488)} y1={fy(282)} x2={fx(500)} y2={fy(250)} stroke={COLORS.INK} strokeWidth={3} />
            <line x1={fx(440)} y1={fy(320)} x2={fx(428)} y2={fy(345)} stroke={COLORS.INK} strokeWidth={3} />
            <line x1={fx(488)} y1={fy(320)} x2={fx(500)} y2={fy(345)} stroke={COLORS.INK} strokeWidth={3} />
          </>
        )}
        {frame >= 83 && <line x1={fx(503)} y1={fy(301)} x2={fx(540)} y2={fy(301)} stroke={COLORS.INK} strokeWidth={3} />}
        {frame >= 91 && (
          <>
            <line x1={fx(552)} y1={fy(283)} x2={fx(538)} y2={fy(250)} stroke={COLORS.INK} strokeWidth={3} />
            <line x1={fx(592)} y1={fy(283)} x2={fx(602)} y2={fy(250)} stroke={COLORS.INK} strokeWidth={3} />
            <line x1={fx(570)} y1={fy(318)} x2={fx(565)} y2={fy(385)} stroke={COLORS.INK} strokeWidth={3} />
          </>
        )}

        {/* S8: Switch2 -> Firewall & Firewall -> Internet */}
        {frame >= 168 + 22 && <line x1={fx(604)} y1={fy(301)} x2={fx(668)} y2={fy(301)} stroke={COLORS.INK} strokeWidth={3} />}
        {frame >= 168 + 41 && <line x1={fx(745)} y1={fy(301)} x2={fx(948)} y2={fy(301)} stroke={COLORS.INK} strokeWidth={3} />}

        {/* S8: Firewall Glass Plane parallelogram (647,12) (790,98) (790,565) (647,480) */}
        {frame >= 168 + 5 && (
          <g transform={`translate(0, ${(1 - fwDropP) * -700})`}>
            <polygon
              points={`${fx(647)},${fy(12)} ${fx(790)},${fy(98)} ${fx(790)},${fy(565)} ${fx(647)},${fy(480)}`}
              fill={COLORS.FW_PLANE}
              stroke="#5E8FAD"
              strokeWidth={2}
            />
          </g>
        )}

        {/* S8: Public Internet Cloud (940,215)->(1190,378) */}
        {frame >= 168 + 55 && (
          <ellipse
            cx={fx(1065)}
            cy={fy(296)}
            rx={120}
            ry={78}
            fill={COLORS.FW_BLOB}
            stroke="#5E8FAD"
            strokeWidth={2}
          />
        )}

        {/* S8: Green & Red traffic dots */}
        {frame >= 168 + 106 && frame <= 168 + 124 && (
          <circle
            cx={fx(1000 - gDotP * 540)}
            cy={fy(301)}
            r={9}
            fill={COLORS.GREEN}
            stroke={COLORS.GREEN_DARK}
            strokeWidth={2}
          />
        )}
        {frame >= 168 + 120 && (
          <circle
            cx={fx(1000 - rDotP * 255)}
            cy={fy(330)}
            r={9}
            fill={COLORS.RED}
          />
        )}
      </svg>

      {/* Network Devices */}
      <Pop startFrame={48} style={{position: 'absolute', left: fx(250), top: fy(135), zIndex: 14}}>
        <IconDesktopPc size={90} />
      </Pop>
      <Pop startFrame={59} style={{position: 'absolute', left: fx(322), top: fy(275), zIndex: 14}}>
        <IconSwitch size={64} />
      </Pop>
      <Pop startFrame={73} style={{position: 'absolute', left: fx(424), top: fy(270), zIndex: 14}}>
        <IconRouter size={74} />
      </Pop>
      <Pop startFrame={88} style={{position: 'absolute', left: fx(540), top: fy(275), zIndex: 14}}>
        <IconSwitch size={64} />
      </Pop>
      <Pop startFrame={97} style={{position: 'absolute', left: fx(526), top: fy(385), zIndex: 14}}>
        <IconServerTower size={95} />
      </Pop>

      {/* Administered network label at (408, 562) */}
      <HandWrite
        text={getText('V6-S7', 'adm_net')}
        startFrame={106}
        durationFrames={14}
        style={{
          position: 'absolute',
          left: fx(408),
          top: fy(562),
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.BODY,
          fontWeight: 500,
          fontSize: 32,
          color: COLORS.INK,
          zIndex: 18,
        }}
      />
      {frame >= 122 && frame < 164 && (
        <div
          dir="rtl"
          style={{
            position: 'absolute',
            left: fx(408),
            top: fy(605),
            transform: 'translate(-50%, -50%)',
            fontFamily: FONTS.BODY,
            fontWeight: 500,
            fontSize: 28,
            color: COLORS.MUTED,
            zIndex: 18,
          }}
        >
          {getText('V6-S7', 'adm_note')}
        </div>
      )}

      {/* S8: Router & Server inside Firewall */}
      <Pop startFrame={168 + 19} style={{position: 'absolute', left: fx(705), top: fy(207), zIndex: 15}}>
        <IconServerTower size={90} />
      </Pop>
      <Pop startFrame={168 + 19} style={{position: 'absolute', left: fx(668), top: fy(275), zIndex: 16}}>
        <IconRouter size={72} />
      </Pop>
      <HandWrite
        text={getText('V6-S8', 'fw_lbl')}
        startFrame={168 + 29}
        durationFrames={10}
        style={{
          position: 'absolute',
          left: fx(716),
          top: fy(360),
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.BODY,
          fontWeight: 500,
          fontSize: 32,
          color: COLORS.INK,
          zIndex: 18,
        }}
      />

      {/* S8: Public Internet label */}
      <HandWrite
        text={getText('V6-S8', 'pub_net')}
        startFrame={168 + 56}
        durationFrames={12}
        style={{
          position: 'absolute',
          left: fx(1064),
          top: fy(297),
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.BODY,
          fontWeight: 500,
          fontSize: 32,
          color: COLORS.INK,
          zIndex: 18,
        }}
      />

      {/* S8: CrossMark when red dot hits firewall */}
      <CrossMark x={fx(745)} y={fy(330)} size={48} startFrame={168 + 130} />

      {/* S8: Figure 8.33 Caption at (215, 688) */}
      {frame >= 168 + 70 && (
        <div
          dir="ltr"
          aria-label={getText('V6-S8', 'fig_caption')}
          style={{
            position: 'absolute',
            left: fx(215),
            top: fy(680),
            maxWidth: 960,
            fontFamily: FONTS.BODY,
            fontWeight: 400,
            fontSize: 30,
            lineHeight: 1.3,
            color: COLORS.INK,
            zIndex: 20,
          }}
        >
          <span style={{fontWeight: 700, color: COLORS.FIG_BLUE}}>Figure 8.33</span>
          <SvgDiamond size={14} color={COLORS.INK} />
          <span>Firewall placement between the administered network and the outside world</span>
        </div>
      )}

      {frame < 168 ? (
        <Caption text="على الشمال الـ Administered network: شبكة الشركة الداخلية." fadeOutStartFrame={163} />
      ) : (
        <Caption text="الـ Firewall في النص: أي traffic للـ Public Internet يعدّي عليه." startFrame={168} />
      )}

      <SceneFade startFrame={328} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 9 (51.00 -> 55.50s, 108 frames, LAYOUT_P: s10_fig8_33_clean)
// ============================================================================
const Scene9: React.FC = () => {
  // PinnedPhoto x 260..1660 (w=1400), y 100..887 (h=787)
  // Firewall plane region (46-59%, 0-75%)
  const px = 274;
  const py = 114;
  const pw = 1372;
  const ph = 759;

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 6/8 · Slide 10" />

      {/* Audio */}
      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="page_turn" at={0.3} />
      <Sfx name="pencil_loop" at={0.9} dur={0.4} />
      <Sfx name="marker_loop" at={1.5} dur={0.5} />

      <PinnedPhoto
        src="slides_up/s10_fig8_33_clean.png"
        x={260}
        y={100}
        w={1400}
        h={787}
        tiltDeg={0}
        startFrame={7}
      />

      <HandWrite
        text={getText('V6-S9', 'tag_fig')}
        startFrame={22}
        durationFrames={10}
        style={{
          position: 'absolute',
          left: 60,
          top: 40,
          border: `3px solid ${COLORS.INK}`,
          borderRadius: 12,
          backgroundColor: COLORS.CARD,
          padding: '4px 16px',
          fontFamily: FONTS.EN_TITLE,
          fontWeight: 700,
          fontSize: 36,
          color: COLORS.INK,
          zIndex: 25,
        }}
      />

      <RedEllipse
        cx={px + 0.525 * pw}
        cy={py + 0.375 * ph}
        rx={0.08 * pw}
        ry={0.36 * ph}
        startFrame={36}
        durationFrames={12}
      />

      <Caption text="ودي Figure 8.33 زي ما هي في Slide 10." />
      <SceneFade startFrame={100} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 9b (55.50 -> 62.50s, 168 frames, LAYOUT_L)
// ============================================================================
const Scene9b: React.FC = () => {
  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 6/8" />

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
        centerTopicTitle={getText('V6-S9b', 'center_title')}
        centerSlideTag="Slides 9–10"
        nextTopicTitle={getText('V6-S9b', 'next_topic')}
        nodes={[
          {
            position: 'N1',
            directionText: 'شفناه في V3 · Slide 6',
            topicTitle: getText('V6-S9b', 'n1_topic'),
            arabicText: 'الـ NGFW في رسمة Palo Alto = Firewall software شغال كـ VM',
            labels: [getText('V6-S9b', 'lbl_ngfw')],
            crop: {
              src: 'slides_up/s06_paloalto_ngfw.jpg',
              region: {x0: 11, x1: 20, y0: 42, y1: 54},
            },
          },
          {
            position: 'N2',
            directionText: 'شفناه في V5 · Slide 8',
            topicTitle: getText('V6-S9b', 'n2_topic'),
            arabicText: 'بيحقق الـ security اللي الـ network management بتضمنها',
            labels: [getText('V6-S9b', 'lbl_sec')],
            icon: <IconShield size={110} />,
          },
          {
            position: 'N3',
            directionText: 'هنشوفه في V8 · Slide 14',
            topicTitle: getText('V6-S9b', 'n3_topic'),
            arabicText: 'هتلاقي Firewall تاني في رسمة الـ SDN',
            labels: [getText('V6-S9b', 'lbl_fw_vpn')],
            crop: {
              src: 'slides_up/s14_network_3d.jpg',
              region: {x0: 1, x1: 38, y0: 51, y1: 70},
            },
          },
        ]}
      />

      <Caption text="الـ Firewall متوصّل بالـ NGFW والـ security والـ SDN." />
      <SceneFade startFrame={160} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 10 (62.50 -> 74.50s, 288 frames, LAYOUT_R: StudyCard)
// ============================================================================
const Scene10: React.FC = () => {
  const frame = useCurrentFrame();
  const showTitle = frame >= 18;
  const showTags = frame >= 30;
  const showLines = frame >= 32;
  const showBlocks = frame >= 36;
  const showGlossary = frame >= 79;

  const glossary = [
    {term: 'Firewall', meaning: 'جدار الحماية'},
    {term: 'network security system', meaning: 'نظام أمان للشبكة'},
    {term: 'incoming / outgoing network traffic', meaning: 'الترافيك الداخل / الخارج'},
    {term: 'data packets', meaning: 'حزم البيانات'},
    {term: 'allowed through', meaning: 'مسموح تعدّي'},
    {term: 'external threats', meaning: 'التهديدات الخارجية'},
    {term: 'Operational Security', meaning: 'الأمن التشغيلي'},
    {term: 'Administered network · Public Internet', meaning: 'شبكتنا الداخلية · الإنترنت العام'},
  ];

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 6/8 · Slides 9–10" />

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
                {['Slide 9', 'Slide 10'].map((tag, i) => (
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
              {/* Left Column: Verbatim Slide 9 & Slide 10 */}
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
                {/* Slide 9 */}
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
                      Slide 9
                    </span>
                    <span style={{fontFamily: FONTS.BODY, fontWeight: 700, fontSize: 31, color: COLORS.INK}}>
                      {getText('V6-S10', 's9_title')}
                    </span>
                  </div>

                  <div
                    aria-label={getText('V6-S10', 's9_p1')}
                    style={{
                      fontFamily: FONTS.BODY,
                      fontWeight: 600,
                      fontSize: 25,
                      lineHeight: 1.44,
                      color: COLORS.INK,
                    }}
                  >
                    A firewall is a software or hardware-based{' '}
                    <HighlightText text="network security system" startFrame={0} durationFrames={1} rtl={false} /> that
                    controls incoming and outgoing network traffic by{' '}
                    <HighlightText text="analyzing data packets" startFrame={0} durationFrames={1} rtl={false} /> and
                    determining whether they should be allowed through or not. Firewall protection is essential to
                    secure a network from{' '}
                    <HighlightText text="external threats" startFrame={0} durationFrames={1} rtl={false} />.
                  </div>

                  <div
                    style={{
                      fontFamily: FONTS.BODY,
                      fontWeight: 600,
                      fontSize: 25,
                      lineHeight: 1.44,
                      color: COLORS.INK,
                    }}
                  >
                    {getText('V6-S10', 's9_p2')}
                  </div>
                </div>

                {/* Slide 10 */}
                <div style={{display: 'flex', flexDirection: 'column', gap: 8, marginTop: 10}}>
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
                      Slide 10
                    </span>
                    <span style={{fontFamily: FONTS.BODY, fontWeight: 700, fontSize: 31, color: COLORS.INK}}>
                      {getText('V6-S10', 's10_title')}
                    </span>
                  </div>

                  <div
                    aria-label={getText('V6-S10', 's10_fig')}
                    style={{
                      fontFamily: FONTS.BODY,
                      fontWeight: 600,
                      fontSize: 25,
                      lineHeight: 1.42,
                      color: COLORS.INK,
                    }}
                  >
                    <span style={{fontWeight: 700, color: COLORS.FIG_BLUE}}>Figure 8.33</span>
                    <SvgDiamond size={13} color={COLORS.INK} />
                    <span>Firewall placement between the administered network and the outside world</span>{' '}
                    <span style={{fontFamily: FONTS.BODY, fontWeight: 500, fontSize: 22, color: COLORS.MUTED}}>
                      (من جوه الصورة)
                    </span>
                  </div>
                </div>
              </div>

              {showLines && (
                <div style={{width: 2, height: '94%', backgroundColor: COLORS.INK, alignSelf: 'center'}} />
              )}

              {/* Right Column: 8 Glossary rows */}
              <div
                dir="rtl"
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4,
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
                      height: 68,
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      dir="ltr"
                      style={{
                        fontFamily: FONTS.EN_TITLE,
                        fontWeight: 700,
                        fontSize: 24,
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
                        fontSize: 22,
                        lineHeight: 1.18,
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
      <SceneFade startFrame={280} durationFrames={8} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 11 (74.50 -> 80.50s, 144 frames, LAYOUT_F)
// ============================================================================
const Scene11: React.FC = () => {
  const frame = useCurrentFrame();
  const glassDropP = interpolate(frame, [65, 71], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  return (
    <AbsoluteFill>
      <SlideBadge text="Lecture 1 · 6/8" />

      {/* Audio */}
      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="marker_loop" at={0.4} dur={0.9} />
      <Sfx name="marker_loop" at={1.35} dur={0.6} />
      <Sfx name="chime_success" at={1.95} />
      <Sfx name="pencil_loop" at={2.1} dur={0.5} />
      <Sfx name="stamp_thud" at={2.95} gainDb={-6} />
      <Sfx name="glass_knock" at={3.35} />
      <Sfx name="pencil_loop" at={3.6} dur={0.7} gainDb={-3} />
      <Sfx name="highlight_swipe" at={4.35} dur={0.35} />
      <Sfx name="lock_click" at={4.75} />

      <HandWrite
        text={getText('V6-S11', 'f_main')}
        startFrame={10}
        durationFrames={22}
        style={{
          position: 'absolute',
          left: 820,
          top: 290,
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.KEY_EN,
          fontWeight: 400,
          fontSize: 150,
          color: COLORS.INK,
          zIndex: 22,
        }}
      />

      <RedEllipse cx={820} cy={290} rx={340} ry={120} startFrame={32} durationFrames={15} />

      <HandWrite
        text={getText('V6-S11', 'f_ar')}
        startFrame={50}
        durationFrames={12}
        rtl
        style={{
          position: 'absolute',
          left: 820,
          top: 470,
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.HOOK,
          fontWeight: 700,
          fontSize: 80,
          color: COLORS.INK,
          zIndex: 22,
        }}
      />

      {/* Shabah H2 behind glass on right */}
      <Character src="hacker_H2.png" x={1640} height={700} baseY={1000} side="right" startFrame={72} />

      {/* Glass plane x 1300..1400, y 150..950 */}
      {frame >= 65 && (
        <div
          style={{
            position: 'absolute',
            left: 1300,
            top: 150 - (1 - glassDropP) * 700,
            width: 100,
            height: 800,
            backgroundColor: COLORS.FW_PLANE,
            border: '3px solid #5E8FAD',
            zIndex: 24,
          }}
        />
      )}

      {/* اتمنع! at (1640, 200) */}
      <Pop
        startFrame={81}
        style={{
          position: 'absolute',
          left: 1640 - 90,
          top: 170,
          fontFamily: FONTS.HOOK,
          fontWeight: 700,
          fontSize: 64,
          color: COLORS.RED,
          zIndex: 26,
        }}
      >
        {getText('V6-S11', 'shabah_blocked')}
      </Pop>

      {frame >= 86 && (
        <div
          dir="rtl"
          style={{
            position: 'absolute',
            left: 820,
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
          {frame < 104 ? (
            <WordReveal text={getText('V6-S11', 'f_sub')} startFrame={86} durationFrames={17} rtl />
          ) : (
            <HighlightText text={getText('V6-S11', 'f_sub')} startFrame={104} durationFrames={8} rtl />
          )}
        </div>
      )}

      {/* Lock at (380, 290) */}
      <Pop startFrame={114} style={{position: 'absolute', left: 380 - 55, top: 290 - 55, zIndex: 22}}>
        <IconLock size={110} />
      </Pop>

      <Caption text="وده اسمه Firewall." />
      <SceneFade startFrame={127} durationFrames={17} />
    </AbsoluteFill>
  );
};

// ============================================================================
// MAIN V6 COMPOSITION (80.5s = 1932 frames @ 24fps)
// ============================================================================
export const V6: React.FC = () => {
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

        {/* S3: 12.00 -> 18.00s (288..432) */}
        <Sequence from={288} durationInFrames={144}>
          <Scene3 />
        </Sequence>

        {/* S4: 18.00 -> 25.00s (432..600) */}
        <Sequence from={432} durationInFrames={168}>
          <Scene4 />
        </Sequence>

        {/* S5: 25.00 -> 31.00s (600..744) */}
        <Sequence from={600} durationInFrames={144}>
          <Scene5 />
        </Sequence>

        {/* S6: 31.00 -> 37.00s (744..888) */}
        <Sequence from={744} durationInFrames={144}>
          <Scene6 />
        </Sequence>

        {/* S7 & S8: 37.00 -> 51.00s (888..1224, 336 frames) */}
        <Sequence from={888} durationInFrames={336}>
          <Scenes7And8 />
        </Sequence>

        {/* S9: 51.00 -> 55.50s (1224..1332) */}
        <Sequence from={1224} durationInFrames={108}>
          <Scene9 />
        </Sequence>

        {/* S9b: 55.50 -> 62.50s (1332..1500) */}
        <Sequence from={1332} durationInFrames={168}>
          <Scene9b />
        </Sequence>

        {/* S10: 62.50 -> 74.50s (1500..1788) */}
        <Sequence from={1500} durationInFrames={288}>
          <Scene10 />
        </Sequence>

        {/* S11: 74.50 -> 80.50s (1788..1932) */}
        <Sequence from={1788} durationInFrames={144}>
          <Scene11 />
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
