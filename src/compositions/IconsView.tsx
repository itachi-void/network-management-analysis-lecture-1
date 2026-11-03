// src/compositions/IconsView.tsx
import React from 'react';
import {AbsoluteFill} from 'remotion';
import {Paper} from '../components';
import {ALL_ICONS} from '../icons';
import {COLORS, FONTS} from '../theme';

export const IconsView: React.FC = () => {
  // Grid layout for 57 icons: 10 columns x 6 rows
  const cols = 10;
  const itemW = 170;
  const itemH = 150;
  const startX = 110;
  const startY = 80;

  return (
    <AbsoluteFill>
      <Paper />
      <AbsoluteFill style={{zIndex: 1}}>
        <div
          style={{
            position: 'absolute',
            top: 25,
            left: 110,
            fontFamily: FONTS.HOOK,
            fontSize: 36,
            fontWeight: 700,
            color: COLORS.INK,
          }}
        >
          مكتبة الأيقونات المرسومة باليد ({ALL_ICONS.length} أيقونة)
        </div>

        <div style={{position: 'absolute', top: startY, left: startX, width: 1720, height: 960}}>
          {ALL_ICONS.map((item, idx) => {
            const c = idx % cols;
            const r = Math.floor(idx / cols);
            const x = c * itemW;
            const y = r * itemH;

            return (
              <div
                key={item.name}
                style={{
                  position: 'absolute',
                  left: x,
                  top: y,
                  width: itemW - 10,
                  height: itemH - 10,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(253, 251, 245, 0.65)',
                  borderRadius: 8,
                  border: '1px solid rgba(42, 39, 35, 0.2)',
                  padding: 4,
                }}
              >
                <div style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <item.Component size={70} />
                </div>
                <div
                  style={{
                    fontSize: 12,
                    fontFamily: 'monospace',
                    color: COLORS.INK,
                    textAlign: 'center',
                    width: '100%',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    marginTop: 2,
                  }}
                >
                  {item.name}
                </div>
              </div>
            );
          })}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
