// src/components/layout_components.tsx
import React, {useMemo} from 'react';
import {useCurrentFrame, staticFile} from 'remotion';
import {COLORS, FONTS} from '../theme';
import {FONT_FAMILIES} from '../lib/fonts';
import {SketchBox, SvgDiamond} from './index';

// 1. AgendaChip (Section 5.4 & 5.8: Top-left topic chip for S1 of V2..V8)
export const AgendaChip: React.FC<{
  topicNumber: number;
  topicTitle: string;
  startFrame?: number;
}> = ({topicNumber, topicTitle, startFrame = 4}) => {
  const frame = useCurrentFrame();
  const rel = Math.max(0, frame - startFrame);
  const progress = Math.min(1, rel / 7); // ~0.30s
  const opacity = progress;
  const translateY = (1 - progress) * -8;

  if (frame < startFrame) return null;

  return (
    <div
      style={{
        position: 'absolute',
        left: 40,
        top: 24,
        height: 44,
        border: `2px solid ${COLORS.INK}`,
        borderRadius: 12,
        backgroundColor: COLORS.CARD,
        paddingLeft: 14,
        paddingRight: 14,
        maxWidth: 900,
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        opacity,
        transform: `translateY(${translateY}px)`,
        zIndex: 40,
        whiteSpace: 'nowrap',
      }}
    >
      <span
        dir="rtl"
        style={{
          fontFamily: FONTS.BODY,
          fontWeight: 600,
          fontSize: 24,
          color: COLORS.MUTED,
        }}
      >
        الموضوع {topicNumber} من 7 في الـ Agenda:
      </span>
      <bdi
        dir="ltr"
        style={{
          fontFamily: FONTS.EN_TITLE,
          fontWeight: 700,
          fontSize: 26,
          color: COLORS.INK,
        }}
      >
        {topicTitle}
      </bdi>
    </div>
  );
};

// 2. SlideCrop (Section 5.4: Crop region from slides_up on white background)
export const SlideCrop: React.FC<{
  src: string;
  region: {x0: number; x1: number; y0: number; y1: number}; // percentage 0..100
  width: number;
  height: number;
  style?: React.CSSProperties;
}> = ({src, region, width, height, style}) => {
  const regW = Math.max(0.001, (region.x1 - region.x0) / 100);
  const regH = Math.max(0.001, (region.y1 - region.y0) / 100);

  const imgW = width / regW;
  const imgH = height / regH;
  const offsetX = -(region.x0 / 100) * imgW;
  const offsetY = -(region.y0 / 100) * imgH;

  return (
    <div
      style={{
        width,
        height,
        backgroundColor: '#FFFFFF',
        padding: 6,
        border: `2px solid ${COLORS.INK}`,
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        ...style,
      }}
    >
      <img
        src={staticFile(src)}
        alt="Crop"
        style={{
          position: 'absolute',
          left: offsetX,
          top: offsetY,
          width: imgW,
          height: imgH,
          objectFit: 'contain',
        }}
      />
    </div>
  );
};

// 3. NextChip (Section 5.4: Tag at bottom-right for next lecture topic)
export const NextChip: React.FC<{
  nextTitle: string;
  startFrame?: number;
}> = ({nextTitle, startFrame = 115}) => {
  const frame = useCurrentFrame();
  const rel = Math.max(0, frame - startFrame);
  const scale = rel <= 0 ? 0 : Math.min(1, rel / 6);

  if (frame < startFrame) return null;

  return (
    <div
      style={{
        position: 'absolute',
        right: 1920 - 1860,
        top: 850,
        height: 70,
        backgroundColor: COLORS.CARD,
        border: `4px solid ${COLORS.RED}`,
        borderRadius: 14,
        padding: '0 20px',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        transform: `scale(${scale})`,
        transformOrigin: 'right center',
        zIndex: 35,
        whiteSpace: 'nowrap',
      }}
    >
      <span
        style={{
          fontFamily: FONTS.BODY,
          fontWeight: 700,
          fontSize: 26,
          color: COLORS.RED,
        }}
      >
        الجاي:
      </span>
      <span
        style={{
          fontFamily: FONTS.EN_TITLE,
          fontWeight: 700,
          fontSize: 26,
          color: COLORS.INK,
        }}
      >
        {nextTitle}
      </span>
    </div>
  );
};

