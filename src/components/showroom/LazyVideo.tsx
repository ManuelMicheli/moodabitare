"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

interface LazyVideoProps {
  src: string;
  poster?: string;
  className?: string;
}

export function LazyVideo({ src, poster, className }: LazyVideoProps) {
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
          poster={poster}
          muted
          loop
          playsInline
          preload="metadata"
          onCanPlay={handleCanPlay}
          className={className}
          style={{ opacity: isReady ? 1 : 0, transition: "opacity 0.5s ease" }}
        />
      )}
      {/* Placeholder — poster image if available, else dark fill */}
      {!isReady && (
        poster ? (
          <Image
            src={poster}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, 33vw"
            className="object-cover"
            aria-hidden
          />
        ) : (
          <div
            className={`${className} bg-black-deep/80`}
            style={{ aspectRatio: "auto" }}
            aria-hidden
          />
        )
      )}
    </div>
  );
}
