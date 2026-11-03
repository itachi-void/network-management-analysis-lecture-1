// src/compositions/BidiView.tsx
import React from 'react';
import {Paper, Caption} from '../components';
import {COLORS, FONTS} from '../theme';
import {FONT_FAMILIES} from '../lib/fonts';

export const BidiView1: React.FC = () => {
  return (
    <div style={{width: 1920, height: 1080, position: 'relative'}}>
      <Paper />
      <div
        style={{
          position: 'absolute',
          top: 300,
          left: 0,
          width: 1920,
          textAlign: 'center',
          fontFamily: FONT_FAMILIES.HOOK,
          fontSize: 60,
          color: COLORS.INK,
        }}
      >
        اختبار Bidi 1: نقطة إنجليزية في جملة عربية
      </div>
      <Caption text="وده اسمه Firewall." startFrame={0} />
    </div>
  );
};

export const BidiView2: React.FC = () => {
  return (
    <div style={{width: 1920, height: 1080, position: 'relative'}}>
      <Paper />
      <div
        style={{
          position: 'absolute',
          top: 300,
          left: 0,
          width: 1920,
          textAlign: 'center',
          fontFamily: FONT_FAMILIES.HOOK,
          fontSize: 60,
          color: COLORS.INK,
        }}
      >
        اختبار Bidi 2: أقواس إنجليزية في جملة عربية
      </div>
      <Caption text="ونختم بـ Software Defined Networks (SDN)." startFrame={0} />
    </div>
  );
};
