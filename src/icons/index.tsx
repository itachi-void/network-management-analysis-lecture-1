// src/icons/index.tsx
import React, {useMemo} from 'react';
import rough from 'roughjs';
import {COLORS} from '../theme';

export interface IconProps {
  size?: number;
  style?: React.CSSProperties;
  className?: string;
  seed?: number;
}

// Helper to render rough rectangle
export const RoughRect: React.FC<{
  x: number;
  y: number;
  w: number;
  h: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  seed?: number;
}> = ({x, y, w, h, fill, stroke = COLORS.INK, strokeWidth = 3, seed = 1}) => {
  const paths = useMemo(() => {
    const gen = rough.generator();
    const d = gen.rectangle(x, y, w, h, {
      seed,
      roughness: 0.8,
      bowing: 0.5,
      disableMultiStroke: true,
      stroke,
      strokeWidth,
      fill,
      fillStyle: fill ? 'solid' : undefined,
    });
    return gen.toPaths(d);
  }, [x, y, w, h, fill, stroke, strokeWidth, seed]);

  return (
    <g>
      {paths.map((p, i) => (
        <path key={i} d={p.d} fill={p.fill || 'none'} stroke={p.stroke} strokeWidth={p.strokeWidth} />
      ))}
    </g>
  );
};

// Helper to render rough ellipse
export const RoughEllipse: React.FC<{
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  seed?: number;
}> = ({cx, cy, rx, ry, fill, stroke = COLORS.INK, strokeWidth = 3, seed = 1}) => {
  const paths = useMemo(() => {
    const gen = rough.generator();
    const d = gen.ellipse(cx, cy, rx * 2, ry * 2, {
      seed,
      roughness: 0.8,
      bowing: 0.5,
      disableMultiStroke: true,
      stroke,
      strokeWidth,
      fill,
      fillStyle: fill ? 'solid' : undefined,
    });
    return gen.toPaths(d);
  }, [cx, cy, rx, ry, fill, stroke, strokeWidth, seed]);

  return (
    <g>
      {paths.map((p, i) => (
        <path key={i} d={p.d} fill={p.fill || 'none'} stroke={p.stroke} strokeWidth={p.strokeWidth} />
      ))}
    </g>
  );
};

// Helper to render rough line
export const RoughLine: React.FC<{
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  stroke?: string;
  strokeWidth?: number;
  seed?: number;
}> = ({x1, y1, x2, y2, stroke = COLORS.INK, strokeWidth = 3, seed = 1}) => {
  const paths = useMemo(() => {
    const gen = rough.generator();
    const d = gen.line(x1, y1, x2, y2, {
      seed,
      roughness: 0.8,
      bowing: 0.5,
      disableMultiStroke: true,
      stroke,
      strokeWidth,
    });
    return gen.toPaths(d);
  }, [x1, y1, x2, y2, stroke, strokeWidth, seed]);

  return (
    <g>
      {paths.map((p, i) => (
        <path key={i} d={p.d} fill="none" stroke={p.stroke} strokeWidth={p.strokeWidth} />
      ))}
    </g>
  );
};

// 1. server_box (أفقي)
export const IconServerBox: React.FC<IconProps> = ({size = 120, style}) => (
  <svg width={size} height={size * 0.65} viewBox="0 0 120 78" style={style}>
    <RoughRect x={6} y={10} w={108} h={58} fill="#DFE2E0" stroke={COLORS.INK} strokeWidth={4} seed={101} />
    <RoughLine x1={18} y1={30} x2={78} y2={30} stroke={COLORS.INK} strokeWidth={3} seed={102} />
    <RoughLine x1={18} y1={48} x2={78} y2={48} stroke={COLORS.INK} strokeWidth={3} seed={103} />
    <circle cx={94} cy={30} r={5} fill={COLORS.GREEN} stroke={COLORS.INK} strokeWidth={2} />
    <circle cx={94} cy={48} r={5} fill={COLORS.BLUE_LIGHT} stroke={COLORS.INK} strokeWidth={2} />
  </svg>
);

// 2. server_tower
export const IconServerTower: React.FC<IconProps> = ({size = 120, style}) => (
  <svg width={size * 0.6} height={size} viewBox="0 0 72 120" style={style}>
    <RoughRect x={6} y={6} w={60} h={108} fill="#DFE2E0" stroke={COLORS.INK} strokeWidth={4} seed={104} />
    <RoughRect x={14} y={16} w={44} h={18} fill="#B8C0C8" stroke={COLORS.INK} strokeWidth={2} seed={105} />
    <RoughRect x={14} y={42} w={44} h={18} fill="#B8C0C8" stroke={COLORS.INK} strokeWidth={2} seed={106} />
    <circle cx={26} cy={86} r={6} fill={COLORS.GREEN} stroke={COLORS.INK} strokeWidth={2} />
    <circle cx={46} cy={86} r={4} fill={COLORS.RED} stroke={COLORS.INK} strokeWidth={2} />
  </svg>
);

// 3. rack (رمادي #4A4E57 بشقوق #8C929C و8 صفوف)
export const IconRack: React.FC<IconProps> = ({size = 120, style}) => (
  <svg width={size * 0.6} height={size} viewBox="0 0 72 120" style={style}>
    <RoughRect x={6} y={6} w={60} h={108} fill="#4A4E57" stroke={COLORS.INK} strokeWidth={4} seed={107} />
    {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
      <rect key={i} x={12} y={14 + i * 12} width={48} height={8} rx={2} fill="#8C929C" stroke="#2A2723" strokeWidth={1} />
    ))}
  </svg>
);

// 4. desktop_pc (شاشة + كيبورد)
export const IconDesktopPc: React.FC<IconProps> = ({size = 120, style}) => (
  <svg width={size} height={size * 0.85} viewBox="0 0 120 102" style={style}>
    <RoughRect x={12} y={8} w={96} h={64} fill="#DCEAF6" stroke={COLORS.INK} strokeWidth={4} seed={108} />
    <RoughRect x={48} y={72} w={24} h={12} fill="#B8C0C8" stroke={COLORS.INK} strokeWidth={3} seed={109} />
    <RoughRect x={36} y={84} w={48} h={6} fill="#7A8088" stroke={COLORS.INK} strokeWidth={2} seed={110} />
    <RoughRect x={18} y={92} w={84} h={8} fill="#DFE2E0" stroke={COLORS.INK} strokeWidth={2} seed={111} />
  </svg>
);

// 5. laptop
export const IconLaptop: React.FC<IconProps> = ({size = 120, style}) => (
  <svg width={size} height={size * 0.75} viewBox="0 0 120 90" style={style}>
    <RoughRect x={20} y={10} w={80} h={55} fill="#DCEAF6" stroke={COLORS.INK} strokeWidth={4} seed={112} />
    <RoughRect x={8} y={65} w={104} h={16} fill="#B8C0C8" stroke={COLORS.INK} strokeWidth={4} seed={113} />
  </svg>
);