// 4. LinkNode (Section 5.4: Node Card in LAYOUT_L connecting topics)
export const LinkNode: React.FC<{
  x: number;
  y: number;
  w: number;
  h: number;
  directionText: string;
  topicTitle: string;
  arabicText: string;
  labels: string[];
  crop?: {src: string; region: {x0: number; x1: number; y0: number; y1: number}};
  icon?: React.ReactNode;
  startFrame?: number;
  seed?: number;
}> = ({
  x,
  y,
  w,
  h,
  directionText,
  topicTitle,
  arabicText,
  labels,
  crop,
  icon,
  startFrame = 35,
  seed = 50,
}) => {
  const frame = useCurrentFrame();
  if (frame < startFrame) return null;

  const rel = frame - startFrame;
  const opacity = Math.min(1, rel / 8);

  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: w,
        height: h,
        opacity,
        zIndex: 20,
      }}
    >
      <SketchBox x={0} y={0} w={w} h={h} seed={seed} startFrame={0} drawDurationFrames={8}>
        <div style={{padding: '16px 20px', display: 'flex', flexDirection: 'column', height: '100%', boxSizing: 'border-box'}}>
          {/* Direction */}
          <div
            dir="rtl"
            style={{
              fontFamily: FONTS.BODY,
              fontWeight: 600,
              fontSize: 24,
              color: COLORS.MUTED,
              marginBottom: 4,
            }}
          >
            {directionText}
          </div>

          {/* Topic */}
          <div
            dir="ltr"
            style={{
              fontFamily: FONTS.EN_TITLE,
              fontWeight: 700,
              fontSize: 28,
              color: COLORS.INK,
              marginBottom: 10,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {topicTitle}
          </div>

          {/* Middle */}
          <div style={{display: 'flex', gap: 16, alignItems: 'center', flex: 1}}>
            {crop && (
              <SlideCrop
                src={crop.src}
                region={crop.region}
                width={w > 600 ? 240 : 200}
                height={w > 600 ? 150 : 130}
              />
            )}
            {icon && (
              <div style={{width: 120, height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                {icon}
              </div>
            )}
            <div
              dir="rtl"
              style={{
                flex: 1,
                fontFamily: FONTS.BODY,
                fontWeight: 500,
                fontSize: 26,
                lineHeight: 1.45,
                color: COLORS.INK,
              }}
            >
              {arabicText}
            </div>
          </div>

          {/* Labels */}
          {labels.length > 0 && (
            <div
              dir="ltr"
              style={{
                fontFamily: FONTS.EN_TITLE,
                fontWeight: 700,
                fontSize: 22,
                color: COLORS.INK,
                marginTop: 8,
              }}
            >
              {labels.join(' · ')}
            </div>
          )}
        </div>
      </SketchBox>
    </div>
  );
};

// 5. StudyCard Block Type & Component (Section 5.3 & 5.4: LAYOUT_R)
export type SlideBlock = {
  slideNumber: number | string;
  title: string;
  paragraphs: string[];
  imageSrc?: string;
  fromImageNotice?: boolean;
};

export type GlossaryItem = {
  term: string;
  meaning: string;
};

export const StudyCard: React.FC<{
  slideTags: string[];
  blocks: SlideBlock[];
  glossary?: GlossaryItem[];
  isTwoColumnText?: boolean; // For V1
  blocksCol2?: SlideBlock[]; // For V1
  startFrame?: number;
}> = ({
  slideTags,
  blocks,
  glossary = [],
  isTwoColumnText = false,
  blocksCol2 = [],
  startFrame = 5,
}) => {
  const frame = useCurrentFrame();
  const rel = Math.max(0, frame - startFrame);

  // Reveal timeline
  // Card drawn 0.20-0.70s (frames 5 to 17)
  // Title 0.75-1.25s (frames 18 to 30)
  // Tags 1.25s (frame 30)
  // Line 1.35-1.55s (frames 32 to 37)
  // Blocks 1.50-3.10s (frames 36 to 74)
  // Glossary 3.30-4.30s (frames 79 to 103)
  const showTitle = rel >= 13;
  const showTags = rel >= 25;
  const showLines = rel >= 28;
  const showBlocks = rel >= 31;
  const showGlossary = rel >= 70;

  return (
    <div
      style={{
        position: 'absolute',
        left: 60,
        top: 80,
        width: 1800,
        height: 870,
        zIndex: 20,
      }}
    >
      <SketchBox x={0} y={0} w={1800} h={870} seed={99} startFrame={0} drawDurationFrames={12}>
        <div style={{padding: '24px 36px', height: '100%', boxSizing: 'border-box', position: 'relative'}}>
          {/* Header */}
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 60}}>
            {/* Left: Slide Tags */}
            <div style={{display: 'flex', gap: 12, opacity: showTags ? 1 : 0}}>
              {slideTags.map((tag, i) => (
                <div
                  key={i}
                  style={{
                    border: `2px solid ${COLORS.INK}`,
                    borderRadius: 8,
                    padding: '4px 12px',
                    fontFamily: FONTS.EN_TITLE,
                    fontWeight: 700,
                    fontSize: 26,
                    color: COLORS.INK,
                  }}
                >
                  {tag}
                </div>
              ))}
            </div>

            {/* Right: Title */}
            {showTitle && (
              <div
                dir="rtl"
                style={{
                  fontFamily: FONT_FAMILIES.HOOK,
                  fontWeight: 700,
                  fontSize: 48,
                  color: COLORS.INK,
                }}
              >
                بطاقة المذاكرة: نص المحاضرة كامل
              </div>
            )}
          </div>

          {/* Separator Line */}
          {showLines && (
            <div
              style={{
                width: '100%',
                height: 2,
                backgroundColor: COLORS.INK,
                marginTop: 12,
                marginBottom: 16,
              }}
            />
          )}

          {/* Content Columns */}
          <div style={{display: 'flex', height: 720, gap: 30}}>
            {/* Left Column: Verbatim Slide Text */}
            <div
              dir="ltr"
              style={{
                flex: isTwoColumnText ? 1 : 1.7,
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
                opacity: showBlocks ? 1 : 0,
              }}
            >
              {blocks.map((b, bi) => (
                <div key={bi} style={{display: 'flex', flexDirection: 'column', gap: 6}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                    <span style={{fontFamily: FONTS.EN_TITLE, fontWeight: 700, fontSize: 30, color: COLORS.INK}}>
                      Slide {b.slideNumber}
                    </span>
                    <span style={{fontFamily: FONTS.BODY, fontWeight: 700, fontSize: 32, color: COLORS.INK}}>
                      {b.title}
                    </span>
                  </div>

                  {b.paragraphs.map((p, pi) => (
                    <div
                      key={pi}
                      style={{
                        fontFamily: FONTS.BODY,
                        fontWeight: 600,
                        fontSize: 27,
                        lineHeight: 1.45,
                        color: COLORS.INK,
                        whiteSpace: 'pre-line',
                      }}
                    >
                      {p}
                    </div>
                  ))}

                  {b.imageSrc && (
                    <div style={{marginTop: 6, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                      <img
                        src={staticFile(b.imageSrc)}
                        alt="Slide Fig"
                        style={{
                          maxHeight: 240,
                          maxWidth: '90%',
                          border: `2px solid ${COLORS.INK}`,
                          objectFit: 'contain',
                        }}
                      />
                      <span style={{fontFamily: FONTS.BODY, fontWeight: 500, fontSize: 22, color: COLORS.MUTED, marginTop: 4}}>
                        (رسمة الشريحة)
                      </span>
                    </div>
                  )}

                  {b.fromImageNotice && (
                    <span style={{fontFamily: FONTS.BODY, fontWeight: 500, fontSize: 22, color: COLORS.MUTED}}>
                      (من جوه الصورة)
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Vertical Line */}
            {showLines && (
              <div style={{width: 2, height: '90%', backgroundColor: COLORS.INK, alignSelf: 'center'}} />
            )}

            {/* Right Column: Glossary or Column 2 for V1 */}
            {isTwoColumnText ? (
              <div
                dir="ltr"
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 20,
                  opacity: showBlocks ? 1 : 0,
                }}
              >
                {blocksCol2.map((b, bi) => (
                  <div key={bi} style={{display: 'flex', flexDirection: 'column', gap: 6}}>
                    <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                      <span style={{fontFamily: FONTS.EN_TITLE, fontWeight: 700, fontSize: 30, color: COLORS.INK}}>
                        Slide {b.slideNumber}
                      </span>
                      <span style={{fontFamily: FONTS.BODY, fontWeight: 700, fontSize: 32, color: COLORS.INK}}>
                        {b.title}
                      </span>
                    </div>
                    {b.paragraphs.map((p, pi) => (
                      <div
                        key={pi}
                        style={{
                          fontFamily: FONTS.BODY,
                          fontWeight: 600,
                          fontSize: 27,
                          lineHeight: 1.45,
                          color: COLORS.INK,
                          whiteSpace: 'pre-line',
                        }}
                      >
                        {p}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ) : (
              <div
                dir="rtl"
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                  opacity: showGlossary ? 1 : 0,
                }}
              >
                <div
                  style={{
                    fontFamily: FONT_FAMILIES.HOOK,
                    fontWeight: 700,
                    fontSize: 36,
                    color: COLORS.INK,
                    marginBottom: 8,
                  }}
                >
                  مصطلحات مهمة
                </div>

                {glossary.map((g, gi) => (
                  <div
                    key={gi}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 2,
                      paddingBottom: 6,
                    }}
                  >
                    <div
                      dir="ltr"
                      style={{
                        fontFamily: FONTS.EN_TITLE,
                        fontWeight: 700,
                        fontSize: 26,
                        color: COLORS.INK,
                        textAlign: 'right',
                      }}
                    >
                      {g.term}
                    </div>
                    <div
                      dir="rtl"
                      style={{
                        fontFamily: FONTS.BODY,
                        fontWeight: 500,
                        fontSize: 24,
                        color: COLORS.MUTED,
                      }}
                    >
                      {g.meaning}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </SketchBox>
    </div>
  );
};
