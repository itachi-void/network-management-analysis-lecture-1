// src/lib/camera.ts
import {Easing, interpolate} from 'remotion';

export interface RegionPct {
  x0: number; // 0..100
  x1: number; // 0..100
  y0: number; // 0..100
  y1: number; // 0..100
}

export interface CameraTransform {
  scale: number;
  translateX: number;
  translateY: number;
}

/**
 * Compute camera scale and translation (Section 5.4) so that region R inside a photo
 * at (photoX, photoY, photoW, photoH) has target height H on screen and is centered at (cx, cy).
 * Max scale is clamped to 3.0.
 */
export function computeRegionTransform(
  photoRect: {x: number; y: number; w: number; h: number},
  region: RegionPct,
  targetHeight: number,
  targetCenter: {cx: number; cy: number},
  maxScale = 3.0
): CameraTransform {
  const rX0 = photoRect.x + (region.x0 / 100) * photoRect.w;
  const rX1 = photoRect.x + (region.x1 / 100) * photoRect.w;
  const rY0 = photoRect.y + (region.y0 / 100) * photoRect.h;
  const rY1 = photoRect.y + (region.y1 / 100) * photoRect.h;

  const rH = Math.max(1, rY1 - rY0);
  const rCx = (rX0 + rX1) / 2;
  const rCy = (rY0 + rY1) / 2;

  const s = Math.min(maxScale, Math.max(1, targetHeight / rH));
  const translateX = targetCenter.cx - s * rCx;
  const translateY = targetCenter.cy - s * rCy;

  return {scale: s, translateX, translateY};
}

/**
 * Interpolate smoothly between two camera transforms using easeInOutCubic (0.6-0.7s = 15-17 frames).
 */
export function interpolateCamera(
  frame: number,
  startFrame: number,
  durationFrames: number,
  from: CameraTransform,
  to: CameraTransform
): CameraTransform {
  const p = interpolate(frame, [startFrame, startFrame + Math.max(1, durationFrames)], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.inOut(Easing.cubic),
  });
  return {
    scale: from.scale + (to.scale - from.scale) * p,
    translateX: from.translateX + (to.translateX - from.translateX) * p,
    translateY: from.translateY + (to.translateY - from.translateY) * p,
  };
}
