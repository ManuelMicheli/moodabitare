"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);
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
    /** Botpress container IDs (v3.6 + legacy) */
    const BP_IDS = ["webchat-root", "fab-root", "message-preview-root", "bp-web-widget-container"];

    function findBpContainer(): HTMLElement | null {
      for (const id of BP_IDS) {
        const el = document.getElementById(id);
        if (el) return el;
      }
      return null;
    }

    /**
     * Position-based check: is the cursor/touch over ANY Botpress element?
     * Works regardless of shadow DOM, iframes, or event target quirks.
     */
    function isCursorOverBotpress(clientX: number, clientY: number): boolean {
      for (const id of BP_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (
          rect.width > 0 &&
          rect.height > 0 &&
          clientX >= rect.left &&
          clientX <= rect.right &&
          clientY >= rect.top &&
          clientY <= rect.bottom
        )
          return true;
      }
      return false;
    }

    /* DOM-walk check for the Lenis prevent callback */
    function isBotpress(node: HTMLElement | null): boolean {
      if (!node) return false;
      let el: HTMLElement | null = node;
      while (el) {
        if (BP_IDS.includes(el.id)) return true;
        const root = el.getRootNode?.();
        if (root && root !== document && (root as ShadowRoot).host) {
          el = (root as ShadowRoot).host as HTMLElement;
          continue;
        }
        el = el.parentElement;
      }
      return false;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      prevent: (node) => isBotpress(node as HTMLElement),
    });

    lenisRef.current = lenis;

    /* ---- Wheel blocker (capture phase, before Lenis) ---- */
    function blockWheelOverBp(e: WheelEvent) {
      if (isCursorOverBotpress(e.clientX, e.clientY)) {
        e.stopPropagation(); // stop Lenis from seeing it
      }
    }
    document.addEventListener("wheel", blockWheelOverBp, {
      passive: true,
      capture: true,
    });

    /* ---- Touch blocker ---- */
    let lastTouchX = 0;
    let lastTouchY = 0;
    function onTouchStart(e: TouchEvent) {
      if (e.touches.length > 0) {
        lastTouchX = e.touches[0].clientX;
        lastTouchY = e.touches[0].clientY;
      }
    }
    function blockTouchOverBp(e: TouchEvent) {
      if (isCursorOverBotpress(lastTouchX, lastTouchY)) {
        e.stopPropagation();
      }
    }
    document.addEventListener("touchstart", onTouchStart, {
      passive: true,
      capture: true,
    });
    document.addEventListener("touchmove", blockTouchOverBp, {
      passive: true,
      capture: true,
    });

    /* ---- Botpress open/close: lock page scroll entirely ---- */
    let chatOpen = false;
    let savedScrollY = 0;

    function lockPageScroll() {
      if (chatOpen) return;
      chatOpen = true;
      lenis.stop();
      savedScrollY = window.scrollY;
      document.documentElement.style.setProperty("overflow", "hidden", "important");
      document.body.style.setProperty("overflow", "hidden", "important");
      document.body.style.position = "fixed";
      document.body.style.top = `-${savedScrollY}px`;
      document.body.style.width = "100%";
      document.body.style.touchAction = "none";
    }

    function unlockPageScroll() {
      if (!chatOpen) return;
      chatOpen = false;
      document.documentElement.style.removeProperty("overflow");
      document.body.style.removeProperty("overflow");
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.touchAction = "";
      window.scrollTo(0, savedScrollY);
      lenis.start();
    }

    function hookBotpress() {
      const bp = (window as unknown as Record<string, unknown>).botpress as
        | { on: (evt: string, cb: () => void) => void }
        | undefined;
      if (!bp || !bp.on) return setTimeout(hookBotpress, 500);
      bp.on("webchat:opened", lockPageScroll);
      bp.on("webchat:closed", unlockPageScroll);
    }
    hookBotpress();

    /* ---- ProductSheet open/close: pause Lenis ---- */
    function onSheetOpen() {
      lenis.stop();
    }
    function onSheetClose() {
      lenis.start();
    }
    window.addEventListener("productsheet:open", onSheetOpen);
    window.addEventListener("productsheet:close", onSheetClose);

    // Sync Lenis scroll with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // Handle anchor links — let Lenis manage smooth scroll instead of CSS
    function handleClick(e: MouseEvent) {
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
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("wheel", blockWheelOverBp, { capture: true });
      document.removeEventListener("touchstart", onTouchStart, { capture: true });
      document.removeEventListener("touchmove", blockTouchOverBp, { capture: true });
      window.removeEventListener("productsheet:open", onSheetOpen);
      window.removeEventListener("productsheet:close", onSheetClose);
      gsap.ticker.remove(lenis.raf);
      lenis.destroy();
    };
  }, []);

  return null;
}
