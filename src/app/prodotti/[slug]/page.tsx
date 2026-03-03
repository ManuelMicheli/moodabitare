import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FadeInView } from "@/components/animations/FadeInView";
import { ParallaxImage } from "@/components/animations/ParallaxImage";
import { HorizontalGallery } from "@/components/products/HorizontalGallery";
import { ALL_PRODUCTS, MACRO_CATEGORIES } from "@/lib/constants";
import { productContent } from "@/lib/product-content";

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

const sectionImages: Record<string, string> = {
  "oscuranti-sicurezza": "/images/Gemini_Generated_Image_dy1qxpdy1qxpdy1q.png",
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
  const content = productContent[slug];
  return {
    title: `${product.name} — ${product.brand}`,
    description: content?.tagline
      ? `${product.name} ${product.brand}: ${content.tagline}. Scopri la gamma da Moschiano Srl, showroom a Gorla Maggiore (VA).`
      : `${product.name} di ${product.brand}. Scopri la gamma disponibile da Moschiano Srl, il tuo punto di riferimento a Varese.`,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = ALL_PRODUCTS.find((p) => p.slug === slug);
  if (!product) notFound();

  const macroCategory = MACRO_CATEGORIES.find((mc) => mc.id === product.macroCategoryId);
  const relatedProducts = macroCategory?.products.filter((p) => p.slug !== slug) || [];
  const gallery = productImages[slug];
  const content = productContent[slug];

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
              {content?.cardDescription || `Scopri la gamma ${product.name} di ${product.brand} disponibile nel nostro showroom di Gorla Maggiore.`}
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

      {/* Description + Specs + Benefits */}
      {content && (
        <section className="py-24 lg:py-36 px-6 sm:px-10 lg:px-20">
          <div className="max-w-5xl mx-auto">
            {/* Description */}
            <FadeInView>
              <p className="font-display font-medium leading-[1.3] tracking-[-0.015em] text-black-deep max-w-3xl text-lg sm:text-xl lg:text-2xl">
                {content.description}
              </p>
            </FadeInView>

            <div className="mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Specs */}
              <FadeInView>
                <p className="text-label text-black-deep/30 mb-8">
                  Specifiche tecniche
                </p>
                <div className="space-y-0">
                  {content.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex justify-between items-baseline py-3.5 border-b border-black-deep/6"
                    >
                      <span className="text-caption text-black-deep/40">
                        {spec.label}
                      </span>
                      <span className="text-caption font-medium text-black-deep ml-4 text-right">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </FadeInView>

              {/* Benefits */}
              <FadeInView delay={0.1}>
                <p className="text-label text-black-deep/30 mb-8">
                  I vantaggi per te
                </p>
                <ul className="space-y-4">
                  {content.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-3 text-caption text-black-deep/60 leading-relaxed"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-bordeaux flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </FadeInView>
            </div>
          </div>
        </section>
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
                    <h3 className="mt-3 font-display text-xl font-medium text-white/80 group-hover:text-white transition-colors tracking-tight">
                      {related.name}
                    </h3>
                    <span className="inline-block mt-4 text-caption text-white/20 group-hover:text-white/50 transition-colors">
                      Scopri →
                    </span>
                  </a>
                </FadeInView>
              ))}
              {product.macroCategoryId && sectionImages[product.macroCategoryId] && (
                <div className="sm:col-span-2">
                  <ParallaxImage
                    src={sectionImages[product.macroCategoryId]}
                    alt={macroCategory?.label || ""}
                    className="h-full min-h-[250px]"
                    speed={0.2}
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-32 lg:py-44">
        <div className="px-6 sm:px-10 lg:px-20 text-center">
          <FadeInView>
            <h2 className="font-section-title text-black-deep max-w-2xl mx-auto">
              Vuoi saperne di più?
            </h2>
            <p className="mt-6 text-body text-black-deep/35 max-w-md mx-auto">
              Sopralluogo e preventivo sono gratuiti e senza impegno. Vieni a vedere i prodotti dal vivo nel nostro showroom oppure contattaci: ti rispondiamo entro 24 ore.
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
