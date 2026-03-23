# Piano di Ottimizzazione SEO Completa — Mood Abitare

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Portare il sito Mood Abitare a un livello SEO professionale completo — structured data ricchi su ogni pagina, OG images dinamiche per ogni prodotto, FAQ schema per featured snippets, review schema per social proof, keyword expansion per coprire tutta la provincia di Varese, e gestione corretta delle pagine legacy.

**Architecture:** Tutte le modifiche sono nel layer metadata/structured data di Next.js — nessun impatto visivo sul frontend. I JSON-LD vengono iniettati come `<Script type="application/ld+json">` nei Server Components. Le OG images usano l'API `next/og` (ImageResponse) per generazione dinamica edge-side. Le keyword vengono espanse nei metadata `generateMetadata()` esistenti.

**Tech Stack:** Next.js 16 App Router, `next/og` (ImageResponse), Schema.org JSON-LD, TypeScript

---

## File Structure

### File da creare
- `src/app/prodotti/[slug]/opengraph-image.tsx` — OG image dinamica per ogni prodotto
- `src/lib/seo/product-jsonld.ts` — generatore Product + Offer schema per prodotti
- `src/lib/seo/faq-data.ts` — dati FAQ per pagine servizi/finanziamento
- `src/lib/seo/breadcrumb-jsonld.ts` — utility per generare BreadcrumbList su pagine statiche
- `src/lib/seo/local-seo.ts` — dati areaServed espansa (comuni provincia Varese)

### File da modificare
- `src/app/prodotti/[slug]/page.tsx` — aggiungere Product schema JSON-LD
- `src/app/layout.tsx` — espandere LocalBusiness schema con areaServed dettagliata e sameAs
- `src/app/finanziamento/page.tsx` — aggiungere FAQPage JSON-LD
- `src/app/servizi/page.tsx` — aggiungere FAQPage JSON-LD
- `src/app/contatti/page.tsx` — aggiungere FAQPage JSON-LD
- `src/app/progettazione-design/page.tsx` — aggiungere FAQPage JSON-LD
- `src/app/servizi-ristrutturazione/page.tsx` — aggiungere FAQPage JSON-LD + breadcrumb
- `src/app/chi-siamo/page.tsx` — aggiungere BreadcrumbList JSON-LD
- `src/app/premium-partner/page.tsx` — aggiungere BreadcrumbList JSON-LD
- `src/app/blog/page.tsx` — aggiungere robots noindex
- `src/app/progetti/page.tsx` — aggiungere robots noindex
- `src/app/sitemap.ts` — rimuovere pagine legacy, aggiungere lastmod migliori
- `src/app/opengraph-image.tsx` — migliorare con più dettagli e keywords
- `src/components/home/TestimonialsCarousel.tsx` — esportare dati testimonial per schema
- `src/app/page.tsx` — aggiungere Review/AggregateRating JSON-LD

---

## Task 1: Utility BreadcrumbList JSON-LD

**Files:**
- Create: `src/lib/seo/breadcrumb-jsonld.ts`

- [ ] **Step 1: Creare la utility breadcrumb**

```typescript
// src/lib/seo/breadcrumb-jsonld.ts

type BreadcrumbItem = {
  name: string;
  url: string;
};

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.moschianosrl.it",
      },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.name,
        item: item.url,
      })),
    ],
  };
}
```

- [ ] **Step 2: Commit**

```bash
git add src/lib/seo/breadcrumb-jsonld.ts
git commit -m "feat(seo): add BreadcrumbList JSON-LD utility"
```

---

## Task 2: BreadcrumbList su tutte le pagine statiche

**Files:**
- Modify: `src/app/chi-siamo/page.tsx`
- Modify: `src/app/contatti/page.tsx`
- Modify: `src/app/finanziamento/page.tsx`
- Modify: `src/app/premium-partner/page.tsx`
- Modify: `src/app/progettazione-design/page.tsx`
- Modify: `src/app/servizi-ristrutturazione/page.tsx`
- Modify: `src/app/servizi/page.tsx`
- Modify: `src/app/prodotti/page.tsx`

