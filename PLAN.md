# خطة تنفيذ سلسلة فيديوهات «Network Management and Analysis — Lecture 1»

> **النسخة دي بتلغي الخطة القديمة بالكامل.** متفتحش الخطة القديمة ومتاخدش منها أي حاجة.
> الخطة مكتوبة عشان تتنفذ حرفيًا. أي رقم أو لون أو نص أو توقيت مكتوب هنا = إلزامي.

---

## 0) قواعد إلزامية — اقرأها قبل أي حاجة

1. **المرحلة 0 الأول وإلزامية (مرة واحدة بس).** ممنوع تبدأ أي فيديو قبل ما تخلص وتعدّي «اختبار المعايرة». بعدها **كل فيديو مرحلة مستقلة**: لو المستخدم طلب فيديو معيّن (مثلًا V6) اعمله هو بس بالطريقة اللي في «لو المطلوب فيديو واحد بس» أول قسم 9، ولو مطلبش حاجة معيّنة امشي بالترتيب 1 ← 8 ← 9.
2. أي نص إنجليزي جاي من الشرائح بيتكتب على الشاشة **حرف بحرف** زي «ملحق A»: نفس الحروف الكبيرة والصغيرة، نفس الشرطات والنقط والفواصل والأقواس. أمثلة لازم تتحافظ: `fibre` (مش fiber)، `iSCSI` (i صغيرة)، `terminal` (t صغيرة)، `SAN & NAS Storage networks.` (بنقطة في الآخر)، `Software-defined networking (SDN)` (بشرطة). المسموح الوحيد: لو فيه مسافتين جنب بعض في الشريحة تكتبهم مسافة واحدة.
3. **الكابشن** (السطر اللي تحت الشاشة) = عامية مصرية + المصطلحات بالإنجليزي بحروف لاتينية. انسخه من الخطة **زي ما هو**. ممنوع تزوّد أو تشيل أو "تحسّن" كلمة.
4. **مفيش Voiceover ومفيش موسيقى خلفية** — زي الفيديو المرجعي بالظبط. الصوت = مؤثرات صوتية ناعمة بس (قسم 7). الشرح كله بيوصل من الشخصيات + الرسم + النص على الشاشة + الكابشن.
5. **ممنوع الإيموجي** على الشاشة نهائيًا. أي أيقونة = رسمة SVG بخط اليد (قسم 5.5).
6. ممنوع تظهر علامة «Activate Windows» ولا السهم الصغير «↔» اللي فوق يمين صورة Figure 8.33 (المعالجة في 3.5).
7. ممنوع أي حاجة "عشوائية" تتغير من فريم لفريم: كل شكل rough.js لازم `seed` ثابت، والـ paper texture صورة ثابتة، ومفيش noise متحرك.
8. كل التوقيتات بالثواني **من بداية المشهد** (t=0 = أول فريم في المشهد). الفيديو 24 fps، يعني الفريم = `round(الثواني × 24)`.
9. كل الإحداثيات بالبكسل على كادر 1920×1080، (0,0) فوق شمال، x بيزيد يمين، y بيزيد لتحت. «مركز (x, y)» = مركز العنصر.
10. أي حاجة مضافة للشرح ومش موجودة في الشرايح متعلّمة في الخطة بكلمة **[توضيح]** — دي بتتنفذ عادي، العلامة للمراجعة بس ومش بتظهر على الشاشة.
11. لو حاجة مش واضحة: اختار أقرب حل لشكل الفيديو المرجعي، واكتب قرارك في `NOTES.md`. **متخترعش ستايل جديد.**
12. في آخر كل مرحلة شغّل «قائمة القبول» الخاصة بيها، ومتنقلش للمرحلة اللي بعدها إلا لو كل البنود ✔.
13. **دي مادة أكاديمية للمذاكرة:** كل فيديو فيه «بطاقة المذاكرة» قبل مشهد الختام بالظبط (LAYOUT_R و StudyCard في قسم 5): نص كل شريحة من شرايح الفيديو **كامل وبترتيبه وبفقراته** في مكان واحد + قاموس المصطلحات. ده غير ظهور النص متقسم جوه المشاهد.
14. كل مشهد عليه «شارة الشريحة» (SlideBadge — قسم 5.7) عشان الطالب يعرف المشهد جاي من أنهي شريحة في الـ PDF.
15. المعاني العربي المكتوبة في المشاهد متظبطة على «ملحق E» (القاموس الموحّد). لو احتجت معنى لمصطلح مش مكتوب له معنى في مشهده، خده من الملحق — **متترجمش من عندك**.

---

## 1) مراجعة الخطة القديمة — الأخطاء اللي اتصلحت هنا (عشان متكررهاش)

1. **الريفرنس مفيهوش تعليق صوتي خالص.** الخطة القديمة كانت مسمّية السطر اللي تحت «Voiceover». التحليل الصوتي للريفرنس: مؤثرات بس + صمت رقمي كامل بينها + مفيش موسيقى.
2. **الكابشنات القديمة طويلة جدًا** (20–30 كلمة في 5–6 ثواني). الريفرنس: سطر واحد ≈ 6–9 كلمات لكل مشهد ≈ 5 ثواني. من غير صوت الطالب مش هيلحق يقرا. الكابشنات هنا ≤ 12 كلمة و≤ 66 حرف وسطر واحد.
3. **عدد المشاهد كان غلط في 7 من 8 فيديوهات** (مثلًا فيديو 2 مكتوب «9 مشاهد» والموجود 8، فيديو 3 مكتوب 11 والموجود 10…).
4. **نصوص من المحاضرة كانت ناقصة:** `Lecture 1` (شريحة 2)، الجملة الكاملة بتاعة شريحة 1، جملة شريحة 9 `In this section, we will discuss how firewalls work and their role in network management.` ملهاش مشهد خالص، وجمل `In this section…` في شرايح 5 و7 و8 و11 كانت متلخصة مش حرفية.
5. **معلومات غلط اتصلحت:**
   - `Fibre Channel` اتشرح إنه «ألياف ضوئية» — غلط. ده بروتوكول/شبكة تخزين سريعة مخصوصة (بيشتغل على فايبر أو نحاس) وبيقدّم block storage.
   - شريط `3:07 … -39:04` في صورة الموبايل اتسمّى «Buffering» — هو شريط التشغيل (اللي اتشاف واللي فاضل).
   - تليفونات Cisco اتعدّت 7 — هي **8 أجهزة**: 7 تليفونات مكتب + 1 لاسلكي على قاعدة شحن. ووحدة الأزرار الإضافية (Expansion module) متركبة على التليفون **الرمادي اللي فوق يمين**، مش على التليفون أبو شاشة ملونة (ده اللي تحت يمين).
   - الريموت في صورة شريحة 7 فوقه سطح لمس (touch surface) مش شاشة.
6. **أسماء الشخصيات كانت متلخبطة** («كريم / أو هاني الهكر») و«هاني» هو اسم الدكتور الطيب في الريفرنس. اتحسمت: **م. عمر** (الخبير) — **كريم المتدرب** (الفضولي/المحتار) — **«شبح» الهكر** (الشرير، في فيديو 6 بس).
7. **إيموجي** في وصف الشاشة (سماعة وكاميرا ولابتوب ودرع كإيموجي) — اتشالت، وكلها بقت أيقونات مرسومة.
8. **مفيش أي مواصفات تنفيذ** (مقاسات/خطوط/ألوان/توقيت حركات/مستويات صوت). كلها موجودة هنا.
9. **ختام الريفرنس أغنى من «دايرة حمرا بس»:** المصطلح الإنجليزي جوه دايرة حمرا + معناه العربي بخط رقعة تحته + جملة تعريف متظللة أصفر + الشخصية بتتفاعل + أيقونة صغيرة. ده اتطبق على كل الفيديوهات.
10. **صوت الريفرنس حاد:** قمم −1.6 dBFS، نقرات عالية 2.4–3.3 kHz، وبازر تنبيه خشن (توافقيات 200 Hz). اتبدّل بمكتبة أنعم وأوطى (قسم 7) ومتزامنة مع الرسم.

---

## 2) تحليل الفيديو المرجعي `downloads/refrance.mp4` (المطلوب نقلّده)

**مواصفات الملف:** 1920×1080، 24 fps، 30.0 ثانية، H.264 + AAC 48 kHz ستيريو. Loudness ≈ −19.8 LUFS، True peak ≈ −1.6 dBFS.

**المشاهد (6 مشاهد ≈ 5 ثواني):**

| # | من → إلى (ث) | اللي بيحصل | الكابشن |
|---|---|---|---|
| 1 | 0.00 → 4.10 | دكتور هاني شمال شايل ملفات. عنوان رقعة «تخيّل حد قرا ملفك الطبي؟!» + خط أحمر تحته. كارت «ملف المريض» بسطور + ختم أحمر بيضاوي «سرّي جدًا». | دكتور هاني معاه ملفات مرضاه... وكلها أسرار. |
| 2 | 4.10 → 9.10 | الكارت بيترسم ضلع ضلع، الحقول (الاسم/التشخيص/التليفون) بتظهر، نبيل يدخل من اليمين بعدسة، اسمه في بيضاوي، عين حمرا وسهم أحمر للاسم. | بس نبيل فضولي... وعايز يعرف اللي مش من حقه. |
| 3 | 9.10 → 14.35 | (cross-fade) الدكتور + كارت «ملف» + سهم لسحابة «الإنترنت» + مثلث تحذير أصفر + عنوان أحمر «السرّية اتكسرت!» + «أي حد يقدر يشوفها» كلمة كلمة. | لو المعلومات وصلت لحد مش مصرح له... السرية راحت. |
| 4 | 14.35 → 19.45 | «التشفير (Encryption)» + بيانات مقروءة ← قفل ← رموز خضرا «مش مفهومة لأي غريب» + نبيل محتار بعرق + عين مشطوبة. | التشفير بيحوّل البيانات لكلام ملوش معنى لأي حد غريب. |
| 5 | 19.45 → 24.60 | كارت «إزاي نحمي السرّية؟» + 3 بنود بعلامات صح خضرا وتظليل أصفر + الدكتور بإيده لايك وبيغمز ولمعة صفرا. | تلات خطوات بسيطة... وكل واحد يشوف اللي يخصه بس. |
| 6 | 24.60 → 30.00 | `Confidentiality` بخط يد إنجليزي كبير + دايرة حمرا + «السرّية» رقعة تحتها + جملة متظللة + نبيل مخضوض تحت شمال + «اتكشف!» أحمر + قفل أصفر. ثبات 2.5 ث ثم fade. | وده اسمه Confidentiality. |

**قواعد الإيقاع المستنتجة:**
- كل مشهد بيبدأ بورقة فاضية والعناصر بتترسم **واحدة ورا التانية** (مفيش حاجة بتظهر مرة واحدة غير الشخصية).
- نهاية المشهد: fade كامل للورق في **0.33 ث (8 فريمات)**. استثناء: 2→3 cross-fade 0.25 ث. نهاية الفيديو: fade 0.7 ث.
- كل مشهد فيه **≥ 1 ث ثبات** بعد آخر عنصر قبل الـ fade.
- الكابشن بيظهر مع بداية المشهد (fade 0.2 ث) ويفضل ثابت لحد آخره.
- الهيكل: سؤال/مشكلة (Hook) ← الشخصية الفضولية ← المشكلة ← الحل ← Checklist بـ 3 علامات صح ← المصطلح الإنجليزي في دايرة حمرا.

**الشكل:**
- الورق: كريمي `#F8F4EC` بنسيج ألياف خفيف جدًا (انحراف رمادي ≈ 1.6 درجة).
- الحبر: `#2A2723`. الأحمر: `#D52739`. التظليل الأصفر: `#FCF0B2`. علامة الصح: أخضر `#4BD47E` بحدّ غامق `#15361F`. القفل/التحذير: `#F5CD63` / `#FCD54D`. الكارت: `#FDFBF5`. الكابشن: `#413D36`.
- العناوين العربي: خط رقعة (≈ Aref Ruqaa Bold) ≈ 96px. النص العربي: Sans حديث (≈ Cairo). المصطلح الإنجليزي: خط يد فرشاة (≈ Caveat Brush) ≈ 150px.
- الشخصيات: كرتون شبه واقعي، من الراس لنص الفخد، ارتفاع ≈ 800px، حواليها حافة بيضا رفيعة (sticker)، والجزء اللي تحت بيختفي تدريجي. **ثابتة** (الحركة الوحيدة: دخول، أو تبديل وضعية).
- الكروت: مستطيل بخط إيد، **الخطوط بتعدّي الأركان بحوالي 14px** (overshoot)، تعبئة أفتح من الورق.
- الكابشن: سطر واحد في النص تحت، مركزه y ≈ 1006، حجم ≈ 40px.

**الصوت (من التحليل الطيفي):** whoosh في أول كل مشهد، صوت شخبطة قلم طول ما فيه رسم/كتابة، pop مع ظهور أيقونة، tick مع علامة الصح، thud مع الختم، بازر مع التحذير، chime مع الختام، click مع القفل. **مفيش أي صوت تاني**، وآخر 2.9 ث صمت.

---

## 3) المدخلات وتجهيز الأصول

### 3.1 الملفات
- ملف المحاضرة: انسخه باسم `inputs/lecture.pptx` (الأصل اسمه «الملف المرجعي.pptx»). فيه **16 شريحة** و**18 ملف صورة** (الصورة image3 مستخدمة مرتين في شريحة 2 و3 ← إجمالي **19 صورة** على الشرايح).
- الفيديو المرجعي: `downloads/refrance.mp4`.
- **الملف اتفحص كله:** مفيش شرايح مخفية، ومفيش نص في الـ master/layouts، ومفيش footers ولا أرقام شرايح ولا تواريخ تلقائية، ومفيش links ولا comments، وملاحظات المتحدث (Speaker notes) فيها أرقام الشرايح بس. يعني **«ملحق A» هو كل نص المحاضرة** — متدورش على نص في مكان تاني.

### 3.2 استخراج الصور (انسخ السكربت ده كما هو في `scripts/extract_assets.sh`)

```bash
#!/usr/bin/env bash
set -euo pipefail
PPTX="${1:-inputs/lecture.pptx}"
rm -rf work/pptx && mkdir -p work/pptx public/slides
unzip -o -q "$PPTX" -d work/pptx
M=work/pptx/ppt/media
cp "$M/image1.png"   public/slides/s01_avatar_a.png
cp "$M/image2.png"   public/slides/s01_cloud_devices.png
cp "$M/image3.jpeg"  public/slides/s02_agenda_figure.jpg
cp "$M/image4.png"   public/slides/s04_datacenter.png
cp "$M/image5.png"   public/slides/s05_virtualization_banner.png
cp "$M/image6.jpeg"  public/slides/s06_paloalto_ngfw.jpg
cp "$M/image7.png"   public/slides/s07_media_streaming.png
cp "$M/image8.png"   public/slides/s08_rack_servers.png
cp "$M/image9.png"   public/slides/s09_firewall_icon.png
cp "$M/image10.png"  public/slides/s10_fig8_33.png
cp "$M/image11.png"  public/slides/s11_storage_media.png
cp "$M/image12.jpeg" public/slides/s12_conduant_ltx3.jpg
cp "$M/image13.jpeg" public/slides/s13_compellent_racks.jpg
cp "$M/image14.png"  public/slides/s14_network_3d.png
cp "$M/image15.png"  public/slides/s15_traditional_vs_sdn.png
cp "$M/image16.jpeg" public/slides/s16_voip_globe.jpg
cp "$M/image17.jpeg" public/slides/s16_video_player.jpg
convert "$M/image18.gif[0]" public/slides/s16_cisco_phones.png
for f in public/slides/*; do identify -format "%f %wx%h\n" "$f"; done
```

**لازم يطبع 18 سطر بالأبعاد دي بالظبط** (لو أي بُعد مختلف = الملف غلط، وقف):

| الملف الجديد | الأصل | الشريحة | الأبعاد | طريقة الاستخدام | فين |
|---|---|---|---|---|---|
| s01_avatar_a.png | image1.png | 1 | 45×45 | **تترسم من جديد** (صغيرة جدًا): دايرة `#7E57C2` + حرف `a` أبيض | V1-S1 |
| s01_cloud_devices.png | image2.png | 1 | 720×1080 | صورة أصلية (PinnedPhoto) | V1-S3 |
| s02_agenda_figure.jpg | image3.jpeg | 2 و 3 | 256×256 | أصلية، تكبير ×3 | V1-S4، V1-S5/S6 |
| s04_datacenter.png | image4.png | 4 | 470×432 | **تترسم Vector** طبقة طبقة + الأصلية في الآخر (تكبير ×3) | V2-S3 → S9 |
| s05_virtualization_banner.png | image5.png | 5 | 1920×365 | أصلية | V3-S2 |
| s06_paloalto_ngfw.jpg | image6.jpeg | 6 | 800×600 | أصلية، تكبير ×4 + Spotlight/Zoom + أسهم فوقها | V3-S7 → S12 |
| s07_media_streaming.png | image7.png | 7 | 720×1080 | أصلية | V4-S3 |
| s08_rack_servers.png | image8.png | 8 | 1920×365 | أصلية | V5-S4 |
| s09_firewall_icon.png | image9.png | 9 | 720×1080 | أصلية | V6-S2 |
| s10_fig8_33.png | image10.png | 10 | 1366×768 | **تترسم Vector** + الأصلية «النضيفة» في الآخر | V6-S7 → S9 |
| s11_storage_media.png | image11.png | 11 | 720×1080 | أصلية | V7-S1 |
| s12_conduant_ltx3.jpg | image12.jpeg | 12 | 900×600 | أصلية، تكبير ×2 | V7-S6/S7 |
| s13_compellent_racks.jpg | image13.jpeg | 13 | 400×542 | أصلية، تكبير ×2 | V7-S8 |
| s14_network_3d.png | image14.png | 14 | 720×1080 | أصلية | V8-S2 |
| s15_traditional_vs_sdn.png | image15.png | 15 | 590×245 | **تترسم Vector** + الأصلية (تكبير ×3) في الآخر | V8-S4 → S9 |
| s16_voip_globe.jpg | image16.jpeg | 16 | 460×325 | أصلية، تكبير ×3 | V4-S6 |
| s16_video_player.jpg | image17.jpeg | 16 | 275×183 | أصلية، تكبير ×4 جوه إطار موبايل مرسوم | V4-S7 |
| s16_cisco_phones.png | image18.gif | 16 | 470×250 | أصلية، تكبير ×3 (GIF فريم واحد → PNG) | V4-S8 |

### 3.3 التكبير (Upscale) — في `public/slides_up/` بنفس الأسماء
- لو `realesrgan-ncnn-vulkan` متاح: `realesrgan-ncnn-vulkan -i IN -o OUT -s 4 -n realesrgan-x4plus` ثم صغّر للمعامل المطلوب بـ `convert OUT -resize <factor×100>% OUT`.
- البديل المضمون: `convert IN -filter Lanczos -resize 300% -unsharp 0x0.8+0.6+0.01 OUT` (غيّر 300% للمعامل المطلوب).
- المعاملات: image3 ×3، image4 ×3، image6 ×4، image12 ×2، image13 ×2، image15 ×3، image16 ×3، image17 ×4، image18 ×3. الباقي يتنسخ زي ما هو.
- **قاعدة:** ممنوع تعرض أي صورة بحجم أكبر من أبعادها بعد التكبير (لو الكاميرا هتعمل زووم أكبر من كده، قلّل الزووم).

### 3.4 مناطق الصور (Regions) — نِسَب مئوية من الصورة: `x من–إلى %, y من–إلى %`
> النسب دي اتقاست على الصور الأصلية واتراجعت بمستطيلات تجريبية. استخدمها للـ Spotlight والأسهم والدواير. في المرحلة 0 ارسمها على الصور كـ debug وتأكد بعينك (سماحية ±2%).

- **s01_cloud_devices:** Cloud (1–61, 6–33) · Laptop (0–31, 44–73) · Desktop PC (62–100, 32–62) · Smartphone (44–56, 68–87) · Tablet (76–100, 59–87).
- **s02_agenda_figure:** مجسم أبيض بقلم أحمر بيعلّم على 4 مربعات بعلامات صح حمرا.
- **s06_paloalto_ngfw:** R_TITLE (5–95, 4–11) · R_CLUSTER (25–46, 15–32) · R_PANORAMA (75–85, 17–36) · R_ADMINS (85–97, 19–33) · R_POLICY (62–77, 30–39) · R_GREENCARD (40–49, 34–40) · R_LEFT_HOST (10–39, 37–85) · R_PHYS (10–39, 70–85) · R_HYPER (10–39, 64–72) · R_VSW (10–39, 54–67) · R_LEFT_TOP (10–39, 38–59) · R_LEFT_VMS (18–37, 40–58) · R_LEFT_NGFW (11–20, 42–54) · R_RIGHT_NGFW (73–81, 45–56) · R_TOPRIGHT (60–98, 14–42) · R_INTERNET (49–62, 47–65) · R_SWITCHES (37–72, 62–92) · R_TS_LABEL (2–12, 57–67).
  - محتوى الصورة: عنوان أخضر `Advanced Services Insertion – Example: Palo Alto Networks NGFW`؛ فوق شمال أيقونة مضلعة تركوازي/خضرا عليها رسم شبكة اسمها `Cluster Controller`؛ فوق يمين سيرفر مكتوب عليه `Panorama` وجنبه 3 أشخاص `Security Admin`؛ كارت أزرق صغير وتحته `Security Policy`؛ كارت أخضر صغير في النص (السياسة رايحة)؛ سهم من Panorama للـ Cluster Controller، وسهمين منه للـ firewall في السيرفرين؛ كل سيرفر من تحت لفوق: `Physical Host` (رمادي) ← `Hypervisor` ← `vSwitch` (أزرق) ← مكعبات `VM` رمادي وأخضر + مكعب أبيض عليه لوجو Palo Alto = الـ NGFW الافتراضي؛ في النص سحابة `Internet` بسهمين طالع/نازل، تحتها جهاز بسقف أزرق و4 مجموعات سويتشات متوصلة بالسيرفرين؛ على الشمال كلمة `Traffic Steering`.
- **s07_media_streaming:** العنوان المقصوص `MEDIA STREAMING DEV` (0–100, 4–12) · R_REMOTE (0–22, 22–93) · R_CUBE (27–99, 49–95).
- **s08_rack_servers:** R_DRIVE (58–66, 10–40) · R_LEDS_BLUE (8–13, 0–100) · R_LEDS_GREEN (49–53, 15–60).
- **s10_fig8_33 (1366×768):** الـ blob (16–62, 6–84) · لوح الـ Firewall (46–59, 0–75) · Public Internet (69–87, 28–49) · نص الشكل (16–86, 89.5–98).
- **s11_storage_media:** CD (0–89, 37.5–96) · كروت الميموري (40–90, 11–32) · كاميرا FinePix (0–34, 4–36) · العملة (40–57, 23.5–34.5) · جسم أبيض على الحافة اليمين (94–100, 2–50).
- **s12_conduant_ltx3:** 4 هاردات شمال (10–43, 23–73) · 4 هاردات يمين (47–84, 14–50) · R_BOARD (31–72, 16–67) · R_FANS (10–52, 10–24) · R_PORTS (71–81, 56–63) · R_LCD (50–59, 67–78) · R_BRAND `CONDUANT` / `Big River LTX3` (78–90, 51–61).
- **s13_compellent_racks:** رفوف الهاردات (5–99, 18–97) · R_CTRL وحدات الكنترولر فوق (6–75, 7–18.5) · R_KVM الدرج المسحوب بالشاشة والكيبورد (25–75, 34–58).
- **s14_network_3d:** R_SWP `SW Pubblico` (0–17, 68–80) · R_RVDF `Router VDF` (45–64, 69–82) · R_FW `Firewall + VPN gateway` (1–38, 51–70) · R_DMZ `SW DMZ` (39–57, 50–63) · R_BAL `Balancer` (62–83, 36–54) · R_LAN `SW LAN` (81–100, 35–44) · R_MOXA `MOXA` (82–100, 50–63) · R_MORF `Morfeo` (26–55, 0–15) · R_CL `Cliente 1` + `Cliente 2` (58–86, 5–26).
- **s16_voip_globe:** Tablet شاشته 20:35 (6.5–27.5, 19–43) · Smartphone (29–40, 59–86) · IP Phone (63–80.5, 33–55.5) · Video IP Phone (65–92.5, 60–81.5) · الكرة الأرضية (32–62, 1.5–48).
- **s16_video_player:** `3:07` (13–23, 8–17.5) · `-39:04` (74.5–88, 8–17.5) · `3G` (20–30, 0–7) · زرار Play (45–58, 70–85). محتوى: `ROGERS 3G` · `10:02 AM` · `84%` · زرار `Done` · زرار ملء الشاشة · رجوع/تشغيل/تقديم · شريط صوت · علامة قناة صغيرة يمين تحت.
- **s16_cisco_phones (8 أجهزة):** P1 فوق نص (27–50, 3–42) · P2 فوق يمين + Expansion module (65–94, 0–46)، الموديول لوحده (80–94, 13–46) · P3 نص شمال (9.5–29, 27–57) · P4 النص (48–72, 18–57) · P5 تحت شمال (9.5–31, 52–94) · P6 تحت نص (32–50, 46–82) · P7 لاسلكي على قاعدة (51–62, 62–90) · P8 شاشة ملونة تحت يمين (63–93, 50–97).

### 3.5 تنضيف صورة Figure 8.33 من العلامة المائية (إلزامي)
```bash
mkdir -p public/slides_up
convert public/slides/s10_fig8_33.png \
  -region 325x56+995+644 -white-threshold 55% +region \
  -region 40x22+1305+0  -white-threshold 1%  +region \
  public/slides_up/s10_fig8_33_clean.png
```
(الأمر ده بيمسح «Activate Windows» + «Go to PC settings…» + السهم «↔» من غير ما يلمس نص `Figure 8.33 ♦ …`. اتجرب واشتغل.) **استخدم `_clean` بس في أي مكان.**

### 3.6 ورق الخلفية (Paper texture) — صورة ثابتة واحدة `public/paper.png`
```bash
mkdir -p public
convert -size 1920x1080 xc:gray50 -seed 7 -attenuate 1.0 +noise Gaussian -colorspace Gray -blur 0x0.8 /tmp/nfine.png
convert -size 1920x1080 xc:gray50 -seed 8 -attenuate 1.0 +noise Gaussian -colorspace Gray -motion-blur 0x7+90 /tmp/nfib.png
convert -size 480x270  xc:gray50 -seed 3 -attenuate 1.0 +noise Gaussian -colorspace Gray -blur 0x5 -resize 1920x1080! /tmp/nblot.png
convert -size 1920x1080 xc:'#F8F4EC' \
  /tmp/nfine.png -compose Mathematics -define compose:args=0,0.15,1,-0.0747 -composite \
  /tmp/nfib.png  -compose Mathematics -define compose:args=0,0.18,1,-0.0896 -composite \
  /tmp/nblot.png -compose Mathematics -define compose:args=0,0.6,1,-0.2988 -composite -depth 8 public/paper.png
```
(اتقاست: متوسط اللون ≈ الريفرنس، والانحراف 1.65 مقابل 1.59 في الريفرنس.)

---

## 4) الأدوات وهيكل المشروع

- **Remotion 4 (React + TypeScript)**. كل فيديو = Composition مستقلة: `width 1920`, `height 1080`, `fps 24`.
- الحزم: `remotion` `@remotion/cli` `@remotion/paths` `@remotion/google-fonts` `roughjs` — **كل حزم `remotion` و`@remotion/*` لازم تبقى نفس رقم النسخة بالظبط** (اتأكد بـ `npx remotion versions`). وللسكربتات: `tsx` (dev dependency).
- الخطوط (Google Fonts عن طريق `@remotion/google-fonts`): `ArefRuqaa` (700) · `Cairo` (400, 500, 600, 700) · `CaveatBrush` (400) · `Kalam` (400, 700). حمّل كل خط بالأوزان والـ subsets اللي محتاجها: `loadFont('normal', {weights: ['700'], subsets: ['arabic', 'latin']})` لـ Aref Ruqaa، و`{weights: ['400', '500', '600', '700'], subsets: ['arabic', 'latin']}` لـ Cairo، و`subsets: ['latin']` لـ Caveat Brush وKalam. **من غير `arabic` العربي هيطلع بخط تاني.** استنى تحميل الخطوط قبل الرندر (loadFont بيعمل delayRender لوحده).
- **الرسم اليدوي:** `rough.generator()` → `gen.toPaths(drawable)` ← SVG paths. إعدادات ثابتة: `roughness: 0.9, bowing: 0.6, disableMultiStroke: true, seed: <رقم ثابت لكل شكل>`. اعمل الـ paths مرة واحدة بـ `useMemo`.
- **حركة رسم الخط:** `evolvePath(progress, d)` من `@remotion/paths` ← `strokeDasharray` و`strokeDashoffset`.

```
project/
  inputs/lecture.pptx
  downloads/refrance.mp4
  scripts/extract_assets.sh  make_sfx.sh  master_audio.sh  check_coverage.ts
  public/
    paper.png
    slides/        ← من 3.2
    slides_up/     ← من 3.3 و3.5
    characters/    ← من قسم 6
    sfx/           ← من قسم 7
  src/
    Root.tsx                 (بيسجّل CAL + الفيديوهات اللي اتعملت بس)
    theme.ts                 (الألوان والخطوط والمقاسات — قسم 5)
    lib/time.ts  lib/bidi.ts  lib/sfx.tsx  lib/camera.ts
    components/  (قسم 5.4)
    icons/       (قسم 5.5)
    videos/V1.tsx … V8.tsx + V1.data.ts … V8.data.ts
  out/raw/   out/final/
  NOTES.md
```

- **الرندر:** `npx remotion render src/index.ts V1 out/raw/V1.mp4 --codec=h264 --crf=18 --pixel-format=yuv420p --audio-bitrate=192k`
- **بعده لازم:** `bash scripts/master_audio.sh out/raw/V1.mp4 out/final/01_Course_Overview_Agenda.mp4` (ملحق C).
- **أسماء الملفات النهائية:** `01_Course_Overview_Agenda.mp4` · `02_Datacenter.mp4` · `03_Desktop_Service_Virtualization.mp4` · `04_Multimedia_Network_Application.mp4` · `05_Network_Management.mp4` · `06_Firewall.mp4` · `07_SAN_NAS_Storage_Networks.mp4` · `08_SDN.mp4`.
- **ملفات البيانات:** كل نص بيظهر على الشاشة يتكتب في `Vn.data.ts` كـ object فيه `text` و`verbatim: true|false` (true = جاي من الشريحة حرفيًا). السكربت `check_coverage.ts` (ملحق D) بيتأكد إن كل نصوص «ملحق A» موجودة.

---

## 5) نظام التصميم (Design System)

### 5.1 الألوان (`theme.ts`)

| Token | اللون | الاستخدام |
|---|---|---|
| PAPER | `#F8F4EC` | لون الورق (تحت الـ texture) + لون الـ fade |
| CARD | `#FDFBF5` | تعبئة الكروت والـ PinnedPhoto |
| INK | `#2A2723` | كل الخطوط والنصوص الأساسية |
| MUTED | `#6F685D` | الملاحظات العربي الصغيرة |
| CAPTION | `#413D36` | الكابشن |
| RED | `#D52739` | الخط تحت العنوان، الدواير، الأسهم المهمة، علامة ✗، كلمات «فهمت!/اتمنع!» |
| HILITE | `#FCF0B2` | تظليل أصفر ورا النص |
| GREEN | `#4BD47E` | تعبئة علامة الصح |
| GREEN_DARK | `#15361F` | حدّ علامة الصح |
| GREEN_TEXT | `#1E7A45` | نص «allowed through» |
| YELLOW | `#F5CD63` | القفل |
| WARN | `#FCD54D` | مثلث التحذير، خطوط اللمعة |
| BLUE_LIGHT | `#DCEAF6` | السحاب والـ blobs الفاتحة |
| NAVY | `#003E7E` | سحابة تخزين الـ Datacenter + الأسطوانات |
| VM_BLUE | `#D9E2F0` | مربعات الـ VM |
| ESXI_GREY | `#DFE2E0` | صندوق ESXi |
| ORANGE_ZOOM | `#F79A52` (شفافية 0.55) | مثلث الزووم البرتقالي |
| FW_PLANE | `#ADCCDC` (شفافية 0.6) | لوح الـ Firewall الزجاجي |
| FW_BLOB | `#E1EBF1` | منطقة الـ Administered network |
| FIG_BLUE | `#0CB0F0` | كلمة `Figure 8.33` |
| SDN_RED | `#DC2E36` (جانب `#B3242B`) | الـ Control Plane والـ Controller Machine |
| SDN_BLUE | `#59AFD8` (جانب `#3B8FBA`، وش فاتح `#9ED3EC`) | الـ Data Plane والـ Programmable Switch |
| SDN_DOT | `#31AAD2` | الخطوط المنقطة |
| SALMON | `#F4998C` | طوب الـ Firewall |
| SLATE | `#668A9C` | نار أيقونة الـ Firewall |
| AVATAR | `#7E57C2` | دايرة حرف a |
| MONEY | `#8BC79A` | الفلوس |