// 6. laptop_browser
export const IconLaptopBrowser: React.FC<IconProps> = ({size = 120, style}) => (
  <svg width={size} height={size * 0.75} viewBox="0 0 120 90" style={style}>
    <RoughRect x={20} y={10} w={80} h={55} fill="#FFFFFF" stroke={COLORS.INK} strokeWidth={4} seed={114} />
    <rect x={24} y={14} width={72} height={10} fill="#DCEAF6" stroke={COLORS.INK} strokeWidth={1} />
    <circle cx={30} cy={19} r={2} fill={COLORS.RED} />
    <circle cx={36} cy={19} r={2} fill={COLORS.WARN} />
    <circle cx={42} cy={19} r={2} fill={COLORS.GREEN} />
    <RoughRect x={8} y={65} w={104} h={16} fill="#B8C0C8" stroke={COLORS.INK} strokeWidth={4} seed={115} />
  </svg>
);

// 7. terminal_crt
export const IconTerminalCrt: React.FC<IconProps> = ({size = 120, style}) => (
  <svg width={size} height={size * 0.85} viewBox="0 0 120 102" style={style}>
    <RoughRect x={12} y={8} w={96} h={64} fill="#2A2723" stroke={COLORS.INK} strokeWidth={4} seed={116} />
    <text x={24} y={35} fill={COLORS.GREEN} fontFamily="monospace" fontSize={16} fontWeight="bold">&gt;_</text>
    <text x={24} y={55} fill={COLORS.GREEN} fontFamily="monospace" fontSize={12}>sh-4.2$</text>
    <RoughRect x={48} y={72} w={24} h={12} fill="#7A8088" stroke={COLORS.INK} strokeWidth={3} seed={117} />
    <RoughRect x={24} y={84} w={72} h={10} fill="#B8C0C8" stroke={COLORS.INK} strokeWidth={3} seed={118} />
  </svg>
);

// 8. smartphone
export const IconSmartphone: React.FC<IconProps> = ({size = 120, style}) => (
  <svg width={size * 0.55} height={size} viewBox="0 0 66 120" style={style}>
    <RoughRect x={6} y={6} w={54} h={108} fill="#2A2723" stroke={COLORS.INK} strokeWidth={4} seed={119} />
    <rect x={12} y={18} width={42} height={78} fill="#DCEAF6" />
    <circle cx={33} cy={106} r={4} fill="#B8C0C8" />
  </svg>
);

// 9. tablet
export const IconTablet: React.FC<IconProps> = ({size = 120, style}) => (
  <svg width={size * 0.75} height={size} viewBox="0 0 90 120" style={style}>
    <RoughRect x={6} y={6} w={78} h={108} fill="#2A2723" stroke={COLORS.INK} strokeWidth={4} seed={120} />
    <rect x={14} y={16} width={62} height={82} fill="#DCEAF6" />
    <circle cx={45} cy={108} r={4} fill="#B8C0C8" />
  </svg>
);

// 10. tv
export const IconTv: React.FC<IconProps> = ({size = 120, style}) => (
  <svg width={size} height={size * 0.8} viewBox="0 0 120 96" style={style}>
    <RoughRect x={10} y={10} w={100} h={64} fill="#2A2723" stroke={COLORS.INK} strokeWidth={4} seed={121} />
    <rect x={18} y={18} width={84} height={48} fill="#DCEAF6" />
    <RoughLine x1={36} y1={74} x2={26} y2={88} stroke={COLORS.INK} strokeWidth={4} seed={122} />
    <RoughLine x1={84} y1={74} x2={94} y2={88} stroke={COLORS.INK} strokeWidth={4} seed={123} />
  </svg>
);

// 11. cloud
export const IconCloud: React.FC<IconProps> = ({size = 120, style}) => (
  <svg width={size} height={size * 0.7} viewBox="0 0 120 84" style={style}>
    <path
      d="M32,66 C18,66 8,56 8,42 C8,30 18,20 30,20 C34,10 46,4 60,4 C76,4 89,14 93,26 C105,27 114,36 114,48 C114,60 104,66 90,66 Z"
      fill={COLORS.BLUE_LIGHT}
      stroke={COLORS.INK}
      strokeWidth={4}
      strokeLinejoin="round"
    />
  </svg>
);

// 12. switch (مربع بأسهم X)
export const IconSwitch: React.FC<IconProps> = ({size = 120, style}) => (
  <svg width={size} height={size} viewBox="0 0 120 120" style={style}>
    <RoughRect x={10} y={10} w={100} h={100} fill={COLORS.SDN_BLUE_FACE} stroke={COLORS.INK} strokeWidth={4} seed={124} />
    {/* X arrows */}
    <path d="M30,30 L90,90 M30,90 L90,30" stroke={COLORS.INK} strokeWidth={4} strokeLinecap="round" />
    <path d="M78,90 L90,90 L90,78 M22,42 L30,30 L42,30 M78,30 L90,30 L90,42 M22,78 L30,90 L42,90" fill="none" stroke={COLORS.INK} strokeWidth={4} strokeLinecap="round" />
  </svg>
);

// 13. router (أسطوانة بأسهم X)
export const IconRouter: React.FC<IconProps> = ({size = 120, style}) => (
  <svg width={size} height={size * 0.7} viewBox="0 0 120 84" style={style}>
    <RoughEllipse cx={60} cy={42} rx={50} ry={30} fill={COLORS.BLUE_LIGHT} stroke={COLORS.INK} strokeWidth={4} seed={125} />
    <path d="M35,30 L85,54 M35,54 L85,30" stroke={COLORS.INK} strokeWidth={4} strokeLinecap="round" />
    <circle cx={60} cy={42} r={6} fill={COLORS.INK} />
  </svg>
);

// 14. firewall_wall (طوب SALMON + نار SLATE)
export const IconFirewallWall: React.FC<IconProps> = ({size = 120, style}) => (
  <svg width={size} height={size * 1.1} viewBox="0 0 120 132" style={style}>
    {/* Flame top */}
    <path
      d="M60,8 C68,26 78,34 84,46 C90,58 84,68 76,68 C70,68 66,62 64,56 C60,66 52,72 44,72 C34,72 28,62 34,50 C38,42 46,36 48,24 C52,18 56,12 60,8 Z"
      fill={COLORS.SLATE}
      stroke={COLORS.INK}
      strokeWidth={3}
    />
    {/* Brick wall */}
    <RoughRect x={10} y={64} w={100} h={60} fill={COLORS.SALMON} stroke={COLORS.INK} strokeWidth={4} seed={126} />
    <line x1={10} y1={84} x2={110} y2={84} stroke={COLORS.INK} strokeWidth={3} />
    <line x1={10} y1={104} x2={110} y2={104} stroke={COLORS.INK} strokeWidth={3} />
    <line x1={40} y1={64} x2={40} y2={84} stroke={COLORS.INK} strokeWidth={3} />
    <line x1={80} y1={64} x2={80} y2={84} stroke={COLORS.INK} strokeWidth={3} />
    <line x1={60} y1={84} x2={60} y2={104} stroke={COLORS.INK} strokeWidth={3} />
    <line x1={30} y1={104} x2={30} y2={124} stroke={COLORS.INK} strokeWidth={3} />
    <line x1={75} y1={104} x2={75} y2={124} stroke={COLORS.INK} strokeWidth={3} />
  </svg>
);

