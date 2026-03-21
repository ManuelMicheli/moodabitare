"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export function SiteLoader() {
  const [isDone, setIsDone] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const clipRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);
  const lineLeftRef = useRef<HTMLDivElement>(null);
  const lineRightRef = useRef<HTMLDivElement>(null);
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
      showAllStatic();
      setTimeout(() => animateOut(), 500);
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

  function showAllStatic() {
    if (clipRef.current) clipRef.current.style.clipPath = "inset(0 0% 0 0%)";
    if (logoRef.current) {
      logoRef.current.style.opacity = "1";
      logoRef.current.style.transform = "scale(1)";
    }
    if (decorRef.current) {
      decorRef.current.style.opacity = "1";
    }
    if (lineLeftRef.current) {
      lineLeftRef.current.style.transform = "scaleX(1)";
      lineLeftRef.current.style.opacity = "1";
    }
    if (lineRightRef.current) {
      lineRightRef.current.style.transform = "scaleX(1)";
      lineRightRef.current.style.opacity = "1";
    }
  }

  function waitForVideoAndExit() {
    // Not on the home page — no hero video to wait for
    if (!(window as any).__heroVideoExpected) {
      animateOut();
      return;
    }

    // Video already signalled ready (race condition: event fired before we listened)
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
    // Safety: max 6s additional wait so the loader doesn't stay forever on very slow connections
    setTimeout(exit, 6000);
  }

  function runAnimation() {
    const tl = gsap.timeline({
      onComplete: () => waitForVideoAndExit(),
      defaults: { ease: "expo.out" },
    });

    // Phase 1: Logo appears from center — clip-path reveals outward
    tl.to(clipRef.current, {
      clipPath: "inset(0 0% 0 0%)",
      duration: 1.4,
      ease: "power4.inOut",
    });

    // Logo subtle scale-up breathe
    tl.fromTo(
      logoRef.current,
      { scale: 0.85, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.4, ease: "power4.out" },
      0
    );

    // Phase 2: Two lines extend outward from center
    tl.to(
      lineLeftRef.current,
      {
        scaleX: 1,
        opacity: 1,
        duration: 0.7,
        ease: "power3.inOut",
      },
      1.4
    );
    tl.to(
      lineRightRef.current,
      {
        scaleX: 1,
        opacity: 1,
        duration: 0.7,
        ease: "power3.inOut",
      },
      1.4
    );

    // Hold
    tl.to({}, { duration: 0.4 });
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

    // Logo scales up slightly and fades
    tl.to(logoRef.current, {
      scale: 1.06,
      opacity: 0,
      duration: 0.6,
      ease: "power3.inOut",
    });

    // Lines fade
    tl.to(
      [lineLeftRef.current, lineRightRef.current],
      { opacity: 0, duration: 0.3, ease: "power2.in" },
      0
    );

    // Overlay splits — curtain reveal upward
    tl.to(
      overlayRef.current,
      {
        clipPath: "inset(0 0 100% 0)",
        duration: 0.8,
        ease: "power4.inOut",
      },
      0.3
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
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#2b2b2b",
        clipPath: "inset(0 0 0 0)",
      }}
      aria-hidden="true"
    >
      {/* Clip container — reveals logo from center outward */}
      <div
        ref={clipRef}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          clipPath: "inset(0 50% 0 50%)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={logoRef}
          src="/logo/logo-mood-abitare-transparent-opt.png"
          alt=""
          style={{
            height: "clamp(50px, 7vw, 90px)",
            width: "auto",
            opacity: 0,
            transform: "scale(0.85)",
            filter: "brightness(0) invert(1)",
          }}
        />
      </div>

      {/* Twin decorative lines — expand outward from center */}
      <div
        ref={decorRef}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginTop: "20px",
        }}
      >
        <div
          ref={lineLeftRef}
          style={{
            width: "40px",
            height: "1px",
            background:
              "linear-gradient(to left, rgba(255,255,255,0.4), transparent)",
            opacity: 0,
            transform: "scaleX(0)",
            transformOrigin: "right center",
          }}
        />
        <div
          style={{
            width: "4px",
            height: "4px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.4)",
            opacity: 0.6,
          }}
        />
        <div
          ref={lineRightRef}
          style={{
            width: "40px",
            height: "1px",
            background:
              "linear-gradient(to right, rgba(255,255,255,0.4), transparent)",
            opacity: 0,
            transform: "scaleX(0)",
            transformOrigin: "left center",
          }}
        />
      </div>
    </div>
  );
}
