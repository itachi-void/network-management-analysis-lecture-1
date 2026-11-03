// scripts/check_coverage.ts
// الاستخدام:  npx tsx scripts/check_coverage.ts V6    ← فيديو واحد
//             npx tsx scripts/check_coverage.ts all   ← كل الفيديوهات
// (بديل: node --experimental-strip-types scripts/check_coverage.ts V6)
type TextItem = {scene: string; id: string; text: string; verbatim: boolean};
type Sentence = {full: string; chunks: string[]};
type SceneTexts = {scene: string; texts: string[]};
type Check = {required: string[]; sentences: Sentence[]; recap: SceneTexts; sceneTexts?: SceneTexts[]};

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
    sceneTexts: [
      {scene: 'V2-S1', texts: [AGENDA[0]]},
      {scene: 'V2-S9b', texts: ['Datacenter', AGENDA[1], AGENDA[3], AGENDA[5], 'ESXi', 'virtual machines', 'vCenter Server', 'vSphere Client',
        'vSphere Web Client', 'terminal', 'fibre channel storage array', 'iSCSI storage array', 'NAS storage array']},
    ],
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
    sceneTexts: [
      {scene: 'V3-S1', texts: [AGENDA[1]]},
      {scene: 'V3-S12b', texts: ['Desktop and Service Virtualization', 'Datacenters', AGENDA[4], AGENDA[3], AGENDA[2], 'ESXi', 'VM', 'NGFW', 'Panorama', 'Security Policy']},
    ],
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
    sceneTexts: [
      {scene: 'V4-S1', texts: [AGENDA[2]]},
      {scene: 'V4-S8b', texts: ['Multimedia Network Application', AGENDA[2], 'Network Multimedia Applications', 'Dr. Tamer Fathy', AGENDA[3]]},
    ],
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
    sceneTexts: [
      {scene: 'V5-S1', texts: [AGENDA[3]]},
      {scene: 'V5-S5b', texts: ['Network Management', 'Datacenters', AGENDA[4], AGENDA[6], 'vCenter Server', 'vSphere Client', 'vSphere Web Client',
        'terminal', 'security', 'architectural approach to network management']},
    ],
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
    sceneTexts: [
      {scene: 'V6-S1', texts: [AGENDA[4]]},
      {scene: 'V6-S9b', texts: ['Firewall', AGENDA[1], AGENDA[3], AGENDA[6], 'NGFW', 'security', 'Firewall + VPN gateway', AGENDA[5]]},
    ],
  },
  V7: {
    required: ['SAN & NAS Storage Networks', 'Example of Storage Array'],
    sentences: [
      {full: P.s11a, chunks: ['Storage Area Network (SAN)', 'and', 'Network Attached Storage (NAS)', 'are two different storage architectures that are used to store and manage data in computer networks.']},
      {full: P.s11b, chunks: ['In this section, we will explore', 'the differences between SAN and NAS,', 'their benefits and disadvantages,', 'and their role in network management.']},
    ],
    recap: {scene: 'V7-S9', texts: ['SAN & NAS Storage Networks', P.s11a, P.s11b, 'Example of Storage Array']},
    sceneTexts: [
      {scene: 'V7-S1', texts: [AGENDA[5]]},
      {scene: 'V7-S8b', texts: ['SAN & NAS Storage Networks', 'Datacenters', AGENDA[5], 'fibre channel storage array', 'iSCSI storage array',
        'NAS storage array', 'fibre channel switch fabric / IP network', 'Example of Storage Array', AGENDA[6]]},
    ],
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
    sceneTexts: [
      {scene: 'V8-S1', texts: [AGENDA[6]]},
      {scene: 'V8-S10b', texts: ['Software Defined Networks (SDN)', AGENDA[3], AGENDA[4], AGENDA[1], 'centralized management', 'Firewall + VPN gateway',
        'Panorama', 'Controller Machine']},
    ],
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
    for (const st of c.sceneTexts ?? []) {
      const inScene = new Set(items.filter((t) => t.scene === st.scene).map((t) => norm(t.text)));
      for (const r of st.texts) if (!inScene.has(norm(r))) { console.log(`${v} SCENE TEXT MISSING (${st.scene}):`, r); vb++; }
    }
    console.log(`${v}: ${vb === 0 ? 'OK' : `${vb} problem(s)`}`);
    bad += vb;
  }
  console.log(bad === 0 ? 'ALL 100% COVERED' : `FAILED: ${bad} problem(s)`);
  process.exit(bad === 0 ? 0 : 1);
}
main();