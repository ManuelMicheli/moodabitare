import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FadeInView } from "@/components/animations/FadeInView";
import { ParallaxImage } from "@/components/animations/ParallaxImage";
import { HorizontalGallery, type GalleryImage } from "@/components/products/HorizontalGallery";
import { PvcGalleryWithSheet } from "@/components/products/PvcGalleryWithSheet";
import { ALL_PRODUCTS, MACRO_CATEGORIES } from "@/lib/constants";
import { productContent } from "@/lib/product-content";

const heroImages: Record<string, string> = {
  "serramenti-legno-giannattasio": "/images/finestralegnohero.jpg",
  "finestre-alluminio-oknoplast": "/images/Finestre in alluminio.jpg",
};

const productImages: Record<string, GalleryImage[]> = {
  "serramenti-legno-giannattasio": [
    { src: "/images/finestralegno.jpg", name: "Profilo bicolore" },
    { src: "/images/finestre-legno2.jpg", name: "Dettaglio cerniere" },
    { src: "/images/finestralegno3.jpg", name: "Profilo in legno" },
    { src: "/images/finestralegno4.jpg", name: "Dettaglio angolare" },
    { src: "/images/finestralegno5.jpg", name: "Sezione interna" },
  ],
  "finestre-alluminio-oknoplast": [
    { src: "/images/Finestre in alluminio.jpg", name: "Finestra in alluminio" },
    { src: "/images/finestra in alluminio 2.jpg", name: "Dettaglio profilo" },
    { src: "/images/finestra in alluminio 3.jpg", name: "Vista interna" },
  ],
  "finestre-pvc-oknoplast": [
    { src: "/images/1Finestra-Prolux-2017-1024x768.png", name: "Prolux" },
    { src: "/images/2Finestra-Prolux-Evolution-1024x768.png", name: "Prolux Evolution" },
    { src: "/images/SL_Prolux--1024x768.png", name: "Scorrevole Prolux" },
    { src: "/images/SL_Prolux-Plus-1024x768.png", name: "Scorrevole Prolux Plus" },
    { src: "/images/3Prolux-Swing-di-Oknoplast-1024x768.png", name: "Prolux Swing" },
    { src: "/images/4Prolux-Vitro-di-Oknoplast-1024x768.png", name: "Prolux Vitro" },
    { src: "/images/5Finestra-Platinium-Plus-1024x768.png", name: "Platinium Plus" },
    { src: "/images/6Finestra-Squareline-1024x768.png", name: "Squareline" },
    { src: "/images/7Finestra-Prismatic-1024x768.png", name: "Prismatic" },
    { src: "/images/8Prismatic-Evolution-1024x768.png", name: "Prismatic Evolution" },
    { src: "/images/9Finestra-Winergetic-Premium-1024x768.png", name: "Winergetic Premium" },
    { src: "/images/10Finestra-Winergetic-Premium-Passive-1024x768.png", name: "Winergetic Premium Passive" },
    { src: "/images/11Finestra-Winergetic-Alu-1024x768.png", name: "Winergetic Alu" },
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
  const heroImage = heroImages[slug];

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end bg-black-deep text-white overflow-hidden">
        {heroImage && (
          <Image
            src={heroImage}
            alt={product.name}
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
            quality={100}
            unoptimized
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black-deep/90 via-black-deep/40 to-black-deep/20" />
        <div className="relative z-10 w-full pb-14 lg:pb-28 px-6 sm:px-10 lg:px-20">
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

      {/* Oknoplast mini banner */}
      {(slug === "finestre-alluminio-oknoplast" || slug === "finestre-pvc-oknoplast") && (
        <div className="flex items-center justify-center py-4 lg:py-5 bg-cream">
          <svg viewBox="0 0 220 28" className="h-5 lg:h-6 w-auto" aria-label="Oknoplast">
            <text
              x="110"
              y="22"
              textAnchor="middle"
              fill="#009FE3"
              fontFamily="Arial, Helvetica, sans-serif"
              fontWeight="700"
              fontSize="24"
              letterSpacing="4"
            >
              OKNOPLAST
            </text>
          </svg>
        </div>
      )}

      {/* Gallery alluminio — 3 card attaccate sotto hero */}
      {slug === "finestre-alluminio-oknoplast" && gallery && (
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {gallery.map((img, i) => (
            <div key={i} className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={img.src}
                alt={`${product.name} — ${img.name}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-black-deep/30" />
              <p className="absolute bottom-3 left-4 text-[0.7rem] font-ui font-medium uppercase tracking-wider text-white/70">
                {img.name}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Giannattasio brand banner + gallery — solo per serramenti in legno */}
      {slug === "serramenti-legno-giannattasio" && (
        <div style={{ backgroundColor: "#533430" }}>
          {/* Logo + Descrizione centrati */}
          <div className="flex flex-col items-center justify-center px-6 sm:px-10 lg:px-20 py-12 lg:py-16">
            <Image
              src="/images/giannattasio-logo.png"
              alt="Giannattasio logo"
              width={824}
              height={118}
              className="w-[220px] sm:w-[280px] lg:w-[360px] h-auto"
              sizes="(max-width: 640px) 220px, (max-width: 1024px) 280px, 360px"
              quality={95}
            />
            <FadeInView>
              <p className="mt-6 lg:mt-8 text-body text-white/70 max-w-xl mx-auto text-center leading-relaxed">
                Da sempre, Giannattasio unisce in una sintesi efficace l&apos;esclusività della lavorazione
                artigianale con la precisione della tecnologia industriale per la produzione di porte,
                finestre in legno e legno-alluminio, persiane oscuranti e di sicurezza, portoni e mobili su misura.
              </p>
            </FadeInView>
          </div>
          {/* Gallery prodotti */}
          {gallery && gallery.length > 0 && (
            <HorizontalGallery images={gallery} alt={product.name} gridLayout darkBg />
          )}
        </div>
      )}

      {/* Horizontal scroll gallery — altri prodotti */}
      {gallery && gallery.length > 0 && slug !== "finestre-alluminio-oknoplast" && slug !== "serramenti-legno-giannattasio" && (
        slug === "finestre-pvc-oknoplast"
          ? <PvcGalleryWithSheet images={gallery} alt={product.name} />
          : <HorizontalGallery images={gallery} alt={product.name} />
      )}

      {/* Description + Specs + Benefits */}
      {content && (
        <section className="py-16 lg:py-36 px-6 sm:px-10 lg:px-20">
          {/* Description */}
          <FadeInView>
            <p className="font-display font-medium leading-[1.4] tracking-[-0.015em] text-black-deep max-w-3xl mx-auto text-center text-lg sm:text-xl lg:text-2xl">
              {slug === "serramenti-legno-giannattasio"
                ? "I serramenti in legno Giannattasio uniscono la bellezza naturale e il calore tattile del legno massello a prestazioni termiche di ultima generazione. Ogni serramento è realizzato artigianalmente in Italia con legni selezionati e certificati, trattati per resistere nel tempo senza perdere la loro eleganza naturale."
                : content.description}
            </p>
          </FadeInView>

          <div className="mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
            {/* Specs */}
            <FadeInView>
              <p className="text-label text-black-deep/30 mb-10">
                Specifiche tecniche
              </p>
              <div className="space-y-0">
                {content.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex justify-between items-baseline py-4 lg:py-5 border-b border-black-deep/10"
                  >
                    <span className="font-ui text-[0.95rem] sm:text-base lg:text-lg font-medium text-black-deep/60">
                      {spec.label}
                    </span>
                    <span className="font-ui text-[0.95rem] sm:text-base lg:text-lg font-semibold text-black-deep ml-6 text-right">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </FadeInView>

            {/* Benefits */}
            <FadeInView delay={0.1}>
              <p className="text-label text-black-deep/30 mb-10">
                I vantaggi per te
              </p>
              <ul className="space-y-5">
                {content.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-4 font-ui text-[0.95rem] sm:text-base lg:text-lg font-medium text-black-deep/70 leading-relaxed"
                  >
                    <span className="mt-2.5 w-2 h-2 rounded-full bg-bordeaux flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </FadeInView>
          </div>
        </section>
      )}

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-20 lg:py-44 bg-black-deep text-white">
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
      <section className="py-20 lg:py-44">
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