### 5.2 الخطوط والمقاسات

| Token | الخط | الوزن | الحجم | اللون | الاستخدام |
|---|---|---|---|---|---|
| T_HOOK | Aref Ruqaa | 700 | 92px (line-height 1.3) | INK | عنوان السؤال في أول كل فيديو |
| T_AR_MEANING | Aref Ruqaa | 700 | 56–80px | INK | المعنى العربي تحت المصطلح |
| T_NAME | Aref Ruqaa | 700 | 58px | INK | اسم الشخصية جوه البيضاوي |
| T_EXCLAIM | Aref Ruqaa | 700 | 56–70px | RED | «فهمت!» «اتمنع!» «وفّرنا!» «اطّمنت!» و«!» |
| T_KEY_EN | Caveat Brush | 400 | 150px (كلمة) / 120px (كلمتين) / 64–100px (فرعي) | INK | المصطلح في الختام وعناوين كبيرة |
| T_EN_TITLE | Kalam | 700 | 48–72px | INK | عناوين الشرايح جوه الكروت |
| T_EN_LABEL | Kalam | 700 | 26–36px | INK | أسماء عناصر الرسومات |
| T_EN_BODY | Cairo | 600 | 38–44px (line-height 1.45) | INK | الجمل الإنجليزي الحرفية، LTR ومحاذاة شمال |
| T_AR_BODY | Cairo | 500 | 32–44px | INK | جمل عربي جوه الكروت |
| T_AR_NOTE | Cairo | 500 | 24–32px | MUTED | الملاحظات العربي الصغيرة |
| T_CAPTION | Cairo | 500 | 40px | CAPTION | الكابشن |

- **أي حروف لاتينية أو أرقام جوه عنوان رقعة** (زي `10` أو `CD`) تتكتب في `<span>` بخط Caveat Brush بنفس الحجم × 0.9.
- التشكيل: بس الشدة في الكلمات اللي مكتوبة بيها في الخطة (زي «المعرّفة»، «بيشغّل»).
- **الرموز المسموحة في أي نص بيترندر:** الحروف والأرقام و `. , : ; ! ? ؟ ، ( ) / & + = % - – • · ...` بس. الرمز `♦` (في `Figure 8.33 ♦ …`) **بيترسم SVG** (معين مليان 14px بلون INK، ومسافة 10px من الناحيتين) — ممنوع تسيبه للخط عشان Chrome ممكن يرسمه إيموجي. اختبار `GLYPHS` في المرحلة 0 بيتأكد من ده.

### 5.3 تقسيم الكادر (Layouts)

- **منطقة الكابشن محجوزة:** y من 975 لـ 1040. ممنوع أي عنصر ينزل تحت y = 950 (غير الشخصيات، ودي بتختفي تدريجي تحت).
- **LAYOUT_A — شخصية شمال + كارت يمين:** مركز الشخصية x = 400، ارتفاعها 820px، قاعدتها y = 1000. الكارت x 700/760 → 1800/1840 (المقاس بالظبط في كل مشهد).
- **LAYOUT_B — شخصية يمين + كارت شمال:** مركز الشخصية x = 1520 (أو 1580)، والكارت x 100 → 1240.
- **LAYOUT_H — Hook:** شخصية في جنب، وعلى الجنب التاني عنوان T_HOOK (حافته اليمين x = 1180، مركزه y = 180)، وخط أحمر تحته (y ≈ 265)، ورسمة توضيحية في y 330 → 900. البيضاوي بتاع الاسم فوق راس الشخصية (y ≈ 120).
- **LAYOUT_C — Checklist (زي مشهد 5 في الريفرنس):** كارت x 100 → 1240، y 110 → 910. عنوان T_EN_BODY بوزن 700 حجم 46px عند (x 170، y 200) + خط تحته. البنود flex column تبدأ y 330 بمسافة 50px: علامة صح 70×64 عند x 160، النص الإنجليزي عند x 260 (أقصى عرض 940، مسموح سطرين)، والملاحظة العربي تحته (T_AR_NOTE 28px). م. عمر يمين: مركز x = 1580، ارتفاع 800 (وضعية O3)، ولمعة عند راسه في الآخر.
- **LAYOUT_P — صورة:** PinnedPhoto بالمقاس المكتوب في المشهد + ملاحظات حواليها.
- **LAYOUT_D — رسمة كاملة:** المساحة x 120 → 1800، y 40 → 950. مفيش شخصية.
- **LAYOUT_S — نصّين (Split):** خط رأسي بخط اليد عند x = 960 من y 120 لـ 900 (INK 3px)، ونص لكل جنب.
- **LAYOUT_F — الختام:** المصطلح الإنجليزي عند (1100، 290) جوه دايرة حمرا، المعنى العربي عند y ≈ 470–540، جملة متظللة عند y ≈ 600–660، الشخصية تحت شمال (مركز x = 330، ارتفاع 720)، أيقونة صغيرة يمين الدايرة (≈ x 1760).
- **LAYOUT_R — بطاقة المذاكرة:** كارت واحد كبير x 60 → 1860، y 80 → 950. فوق: «بطاقة المذاكرة: نص المحاضرة كامل» (Aref Ruqaa، 48px) آخره من اليمين عند x 1810 ومركزه y 130، وعلى الشمال تاجات الشرايح (Kalam 700، 28px) بتبدأ من x 110. خط INK 2px عند y 175 من x 100 لـ 1820. تحت: **عمود النص الحرفي** x 110 → 1210 (LTR)، خط رأسي INK 2px عند x 1240 من y 195 لـ 930، و**عمود «مصطلحات مهمة»** x 1270 → 1810 (RTL). في V1 بس: عمودين نص (x 110 → 930 و x 990 → 1810) ومفيش قاموس. مفيش شخصية.

### 5.4 المكوّنات (Components) — بمواصفات ثابتة

- **Paper:** `public/paper.png` بملء الكادر. ثابت.
- **SketchBox (كارت):** تعبئة CARD، و4 خطوط INK سُمك 4px، كل خط **بيعدّي الركن بـ 14px** من الناحيتين، `rough.line` (roughness 0.6، bowing 0.5، seed ثابت). الرسم: الضلع اللي فوق ← اليمين ← اللي تحت ← الشمال، كل ضلع 25% من مدة الرسم، والتعبئة بتظهر (opacity 0 → 1) في أول 30% من المدة.
- **HandUnderline:** خط RED سُمكه 6px منحني سنة صغيرة (bow 0.5%)، طوله = عرض النص + 20px. بيترسم من اليمين للشمال تحت العربي، ومن الشمال لليمين تحت الإنجليزي.
- **RedEllipse:** RED سُمك 5px، round caps. بيبدأ من زاوية 200° ويلف **390°** (يعني ذيله بيعدّي على بدايته زي الريفرنس)، ونص قطر لفة النهاية أكبر بـ 3%. `rx` و`ry` = نص عرض/ارتفاع النص + 40/30px.
- **Highlight:** مستطيل HILITE ورا النص، أطرافه خشنة سنة، padding 8px، ميل −1°. بيكبر في اتجاه القراية (يمين ← شمال للعربي، شمال ← يمين للإنجليزي). المدة 0.30–0.35 ث. **التنفيذ:** span بخلفية `linear-gradient(HILITE, HILITE)` و`background-size` بيتحرك من `0% 100%` لـ `100% 100%` (`background-position: right` للعربي و`left` للإنجليزي) + `box-decoration-break: clone` عشان لو الكلام اتلف على سطرين.
- **CheckMark (✓):** path `M0,38 L26,64 L70,0` بطبقتين: GREEN_DARK سُمك 11px وفوقه GREEN سُمك 6px. بيترسم في 0.25 ث، وبعدها bounce (scale 1 → 1.1 → 1) في 0.15 ث.
- **RedTick (صح أحمر للـ Agenda):** نفس الـ path بلون RED سُمك 6px، جوه مربع checkbox 46×46 بخط INK 4px — زي صورة image3.
- **CrossMark (✗):** خطين RED سُمك 8px، كل خط 0.12 ث.
- **Arrow:** خط INK أو RED سُمك 5px، منحني خفيف، وراس السهم (خطين 22px بزاوية 30°) بيظهر لما الخط يوصل 85%.
- **NameOval:** بيضاوي INK سُمك 4px حوالين اسم بخط T_NAME، بيترسم 0.35 ث وبعدين الاسم بيظهر (fade 0.15).
- **Tag:** مستطيل بأركان مدوّرة 14px بخط INK (أو RED لما يتقال) 4px جواه نص.
- **PinnedPhoto:** padding 14px بتعبئة CARD + حدّ SketchBox + شريطين لزق `#E9DDC4` بشفافية 0.85 مقاسهم 120×34 على الركنين اللي فوق بميل −35° و+35°. **من غير ظل.** الدخول: opacity 0 → 1 و scale 0.94 → 1 في 0.35 ث (easeOutCubic). **أي صورة هتتعمل عليها كاميرا/Spotlight: الميل (rotation) = 0.**
- **Spotlight:** طبقة PAPER شفافيتها 0.70 فوق الصورة بس، فيها فتحة (SVG mask) بأركان 14px = المنطقة + 1.5% هامش. حوالين الفتحة مستطيل RED سُمك 5px بيترسم في 0.35–0.40 ث. النقل بين منطقتين: 0.40 ث easeInOutCubic.
- **Camera:** wrapper بيعمل `scale` + `translate`. لو عايز منطقة R تبقى بارتفاع H بكسل ومركزها عند (cx, cy): `s = H / ارتفاع R على الشاشة وهي scale 1`، `translate = (cx, cy) − s × مركز R`. المدة 0.6–0.7 ث easeInOutCubic. أقصى scale: 3.0. **الملاحظات والكروت الجانبية برة الكاميرا** (إحداثيات الكادر).
- **Character:** `<Img>` PNG شفاف. `mask-image: linear-gradient(to bottom, black 86%, transparent 100%)` (واكتب `WebkitMaskImage` بنفس القيمة كمان). الدخول: opacity 0 → 1 + إزاحة 80px من ناحية حافة الشاشة القريبة ← 0، في 0.35 ث easeOutCubic. مسموح تعمل mirror أفقي للصورة (مفيش كتابة على الهدوم).
- **HandWrite (كتابة بخط اليد للعناوين والمصطلحات):** نفس النص بيتكشف بـ `clip-path: inset(...)` — للعربي من اليمين للشمال، وللإنجليزي من الشمال لليمين. easing: easeInOutSine.
- **WordReveal (نص الجمل):** النص بيتقسم كلمات، كل كلمة opacity 0 → 1 في 3 فريمات + طالعة 4px لفوق. المدة الكلية مقسومة بالتساوي على الكلمات. الترتيب حسب ترتيب الكلام (العربي هيبان من اليمين لوحده لأن الـ container `dir="rtl"`).
- **Caption:** T_CAPTION، مركز (960، 1006)، أقصى عرض 1600، **سطر واحد**. كل كابشنات الخطة ≤ 66 حرف (اتقاست على الريفرنس: ≈ 21px للحرف عند 40px). لو مش داخل في 1600 صغّر لـ 36px؛ لو برضه مش داخل = خطأ، بلّغ في NOTES. يظهر fade 0.20 ث عند t = 0.15 من المشهد، ويختفي مع fade المشهد. في المشاهد الـ CONT: القديم يختفي آخر 0.20 ث والجديد يظهر أول 0.20 ث.
- **SceneFade:** آخر 8 فريمات (0.33 ث) طبقة PAPER بتغطي الكادر كله (opacity 0 → 1). آخر مشهد في كل فيديو: 0.70 ث.
- **CONT (مشهد مكمّل):** المشهد اللي قبله **مبيعملش fade**، والعناصر بتفضل مكانها، ومفيش whoosh في أوله. مكتوب جنب رقم المشهد.
- **Sparkle:** 5 شرَط WARN سُمك 6px طول 26px حوالين راس الشخصية، بيترسموا مع بعض في 0.25 ث.
- **Pop:** scale 0 → 1.12 → 1 في 0.25 ث (easeOutBack).
- **Glow pulse:** دايرة RED شفافيتها 0.30 بتكبر 0.8 → 1.3 وتختفي في 0.5 ث.
- **StudyCard (بطاقة المذاكرة)** — بتستخدم LAYOUT_R:
  - كل شريحة = بلوك: تاج `Slide N` (Kalam 700، 30px، INK) ← عنوان الشريحة (Cairo 700، 32px) ← فقراتها (Cairo 600، 28px، line-height 1.45، مسافة 8px بين الفقرات). مسافة 24px بين البلوكات. البنود (زي الـ Agenda) قبل كل واحد نقطة مرسومة (دايرة INK قطرها 8).
  - النص من «ملحق A» **بالحرف وبالترتيب وبالفقرات زي ما هي في الشريحة**.
  - التظليل الأصفر هنا **ثابت** (بيظهر مع الفقرة، من غير حركة ولا صوت).
  - بعد أي نص منقول من جوه صورة: سطر «(من جوه الصورة)» (Cairo 500، 22px، MUTED).
  - صفوف القاموس: المصطلح (Kalam 700، 26px، LTR) وتحته المعنى (Cairo 500، 24px، MUTED) في سطر واحد، ارتفاع الصف 66px، أقصى 10 صفوف. فوقهم «مصطلحات مهمة» (Aref Ruqaa، 36px) آخره من اليمين عند x 1810، مركزه y 220. المعاني من «ملحق E».
  - **ممنوع `overflow: hidden`.** لو عمود طويل عن مساحته: صغّر خط الفقرات 2px (أقل حاجة 24px) وسجّل ده في NOTES.
  - **التوقيت الموحّد (D = مدة المشهد):**

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | — | whoosh_soft |
| 0.20–0.70 | رسم الكارت | pencil_loop مدة 0.50 |
| 0.75–1.25 | HandWrite العنوان العربي | marker_loop مدة 0.50 |
| 1.25 | Pop تاجات الشرايح | pop_soft (−6 dB) |
| 1.35–1.55 | الخطوط الفاصلة | — |
| 1.50–3.10 | البلوكات تظهر بالترتيب (كل بلوك fade + طالع 6px في 0.25، والفرق بينهم متساوي) | page_turn (−6 dB) عند 1.50 |
| 3.20 | «مصطلحات مهمة» | tick_soft (−3 dB) |
| 3.30–4.30 | صفوف القاموس بالترتيب (فرق متساوي) | — |
| D−0.33 → D | fade | — |

- **SlideBadge (شارة الشريحة):** تاج صغير فوق يمين — آخره عند x 1880، أعلاه y 24، ارتفاعه 40، حد MUTED 2px بأركان 12px، النص Kalam 700، 24px، MUTED، LTR. بيظهر fade 0.2 ث مع أول المشهد، وفي الـ CONT بيفضل ثابت، وبيختفي مع الـ fade، ومن غير صوت. النص والتوزيع في 5.7.

### 5.5 الأيقونات (SVG بخط اليد — كلها نفس الستايل)
- خط INK 4px بأطراف مدوّرة، تعبئات مسطحة من الألوان اللي فوق، rough.js بـ roughness 0.8 وseed ثابت لكل أيقونة. حجم افتراضي 120px لو مش مكتوب.
- القائمة المطلوبة: server_box (أفقي) · server_tower · rack (رمادي `#4A4E57` بشقوق `#8C929C` و8 صفوف) · desktop_pc (شاشة + كيبورد) · laptop · laptop_browser · terminal_crt · smartphone · tablet · tv · cloud · switch (مربع بأسهم X) · router (أسطوانة بأسهم X) · firewall_wall (طوب SALMON + نار SLATE) · lock (جسم YELLOW + قوس INK 6px + خرم) · eye · eye_crossed · magnifier · storage_cylinder (NAVY + بيضاوي أبيض) · vm_box · folder · hard_drive · gear · wrench · speedometer · shield · power_clock · globe · desk_phone · video_phone · speaker_waves · video_camera · play_screen · music_headphones · big_file · small_file · press_vise · packet_cube · warning_triangle (WARN + «!» INK) · question_mark · banknote (MONEY) · coin_down · rising_chart · clipboard_gear · dashboard · toolbox · monitor_chart · calendar · checklist · datacenter_building · nas_box · block_grid (3×3) · controller_red (صندوق أحمر طويل 3D) · trad_switch (لوح أحمر فوق لوح أزرق) · prog_switch (لوح أزرق بس) · office_building · gate_open.

### 5.6 الحركات (Animation primitives) — المدد الافتراضية

| الحركة | المدة | Easing |
|---|---|---|
| SketchBox draw | 0.50–0.60 ث | linear لكل ضلع |
| خط/سهم | 0.20–0.80 ث (حسب الطول) | easeInOutSine |
| HandWrite عنوان | 0.60–1.20 ث | easeInOutSine |
| WordReveal | 0.10–0.12 ث لكل كلمة | — |
| Pop أيقونة | 0.25 ث | easeOutBack |
| CheckMark | 0.25 + 0.15 bounce | easeOutCubic |
| Highlight | 0.30–0.35 ث | easeOutCubic |
| RedEllipse | 0.50–0.60 ث | easeInOutSine |
| Character enter | 0.35 ث | easeOutCubic |
| Camera | 0.60–0.70 ث | easeInOutCubic |
| SceneFade | 0.33 ث (الأخير 0.70) | linear |

### 5.7 شارة الشريحة (SlideBadge) — توزيعها على المشاهد
- النص: `Lecture 1 · <رقم الفيديو>/8 · Slide <N>` (مثلًا `Lecture 1 · 3/8 · Slide 5`). البطاقة: `Lecture 1 · 3/8 · Slides 5–6`. ولو المشهد مش من شريحة (Hook أو ختام): `Lecture 1 · 3/8` بس. لو اختبار `GLYPHS` طلّع إن `–` أو `·` مش موجودين في Kalam، استخدم `-` بدلهم في الشارة بس.

| الفيديو | المشهد: الشريحة |
|---|---|
| V1 | S1–S3: Slide 1 · S4: Slide 2 · S5–S6: Slide 3 · S7: Slides 1–3 · S8: — |
| V2 | S1: — · S2–S10: Slide 4 · S11: — |
| V3 | S1: — · S2–S6: Slide 5 · S7–S12: Slide 6 · S13: Slides 5–6 · S14: — |
| V4 | S1: — · S2–S5: Slide 7 · S6–S8: Slide 16 · S9: Slides 7, 16 · S10: — |
| V5 | S1: — · S2–S6: Slide 8 · S7: — |
| V6 | S1: — · S2–S6: Slide 9 · S7–S9: Slide 10 · S10: Slides 9–10 · S11: — |
| V7 | S1–S5: Slide 11 · S6–S7: Slide 12 · S8: Slide 13 · S9: Slides 11–13 · S10: — |
| V8 | S1: — · S2–S3: Slide 14 · S4–S9: Slide 15 · S10: Slide 14 · S11: Slides 14–15 · S12: — |

---

## 6) الشخصيات

### 6.1 مين هما
- **م. عمر** — الخبير (بديل «دكتور هاني»). مهندس شبكات مصري أوائل التلاتينات.
- **كريم المتدرب** — الفضولي/المحتار (بديل «نبيل الفضولي»). شاب مصري 22 سنة.
- **«شبح» الهكر** — الشرير الكوميدي، بيظهر في فيديو 6 بس.

### 6.2 الوضعيات المطلوبة (أسماء الملفات في `public/characters/`)

| الملف | الوصف | بيظهر في |
|---|---|---|
| omar_O1.png | ماسك تابلت على صدره بإيده الشمال وبيبتسم | V1-S1، V3-S2 |
| omar_O2.png | بيشاور بصباعه اليمين ناحية يمين الصورة وبوقه مفتوح سنة كأنه بيشرح | V1-S2، V3-S3، V5-S2 |
| omar_O3.png | لايك بإيده اليمين وبيغمز بابتسامة كبيرة | V1-S8، V3-S6، V4-S4، V5-S5، V6-S6، V7-S5، V8-S10 |
| omar_O4.png | بيقدّم بكف إيده اليمين مفتوح ومرفوع ناحية يمين الصورة | V2-S2، V3-S4، V4-S2، V5-S3، V8-S3 |
| omar_O6.png | بيحتفل رافع إيديه الاتنين مقبوضين وبيضحك | V8-S12 |
| karim_K1.png | بيهرش في راسه ومحتار وحاجب مرفوع | V2-S1، V7-S1 |
| karim_K2.png | مخضوض، عينيه واسعة، نقطة عرق، إيده اليمين مرفوعة مفرودة | V5-S1 |
| karim_K3.png | دايخ وعينيه لولبية ومتلفوف في كابل شبكة رمادي طويل | V8-S1 |
| karim_K4.png | ماسك فلوس خضرا على شكل مروحة وقلقان وإيده التانية على خده | V3-S1 |
| karim_K5.png | مبسوط ومرتاح، ابتسامة كبيرة، بيسقف | V2-S11، V3-S14، V5-S7، V7-S10، V8-S12 |
| karim_K6.png | لابس سماعة كبيرة وماسك موبايل بالعرض ومبتسم للشاشة | V4-S1، V4-S10 |
| hacker_H1.png | بيكتب على لابتوب غامق شايله على دراعه، شاشته منوّرة أحمر، ابتسامة خبيثة | V6-S1 |
| hacker_H2.png | متضايق ومتمنع، كفوفه الاتنين مفرودة لقدّام كأنه لازق في زجاج | V6-S5، V6-S11 |

### 6.3 الـ Prompts (إنجليزي — انسخها زي ما هي)

**STYLE (يتحط في أول كل prompt):**
`2D digital cartoon illustration for an educational explainer video, semi-realistic friendly proportions, clean dark-brown ink outlines, soft cel shading with gentle gradients, warm natural colors, subtle paper grain, three-quarter view facing slightly toward the viewer, framed from head to mid-thigh, plain pure white background, no text, no letters, no logos, no watermark, detailed face and hands, consistent character design.`

**OMAR:** `Omar, an Egyptian network engineer in his early 30s, short neat black hair with a side part, short well-trimmed black beard, warm light-brown skin, friendly confident eyes, no glasses, navy-blue polo shirt, grey lanyard with a blank white ID card, black over-ear headset resting around his neck, dark grey chino trousers.`

**KARIM:** `Karim, an Egyptian trainee in his early 20s, messy wavy black hair, clean-shaven, big expressive dark eyes, slim build, mustard-yellow hoodie over a white t-shirt, small blank blue badge clipped to the hoodie, blue jeans.`

**SHABAH:** `Shabah, a playful cartoon hacker villain (funny, not scary), black hoodie with the hood up, black sunglasses, short stubble, sly smirk, slim build.`

**POSES:** O1 `holding a tablet against his chest with his left hand, warm smile` · O2 `pointing with his right index finger toward the right side of the image, mouth slightly open as if explaining` · O3 `thumbs-up with his right hand, winking, big smile` · O4 `presenting with his right palm open and raised toward the right side, friendly smile` · O6 `celebrating with both fists raised, joyful open-mouth smile` · K1 `scratching his head, confused, one eyebrow raised` · K2 `startled and scared, wide eyes, a sweat drop on his temple, right hand raised with open palm` · K3 `dizzy with swirly eyes, tangled in a long grey network cable wrapped around his arms` · K4 `holding a fan of green banknotes in one hand, worried, other hand on his cheek` · K5 `happy and relieved, big smile, clapping his hands` · K6 `wearing big over-ear headphones, holding a smartphone sideways, smiling at the screen` · H1 `typing on a dark laptop held on one forearm, the laptop screen glowing red, sly grin` · H2 `frustrated, both palms pressed flat forward as if against an invisible glass wall, annoyed face`.

### 6.4 خطوات التجهيز
1. اعمل لكل شخصية **Character sheet** (front + 3/4) واختار أحسن نسخة. كل الوضعيات بعد كده تتعمل **image-to-image / character reference** من نفس الشيت ونفس الـ seed عشان الوش والألوان ميتغيروش.
2. شيل الخلفية: `rembg i IN.png OUT.png` (أو أي أداة matting).
3. وحّد المقاس: ارتفاع 1600px، والقص عند نص الفخد في كل الوضعيات.
4. حافة sticker بيضا 6px:
   `convert IN.png -bordercolor none -border 12 \( +clone -alpha extract -morphology Dilate Disk:6 -background white -alpha shape \) +swap -background none -layers merge +repage OUT.png`
5. الاختفاء التدريجي اللي تحت بيتعمل في Remotion بالـ mask (متحرقوش في الصورة).
6. **لو مفيش أداة توليد صور:** وقّف واطلب من المستخدم الـ 13 صورة بالأسماء اللي فوق. مسموح placeholders (سيلويت رمادي) وإنت بتطوّر بس، **ممنوع في الرندر النهائي.**

---

## 7) الصوت (مؤثرات ناعمة ومتزامنة مع الرسم)

### 7.1 القواعد
1. **مفيش Voiceover ولا موسيقى.** مؤثرات بس، والصمت بينها عادي (زي الريفرنس).
2. **التزامن:** الصوت يبدأ **في نفس الفريم** اللي الحركة بتبدأ فيه. أصوات القلم والماركر **مدتها = مدة الرسم بالظبط** (بتتقص من الـ loop) + fade-in 1 فريم + fade-out 2 فريم.
3. كتابة بخط اليد (عناوين، مصطلح إنجليزي، دواير حمرا، خط تحت العنوان) ← `marker_loop`. رسم كروت/خطوط/أسهم وكتابة جمل ← `pencil_loop` (الجمل −3 dB).
4. أقصى صوتين في نفس اللحظة. أقصى 3 pops في الثانية؛ لو فيه سلسلة عناصر سريعة شغّل pop على بعضها بس (مكتوب في كل مشهد) بـ −6 dB.
5. **ملهمش صوت:** ظهور الكابشن، دخول الشخصية (الـ whoosh بتاع أول المشهد كفاية)، الـ fade، الملاحظات العربي اللي بتعمل fade.
6. أي رقم «−X dB» مكتوب جنب صوت في الخطة = gain إضافي على الملف.

### 7.2 قاموس الأصوات (كلها بتتولد بـ `scripts/make_sfx.sh` — ملحق B — في `public/sfx/`)

| الحدث | الصوت | ملاحظة |
|---|---|---|
| بداية مشهد (مش CONT) | whoosh_soft | هوا ناعم 0.45 ث |
| كتابة عنوان/مصطلح، دايرة حمرا، خط تحت العنوان | marker_loop | يتقص على قد الرسم |
| رسم كارت/خط/سهم، كتابة جمل وملاحظات | pencil_loop | يتقص على قد الرسم |
| ظهور أيقونة/عنصر | pop_soft | فقاعة 300→800 Hz |
| صح أحمر في الـ Agenda، ظهور كارت ملاحظة | tick_soft | ماريمبا A5 |
| علامة صح خضرا | check_soft | ماريمبا C6 |
| تظليل أصفر | highlight_swipe | |
| ظهور صورة PinnedPhoto | page_turn | |
| اكتمال/ختام (الدايرة الحمرا في الختام) | chime_success | C6-E6-G6 |
| ختام السلسلة كلها (V8 آخر مشهد) | finale_arp | C5-E5-G5-C6 |
| قفل | lock_click | |
| تحذير | warn_soft | E5 ← C5 (بدل البازر الخشن) |
| إنذار شبكة واقعة | warn_beeps | |
| رفض/خطأ/✗ | bonk_soft | |
| حاجة تقيلة بتنزل/تتجمع | stamp_thud | |
| شخصية محتارة | boing_question | |
| خبط على زجاج | glass_knock | |
| درع/حماية | shield_clink | |
| فلوس | coins_soft | |
| فحص/سكان | radar_ping | |
| ضغط ملف | squeeze | |
| ميديا/تشغيل | media_play | |
| تليفون | phone_trill | |
| إرسال إشارات/أوامر | signal_pips | |
| بيب إلكتروني | beep_soft | |
| زرار ريموت | remote_click | |
| هارد ديسك | hdd_whir | |
| كيبورد | typing_soft | |
| أزيز سيرفرات (خلفية مشهد) | hum_server | −6 dB، fade in/out |
| زووم كاميرا | zoom_in | |
| فكرة | lightbulb_ding | |

### 7.3 المستويات والماستر
- السكربت بيظبط كل ملف تلقائيًا: الأصوات اللحظية قمتها −12 لـ −16 dBFS، والأصوات المستمرة RMS بين −30 و−42 dBFS. **متغيّرش الأرقام دي.**
- كل الأصوات فيها low-pass (مفيش حدّة فوق 5–6.5 kHz)، ومفيش موجات مربعة/منشارية.
- بعد الرندر لازم `master_audio.sh` (ملحق C): high-shelf −3 dB فوق 7 kHz + Loudness **−22 LUFS** + True peak **≤ −3 dBTP** على مرحلتين. (اتجرب على ميكس بنفس كثافة الريفرنس: الناتج −22.0 LUFS وقمة −9.3 dBFS، مقابل −19.8 LUFS و−1.6 dBFS في الريفرنس ← أنعم بوضوح ومن غير ما يبقى واطي.)

### 7.4 مساعد الصوت في Remotion (`src/lib/sfx.tsx`)
```tsx
import React from 'react';
import {Audio, Sequence, staticFile, interpolate, useVideoConfig} from 'remotion';
const dbToGain = (db: number) => Math.pow(10, db / 20);
export const Sfx: React.FC<{name: string; at: number; dur?: number; gainDb?: number}> = ({name, at, dur, gainDb = 0}) => {
  const {fps} = useVideoConfig();
  const from = Math.round(at * fps);
  const len = dur ? Math.max(4, Math.round(dur * fps)) : 4 * fps;
  const g = dbToGain(gainDb);
  return (
    <Sequence from={from} durationInFrames={len} layout="none">
      <Audio
        src={staticFile(`sfx/${name}.wav`)}
        volume={(f) => (dur ? interpolate(f, [0, 1, len - 2, len], [0, g, g, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}) : g)}
      />
    </Sequence>
  );
};
```
- `at` بالثواني من بداية الـ Composition (حوّل من وقت المشهد: `sceneStart + t`).
- للـ loops (pencil/marker/hum/typing) لازم تبعت `dur`. للأصوات اللحظية متبعتهوش.

---

## 8) الكابشن والـ Bidi (عربي + إنجليزي في نفس السطر)

- container الكابشن `dir="rtl"` و`text-align: center`.
- **أي كلمة/جملة إنجليزي جوه الكابشن تتلف في `<bdi dir="ltr">`** — ده بيمنع النقط والأقواس إنها تنط لمكان غلط. استخدم الدالة دي:

```ts
// src/lib/bidi.ts
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
// <span dir="rtl">{bidiSegments(c).map((x, k) => x.ltr ? <bdi key={k} dir="ltr">{x.text}</bdi> : <React.Fragment key={k}>{x.text}</React.Fragment>)}</span>
```

- النقطة اللي في آخر الجملة بتفضل **برة** الـ bdi (الـ regex بيضمن ده) فتظهر في أقصى الشمال صح.
- الكروت اللي فيها جمل إنجليزي كاملة: `dir="ltr"` ومحاذاة شمال. الملاحظات العربي: `dir="rtl"`.
- **اختبار إلزامي:** اعمل still لكابشن `وده اسمه Firewall.` والجملة التجريبية `ونختم بـ Software Defined Networks (SDN).` واتأكد إن النقطة في أقصى الشمال والأقواس متقفلة صح.

---

## 9) المراحل (كل فيديو = مرحلة)

### طريقة قراءة المشاهد
- العنوان: `Vx-Sy · من → إلى (المدة) · فريم من → إلى · الـ Layout · [CONT→] لو المشهد اللي بعده مكمّل`.
- **العناصر:** مكان ومقاس كل حاجة.
- **التايملاين:** جدول `t` (ثواني من بداية المشهد) | الحدث | الصوت. «مدة X» جنب الصوت = يتقص على المدة دي.
- **الكابشن:** النص بالظبط بين «».
- أي مشهد مش مكتوب فيه حاجة مختلفة: الكابشن يظهر عند t = 0.15، وآخر 0.33 ث fade (إلا لو CONT).
- الـ **SlideBadge** موجود في كل مشهد حسب جدول 5.7 — مش متكرر جوه المشاهد.

### لو المطلوب فيديو واحد بس (مثلًا V6)
1. **المرحلة 0 لازم تكون خلصت.** لو مش خلصانة اعملها الأول ووقّف. لو خلصانة قبل كده **متعيدهاش** (الأصوات والشخصيات والمكوّنات بتتستخدم تاني).
2. نفّذ **مرحلة الفيديو ده بس** من الجدول اللي تحت. متلمسش أي فيديو تاني.
3. في `Root.tsx` سجّل الفيديو ده (والفيديوهات اللي اتعملت قبل كده بس).
4. خطوات التسليم من المرحلة 9 **على الفيديو ده بس**:
   - `npx tsx scripts/check_coverage.ts V6` ← لازم يطبع `ALL 100% COVERED`.
   - الرندر ← `master_audio.sh` بالاسم النهائي من الجدول.
   - `ffprobe` + فحص الـ loudness (خطوة 3 في المرحلة 9).
   - الـ contact sheet + still بطاقة المذاكرة (أمر الفيديو ده من جدول خطوة 5).
   - «قائمة قبول» الفيديو + قائمة QA (قسم 11).
