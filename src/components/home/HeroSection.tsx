"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { warmShowroomVideo } from "@/lib/utils";

interface Slide {
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaLink: string;
  image: string;
}

const slides: Slide[] = [
  {
    headline: "Benvenuti nel\nnostro showroom",
    subheadline: "300 mq di esposizione a Gorla Maggiore — serramenti, porte, cucine e soluzioni per tutta la casa",
    ctaText: "Scopri lo showroom",
    ctaLink: "/showroom",
    image: "/moodabitarereal/hero-home-showroom.webp",
  },
  {
    headline: "Luce, comfort\ne isolamento perfetto",
    subheadline: "Serramenti in PVC, alluminio e legno — persiane, tapparelle, frangisole e zanzariere dei migliori brand",
    ctaText: "Scopri i serramenti",
    ctaLink: "/prodotti",
    image: "https://images.unsplash.com/photo-1676389317353-1d553659ea69?w=1920&q=85&auto=format&fit=crop",
  },
  {
    headline: "Porte e sicurezza\nper proteggere chi ami",
    subheadline: "Porte interne, blindate e portoncini — grate, persiane blindate, allarmi e videosorveglianza",
    ctaText: "Scopri le soluzioni",
    ctaLink: "/prodotti/porte-interne",
    image: "https://images.unsplash.com/photo-1576338147624-409eb257a72a?w=1920&q=85&auto=format&fit=crop",
  },
  {
    headline: "Outdoor\ne spazi da vivere",
    subheadline: "Pergole, tende da sole, vetrate panoramiche e piscine — vivi il giardino tutto l'anno",
    ctaText: "Scopri l'outdoor",
    ctaLink: "/prodotti?categoria=outdoor",
    image: "https://images.unsplash.com/photo-1757439402359-aed14d39fc1b?w=1920&q=85&auto=format&fit=crop",
  },
  {
    headline: "Arredo su misura\nper ogni ambiente",
    subheadline: "Cucine, arredo bagno, parquet e ceramiche — i migliori brand made in Italy per ogni stanza",
    ctaText: "Scopri l'arredo",
    ctaLink: "/prodotti/cucine-su-misura",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=85&auto=format&fit=crop",
  },
];

const REVEAL_CONFIG = {
  transitionDuration: 1.2,
  autoplayInterval: 6,
  maxScale: 1.04,
  easing: "power2.inOut",
};

