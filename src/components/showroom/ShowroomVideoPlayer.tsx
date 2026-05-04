"use client";

import { LazyVideo } from "./LazyVideo";
import { R2_CDN } from "@/lib/constants";

const videos: { src: string; poster: string }[] = [
  { src: `${R2_CDN}/videos/0320(4).mp4`, poster: "/showroom/wm-29.png" },
  { src: `${R2_CDN}/videos/0320(5).mp4`, poster: "/showroom/wm-32.png" },
  { src: `${R2_CDN}/videos/0320(6).mp4`, poster: "/showroom/wm-33.png" },
];

export function ShowroomVideoPlayer() {
  return (
    <>
      {videos.map(({ src, poster }, i) => (
        <div key={i} className="relative aspect-[3/4] rounded-sm overflow-hidden bg-black-deep">
          <LazyVideo src={src} poster={poster} className="absolute inset-0 w-full h-full object-cover" />
        </div>
      ))}
    </>
  );
}
