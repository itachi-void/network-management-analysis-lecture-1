# ملاحظات وقرارات المشروع (NOTES.md)

## جرد المرحلة 0 القديمة وإصلاحات المرحلة 0-R

- **حالة الفحص الأولي بـ `verify_phase0.py` الجديد (ملحق F):**
  - إجمالي البنود التي اجتازت في الفحص الأولي: 231 بندًا.
  - إجمالي البنود التي تم رصدها كأخطاء في المرحلة 0 القديمة: 20 بندًا.
- **الإصلاحات والتحديثات المنفذة في المرحلة 0-R (بندًا ببند وفق PLAN.md AUTO-1):**
  1. **تنظيف العلامة المائية (`3.5`):** تم تصحيح `public/slides_up/s10_fig8_33_clean.png` بتطبيق عتبة التبييض 55% بدقة على المستطيل `325x56+995+644` و1% على السهم `40x22+1305+0`، والحفاظ الكامل على البكسلات الداكنة لكابشن الشريحة (`dark=668, erased=0`).
  2. **تكبير الصور بـ Real-ESRGAN (`3.3`):** تم تنزيل وتشغيل `realesrgan-ncnn-vulkan` (موديل `realesrgan-x4plus`) على كارت الشاشة لتكبير صورتي `public/slides_up/s06_paloalto_ngfw.jpg` (`3200x2400`) و`public/slides_up/s16_video_player.jpg` (`1100x732`) بمعامل `×4` دون أي تشوهات JPEG.
  3. **معايرة ورق الخلفية (`3.6`):** تم إعادة توليد وضبط `public/paper.png` بمتوسط لون `[247.5, 243.5, 235.5]` وانحراف معياري `1.63` مطابق للريفرنس.
  4. **إصلاح `GLYPHS` وقاعدة الطبقات (`0.5` و`5.4`):** تم تطبيق `<AbsoluteFill><Paper /><AbsoluteFill style={{zIndex: 1}}>` في جميع الـ Compositions، وتوزيع السطور الأربعة في `GLYPHS` عند `y = 200 / 420 / 640 / 860` بحجم `64px` ومعين SVG (`SvgDiamond`).
  5. **إصلاح `BIDI-1` و `BIDI-2` (`0.7` و`8`):** ضبط مدة الكومبوزيشن على 24 فريم وأخذ الـ still عند `--frame=12` بحجم كابشن `45px` ودالة `bidiSegments` التي تحافظ على النقطة في أقصى الشمال والأقواس مقفولة بشكل سليم.
  6. **إصلاح معايرة `CAL` وتوحيد كائن التايملاين (`0.6` و`7.1`):** تم بناء `CAL_TIMELINE` ككائن موحد للقيم الزمنية والصوتية (`{id, t, dur, sfx, gainDb}`) يغذي الحركة ومكوّن `<Sfx>` معًا، وضبط الكارت (`105..1182, 144..917`)، العنوان `65px`، البنود الثلاثة `54px` عند مركز `x=592` بالترتيب (الكلام ← الصح عند `x=1077` ← التظليل بارتفاع `64px`)، وثبات الرسم بين الفريم 110 و 115 (`diff=0`).
  7. **استكمال مكتبة المكوّنات وحركة المسارات (`4` و`5.3` و`5.4`):** تم استخدام `evolvePath` من `@remotion/paths` في رسم جميع الخطوط والأشكال اليدوية، وإضافة `src/lib/camera.ts` وكافة المكوّنات: `AgendaChip` · `SlideCrop` · `NextChip` · `LinkNode` · `LayoutL` (`LAYOUT_L`) · `StudyCard` (`LAYOUT_R`) · `PinnedPhoto` · `Camera` · `Spotlight` · `Arrow` · `CrossMark` · `NameOval` · `Tag` · `HandWrite` · `Sparkle` · `Pop` · `GlowPulse`.
  8. **تحسين الأيقونات الأربعة في ملاحظة `5.5`:** تم تعديل `power_clock` (ساعة + رمز التشغيل الدائري المفتوح من أعلى مع الخط الرأسي)، `desk_phone` (سماعة بسلك حلزوني على قاعدة بأزرار وشاشة)، `video_phone` (تليفون مكتب بكاميرا علوية وشاشة بداخلها وجه واضح)، و`press_vise` (لوحين يضغطان ملفًا أصفر بينهما مع سهمين للداخل)، مع زيادة سُمك الخط إلى `5px` عند عرض أي أيقونة بحجم `>= 160px`.

