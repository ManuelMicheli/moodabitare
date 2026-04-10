"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useVideoLoader } from "@/hooks/use-video-loader";
import type { VideoSources2 } from "@/types/video";

interface VideoInlineProps {
  sources: VideoSources2;
  poster: string;
  alt: string;
  aspectRatio?: string;
  rounded?: string;
  className?: string;
}

export function VideoInline({
  sources,
  poster,
  alt,
  aspectRatio = "16/9",
  rounded = "rounded-2xl",
  className,
}: VideoInlineProps) {
  const { containerRef, videoRef, isInView, isPlaying, prefersReducedMotion, handlePlaying } =
    useVideoLoader({
      lazy: true,
      rootMargin: "100px",
      pauseOffscreen: true,
    });

  useEffect(() => {
    if (!isInView) return;
    const video = videoRef.current;
    if (!video || video.querySelector("source")) return;
    video.load();
  }, [isInView, videoRef]);

  if (prefersReducedMotion) {
    return (
      <div
        ref={containerRef}
        className={`${rounded} ${className ?? ""}`}
        style={{ position: "relative", overflow: "hidden", width: "100%", aspectRatio }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={poster}
          alt={alt}
          className={`absolute inset-0 w-full h-full object-cover ${rounded}`}
        />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`${rounded} ${className ?? ""}`}
      style={{ position: "relative", overflow: "hidden", width: "100%", aspectRatio }}
    >
      <motion.video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        preload="none"
        aria-label={alt}
        role="presentation"
        disablePictureInPicture
        disableRemotePlayback
        onPlaying={handlePlaying}
        className={`absolute inset-0 w-full h-full object-cover ${rounded}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isPlaying ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {isInView && (
          <>
            {sources.webm && (
              <source src={sources.webm.hd} type="video/webm" media="(min-width: 768px)" />
            )}
            {sources.webm && <source src={sources.webm.sd} type="video/webm" />}
            <source src={sources.mp4.hd} type="video/mp4" media="(min-width: 768px)" />
            <source src={sources.mp4.sd} type="video/mp4" />
          </>
        )}
      </motion.video>
    </div>
  );
}
