// src/videos/V2.data.ts
export interface TextItem {
  scene: string;
  id: string;
  text: string;
  verbatim: boolean;
}

export const texts: TextItem[] = [
  // V2-S1 (Hook + AgendaChip)
  {scene: 'V2-S1', id: 'agenda_chip', text: 'Datacenters', verbatim: true},
  {scene: 'V2-S1', id: 'hook_title', text: 'آلاف السيرفرات... بتتدار إزاي؟!', verbatim: false},
  {scene: 'V2-S1', id: 'karim_name', text: 'كريم المتدرب', verbatim: false},

  // V2-S2 (Intro Card)
  {scene: 'V2-S2', id: 'omar_name', text: 'م. عمر', verbatim: false},
  {scene: 'V2-S2', id: 'title_en', text: 'Datacenter', verbatim: true},
  {scene: 'V2-S2', id: 'title_ar', text: 'مركز البيانات', verbatim: false},
  {scene: 'V2-S2', id: 'desc_ar', text: 'مكان واحد فيه السيرفرات والتخزين والشبكة', verbatim: false},

  // V2-S3 (Management Layer)
  {scene: 'V2-S3', id: 'd1', text: 'vCenter Server', verbatim: true},
  {scene: 'V2-S3', id: 'd2', text: 'vSphere Client', verbatim: true},
  {scene: 'V2-S3', id: 'd3', text: 'vSphere Web Client', verbatim: true},
  {scene: 'V2-S3', id: 'd4', text: 'terminal', verbatim: true},
  {scene: 'V2-S3', id: 'd1_ar', text: 'سيرفر الإدارة المركزي', verbatim: false},
  {scene: 'V2-S3', id: 'd2_ar', text: 'برنامج الإدارة على الكمبيوتر', verbatim: false},
  {scene: 'V2-S3', id: 'd3_ar', text: 'الإدارة من الـ browser', verbatim: false},
  {scene: 'V2-S3', id: 'd4_ar', text: 'دخول بالأوامر', verbatim: false},

  // V2-S4 (Server Groups)
  {scene: 'V2-S4', id: 'sg1', text: 'server group 1', verbatim: true},
  {scene: 'V2-S4', id: 'sg2', text: 'server group 2', verbatim: true},
  {scene: 'V2-S4', id: 'sg3', text: 'server group 3', verbatim: true},
  {scene: 'V2-S4', id: 'phys_ar', text: 'السيرفرات الحقيقية (Physical servers)', verbatim: false},

  // V2-S5 (ESXi & VMs Zoom)
  {scene: 'V2-S5', id: 'vms', text: 'virtual machines', verbatim: true},
  {scene: 'V2-S5', id: 'vm', text: 'VM', verbatim: true},
  {scene: 'V2-S5', id: 'esxi', text: 'ESXi', verbatim: true},
  {scene: 'V2-S5', id: 'esxi_note', text: 'ESXi = Hypervisor بيشغّل كذا VM على نفس السيرفر', verbatim: false},

  // V2-S6 (Storage Fabric Cloud)
  {scene: 'V2-S6', id: 'fabric', text: 'fibre channel switch fabric / IP network', verbatim: true},
  {scene: 'V2-S6', id: 'fabric_ar', text: 'شبكة تخزين مخصوصة بين السيرفرات والتخزين', verbatim: false},

  // V2-S7 (Storage Arrays)
  {scene: 'V2-S7', id: 'sa1', text: 'fibre channel storage array', verbatim: true},
  {scene: 'V2-S7', id: 'sa2', text: 'iSCSI storage array', verbatim: true},
  {scene: 'V2-S7', id: 'sa3', text: 'NAS storage array', verbatim: true},

  // V2-S8 (Legend)
  {scene: 'V2-S8', id: 'leg1_en', text: 'fibre channel', verbatim: false},
  {scene: 'V2-S8', id: 'leg1_ar', text: 'شبكة تخزين سريعة مخصوصة – block', verbatim: false},
  {scene: 'V2-S8', id: 'leg2_en', text: 'iSCSI', verbatim: false},
  {scene: 'V2-S8', id: 'leg2_ar', text: 'أوامر SCSI على شبكة IP – block', verbatim: false},
  {scene: 'V2-S8', id: 'leg3_en', text: 'NAS', verbatim: false},
  {scene: 'V2-S8', id: 'leg3_ar', text: 'ملفات مشتركة على الشبكة – file', verbatim: false},

  // V2-S9 (Original Slide 4 Diagram)
  {scene: 'V2-S9', id: 'tag_s4', text: 'Slide 4 – Datacenter', verbatim: false},
  {scene: 'V2-S9', id: 'layer1', text: 'Management', verbatim: false},
  {scene: 'V2-S9', id: 'layer2', text: 'Servers: ESXi + VMs', verbatim: false},
  {scene: 'V2-S9', id: 'layer3', text: 'Storage network', verbatim: false},
  {scene: 'V2-S9', id: 'layer4', text: 'Storage arrays', verbatim: false},

  // V2-S9b (LAYOUT_L Links)
  {scene: 'V2-S9b', id: 'center_title', text: 'Datacenter', verbatim: true},
  {scene: 'V2-S9b', id: 'n1_topic', text: 'Desktop and service virtualization', verbatim: true},
  {scene: 'V2-S9b', id: 'n2_topic', text: 'Network management', verbatim: true},
  {scene: 'V2-S9b', id: 'n3_topic', text: 'SAN & NAS Storage networks.', verbatim: true},
  {scene: 'V2-S9b', id: 'lbl_esxi', text: 'ESXi', verbatim: true},
  {scene: 'V2-S9b', id: 'lbl_vms', text: 'virtual machines', verbatim: true},
  {scene: 'V2-S9b', id: 'lbl_vcenter', text: 'vCenter Server', verbatim: true},
  {scene: 'V2-S9b', id: 'lbl_vsphere', text: 'vSphere Client', verbatim: true},
  {scene: 'V2-S9b', id: 'lbl_vsphere_web', text: 'vSphere Web Client', verbatim: true},
  {scene: 'V2-S9b', id: 'lbl_term', text: 'terminal', verbatim: true},
  {scene: 'V2-S9b', id: 'lbl_fc', text: 'fibre channel storage array', verbatim: true},
  {scene: 'V2-S9b', id: 'lbl_iscsi', text: 'iSCSI storage array', verbatim: true},
  {scene: 'V2-S9b', id: 'lbl_nas', text: 'NAS storage array', verbatim: true},

  // V2-S10 (StudyCard LAYOUT_R)
  {scene: 'V2-S10', id: 'study_title', text: 'Datacenter', verbatim: true},

  // V2-S11 (Outro LAYOUT_F)
  {scene: 'V2-S11', id: 'outro_en', text: 'Datacenter', verbatim: true},
  {scene: 'V2-S11', id: 'outro_ar', text: 'مركز البيانات', verbatim: false},
  {scene: 'V2-S11', id: 'outro_summary', text: 'Management • Servers (ESXi / VM) • Storage network • Storage arrays', verbatim: false},
  {scene: 'V2-S11', id: 'exclaim', text: 'فهمت!', verbatim: false},
];
