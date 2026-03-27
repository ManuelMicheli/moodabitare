"use client";

import dynamic from "next/dynamic";

const FinanziamentoBanner = dynamic(
  () => import("@/components/home/FinanziamentoBanner").then((m) => m.FinanziamentoBanner),
  { ssr: false }
);
const HomeServices = dynamic(
  () => import("@/components/home/HomeServices").then((m) => m.HomeServices),
  { ssr: false }
);
const RistrutturazioneBanner = dynamic(
  () => import("@/components/home/RistrutturazioneBanner").then((m) => m.RistrutturazioneBanner),
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
const EditorialShowcase = dynamic(
  () => import("@/components/home/EditorialShowcase").then((m) => m.EditorialShowcase),
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
      <ProductBentoGrid />
      <FinanziamentoBanner />
      <HomeServices />
      <RistrutturazioneBanner />
      <ValuePropositions />
      <EditorialShowcase />
      <PortfolioGallery />
      <TestimonialsCarousel />
      <CTAFinale />
    </>
  );
}
