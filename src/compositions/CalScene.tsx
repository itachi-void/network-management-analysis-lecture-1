// src/compositions/CalScene.tsx
import React, {useMemo} from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {evolvePath} from '@remotion/paths';
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
import {secToFrames} from '../lib/time';

// Unified Timeline Object (Section 7.1 & Phase 0-R Step 6: single source of truth for animation & audio)
export interface TimelineEvent {
  id: string;
  t: number;
  dur?: number;
  sfx?: string;
  gainDb?: number;
}

export const CAL_TIMELINE: Record<string, TimelineEvent> = {
  sceneStart: {id: 'sceneStart', t: 0.0, sfx: 'whoosh_soft'},
  cardDraw: {id: 'cardDraw', t: 0.12, dur: 0.63, sfx: 'pencil_loop'},
  omarEnter: {id: 'omarEnter', t: 0.33},
  captionIn: {id: 'captionIn', t: 0.50},
  titleWrite: {id: 'titleWrite', t: 0.62, dur: 0.20, sfx: 'pencil_loop', gainDb: -3},
  titleLine: {id: 'titleLine', t: 0.86, dur: 0.20, sfx: 'pencil_loop', gainDb: -6},
  item1Write: {id: 'item1Write', t: 1.21, dur: 0.19, sfx: 'pencil_loop', gainDb: -3},
  item1Check: {id: 'item1Check', t: 1.46, sfx: 'check_soft'},
  item1Hl: {id: 'item1Hl', t: 1.75, dur: 0.33, sfx: 'highlight_swipe'},
  item2Write: {id: 'item2Write', t: 2.46, dur: 0.22, sfx: 'pencil_loop', gainDb: -3},
  item2Check: {id: 'item2Check', t: 2.71, sfx: 'check_soft'},
  item2Hl: {id: 'item2Hl', t: 3.00, dur: 0.30, sfx: 'highlight_swipe'},
  item3Write: {id: 'item3Write', t: 3.71, dur: 0.21, sfx: 'pencil_loop', gainDb: -3},
  item3Check: {id: 'item3Check', t: 3.96, sfx: 'check_soft'},
  sparkle: {id: 'sparkle', t: 4.05},
  item3Hl: {id: 'item3Hl', t: 4.25, dur: 0.30, sfx: 'highlight_swipe'},
  sceneFade: {id: 'sceneFade', t: 4.82, dur: 0.33},
};

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

  const ev = CAL_TIMELINE;
  const progressOf = (e: TimelineEvent) => {
    const startF = secToFrames(e.t);
    const durF = Math.max(1, secToFrames(e.dur || 0.2));
    return Math.min(1, Math.max(0, (frame - startF) / durF));
  };

  // Underline rough path from x=185 to 1105 at y=298 (seed fixed)
  const lineD = useMemo(() => {
    const gen = rough.generator();
    const l = gen.line(185, 298, 1105, 298, {
      seed: 88,
      roughness: 0.6,
      bowing: 0.5,
      disableMultiStroke: true,
      stroke: COLORS.INK,
      strokeWidth: 3,
    });
    return gen.toPaths(l)[0]?.d || '';
  }, []);

  const titleWriteProgress = progressOf(ev.titleWrite);
  const lineProgress = progressOf(ev.titleLine);
  const item1WriteProgress = progressOf(ev.item1Write);
  const item1HlProgress = progressOf(ev.item1Hl);
  const item2WriteProgress = progressOf(ev.item2Write);
  const item2HlProgress = progressOf(ev.item2Hl);
  const item3WriteProgress = progressOf(ev.item3Write);
  const item3HlProgress = progressOf(ev.item3Hl);

  const evolvedLine = evolvePath(lineProgress, lineD);

  return (
    <AbsoluteFill>
      {/* 1. Paper Background */}
      <Paper />

      <AbsoluteFill style={{zIndex: 1}}>
        {/* 2. Audio SFX driven directly from CAL_TIMELINE */}
        {Object.values(CAL_TIMELINE).map((item) =>
          item.sfx ? (
            <Sfx
              key={item.id}
              name={item.sfx}
              at={item.t}
              dur={item.dur}
              gainDb={item.gainDb}
            />
          ) : null
        )}

        {/* 3. SketchBox Card: x: 105 -> 1182 (w: 1077), y: 144 -> 917 (h: 773) */}
        <SketchBox
          x={105}
          y={144}
          w={1077}
          h={773}
          startFrame={secToFrames(ev.cardDraw.t)}
          drawDurationFrames={secToFrames(ev.cardDraw.dur!)}
          seed={42}
        />

        {/* 4. Title: «إزاي نحمي السرّية؟» (Cairo 700, 65px) center (644, 250) */}
        {frame >= secToFrames(ev.titleWrite.t) && (
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
        {frame >= secToFrames(ev.titleLine.t) && (
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
              strokeDasharray={evolvedLine.strokeDasharray}
              strokeDashoffset={evolvedLine.strokeDashoffset}
            />
          </svg>
        )}

        {/* 5. Item 1: center (592, 440), check at (1077, 440) */}
        {frame >= secToFrames(ev.item1Check.t) && (
          <CheckMark x={1077} y={440} startFrame={secToFrames(ev.item1Check.t)} />
        )}
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
        {frame >= secToFrames(ev.item1Write.t) && (
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
        {frame >= secToFrames(ev.item2Check.t) && (
          <CheckMark x={1077} y={615} startFrame={secToFrames(ev.item2Check.t)} />
        )}
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
        {frame >= secToFrames(ev.item2Write.t) && (
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
        {frame >= secToFrames(ev.item3Check.t) && (
          <CheckMark x={1077} y={790} startFrame={secToFrames(ev.item3Check.t)} />
        )}
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
        {frame >= secToFrames(ev.item3Write.t) && (
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
          startFrame={secToFrames(ev.omarEnter.t)}
          side="right"
        />

        {/* Sparkle around head at t=4.05 (frame 97) */}
        <Sparkle cx={1580} cy={380} startFrame={secToFrames(ev.sparkle.t)} />

        {/* 9. Caption: «تلات خطوات بسيطة... وكل واحد يشوف اللي يخصه بس.» at 45px */}
        <Caption
          text="تلات خطوات بسيطة... وكل واحد يشوف اللي يخصه بس."
          startFrame={secToFrames(ev.captionIn.t)}
          fadeOutStartFrame={secToFrames(ev.sceneFade.t)}
        />

        {/* 10. SceneFade: frames 116 to 124 */}
        <SceneFade
          startFrame={secToFrames(ev.sceneFade.t)}
          durationFrames={secToFrames(ev.sceneFade.dur!)}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
