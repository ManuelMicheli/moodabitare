"use client";

import dynamic from "next/dynamic";

const ProductHighlights = dynamic(
  () => import("@/components/home/ProductHighlights").then((m) => m.ProductHighlights),
  { ssr: false }
);
const ValuePropositions = dynamic(
  () => import("@/components/home/ValuePropositions").then((m) => m.ValuePropositions),
  { ssr: false }
);
const ProductBentoGrid = dynamic(
  () => import("@/components/home/ProductBentoGrid").then((m) => m.ProductBentoGrid),
  { ssr: false }
);
const PortfolioGallery = dynamic(
  () => import("@/components/home/PortfolioGallery").then((m) => m.PortfolioGallery),
  { ssr: false }
);
const TestimonialsCarousel = dynamic(
  () => import("@/components/home/TestimonialsCarousel").then((m) => m.TestimonialsCarousel),
  { ssr: false }
);
const CTAFinale = dynamic(
  () => import("@/components/home/CTAFinale").then((m) => m.CTAFinale),
  { ssr: false }
);

export function BelowFoldSections() {
  return (
    <>
      <ProductHighlights />
      <ValuePropositions />
      <ProductBentoGrid />
      <PortfolioGallery />
      <TestimonialsCarousel />
      <CTAFinale />
    </>
  );
}
