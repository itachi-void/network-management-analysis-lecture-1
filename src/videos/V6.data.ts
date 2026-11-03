// src/videos/V6.data.ts
export type TextItem = {
  scene: string;
  id: string;
  text: string;
  verbatim: boolean;
};

export const texts: TextItem[] = [
  // V6-S1 (0.00 -> 5.50s)
  {scene: 'V6-S1', id: 'agenda_chip', text: 'Firewall', verbatim: true},
  {scene: 'V6-S1', id: 'hook_title', text: 'مين يقفل البوابة في وش الهكر؟!', verbatim: false},
  {scene: 'V6-S1', id: 'shabah_name', text: '«شبح» الهكر', verbatim: false},

  // V6-S2 (5.50 -> 12.00s)
  {scene: 'V6-S2', id: 'title_en', text: 'Firewall', verbatim: true},
  {scene: 'V6-S2', id: 'title_ar', text: 'جدار الحماية', verbatim: false},
  {
    scene: 'V6-S2',
    id: 'sent_1',
    text: 'A firewall is a software or hardware-based network security system',
    verbatim: true,
  },
  {scene: 'V6-S2', id: 'tag1_en', text: 'software', verbatim: false},
  {scene: 'V6-S2', id: 'tag1_ar', text: 'برنامج', verbatim: false},
  {scene: 'V6-S2', id: 'tag2_en', text: 'hardware-based', verbatim: false},
  {scene: 'V6-S2', id: 'tag2_ar', text: 'جهاز مستقل', verbatim: false},

  // V6-S3 (12.00 -> 18.00s)
  {scene: 'V6-S3', id: 'sent_2', text: 'that controls incoming and outgoing network traffic', verbatim: true},
  {scene: 'V6-S3', id: 'our_net', text: 'شبكتنا', verbatim: false},
  {scene: 'V6-S3', id: 'internet', text: 'Internet', verbatim: false},
  {scene: 'V6-S3', id: 'inc_en', text: 'incoming', verbatim: false},
  {scene: 'V6-S3', id: 'inc_ar', text: 'داخل', verbatim: false},
  {scene: 'V6-S3', id: 'out_en', text: 'outgoing', verbatim: false},
  {scene: 'V6-S3', id: 'out_ar', text: 'خارج', verbatim: false},

  // V6-S4 (18.00 -> 25.00s)
  {
    scene: 'V6-S4',
    id: 'sent_3',
    text: 'by analyzing data packets and determining whether they should be allowed through or not.',
    verbatim: true,
  },
  {scene: 'V6-S4', id: 'pkt', text: 'packet', verbatim: false},
  {scene: 'V6-S4', id: 'lbl_allow', text: 'allowed through', verbatim: false},
  {scene: 'V6-S4', id: 'lbl_not', text: 'or not', verbatim: false},

  // V6-S5 (25.00 -> 31.00s)
  {
    scene: 'V6-S5',
    id: 'sent_4',
    text: 'Firewall protection is essential to secure a network from external threats.',
    verbatim: true,
  },

  // V6-S6 (31.00 -> 37.00s)
  {scene: 'V6-S6', id: 'title_en', text: 'In this section, we will discuss', verbatim: true},
  {scene: 'V6-S6', id: 'row1_en', text: 'how firewalls work', verbatim: true},
  {scene: 'V6-S6', id: 'row1_ar', text: 'بيشتغلوا إزاي', verbatim: false},
  {scene: 'V6-S6', id: 'row2_en', text: 'and their role in network management.', verbatim: true},
  {scene: 'V6-S6', id: 'row2_ar', text: 'ودورهم في إدارة الشبكات', verbatim: false},
  {scene: 'V6-S6', id: 'omar_name', text: 'م. عمر', verbatim: false},

  // V6-S7 & V6-S8 (37.00 -> 51.00s)
  {scene: 'V6-S7', id: 's10_title', text: 'Operational Security: Firewalls', verbatim: true},
  {scene: 'V6-S7', id: 's10_ar', text: 'الأمن التشغيلي: جدران الحماية', verbatim: false},
  {scene: 'V6-S7', id: 'adm_net', text: 'Administered network', verbatim: true},
  {scene: 'V6-S7', id: 'adm_note', text: 'شبكة الشركة الداخلية', verbatim: false},
  {scene: 'V6-S8', id: 'fw_lbl', text: 'Firewall', verbatim: true},
  {scene: 'V6-S8', id: 'pub_net', text: 'Public Internet', verbatim: true},
  {
    scene: 'V6-S8',
    id: 'fig_caption',
    text: 'Figure 8.33 ♦ Firewall placement between the administered network and the outside world',
    verbatim: true,
  },

  // V6-S9 (51.00 -> 55.50s)
  {scene: 'V6-S9', id: 'tag_fig', text: 'Figure 8.33 – Slide 10', verbatim: false},

  // V6-S9b (55.50 -> 62.50s, LAYOUT_L)
  {scene: 'V6-S9b', id: 'center_title', text: 'Firewall', verbatim: true},
  {scene: 'V6-S9b', id: 'next_topic', text: 'SAN & NAS Storage networks.', verbatim: true},
  {scene: 'V6-S9b', id: 'n1_topic', text: 'Desktop and service virtualization', verbatim: true},
  {scene: 'V6-S9b', id: 'n2_topic', text: 'Network management', verbatim: true},
  {scene: 'V6-S9b', id: 'n3_topic', text: 'Software Defined Networks (SDN)', verbatim: true},
  {scene: 'V6-S9b', id: 'lbl_ngfw', text: 'NGFW', verbatim: true},
  {scene: 'V6-S9b', id: 'lbl_sec', text: 'security', verbatim: true},
  {scene: 'V6-S9b', id: 'lbl_fw_vpn', text: 'Firewall + VPN gateway', verbatim: true},

  // V6-S10 (62.50 -> 74.50s, LAYOUT_R: StudyCard)
  {scene: 'V6-S10', id: 's9_title', text: 'Firewall', verbatim: true},
  {
    scene: 'V6-S10',
    id: 's9_p1',
    text: 'A firewall is a software or hardware-based network security system that controls incoming and outgoing network traffic by analyzing data packets and determining whether they should be allowed through or not. Firewall protection is essential to secure a network from external threats.',
    verbatim: true,
  },
  {
    scene: 'V6-S10',
    id: 's9_p2',
    text: 'In this section, we will discuss how firewalls work and their role in network management.',
    verbatim: true,
  },
  {scene: 'V6-S10', id: 's10_title', text: 'Operational Security: Firewalls', verbatim: true},
  {
    scene: 'V6-S10',
    id: 's10_fig',
    text: 'Figure 8.33 ♦ Firewall placement between the administered network and the outside world',
    verbatim: true,
  },

  // V6-S11 (74.50 -> 80.50s, LAYOUT_F)
  {scene: 'V6-S11', id: 'f_main', text: 'Firewall', verbatim: false},
  {scene: 'V6-S11', id: 'f_ar', text: 'جدار الحماية', verbatim: false},
  {scene: 'V6-S11', id: 'f_sub', text: 'بيعدّي الـ traffic السليم... ويمنع الـ external threats', verbatim: false},
  {scene: 'V6-S11', id: 'shabah_blocked', text: 'اتمنع!', verbatim: false},
];
