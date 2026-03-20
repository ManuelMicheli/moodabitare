"use client";

import { useRef } from "react";

const videos = [
  "/videos/0320(4).mp4",
  "/videos/0320(5).mp4",
  "/videos/0320(6).mp4",
];

export function ShowroomVideoPlayer() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([null, null, null]);

  return (
    <>
      {videos.map((src, i) => (
        <div key={i} className="relative aspect-[3/4] rounded-sm overflow-hidden bg-black-deep">
          <video
            ref={(el) => { videoRefs.current[i] = el; }}
            src={src}
            muted
            playsInline
            autoPlay
            loop
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      ))}
    </>
  );
}