5. سلّم: الفيديو النهائي + `out/debug/V6_sheet.png` + `out/debug/V6_card.png` + نتيجة قائمة القبول بندًا بندًا.

| الفيديو | المرحلة | الموضوع | الشرايح | الملف النهائي |
|---|---|---|---|---|
| V1 | 1 | مقدمة الكورس والـ Agenda | 1، 2، 3 | `01_Course_Overview_Agenda.mp4` |
| V2 | 2 | Datacenter | 4 | `02_Datacenter.mp4` |
| V3 | 3 | Desktop and Service Virtualization | 5، 6 | `03_Desktop_Service_Virtualization.mp4` |
| V4 | 4 | Multimedia Network Application | 7، 16 | `04_Multimedia_Network_Application.mp4` |
| V5 | 5 | Network Management | 8 | `05_Network_Management.mp4` |
| V6 | 6 | Firewall & Operational Security | 9، 10 | `06_Firewall.mp4` |
| V7 | 7 | SAN & NAS Storage Networks | 11، 12، 13 | `07_SAN_NAS_Storage_Networks.mp4` |
| V8 | 8 | Software Defined Networks (SDN) | 14، 15 | `08_SDN.mp4` |

- **تعديل مشهد واحد:** لو اتطلب «عدّل V6-S4»، عدّل المشهد ده بس (في `V6.tsx` و`V6.data.ts`)، وبعدين اعمل خطوات التسليم لـ V6 تاني من الأول.

---

### المرحلة 0 — التجهيز + المعايرة (إلزامية قبل أي فيديو)

**0.1 المشروع:** اعمل مشروع Remotion (TypeScript، قالب blank)، وركّب الحزم اللي في قسم 4، واعمل الهيكل بالظبط.

**0.2 الأصول:**
1. شغّل `scripts/extract_assets.sh` (3.2) ← لازم 18 ملف بالأبعاد المكتوبة.
2. التكبير (3.3) في `public/slides_up/`، وانسخ الصور اللي مش محتاجة تكبير زي ما هي لنفس الفولدر.
3. تنضيف Figure 8.33 (3.5) ← `public/slides_up/s10_fig8_33_clean.png`.
4. ورق الخلفية (3.6) ← `public/paper.png`.
5. **Debug sheet:** لكل صورة في 3.4 ارسم مستطيلات المناطق (Regions) عليها واحفظها في `out/debug/regions_<name>.png`. افتحها بعينك: كل مستطيل لازم يحضن العنصر بتاعه.

**0.3 الأصوات:** `bash scripts/make_sfx.sh public/sfx` (ملحق B) ← لازم يطلع **31 ملف** wav، ويطبع `normalized` في الآخر.

**0.4 الشخصيات:** الـ 13 PNG بتوع قسم 6 في `public/characters/` (أو placeholders مؤقتة).

**0.5 المكوّنات والأيقونات:** اعمل كل اللي في 5.4 و5.5. اعمل Composition اسمها `ICONS` (still واحد) فيه كل الأيقونات جنب بعض بأساميها ← `out/debug/icons.png` للمراجعة. واعمل Composition اسمها `GLYPHS` (still) فيها السطر ده مكتوب بكل خط من الأربعة: `Aa 0123 . , : ; ! ? ( ) / & + = % - – • · ... ؟ ،` + الـ ♦ المرسوم SVG ← `out/debug/glyphs.png`.

**0.6 اختبار المعايرة — Composition اسمها `CAL` (5.15 ث = 124 فريم):** إعادة بناء مشهد 5 من الريفرنس (19.45 → 24.60) بمكوّناتنا، عشان نتأكد إن الستايل مطابق.
- العناصر: SketchBox كارت x 92 → 1194، y 135 → 918. العنوان «إزاي نحمي السرّية؟» (Cairo 700، 54px) مركز (645، 245) + خط INK 3px تحته من x 185 لـ 1105 عند y 297. 3 بنود عربي (Cairo 500، 50px) آخرها من اليمين عند x 1010، ومراكزها y = 440 / 615 / 790، وعلامة صح خضرا مركزها x 1070 لكل بند. م. عمر O3 يمين مركز x 1580، ارتفاع 800.
- البنود: «تشفير البيانات» · «كلمة سر قوية وتحقق بخطوتين» · «كل واحد يشوف اللي يخصه بس».

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | — | whoosh_soft |
| 0.10–0.60 | رسم الكارت | pencil_loop مدة 0.50 |
| 0.40 | دخول عمر | — |
| 0.55–1.05 | العنوان WordReveal | pencil_loop مدة 0.50 (−3 dB) |
| 1.05–1.25 | الخط تحت العنوان | — |
| 1.15 | صح البند 1 | check_soft |
| 1.30–1.70 | البند 1 | pencil_loop مدة 0.40 (−3 dB) |
| 2.05–2.35 | تظليل البند 1 | highlight_swipe |
| 2.45 | صح البند 2 | check_soft |
| 2.60–3.10 | البند 2 | pencil_loop مدة 0.50 (−3 dB) |
| 3.20–3.50 | تظليل البند 2 | highlight_swipe |
| 3.75 | صح البند 3 | check_soft |
| 3.90–4.35 | البند 3 | pencil_loop مدة 0.45 (−3 dB) |
| 4.05 | لمعة عند راس عمر | — |
| 4.35–4.65 | تظليل البند 3 | highlight_swipe |
| 4.82–5.15 | fade | — |

- الكابشن: «تلات خطوات بسيطة... وكل واحد يشوف اللي يخصه بس.»
- **المقارنة:**
```bash
ffmpeg -y -ss 23.8 -i downloads/refrance.mp4 -frames:v 1 out/debug/cal_ref.png
npx remotion still src/index.ts CAL out/debug/cal_ours.png --frame=104
ffmpeg -y -i out/debug/cal_ref.png -i out/debug/cal_ours.png -filter_complex hstack=inputs=2 out/debug/cal_compare.png
convert out/debug/cal_ours.png -format "%[pixel:p{50,50}]\n" info:   # لازم ≈ srgb(249,245,237) ±3
```

**0.7 اختبار الـ Bidi:** اعمل stills للكابشنين اللي في قسم 8 ← `out/debug/bidi_1.png` و`bidi_2.png`.

**✔ قائمة قبول المرحلة 0**
- [ ] 18 صورة بالأبعاد الصح + نسخ `slides_up` + `_clean` من غير علامة مائية (اتأكد بعينك عند يمين تحت).
- [ ] 31 صوت في `public/sfx/`.
- [ ] `cal_compare.png`: لون الورق، الحبر، الكارت بالأركان اللي بتعدّي، شكل علامة الصح (أخضر بحد غامق)، التظليل الأصفر، مكان وحجم الكابشن — كلهم مطابقين للريفرنس بالعين.
- [ ] الرسم مبيترعشش من فريم للتاني (اعرض CAL وبص على حدود الكارت: ثابتة).
- [ ] `bidi_1/2.png`: النقطة في أقصى الشمال، والقوس `(SDN)` مقفول صح.
- [ ] `glyphs.png`: مفيش ولا مربع فاضي، ومفيش رمز طالع بخط تاني أو كإيموجي.
- [ ] الصوت في CAL: كل صوت قلم بيبدأ ويخلص مع الرسم بالظبط (اتفرج فريم بفريم).

---

### المرحلة 1 — V1 «مقدمة الكورس وخريطة المنهج» · Slides 1, 2, 3 · المدة 53.0 ث (1272 فريم) · 8 مشاهد
**الشخصيات:** م. عمر (O1، O2، O3). **الصور:** s01_avatar_a (بتترسم)، s01_cloud_devices، s02_agenda_figure (مرتين). **الملف:** `01_Course_Overview_Agenda.mp4`.

#### V1-S1 · 0.00 → 6.00 (6.0) · فريم 0 → 144 · LAYOUT_A
**العناصر:**
- عمر O1 مركز x 400. بيضاوي الاسم «م. عمر» مركز (400، 130).
- عنوان إنجليزي (Caveat Brush، 104px) في سطرين مركزهم x 1280: «Network Management» عند y 230، و«and Analysis» عند y 350.
- خط أحمر تحت السطر التاني من x 1000 لـ 1560 عند y 410.
- المعنى العربي (Aref Ruqaa، 64px) «إدارة وتحليل الشبكات» مركز (1280، 500).
- سطر الدكتورة مركزه (1280، 640): دايرة AVATAR قطرها 72 جواها `a` أبيض (Cairo 700، 44px) — دي إعادة رسم image1 — وبعدها بمسافة 24px النص `by Dr /Amina Mohamed` (Cairo 600، 44px، LTR). الدايرة على شمال النص زي الشريحة.

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | دخول عمر | whoosh_soft |
| 0.40–1.60 | HandWrite «Network Management» (شمال ← يمين) | marker_loop مدة 1.20 |
| 1.60–2.30 | HandWrite «and Analysis» | marker_loop مدة 0.70 |
| 2.35–2.75 | الخط الأحمر | marker_loop مدة 0.40 |
| 2.85–3.35 | HandWrite العربي (يمين ← شمال) | pencil_loop مدة 0.50 |
| 3.50 | Pop دايرة الـ a | pop_soft |
| 3.70–4.30 | WordReveal `by Dr /Amina Mohamed` | pencil_loop مدة 0.60 (−3 dB) |
| 4.40–4.75 | بيضاوي «م. عمر» | pencil_loop مدة 0.35 |
| 5.67–6.00 | fade | — |

**الكابشن:** «أهلاً بيك في Network Management and Analysis مع د. أمينة محمد.»

#### V1-S2 · 6.00 → 11.50 (5.5) · فريم 144 → 276 · LAYOUT_A
**العناصر:** عمر O2 مركز x 400. كارت x 760 → 1800، y 200 → 860. جواه كل حاجة **في النص أفقيًا** (مركز x 1280):
- `Menoufia University` (Cairo 700، 54px) عند y 290، وتحته «جامعة المنوفية» (T_AR_NOTE 30px) عند y 345.
- `Faculty of Computers and Information` (Cairo 600، 44px) عند y 430، وتحته «كلية الحاسبات والمعلومات» عند y 480.
- `Department of Information Technology` (Cairo 600، 44px) عند y 565، وتحته «قسم تكنولوجيا المعلومات» عند y 615.
- أيقونة calendar (56px) + `4 -10 -2023` (Cairo 600، 44px، LTR) عند y 730.

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | دخول عمر | whoosh_soft |
| 0.35–0.95 | رسم الكارت | pencil_loop مدة 0.60 |
| 1.00–1.50 | WordReveal السطر 1 | pencil_loop مدة 0.50 (−3 dB) |
| 1.55 | fade العربي 1 | — |
| 1.80–2.40 | السطر 2 | pencil_loop مدة 0.60 (−3 dB) |
| 2.45 | العربي 2 | — |
| 2.70–3.30 | السطر 3 | pencil_loop مدة 0.60 (−3 dB) |
| 3.35 | العربي 3 | — |
| 3.60 | Pop الـ calendar | pop_soft |
| 3.75–4.15 | WordReveal التاريخ | pencil_loop مدة 0.40 (−3 dB) |
| 5.17–5.50 | fade | — |

**الكابشن:** «جامعة المنوفية – كلية الحاسبات – قسم Information Technology.»

#### V1-S3 · 11.50 → 18.00 (6.5) · فريم 276 → 432 · LAYOUT_P
**العناصر:**
- PinnedPhoto `s01_cloud_devices` في x 120 → 620، y 100 → 850 (500×750)، ميل −1.2°.
- 5 لافتات على الصورة [توضيح] (Kalam 700، 30px، INK) كل واحدة بسهم قصير 60px للمنطقة بتاعتها (3.4): `Cloud`، `Laptop`، `Desktop PC`، `Smartphone`، `Tablet`.
- كارت x 700 → 1800، y 220 → 820. جواه نص LTR محاذاة شمال من x 760، أقصى عرض 980 (Cairo 600، 44px):
  - P1: `Network Management and Analysis course.`
  - P2 (هيتلف على 2–3 سطور): `This will be an overview of the different topics that we will cover in this course.`
  - تظليل أصفر ورا: `overview of the different topics`.

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | — | whoosh_soft |
| 0.30–0.65 | دخول الصورة | page_turn |
| 0.80–1.60 | اللافتات الخمسة (كل واحدة fade + سهم 0.16 ث، بفرق 0.16) | pencil_loop مدة 0.80 (−3 dB) |
| 1.70–2.20 | رسم الكارت | pencil_loop مدة 0.50 |
| 2.30–3.00 | WordReveal P1 | pencil_loop مدة 0.70 (−3 dB) |
| 3.10–4.30 | WordReveal P2 | pencil_loop مدة 1.20 (−3 dB) |
| 4.40–4.75 | التظليل | highlight_swipe |
| 6.17–6.50 | fade | — |

**الكابشن:** «المحاضرة دي Overview لكل المواضيع اللي هنغطيها في الكورس.»

#### V1-S4 · 18.00 → 23.00 (5.0) · فريم 432 → 552 · LAYOUT_P
**العناصر:**
- PinnedPhoto `s02_agenda_figure` (×3) في x 1160 → 1760، y 200 → 800، ميل +1.2°.
- `Agenda` (Caveat Brush، 150px) مركز (600، 360) + خط أحمر من x 400 لـ 800 عند y 450.
- Tag (مستطيل 360×100) مركز (600، 590) جواه `Lecture 1` (Kalam 700، 60px).
- ملاحظة «المحاضرة الأولى – خريطة المواضيع» (Cairo 500، 36px، MUTED) مركز (600، 700).

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | — | whoosh_soft |
| 0.30–0.65 | دخول الصورة | page_turn |
| 0.80–1.60 | HandWrite «Agenda» | marker_loop مدة 0.80 |
| 1.65–2.00 | الخط الأحمر | marker_loop مدة 0.35 |
| 2.15–2.55 | رسم الـ Tag | pencil_loop مدة 0.40 |
| 2.60–3.00 | HandWrite «Lecture 1» | pencil_loop مدة 0.40 |
| 3.10 | fade الملاحظة | — |
| 4.67–5.00 | fade | — |

**الكابشن:** «دي الـ Agenda بتاعة Lecture 1... يلا نشوف هندرس إيه.»

#### V1-S5 · 23.00 → 29.50 (6.5) · فريم 552 → 708 · LAYOUT_C معدّل · CONT→S6
**العناصر:**
- كارت x 100 → 1400، y 90 → 940.
- Tag صغير جوه الكارت فوق شمال عند (170، 130): `Agenda` (Kalam 700، 34px) — عنوان شريحة 3.
- العنوان `Main course topics` (Kalam 700، 58px) يبدأ من x 170 عند y 200، وخط INK 3px تحته من x 170 لـ 720 عند y 240.
- 7 صفوف (يبدأوا y 300، كل صف 88px): checkbox مربع 46×46 (INK 4px) عند x 170 + RedTick جواه، النص الإنجليزي (Cairo 600، 42px) من x 240، والمعنى العربي (T_AR_NOTE 30px) آخره عند x 1360 (محاذاة يمين، في نفس الصف).
- PinnedPhoto `s02_agenda_figure` صغيرة في x 1440 → 1800، y 560 → 920، ميل +1.5° (زي الشريحة: الصورة تحت يمين).

| # | الإنجليزي (حرفي) | العربي |
|---|---|---|
| 1 | `Datacenters` | مراكز البيانات |
| 2 | `Desktop and service virtualization` | محاكاة الديسكتوب والخدمات |
| 3 | `Multimedia network application` | تطبيقات الشبكة متعددة الوسائط |
| 4 | `Network management` | إدارة الشبكات |
| 5 | `Firewall` | جدار الحماية |
| 6 | `SAN & NAS Storage networks.` | شبكات التخزين |
| 7 | `Software Defined Networks (SDN)` | الشبكات المعرّفة بالبرمجيات |

**توقيت الصف (R = بداية الصف):** R+0.00–0.20 رسم الـ checkbox (pencil_loop مدة 0.20) ← R+0.20–0.60 WordReveal الإنجليزي (pencil_loop مدة 0.40، −3 dB) ← R+0.60–0.80 RedTick (tick_soft عند R+0.60) ← R+0.80 fade العربي.

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | — | whoosh_soft |
| 0.30–0.90 | رسم الكارت | pencil_loop مدة 0.60 |
| 0.95–1.15 | Tag «Agenda» | — |
| 1.20–1.80 | HandWrite العنوان | marker_loop مدة 0.80 (لحد 2.00) |
| 1.80–2.00 | الخط تحت العنوان | (جوه نفس الـ marker) |
| 1.90 | دخول الصورة الصغيرة | page_turn (−3 dB) |
| 2.30 / 3.25 / 4.20 / 5.15 | الصفوف 1 / 2 / 3 / 4 (بالتوقيت اللي فوق) | زي ما فوق |
| 6.30–6.50 | الكابشن يختفي (CONT) | — |

**الكابشن:** «عندنا 7 مواضيع في الكورس... ودول أول 4.»

#### V1-S6 · 29.50 → 35.00 (5.5) · فريم 708 → 840 · CONT من S5
**العناصر:** نفس اللي فوق، بيتكمّل عليه الصفوف 5 → 7.

| t | الحدث | الصوت |
|---|---|---|
| 0.00–0.20 | الكابشن الجديد يظهر | — |
| 0.20 / 1.15 / 2.10 | الصفوف 5 / 6 / 7 (نفس توقيت الصف) | زي S5 |
| 3.20 | الـ 7 علامات يعملوا bounce (scale 1 → 1.15 → 1 في 0.30، بفرق 0.05) | chime_success |
| 5.17–5.50 | fade | — |

**الكابشن:** «وبعدهم Firewall وSAN & NAS... ونختم بالـ SDN.»

#### V1-S7 · 35.00 → 47.00 (12.0) · فريم 840 → 1128 · LAYOUT_R (بطاقة المذاكرة)
**العناصر:** تاجات `Slide 1` `Slide 2` `Slide 3`. **عمودين نص ومفيش قاموس.** النص بالحرف من «ملحق A» وبالترتيب ده:
- **العمود الشمال (x 110 → 930):**
  1. تاج `Slide 1`
  2. عنوان: `Network Management and Analysis`
  3. فقرة: `Network Management and Analysis course. This will be an overview of the different topics that we will cover in this course.`
  4. `by Dr /Amina Mohamed`
  5. `Menoufia University`
  6. `Faculty of Computers and Information`
  7. `Department of Information Technology`
  8. `4 -10 -2023`
  9. تاج `Slide 2`
  10. عنوان: `Agenda`
  11. `Lecture 1`
- **العمود اليمين (x 990 → 1810):**
  1. تاج `Slide 3`
  2. عنوان: `Agenda`
  3. `Main course topics`
  4. البنود السبعة (كل واحد قبله نقطة مرسومة): `Datacenters` · `Desktop and service virtualization` · `Multimedia network application` · `Network management` · `Firewall` · `SAN & NAS Storage networks.` · `Software Defined Networks (SDN)`
- تظليل ثابت: `overview of the different topics`.
- **التوقيت:** التوقيت الموحّد (5.4) — البلوكات بتظهر من 1.50 لـ 3.10 (العمود الشمال الأول وبعده اليمين)، ومفيش صفوف قاموس.
- الـ fade من 11.67 لـ 12.00 (وقت المشهد).

**الكابشن:** «ده نص المحاضرة كامل... وقّف الفيديو وذاكره براحتك.»

#### V1-S8 · 47.00 → 53.00 (6.0) · فريم 1128 → 1272 · LAYOUT_F (الختام)
**العناصر:**
- `Network Management` (Caveat Brush، 120px) مركز (1120، 250)، و`and Analysis` مركز (1120، 380).
- RedEllipse حوالين السطرين: مركز (1120، 315)، rx 560، ry 190.
- «إدارة وتحليل الشبكات» (Aref Ruqaa، 80px) مركز (1120، 590).
- جملة متظللة (Cairo 600، 42px، RTL) مركز (1120، 720): «7 مواضيع... كل موضوع ليه فيديو لوحده».
- عمر O3 تحت شمال: مركز x 330، ارتفاع 720، قاعدة y 1000. لمعة عند راسه.
- أيقونة checklist (110px) مركز (1780، 300).

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | — | whoosh_soft |
| 0.40–1.40 | HandWrite السطر 1 | marker_loop مدة 1.00 |
| 1.40–2.00 | HandWrite السطر 2 | marker_loop مدة 0.60 |
| 2.05–2.65 | RedEllipse | marker_loop مدة 0.60 |
| 2.65 | — | chime_success |
| 2.75–3.25 | HandWrite العربي | pencil_loop مدة 0.50 |
| 3.00 | دخول عمر (من الشمال) | — |
| 3.35–3.95 | WordReveal الجملة | pencil_loop مدة 0.60 (−3 dB) |
| 4.00–4.35 | التظليل | highlight_swipe |
| 4.40 | Pop أيقونة checklist | pop_soft |
| 4.60 | اللمعة | — |
| 5.30–6.00 | fade النهاية (0.70) | — |

**الكابشن:** «يلا نمسك المواضيع واحد واحد في الفيديوهات الجاية!»

**✔ قائمة قبول V1**
- [ ] ظاهر حرفيًا: `Network Management and Analysis` · `Network Management and Analysis course.` · `This will be an overview of the different topics that we will cover in this course.` · `by Dr /Amina Mohamed` · `Menoufia University` · `Faculty of Computers and Information` · `Department of Information Technology` · `4 -10 -2023` · `Agenda` (مرتين: S4 وS5) · `Lecture 1` · `Main course topics` + الـ 7 بنود بالظبط.
- [ ] صور: الدايرة البنفسجي بحرف a، s01_cloud_devices، s02_agenda_figure (في S4 وS5/S6).
- [ ] بطاقة المذاكرة V1-S7 فيها نص شرايح 1 و2 و3 كامل وبالترتيب، ومفيش سطر مقطوع.
- [ ] المدة 53.0 ث بالظبط، و8 مشاهد.

---

### المرحلة 2 — V2 «Datacenter» · Slide 4 · المدة 70.0 ث (1680 فريم) · 11 مشهد
**الشخصيات:** كريم (K1، K5)، عمر (O4). **الصور:** s04_datacenter (Vector + الأصلية). **الملف:** `02_Datacenter.mp4`.

#### خريطة رسمة الـ Datacenter (Vector) — إحداثيات الكادر (مستخدمة في S3 → S8)
> نفس ترتيب صورة الشريحة 4 بالظبط، بس متوزعة على الكادر. كل الـ labels بنفس كتابة الصورة حرف بحرف.

- **خط الشبكة (bus):** INK 4px، y = 205، من x 150 لـ 1760.
- **أجهزة الإدارة** (الأيقونة ≈ 150×100، قاعدتها y 190، وخط رأسي قصير منها للـ bus؛ الاسم فوقها Kalam 700 30px مركزه y 58):
  - D1 `vCenter Server` — server_box — مركز x 360
  - D2 `vSphere Client` — desktop_pc — مركز x 760
  - D3 `vSphere Web Client` — laptop_browser — مركز x 1060
  - D4 `terminal` — terminal_crt — مركز x 1360
  - `• • •` — 3 دواير INK نص قطرها 6 بينهم 24px — مركز (1600، 150)
- **خطوط النزول:** 3 خطوط INK 4px عند x = 700 و1060 و1420 من y 205 لـ 262.
- **الكباين (rack):** 150×260، أعلاها y 262، مراكزها x = 700 و1060 و1420. الاسم على يمين أعلى كل كابينة (Kalam 700، 28px، سطرين، يبدأ من x = المركز + 90، y 270 → 330): `server` / `group 1` · `server` / `group 2` · `server` / `group 3`. و`• • •` عند (1660، 400).
- **صندوق ESXi:** x 120 → 500، y 300 → 550، تعبئة ESXI_GREY، INK 3px. جواه: `virtual machines` (Cairo 600، 28px) مركز y 330؛ 6 مربعات VM (2 صف × 3، كل واحد 92×58، تعبئة VM_BLUE، حد NAVY 3px، مكتوب `VM` Cairo 700 26px NAVY)، الشبكة بتبدأ x 150، y 360، فرق 22 أفقي و20 رأسي؛ `ESXi` (Cairo 700، 34px) مركز y 520.
- **مثلث الزووم البرتقالي:** مضلع (625،350) (625،430) (500،550) (500،300)، تعبئة ORANGE_ZOOM، من غير حد.
- **خطوط التخزين الزرقا:** لكل كابينة خطين متوازيين NAVY سُمك 6px عند x = المركز + 82 و + 94، من y 300 لـ 600.
- **السحابة:** x 540 → 1620، y 590 → 700، تعبئة NAVY + حد rough INK 3px. جواها `fibre channel switch fabric / IP network` (Cairo 600، 32px، أبيض).
- **خطوط للأسطوانات:** NAVY 6px عند x = 820 و1080 و1340 من y 700 لـ 750.
- **وحدات التخزين:** مربع 130×100 (تعبئة `#DDE5EE`، INK 3px) جواه storage_cylinder، مراكزها x = 820 و1080 و1340، y 750 → 850. الأسماء تحتها (Kalam 700، 26px، سطرين، y 862 → 930): `fibre channel` / `storage array` · `iSCSI` / `storage array` · `NAS` / `storage array`. و`• • •` عند (1470، 800).

#### V2-S1 · 0.00 → 5.50 (5.5) · فريم 0 → 132 · LAYOUT_H (الشخصية يمين)
**العناصر:** كريم K1 مركز x 1520، وبيضاوي «كريم المتدرب» مركز (1520، 120). عنوان T_HOOK «آلاف السيرفرات... بتتدار إزاي؟!» حافته اليمين x 1180، مركزه y 180، وخط أحمر تحته من 1180 لـ 160 عند y 265. رسمة (x 220 → 1120، y 330 → 880): 6 server_box (كل واحد 180×90) متكوّمين مايلين (±6°) + كابلات متلخبطة (INK 3px لفّات) فوقهم + 3 علامات «؟» (Aref Ruqaa 80px، RED) حواليهم.

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | دخول كريم | whoosh_soft |
| 0.40–1.50 | HandWrite العنوان | marker_loop مدة 1.10 |
| 1.55–1.90 | الخط الأحمر | marker_loop مدة 0.35 |
| 2.00–2.90 | 6 سيرفرات Pop (بفرق 0.15) | pop_soft (−6 dB) عند 2.00 و2.30 و2.60 |
| 2.95–3.45 | الكابلات | pencil_loop مدة 0.50 |
| 3.55 | 3 «؟» Pop (بفرق 0.12) | boing_question |
| 4.00–4.35 | بيضاوي الاسم | pencil_loop مدة 0.35 |
| 5.17–5.50 | fade | — |

**الكابشن:** «مئات السيرفرات والهاردات... إزاي بنجمعهم وندرهم في مكان واحد؟»

#### V2-S2 · 5.50 → 11.00 (5.5) · فريم 132 → 264 · LAYOUT_A
**العناصر:** عمر O4 مركز x 400، وبيضاوي «م. عمر» مركز (400، 120). كارت x 760 → 1800، y 180 → 860: `Datacenter` (Caveat Brush، 140px) مركز (1280، 330) — **عنوان شريحة 4 حرفيًا**؛ «مركز البيانات» (Aref Ruqaa، 72px) مركز (1280، 470)؛ أيقونة datacenter_building (220×160) مركز (1280، 620)؛ «مكان واحد فيه السيرفرات والتخزين والشبكة» (Cairo 500، 38px) مركز (1280، 780) [توضيح].

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | دخول عمر | whoosh_soft |
| 0.35–0.95 | رسم الكارت | pencil_loop مدة 0.60 |
| 1.00–1.90 | HandWrite «Datacenter» | marker_loop مدة 0.90 |
| 2.00–2.50 | HandWrite العربي | pencil_loop مدة 0.50 |
| 2.60 | Pop الأيقونة | pop_soft |
| 3.00–3.70 | WordReveal الجملة | pencil_loop مدة 0.70 (−3 dB) |
| 3.90–4.25 | بيضاوي الاسم | pencil_loop مدة 0.35 |
| 5.17–5.50 | fade | — |

**الكابشن:** «المكان ده اسمه Datacenter... يلا نشوف الـ architecture بتاعته.»

#### V2-S3 · 11.00 → 17.50 (6.5) · فريم 264 → 420 · LAYOUT_D · CONT→S4
**العناصر:** طبقة الإدارة من الخريطة. ملاحظات عربي **مؤقتة** تحت الـ bus عند y 235 (Cairo 500، 24px، MUTED، في نص كل جهاز): «سيرفر الإدارة المركزي» · «برنامج الإدارة على الكمبيوتر» · «الإدارة من الـ browser» · «دخول بالأوامر».

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | — | whoosh_soft |
| 0.30–1.00 | رسم الـ bus (شمال ← يمين) | pencil_loop مدة 0.70 |
| 1.10 / 1.90 / 2.70 / 3.50 | Pop الجهاز D1 / D2 / D3 / D4 + خطه القصير | pop_soft عند كل واحد |
| +0.15 → +0.50 بعد كل Pop | HandWrite اسم الجهاز | pencil_loop مدة 0.35 (−3 dB) |
| 4.20 | `• • •` (بفرق 0.08) | — |
| 4.40–5.00 | الملاحظات العربي fade (بفرق 0.15) | — |
| 6.20–6.50 | الملاحظات تختفي (الرسمة تفضل) + الكابشن يختفي | — |

**الكابشن:** «طبقة الإدارة: vCenter Server، وبندخله من vSphere أو terminal.»

#### V2-S4 · 17.50 → 23.00 (5.5) · فريم 420 → 552 · CONT→S5
| t | الحدث | الصوت |
|---|---|---|
| 0.00–0.20 | الكابشن الجديد | — |
| 0.20–0.50 | خطوط النزول التلاتة مع بعض | pencil_loop مدة 0.30 |
| 0.60 / 1.20 / 1.80 | الكابينة 1 / 2 / 3 تطلع (translateY 30 → 0 + opacity، 0.30) | stamp_thud (−3 dB) عند كل واحدة |
| +0.30 → +0.60 بعد كل كابينة | HandWrite اسمها | pencil_loop مدة 0.30 (−3 dB) |
| 2.50 | `• • •` | — |
| 2.80 | ملاحظة مؤقتة «السيرفرات الحقيقية (Physical servers)» (Cairo 500، 30px، MUTED) مركز (1060، 560) | — |
| 5.20–5.50 | الملاحظة والكابشن يختفوا | — |

**الكابشن:** «تحتها مجموعات السيرفرات الحقيقية: server group 1 و2 و3... وأكتر.»

#### V2-S5 · 23.00 → 29.50 (6.5) · فريم 552 → 708 · CONT→S6
**العناصر:** زووم على صندوق ESXi. فقاعة شرح (**برة الكاميرا**، إحداثيات الكادر): كارت صغير x 1180 → 1800، y 380 → 560 فيه «ESXi = Hypervisor بيشغّل كذا VM على نفس السيرفر» (Cairo 500، 32px).

| t | الحدث | الصوت |
|---|---|---|
| 0.00–0.70 | Camera: النقطة (310، 425) تروح لـ (760، 480)، scale 1 → 1.6 | zoom_in |
| 0.80–1.10 | المثلث البرتقالي يكبر من حافة الكابينة (scaleX 0 → 1، أصله x 625) | pencil_loop مدة 0.30 (−6 dB) |
| 1.10–1.60 | رسم صندوق ESXi | pencil_loop مدة 0.50 |
| 1.65–1.95 | WordReveal `virtual machines` | pencil_loop مدة 0.30 (−3 dB) |
| 2.00–2.75 | 6 VMs Pop (بفرق 0.15) | pop_soft (−6 dB) عند 2.00 و2.30 و2.75 |
| 2.85–3.15 | HandWrite `ESXi` | pencil_loop مدة 0.30 |
| 3.30 | الفقاعة تظهر (fade 0.25) | — |
| 3.60–3.90 | تظليل «ESXi» جوه الفقاعة | highlight_swipe |
| 5.40–5.65 | الفقاعة تختفي | — |
| 5.70–6.40 | Camera ترجع scale 1 | whoosh_soft (−6 dB) |

**الكابشن:** «جوه كل سيرفر نظام ESXi بيشغّل كذا virtual machine (VM) مع بعض.»