// 15. lock (جسم YELLOW + قوس INK 6px + خرم)
export const IconLock: React.FC<IconProps> = ({size = 120, style}) => (
  <svg width={size} height={size * 1.1} viewBox="0 0 120 132" style={style}>
    {/* Shackle */}
    <path
      d="M36,60 L36,36 C36,22 46,12 60,12 C74,12 84,22 84,36 L84,60"
      fill="none"
      stroke={COLORS.INK}
      strokeWidth={7}
      strokeLinecap="round"
    />
    {/* Body */}
    <RoughRect x={18} y={54} w={84} h={68} fill={COLORS.YELLOW} stroke={COLORS.INK} strokeWidth={4} seed={127} />
    {/* Keyhole */}
    <circle cx={60} cy={82} r={7} fill={COLORS.INK} />
    <polygon points="56,84 64,84 66,98 54,98" fill={COLORS.INK} />
  </svg>
);

// 16. eye
export const IconEye: React.FC<IconProps> = ({size = 120, style}) => (
  <svg width={size} height={size * 0.7} viewBox="0 0 120 84" style={style}>
    <path
      d="M10,42 Q60,4 110,42 Q60,80 10,42 Z"
      fill="#FFFFFF"
      stroke={COLORS.INK}
      strokeWidth={4}
      strokeLinejoin="round"
    />
    <circle cx={60} cy={42} r={16} fill={COLORS.RED} stroke={COLORS.INK} strokeWidth={3} />
    <circle cx={64} cy={38} r={5} fill="#FFFFFF" />
  </svg>
);

// 17. eye_crossed
export const IconEyeCrossed: React.FC<IconProps> = ({size = 120, style}) => (
  <svg width={size} height={size * 0.7} viewBox="0 0 120 84" style={style}>
    <path
      d="M10,42 Q60,4 110,42 Q60,80 10,42 Z"
      fill="#F0EFEA"
      stroke={COLORS.INK}
      strokeWidth={4}
      strokeLinejoin="round"
    />
    <circle cx={60} cy={42} r={14} fill={COLORS.MUTED} stroke={COLORS.INK} strokeWidth={2} />
    <line x1={15} y1={72} x2={105} y2={12} stroke={COLORS.RED} strokeWidth={6} strokeLinecap="round" />
  </svg>
);

// 18. magnifier
export const IconMagnifier: React.FC<IconProps> = ({size = 120, style}) => (
  <svg width={size} height={size} viewBox="0 0 120 120" style={style}>
    <circle cx={50} cy={50} r={34} fill={COLORS.BLUE_LIGHT} stroke={COLORS.INK} strokeWidth={5} />
    <line x1={74} y1={74} x2={108} y2={108} stroke={COLORS.INK} strokeWidth={8} strokeLinecap="round" />
  </svg>
);

// 19. storage_cylinder (NAVY + بيضاوي أبيض)
export const IconStorageCylinder: React.FC<IconProps> = ({size = 120, style}) => (
  <svg width={size * 0.8} height={size} viewBox="0 0 96 120" style={style}>
    <path d="M12,30 L12,90 Q48,110 84,90 L84,30 Z" fill={COLORS.NAVY} stroke={COLORS.INK} strokeWidth={4} />
    <ellipse cx={48} cy={30} rx={36} ry={16} fill="#DCEAF6" stroke={COLORS.INK} strokeWidth={4} />
    <path d="M12,50 Q48,68 84,50" fill="none" stroke="#FFFFFF" strokeWidth={3} />
    <path d="M12,70 Q48,88 84,70" fill="none" stroke="#FFFFFF" strokeWidth={3} />
    <circle cx={48} cy={92} r={4} fill={COLORS.GREEN} />
  </svg>
);

// 20. vm_box
export const IconVmBox: React.FC<IconProps> = ({size = 120, style}) => (
  <svg width={size} height={size * 0.75} viewBox="0 0 120 90" style={style}>
    <RoughRect x={10} y={10} w={100} h={70} fill={COLORS.VM_BLUE} stroke={COLORS.NAVY} strokeWidth={4} seed={128} />
    <text x={60} y={54} fill={COLORS.NAVY} fontFamily="Arial" fontSize={32} fontWeight="bold" textAnchor="middle">
      VM
    </text>
  </svg>
);

// 21. folder
export const IconFolder: React.FC<IconProps> = ({size = 120, style}) => (
  <svg width={size} height={size * 0.8} viewBox="0 0 120 96" style={style}>
    <path d="M12,24 L44,24 L56,36 L108,36 L108,84 L12,84 Z" fill={COLORS.WARN} stroke={COLORS.INK} strokeWidth={4} strokeLinejoin="round" />
  </svg>
);

// 22. hard_drive
export const IconHardDrive: React.FC<IconProps> = ({size = 120, style}) => (
  <svg width={size} height={size * 0.6} viewBox="0 0 120 72" style={style}>
    <RoughRect x={10} y={10} w={100} h={52} fill="#DFE2E0" stroke={COLORS.INK} strokeWidth={4} seed={129} />
    <circle cx={32} cy={36} r={14} fill="#B8C0C8" stroke={COLORS.INK} strokeWidth={2} />
    <circle cx={92} cy={36} r={5} fill={COLORS.GREEN} />
  </svg>
);

// 23. gear
export const IconGear: React.FC<IconProps> = ({size = 120, style}) => (
  <svg width={size} height={size} viewBox="0 0 120 120" style={style}>
    <circle cx={60} cy={60} r={28} fill="#B8C0C8" stroke={COLORS.INK} strokeWidth={4} />
    <circle cx={60} cy={60} r={10} fill="#FDFBF5" stroke={COLORS.INK} strokeWidth={3} />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => (
      <rect
        key={i}
        x={54}
        y={14}
        width={12}
        height={16}
        rx={2}
        fill="#B8C0C8"
        stroke={COLORS.INK}
        strokeWidth={3}
        transform={`rotate(${a} 60 60)`}
      />
    ))}
  </svg>
);

// 24. wrench
export const IconWrench: React.FC<IconProps> = ({size = 120, style}) => (
  <svg width={size} height={size} viewBox="0 0 120 120" style={style}>
    <path
      d="M32,24 C40,16 52,18 60,26 C68,34 68,46 62,54 L98,90 C102,94 102,100 98,104 C94,108 88,108 84,104 L48,68 C40,74 28,74 20,66 C12,58 10,46 18,38 L30,48 L42,36 Z"
      fill="#B8C0C8"
      stroke={COLORS.INK}
      strokeWidth={4}
      strokeLinejoin="round"
    />
  </svg>
);

