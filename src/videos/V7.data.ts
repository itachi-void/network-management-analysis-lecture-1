// src/videos/V7.data.ts
export interface TextItem {
  id: string;
  scene: string;
  text: string;
  verbatim: boolean;
  slide?: number;
}

export const texts: TextItem[] = [
  // V7-S1 (Slide 11)
  {id: 'agenda_chip', scene: 'V7-S1', text: 'SAN & NAS Storage networks.', verbatim: true, slide: 3},
  {id: 'hook_1', scene: 'V7-S1', text: 'CD وكارت ميموري...', verbatim: false},
  {id: 'hook_2', scene: 'V7-S1', text: 'يكفّوا شركة؟!', verbatim: false},
  {id: 'lbl_cd', scene: 'V7-S1', text: 'CD', verbatim: false},
  {id: 'lbl_mem', scene: 'V7-S1', text: 'Memory cards', verbatim: false},
  {id: 'lbl_cam', scene: 'V7-S1', text: 'FinePix camera', verbatim: false},
  {id: 'lbl_coin', scene: 'V7-S1', text: 'Coin', verbatim: false},
  {id: 'lbl_coin_ar', scene: 'V7-S1', text: '(للمقارنة بالحجم)', verbatim: false},
  {id: 'name_karim', scene: 'V7-S1', text: 'كريم المتدرب', verbatim: false},

  // V7-S2 (Slide 11)
  {id: 's11_title', scene: 'V7-S2', text: 'SAN & NAS Storage Networks', verbatim: true, slide: 11},
  {id: 's11_title_ar', scene: 'V7-S2', text: 'شبكات التخزين', verbatim: false},
  {id: 'def_san', scene: 'V7-S2', text: 'Storage Area Network (SAN)', verbatim: true, slide: 11},
  {id: 'def_san_ar', scene: 'V7-S2', text: 'شبكة تخزين', verbatim: false},
  {id: 'def_and', scene: 'V7-S2', text: 'and', verbatim: true, slide: 11},
  {id: 'def_nas', scene: 'V7-S2', text: 'Network Attached Storage (NAS)', verbatim: true, slide: 11},
  {id: 'def_nas_ar', scene: 'V7-S2', text: 'تخزين متوصل بالشبكة', verbatim: false},

  // V7-S3 (Slide 11 CONT)
  {
    id: 'def_rest',
    scene: 'V7-S3',
    text: 'are two different storage architectures that are used to store and manage data in computer networks.',
    verbatim: true,
    slide: 11,
  },
  {
    id: 'def_rest_ar',
    scene: 'V7-S3',
    text: 'يعني طريقتين مختلفتين لتخزين وإدارة الداتا في الشبكات',
    verbatim: false,
  },

  // V7-S4 (Slide 11 [توضيح])
  {id: 's4_nas', scene: 'V7-S4', text: 'NAS', verbatim: false},
  {id: 's4_file', scene: 'V7-S4', text: 'File-level', verbatim: false},
  {id: 's4_nas_ar', scene: 'V7-S4', text: 'بيشارك files على الـ LAN', verbatim: false},
  {id: 's4_san', scene: 'V7-S4', text: 'SAN', verbatim: false},
  {id: 's4_block', scene: 'V7-S4', text: 'Block-level', verbatim: false},
  {id: 's4_san_ar', scene: 'V7-S4', text: 'بيدّي السيرفرات blocks على شبكة مخصوصة', verbatim: false},

  // V7-S5 (Slide 11)
  {id: 'sec_head', scene: 'V7-S5', text: 'In this section, we will explore', verbatim: true, slide: 11},
  {id: 'sec_1', scene: 'V7-S5', text: 'the differences between SAN and NAS,', verbatim: true, slide: 11},
  {id: 'sec_1_ar', scene: 'V7-S5', text: 'الفرق بين SAN وNAS', verbatim: false},
  {id: 'sec_2', scene: 'V7-S5', text: 'their benefits and disadvantages,', verbatim: true, slide: 11},
  {id: 'sec_2_ar', scene: 'V7-S5', text: 'المميزات والعيوب', verbatim: false},
  {id: 'sec_3', scene: 'V7-S5', text: 'and their role in network management.', verbatim: true, slide: 11},
  {id: 'sec_3_ar', scene: 'V7-S5', text: 'ودورهم في إدارة الشبكات', verbatim: false},
  {id: 'name_omar', scene: 'V7-S5', text: 'م. عمر', verbatim: false},

  // V7-S6 (Slide 12)
  {id: 's12_title', scene: 'V7-S6', text: 'SAN & NAS Storage Networks', verbatim: true, slide: 12},
  {id: 's12_sub', scene: 'V7-S6', text: 'Example of Storage Array', verbatim: true, slide: 12},
  {id: 's6_4hdd_l', scene: 'V7-S6', text: '4 hard drives', verbatim: false},
  {id: 's6_4hdd_r', scene: 'V7-S6', text: '4 hard drives', verbatim: false},
  {id: 's6_8hdd', scene: 'V7-S6', text: '8 hard drives', verbatim: false},

  // V7-S7 (Slide 12 CONT)
  {id: 's7_board', scene: 'V7-S7', text: 'Controller board', verbatim: false},
  {id: 's7_board_ar', scene: 'V7-S7', text: 'بيدير الهاردات', verbatim: false},
  {id: 's7_fans', scene: 'V7-S7', text: 'Cooling fans', verbatim: false},
  {id: 's7_fans_ar', scene: 'V7-S7', text: 'تبريد', verbatim: false},
  {id: 's7_ports', scene: 'V7-S7', text: 'Network ports', verbatim: false},
  {id: 's7_ports_ar', scene: 'V7-S7', text: 'منافذ الشبكة', verbatim: false},
  {id: 's7_lcd', scene: 'V7-S7', text: 'Display', verbatim: false},
  {id: 's7_lcd_ar', scene: 'V7-S7', text: 'شاشة حالة', verbatim: false},
  {id: 's7_brand1', scene: 'V7-S7', text: 'CONDUANT', verbatim: true, slide: 12},
  {id: 's7_brand2', scene: 'V7-S7', text: 'Big River LTX3', verbatim: true, slide: 12},

  // V7-S8 (Slide 13)
  {id: 's13_title', scene: 'V7-S8', text: 'SAN & NAS Storage Networks', verbatim: true, slide: 13},
  {id: 's13_sub', scene: 'V7-S8', text: 'Example of Storage Array', verbatim: true, slide: 13},
  {id: 's8_hdds_ar', scene: 'V7-S8', text: 'مئات الـ hard drives', verbatim: false},
  {id: 's8_ctrl', scene: 'V7-S8', text: 'Storage controllers', verbatim: false},
  {id: 's8_kvm', scene: 'V7-S8', text: 'KVM console', verbatim: false},
  {id: 's8_kvm_ar', scene: 'V7-S8', text: 'شاشة + كيبورد للإدارة', verbatim: false},

  // V7-S8b (Links - LAYOUT_L)
  {id: 'link_center', scene: 'V7-S8b', text: 'SAN & NAS Storage Networks', verbatim: true, slide: 11},
  {id: 'link_tag', scene: 'V7-S8b', text: 'Slides 11–13', verbatim: false},
  {id: 'next_chip', scene: 'V7-S8b', text: 'Software Defined Networks (SDN)', verbatim: true, slide: 3},
  {id: 'n1_dir', scene: 'V7-S8b', text: 'شفناه في V2 · Slide 4', verbatim: false},
  {id: 'n1_title', scene: 'V7-S8b', text: 'Datacenters', verbatim: true, slide: 3},
  {id: 'n1_ar', scene: 'V7-S8b', text: 'fibre channel وiSCSI = SAN (blocks)، وNAS storage array = NAS (files)', verbatim: false},
  {id: 'n1_l1', scene: 'V7-S8b', text: 'fibre channel storage array', verbatim: true, slide: 4},
  {id: 'n1_l2', scene: 'V7-S8b', text: 'iSCSI storage array', verbatim: true, slide: 4},
  {id: 'n1_l3', scene: 'V7-S8b', text: 'NAS storage array', verbatim: true, slide: 4},
  {id: 'n2_dir', scene: 'V7-S8b', text: 'شفناه في V2 · Slide 4', verbatim: false},
  {id: 'n2_title', scene: 'V7-S8b', text: 'Datacenters', verbatim: true, slide: 3},
  {id: 'n2_ar', scene: 'V7-S8b', text: 'دي شبكة التخزين بين السيرفرات والتخزين', verbatim: false},
  {id: 'n2_l1', scene: 'V7-S8b', text: 'fibre channel switch fabric / IP network', verbatim: true, slide: 4},
  {id: 'n3_dir', scene: 'V7-S8b', text: 'Slides 12–13 مع Slide 4', verbatim: false},
  {id: 'n3_title', scene: 'V7-S8b', text: 'SAN & NAS Storage networks.', verbatim: true, slide: 3},
  {id: 'n3_ar', scene: 'V7-S8b', text: 'أمثلة حقيقية للـ storage array اللي في رسمة الـ Datacenter', verbatim: false},
  {id: 'n3_l1', scene: 'V7-S8b', text: 'Example of Storage Array', verbatim: true, slide: 12},

  // V7-S9 (StudyCard - Slides 11, 12, 13)
  {id: 'sc_s11_title', scene: 'V7-S9', text: 'SAN & NAS Storage Networks', verbatim: true, slide: 11},
  {
    id: 'sc_s11_p1',
    scene: 'V7-S9',
    text: 'Storage Area Network (SAN) and Network Attached Storage (NAS) are two different storage architectures that are used to store and manage data in computer networks.',
    verbatim: true,
    slide: 11,
  },
  {
    id: 'sc_s11_p2',
    scene: 'V7-S9',
    text: 'In this section, we will explore the differences between SAN and NAS, their benefits and disadvantages, and their role in network management.',
    verbatim: true,
    slide: 11,
  },
  {id: 'sc_s12_sub', scene: 'V7-S9', text: 'Example of Storage Array', verbatim: true, slide: 12},

  // V7-S10 (Finale)
  {id: 'fin_en1', scene: 'V7-S10', text: 'SAN & NAS', verbatim: false},
  {id: 'fin_en2', scene: 'V7-S10', text: 'Storage Networks', verbatim: false},
  {id: 'fin_ar', scene: 'V7-S10', text: 'شبكات التخزين', verbatim: false},
  {id: 'fin_sum', scene: 'V7-S10', text: 'SAN = blocks للسيرفرات • NAS = files على الشبكة', verbatim: false},
  {id: 'fin_fihimt', scene: 'V7-S10', text: 'فهمت!', verbatim: false},
];

export function getText(scene: string, id: string): string {
  const found = texts.find((d) => d.scene === scene && d.id === id);
  if (!found) {
    throw new Error(`Missing text item scene=${scene} id=${id}`);
  }
  return found.text;
}