#### V2-S6 · 29.50 → 35.50 (6.0) · فريم 708 → 852 · CONT→S7
| t | الحدث | الصوت |
|---|---|---|
| 0.20–0.90 | خطوط التخزين الزرقا تترسم لتحت (التلات أزواج مع بعض) | pencil_loop مدة 0.70 |
| 1.00–1.60 | السحابة: الحد يترسم، والتعبئة fade من 1.30 لـ 1.60 | marker_loop مدة 0.60 |
| 1.70–2.50 | WordReveal النص الأبيض | pencil_loop مدة 0.80 (−3 dB) |
| 2.70 → 5.70 | نقط بيضا صغيرة (نص قطر 5) بتنزل على الخطوط الزرقا (دورة 0.8 ث) | whoosh_soft (−6 dB) عند 2.70 |
| 3.20 | ملاحظة مؤقتة «شبكة تخزين مخصوصة بين السيرفرات والتخزين» (Cairo 500، 28px، MUTED) مركز (1080، 735) | — |
| 5.70–6.00 | الملاحظة تختفي | — |

**الكابشن:** «السيرفرات متوصلة بـ fibre channel switch fabric أو IP network.»

#### V2-S7 · 35.50 → 42.00 (6.5) · فريم 852 → 1008 · CONT→S8
| t | الحدث | الصوت |
|---|---|---|
| 0.20–0.50 | 3 خطوط لتحت | pencil_loop مدة 0.30 |
| 0.60 / 1.40 / 2.20 | Pop وحدة التخزين 1 / 2 / 3 | pop_soft |
| +0.20 → +0.65 بعد كل واحدة | HandWrite اسمها | pencil_loop مدة 0.45 (−3 dB) |
| 3.00 | `• • •` | — |

**الكابشن:** «وتحت خالص وحدات التخزين: fibre channel وiSCSI وNAS storage arrays.»

#### V2-S8 · 42.00 → 48.50 (6.5) · فريم 1008 → 1164 · CONT ثم fade
**العناصر:** كارت legend x 110 → 520، y 600 → 930. 3 صفوف، كل صف: المصطلح (Cairo 700، 26px، LTR) وتحته الشرح (Cairo 500، 24px):
- `fibre channel` — «شبكة تخزين سريعة مخصوصة – block»
- `iSCSI` — «أوامر SCSI على شبكة IP – block»
- `NAS` — «ملفات مشتركة على الشبكة – file»

| t | الحدث | الصوت |
|---|---|---|
| 0.20–0.70 | رسم الـ legend | pencil_loop مدة 0.50 |
| 0.90 / 2.20 / 3.50 | تظليل اسم وحدة التخزين 1 / 2 / 3 | highlight_swipe |
| +0.30 → +0.90 بعد كل تظليل | WordReveal صف الـ legend المقابل | pencil_loop مدة 0.60 (−3 dB) |
| 6.17–6.50 | fade كامل | — |

**الكابشن:** «Fibre Channel وiSCSI بيدّوا blocks... والـ NAS بيدّي files.»

#### V2-S9 · 48.50 → 54.00 (5.5) · فريم 1164 → 1296 · LAYOUT_P
**العناصر:** Tag فوق شمال عند (120، 60): «Slide 4 – Datacenter» (Kalam 700، 40px). PinnedPhoto `s04_datacenter` (×3) في x 470 → 1340، y 110 → 910، ميل −1°. 4 أقواس حمرا (RED 5px) على يمين الصورة عند x 1370، كل واحد بيغطي جزء من ارتفاع الصورة، وجنبه رقم في دايرة حمرا + اسم (Kalam 700، 34px) من x 1400:
- ① 0–25% `Management` · ② 25–60% `Servers: ESXi + VMs` · ③ 60–78% `Storage network` · ④ 78–100% `Storage arrays`

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | — | whoosh_soft |
| 0.30–0.65 | دخول الصورة | page_turn |
| 0.80–1.20 | HandWrite الـ Tag | pencil_loop مدة 0.40 |
| 1.40 / 2.10 / 2.80 / 3.50 | القوس 1 / 2 / 3 / 4 (رسم 0.30) | marker_loop مدة 0.30 |
| +0.30 بعد كل قوس | الاسم يظهر | tick_soft |
| 5.17–5.50 | fade | — |

**الكابشن:** «ودي نفس رسمة الـ Datacenter في Slide 4... بطبقاتها الأربعة.»

#### V2-S10 · 54.00 → 64.00 (10.0) · فريم 1296 → 1536 · LAYOUT_R (بطاقة المذاكرة)
**العناصر:** تاج `Slide 4`.
- **عمود النص:**
  1. تاج `Slide 4`
  2. عنوان: `Datacenter`
  3. الصورة `s04_datacenter` (×3) بحد INK 3px، ارتفاعها 560، في نص العمود (من غير ميل ولا شرايط لزق) + تحتها «(رسمة الشريحة)».
- **مصطلحات مهمة (10 صفوف):**
  1. `vCenter Server` — سيرفر الإدارة المركزي
  2. `vSphere Client / vSphere Web Client` — برنامج الإدارة / الإدارة من الـ browser
  3. `terminal` — دخول بالأوامر (command line)
  4. `server group` — مجموعة سيرفرات حقيقية
  5. `ESXi` — Hypervisor بيشغّل الـ VMs
  6. `virtual machines (VM)` — أجهزة افتراضية
  7. `fibre channel switch fabric / IP network` — شبكة التخزين بين السيرفرات والتخزين
  8. `fibre channel storage array` — تخزين block على Fibre Channel
  9. `iSCSI storage array` — تخزين block على شبكة IP
  10. `NAS storage array` — تخزين files على الشبكة
- **التوقيت:** التوقيت الموحّد (5.4).
- الـ fade من 9.67 لـ 10.00 (وقت المشهد).

**الكابشن:** «دي رسمة المحاضرة ومصطلحاتها... وقّف الفيديو وذاكرها براحتك.»

#### V2-S11 · 64.00 → 70.00 (6.0) · فريم 1536 → 1680 · LAYOUT_F
**العناصر:** `Datacenter` (Caveat Brush، 150px) مركز (1100، 290) + RedEllipse (rx 380، ry 120). «مركز البيانات» (Aref Ruqaa، 80px) مركز (1100، 470). جملة متظللة LTR (Cairo 600، 38px) مركز (1100، 610): `Management • Servers (ESXi / VM) • Storage network • Storage arrays`. كريم K5 تحت شمال (مركز x 330، ارتفاع 720) و«فهمت!» (T_EXCLAIM 56px) مركز (330، 250). أيقونة datacenter_building (140px) مركز (1760، 290).

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | — | whoosh_soft |
| 0.40–1.30 | HandWrite المصطلح | marker_loop مدة 0.90 |
| 1.35–1.95 | RedEllipse | marker_loop مدة 0.60 |
| 1.95 | — | chime_success |
| 2.10–2.60 | HandWrite العربي | pencil_loop مدة 0.50 |
| 2.70 | دخول كريم | — |
| 3.00–3.80 | WordReveal الجملة | pencil_loop مدة 0.80 (−3 dB) |
| 3.85–4.20 | التظليل | highlight_swipe |
| 4.30 | Pop الأيقونة | pop_soft |
| 4.50 | Pop «فهمت!» | pop_soft (−3 dB) |
| 5.30–6.00 | fade النهاية | — |

**الكابشن:** «ودي معمارية الـ Datacenter بطبقاتها الأربعة!»

**✔ قائمة قبول V2**
- [ ] ظاهر حرفيًا: `Datacenter` · `vCenter Server` · `vSphere Client` · `vSphere Web Client` · `terminal` · `server group 1/2/3` · `virtual machines` · `VM` ×6 · `ESXi` · `fibre channel switch fabric / IP network` · `fibre channel storage array` · `iSCSI storage array` · `NAS storage array` · الـ `• • •` في التلات أماكن.
- [ ] الرسمة Vector بنفس ترتيب الصورة الأصلية، والصورة الأصلية ظاهرة في S9.
- [ ] مفيش جملة بتقول إن Fibre Channel = ألياف ضوئية.
- [ ] بطاقة المذاكرة V2-S10 فيها `Datacenter` + الرسمة + الـ 10 مصطلحات.
- [ ] المدة 70.0 ث، و11 مشهد.

---

### المرحلة 3 — V3 «Desktop and Service Virtualization» · Slides 5, 6 · المدة 92.0 ث (2208 فريم) · 14 مشهد
**الشخصيات:** كريم (K4، K5)، عمر (O1، O2، O3، O4). **الصور:** s05_virtualization_banner، s06_paloalto_ngfw (×4). **الملف:** `03_Desktop_Service_Virtualization.mp4`.

#### V3-S1 · 0.00 → 5.50 (5.5) · فريم 0 → 132 · LAYOUT_H (الشخصية يمين)
**العناصر:** كريم K4 مركز x 1520 + بيضاوي «كريم المتدرب» (1520، 120). T_HOOK «10 أجهزة... ولا جهاز واحد؟!» (الـ `10` بخط Caveat Brush)، حافته اليمين 1180، مركزه y 180، وخط أحمر تحته. رسمة: 10 server_tower (كل واحد 110×150) في صفين × 5 في x 200 → 1120، y 380 → 760. 3 banknote بيطيروا من إيد كريم للكومة في قوس.

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | دخول كريم | whoosh_soft |
| 0.40–1.40 | HandWrite العنوان | marker_loop مدة 1.00 |
| 1.45–1.80 | الخط الأحمر | marker_loop مدة 0.35 |
| 1.95–3.00 | 10 أجهزة Pop (بفرق 0.105) | pop_soft (−6 dB) عند 1.95 و2.27 و2.58 و2.90 |
| 3.20–3.80 | الفلوس بتطير | coins_soft عند 3.60 |
| 4.00–4.35 | بيضاوي الاسم | pencil_loop مدة 0.35 |
| 5.17–5.50 | fade | — |

**الكابشن:** «زمان كل خدمة كان ليها جهاز لوحدها... فلوس وموارد بتضيع!»

#### V3-S2 · 5.50 → 11.50 (6.0) · فريم 132 → 276 · LAYOUT_P (بانر)
**العناصر:** PinnedPhoto `s05_virtualization_banner` في x 160 → 1760، y 100 → 404، ميل −0.6°. `Desktop and Service Virtualization` (Kalam 700، 68px) مركز (1060، 530) — **عنوان شريحة 5 حرفيًا** — وخط أحمر تحته من x 520 لـ 1600 عند y 585. «المحاكاة الافتراضية للديسكتوب والخدمات» (Aref Ruqaa، 60px) مركز (1060، 680). عمر O1 صغير تحت شمال: مركز x 200، ارتفاع 560، قاعدة 1000، وبيضاوي «م. عمر» عند (200، 430).

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | — | whoosh_soft |
| 0.30–0.65 | دخول البانر | page_turn |
| 0.90–2.10 | HandWrite العنوان | marker_loop مدة 1.20 |
| 2.15–2.50 | الخط الأحمر | marker_loop مدة 0.35 |
| 2.60–3.30 | HandWrite العربي | pencil_loop مدة 0.70 |
| 3.40 | دخول عمر | — |
| 3.90–4.25 | بيضاوي الاسم | pencil_loop مدة 0.35 |
| 5.67–6.00 | fade | — |

**الكابشن:** «الحل اسمه Desktop and Service Virtualization.»

#### V3-S3 · 11.50 → 19.00 (7.5) · فريم 276 → 456 · LAYOUT_A
**العناصر:** عمر O2 مركز x 400. كارت x 700 → 1840، y 130 → 900.
- السطر A (Cairo 600، 40px، LTR من x 760، أقصى عرض 1020) عند y 220: `Virtualization is the creation of a virtual version of something,` + تظليل على `virtual version`.
- 4 مربعات في صف (كل واحد عرضه 240، بينهم 20، يبدأ x 770، y 400 → 640): أيقونة 120px فوق، تحتها الكلام الإنجليزي (Cairo 600، 30px، مسموح سطرين)، وتحته العربي (Cairo 500، 26px، MUTED):

| أيقونة | الإنجليزي (حرفي) | العربي |
|---|---|---|
| server_box | `such as a server,` | سيرفر |
| نافذة نظام تشغيل | `operating system,` | نظام تشغيل |
| hard_drive | `storage device,` | جهاز تخزين |
| شبكة نقط متوصلة | `or network resource.` | مورد شبكة |

- جملة [توضيح] (Cairo 500، 36px) مركز (1270، 800): «يعني جهاز حقيقي واحد يشغّل نسخ virtual كتير».

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | دخول عمر | whoosh_soft |
| 0.35–0.95 | رسم الكارت | pencil_loop مدة 0.60 |
| 1.00–2.40 | WordReveal السطر A | pencil_loop مدة 1.40 (−3 dB) |
| 2.45–2.80 | التظليل | highlight_swipe |
| 2.95 / 3.70 / 4.45 / 5.20 | Pop أيقونة المربع 1 / 2 / 3 / 4 | pop_soft |
| +0.15 → +0.50 بعد كل أيقونة | WordReveal الإنجليزي | pencil_loop مدة 0.35 (−3 dB) |
| +0.50 بعد كل أيقونة | fade العربي | — |
| 5.85–6.45 | WordReveal جملة التوضيح | pencil_loop مدة 0.60 (−3 dB) |
| 7.17–7.50 | fade | — |

**الكابشن:** «يعني نسخة virtual من server أو OS أو storage أو network.»

#### V3-S4 · 19.00 → 25.50 (6.5) · فريم 456 → 612 · LAYOUT_A
**العناصر:** عمر O4 مركز x 400. كارت x 700 → 1840، y 150 → 880.
- السطر B (Cairo 600، 40px) عند y 230: `Desktop and service virtualization allows organizations to`
- 3 صفوف (تبدأ y 370، بينهم 40): CheckMark عند x 770، الإنجليزي (Cairo 600، 44px) من x 870، أيقونة 70px عند x 1740، والعربي تحت الإنجليزي (Cairo 500، 28px، MUTED):

| الإنجليزي (حرفي) | العربي | الأيقونة |
|---|---|---|
| `optimize resources,` | استغلال أحسن للموارد | speedometer |
| `reduce costs,` | تقليل التكاليف | coin_down |
| `and improve efficiency.` | كفاءة أعلى | rising_chart |

**توقيت الصف (T):** T → T+0.40 WordReveal (pencil_loop مدة 0.40، −3 dB) ← T+0.40 CheckMark (check_soft) ← T+0.65 → T+0.95 تظليل (highlight_swipe، −3 dB) ← T+0.70 العربي والأيقونة.

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | دخول عمر | whoosh_soft |
| 0.35–0.95 | رسم الكارت | pencil_loop مدة 0.60 |
| 1.00–2.20 | WordReveal السطر B | pencil_loop مدة 1.20 (−3 dB) |
| 2.40 / 3.40 / 4.40 | الصف 1 / 2 / 3 | زي التوقيت اللي فوق |
| 6.17–6.50 | fade | — |

**الكابشن:** «فوايده: optimize resources وreduce costs وimprove efficiency.»

#### V3-S5 · 25.50 → 31.50 (6.0) · فريم 612 → 756 · LAYOUT_S · [توضيح]
**العناصر:**
- الشمال: `Desktop virtualization` (Kalam 700، 48px) مركز (500، 170)؛ «الديسكتوب بتاعك شغال على سيرفر» (Cairo 500، 32px) مركز (500، 240)؛ رسمة مركز (500، 560): rack في النص + 3 نوافذ desktop صغيرة طايرة فوقه + أسهم متقطعة منه لـ laptop وtablet وشاشة صغيرة.
- اليمين: `Service virtualization` مركز (1420، 170)؛ «الخدمة نفسها (زي Firewall) شغالة كـ VM» مركز (1420، 240)؛ رسمة: صندوق سيرفر (420×300) جواه 3 vm_box، التالت مكتوب عليه `Firewall` وعليه طوب SALMON.

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | — | whoosh_soft |
| 0.30–0.70 | الخط الفاصل | pencil_loop مدة 0.40 |
| 0.80–1.40 | HandWrite عنوان الشمال | marker_loop مدة 0.60 |
| 1.45–1.95 | WordReveal عربي الشمال | pencil_loop مدة 0.50 (−3 dB) |
| 2.05 | Pop الـ rack | pop_soft |
| 2.30 | النوافذ (بفرق 0.10) | — |
| 2.60–3.00 | الأسهم والأجهزة | pop_soft (−6 dB) عند 2.80 |
| 3.10–3.70 | HandWrite عنوان اليمين | marker_loop مدة 0.60 |
| 3.75–4.25 | WordReveal عربي اليمين | pencil_loop مدة 0.50 (−3 dB) |
| 4.35–4.65 | رسم صندوق السيرفر | pencil_loop مدة 0.30 |
| 4.70 | الـ VMs Pop (بفرق 0.12) | pop_soft (−6 dB) |
| 5.00 | — | shield_clink (−3 dB) |
| 5.67–6.00 | fade | — |

**الكابشن:** «Desktop: الديسكتوب على سيرفر... وService: الخدمة بقت VM.»

#### V3-S6 · 31.50 → 37.50 (6.0) · فريم 756 → 900 · LAYOUT_C
**العناصر:** العنوان `In this section, we will explore` + خط تحته. الصفوف:

| الإنجليزي (حرفي) | العربي |
|---|---|
| `how desktop and service virtualization work` | بيشتغلوا إزاي |
| `and their benefits in network management.` | وفوايدهم في إدارة الشبكات |

**توقيت الصف (T):** T → T+0.60 WordReveal (pencil_loop مدة 0.60، −3 dB) ← T+0.60 CheckMark (check_soft) ← T+0.85 → T+1.15 تظليل (highlight_swipe، −3 dB) ← T+0.90 العربي.

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | دخول عمر O3 (من اليمين) | whoosh_soft |
| 0.35–0.95 | رسم الكارت | pencil_loop مدة 0.60 |
| 1.00–2.00 | WordReveal العنوان + الخط (1.80–2.00) | pencil_loop مدة 1.00 (−3 dB) |
| 2.20 / 3.40 | الصف 1 / 2 | زي التوقيت اللي فوق |
| 4.80 | اللمعة | — |
| 5.67–6.00 | fade | — |

**الكابشن:** «هنشوف الاتنين بيشتغلوا إزاي... وفايدتهم في الـ network management.»

#### صورة Palo Alto — إعدادات ثابتة للمشاهد S7 → S12
- PinnedPhoto `s06_paloalto_ngfw` (×4) في x 420 → 1460، y 130 → 910 (1040×780)، **ميل 0**، جوه Camera.
- المناطق من 3.4. الأسهم والمسارات المتحركة بتترسم **جوه الكاميرا** بإحداثيات نسبة مئوية من الصورة.
- كروت الملاحظات **برة الكاميرا**: كل كارت SketchBox 500×170، المصطلح (Kalam 700، 34px) في سطر، وتحته العربي (Cairo 500، 28px).
- **مسار متحرك (Flow):** خط RED سُمك 6px متقطع (14/10) والـ dash-offset بيتحرك + نقطة RED نص قطرها 10 ماشية عليه.

#### V3-S7 · 37.50 → 43.00 (5.5) · فريم 900 → 1032 · LAYOUT_P · CONT→S8
**العناصر:** Tag فوق شمال عند (60، 50): `Desktop and Service Virtualization` (Kalam 700، 40px) — **عنوان شريحة 6**. كارت ملاحظة x 1500 → 1860، y 180 → 400: `NGFW =` / `Next-Generation Firewall` (Kalam 700، 34px) + «جيل جديد من الـ Firewalls» (Cairo 500، 28px).

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | — | whoosh_soft |
| 0.30–0.80 | HandWrite الـ Tag | pencil_loop مدة 0.50 |
| 0.80–1.15 | دخول الصورة | page_turn |
| 1.40–1.80 | Spotlight على R_TITLE + مستطيل أحمر | marker_loop مدة 0.40 |
| 2.00–2.30 | تظليل أصفر فوق العنوان الأخضر جوه الصورة (blend multiply، شفافية 0.55) | highlight_swipe |
| 2.50 | Pop كارت NGFW | pop_soft |
| 2.60–3.20 | WordReveal نص الكارت | pencil_loop مدة 0.60 (−3 dB) |
| 5.20–5.50 | الكارت يختفي + الـ Spotlight يتشال | — |

**الكابشن:** «مثال: Advanced Services Insertion بـ Palo Alto Networks NGFW.»

#### V3-S8 · 43.00 → 49.50 (6.5) · فريم 1032 → 1188 · CONT→S9
**العناصر:** Camera على R_LEFT_HOST (ارتفاع 760، مركز (700، 520)). كروت ملاحظات يمين x 1320 → 1820 عند y 200 و420 و640:
- R_PHYS ← `Physical Host` / «السيرفر الحقيقي (hardware)»
- R_HYPER ← `Hypervisor` / «الطبقة اللي بتشغّل الـ VMs»
- R_VSW ← `vSwitch` / «سويتش virtual جوه السيرفر»

| t | الحدث | الصوت |
|---|---|---|
| 0.00–0.70 | Camera zoom | zoom_in |
| 1.00 / 2.30 / 3.60 | Spotlight على R_PHYS / R_HYPER / R_VSW (من تحت لفوق) + مستطيل أحمر | marker_loop مدة 0.40 |
| +0.40 بعد كل واحد | Pop الكارت المقابل | tick_soft |
| +0.45 → +0.95 | WordReveal نص الكارت | pencil_loop مدة 0.50 (−6 dB) |

**الكابشن:** «Physical Host فوقه Hypervisor، وفوقه vSwitch بيوصّل الـ VMs.»

#### V3-S9 · 49.50 → 55.50 (6.0) · فريم 1188 → 1332 · CONT→S10
**العناصر:** Camera على R_LEFT_TOP (ارتفاع 600، مركز (700، 500)، أقصى scale 3.0). كروت:
- R_LEFT_VMS ← `VM = Virtual Machine` / «أجهزة virtual شغالة على السيرفر»
- R_LEFT_NGFW ← `NGFW (virtual)` / «Firewall شغال كـ VM»
- R_RIGHT_NGFW ← «نفس الكلام في السيرفر التاني»

| t | الحدث | الصوت |
|---|---|---|
| 0.00–0.25 | كروت S8 تختفي | — |
| 0.20–0.80 | Camera pan | whoosh_soft (−6 dB) |
| 1.00–1.40 | Spotlight R_LEFT_VMS | marker_loop مدة 0.40 |
| 1.40 / 1.45–1.95 | كارت 1 Pop / نصه | tick_soft / pencil_loop مدة 0.50 (−6 dB) |
| 2.30–2.80 | RedEllipse حوالين R_LEFT_NGFW | marker_loop مدة 0.50 |
| 2.80 | — | shield_clink |
| 2.85 / 2.90–3.40 | كارت 2 Pop / نصه | — / pencil_loop مدة 0.50 (−6 dB) |
| 3.70–4.30 | Camera pan لـ R_RIGHT_NGFW (نفس الـ scale) | whoosh_soft (−6 dB) |
| 4.35–4.85 | RedEllipse حوالين R_RIGHT_NGFW | marker_loop مدة 0.50 |
| 4.90 | كارت 3 fade | — |

**الكابشن:** «فوق الـ vSwitch الـ VMs... ووسطهم Firewall افتراضي شغال كـ VM.»

#### V3-S10 · 55.50 → 61.50 (6.0) · فريم 1332 → 1476 · CONT→S11
**العناصر:** Camera على R_TOPRIGHT (عرض 1100، مركز (760، 450)). كروت يمين x 1360 → 1860 عند y 200 و420 و640:
- R_ADMINS ← `Security Admin` / «فريق الأمان»
- R_PANORAMA ← `Panorama` / «الإدارة المركزية للـ firewalls»
- R_POLICY ← `Security Policy` / «القواعد: مين يعدّي ومين يتمنع»

| t | الحدث | الصوت |
|---|---|---|
| 0.00–0.25 | الكروت القديمة تختفي | — |
| 0.20–0.90 | Camera pan + zoom | whoosh_soft (−6 dB) |
| 1.10 / 2.50 / 3.90 | Spotlight على R_ADMINS / R_PANORAMA / R_POLICY + مستطيل أحمر | marker_loop مدة 0.40 |
| +0.40 | Pop الكارت | tick_soft |
| +0.45 → +0.95 | نص الكارت | pencil_loop مدة 0.50 (−6 dB) |
| 1.50 | (مع الأدمنز بس) | typing_soft مدة 0.80 (−6 dB) |

**الكابشن:** «الـ Security Admin بيكتب الـ Security Policy على Panorama.»

#### V3-S11 · 61.50 → 67.50 (6.0) · فريم 1476 → 1620 · CONT→S12
**العناصر:** الكاميرا ترجع للصورة كاملة. المسارات (نِسَب الصورة): F1 من (76%، 23%) لـ (45%، 23%) — F2 من (31%، 31%) لـ (17%، 45%) — F3 من (43%، 30%) لـ (74%، 49%). كارت ملاحظة برة الكاميرا x 40 → 400، y 150 → 350: `Cluster Controller` / «بيوزّع الـ policy أوتوماتيك». تاج صغير `policy` (Kalam 700، 26px) جنب R_GREENCARD.

| t | الحدث | الصوت |
|---|---|---|
| 0.00–0.25 | الكروت القديمة تختفي | — |
| 0.10–0.80 | Camera ترجع scale 1 | whoosh_soft (−6 dB) |
| 1.00–1.80 | مسار F1 (من Panorama للـ Cluster Controller) | signal_pips |
| 1.85–2.35 | RedEllipse حوالين R_CLUSTER | marker_loop مدة 0.50 |
| 2.40 / 2.45–2.95 | كارت Cluster Controller Pop / نصه | tick_soft / pencil_loop مدة 0.50 (−6 dB) |
| 3.10–3.90 | مساري F2 وF3 مع بعض | signal_pips (مرة واحدة) |
| 4.10 | R_GREENCARD نبضة (scale 1 → 1.08 → 1) + تاج `policy` | pop_soft (−3 dB) |

**الكابشن:** «Panorama يبعت للـ Cluster Controller... وهو يوزّع على الـ NGFW.»

#### V3-S12 · 67.50 → 74.00 (6.5) · فريم 1620 → 1776 · CONT ثم fade
**العناصر:** كروت يمين x 1500 → 1880 عند y 200 و420 و640:
- R_INTERNET ← `Internet`
- R_SWITCHES ← `Physical switches` / «سويتشات حقيقية»
- R_TS_LABEL ← `Traffic Steering` / «توجيه الترافيك يعدّي على الـ Firewall الأول»

**مسار P** (نِسَب الصورة، 2.0 ث): (55%، 52%) Internet ← (55%، 68%) ← (45%، 78%) السويتشات ← (25%، 80%) Physical Host ← (25%، 63%) vSwitch ← (16%، 49%) الـ NGFW ← (25%، 50%) الـ VM الأخضر، وعلامة صح خضرا تظهر عند الـ VM.

| t | الحدث | الصوت |
|---|---|---|
| 0.00–0.25 | الكروت القديمة تختفي | — |
| 0.20–0.60 | Spotlight R_INTERNET | marker_loop مدة 0.40 |
| 0.60 | كارت 1 | tick_soft |
| 1.20–1.60 | Spotlight R_SWITCHES | marker_loop مدة 0.40 |
| 1.60 | كارت 2 | tick_soft |
| 2.20–2.70 | RedEllipse حوالين R_TS_LABEL | marker_loop مدة 0.50 |
| 2.75 / 2.80–3.30 | كارت 3 / نصه | tick_soft / pencil_loop مدة 0.50 (−6 dB) |
| 3.50–5.50 | الـ Spotlight يتشال + مسار P | whoosh_soft (−6 dB) عند 3.50 |
| 4.60 | الوصول للـ NGFW | radar_ping |
| 5.40 | صح عند الـ VM | check_soft |
| 6.17–6.50 | fade كامل | — |

**الكابشن:** «Traffic Steering: الترافيك يعدّي على الـ NGFW الأول قبل الـ VM.»

#### V3-S13 · 74.00 → 86.00 (12.0) · فريم 1776 → 2064 · LAYOUT_R (بطاقة المذاكرة)
**العناصر:** تاجات `Slide 5` `Slide 6`.
- **عمود النص:**
  1. تاج `Slide 5`
  2. عنوان: `Desktop and Service Virtualization`
  3. فقرة: `Virtualization is the creation of a virtual version of something, such as a server, operating system, storage device, or network resource. Desktop and service virtualization allows organizations to optimize resources, reduce costs, and improve efficiency.`
  4. فقرة: `In this section, we will explore how desktop and service virtualization work and their benefits in network management.`
  5. تاج `Slide 6`
  6. عنوان: `Desktop and Service Virtualization`
  7. `Advanced Services Insertion – Example: Palo Alto Networks NGFW` + «(من جوه الصورة)»
- تظليل ثابت: `virtual version` · `optimize resources` · `reduce costs` · `improve efficiency`.
- **مصطلحات مهمة (10 صفوف):**
  1. `Virtualization` — المحاكاة الافتراضية
  2. `Physical Host` — السيرفر الحقيقي (hardware)
  3. `Hypervisor` — الطبقة اللي بتشغّل الـ VMs
  4. `vSwitch` — سويتش virtual جوه السيرفر
  5. `VM (Virtual Machine)` — جهاز افتراضي
  6. `NGFW (Next-Generation Firewall)` — جدار حماية جيل جديد
  7. `Security Admin · Security Policy` — فريق الأمان · قواعد الأمان
  8. `Panorama` — الإدارة المركزية للـ firewalls
  9. `Cluster Controller` — بيوزّع الـ policy على السيرفرات
  10. `Traffic Steering` — توجيه الترافيك للـ Firewall الأول
- **التوقيت:** التوقيت الموحّد (5.4).
- الـ fade من 11.67 لـ 12.00 (وقت المشهد).

**الكابشن:** «ده نص المحاضرة كامل... وقّف الفيديو وذاكره براحتك.»

#### V3-S14 · 86.00 → 92.00 (6.0) · فريم 2064 → 2208 · LAYOUT_F
**العناصر:** `Desktop and Service` (Caveat Brush، 64px) مركز (1100، 170)؛ `Virtualization` (Caveat Brush، 140px) مركز (1100، 290)؛ RedEllipse مركز (1100، 250)، rx 520، ry 170. «المحاكاة الافتراضية» (Aref Ruqaa، 80px) مركز (1100، 500). جملة متظللة LTR (Cairo 600، 38px) مركز (1100، 630): `server • operating system • storage device • network resource`. كريم K5 تحت شمال + «وفّرنا!» فوق راسه. أيقونة سيرفر فيه 3 VMs مركز (1760، 280).

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | — | whoosh_soft |
| 0.40–0.90 | HandWrite السطر الصغير | marker_loop مدة 0.50 |
| 0.90–1.80 | HandWrite `Virtualization` | marker_loop مدة 0.90 |
| 1.85–2.45 | RedEllipse | marker_loop مدة 0.60 |
| 2.45 | — | chime_success |
| 2.60–3.10 | HandWrite العربي | pencil_loop مدة 0.50 |
| 2.90 | دخول كريم | — |
| 3.20–4.00 | WordReveal الجملة | pencil_loop مدة 0.80 (−3 dB) |
| 4.05–4.40 | التظليل | highlight_swipe |
| 4.45 | Pop الأيقونة | pop_soft |
| 4.65 | Pop «وفّرنا!» | pop_soft (−3 dB) |
| 5.30–6.00 | fade النهاية | — |

**الكابشن:** «ودي قوة الـ Desktop and Service Virtualization!»

**✔ قائمة قبول V3**
- [ ] ظاهر حرفيًا: `Desktop and Service Virtualization` (S2 وS7) · الجملة الأولى كاملة لما تتجمع: `Virtualization is the creation of a virtual version of something,` + `such as a server,` + `operating system,` + `storage device,` + `or network resource.` · الجملة التانية: `Desktop and service virtualization allows organizations to` + `optimize resources,` + `reduce costs,` + `and improve efficiency.` · `In this section, we will explore` + `how desktop and service virtualization work` + `and their benefits in network management.`
- [ ] كل labels صورة Palo Alto اتعلّم عليها: Cluster Controller، Panorama، Security Admin، Security Policy، VM، vSwitch، Hypervisor، Physical Host، Internet، Traffic Steering، والعنوان الأخضر.
- [ ] بطاقة المذاكرة V3-S13 فيها نص شرايح 5 و6 كامل وبالترتيب.
- [ ] البانر s05 ظاهر. المدة 92.0 ث، و14 مشهد.

---

### المرحلة 4 — V4 «Multimedia Network Application» · Slides 7, 16 · المدة 66.5 ث (1596 فريم) · 10 مشاهد
**الشخصيات:** كريم (K6)، عمر (O3، O4). **الصور:** s07_media_streaming، s16_voip_globe، s16_video_player، s16_cisco_phones. **الملف:** `04_Multimedia_Network_Application.mp4`.

