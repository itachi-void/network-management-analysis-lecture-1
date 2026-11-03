// src/components/index.tsx
import React, {useMemo} from 'react';
import {
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  Easing,
} from 'remotion';
import {evolvePath} from '@remotion/paths';
import rough from 'roughjs';
import {COLORS, FONTS} from '../theme';
import {BidiText} from '../lib/bidi';
import {RegionPct} from '../lib/camera';

export {BidiText};

// 1. Paper Background (Section 5.4: zIndex 0, static paper.png)
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

// 2. SketchBox (Card with 14px line overshoots, evolvePath from @remotion/paths)
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

  const overshoot = 14;
  const paths = useMemo(() => {
    const gen = rough.generator();
    const l1 = gen.line(x - overshoot, y, x + w + overshoot, y, {
      seed: seed + 1,
      roughness: 0.6,
      bowing: 0.5,
      disableMultiStroke: true,
      stroke: COLORS.INK,
      strokeWidth: 4,
    });
    const l2 = gen.line(x + w, y - overshoot, x + w, y + h + overshoot, {
      seed: seed + 2,
      roughness: 0.6,
      bowing: 0.5,
      disableMultiStroke: true,
      stroke: COLORS.INK,
      strokeWidth: 4,
    });
    const l3 = gen.line(x + w + overshoot, y + h, x - overshoot, y + h, {
      seed: seed + 3,
      roughness: 0.6,
      bowing: 0.5,
      disableMultiStroke: true,
      stroke: COLORS.INK,
      strokeWidth: 4,
    });
    const l4 = gen.line(x, y + h + overshoot, x, y - overshoot, {
      seed: seed + 4,
      roughness: 0.6,
      bowing: 0.5,
      disableMultiStroke: true,
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

  const fillOpacity = Math.min(1, progress / 0.3);

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
          if (p <= 0) return null;
          const evolved = evolvePath(p, d);
          return (
            <path
              key={i}
              d={d}
              fill="none"
              stroke={COLORS.INK}
              strokeWidth={4}
              strokeDasharray={evolved.strokeDasharray}
              strokeDashoffset={evolved.strokeDashoffset}
            />
          );
        })}
      </svg>
    </div>
  );
};

// 3. HandUnderline (Section 5.4: RED 6px or custom color/stroke, subtle bow, evolvePath)
export const HandUnderline: React.FC<{
  x1: number;
  x2: number;
  y: number;
  startFrame?: number;
  durationFrames?: number;
  rtl?: boolean;
  color?: string;
  strokeWidth?: number;
}> = ({
  x1,
  x2,
  y,
  startFrame = 0,
  durationFrames = 8,
  rtl = true,
  color = COLORS.RED,
  strokeWidth = 6,
}) => {
  const frame = useCurrentFrame();
  const rel = Math.max(0, frame - startFrame);
  const p = interpolate(rel, [0, Math.max(1, durationFrames)], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.inOut(Easing.sin),
  });

  const pathD = useMemo(() => {
    const startX = rtl ? Math.max(x1, x2) : Math.min(x1, x2);
    const endX = rtl ? Math.min(x1, x2) : Math.max(x1, x2);
    const midX = (startX + endX) / 2;
    const bowY = y + Math.max(3, Math.abs(endX - startX) * 0.005);
    return `M ${startX} ${y} Q ${midX} ${bowY.toFixed(1)} ${endX} ${y}`;
  }, [x1, x2, y, rtl]);

  if (frame < startFrame) return null;
  const evolved = evolvePath(p, pathD);

  return (
    <svg style={{position: 'absolute', left: 0, top: 0, width: 1920, height: 1080, pointerEvents: 'none', zIndex: 15}}>
      <path
        d={pathD}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={evolved.strokeDasharray}
        strokeDashoffset={evolved.strokeDashoffset}
      />
    </svg>
  );
};

// 4. RedEllipse (starts at 200 deg, sweeps 390 deg, ending radius +3%, evolvePath)
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
  const p = interpolate(rel, [0, Math.max(1, durationFrames)], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.inOut(Easing.sin),
  });

  const pathD = useMemo(() => {
    const points: string[] = [];
    const steps = 60;
    const startAngle = (200 * Math.PI) / 180;
    const totalSweep = (390 * Math.PI) / 180;
    for (let i = 0; i <= steps; i++) {
      const frac = i / steps;
      const angle = startAngle + frac * totalSweep;
      const rFactor = 1.0 + frac * 0.03;
      const px = cx + Math.cos(angle) * rx * rFactor;
      const py = cy + Math.sin(angle) * ry * rFactor;
      if (i === 0) points.push(`M ${px.toFixed(1)} ${py.toFixed(1)}`);
      else points.push(`L ${px.toFixed(1)} ${py.toFixed(1)}`);
    }
    return points.join(' ');
  }, [cx, cy, rx, ry]);

  if (frame < startFrame) return null;
  const evolved = evolvePath(p, pathD);

  return (
    <svg style={{position: 'absolute', left: 0, top: 0, width: 1920, height: 1080, pointerEvents: 'none', zIndex: 22}}>
      <path
        d={pathD}
        fill="none"
        stroke={COLORS.RED}
        strokeWidth={5}
        strokeLinecap="round"
        strokeDasharray={evolved.strokeDasharray}
        strokeDashoffset={evolved.strokeDashoffset}
      />
    </svg>
  );
};

