// src/lib/bidi.tsx
import React from 'react';

const RUN = /\(?[A-Za-z0-9][A-Za-z0-9 .,:&/+\-–'’%#=()]*[A-Za-z0-9)%]/g;

export function bidiSegments(s: string): {text: string; ltr: boolean}[] {
  const out: {text: string; ltr: boolean}[] = [];
  let last = 0;
  for (const m of s.matchAll(RUN)) {
    const i = m.index ?? 0;
    if (i > last) out.push({text: s.slice(last, i), ltr: false});
    out.push({text: m[0], ltr: true});
    last = i + m[0].length;
  }
  if (last < s.length) out.push({text: s.slice(last), ltr: false});
  return out;
}

export const BidiText: React.FC<{text: string; className?: string; style?: React.CSSProperties}> = ({
  text,
  className,
  style,
}) => {
  const segments = bidiSegments(text);
  return (
    <span dir="rtl" className={className} style={style}>
      {segments.map((seg, idx) =>
        seg.ltr ? (
          <bdi key={idx} dir="ltr">
            {seg.text}
          </bdi>
        ) : (
          <React.Fragment key={idx}>{seg.text}</React.Fragment>
        )
      )}
    </span>
  );
};
