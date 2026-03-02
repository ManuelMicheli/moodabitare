"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

const slides = [
  {
    headline: "Un pezzo di design\nal prezzo di una finestra",
    subheadline: "Approfitta delle detrazioni fiscali del 50%",
    ctaText: "Contattaci",
    ctaLink: "/contatti",
  },
  {
    headline: "Serramenti, porte\ne ristrutturazioni",
    subheadline: "Oltre 30 anni di esperienza nella provincia di Varese",
    ctaText: "Scopri i prodotti",
    ctaLink: "/prodotti",
  },
  {
    headline: "Premium Partner\nOknoplast",
    subheadline: "Qualità certificata per la tua casa",
    ctaText: "Scopri di più",
    ctaLink: "/premium-partner",
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

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  // Initial entrance animation
  useEffect(() => {
    if (!contentRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

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

    return () => { tl.kill(); };
  }, []);

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

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-[75vh] min-h-[500px] flex items-end overflow-hidden bg-black-deep">
      {/* Background image */}
      <Image
        src="/images/Oknoplast_2024_home.jpg"
        alt="Oknoplast serramenti"
        fill
        priority
        className="object-cover"
      />
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black-deep/90 via-black-deep/40 to-transparent" />

      {/* Content — bottom-aligned */}
      <div ref={contentRef} className="relative z-10 w-full pb-12 lg:pb-16 px-6 sm:px-10 lg:px-20">
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

        {/* Slide indicators */}
        <div ref={indicatorsRef} className="mt-8 flex gap-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-px transition-all duration-500 ${
                i === current ? "w-16 bg-white" : "w-8 bg-white/20"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-10 lg:right-20 animate-bounce">
        <svg className="h-6 w-6 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
