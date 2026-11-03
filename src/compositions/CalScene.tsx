// src/compositions/CalScene.tsx
import React, {useMemo} from 'react';
import {useCurrentFrame, useVideoConfig} from 'remotion';
import rough from 'roughjs';
import {
  Paper,
  SketchBox,
  CheckMark,
  WordReveal,
  HighlightText,
  Caption,
  Character,
  SceneFade,
} from '../components';
import {COLORS, FONTS} from '../theme';
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

  // Reference timing (seconds to frames at 24 fps):
  // 0.00 -> frame 0
  // 0.10 -> frame 2, 0.60 -> frame 14
  // 0.40 -> frame 10 (Omar enters)
  // 0.55 -> frame 13, 1.05 -> frame 25 (Title WordReveal)
  // 1.05 -> frame 25, 1.25 -> frame 30 (Underline)
  // 1.15 -> frame 28 (Check 1)
  // 1.30 -> frame 31, 1.70 -> frame 41 (Item 1 text)
  // 2.05 -> frame 49, 2.35 -> frame 56 (Highlight 1)
  // 2.45 -> frame 59 (Check 2)
  // 2.60 -> frame 62, 3.10 -> frame 74 (Item 2 text)
  // 3.20 -> frame 77, 3.50 -> frame 84 (Highlight 2)
  // 3.75 -> frame 90 (Check 3)
  // 3.90 -> frame 94, 4.35 -> frame 104 (Item 3 text)
  // 4.05 -> frame 97 (Sparkle)
  // 4.35 -> frame 104, 4.65 -> frame 112 (Highlight 3)
  // 4.82 -> frame 116, 5.15 -> frame 124 (Fade)

  // Title underline rough path
  const lineD = useMemo(() => {
    const gen = rough.generator();
    const l = gen.line(185, 297, 1105, 297, {
      seed: 88,
      roughness: 0.7,
      bowing: 0.5,
      stroke: COLORS.INK,
      strokeWidth: 3,
    });
    return gen.toPaths(l)[0]?.d || '';
  }, []);

  const lineProgress = Math.min(1, Math.max(0, (frame - 25) / 5));

  return (
    <div style={{width: 1920, height: 1080, position: 'relative', overflow: 'hidden'}}>
      {/* 1. Paper Background */}
      <Paper />

      {/* Audio SFX */}
      <Sfx name="whoosh_soft" at={0.0} />
      <Sfx name="pencil_loop" at={0.1} dur={0.5} />
      <Sfx name="pencil_loop" at={0.55} dur={0.5} gainDb={-3} />
      <Sfx name="check_soft" at={1.15} />
      <Sfx name="pencil_loop" at={1.3} dur={0.4} gainDb={-3} />
      <Sfx name="highlight_swipe" at={2.05} />
      <Sfx name="check_soft" at={2.45} />
      <Sfx name="pencil_loop" at={2.6} dur={0.5} gainDb={-3} />
      <Sfx name="highlight_swipe" at={3.2} />
      <Sfx name="check_soft" at={3.75} />
      <Sfx name="pencil_loop" at={3.9} dur={0.45} gainDb={-3} />
      <Sfx name="highlight_swipe" at={4.35} />

      {/* 2. SketchBox Card: x: 92 -> 1194 (w: 1102), y: 135 -> 918 (h: 783) */}
      <SketchBox
        x={92}
        y={135}
        w={1102}
        h={783}
        startFrame={2}
        drawDurationFrames={12}
        seed={42}
      />

      {/* 3. Title: "إزاي نحمي السرّية؟" at center (645, 245) */}
      <div
        style={{
          position: 'absolute',
          left: 92,
          top: 215,
          width: 1102,
          textAlign: 'center',
          fontFamily: FONT_FAMILIES.BODY,
          fontWeight: 700,
          fontSize: 54,
          color: COLORS.INK,
          zIndex: 10,
        }}
      >
        <WordReveal
          text="إزاي نحمي السرّية؟"
          startFrame={13}
          durationFrames={12}
          rtl={true}
        />
      </div>

      {/* Line under title: x: 185 -> 1105 at y: 297 */}
      {frame >= 25 && (
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
            strokeDasharray={1000}
            strokeDashoffset={1000 * (1 - lineProgress)}
          />
        </svg>
      )}

      {/* 4. Three items right-aligned at x=1010, centers y=440, 615, 790 */}
      {/* Item 1 */}
      {frame >= 28 && <CheckMark x={1070} y={440} startFrame={28} />}
      <div
        style={{
          position: 'absolute',
          right: 1920 - 1010,
          top: 410,
          fontFamily: FONT_FAMILIES.BODY,
          fontWeight: 500,
          fontSize: 50,
          color: COLORS.INK,
          zIndex: 10,
          whiteSpace: 'nowrap',
        }}
      >
        {frame >= 49 ? (
          <HighlightText
            text="تشفير البيانات"
            startFrame={49}
            durationFrames={7}
            rtl={true}
          />
        ) : (
          <WordReveal
            text="تشفير البيانات"
            startFrame={31}
            durationFrames={10}
            rtl={true}
          />
        )}
      </div>

      {/* Item 2 */}
      {frame >= 59 && <CheckMark x={1070} y={615} startFrame={59} />}
      <div
        style={{
          position: 'absolute',
          right: 1920 - 1010,
          top: 585,
          fontFamily: FONT_FAMILIES.BODY,
          fontWeight: 500,
          fontSize: 50,
          color: COLORS.INK,
          zIndex: 10,
          whiteSpace: 'nowrap',
        }}
      >
        {frame >= 77 ? (
          <HighlightText
            text="كلمة سر قوية وتحقق بخطوتين"
            startFrame={77}
            durationFrames={7}
            rtl={true}
          />
        ) : (
          <WordReveal
            text="كلمة سر قوية وتحقق بخطوتين"
            startFrame={62}
            durationFrames={12}
            rtl={true}
          />
        )}
      </div>

      {/* Item 3 */}
      {frame >= 90 && <CheckMark x={1070} y={790} startFrame={90} />}
      <div
        style={{
          position: 'absolute',
          right: 1920 - 1010,
          top: 760,
          fontFamily: FONT_FAMILIES.BODY,
          fontWeight: 500,
          fontSize: 50,
          color: COLORS.INK,
          zIndex: 10,
          whiteSpace: 'nowrap',
        }}
      >
        {frame >= 104 ? (
          <HighlightText
            text="كل واحد يشوف اللي يخصه بس"
            startFrame={104}
            durationFrames={8}
            rtl={true}
          />
        ) : (
          <WordReveal
            text="كل واحد يشوف اللي يخصه بس"
            startFrame={94}
            durationFrames={10}
            rtl={true}
          />
        )}
      </div>

      {/* 5. Character Omar O3 right side: center x=1580, height=800, baseY=1000 */}
      <Character
        src="omar_O3.png"
        x={1580}
        height={800}
        baseY={1000}
        startFrame={10}
        side="right"
      />

      {/* Sparkle around head at t=4.05 (frame 97) */}
      <Sparkle cx={1580} cy={380} startFrame={97} />

      {/* 6. Caption */}
      <Caption
        text="تلات خطوات بسيطة... وكل واحد يشوف اللي يخصه بس."
        startFrame={4}
        fadeOutStartFrame={116}
      />

      {/* 7. SceneFade: frames 116 to 124 */}
      <SceneFade startFrame={116} durationFrames={8} />
    </div>
  );
};
