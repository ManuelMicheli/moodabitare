import type { Metadata } from "next";
import Script from "next/script";
import { buildBreadcrumbJsonLd } from "@/lib/seo/breadcrumb-jsonld";
import { Suspense } from "react";
import Image from "next/image";
import { FadeInView } from "@/components/animations/FadeInView";
import { ProductCatalog } from "@/components/products/ProductCatalog";
import { TitanoEvoBanner } from "@/components/home/TitanoEvoBanner";
import { ALL_PRODUCTS } from "@/lib/constants";
import { productContent } from "@/lib/product-content";

const BASE_URL = "https://www.moodabitare.it";

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Catalogo prodotti Mood Abitare",
  description:
    "Catalogo completo dei prodotti e categorie disponibili da Mood Abitare: serramenti, porte, sicurezza, comfort, outdoor, arredo casa, riscaldamento e rinnovabili.",
  numberOfItems: ALL_PRODUCTS.length,
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  itemListElement: ALL_PRODUCTS.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `${BASE_URL}/prodotti/${p.slug}`,
    name: `${p.name}${p.brand ? ` — ${p.brand}` : ""}`,
    ...(productContent[p.slug]
      ? { description: productContent[p.slug].tagline }
      : {}),
  })),
};

export const metadata: Metadata = {
  title: "Prodotti — Serramenti, Porte, Arredo Casa",
  description:
    "Catalogo completo Mood Abitare: infissi PVC e alluminio Oknoplast, porte interne, porte blindate, cucine Arrex, arredo bagno, outdoor, riscaldamento e oltre 35 prodotti per la tua casa.",
  keywords: [
    "serramenti Varese",
    "infissi PVC Oknoplast",
    "infissi alluminio Varese",
    "porte interne Varese",
    "porte blindate",
    "tapparelle Pasini",
    "persiane sicurezza",
    "cucine su misura",
    "arredo bagno",
    "parquet",
    "scale ringhiere",
    "zanzariere",
    "tende tecniche",
    "pergole bioclimatiche",
    "climatizzatori",
    "pompe di calore",
    "fotovoltaico residenziale",
    "infissi Gorla Maggiore",
    "showroom serramenti Varese",
  ],
  alternates: {
    canonical: "https://www.moodabitare.it/prodotti",
  },
  openGraph: {
    title: "Prodotti — Mood Abitare",
    description:
      "Serramenti, porte, oscuranti, cucine e arredo casa dei migliori brand. Showroom a Gorla Maggiore (VA).",
    url: "https://www.moodabitare.it/prodotti",
  },
};

export default function ProdottiPage() {
  return (
    <main>
      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumbJsonLd([
              { name: "Prodotti", url: "https://www.moodabitare.it/prodotti" },
            ])
          ),
        }}
      />
      <Script
        id="itemlist-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      {/* Hero */}
      <section className="relative min-h-[45vh] sm:min-h-[70vh] flex items-end text-white overflow-hidden">
        <Image
          src="/images/cucina-con-finestra-prolux-swing-opt.jpg"
          alt="Prodotti Mood Abitare"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Top gradient for navbar readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black-deep/50 via-black-deep/20 to-transparent pointer-events-none" />
        {/* Bottom gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black-deep/60 via-black-deep/15 to-transparent" />
        <div className="relative z-10 w-full pb-8 lg:pb-12 px-6 sm:px-10 lg:px-20 flex justify-center">
          <FadeInView>
            <div className="text-center">
              <h1 className="font-page-title">
                I nostri prodotti
              </h1>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Titano EVO OC Banner */}
      <TitanoEvoBanner />

      {/* Products */}
      <section className="pt-10 lg:pt-14 pb-32 lg:pb-44">
        <div className="px-6 sm:px-10 lg:px-20">
          <Suspense>
            <ProductCatalog />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
