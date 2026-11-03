// src/compositions/GlyphsView.tsx
import React from 'react';
import {Paper, SvgDiamond} from '../components';
import {COLORS, FONTS} from '../theme';
import {FONT_FAMILIES} from '../lib/fonts';

export const GlyphsView: React.FC = () => {
  const testString = 'Aa 0123 . , : ; ! ? ( ) / & + = % - – • · ... ؟ ،';

  const fontsToTest = [
    {name: 'Aref Ruqaa (700)', family: FONT_FAMILIES.HOOK, weight: 700},
    {name: 'Cairo (600)', family: FONT_FAMILIES.BODY, weight: 600},
    {name: 'Caveat Brush (400)', family: FONT_FAMILIES.KEY_EN, weight: 400},
    {name: 'Kalam (700)', family: FONT_FAMILIES.EN_TITLE, weight: 700},
  ];

  return (
    <div style={{width: 1920, height: 1080, position: 'relative', padding: 80}}>
      <Paper />

      <div
        style={{
          fontFamily: FONT_FAMILIES.HOOK,
          fontSize: 54,
          fontWeight: 700,
          color: COLORS.INK,
          marginBottom: 60,
          borderBottom: `3px solid ${COLORS.RED}`,
          paddingBottom: 20,
        }}
      >
        اختبار الرموز والخطوط (Glyphs Test)
      </div>

      <div style={{display: 'flex', flexDirection: 'column', gap: 60}}>
        {fontsToTest.map((f) => (
          <div
            key={f.name}
            style={{
              backgroundColor: 'rgba(253, 251, 245, 0.85)',
              borderRadius: 12,
              padding: '24px 36px',
              border: `2px solid rgba(42, 39, 35, 0.2)`,
            }}
          >
            <div
              style={{
                fontFamily: 'monospace',
                fontSize: 22,
                color: COLORS.MUTED,
                marginBottom: 14,
              }}
            >
              {f.name}
            </div>
            <div
              style={{
                fontFamily: f.family,
                fontWeight: f.weight,
                fontSize: 42,
                color: COLORS.INK,
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 12,
              }}
            >
              <span>{testString}</span>
              <span style={{display: 'inline-flex', alignItems: 'center'}}>
                <SvgDiamond size={24} color={COLORS.INK} />
                <span style={{fontSize: 22, fontFamily: 'monospace', color: COLORS.MUTED}}>
                  (SVG Diamond)
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