export function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [, setRevealingIndex] = useState(0);
  // Slide 0 is the LCP image. Defer slides 1-4 until after hydration so their
  // (heavy) images don't download at page load and starve LCP of bandwidth.
  const [hydrated, setHydrated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
  const isFirstRender = useRef(true);
  const isAnimatingRef = useRef(false);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  // GSAP deferred off the critical path — loaded async after hydration so it
  // doesn't inflate initial main-thread bootup. Slide 0 paints via inline CSS.
  const gsapRef = useRef<typeof import("gsap").default | null>(null);

  // Signal SiteLoader: no hero videos on this page, ready immediately
  useEffect(() => {
    (window as { __heroVideoReady?: boolean }).__heroVideoReady = true;
    window.dispatchEvent(new Event("hero-video-ready"));
  }, []);

  // ---------------------------------------------------------------------------
  // Horizontal reveal transition
  // ---------------------------------------------------------------------------
  const goToSlide = useCallback(
    (nextIndex: number) => {
      if (isAnimatingRef.current || nextIndex === current) return;
      const gsap = gsapRef.current;
      if (!gsap) return;

      const currentSlide = slidesRef.current[current];
      const nextSlide = slidesRef.current[nextIndex];
      if (!currentSlide || !nextSlide) return;

      isAnimatingRef.current = true;
      setRevealingIndex(nextIndex);
      window.dispatchEvent(new CustomEvent("hero-slide-change", { detail: nextIndex }));

      nextSlide.style.zIndex = "2";
      currentSlide.style.zIndex = "1";
      gsap.set(nextSlide, {
        clipPath: "inset(0 50%)",
        scale: 1,
        opacity: 1,
      });

      const tl = gsap.timeline({
        onComplete: () => {
          slidesRef.current.forEach((slide, i) => {
            if (!slide) return;
            if (i === nextIndex) {
              slide.style.zIndex = "1";
              gsap.set(slide, {
                clipPath: "inset(0 0%)",
                scale: 1,
                opacity: 1,
              });
            } else {
              slide.style.zIndex = "0";
              gsap.set(slide, {
                clipPath: "inset(0 50%)",
                scale: 1,
                opacity: 0,
              });
            }
          });
          setCurrent(nextIndex);
          isAnimatingRef.current = false;
        },
      });

      // Next slide: horizontal reveal from center outward (left+right)
      tl.fromTo(
        nextSlide,
        { clipPath: "inset(0 50%)" },
        {
          clipPath: "inset(0 0%)",
          duration: REVEAL_CONFIG.transitionDuration,
          ease: REVEAL_CONFIG.easing,
        }
      );

      // Current slide: subtle scale-out (no blur — blur is expensive GPU op causing jank)
      tl.to(
        currentSlide,
        {
          scale: REVEAL_CONFIG.maxScale,
          duration: REVEAL_CONFIG.transitionDuration,
          ease: REVEAL_CONFIG.easing,
        },
        "<"
      );
    },
    [current]
  );

  const goNext = useCallback(() => {
    const nextIndex = (current + 1) % slides.length;
    goToSlide(nextIndex);
  }, [current, goToSlide]);

  const goPrev = useCallback(() => {
    const prevIndex = (current - 1 + slides.length) % slides.length;
    goToSlide(prevIndex);
  }, [current, goToSlide]);

  // Autoplay
  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      goNext();
    }, REVEAL_CONFIG.autoplayInterval * 1000);
  }, [goNext]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay]);

  // Load GSAP async, then run initial slide setup. Until it resolves, slide 0
  // is already visible via inline CSS (correct first paint from SSR).
  useEffect(() => {
    let mounted = true;
    import("gsap").then((m) => {
      if (!mounted) return;
      gsapRef.current = m.default;
      slidesRef.current.forEach((slide, i) => {
        if (!slide) return;
        m.default.set(slide, {
          clipPath: i === 0 ? "inset(0 0%)" : "inset(0 50%)",
          opacity: i === 0 ? 1 : 0,
          zIndex: i === 0 ? 1 : 0,
        });
      });
    });
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    isFirstRender.current = false;
    setHydrated(true);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-[calc(100svh-3rem)] sm:h-[75svh] flex items-end overflow-hidden bg-black-deep"
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      {slides.map((slide, i) => (
        <div
          key={`slide-${i}`}
          ref={(el) => {
            slidesRef.current[i] = el;
          }}
          className="absolute inset-0"
          style={{
            opacity: i === 0 ? 1 : 0,
            clipPath: i === 0 ? "inset(0 0%)" : "inset(0 50%)",
            zIndex: i === 0 ? 1 : 0,
          }}
        >
          {(i === 0 || hydrated) && (
            <Image
              src={slide.image}
              alt={`Mood Abitare — ${slide.headline.replace("\n", " ")}`}
              fill
              priority={i === 0}
              loading={i === 0 ? undefined : "lazy"}
              sizes="100vw"
              quality={i === 0 ? 100 : 75}
              className="object-cover"
            />
          )}

          {/* Dark overlay for text contrast */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Logo + title top, subhead + CTA bottom — fullscreen layout */}
          <div className="absolute inset-0 flex flex-col justify-between px-5 sm:px-10 lg:px-16 pt-20 sm:pt-18 lg:pt-20 pb-8 sm:pb-6 lg:pb-8">
            <div className="flex flex-col items-center gap-2 sm:gap-4">
              <Image
                src="/logo/logo-mood-abitare-transparent-opt.png"
                alt="Mood Abitare"
                width={200}
                height={50}
                className="w-auto h-7 sm:h-12 lg:h-16 object-contain drop-shadow-lg brightness-0 invert"
              />
              <h2 className="font-hero text-white text-center drop-shadow-lg text-[1.2rem] sm:text-[clamp(1.5rem,3.5vw,3.25rem)] leading-[1.15]">
                {slide.headline.split("\n").map((line, li) => (
                  <span key={`${i}-${li}`} className="block">{line}</span>
                ))}
              </h2>
            </div>
            <div className="flex flex-col items-center gap-3 sm:gap-4">
              <p className="font-body text-white text-center max-w-[280px] sm:max-w-2xl drop-shadow-md text-[0.9375rem] sm:text-[clamp(1rem,1.2vw,1.375rem)] leading-relaxed">
                {slide.subheadline}
              </p>
              <Link
                href={slide.ctaLink}
                onMouseEnter={slide.ctaLink === "/showroom" ? warmShowroomVideo : undefined}
                onPointerDown={slide.ctaLink === "/showroom" ? warmShowroomVideo : undefined}
                className="text-button inline-block bg-bordeaux text-white px-6 py-3.5 sm:px-8 sm:py-4 hover:bg-bordeaux-dark transition-colors"
              >
                {slide.ctaText}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={() => {
          stopAutoplay();
          goPrev();
          startAutoplay();
        }}
        aria-label="Slide precedente"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 flex w-8 h-8 sm:w-12 sm:h-12 rounded-full border border-white/25 bg-black/35 text-white cursor-pointer items-center justify-center transition-colors duration-300 hover:bg-bordeaux/70 hover:border-bordeaux/80"
      >
        <svg className="w-4 h-4 sm:w-[18px] sm:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <button
        onClick={() => {
          stopAutoplay();
          goNext();
          startAutoplay();
        }}
        aria-label="Slide successiva"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 flex w-8 h-8 sm:w-12 sm:h-12 rounded-full border border-white/25 bg-black/35 text-white cursor-pointer items-center justify-center transition-colors duration-300 hover:bg-bordeaux/70 hover:border-bordeaux/80"
      >
        <svg className="w-4 h-4 sm:w-[18px] sm:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Counter */}
      <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-10 lg:right-20 z-10 font-ui text-[11px] sm:text-[13px] text-white/60 tracking-widest hidden sm:block">
        <span className="text-white font-semibold">
          {String(current + 1).padStart(2, "0")}
        </span>
        {" / "}
        {String(slides.length).padStart(2, "0")}
      </div>
    </section>
  );
}
