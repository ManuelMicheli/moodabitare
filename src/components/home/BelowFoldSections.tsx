import { FinanziamentoBanner } from "@/components/home/FinanziamentoBanner";
import { HomeServices } from "@/components/home/HomeServices";
import { RistrutturazioneBanner } from "@/components/home/RistrutturazioneBanner";
import { ValuePropositions } from "@/components/home/ValuePropositions";
import { ProductBentoGrid } from "@/components/home/ProductBentoGrid";
import { EditorialShowcase } from "@/components/home/EditorialShowcase";
import { PortfolioGallery } from "@/components/home/PortfolioGallery";
import { TestimonialsCarousel } from "@/components/home/TestimonialsCarousel";
import { CTAFinale } from "@/components/home/CTAFinale";

// Each section wrapped in `cv-auto` — uses content-visibility:auto so browser
// skips paint/layout of off-screen sections until needed (LCP + scroll perf win).
// Server-rendered HTML still shipped for SEO + zero CLS.
export function BelowFoldSections() {
  return (
    <>
      <div className="cv-auto"><ProductBentoGrid /></div>
      <div className="cv-auto"><FinanziamentoBanner /></div>
      <div className="cv-auto"><HomeServices /></div>
      <div className="cv-auto"><RistrutturazioneBanner /></div>
      <div className="cv-auto"><ValuePropositions /></div>
      <div className="cv-auto"><EditorialShowcase /></div>
      <div className="cv-auto"><PortfolioGallery /></div>
      <div className="cv-auto"><TestimonialsCarousel /></div>
      <div className="cv-auto"><CTAFinale /></div>
    </>
  );
}
