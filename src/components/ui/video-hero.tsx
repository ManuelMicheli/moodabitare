"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useVideoLoader } from "@/hooks/use-video-loader";
import type { VideoSources3 } from "@/types/video";

interface VideoHeroProps {
  sources: VideoSources3;
  poster: string;
  alt: string;
  aspectRatio?: string;
  cover?: boolean;
  overlayOpacity?: number;
  className?: string;
  children?: React.ReactNode;
  priority?: boolean;
}

export function VideoHero({
  sources,
  poster,
  alt,
  aspectRatio = "16/9",
  cover = true,
  overlayOpacity = 0,
  className,
  children,
  priority = false,
}: VideoHeroProps) {
  const { containerRef, videoRef, isInView, isPlaying, prefersReducedMotion, handlePlaying } =
    useVideoLoader({
      lazy: !priority,
      rootMargin: "200px",
      pauseOffscreen: true,
    });

  // Load sources when coming into view (lazy mode)
  useEffect(() => {
    if (priority || !isInView) return;
    const video = videoRef.current;
    if (!video || video.querySelector("source")) return;
    video.load();
  }, [isInView, priority, videoRef]);

  if (prefersReducedMotion) {
    return (
      <div
        ref={containerRef}
        className={className}
        style={{ position: "relative", overflow: "hidden", width: "100%", aspectRatio }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={poster}
          alt={alt}
          className="absolute inset-0 w-full h-full"
          style={{ objectFit: cover ? "cover" : "contain" }}
        />
        {overlayOpacity > 0 && (
          <div
            className="absolute inset-0 bg-black"
            style={{ opacity: overlayOpacity }}
          />
        )}
        {children && (
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            {children}
          </div>
        )}
      </div>
    );
  }

  const shouldRenderSources = priority || isInView;

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ position: "relative", overflow: "hidden", width: "100%", aspectRatio }}
    >
      <motion.video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        preload={priority ? "metadata" : "none"}
        aria-label={alt}
        role="presentation"
        disablePictureInPicture
        disableRemotePlayback
        onPlaying={handlePlaying}
        className="absolute inset-0 w-full h-full"
        style={{ objectFit: cover ? "cover" : "contain" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isPlaying ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {shouldRenderSources && (
          <>
            {sources.webm?.uhd && (
              <source src={sources.webm.uhd} type="video/webm" media="(min-width: 1800px)" />
            )}
            {sources.webm && (
              <source src={sources.webm.hd} type="video/webm" media="(min-width: 768px)" />
            )}
            {sources.webm && <source src={sources.webm.sd} type="video/webm" />}
            {sources.mp4.uhd && (
              <source src={sources.mp4.uhd} type="video/mp4" media="(min-width: 1800px)" />
            )}
            <source src={sources.mp4.hd} type="video/mp4" media="(min-width: 768px)" />
            <source src={sources.mp4.sd} type="video/mp4" />
          </>
        )}
      </motion.video>

      {overlayOpacity > 0 && (
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "black", opacity: overlayOpacity }}
        />
      )}

      {children && (
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
}
