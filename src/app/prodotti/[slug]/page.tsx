import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import { notFound } from "next/navigation";
import { FadeInView } from "@/components/animations/FadeInView";
import { ParallaxImage } from "@/components/animations/ParallaxImage";
import { PremiumCatalog } from "@/components/products/PremiumCatalog";
import { premiumCatalogData } from "@/lib/premium-catalog-data";
import { ALL_PRODUCTS, MACRO_CATEGORIES } from "@/lib/constants";
import { productContent } from "@/lib/product-content";
import { sheetMap } from "@/lib/sheet-map";
import { productGalleryImages } from "@/lib/product-gallery-images";
import { TapparelleCatalog } from "@/components/products/TapparelleCatalog";
import { tapparelleCategories } from "@/lib/tapparelle-categories";
import { tapparelleDetails } from "@/lib/details/serramenti-details";
import { PortonciniCatalog } from "@/components/products/PortonciniCatalog";
import { portonciniCategories } from "@/lib/portoncini-categories";
import { portoncinoDetails } from "@/lib/details/serramenti-details";
import { InfissiPvcCatalog } from "@/components/products/InfissiPvcCatalog";
import { infissiPvcCategories } from "@/lib/infissi-pvc-categories";
import { windowDetails } from "@/lib/window-details";
import { PorteBlindateCatalog } from "@/components/products/PorteBlindateCatalog";
import { porteBlindateCategories } from "@/lib/porte-blindate-categories";
import { securityDoorDetails, interiorDoorDetails } from "@/lib/product-details";
import { PorteInterneCatalog } from "@/components/products/PorteInterneCatalog";
import { porteInterneCategories } from "@/lib/porte-interne-categories";
import { buildProductJsonLd } from "@/lib/seo/product-jsonld";
import { buildFaqJsonLd } from "@/lib/seo/faq-data";
import { PRODUCT_FAQS } from "@/lib/seo/product-faq-data";
import { ProductFaq } from "@/components/products/ProductFaq";
import { Breadcrumb } from "@/components/layout/Breadcrumb";


