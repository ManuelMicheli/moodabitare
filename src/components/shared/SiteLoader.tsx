"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

/* Ring geometry — viewBox 200×200, circle at center */
const RING_R = 95;
const CIRCUMFERENCE = 2 * Math.PI * RING_R;

export function SiteLoader() {
  const [isDone, setIsDone] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const ringRef = useRef<SVGCircleElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    try {
      if (sessionStorage.getItem("moschiano-loaded")) {
        hideBackdrop();
        setIsDone(true);
        return;
      }
    } catch {
      // sessionStorage unavailable
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      if (logoRef.current) logoRef.current.style.opacity = "1";
      if (ringRef.current) {
        ringRef.current.style.strokeDashoffset = "0";
        ringRef.current.style.opacity = "1";
      }
      setTimeout(() => animateOut(), 300);
      return;
    }

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    const img = logoRef.current;
    if (img && img.complete) {
      runAnimation();
    } else if (img) {
      img.onload = () => runAnimation();
      img.onerror = () => runAnimation();
    }
  }, []);

  function hideBackdrop() {
    const backdrop = document.getElementById("site-loader-backdrop");
    if (backdrop) backdrop.style.display = "none";
  }

  function waitForVideoAndExit() {
    if (!(window as any).__heroVideoExpected) {
      animateOut();
      return;
    }
    if ((window as any).__heroVideoReady) {
      animateOut();
      return;
    }

    let exited = false;
    const exit = () => {
      if (exited) return;
      exited = true;
      window.removeEventListener("hero-video-ready", exit);
      animateOut();
    };

    window.addEventListener("hero-video-ready", exit);
    setTimeout(exit, 4000);
  }

  function runAnimation() {
    const tl = gsap.timeline({
      onComplete: () => waitForVideoAndExit(),
    });

    // Logo fades in
    tl.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.92 },
      { opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" },
      0
    );

    // Ring draws itself around the logo
    tl.fromTo(
      ringRef.current,
      { strokeDashoffset: CIRCUMFERENCE, opacity: 0 },
      {
        strokeDashoffset: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power2.inOut",
      },
      0.1
    );

    // Brief hold
    tl.to({}, { duration: 0.15 });
  }

  function animateOut() {
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";

    const tl = gsap.timeline({
      onComplete: () => {
        setIsDone(true);
        hideBackdrop();
        try {
          sessionStorage.setItem("moschiano-loaded", "1");
        } catch {
          // sessionStorage unavailable
        }
      },
    });

    // Everything fades and scales up
    tl.to([logoRef.current, ringRef.current?.ownerSVGElement], {
      opacity: 0,
      scale: 1.05,
      duration: 0.35,
      ease: "power2.in",
    });

    // Overlay curtain reveal
    tl.to(
      overlayRef.current,
      {
        clipPath: "inset(0 0 100% 0)",
        duration: 0.5,
        ease: "power4.inOut",
      },
      0.15
    );
  }

  if (isDone) return null;

  return (
    <div
      ref={overlayRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#ffffff",
        clipPath: "inset(0 0 0 0)",
      }}
      aria-hidden="true"
    >
      {/* Logo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={logoRef}
        src="/logo/logo-mood-abitare-transparent-opt.png"
        alt=""
        style={{
          height: "clamp(50px, 7vw, 90px)",
          width: "auto",
          opacity: 0,
        }}
      />

      {/* SVG ring — sized to surround the full logo */}
      <svg
        viewBox="0 0 200 200"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) rotate(-90deg)",
          width: "clamp(220px, 30vw, 400px)",
          height: "clamp(220px, 30vw, 400px)",
          pointerEvents: "none",
        }}
      >
        <circle
          ref={ringRef}
          cx="100"
          cy="100"
          r={RING_R}
          fill="none"
          stroke="#7A2638"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE}
          style={{ opacity: 0 }}
        />
      </svg>
    </div>
  );
}
