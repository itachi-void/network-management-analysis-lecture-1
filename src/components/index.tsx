// src/components/index.tsx
import React, {useMemo} from 'react';
import {
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  Easing,
} from 'remotion';
import rough from 'roughjs';
import {COLORS, FONTS} from '../theme';
import {BidiText} from '../lib/bidi';

// 1. Paper Background
export const Paper: React.FC = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: 1920,
        height: 1080,
        backgroundColor: COLORS.PAPER,
        backgroundImage: `url(${staticFile('paper.png')})`,
        backgroundSize: '1920px 1080px',
        backgroundRepeat: 'no-repeat',
        zIndex: 0,
      }}
    />
  );
};

// 2. SketchBox (Card with 14px line overshoots)
export const SketchBox: React.FC<{
  x: number;
  y: number;
  w: number;
  h: number;
  startFrame?: number;
  drawDurationFrames?: number;
  seed?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}> = ({
  x,
  y,
  w,
  h,
  startFrame = 0,
  drawDurationFrames = 12,
  seed = 42,
  children,
  style,
}) => {
  const frame = useCurrentFrame();
  const relFrame = Math.max(0, frame - startFrame);
  const progress = Math.min(1, relFrame / Math.max(1, drawDurationFrames));

  // 14px overshoot lines
  const overshoot = 14;
  const paths = useMemo(() => {
    const gen = rough.generator();
    const l1 = gen.line(x - overshoot, y, x + w + overshoot, y, {
      seed: seed + 1,
      roughness: 0.6,
      bowing: 0.5,
      stroke: COLORS.INK,
      strokeWidth: 4,
    });
    const l2 = gen.line(x + w, y - overshoot, x + w, y + h + overshoot, {
      seed: seed + 2,
      roughness: 0.6,
      bowing: 0.5,
      stroke: COLORS.INK,
      strokeWidth: 4,
    });
    const l3 = gen.line(x + w + overshoot, y + h, x - overshoot, y + h, {
      seed: seed + 3,
      roughness: 0.6,
      bowing: 0.5,
      stroke: COLORS.INK,
      strokeWidth: 4,
    });
    const l4 = gen.line(x, y + h + overshoot, x, y - overshoot, {
      seed: seed + 4,
      roughness: 0.6,
      bowing: 0.5,
      stroke: COLORS.INK,
      strokeWidth: 4,
    });
    return [
      gen.toPaths(l1)[0]?.d || '',
      gen.toPaths(l2)[0]?.d || '',
      gen.toPaths(l3)[0]?.d || '',
      gen.toPaths(l4)[0]?.d || '',
    ];
  }, [x, y, w, h, seed]);

  // Fill opacity 0 -> 1 in first 30% of duration
  const fillOpacity = Math.min(1, progress / 0.3);

  // 4 edges draw sequentially, each 25% of progress
  const edgeProgress = [
    Math.min(1, Math.max(0, (progress - 0.0) / 0.25)),
    Math.min(1, Math.max(0, (progress - 0.25) / 0.25)),
    Math.min(1, Math.max(0, (progress - 0.5) / 0.25)),
    Math.min(1, Math.max(0, (progress - 0.75) / 0.25)),
  ];

  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: 1920,
        height: 1080,
        pointerEvents: 'none',
        ...style,
      }}
    >
      {/* Background fill */}
      <div
        style={{
          position: 'absolute',
          left: x,
          top: y,
          width: w,
          height: h,
          backgroundColor: COLORS.CARD,
          opacity: fillOpacity,
          pointerEvents: 'auto',
        }}
      >
        {children}
      </div>

      {/* Rough Lines SVG */}
      <svg
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: 1920,
          height: 1080,
        }}
      >
        {paths.map((d, i) => {
          if (!d) return null;
          const p = edgeProgress[i];
          return (
            <path
              key={i}
              d={d}
              fill="none"
              stroke={COLORS.INK}
              strokeWidth={4}
              strokeDasharray={2000}
              strokeDashoffset={2000 * (1 - p)}
            />
          );
        })}
      </svg>
    </div>
  );
};

