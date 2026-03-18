import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import { FadeInView } from "@/components/animations/FadeInView";
import { ProductCatalog } from "@/components/products/ProductCatalog";
import { TitanoEvoBanner } from "@/components/home/TitanoEvoBanner";

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
    canonical: "https://www.moschianosrl.it/prodotti",
  },
  openGraph: {
    title: "Prodotti — Mood Abitare",
    description:
      "Serramenti, porte, oscuranti, cucine e arredo casa dei migliori brand. Showroom a Gorla Maggiore (VA).",
    url: "https://www.moschianosrl.it/prodotti",
  },
};

export default function ProdottiPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end text-white overflow-hidden">
        <Image
          src="/images/Cucina-con-finestra-Prolux-Swing-opt.jpg"
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
