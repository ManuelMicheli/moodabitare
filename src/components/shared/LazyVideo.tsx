"use client";

import { useEffect, useRef } from "react";

interface LazyVideoProps {
  src: string;
  poster: string;
  className?: string;
  ariaLabel?: string;
}

/* Plays only when intersecting viewport. Pauses when scrolled out — saves
   GPU decode, battery, and prevents scroll jank from multiple decoders. */
export function LazyVideo({ src, poster, className, ariaLabel }: LazyVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const p = el.play();
            if (p && typeof p.catch === "function") p.catch(() => {});
          } else {
            el.pause();
          }
        }
      },
      { rootMargin: "200px 0px", threshold: 0.1 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-label={ariaLabel}
      className={className}
    />
  );
}
