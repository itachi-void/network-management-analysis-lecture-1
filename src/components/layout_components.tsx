// src/components/layout_components.tsx
import React from 'react';
import {useCurrentFrame, staticFile} from 'remotion';
import {COLORS, FONTS} from '../theme';
import {FONT_FAMILIES} from '../lib/fonts';
import {BidiText} from '../lib/bidi';
import {SketchBox, Arrow, HandWrite} from './index';

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
  const regW = Math.max(0.01, (region.x1 - region.x0) / 100);
  const regH = Math.max(0.01, (region.y1 - region.y0) / 100);

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
        flexShrink: 0,
        ...style,
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <img
          src={staticFile(src)}
          alt="Crop"
          style={{
            position: 'absolute',
            left: `${(-region.x0 / 100 / regW) * 100}%`,
            top: `${(-region.y0 / 100 / regH) * 100}%`,
            width: `${(1 / regW) * 100}%`,
            height: `${(1 / regH) * 100}%`,
            maxWidth: 'none',
            maxHeight: 'none',
            display: 'block',
          }}
        />
      </div>
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
        <div style={{padding: '14px 20px', display: 'flex', flexDirection: 'column', height: '100%', boxSizing: 'border-box'}}>
          {/* Direction */}
          <div
            dir="rtl"
            style={{
              fontFamily: FONTS.BODY,
              fontWeight: 600,
              fontSize: 23,
              lineHeight: 1.2,
              color: COLORS.MUTED,
              marginBottom: 4,
            }}
          >
            <BidiText text={directionText} />
          </div>

          {/* Topic */}
          <div
            dir="ltr"
            style={{
              fontFamily: FONTS.EN_TITLE,
              fontWeight: 700,
              fontSize: 27,
              lineHeight: 1.2,
              color: COLORS.INK,
              marginBottom: 8,
              whiteSpace: 'nowrap',
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
                height={w > 600 ? 136 : 124}
              />
            )}
            {icon && (
              <div style={{width: 120, height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
                {icon}
              </div>
            )}
            <div
              dir="rtl"
              style={{
                flex: 1,
                fontFamily: FONTS.BODY,
                fontWeight: 500,
                fontSize: 25,
                lineHeight: 1.4,
                color: COLORS.INK,
              }}
            >
              <BidiText text={arabicText} />
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
                lineHeight: 1.2,
                color: COLORS.INK,
                marginTop: 6,
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
        <div style={{padding: '20px 36px', height: '100%', boxSizing: 'border-box', position: 'relative'}}>
          {/* Header */}
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 54}}>
            {/* Left: Slide Tags */}
            <div style={{display: 'flex', gap: 12, opacity: showTags ? 1 : 0}}>
              {slideTags.map((tag, i) => (
                <div
                  key={i}
                  style={{
                    border: `2px solid ${COLORS.INK}`,
                    borderRadius: 8,
                    padding: '3px 12px',
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
                  fontSize: 46,
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
                marginTop: 10,
                marginBottom: 14,
              }}
            />
          )}

          {/* Content Columns */}
          <div style={{display: 'flex', height: 745, gap: 30}}>
            {/* Left Column: Verbatim Slide Text */}
            <div
              dir="ltr"
              style={{
                flex: isTwoColumnText ? 1 : 1.7,
                display: 'flex',
                flexDirection: 'column',
                gap: 18,
                opacity: showBlocks ? 1 : 0,
              }}
            >
              {blocks.map((b, bi) => (
                <div key={bi} style={{display: 'flex', flexDirection: 'column', gap: 6}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                    <span
                      style={{
                        border: `2px solid ${COLORS.INK}`,
                        borderRadius: 6,
                        padding: '1px 10px',
                        fontFamily: FONTS.EN_TITLE,
                        fontWeight: 700,
                        fontSize: 25,
                        color: COLORS.INK,
                      }}
                    >
                      Slide {b.slideNumber}
                    </span>
                    <span style={{fontFamily: FONTS.BODY, fontWeight: 700, fontSize: 31, color: COLORS.INK}}>
                      {b.title}
                    </span>
                  </div>

                  {b.paragraphs.map((p, pi) => (
                    <div
                      key={pi}
                      style={{
                        fontFamily: FONTS.BODY,
                        fontWeight: 600,
                        fontSize: 26,
                        lineHeight: 1.42,
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
                          maxHeight: 230,
                          maxWidth: '90%',
                          border: `2px solid ${COLORS.INK}`,
                          objectFit: 'contain',
                          backgroundColor: '#FFFFFF',
                          padding: 6,
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
              <div style={{width: 2, height: '94%', backgroundColor: COLORS.INK, alignSelf: 'center'}} />
            )}

            {/* Right Column: Glossary or Column 2 for V1 */}
            {isTwoColumnText ? (
              <div
                dir="ltr"
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 18,
                  opacity: showBlocks ? 1 : 0,
                }}
              >
                {blocksCol2.map((b, bi) => (
                  <div key={bi} style={{display: 'flex', flexDirection: 'column', gap: 6}}>
                    <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                      <span
                        style={{
                          border: `2px solid ${COLORS.INK}`,
                          borderRadius: 6,
                          padding: '1px 10px',
                          fontFamily: FONTS.EN_TITLE,
                          fontWeight: 700,
                          fontSize: 25,
                          color: COLORS.INK,
                        }}
                      >
                        Slide {b.slideNumber}
                      </span>
                      <span style={{fontFamily: FONTS.BODY, fontWeight: 700, fontSize: 31, color: COLORS.INK}}>
                        {b.title}
                      </span>
                    </div>
                    {b.paragraphs.map((p, pi) => (
                      <div
                        key={pi}
                        style={{
                          fontFamily: FONTS.BODY,
                          fontWeight: 600,
                          fontSize: 26,
                          lineHeight: 1.42,
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
                  gap: glossary.length >= 9 ? 3 : 6,
                  opacity: showGlossary ? 1 : 0,
                }}
              >
                <div
                  style={{
                    fontFamily: FONT_FAMILIES.HOOK,
                    fontWeight: 700,
                    fontSize: 36,
                    lineHeight: 1.15,
                    color: COLORS.INK,
                    marginBottom: 4,
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
                      gap: 1,
                      height: glossary.length >= 9 ? 61 : 65,
                      justifyContent: 'center',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div
                      dir="ltr"
                      style={{
                        fontFamily: FONTS.EN_TITLE,
                        fontWeight: 700,
                        fontSize: 25,
                        lineHeight: 1.1,
                        color: COLORS.INK,
                        textAlign: 'right',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {g.term}
                    </div>
                    <div
                      dir="rtl"
                      style={{
                        fontFamily: FONTS.BODY,
                        fontWeight: 500,
                        fontSize: 23,
                        lineHeight: 1.15,
                        color: COLORS.MUTED,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <BidiText text={g.meaning} />
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

// 6. PinnedPhoto (Section 5.3: CARD fill, padding 14px, SketchBox border, 2 tape strips #E9DDC4 at 0.85, no shadow)
export const PinnedPhoto: React.FC<{
  src: string;
  x: number;
  y: number;
  w: number;
  h: number;
  tiltDeg?: number;
  startFrame?: number;
  seed?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}> = ({
  src,
  x,
  y,
  w,
  h,
  tiltDeg = 0,
  startFrame = 0,
  seed = 42,
  children,
  style,
}) => {
  const frame = useCurrentFrame();
  const rel = Math.max(0, frame - startFrame);
  const p = Math.min(1, rel / 8); // 0.35s = ~8 frames
  const opacity = p;
  const scale = 0.94 + 0.06 * p;

  if (frame < startFrame) return null;

  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: w,
        height: h,
        transform: `rotate(${tiltDeg}deg) scale(${scale})`,
        transformOrigin: 'center center',
        opacity,
        zIndex: 15,
        ...style,
      }}
    >
      <SketchBox x={0} y={0} w={w} h={h} seed={seed} startFrame={0} drawDurationFrames={8}>
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: w,
            height: h,
            padding: 14,
            boxSizing: 'border-box',
            backgroundColor: COLORS.CARD,
          }}
        >
          <img
            src={src.startsWith('http') || src.startsWith('/') ? src : staticFile(src)}
            alt=""
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block',
            }}
          />
        </div>
      </SketchBox>

      {/* Top Left Tape Strip: 120x34, tilt -35deg, color #E9DDC4 at opacity 0.85 */}
      <div
        style={{
          position: 'absolute',
          left: -20,
          top: -10,
          width: 120,
          height: 34,
          backgroundColor: '#E9DDC4',
          opacity: 0.85,
          transform: 'rotate(-35deg)',
          pointerEvents: 'none',
          zIndex: 25,
        }}
      />

      {/* Top Right Tape Strip: 120x34, tilt +35deg, color #E9DDC4 at opacity 0.85 */}
      <div
        style={{
          position: 'absolute',
          right: -20,
          top: -10,
          width: 120,
          height: 34,
          backgroundColor: '#E9DDC4',
          opacity: 0.85,
          transform: 'rotate(35deg)',
          pointerEvents: 'none',
          zIndex: 25,
        }}
      />

      {children}
    </div>
  );
};

// 7. LayoutL (Section 5.3 & 5.4: LAYOUT_L — «الموضوع ده مرتبط بإيه؟»)
export interface LayoutLNodeData {
  position: 'N1' | 'N2' | 'N3';
  directionText: string;
  topicTitle: string;
  arabicText: string;
  labels: string[];
  crop?: {src: string; region: {x0: number; x1: number; y0: number; y1: number}};
  icon?: React.ReactNode;
}

export const LayoutL: React.FC<{
  centerTopicTitle: string;
  centerSlideTag: string;
  nodes: LayoutLNodeData[];
  nextTopicTitle?: string;
}> = ({centerTopicTitle, centerSlideTag, nodes, nextTopicTitle}) => {
  const frame = useCurrentFrame();
  const isLongTitle = centerTopicTitle.length > 26;
  const singleLink = nodes.length === 1;

  const centerTextOpacity = frame >= 26 ? Math.min(1, (frame - 26) / 5) : 0;
  const linkStartTimes = singleLink ? [1.4] : [1.4, 2.5, 3.6];
  const nextChipFrame = singleLink ? Math.round(2.6 * 24) : Math.round(4.8 * 24);

  return (
    <div style={{position: 'absolute', left: 0, top: 0, width: 1920, height: 1080}}>
      {/* Title at center (960, 110) */}
      <HandWrite
        text="الموضوع ده مرتبط بإيه؟"
        startFrame={5}
        durationFrames={14}
        rtl
        style={{
          position: 'absolute',
          left: 960,
          top: 110,
          transform: 'translate(-50%, -50%)',
          fontFamily: FONTS.HOOK,
          fontWeight: 700,
          fontSize: 64,
          color: COLORS.INK,
          zIndex: 25,
        }}
      />

      {/* Center Card: x 700 -> 1220 (w 520), y 330 -> 560 (h 230) */}
      {frame >= 20 && (
        <SketchBox x={700} y={330} w={520} h={230} startFrame={20} drawDurationFrames={11} seed={301}>
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '18px 20px',
              boxSizing: 'border-box',
              opacity: centerTextOpacity,
            }}
          >
            <div
              dir="rtl"
              style={{
                fontFamily: FONTS.BODY,
                fontWeight: 600,
                fontSize: 24,
                color: COLORS.RED,
              }}
            >
              إحنا هنا
            </div>
            <div
              dir="ltr"
              style={{
                fontFamily: FONTS.EN_TITLE,
                fontWeight: 700,
                fontSize: isLongTitle ? 34 : 40,
                lineHeight: 1.15,
                color: COLORS.INK,
                textAlign: 'center',
              }}
            >
              {centerTopicTitle}
            </div>
            <div
              dir="ltr"
              style={{
                fontFamily: FONTS.EN_TITLE,
                fontWeight: 700,
                fontSize: 24,
                color: COLORS.MUTED,
              }}
            >
              {centerSlideTag}
            </div>
          </div>
        </SketchBox>
      )}

      {/* Link Nodes & Arrows */}
      {nodes.map((node, idx) => {
        const t0 = linkStartTimes[idx] ?? 1.4 + idx * 1.1;
        const arrowStart = Math.round(t0 * 24);
        const nodeStart = Math.round((t0 + 0.25) * 24);

        let rect = {x: 360, y: 640, w: 820, h: 260};
        let arrowCoords = {x1: 960, y1: 560, x2: 960, y2: 640};
        if (node.position === 'N1') {
          rect = {x: 60, y: 200, w: 580, h: 300};
          arrowCoords = {x1: 700, y1: 445, x2: 640, y2: 350};
        } else if (node.position === 'N2') {
          rect = {x: 1280, y: 200, w: 580, h: 300};
          arrowCoords = {x1: 1220, y1: 445, x2: 1280, y2: 350};
        }

        return (
          <React.Fragment key={node.position}>
            <Arrow
              x1={arrowCoords.x1}
              y1={arrowCoords.y1}
              x2={arrowCoords.x2}
              y2={arrowCoords.y2}
              color={COLORS.INK}
              strokeWidth={5}
              startFrame={arrowStart}
              durationFrames={7}
            />
            <LinkNode
              x={rect.x}
              y={rect.y}
              w={rect.w}
              h={rect.h}
              directionText={node.directionText}
              topicTitle={node.topicTitle}
              arabicText={node.arabicText}
              labels={node.labels}
              crop={node.crop}
              icon={node.icon}
              startFrame={nodeStart}
              seed={310 + idx * 10}
            />
          </React.Fragment>
        );
      })}

      {/* NextChip */}
      {nextTopicTitle && <NextChip nextTitle={nextTopicTitle} startFrame={nextChipFrame} />}
    </div>
  );
};