// 3. HandUnderline
export const HandUnderline: React.FC<{
  x1: number;
  x2: number;
  y: number;
  startFrame?: number;
  durationFrames?: number;
  rtl?: boolean;
}> = ({x1, x2, y, startFrame = 0, durationFrames = 8, rtl = true}) => {
  const frame = useCurrentFrame();
  const rel = Math.max(0, frame - startFrame);
  const p = Math.min(1, rel / Math.max(1, durationFrames));

  const pathD = useMemo(() => {
    const midX = (x1 + x2) / 2;
    const bowY = y + 4; // subtle bow
    return `M ${x1} ${y} Q ${midX} ${bowY} ${x2} ${y}`;
  }, [x1, x2, y]);

  const offset = rtl ? 2000 * (1 - p) : -2000 * (1 - p);

  return (
    <svg style={{position: 'absolute', left: 0, top: 0, width: 1920, height: 1080, pointerEvents: 'none'}}>
      <path
        d={pathD}
        fill="none"
        stroke={COLORS.RED}
        strokeWidth={6}
        strokeLinecap="round"
        strokeDasharray={2000}
        strokeDashoffset={offset}
      />
    </svg>
  );
};

// 4. RedEllipse (starts at 200 deg, sweeps 390 deg)
export const RedEllipse: React.FC<{
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  startFrame?: number;
  durationFrames?: number;
}> = ({cx, cy, rx, ry, startFrame = 0, durationFrames = 14}) => {
  const frame = useCurrentFrame();
  const rel = Math.max(0, frame - startFrame);
  const p = Math.min(1, rel / Math.max(1, durationFrames));

  // Spiral / overlapping ellipse path (390 degrees)
  const pathD = useMemo(() => {
    const points: string[] = [];
    const steps = 60;
    const startAngle = (200 * Math.PI) / 180;
    const totalSweep = (390 * Math.PI) / 180;
    for (let i = 0; i <= steps; i++) {
      const frac = i / steps;
      const angle = startAngle + frac * totalSweep;
      // ending radius grows by 3%
      const rFactor = 1.0 + frac * 0.03;
      const px = cx + Math.cos(angle) * rx * rFactor;
      const py = cy + Math.sin(angle) * ry * rFactor;
      if (i === 0) points.push(`M ${px.toFixed(1)} ${py.toFixed(1)}`);
      else points.push(`L ${px.toFixed(1)} ${py.toFixed(1)}`);
    }
    return points.join(' ');
  }, [cx, cy, rx, ry]);

  return (
    <svg style={{position: 'absolute', left: 0, top: 0, width: 1920, height: 1080, pointerEvents: 'none'}}>
      <path
        d={pathD}
        fill="none"
        stroke={COLORS.RED}
        strokeWidth={5}
        strokeLinecap="round"
        strokeDasharray={3000}
        strokeDashoffset={3000 * (1 - p)}
      />
    </svg>
  );
};

