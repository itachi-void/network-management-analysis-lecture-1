// src/videos/V8.data.ts
export interface TextItem {
  id: string;
  scene: string;
  text: string;
  verbatim: boolean;
  slide?: number;
}

export const texts: TextItem[] = [
  // V8-S1 (Slide 14 Hook)
  {id: 'agenda_chip', scene: 'V8-S1', text: 'Software Defined Networks (SDN)', verbatim: true, slide: 3},
  {id: 'hook_title', scene: 'V8-S1', text: 'كل جهاز نظبطه لوحده؟!', verbatim: false},
  {id: 'name_karim', scene: 'V8-S1', text: 'كريم المتدرب', verbatim: false},
  {id: 'excl', scene: 'V8-S1', text: '!', verbatim: false},

  // V8-S2 (Slide 14 Photo + Legend)
  {id: 's2_card_head', scene: 'V8-S2', text: 'كل جهاز في الرسمة دي ليه إعداداته', verbatim: false},
  {id: 's14_1', scene: 'V8-S2', text: 'SW Pubblico', verbatim: true, slide: 14},
  {id: 's14_1_ar', scene: 'V8-S2', text: 'Switch ناحية الشبكة العامة (Pubblico = Public)', verbatim: false},
  {id: 's14_2', scene: 'V8-S2', text: 'Router VDF', verbatim: true, slide: 14},
  {id: 's14_2_ar', scene: 'V8-S2', text: 'Router ناحية الإنترنت (متوصل بـ SW Pubblico)', verbatim: false},
  {id: 's14_3', scene: 'V8-S2', text: 'Firewall + VPN gateway', verbatim: true, slide: 14},
  {id: 's14_3_ar', scene: 'V8-S2', text: 'حماية + اتصال VPN آمن', verbatim: false},
  {id: 's14_4', scene: 'V8-S2', text: 'SW DMZ', verbatim: true, slide: 14},
  {id: 's14_4_ar', scene: 'V8-S2', text: 'Switch المنطقة المعزولة DMZ', verbatim: false},
  {id: 's14_5', scene: 'V8-S2', text: 'Balancer', verbatim: true, slide: 14},
  {id: 's14_5_ar', scene: 'V8-S2', text: 'Load balancer: بيوزّع الحمل', verbatim: false},
  {id: 's14_6', scene: 'V8-S2', text: 'SW LAN', verbatim: true, slide: 14},
  {id: 's14_6_ar', scene: 'V8-S2', text: 'Switch الشبكة الداخلية', verbatim: false},
  {id: 's14_7', scene: 'V8-S2', text: 'MOXA', verbatim: true, slide: 14},
  {id: 's14_7_ar', scene: 'V8-S2', text: 'جهاز MOXA متوصل بالشبكة', verbatim: false},
  {id: 's14_8', scene: 'V8-S2', text: 'Morfeo', verbatim: true, slide: 14},
  {id: 's14_8_ar', scene: 'V8-S2', text: 'سيرفر عليه أيقونة monitoring', verbatim: false},
  {id: 's14_9', scene: 'V8-S2', text: 'Cliente 1', verbatim: true, slide: 14},
  {id: 's14_9_ar', scene: 'V8-S2', text: 'Client (Cliente = Client)', verbatim: false},
  {id: 's14_10', scene: 'V8-S2', text: 'Cliente 2', verbatim: true, slide: 14},
  {id: 's14_10_ar', scene: 'V8-S2', text: 'Client تاني', verbatim: false},

  // V8-S3 (Slide 14 Definition)
  {id: 's14_title', scene: 'V8-S3', text: 'Software Defined Networks (SDN)', verbatim: true, slide: 14},
  {id: 's14_title_ar', scene: 'V8-S3', text: 'الشبكات المعرّفة بالبرمجيات', verbatim: false},
  {
    id: 's14_def',
    scene: 'V8-S3',
    text: 'Software-defined networking (SDN) is an architectural approach to network management that enables the centralized management of network infrastructures through software.',
    verbatim: true,
    slide: 14,
  },
  {id: 'name_omar', scene: 'V8-S3', text: 'م. عمر', verbatim: false},

  // V8-S4..S8 (Slide 15 Vector Comparison)
  {id: 's15_title', scene: 'V8-S4', text: 'Software Defined Networks (SDN)', verbatim: true, slide: 15},
  {id: 's15_trad', scene: 'V8-S4', text: 'Traditional Network', verbatim: true, slide: 15},
  {id: 's15_sw', scene: 'V8-S4', text: 'Switch', verbatim: true, slide: 15},
  {id: 's15_cp', scene: 'V8-S5', text: 'Control Plane', verbatim: true, slide: 15},
  {id: 's15_cp_ar', scene: 'V8-S5', text: 'العقل: بيقرّر الـ traffic يروح فين', verbatim: false},
  {id: 's15_dp', scene: 'V8-S5', text: 'Data Plane', verbatim: true, slide: 15},
  {id: 's15_dp_ar', scene: 'V8-S5', text: 'الشغل: بينقل الـ packets فعلًا', verbatim: false},
  {id: 's6_note', scene: 'V8-S6', text: 'كل switch لازم يتظبط لوحده', verbatim: false},
  {id: 's15_sdn', scene: 'V8-S7', text: 'Software-Defined Network', verbatim: true, slide: 15},
  {id: 's15_ctrl', scene: 'V8-S7', text: 'Controller Machine', verbatim: true, slide: 15},
  {id: 's15_prog', scene: 'V8-S8', text: 'Programmable Switch', verbatim: true, slide: 15},

  // V8-S9 (Slide 15 Original Photo)
  {id: 's9_tag', scene: 'V8-S9', text: 'Software Defined Networks (SDN)', verbatim: true, slide: 15},

  // V8-S10 (Slide 14 In this section)
  {id: 'sec_head', scene: 'V8-S10', text: 'In this section, we will discuss', verbatim: true, slide: 14},
  {id: 'sec_1', scene: 'V8-S10', text: 'how SDN works,', verbatim: true, slide: 14},
  {id: 'sec_1_ar', scene: 'V8-S10', text: 'بتشتغل إزاي', verbatim: false},
  {id: 'sec_2', scene: 'V8-S10', text: 'its benefits,', verbatim: true, slide: 14},
  {id: 'sec_2_ar', scene: 'V8-S10', text: 'فوايدها', verbatim: false},
  {id: 'sec_3', scene: 'V8-S10', text: 'and its role in network management.', verbatim: true, slide: 14},
  {id: 'sec_3_ar', scene: 'V8-S10', text: 'ودورها في إدارة الشبكات', verbatim: false},

  // V8-S10b (Links - LAYOUT_L without NextChip)
  {id: 'link_center', scene: 'V8-S10b', text: 'Software Defined Networks (SDN)', verbatim: true, slide: 14},
  {id: 'link_tag', scene: 'V8-S10b', text: 'Slides 14–15', verbatim: false},
  {id: 'n1_dir', scene: 'V8-S10b', text: 'شفناه في V5 · Slide 8', verbatim: false},
  {id: 'n1_title', scene: 'V8-S10b', text: 'Network management', verbatim: true, slide: 3},
  {id: 'n1_ar', scene: 'V8-S10b', text: 'الـ SDN طريقة للـ network management: إدارة مركزية من مكان واحد', verbatim: false},
  {id: 'n1_l1', scene: 'V8-S10b', text: 'centralized management', verbatim: true, slide: 14},
  {id: 'n2_dir', scene: 'V8-S10b', text: 'شفناه في V6 · Slides 9–10', verbatim: false},
  {id: 'n2_title', scene: 'V8-S10b', text: 'Firewall', verbatim: true, slide: 3},
  {id: 'n2_ar', scene: 'V8-S10b', text: 'نفس الـ Firewall اللي شرحناه، موجود في رسمة Slide 14', verbatim: false},
  {id: 'n2_l1', scene: 'V8-S10b', text: 'Firewall + VPN gateway', verbatim: true, slide: 14},
  {id: 'n3_dir', scene: 'V8-S10b', text: 'شفناه في V3 · Slide 6', verbatim: false},
  {id: 'n3_title', scene: 'V8-S10b', text: 'Desktop and service virtualization', verbatim: true, slide: 3},
  {id: 'n3_ar', scene: 'V8-S10b', text: 'زي Panorama في V3: مكان واحد بيدير أجهزة كتير', verbatim: false},
  {id: 'n3_l1', scene: 'V8-S10b', text: 'Panorama', verbatim: true, slide: 6},
  {id: 'n3_l2', scene: 'V8-S10b', text: 'Controller Machine', verbatim: true, slide: 15},

  // V8-S11 (StudyCard - Slides 14 & 15)
  {id: 'sc_s14_title', scene: 'V8-S11', text: 'Software Defined Networks (SDN)', verbatim: true, slide: 14},
  {
    id: 'sc_s14_p1',
    scene: 'V8-S11',
    text: 'Software-defined networking (SDN) is an architectural approach to network management that enables the centralized management of network infrastructures through software.',
    verbatim: true,
    slide: 14,
  },
  {
    id: 'sc_s14_p2',
    scene: 'V8-S11',
    text: 'In this section, we will discuss how SDN works, its benefits, and its role in network management.',
    verbatim: true,
    slide: 14,
  },

  // V8-S12 (Grand Finale)
  {id: 'fin_sdn', scene: 'V8-S12', text: 'SDN', verbatim: false},
  {id: 'fin_sub', scene: 'V8-S12', text: 'Software-Defined Networking', verbatim: false},
  {id: 'fin_ar', scene: 'V8-S12', text: 'الشبكات المعرّفة بالبرمجيات', verbatim: false},
  {id: 'fin_sum', scene: 'V8-S12', text: 'الـ Control Plane في Controller واحد = إدارة مركزية through software', verbatim: false},
  {id: 'ag_1', scene: 'V8-S12', text: 'Datacenters', verbatim: false},
  {id: 'ag_2', scene: 'V8-S12', text: 'Virtualization', verbatim: false},
  {id: 'ag_3', scene: 'V8-S12', text: 'Multimedia', verbatim: false},
  {id: 'ag_4', scene: 'V8-S12', text: 'Network management', verbatim: false},
  {id: 'ag_5', scene: 'V8-S12', text: 'Firewall', verbatim: false},
  {id: 'ag_6', scene: 'V8-S12', text: 'SAN & NAS', verbatim: false},
  {id: 'ag_7', scene: 'V8-S12', text: 'SDN', verbatim: false},
];

export function getText(scene: string, id: string): string {
  const found = texts.find((d) => d.scene === scene && d.id === id);
  if (!found) {
    throw new Error(`Missing text item scene=${scene} id=${id}`);
  }
  return found.text;
}
