"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface HorizontalGalleryProps {
  images: string[];
  alt: string;
}

export function HorizontalGallery({ images, alt }: HorizontalGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(images.length - 2) * (100 / images.length)}%`]);

  return (
    <div ref={containerRef} style={{ height: `${images.length * 40}vh` }}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div className="flex gap-6 pl-6 sm:pl-10 lg:pl-20" style={{ x }}>
          {images.map((src, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 w-[70vw] sm:w-[50vw] lg:w-[35vw] aspect-[4/3] overflow-hidden bg-warm-gray/10"
            >
              <Image
                src={src}
                alt={`${alt} — modello ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 70vw, (max-width: 1024px) 50vw, 35vw"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
