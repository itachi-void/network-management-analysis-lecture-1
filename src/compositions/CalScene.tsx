// src/compositions/CalScene.tsx
import React, {useMemo} from 'react';
import {useCurrentFrame} from 'remotion';
import rough from 'roughjs';
import {
  Paper,
  SketchBox,
  CheckMark,
  Caption,
  Character,
  SceneFade,
} from '../components';
import {COLORS} from '../theme';
import {FONT_FAMILIES} from '../lib/fonts';
import {Sfx} from '../lib/sfx';

// Sparkle component (5 marks around head)
const Sparkle: React.FC<{cx: number; cy: number; startFrame: number}> = ({
  cx,
  cy,
  startFrame,
}) => {
  const frame = useCurrentFrame();
  const rel = frame - startFrame;
  if (rel < 0 || rel > 18) return null;
  const p = Math.min(1, rel / 6); // 0.25s = 6 frames

  const angles = [0, 45, 90, 135, 180];
  const radius = 90;
  const length = 26;

  return (
    <svg
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: 1920,
        height: 1080,
        pointerEvents: 'none',
        zIndex: 25,
      }}
    >
      {angles.map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const x1 = cx + Math.cos(rad) * radius;
        const y1 = cy - Math.sin(rad) * radius;
        const x2 = cx + Math.cos(rad) * (radius + length * p);
        const y2 = cy - Math.sin(rad) * (radius + length * p);

        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={COLORS.WARN}
            strokeWidth={6}
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
};

