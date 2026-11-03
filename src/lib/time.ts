// src/lib/time.ts
export const secToFrames = (seconds: number, fps = 24): number => {
  return Math.round(seconds * fps);
};

export const framesToSec = (frames: number, fps = 24): number => {
  return frames / fps;
};
