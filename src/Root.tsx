// src/Root.tsx
import React from 'react';
import {Composition} from 'remotion';
import {loadAppFonts} from './lib/fonts';
import {CalScene} from './compositions/CalScene';
import {IconsView} from './compositions/IconsView';
import {GlyphsView} from './compositions/GlyphsView';
import {BidiView1, BidiView2} from './compositions/BidiView';
import {LayoutLTestView, StudyCardTestView} from './compositions/NewComponentsView';
import {V1} from './videos/V1';

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
        durationInFrames={24}
        fps={24}
        width={1920}
        height={1080}
      />

      {/* Bidi Test 2 */}
      <Composition
        id="BIDI-2"
        component={BidiView2}
        durationInFrames={24}
        fps={24}
        width={1920}
        height={1080}
      />

      {/* Phase 0-R New Components Debug Compositions (Section 5.3 & 5.4) */}
      <Composition
        id="LAYOUT-L-TEST"
        component={LayoutLTestView}
        durationInFrames={168}
        fps={24}
        width={1920}
        height={1080}
      />
      <Composition
        id="STUDY-CARD-TEST"
        component={StudyCardTestView}
        durationInFrames={168}
        fps={24}
        width={1920}
        height={1080}
      />

      {/* Video 1: Course Overview & Agenda (53.0s = 1272 frames) */}
      <Composition
        id="V1"
        component={V1}
        durationInFrames={1272}
        fps={24}
        width={1920}
        height={1080}
      />
    </>
  );
};