/** Keyword mirate per ogni categoria prodotto — local SEO + prodotto + brand */
const productKeywords: Record<string, string[]> = {
  "infissi-pvc": [
    "infissi PVC Varese",
    "finestre PVC Oknoplast",
    "finestre Oknoplast Prolux",
    "finestre Oknoplast Winergetic",
    "finestre Oknoplast Prismatic",
    "scorrevoli PVC Oknoplast",
    "infissi PVC prezzo",
    "finestre isolamento termico",
    "finestre risparmio energetico",
    "Oknoplast Premium Partner Varese",
    "serramenti PVC Busto Arsizio",
    "finestre PVC Gallarate",
    "infissi PVC provincia Varese",
    "sostituzione finestre Varese",
  ],
  "infissi-alluminio": [
    "infissi alluminio Varese",
    "finestre alluminio Oknoplast",
    "serramenti alluminio taglio termico",
    "grandi vetrate alluminio",
    "scorrevoli alluminio",
    "finestre alluminio minimal",
    "detrazioni fiscali serramenti",
    "infissi alluminio Busto Arsizio",
    "serramenti alluminio Gallarate",
    "finestre alluminio provincia Varese",
  ],
  "infissi-alluminio-legno": [
    "infissi alluminio legno Varese",
    "serramenti alluminio legno Korus",
    "finestre alluminio legno",
    "infissi ibridi",
    "serramenti doppio materiale",
    "infissi legno alluminio isolamento",
  ],
  "infissi-legno": [
    "infissi legno Varese",
    "finestre legno Pail",
    "infissi legno massello",
    "finestre legno su misura",
    "serramenti legno made in Italy",
    "finestre legno isolamento termico",
  ],
  "portoncini": [
    "portoncini ingresso alluminio",
    "portoncini Oknoplast Tenvis",
    "portoncini PVC Oknoplast",
    "porte Cosmo Oknoplast",
    "portoncini Kopen",
    "porta ingresso sicurezza Varese",
    "portoncini isolamento termico",
    "portoncini antieffrazione",
  ],
  "persiane": [
    "persiane sicurezza Varese",
    "persiane Erreci",
    "persiane alluminio antieffrazione",
    "persiane orientabili",
    "oscuranti sicurezza",
    "persiane Korus",
  ],
  "frangisole": [
    "frangisole Varese",
    "frangisole alluminio",
    "brise soleil",
    "schermatura solare facciata",
    "frangisole orientabili",
    "frangisole motorizzati",
  ],
  "tapparelle": [
    "tapparelle Varese",
    "tapparelle Pasini",
    "tapparelle coibentate",
    "tapparelle motorizzate",
    "tapparelle elettriche",
    "tapparelle isolamento termico",
  ],
  "porte-interne": [
    "porte interne Varese",
    "porte interne Pail",
    "porte interne Door Arreda",
    "porte scorrevoli interno muro",
    "porte filomuro",
    "porte interne design",
    "porte interne su misura",
    "porte interne Busto Arsizio",
    "porte interne Gallarate",
  ],
  "porte-blindate": [
    "porte blindate Varese",
    "porte blindate Alias",
    "porte blindate Erreci",
    "porte blindate classe 4",
    "porte blindate antieffrazione",
    "porta blindata ingresso",
    "porte blindate isolamento termico",
    "porte blindate Busto Arsizio",
    "porte blindate Gallarate",
    "porte blindate provincia Varese",
  ],
  "grate-sicurezza": [
    "grate di sicurezza Varese",
    "grate Erreci",
    "inferriate finestre",
    "grate antieffrazione",
    "inferriate apribili",
    "sicurezza finestre Varese",
  ],
  "persiane-blindate": [
    "persiane blindate Varese",
    "persiane blindate Erreci",
    "persiane antieffrazione",
    "persiane sicurezza casa",
    "oscuranti blindati",
  ],
  "allarme-videosorveglianza": [
    "allarme casa Varese",
    "videosorveglianza Varese",
    "antifurto Inim",
    "telecamere sicurezza casa",
    "impianto allarme abitazione",
    "sistema sicurezza domestico",
  ],
  "zanzariere": [
    "zanzariere Varese",
    "zanzariere su misura",
    "zanzariere plissettate",
    "zanzariere antipolline",
    "zanzariere per porta finestra",
    "zanzariere Bettio",
  ],
  "tende-tecniche": [
    "tende tecniche Varese",
    "tende plissè Sharknet",
    "tende oscuranti finestre",
    "tende a rullo",
    "tende protezione UV",
    "schermature solari",
  ],
  "scale-ringhiere": [
    "scale interne Varese",
    "scale Sinfonia",
    "scale a chiocciola",
    "ringhiere vetro",
    "scale salvaspazio",
    "scale su misura",
  ],
  "pergole": [
    "pergole bioclimatiche Varese",
    "pergole Tendarredo",
    "pergole alluminio",
    "copertura terrazzo",
    "pergole motorizzate",
  ],
  "gazebi-strutture-legno": [
    "gazebi legno Varese",
    "strutture legno giardino",
    "carport legno",
    "gazebo su misura",
    "coperture legno lamellare",
  ],
  "tende-da-sole": [
    "tende da sole Varese",
    "tende da sole motorizzate",
    "tende da sole Tendarredo",
    "tende da sole con cassonetto",
    "tende da sole bracci estensibili",
  ],
  "vetrate-panoramiche": [
    "vetrate panoramiche Varese",
    "vetrate a pacchetto",
    "chiusure terrazzi vetro",
    "vetrate scorrevoli",
    "verande vetro",
  ],
  "piscine": [
    "piscine interrate Varese",
    "piscine fuori terra",
    "costruzione piscina",
    "piscine su misura",
    "piscine giardino",
  ],
  "rivestimento-piscine": [
    "rivestimento piscina Varese",
    "ristrutturazione piscina",
    "liner piscina",
    "PVC armato piscina",
    "rinnovo piscina",
  ],
  "arredo-giardino": [
    "arredo giardino Varese",
    "mobili da esterno",
    "tavoli giardino",
    "divani esterno",
    "arredamento outdoor",
  ],
  "cucine-su-misura": [
    "cucine su misura Varese",
    "cucine Arrex",
    "cucine moderne design",
    "cucine con isola",
    "cucine made in Italy",
    "arredamento cucina Varese",
    "cucine su misura Busto Arsizio",
    "cucine Arrex Gallarate",
  ],
  "arredo-bagno": [
    "arredo bagno Varese",
    "arredo bagno Merati",
    "mobili bagno sospesi",
    "arredo bagno su misura",
    "arredo bagno design",
    "ristrutturazione bagno Varese",
    "arredo bagno Busto Arsizio",
    "ristrutturazione bagno Gallarate",
  ],
  "sanitari": [
    "sanitari Varese",
    "sanitari rimless",
    "sanitari sospesi",
    "sanitari risparmio idrico",
    "sanitari Sani e Co",
  ],
  "rubinetteria": [
    "rubinetteria bagno Varese",
    "rubinetteria Fiore",
    "rubinetteria design",
    "miscelatori bagno",
    "rubinetteria cucina",
  ],
  "ceramiche": [
    "ceramiche Varese",
    "piastrelle gres porcellanato",
    "ceramiche bagno",
    "piastrelle effetto marmo",
    "rivestimenti ceramica",
  ],
  "parquet": [
    "parquet Varese",
    "parquet Ali Parquet",
    "parquet legno massello",
    "parquet prefinito",
    "parquet riscaldamento a pavimento",
    "posa parquet Varese",
  ],
  "climatizzatori": [
    "climatizzatori Varese",
    "climatizzatori Haier",
    "climatizzatori Samsung",
    "condizionatori inverter",
    "climatizzatori A+++",
    "installazione climatizzatori Varese",
    "climatizzatori Busto Arsizio",
    "condizionatori Gallarate",
    "installazione climatizzatori provincia Varese",
  ],
  "pompe-di-calore": [
    "pompe di calore Varese",
    "pompe di calore Ariston",
    "pompa di calore aria acqua",
    "riscaldamento efficiente",
    "sostituzione caldaia pompa di calore",
    "pompe di calore Busto Arsizio",
    "pompa calore Gallarate",
  ],
  "caldaia": [
    "caldaia a condensazione Varese",
    "caldaia Hermann",
    "sostituzione caldaia",
    "caldaia condensazione prezzo",
    "installazione caldaia Varese",
    "caldaia condensazione Busto Arsizio",
    "sostituzione caldaia Gallarate",
  ],
  "impianti-fotovoltaici": [
    "fotovoltaico Varese",
    "pannelli solari casa",
    "impianto fotovoltaico residenziale",
    "fotovoltaico con accumulo",
    "incentivi fotovoltaico",
    "fotovoltaico Busto Arsizio",
    "pannelli solari Gallarate",
    "fotovoltaico provincia Varese",
  ],
  "impianti-elettrici": [
    "impianto elettrico Varese",
    "rifacimento impianto elettrico",
    "impianto elettrico a norma",
    "elettricista Varese",
    "adeguamento impianto elettrico",
  ],
  "impianti-idraulici": [
    "impianto idraulico Varese",
    "idraulico Varese",
    "rifacimento impianto idraulico",
    "impianto riscaldamento",
    "impianto bagno",
  ],
};

