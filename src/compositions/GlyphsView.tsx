// src/compositions/GlyphsView.tsx
import React from 'react';
import {AbsoluteFill} from 'remotion';
import {Paper, SvgDiamond} from '../components';
import {COLORS} from '../theme';
import {FONT_FAMILIES} from '../lib/fonts';

export const GlyphsView: React.FC = () => {
  const testString = 'Aa 0123 . , : ; ! ? ( ) / & + = % - – • · ... ؟ ،';

  const rows = [
    {fontFamily: FONT_FAMILIES.HOOK, fontWeight: 700, y: 200},
    {fontFamily: FONT_FAMILIES.BODY, fontWeight: 600, y: 420},
    {fontFamily: FONT_FAMILIES.KEY_EN, fontWeight: 400, y: 640},
    {fontFamily: FONT_FAMILIES.EN_TITLE, fontWeight: 700, y: 860},
  ];

  return (
    <AbsoluteFill>
      <Paper />
      <AbsoluteFill style={{zIndex: 1}}>
        {rows.map((r, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: 120,
              top: r.y,
              transform: 'translateY(-50%)',
              fontFamily: r.fontFamily,
              fontWeight: r.fontWeight,
              fontSize: 64,
              lineHeight: 1,
              color: COLORS.INK,
              display: 'flex',
              alignItems: 'center',
              whiteSpace: 'nowrap',
            }}
          >
            <span>{testString}</span>
            <SvgDiamond size={14} color={COLORS.INK} />
          </div>
        ))}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
