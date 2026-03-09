"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";

export interface GalleryImage {
  src: string;
  name: string;
}

interface HorizontalGalleryProps {
  images: GalleryImage[];
  alt: string;
}

export function HorizontalGallery({ images, alt }: HorizontalGalleryProps) {
  const isMobile = useIsMobile(640);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(images.length - 2) * (100 / images.length)}%`]);

  if (isMobile) {
    return (
      <section className="px-4 py-12">
        <div className="grid grid-cols-2 gap-4">
          {images.map((img, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={img.src}
                  alt={`${alt} — ${img.name}`}
                  fill
                  className="object-contain drop-shadow-lg"
                  sizes="45vw"
                />
              </div>
              <p className="mt-3 text-sm font-display font-semibold text-black-deep/80 text-center">
                {img.name}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <div ref={containerRef} style={{ height: `${images.length * 40}vh` }}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div className="flex gap-6 pl-10 lg:pl-20" style={{ x }}>
          {images.map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[50vw] lg:w-[35vw] flex flex-col items-center"
            >
              <div className="relative w-full aspect-[4/3] flex items-center justify-center">
                <Image
                  src={img.src}
                  alt={`${alt} — ${img.name}`}
                  fill
                  className="object-contain drop-shadow-2xl"
                  sizes="(max-width: 1024px) 50vw, 35vw"
                />
              </div>
              <p className="mt-3 text-base font-display font-semibold text-black-deep/80 text-center">
                {img.name}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
