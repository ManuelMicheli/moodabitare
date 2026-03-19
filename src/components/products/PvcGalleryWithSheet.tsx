"use client";

import { GalleryWithSheet } from "./GalleryWithSheet";
import type { GalleryImage } from "./HorizontalGallery";
import { windowDetails } from "@/lib/window-details";

interface PvcGalleryWithSheetProps {
  images: GalleryImage[];
  alt: string;
}

export function PvcGalleryWithSheet({ images, alt }: PvcGalleryWithSheetProps) {
  return <GalleryWithSheet images={images} alt={alt} details={windowDetails} />;
}