// 25. speedometer
export const IconSpeedometer: React.FC<IconProps> = ({size = 120, style}) => (
  <svg width={size} height={size * 0.8} viewBox="0 0 120 96" style={style}>
    <path d="M16,76 A48,48 0 1,1 104,76 Z" fill="#DCEAF6" stroke={COLORS.INK} strokeWidth={4} />
    <line x1={60} y1={68} x2={86} y2={38} stroke={COLORS.RED} strokeWidth={5} strokeLinecap="round" />
    <circle cx={60} cy={68} r={6} fill={COLORS.INK} />
  </svg>
);

// 26. shield
export const IconShield: React.FC<IconProps> = ({size = 120, style}) => (
  <svg width={size * 0.85} height={size} viewBox="0 0 102 120" style={style}>
    <path
      d="M12,18 L51,8 L90,18 C90,66 66,102 51,112 C36,102 12,66 12,18 Z"
      fill="#DCEAF6"
      stroke={COLORS.INK}
      strokeWidth={4}
      strokeLinejoin="round"
    />
    <path d="M34,58 L46,70 L72,40" fill="none" stroke={COLORS.GREEN} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 27. power_clock (ساعة + رمز التشغيل واضح: دايرة مفتوحة من فوق وخط رأسي في النص)
export const IconPowerClock: React.FC<IconProps> = ({size = 120, style}) => {
  const sw = size >= 160 ? 5 : 4;
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" style={style}>
      {/* Clock body */}
      <circle cx={50} cy={52} r={40} fill="#FDFBF5" stroke={COLORS.INK} strokeWidth={sw} />
      {/* Clock tick marks */}
      <line x1={50} y1={16} x2={50} y2={22} stroke={COLORS.INK} strokeWidth={3} strokeLinecap="round" />
      <line x1={50} y1={82} x2={50} y2={88} stroke={COLORS.INK} strokeWidth={3} strokeLinecap="round" />
      <line x1={14} y1={52} x2={20} y2={52} stroke={COLORS.INK} strokeWidth={3} strokeLinecap="round" />
      <line x1={80} y1={52} x2={86} y2={52} stroke={COLORS.INK} strokeWidth={3} strokeLinecap="round" />
      {/* Clock hands */}
      <line x1={50} y1={52} x2={50} y2={28} stroke={COLORS.INK} strokeWidth={sw} strokeLinecap="round" />
      <line x1={50} y1={52} x2={70} y2={52} stroke={COLORS.INK} strokeWidth={sw} strokeLinecap="round" />
      <circle cx={50} cy={52} r={4.5} fill={COLORS.INK} />
      {/* Power symbol badge (bottom-right): open circle at top + vertical bar */}
      <circle cx={86} cy={84} r={26} fill={COLORS.GREEN} stroke={COLORS.INK} strokeWidth={sw} />
      <path
        d="M 75 74 A 15 15 0 1 0 97 74"
        fill="none"
        stroke={COLORS.INK}
        strokeWidth={sw}
        strokeLinecap="round"
      />
      <line x1={86} y1={65} x2={86} y2={83} stroke={COLORS.INK} strokeWidth={sw + 1} strokeLinecap="round" />
    </svg>
  );
};

// 28. globe
export const IconGlobe: React.FC<IconProps> = ({size = 120, style}) => (
  <svg width={size} height={size} viewBox="0 0 120 120" style={style}>
    <circle cx={60} cy={60} r={48} fill={COLORS.BLUE_LIGHT} stroke={COLORS.INK} strokeWidth={size >= 160 ? 5 : 4} />
    <ellipse cx={60} cy={60} rx={24} ry={48} fill="none" stroke={COLORS.INK} strokeWidth={3} />
    <line x1={12} y1={60} x2={108} y2={60} stroke={COLORS.INK} strokeWidth={3} />
  </svg>
);

// 29. desk_phone (سماعة بسلك على قاعدة فيها أزرار)
export const IconDeskPhone: React.FC<IconProps> = ({size = 120, style}) => {
  const sw = size >= 160 ? 5 : 4;
  return (
    <svg width={size} height={size * 0.9} viewBox="0 0 120 108" style={style}>
      {/* Phone base */}
      <RoughRect x={24} y={22} w={84} h={68} fill="#4A4E57" stroke={COLORS.INK} strokeWidth={sw} seed={130} />
      {/* Small LCD display */}
      <rect x={54} y={30} width={44} height={14} rx={2} fill="#DCEAF6" stroke={COLORS.INK} strokeWidth={2} />
      {/* 3x3 Keypad buttons */}
      {[0, 1, 2].map((r) =>
        [0, 1, 2].map((c) => (
          <rect
            key={`${r}-${c}`}
            x={58 + c * 13}
            y={50 + r * 11}
            width={9}
            height={7}
            rx={1.5}
            fill="#FDFBF5"
            stroke={COLORS.INK}
            strokeWidth={1.5}
          />
        ))
      )}
      {/* Handset on left side of base */}
      <path
        d="M 22 16 C 14 16 12 28 16 34 L 20 38 L 20 66 L 16 70 C 12 76 14 88 22 88 L 38 88 C 42 88 44 80 40 74 L 34 68 L 34 36 L 40 30 C 44 24 42 16 38 16 Z"
        fill="#2A2723"
        stroke={COLORS.INK}
        strokeWidth={sw}
        strokeLinejoin="round"
      />
      {/* Coiled cord connecting handset to base */}
      <path
        d="M 26 88 C 20 98 30 104 34 96 C 32 104 42 104 44 96 C 44 104 54 102 54 90"
        fill="none"
        stroke={COLORS.INK}
        strokeWidth={3.5}
        strokeLinecap="round"
      />
    </svg>
  );
};