---

## توليد الشخصيات الـ 13 الحقيقية (قسم 6.4 — المسار G)

- **المسار المختار:** المسار G (توليد بالذكاء الاصطناعي عبر موديل `gemini-3.1-flash-image` / `image-generator`).
- **قرار فني (خلفية الماجنتا `#FF00FF`):** تم توليد شيتات الوضعيات على خلفية ماجنتا صافية `#FF00FF` أثناء توليد الوضعيات للحفاظ التام على العناصر البيضاء داخل الشخصيات (الكارت الأبيض الفارغ في لان يارد م. عمر، التيشيرت الأبيض تحت هودي كريم، ولمعات العيون) من التآكل أثناء تفريغ الخلفية، مع تطبيق خوارزمية Chroma-key + Magenta Despill + حافة ملصق بيضاء `6px` (`scripts/process_ai_poses.py`).
- **الشيتات المرجعية والوضعيات المولدة:**
  - `work/chars/omar_sheet.png`: شيت مرجعي لـ م. عمر (منظر أمامي + 3/4) بولو كحلي، دقن مهندمة، لان يارد بكارت أبيض، سماعة حول الرقبة، بنطلون شينو رمادي غامق.
  - `work/chars/karim_sheet.png`: شيت مرجعي لكريم المتدرب (منظر أمامي + 3/4) هودي أصفر مستردة فوق تيشيرت أبيض، بادج أزرق، جينز، شعر أسود مموج، حليق الذقن.
  - `work/chars/shabah_sheet.png`: شيت مرجعي لـ «شبح» الهكر (منظر أمامي + 3/4) هودي أسود مع غطاء الرأس، نظارة شمس سوداء، ذقن خفيفة، ابتسامة خبيثة.
  - `omar_O1.png`, `omar_O2.png`, `omar_O3.png`: مولدة image-to-image من `omar_sheet.png` في `work/chars/omar_poses_1.jpg` (ماسك تابلت، بيشاور وبيشرح، لايك وبيغمز).
  - `omar_O4.png`, `omar_O6.png`: مولدة image-to-image من `omar_sheet.png` في `work/chars/omar_poses_2.jpg` (بيقدّم بكف مفتوح، بيحتفل رافع قبضتيه).
  - `karim_K1.png`, `karim_K2.png`, `karim_K3.png`: مولدة image-to-image من `karim_sheet.png` في `work/chars/karim_poses_1.jpg` (بيهرش في راسه محتار، مخضوض بنقطة عرق، دايخ وملفوف بكابل شبكة).
  - `karim_K4.png`, `karim_K5.png`, `karim_K6.png`: مولدة image-to-image من `karim_sheet.png` في `work/chars/karim_poses_2.jpg` (ماسك مروحة فلوس خضرا وقلقان، مبسوط وبيسقف، لابس سماعة وماسك موبايل بالعرض).
  - `hacker_H1.png`, `hacker_H2.png`: مولدة image-to-image من `shabah_sheet.png` في `work/chars/shabah_poses.jpg` (بيكتب على لابتوب غامق بشاشة منورة أحمر، متضايق وكفوفه مفرودة كأنه لازق في زجاج Firewall).

---

## الفحوص البصرية بالعين (VISUAL Inspection - Rule 19)