- [ ] **Step 1: Aggiungere breadcrumb JSON-LD a ogni pagina statica**

Per ogni pagina, aggiungere un blocco `<Script>` prima della chiusura di `</main>`:

```typescript
import Script from "next/script";
import { buildBreadcrumbJsonLd } from "@/lib/seo/breadcrumb-jsonld";
```

Poi nel JSX (dentro il return, tipicamente subito dopo `<main>`):

```tsx
<Script
  id="breadcrumb-jsonld"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(
      buildBreadcrumbJsonLd([
        { name: "Nome Pagina", url: "https://www.moschianosrl.it/slug" },
      ])
    ),
  }}
/>
```

**Mappatura pagine → breadcrumb:**

| Pagina | name | url |
|--------|------|-----|
| chi-siamo | "Chi Siamo" | `.../chi-siamo` |
| contatti | "Contatti" | `.../contatti` |
| finanziamento | "Finanziamento" | `.../finanziamento` |
| premium-partner | "Premium Partner" | `.../premium-partner` |
| progettazione-design | "Progettazione e Design" | `.../progettazione-design` |
| servizi-ristrutturazione | "Servizi di Ristrutturazione" | `.../servizi-ristrutturazione` |
| servizi | "Servizi" | `.../servizi` |
| prodotti (listing) | "Prodotti" | `.../prodotti` |

- [ ] **Step 2: Verificare build**

```bash
npm run build
```
Expected: 0 errors

- [ ] **Step 3: Commit**

```bash
git add src/app/chi-siamo/page.tsx src/app/contatti/page.tsx src/app/finanziamento/page.tsx src/app/premium-partner/page.tsx src/app/progettazione-design/page.tsx src/app/servizi-ristrutturazione/page.tsx src/app/servizi/page.tsx src/app/prodotti/page.tsx
git commit -m "feat(seo): add BreadcrumbList JSON-LD to all static pages"
```

---

## Task 3: Dati SEO locale espansi — Comuni serviti

**Files:**
- Create: `src/lib/seo/local-seo.ts`

- [ ] **Step 1: Creare file con dati geolocalizzazione espansi**

```typescript
// src/lib/seo/local-seo.ts

/** Comuni principali serviti nella provincia di Varese (raggio ~30km da Gorla Maggiore) */
export const SERVED_AREAS = [
  "Gorla Maggiore",
  "Gorla Minore",
  "Marnate",
  "Olgiate Olona",
  "Fagnano Olona",
  "Solbiate Olona",
  "Castellanza",
  "Busto Arsizio",
  "Gallarate",
  "Saronno",
  "Legnano",
  "Varese",
  "Tradate",
  "Cairate",
  "Lonate Ceppino",
  "Castiglione Olona",
  "Cardano al Campo",
  "Somma Lombardo",
  "Sesto Calende",
  "Laveno Mombello",
  "Luino",
  "Besozzo",
  "Gavirate",
  "Caronno Pertusella",
  "Uboldo",
  "Gerenzano",
  "Cislago",
  "Rescaldina",
  "Cerro Maggiore",
  "San Vittore Olona",
] as const;

/** Schema.org areaServed completo per LocalBusiness */
export const AREA_SERVED_SCHEMA = {
  "@type": "GeoCircle",
  geoMidpoint: {
    "@type": "GeoCoordinates",
    latitude: 45.6278,
    longitude: 8.8847,
  },
  geoRadius: "50000",
};

/** Profili social per sameAs — aggiungere URL reali quando disponibili */
export const SAME_AS_PROFILES = [
  "https://www.instagram.com/moodabitare/",
  "https://www.facebook.com/moschianosrl/",
  "https://www.google.com/maps/place/Viale+Europa,+65,+21050+Gorla+Maggiore+VA",
];

/** Keywords locali per geo-targeting espanso */
export const LOCAL_KEYWORDS_EXPANSION: Record<string, string[]> = {
  serramenti: [
    "serramenti Varese",
    "serramenti Busto Arsizio",
    "serramenti Gallarate",
    "serramenti Saronno",
    "serramenti Legnano",
    "serramenti Castellanza",
    "serramenti provincia Varese",
    "serramenti alto milanese",
  ],
  porte: [
    "porte interne Varese",
    "porte blindate Busto Arsizio",
    "porte blindate Gallarate",
    "porte interne provincia Varese",
  ],
  ristrutturazioni: [
    "ristrutturazione Varese",
    "ristrutturazione Busto Arsizio",
    "ristrutturazione Gallarate",
    "ristrutturazione Saronno",
    "ristrutturazione Legnano",
    "ristrutturazione chiavi in mano Varese",
    "ristrutturazione casa provincia Varese",
  ],
  outdoor: [
    "pergole bioclimatiche Varese",
    "tende da sole provincia Varese",
    "vetrate panoramiche Busto Arsizio",
  ],
  cucine: [
    "cucine su misura Varese",
    "cucine Arrex Varese",
    "arredo cucina Busto Arsizio",
  ],
  bagno: [
    "arredo bagno Varese",
    "ristrutturazione bagno Busto Arsizio",
    "bagno completo Gallarate",
  ],
  riscaldamento: [
    "climatizzatori Varese",
    "pompe di calore provincia Varese",
    "caldaia condensazione Busto Arsizio",
    "fotovoltaico residenziale Varese",
  ],
};
```

