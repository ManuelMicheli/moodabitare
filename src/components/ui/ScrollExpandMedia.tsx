'use client';

import {
  useEffect,
  useRef,
  useState,
  ReactNode,
} from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/useIsMobile';

interface ScrollExpandMediaProps {
  mediaSrc: string;
  bgImageSrc: string;
  title?: string;
  subtitle?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

/* ── Mobile: static hero + content (no scroll-jacking) ──────── */

function MobileScrollExpandMedia({
  mediaSrc,
  title,
  subtitle,
  children,
}: ScrollExpandMediaProps) {
  const firstWord = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

  return (
    <div>
      {/* Full-bleed hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-black-deep">
        <Image
          src={mediaSrc}
          alt={title || 'Moschiano Srl'}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black-deep/40" />

        <div className="relative z-10 text-center px-6">
          <h2
            className="font-display font-bold uppercase leading-[0.9] tracking-[-0.03em] text-white"
            style={{ fontSize: 'clamp(1.75rem, 1.2rem + 3.5vw, 4rem)' }}
          >
            {firstWord}
          </h2>
          <h2
            className="font-display font-bold uppercase leading-[0.9] tracking-[-0.03em] text-white mt-3"
            style={{ fontSize: 'clamp(1.75rem, 1.2rem + 3.5vw, 4rem)' }}
          >
            {restOfTitle}
          </h2>
          {subtitle && (
            <p className="font-display text-lg text-white/60 mt-6">
              {subtitle}
            </p>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="px-6 py-10">
        {children}
      </section>
    </div>
  );
}

/* ── Desktop: cinematic scroll-expand (unchanged) ───────────── */

function DesktopScrollExpandMedia({
  mediaSrc,
  bgImageSrc,
  title,
  subtitle,
  scrollToExpand,
  textBlend,
  children,
}: ScrollExpandMediaProps) {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState<boolean>(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setScrollProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
  }, []);

  useEffect(() => {
    const handleWheel = (e: globalThis.WheelEvent) => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      if (rect.top > window.innerHeight || rect.bottom < 0) return;

      if (mediaFullyExpanded && e.deltaY < 0 && rect.top >= -5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded && rect.top <= 5 && rect.top >= -5) {
        e.preventDefault();
        const scrollDelta = e.deltaY * 0.0009;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1
        );
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [scrollProgress, mediaFullyExpanded]);

  const mediaWidth = 300 + scrollProgress * 1250;
  const mediaHeight = 400 + scrollProgress * 400;
  const textTranslateX = scrollProgress * 150;

  const firstWord = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

  return (
    <div
      ref={sectionRef}
      className="transition-colors duration-700 ease-in-out overflow-x-hidden"
    >
      <section className="relative flex flex-col items-center justify-start min-h-[100dvh]">
        <div className="relative w-full flex flex-col items-center min-h-[100dvh]">
          {/* Background image */}
          <motion.div
            className="absolute inset-0 z-0 h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 - scrollProgress }}
            transition={{ duration: 0.1 }}
          >
            <Image
              src={bgImageSrc}
              alt="Background"
              width={1920}
              height={1080}
              className="w-screen h-screen"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
              unoptimized
            />
            <div className="absolute inset-0 bg-black-deep/20" />
          </motion.div>

          <div className="container mx-auto flex flex-col items-center justify-start relative z-10">
            <div className="flex flex-col items-center justify-center w-full h-[100dvh] relative">
              {/* Expanding media */}
              <div
                className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-none rounded-2xl"
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: '95vw',
                  maxHeight: '85vh',
                  boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.3)',
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={mediaSrc}
                    alt={title || 'Moschiano Srl'}
                    width={1280}
                    height={720}
                    className="w-full h-full object-cover rounded-xl"
                    unoptimized
                  />
                  <motion.div
                    className="absolute inset-0 bg-black-deep/50 rounded-xl"
                    initial={{ opacity: 0.7 }}
                    animate={{ opacity: 0.7 - scrollProgress * 0.3 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>

                {/* Subtitle + scroll hint */}
                <div className="flex flex-col items-center text-center relative z-10 mt-4 transition-none">
                  {subtitle && (
                    <p
                      className="font-display text-lg text-white/60"
                      style={{ transform: `translateX(-${textTranslateX}vw)` }}
                    >
                      {subtitle}
                    </p>
                  )}
                  {scrollToExpand && (
                    <p
                      className="font-ui text-white/40 text-sm"
                      style={{ transform: `translateX(${textTranslateX}vw)` }}
                    >
                      {scrollToExpand}
                    </p>
                  )}
                </div>
              </div>

              {/* Title text */}
              <div
                className={`flex items-center justify-center text-center gap-4 w-full relative z-10 transition-none flex-col ${
                  textBlend ? 'mix-blend-difference' : 'mix-blend-normal'
                }`}
              >
                <motion.h2
                  className="font-display font-bold uppercase leading-[0.9] tracking-[-0.03em] text-white transition-none"
                  style={{
                    fontSize: 'clamp(1.75rem, 1.2rem + 3.5vw, 4rem)',
                    transform: `translateX(-${textTranslateX}vw)`,
                  }}
                >
                  {firstWord}
                </motion.h2>
                <motion.h2
                  className="font-display font-bold uppercase leading-[0.9] tracking-[-0.03em] text-white transition-none"
                  style={{
                    fontSize: 'clamp(1.75rem, 1.2rem + 3.5vw, 4rem)',
                    transform: `translateX(${textTranslateX}vw)`,
                  }}
                >
                  {restOfTitle}
                </motion.h2>
              </div>
            </div>

            {/* Content revealed after expansion */}
            <motion.section
              className="flex flex-col w-full px-6 sm:px-10 lg:px-20 py-10 lg:py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.7 }}
            >
              {children}
            </motion.section>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ── Entry point ────────────────────────────────────────────── */

const ScrollExpandMedia = (props: ScrollExpandMediaProps) => {
  const isMobile = useIsMobile();

  if (isMobile) return <MobileScrollExpandMedia {...props} />;
  return <DesktopScrollExpandMedia {...props} />;
};

export default ScrollExpandMedia;
