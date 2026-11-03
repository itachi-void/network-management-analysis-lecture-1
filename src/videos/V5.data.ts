// src/videos/V5.data.ts
export type TextItem = {
  scene: string;
  id: string;
  text: string;
  verbatim: boolean;
};

export const texts: TextItem[] = [
  // V5-S1 (0.00 -> 5.50s)
  {scene: 'V5-S1', id: 'agenda_chip', text: 'Network management', verbatim: true},
  {scene: 'V5-S1', id: 'hook_title', text: 'شبكة من غير إدارة؟!', verbatim: false},
  {scene: 'V5-S1', id: 'karim_name', text: 'كريم المتدرب', verbatim: false},

  // V5-S2 (5.50 -> 12.50s)
  {scene: 'V5-S2', id: 'title_en', text: 'Network Management', verbatim: true},
  {scene: 'V5-S2', id: 'title_ar', text: 'إدارة الشبكات', verbatim: false},
  {scene: 'V5-S2', id: 'line1', text: 'Network management is the process of', verbatim: true},
  {scene: 'V5-S2', id: 'r1_en', text: 'administering,', verbatim: true},
  {scene: 'V5-S2', id: 'r1_ar', text: 'تجهيز وتنظيم', verbatim: false},
  {scene: 'V5-S2', id: 'r2_en', text: 'managing,', verbatim: true},
  {scene: 'V5-S2', id: 'r2_ar', text: 'تشغيل ومتابعة', verbatim: false},
  {scene: 'V5-S2', id: 'r3_en', text: 'and maintaining', verbatim: true},
  {scene: 'V5-S2', id: 'r3_ar', text: 'صيانة مستمرة', verbatim: false},
  {scene: 'V5-S2', id: 'line2', text: 'a network infrastructure.', verbatim: true},
  {scene: 'V5-S2', id: 'omar_name', text: 'م. عمر', verbatim: false},

  // V5-S3 (12.50 -> 19.50s)
  {scene: 'V5-S3', id: 'line1', text: 'It ensures the', verbatim: true},
  {scene: 'V5-S3', id: 'r1_en', text: 'performance,', verbatim: true},
  {scene: 'V5-S3', id: 'r1_ar', text: 'الأداء والسرعة', verbatim: false},
  {scene: 'V5-S3', id: 'r2_en', text: 'availability,', verbatim: true},
  {scene: 'V5-S3', id: 'r2_ar', text: 'متاحة وشغالة طول الوقت', verbatim: false},
  {scene: 'V5-S3', id: 'r3_en', text: 'and security', verbatim: true},
  {scene: 'V5-S3', id: 'r3_ar', text: 'الحماية والأمان', verbatim: false},
  {scene: 'V5-S3', id: 'line2', text: 'of the network infrastructure.', verbatim: true},

  // V5-S4 (19.50 -> 25.50s)
  {scene: 'V5-S4', id: 'c1_en', text: 'SAS hard drives', verbatim: false},
  {scene: 'V5-S4', id: 'c1_ar', text: 'هاردات السيرفرات (SAS)', verbatim: false},
  {scene: 'V5-S4', id: 'c2_en', text: 'Status LEDs', verbatim: false},
  {scene: 'V5-S4', id: 'c2_ar', text: 'لمبات بتقول الجهاز شغال ولا فيه مشكلة', verbatim: false},

  // V5-S5 (25.50 -> 31.50s)
  {scene: 'V5-S5', id: 'l1', text: 'In this section, we will discuss the different', verbatim: true},
  {scene: 'V5-S5', id: 'l2', text: 'network management tools and techniques', verbatim: true},
  {scene: 'V5-S5', id: 'l3', text: 'that are used to manage a computer network effectively.', verbatim: true},

  // V5-S5b (31.50 -> 38.50s, LAYOUT_L)
  {scene: 'V5-S5b', id: 'center_title', text: 'Network Management', verbatim: true},
  {scene: 'V5-S5b', id: 'next_topic', text: 'Firewall', verbatim: true},
  {scene: 'V5-S5b', id: 'n1_topic', text: 'Datacenters', verbatim: true},
  {scene: 'V5-S5b', id: 'n2_topic', text: 'Firewall', verbatim: true},
  {scene: 'V5-S5b', id: 'n3_topic', text: 'Software Defined Networks (SDN)', verbatim: true},
  {scene: 'V5-S5b', id: 'lbl_vcenter', text: 'vCenter Server', verbatim: true},
  {scene: 'V5-S5b', id: 'lbl_vsphere', text: 'vSphere Client', verbatim: true},
  {scene: 'V5-S5b', id: 'lbl_vsphere_web', text: 'vSphere Web Client', verbatim: true},
  {scene: 'V5-S5b', id: 'lbl_term', text: 'terminal', verbatim: true},
  {scene: 'V5-S5b', id: 'lbl_sec', text: 'security', verbatim: true},
  {scene: 'V5-S5b', id: 'lbl_sdn', text: 'architectural approach to network management', verbatim: true},
  {
    scene: 'V5-S5b',
    id: 'footer_note',
    text: 'كل قسم في المحاضرة بيختم بعلاقته بالـ network management (Slides 5، 9، 11، 14)',
    verbatim: false,
  },

  // V5-S6 (38.50 -> 48.50s, LAYOUT_R: StudyCard)
  {scene: 'V5-S6', id: 's8_title', text: 'Network Management', verbatim: true},
  {
    scene: 'V5-S6',
    id: 's8_p1',
    text: 'Network management is the process of administering, managing, and maintaining a network infrastructure. It ensures the performance, availability, and security of the network infrastructure.',
    verbatim: true,
  },
  {
    scene: 'V5-S6',
    id: 's8_p2',
    text: 'In this section, we will discuss the different network management tools and techniques that are used to manage a computer network effectively.',
    verbatim: true,
  },

  // V5-S7 (48.50 -> 54.50s, LAYOUT_F)
  {scene: 'V5-S7', id: 'f_main', text: 'Network Management', verbatim: false},
  {scene: 'V5-S7', id: 'f_ar', text: 'إدارة الشبكات', verbatim: false},
  {scene: 'V5-S7', id: 'f_sub', text: 'Performance • Availability • Security', verbatim: false},
  {scene: 'V5-S7', id: 'karim_yay', text: 'اطّمنت!', verbatim: false},
];
