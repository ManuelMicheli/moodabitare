import type { Metadata } from "next";
import Script from "next/script";
import { HeroSection } from "@/components/home/HeroSection";
import { BrandLogos } from "@/components/home/BrandLogos";
import { BelowFoldSections } from "@/components/home/BelowFoldSections";
import { testimonials } from "@/lib/testimonials-data";

export const metadata: Metadata = {
  title: "Mood Abitare — Serramenti, Porte e Ristrutturazioni a Varese",
  description:
    "Mood Abitare: showroom di 300mq a Gorla Maggiore (VA). Serramenti in PVC, alluminio e legno, porte interne e blindate, ristrutturazioni chiavi in mano, cucine, arredo bagno. Premium Partner Oknoplast. Oltre 30 anni di esperienza.",
  alternates: {
    canonical: "https://www.moodabitare.it",
  },
  openGraph: {
    title: "Mood Abitare — Serramenti, Porte e Ristrutturazioni a Varese",
    description:
      "Showroom di 300mq a Gorla Maggiore. Serramenti, porte, ristrutturazioni e arredo casa. Premium Partner Oknoplast.",
    url: "https://www.moodabitare.it",
  },
};

const reviewJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://www.moodabitare.it/#business",
  name: "Mood Abitare",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    bestRating: "5",
    ratingCount: String(testimonials.length),
    reviewCount: String(testimonials.length),
  },
  review: testimonials.map((t) => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: t.name,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
    },
    reviewBody: t.text,
    datePublished: "2025-01-15",
  })),
};

export default function Home() {
  return (
    <main>
      <Script
        id="reviews-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
      />
      <HeroSection />
      <BrandLogos />
      <BelowFoldSections />
    </main>
  );
}