- [VISUAL] public/slides_up/s10_fig8_33_clean.png — PASS — تم فحص تنظيف العلامة المائية وتبييض السهم مع سلامة نصوص الكابشن السفلية بدقة 100% دون مسح رؤوس الحروف.
- [VISUAL] out/debug/regions_*.png — PASS — تم فحص صور الشرائح الـ 13 المستخرجة ومستطيلاتها الحمراء المحيطة بالأجهزة والعناصر بدقة تامة.
- [VISUAL] out/debug/glyphs.png — PASS — تم فحص السطور الأربعة للخطوط وظهور محارف التشكيل والرموز ومعين SVG بدقة واضحة وبلا إيموجي.
- [VISUAL] out/debug/bidi_1.png — PASS — تم فحص محاذاة الكابشن وظهور النقطة على خط الأساس أقصى اليسار في السطر العربي المدمج مع المصطلح الإنجليزي.
- [VISUAL] out/debug/bidi_2.png — PASS — تم فحص النص المختلط وقوس المصطلح وظهور النقطة الختامية أقصى اليسار بدقة.
- [VISUAL] out/debug/cal_compare.png — PASS — تم فحص مقارنة ريندر المعايرة مع كادر المرجع 104 ومطابقة أبعاد الكارت والخطوط والتظليل وشخصية عمر O3 المولدة بالذكاء الاصطناعي.
- [VISUAL] out/debug/icons.png — PASS — تم فحص لوحة الأيقونات الـ 57 والتحقق من وضوح كافة الرموز اليدوية وخاصة الأيقونات الأربعة (`power_clock`, `desk_phone`, `video_phone`, `press_vise`) وقراءتها بوضوح تام دون نصوص.
- [VISUAL] out/debug/characters_sheet.png — PASS — تم فحص لوحة الشخصيات الـ 13 المولدة بالـ AI ومطابقة الوجوه والملابس والأيدي السليمة (5 أصابع) والـ props والقص عند منتصف الفخذ وحافة الملصق البيضاء 6px.
- [VISUAL] out/debug/comp_layout_l.png — PASS — تم فحص مشهد الروابط التجريبي (`LAYOUT_L`) ومكوّنات `AgendaChip` و`SlideBadge` و`LinkNode` و`SlideCrop` (بخلفية بيضاء صافية واقتصاص دقيق للمناطق الثلاث) و`NextChip` والأسهم المنحنية.
- [VISUAL] out/debug/comp_study_card.png — PASS — تم فحص بطاقة المذاكرة التجريبية (`StudyCard` / `LAYOUT_R`) والتأكد من ظهور تاجات الشرائح والنص الحرفي والرسمة التوضيحية وعمود «مصطلحات مهمة» (9 صفوف) بالكامل داخل حدود الكارت دون أي تجاوز أو قطع.

---

## المرحلة 0: ✔ — commit 75f481f

## المرحلة 0-R (مراجعة وتصحيح المرحلة 0): ✔ — commit 0230b84
- `[VISUAL] out/debug/comp_layout_l.png — PASS — 4 LinkNodes connected by red dashed arrows to center Hub`
- `[VISUAL] out/debug/comp_study_card.png — PASS — 2-column StudyCard with 9 glossary terms and full slide text without overflow`
- `python scripts/verify_phase0.py` -> `PHASE 0: ALL PASS`

## المرحلة 1 — الفيديو 1 (V1: 01_Course_Overview_Agenda.mp4): ✔
- `[VISUAL] out/debug/V1_card.png — PASS — StudyCard displays Slides 1, 2, 3 verbatim text in 2 columns with HighlightText on 'overview of the different topics' and clean margins`
- `[VISUAL] out/debug/V1_sheet.png — PASS — 27-frame contact sheet confirms all 8 scenes (S1–S8), Omar wave/point/thumbs poses, PinnedPhoto of Slide 1 & Slide 2 diagrams, Agenda checklist with CheckMark, StudyCard, and NextChip`
- التغطية النصية (`check_coverage.ts V1`): `V1: OK` (100% من نصوص الشرائح 1 و2 و3).
- الصوت (`master_audio.py`): `I: -22.0 LUFS`, `Peak: -6.1 dBFS` (ضمن النطاق `-22 LUFS ±0.5` و`<= -3 dBTP`).
- المدة: `53.0s` (`1272` فريم @ `24fps`، `1920x1080`).

## المرحلة 2 — الفيديو 2 (V2: 02_Datacenter.mp4): ✔
- `[VISUAL] out/debug/V2_card.png — PASS — StudyCard displays Slide 4 Datacenter diagram on left and all 10 glossary items on right with clean spacing`
- `[VISUAL] out/debug/V2_sheet.png — PASS — 39-frame contact sheet confirms all 12 scenes (S1–S11 including S9b LayoutL), vector Datacenter build (S3–S8), ESXi zoom with 6 VMs, original Slide 4 diagram with 4 red brackets, and LayoutL crops`
- التغطية النصية (`check_coverage.ts V2`): `V2: OK` (100% من نصوص الشريحة 4).
- الصوت (`master_audio.py`): `I: -22.0 LUFS`, `Peak: -5.8 dBFS` (ضمن النطاق `-22 LUFS ±0.5` و`<= -3 dBTP`).
- المدة: `77.0s` (`1848` فريم @ `24fps`، `1920x1080`).

