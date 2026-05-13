"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import type LenisType from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SmoothScroll() {
  const lenisRef = useRef<LenisType | null>(null);
  const pathname = usePathname();

  /* Scroll to top on every route change */
  useEffect(() => {
    const lenis = lenisRef.current;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  useEffect(() => {
    // Touch devices use native scroll — Lenis on touch causes jank, momentum loss,
    // and conflicts with iOS rubber-band. Coarse pointer = mobile/tablet.
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isCoarsePointer || prefersReducedMotion) return;

    let cleanup: (() => void) | undefined;
    let cancelled = false;

    // Lazy-load Lenis only when actually used — saves bundle for mobile users
    import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      const lenis = new Lenis({
        duration: 1.0,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      lenisRef.current = lenis;

      const onSheetOpen = () => lenis.stop();
      const onSheetClose = () => lenis.start();
      window.addEventListener("productsheet:open", onSheetOpen);
      window.addEventListener("productsheet:close", onSheetClose);

      lenis.on("scroll", ScrollTrigger.update);
      const rafCallback = (time: number) => { lenis.raf(time * 1000); };
      gsap.ticker.add(rafCallback);

      const handleClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const anchor = target.closest<HTMLAnchorElement>('a[href^="#"]');
        if (!anchor) return;
        const id = anchor.getAttribute("href");
        if (!id || id === "#") return;
        const el = document.querySelector(id);
        if (el) {
          e.preventDefault();
          lenis.scrollTo(el as HTMLElement, { offset: -80 });
        }
      };
      document.addEventListener("click", handleClick);

      cleanup = () => {
        document.removeEventListener("click", handleClick);
        window.removeEventListener("productsheet:open", onSheetOpen);
        window.removeEventListener("productsheet:close", onSheetClose);
        gsap.ticker.remove(rafCallback);
        lenis.destroy();
        lenisRef.current = null;
      };
    });

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return null;
}
