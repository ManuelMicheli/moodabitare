import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import { notFound } from "next/navigation";
import { FadeInView } from "@/components/animations/FadeInView";
import { ParallaxImage } from "@/components/animations/ParallaxImage";
import { HorizontalGallery } from "@/components/products/HorizontalGallery";
import { GalleryWithSheet } from "@/components/products/GalleryWithSheet";
import { ALL_PRODUCTS, MACRO_CATEGORIES } from "@/lib/constants";
import { productContent } from "@/lib/product-content";
import { sheetMap } from "@/lib/sheet-map";
import { productGalleryImages } from "@/lib/product-gallery-images";

const heroImages: Record<string, string> = {
  "infissi-legno": "/images/finestralegnohero.jpg",
  "infissi-alluminio": "/prodotti/wmremove-transformed (1).webp",
  "infissi-alluminio-legno": "/images/skywood_desk1_upscayl_4x_upscayl-standard-4x.webp",
  "infissi-pvc": "/images/wmremove-transformed (69).webp",
  "cucine-su-misura": "/images/Hero cucina.jpg",
  "rubinetteria": "/images/wmremove-transformed (18).webp",
};

const heroVideos: Record<string, string> = {
  "infissi-alluminio-legno": "/videos/IMG_7923.mp4",
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
  const gallery = productGalleryImages[slug];
  const content = productContent[slug];
  const heroImage = heroImages[slug];
  const heroVideo = heroVideos[slug];

  const korusProducts = slug === "infissi-alluminio-legno" ? [
    {
      name: "Skywood EVO Original Energy 1.0",
      subtitle: "UN NUOVO CLASSICO",
      features: [
        "Triplo vetro che riduce la perdita di calore interno",
        "Design moderno, linee classiche ed eleganti, ricercate e senza tempo",
        "Legno pregiato naturale di altissima qualità",
        "Profili che aprono grandi superfici vetrate per la massima panoramicità",
        "Estrema economicità e rispetto della previdenza energetica",
      ],
    },
    {
      name: "Skywood EVO Original",
      subtitle: "UN NUOVO CLASSICO",
      features: [
        "Design moderno, linee classiche ed eleganti, ricercate e senza tempo",
        "Consente la realizzazione di altissime superfici vetrate",
        "Legno pregiato naturale di altissima qualità",
        "Personalizzazione in combinazione di materiali e colori",
        "Massima durata dell'infisso",
      ],
    },
    {
      name: "Skywood EVO Linear Energy 1.0",
      subtitle: "ELEGANZA LINEARE",
      features: [
        "Triplo vetro di serie per un maggior isolamento",
        "Profili Flat per performance estetiche ai massimi livelli",
        "Grandi superfici vetrate con sezioni ridotte per massima panoramicità",
        "Legno pregiato naturale di altissima qualità con ampie personalizzazioni",
      ],
    },
    {
      name: "Skywood EVO Linear",
      subtitle: "ELEGANZA LINEARE",
      features: [
        "Design minimalista ricercato di altissima qualità",
        "Legno pregiato naturale di altissima qualità",
        "Grandi superfici vetrate con sezioni ridotte",
        "Verniciatura con trattamento anticorrosione di serie",
      ],
    },
    {
      name: "Skywood EVO Energy 1.0",
      subtitle: "SCENOGRAFIE DEL LEGNO",
      features: [
        "Triplo vetro che riduce la perdita di calore interno",
        "Profili Flat per performance estetiche ai massimi livelli",
        "Grandi superfici vetrate con massimo comfort e soddisfazione",
        "Legno pregiato naturale di altissima qualità con ampie personalizzazioni",
      ],
    },
    {
      name: "Skywood EVO",
      subtitle: "TUTTO IL CALORE DEL LEGNO",
      features: [
        "Legno pregiato naturale di altissima qualità per le prestazioni",
        "Ampia scelta con oltre 60 colori personalizzabili della struttura in alluminio",
        "Design moderno, geometrie equilibrate, sobrietà tipicamente italiana",
        "Resistente e durevole nel tempo",
      ],
    },
    {
      name: "Air SlideWood",
      subtitle: "NATURALE E INNOVATIVO",
      features: [
        "Legno pregiato naturale di altissima qualità",
        "Ottima illuminazione degli ambienti",
        "Nessun ingombro interno ed esterno",
        "Massima compatibilità con tapparelle, cassonetti e persiane di sicurezza",
      ],
    },
  ] : null;

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
      <section className={`relative flex items-end bg-black-deep text-white overflow-hidden ${heroImage === "/images/Hero cucina.jpg" ? "min-h-[45vh] sm:min-h-[50vh]" : "min-h-[55vh] sm:min-h-[70vh]"}`}>
        {heroVideo ? (
          <video
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : heroImage ? (
          <Image
            src={heroImage}
            alt={product.name}
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
            quality={95}
          />
        ) : null}
        {slug === "infissi-alluminio" && (
          <div className="absolute inset-0 hidden lg:flex items-center justify-center z-[1] pointer-events-none">
            <div className="relative w-full h-full">
              <Image
                src="/prodotti/wmremove-transformed.webp"
                alt={product.name}
                fill
                className="object-contain"
                priority
                sizes="40vw"
              />
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black-deep/90 via-black-deep/40 to-black-deep/20" />
        <div className={`relative z-10 w-full pb-10 sm:pb-16 lg:pb-32 px-6 sm:px-10 lg:px-20 ${slug === "infissi-alluminio" ? "text-center sm:text-right" : "text-center"}`}>
          <FadeInView>
            <div className={`flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 ${slug === "infissi-alluminio" ? "justify-center sm:justify-end" : "justify-center"}`}>
              <span className="text-label text-white tracking-[0.2em]">
                {macroCategory?.label}
              </span>
              {product.brand && (
                <>
                  <span className="text-white/40">|</span>
                  <span className="text-label text-white tracking-[0.2em]">
                    {product.brand}
                  </span>
                </>
              )}
            </div>
            <h1 className={`font-page-title ${slug === "infissi-alluminio" ? "mx-auto sm:ml-auto sm:mr-0" : "mx-auto"}`}>
              {product.name}
            </h1>
            <p className={`mt-4 sm:mt-6 text-body text-white text-sm sm:text-base ${slug === "infissi-alluminio" ? "mx-auto sm:ml-auto sm:mr-0" : "mx-auto"}`}>
              {content?.cardDescription || `Scopri la gamma ${product.name} di ${product.brand} disponibile nel nostro showroom di Gorla Maggiore.`}
            </p>
            <div className={`mt-6 sm:mt-10 flex flex-wrap gap-4 sm:gap-6 ${slug === "infissi-alluminio" ? "justify-center sm:justify-end" : "justify-center"}`}>
              <a href="/contatti" className="inline-block text-button bg-white text-black-deep px-6 py-3 sm:px-8 sm:py-4 hover:bg-white/90 transition-colors">
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

      {/* Korus brand section — solo per infissi alluminio/legno */}
      {slug === "infissi-alluminio-legno" && gallery && gallery.length > 0 && korusProducts && (
        <div style={{ backgroundColor: "#B32024" }}>
          {/* Header con logo e intro */}
          <div className="px-6 sm:px-10 lg:px-20 pt-10 sm:pt-16 lg:pt-24 pb-8 sm:pb-10 lg:pb-16">
            <a href="https://korusweb.com" target="_blank" rel="noopener noreferrer" className="block w-full max-w-5xl mx-auto mb-14">
              <Image
                src="/brandpartner/KORUS.png"
                alt="Korus — Visita il sito ufficiale"
                width={1600}
                height={260}
                className="w-full h-auto hover:opacity-90 transition-opacity"
              />
            </a>
            <FadeInView>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-white text-left mb-6">
                Perché scegliere le finestre in Alluminio/Legno
              </h2>
              <p className="text-body text-white/70 max-w-2xl text-left leading-relaxed">
                Le finestre in Alluminio/Legno sono la punta di diamante degli infissi Korus.
                Realizzate con materiali di primissima fattura, hanno un design unico
                e certificazioni che creano ambienti gradevoli, caldi e accoglienti.
                Le performance termiche sono straordinarie e la loro lunga durata nel tempo è
                assicurata dalla qualità dei materiali utilizzati.
              </p>
            </FadeInView>
          </div>

          {/* Schede prodotto con immagine affiancata */}
          <div className="px-4 sm:px-10 lg:px-20 pb-10 sm:pb-16 lg:pb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {korusProducts.map((prod, i) => (
                <FadeInView key={prod.name} delay={i * 0.05}>
                  <div className="bg-white rounded-lg overflow-hidden h-full flex flex-col sm:flex-row">
                    {/* Immagine prodotto */}
                    <div className="relative w-full sm:w-2/5 flex-shrink-0 bg-neutral-50 flex items-center justify-center p-3 sm:p-6">
                      <div className="relative w-full aspect-[4/3] sm:aspect-square">
                        <Image
                          src={gallery[i].src}
                          alt={prod.name}
                          fill
                          className="object-contain"
                          sizes="(max-width: 640px) 80vw, (max-width: 1024px) 25vw, 20vw"
                        />
                      </div>
                    </div>
                    {/* Info prodotto */}
                    <div className="p-4 sm:p-6 flex flex-col justify-center">
                      <h3 className="font-display text-base sm:text-lg lg:text-xl font-semibold text-black-deep">
                        {prod.name}
                      </h3>
                      <p className="mt-1 font-ui text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.2em] text-black-deep/40">
                        {prod.subtitle}
                      </p>
                      <ul className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2">
                        {prod.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-2 sm:gap-2.5 font-ui text-[0.75rem] sm:text-[0.8rem] text-black-deep/70 leading-relaxed">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#B32024" }} />
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Horizontal scroll gallery con schede tecniche */}
      {gallery && gallery.length > 0 && slug !== "infissi-legno" && slug !== "infissi-alluminio-legno" && (() => {
        const details = sheetMap[slug];
        if (details) return <GalleryWithSheet images={gallery} alt={product.name} details={details} />;
        return <HorizontalGallery images={gallery} alt={product.name} />;
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
      <section className="py-14 sm:py-20 lg:py-44">
        <div className="px-6 sm:px-10 lg:px-20 text-center">
          <FadeInView>
            <h2 className="font-section-title text-black-deep max-w-2xl mx-auto">
              Vuoi saperne di più?
            </h2>
            <p className="mt-4 sm:mt-6 text-body text-black-deep/35 max-w-md mx-auto">
              Sopralluogo e preventivo sono gratuiti e senza impegno. Vieni a vedere i prodotti dal vivo nel nostro showroom oppure contattaci: ti rispondiamo entro 24 ore.
            </p>
            <a href="/contatti" className="inline-block mt-8 sm:mt-12 text-button bg-black-deep text-white px-6 py-3 sm:px-8 sm:py-4 hover:bg-black-soft transition-colors">
              Richiedi preventivo gratuito
            </a>
          </FadeInView>
        </div>
      </section>
    </main>
  );
}
