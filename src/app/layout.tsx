import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { cormorantGaramond, outfit, doublePorte } from "@/fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LazyOverlays } from "@/components/shared/LazyOverlays";
import { R2_CDN } from "@/lib/constants";
import { SAME_AS_PROFILES } from "@/lib/seo/local-seo";
import "./globals.css";

export const viewport: Viewport = {
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.moodabitare.it"),
  title: {
    default: "Mood Abitare — Serramenti, Porte e Ristrutturazioni a Varese",
    template: "%s | Mood Abitare",
  },
  description:
    "Mood Abitare: oltre 30 anni di esperienza in serramenti, porte, ristrutturazioni e arredo casa. Premium Partner Oknoplast a Gorla Maggiore, Varese.",
  keywords: [
    "serramenti Varese",
    "finestre Gorla Maggiore",
    "porte provincia di Varese",
    "ristrutturazioni Varese",
    "Oknoplast Premium Partner",
    "infissi PVC",
    "porte blindate",
    "arredo casa",
    "Mood Abitare",
    "showroom serramenti Varese",
    "finestre PVC Varese",
    "porte interne Varese",
    "ristrutturazione casa Varese",
    "serramenti Gorla Maggiore",
    "infissi alluminio Varese",
    "serramenti legno Varese",
    "serramenti Busto Arsizio",
    "serramenti Gallarate",
    "serramenti Saronno",
    "serramenti Legnano",
    "infissi provincia Varese",
    "ristrutturazione Busto Arsizio",
    "showroom serramenti alto milanese",
  ],
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "Mood Abitare",
    url: "https://www.moodabitare.it",
    title: "Mood Abitare — Serramenti, Porte e Ristrutturazioni a Varese",
    description:
      "Oltre 30 anni di esperienza in serramenti, porte, ristrutturazioni e arredo casa. Premium Partner Oknoplast a Gorla Maggiore, Varese.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mood Abitare — Serramenti, Porte e Ristrutturazioni a Varese",
    description:
      "Oltre 30 anni di esperienza in serramenti, porte, ristrutturazioni e arredo casa. Premium Partner Oknoplast.",
  },
  alternates: {
    canonical: "https://www.moodabitare.it",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Home Improvement",
  // TODO: inserire codici reali di verifica quando disponibili in GSC e Bing Webmaster Tools
  verification: {
    google: "",
    other: {
      "msvalidate.01": "",
    },
  },
};

// Schema.org JSON-LD — multiple schemas for rich results
const jsonLdSchemas = [
  // WebSite schema — enables sitelinks search box in Google
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Mood Abitare",
    url: "https://www.moodabitare.it",
    description:
      "Mood Abitare: serramenti, porte, ristrutturazioni e arredo casa nella provincia di Varese.",
    publisher: {
      "@type": "Organization",
      name: "Mood Abitare",
      url: "https://www.moodabitare.it",
    },
    inLanguage: "it-IT",
  },
  // Organization schema — enriches Knowledge Panel
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Mood Abitare",
    legalName: "Mood Abitare",
    url: "https://www.moodabitare.it",
    logo: "https://www.moodabitare.it/logo/logo-mood-abitare-transparent-opt.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+3903311588159",
      contactType: "customer service",
      availableLanguage: "Italian",
      areaServed: "IT",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Viale Europa, 65",
      addressLocality: "Gorla Maggiore",
      addressRegion: "VA",
      postalCode: "21050",
      addressCountry: "IT",
    },
  },
  // LocalBusiness schema — the core local SEO schema
  {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://www.moodabitare.it/#business",
    name: "Mood Abitare",
    description:
      "Oltre 30 anni di esperienza in serramenti, porte, ristrutturazioni e arredo casa nella provincia di Varese. Premium Partner Oknoplast.",
    url: "https://www.moodabitare.it",
    telephone: "+3903311588159",
    email: "info@moodabitare.it",
    image: "https://www.moodabitare.it/logo/logo-mood-abitare-transparent-opt.png",
    logo: "https://www.moodabitare.it/logo/logo-mood-abitare-transparent-opt.png",
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
    hasMap: "https://www.google.com/maps/place/Viale+Europa,+65,+21050+Gorla+Maggiore+VA",
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
        opens: "14:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:30",
        closes: "12:30",
      },
    ],
    priceRange: "$$",
    currenciesAccepted: "EUR",
    paymentAccepted: "Contanti, Carta di Credito, Bonifico Bancario, Finanziamento",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 45.6278,
        longitude: 8.8847,
      },
      geoRadius: "50000",
    },
    knowsAbout: [
      "Serramenti in PVC",
      "Serramenti in alluminio",
      "Serramenti in legno",
      "Porte interne",
      "Porte blindate",
      "Ristrutturazioni",
      "Arredo bagno",
      "Cucine su misura",
    ],
    sameAs: SAME_AS_PROFILES,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Prodotti e Servizi Mood Abitare",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Serramenti",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Infissi in PVC Oknoplast" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Infissi in Alluminio Oknoplast" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Infissi in Legno Pail" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Infissi Alluminio/Legno Korus" } },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Porte",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Porte Interne Pail" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Porte Blindate Alias" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Portoncini Oknoplast" } },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Ristrutturazioni",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ristrutturazione chiavi in mano" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rifacimento bagno completo" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Impianti elettrici e idraulici" } },
          ],
        },
      ],
    },
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${cormorantGaramond.variable} ${outfit.variable} ${doublePorte.variable}`}>
      <head>
        {/* Preload first hero video — responsive desktop/mobile.
            Starts download immediately on page load, before React hydrates. */}
        <link
          rel="preload"
          as="video"
          type="video/mp4"
          href={`${R2_CDN}/videos/hero-home-1080.mp4`}
          media="(min-width: 768px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="video"
          type="video/mp4"
          href={`${R2_CDN}/videos/hero-home-720.mp4`}
          media="(max-width: 767px)"
          fetchPriority="high"
        />
        <link rel="preconnect" href={R2_CDN} crossOrigin="" />
        <link rel="dns-prefetch" href={R2_CDN} />
      </head>
      <body className="antialiased">
        {/* Server-rendered backdrop — visible from first paint, before JS hydrates */}
        <div
          id="site-loader-backdrop"
          suppressHydrationWarning
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9998,
            background: "#ffffff",
          }}
        />
        {/* Inline script: immediately hide backdrop if already loaded this session (hide, don't remove — removal would break hydration) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(sessionStorage.getItem("moodabitare-loaded")){var b=document.getElementById("site-loader-backdrop");if(b)b.style.display="none"}}catch(e){}`,
          }}
        />
        {jsonLdSchemas.map((schema, i) => (
          <Script
            key={i}
            id={`json-ld-${i}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
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