- [ ] **Step 2: Commit**

```bash
git add src/lib/seo/local-seo.ts
git commit -m "feat(seo): add local SEO data with expanded geo-targeting"
```

---

## Task 4: Espandere LocalBusiness schema nel root layout

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Aggiungere import e espandere il LocalBusiness schema**

In `src/app/layout.tsx`, aggiungere import:

```typescript
import { SAME_AS_PROFILES } from "@/lib/seo/local-seo";
```

Espandere il terzo schema (HomeAndConstructionBusiness) con:

```typescript
// Aggiungere nel LocalBusiness schema object:
sameAs: SAME_AS_PROFILES,
// Aggiungere dopo knowsAbout:
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
```

- [ ] **Step 2: Aggiungere keywords espanse nel root metadata**

Espandere l'array `keywords` nel metadata del layout aggiungendo:

```typescript
// Aggiungere a keywords[] esistenti:
"serramenti Busto Arsizio",
"serramenti Gallarate",
"serramenti Saronno",
"serramenti Legnano",
"infissi provincia Varese",
"ristrutturazione Busto Arsizio",
"showroom serramenti alto milanese",
```

- [ ] **Step 3: Verificare build**

```bash
npm run build
```
Expected: 0 errors

- [ ] **Step 4: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat(seo): expand LocalBusiness schema with OfferCatalog, sameAs, and geo keywords"
```

---

## Task 5: OG Image dinamica per pagine prodotto

**Files:**
- Create: `src/app/prodotti/[slug]/opengraph-image.tsx`

- [ ] **Step 1: Creare il componente OG image dinamico**

```typescript
// src/app/prodotti/[slug]/opengraph-image.tsx
import { ImageResponse } from "next/og";
import { ALL_PRODUCTS } from "@/lib/constants";
import { productContent } from "@/lib/product-content";

