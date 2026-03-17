import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { BrandLogos } from "@/components/home/BrandLogos";
import { BelowFoldSections } from "@/components/home/BelowFoldSections";

export const metadata: Metadata = {
  title: "Mood Abitare — Serramenti, Porte e Ristrutturazioni a Varese",
  description:
    "Mood Abitare: showroom di 300mq a Gorla Maggiore (VA). Serramenti in PVC, alluminio e legno, porte interne e blindate, ristrutturazioni chiavi in mano, cucine, arredo bagno. Premium Partner Oknoplast. Oltre 30 anni di esperienza.",
  alternates: {
    canonical: "https://www.moschianosrl.it",
  },
  openGraph: {
    title: "Mood Abitare — Serramenti, Porte e Ristrutturazioni a Varese",
    description:
      "Showroom di 300mq a Gorla Maggiore. Serramenti, porte, ristrutturazioni e arredo casa. Premium Partner Oknoplast.",
    url: "https://www.moschianosrl.it",
  },
};

export default function Home() {
  return (
    <main>
      {/* Hero + brand marquee + scramble banner fill the entire first screen */}
      <HeroSection />
      <BrandLogos />
      <BelowFoldSections />
    </main>
  );
}