#### V4-S1 · 0.00 → 5.50 (5.5) · فريم 0 → 132 · LAYOUT_H (الشخصية يمين)
**العناصر:** كريم K6 مركز x 1520 + بيضاوي «كريم المتدرب». T_HOOK «فيديو ومكالمة وأغنية... ماشيين إزاي؟!» + خط أحمر. رسمة: سحابة صغيرة مركز (670، 380) وتحتها 3 أيقونات في صف (y 620) عند x 330 و670 و1010: play_screen «فيديو» · smartphone بموجات «مكالمة» · music_headphones «أغنية» (العربي Cairo 500، 32px تحت كل أيقونة)، وخطوط متقطعة من كل أيقونة للسحابة.

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | دخول كريم | whoosh_soft |
| 0.40–1.50 | HandWrite العنوان | marker_loop مدة 1.10 |
| 1.55–1.90 | الخط الأحمر | marker_loop مدة 0.35 |
| 2.00 | Pop أيقونة 1 + اسمها | media_play (−3 dB) |
| 2.40 | Pop أيقونة 2 + اسمها | pop_soft (−3 dB) |
| 2.80 | Pop أيقونة 3 + اسمها | pop_soft (−3 dB) |
| 3.20–3.70 | السحابة والخطوط المتقطعة | pencil_loop مدة 0.50 |
| 4.00–4.35 | بيضاوي الاسم | pencil_loop مدة 0.35 |
| 5.17–5.50 | fade | — |

**الكابشن:** «بتتفرج وبتكلّم وبتسمع على النت كل يوم... ده اسمه إيه؟»

#### V4-S2 · 5.50 → 12.00 (6.5) · فريم 132 → 288 · LAYOUT_A
**العناصر:** عمر O4 مركز x 400 + بيضاوي «م. عمر» (400، 120). كارت x 700 → 1840، y 130 → 900:
- `Multimedia Network Application` (Kalam 700، 58px) مركز (1270، 220) — **عنوان شريحة 7**.
- «تطبيقات الشبكة متعددة الوسائط» (Aref Ruqaa، 56px) مركز (1270، 320).
- الجملة (Cairo 600، 40px، LTR من x 760، سطرين) y 420 → 520: `Multimedia network application refers to any network application that employs audio or video.` + تظليل على `audio` وعلى `video`.
- تحت: speaker_waves + `audio` (Kalam 700، 34px) مركز (1050، 720)، وvideo_camera + `video` مركز (1490، 720).

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | دخول عمر | whoosh_soft |
| 0.35–0.95 | رسم الكارت | pencil_loop مدة 0.60 |
| 1.00–1.90 | HandWrite العنوان | marker_loop مدة 0.90 |
| 1.95–2.45 | HandWrite العربي | pencil_loop مدة 0.50 |
| 2.55–3.95 | WordReveal الجملة | pencil_loop مدة 1.40 (−3 dB) |
| 4.00–4.30 | تظليل `audio` | highlight_swipe |
| 4.30–4.60 | تظليل `video` | highlight_swipe |
| 4.65 | Pop السماعة | media_play |
| 4.95 | Pop الكاميرا | pop_soft |
| 5.20–5.55 | بيضاوي الاسم | pencil_loop مدة 0.35 (−6 dB) |
| 6.17–6.50 | fade | — |

**الكابشن:** «يعني أي network application بيستخدم audio أو video.»

#### V4-S3 · 12.00 → 17.50 (5.5) · فريم 288 → 420 · LAYOUT_P
**العناصر:** PinnedPhoto `s07_media_streaming` في x 140 → 640، y 110 → 860، ميل −1.2°. على الصورة: `Remote` بسهم لـ R_REMOTE، و`Streaming box` بسهم لـ R_CUBE (Kalam 700، 30px). كارت x 760 → 1800، y 250 → 760: `Media streaming device` (Kalam 700، 54px) مركز (1280، 360) + «جهاز بيشغّل فيديو وصوت من النت على الشاشة» (Cairo 500، 38px) مركز (1280، 470) + أيقونات tv وcloud بسهم مركز (1280، 630). [توضيح]

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | — | whoosh_soft |
| 0.30–0.65 | دخول الصورة | page_turn |
| 0.90–1.25 | لافتة `Remote` + سهمها | remote_click |
| 1.40–1.75 | لافتة `Streaming box` + سهمها | pencil_loop مدة 0.35 |
| 1.90–2.40 | رسم الكارت | pencil_loop مدة 0.50 |
| 2.45–3.25 | HandWrite عنوان الكارت | marker_loop مدة 0.80 |
| 3.30–4.00 | WordReveal العربي | pencil_loop مدة 0.70 (−3 dB) |
| 4.10 | Pop الأيقونات | pop_soft |
| 5.17–5.50 | fade | — |

**الكابشن:** «زي الـ Media Streaming Device: فيديو وصوت من النت على طول.»

#### V4-S4 · 17.50 → 24.50 (7.0) · فريم 420 → 588 · LAYOUT_C
**العناصر:** العنوان `In this section, we will discuss`. الصفوف:

| الإنجليزي (حرفي) | العربي |
|---|---|
| `the properties of video and audio,` | خصائص الفيديو والصوت |
| `their compression formats,` | صيغ الضغط بتاعتهم |
| `and the different types of multimedia network applications.` | وأنواع تطبيقات الـ multimedia |

**توقيت الصف (T):** زي V3-S6 بالظبط.

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | دخول عمر O3 | whoosh_soft |
| 0.35–0.95 | رسم الكارت | pencil_loop مدة 0.60 |
| 1.00–2.00 | العنوان + الخط | pencil_loop مدة 1.00 (−3 dB) |
| 2.20 / 3.50 / 4.80 | الصف 1 / 2 / 3 | زي V3-S6 |
| 6.10 | اللمعة | — |
| 6.67–7.00 | fade | — |

**الكابشن:** «هندرس خصائص الصوت والفيديو، والـ compression formats، والأنواع.»

#### V4-S5 · 24.50 → 30.50 (6.0) · فريم 588 → 732 · LAYOUT_D · [توضيح]
**العناصر:** big_file (220×280) مركز (300، 450) + `Raw video` (Kalam 700، 36px) عند (300، 640) + «حجم ضخم» (Cairo 500، 30px، RED) عند (300، 690). سهم من x 500 لـ 700 عند y 450. press_vise (300×240) مركز (900، 450) مكتوب عليه `compression format` (Kalam 700، 34px). سهم من 1060 لـ 1220. small_file (110×140) مركز (1300، 450) + «حجم صغير» عند (1300، 560). ماسورة شبكة (خطين متوازيين بينهم 40) من (1380، 450) لـ (1700، 450)، وsmartphone مركز (1780، 450). أمثلة تحت المكبس (Cairo 500، 28px، MUTED): `audio: MP3 / AAC` عند (900، 640) و`video: H.264 / MPEG-4` عند (900، 690).

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | — | whoosh_soft |
| 0.40 | Pop الملف الكبير | pop_soft |
| 0.60–1.00 | اسمه + «حجم ضخم» | pencil_loop مدة 0.40 |
| 1.10–1.50 | السهم | pencil_loop مدة 0.40 |
| 1.60–2.10 | رسم المكبس + اسمه | pencil_loop مدة 0.50 |
| 2.20–2.80 | الملف الكبير يدخل المكبس وينضغط (scaleX) | squeeze |
| 2.90 | الملف الصغير يطلع | pop_soft |
| 3.10–3.40 | السهم التاني + «حجم صغير» | — |
| 3.50–3.90 | الماسورة | pencil_loop مدة 0.40 |
| 4.00 | Pop الموبايل | pop_soft (−3 dB) |
| 4.10–4.70 | الملف الصغير بيعدّي في الماسورة | whoosh_soft (−6 dB) |
| 4.80–5.20 | الأمثلة fade (بالترتيب) | — |
| 5.67–6.00 | fade | — |

**الكابشن:** «الصوت والفيديو حجمهم كبير... فلازم compression عشان الشبكة تستحمل.»

#### V4-S6 · 30.50 → 37.00 (6.5) · فريم 732 → 888 · LAYOUT_P
**العناصر:** Tag فوق شمال عند (100، 60): `Network Multimedia Applications` (Kalam 700، 48px) — **عنوان شريحة 16** — وجنبه Tag صغير `Dr. Tamer Fathy` (Cairo 600، 32px). PinnedPhoto `s16_voip_globe` (×3) في x 460 → 1460، y 180 → 886، ميل +1°. على الصورة لافتات بأسهم (Kalam 700، 30px) + Glow pulse على كل جهاز: `Tablet` · `Smartphone` · `IP Phone` · `Video IP Phone`، وفي الآخر `Internet` على الكرة الأرضية.

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | — | whoosh_soft |
| 0.30–1.10 | HandWrite العنوان | marker_loop مدة 0.80 |
| 1.15 | Pop تاج الدكتور | pop_soft (−3 dB) |
| 1.30–1.65 | دخول الصورة | page_turn |
| 2.00 / 2.70 / 3.40 / 4.10 | Tablet / Smartphone / IP Phone / Video IP Phone (نبضة + لافتة 0.35) | pop_soft (−6 dB)، وعند IP Phone: phone_trill |
| 4.70–5.05 | لافتة `Internet` | pencil_loop مدة 0.35 |
| 6.17–6.50 | fade | — |

**الكابشن:** «الصوت والفيديو بيتنقلوا بين Tablet وSmartphone وIP Phone.»

#### V4-S7 · 37.00 → 43.50 (6.5) · فريم 888 → 1044 · LAYOUT_P (إطار موبايل)
**العناصر:** إطار موبايل: مستطيل 1080×700 بأركان 70، حد INK 6px، تعبئة INK، مركز (960، 480). جواه شاشة 960×639 فيها `s16_video_player` (×4). على الصورة: RedEllipse حوالين `3:07` وحوالين `-39:04` وحوالين `3G`. ملاحظات (Cairo 600، 32px): «3:07 = اللي اتشاف» فوق الشمال عند (560، 100)، و«-39:04 = اللي فاضل» فوق اليمين عند (1360، 100)، و«شغال على شبكة موبايل 3G» تحت عند (960، 870).

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | — | whoosh_soft |
| 0.30–0.80 | رسم الإطار | pencil_loop مدة 0.50 |
| 0.85–1.20 | الصورة تظهر جوه الشاشة | media_play |
| 1.40–1.90 | دايرة `3:07` | marker_loop مدة 0.50 |
| 1.95–2.25 | ملاحظتها | pencil_loop مدة 0.30 (−6 dB) |
| 2.40–2.90 | دايرة `-39:04` | marker_loop مدة 0.50 |
| 2.95–3.25 | ملاحظتها | pencil_loop مدة 0.30 (−6 dB) |
| 3.40–3.90 | دايرة `3G` | marker_loop مدة 0.50 |
| 3.95–4.25 | ملاحظتها | pencil_loop مدة 0.30 (−6 dB) |
| 4.40 | Glow pulse على زرار Play | remote_click |
| 6.17–6.50 | fade | — |

**الكابشن:** «ده Video streaming على الموبايل: الفيديو بيوصل وإنت بتتفرج.»
> **ممنوع** تسمّي الشريط اللي فوق «Buffering». ده شريط التشغيل.

#### V4-S8 · 43.50 → 50.50 (7.0) · فريم 1044 → 1212 · LAYOUT_P
**العناصر:** PinnedPhoto `s16_cisco_phones` (×3) في x 360 → 1560، y 120 → 758، ميل −0.8°. تحتها `VoIP = Voice over IP` (Kalam 700، 54px) مركز (960، 850) + تظليل. على الصورة: RedEllipse حوالين P7 ولافتة `Wireless IP Phone`؛ RedEllipse حوالين P8 ولافتة `Color screen`؛ قوس أحمر على موديول P2 ولافتة `Expansion module`؛ Tag أحمر فوق شمال الصورة `8 devices`.

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | — | whoosh_soft |
| 0.30–0.65 | دخول الصورة | page_turn |
| 0.80 | — | phone_trill (−3 dB) |
| 1.00–1.80 | HandWrite `VoIP = Voice over IP` | marker_loop مدة 0.80 |
| 1.85–2.20 | التظليل | highlight_swipe |
| 2.40–2.90 | P7 دايرة + لافتة | marker_loop مدة 0.50 |
| 3.10–3.60 | P8 دايرة + لافتة | marker_loop مدة 0.50 |
| 3.80–4.20 | قوس الموديول + لافتة | marker_loop مدة 0.40 |
| 4.50 | Pop `8 devices` | pop_soft |
| 6.67–7.00 | fade | — |

**الكابشن:** «ودي IP Phones بتعمل VoIP: صوتك بيتحوّل IP packets على الشبكة.»

#### V4-S9 · 50.50 → 60.50 (10.0) · فريم 1212 → 1452 · LAYOUT_R (بطاقة المذاكرة)
**العناصر:** تاجات `Slide 7` `Slide 16`.
- **عمود النص:**
  1. تاج `Slide 7`
  2. عنوان: `Multimedia Network Application`
  3. فقرة: `Multimedia network application refers to any network application that employs audio or video. In this section, we will discuss the properties of video and audio, their compression formats, and the different types of multimedia network applications.`
  4. تاج `Slide 16`
  5. عنوان: `Network Multimedia Applications`
  6. `Dr. Tamer Fathy`
- تظليل ثابت: `audio or video` · `compression formats`.
- **مصطلحات مهمة (6 صفوف):**
  1. `Multimedia network application` — تطبيقات الشبكة متعددة الوسائط
  2. `audio / video` — صوت / فيديو
  3. `compression format` — صيغة ضغط (زي MP3 وH.264)
  4. `Media streaming device` — جهاز بيشغّل فيديو وصوت من النت
  5. `VoIP (Voice over IP)` — مكالمات صوت على شبكة IP
  6. `IP Phone · Video IP Phone` — تليفون شبكي · تليفون شبكي بفيديو
- **التوقيت:** التوقيت الموحّد (5.4).
- الـ fade من 9.67 لـ 10.00 (وقت المشهد).

**الكابشن:** «ده نص المحاضرة كامل... وقّف الفيديو وذاكره براحتك.»

#### V4-S10 · 60.50 → 66.50 (6.0) · فريم 1452 → 1596 · LAYOUT_F
**العناصر:** `Multimedia` (Caveat Brush، 120px) مركز (1100، 230) و`Network Application` (Caveat Brush، 96px) مركز (1100، 350)؛ RedEllipse مركز (1100، 290)، rx 520، ry 180. «تطبيقات الشبكة متعددة الوسائط» (Aref Ruqaa، 64px) مركز (1100، 540). جملة متظللة (Cairo 600، 40px، RTL) مركز (1100، 660): «أي network application بيستخدم audio أو video». كريم K6 تحت شمال + «فهمت!». أيقونتين speaker_waves وvideo_camera عند (1760، 260) و(1760، 400).

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | — | whoosh_soft |
| 0.40–1.20 | HandWrite `Multimedia` | marker_loop مدة 0.80 |
| 1.20–1.90 | HandWrite `Network Application` | marker_loop مدة 0.70 |
| 1.95–2.55 | RedEllipse | marker_loop مدة 0.60 |
| 2.55 | — | chime_success |
| 2.70–3.30 | HandWrite العربي | pencil_loop مدة 0.60 |
| 2.90 | دخول كريم | — |
| 3.40–4.10 | WordReveal الجملة | pencil_loop مدة 0.70 (−3 dB) |
| 4.15–4.50 | التظليل | highlight_swipe |
| 4.55 | الأيقونتين Pop (بفرق 0.15) | pop_soft |
| 4.80 | Pop «فهمت!» | pop_soft (−3 dB) |
| 5.30–6.00 | fade النهاية | — |

**الكابشن:** «ده اسمه Multimedia Network Application.»

**✔ قائمة قبول V4**
- [ ] ظاهر حرفيًا: `Multimedia Network Application` · `Multimedia network application refers to any network application that employs audio or video.` · `In this section, we will discuss` + `the properties of video and audio,` + `their compression formats,` + `and the different types of multimedia network applications.` · `Network Multimedia Applications` · `Dr. Tamer Fathy`.
- [ ] الـ 4 صور (s07، s16 ×3) ظاهرين. عدد التليفونات = 8، والموديول متعلّم على P2.
- [ ] بطاقة المذاكرة V4-S9 فيها نص شرايح 7 و16 كامل وبالترتيب.
- [ ] كلمة «Buffering» مش موجودة. المدة 66.5 ث، و10 مشاهد.

---

### المرحلة 5 — V5 «Network Management» · Slide 8 · المدة 47.5 ث (1140 فريم) · 7 مشاهد
**الشخصيات:** كريم (K2، K5)، عمر (O2، O3، O4). **الصور:** s08_rack_servers. **الملف:** `05_Network_Management.mp4`.

#### V5-S1 · 0.00 → 5.50 (5.5) · فريم 0 → 132 · LAYOUT_H (الشخصية يمين)
**العناصر:** كريم K2 مركز x 1520 + بيضاوي «كريم المتدرب». T_HOOK «شبكة من غير إدارة؟!» + خط أحمر. رسمة: 3 racks (140×240) مراكزها x 300 و520 و740، y 420 → 660، في كل واحدة 4 لمبات RED بتطفي وتنوّر (2 Hz)؛ warning_triangle (160px) مركز (980، 470)؛ كابل مقطوع (زجزاج RED) بين الكباين.

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | دخول كريم | whoosh_soft |
| 0.40–1.30 | HandWrite العنوان | marker_loop مدة 0.90 |
| 1.35–1.70 | الخط الأحمر | marker_loop مدة 0.35 |
| 1.80–2.30 | الكباين Pop (بفرق 0.15) | pop_soft (−6 dB) عند 1.80 |
| 2.40 | اللمبات تبدأ تومض | warn_beeps |
| 2.90 | Pop المثلث | warn_soft |
| 3.40–3.80 | الكابل المقطوع | pencil_loop مدة 0.40 |
| 4.00–4.35 | بيضاوي الاسم | pencil_loop مدة 0.35 |
| 5.17–5.50 | fade | — |

**الكابشن:** «أقوى شبكة في الدنيا... من غير متابعة ممكن تقع في لحظة!»

#### V5-S2 · 5.50 → 12.50 (7.0) · فريم 132 → 300 · LAYOUT_A
**العناصر:** عمر O2 مركز x 400. كارت x 700 → 1840، y 120 → 910:
- `Network Management` (Kalam 700، 60px) مركز (1270، 210) — **عنوان شريحة 8** — و«إدارة الشبكات» (Aref Ruqaa، 56px) مركز (1270، 300).
- السطر 1 (Cairo 600، 40px، LTR من x 760) عند y 390: `Network management is the process of`
- 3 صفوف عند y 470 و570 و670: أيقونة 64px عند x 770، الإنجليزي (Cairo 600، 44px) من x 860، والعربي (Cairo 500، 30px، MUTED) آخره عند x 1800:

| الأيقونة | الإنجليزي (حرفي) | العربي |
|---|---|---|
| clipboard_gear | `administering,` | تجهيز وتنظيم |
| dashboard | `managing,` | تشغيل ومتابعة |
| wrench | `and maintaining` | صيانة مستمرة |

- السطر 2 عند y 780: `a network infrastructure.`

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | دخول عمر | whoosh_soft |
| 0.35–0.95 | رسم الكارت | pencil_loop مدة 0.60 |
| 1.00–1.90 | HandWrite العنوان | marker_loop مدة 0.90 |
| 1.95–2.40 | HandWrite العربي | pencil_loop مدة 0.45 |
| 2.50–3.30 | WordReveal السطر 1 | pencil_loop مدة 0.80 (−3 dB) |
| 3.40 / 4.20 / 5.00 | Pop أيقونة الصف 1 / 2 / 3 | pop_soft (−3 dB) |
| +0.10 → +0.45 | HandWrite الإنجليزي | pencil_loop مدة 0.35 (−3 dB) |
| +0.50 | العربي fade | — |
| 5.60–6.10 | WordReveal السطر 2 | pencil_loop مدة 0.50 (−3 dB) |
| 6.15–6.45 | بيضاوي «م. عمر» عند (400، 120) | pencil_loop مدة 0.30 (−6 dB) |
| 6.67–7.00 | fade | — |

**الكابشن:** «يعني administering وmanaging وmaintaining للـ infrastructure.»

#### V5-S3 · 12.50 → 19.50 (7.0) · فريم 300 → 468 · LAYOUT_B
**العناصر:** عمر O4 مركز x 1520 (mirror عشان يشاور شمال). كارت x 100 → 1240، y 120 → 910:
- السطر 1 (Cairo 600، 40px) من x 160 عند y 210: `It ensures the`
- 3 صفوف عند y 310 و450 و590: CheckMark عند x 170، الإنجليزي (Cairo 600، 48px) من x 270، أيقونة 80px عند x 1120، والعربي تحت الإنجليزي بـ 50px (Cairo 500، 30px، MUTED):

| الإنجليزي (حرفي) | العربي | الأيقونة |
|---|---|---|
| `performance,` | الأداء والسرعة | speedometer |
| `availability,` | متاحة وشغالة طول الوقت | power_clock |
| `and security` | الحماية والأمان | shield |

- السطر 2 عند y 780: `of the network infrastructure.`

**توقيت الصف (T):** T → T+0.40 WordReveal (pencil_loop مدة 0.40، −3 dB) ← T+0.40 CheckMark (check_soft) ← T+0.65 → T+0.95 تظليل (highlight_swipe، −3 dB) ← T+0.95 Pop الأيقونة (من غير صوت) ← T+1.00 العربي.

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | دخول عمر | whoosh_soft |
| 0.35–0.95 | رسم الكارت | pencil_loop مدة 0.60 |
| 1.00–1.50 | WordReveal السطر 1 | pencil_loop مدة 0.50 (−3 dB) |
| 1.70 / 3.00 / 4.30 | الصف 1 / 2 / 3 | زي التوقيت اللي فوق |
| 5.45–6.05 | WordReveal السطر 2 | pencil_loop مدة 0.60 (−3 dB) |
| 6.67–7.00 | fade | — |

**الكابشن:** «وبتضمن 3 حاجات: performance وavailability وsecurity للشبكة.»

#### V5-S4 · 19.50 → 25.50 (6.0) · فريم 468 → 612 · LAYOUT_P (بانر)
**العناصر:** PinnedPhoto `s08_rack_servers` في x 160 → 1760، y 160 → 464، ميل 0. كارتين ملاحظة تحت (y 560 → 800): الشمال x 260 → 860: `SAS hard drives` (Kalam 700، 40px) + «هاردات السيرفرات (SAS)»؛ اليمين x 1060 → 1660: `Status LEDs` + «لمبات بتقول الجهاز شغال ولا فيه مشكلة». magnifier (160px) بيعدّي على الصورة.

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | — | whoosh_soft |
| 0.00–6.00 | خلفية أزيز | hum_server مدة 6.00 (−6 dB)، fade in 0.4 / out 0.5 (لوب الملف مرتين) |
| 0.30–0.65 | دخول الصورة | page_turn |
| 1.00–1.40 | Spotlight على R_DRIVE + مستطيل أحمر | marker_loop مدة 0.40 |
| 1.50 / 1.55–2.05 | الكارت الشمال Pop / نصه | pop_soft / pencil_loop مدة 0.50 (−6 dB) |
| 2.40–2.80 | Spotlight على R_LEDS_BLUE | marker_loop مدة 0.40 |
| 3.00–3.40 | Spotlight على R_LEDS_GREEN | — |
| 3.20 | — | beep_soft |
| 3.50 / 3.55–4.15 | الكارت اليمين Pop / نصه | pop_soft / pencil_loop مدة 0.60 (−6 dB) |
| 4.30–5.00 | الـ Spotlight يتشال والعدسة تعدّي من الشمال لليمين | — |
| 5.67–6.00 | fade | — |

**الكابشن:** «مدير الشبكة بيتابع كل server وكل hard drive من لمبات الحالة.»

#### V5-S5 · 25.50 → 31.50 (6.0) · فريم 612 → 756 · LAYOUT_C
**العناصر:** الكارت فيه 3 سطور (من غير صفوف checklist):
- L1 (Cairo 600، 40px) عند y 220: `In this section, we will discuss the different`
- L2 (Cairo 700، 48px + تظليل) عند y 340: `network management tools and techniques`
- L3 (Cairo 600، 40px، مسموح سطرين) عند y 450: `that are used to manage a computer network effectively.`
- أيقونات toolbox وmonitor_chart وgear عند y 700 (x 400 و700 و1000). عمر O3 يمين.

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | دخول عمر | whoosh_soft |
| 0.35–0.95 | رسم الكارت | pencil_loop مدة 0.60 |
| 1.00–1.90 | WordReveal L1 | pencil_loop مدة 0.90 (−3 dB) |
| 2.00–2.70 | HandWrite L2 | marker_loop مدة 0.70 |
| 2.75–3.10 | تظليل L2 | highlight_swipe |
| 3.20–4.20 | WordReveal L3 | pencil_loop مدة 1.00 (−3 dB) |
| 4.30 / 4.45 / 4.60 | الأيقونات Pop | pop_soft (−3 dB) عند 4.30 بس |
| 4.90 | اللمعة | — |
| 5.67–6.00 | fade | — |

**الكابشن:** «هنتعلم الـ tools والـ techniques اللي بندير بيها الشبكة.»

#### V5-S6 · 31.50 → 41.50 (10.0) · فريم 756 → 996 · LAYOUT_R (بطاقة المذاكرة)
**العناصر:** تاج `Slide 8`.
- **عمود النص:**
  1. تاج `Slide 8`
  2. عنوان: `Network Management`
  3. فقرة: `Network management is the process of administering, managing, and maintaining a network infrastructure. It ensures the performance, availability, and security of the network infrastructure.`
  4. فقرة: `In this section, we will discuss the different network management tools and techniques that are used to manage a computer network effectively.`
- تظليل ثابت: `administering, managing, and maintaining` · `performance, availability, and security` · `tools and techniques`.
- **مصطلحات مهمة (7 صفوف):**
  1. `Network management` — إدارة الشبكات
  2. `administering` — تجهيز وتنظيم
  3. `managing` — تشغيل ومتابعة
  4. `maintaining` — صيانة مستمرة
  5. `network infrastructure` — البنية التحتية للشبكة
  6. `performance · availability · security` — الأداء · الإتاحة · الأمان
  7. `tools and techniques` — الأدوات والأساليب
- **التوقيت:** التوقيت الموحّد (5.4).
- الـ fade من 9.67 لـ 10.00 (وقت المشهد).

**الكابشن:** «ده نص المحاضرة كامل... وقّف الفيديو وذاكره براحتك.»

#### V5-S7 · 41.50 → 47.50 (6.0) · فريم 996 → 1140 · LAYOUT_F
**العناصر:** `Network Management` (Caveat Brush، 120px) مركز (1100، 290) + RedEllipse (rx 560، ry 130). «إدارة الشبكات» (Aref Ruqaa، 80px) مركز (1100، 470). جملة متظللة LTR (Cairo 600، 40px) مركز (1100، 600): `Performance • Availability • Security`. كريم K5 تحت شمال + «اطّمنت!». أيقونة shield عليها صح مركز (1780، 290).

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | — | whoosh_soft |
| 0.40–1.50 | HandWrite المصطلح | marker_loop مدة 1.10 |
| 1.55–2.15 | RedEllipse | marker_loop مدة 0.60 |
| 2.15 | — | chime_success |
| 2.30–2.80 | HandWrite العربي | pencil_loop مدة 0.50 |
| 2.90 | دخول كريم | — |
| 3.10–3.80 | WordReveal الجملة | pencil_loop مدة 0.70 (−3 dB) |
| 3.85–4.20 | التظليل | highlight_swipe |
| 4.30 | Pop الدرع | shield_clink (−3 dB) |
| 4.55 | Pop «اطّمنت!» | pop_soft (−3 dB) |
| 5.30–6.00 | fade النهاية | — |

**الكابشن:** «وده اسمه Network Management.»

**✔ قائمة قبول V5**
- [ ] ظاهر حرفيًا: `Network Management` · `Network management is the process of` + `administering,` + `managing,` + `and maintaining` + `a network infrastructure.` · `It ensures the` + `performance,` + `availability,` + `and security` + `of the network infrastructure.` · `In this section, we will discuss the different` + `network management tools and techniques` + `that are used to manage a computer network effectively.`
- [ ] بطاقة المذاكرة V5-S6 فيها نص شريحة 8 كامل.
- [ ] صورة s08 ظاهرة. المدة 47.5 ث، و7 مشاهد.

---

### المرحلة 6 — V6 «Firewall & Operational Security» · Slides 9, 10 · المدة 73.5 ث (1764 فريم) · 11 مشهد
**الشخصيات:** «شبح» الهكر (H1، H2)، عمر (O3). **الصور:** s09_firewall_icon، s10_fig8_33 (Vector + `_clean`). **الملف:** `06_Firewall.mp4`.

#### V6-S1 · 0.00 → 5.50 (5.5) · فريم 0 → 132 · LAYOUT_H (الشخصية يمين)
**العناصر:** الهكر H1 مركز x 1540 + بيضاوي ««شبح» الهكر» (1540، 120). T_HOOK «مين يقفل البوابة في وش الهكر؟!» + خط أحمر. رسمة: office_building (260×300) مركز (360، 620) وقدّامه gate_open مركز (700، 680)؛ 5 packet_cube حمرا (40px) طالعين من ناحية الهكر (x 1300) ورايحين للبوابة في قوس، بيتكرروا.

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | دخول الهكر | whoosh_soft |
| 0.40–1.50 | HandWrite العنوان | marker_loop مدة 1.10 |
| 1.55–1.90 | الخط الأحمر | marker_loop مدة 0.35 |
| 2.00–2.60 | رسم المبنى والبوابة | pencil_loop مدة 0.60 |
| 2.80 | الباكتس تبدأ تطير (بفرق 0.25) | whoosh_soft (−6 dB) |
| 3.30 | — | warn_soft |
| 3.80–4.15 | بيضاوي الاسم | pencil_loop مدة 0.35 |
| 5.17–5.50 | fade | — |

**الكابشن:** «الإنترنت مليان تهديدات... ولو البوابة مفتوحة أي هكر يدخل!»

#### V6-S2 · 5.50 → 12.00 (6.5) · فريم 132 → 288 · LAYOUT_P + كارت
**العناصر:** PinnedPhoto `s09_firewall_icon` في x 140 → 620، y 150 → 870، ميل −1.2°. كارت x 700 → 1840، y 140 → 900:
- `Firewall` (Caveat Brush، 130px) مركز (1270، 250) — **عنوان شريحة 9** — و«جدار الحماية» (Aref Ruqaa، 60px) مركز (1270، 380).
- الجملة (Cairo 600، 40px، LTR من x 760، سطرين) y 470 → 570: `A firewall is a software or hardware-based network security system` + تظليل على `network security system`.
- تاجين (y 680 → 820): Tag1 x 820 → 1220: laptop + `software` (Kalam 700، 36px) + «برنامج»؛ Tag2 x 1320 → 1720: server_box + `hardware-based` + «جهاز مستقل».

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | — | whoosh_soft |
| 0.30–0.65 | دخول الصورة | page_turn |
| 0.70 | — | stamp_thud (−6 dB) |
| 0.90–1.40 | رسم الكارت | pencil_loop مدة 0.50 |
| 1.45–2.35 | HandWrite `Firewall` | marker_loop مدة 0.90 |
| 2.40–2.90 | HandWrite العربي | pencil_loop مدة 0.50 |
| 3.00–4.20 | WordReveal الجملة | pencil_loop مدة 1.20 (−3 dB) |
| 4.25–4.60 | التظليل | highlight_swipe |
| 4.75 | Pop Tag1 | pop_soft |
| 5.10 | Pop Tag2 | pop_soft |
| 6.17–6.50 | fade | — |

**الكابشن:** «الـ Firewall = network security system... software أو hardware.»

#### V6-S3 · 12.00 → 18.00 (6.0) · فريم 288 → 432 · LAYOUT_D
**العناصر:** فوق في النص (Cairo 600، 44px، LTR) مركز (960، 130): `that controls incoming and outgoing network traffic`. office_building مركز (330، 560) + «شبكتنا» (Cairo 500، 30px) تحته؛ firewall_wall (260×300) مركز (960، 560)؛ cloud + `Internet` مركز (1590، 560). سهم `incoming` (INK 5px) من (1450، 500) لـ (480، 500) بيعدّي في الحيطة، واسمه (Kalam 700، 34px) عند (1200، 450) + «داخل» (Cairo 500، 28px، MUTED) جنبه. سهم `outgoing` من (480، 640) لـ (1450، 640)، واسمه عند (720، 700) + «خارج».

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | — | whoosh_soft |
| 0.30–1.40 | WordReveal الجملة | pencil_loop مدة 1.10 (−3 dB) |
| 1.50 | Pop المبنى | pop_soft |
| 1.75 | Pop السحابة | pop_soft (−3 dB) |
| 2.00–2.40 | الحيطة تتبني (الطوب صف صف من تحت لفوق) | stamp_thud (−3 dB) عند 2.00 |
| 2.60–3.40 | سهم incoming (يمين ← شمال) | pencil_loop مدة 0.80 |
| 3.40 | اسمه | — |
| 3.70–4.50 | سهم outgoing (شمال ← يمين) | pencil_loop مدة 0.80 |
| 4.50 | اسمه | — |
| 4.80–5.15 | تظليل `incoming and outgoing` في الجملة | highlight_swipe |
| 5.67–6.00 | fade | — |

