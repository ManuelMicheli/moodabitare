"use client";

import { LazyVideo } from "./LazyVideo";
import { R2_CDN } from "@/lib/constants";

const videos = [
  `${R2_CDN}/videos/0320(4).mp4`,
  `${R2_CDN}/videos/0320(5).mp4`,
  `${R2_CDN}/videos/0320(6).mp4`,
];

export function ShowroomVideoPlayer() {
  return (
    <>
      {videos.map((src, i) => (
        <div key={i} className="relative aspect-[3/4] rounded-sm overflow-hidden bg-black-deep">
          <LazyVideo src={src} className="absolute inset-0 w-full h-full object-cover" />
        </div>
      ))}
    </>
  );
}