## المرحلة 3 — الفيديو 3 (V3: 03_Desktop_Service_Virtualization.mp4): ✔
- `[VISUAL] out/debug/V3_card.png — PASS — StudyCard displays Slide 5 and Slide 6 verbatim text with 4 static yellow highlights on left and all 10 glossary items on right`
- `[VISUAL] out/debug/V3_sheet.png — PASS — 50-frame contact sheet confirms all 15 scenes (S1–S14 including S12b LayoutL), Palo Alto NGFW camera zoom/pan walkthrough (S7–S12) with Spotlights, RedEllipses, animated dashed flow paths, and outside-camera NoteCards`
- التغطية النصية (`check_coverage.ts V3`): `V3: OK` (100% من نصوص الشرائح 5 و6).
- الصوت (`master_audio.py`): `I: -22.0 LUFS`, `Peak: <= -3 dBTP`.
- المدة: `99.0s` (`2376` فريم @ `24fps`، `1920x1080`).


## المرحلة 4 — V4 (04_Multimedia_Network_Application.mp4)
[VISUAL] V4_card.png: Slide 7 & Slide 16 verbatim text verified, static highlights on audio or video and compression formats, 6 key terms in right column, zero overlaps
[VISUAL] V4_sheet.png: 72 frames (1 fps) inspected across S1–S10 (incl. S8b links, S9 study card, S10 finale), s07_multimedia_devices and s16_video_player_clean rendered clearly with zero Activate Windows watermark
- Coverage: `V4: OK` (`ALL 100% COVERED`)
- Audio Mastering: `-22.0 LUFS`, True Peak `-5.9 dBFS`
- Duration: `72.0s` (`1728` frames @ `24fps`, `1920x1080`)


## المرحلة 5 — V5 (05_Network_Management.mp4)
[VISUAL] V5_card.png: Slide 8 verbatim text verified, static highlights on administering, managing, and maintaining, performance, availability, and security, and tools and techniques, 7 key terms in right column, zero overlaps
[VISUAL] V5_sheet.png: 55 frames (1 fps) inspected across S1–S7 (incl. S5b links + bottom note, S6 study card, S7 finale), s08_rack_servers banner and callouts rendered clearly, zero overlaps
- Coverage: `V5: OK` (`ALL 100% COVERED`)
- Audio Mastering: `-22.0 LUFS`, True Peak `-5.8 dBFS`
- Duration: `54.5s` (`1308` frames @ `24fps`, `1920x1080`)


## المرحلة 6 — V6 (06_Firewall.mp4)
[VISUAL] V6_card.png: Slide 9 & Slide 10 verbatim text verified, SVG ♦ diamond rendered in Figure 8.33 caption, static highlights on network security system, analyzing data packets, and external threats, 8 key terms in right column, zero overlaps
[VISUAL] V6_sheet.png: 81 frames (1 fps) inspected across S1–S11 (incl. Vector Figure 8.33 in S7–S8, s10_fig8_33_clean.png in S9, S9b links, S10 study card, S11 finale with hacker_H2 behind glass plane), zero Activate Windows watermark, zero overlaps
- Coverage: `V6: OK` (`ALL 100% COVERED`)
- Audio Mastering: `-21.9 LUFS`, True Peak `-5.4 dBFS`
- Duration: `80.5s` (`1932` frames @ `24fps`, `1920x1080`)


## المرحلة 7 — V7 (07_SAN_NAS_Storage_Networks.mp4)
[VISUAL] V7_card.png: Slides 11, 12, 13 verbatim text verified, static highlights on Storage Area Network (SAN), Network Attached Storage (NAS), and two different storage architectures, 7 key terms in right column, zero overlaps
[VISUAL] V7_sheet.png: 75 frames (1 fps) inspected across S1–S10 (incl. s11_storage_media in S1, NAS vs SAN split in S4, s12_conduant_ltx3 in S6–S7, s13_compellent_racks in S8, S8b links, S9 study card, S10 finale), zero overlaps
- Coverage: `V7: OK` (`ALL 100% COVERED`)
- Audio Mastering: `-22.0 LUFS`, True Peak `-6.4 dBFS`
- Duration: `75.0s` (`1800` frames @ `24fps`, `1920x1080`)