// 30. video_phone (تليفون مكتب بشاشة فيها وش)
export const IconVideoPhone: React.FC<IconProps> = ({size = 120, style}) => {
  const sw = size >= 160 ? 5 : 4;
  return (
    <svg width={size} height={size * 0.95} viewBox="0 0 120 114" style={style}>
      {/* Phone base */}
      <RoughRect x={14} y={24} w={96} h={76} fill="#4A4E57" stroke={COLORS.INK} strokeWidth={sw} seed={131} />
      {/* Camera on top */}
      <rect x={54} y={10} width={20} height={14} rx={4} fill="#2A2723" stroke={COLORS.INK} strokeWidth={2.5} />
      <circle cx={64} cy={17} r={4} fill={COLORS.BLUE_LIGHT} />
      {/* Handset on left */}
      <rect x={18} y={28} width={16} height={68} rx={6} fill="#2A2723" stroke={COLORS.INK} strokeWidth={3} />
      {/* Video screen with a clear face inside */}
      <rect x={40} y={32} width={50} height={46} rx={4} fill="#DCEAF6" stroke={COLORS.INK} strokeWidth={3} />
      {/* Shoulders in screen */}
      <path d="M 48 78 C 48 66 82 66 82 78 Z" fill={COLORS.NAVY} stroke={COLORS.INK} strokeWidth={2.5} />
      {/* Head/Face in screen */}
      <circle cx={65} cy={51} r={12} fill="#F5CD63" stroke={COLORS.INK} strokeWidth={2.5} />
      <circle cx={61} cy={49} r={2} fill={COLORS.INK} />
      <circle cx={69} cy={49} r={2} fill={COLORS.INK} />
      <path d="M 60 55 Q 65 60 70 55" fill="none" stroke={COLORS.INK} strokeWidth={2.2} strokeLinecap="round" />
      {/* Keypad buttons on right */}
      {[0, 1, 2].map((r) => (
        <rect key={r} x={95} y={36 + r * 13} width={9} height={8} rx={1.5} fill="#FDFBF5" stroke={COLORS.INK} strokeWidth={1.5} />
      ))}
    </svg>
  );
};

// 31. speaker_waves
export const IconSpeakerWaves: React.FC<IconProps> = ({size = 120, style}) => (
  <svg width={size} height={size * 0.8} viewBox="0 0 120 96" style={style}>
    <polygon points="20,36 36,36 56,18 56,78 36,60 20,60" fill="#B8C0C8" stroke={COLORS.INK} strokeWidth={4} strokeLinejoin="round" />
    <path d="M68,32 Q80,48 68,64" fill="none" stroke={COLORS.INK} strokeWidth={4} strokeLinecap="round" />
    <path d="M78,22 Q98,48 78,74" fill="none" stroke={COLORS.INK} strokeWidth={4} strokeLinecap="round" />
  </svg>
);

// 32. video_camera
export const IconVideoCamera: React.FC<IconProps> = ({size = 120, style}) => (
  <svg width={size} height={size * 0.75} viewBox="0 0 120 90" style={style}>
    <RoughRect x={12} y={20} w={68} h={52} fill="#B8C0C8" stroke={COLORS.INK} strokeWidth={4} seed={132} />
    <polygon points="80,36 108,22 108,70 80,56" fill="#7A8088" stroke={COLORS.INK} strokeWidth={4} strokeLinejoin="round" />
  </svg>
);

// 33. play_screen
export const IconPlayScreen: React.FC<IconProps> = ({size = 120, style}) => (
  <svg width={size} height={size * 0.75} viewBox="0 0 120 90" style={style}>
    <RoughRect x={10} y={10} w={100} h={70} fill="#2A2723" stroke={COLORS.INK} strokeWidth={4} seed={133} />
    <polygon points="50,30 76,45 50,60" fill={COLORS.WARN} stroke={COLORS.INK} strokeWidth={2} />
  </svg>
);

// 34. music_headphones
export const IconMusicHeadphones: React.FC<IconProps> = ({size = 120, style}) => (
  <svg width={size} height={size} viewBox="0 0 120 120" style={style}>
    <path d="M24,70 A42,42 0 0,1 96,70" fill="none" stroke={COLORS.INK} strokeWidth={6} strokeLinecap="round" />
    <RoughRect x={14} y={64} w={20} h={36} fill="#2A2723" stroke={COLORS.INK} strokeWidth={3} seed={134} />
    <RoughRect x={86} y={64} w={20} h={36} fill="#2A2723" stroke={COLORS.INK} strokeWidth={3} seed={135} />
  </svg>
);

// 35. big_file
export const IconBigFile: React.FC<IconProps> = ({size = 120, style}) => (
  <svg width={size * 0.8} height={size} viewBox="0 0 96 120" style={style}>
    <path d="M16,10 L64,10 L84,30 L84,110 L16,110 Z" fill="#FDFBF5" stroke={COLORS.INK} strokeWidth={4} strokeLinejoin="round" />
    <polygon points="64,10 64,30 84,30" fill="#B8C0C8" stroke={COLORS.INK} strokeWidth={3} />
    <line x1={28} y1={50} x2={72} y2={50} stroke={COLORS.INK} strokeWidth={4} />
    <line x1={28} y1={70} x2={72} y2={70} stroke={COLORS.INK} strokeWidth={4} />
    <line x1={28} y1={90} x2={60} y2={90} stroke={COLORS.INK} strokeWidth={4} />
  </svg>
);

// 36. small_file
export const IconSmallFile: React.FC<IconProps> = ({size = 120, style}) => (
  <svg width={size * 0.6} height={size * 0.8} viewBox="0 0 72 96" style={style}>
    <path d="M12,8 L48,8 L64,24 L64,88 L12,88 Z" fill="#FDFBF5" stroke={COLORS.INK} strokeWidth={3} strokeLinejoin="round" />
    <polygon points="48,8 48,24 64,24" fill="#B8C0C8" stroke={COLORS.INK} strokeWidth={2} />
    <line x1={20} y1={40} x2={56} y2={40} stroke={COLORS.INK} strokeWidth={3} />
    <line x1={20} y1={58} x2={56} y2={58} stroke={COLORS.INK} strokeWidth={3} />
  </svg>
);

