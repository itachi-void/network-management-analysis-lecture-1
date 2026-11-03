// src/lib/fonts.ts
import {loadFont as loadArefRuqaa, fontFamily as arefRuqaaFamily} from '@remotion/google-fonts/ArefRuqaa';
import {loadFont as loadCairo, fontFamily as cairoFamily} from '@remotion/google-fonts/Cairo';
import {loadFont as loadCaveatBrush, fontFamily as caveatBrushFamily} from '@remotion/google-fonts/CaveatBrush';
import {loadFont as loadKalam, fontFamily as kalamFamily} from '@remotion/google-fonts/Kalam';

let fontsLoaded = false;

export const loadAppFonts = () => {
  if (fontsLoaded) return;
  loadArefRuqaa('normal', {weights: ['700'], subsets: ['arabic', 'latin']});
  loadCairo('normal', {weights: ['400', '500', '600', '700'], subsets: ['arabic', 'latin']});
  loadCaveatBrush('normal', {weights: ['400'], subsets: ['latin']});
  loadKalam('normal', {weights: ['400', '700'], subsets: ['latin']});
  fontsLoaded = true;
};

export const FONT_FAMILIES = {
  HOOK: arefRuqaaFamily,
  AR_TITLE: arefRuqaaFamily,
  KEY_EN: caveatBrushFamily,
  EN_TITLE: kalamFamily,
  BODY: cairoFamily,
};
