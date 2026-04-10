"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface UseVideoLoaderOptions {
  lazy?: boolean;
  rootMargin?: string;
  pauseOffscreen?: boolean;
}

interface UseVideoLoaderReturn {
  containerRef: React.RefObject<HTMLDivElement | null>;
  videoRef: React.RefObject<HTMLVideoElement | null>;
  isInView: boolean;
  isPlaying: boolean;
  prefersReducedMotion: boolean;
  handlePlaying: () => void;
}

export function useVideoLoader(
  options: UseVideoLoaderOptions = {}
): UseVideoLoaderReturn {
  const { lazy = true, rootMargin = "200px", pauseOffscreen = true } = options;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isInView, setIsInView] = useState(!lazy);
  const [isPlaying, setIsPlaying] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const handlePlaying = useCallback(() => {
    setIsPlaying(true);
  }, []);

  // Intersection Observer
  useEffect(() => {
    if (!lazy) return;

    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [lazy, rootMargin]);

  // Pause/play offscreen
  useEffect(() => {
    if (!pauseOffscreen) return;
    const video = videoRef.current;
    if (!video) return;

    if (isInView) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isInView, pauseOffscreen]);

  // Reduced motion
  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mql.matches);

    const onChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return {
    containerRef,
    videoRef,
    isInView,
    isPlaying,
    prefersReducedMotion,
    handlePlaying,
  };
}
