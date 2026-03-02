import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FadeInView } from "@/components/animations/FadeInView";
import { HorizontalGallery } from "@/components/products/HorizontalGallery";
import { ALL_PRODUCTS, MACRO_CATEGORIES } from "@/lib/constants";

const productImages: Record<string, string[]> = {
  "finestre-pvc-oknoplast": [
    "/images/1Finestra-Prolux-2017-1024x768.jpg",
    "/images/2Finestra-Prolux-Evolution-1024x768.jpg",
    "/images/SL_Prolux--1024x768.jpg",
    "/images/SL_Prolux-Plus-1024x768.jpg",
    "/images/3Prolux-Swing-di-Oknoplast-1024x768.jpg",
    "/images/4Prolux-Vitro-di-Oknoplast-1024x768.jpg",
    "/images/5Finestra-Platinium-Plus-1024x768.jpg",
    "/images/6Finestra-Squareline-1024x768.jpg",
    "/images/7Finestra-Prismatic-1024x768.jpg",
    "/images/8Prismatic-Evolution-1024x768.jpg",
    "/images/9Finestra-Winergetic-Premium-1024x768.jpg",
    "/images/10Finestra-Winergetic-Premium-Passive-1024x768.jpg",
    "/images/11Finestra-Winergetic-Alu-1024x768.jpg",
  ],
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ALL_PRODUCTS.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = ALL_PRODUCTS.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.name} — ${product.brand}`,
    description: `${product.name} di ${product.brand}. Scopri la gamma disponibile da Mood Abitare, il tuo punto di riferimento a Varese.`,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = ALL_PRODUCTS.find((p) => p.slug === slug);
  if (!product) notFound();

  const macroCategory = MACRO_CATEGORIES.find((mc) => mc.id === product.macroCategoryId);
  const relatedProducts = macroCategory?.products.filter((p) => p.slug !== slug) || [];
  const gallery = productImages[slug];

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end bg-black-deep text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black-deep/90 via-transparent to-transparent" />
        <div className="relative z-10 w-full pb-20 lg:pb-28 px-6 sm:px-10 lg:px-20">
          <FadeInView>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-label text-white/30">
                {macroCategory?.label}
              </span>
              <span className="text-white/10">—</span>
              <span className="text-label text-white/30">
                {product.brand}
              </span>
            </div>
            <h1 className="font-section-title max-w-3xl">
              {product.name}
            </h1>
            <p className="mt-8 text-body text-white/35 max-w-xl">
              Scopri la gamma {product.name} di {product.brand} disponibile nel nostro showroom di Gorla Maggiore.
            </p>
            <div className="mt-12 flex flex-wrap gap-6">
              <a href="/contatti" className="inline-block text-button bg-white text-black-deep px-8 py-4 hover:bg-white/90 transition-colors">
                Richiedi preventivo
              </a>
              <a
                href="https://wa.me/393517278053"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-button text-white border-b border-white/20 pb-1 hover:border-white/60 transition-colors"
              >
                Info su WhatsApp
              </a>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Horizontal scroll gallery */}
      {gallery && gallery.length > 0 && (
        <HorizontalGallery images={gallery} alt={product.name} />
      )}

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-32 lg:py-44 bg-black-deep text-white">
          <div className="px-6 sm:px-10 lg:px-20">
            <FadeInView>
              <p className="text-label text-white/25 mb-16">
                Prodotti correlati — {macroCategory?.label}
              </p>
            </FadeInView>
            <div className="grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((related) => (
                <FadeInView key={related.slug}>
                  <a href={`/prodotti/${related.slug}`} className="group block bg-black-deep p-8 lg:p-10">
                    <span className="text-label text-white/20">
                      {related.brand}
                    </span>
                    <h3 className="mt-3 font-display text-xl font-bold text-white/80 group-hover:text-white transition-colors tracking-tight">
                      {related.name}
                    </h3>
                    <span className="inline-block mt-4 text-caption text-white/20 group-hover:text-white/50 transition-colors">
                      Scopri →
                    </span>
                  </a>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-32 lg:py-44">
        <div className="px-6 sm:px-10 lg:px-20 text-center">
          <FadeInView>
            <h2 className="font-section-title text-black-deep max-w-2xl mx-auto">
              Interessato a {product.name}?
            </h2>
            <p className="mt-6 text-body text-black-deep/35 max-w-md mx-auto">
              Contattaci per un preventivo gratuito o vieni nel nostro showroom.
            </p>
            <a href="/contatti" className="inline-block mt-12 text-button bg-black-deep text-white px-8 py-4 hover:bg-black-soft transition-colors">
              Richiedi preventivo gratuito
            </a>
          </FadeInView>
        </div>
      </section>
    </main>
  );
}
