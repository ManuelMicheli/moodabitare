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
  video?: { desktop: string; mobile: string };
  /** Triptych layout: 3 vertical cards — center is video (if present) or centerImage */
  triptych?: {
    leftImage: string;
    leftVideo?: string;
    centerImage?: string;
    rightImage: string;
    rightVideo?: string;
  };
}

const slides: Slide[] = [
  {
    headline: "Benvenuti nel\nnostro showroom",
    subheadline: "300 mq di esposizione a Gorla Maggiore — serramenti, porte, cucine e soluzioni per tutta la casa",
    ctaText: "Scopri lo showroom",
    ctaLink: "/showroom",
    image: "",
    video: { desktop: `${R2_CDN}/videos/hero-home-1080.mp4`, mobile: `${R2_CDN}/videos/hero-home-720.mp4` },
    triptych: { leftImage: "", rightImage: "" },
  },
  {
    headline: "Luce, comfort\ne isolamento perfetto",
    subheadline: "Serramenti in PVC, alluminio e legno — persiane, tapparelle, frangisole e zanzariere dei migliori brand",
    ctaText: "Scopri i serramenti",
    ctaLink: "/prodotti",
    image: "",
    video: { desktop: `${R2_CDN}/videos/hero-home-2-1080.mp4`, mobile: `${R2_CDN}/videos/hero-home-2-720.mp4` },
    triptych: { leftImage: "", rightImage: "" },
  },
  {
    headline: "Porte e sicurezza\nper proteggere chi ami",
    subheadline: "Porte interne, blindate e portoncini — grate, persiane blindate, allarmi e videosorveglianza",
    ctaText: "Scopri le soluzioni",
    ctaLink: "/prodotti/porte-interne",
    image: "/images/wa-1.jpeg",
    triptych: { leftImage: "", centerImage: "", rightImage: "" },
  },
  {
    headline: "Arredo, outdoor\ne spazi da vivere",
    subheadline: "Cucine su misura, bagni, parquet e ceramiche — pergole, piscine e vetrate panoramiche",
    ctaText: "Scopri l'arredo",
    ctaLink: "/prodotti/cucine-su-misura",
    image: "/images/cf8f30fe-4d69-4594-aa12-0d7137fcfeae-opt.jpg",
    triptych: { leftImage: "", centerImage: "", rightImage: "" },
  },
  {
    headline: "Ristrutturazioni\ne energie rinnovabili",
    subheadline: "Dal sopralluogo alla consegna — climatizzazione, fotovoltaico e detrazioni fino al 50%",
    ctaText: "Richiedi preventivo",
    ctaLink: "/contatti",
    image: "/images/hero3.jpg",
    triptych: { leftImage: "", centerImage: "", rightImage: "" },
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
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
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

  // Detect mobile once on mount — must run before video src is set
  // to avoid downloading the desktop video first on mobile devices
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    // Signal to SiteLoader that hero videos exist on this page
    (window as any).__heroVideoExpected = true;
  }, []);

  // ---------------------------------------------------------------------------
  // Signal SiteLoader when first hero video is buffered enough to play
  // ---------------------------------------------------------------------------
  useEffect(() => {
    if (isMobile === null) return; // Wait for mobile detection

    const firstVideoIdx = slides.findIndex((s) => s.video);
    if (firstVideoIdx === -1) {
      (window as any).__heroVideoReady = true;
      window.dispatchEvent(new Event("hero-video-ready"));
      return;
    }

    const trySignal = () => {
      const el = videoRefsMap.current.get(firstVideoIdx);
      if (!el || !el.src) {
        requestAnimationFrame(trySignal);
        return;
      }
      if (el.readyState >= 3) {
        (window as any).__heroVideoReady = true;
        window.dispatchEvent(new Event("hero-video-ready"));
        return;
      }
      el.addEventListener(
        "canplaythrough",
        () => {
          (window as any).__heroVideoReady = true;
          window.dispatchEvent(new Event("hero-video-ready"));
        },
        { once: true }
      );
    };

    trySignal();
  }, [isMobile]);

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
      className="relative h-[calc(100svh-3rem)] sm:h-[75svh] flex items-end overflow-hidden bg-black-deep"
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
          style={{ willChange: "clip-path, transform" }}
        >
          {slide.triptych ? (
            /* ── Triptych: 3 vertical cards ──────────────────── */
            <>
              <div className="absolute inset-0 bg-black-deep" />

              {/* Mobile: single media fullscreen */}
              {isMobile && (
                <div className="absolute inset-0">
                  {slide.video ? (
                    <video
                      ref={(el) => { if (el) videoRefsMap.current.set(i, el); }}
                      src={loadedVideos.has(i) ? slide.video.mobile : undefined}
                      muted
                      playsInline
                      preload="auto"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <Image
                      src={slide.triptych.centerImage || slide.image}
                      alt={slide.headline.replace("\n", " ")}
                      fill
                      sizes="100vw"
                      quality={90}
                      className="object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/40" />
                </div>
              )}

              {/* Desktop: text card + wide video */}
              {!isMobile && (
                <div className="absolute inset-0 grid grid-cols-[1fr_2fr]">
                  {/* Left card — all text content (z-[4] to sit above gradients/grain) */}
                  <div className="relative overflow-hidden bg-cream z-[4]">
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 lg:px-10 text-center">
                      <Image
                        src="/logo/logo-mood-abitare-transparent-opt.png"
                        alt="Mood Abitare"
                        width={200}
                        height={50}
                        className="w-auto h-10 lg:h-14 object-contain mb-4 lg:mb-6"
                      />
                      <h2 className="font-hero text-black-deep text-[clamp(1.2rem,2.5vw,2.5rem)] leading-[1.15]">
                        {slide.headline.split("\n").map((line, li) => (
                          <span key={`${i}-left-${li}`} className="block">{line}</span>
                        ))}
                      </h2>
                      <p className="font-body text-black-soft text-[clamp(0.8rem,1vw,1.15rem)] leading-relaxed mt-4 lg:mt-6 max-w-xs">
                        {slide.subheadline}
                      </p>
                      <Link
                        href={slide.ctaLink}
                        className="mt-5 lg:mt-8 text-button inline-block bg-bordeaux text-white px-6 py-3 lg:px-8 lg:py-4 hover:bg-bordeaux-dark transition-colors"
                      >
                        {slide.ctaText}
                      </Link>
                    </div>
                  </div>
                  {/* Right card — wide video or image */}
                  <div className="relative overflow-hidden">
                    {slide.video ? (
                      <video
                        ref={(el) => { if (el) videoRefsMap.current.set(i, el); }}
                        src={loadedVideos.has(i) ? slide.video.desktop : undefined}
                        muted
                        playsInline
                        preload="auto"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : (
                      <Image
                        src={slide.triptych.centerImage || slide.image}
                        alt={slide.headline.replace("\n", " ")}
                        fill
                        sizes="66vw"
                        quality={90}
                        className="object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/10" />
                  </div>
                </div>
              )}
            </>
          ) : slide.video ? (
            <video
              ref={(el) => { if (el) videoRefsMap.current.set(i, el); }}
              src={isMobile !== null && loadedVideos.has(i) ? (isMobile ? slide.video.mobile : slide.video.desktop) : undefined}
              muted
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : slide.image ? (
            <Image
              src={slide.image}
              alt={`Mood Abitare — ${slide.headline.replace("\n", " ")}`}
              fill
              priority={i === 0}
              sizes="100vw"
              quality={90}
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-[#2b2b2b]" />
          )}

          {/* Dark overlay for text contrast (non-triptych slides) */}
          {!slide.triptych && <div className="absolute inset-0 bg-black/40" />}

          {/* Logo + titolo — on mobile always, on desktop only for non-triptych */}
          <div className={`absolute inset-0 flex flex-col justify-between px-5 sm:px-10 lg:px-16 pt-20 sm:pt-18 lg:pt-20 pb-8 sm:pb-6 lg:pb-8 ${slide.triptych ? "sm:hidden" : ""}`}>
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
                className="text-button inline-block bg-bordeaux text-white px-6 py-3.5 sm:px-8 sm:py-4 hover:bg-bordeaux-dark transition-colors"
              >
                {slide.ctaText}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Gradients disabled for clean triptych look */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black-deep/25 via-transparent to-transparent pointer-events-none z-[3]" /> */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black-deep/35 via-transparent to-transparent pointer-events-none z-[3]" /> */}

      {/* Film grain texture overlay — disabled for clean triptych look */}
      {/* <div className="hero-grain" /> */}

      {/* Navigation arrows — hidden on small mobile, visible from sm up */}
      <button
        onClick={() => {
          stopAutoplay();
          goPrev();
          startAutoplay();
        }}
        aria-label="Slide precedente"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 flex w-8 h-8 sm:w-12 sm:h-12 rounded-full border border-white/25 bg-black/20 backdrop-blur-sm text-white cursor-pointer items-center justify-center transition-all duration-300 hover:bg-bordeaux/60 hover:border-bordeaux/80"
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
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 flex w-8 h-8 sm:w-12 sm:h-12 rounded-full border border-white/25 bg-black/20 backdrop-blur-sm text-white cursor-pointer items-center justify-center transition-all duration-300 hover:bg-bordeaux/60 hover:border-bordeaux/80"
      >
        <svg className="w-4 h-4 sm:w-[18px] sm:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Counter — bottom right, hidden on very small screens to avoid CTA overlap */}
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
