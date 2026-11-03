export type TextItem = { scene: string; id: string; text: string; verbatim: boolean };

export const texts: TextItem[] = [
  // V1-S1
  { scene: 'V1-S1', id: 'title_full', text: 'Network Management and Analysis', verbatim: true },
  { scene: 'V1-S1', id: 'title_part1', text: 'Network Management', verbatim: false },
  { scene: 'V1-S1', id: 'title_part2', text: 'and Analysis', verbatim: false },
  { scene: 'V1-S1', id: 'title_ar', text: 'إدارة وتحليل الشبكات', verbatim: false },
  { scene: 'V1-S1', id: 'doctor', text: 'by Dr /Amina Mohamed', verbatim: true },
  { scene: 'V1-S1', id: 'char_name', text: 'م. عمر', verbatim: false },

  // V1-S2
  { scene: 'V1-S2', id: 'univ_en', text: 'Menoufia University', verbatim: true },
  { scene: 'V1-S2', id: 'univ_ar', text: 'جامعة المنوفية', verbatim: false },
  { scene: 'V1-S2', id: 'faculty_en', text: 'Faculty of Computers and Information', verbatim: true },
  { scene: 'V1-S2', id: 'faculty_ar', text: 'كلية الحاسبات والمعلومات', verbatim: false },
  { scene: 'V1-S2', id: 'dept_en', text: 'Department of Information Technology', verbatim: true },
  { scene: 'V1-S2', id: 'dept_ar', text: 'قسم تكنولوجيا المعلومات', verbatim: false },
  { scene: 'V1-S2', id: 'date', text: '4 -10 -2023', verbatim: true },

  // V1-S3
  { scene: 'V1-S3', id: 'p1', text: 'Network Management and Analysis course.', verbatim: true },
  { scene: 'V1-S3', id: 'p2', text: 'This will be an overview of the different topics that we will cover in this course.', verbatim: true },
  { scene: 'V1-S3', id: 'lbl_cloud', text: 'Cloud', verbatim: false },
  { scene: 'V1-S3', id: 'lbl_laptop', text: 'Laptop', verbatim: false },
  { scene: 'V1-S3', id: 'lbl_desktop', text: 'Desktop PC', verbatim: false },
  { scene: 'V1-S3', id: 'lbl_phone', text: 'Smartphone', verbatim: false },
  { scene: 'V1-S3', id: 'lbl_tablet', text: 'Tablet', verbatim: false },

  // V1-S4
  { scene: 'V1-S4', id: 'agenda_title', text: 'Agenda', verbatim: true },
  { scene: 'V1-S4', id: 'tag_lec1', text: 'Lecture 1', verbatim: true },
  { scene: 'V1-S4', id: 'note_ar', text: 'المحاضرة الأولى – خريطة المواضيع', verbatim: false },

  // V1-S5
  { scene: 'V1-S5', id: 'agenda_tag', text: 'Agenda', verbatim: true },
  { scene: 'V1-S5', id: 'topics_title', text: 'Main course topics', verbatim: true },
  { scene: 'V1-S5', id: 'topic1', text: 'Datacenters', verbatim: true },
  { scene: 'V1-S5', id: 'topic1_ar', text: 'مراكز البيانات', verbatim: false },
  { scene: 'V1-S5', id: 'topic2', text: 'Desktop and service virtualization', verbatim: true },
  { scene: 'V1-S5', id: 'topic2_ar', text: 'محاكاة الديسكتوب والخدمات', verbatim: false },
  { scene: 'V1-S5', id: 'topic3', text: 'Multimedia network application', verbatim: true },
  { scene: 'V1-S5', id: 'topic3_ar', text: 'تطبيقات الشبكة متعددة الوسائط', verbatim: false },
  { scene: 'V1-S5', id: 'topic4', text: 'Network management', verbatim: true },
  { scene: 'V1-S5', id: 'topic4_ar', text: 'إدارة الشبكات', verbatim: false },

  // V1-S6
  { scene: 'V1-S6', id: 'topic5', text: 'Firewall', verbatim: true },
  { scene: 'V1-S6', id: 'topic5_ar', text: 'جدار الحماية', verbatim: false },
  { scene: 'V1-S6', id: 'topic6', text: 'SAN & NAS Storage networks.', verbatim: true },
  { scene: 'V1-S6', id: 'topic6_ar', text: 'شبكات التخزين', verbatim: false },
  { scene: 'V1-S6', id: 'topic7', text: 'Software Defined Networks (SDN)', verbatim: true },
  { scene: 'V1-S6', id: 'topic7_ar', text: 'الشبكات المعرّفة بالبرمجيات', verbatim: false },

  // V1-S7: Study Card (LAYOUT_R)
  { scene: 'V1-S7', id: 'study_s1_title', text: 'Network Management and Analysis', verbatim: true },
  { scene: 'V1-S7', id: 'study_s1_p', text: 'Network Management and Analysis course. This will be an overview of the different topics that we will cover in this course.', verbatim: true },
  { scene: 'V1-S7', id: 'study_s1_doc', text: 'by Dr /Amina Mohamed', verbatim: true },
  { scene: 'V1-S7', id: 'study_s1_univ', text: 'Menoufia University', verbatim: true },
  { scene: 'V1-S7', id: 'study_s1_fac', text: 'Faculty of Computers and Information', verbatim: true },
  { scene: 'V1-S7', id: 'study_s1_dept', text: 'Department of Information Technology', verbatim: true },
  { scene: 'V1-S7', id: 'study_s1_date', text: '4 -10 -2023', verbatim: true },
  { scene: 'V1-S7', id: 'study_s2_agenda', text: 'Agenda', verbatim: true },
  { scene: 'V1-S7', id: 'study_s2_lec', text: 'Lecture 1', verbatim: true },
  { scene: 'V1-S7', id: 'study_s3_agenda', text: 'Agenda', verbatim: true },
  { scene: 'V1-S7', id: 'study_s3_main', text: 'Main course topics', verbatim: true },
  { scene: 'V1-S7', id: 'study_topic1', text: 'Datacenters', verbatim: true },
  { scene: 'V1-S7', id: 'study_topic2', text: 'Desktop and service virtualization', verbatim: true },
  { scene: 'V1-S7', id: 'study_topic3', text: 'Multimedia network application', verbatim: true },
  { scene: 'V1-S7', id: 'study_topic4', text: 'Network management', verbatim: true },
  { scene: 'V1-S7', id: 'study_topic5', text: 'Firewall', verbatim: true },
  { scene: 'V1-S7', id: 'study_topic6', text: 'SAN & NAS Storage networks.', verbatim: true },
  { scene: 'V1-S7', id: 'study_topic7', text: 'Software Defined Networks (SDN)', verbatim: true },

  // V1-S8
  { scene: 'V1-S8', id: 'outro_title1', text: 'Network Management', verbatim: false },
  { scene: 'V1-S8', id: 'outro_title2', text: 'and Analysis', verbatim: false },
  { scene: 'V1-S8', id: 'outro_title_ar', text: 'إدارة وتحليل الشبكات', verbatim: false },
  { scene: 'V1-S8', id: 'outro_note', text: '7 مواضيع... كل موضوع ليه فيديو لوحده', verbatim: false },
];
