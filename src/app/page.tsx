import { HeroSection } from "@/components/home/HeroSection";
import { BrandLogos } from "@/components/home/BrandLogos";
import { BelowFoldSections } from "@/components/home/BelowFoldSections";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BrandLogos />
      <BelowFoldSections />
    </main>
  );
}
