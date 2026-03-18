import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import { notFound } from "next/navigation";
import { FadeInView } from "@/components/animations/FadeInView";
import { ParallaxImage } from "@/components/animations/ParallaxImage";
import { HorizontalGallery, type GalleryImage } from "@/components/products/HorizontalGallery";
import { PvcGalleryWithSheet } from "@/components/products/PvcGalleryWithSheet";
import { ALL_PRODUCTS, MACRO_CATEGORIES } from "@/lib/constants";
import { productContent } from "@/lib/product-content";

const heroImages: Record<string, string> = {
  "infissi-legno": "/images/finestralegnohero.jpg",
  "infissi-alluminio": "/images/Finestre in alluminio.jpg",
};

const productImages: Record<string, GalleryImage[]> = {
  "infissi-legno": [
    { src: "/images/finestralegno.jpg", name: "Profilo bicolore" },
    { src: "/images/finestre-legno2.jpg", name: "Dettaglio cerniere" },
    { src: "/images/finestralegno3.jpg", name: "Profilo in legno" },
    { src: "/images/finestralegno4.jpg", name: "Dettaglio angolare" },
    { src: "/images/finestralegno5.jpg", name: "Sezione interna" },
  ],
  "infissi-alluminio": [
    { src: "/images/Finestre in alluminio.jpg", name: "Finestra in alluminio" },
    { src: "/images/finestra in alluminio 2.jpg", name: "Dettaglio profilo" },
    { src: "/images/finestra in alluminio 3.jpg", name: "Vista interna" },
  ],
  "infissi-pvc": [
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

/** Keyword mirate per ogni categoria prodotto — local SEO + prodotto + brand */
const productKeywords: Record<string, string[]> = {
  "infissi-pvc": [
    "infissi PVC Varese",
    "finestre PVC Oknoplast",
    "infissi PVC prezzo",
    "finestre isolamento termico",
    "finestre risparmio energetico",
    "Oknoplast Premium Partner Varese",
    "sostituzione finestre PVC",
    "detrazioni fiscali finestre",
  ],
  "infissi-alluminio": [
    "infissi alluminio Varese",
    "finestre alluminio Oknoplast",
    "serramenti alluminio taglio termico",
    "grandi vetrate alluminio",
    "scorrevoli alluminio",
    "finestre alluminio minimal",
    "detrazioni fiscali serramenti",
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
    "portoncini Oknoplast",
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
  ],
  "porte-blindate": [
    "porte blindate Varese",
    "porte blindate Alias",
    "porte blindate Erreci",
    "porte blindate classe 4",
    "porte blindate antieffrazione",
    "porta blindata ingresso",
    "porte blindate isolamento termico",
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
  ],
  "arredo-bagno": [
    "arredo bagno Varese",
    "arredo bagno Merati",
    "mobili bagno sospesi",
    "arredo bagno su misura",
    "arredo bagno design",
    "ristrutturazione bagno Varese",
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
  ],
  "pompe-di-calore": [
    "pompe di calore Varese",
    "pompe di calore Ariston",
    "pompa di calore aria acqua",
    "riscaldamento efficiente",
    "sostituzione caldaia pompa di calore",
  ],
  "caldaia": [
    "caldaia a condensazione Varese",
    "caldaia Hermann",
    "sostituzione caldaia",
    "caldaia condensazione prezzo",
    "installazione caldaia Varese",
  ],
  "impianti-fotovoltaici": [
    "fotovoltaico Varese",
    "pannelli solari casa",
    "impianto fotovoltaico residenziale",
    "fotovoltaico con accumulo",
    "incentivi fotovoltaico",
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
  "oscuranti-sicurezza": "/images/Gemini_Generated_Image_dy1qxpdy1qxpdy1q.jpg",
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
  const description = content?.tagline
    ? `${product.name}${brandSuffix}: ${content.tagline}. Scopri la gamma da Mood Abitare, showroom a Gorla Maggiore (VA).`
    : `${product.name}${product.brand ? ` di ${product.brand}` : ""}. Scopri la gamma disponibile da Mood Abitare, il tuo punto di riferimento a Varese.`;
  return {
    title: `${product.name}${brandSuffix} — Varese`,
    description,
    keywords: productKeywords[slug] || [
      `${product.name} Varese`,
      ...(product.brand ? [`${product.brand} Gorla Maggiore`] : []),
      "Mood Abitare",
    ],
    alternates: {
      canonical: `https://www.moschianosrl.it/prodotti/${slug}`,
    },
    openGraph: {
      title: `${product.name}${product.brand ? ` — ${product.brand}` : ""} | Mood Abitare`,
      description,
      url: `https://www.moschianosrl.it/prodotti/${slug}`,
    },
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

  // BreadcrumbList JSON-LD for rich breadcrumb display in Google
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.moschianosrl.it",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Prodotti",
        item: "https://www.moschianosrl.it/prodotti",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `https://www.moschianosrl.it/prodotti/${slug}`,
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
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black-deep/90 via-black-deep/40 to-black-deep/20" />
        <div className="relative z-10 w-full pb-14 lg:pb-28 px-6 sm:px-10 lg:px-20">
          <FadeInView>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-label text-white/30">
                {macroCategory?.label}
              </span>
              {product.brand && (
                <>
                  <span className="text-white/10">—</span>
                  <span className="text-label text-white/30">
                    {product.brand}
                  </span>
                </>
              )}
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
      {(slug === "infissi-alluminio" || slug === "infissi-pvc") && (
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
      {slug === "infissi-alluminio" && gallery && (
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

      {/* Pail brand banner + gallery — solo per infissi in legno */}
      {slug === "infissi-legno" && gallery && gallery.length > 0 && (
        <div style={{ backgroundColor: "#533430" }}>
          <div className="flex flex-col items-center justify-center px-6 sm:px-10 lg:px-20 py-12 lg:py-16">
            <FadeInView>
              <p className="text-body text-white/70 max-w-xl mx-auto text-center leading-relaxed">
                Infissi in legno di alta qualità, realizzati artigianalmente in Italia
                con legni selezionati e certificati per resistere nel tempo
                senza perdere la loro eleganza naturale.
              </p>
            </FadeInView>
          </div>
          <HorizontalGallery images={gallery} alt={product.name} gridLayout darkBg />
        </div>
      )}

      {/* Horizontal scroll gallery — altri prodotti */}
      {gallery && gallery.length > 0 && slug !== "infissi-alluminio" && slug !== "infissi-legno" && (
        slug === "infissi-pvc"
          ? <PvcGalleryWithSheet images={gallery} alt={product.name} />
          : <HorizontalGallery images={gallery} alt={product.name} />
      )}

      {/* Description + Specs + Benefits */}
      {content && (
        <section className="py-16 lg:py-36 px-6 sm:px-10 lg:px-20">
          {/* Description */}
          <FadeInView>
            <p className="font-display font-medium leading-[1.4] tracking-[-0.015em] text-black-deep max-w-3xl mx-auto text-center text-lg sm:text-xl lg:text-2xl">
              {content.description}
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
                    {related.brand && (
                      <span className="text-label text-white/20">
                        {related.brand}
                      </span>
                    )}
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