**الكابشن:** «بيتحكّم في الـ incoming والـ outgoing network traffic.»

#### V6-S4 · 18.00 → 25.00 (7.0) · فريم 432 → 600 · LAYOUT_D
**العناصر:** فوق (Cairo 600، 40px، سطرين في النص، y 110 → 200): `by analyzing data packets and determining whether they should be allowed through or not.` الحيطة مركز (960، 600)، السحابة (1620، 600)، المبنى (300، 600). magnifier (120px) فوق الحيطة عند (960، 380). 3 باكتس (packet_cube 70px، تحت كل واحدة `packet` Kalam 24px) جايين من السحابة على y 600:
- P1 سليمة: تقف عند x 1120 ← العدسة تفحص ← CheckMark ← تعدّي للمبنى ← لافتة `allowed through` (Kalam 700، 32px، GREEN_TEXT) جنب المبنى.
- P2 خبيثة: تتفحص ← CrossMark ← ترتد (x +200، تلف 20°) وتختفي ← لافتة `or not` (RED) يمين الحيطة.
- P3 سليمة: تعدّي.

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | — | whoosh_soft |
| 0.30–1.70 | WordReveal الجملة | pencil_loop مدة 1.40 (−3 dB) |
| 1.80 | الحيطة والمبنى والسحابة fade (0.3) | — |
| 2.10–2.70 | P1 ماشية | — |
| 2.70–3.10 | فحص P1 | radar_ping (−6 dB) |
| 3.10 | صح | check_soft |
| 3.20–3.70 | P1 تعدّي | — |
| 3.70 | لافتة `allowed through` | pencil_loop مدة 0.35 (−6 dB) |
| 3.80–4.30 | P2 ماشية | — |
| 4.30–4.70 | فحص P2 | radar_ping (−6 dB) |
| 4.70 | ✗ + ارتداد | bonk_soft |
| 4.95 | لافتة `or not` | pencil_loop مدة 0.30 (−6 dB) |
| 5.20–5.60 | P3 ماشية | — |
| 5.60–5.90 | فحص P3 | — |
| 5.90 | صح | check_soft (−3 dB) |
| 5.95–6.40 | P3 تعدّي | — |
| 6.67–7.00 | fade | — |

**الكابشن:** «بيفحص كل data packet... ويقرّر: تعدّي ولا لأ.»

#### V6-S5 · 25.00 → 31.00 (6.0) · فريم 600 → 744 · LAYOUT_D
**العناصر:** فوق (Cairo 600، 42px، سطرين، y 110 → 200): `Firewall protection is essential to secure a network from external threats.` + تظليل على `essential` وعلى `external threats`. الحيطة (960، 600)، المبنى (330، 620) وفوقه lock (120px) عند (330، 420). الهكر H2 يمين: مركز x 1560، ارتفاع 700. باكتس حمرا بتخبط في الحيطة وتقع.

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | — | whoosh_soft |
| 0.30–1.60 | WordReveal الجملة | pencil_loop مدة 1.30 (−3 dB) |
| 1.70–2.00 | تظليل `essential` | highlight_swipe |
| 2.05–2.40 | تظليل `external threats` | highlight_swipe |
| 2.50 | الحيطة والمبنى fade (0.3) | — |
| 2.70 | دخول الهكر (من اليمين) | — |
| 3.10 / 3.50 / 3.90 | باكت حمرا تخبط وتقع | bonk_soft (−6 dB) كل مرة |
| 4.30 | Pop القفل + القوس يتقفل | lock_click |
| 5.67–6.00 | fade | — |

**الكابشن:** «حماية الـ Firewall أساسية ضد الـ external threats.»

#### V6-S6 · 31.00 → 37.00 (6.0) · فريم 744 → 888 · LAYOUT_C
**العناصر:** العنوان `In this section, we will discuss`. الصفوف:

| الإنجليزي (حرفي) | العربي |
|---|---|
| `how firewalls work` | بيشتغلوا إزاي |
| `and their role in network management.` | ودورهم في إدارة الشبكات |

عمر O3 يمين + بيضاوي «م. عمر» (أول ظهور له في V6) عند (1580، 120).

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | دخول عمر | whoosh_soft |
| 0.35–0.95 | رسم الكارت | pencil_loop مدة 0.60 |
| 1.00–2.00 | العنوان + الخط | pencil_loop مدة 1.00 (−3 dB) |
| 2.20 / 3.40 | الصف 1 / 2 (توقيت V3-S6) | زي V3-S6 |
| 4.70–5.05 | بيضاوي الاسم | pencil_loop مدة 0.35 (−6 dB) |
| 5.10 | اللمعة | — |
| 5.67–6.00 | fade | — |

**الكابشن:** «هنشوف الـ firewalls بتشتغل إزاي، ودورها في الـ network management.»

#### خريطة Figure 8.33 (Vector) — مستخدمة في S7 وS8
> التحويل من بكسل الصورة الأصلية (1366×768) للكادر: **X = 311 + x × 0.95 ، Y = 140 + y × 0.95**. كل الإحداثيات تحت بكسل الصورة الأصلية.

- **الـ blob:** شكل مقفول ناعم بيعدّي على النقط (300،60) (520،52) (700،75) (800،150) (840،330) (810،520) (700،600) (560،640) (380،645) (270،600) (250،450) (215،300) (225،130)، تعبئة FW_BLOB، من غير حد (أو `#C9D6E0` 2px).
- **PC:** شاشة (250،135)→(320،215) + كيبورد (252،215)→(345،240).
- **Switch1** (مربع بأسهم X): (322،283)→(386،318). **Router** (دايري بأسهم X): (424،280)→(503،322). **Switch2:** (540،283)→(604،318). **Server tower:** (526،385)→(587،495).
- **الخطوط (INK 3px):** PC→Switch1 (300،240)→(345،290) · فروع Switch1: (322،305)→(282،312) و(335،318)→(302،383) · Switch1→Router (386،301)→(424،301) · فروع Router الأربعة: (440،282)→(428،250)، (488،282)→(500،250)، (440،320)→(428،345)، (488،320)→(500،345) · Router→Switch2 (503،301)→(540،301) · فروع Switch2 لفوق: (552،283)→(538،250) و(592،283)→(602،250) · Switch2→Server (570،318)→(565،385) · Switch2→Firewall (604،301)→(668،301).
- **لوح الـ Firewall:** متوازي أضلاع (647،12) (790،98) (790،565) (647،480)، تعبئة FW_PLANE، حد `#5E8FAD` 2px.
- **جوه الـ Firewall:** Router (668،283)→(745،322) + Server tower وراه (705،207)→(768،315). الاسم `Firewall` (Cairo 500، 32px) مركز (716،360).
- **الخط للإنترنت:** (745،301)→(948،301). **السحابة:** (940،215)→(1190،378) تعبئة FW_BLOB، جواها `Public` / `Internet` (Cairo 500، 32px) مركز (1064،297).
- **اسم الشبكة:** `Administered` / `network` (Cairo 500، 32px) مركز (408،562).
- **نص الشكل** (من (215،688)): `Figure 8.33` (Cairo 700، 34px، FIG_BLUE) ثم ` ♦ ` ثم `Firewall placement between the administered network and` وسطر تاني `the outside world` (Cairo 400، 32px، INK).
- **ممنوع:** «Activate Windows» والسهم «↔».

#### V6-S7 · 37.00 → 44.00 (7.0) · فريم 888 → 1056 · LAYOUT_D · CONT→S8
**العناصر:** Tag فوق شمال عند (100، 60): `Operational Security: Firewalls` (Kalam 700، 46px) — **عنوان شريحة 10** — وتحته «الأمن التشغيلي: جدران الحماية» (Cairo 500، 30px، MUTED) عند (100، 110). الجزء الشمال من الخريطة. ملاحظة مؤقتة «شبكة الشركة الداخلية» (Cairo 500، 28px، MUTED) تحت اسم الشبكة.

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | — | whoosh_soft |
| 0.30–1.10 | HandWrite الـ Tag | marker_loop مدة 0.80 |
| 1.15 | العربي fade | — |
| 1.30–1.90 | الـ blob يظهر (scale 0.9 → 1 + opacity) | whoosh_soft (−6 dB) |
| 2.00 | Pop الـ PC | pop_soft (−3 dB) |
| 2.20–2.40 | خط PC | pencil_loop مدة 0.20 |
| 2.45 | Pop Switch1 | pop_soft (−6 dB) |
| 2.60–2.80 | فروعه | pencil_loop مدة 0.20 |
| 2.85–3.05 | خط للراوتر | — |
| 3.05 | Pop الراوتر | pop_soft (−6 dB) |
| 3.20–3.40 | فروعه | pencil_loop مدة 0.20 |
| 3.45–3.65 | خط لـ Switch2 | — |
| 3.65 | Pop Switch2 | pop_soft (−6 dB) |
| 3.80–4.00 | فروعه + خط للسيرفر | pencil_loop مدة 0.20 |
| 4.05 | Pop السيرفر | pop_soft (−6 dB) |
| 4.40–5.00 | HandWrite `Administered network` | pencil_loop مدة 0.60 |
| 5.10 | الملاحظة fade | — |
| 6.70–7.00 | الملاحظة تختفي (الرسمة تفضل) | — |

**الكابشن:** «على الشمال الـ Administered network: شبكة الشركة الداخلية.»

#### V6-S8 · 44.00 → 51.00 (7.0) · فريم 1056 → 1224 · CONT ثم fade
| t | الحدث | الصوت |
|---|---|---|
| 0.20–0.70 | لوح الـ Firewall ينزل من فوق (translateY −700 → 0، easeOutBack 4%) | whoosh_soft (−6 dB) عند 0.20 + stamp_thud عند 0.70 |
| 0.80 | Pop الراوتر والسيرفر اللي جوه الـ Firewall | pop_soft (−6 dB) |
| 0.90–1.10 | خط Switch2 → Firewall | pencil_loop مدة 0.20 |
| 1.20–1.60 | HandWrite `Firewall` | pencil_loop مدة 0.40 |
| 1.70–2.30 | الخط للإنترنت | pencil_loop مدة 0.60 |
| 2.30–2.80 | السحابة + `Public Internet` | marker_loop مدة 0.50 |
| 2.90–4.30 | WordReveal نص الشكل | pencil_loop مدة 1.40 (−6 dB) |
| 4.40–5.10 | نقطة خضرا من الإنترنت تعدّي الـ Firewall وتدخل الشبكة | — |
| 5.00–5.40 | نقطة حمرا من الإنترنت تقف عند اللوح وتطلع ✗ | bonk_soft عند 5.40 |
| 6.67–7.00 | fade | — |

**الكابشن:** «الـ Firewall في النص: أي traffic للـ Public Internet يعدّي عليه.»

#### V6-S9 · 51.00 → 55.50 (4.5) · فريم 1224 → 1332 · LAYOUT_P
**العناصر:** Tag فوق شمال عند (60، 40): «Figure 8.33 – Slide 10» (Kalam 700، 36px). PinnedPhoto `s10_fig8_33_clean` في x 260 → 1660، y 100 → 887، ميل 0. RedEllipse حوالين منطقة لوح الـ Firewall (46–59%، 0–75%).

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | — | whoosh_soft |
| 0.30–0.65 | دخول الصورة | page_turn |
| 0.90–1.30 | HandWrite الـ Tag | pencil_loop مدة 0.40 |
| 1.50–2.00 | RedEllipse | marker_loop مدة 0.50 |
| 4.17–4.50 | fade | — |

**الكابشن:** «ودي Figure 8.33 زي ما هي في Slide 10.»

#### V6-S10 · 55.50 → 67.50 (12.0) · فريم 1332 → 1620 · LAYOUT_R (بطاقة المذاكرة)
**العناصر:** تاجات `Slide 9` `Slide 10`.
- **عمود النص:**
  1. تاج `Slide 9`
  2. عنوان: `Firewall`
  3. فقرة: `A firewall is a software or hardware-based network security system that controls incoming and outgoing network traffic by analyzing data packets and determining whether they should be allowed through or not. Firewall protection is essential to secure a network from external threats.`
  4. فقرة: `In this section, we will discuss how firewalls work and their role in network management.`
  5. تاج `Slide 10`
  6. عنوان: `Operational Security: Firewalls`
  7. `Figure 8.33 ♦ Firewall placement between the administered network and the outside world` + «(من جوه الصورة)» — الـ ♦ مرسوم SVG.
- تظليل ثابت: `network security system` · `analyzing data packets` · `external threats`.
- **مصطلحات مهمة (8 صفوف):**
  1. `Firewall` — جدار الحماية
  2. `network security system` — نظام أمان للشبكة
  3. `incoming / outgoing network traffic` — الترافيك الداخل / الخارج
  4. `data packets` — حزم البيانات
  5. `allowed through` — مسموح تعدّي
  6. `external threats` — التهديدات الخارجية
  7. `Operational Security` — الأمن التشغيلي
  8. `Administered network · Public Internet` — شبكتنا الداخلية · الإنترنت العام
- **التوقيت:** التوقيت الموحّد (5.4).
- الـ fade من 11.67 لـ 12.00 (وقت المشهد).

**الكابشن:** «ده نص المحاضرة كامل... وقّف الفيديو وذاكره براحتك.»

#### V6-S11 · 67.50 → 73.50 (6.0) · فريم 1620 → 1764 · LAYOUT_F (الشخصية يمين)
**العناصر:** `Firewall` (Caveat Brush، 150px) مركز (820، 290) + RedEllipse (rx 340، ry 120). «جدار الحماية» (Aref Ruqaa، 80px) مركز (820، 470). جملة متظللة (Cairo 600، 40px، RTL) مركز (820، 600): «بيعدّي الـ traffic السليم... ويمنع الـ external threats». lock (110px) مركز (380، 290). يمين: لوح زجاج (FW_PLANE) x 1300 → 1400، y 150 → 950؛ الهكر H2 وراه مركز x 1640؛ «اتمنع!» (T_EXCLAIM 64px) مركز (1640، 200).

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | — | whoosh_soft |
| 0.40–1.30 | HandWrite المصطلح | marker_loop مدة 0.90 |
| 1.35–1.95 | RedEllipse | marker_loop مدة 0.60 |
| 1.95 | — | chime_success |
| 2.10–2.60 | HandWrite العربي | pencil_loop مدة 0.50 |
| 2.70–2.95 | لوح الزجاج ينزل | stamp_thud (−6 dB) عند 2.95 |
| 3.00 | الهكر يدخل من اليمين ويخبط في الزجاج عند 3.35 | glass_knock عند 3.35 |
| 3.60–4.30 | WordReveal الجملة | pencil_loop مدة 0.70 (−3 dB) |
| 4.35–4.70 | التظليل | highlight_swipe |
| 4.75 | Pop القفل | lock_click |
| 4.95 | Pop «اتمنع!» | pop_soft (−3 dB) |
| 5.30–6.00 | fade النهاية | — |

**الكابشن:** «وده اسمه Firewall.»

**✔ قائمة قبول V6**
- [ ] ظاهر حرفيًا وبيتجمع جملة واحدة: `A firewall is a software or hardware-based network security system` + `that controls incoming and outgoing network traffic` + `by analyzing data packets and determining whether they should be allowed through or not.` · `Firewall protection is essential to secure a network from external threats.` · `In this section, we will discuss` + `how firewalls work` + `and their role in network management.` · `Firewall` · `Operational Security: Firewalls` · `Administered network` · `Public Internet` · `Figure 8.33 ♦ Firewall placement between the administered network and the outside world`.
- [ ] الصورتين s09 و s10 (`_clean`) ظاهرين، ومفيش «Activate Windows» في أي فريم.
- [ ] بطاقة المذاكرة V6-S10 فيها نص شرايح 9 و10 كامل وبالترتيب، والـ ♦ مرسوم SVG.
- [ ] المدة 73.5 ث، و11 مشهد.

---

### المرحلة 7 — V7 «SAN & NAS Storage Networks» · Slides 11, 12, 13 · المدة 68.0 ث (1632 فريم) · 10 مشاهد
**الشخصيات:** كريم (K1، K5)، عمر (O3). **الصور:** s11_storage_media، s12_conduant_ltx3 (×2)، s13_compellent_racks (×2). **الملف:** `07_SAN_NAS_Storage_Networks.mp4`.

#### V7-S1 · 0.00 → 6.00 (6.0) · فريم 0 → 144 · LAYOUT_H (صورة شمال + شخصية يمين)
**العناصر:** PinnedPhoto `s11_storage_media` في x 120 → 580، y 200 → 890، ميل −1.5°. لافتات على الصورة بأسهم (Kalam 700، 28px): `CD` · `Memory cards` · `FinePix camera` · `Coin` + «(للمقارنة بالحجم)» (Cairo 500، 22px). عنوان رقعة سطرين (80px) في x 640 → 1300، y 100 → 330: «CD وكارت ميموري...» / «يكفّوا شركة؟!» (الـ `CD` بخط Caveat Brush) + خط أحمر تحت السطر التاني عند y 350. كريم K1 مركز x 1580 + بيضاوي «كريم المتدرب». في الآخر X أحمر خفيف (خطين RED 8px، شفافية 0.7) فوق الصورة.

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | دخول كريم | whoosh_soft |
| 0.30–0.65 | دخول الصورة | page_turn |
| 0.80–2.00 | HandWrite العنوان (0.60 لكل سطر) | marker_loop مدة 1.20 |
| 2.05–2.40 | الخط الأحمر | marker_loop مدة 0.35 |
| 2.60 / 2.95 / 3.30 / 3.65 | اللافتات (fade + سهم 0.25) | pencil_loop مدة 0.25 (−6 dB) كل واحدة |
| 4.10–4.50 | الـ X الأحمر | marker_loop مدة 0.40 |
| 4.50 | — | bonk_soft (−6 dB) |
| 4.60–4.95 | بيضاوي الاسم | pencil_loop مدة 0.35 (−6 dB) |
| 5.67–6.00 | fade | — |

**الكابشن:** «CD وكارت ميموري ينفعوا لشخص... لكن الشركات محتاجة storage شبكي!»

#### V7-S2 · 6.00 → 12.50 (6.5) · فريم 144 → 300 · LAYOUT_D · CONT→S3
**العناصر:** `SAN & NAS Storage Networks` (Kalam 700، 64px) مركز (960، 130) — **عنوان شريحة 11** — و«شبكات التخزين» (Aref Ruqaa، 56px) مركز (960، 225). Box A (كارت) x 140 → 860، y 300 → 520 جواه في النص `Storage Area Network (SAN)` (Cairo 700، 44px) و«شبكة تخزين» (Cairo 500، 30px، MUTED). كلمة `and` (Kalam 700، 44px) مركز (960، 410). Box B x 1060 → 1780، y 300 → 520 جواه `Network Attached Storage (NAS)` و«تخزين متوصل بالشبكة».

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | — | whoosh_soft |
| 0.30–1.30 | HandWrite العنوان | marker_loop مدة 1.00 |
| 1.35–1.85 | HandWrite العربي | pencil_loop مدة 0.50 |
| 2.00–2.50 | رسم Box A | pencil_loop مدة 0.50 |
| 2.55–3.25 | WordReveal نص A | pencil_loop مدة 0.70 (−3 dB) |
| 3.30 | عربي A fade | — |
| 3.50–3.75 | `and` | pencil_loop مدة 0.25 (−6 dB) |
| 3.90–4.40 | رسم Box B | pencil_loop مدة 0.50 |
| 4.45–5.15 | WordReveal نص B | pencil_loop مدة 0.70 (−3 dB) |
| 5.20 | عربي B fade | — |
| 5.40–5.70 | تظليل `(SAN)` | highlight_swipe |
| 5.75–6.05 | تظليل `(NAS)` | highlight_swipe |

**الكابشن:** «SAN = Storage Area Network... وNAS = Network Attached Storage.»

#### V7-S3 · 12.50 → 18.50 (6.0) · فريم 300 → 444 · CONT ثم fade
**العناصر:** تحت الصناديق (Cairo 600، 42px، LTR، سطرين في النص، y 600 → 720): `are two different storage architectures that are used to store and manage data in computer networks.` + تظليل على `two different storage architectures`. «يعني طريقتين مختلفتين لتخزين وإدارة الداتا في الشبكات» (Cairo 500، 34px) مركز (960، 810).

| t | الحدث | الصوت |
|---|---|---|
| 0.00–0.20 | الكابشن الجديد | — |
| 0.30–1.90 | WordReveal الجملة | pencil_loop مدة 1.60 (−3 dB) |
| 2.00–2.40 | التظليل | highlight_swipe |
| 2.60–3.40 | WordReveal العربي | pencil_loop مدة 0.80 (−6 dB) |
| 3.60 | الصندوقين bounce (scale 1.02) | tick_soft (−3 dB) |
| 5.67–6.00 | fade | — |

**الكابشن:** «الاتنين storage architectures لتخزين وإدارة الـ data في الشبكات.»

#### V7-S4 · 18.50 → 25.00 (6.5) · فريم 444 → 600 · LAYOUT_S · [توضيح]
**العناصر:**
- الشمال: `NAS` (Caveat Brush، 110px) مركز (480، 170)؛ `File-level` (Kalam 700، 40px) عند (480، 260)؛ «بيشارك files على الـ LAN» (Cairo 500، 32px) عند (480، 320). رسمة: nas_box (220×160) مركز (480، 520) وطالع منه 3 folder؛ خط LAN أفقي عند y 700 من x 200 لـ 760؛ 3 desktop_pc متعلقين فيه عند x 260 و480 و700 (y 780).
- اليمين: `SAN` مركز (1440، 170)؛ `Block-level` عند (1440، 260)؛ «بيدّي السيرفرات blocks على شبكة مخصوصة» عند (1440، 320). رسمة: 2 server_tower عند x 1300 و1580 (y 460)؛ مستطيل متقطع بأركان مدوّرة مكتوب جواه `SAN` (x 1180 → 1700، y 560 → 680) فيه خطوط متقاطعة؛ 3 storage_cylinder مركز (1440، 790) + block_grid جنبهم.

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | — | whoosh_soft |
| 0.30–0.70 | الخط الفاصل | pencil_loop مدة 0.40 |
| 0.80–1.40 | HandWrite `NAS` | marker_loop مدة 0.60 |
| 1.45–1.85 | HandWrite `File-level` | pencil_loop مدة 0.40 |
| 1.90–2.40 | WordReveal العربي | pencil_loop مدة 0.50 (−3 dB) |
| 2.50 | Pop الـ NAS box | pop_soft |
| 2.70 | الفولدرات (بفرق 0.10) | pop_soft (−6 dB) عند 2.70 |
| 3.05–3.35 | الـ LAN والأجهزة | pencil_loop مدة 0.30 |
| 3.45–4.05 | HandWrite `SAN` | marker_loop مدة 0.60 |
| 4.10–4.50 | HandWrite `Block-level` | pencil_loop مدة 0.40 |
| 4.55–5.05 | WordReveal العربي | pencil_loop مدة 0.50 (−3 dB) |
| 5.10 | Pop السيرفرين | pop_soft |
| 5.30–5.60 | المستطيل المتقطع | pencil_loop مدة 0.30 |
| 5.65 | Pop التخزين والـ blocks | pop_soft (−6 dB) |
| 6.17–6.50 | fade | — |

**الكابشن:** «الـ NAS بيشارك files على الـ LAN... والـ SAN بيدّي blocks.»

#### V7-S5 · 25.00 → 31.50 (6.5) · فريم 600 → 756 · LAYOUT_C
**العناصر:** العنوان `In this section, we will explore`. الصفوف:

| الإنجليزي (حرفي) | العربي |
|---|---|
| `the differences between SAN and NAS,` | الفرق بين SAN وNAS |
| `their benefits and disadvantages,` | المميزات والعيوب |
| `and their role in network management.` | ودورهم في إدارة الشبكات |

عمر O3 يمين + بيضاوي «م. عمر» (أول ظهور له في V7).
**توقيت الصف (T):** T → T+0.55 WordReveal (pencil_loop مدة 0.55، −3 dB) ← T+0.55 CheckMark (check_soft) ← T+0.80 → T+1.10 تظليل (highlight_swipe، −3 dB) ← T+0.85 العربي.

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | دخول عمر | whoosh_soft |
| 0.35–0.95 | رسم الكارت | pencil_loop مدة 0.60 |
| 1.00–1.90 | العنوان + الخط | pencil_loop مدة 0.90 (−3 dB) |
| 2.00 / 3.20 / 4.40 | الصف 1 / 2 / 3 | زي التوقيت اللي فوق |
| 5.55–5.85 | بيضاوي الاسم | pencil_loop مدة 0.30 (−6 dB) |
| 6.17–6.50 | fade | — |

**الكابشن:** «هنعرف الفرق بينهم، والـ benefits والـ disadvantages، ودورهم.»

#### V7-S6 · 31.50 → 38.00 (6.5) · فريم 756 → 912 · LAYOUT_P · CONT→S7
**العناصر:** Tag1 فوق شمال عند (80، 50): `SAN & NAS Storage Networks` (Kalam 700، 38px) — **عنوان شريحة 12**. Tag2 بحد RED عند (80، 110): `Example of Storage Array` (Kalam 700، 44px). PinnedPhoto `s12_conduant_ltx3` (×2) في x 560 → 1640، y 190 → 910، ميل 0 (جوه Camera). قوس أحمر على الـ 4 هاردات الشمال ولافتة `4 hard drives` (Kalam 700، 36px) عند (300، 520)؛ قوس على الـ 4 اليمين ولافتة `4 hard drives` عند (1700، 330)؛ Tag `8 hard drives` عند (1500، 110).

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | — | whoosh_soft |
| 0.30–0.80 | HandWrite Tag1 | pencil_loop مدة 0.50 |
| 0.85–1.45 | HandWrite Tag2 + حده الأحمر | marker_loop مدة 0.60 |
| 1.50–1.85 | دخول الصورة | page_turn |
| 2.00 | — | hdd_whir (−3 dB) |
| 2.10–2.50 | Spotlight الهاردات الشمال + القوس | marker_loop مدة 0.40 |
| 2.55 | اللافتة | pencil_loop مدة 0.30 (−6 dB) |
| 3.10–3.50 | Spotlight الهاردات اليمين + القوس | marker_loop مدة 0.40 |
| 3.55 | اللافتة | pencil_loop مدة 0.30 (−6 dB) |
| 4.10 | الـ Spotlight يتشال + Pop `8 hard drives` | pop_soft |

**الكابشن:** «Example of Storage Array: 8 hard drives شغالين كوحدة تخزين واحدة.»

#### V7-S7 · 38.00 → 44.00 (6.0) · فريم 912 → 1056 · CONT ثم fade
**العناصر:** لافتات S6 تختفي (الـ Tags والصورة يفضلوا). كروت ملاحظات (SketchBox، المصطلح Kalam 700 30px + العربي Cairo 500 24px): الشمال x 120 → 520 عند y 300 و470 و640؛ اليمين x 1660 → 1900 عند y 400 و600.
- R_BOARD ← `Controller board` / «بيدير الهاردات» (شمال 1)
- R_FANS ← `Cooling fans` / «تبريد» (شمال 2)
- R_PORTS ← `Network ports` / «منافذ الشبكة» (يمين 1)
- R_LCD ← `Display` / «شاشة حالة» (شمال 3)
- R_BRAND ← `CONDUANT` / `Big River LTX3` (يمين 2) — زي المكتوب على الجهاز بالظبط

| t | الحدث | الصوت |
|---|---|---|
| 0.00–0.25 | لافتات S6 تختفي | — |
| 0.30 / 1.30 / 2.30 / 3.30 / 4.30 | Spotlight R_BOARD / R_FANS / R_PORTS / R_LCD / R_BRAND + مستطيل أحمر (0.35) | marker_loop مدة 0.35 (−3 dB) |
| +0.40 | Pop الكارت | beep_soft |
| +0.45 → +0.85 | نص الكارت | pencil_loop مدة 0.40 (−6 dB) |
| 5.67–6.00 | fade | — |

**الكابشن:** «في النص controller board بيدير الهاردات... وقدّام ports للشبكة.»

#### V7-S8 · 44.00 → 51.00 (7.0) · فريم 1056 → 1224 · LAYOUT_P
**العناصر:** نفس الـ Tag1 (`SAN & NAS Storage Networks`) والـ Tag2 (`Example of Storage Array`) — **عناوين شريحة 13**. PinnedPhoto `s13_compellent_racks` (×2) في x 700 → 1260، y 170 → 930، ميل 0. قوس أحمر على يمين الصورة على رفوف الهاردات ولافتة «مئات الـ hard drives» (Cairo 600، 34px) عند (1300، 600) يبدأ منها؛ سهم لـ R_CTRL ولافتة `Storage controllers` (Kalam 700، 32px) عند (300، 230)؛ RedEllipse حوالين R_KVM ولافتة `KVM console` + «شاشة + كيبورد للإدارة» عند (300، 450).

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | — | whoosh_soft |
| 0.30–0.65 | دخول الصورة | page_turn |
| 0.90–1.30 | القوس | marker_loop مدة 0.40 |
| 1.40 | لافتته | pencil_loop مدة 0.30 (−6 dB) |
| 2.00–2.40 | سهم الكنترولر + لافتته | pencil_loop مدة 0.40 |
| 2.90–3.40 | RedEllipse الـ KVM | marker_loop مدة 0.50 |
| 3.45 | لافتة الـ KVM | pencil_loop مدة 0.35 (−6 dB) |
| 3.50–4.30 | — | typing_soft مدة 0.80 (−3 dB) |
| 4.40 | شاشة الـ KVM تنوّر (glow) | beep_soft (−3 dB) |
| 6.67–7.00 | fade | — |

**الكابشن:** «ولما الداتا تكبر: كبائن Storage Array بمئات الهاردات وشاشة إدارة.»

#### V7-S9 · 51.00 → 62.00 (11.0) · فريم 1224 → 1488 · LAYOUT_R (بطاقة المذاكرة)
**العناصر:** تاجات `Slide 11` `Slide 12` `Slide 13`.
- **عمود النص:**
  1. تاج `Slide 11`
  2. عنوان: `SAN & NAS Storage Networks`
  3. فقرة: `Storage Area Network (SAN) and Network Attached Storage (NAS) are two different storage architectures that are used to store and manage data in computer networks.`
  4. فقرة: `In this section, we will explore the differences between SAN and NAS, their benefits and disadvantages, and their role in network management.`
  5. تاج `Slide 12`
  6. عنوان: `SAN & NAS Storage Networks`
  7. `Example of Storage Array`
  8. تاج `Slide 13`
  9. عنوان: `SAN & NAS Storage Networks`
  10. `Example of Storage Array`
- تظليل ثابت: `Storage Area Network (SAN)` · `Network Attached Storage (NAS)` · `two different storage architectures`.
- **مصطلحات مهمة (7 صفوف):**
  1. `SAN (Storage Area Network)` — شبكة تخزين مخصوصة للسيرفرات
  2. `NAS (Network Attached Storage)` — تخزين متوصل بالشبكة
  3. `storage architectures` — طرق تنظيم التخزين
  4. `Storage Array` — مصفوفة تخزين: هاردات كتير كوحدة واحدة
  5. `SAN: block-level` — بيدّي السيرفرات blocks [توضيح]
  6. `NAS: file-level` — بيشارك files على الـ LAN [توضيح]
  7. `KVM console` — شاشة + كيبورد للإدارة
- **التوقيت:** التوقيت الموحّد (5.4).
- الـ fade من 10.67 لـ 11.00 (وقت المشهد).

**الكابشن:** «ده نص المحاضرة كامل... وقّف الفيديو وذاكره براحتك.»

#### V7-S10 · 62.00 → 68.00 (6.0) · فريم 1488 → 1632 · LAYOUT_F
**العناصر:** `SAN & NAS` (Caveat Brush، 150px) مركز (1100، 260) و`Storage Networks` (Caveat Brush، 70px) مركز (1100، 370)؛ RedEllipse مركز (1100، 300)، rx 470، ry 170. «شبكات التخزين» (Aref Ruqaa، 72px) مركز (1100، 530). جملة متظللة (Cairo 600، 40px، RTL) مركز (1100، 650): «SAN = blocks للسيرفرات • NAS = files على الشبكة». كريم K5 تحت شمال + «فهمت!». storage_cylinder (3 فوق بعض) مركز (1770، 290).

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | — | whoosh_soft |
| 0.40–1.20 | HandWrite `SAN & NAS` | marker_loop مدة 0.80 |
| 1.20–1.80 | HandWrite `Storage Networks` | marker_loop مدة 0.60 |
| 1.85–2.45 | RedEllipse | marker_loop مدة 0.60 |
| 2.45 | — | chime_success |
| 2.60–3.10 | HandWrite العربي | pencil_loop مدة 0.50 |
| 2.90 | دخول كريم | — |
| 3.20–4.00 | WordReveal الجملة | pencil_loop مدة 0.80 (−3 dB) |
| 4.05–4.40 | التظليل | highlight_swipe |
| 4.45 | Pop الأيقونة | pop_soft |
| 4.65 | Pop «فهمت!» | pop_soft (−3 dB) |
| 5.30–6.00 | fade النهاية | — |

