import type { Metadata } from "next";
import Script from "next/script";
import { buildBreadcrumbJsonLd } from "@/lib/seo/breadcrumb-jsonld";
import { PremiumPartnerSections } from "@/components/premium-partner/PremiumPartnerSections";

export const metadata: Metadata = {
  title: "Premium Partner Oknoplast — Rivenditore Autorizzato Varese",
  description:
    "Mood Abitare è Premium Partner Oknoplast per la provincia di Varese. Qualità certificata, garanzia estesa, assistenza dedicata e design innovativo per finestre in PVC e alluminio.",
  keywords: [
    "Premium Partner Oknoplast",
    "rivenditore Oknoplast Varese",
    "rivenditore autorizzato Oknoplast",
    "Oknoplast Gorla Maggiore",
    "showroom Oknoplast Varese",
    "finestre Oknoplast prezzo",
    "garanzia Oknoplast",
    "serramenti certificati Oknoplast",
    "Oknoplast Italia rivenditore",
  ],
  alternates: {
    canonical: "https://www.moschianosrl.it/premium-partner",
  },
  openGraph: {
    title: "Premium Partner Oknoplast — Mood Abitare",
    description:
      "Rivenditore autorizzato Oknoplast a Gorla Maggiore (VA). Qualità certificata, garanzia estesa e assistenza dedicata.",
    url: "https://www.moschianosrl.it/premium-partner",
  },
};

export default function PremiumPartner() {
  return (
    <main>
      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumbJsonLd([
              { name: "Premium Partner", url: "https://www.moschianosrl.it/premium-partner" },
            ])
          ),
        }}
      />
      <PremiumPartnerSections />
    </main>
  );
}
