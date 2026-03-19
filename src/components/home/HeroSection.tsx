"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useIsMobile } from "@/hooks/useIsMobile";


const slides = [
  {
    headline: "Luce, comfort\ne isolamento perfetto",
    subheadline: "Serramenti in PVC, alluminio e legno — persiane, tapparelle, frangisole e zanzariere dei migliori brand",
    ctaText: "Scopri i serramenti",
    ctaLink: "/prodotti",
    image: "/images/Hero 1.jpg",
  },
  {
    headline: "Porte e sicurezza\nper proteggere chi ami",
    subheadline: "Porte interne, blindate e portoncini — grate, persiane blindate, allarmi e videosorveglianza",
    ctaText: "Scopri le soluzioni",
    ctaLink: "/prodotti/porte-interne",
    image: "/images/Hero 2.jpg",
  },
  {
    headline: "Arredo, outdoor\ne spazi da vivere",
    subheadline: "Cucine su misura, bagni, parquet e ceramiche — pergole, piscine e vetrate panoramiche",
    ctaText: "Scopri l'arredo",
    ctaLink: "/prodotti/cucine-su-misura",
    image: "/images/cf8f30fe-4d69-4594-aa12-0d7137fcfeae-opt.jpg",
  },
  {
    headline: "Ristrutturazioni\ne energie rinnovabili",
    subheadline: "Dal sopralluogo alla consegna — climatizzazione, fotovoltaico e detrazioni fino al 50%",
    ctaText: "Richiedi preventivo",
    ctaLink: "/contatti",
    image: "/images/Hero3.jpg",
  },
];

const REVEAL_CONFIG = {
  transitionDuration: 1.4,
  autoplayInterval: 3,
  maxBlur: 20,
  maxScale: 1.05,
  easing: "power2.inOut",
};

