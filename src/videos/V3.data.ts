// src/videos/V3.data.ts
export type TextItem = {
  scene: string;
  id: string;
  text: string;
  verbatim: boolean;
};

export const texts: TextItem[] = [
  // V3-S1 (0.00 -> 5.50s)
  {scene: 'V3-S1', id: 'agenda_chip', text: 'Desktop and service virtualization', verbatim: true},
  {scene: 'V3-S1', id: 'hook_title', text: '10 أجهزة... ولا جهاز واحد؟!', verbatim: false},
  {scene: 'V3-S1', id: 'karim_name', text: 'كريم المتدرب', verbatim: false},

  // V3-S2 (5.50 -> 11.50s)
  {scene: 'V3-S2', id: 'title_en', text: 'Desktop and Service Virtualization', verbatim: true},
  {scene: 'V3-S2', id: 'title_ar', text: 'المحاكاة الافتراضية للديسكتوب والخدمات', verbatim: false},
  {scene: 'V3-S2', id: 'omar_name', text: 'م. عمر', verbatim: false},

  // V3-S3 (11.50 -> 19.00s)
  {scene: 'V3-S3', id: 'line_a', text: 'Virtualization is the creation of a virtual version of something,', verbatim: true},
  {scene: 'V3-S3', id: 'box1_en', text: 'such as a server,', verbatim: true},
  {scene: 'V3-S3', id: 'box1_ar', text: 'سيرفر', verbatim: false},
  {scene: 'V3-S3', id: 'box2_en', text: 'operating system,', verbatim: true},
  {scene: 'V3-S3', id: 'box2_ar', text: 'نظام تشغيل', verbatim: false},
  {scene: 'V3-S3', id: 'box3_en', text: 'storage device,', verbatim: true},
  {scene: 'V3-S3', id: 'box3_ar', text: 'جهاز تخزين', verbatim: false},
  {scene: 'V3-S3', id: 'box4_en', text: 'or network resource.', verbatim: true},
  {scene: 'V3-S3', id: 'box4_ar', text: 'مورد شبكة', verbatim: false},
  {scene: 'V3-S3', id: 'note_ar', text: 'يعني جهاز حقيقي واحد يشغّل نسخ virtual كتير', verbatim: false},

  // V3-S4 (19.00 -> 25.50s)
  {scene: 'V3-S4', id: 'line_b', text: 'Desktop and service virtualization allows organizations to', verbatim: true},
  {scene: 'V3-S4', id: 'row1_en', text: 'optimize resources,', verbatim: true},
  {scene: 'V3-S4', id: 'row1_ar', text: 'استغلال أحسن للموارد', verbatim: false},
  {scene: 'V3-S4', id: 'row2_en', text: 'reduce costs,', verbatim: true},
  {scene: 'V3-S4', id: 'row2_ar', text: 'تقليل التكاليف', verbatim: false},
  {scene: 'V3-S4', id: 'row3_en', text: 'and improve efficiency.', verbatim: true},
  {scene: 'V3-S4', id: 'row3_ar', text: 'كفاءة أعلى', verbatim: false},

  // V3-S5 (25.50 -> 31.50s)
  {scene: 'V3-S5', id: 'left_title', text: 'Desktop virtualization', verbatim: false},
  {scene: 'V3-S5', id: 'left_ar', text: 'الديسكتوب بتاعك شغال على سيرفر', verbatim: false},
  {scene: 'V3-S5', id: 'right_title', text: 'Service virtualization', verbatim: false},
  {scene: 'V3-S5', id: 'right_ar', text: 'الخدمة نفسها (زي Firewall) شغالة كـ VM', verbatim: false},

  // V3-S6 (31.50 -> 37.50s)
  {scene: 'V3-S6', id: 'title_en', text: 'In this section, we will explore', verbatim: true},
  {scene: 'V3-S6', id: 'row1_en', text: 'how desktop and service virtualization work', verbatim: true},
  {scene: 'V3-S6', id: 'row1_ar', text: 'بيشتغلوا إزاي', verbatim: false},
  {scene: 'V3-S6', id: 'row2_en', text: 'and their benefits in network management.', verbatim: true},
  {scene: 'V3-S6', id: 'row2_ar', text: 'وفوايدهم في إدارة الشبكات', verbatim: false},

  // V3-S7 (37.50 -> 43.00s)
  {scene: 'V3-S7', id: 'tag_s6', text: 'Desktop and Service Virtualization', verbatim: true},
  {scene: 'V3-S7', id: 'card_en1', text: 'NGFW =', verbatim: false},
  {scene: 'V3-S7', id: 'card_en2', text: 'Next-Generation Firewall', verbatim: false},
  {scene: 'V3-S7', id: 'card_ar', text: 'جيل جديد من الـ Firewalls', verbatim: false},

  // V3-S8 (43.00 -> 49.50s)
  {scene: 'V3-S8', id: 'c1_en', text: 'Physical Host', verbatim: false},
  {scene: 'V3-S8', id: 'c1_ar', text: 'السيرفر الحقيقي (hardware)', verbatim: false},
  {scene: 'V3-S8', id: 'c2_en', text: 'Hypervisor', verbatim: false},
  {scene: 'V3-S8', id: 'c2_ar', text: 'الطبقة اللي بتشغّل الـ VMs', verbatim: false},
  {scene: 'V3-S8', id: 'c3_en', text: 'vSwitch', verbatim: false},
  {scene: 'V3-S8', id: 'c3_ar', text: 'سويتش virtual جوه السيرفر', verbatim: false},

  // V3-S9 (49.50 -> 55.50s)
  {scene: 'V3-S9', id: 'c1_en', text: 'VM = Virtual Machine', verbatim: false},
  {scene: 'V3-S9', id: 'c1_ar', text: 'أجهزة virtual شغالة على السيرفر', verbatim: false},
  {scene: 'V3-S9', id: 'c2_en', text: 'NGFW (virtual)', verbatim: false},
  {scene: 'V3-S9', id: 'c2_ar', text: 'Firewall شغال كـ VM', verbatim: false},
  {scene: 'V3-S9', id: 'c3_ar', text: 'نفس الكلام في السيرفر التاني', verbatim: false},

  // V3-S10 (55.50 -> 61.50s)
  {scene: 'V3-S10', id: 'c1_en', text: 'Security Admin', verbatim: false},
  {scene: 'V3-S10', id: 'c1_ar', text: 'فريق الأمان', verbatim: false},
  {scene: 'V3-S10', id: 'c2_en', text: 'Panorama', verbatim: false},
  {scene: 'V3-S10', id: 'c2_ar', text: 'الإدارة المركزية للـ firewalls', verbatim: false},
  {scene: 'V3-S10', id: 'c3_en', text: 'Security Policy', verbatim: false},
  {scene: 'V3-S10', id: 'c3_ar', text: 'القواعد: مين يعدّي ومين يتمنع', verbatim: false},

  // V3-S11 (61.50 -> 67.50s)
  {scene: 'V3-S11', id: 'c1_en', text: 'Cluster Controller', verbatim: false},
  {scene: 'V3-S11', id: 'c1_ar', text: 'بيوزّع الـ policy أوتوماتيك', verbatim: false},
  {scene: 'V3-S11', id: 'tag_policy', text: 'policy', verbatim: false},

  // V3-S12 (67.50 -> 74.00s)
  {scene: 'V3-S12', id: 'c1_en', text: 'Internet', verbatim: false},
  {scene: 'V3-S12', id: 'c2_en', text: 'Physical switches', verbatim: false},
  {scene: 'V3-S12', id: 'c2_ar', text: 'سويتشات حقيقية', verbatim: false},
  {scene: 'V3-S12', id: 'c3_en', text: 'Traffic Steering', verbatim: false},
  {scene: 'V3-S12', id: 'c3_ar', text: 'توجيه الترافيك يعدّي على الـ Firewall الأول', verbatim: false},

  // V3-S12b (74.00 -> 81.00s, LAYOUT_L)
  {scene: 'V3-S12b', id: 'center_title', text: 'Desktop and Service Virtualization', verbatim: true},
  {scene: 'V3-S12b', id: 'next_topic', text: 'Multimedia network application', verbatim: true},
  {scene: 'V3-S12b', id: 'n1_topic', text: 'Datacenters', verbatim: true},
  {scene: 'V3-S12b', id: 'n2_topic', text: 'Firewall', verbatim: true},
  {scene: 'V3-S12b', id: 'n3_topic', text: 'Network management', verbatim: true},
  {scene: 'V3-S12b', id: 'lbl_esxi', text: 'ESXi', verbatim: true},
  {scene: 'V3-S12b', id: 'lbl_vm', text: 'VM', verbatim: true},
  {scene: 'V3-S12b', id: 'lbl_ngfw', text: 'NGFW', verbatim: true},
  {scene: 'V3-S12b', id: 'lbl_panorama', text: 'Panorama', verbatim: true},
  {scene: 'V3-S12b', id: 'lbl_policy', text: 'Security Policy', verbatim: true},

  // V3-S13 (81.00 -> 93.00s, LAYOUT_R: StudyCard)
  {scene: 'V3-S13', id: 's5_title', text: 'Desktop and Service Virtualization', verbatim: true},
  {
    scene: 'V3-S13',
    id: 's5_p1',
    text: 'Virtualization is the creation of a virtual version of something, such as a server, operating system, storage device, or network resource. Desktop and service virtualization allows organizations to optimize resources, reduce costs, and improve efficiency.',
    verbatim: true,
  },
  {
    scene: 'V3-S13',
    id: 's5_p2',
    text: 'In this section, we will explore how desktop and service virtualization work and their benefits in network management.',
    verbatim: true,
  },
  {scene: 'V3-S13', id: 's6_title', text: 'Desktop and Service Virtualization', verbatim: true},
  {
    scene: 'V3-S13',
    id: 's6_img_title',
    text: 'Advanced Services Insertion – Example: Palo Alto Networks NGFW',
    verbatim: true,
  },

  // V3-S14 (93.00 -> 99.00s, LAYOUT_F)
  {scene: 'V3-S14', id: 'f_top', text: 'Desktop and Service', verbatim: false},
  {scene: 'V3-S14', id: 'f_main', text: 'Virtualization', verbatim: false},
  {scene: 'V3-S14', id: 'f_ar', text: 'المحاكاة الافتراضية', verbatim: false},
  {scene: 'V3-S14', id: 'f_sub', text: 'server • operating system • storage device • network resource', verbatim: false},
  {scene: 'V3-S14', id: 'karim_yay', text: 'وفّرنا!', verbatim: false},
];