export const CalScene: React.FC = () => {
  const frame = useCurrentFrame();

  // Reference timing (from Section 0.6 table at 24 fps):
  // 0.00 -> frame 0: whoosh_soft
  // 0.12 - 0.75 -> frames 3 to 18: Card draw (pencil_loop 0.63s)
  // 0.33 -> frame 8: Omar enters
  // 0.50 -> frame 12: Caption appears
  // 0.62 - 0.82 -> frames 15 to 20: Title HandWrite (pencil_loop 0.20s, -3dB)
  // 0.86 - 1.06 -> frames 21 to 25: Underline (pencil_loop 0.20s, -6dB)
  // 1.21 - 1.40 -> frames 29 to 34: Item 1 HandWrite (pencil_loop 0.19s, -3dB)
  // 1.46 -> frame 35: Check 1 (check_soft)
  // 1.75 - 2.08 -> frames 42 to 50: Highlight 1 (highlight_swipe)
  // 2.46 - 2.68 -> frames 59 to 64: Item 2 HandWrite (pencil_loop 0.22s, -3dB)
  // 2.71 -> frame 65: Check 2 (check_soft)
  // 3.00 - 3.30 -> frames 72 to 79: Highlight 2 (highlight_swipe)
  // 3.71 - 3.92 -> frames 89 to 94: Item 3 HandWrite (pencil_loop 0.21s, -3dB)
  // 3.96 -> frame 95: Check 3 (check_soft)
  // 4.05 -> frame 97: Sparkle at Omar's head
  // 4.25 - 4.55 -> frames 102 to 109: Highlight 3 (highlight_swipe)
  // 4.82 - 5.15 -> frames 116 to 124: Fade

  // Underline rough path from x=185 to 1105 at y=298 (seed fixed)
  const lineD = useMemo(() => {
    const gen = rough.generator();
    const l = gen.line(185, 298, 1105, 298, {
      seed: 88,
      roughness: 0.6,
      bowing: 0.5,
      stroke: COLORS.INK,
      strokeWidth: 3,
    });
    return gen.toPaths(l)[0]?.d || '';
  }, []);

  // Title underline progress (frames 21 to 25)
  const lineProgress = Math.min(1, Math.max(0, (frame - 21) / 4));

  // Item 1: HandWrite (29 to 34), Highlight (42 to 50), Check (35)
  const item1WriteProgress = Math.min(1, Math.max(0, (frame - 29) / 5));
  const item1HlProgress = Math.min(1, Math.max(0, (frame - 42) / 8));

  // Item 2: HandWrite (59 to 64), Highlight (72 to 79), Check (65)
  const item2WriteProgress = Math.min(1, Math.max(0, (frame - 59) / 5));
  const item2HlProgress = Math.min(1, Math.max(0, (frame - 72) / 7));

  // Item 3: HandWrite (89 to 94), Highlight (102 to 109), Check (95)
  const item3WriteProgress = Math.min(1, Math.max(0, (frame - 89) / 5));
  const item3HlProgress = Math.min(1, Math.max(0, (frame - 102) / 7));

  // Title reveal progress (frames 15 to 20)
  const titleWriteProgress = Math.min(1, Math.max(0, (frame - 15) / 5));

  return (
    <div style={{width: 1920, height: 1080, position: 'relative', overflow: 'hidden'}}>
      {/* 1. Paper Background */}
      <Paper />

      {/* 2. Audio SFX - Strict Timeline Object Mapping */}
      <Sfx name="whoosh_soft" at={0.0} dur={0.45} />
      <Sfx name="pencil_loop" at={0.12} dur={0.63} />
      <Sfx name="pencil_loop" at={0.62} dur={0.20} gainDb={-3} />
      <Sfx name="pencil_loop" at={0.86} dur={0.20} gainDb={-6} />
      <Sfx name="pencil_loop" at={1.21} dur={0.19} gainDb={-3} />
      <Sfx name="check_soft" at={1.46} />
      <Sfx name="highlight_swipe" at={1.75} dur={0.33} />
      <Sfx name="pencil_loop" at={2.46} dur={0.22} gainDb={-3} />
      <Sfx name="check_soft" at={2.71} />
      <Sfx name="highlight_swipe" at={3.00} dur={0.30} />
      <Sfx name="pencil_loop" at={3.71} dur={0.21} gainDb={-3} />
      <Sfx name="check_soft" at={3.96} />
      <Sfx name="highlight_swipe" at={4.25} dur={0.30} />

      {/* 3. SketchBox Card: x: 105 -> 1182 (w: 1077), y: 144 -> 917 (h: 773) */}
      <SketchBox
        x={105}
        y={144}
        w={1077}
        h={773}
        startFrame={3}
        drawDurationFrames={15}
        seed={42}
      />

      {/* 4. Title: «إزاي نحمي السرّية؟» (Cairo 700, 65px) center (644, 250) */}
      {frame >= 15 && (
        <div
          style={{
            position: 'absolute',
            left: 644,
            top: 250,
            transform: 'translate(-50%, -50%)',
            fontFamily: FONT_FAMILIES.BODY,
            fontWeight: 700,
            fontSize: 65,
            color: COLORS.INK,
            whiteSpace: 'nowrap',
            zIndex: 10,
            clipPath: `inset(0 0 0 ${Math.max(0, (1 - titleWriteProgress) * 100)}%)`,
          }}
        >
          إزاي نحمي السرّية؟
        </div>
      )}

      {/* Line under title: x: 185 -> 1105 at y: 298 */}
      {frame >= 21 && (
        <svg
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: 1920,
            height: 1080,
            pointerEvents: 'none',
            zIndex: 10,
          }}
        >
          <path
            d={lineD}
            fill="none"
            stroke={COLORS.INK}
            strokeWidth={3}
            strokeDasharray={920}
            strokeDashoffset={920 * (1 - lineProgress)}
          />
        </svg>
      )}

      {/* 5. Item 1: center (592, 440), check at (1077, 440) */}
      {/* Check 1 */}
      {frame >= 35 && <CheckMark x={1077} y={440} startFrame={35} />}
      {/* Item 1 Highlight */}
      {item1HlProgress > 0 && (
        <div
          style={{
            position: 'absolute',
            left: 592,
            top: 440 + 6,
            width: 293 + 24,
            height: 64,
            transform: 'translate(-50%, -50%)',
            backgroundColor: COLORS.HILITE,
            zIndex: 9,
            clipPath: `inset(0 0 0 ${Math.max(0, (1 - item1HlProgress) * 100)}%)`,
            pointerEvents: 'none',
          }}
        />
      )}
      {/* Item 1 Text */}
      {frame >= 29 && (
        <div
          style={{
            position: 'absolute',
            left: 592,
            top: 440,
            transform: 'translate(-50%, -50%)',
            fontFamily: FONT_FAMILIES.BODY,
            fontWeight: 500,
            fontSize: 54,
            color: COLORS.INK,
            zIndex: 10,
            whiteSpace: 'nowrap',
            clipPath: `inset(0 0 0 ${Math.max(0, (1 - item1WriteProgress) * 100)}%)`,
          }}
        >
          تشفير البيانات
        </div>
      )}

      {/* 6. Item 2: center (592, 615), check at (1077, 615) */}
      {/* Check 2 */}
      {frame >= 65 && <CheckMark x={1077} y={615} startFrame={65} />}
      {/* Item 2 Highlight */}
      {item2HlProgress > 0 && (
        <div
          style={{
            position: 'absolute',
            left: 592,
            top: 615 + 6,
            width: 678 + 24,
            height: 64,
            transform: 'translate(-50%, -50%)',
            backgroundColor: COLORS.HILITE,
            zIndex: 9,
            clipPath: `inset(0 0 0 ${Math.max(0, (1 - item2HlProgress) * 100)}%)`,
            pointerEvents: 'none',
          }}
        />
      )}
      {/* Item 2 Text */}
      {frame >= 59 && (
        <div
          style={{
            position: 'absolute',
            left: 592,
            top: 615,
            transform: 'translate(-50%, -50%)',
            fontFamily: FONT_FAMILIES.BODY,
            fontWeight: 500,
            fontSize: 54,
            color: COLORS.INK,
            zIndex: 10,
            whiteSpace: 'nowrap',
            clipPath: `inset(0 0 0 ${Math.max(0, (1 - item2WriteProgress) * 100)}%)`,
          }}
        >
          كلمة سر قوية وتحقق بخطوتين
        </div>
      )}

      {/* 7. Item 3: center (592, 790), check at (1077, 790) */}
      {/* Check 3 */}
      {frame >= 95 && <CheckMark x={1077} y={790} startFrame={95} />}
      {/* Item 3 Highlight */}
      {item3HlProgress > 0 && (
        <div
          style={{
            position: 'absolute',
            left: 592,
            top: 790 + 6,
            width: 668 + 24,
            height: 64,
            transform: 'translate(-50%, -50%)',
            backgroundColor: COLORS.HILITE,
            zIndex: 9,
            clipPath: `inset(0 0 0 ${Math.max(0, (1 - item3HlProgress) * 100)}%)`,
            pointerEvents: 'none',
          }}
        />
      )}
      {/* Item 3 Text */}
      {frame >= 89 && (
        <div
          style={{
            position: 'absolute',
            left: 592,
            top: 790,
            transform: 'translate(-50%, -50%)',
            fontFamily: FONT_FAMILIES.BODY,
            fontWeight: 500,
            fontSize: 54,
            color: COLORS.INK,
            zIndex: 10,
            whiteSpace: 'nowrap',
            clipPath: `inset(0 0 0 ${Math.max(0, (1 - item3WriteProgress) * 100)}%)`,
          }}
        >
          كل واحد يشوف اللي يخصه بس
        </div>
      )}

      {/* 8. Character Omar O3 right side: center x=1580, height=800, baseY=1000 */}
      <Character
        src="omar_O3.png"
        x={1580}
        height={800}
        baseY={1000}
        startFrame={8}
        side="right"
      />

      {/* Sparkle around head at t=4.05 (frame 97) */}
      <Sparkle cx={1580} cy={380} startFrame={97} />

      {/* 9. Caption: «تلات خطوات بسيطة... وكل واحد يشوف اللي يخصه بس.» at 45px */}
      <Caption
        text="تلات خطوات بسيطة... وكل واحد يشوف اللي يخصه بس."
        startFrame={12}
        fadeOutStartFrame={116}
      />

      {/* 10. SceneFade: frames 116 to 124 */}
      <SceneFade startFrame={116} durationFrames={8} />
    </div>
  );
};