export function HeroSection() {
  const isMobile = useIsMobile();
  const [current, setCurrent] = useState(0);
  const [revealingIndex, setRevealingIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
  const isFirstRender = useRef(true);
  const isAnimatingRef = useRef(false);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);


  // ---------------------------------------------------------------------------
  // Circle reveal transition
  // ---------------------------------------------------------------------------
  const goToSlide = useCallback(
    (nextIndex: number) => {
      if (isAnimatingRef.current || nextIndex === current) return;
      isAnimatingRef.current = true;

      const currentSlide = slidesRef.current[current];
      const nextSlide = slidesRef.current[nextIndex];
      if (!currentSlide || !nextSlide) return;

      // Notify banner and trigger text scramble at the start of the reveal
      setRevealingIndex(nextIndex);
      window.dispatchEvent(new CustomEvent("hero-slide-change", { detail: nextIndex }));

      // Bring next slide on top and reset
      nextSlide.style.zIndex = "2";
      currentSlide.style.zIndex = "1";
      gsap.set(nextSlide, {
        clipPath: "inset(50% 0)",
        filter: "blur(0px)",
        scale: 1,
        opacity: 1,
      });

      const tl = gsap.timeline({
        onComplete: () => {
          // Clean up all slides
          slidesRef.current.forEach((slide, i) => {
            if (!slide) return;
            if (i === nextIndex) {
              slide.style.zIndex = "1";
              gsap.set(slide, {
                clipPath: "inset(0% 0)",
                filter: "blur(0px)",
                scale: 1,
                opacity: 1,
              });
            } else {
              slide.style.zIndex = "0";
              gsap.set(slide, {
                clipPath: "inset(50% 0)",
                filter: "blur(0px)",
                scale: 1,
                opacity: 0,
              });
            }
          });
          setCurrent(nextIndex);
          isAnimatingRef.current = false;
        },
      });

      // Next slide: vertical reveal from center outward
      tl.fromTo(
        nextSlide,
        { clipPath: "inset(50% 0)" },
        {
          clipPath: "inset(0% 0)",
          duration: REVEAL_CONFIG.transitionDuration,
          ease: REVEAL_CONFIG.easing,
        }
      );

      // Current slide: blur + scale out (simultaneous)
      tl.to(
        currentSlide,
        {
          filter: `blur(${REVEAL_CONFIG.maxBlur}px)`,
          scale: REVEAL_CONFIG.maxScale,
          duration: REVEAL_CONFIG.transitionDuration,
          ease: REVEAL_CONFIG.easing,
        },
        "<"
      );
    },
    [current]
  );

  // ---------------------------------------------------------------------------
  // Navigation
  // ---------------------------------------------------------------------------
  const goNext = useCallback(() => {
    const nextIndex = (current + 1) % slides.length;
    goToSlide(nextIndex);
  }, [current, goToSlide]);

  const goPrev = useCallback(() => {
    const prevIndex = (current - 1 + slides.length) % slides.length;
    goToSlide(prevIndex);
  }, [current, goToSlide]);

  // ---------------------------------------------------------------------------
  // Autoplay
  // ---------------------------------------------------------------------------
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

  // ---------------------------------------------------------------------------
  // Initial slide setup
  // ---------------------------------------------------------------------------
  useEffect(() => {
    slidesRef.current.forEach((slide, i) => {
      if (!slide) return;
      if (i === 0) {
        gsap.set(slide, {
          clipPath: "inset(0% 0)",
          opacity: 1,
          zIndex: 1,
        });
      } else {
        gsap.set(slide, {
          clipPath: "inset(50% 0)",
          opacity: 0,
          zIndex: 0,
        });
      }
    });
  }, []);

  // Track first render
  useEffect(() => {
    isFirstRender.current = false;
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-svh flex items-end overflow-hidden bg-black-deep"
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      {/* Slides — image + centered headline, clipped together on reveal */}
      {slides.map((slide, i) => (
        <div
          key={slide.image}
          ref={(el) => {
            slidesRef.current[i] = el;
          }}
          className="absolute inset-0"
          style={{ willChange: "clip-path, transform, filter" }}
        >
          <Image
            src={slide.image}
            alt={`Mood Abitare — ${slide.headline.replace("\n", " ")}`}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
          {/* Dark overlay for text contrast */}
          <div className="absolute inset-0 bg-black/35" />
          {/* Centered headline + CTA — revealed with the image */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-16 sm:px-6 gap-5 pb-20 lg:pb-0">
            <Image
              src="/logo/logo-mood-abitare-transparent-opt.png"
              alt="Mood Abitare"
              width={200}
              height={50}
              className="w-auto h-12 sm:h-16 object-contain drop-shadow-lg brightness-0 invert"
            />
            <h2 className="font-hero text-white text-center drop-shadow-lg text-[clamp(2.5rem,6vw,5rem)] leading-[1.1]">
              {slide.headline.split("\n").map((line, li) => (
                <span key={`${i}-${li}`} className="block">{line}</span>
              ))}
            </h2>
            <p className="font-body text-white text-center max-w-2xl drop-shadow-md text-[clamp(1.1rem,2vw,1.6rem)] leading-relaxed">
              {slide.subheadline}
            </p>
            <Link
              href={slide.ctaLink}
              className="mt-4 text-button inline-block bg-white text-black-deep px-8 py-4 hover:bg-white/85 transition-colors"
            >
              {slide.ctaText}
            </Link>
          </div>
        </div>
      ))}

      {/* Top gradient for navbar readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black-deep/40 via-transparent to-transparent pointer-events-none z-[3]" />
      {/* Bottom gradient for CTA readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black-deep/50 via-transparent to-transparent pointer-events-none z-[3]" />

      {/* Navigation arrows — desktop only */}
      <button
        onClick={() => {
          stopAutoplay();
          goPrev();
          startAutoplay();
        }}
        aria-label="Slide precedente"
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-12 sm:h-12 rounded-full border border-white/25 bg-black/20 backdrop-blur-sm text-white cursor-pointer hidden lg:flex items-center justify-center transition-all duration-300 hover:bg-bordeaux/60 hover:border-bordeaux/80"
      >
        <svg className="w-3.5 h-3.5 sm:w-[18px] sm:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-12 sm:h-12 rounded-full border border-white/25 bg-black/20 backdrop-blur-sm text-white cursor-pointer hidden lg:flex items-center justify-center transition-all duration-300 hover:bg-bordeaux/60 hover:border-bordeaux/80"
      >
        <svg className="w-3.5 h-3.5 sm:w-[18px] sm:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Counter — desktop only */}
      <div className="absolute bottom-8 right-6 sm:right-10 lg:right-20 z-10 font-ui text-[13px] text-white/60 tracking-widest hidden lg:block">
        <span className="text-white font-semibold">
          {String(current + 1).padStart(2, "0")}
        </span>
        {" / "}
        {String(slides.length).padStart(2, "0")}
      </div>

      {/* Mobile bottom bar */}
      <div
        className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-6 py-4 z-20 lg:hidden"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)" }}
      >
        {/* Dot indicators */}
        <div className="flex gap-1.5">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`h-[3px] rounded-full transition-all duration-300 ${
                i === current ? "w-6 bg-white" : "w-4 bg-white/25"
              }`}
            />
          ))}
        </div>
        {/* Arrow buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => {
              stopAutoplay();
              goPrev();
              startAutoplay();
            }}
            aria-label="Slide precedente"
            className="w-11 h-11 flex items-center justify-center border border-white/30 bg-white/5 text-white"
          >
            <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
            className="w-11 h-11 flex items-center justify-center border border-white/30 bg-white/5 text-white"
          >
            <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
