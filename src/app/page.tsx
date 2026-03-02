import { HeroSection } from "@/components/home/HeroSection";
import { ValuePropositions } from "@/components/home/ValuePropositions";
import { ProductHighlights } from "@/components/home/ProductHighlights";
import { PremiumPartnerBanner } from "@/components/home/PremiumPartnerBanner";
import { PortfolioGallery } from "@/components/home/PortfolioGallery";
import { TestimonialsCarousel } from "@/components/home/TestimonialsCarousel";
import { BrandLogos } from "@/components/home/BrandLogos";
import { CTAFinale } from "@/components/home/CTAFinale";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BrandLogos />
      <ProductHighlights />
      <ValuePropositions />
      <PremiumPartnerBanner />
      <PortfolioGallery />
      <TestimonialsCarousel />
      <CTAFinale />
    </main>
  );
}
