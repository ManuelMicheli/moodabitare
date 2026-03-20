"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { R2_CDN } from "@/lib/constants";

interface Slide {
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaLink: string;
  image: string;
  video?: string;
}

const slides: Slide[] = [
  {
    headline: "Benvenuti nel\nnostro showroom",
    subheadline: "300 mq di esposizione a Gorla Maggiore — serramenti, porte, cucine e soluzioni per tutta la casa",
    ctaText: "Scopri lo showroom",
    ctaLink: "/showroom",
    image: "",
    video: `${R2_CDN}/videos/0320(3).mp4`,
  },
  {
    headline: "Luce, comfort\ne isolamento perfetto",
    subheadline: "Serramenti in PVC, alluminio e legno — persiane, tapparelle, frangisole e zanzariere dei migliori brand",
    ctaText: "Scopri i serramenti",
    ctaLink: "/prodotti",
    image: "",
    video: `${R2_CDN}/videos/IMG_7923.mp4`,
  },
  {
    headline: "Porte e sicurezza\nper proteggere chi ami",
    subheadline: "Porte interne, blindate e portoncini — grate, persiane blindate, allarmi e videosorveglianza",
    ctaText: "Scopri le soluzioni",
    ctaLink: "/prodotti/porte-interne",
    image: "/images/WhatsApp Image 2026-03-20 at 17.09.11 (1).jpeg",
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

/** Find the next slide index that has a video */
function findNextVideoIndex(fromIndex: number): number | null {
  for (let offset = 1; offset < slides.length; offset++) {
    const idx = (fromIndex + offset) % slides.length;
    if (slides[idx].video) return idx;
  }
  return null;
}

/** Max time (ms) to wait for a video to buffer before skipping */
const VIDEO_READY_TIMEOUT = 4000;

const REVEAL_CONFIG = {
  transitionDuration: 1.4,
  autoplayInterval: 3,
  maxBlur: 20,
  maxScale: 1.05,
  easing: "power2.inOut",
};

export function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [revealingIndex, setRevealingIndex] = useState(0);
  const [loadedVideos, setLoadedVideos] = useState<Set<number>>(() => {
    // Preload both hero video slides immediately (they download during SiteLoader)
    const initial = new Set<number>();
    slides.forEach((s, i) => { if (s.video) initial.add(i); });
    return initial;
  });
  const containerRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
  const isFirstRender = useRef(true);
  const isAnimatingRef = useRef(false);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const videoRefsMap = useRef<Map<number, HTMLVideoElement>>(new Map());

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
    // Se la slide corrente è un video, non avviare il timer
    const currentSlide = slides[current];
    if ("video" in currentSlide && currentSlide.video) return;
    autoplayRef.current = setInterval(() => {
      goNext();
    }, REVEAL_CONFIG.autoplayInterval * 1000);
  }, [goNext, current]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  // ---------------------------------------------------------------------------
  // Preload next video when current slide changes
  // ---------------------------------------------------------------------------
  useEffect(() => {
    const nextVideo = findNextVideoIndex(current);
    if (nextVideo !== null) {
      setLoadedVideos((prev) => {
        if (prev.has(nextVideo)) return prev;
        const next = new Set(prev);
        next.add(nextVideo);
        return next;
      });
    }
  }, [current]);

  // ---------------------------------------------------------------------------
  // Play / pause videos & manage autoplay per slide
  // ---------------------------------------------------------------------------
  useEffect(() => {
    const slide = slides[current];

    // Pause all videos except current
    videoRefsMap.current.forEach((vid, idx) => {
      if (idx !== current) {
        vid.pause();
      }
    });

    if (slide.video) {
      stopAutoplay();
      const videoEl = videoRefsMap.current.get(current);
      if (!videoEl) return;

      const playVideo = () => {
        videoEl.currentTime = 0;
        videoEl.play().catch(() => {});
      };

      const onEnded = () => {
        videoEl.removeEventListener("ended", onEnded);
        goNext();
      };
      videoEl.addEventListener("ended", onEnded);

      // If enough data is buffered, play immediately
      if (videoEl.readyState >= 3) {
        playVideo();
      } else {
        // Wait for enough data with a timeout fallback
        const onCanPlay = () => {
          videoEl.removeEventListener("canplaythrough", onCanPlay);
          clearTimeout(fallbackTimer);
          playVideo();
        };
        const fallbackTimer = setTimeout(() => {
          videoEl.removeEventListener("canplaythrough", onCanPlay);
          // Try to play anyway — if it stutters, at least it starts
          playVideo();
        }, VIDEO_READY_TIMEOUT);
        videoEl.addEventListener("canplaythrough", onCanPlay);
      }

      return () => {
        videoEl.removeEventListener("ended", onEnded);
      };
    } else {
      startAutoplay();
    }
    return () => stopAutoplay();
  }, [current, startAutoplay, stopAutoplay, goNext]);

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
      className="relative h-svh sm:h-[80svh] flex items-end overflow-hidden bg-black-deep"
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      {/* Slides — image + centered headline, clipped together on reveal */}
      {slides.map((slide, i) => (
        <div
          key={`slide-${i}`}
          ref={(el) => {
            slidesRef.current[i] = el;
          }}
          className="absolute inset-0"
          style={{ willChange: "clip-path, transform, filter" }}
        >
          {slide.video ? (
            <video
              ref={(el) => { if (el) videoRefsMap.current.set(i, el); }}
              src={loadedVideos.has(i) ? slide.video : undefined}
              muted
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <Image
              src={slide.image}
              alt={`Mood Abitare — ${slide.headline.replace("\n", " ")}`}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
          )}
          {/* Dark overlay for text contrast */}
          <div className="absolute inset-0 bg-black/35" />
          {/* Centered headline + CTA — revealed with the image */}
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 sm:pb-20 lg:pb-24 px-6 sm:px-10 lg:px-16 gap-4 sm:gap-5">
            <Image
              src="/logo/logo-mood-abitare-transparent-opt.png"
              alt="Mood Abitare"
              width={200}
              height={50}
              className="w-auto h-10 sm:h-12 lg:h-16 object-contain drop-shadow-lg brightness-0 invert"
            />
            <h2 className="font-hero text-white text-center drop-shadow-lg text-[clamp(1.15rem,4vw,3rem)] leading-[1.1]">
              {slide.headline.split("\n").map((line, li) => (
                <span key={`${i}-${li}`} className="block">{line}</span>
              ))}
            </h2>
            <p className="font-body text-white text-center max-w-2xl drop-shadow-md text-[clamp(0.75rem,1.2vw,1.4rem)] leading-relaxed px-2">
              {slide.subheadline}
            </p>
            <Link
              href={slide.ctaLink}
              className="mt-2 sm:mt-4 text-button inline-block bg-white text-black-deep px-6 py-3 sm:px-8 sm:py-4 hover:bg-white/85 transition-colors"
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
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-12 sm:h-12 rounded-full border border-white/25 bg-black/20 backdrop-blur-sm text-white cursor-pointer flex items-center justify-center transition-all duration-300 hover:bg-bordeaux/60 hover:border-bordeaux/80"
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
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-12 sm:h-12 rounded-full border border-white/25 bg-black/20 backdrop-blur-sm text-white cursor-pointer flex items-center justify-center transition-all duration-300 hover:bg-bordeaux/60 hover:border-bordeaux/80"
      >
        <svg className="w-3.5 h-3.5 sm:w-[18px] sm:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Counter — bottom right */}
      <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-10 lg:right-20 z-10 font-ui text-[11px] sm:text-[13px] text-white/60 tracking-widest">
        <span className="text-white font-semibold">
          {String(current + 1).padStart(2, "0")}
        </span>
        {" / "}
        {String(slides.length).padStart(2, "0")}
      </div>

    </section>
  );
}
