"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface LazyVideoProps {
  src: string;
  className?: string;
}

export function LazyVideo({ src, className }: LazyVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const handleCanPlay = useCallback(() => {
    setIsReady(true);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Start loading when within 400px of viewport
    const preloadObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          preloadObserver.disconnect();
        }
      },
      { rootMargin: "400px" }
    );

    preloadObserver.observe(container);
    return () => preloadObserver.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad) return;

    // Play/pause based on visibility
    const playObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: "50px" }
    );

    playObserver.observe(video);
    return () => playObserver.disconnect();
  }, [shouldLoad]);

  return (
    <div ref={containerRef} className="relative">
      {shouldLoad && (
        <video
          ref={videoRef}
          src={src}
          muted
          loop
          playsInline
          preload="metadata"
          onCanPlay={handleCanPlay}
          className={className}
          style={{ opacity: isReady ? 1 : 0, transition: "opacity 0.5s ease" }}
        />
      )}
      {/* Placeholder shimmer while loading */}
      {!isReady && (
        <div
          className={`${className} bg-black-deep/80`}
          style={{ aspectRatio: "auto" }}
          aria-hidden
        />
      )}
    </div>
  );
}
