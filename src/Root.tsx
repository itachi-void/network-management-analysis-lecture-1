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
import {V2} from './videos/V2';
import {V3} from './videos/V3';
import {V4} from './videos/V4';
import {V5} from './videos/V5';
import {V6} from './videos/V6';
import {V7} from './videos/V7';
import {V8} from './videos/V8';

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

      {/* Video 2: Datacenter (77.0s = 1848 frames) */}
      <Composition
        id="V2"
        component={V2}
        durationInFrames={1848}
        fps={24}
        width={1920}
        height={1080}
      />

      {/* Video 3: Desktop and Service Virtualization (99.0s = 2376 frames) */}
      <Composition
        id="V3"
        component={V3}
        durationInFrames={2376}
        fps={24}
        width={1920}
        height={1080}
      />

      {/* Video 4: Multimedia Network Application (72.0s = 1728 frames) */}
      <Composition
        id="V4"
        component={V4}
        durationInFrames={1728}
        fps={24}
        width={1920}
        height={1080}
      />

      {/* Video 5: Network Management (54.5s = 1308 frames) */}
      <Composition
        id="V5"
        component={V5}
        durationInFrames={1308}
        fps={24}
        width={1920}
        height={1080}
      />

      {/* Video 6: Firewall (80.5s = 1932 frames) */}
      <Composition
        id="V6"
        component={V6}
        durationInFrames={1932}
        fps={24}
        width={1920}
        height={1080}
      />

      {/* Video 7: SAN & NAS Storage Networks (75.0s = 1800 frames) */}
      <Composition
        id="V7"
        component={V7}
        durationInFrames={1800}
        fps={24}
        width={1920}
        height={1080}
      />

      {/* Video 8: Software Defined Networks (SDN) (85.5s = 2052 frames) */}
      <Composition
        id="V8"
        component={V8}
        durationInFrames={2052}
        fps={24}
        width={1920}
        height={1080}
      />
    </>
  );
};
