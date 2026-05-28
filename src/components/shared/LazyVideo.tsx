"use client";

import { useEffect, useRef } from "react";

interface LazyVideoProps {
  src: string;
  poster: string;
  className?: string;
  ariaLabel?: string;
  /* Above-the-fold hero: start buffering during HTML parse and autoplay without
     waiting for hydration. Off-screen videos stay lazy (preload="none"). */
  eager?: boolean;
}

/* Plays only when intersecting viewport. Pauses when scrolled out — saves
   GPU decode, battery, and prevents scroll jank from multiple decoders. */
export function LazyVideo({ src, poster, className, ariaLabel, eager = false }: LazyVideoProps) {
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
      autoPlay={eager}
      preload={eager ? "metadata" : "none"}
      aria-label={ariaLabel}
      className={className}
    />
  );
}