// 37. press_vise (لوحين بينهم ملف بيتضغط + سهمين لجوه)
export const IconPressVise: React.FC<IconProps> = ({size = 120, style}) => {
  const sw = size >= 160 ? 5 : 4;
  return (
    <svg width={size} height={size * 0.9} viewBox="0 0 120 108" style={style}>
      {/* Top inward arrow pointing down */}
      <line x1={60} y1={2} x2={60} y2={22} stroke={COLORS.RED} strokeWidth={sw + 1} strokeLinecap="round" />
      <polyline points="50,14 60,24 70,14" fill="none" stroke={COLORS.RED} strokeWidth={sw + 1} strokeLinecap="round" strokeLinejoin="round" />
      {/* Top press plate */}
      <RoughRect x={14} y={26} w={92} h={14} fill="#7A8088" stroke={COLORS.INK} strokeWidth={sw} seed={136} />
      {/* Squished file between plates */}
      <path
        d="M 34 40 Q 26 54 34 68 L 86 68 Q 94 54 86 40 Z"
        fill={COLORS.HILITE}
        stroke={COLORS.INK}
        strokeWidth={sw - 0.5}
        strokeLinejoin="round"
      />
      {/* File lines inside squished file */}
      <line x1={42} y1={49} x2={78} y2={49} stroke={COLORS.INK} strokeWidth={2.5} strokeLinecap="round" />
      <line x1={40} y1={56} x2={80} y2={56} stroke={COLORS.INK} strokeWidth={2.5} strokeLinecap="round" />
      <line x1={44} y1={62} x2={72} y2={62} stroke={COLORS.INK} strokeWidth={2.5} strokeLinecap="round" />
      {/* Bottom press plate */}
      <RoughRect x={14} y={68} w={92} h={14} fill="#7A8088" stroke={COLORS.INK} strokeWidth={sw} seed={137} />
      {/* Bottom inward arrow pointing up */}
      <line x1={60} y1={106} x2={60} y2={86} stroke={COLORS.RED} strokeWidth={sw + 1} strokeLinecap="round" />
      <polyline points="50,94 60,84 70,94" fill="none" stroke={COLORS.RED} strokeWidth={sw + 1} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

// 38. packet_cube
export const IconPacketCube: React.FC<IconProps & {variant?: 'safe' | 'malicious'}> = ({
  size = 120,
  style,
  variant = 'safe',
}) => {
  const isMal = variant === 'malicious';
  const topFill = isMal ? '#FF5E65' : COLORS.BLUE_LIGHT;
  const leftFill = isMal ? COLORS.SDN_RED : '#9ED3EC';
  const rightFill = isMal ? COLORS.SDN_RED_SIDE : '#59AFD8';
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" style={style}>
      {/* 3D isometric cube */}
      <polygon points="60,16 102,40 60,64 18,40" fill={topFill} stroke={COLORS.INK} strokeWidth={4} strokeLinejoin="round" />
      <polygon points="18,40 60,64 60,106 18,82" fill={leftFill} stroke={COLORS.INK} strokeWidth={4} strokeLinejoin="round" />
      <polygon points="102,40 60,64 60,106 102,82" fill={rightFill} stroke={COLORS.INK} strokeWidth={4} strokeLinejoin="round" />
    </svg>
  );
};

// 39. warning_triangle (WARN + «!» INK)
export const IconWarningTriangle: React.FC<IconProps> = ({size = 120, style}) => (
  <svg width={size} height={size * 0.9} viewBox="0 0 120 108" style={style}>
    <polygon points="60,12 110,98 10,98" fill={COLORS.WARN} stroke={COLORS.INK} strokeWidth={5} strokeLinejoin="round" />
    <line x1={60} y1={42} x2={60} y2={68} stroke={COLORS.INK} strokeWidth={6} strokeLinecap="round" />
    <circle cx={60} cy={82} r={4.5} fill={COLORS.INK} />
  </svg>
);

// 40. question_mark
export const IconQuestionMark: React.FC<IconProps> = ({size = 120, style}) => (
  <svg width={size * 0.7} height={size} viewBox="0 0 84 120" style={style}>
    <path d="M22,34 C22,18 36,12 48,12 C62,12 72,22 72,34 C72,46 60,52 50,60 C46,64 46,72 46,76" fill="none" stroke={COLORS.RED} strokeWidth={8} strokeLinecap="round" />
    <circle cx={46} cy={96} r={6} fill={COLORS.RED} />
  </svg>
);

// 41. banknote (MONEY)
export const IconBanknote: React.FC<IconProps> = ({size = 120, style}) => (
  <svg width={size} height={size * 0.6} viewBox="0 0 120 72" style={style}>
    <RoughRect x={8} y={8} w={104} h={56} fill={COLORS.MONEY} stroke={COLORS.INK} strokeWidth={4} seed={138} />
    <circle cx={60} cy={36} r={14} fill="none" stroke={COLORS.INK} strokeWidth={3} />
    <text x={60} y={42} fill={COLORS.INK} fontFamily="Arial" fontSize={18} fontWeight="bold" textAnchor="middle">$</text>
  </svg>
);

// 42. coin_down
export const IconCoinDown: React.FC<IconProps> = ({size = 120, style}) => (
  <svg width={size} height={size} viewBox="0 0 120 120" style={style}>
    <circle cx={60} cy={45} r={28} fill={COLORS.YELLOW} stroke={COLORS.INK} strokeWidth={4} />
    <text x={60} y={54} fill={COLORS.INK} fontFamily="Arial" fontSize={26} fontWeight="bold" textAnchor="middle">$</text>
    <path d="M60,78 L60,110 M46,96 L60,110 L74,96" fill="none" stroke={COLORS.GREEN} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 43. rising_chart
export const IconRisingChart: React.FC<IconProps> = ({size = 120, style}) => (
  <svg width={size} height={size * 0.8} viewBox="0 0 120 96" style={style}>
    <line x1={14} y1={84} x2={108} y2={84} stroke={COLORS.INK} strokeWidth={4} strokeLinecap="round" />
    <line x1={14} y1={84} x2={14} y2={14} stroke={COLORS.INK} strokeWidth={4} strokeLinecap="round" />
    <path d="M22,68 L50,52 L76,62 L104,24" fill="none" stroke={COLORS.GREEN} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M92,24 L104,24 L104,36" fill="none" stroke={COLORS.GREEN} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 44. clipboard_gear
export const IconClipboardGear: React.FC<IconProps> = ({size = 120, style}) => (
  <svg width={size * 0.85} height={size} viewBox="0 0 102 120" style={style}>
    <RoughRect x={12} y={16} w={78} h={96} fill="#FDFBF5" stroke={COLORS.INK} strokeWidth={4} seed={139} />
    <rect x={36} y={8} width={30} height={16} rx={4} fill="#B8C0C8" stroke={COLORS.INK} strokeWidth={3} />
    <line x1={24} y1={42} x2={78} y2={42} stroke={COLORS.INK} strokeWidth={3} />
    <line x1={24} y1={58} x2={78} y2={58} stroke={COLORS.INK} strokeWidth={3} />
    <circle cx={51} cy={82} r={12} fill="#B8C0C8" stroke={COLORS.INK} strokeWidth={3} />
  </svg>
);

// 45. dashboard
export const IconDashboard: React.FC<IconProps> = ({size = 120, style}) => (
  <svg width={size} height={size * 0.75} viewBox="0 0 120 90" style={style}>
    <RoughRect x={8} y={8} w={104} h={74} fill="#2A2723" stroke={COLORS.INK} strokeWidth={4} seed={140} />
    <circle cx={38} cy={45} r={18} fill="none" stroke={COLORS.GREEN} strokeWidth={4} />
    <line x1={38} y1={45} x2={48} y2={35} stroke={COLORS.GREEN} strokeWidth={3} />
    <rect x={70} y={26} width={30} height={8} fill={COLORS.WARN} />
    <rect x={70} y={42} width={24} height={8} fill={COLORS.BLUE_LIGHT} />
    <rect x={70} y={58} width={30} height={8} fill={COLORS.RED} />
  </svg>
);

// 46. toolbox
export const IconToolbox: React.FC<IconProps> = ({size = 120, style}) => (
  <svg width={size} height={size * 0.8} viewBox="0 0 120 96" style={style}>
    <path d="M44,24 L44,14 L76,14 L76,24" fill="none" stroke={COLORS.INK} strokeWidth={4} />
    <RoughRect x={10} y={24} w={100} h={64} fill={COLORS.RED} stroke={COLORS.INK} strokeWidth={4} seed={141} />
    <rect x={50} y={46} width={20} height={14} fill={COLORS.YELLOW} stroke={COLORS.INK} strokeWidth={2} />
  </svg>
);

// 47. monitor_chart
export const IconMonitorChart: React.FC<IconProps> = ({size = 120, style}) => (
  <svg width={size} height={size * 0.85} viewBox="0 0 120 102" style={style}>
    <RoughRect x={12} y={8} w={96} h={64} fill="#FFFFFF" stroke={COLORS.INK} strokeWidth={4} seed={142} />
    <path d="M24,54 L44,38 L68,48 L96,24" fill="none" stroke={COLORS.BLUE_LIGHT} strokeWidth={4} />
    <RoughRect x={48} y={72} w={24} h={12} fill="#7A8088" stroke={COLORS.INK} strokeWidth={3} seed={143} />
    <RoughRect x={32} y={84} w={56} h={8} fill="#DFE2E0" stroke={COLORS.INK} strokeWidth={2} seed={144} />
  </svg>
);

// 48. calendar
export const IconCalendar: React.FC<IconProps> = ({size = 120, style}) => (
  <svg width={size * 0.9} height={size} viewBox="0 0 108 120" style={style}>
    <RoughRect x={8} y={18} w={92} h={92} fill="#FDFBF5" stroke={COLORS.INK} strokeWidth={4} seed={145} />
    <rect x={8} y={18} width={92} height={26} fill={COLORS.RED} stroke={COLORS.INK} strokeWidth={2} />
    <line x1={28} y1={8} x2={28} y2={24} stroke={COLORS.INK} strokeWidth={5} strokeLinecap="round" />
    <line x1={80} y1={8} x2={80} y2={24} stroke={COLORS.INK} strokeWidth={5} strokeLinecap="round" />
    <circle cx={34} cy={66} r={5} fill={COLORS.INK} />
    <circle cx={54} cy={66} r={5} fill={COLORS.INK} />
    <circle cx={74} cy={66} r={5} fill={COLORS.INK} />
    <circle cx={34} cy={88} r={5} fill={COLORS.INK} />
    <circle cx={54} cy={88} r={5} fill={COLORS.INK} />
  </svg>
);

// 49. checklist
export const IconChecklist: React.FC<IconProps> = ({size = 120, style}) => (
  <svg width={size * 0.85} height={size} viewBox="0 0 102 120" style={style}>
    <RoughRect x={10} y={10} w={82} h={100} fill="#FDFBF5" stroke={COLORS.INK} strokeWidth={4} seed={146} />
    <path d="M22,36 L30,44 L44,26" fill="none" stroke={COLORS.GREEN} strokeWidth={4} strokeLinecap="round" />
    <line x1={52} y1={36} x2={82} y2={36} stroke={COLORS.INK} strokeWidth={3} />
    <path d="M22,66 L30,74 L44,56" fill="none" stroke={COLORS.GREEN} strokeWidth={4} strokeLinecap="round" />
    <line x1={52} y1={66} x2={82} y2={66} stroke={COLORS.INK} strokeWidth={3} />
    <path d="M22,96 L30,104 L44,86" fill="none" stroke={COLORS.GREEN} strokeWidth={4} strokeLinecap="round" />
    <line x1={52} y1={96} x2={82} y2={96} stroke={COLORS.INK} strokeWidth={3} />
  </svg>
);

// 50. datacenter_building
export const IconDatacenterBuilding: React.FC<IconProps> = ({size = 120, style}) => (
  <svg width={size} height={size * 0.9} viewBox="0 0 120 108" style={style}>
    <RoughRect x={16} y={18} w={88} h={84} fill="#DFE2E0" stroke={COLORS.INK} strokeWidth={4} seed={147} />
    <rect x={26} y={30} width={28} height={16} fill="#4A4E57" stroke={COLORS.INK} strokeWidth={2} />
    <rect x={66} y={30} width={28} height={16} fill="#4A4E57" stroke={COLORS.INK} strokeWidth={2} />
    <rect x={26} y={54} width={28} height={16} fill="#4A4E57" stroke={COLORS.INK} strokeWidth={2} />
    <rect x={66} y={54} width={28} height={16} fill="#4A4E57" stroke={COLORS.INK} strokeWidth={2} />
    <RoughRect x={46} y={76} w={28} h={26} fill="#B8C0C8" stroke={COLORS.INK} strokeWidth={3} seed={148} />
  </svg>
);

// 51. nas_box
export const IconNasBox: React.FC<IconProps> = ({size = 120, style}) => (
  <svg width={size} height={size * 0.8} viewBox="0 0 120 96" style={style}>
    <RoughRect x={12} y={12} w={96} h={72} fill="#DFE2E0" stroke={COLORS.INK} strokeWidth={4} seed={149} />
    <rect x={22} y={24} width={14} height={48} rx={2} fill="#7A8088" />
    <rect x={42} y={24} width={14} height={48} rx={2} fill="#7A8088" />
    <rect x={62} y={24} width={14} height={48} rx={2} fill="#7A8088" />
    <rect x={82} y={24} width={14} height={48} rx={2} fill="#7A8088" />
    <circle cx={98} cy={20} r={3} fill={COLORS.GREEN} />
  </svg>
);

// 52. block_grid (3x3)
export const IconBlockGrid: React.FC<IconProps> = ({size = 120, style}) => (
  <svg width={size} height={size} viewBox="0 0 120 120" style={style}>
    {[0, 1, 2].map((r) =>
      [0, 1, 2].map((c) => (
        <RoughRect
          key={`${r}-${c}`}
          x={14 + c * 34}
          y={14 + r * 34}
          w={26}
          h={26}
          fill={COLORS.SDN_BLUE_FACE}
          stroke={COLORS.INK}
          strokeWidth={3}
          seed={150 + r * 3 + c}
        />
      ))
    )}
  </svg>
);

// 53. controller_red (صندوق أحمر طويل 3D)
export const IconControllerRed: React.FC<IconProps> = ({size = 120, style}) => (
  <svg width={size * 0.75} height={size} viewBox="0 0 90 120" style={style}>
    <polygon points="45,10 78,28 45,46 12,28" fill="#FF5E65" stroke={COLORS.INK} strokeWidth={4} strokeLinejoin="round" />
    <polygon points="12,28 45,46 45,108 12,90" fill={COLORS.SDN_RED} stroke={COLORS.INK} strokeWidth={4} strokeLinejoin="round" />
    <polygon points="78,28 45,46 45,108 78,90" fill={COLORS.SDN_RED_SIDE} stroke={COLORS.INK} strokeWidth={4} strokeLinejoin="round" />
  </svg>
);

// 54. trad_switch (لوح أحمر فوق لوح أزرق)
export const IconTradSwitch: React.FC<IconProps> = ({size = 120, style}) => (
  <svg width={size} height={size * 0.8} viewBox="0 0 120 96" style={style}>
    {/* Blue plate bottom */}
    <polygon points="60,34 104,50 60,66 16,50" fill={COLORS.SDN_BLUE_FACE} stroke={COLORS.INK} strokeWidth={3} />
    <polygon points="16,50 60,66 60,82 16,66" fill={COLORS.SDN_BLUE} stroke={COLORS.INK} strokeWidth={3} />
    <polygon points="104,50 60,66 60,82 104,66" fill={COLORS.SDN_BLUE_SIDE} stroke={COLORS.INK} strokeWidth={3} />
    {/* Red plate top */}
    <polygon points="60,10 104,26 60,42 16,26" fill="#FF5E65" stroke={COLORS.INK} strokeWidth={3} />
    <polygon points="16,26 60,42 60,54 16,38" fill={COLORS.SDN_RED} stroke={COLORS.INK} strokeWidth={3} />
    <polygon points="104,26 60,42 60,54 104,38" fill={COLORS.SDN_RED_SIDE} stroke={COLORS.INK} strokeWidth={3} />
  </svg>
);

// 55. prog_switch (لوح أزرق بس)
export const IconProgSwitch: React.FC<IconProps> = ({size = 120, style}) => (
  <svg width={size} height={size * 0.7} viewBox="0 0 120 84" style={style}>
    <polygon points="60,14 106,34 60,54 14,34" fill={COLORS.SDN_BLUE_FACE} stroke={COLORS.INK} strokeWidth={4} />
    <polygon points="14,34 60,54 60,74 14,54" fill={COLORS.SDN_BLUE} stroke={COLORS.INK} strokeWidth={4} />
    <polygon points="106,34 60,54 60,74 106,54" fill={COLORS.SDN_BLUE_SIDE} stroke={COLORS.INK} strokeWidth={4} />
  </svg>
);

// 56. office_building
export const IconOfficeBuilding: React.FC<IconProps> = ({size = 120, style}) => (
  <svg width={size * 0.8} height={size} viewBox="0 0 96 120" style={style}>
    <RoughRect x={10} y={10} w={76} h={104} fill="#DFE2E0" stroke={COLORS.INK} strokeWidth={4} seed={151} />
    {[0, 1, 2, 3].map((r) =>
      [0, 1].map((c) => (
        <rect key={`${r}-${c}`} x={22 + c * 32} y={22 + r * 20} width={18} height={12} fill="#DCEAF6" stroke={COLORS.INK} strokeWidth={2} />
      ))
    )}
  </svg>
);

// 57. gate_open
export const IconGateOpen: React.FC<IconProps> = ({size = 120, style}) => (
  <svg width={size} height={size * 0.8} viewBox="0 0 120 96" style={style}>
    {/* Left post */}
    <RoughRect x={14} y={14} w={14} h={74} fill="#7A8088" stroke={COLORS.INK} strokeWidth={3} seed={152} />
    {/* Right post */}
    <RoughRect x={92} y={14} w={14} h={74} fill="#7A8088" stroke={COLORS.INK} strokeWidth={3} seed={153} />
    {/* Swung open gates */}
    <line x1={28} y1={30} x2={50} y2={50} stroke={COLORS.INK} strokeWidth={4} />
    <line x1={28} y1={60} x2={50} y2={80} stroke={COLORS.INK} strokeWidth={4} />
    <line x1={92} y1={30} x2={70} y2={50} stroke={COLORS.INK} strokeWidth={4} />
    <line x1={92} y1={60} x2={70} y2={80} stroke={COLORS.INK} strokeWidth={4} />
  </svg>
);

// All icons map for debugging & testing
export const ALL_ICONS: {name: string; Component: React.FC<IconProps>}[] = [
  {name: 'server_box', Component: IconServerBox},
  {name: 'server_tower', Component: IconServerTower},
  {name: 'rack', Component: IconRack},
  {name: 'desktop_pc', Component: IconDesktopPc},
  {name: 'laptop', Component: IconLaptop},
  {name: 'laptop_browser', Component: IconLaptopBrowser},
  {name: 'terminal_crt', Component: IconTerminalCrt},
  {name: 'smartphone', Component: IconSmartphone},
  {name: 'tablet', Component: IconTablet},
  {name: 'tv', Component: IconTv},
  {name: 'cloud', Component: IconCloud},
  {name: 'switch', Component: IconSwitch},
  {name: 'router', Component: IconRouter},
  {name: 'firewall_wall', Component: IconFirewallWall},
  {name: 'lock', Component: IconLock},
  {name: 'eye', Component: IconEye},
  {name: 'eye_crossed', Component: IconEyeCrossed},
  {name: 'magnifier', Component: IconMagnifier},
  {name: 'storage_cylinder', Component: IconStorageCylinder},
  {name: 'vm_box', Component: IconVmBox},
  {name: 'folder', Component: IconFolder},
  {name: 'hard_drive', Component: IconHardDrive},
  {name: 'gear', Component: IconGear},
  {name: 'wrench', Component: IconWrench},
  {name: 'speedometer', Component: IconSpeedometer},
  {name: 'shield', Component: IconShield},
  {name: 'power_clock', Component: IconPowerClock},
  {name: 'globe', Component: IconGlobe},
  {name: 'desk_phone', Component: IconDeskPhone},
  {name: 'video_phone', Component: IconVideoPhone},
  {name: 'speaker_waves', Component: IconSpeakerWaves},
  {name: 'video_camera', Component: IconVideoCamera},
  {name: 'play_screen', Component: IconPlayScreen},
  {name: 'music_headphones', Component: IconMusicHeadphones},
  {name: 'big_file', Component: IconBigFile},
  {name: 'small_file', Component: IconSmallFile},
  {name: 'press_vise', Component: IconPressVise},
  {name: 'packet_cube', Component: IconPacketCube},
  {name: 'warning_triangle', Component: IconWarningTriangle},
  {name: 'question_mark', Component: IconQuestionMark},
  {name: 'banknote', Component: IconBanknote},
  {name: 'coin_down', Component: IconCoinDown},
  {name: 'rising_chart', Component: IconRisingChart},
  {name: 'clipboard_gear', Component: IconClipboardGear},
  {name: 'dashboard', Component: IconDashboard},
  {name: 'toolbox', Component: IconToolbox},
  {name: 'monitor_chart', Component: IconMonitorChart},
  {name: 'calendar', Component: IconCalendar},
  {name: 'checklist', Component: IconChecklist},
  {name: 'datacenter_building', Component: IconDatacenterBuilding},
  {name: 'nas_box', Component: IconNasBox},
  {name: 'block_grid', Component: IconBlockGrid},
  {name: 'controller_red', Component: IconControllerRed},
  {name: 'trad_switch', Component: IconTradSwitch},
  {name: 'prog_switch', Component: IconProgSwitch},
  {name: 'office_building', Component: IconOfficeBuilding},
  {name: 'gate_open', Component: IconGateOpen},
];
