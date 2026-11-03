// src/compositions/NewComponentsView.tsx
import React from 'react';
import {AbsoluteFill} from 'remotion';
import {
  Paper,
  SlideBadge,
  AgendaChip,
  LayoutL,
  StudyCard,
  Caption,
} from '../components';

// 1. Debug view testing AgendaChip + SlideBadge + LayoutL (LinkNode, SlideCrop, NextChip, Arrow)
export const LayoutLTestView: React.FC = () => {
  return (
    <AbsoluteFill>
      <Paper />
      <AbsoluteFill style={{zIndex: 1}}>
        <AgendaChip topicNumber={1} topicTitle="Datacenters" startFrame={0} />
        <SlideBadge text="Lecture 1 · 2/8" startFrame={0} />
        <LayoutL
          centerTopicTitle="Datacenter"
          centerSlideTag="Slide 4"
          nextTopicTitle="Desktop and service virtualization"
          nodes={[
            {
              position: 'N1',
              directionText: 'هنشوفه بالتفصيل في V3 · Slides 5–6',
              topicTitle: 'Desktop and service virtualization',
              arabicText: 'صندوق ESXi اللي جوه السيرفر بيشغّل كذا VM مع بعض',
              labels: ['ESXi', 'virtual machines', 'VM'],
              crop: {
                src: 'slides_up/s04_datacenter.png',
                region: {x0: 1, x1: 24, y0: 50, y1: 70},
              },
            },
            {
              position: 'N2',
              directionText: 'هنشوفه بالتفصيل في V5 · Slide 8',
              topicTitle: 'Network management',
              arabicText: 'الطبقة اللي فوق كلها أدوات إدارة الشبكة والسيرفرات',
              labels: ['vCenter Server', 'vSphere Client', 'terminal'],
              crop: {
                src: 'slides_up/s04_datacenter.png',
                region: {x0: 21, x1: 95, y0: 0, y1: 18},
              },
            },
            {
              position: 'N3',
              directionText: 'هنشوفه بالتفصيل في V7 · Slides 11–13',
              topicTitle: 'SAN & NAS Storage networks.',
              arabicText: 'الطبقة اللي تحت هي شبكات التخزين بأنواعها التلاتة',
              labels: [
                'fibre channel storage array',
                'iSCSI storage array',
                'NAS storage array',
              ],
              crop: {
                src: 'slides_up/s04_datacenter.png',
                region: {x0: 35, x1: 99, y0: 66, y1: 97},
              },
            },
          ]}
        />
        <Caption text="رسمة الـ Datacenter دي جواها 3 مواضيع جايين في المحاضرة!" startFrame={0} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// 2. Debug view testing StudyCard (LAYOUT_R)
export const StudyCardTestView: React.FC = () => {
  return (
    <AbsoluteFill>
      <Paper />
      <AbsoluteFill style={{zIndex: 1}}>
        <SlideBadge text="Lecture 1 · 2/8 · Slide 4" startFrame={0} />
        <StudyCard
          startFrame={0}
          slideTags={['Slide 4']}
          blocks={[
            {
              slideNumber: 4,
              title: 'Datacenter',
              paragraphs: [
                'vCenter Server · vSphere Client · vSphere Web Client · terminal',
                'server group 1 · server group 2 · server group 3 · virtual machines · VM · ESXi',
                'fibre channel switch fabric / IP network · fibre channel storage array · iSCSI storage array · NAS storage array',
              ],
              imageSrc: 'slides_up/s04_datacenter.png',
              fromImageNotice: true,
            },
          ]}
          glossary={[
            {term: 'Datacenter', meaning: 'مركز البيانات'},
            {term: 'vCenter Server', meaning: 'سيرفر الإدارة المركزي'},
            {term: 'vSphere Client / Web Client', meaning: 'برنامج الإدارة / الإدارة من الـ browser'},
            {term: 'terminal', meaning: 'شاشة أوامر نصية'},
            {term: 'server group', meaning: 'مجموعة سيرفرات حقيقية'},
            {term: 'ESXi (Hypervisor)', meaning: 'نظام بيشغّل كذا VM على سيرفر واحد'},
            {term: 'virtual machines (VM)', meaning: 'أجهزة افتراضية'},
            {term: 'fibre channel switch fabric / IP network', meaning: 'شبكة تخزين سريعة / شبكة IP'},
            {term: 'fibre channel / iSCSI / NAS storage array', meaning: 'وحدات التخزين التلاتة'},
          ]}
        />
        <Caption text="ده ملخص شريحة الـ Datacenter كامل... وقّف الفيديو وذاكره براحتك." startFrame={0} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