**الكابشن:** «ودول الـ SAN & NAS Storage Networks.»

**✔ قائمة قبول V7**
- [ ] ظاهر حرفيًا وبيتجمع جملة واحدة: `Storage Area Network (SAN)` + `and` + `Network Attached Storage (NAS)` + `are two different storage architectures that are used to store and manage data in computer networks.` · `In this section, we will explore` + `the differences between SAN and NAS,` + `their benefits and disadvantages,` + `and their role in network management.` · `SAN & NAS Storage Networks` (شرايح 11 و12 و13) · `Example of Storage Array` (مرتين: S6 وS8).
- [ ] بطاقة المذاكرة V7-S9 فيها نص شرايح 11 و12 و13 كامل وبالترتيب.
- [ ] الصور s11 و s12 و s13 ظاهرين. المدة 68.0 ث، و10 مشاهد.

---

### المرحلة 8 — V8 «Software Defined Networks (SDN)» · Slides 14, 15 · المدة 78.5 ث (1884 فريم) · 12 مشهد
**الشخصيات:** كريم (K3، K5)، عمر (O3، O4، O6). **الصور:** s14_network_3d، s15_traditional_vs_sdn (Vector + الأصلية ×3). **الملف:** `08_SDN.mp4`.

#### V8-S1 · 0.00 → 5.50 (5.5) · فريم 0 → 132 · LAYOUT_H (الشخصية يمين)
**العناصر:** كريم K3 مركز x 1520 + بيضاوي «كريم المتدرب». T_HOOK «كل جهاز نظبطه لوحده؟!» + خط أحمر. رسمة (x 220 → 1120، y 360 → 860): 6 أيقونات متفرقة (2 switch، router، firewall_wall صغيرة، 2 server_tower) وخطوط متلخبطة بينهم كلهم (INK 3px)، وعلى كل جهاز «!» صغيرة (T_EXCLAIM 48px).

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | دخول كريم | whoosh_soft |
| 0.40–1.40 | HandWrite العنوان | marker_loop مدة 1.00 |
| 1.45–1.80 | الخط الأحمر | marker_loop مدة 0.35 |
| 1.90–2.70 | الأجهزة Pop (بفرق 0.15) | pop_soft (−6 dB) عند 1.90 و2.35 |
| 2.80–3.40 | الخطوط المتلخبطة | pencil_loop مدة 0.60 |
| 3.50 | علامات «!» (بفرق 0.08) | boing_question |
| 4.00–4.35 | بيضاوي الاسم | pencil_loop مدة 0.35 |
| 5.17–5.50 | fade | — |

**الكابشن:** «فيها switches وrouters وfirewall وservers... نظبط كل واحد لوحده؟!»

#### V8-S2 · 5.50 → 13.00 (7.5) · فريم 132 → 312 · LAYOUT_P + Legend
**العناصر:** PinnedPhoto `s14_network_3d` في x 100 → 580، y 160 → 880، ميل 0. كارت x 640 → 1840، y 120 → 920، عنوانه «كل جهاز في الرسمة دي ليه إعداداته» (Cairo 600، 38px) مركز (1240، 180). 10 صفوف في عمودين (العمود 1 x 680 → 1240، العمود 2 x 1270 → 1820؛ الصفوف y = 270 + i × 120): الاسم **زي الصورة بالظبط** (Kalam 700، 32px) وتحته العربي (Cairo 500، 26px، MUTED):

| # | الاسم (حرفي) | العربي | منطقة الصورة |
|---|---|---|---|
| 1 | `SW Pubblico` | Switch ناحية الشبكة العامة (Pubblico = Public) | R_SWP |
| 2 | `Router VDF` | Router ناحية الإنترنت (متوصل بـ SW Pubblico) | R_RVDF |
| 3 | `Firewall + VPN gateway` | حماية + اتصال VPN آمن | R_FW |
| 4 | `SW DMZ` | Switch المنطقة المعزولة DMZ | R_DMZ |
| 5 | `Balancer` | Load balancer: بيوزّع الحمل | R_BAL |
| 6 | `SW LAN` | Switch الشبكة الداخلية | R_LAN |
| 7 | `MOXA` | جهاز MOXA متوصل بالشبكة | R_MOXA |
| 8 | `Morfeo` | سيرفر عليه أيقونة monitoring | R_MORF |
| 9 | `Cliente 1` | Client (Cliente = Client) | R_CL |
| 10 | `Cliente 2` | Client تاني | R_CL |

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | — | whoosh_soft |
| 0.30–0.65 | دخول الصورة | page_turn |
| 0.70–1.20 | رسم الكارت | pencil_loop مدة 0.50 |
| 1.25–1.85 | WordReveal عنوان الكارت | pencil_loop مدة 0.60 (−3 dB) |
| 2.00 + (i−1) × 0.48 | الصف i: Spotlight صغير على منطقته (0.25) + الصف يظهر (0.35) | pencil_loop مدة 0.30 (−8 dB) لكل صف |
| 7.17–7.50 | fade | — |

**الكابشن:** «كل جهاز هنا ليه إعداداته لوحده... والإدارة كده صعبة جدًا.»

#### V8-S3 · 13.00 → 20.00 (7.0) · فريم 312 → 480 · LAYOUT_A
**العناصر:** عمر O4 مركز x 400. كارت x 700 → 1840، y 120 → 910:
- `Software Defined Networks (SDN)` (Kalam 700، 54px) مركز (1270، 210) — **عنوان شريحة 14** — و«الشبكات المعرّفة بالبرمجيات» (Aref Ruqaa، 52px) مركز (1270، 300).
- الجملة (Cairo 600، 38px، LTR من x 760، 3–4 سطور، y 380 → 620): `Software-defined networking (SDN) is an architectural approach to network management that enables the centralized management of network infrastructures through software.` + تظليل على `centralized management` وعلى `through software`.
- أيقونة مركز (1270، 760): laptop عليه `</>` متوصل بخطوط متقطعة بـ 3 switch صغيرة.

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | دخول عمر | whoosh_soft |
| 0.35–0.95 | رسم الكارت | pencil_loop مدة 0.60 |
| 1.00–1.90 | HandWrite العنوان | marker_loop مدة 0.90 |
| 1.95–2.45 | HandWrite العربي | pencil_loop مدة 0.50 |
| 2.55–4.55 | WordReveal الجملة | pencil_loop مدة 2.00 (−3 dB) |
| 4.60–4.95 | تظليل `centralized management` | highlight_swipe |
| 5.00–5.35 | تظليل `through software` | highlight_swipe |
| 5.40 | — | lightbulb_ding |
| 5.45 | Pop الأيقونة | — |
| 5.70–6.00 | بيضاوي «م. عمر» | pencil_loop مدة 0.30 (−6 dB) |
| 6.67–7.00 | fade | — |

**الكابشن:** «SDN: نعمل centralized management للشبكة كلها through software.»

#### خريطة مقارنة Slide 15 (Vector) — مستخدمة في S4 → S8
> نفس ترتيب صورة الشريحة 15. التحويل من بكسل الصورة الأصلية (590×245): **الشمال X = 480 + (x − 147.5) × 3.14 ، اليمين X = 1440 + (x − 442.5) × 3.14 ، Y = 130 + y × 3.14**. الأرقام تحت **بعد التحويل** (إحداثيات الكادر).

- **الخط الفاصل:** INK 5px عند x 960 من y 130 لـ 900.
- **الشمال:** `Traditional Network` (Cairo 700، 44px) مركز (431، 202) · `Switch` (Kalam 700، 36px) مركز (255، 322) بسهم للسويتش TS1 · `Control Plane` (Kalam 700، 34px) مركز (758، 413) بسهم للوح الأحمر في TS1 · `Data Plane` مركز (770، 507) بسهم للوح الأزرق · السويتشات (trad_switch، عرض 280: لوح أحمر 70px فوق لوح أزرق 45px + جانب 3D، وعلى الوش الأحمر سهمين أبيض): TS1 (384، 497) · TS2 (196، 670) · TS3 (573، 680) · خطوط INK 5px بين التلاتة.
- **اليمين:** `Software-Defined Network` (Cairo 700، 44px) مركز (1464، 202) · `Programmable` / `Switch` (Kalam 700، 34px) مركز (1197، 350) بسهم للسويتش العلوي · `Controller` / `Machine` مركز (1542، 375) · controller_red (140×180، وش SDN_RED وجانب `#B3242B`) مركز (1784، 482) · السويتشات (prog_switch، لوح أزرق بس، وش `#9ED3EC` وجانب SDN_BLUE): (1401، 497) · (1181، 701) · (1605، 701) · خطوط INK 5px بينهم · خطوط منقطة SDN_DOT سُمك 5px (dash 4/12، أطراف مدوّرة) من الـ controller لكل سويتش.
- **ألوان السويتش التقليدي:** وش أحمر SDN_RED، جانب `#B3242B`، لوح أزرق SDN_BLUE، جانب `#3B8FBA`.

#### V8-S4 · 20.00 → 26.00 (6.0) · فريم 480 → 624 · LAYOUT_D · CONT→S5
**العناصر:** Tag فوق شمال عند (60، 40): `Software Defined Networks (SDN)` (Kalam 700، 36px) — **عنوان شريحة 15**. النص الشمال من الخريطة بس.

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | — | whoosh_soft |
| 0.30–0.70 | HandWrite الـ Tag | pencil_loop مدة 0.40 |
| 0.80–1.40 | الخط الفاصل (من فوق لتحت) | pencil_loop مدة 0.60 |
| 1.50–2.10 | HandWrite `Traditional Network` | marker_loop مدة 0.60 |
| 2.30 / 2.70 / 3.10 | Pop TS1 / TS2 / TS3 | pop_soft (−3 dB) كل واحد |
| 3.60–4.20 | الخطوط بينهم | pencil_loop مدة 0.60 |
| 4.30–4.70 | `Switch` + سهمه | pencil_loop مدة 0.40 |

**الكابشن:** «في الـ Traditional Network: كل Switch شايل العقل والشغل مع بعض.»

#### V8-S5 · 26.00 → 32.00 (6.0) · فريم 624 → 768 · CONT→S6
**العناصر:** ملاحظات مؤقتة (برة الكاميرا، Cairo 500، 28px) تحت كل اسم: «العقل: بيقرّر الـ traffic يروح فين» تحت `Control Plane`، و«الشغل: بينقل الـ packets فعلًا» تحت `Data Plane`.

| t | الحدث | الصوت |
|---|---|---|
| 0.00–0.60 | Camera: TS1 (384، 497) يروح لـ (700، 450)، scale 1 → 1.8 | zoom_in |
| 0.80–1.20 | `Control Plane` + سهمه | pencil_loop مدة 0.40 |
| 1.20 | Glow على اللوح الأحمر | pop_soft (−3 dB) |
| 1.40–2.10 | الملاحظة 1 | pencil_loop مدة 0.70 (−6 dB) |
| 2.40–2.80 | `Data Plane` + سهمه | pencil_loop مدة 0.40 |
| 2.80 | Glow على اللوح الأزرق | pop_soft (−3 dB) |
| 3.00–3.70 | الملاحظة 2 | pencil_loop مدة 0.70 (−6 dB) |
| 5.00–5.20 | الملاحظات تختفي (الأسامي تفضل) | — |
| 5.20–5.80 | Camera ترجع scale 1 | whoosh_soft (−6 dB) |

**الكابشن:** «Control Plane = العقل اللي بيقرّر... وData Plane = بينقل الداتا.»

#### V8-S6 · 32.00 → 38.00 (6.0) · فريم 768 → 912 · CONT→S7
**العناصر:** «!» (T_EXCLAIM 70px) فوق كل سويتش تقليدي؛ gear صغيرة بتلف على كل لوح أحمر؛ laptop صغير (بتاع كريم) بيروح من سويتش للتاني؛ ملاحظة مؤقتة «كل switch لازم يتظبط لوحده» (Cairo 500، 32px) مركز (480، 840).

| t | الحدث | الصوت |
|---|---|---|
| 0.00–0.20 | الكابشن الجديد | — |
| 0.30 / 0.60 / 0.90 | «!» Pop على TS1 / TS2 / TS3 | pop_soft (−3 dB) |
| 1.20–2.40 | الـ gears تلف (360° في 1.2 ث) | — |
| 1.40–3.80 | اللابتوب يتنقل (حركة 0.3 + وقفة 0.5) ويقف عند 1.70 و2.50 و3.30 | typing_soft مدة 0.50 (−6 dB) عند كل وقفة |
| 4.00 | — | warn_soft (−3 dB) |
| 4.20 | الملاحظة fade | — |
| 5.70–6.00 | «!» واللابتوب والملاحظة يختفوا (السويتشات تفضل) | — |

**الكابشن:** «كل switch بيفكّر لوحده... وأي تغيير لازم تظبط كل جهاز بإيدك!»

#### V8-S7 · 38.00 → 45.00 (7.0) · فريم 912 → 1080 · CONT→S8
**العناصر:** النص اليمين من الخريطة. **نسخ شبحية** من الألواح الحمرا التلاتة بتوع السويتشات الشمال (الأصل يفضل مكانه زي الصورة الأصلية) بتطلع لفوق 30px، وبعدين تطير في منحنيات bezier لمكان الـ controller وتصغر لـ 0.5 وتندمج.

| t | الحدث | الصوت |
|---|---|---|
| 0.00–0.20 | الكابشن الجديد | — |
| 0.30–0.90 | HandWrite `Software-Defined Network` | marker_loop مدة 0.60 |
| 1.00 / 1.30 / 1.60 | Pop السويتشات الزرقا التلاتة | pop_soft (−3 dB) كل واحد |
| 1.90–2.30 | الخطوط بينهم | pencil_loop مدة 0.40 |
| 2.50–2.80 | النسخ الشبحية تطلع | whoosh_soft |
| 2.80–3.80 | تطير وتندمج | — |
| 3.80 | الـ Controller Machine يظهر (scale 0.6 → 1.05 → 1) | stamp_thud |
| 4.10–4.60 | `Controller Machine` | pencil_loop مدة 0.50 |

**الكابشن:** «في الـ SDN جمعنا الـ Control Plane في Controller Machine واحدة.»

#### V8-S8 · 45.00 → 51.00 (6.0) · فريم 1080 → 1224 · CONT ثم fade
| t | الحدث | الصوت |
|---|---|---|
| 0.00–0.20 | الكابشن الجديد | — |
| 0.30–1.30 | 3 خطوط منقطة من الـ controller (كل واحد 0.4، بفرق 0.3) | pencil_loop مدة 1.00 (−3 dB) |
| 1.50–1.90 | `Programmable Switch` + سهمه | pencil_loop مدة 0.40 |
| 2.10 / 2.90 / 3.70 | موجة نبضات (دواير SDN_DOT نص قطرها 8 ماشية من الـ controller لكل سويتش في 0.5) | signal_pips (−3 dB) كل موجة |
| 4.50 | السويتشات الزرقا bounce صغير | tick_soft (−3 dB) |
| 5.67–6.00 | fade | — |

**الكابشن:** «والـ Programmable Switches بتنفّذ أوامر الـ Controller على طول.»

#### V8-S9 · 51.00 → 55.50 (4.5) · فريم 1224 → 1332 · LAYOUT_P
**العناصر:** Tag فوق شمال عند (60، 60): `Software Defined Networks (SDN)` (Kalam 700، 36px). PinnedPhoto `s15_traditional_vs_sdn` (×3) في x 210 → 1710، y 170 → 793، ميل 0. RedEllipse حوالين منطقة `Controller Machine` (74–98%، 22–60%).

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | — | whoosh_soft |
| 0.30–0.65 | دخول الصورة | page_turn |
| 0.90–1.30 | HandWrite الـ Tag | pencil_loop مدة 0.40 |
| 1.60–2.10 | RedEllipse | marker_loop مدة 0.50 |
| 4.17–4.50 | fade | — |

**الكابشن:** «ودي نفس المقارنة اللي في Slide 15 بالظبط.»

#### V8-S10 · 55.50 → 61.50 (6.0) · فريم 1332 → 1476 · LAYOUT_C
**العناصر:** العنوان `In this section, we will discuss`. الصفوف:

| الإنجليزي (حرفي) | العربي |
|---|---|
| `how SDN works,` | بتشتغل إزاي |
| `its benefits,` | فوايدها |
| `and its role in network management.` | ودورها في إدارة الشبكات |

**توقيت الصف (T):** T → T+0.50 WordReveal (pencil_loop مدة 0.50، −3 dB) ← T+0.50 CheckMark (check_soft) ← T+0.75 → T+1.05 تظليل (highlight_swipe، −3 dB) ← T+0.80 العربي.

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | دخول عمر O3 | whoosh_soft |
| 0.35–0.95 | رسم الكارت | pencil_loop مدة 0.60 |
| 1.00–1.90 | العنوان + الخط | pencil_loop مدة 0.90 (−3 dB) |
| 2.00 / 3.15 / 4.30 | الصف 1 / 2 / 3 | زي التوقيت اللي فوق |
| 5.45 | اللمعة | — |
| 5.67–6.00 | fade | — |

**الكابشن:** «هنعرف SDN بتشتغل إزاي، وفوايدها، ودورها في الـ network management.»

#### V8-S11 · 61.50 → 71.50 (10.0) · فريم 1476 → 1716 · LAYOUT_R (بطاقة المذاكرة)
**العناصر:** تاجات `Slide 14` `Slide 15`.
- **عمود النص:**
  1. تاج `Slide 14`
  2. عنوان: `Software Defined Networks (SDN)`
  3. فقرة: `Software-defined networking (SDN) is an architectural approach to network management that enables the centralized management of network infrastructures through software.`
  4. فقرة: `In this section, we will discuss how SDN works, its benefits, and its role in network management.`
  5. تاج `Slide 15`
  6. عنوان: `Software Defined Networks (SDN)`
  7. الصورة `s15_traditional_vs_sdn` (×3) بحد INK 3px، ارتفاعها 240، في نص العمود + تحتها «(رسمة الشريحة)».
- تظليل ثابت: `centralized management` · `through software`.
- **مصطلحات مهمة (7 صفوف):**
  1. `SDN (Software-defined networking)` — الشبكات المعرّفة بالبرمجيات
  2. `centralized management` — إدارة مركزية من مكان واحد
  3. `Control Plane` — العقل: بيقرّر الـ traffic يروح فين
  4. `Data Plane` — الشغل: بينقل الـ packets فعلًا
  5. `Traditional Network` — كل switch فيه Control Plane + Data Plane
  6. `Controller Machine` — جهاز واحد فيه الـ Control Plane لكل الشبكة
  7. `Programmable Switch` — switch بينفّذ أوامر الـ Controller
- **التوقيت:** التوقيت الموحّد (5.4).
- الـ fade من 9.67 لـ 10.00 (وقت المشهد).

**الكابشن:** «ده نص المحاضرة كامل... وقّف الفيديو وذاكره براحتك.»

#### V8-S12 · 71.50 → 78.50 (7.0) · فريم 1716 → 1884 · LAYOUT_F (الختام الكبير للسلسلة)
**العناصر:**
- `SDN` (Caveat Brush، 190px) مركز (960، 230) + RedEllipse (rx 260، ry 130).
- `Software-Defined Networking` (Caveat Brush، 64px) مركز (960، 380).
- «الشبكات المعرّفة بالبرمجيات» (Aref Ruqaa، 64px) مركز (960، 480).
- جملة متظللة (Cairo 600، 38px، RTL) مركز (960، 590): «الـ Control Plane في Controller واحد = إدارة مركزية through software».
- صف مراجعة الـ Agenda عند y 720: 7 checkboxes (40px) بعلامات صح حمرا، من x 360 لـ 1560 بفرق 200، وتحت كل واحد اسم صغير (Kalam 700، 20px): `Datacenters` · `Virtualization` · `Multimedia` · `Network management` · `Firewall` · `SAN & NAS` · `SDN`.
- عمر O6 تحت شمال (مركز x 200، ارتفاع 600) وكريم K5 تحت يمين (مركز x 1720، ارتفاع 600).

| t | الحدث | الصوت |
|---|---|---|
| 0.00 | — | whoosh_soft |
| 0.40–1.10 | HandWrite `SDN` | marker_loop مدة 0.70 |
| 1.15–1.75 | RedEllipse | marker_loop مدة 0.60 |
| 1.75 | — | chime_success (−3 dB) |
| 1.90–2.60 | HandWrite `Software-Defined Networking` | marker_loop مدة 0.70 (−3 dB) |
| 2.65–3.15 | HandWrite العربي | pencil_loop مدة 0.50 |
| 3.20 | دخول عمر وكريم (كل واحد من ناحيته) | — |
| 3.40–4.20 | WordReveal الجملة | pencil_loop مدة 0.80 (−3 dB) |
| 4.25–4.60 | التظليل | highlight_swipe |
| 4.70–5.60 | الـ 7 checkboxes + العلامات (بفرق 0.13) | finale_arp عند 4.70 |
| 5.70 | لمعة فوق الاتنين | — |
| 6.30–7.00 | fade النهاية | — |

**الكابشن:** «وده اسمه SDN... وكده خلّصنا الـ Overview بتاع Lecture 1 كله!»

**✔ قائمة قبول V8**
- [ ] ظاهر حرفيًا: `Software Defined Networks (SDN)` (S3 وS4 وS9) · `Software-defined networking (SDN) is an architectural approach to network management that enables the centralized management of network infrastructures through software.` · `In this section, we will discuss` + `how SDN works,` + `its benefits,` + `and its role in network management.` · كل أسامي صورة s14 العشرة · كل أسامي s15: `Traditional Network` · `Switch` · `Control Plane` · `Data Plane` · `Software-Defined Network` · `Programmable Switch` · `Controller Machine`.
- [ ] بطاقة المذاكرة V8-S11 فيها نص شرايح 14 و15 كامل وبالترتيب.
- [ ] الصورتين s14 و s15 ظاهرين. المدة 78.5 ث، و12 مشهد.

---

### المرحلة 9 — المراجعة النهائية والتسليم
> لو بتسلّم فيديو واحد: نفّذ الخطوات دي على الفيديو ده بس (شوف «لو المطلوب فيديو واحد بس» أول قسم 9).

1. شغّل `npx tsx scripts/check_coverage.ts all` (أو `V6` مثلًا لفيديو واحد — ملحق D) ← لازم يطبع `ALL 100% COVERED` ومفيش ولا سطر `MISSING`. (لو `tsx` مش متاح: Node 22+ بـ `node --experimental-strip-types scripts/check_coverage.ts V6`. السكربت بيطلع `FAILED` ويقف بـ exit 1 لو أي فقرة ناقصة.)
2. رندر الـ 8 فيديوهات (قسم 4) ← `master_audio.sh` لكل واحد ← `out/final/`.
3. لكل ملف نهائي شغّل (`XX` = اسم الملف النهائي من غير `.mp4`، مثلًا `06_Firewall`):
```bash
ffprobe -v error -show_entries stream=codec_name,width,height,r_frame_rate,sample_rate,channels -show_entries format=duration -of compact out/final/XX.mp4
ffmpeg -hide_banner -nostats -i out/final/XX.mp4 -af ebur128=peak=true -f null - 2>&1 | grep -E "I:|Peak:"
```
   - لازم: h264، 1920×1080، `24/1`، aac 48000 ستيريو، المدة = جدول المدد ± 0.05 ث، Loudness −22 ± 1 LUFS، Peak ≤ −3.
4. **Contact sheet** لكل فيديو (فريم كل ثانية، بيغطي لحد 96 ث — يعني أطول فيديو كامل) للمراجعة بالعين، مثال لـ V6:
   `ffmpeg -y -i out/final/06_Firewall.mp4 -vf "fps=1,scale=240:-1,tile=8x12" -frames:v 1 out/debug/V6_sheet.png` (غيّر اسم الملف ورقم الفيديو لكل فيديو).
5. **Stills بطاقات المذاكرة** (فريم قبل الـ fade):

| الفيديو | الأمر |
|---|---|
| V1 | `npx remotion still src/index.ts V1 out/debug/V1_card.png --frame=1118` |
| V2 | `npx remotion still src/index.ts V2 out/debug/V2_card.png --frame=1526` |
| V3 | `npx remotion still src/index.ts V3 out/debug/V3_card.png --frame=2054` |
| V4 | `npx remotion still src/index.ts V4 out/debug/V4_card.png --frame=1442` |
| V5 | `npx remotion still src/index.ts V5 out/debug/V5_card.png --frame=986` |
| V6 | `npx remotion still src/index.ts V6 out/debug/V6_card.png --frame=1610` |
| V7 | `npx remotion still src/index.ts V7 out/debug/V7_card.png --frame=1478` |
| V8 | `npx remotion still src/index.ts V8 out/debug/V8_card.png --frame=1706` |

   افتح كل واحدة وقارنها بـ «ملحق A» سطر سطر.
6. اتفرج على كل فيديو كامل بالصوت مرة، وراجع «قائمة QA» (قسم 11).

**جدول المدد النهائي:**

| الفيديو | الملف | الشرايح | المشاهد | المدة |
|---|---|---|---|---|
| V1 | 01_Course_Overview_Agenda.mp4 | 1، 2، 3 | 8 | 53.0 ث |
| V2 | 02_Datacenter.mp4 | 4 | 11 | 70.0 ث |
| V3 | 03_Desktop_Service_Virtualization.mp4 | 5، 6 | 14 | 92.0 ث |
| V4 | 04_Multimedia_Network_Application.mp4 | 7، 16 | 10 | 66.5 ث |
| V5 | 05_Network_Management.mp4 | 8 | 7 | 47.5 ث |
| V6 | 06_Firewall.mp4 | 9، 10 | 11 | 73.5 ث |
| V7 | 07_SAN_NAS_Storage_Networks.mp4 | 11، 12، 13 | 10 | 68.0 ث |
| V8 | 08_SDN.mp4 | 14، 15 | 12 | 78.5 ث |
| **الإجمالي** | | **16 شريحة** | **83** | **549 ث ≈ 9:09** |

> ملاحظة: شريحة 16 (د. تامر فتحي) اتحطت في V4 مع شريحة 7 لأنها نفس الموضوع (Multimedia).

---

## 10) مصفوفة التغطية — كل حرف وكل صورة راحت فين

| الشريحة | النصوص | الصور | فين |
|---|---|---|---|
| 1 | `Network Management and Analysis` · الجملة الكاملة · `by Dr /Amina Mohamed` · `Menoufia University` · `Faculty of Computers and Information` · `Department of Information Technology` · `4 -10 -2023` | image1 (دايرة a) · image2 (سحابة + 4 أجهزة) | V1-S1، S2، S3 |
| 2 | `Agenda` · `Lecture 1` | image3 | V1-S4 |
| 3 | `Agenda` · `Main course topics` · الـ 7 بنود | image3 (تاني مرة) | V1-S5، S6 |
| 4 | `Datacenter` + كل labels الرسمة | image4 | V2-S2 → S10 |
| 5 | العنوان · جملتين التعريف · جملة In this section | image5 | V3-S2 → S6 |
| 6 | العنوان + كل labels رسمة Palo Alto | image6 | V3-S7 → S12 |
| 7 | العنوان · جملة التعريف · جملة In this section | image7 | V4-S2، S3، S4 |
| 8 | العنوان · جملتين التعريف · جملة In this section | image8 | V5-S2 → S5 |
| 9 | العنوان · جملتين التعريف · جملة In this section | image9 | V6-S2 → S6 |
| 10 | `Operational Security: Firewalls` + labels Figure 8.33 + نص الشكل | image10 (Vector + `_clean`) | V6-S7، S8، S9 |
| 11 | العنوان · جملة التعريف · جملة In this section | image11 | V7-S1 → S5 |
| 12 | `SAN & NAS Storage Networks` · `Example of Storage Array` | image12 | V7-S6، S7 |
| 13 | `SAN & NAS Storage Networks` · `Example of Storage Array` | image13 | V7-S8 |
| 14 | العنوان · جملة التعريف · جملة In this section + الـ 10 labels | image14 | V8-S2، S3، S10 |
| 15 | العنوان + الـ 7 labels | image15 (Vector + الأصلية) | V8-S4 → S9 |
| 16 | `Network Multimedia Applications` · `Dr. Tamer Fathy` | image16 · image17 · image18 | V4-S6، S7، S8 |

**إجمالي الصور: 19 مكان (18 ملف + image3 مرتين) — كلهم مستخدمين.**

**وكمان كل شريحة ليها مكان واحد بيظهر فيه نصها كامل وبترتيبه (بطاقة المذاكرة):** V1-S7 (شرايح 1، 2، 3) · V2-S10 (4) · V3-S13 (5، 6) · V4-S9 (7، 16) · V5-S6 (8) · V6-S10 (9، 10) · V7-S9 (11، 12، 13) · V8-S11 (14، 15).

---

## 11) قائمة QA النهائية (لكل فيديو)

**الشكل**
- [ ] الورق `paper.png` ثابت ومفيش أي ترعيش في الخطوط بين الفريمات.
- [ ] مفيش عنصر نازل في منطقة الكابشن (y > 950) غير الشخصيات.
- [ ] الكابشن سطر واحد، مركزه y 1006، والنقط والأقواس في مكانها الصح.
- [ ] كل مشهد فيه ≥ 1 ث ثبات بعد آخر حركة (إلا المشاهد الـ CONT).
- [ ] مفيش إيموجي، ومفيش «Activate Windows».
- [ ] الشخصيات نفس الشكل والألوان في كل الوضعيات، ومفيش placeholders.
- [ ] كل صورة أصلية واضحة ومش مبكسلة (مفيش زووم أكبر من حجمها بعد التكبير).
- [ ] كل مشهد عليه SlideBadge صح حسب جدول 5.7.

**النص**
- [ ] `check_coverage.ts` بيطبع `ALL 100% COVERED`.
- [ ] الكابشنات منسوخة من الخطة حرف بحرف.
- [ ] بطاقة المذاكرة: افتح الـ still بتاعها (المرحلة 9) وقارنه بـ «ملحق A» سطر سطر — كل فقرة موجودة كاملة، بالترتيب، ومفيش كلمة مقطوعة أو طالعة برة الكارت.
- [ ] الخطوط: رقعة للعناوين العربي، Cairo للنصوص والكابشن، Caveat Brush للمصطلح الكبير، Kalam للعناوين والـ labels الإنجليزي.

**الصوت**
- [ ] مفيش Voiceover ولا موسيقى.
- [ ] كل صوت قلم/ماركر بيبدأ ويخلص مع الرسم (افحص 3 أماكن عشوائية فريم بفريم).
- [ ] مفيش طقطقة (click) في بداية أو نهاية أي صوت.
- [ ] −22 ± 1 LUFS، والقمة ≤ −3 dBTP.

**الملف**
- [ ] h264 / 1920×1080 / 24 fps / yuv420p / aac 48k ستيريو / الاسم والمدة زي جدول المرحلة 9.

---

## ملحق A — نصوص الشرايح حرفيًا (المرجع الوحيد للنص الإنجليزي)

> المسافات المزدوجة في الشريحة اتكتبت هنا مسافة واحدة. ده المسموح الوحيد. كل سطر هنا = فقرة واحدة في الشريحة بالظبط (وبطاقة المذاكرة بتعرضها بنفس التقسيم).

**Slide 1**
- `Network Management and Analysis`
- `Network Management and Analysis course. This will be an overview of the different topics that we will cover in this course.`
- `by Dr /Amina Mohamed`
- `Menoufia University`
- `Faculty of Computers and Information`
- `Department of Information Technology`
- `4 -10 -2023`

**Slide 2:** `Agenda` · `Lecture 1`

**Slide 3:** `Agenda` · `Main course topics` · `Datacenters` · `Desktop and service virtualization` · `Multimedia network application` · `Network management` · `Firewall` · `SAN & NAS Storage networks.` · `Software Defined Networks (SDN)`

**Slide 4:** `Datacenter`
- labels الصورة: `vCenter Server` · `vSphere Client` · `vSphere Web Client` · `terminal` · `server group 1` · `server group 2` · `server group 3` · `virtual machines` · `VM` · `ESXi` · `fibre channel switch fabric / IP network` · `fibre channel storage array` · `iSCSI storage array` · `NAS storage array`

**Slide 5:** `Desktop and Service Virtualization`
- `Virtualization is the creation of a virtual version of something, such as a server, operating system, storage device, or network resource. Desktop and service virtualization allows organizations to optimize resources, reduce costs, and improve efficiency.`
- `In this section, we will explore how desktop and service virtualization work and their benefits in network management.`