// 5. Highlight (Yellow background highlight)
export const HighlightText: React.FC<{
  text: string;
  startFrame?: number;
  durationFrames?: number;
  rtl?: boolean;
  style?: React.CSSProperties;
}> = ({text, startFrame = 0, durationFrames = 8, rtl = true, style}) => {
  const frame = useCurrentFrame();
  const rel = Math.max(0, frame - startFrame);
  const p = Math.min(1, rel / Math.max(1, durationFrames));

  return (
    <span
      style={{
        display: 'inline-block',
        backgroundImage: `linear-gradient(${COLORS.HILITE}, ${COLORS.HILITE})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: rtl ? 'right' : 'left',
        backgroundSize: `${p * 100}% 100%`,
        boxDecorationBreak: 'clone',
        WebkitBoxDecorationBreak: 'clone',
        padding: '2px 8px',
        transform: 'rotate(-0.8deg)',
        ...style,
      }}
    >
      {text}
    </span>
  );
};

// 6. CheckMark (Green with dark green border + bounce)
export const CheckMark: React.FC<{
  x: number;
  y: number;
  startFrame?: number;
  size?: number;
}> = ({x, y, startFrame = 0, size = 64}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const rel = Math.max(0, frame - startFrame);

  // Draw 0.25s (6 frames at 24fps)
  const drawFrames = 6;
  const drawProgress = Math.min(1, rel / drawFrames);

  // Bounce 0.15s (scale 1 -> 1.15 -> 1)
  let scale = 1;
  if (rel > drawFrames) {
    const bounceFrame = rel - drawFrames;
    scale = spring({
      frame: bounceFrame,
      fps,
      config: {damping: 12, stiffness: 200},
    });
    scale = 1 + (scale - 1) * 0.15;
  }

  // Path: M0,38 L26,64 L70,0
  const pathD = 'M 4 40 L 28 66 L 72 4';

  if (rel <= 0) return null;

  return (
    <svg
      style={{
        position: 'absolute',
        left: x - 40,
        top: y - 35,
        width: 100,
        height: 90,
        transform: `scale(${scale})`,
        transformOrigin: 'center center',
        pointerEvents: 'none',
      }}
      viewBox="0 0 80 72"
    >
      {/* Outer dark green stroke */}
      <path
        d={pathD}
        fill="none"
        stroke={COLORS.GREEN_DARK}
        strokeWidth={11}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={200}
        strokeDashoffset={200 * (1 - drawProgress)}
      />
      {/* Inner bright green stroke */}
      <path
        d={pathD}
        fill="none"
        stroke={COLORS.GREEN}
        strokeWidth={6}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={200}
        strokeDashoffset={200 * (1 - drawProgress)}
      />
    </svg>
  );
};

// 7. RedTick (for Agenda checklist)
export const RedTick: React.FC<{
  x: number;
  y: number;
  startFrame?: number;
}> = ({x, y, startFrame = 0}) => {
  const frame = useCurrentFrame();
  const rel = Math.max(0, frame - startFrame);
  const p = Math.min(1, rel / 6);
  const pathD = 'M 4 40 L 28 66 L 72 4';

  if (rel <= 0) return null;

  return (
    <svg
      style={{
        position: 'absolute',
        left: x - 12,
        top: y - 10,
        width: 60,
        height: 60,
        pointerEvents: 'none',
      }}
      viewBox="0 0 80 72"
    >
      <path
        d={pathD}
        fill="none"
        stroke={COLORS.RED}
        strokeWidth={7}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={200}
        strokeDashoffset={200 * (1 - p)}
      />
    </svg>
  );
};

// 8. WordReveal
export const WordReveal: React.FC<{
  text: string;
  startFrame?: number;
  durationFrames?: number;
  rtl?: boolean;
  style?: React.CSSProperties;
}> = ({text, startFrame = 0, durationFrames = 14, rtl = true, style}) => {
  const frame = useCurrentFrame();
  const words = useMemo(() => text.split(' '), [text]);
  const numWords = Math.max(1, words.length);
  const framesPerWord = durationFrames / numWords;

  return (
    <span
      dir={rtl ? 'rtl' : 'ltr'}
      style={{
        display: 'inline-block',
        ...style,
      }}
    >
      {words.map((w, idx) => {
        const wordStart = startFrame + idx * framesPerWord;
        const wordRel = Math.max(0, frame - wordStart);
        const op = Math.min(1, wordRel / 3);
        const ty = (1 - op) * 4;

        return (
          <span
            key={idx}
            style={{
              display: 'inline-block',
              opacity: op,
              transform: `translateY(-${ty}px)`,
              marginRight: rtl ? undefined : '0.25em',
              marginLeft: rtl ? '0.25em' : undefined,
            }}
          >
            {w}
          </span>
        );
      })}
    </span>
  );
};

// 9. Caption
export const Caption: React.FC<{
  text: string;
  startFrame?: number;
  fadeOutStartFrame?: number;
}> = ({text, startFrame = 4, fadeOutStartFrame}) => {
  const frame = useCurrentFrame();
  const rel = Math.max(0, frame - startFrame);
  let opacity = Math.min(1, rel / 5);

  if (fadeOutStartFrame && frame >= fadeOutStartFrame) {
    const fadeRel = frame - fadeOutStartFrame;
    opacity = Math.max(0, 1 - fadeRel / 5);
  }

  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        top: 975,
        width: 1920,
        height: 65,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: 1600,
          textAlign: 'center',
          fontFamily: FONTS.BODY,
          fontWeight: 500,
          fontSize: 40,
          color: COLORS.CAPTION,
          whiteSpace: 'nowrap',
        }}
      >
        <BidiText text={text} />
      </div>
    </div>
  );
};

// 10. Character
export const Character: React.FC<{
  src: string;
  x: number;
  height?: number;
  baseY?: number;
  mirror?: boolean;
  startFrame?: number;
  side?: 'left' | 'right';
}> = ({
  src,
  x,
  height = 800,
  baseY = 1000,
  mirror = false,
  startFrame = 0,
  side = 'left',
}) => {
  const frame = useCurrentFrame();
  const rel = Math.max(0, frame - startFrame);
  const progress = Math.min(1, rel / 8); // 0.35s = ~8 frames

  // 80px shift from nearest screen edge
  const initialOffset = side === 'left' ? -80 : 80;
  const currentOffset = (1 - progress) * initialOffset;
  const opacity = progress;

  const width = (height * 1000) / 1600;

  return (
    <div
      style={{
        position: 'absolute',
        left: x - width / 2 + currentOffset,
        top: baseY - height,
        width,
        height,
        opacity,
        transform: mirror ? 'scaleX(-1)' : 'none',
        pointerEvents: 'none',
        zIndex: 20,
        maskImage: 'linear-gradient(to bottom, black 86%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 86%, transparent 100%)',
      }}
    >
      <Img
        src={staticFile(`characters/${src}`)}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
        }}
      />
    </div>
  );
};

// 11. SceneFade (fade out to paper color at end of scene)
export const SceneFade: React.FC<{
  startFrame: number;
  durationFrames?: number;
}> = ({startFrame, durationFrames = 8}) => {
  const frame = useCurrentFrame();
  if (frame < startFrame) return null;
  const p = Math.min(1, (frame - startFrame) / durationFrames);

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: 1920,
        height: 1080,
        backgroundColor: COLORS.PAPER,
        opacity: p,
        pointerEvents: 'none',
        zIndex: 100,
      }}
    />
  );
};

// 12. SlideBadge
export const SlideBadge: React.FC<{
  text: string;
  startFrame?: number;
}> = ({text, startFrame = 0}) => {
  const frame = useCurrentFrame();
  const rel = Math.max(0, frame - startFrame);
  const opacity = Math.min(1, rel / 5);

  return (
    <div
      style={{
        position: 'absolute',
        top: 24,
        right: 40,
        height: 40,
        padding: '0 16px',
        borderRadius: 12,
        border: `2px solid ${COLORS.MUTED}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: FONTS.EN_TITLE,
        fontWeight: 700,
        fontSize: 24,
        color: COLORS.MUTED,
        opacity,
        zIndex: 30,
      }}
    >
      {text}
    </div>
  );
};

// 13. SvgDiamond (♦ rendered in SVG as required by section 5.2)
export const SvgDiamond: React.FC<{size?: number; color?: string}> = ({
  size = 14,
  color = COLORS.INK,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 14 14"
    style={{display: 'inline-block', margin: '0 10px', verticalAlign: 'middle'}}
  >
    <polygon points="7,0 14,7 7,14 0,7" fill={color} />
  </svg>
);
