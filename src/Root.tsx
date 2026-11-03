// src/Root.tsx
import React from 'react';
import {Composition} from 'remotion';
import {loadAppFonts} from './lib/fonts';
import {CalScene} from './compositions/CalScene';
import {IconsView} from './compositions/IconsView';
import {GlyphsView} from './compositions/GlyphsView';
import {BidiView1, BidiView2} from './compositions/BidiView';

export const Root: React.FC = () => {
  loadAppFonts();

  return (
    <>
      {/* Calibration Composition (Section 0.6) */}
      <Composition
        id="CAL"
        component={CalScene}
        durationInFrames={124}
        fps={24}
        width={1920}
        height={1080}
      />

      {/* Icons Debug Composition (Section 0.5) */}
      <Composition
        id="ICONS"
        component={IconsView}
        durationInFrames={1}
        fps={24}
        width={1920}
        height={1080}
      />

      {/* Glyphs & Fonts Debug Composition (Section 0.5) */}
      <Composition
        id="GLYPHS"
        component={GlyphsView}
        durationInFrames={1}
        fps={24}
        width={1920}
        height={1080}
      />

      {/* Bidi Test 1 */}
      <Composition
        id="BIDI-1"
        component={BidiView1}
        durationInFrames={1}
        fps={24}
        width={1920}
        height={1080}
      />

      {/* Bidi Test 2 */}
      <Composition
        id="BIDI-2"
        component={BidiView2}
        durationInFrames={1}
        fps={24}
        width={1920}
        height={1080}
      />
    </>
  );
};
