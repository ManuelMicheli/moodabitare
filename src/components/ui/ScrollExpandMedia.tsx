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
          alt={title || 'Mood Abitare'}
          fill
          className="object-cover"
          priority
          sizes="100vw"
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
  const [, forceRender] = useState(0);
  const progressRef = useRef(0);
  const expandedRef = useRef(false);
  const contentRef = useRef(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const handleWheel = (e: globalThis.WheelEvent) => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      if (rect.top > window.innerHeight || rect.bottom < 0) return;

      if (expandedRef.current && e.deltaY < 0 && rect.top >= -5) {
        expandedRef.current = false;
        e.preventDefault();
        cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => forceRender((n) => n + 1));
      } else if (!expandedRef.current && rect.top <= 5 && rect.top >= -5) {
        e.preventDefault();
        const scrollDelta = e.deltaY * 0.0009;
        const newProgress = Math.min(Math.max(progressRef.current + scrollDelta, 0), 1);
        progressRef.current = newProgress;

        if (newProgress >= 1) {
          expandedRef.current = true;
          contentRef.current = true;
        } else if (newProgress < 0.75) {
          contentRef.current = false;
        }

        cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => forceRender((n) => n + 1));
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const scrollProgress = progressRef.current;
  const showContent = contentRef.current;
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
              fill
              className="object-cover"
              priority
              sizes="100vw"
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
                    alt={title || 'Mood Abitare'}
                    fill
                    className="object-cover rounded-xl"
                    sizes="95vw"
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
                      className="font-ui text-white/80 text-sm"
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
