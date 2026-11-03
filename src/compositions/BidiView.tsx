// src/compositions/BidiView.tsx
import React from 'react';
import {AbsoluteFill} from 'remotion';
import {Paper, Caption} from '../components';

export const BidiView1: React.FC = () => {
  return (
    <AbsoluteFill>
      <Paper />
      <AbsoluteFill style={{zIndex: 1}}>
        <Caption text="وده اسمه Firewall." startFrame={4} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const BidiView2: React.FC = () => {
  return (
    <AbsoluteFill>
      <Paper />
      <AbsoluteFill style={{zIndex: 1}}>
        <Caption text="ونختم بـ Software Defined Networks (SDN)." startFrame={4} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
