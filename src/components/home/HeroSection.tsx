"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useIsMobile } from "@/hooks/useIsMobile";

const slides = [
  {
    headline: "Dove il design\nincontra il comfort",
    subheadline: "Scopri Mood Abitare — serramenti, porte e arredo per la tua casa",
    ctaText: "Scopri i prodotti",
    ctaLink: "/prodotti",
    image: "/images/Hero 1.jpg",
  },
  {
    headline: "Porte e interni\nche trasformano ogni spazio",
    subheadline: "Porte interne, blindate e portoncini d'ingresso dei migliori brand",
    ctaText: "Scopri le porte",
    ctaLink: "/prodotti/porte-interne",
    image: "/images/Hero 2.jpg",
  },
  {
    headline: "Cucine, bagni\ne arredo su misura",
    subheadline: "Progettazione completa per ogni ambiente della tua casa",
    ctaText: "Scopri l'arredo",
    ctaLink: "/prodotti/cucine-su-misura",
    image: "/images/Cucina-con-finestra-Prolux-Swing-opt.jpg",
  },
  {
    headline: "Ristrutturazioni\ncon detrazioni al 50%",
    subheadline: "Dal progetto alla consegna — oltre 30 anni di esperienza a Varese",
    ctaText: "Richiedi preventivo",
    ctaLink: "/contatti",
    image: "/images/Hero3.jpg",
  },
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const indicatorsRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);
  const isMobile = useIsMobile();

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  // Initial entrance animation
  useEffect(() => {
    if (!contentRef.current) return;

    const els = [headlineRef.current, subRef.current, ctaRef.current, indicatorsRef.current];
    // Reset all elements to visible before animating (fixes isMobile flip killing mid-animation)
    gsap.set(els, { opacity: 1, y: 0, clipPath: "none" });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    if (isMobile) {
      // Mobile: simple opacity + y, no clipPath
      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1 }
      )
        .fromTo(
          subRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.4"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.3"
        )
        .fromTo(
          indicatorsRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.4 },
          "-=0.2"
        );
    } else {
      // Desktop: full cinematic with clipPath
      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 60, clipPath: "inset(0 0 100% 0)" },
        { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)", duration: 1.2 }
      )
        .fromTo(
          subRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(
          indicatorsRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
          "-=0.3"
        );
    }

    return () => { tl.kill(); };
  }, [isMobile]);

  // Slide transition animation
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      headlineRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.9 }
    )
      .fromTo(
        subRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.4"
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.3"
      );

    return () => { tl.kill(); };
  }, [current]);

  // Auto-advance: 10s mobile, 7s desktop
  useEffect(() => {
    const timer = setInterval(next, isMobile ? 10000 : 7000);
    return () => clearInterval(timer);
  }, [next, isMobile]);

  return (
    <section className="relative flex-1 min-h-0 flex items-end overflow-hidden bg-black-deep">
      {/* Background images — stacked, crossfade on slide change */}
      {slides.map((slide, i) => (
        <Image
          key={slide.image}
          src={slide.image}
          alt={`Mood Abitare — ${slide.headline.replace("\n", " ")}`}
          fill
          priority={i === 0}
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          sizes="100vw"
        />
      ))}
      {/* Top gradient for navbar readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black-deep/50 via-black-deep/20 to-transparent pointer-events-none" />
      {/* Bottom gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black-deep/60 via-black-deep/15 to-transparent" />

      {/* Content — overlaid, bottom-aligned */}
      <div ref={contentRef} className="absolute inset-0 z-10 flex items-end">
        <div className="w-full pb-12 lg:pb-16 px-6 sm:px-10 lg:px-20">
          <div className="max-w-5xl">
            <h1
              ref={headlineRef}
              className="font-hero text-white whitespace-pre-line"
            >
              {slides[current].headline}
            </h1>

            <p
              ref={subRef}
              className="mt-6 text-body text-white/60 max-w-xl"
            >
              {slides[current].subheadline}
            </p>

            <div ref={ctaRef} className="mt-8">
              <Link
                href={slides[current].ctaLink}
                className="text-button inline-block bg-white text-black-deep px-8 py-4 hover:bg-white/85 transition-colors"
              >
                {slides[current].ctaText}
              </Link>
            </div>
          </div>

          {/* Slide indicators — 44px tap area */}
          <div ref={indicatorsRef} className="mt-8 flex gap-4">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="h-11 flex items-center"
                aria-label={`Slide ${i + 1}`}
              >
                <span
                  className={`block h-px transition-all duration-500 ${
                    i === current ? "w-16 bg-white" : "w-8 bg-white/20"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator — bounce only on desktop */}
      <div className="absolute bottom-8 right-6 sm:right-10 lg:right-20 z-10 md:animate-bounce">
        <svg className="h-6 w-6 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
