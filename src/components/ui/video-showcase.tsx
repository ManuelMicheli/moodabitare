"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useVideoLoader } from "@/hooks/use-video-loader";
import type { VideoSources3 } from "@/types/video";

interface VideoShowcaseProps {
  sources: VideoSources3;
  poster: string;
  alt: string;
  aspectRatio?: string;
  caption?: string;
  maxWidth?: string;
  rounded?: string;
  className?: string;
}

export function VideoShowcase({
  sources,
  poster,
  alt,
  aspectRatio = "16/9",
  caption,
  maxWidth = "max-w-5xl",
  rounded = "rounded-2xl",
  className,
}: VideoShowcaseProps) {
  const { containerRef, videoRef, isInView, isPlaying, prefersReducedMotion, handlePlaying } =
    useVideoLoader({
      lazy: true,
      rootMargin: "200px",
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
      <div className={`mx-auto ${maxWidth} ${className ?? ""}`} ref={containerRef}>
        <div
          className={rounded}
          style={{ position: "relative", overflow: "hidden", width: "100%", aspectRatio }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={poster}
            alt={alt}
            className={`absolute inset-0 w-full h-full object-cover ${rounded}`}
          />
        </div>
        {caption && (
          <p className="text-sm text-mid-gray mt-3 text-center font-body">{caption}</p>
        )}
      </div>
    );
  }

  return (
    <div className={`mx-auto ${maxWidth} ${className ?? ""}`} ref={containerRef}>
      <div
        className={rounded}
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
      </div>
      {caption && (
        <p className="text-sm text-mid-gray mt-3 text-center font-body">{caption}</p>
      )}
    </div>
  );
}
