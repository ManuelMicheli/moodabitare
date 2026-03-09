import type { Metadata } from "next";
import Script from "next/script";
import { cormorantGaramond, outfit } from "@/fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LazyOverlays } from "@/components/shared/LazyOverlays";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.moschianosrl.it"),
  title: {
    default: "Moschiano Srl — Serramenti, Porte e Ristrutturazioni a Varese",
    template: "%s | Moschiano Srl",
  },
  description:
    "Moschiano Srl: oltre 30 anni di esperienza in serramenti, porte, ristrutturazioni e arredo casa. Premium Partner Oknoplast a Gorla Maggiore, Varese.",
  keywords: [
    "serramenti Varese",
    "finestre Gorla Maggiore",
    "porte provincia di Varese",
    "ristrutturazioni Varese",
    "Oknoplast Premium Partner",
    "infissi PVC",
    "porte blindate",
    "arredo casa",
    "Moschiano Srl",
  ],
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "Moschiano Srl",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Schema.org LocalBusiness JSON-LD
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Moschiano Srl",
  description:
    "Oltre 30 anni di esperienza in serramenti, porte, ristrutturazioni e arredo casa nella provincia di Varese. Premium Partner Oknoplast.",
  url: "https://www.moschianosrl.it",
  telephone: "+3903311120048",
  email: "info@moschianosrl.it",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Viale Europa, 65",
    addressLocality: "Gorla Maggiore",
    addressRegion: "VA",
    postalCode: "21050",
    addressCountry: "IT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.6278,
    longitude: 8.8847,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:30",
      closes: "12:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "14:30",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:30",
      closes: "12:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "14:00",
      closes: "17:00",
    },
  ],
  priceRange: "$$",
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 45.6278,
      longitude: 8.8847,
    },
    geoRadius: "50000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${cormorantGaramond.variable} ${outfit.variable}`}>
      <body className="antialiased">
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="relative z-10 bg-cream">
          <Header />
          {children}
        </div>
        <Footer />
        <LazyOverlays />
      </body>
    </html>
  );
}