const sectionImages: Record<string, string> = {
  "oscuranti-sicurezza": "/images/gen-dy1qxpdy1qxpdy1q.jpg",
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  // Deduplicate slugs (porte-blindate appears in 2 categories)
  const uniqueSlugs = [...new Set(ALL_PRODUCTS.map((p) => p.slug))];
  return uniqueSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = ALL_PRODUCTS.find((p) => p.slug === slug);
  if (!product) return {};
  const content = productContent[slug];
  const brandSuffix = product.brand ? ` ${product.brand}` : "";
  const tagline = content?.tagline ?? "Qualità premium e installazione certificata";
  // Description ottimizzata 150-160 char: [prodotto+brand] + [benefit] + [showroom/location] + [CTA]
  const description = `${product.name}${brandSuffix}: ${tagline}. Showroom a Gorla Maggiore (Varese). Preventivo gratuito e detrazioni fiscali incluse.`;
  return {
    title: `${product.name}${brandSuffix} — Varese e Provincia`,
    description,
    keywords: productKeywords[slug] || [
      `${product.name} Varese`,
      `${product.name} Gorla Maggiore`,
      `${product.name} provincia Varese`,
      ...(product.brand ? [`${product.brand} Varese`, `${product.brand} Premium Partner`] : []),
      "Mood Abitare",
      "showroom Varese",
      "preventivo gratuito",
      "detrazioni fiscali",
    ],
    alternates: {
      canonical: `https://www.moodabitare.it/prodotti/${slug}`,
    },
    openGraph: {
      title: `${product.name}${product.brand ? ` — ${product.brand}` : ""} | Mood Abitare`,
      description,
      url: `https://www.moodabitare.it/prodotti/${slug}`,
      type: "website",
      locale: "it_IT",
      siteName: "Mood Abitare",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name}${brandSuffix} | Mood Abitare Varese`,
      description,
    },
    other: {
      "product:brand": product.brand ?? "Mood Abitare",
      "product:condition": "new",
      "product:availability": "in stock",
      "product:locality": "Gorla Maggiore",
      "product:region": "Varese",
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = ALL_PRODUCTS.find((p) => p.slug === slug);
  if (!product) notFound();

  const macroCategory = MACRO_CATEGORIES.find((mc) => mc.id === product.macroCategoryId);
  const relatedProducts = macroCategory?.products.filter((p) => p.slug !== slug) || [];
  const gallery = productGalleryImages[slug];
  const content = productContent[slug];


  // BreadcrumbList JSON-LD for rich breadcrumb display in Google
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.moodabitare.it",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Prodotti",
        item: "https://www.moodabitare.it/prodotti",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `https://www.moodabitare.it/prodotti/${slug}`,
      },
    ],
  };

  return (
    <main>
      <Script
        id={`breadcrumb-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Script
        id="product-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildProductJsonLd(product, content, slug)),
        }}
      />
      {PRODUCT_FAQS[slug] && (
        <Script
          id={`faq-${slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildFaqJsonLd(PRODUCT_FAQS[slug])),
          }}
        />
      )}
      {/* SEO h1 (visually hidden — the catalog section below shows the visible title) */}
      <h1 className="sr-only">{product.name}{product.brand ? ` — ${product.brand}` : ""}</h1>
      {/* Spacer for fixed header nav */}
      <div className="pt-20 sm:pt-24 lg:pt-28" />
      {/* Breadcrumb visibile per UX + rinforzo segnale SEO */}
      <div className="px-6 sm:px-10 lg:px-20 py-4">
        <Breadcrumb
          items={[
            { label: "Prodotti", href: "/prodotti" },
            { label: product.name },
          ]}
        />
      </div>

      {/* Oknoplast mini banner */}
      {slug === "infissi-pvc" && (
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


      {/* infissi-legno ora usa PremiumCatalog con schede tecniche Pail */}


      {/* Tapparelle — catalogo categorizzato Pasini */}
      {slug === "tapparelle" && (
        <TapparelleCatalog categories={tapparelleCategories} details={tapparelleDetails} />
      )}

      {/* Portoncini — catalogo categorizzato Oknoplast / Kopen */}
      {slug === "portoncini" && (
        <PortonciniCatalog categories={portonciniCategories} details={portoncinoDetails} />
      )}

      {/* Infissi PVC — catalogo categorizzato Oknoplast */}
      {slug === "infissi-pvc" && (
        <InfissiPvcCatalog categories={infissiPvcCategories} details={windowDetails} />
      )}

      {/* Porte Blindate — catalogo categorizzato Alias & Erreci */}
      {slug === "porte-blindate" && (
        <PorteBlindateCatalog categories={porteBlindateCategories} details={securityDoorDetails} />
      )}

      {/* Porte Interne — catalogo categorizzato Pail & Door Arreda */}
      {slug === "porte-interne" && (
        <PorteInterneCatalog categories={porteInterneCategories} details={interiorDoorDetails} />
      )}

      {/* Premium catalog — editorial layout matching tapparelle/portoncini quality */}
      {(() => {
        const cfg = premiumCatalogData[slug];
        if (!cfg) return null;
        const details = sheetMap[slug];
        /* Foto ambiente (lifestyle) → nessun padding, immagine intera;
           tutti gli altri prodotti (sfondo bianco) → padding + bg-white */
        const coverSlugs = [
          "cucine-su-misura",
          "arredo-bagno",
          "ceramiche",
          "parquet",
          "piscine",
          "rivestimento-piscine",
          "arredo-giardino",
          "gazebi-strutture-legno",
          "impianti-fotovoltaici",
          "impianti-elettrici",
          "impianti-idraulici",
        ];
        const useCover = coverSlugs.includes(slug);
        return (
          <PremiumCatalog
            brandLabel={cfg.brandLabel}
            title={cfg.title}
            description={cfg.description}
            stats={cfg.stats}
            categories={cfg.categories}
            images={cfg.categories ? undefined : gallery}
            details={details ?? {}}
            cover={useCover}
            brands={product.brand}
            productName={product.name.toLowerCase()}
          />
        );
      })()}

      {/* Description + Specs + Benefits */}
      {content && (
        <section className="py-12 sm:py-16 lg:py-36 px-6 sm:px-10 lg:px-20">
          {/* Description */}
          <FadeInView>
            <p className="font-display font-medium leading-[1.4] tracking-[-0.015em] text-black-deep max-w-3xl mx-auto text-center text-lg sm:text-xl lg:text-2xl">
              {content.description}
            </p>
          </FadeInView>

          <div className="mt-10 sm:mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-32">
            {/* Specs */}
            <FadeInView>
              <p className="text-label text-black-deep/75 mb-10">
                Specifiche tecniche
              </p>
              <div className="space-y-0">
                {content.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex justify-between items-baseline py-4 lg:py-5 border-b border-black-deep/10"
                  >
                    <span className="font-ui text-[0.95rem] sm:text-base lg:text-xl font-medium text-black-deep uppercase">
                      {spec.label}
                    </span>
                    <span className="font-ui text-[0.95rem] sm:text-base lg:text-xl font-semibold text-black-deep ml-6 text-right uppercase">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </FadeInView>

            {/* Benefits */}
            <FadeInView delay={0.1}>
              <p className="text-label text-black-deep/75 mb-10">
                I vantaggi per te
              </p>
              <ul className="space-y-5">
                {content.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-4 font-ui text-[0.95rem] sm:text-base lg:text-lg font-medium text-black-deep leading-relaxed"
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

      {/* FAQ specifiche per categoria — visibili + JSON-LD */}
      {PRODUCT_FAQS[slug] && <ProductFaq faqs={PRODUCT_FAQS[slug]} />}

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-14 sm:py-20 lg:py-44 bg-black-deep text-white">
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
                    {related.brand && (
                      <span className="text-label text-white/60">
                        {related.brand}
                      </span>
                    )}
                    <h3 className="mt-3 font-display text-xl font-medium text-white/80 group-hover:text-white transition-colors tracking-tight">
                      {related.name}
                    </h3>
                    <span className="inline-block mt-4 text-caption text-white/50 group-hover:text-white/80 transition-colors">
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
      <section className="py-14 sm:py-20 lg:py-44">
        <div className="px-6 sm:px-10 lg:px-20 text-center">
          <FadeInView>
            <h2 className="font-section-title text-black-deep max-w-2xl mx-auto">
              Vuoi saperne di più?
            </h2>
            <p className="mt-4 sm:mt-6 text-body text-black-deep/35 max-w-md mx-auto">
              Sopralluogo e preventivo sono gratuiti e senza impegno. Vieni a trovarci in showroom oppure contattaci: ti rispondiamo entro 24 ore.
            </p>
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <a href="/contatti" className="inline-block text-button bg-black-deep text-white px-6 py-3 sm:px-8 sm:py-4 hover:bg-black-soft transition-colors">
                Richiedi preventivo gratuito
              </a>
              <a
                href="https://wa.me/393517278053"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-button text-black-deep/50 hover:text-black-deep transition-colors duration-300"
              >
                <span>Scrivici su WhatsApp</span>
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>
          </FadeInView>
        </div>
      </section>
    </main>
  );
}
