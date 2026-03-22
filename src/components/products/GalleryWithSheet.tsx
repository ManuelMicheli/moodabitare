"use client";

import { useState, useCallback, useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { HorizontalGallery, type GalleryImage } from "./HorizontalGallery";
import { ProductSheet } from "./ProductSheet";
import type { ProductDetail } from "@/lib/product-details";

interface GalleryWithSheetProps {
  images: GalleryImage[];
  alt: string;
  details: Record<string, ProductDetail>;
  cover?: boolean;
}

function GalleryWithSheetInner({ images, alt, details, cover }: GalleryWithSheetProps) {
  const [selected, setSelected] = useState<GalleryImage | null>(null);
  const searchParams = useSearchParams();
  const galleryRef = useRef<HTMLDivElement>(null);

  // Build name → segment map for gallery badges
  const segments = Object.fromEntries(
    Object.entries(details).map(([name, d]) => [name, d.segment])
  );

  // Auto-open sheet and scroll to gallery if ?prodotto= query param matches
  useEffect(() => {
    const prodotto = searchParams.get("prodotto");
    if (prodotto) {
      const match = images.find((img) => img.name === prodotto);
      if (match && details[match.name]) {
        // Scroll to gallery section first, then open sheet
        setTimeout(() => {
          galleryRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 100);
        setTimeout(() => {
          setSelected(match);
        }, 600);
      }
    }
  }, [searchParams, images, details]);

  const handleClick = useCallback((img: GalleryImage) => {
    setSelected(img);
  }, []);

  const handleClose = useCallback(() => {
    setSelected(null);
  }, []);

  const detail = selected ? details[selected.name] ?? null : null;

  return (
    <div ref={galleryRef}>
      <HorizontalGallery images={images} alt={alt} onImageClick={handleClick} segments={segments} cover={cover} />
      <ProductSheet
        detail={detail}
        imageSrc={selected?.src ?? ""}
        onClose={handleClose}
      />
    </div>
  );
}

export function GalleryWithSheet(props: GalleryWithSheetProps) {
  return (
    <Suspense>
      <GalleryWithSheetInner {...props} />
    </Suspense>
  );
}
