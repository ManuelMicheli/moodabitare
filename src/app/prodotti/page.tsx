import type { Metadata } from "next";
import Image from "next/image";
import { FadeInView } from "@/components/animations/FadeInView";
import { ProductCatalog } from "@/components/products/ProductCatalog";

export const metadata: Metadata = {
  title: "Prodotti",
  description:
    "Scopri la nostra gamma di serramenti, porte, oscuranti e arredo casa. 16 categorie di prodotti dei migliori brand italiani ed europei.",
};

export default function ProdottiPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end text-white overflow-hidden">
        <Image
          src="/images/Prolux-4.jpg"
          alt="Serramenti Prolux"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black-deep/80 via-black-deep/20 to-transparent" />
        <div className="relative z-10 w-full pb-20 lg:pb-28 px-6 sm:px-10 lg:px-20 flex justify-end">
          <FadeInView>
            <div className="text-right max-w-2xl">
              <p className="text-label text-white/40 mb-6">
                Catalogo
              </p>
              <h1 className="font-section-title">
                I nostri prodotti
              </h1>
              <p className="mt-8 text-body text-white/35 max-w-xl ml-auto">
                Qualità e design per ogni ambiente
              </p>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Products */}
      <section className="py-32 lg:py-44">
        <div className="px-6 sm:px-10 lg:px-20">
          <FadeInView>
            <p className="text-label text-black-deep/30 mb-6">
              Esplora
            </p>
            <h2 className="font-section-title text-black-deep mb-16 lg:mb-24">
              Scegli per categoria
            </h2>
          </FadeInView>
          <ProductCatalog />
        </div>
      </section>
    </main>
  );
}