**Slide 6:** `Desktop and Service Virtualization`
- جوه الصورة: `Advanced Services Insertion – Example: Palo Alto Networks NGFW` · `Cluster Controller` · `Panorama` · `Security Admin` · `Security Policy` · `VM` · `vSwitch` · `Hypervisor` · `Physical Host` · `Internet` · `Traffic Steering`

**Slide 7:** `Multimedia Network Application`
- `Multimedia network application refers to any network application that employs audio or video. In this section, we will discuss the properties of video and audio, their compression formats, and the different types of multimedia network applications.`
- جوه الصورة (مقصوص): `MEDIA STREAMING DEV`

**Slide 8:** `Network Management`
- `Network management is the process of administering, managing, and maintaining a network infrastructure. It ensures the performance, availability, and security of the network infrastructure.`
- `In this section, we will discuss the different network management tools and techniques that are used to manage a computer network effectively.`

**Slide 9:** `Firewall`
- `A firewall is a software or hardware-based network security system that controls incoming and outgoing network traffic by analyzing data packets and determining whether they should be allowed through or not. Firewall protection is essential to secure a network from external threats.`
- `In this section, we will discuss how firewalls work and their role in network management.`

**Slide 10:** `Operational Security: Firewalls`
- labels الصورة: `Administered network` · `Firewall` · `Public Internet` · `Figure 8.33 ♦ Firewall placement between the administered network and the outside world`

**Slide 11:** `SAN & NAS Storage Networks`
- `Storage Area Network (SAN) and Network Attached Storage (NAS) are two different storage architectures that are used to store and manage data in computer networks.`
- `In this section, we will explore the differences between SAN and NAS, their benefits and disadvantages, and their role in network management.`

**Slide 12:** `SAN & NAS Storage Networks` · `Example of Storage Array` · جوه الصورة: `CONDUANT` · `Big River LTX3`

**Slide 13:** `SAN & NAS Storage Networks` · `Example of Storage Array`

**Slide 14:** `Software Defined Networks (SDN)`
- `Software-defined networking (SDN) is an architectural approach to network management that enables the centralized management of network infrastructures through software.`
- `In this section, we will discuss how SDN works, its benefits, and its role in network management.`
- labels الصورة: `Morfeo` · `Cliente 1` · `Cliente 2` · `Balancer` · `SW LAN` · `MOXA` · `SW DMZ` · `Firewall + VPN gateway` · `SW Pubblico` · `Router VDF`

**Slide 15:** `Software Defined Networks (SDN)`
- labels الصورة: `Traditional Network` · `Switch` · `Control Plane` · `Data Plane` · `Software-Defined Network` · `Programmable Switch` · `Controller Machine`

**Slide 16:** `Network Multimedia Applications` · `Dr. Tamer Fathy`
- جوه الصور: التابلت `20:35` · الموبايل `ROGERS` `3G` `10:02 AM` `84%` `Done` `3:07` `-39:04`

---

## ملحق B — `scripts/make_sfx.sh` (اتجرب واشتغل — انسخه زي ما هو)

```bash
#!/usr/bin/env bash
# يولّد مكتبة المؤثرات الصوتية الناعمة كلها بـ ffmpeg بس (48kHz / stereo / 16-bit WAV)
# الاستخدام: bash scripts/make_sfx.sh public/sfx
set -euo pipefail
OUT="${1:-public/sfx}"
mkdir -p "$OUT"
SR=48000
F="-y -v error"
ENC="-ar $SR -ac 2 -c:a pcm_s16le"

# ---------- 1) أصوات ضوضاء (رسم/كتابة/هوا) ----------
ffmpeg $F -f lavfi -i "anoisesrc=d=0.45:c=pink:a=0.5:seed=11" -af "highpass=f=180,lowpass=f=1300,afade=t=in:st=0:d=0.20:curve=qsin,afade=t=out:st=0.20:d=0.25:curve=qsin,volume=0.55" $ENC "$OUT/whoosh_soft.wav"
ffmpeg $F -f lavfi -i "anoisesrc=d=4:c=pink:a=0.5:seed=7" -af "highpass=f=1400,lowpass=f=4800,tremolo=f=7:d=0.45,volume=0.30" $ENC "$OUT/pencil_loop.wav"
ffmpeg $F -f lavfi -i "anoisesrc=d=4:c=pink:a=0.5:seed=21" -af "highpass=f=550,lowpass=f=3000,tremolo=f=5:d=0.35,volume=0.38" $ENC "$OUT/marker_loop.wav"
ffmpeg $F -f lavfi -i "anoisesrc=d=0.35:c=pink:a=0.5:seed=5" -af "highpass=f=2200,lowpass=f=6500,afade=t=in:st=0:d=0.05,afade=t=out:st=0.10:d=0.25:curve=qsin,volume=0.22" $ENC "$OUT/highlight_swipe.wav"
ffmpeg $F -f lavfi -i "anoisesrc=d=0.5:c=pink:a=0.5:seed=3" -af "highpass=f=900,lowpass=f=5500,tremolo=f=16:d=0.7,afade=t=in:st=0:d=0.08,afade=t=out:st=0.18:d=0.32:curve=qsin,volume=0.40" $ENC "$OUT/page_turn.wav"
ffmpeg $F -f lavfi -i "anoisesrc=d=0.5:c=pink:a=0.5:seed=9" -af "highpass=f=300,lowpass=f=2400,afade=t=in:st=0:d=0.40:curve=exp,afade=t=out:st=0.40:d=0.10,volume=0.50" $ENC "$OUT/zoom_in.wav"
ffmpeg $F -f lavfi -i "anoisesrc=d=3:c=brown:a=0.5:seed=2" -af "lowpass=f=320,afade=t=in:st=0:d=0.4,afade=t=out:st=2.5:d=0.5,volume=0.22" $ENC "$OUT/hum_server.wav"
ffmpeg $F -f lavfi -i "anoisesrc=d=1.5:c=white:a=0.6:seed=4" -af "volume='if(lt(mod(t\,0.105)\,0.012)\,1\,0)':eval=frame,highpass=f=1500,lowpass=f=5500,volume=0.25" $ENC "$OUT/typing_soft.wav"

# ---------- 2) أصوات نغمية ناعمة ----------
A="0.004"
gen () { # $1=الاسم $2=المدة $3=المعادلة $4=فلاتر
  ffmpeg $F -f lavfi -i "aevalsrc=exprs='$3':s=$SR:d=$2" -af "${4:-anull},afade=t=out:st=$(awk "BEGIN{print $2-0.03}"):d=0.03" $ENC "$OUT/$1.wav"
}
ENV="(1-exp(-t/$A))"
gen pop_soft 0.14 "0.42*$ENV*sin(2*PI*(300*t+2800*t*t))*exp(-26*t)" "lowpass=f=2500"
gen tick_soft 0.35 "$ENV*(0.34*sin(2*PI*880*t)*exp(-14*t)+0.06*sin(2*PI*3520*t)*exp(-45*t))" "lowpass=f=5000"
gen check_soft 0.40 "$ENV*(0.32*sin(2*PI*1046.5*t)*exp(-12*t)+0.05*sin(2*PI*4186*t)*exp(-45*t))" "lowpass=f=5500"
gen chime_success 1.6 "$ENV*(0.20*sin(2*PI*1046.5*t)*exp(-3.2*t)+gte(t,0.09)*0.18*sin(2*PI*1318.5*(t-0.09))*exp(-3.2*(t-0.09))+gte(t,0.18)*0.17*sin(2*PI*1568*(t-0.18))*exp(-3.0*(t-0.18)))" "aecho=0.8:0.6:70|140:0.22|0.12,lowpass=f=6000"
gen lightbulb_ding 1.0 "$ENV*(0.24*sin(2*PI*1318.5*t)*exp(-4*t)+0.05*sin(2*PI*2637*t)*exp(-7*t))" "aecho=0.8:0.6:60:0.2,lowpass=f=6000"
gen lock_click 0.16 "0.30*sin(2*PI*1400*t)*exp(-70*t)*$ENV+gte(t,0.06)*0.22*sin(2*PI*1900*(t-0.06))*exp(-90*(t-0.06))" "lowpass=f=4500"
gen warn_soft 0.60 "$ENV*(0.28*sin(2*PI*659.25*t)*exp(-9*t)+gte(t,0.18)*0.28*sin(2*PI*523.25*(t-0.18))*exp(-9*(t-0.18)))" "lowpass=f=3500"
gen warn_beeps 0.45 "0.16*sin(2*PI*880*t)*(lt(t,0.09)*$ENV+gte(t,0.22)*lt(t,0.31))*1" "afade=t=in:d=0.005,lowpass=f=3000"
gen bonk_soft 0.26 "0.45*$ENV*sin(2*PI*(220*t-175*t*t))*exp(-13*t)" "lowpass=f=1200"
gen stamp_thud 0.28 "$ENV*(0.55*sin(2*PI*110*t)*exp(-18*t))" "lowpass=f=600"
gen boing_question 0.38 "0.26*$ENV*sin(2*PI*(420*t+290*t*t)+0.6*sin(2*PI*6*t))*exp(-6*t)" "lowpass=f=2500"
gen glass_knock 0.35 "$ENV*(0.18*sin(2*PI*1700*t)+0.09*sin(2*PI*2550*t))*exp(-70*t)+gte(t,0.15)*(0.16*sin(2*PI*1700*(t-0.15))+0.08*sin(2*PI*2550*(t-0.15)))*exp(-70*(t-0.15))" "lowpass=f=5000"
gen shield_clink 0.55 "$ENV*(0.16*sin(2*PI*1318.5*t)+0.10*sin(2*PI*1975.5*t)+0.05*sin(2*PI*2637*t))*exp(-9*t)" "lowpass=f=6000"
gen coins_soft 0.60 "$ENV*0.10*(sin(2*PI*2637*t)*exp(-30*t)+gte(t,0.07)*sin(2*PI*3136*(t-0.07))*exp(-30*(t-0.07))+gte(t,0.15)*sin(2*PI*2793*(t-0.15))*exp(-30*(t-0.15))+gte(t,0.24)*sin(2*PI*3520*(t-0.24))*exp(-30*(t-0.24)))" "lowpass=f=6500"
gen radar_ping 1.0 "0.20*$ENV*sin(2*PI*1200*t)*exp(-5*t)" "aecho=0.8:0.5:180:0.3,lowpass=f=4000"
gen squeeze 0.40 "0.26*$ENV*sin(2*PI*(700*t-560*t*t)+0.4*sin(2*PI*18*t))*exp(-4*t)" "lowpass=f=2500"
gen media_play 0.50 "$ENV*(0.24*sin(2*PI*784*t)*exp(-10*t)+gte(t,0.12)*0.24*sin(2*PI*1046.5*(t-0.12))*exp(-9*(t-0.12)))" "lowpass=f=4500"
gen phone_trill 0.60 "$ENV*0.10*(sin(2*PI*1318.5*t)+sin(2*PI*1046.5*t))*(0.5+0.5*sin(2*PI*12*t))*exp(-3*t)" "lowpass=f=4500"
gen signal_pips 0.40 "0.14*sin(2*PI*1500*t)*(lt(t,0.05)+gte(t,0.12)*lt(t,0.17)+gte(t,0.24)*lt(t,0.29))" "afade=t=in:d=0.004,lowpass=f=4000"
gen beep_soft 0.16 "0.16*$ENV*sin(2*PI*1320*t)" "lowpass=f=4000"
gen remote_click 0.10 "0.22*$ENV*sin(2*PI*1760*t)*exp(-80*t)" "lowpass=f=5000"
gen hdd_whir 1.2 "$ENV*0.10*sin(2*PI*(170*t+40*t*t))*(1-exp(-4*t))*exp(-1.2*t)" "lowpass=f=900"
gen finale_arp 1.8 "$ENV*(0.20*sin(2*PI*523.25*t)*exp(-4*t)+gte(t,0.11)*0.20*sin(2*PI*659.25*(t-0.11))*exp(-4*(t-0.11))+gte(t,0.22)*0.20*sin(2*PI*784*(t-0.22))*exp(-4*(t-0.22))+gte(t,0.33)*0.22*sin(2*PI*1046.5*(t-0.33))*exp(-2.6*(t-0.33)))" "aecho=0.8:0.6:80|160:0.22|0.12,lowpass=f=6000"

# ---------- 3) ضبط المستويات ----------
norm () { # $1=الاسم $2=peak|rms $3=الهدف بالـ dB
  local f="$OUT/$1.wav" key cur gain
  if [ "$2" = "peak" ]; then key="Peak level dB"; else key="RMS level dB"; fi
  cur=$(ffmpeg -hide_banner -i "$f" -af astats=measure_perchannel=none -f null - 2>&1 | grep "$key" | tail -1 | awk -F: '{gsub(/ /,"",$2); print $2}')
  gain=$(awk "BEGIN{print $3 - ($cur)}")
  ffmpeg $F -i "$f" -af "volume=${gain}dB,alimiter=limit=0.5:level=disabled" $ENC "$OUT/_tmp.wav" && mv "$OUT/_tmp.wav" "$f"
}
norm pencil_loop rms -34; norm marker_loop rms -32; norm highlight_swipe rms -40; norm whoosh_soft rms -30
norm page_turn rms -33; norm zoom_in rms -34; norm hum_server rms -42; norm typing_soft rms -36
for s in pop_soft tick_soft check_soft lock_click bonk_soft stamp_thud; do norm $s peak -12; done
for s in chime_success finale_arp lightbulb_ding media_play warn_soft; do norm $s peak -12; done
for s in boing_question glass_knock shield_clink squeeze phone_trill radar_ping; do norm $s peak -14; done
for s in coins_soft signal_pips beep_soft remote_click warn_beeps hdd_whir; do norm $s peak -16; done

N=$(ls "$OUT"/*.wav | wc -l)
[ "$N" -eq 31 ] || { echo "ERROR: expected 31 files, got $N"; exit 1; }
echo "normalized ($N files) -> $OUT"
```

---

## ملحق C — `scripts/master_audio.sh` (اتجرب واشتغل)

```bash
#!/usr/bin/env bash
# الاستخدام: bash scripts/master_audio.sh out/raw/V1.mp4 out/final/01_Course_Overview_Agenda.mp4
# بيعمل: تنعيم الحدّة (high-shelf −3 dB فوق 7 kHz) + Loudness −22 LUFS + True peak ≤ −3 dBTP (تمريرتين) — الصورة مبتتلمسش
set -euo pipefail
IN="$1"; OUT="$2"
mkdir -p "$(dirname "$OUT")"
PRE="highshelf=f=7000:g=-3"
J=$(ffmpeg -hide_banner -nostats -i "$IN" -vn -af "$PRE,loudnorm=I=-22:TP=-3:LRA=11:print_format=json" -f null - 2>&1 | sed -n '/^{/,/^}/p')
val () { echo "$J" | grep "\"$1\"" | sed -E 's/.*: *"([^"]+)".*/\1/'; }
ffmpeg -y -v error -i "$IN" -c:v copy -af "$PRE,loudnorm=I=-22:TP=-3:LRA=11:measured_I=$(val input_i):measured_TP=$(val input_tp):measured_LRA=$(val input_lra):measured_thresh=$(val input_thresh):offset=$(val target_offset):linear=true,aresample=48000" -c:a aac -b:a 192k -ar 48000 -ac 2 "$OUT"
ffmpeg -hide_banner -nostats -i "$OUT" -vn -af ebur128=peak=true -f null - 2>&1 | grep -A14 "Summary" | grep -E "I:|Peak:"
```

---

## ملحق D — بيانات النصوص + `scripts/check_coverage.ts`

**شكل ملف البيانات** (`src/videos/V1.data.ts` — نفس الشكل لكل الفيديوهات):
```ts
export type TextItem = {scene: string; id: string; text: string; verbatim: boolean};
export const texts: TextItem[] = [
  {scene: 'V1-S1', id: 'title1', text: 'Network Management', verbatim: false},
  {scene: 'V1-S1', id: 'author', text: 'by Dr /Amina Mohamed', verbatim: true},
  // ... كل نص بيظهر على الشاشة. الـ labels اللي على سطرين اكتبها بـ \n (مثلًا 'server\ngroup 1')
];
```
- المكوّنات بتقرا النص **من الملف ده** (مش مكتوب جوه الـ TSX) عشان الفحص يبقى حقيقي.
- نصوص بطاقة المذاكرة بتتكتب برضه هنا بـ `scene` = رقم مشهد البطاقة (مثلًا `'V3-S13'`) و`verbatim: true`، وكل فقرة = عنصر واحد بالنص الكامل بتاعها (مش مقطّعة).
- `Network Management and Analysis` في V1-S1 مقسوم سطرين للرسم، فاكتب كمان عنصر `verbatim: true` بالنص الكامل لـ id اسمه `title_full` بيستخدمه المكوّن في `aria-label` أو يتحسب كنص واحد.

```ts
// scripts/check_coverage.ts
// الاستخدام:  npx tsx scripts/check_coverage.ts V6    ← فيديو واحد
//             npx tsx scripts/check_coverage.ts all   ← كل الفيديوهات
// (بديل: node --experimental-strip-types scripts/check_coverage.ts V6)
type TextItem = {scene: string; id: string; text: string; verbatim: boolean};
type Sentence = {full: string; chunks: string[]};
type Check = {required: string[]; sentences: Sentence[]; recap: {scene: string; texts: string[]}};

const norm = (s: string) => s.replace(/\s+/g, ' ').trim();

// فقرات الشرايح كاملة (زي «ملحق A»)
const P = {
  s1: 'Network Management and Analysis course. This will be an overview of the different topics that we will cover in this course.',
  s5a: 'Virtualization is the creation of a virtual version of something, such as a server, operating system, storage device, or network resource. Desktop and service virtualization allows organizations to optimize resources, reduce costs, and improve efficiency.',
  s5b: 'In this section, we will explore how desktop and service virtualization work and their benefits in network management.',
  s7: 'Multimedia network application refers to any network application that employs audio or video. In this section, we will discuss the properties of video and audio, their compression formats, and the different types of multimedia network applications.',
  s8a: 'Network management is the process of administering, managing, and maintaining a network infrastructure. It ensures the performance, availability, and security of the network infrastructure.',
  s8b: 'In this section, we will discuss the different network management tools and techniques that are used to manage a computer network effectively.',
  s9a: 'A firewall is a software or hardware-based network security system that controls incoming and outgoing network traffic by analyzing data packets and determining whether they should be allowed through or not. Firewall protection is essential to secure a network from external threats.',
  s9b: 'In this section, we will discuss how firewalls work and their role in network management.',
  s11a: 'Storage Area Network (SAN) and Network Attached Storage (NAS) are two different storage architectures that are used to store and manage data in computer networks.',
  s11b: 'In this section, we will explore the differences between SAN and NAS, their benefits and disadvantages, and their role in network management.',
  s14a: 'Software-defined networking (SDN) is an architectural approach to network management that enables the centralized management of network infrastructures through software.',
  s14b: 'In this section, we will discuss how SDN works, its benefits, and its role in network management.',
};
const FIG = 'Figure 8.33 ♦ Firewall placement between the administered network and the outside world';
const AGENDA = ['Datacenters', 'Desktop and service virtualization', 'Multimedia network application', 'Network management', 'Firewall',
  'SAN & NAS Storage networks.', 'Software Defined Networks (SDN)'];

// لكل فيديو: (1) نصوص لازم تظهر · (2) جمل متقسمة: القطع لما تتجمع بمسافة = الجملة بالظبط · (3) فقرات بطاقة المذاكرة كاملة
const CHECKS: Record<string, Check> = {
  V1: {
    required: ['Network Management and Analysis', 'by Dr /Amina Mohamed', 'Menoufia University', 'Faculty of Computers and Information',
      'Department of Information Technology', '4 -10 -2023', 'Agenda', 'Lecture 1', 'Main course topics', ...AGENDA],
    sentences: [{full: P.s1, chunks: ['Network Management and Analysis course.', 'This will be an overview of the different topics that we will cover in this course.']}],
    recap: {scene: 'V1-S7', texts: ['Network Management and Analysis', P.s1, 'by Dr /Amina Mohamed', 'Menoufia University',
      'Faculty of Computers and Information', 'Department of Information Technology', '4 -10 -2023', 'Agenda', 'Lecture 1',
      'Main course topics', ...AGENDA]},
  },
  V2: {
    required: ['Datacenter', 'vCenter Server', 'vSphere Client', 'vSphere Web Client', 'terminal', 'server group 1', 'server group 2',
      'server group 3', 'virtual machines', 'VM', 'ESXi', 'fibre channel switch fabric / IP network', 'fibre channel storage array',
      'iSCSI storage array', 'NAS storage array'],
    sentences: [],
    recap: {scene: 'V2-S10', texts: ['Datacenter']},
  },
  V3: {
    required: ['Desktop and Service Virtualization'],
    sentences: [
      {full: 'Virtualization is the creation of a virtual version of something, such as a server, operating system, storage device, or network resource.',
       chunks: ['Virtualization is the creation of a virtual version of something,', 'such as a server,', 'operating system,', 'storage device,', 'or network resource.']},
      {full: 'Desktop and service virtualization allows organizations to optimize resources, reduce costs, and improve efficiency.',
       chunks: ['Desktop and service virtualization allows organizations to', 'optimize resources,', 'reduce costs,', 'and improve efficiency.']},
      {full: P.s5b, chunks: ['In this section, we will explore', 'how desktop and service virtualization work', 'and their benefits in network management.']},
    ],
    recap: {scene: 'V3-S13', texts: ['Desktop and Service Virtualization', P.s5a, P.s5b, 'Advanced Services Insertion – Example: Palo Alto Networks NGFW']},
  },
  V4: {
    required: ['Multimedia Network Application', 'Network Multimedia Applications', 'Dr. Tamer Fathy'],
    sentences: [
      {full: 'Multimedia network application refers to any network application that employs audio or video.',
       chunks: ['Multimedia network application refers to any network application that employs audio or video.']},
      {full: 'In this section, we will discuss the properties of video and audio, their compression formats, and the different types of multimedia network applications.',
       chunks: ['In this section, we will discuss', 'the properties of video and audio,', 'their compression formats,', 'and the different types of multimedia network applications.']},
    ],
    recap: {scene: 'V4-S9', texts: ['Multimedia Network Application', P.s7, 'Network Multimedia Applications', 'Dr. Tamer Fathy']},
  },
  V5: {
    required: ['Network Management'],
    sentences: [
      {full: 'Network management is the process of administering, managing, and maintaining a network infrastructure.',
       chunks: ['Network management is the process of', 'administering,', 'managing,', 'and maintaining', 'a network infrastructure.']},
      {full: 'It ensures the performance, availability, and security of the network infrastructure.',
       chunks: ['It ensures the', 'performance,', 'availability,', 'and security', 'of the network infrastructure.']},
      {full: P.s8b, chunks: ['In this section, we will discuss the different', 'network management tools and techniques', 'that are used to manage a computer network effectively.']},
    ],
    recap: {scene: 'V5-S6', texts: ['Network Management', P.s8a, P.s8b]},
  },
  V6: {
    required: ['Firewall', 'Operational Security: Firewalls', 'Administered network', 'Public Internet', FIG],
    sentences: [
      {full: 'A firewall is a software or hardware-based network security system that controls incoming and outgoing network traffic by analyzing data packets and determining whether they should be allowed through or not.',
       chunks: ['A firewall is a software or hardware-based network security system', 'that controls incoming and outgoing network traffic', 'by analyzing data packets and determining whether they should be allowed through or not.']},
      {full: 'Firewall protection is essential to secure a network from external threats.',
       chunks: ['Firewall protection is essential to secure a network from external threats.']},
      {full: P.s9b, chunks: ['In this section, we will discuss', 'how firewalls work', 'and their role in network management.']},
    ],
    recap: {scene: 'V6-S10', texts: ['Firewall', P.s9a, P.s9b, 'Operational Security: Firewalls', FIG]},
  },
  V7: {
    required: ['SAN & NAS Storage Networks', 'Example of Storage Array'],
    sentences: [
      {full: P.s11a, chunks: ['Storage Area Network (SAN)', 'and', 'Network Attached Storage (NAS)', 'are two different storage architectures that are used to store and manage data in computer networks.']},
      {full: P.s11b, chunks: ['In this section, we will explore', 'the differences between SAN and NAS,', 'their benefits and disadvantages,', 'and their role in network management.']},
    ],
    recap: {scene: 'V7-S9', texts: ['SAN & NAS Storage Networks', P.s11a, P.s11b, 'Example of Storage Array']},
  },
  V8: {
    required: ['Software Defined Networks (SDN)', 'SW Pubblico', 'Router VDF', 'Firewall + VPN gateway', 'SW DMZ', 'Balancer', 'SW LAN', 'MOXA',
      'Morfeo', 'Cliente 1', 'Cliente 2', 'Traditional Network', 'Switch', 'Control Plane', 'Data Plane', 'Software-Defined Network',
      'Programmable Switch', 'Controller Machine'],
    sentences: [
      {full: P.s14a, chunks: [P.s14a]},
      {full: P.s14b, chunks: ['In this section, we will discuss', 'how SDN works,', 'its benefits,', 'and its role in network management.']},
    ],
    recap: {scene: 'V8-S11', texts: ['Software Defined Networks (SDN)', P.s14a, P.s14b]},
  },
};

async function main() {
  const arg = (process.argv[2] ?? 'all').toUpperCase();
  const videos = arg === 'ALL' ? Object.keys(CHECKS) : [arg];
  let bad = 0;
  for (const v of videos) {
    const c = CHECKS[v];
    if (!c) { console.log('UNKNOWN VIDEO:', v, '— use V1 … V8 or all'); process.exit(2); }
    let items: TextItem[];
    try {
      items = ((await import(`../src/videos/${v}.data.ts`)).texts as TextItem[]).filter((t) => t.verbatim);
    } catch (e) {
      console.log(`${v}: DATA FILE NOT FOUND (src/videos/${v}.data.ts)`); bad++; continue;
    }
    const all = new Set(items.map((t) => norm(t.text)));
    const card = new Set(items.filter((t) => t.scene === c.recap.scene).map((t) => norm(t.text)));
    let vb = 0;
    for (const r of c.required) if (!all.has(norm(r))) { console.log(`${v} MISSING:`, r); vb++; }
    for (const s of c.sentences) {
      if (s.chunks.join(' ') !== s.full) { console.log(`${v} SPLIT ERROR:`, s.full); vb++; }
      for (const ch of s.chunks) if (!all.has(norm(ch))) { console.log(`${v} MISSING CHUNK:`, ch); vb++; }
    }
    for (const r of c.recap.texts) if (!card.has(norm(r))) { console.log(`${v} CARD MISSING (${c.recap.scene}):`, r); vb++; }
    console.log(`${v}: ${vb === 0 ? 'OK' : `${vb} problem(s)`}`);
    bad += vb;
  }
  console.log(bad === 0 ? 'ALL 100% COVERED' : `FAILED: ${bad} problem(s)`);
  process.exit(bad === 0 ? 0 : 1);
}
main();
```

---

## ملحق E — القاموس الموحّد للمصطلحات (المرجع الوحيد للمعاني العربي)

> المصطلح بيتكتب إنجليزي زي ما هو، والمعنى ده هو المعتمد في الملاحظات والقواميس والبطاقات. الكلمات اللي عليها [توضيح] مش من الشرايح، ومضافة للشرح.

| المصطلح | المعنى المعتمد | فين |
|---|---|---|
| `Network Management and Analysis` | إدارة وتحليل الشبكات | V1 |
| `Agenda` | جدول الموضوعات | V1 |
| `Datacenter(s)` | مركز (مراكز) البيانات | V1، V2 |
| `Desktop and service virtualization` | المحاكاة الافتراضية للديسكتوب والخدمات (مختصرة: محاكاة الديسكتوب والخدمات) | V1، V3 |
| `Multimedia network application` | تطبيقات الشبكة متعددة الوسائط | V1، V4 |
| `Network management` | إدارة الشبكات | V1، V5 |
| `Firewall` | جدار الحماية | V1، V6 |
| `SAN & NAS Storage networks` | شبكات التخزين | V1، V7 |
| `Software Defined Networks (SDN)` | الشبكات المعرّفة بالبرمجيات | V1، V8 |
| `vCenter Server` | سيرفر الإدارة المركزي | V2 |
| `vSphere Client` | برنامج الإدارة على الكمبيوتر | V2 |
| `vSphere Web Client` | الإدارة من الـ browser | V2 |
| `terminal` | دخول بالأوامر (command line) | V2 |
| `server group` | مجموعة سيرفرات حقيقية | V2 |
| `ESXi` | Hypervisor بيشغّل كذا VM على نفس السيرفر | V2 |
| `virtual machine (VM)` | جهاز افتراضي | V2، V3 |
| `fibre channel` | شبكة تخزين سريعة مخصوصة (block) | V2 |
| `iSCSI` | أوامر SCSI على شبكة IP (block) | V2 |
| `NAS storage array` | تخزين files على الشبكة | V2 |
| `storage array` | مصفوفة تخزين: هاردات كتير شغالة كوحدة واحدة | V2، V7 |
| `Virtualization` | المحاكاة الافتراضية: نسخة virtual من حاجة حقيقية | V3 |
| `server / operating system / storage device / network resource` | سيرفر / نظام تشغيل / جهاز تخزين / مورد شبكة | V3 |
| `optimize resources / reduce costs / improve efficiency` | استغلال أحسن للموارد / تقليل التكاليف / كفاءة أعلى | V3 |
| `Physical Host` | السيرفر الحقيقي (hardware) | V3 |
| `Hypervisor` | الطبقة اللي بتشغّل الـ VMs | V3 |
| `vSwitch` | سويتش virtual جوه السيرفر | V3 |
| `NGFW (Next-Generation Firewall)` | جدار حماية جيل جديد | V3 |
| `Advanced Services Insertion` | إضافة خدمات متقدمة (زي الـ firewall) جوه السيرفرات [توضيح] | V3 |
| `Security Admin` | فريق الأمان | V3 |
| `Security Policy` | قواعد الأمان: مين يعدّي ومين يتمنع | V3 |
| `Panorama` | الإدارة المركزية للـ firewalls | V3 |
| `Cluster Controller` | بيوزّع الـ policy على السيرفرات | V3 |
| `Traffic Steering` | توجيه الترافيك يعدّي على الـ Firewall الأول | V3 |
| `audio / video` | صوت / فيديو | V4 |
| `compression format` | صيغة ضغط (زي MP3 وH.264) | V4 |
| `Media streaming device` | جهاز بيشغّل فيديو وصوت من النت | V4 |
| `Video streaming` | الفيديو بيوصل وإنت بتتفرج [توضيح] | V4 |
| `VoIP (Voice over IP)` | مكالمات صوت على شبكة IP | V4 |
| `IP Phone / Video IP Phone` | تليفون شبكي / تليفون شبكي بفيديو | V4 |
| `administering / managing / maintaining` | تجهيز وتنظيم / تشغيل ومتابعة / صيانة مستمرة | V5 |
| `network infrastructure` | البنية التحتية للشبكة | V5 |
| `performance / availability / security` | الأداء والسرعة / الإتاحة (شغالة طول الوقت) / الأمان والحماية | V5 |
| `tools and techniques` | الأدوات والأساليب | V5 |
| `network security system` | نظام أمان للشبكة | V6 |
| `software / hardware-based` | برنامج / جهاز مستقل | V6 |
| `incoming / outgoing network traffic` | الترافيك الداخل / الخارج | V6 |
| `data packets` | حزم البيانات | V6 |
| `allowed through` | مسموح تعدّي | V6 |
| `external threats` | التهديدات الخارجية | V6 |
| `Operational Security` | الأمن التشغيلي | V6 |
| `Administered network` | شبكتنا الداخلية (الشبكة المُدارة) | V6 |
| `Public Internet` | الإنترنت العام | V6 |
| `SAN (Storage Area Network)` | شبكة تخزين مخصوصة للسيرفرات | V7 |
| `NAS (Network Attached Storage)` | تخزين متوصل بالشبكة | V7 |
| `storage architectures` | طرق تنظيم التخزين | V7 |
| `block-level / file-level` | بيدّي blocks / بيشارك files [توضيح] | V7 |
| `KVM console` | شاشة + كيبورد للإدارة | V7 |
| `SDN (Software-defined networking)` | الشبكات المعرّفة بالبرمجيات | V8 |
| `centralized management` | إدارة مركزية من مكان واحد | V8 |
| `Control Plane` | العقل: بيقرّر الـ traffic يروح فين | V8 |
| `Data Plane` | الشغل: بينقل الـ packets فعلًا | V8 |
| `Traditional Network` | الشبكة التقليدية: كل switch فيه Control Plane + Data Plane | V8 |
| `Software-Defined Network` | الشبكة المعرّفة بالبرمجيات | V8 |
| `Controller Machine` | جهاز واحد فيه الـ Control Plane لكل الشبكة | V8 |
| `Programmable Switch` | switch بينفّذ أوامر الـ Controller | V8 |
| `DMZ / Load balancer / VPN gateway` | المنطقة المعزولة / موزّع الحمل / بوابة اتصال VPN آمن | V8 |