export const runtime = "edge";
export const alt = "Mood Abitare — Prodotto";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = ALL_PRODUCTS.find((p) => p.slug === slug);
  const content = productContent[slug];

  const name = product?.name ?? "Prodotto";
  const brand = product?.brand ?? "";
  const tagline = content?.tagline ?? "Scopri la gamma da Mood Abitare";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #2b2b2b 0%, #363636 50%, #2b2b2b 100%)",
          fontFamily: "system-ui, sans-serif",
          padding: "60px",
          position: "relative",
        }}
      >
        {/* Top bordeaux accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "#7A2638",
            display: "flex",
          }}
        />

        {/* Top: brand + category label */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "16px",
              fontWeight: 600,
              color: "rgba(255,255,255,0.4)",
              letterSpacing: "2px",
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            Mood Abitare
          </div>
          {brand && (
            <div
              style={{
                fontSize: "18px",
                color: "#7A2638",
                marginTop: "8px",
                fontWeight: 600,
                display: "flex",
              }}
            >
              {brand}
            </div>
          )}
        </div>

        {/* Center: product name */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "56px",
              fontWeight: 700,
              color: "white",
              letterSpacing: "-1px",
              lineHeight: 1.1,
              display: "flex",
            }}
          >
            {name}
          </div>
          <div
            style={{
              fontSize: "22px",
              color: "rgba(255,255,255,0.5)",
              marginTop: "16px",
              lineHeight: 1.4,
              maxWidth: "800px",
              display: "flex",
            }}
          >
            {tagline}
          </div>
        </div>

        {/* Bottom: location */}
        <div
          style={{
            fontSize: "14px",
            color: "rgba(255,255,255,0.25)",
            display: "flex",
          }}
        >
          Gorla Maggiore (VA) — Showroom 300mq — Premium Partner Oknoplast
        </div>

        {/* Bottom bordeaux accent */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "#7A2638",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
```

- [ ] **Step 2: Verificare build**

```bash
npm run build
```
Expected: 0 errors, le 35 pagine prodotto generano OG images

- [ ] **Step 3: Commit**

```bash
git add src/app/prodotti/[slug]/opengraph-image.tsx
git commit -m "feat(seo): add dynamic OG images for all 35+ product pages"
```

---

## Task 6: Product schema JSON-LD per pagine prodotto

**Files:**
- Create: `src/lib/seo/product-jsonld.ts`
- Modify: `src/app/prodotti/[slug]/page.tsx`

- [ ] **Step 1: Creare il generatore Product schema**

```typescript
// src/lib/seo/product-jsonld.ts
import type { ProductCategory } from "@/lib/constants";

type ProductContent = {
  tagline: string;
  description: string;
  specs: Array<{ label: string; value: string }>;
  benefits: string[];
};

export function buildProductJsonLd(
  product: ProductCategory,
  content: ProductContent | undefined,
  slug: string,
) {
  const baseUrl = "https://www.moschianosrl.it";

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${product.name}${product.brand ? ` ${product.brand}` : ""}`,
    description: content?.description ?? `${product.name} disponibile da Mood Abitare.`,
    brand: product.brand
      ? {
          "@type": "Brand",
          name: product.brand.split(" / ")[0], // primo brand se multiplo
        }
      : undefined,
    url: `${baseUrl}/prodotti/${slug}`,
    image: `${baseUrl}/prodotti/${slug}`,
    category: product.name,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "EUR",
      },
      seller: {
        "@type": "Organization",
        name: "Mood Abitare",
        url: baseUrl,
      },
      areaServed: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: 45.6278,
          longitude: 8.8847,
        },
        geoRadius: "50000",
      },
    },
    ...(content?.specs
      ? {
          additionalProperty: content.specs.map((spec) => ({
            "@type": "PropertyValue",
            name: spec.label,
            value: spec.value,
          })),
        }
      : {}),
  };
}
```

- [ ] **Step 2: Integrare nel page.tsx dei prodotti**

In `src/app/prodotti/[slug]/page.tsx`, aggiungere l'import:

```typescript
import { buildProductJsonLd } from "@/lib/seo/product-jsonld";
```

Nel componente `ProductPage`, dopo il breadcrumb JSON-LD script esistente, aggiungere:

```tsx
<Script
  id="product-jsonld"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(buildProductJsonLd(product, content, slug)),
  }}
/>
```

Dove `content` è `productContent[slug]` (già disponibile nel componente).

- [ ] **Step 3: Verificare build**

```bash
npm run build
```
Expected: 0 errors

- [ ] **Step 4: Commit**

```bash
git add src/lib/seo/product-jsonld.ts src/app/prodotti/[slug]/page.tsx
git commit -m "feat(seo): add Product schema JSON-LD to all product pages"
```

---

## Task 7: FAQ schema per pagine ad alto intento

**Files:**
- Create: `src/lib/seo/faq-data.ts`
- Modify: `src/app/finanziamento/page.tsx`
- Modify: `src/app/servizi/page.tsx`
- Modify: `src/app/contatti/page.tsx`
- Modify: `src/app/progettazione-design/page.tsx`
- Modify: `src/app/servizi-ristrutturazione/page.tsx`

- [ ] **Step 1: Creare il file con i dati FAQ**

```typescript
// src/lib/seo/faq-data.ts

type FAQ = { question: string; answer: string };

export const FAQ_FINANZIAMENTO: FAQ[] = [
  {
    question: "Come funziona il finanziamento a tasso zero per i serramenti?",
    answer:
      "Il finanziamento prevede un anticipo del 50% e il restante importo finanziato a TAN 0% e TAEG 0% con rate annuali tramite Agos Ducato. È cumulabile con le detrazioni fiscali del 50%.",
  },
  {
    question: "Il finanziamento è cumulabile con le detrazioni fiscali?",
    answer:
      "Sì, il finanziamento a tasso zero è completamente cumulabile con le detrazioni fiscali previste per la sostituzione dei serramenti, fino al 50% dell'importo totale.",
  },
  {
    question: "Quanto anticipo serve per il finanziamento serramenti?",
    answer:
      "L'anticipo richiesto è del 50% dell'importo totale dei lavori, versato all'avvio. Il restante 50% viene finanziato a tasso zero con rate annuali.",
  },
  {
    question: "Chi eroga il finanziamento per i serramenti Mood Abitare?",
    answer:
      "Il finanziamento è un prestito finalizzato Agos One erogato da Agos Ducato S.p.A., soggetto ad approvazione. Mood Abitare gestisce tutta la pratica.",
  },
];

export const FAQ_SERVIZI: FAQ[] = [
  {
    question: "Il sopralluogo e il preventivo sono gratuiti?",
    answer:
      "Sì, offriamo sopralluoghi gratuiti con tecnico qualificato e preventivi dettagliati, chiari e trasparenti senza alcun impegno.",
  },
  {
    question: "I vostri posatori sono certificati?",
    answer:
      "Sì, i nostri posatori sono formati direttamente dall'azienda e dispongono di patentino di posa certificata per l'installazione a regola d'arte.",
  },
  {
    question: "Vi occupate anche dello smaltimento dei vecchi serramenti?",
    answer:
      "Sì, ci occupiamo della rimozione e del trasporto dei vecchi infissi presso strutture di smaltimento autorizzate, nel rispetto delle normative vigenti.",
  },
  {
    question: "Gestite anche le pratiche per le detrazioni fiscali?",
    answer:
      "Sì, il nostro team si occupa di tutta la parte burocratica: compilazione della documentazione e presentazione delle pratiche per le detrazioni fiscali del 50%.",
  },
];

export const FAQ_CONTATTI: FAQ[] = [
  {
    question: "Quali sono gli orari di apertura dello showroom Mood Abitare?",
    answer:
      "Lo showroom è aperto dal lunedì al venerdì dalle 9:30 alle 12:30 e dalle 14:30 alle 19:00, il sabato dalle 9:30 alle 12:30 e dalle 14:00 alle 17:00.",
  },
  {
    question: "Dove si trova lo showroom Mood Abitare?",
    answer:
      "Lo showroom si trova in Viale Europa 65, 21050 Gorla Maggiore (VA). Siamo facilmente raggiungibili da Varese, Busto Arsizio, Gallarate, Saronno e Legnano.",
  },
  {
    question: "Come posso richiedere un preventivo gratuito?",
    answer:
      "Puoi contattarci telefonicamente al 0331.1588159, via WhatsApp al 351.7278053, oppure compilando il modulo di contatto nella pagina Contatti del nostro sito.",
  },
];

export const FAQ_PROGETTAZIONE: FAQ[] = [
  {
    question: "Offrite un servizio di progettazione e consulenza per interni?",
    answer:
      "Sì, offriamo un servizio completo di progettazione e design: consulenza su misura per serramenti, cucine, arredo bagno e interni, con un approccio personalizzato per ogni progetto.",
  },
  {
    question: "La consulenza progettuale è gratuita?",
    answer:
      "Sì, la prima consulenza in showroom è gratuita. Il nostro team analizza le esigenze e propone soluzioni su misura per migliorare estetica, efficienza energetica e comfort.",
  },
];

export const FAQ_RISTRUTTURAZIONE: FAQ[] = [
  {
    question: "Cosa include la ristrutturazione chiavi in mano?",
    answer:
      "La ristrutturazione chiavi in mano include: progettazione, rifacimento bagni, impianti elettrici e idraulici, serramenti, pavimentazione, climatizzazione e finiture. Un project manager dedicato coordina tutti i lavori.",
  },
  {
    question: "In quali zone effettuate ristrutturazioni?",
    answer:
      "Effettuiamo ristrutturazioni in tutta la provincia di Varese: Gorla Maggiore, Busto Arsizio, Gallarate, Saronno, Legnano, Castellanza, Tradate e comuni limitrofi.",
  },
  {
    question: "Quanto tempo richiede una ristrutturazione completa?",
    answer:
      "I tempi variano in base all'entità dei lavori. Per un appartamento completo, indicativamente 6-12 settimane. Il project manager fornisce un cronoprogramma dettagliato prima dell'inizio dei lavori.",
  },
];

/** Genera il JSON-LD FAQPage da un array di FAQ */
export function buildFaqJsonLd(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
```

- [ ] **Step 2: Aggiungere FAQ JSON-LD alla pagina finanziamento**

In `src/app/finanziamento/page.tsx`:

```typescript
import Script from "next/script";
import { FAQ_FINANZIAMENTO, buildFaqJsonLd } from "@/lib/seo/faq-data";
```

Aggiungere dopo `<main>`:

```tsx
<Script
  id="faq-jsonld"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(buildFaqJsonLd(FAQ_FINANZIAMENTO)),
  }}
/>
```

- [ ] **Step 3: Aggiungere FAQ JSON-LD alla pagina servizi**

In `src/app/servizi/page.tsx`, stesso pattern con `FAQ_SERVIZI`.

- [ ] **Step 4: Aggiungere FAQ JSON-LD alla pagina contatti**

In `src/app/contatti/page.tsx`, stesso pattern con `FAQ_CONTATTI`.

- [ ] **Step 5: Aggiungere FAQ JSON-LD alla pagina progettazione-design**

In `src/app/progettazione-design/page.tsx`, stesso pattern con `FAQ_PROGETTAZIONE`.

- [ ] **Step 6: Aggiungere FAQ JSON-LD alla pagina servizi-ristrutturazione**

In `src/app/servizi-ristrutturazione/page.tsx`, stesso pattern con `FAQ_RISTRUTTURAZIONE`.

- [ ] **Step 7: Verificare build**

```bash
npm run build
```
Expected: 0 errors

- [ ] **Step 8: Commit**

```bash
git add src/lib/seo/faq-data.ts src/app/finanziamento/page.tsx src/app/servizi/page.tsx src/app/contatti/page.tsx src/app/progettazione-design/page.tsx src/app/servizi-ristrutturazione/page.tsx
git commit -m "feat(seo): add FAQPage JSON-LD to 5 high-intent pages"
```

---

## Task 8: Review/AggregateRating schema per testimonianze

**Files:**
- Modify: `src/components/home/TestimonialsCarousel.tsx` — esportare array testimonials
- Modify: `src/app/page.tsx` — aggiungere AggregateRating + Review JSON-LD

- [ ] **Step 1: Esportare l'array testimonials dal carousel**

In `src/components/home/TestimonialsCarousel.tsx`, cambiare:

```typescript
// Da:
const testimonials = [
// A:
export const testimonials = [
```

- [ ] **Step 2: Aggiungere Review JSON-LD alla home page**

In `src/app/page.tsx`, aggiungere:

```typescript
import Script from "next/script";
import { testimonials } from "@/components/home/TestimonialsCarousel";
```

Creare il JSON-LD con i dati reali delle testimonianze:

```tsx
const reviewJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://www.moschianosrl.it/#business",
  name: "Mood Abitare",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    bestRating: "5",
    ratingCount: String(testimonials.length),
    reviewCount: String(testimonials.length),
  },
  review: testimonials.map((t) => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: t.name,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
    },
    reviewBody: t.text,
    datePublished: "2025-01-15",
  })),
};
```

Aggiungere nel JSX:

```tsx
<Script
  id="reviews-jsonld"
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
/>
```

- [ ] **Step 3: Verificare build**

```bash
npm run build
```
Expected: 0 errors

- [ ] **Step 4: Commit**

```bash
git add src/components/home/TestimonialsCarousel.tsx src/app/page.tsx
git commit -m "feat(seo): add AggregateRating and Review JSON-LD with real testimonials"
```

---

## Task 9: Noindex pagine legacy + cleanup sitemap

**Files:**
- Modify: `src/app/blog/page.tsx`
- Modify: `src/app/progetti/page.tsx`
- Modify: `src/app/sitemap.ts`

- [ ] **Step 1: Aggiungere noindex alla pagina blog**

In `src/app/blog/page.tsx`, nel metadata object aggiungere:

```typescript
robots: {
  index: false,
  follow: true,
},
```

- [ ] **Step 2: Aggiungere noindex alla pagina progetti**

In `src/app/progetti/page.tsx`, nel metadata object aggiungere:

```typescript
robots: {
  index: false,
  follow: true,
},
```

- [ ] **Step 3: Rimuovere pagine legacy dalla sitemap**

In `src/app/sitemap.ts`, rimuovere le entries per `/blog` e `/progetti` dall'array staticPages.

Aggiungere anche la pagina `/servizi` se mancante.

- [ ] **Step 4: Verificare build**

```bash
npm run build
```
Expected: 0 errors

- [ ] **Step 5: Commit**

```bash
git add src/app/blog/page.tsx src/app/progetti/page.tsx src/app/sitemap.ts
git commit -m "fix(seo): noindex legacy pages, remove from sitemap"
```

---

## Task 10: Espansione keyword su tutte le pagine prodotto

**Files:**
- Modify: `src/app/prodotti/[slug]/page.tsx`

- [ ] **Step 1: Espandere le keywords con geo-targeting extra**

Nel file `src/app/prodotti/[slug]/page.tsx`, espandere il `productKeywords` object aggiungendo per ogni categoria le varianti geografiche mancanti. Il pattern è: aggiungere `"[prodotto] Busto Arsizio"`, `"[prodotto] Gallarate"`, e `"[prodotto] provincia Varese"` ai prodotti principali che ancora non li hanno.

Prodotti ad alta priorità da espandere (quelli con più volume di ricerca):

```typescript
// Aggiungere a infissi-pvc:
"serramenti PVC Busto Arsizio",
"finestre PVC Gallarate",
"infissi PVC provincia Varese",
"sostituzione finestre Varese",

// Aggiungere a infissi-alluminio:
"infissi alluminio Busto Arsizio",
"serramenti alluminio Gallarate",
"finestre alluminio provincia Varese",

// Aggiungere a porte-blindate:
"porte blindate Busto Arsizio",
"porte blindate Gallarate",
"porte blindate provincia Varese",

// Aggiungere a porte-interne:
"porte interne Busto Arsizio",
"porte interne Gallarate",

// Aggiungere a climatizzatori:
"climatizzatori Busto Arsizio",
"condizionatori Gallarate",
"installazione climatizzatori provincia Varese",

// Aggiungere a cucine-su-misura:
"cucine su misura Busto Arsizio",
"cucine Arrex Gallarate",

// Aggiungere a arredo-bagno:
"arredo bagno Busto Arsizio",
"ristrutturazione bagno Gallarate",

// Aggiungere a caldaia:
"caldaia condensazione Busto Arsizio",
"sostituzione caldaia Gallarate",

// Aggiungere a pompe-di-calore:
"pompe di calore Busto Arsizio",
"pompa calore Gallarate",

// Aggiungere a impianti-fotovoltaici:
"fotovoltaico Busto Arsizio",
"pannelli solari Gallarate",
"fotovoltaico provincia Varese",
```

- [ ] **Step 2: Espandere la description nel generateMetadata per i prodotti principali**

Modificare il template della description in `generateMetadata()` per includere "provincia di Varese":

```typescript
// Da:
`${product.name}${brandSuffix}: ${content.tagline}. Scopri la gamma da Mood Abitare, showroom a Gorla Maggiore (VA).`
// A:
`${product.name}${brandSuffix}: ${content.tagline}. Scopri la gamma da Mood Abitare, showroom a Gorla Maggiore — provincia di Varese.`
```

- [ ] **Step 3: Verificare build**

```bash
npm run build
```
Expected: 0 errors

- [ ] **Step 4: Commit**

```bash
git add src/app/prodotti/[slug]/page.tsx
git commit -m "feat(seo): expand product keywords with geo-targeting for Busto Arsizio, Gallarate, and provincia Varese"
```

---

## Task 11: Migliorare OG Image root

**Files:**
- Modify: `src/app/opengraph-image.tsx`

- [ ] **Step 1: Aggiornare l'OG image root con più informazioni**

Aggiornare il tagline e location per includere più keyword:

```typescript
// Tagline: da
"Serramenti, Porte e Ristrutturazioni"
// a
"Serramenti, Porte, Ristrutturazioni e Arredo Casa"

// Location: da
"Gorla Maggiore (VA) — Premium Partner Oknoplast"
// a
"Showroom 300mq a Gorla Maggiore (VA) — Premium Partner Oknoplast"
```

- [ ] **Step 2: Commit**

```bash
git add src/app/opengraph-image.tsx
git commit -m "fix(seo): improve root OG image with enhanced keywords"
```

---

## Task 12: Verifica finale e build completo

**Files:** Nessun nuovo file

- [ ] **Step 1: Build completo**

```bash
npm run build
```
Expected: 0 errors, 56+ pagine generate con successo

- [ ] **Step 2: Lint**

```bash
npm run lint
```
Expected: 0 errors

- [ ] **Step 3: Verificare le OG images generate**

Controllare nel browser:
- `http://localhost:3000/opengraph-image` → root OG image
- `http://localhost:3000/prodotti/infissi-pvc/opengraph-image` → product OG image

- [ ] **Step 4: Validare JSON-LD con Google Rich Results Test**

URLs da testare (dopo deploy):
- Home: WebSite + Organization + LocalBusiness + AggregateRating
- `/prodotti/infissi-pvc`: BreadcrumbList + Product
- `/finanziamento`: BreadcrumbList + FAQPage
- `/contatti`: BreadcrumbList + FAQPage
- `/servizi`: BreadcrumbList + FAQPage

- [ ] **Step 5: Commit finale se necessario**

```bash
git add -A
git commit -m "feat(seo): complete SEO optimization — structured data, OG images, keywords, FAQ schemas"
```

---

## Riepilogo impatto SEO atteso

| Miglioramento | Impatto | Rich Result |
|---|---|---|
| Product schema su 35+ pagine | Alto | Product cards in SERP |
| FAQPage su 5 pagine | Alto | FAQ featured snippets |
| AggregateRating + Reviews | Alto | Stelle in SERP |
| OG Images dinamiche per prodotti | Medio | Social sharing CTR |
| BreadcrumbList su tutte le pagine | Medio | Breadcrumb trail in SERP |
| OfferCatalog nel LocalBusiness | Medio | Knowledge Panel ricco |
| Keyword geo-expansion | Alto | Visibilità multi-città |
| Noindex pagine legacy | Medio | Crawl budget preservato |
| sameAs social profiles | Basso | Knowledge Panel links |

**Pagine totali coinvolte:** ~48 (tutte)
**Nuovi JSON-LD schemas:** Product (35), FAQPage (5), AggregateRating (1), BreadcrumbList (8)
**OG Images generate:** 35+ dinamiche per prodotti + 1 root migliorata
