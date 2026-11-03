// src/videos/V4.data.ts
export type TextItem = {
  scene: string;
  id: string;
  text: string;
  verbatim: boolean;
};

export const texts: TextItem[] = [
  // V4-S1 (0.00 -> 5.50s)
  {scene: 'V4-S1', id: 'agenda_chip', text: 'Multimedia network application', verbatim: true},
  {scene: 'V4-S1', id: 'hook_title', text: 'فيديو ومكالمة وأغنية... ماشيين إزاي؟!', verbatim: false},
  {scene: 'V4-S1', id: 'karim_name', text: 'كريم المتدرب', verbatim: false},
  {scene: 'V4-S1', id: 'ico1', text: 'فيديو', verbatim: false},
  {scene: 'V4-S1', id: 'ico2', text: 'مكالمة', verbatim: false},
  {scene: 'V4-S1', id: 'ico3', text: 'أغنية', verbatim: false},

  // V4-S2 (5.50 -> 12.00s)
  {scene: 'V4-S2', id: 'title_en', text: 'Multimedia Network Application', verbatim: true},
  {scene: 'V4-S2', id: 'title_ar', text: 'تطبيقات الشبكة متعددة الوسائط', verbatim: false},
  {
    scene: 'V4-S2',
    id: 'sent_a',
    text: 'Multimedia network application refers to any network application that employs audio or video.',
    verbatim: true,
  },
  {scene: 'V4-S2', id: 'lbl_audio', text: 'audio', verbatim: false},
  {scene: 'V4-S2', id: 'lbl_video', text: 'video', verbatim: false},
  {scene: 'V4-S2', id: 'omar_name', text: 'م. عمر', verbatim: false},

  // V4-S3 (12.00 -> 17.50s)
  {scene: 'V4-S3', id: 'lbl_remote', text: 'Remote', verbatim: false},
  {scene: 'V4-S3', id: 'lbl_box', text: 'Streaming box', verbatim: false},
  {scene: 'V4-S3', id: 'card_en', text: 'Media streaming device', verbatim: false},
  {scene: 'V4-S3', id: 'card_ar', text: 'جهاز بيشغّل فيديو وصوت من النت على الشاشة', verbatim: false},

  // V4-S4 (17.50 -> 24.50s)
  {scene: 'V4-S4', id: 'title_en', text: 'In this section, we will discuss', verbatim: true},
  {scene: 'V4-S4', id: 'row1_en', text: 'the properties of video and audio,', verbatim: true},
  {scene: 'V4-S4', id: 'row1_ar', text: 'خصائص الفيديو والصوت', verbatim: false},
  {scene: 'V4-S4', id: 'row2_en', text: 'their compression formats,', verbatim: true},
  {scene: 'V4-S4', id: 'row2_ar', text: 'صيغ الضغط بتاعتهم', verbatim: false},
  {
    scene: 'V4-S4',
    id: 'row3_en',
    text: 'and the different types of multimedia network applications.',
    verbatim: true,
  },
  {scene: 'V4-S4', id: 'row3_ar', text: 'وأنواع تطبيقات الـ multimedia', verbatim: false},

  // V4-S5 (24.50 -> 30.50s)
  {scene: 'V4-S5', id: 'raw_en', text: 'Raw video', verbatim: false},
  {scene: 'V4-S5', id: 'raw_ar', text: 'حجم ضخم', verbatim: false},
  {scene: 'V4-S5', id: 'vise_en', text: 'compression format', verbatim: false},
  {scene: 'V4-S5', id: 'small_ar', text: 'حجم صغير', verbatim: false},
  {scene: 'V4-S5', id: 'ex_audio', text: 'audio: MP3 / AAC', verbatim: false},
  {scene: 'V4-S5', id: 'ex_video', text: 'video: H.264 / MPEG-4', verbatim: false},

  // V4-S6 (30.50 -> 37.00s)
  {scene: 'V4-S6', id: 's16_title', text: 'Network Multimedia Applications', verbatim: true},
  {scene: 'V4-S6', id: 's16_author', text: 'Dr. Tamer Fathy', verbatim: true},
  {scene: 'V4-S6', id: 'lbl_tablet', text: 'Tablet', verbatim: false},
  {scene: 'V4-S6', id: 'lbl_smart', text: 'Smartphone', verbatim: false},
  {scene: 'V4-S6', id: 'lbl_ipphone', text: 'IP Phone', verbatim: false},
  {scene: 'V4-S6', id: 'lbl_vidphone', text: 'Video IP Phone', verbatim: false},
  {scene: 'V4-S6', id: 'lbl_net', text: 'Internet', verbatim: false},

  // V4-S7 (37.00 -> 43.50s)
  {scene: 'V4-S7', id: 'note_seen', text: '3:07 = اللي اتشاف', verbatim: false},
  {scene: 'V4-S7', id: 'note_rem', text: '-39:04 = اللي فاضل', verbatim: false},
  {scene: 'V4-S7', id: 'note_3g', text: 'شغال على شبكة موبايل 3G', verbatim: false},

  // V4-S8 (43.50 -> 50.50s)
  {scene: 'V4-S8', id: 'voip_en', text: 'VoIP = Voice over IP', verbatim: false},
  {scene: 'V4-S8', id: 'lbl_wireless', text: 'Wireless IP Phone', verbatim: false},
  {scene: 'V4-S8', id: 'lbl_color', text: 'Color screen', verbatim: false},
  {scene: 'V4-S8', id: 'lbl_exp', text: 'Expansion module', verbatim: false},
  {scene: 'V4-S8', id: 'tag_8dev', text: '8 devices', verbatim: false},

  // V4-S8b (50.50 -> 56.00s, LAYOUT_L)
  {scene: 'V4-S8b', id: 'center_title', text: 'Multimedia Network Application', verbatim: true},
  {scene: 'V4-S8b', id: 'next_topic', text: 'Network management', verbatim: true},
  {scene: 'V4-S8b', id: 'n3_topic', text: 'Multimedia network application', verbatim: true},
  {scene: 'V4-S8b', id: 'lbl_s16', text: 'Network Multimedia Applications', verbatim: true},
  {scene: 'V4-S8b', id: 'lbl_dr', text: 'Dr. Tamer Fathy', verbatim: true},

  // V4-S9 (56.00 -> 66.00s, LAYOUT_R: StudyCard)
  {scene: 'V4-S9', id: 's7_title', text: 'Multimedia Network Application', verbatim: true},
  {
    scene: 'V4-S9',
    id: 's7_p1',
    text: 'Multimedia network application refers to any network application that employs audio or video. In this section, we will discuss the properties of video and audio, their compression formats, and the different types of multimedia network applications.',
    verbatim: true,
  },
  {scene: 'V4-S9', id: 's16_title', text: 'Network Multimedia Applications', verbatim: true},
  {scene: 'V4-S9', id: 's16_author', text: 'Dr. Tamer Fathy', verbatim: true},

  // V4-S10 (66.00 -> 72.00s, LAYOUT_F)
  {scene: 'V4-S10', id: 'f_top', text: 'Multimedia', verbatim: false},
  {scene: 'V4-S10', id: 'f_main', text: 'Network Application', verbatim: false},
  {scene: 'V4-S10', id: 'f_ar', text: 'تطبيقات الشبكة متعددة الوسائط', verbatim: false},
  {scene: 'V4-S10', id: 'f_sub', text: 'أي network application بيستخدم audio أو video', verbatim: false},
  {scene: 'V4-S10', id: 'karim_yay', text: 'فهمت!', verbatim: false},
];