// 5. HighlightText (Yellow background highlight with linear-gradient & box-decoration-break: clone)
export const HighlightText: React.FC<{
  text: string;
  startFrame?: number;
  durationFrames?: number;
  rtl?: boolean;
  style?: React.CSSProperties;
}> = ({text, startFrame = 0, durationFrames = 8, rtl = true, style}) => {
  const frame = useCurrentFrame();
  const rel = Math.max(0, frame - startFrame);
  const p = interpolate(rel, [0, Math.max(1, durationFrames)], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });

  return (
    <span
      style={{
        display: 'inline',
        backgroundImage: `linear-gradient(${COLORS.HILITE}, ${COLORS.HILITE})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: rtl ? 'right' : 'left',
        backgroundSize: `${p * 100}% 100%`,
        boxDecorationBreak: 'clone',
        WebkitBoxDecorationBreak: 'clone',
        padding: '2px 8px',
        transform: 'rotate(-1deg)',
        ...style,
      }}
    >
      {text}
    </span>
  );
};

// 6. CheckMark (Green #4BD47E with dark green #15361F border + bounce)
export const CheckMark: React.FC<{
  x: number;
  y: number;
  startFrame?: number;
  size?: number;
}> = ({x, y, startFrame = 0}) => {
  const frame = useCurrentFrame();
  const rel = frame - startFrame;
  if (rel <= 0) return null;

  const drawFrames = 6; // 0.25s
  const drawProgress = Math.min(1, rel / drawFrames);

  let scale = 1;
  const bounceFrames = 4; // 0.15s
  if (rel > drawFrames && rel <= drawFrames + bounceFrames) {
    const p = (rel - drawFrames) / bounceFrames;
    scale = 1 + Math.sin(p * Math.PI) * 0.1;
  }

  const pathD = 'M 4 40 L 28 66 L 72 4';
  const evolved = evolvePath(drawProgress, pathD);

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
        zIndex: 22,
      }}
      viewBox="0 0 80 72"
    >
      <path
        d={pathD}
        fill="none"
        stroke={COLORS.GREEN_DARK}
        strokeWidth={11}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={evolved.strokeDasharray}
        strokeDashoffset={evolved.strokeDashoffset}
      />
      <path
        d={pathD}
        fill="none"
        stroke={COLORS.GREEN}
        strokeWidth={6}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={evolved.strokeDasharray}
        strokeDashoffset={evolved.strokeDashoffset}
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
  const rel = frame - startFrame;
  if (rel <= 0) return null;
  const p = Math.min(1, rel / 6);
  const pathD = 'M 4 40 L 28 66 L 72 4';
  const evolved = evolvePath(p, pathD);

  return (
    <svg
      style={{
        position: 'absolute',
        left: x - 12,
        top: y - 10,
        width: 60,
        height: 60,
        pointerEvents: 'none',
        zIndex: 25,
      }}
      viewBox="0 0 80 72"
    >
      <path
        d={pathD}
        fill="none"
        stroke={COLORS.RED}
        strokeWidth={6}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={evolved.strokeDasharray}
        strokeDashoffset={evolved.strokeDashoffset}
      />
    </svg>
  );
};

// 7b. CrossMark (✗: 2 RED lines 8px, each 0.12s = 3 frames)
export const CrossMark: React.FC<{
  x: number;
  y: number;
  size?: number;
  startFrame?: number;
}> = ({x, y, size = 60, startFrame = 0}) => {
  const frame = useCurrentFrame();
  const rel = frame - startFrame;
  if (rel <= 0) return null;

  const p1 = Math.min(1, rel / 3);
  const p2 = Math.min(1, Math.max(0, (rel - 3) / 3));
  const d1 = 'M 10 10 L 50 50';
  const d2 = 'M 50 10 L 10 50';
  const ev1 = evolvePath(p1, d1);
  const ev2 = p2 > 0 ? evolvePath(p2, d2) : null;

  return (
    <svg
      style={{
        position: 'absolute',
        left: x - size / 2,
        top: y - size / 2,
        width: size,
        height: size,
        pointerEvents: 'none',
        zIndex: 25,
      }}
      viewBox="0 0 60 60"
    >
      <path
        d={d1}
        fill="none"
        stroke={COLORS.RED}
        strokeWidth={8}
        strokeLinecap="round"
        strokeDasharray={ev1.strokeDasharray}
        strokeDashoffset={ev1.strokeDashoffset}
      />
      {ev2 && (
        <path
          d={d2}
          fill="none"
          stroke={COLORS.RED}
          strokeWidth={8}
          strokeLinecap="round"
          strokeDasharray={ev2.strokeDasharray}
          strokeDashoffset={ev2.strokeDashoffset}
        />
      )}
    </svg>
  );
};

// 7c. Arrow (Section 5.4: INK or RED 5px, gentle bow, 22px arrowhead at 30 deg appearing at 85%)
export const Arrow: React.FC<{
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color?: string;
  strokeWidth?: number;
  startFrame?: number;
  durationFrames?: number;
  bow?: number;
}> = ({
  x1,
  y1,
  x2,
  y2,
  color = COLORS.INK,
  strokeWidth = 5,
  startFrame = 0,
  durationFrames = 8,
  bow = 12,
}) => {
  const frame = useCurrentFrame();
  const rel = Math.max(0, frame - startFrame);
  const p = interpolate(rel, [0, Math.max(1, durationFrames)], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.inOut(Easing.sin),
  });

  const {lineD, headD} = useMemo(() => {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const len = Math.max(1, Math.hypot(dx, dy));
    const nx = -dy / len;
    const ny = dx / len;
    const cx = (x1 + x2) / 2 + nx * bow;
    const cy = (y1 + y2) / 2 + ny * bow;
    const lD = `M ${x1.toFixed(1)} ${y1.toFixed(1)} Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}`;

    // Tangent at end of quadratic bezier is from (cx, cy) to (x2, y2)
    const angle = Math.atan2(y2 - cy, x2 - cx);
    const headLen = 22;
    const a1 = angle + Math.PI - (30 * Math.PI) / 180;
    const a2 = angle + Math.PI + (30 * Math.PI) / 180;
    const hx1 = x2 + Math.cos(a1) * headLen;
    const hy1 = y2 + Math.sin(a1) * headLen;
    const hx2 = x2 + Math.cos(a2) * headLen;
    const hy2 = y2 + Math.sin(a2) * headLen;
    const hD = `M ${hx1.toFixed(1)} ${hy1.toFixed(1)} L ${x2.toFixed(1)} ${y2.toFixed(1)} L ${hx2.toFixed(1)} ${hy2.toFixed(1)}`;
    return {lineD: lD, headD: hD};
  }, [x1, y1, x2, y2, bow]);

  if (frame < startFrame) return null;
  const evolved = evolvePath(p, lineD);

  return (
    <svg style={{position: 'absolute', left: 0, top: 0, width: 1920, height: 1080, pointerEvents: 'none', zIndex: 24}}>
      <path
        d={lineD}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={evolved.strokeDasharray}
        strokeDashoffset={evolved.strokeDashoffset}
      />
      {p >= 0.85 && (
        <path
          d={headD}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
};

// 7d. NameOval (Section 5.4: INK 4px oval around T_NAME 58px, draws 0.35s then name fades 0.15s)
export const NameOval: React.FC<{
  name: string;
  cx: number;
  cy: number;
  rx?: number;
  ry?: number;
  startFrame?: number;
  seed?: number;
}> = ({name, cx, cy, rx = 145, ry = 46, startFrame = 0, seed = 77}) => {
  const frame = useCurrentFrame();
  const rel = Math.max(0, frame - startFrame);
  const drawFrames = 8; // 0.35s
  const p = Math.min(1, rel / drawFrames);
  const textOpacity = Math.min(1, Math.max(0, (rel - 4) / 4)); // 0.15s fade

  const ovalD = useMemo(() => {
    const gen = rough.generator();
    const d = gen.ellipse(cx, cy, rx * 2, ry * 2, {
      seed,
      roughness: 0.7,
      bowing: 0.5,
      disableMultiStroke: true,
      stroke: COLORS.INK,
      strokeWidth: 4,
    });
    return gen.toPaths(d)[0]?.d || '';
  }, [cx, cy, rx, ry, seed]);

  if (frame < startFrame) return null;
  const evolved = evolvePath(p, ovalD);

  return (
    <>
      <svg style={{position: 'absolute', left: 0, top: 0, width: 1920, height: 1080, pointerEvents: 'none', zIndex: 25}}>
        <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={COLORS.CARD} opacity={p} />
        <path
          d={ovalD}
          fill="none"
          stroke={COLORS.INK}
          strokeWidth={4}
          strokeDasharray={evolved.strokeDasharray}
          strokeDashoffset={evolved.strokeDashoffset}
        />
      </svg>
      <div
        dir="rtl"
        style={{
          position: 'absolute',
          left: cx,
          top: cy,
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.HOOK,
          fontWeight: 700,
          fontSize: 58,
          color: COLORS.INK,
          opacity: textOpacity,
          whiteSpace: 'nowrap',
          zIndex: 26,
        }}
      >
        {name}
      </div>
    </>
  );
};

// 7e. Tag (Section 5.4: rounded rect 14px, INK or RED 4px border with text inside)
export const Tag: React.FC<{
  text: string;
  x: number;
  y: number;
  color?: string;
  fontSize?: number;
  startFrame?: number;
  centered?: boolean;
  style?: React.CSSProperties;
}> = ({
  text,
  x,
  y,
  color = COLORS.INK,
  fontSize = 34,
  startFrame = 0,
  centered = false,
  style,
}) => {
  const frame = useCurrentFrame();
  if (frame < startFrame) return null;
  const p = Math.min(1, (frame - startFrame) / 6);

  return (
    <div
      dir="ltr"
      style={{
        position: 'absolute',
        left: x,
        top: y,
        transform: centered ? `translate(-50%, -50%) scale(${0.9 + 0.1 * p})` : `scale(${0.9 + 0.1 * p})`,
        backgroundColor: COLORS.CARD,
        border: `4px solid ${color}`,
        borderRadius: 14,
        padding: '4px 18px',
        fontFamily: FONTS.EN_TITLE,
        fontWeight: 700,
        fontSize,
        color,
        opacity: p,
        whiteSpace: 'nowrap',
        zIndex: 24,
        ...style,
      }}
    >
      {text}
    </div>
  );
};

// 8. HandWrite (Section 5.4: clip-path reveal LTR or RTL with easeInOutSine)
export const HandWrite: React.FC<{
  text: string;
  startFrame: number;
  durationFrames: number;
  rtl?: boolean;
  style?: React.CSSProperties;
  ariaLabel?: string;
}> = ({text, startFrame, durationFrames, rtl = false, style, ariaLabel}) => {
  const frame = useCurrentFrame();
  if (frame < startFrame) return null;
  const p = interpolate(frame - startFrame, [0, Math.max(1, durationFrames)], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.inOut(Easing.sin),
  });
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

// 8b. WordReveal
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

        const isEnglish = /[A-Za-z]/.test(w);

        return (
          <span
            key={idx}
            style={{
              display: 'inline-block',
              opacity: op,
              transform: `translateY(${ty}px)`,
              marginRight: rtl ? undefined : '0.25em',
              marginLeft: rtl ? '0.25em' : undefined,
            }}
          >
            {isEnglish ? <bdi dir="ltr">{w}</bdi> : w}
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
          fontSize: 45,
          color: COLORS.CAPTION,
          whiteSpace: 'nowrap',
        }}
      >
        <BidiText text={text} />
      </div>
    </div>
  );
};

// 10. Character (Section 5.4: bottom gradient mask, 0.35s easeOutCubic slide-in)
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
  const progress = interpolate(rel, [0, 8], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });

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

// 14. Sparkle (Section 5.4: 5 WARN marks 6px length 26px around head, 0.25s = 6 frames)
export const Sparkle: React.FC<{cx: number; cy: number; startFrame: number}> = ({
  cx,
  cy,
  startFrame,
}) => {
  const frame = useCurrentFrame();
  const rel = frame - startFrame;
  if (rel < 0) return null;
  const p = Math.min(1, rel / 6);

  const angles = [20, 55, 90, 125, 160];
  const r0 = 85;
  const len = 26;

  return (
    <svg style={{position: 'absolute', left: 0, top: 0, width: 1920, height: 1080, pointerEvents: 'none', zIndex: 28}}>
      {angles.map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const x1 = cx + Math.cos(rad) * r0;
        const y1 = cy - Math.sin(rad) * r0;
        const x2 = cx + Math.cos(rad) * (r0 + len * p);
        const y2 = cy - Math.sin(rad) * (r0 + len * p);
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

// 15. Pop (Section 5.4: scale 0 -> 1.12 -> 1 in 0.25s = 6 frames easeOutBack)
export const Pop: React.FC<{
  startFrame: number;
  style?: React.CSSProperties;
  children: React.ReactNode;
}> = ({startFrame, style, children}) => {
  const frame = useCurrentFrame();
  if (frame < startFrame) return null;
  const rel = frame - startFrame;
  const scale = interpolate(rel, [0, 4, 6], [0, 1.12, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  return (
    <div
      style={{
        transform: `scale(${scale})`,
        transformOrigin: 'center center',
        ...style,
      }}
    >
      {children}
    </div>
  );
};

// 16. GlowPulse (Section 5.4: RED circle opacity 0.30 scaling 0.8 -> 1.3 and fading in 0.5s = 12 frames)
export const GlowPulse: React.FC<{
  cx: number;
  cy: number;
  r?: number;
  startFrame: number;
}> = ({cx, cy, r = 55, startFrame}) => {
  const frame = useCurrentFrame();
  const rel = frame - startFrame;
  if (rel < 0 || rel > 12) return null;
  const p = rel / 12;
  const scale = 0.8 + 0.5 * p;
  const opacity = 0.3 * (1 - p);

  return (
    <div
      style={{
        position: 'absolute',
        left: cx - r,
        top: cy - r,
        width: r * 2,
        height: r * 2,
        borderRadius: '50%',
        backgroundColor: COLORS.RED,
        opacity,
        transform: `scale(${scale})`,
        pointerEvents: 'none',
        zIndex: 28,
      }}
    />
  );
};

// 17. Camera Wrapper (Section 5.4: applies scale + translate)
export const Camera: React.FC<{
  scale?: number;
  translateX?: number;
  translateY?: number;
  children: React.ReactNode;
}> = ({scale = 1, translateX = 0, translateY = 0, children}) => {
  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: 1920,
        height: 1080,
        transformOrigin: '0 0',
        transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
      }}
    >
      {children}
    </div>
  );
};

// 18. Spotlight (Section 5.4: PAPER 0.70 overlay over photo with rounded 14px cutout + RED 5px border)
export const Spotlight: React.FC<{
  photoRect: {x: number; y: number; w: number; h: number};
  region: RegionPct;
  startFrame?: number;
  drawFrames?: number;
  maskId?: string;
}> = ({photoRect, region, startFrame = 0, drawFrames = 9, maskId = 'spot-mask'}) => {
  const frame = useCurrentFrame();
  if (frame < startFrame) return null;
  const rel = frame - startFrame;
  const p = Math.min(1, rel / Math.max(1, drawFrames));

  // Region + 1.5% margin
  const x0Pct = Math.max(0, region.x0 - 1.5);
  const x1Pct = Math.min(100, region.x1 + 1.5);
  const y0Pct = Math.max(0, region.y0 - 1.5);
  const y1Pct = Math.min(100, region.y1 + 1.5);

  const rx = photoRect.x + (x0Pct / 100) * photoRect.w;
  const ry = photoRect.y + (y0Pct / 100) * photoRect.h;
  const rw = ((x1Pct - x0Pct) / 100) * photoRect.w;
  const rh = ((y1Pct - y0Pct) / 100) * photoRect.h;

  const rectPath = `M ${rx + 14} ${ry} H ${rx + rw - 14} Q ${rx + rw} ${ry} ${rx + rw} ${ry + 14} V ${ry + rh - 14} Q ${rx + rw} ${ry + rh} ${rx + rw - 14} ${ry + rh} H ${rx + 14} Q ${rx} ${ry + rh} ${rx} ${ry + rh - 14} V ${ry + 14} Q ${rx} ${ry} ${rx + 14} ${ry} Z`;
  const evolved = evolvePath(p, rectPath);

  return (
    <svg
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: 1920,
        height: 1080,
        pointerEvents: 'none',
        zIndex: 23,
      }}
    >
      <defs>
        <mask id={maskId}>
          <rect x={photoRect.x} y={photoRect.y} width={photoRect.w} height={photoRect.h} fill="white" />
          <rect x={rx} y={ry} width={rw} height={rh} rx={14} ry={14} fill="black" />
        </mask>
      </defs>
      <rect
        x={photoRect.x}
        y={photoRect.y}
        width={photoRect.w}
        height={photoRect.h}
        fill={COLORS.PAPER}
        fillOpacity={0.7 * Math.min(1, rel / 5)}
        mask={`url(#${maskId})`}
      />
      <path
        d={rectPath}
        fill="none"
        stroke={COLORS.RED}
        strokeWidth={5}
        strokeLinecap="round"
        strokeDasharray={evolved.strokeDasharray}
        strokeDashoffset={evolved.strokeDashoffset}
      />
    </svg>
  );
};

export * from './layout_components';
