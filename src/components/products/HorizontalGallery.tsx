"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";

export interface GalleryImage {
  src: string;
  name: string;
}

const segmentColor: Record<string, string> = {
  "Classic": "bg-black-deep/10 text-black-deep/60",
  "Comfort": "bg-blue-50 text-blue-700",
  "Design": "bg-amber-50 text-amber-700",
  "Scorrevoli": "bg-emerald-50 text-emerald-700",
  "Premium": "bg-bordeaux/10 text-bordeaux",
  "Top di gamma": "bg-bordeaux/15 text-bordeaux",
  "Passive House": "bg-green-50 text-green-700",
  "Sicurezza": "bg-red-50 text-red-700",
};

interface HorizontalGalleryProps {
  images: GalleryImage[];
  alt: string;
  onImageClick?: (image: GalleryImage) => void;
  gridLayout?: boolean;
  darkBg?: boolean;
  segments?: Record<string, string>;
}

function GalleryGrid({
  images,
  alt,
  onImageClick,
  isMobile,
  darkBg,
  segments,
}: {
  images: GalleryImage[];
  alt: string;
  onImageClick?: (image: GalleryImage) => void;
  isMobile: boolean;
  darkBg?: boolean;
  segments?: Record<string, string>;
}) {
  return (
    <section className={isMobile ? "px-4 py-12" : "px-10 lg:px-20 pt-0 pb-16 lg:pb-24"}>
      <div className={isMobile ? "grid grid-cols-2 gap-3" : "grid grid-cols-3 lg:grid-cols-5 gap-8"}>
        {images.map((img, i) => (
          <button
            key={i}
            type="button"
            className={`flex flex-col items-center text-left group/card ${isMobile ? "bg-white rounded-lg overflow-hidden" : ""}`}
            onClick={() => onImageClick?.(img)}
          >
            <div className={`relative w-full ${isMobile ? "aspect-[4/3]" : "aspect-[3/4]"}`}>
              <Image
                src={img.src}
                alt={`${alt} — ${img.name}`}
                fill
                className="object-contain drop-shadow-lg group-hover/card:scale-105 transition-transform duration-300"
                sizes={isMobile ? "45vw" : "(max-width: 1024px) 30vw, 18vw"}
              />
            </div>
            <div className={isMobile ? "p-3 w-full" : ""}>
              <p className={`${isMobile ? "" : "mt-3"} font-display font-semibold text-center ${isMobile ? "text-sm" : "text-base"} ${darkBg && !isMobile ? "text-white/80" : "text-black-deep/80"}`}>
                {img.name}
              </p>
              {segments?.[img.name] && (
                <span className={`inline-block mt-1.5 text-[0.65rem] font-ui font-semibold uppercase tracking-[0.1em] px-2 py-0.5 rounded-full ${segmentColor[segments[img.name]] || "bg-black-deep/5 text-black-deep/50"}`}>
                  {segments[img.name]}
                </span>
              )}
              {onImageClick && (
                <span className="mt-1 text-[0.65rem] font-ui font-medium uppercase tracking-wider text-bordeaux/60 block text-center">
                  Scheda tecnica {isMobile && "→"}
                </span>
              )}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

function HorizontalScroll({
  images,
  alt,
  onImageClick,
  segments,
}: {
  images: GalleryImage[];
  alt: string;
  onImageClick?: (image: GalleryImage) => void;
  segments?: Record<string, string>;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(images.length - 2) * (100 / images.length)}%`]);

  return (
    <div ref={containerRef} style={{ height: `${images.length * 40}vh` }}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div className="flex gap-6 pl-10 lg:pl-20" style={{ x }}>
          {images.map((img, i) => (
            <div
              key={i}
              className={`flex-shrink-0 w-[50vw] lg:w-[35vw] flex flex-col items-center ${onImageClick ? "cursor-pointer group/card" : ""}`}
              onClick={() => onImageClick?.(img)}
            >
              <div className="relative w-full aspect-[4/3] flex items-center justify-center">
                <Image
                  src={img.src}
                  alt={`${alt} — ${img.name}`}
                  fill
                  className={`object-contain drop-shadow-2xl transition-transform duration-300 ${onImageClick ? "group-hover/card:scale-105" : ""}`}
                  sizes="(max-width: 1024px) 50vw, 35vw"
                />
              </div>
              <p className="mt-3 text-base font-display font-semibold text-black-deep/80 text-center">
                {img.name}
              </p>
              {segments?.[img.name] && (
                <span className={`inline-block mt-1.5 text-[0.65rem] font-ui font-semibold uppercase tracking-[0.1em] px-2 py-0.5 rounded-full ${segmentColor[segments[img.name]] || "bg-black-deep/5 text-black-deep/50"}`}>
                  {segments[img.name]}
                </span>
              )}
              {onImageClick && (
                <span className="mt-1 text-[0.7rem] font-ui font-medium uppercase tracking-wider text-black-deep/0 group-hover/card:text-bordeaux/60 transition-colors duration-300">
                  Scheda tecnica →
                </span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export function HorizontalGallery({ images, alt, onImageClick, gridLayout, darkBg, segments }: HorizontalGalleryProps) {
  const isMobile = useIsMobile(640);

  if (isMobile || gridLayout) {
    return <GalleryGrid images={images} alt={alt} onImageClick={onImageClick} isMobile={isMobile} darkBg={darkBg} segments={segments} />;
  }

  return <HorizontalScroll images={images} alt={alt} onImageClick={onImageClick} segments={segments} />;
}
