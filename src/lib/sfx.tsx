// src/lib/sfx.tsx
import React from 'react';
import {Audio, Sequence, staticFile, interpolate, useVideoConfig} from 'remotion';

const dbToGain = (db: number) => Math.pow(10, db / 20);

export const Sfx: React.FC<{name: string; at: number; dur?: number; gainDb?: number}> = ({
  name,
  at,
  dur,
  gainDb = 0,
}) => {
  const {fps} = useVideoConfig();
  const from = Math.round(at * fps);
  const len = dur ? Math.max(4, Math.round(dur * fps)) : 4 * fps;
  const g = dbToGain(gainDb);

  return (
    <Sequence from={from} durationInFrames={len} layout="none">
      <Audio
        src={staticFile(`sfx/${name}.wav`)}
        volume={(f) =>
          dur
            ? interpolate(f, [0, 1, len - 2, len], [0, g, g, 0], {
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
              })
            : g
        }
      />
    </Sequence>
  );
};
