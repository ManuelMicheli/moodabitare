"use client";

import { useState, useCallback } from "react";
import { HorizontalGallery, type GalleryImage } from "./HorizontalGallery";
import { ProductSheet } from "./ProductSheet";
import { windowDetails } from "@/lib/window-details";

interface PvcGalleryWithSheetProps {
  images: GalleryImage[];
  alt: string;
}

export function PvcGalleryWithSheet({ images, alt }: PvcGalleryWithSheetProps) {
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  const handleClick = useCallback((img: GalleryImage) => {
    setSelected(img);
  }, []);

  const handleClose = useCallback(() => {
    setSelected(null);
  }, []);

  const detail = selected ? windowDetails[selected.name] ?? null : null;

  return (
    <>
      <HorizontalGallery images={images} alt={alt} onImageClick={handleClick} />
      <ProductSheet
        detail={detail}
        imageSrc={selected?.src ?? ""}
        onClose={handleClose}
      />
    </>
  );
}
