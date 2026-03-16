'use client';

import dynamic from 'next/dynamic';
import { IntroEmozionale } from './IntroEmozionale';

const ScrollExpandMedia = dynamic(
  () => import('@/components/ui/ScrollExpandMedia'),
  { ssr: false }
);

export function ChiSiamoHero() {
  return (
    <ScrollExpandMedia
      mediaSrc="/images/cf8f30fe-4d69-4594-aa12-0d7137fcfeae-opt.jpg"
      bgImageSrc="/images/cf8f30fe-4d69-4594-aa12-0d7137fcfeae-opt.jpg"
      title="Mood Abitare Benvenuti a casa vostra"
      subtitle="Chi siamo"
      scrollToExpand="Scorri per scoprire"
      textBlend
    >
      <IntroEmozionale />
    </ScrollExpandMedia>
  );
}
