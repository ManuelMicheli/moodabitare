/**
 * Seed Sanity Studio with existing site data.
 *
 * Usage:
 *   SANITY_TOKEN=<your-token> node scripts/seed-sanity.mjs
 */

import { createClient } from "@sanity/client";

const token = process.env.SANITY_TOKEN;
if (!token) {
  console.error("Missing SANITY_TOKEN env variable. Create an Editor token at sanity.io/manage.");
  process.exit(1);
}

const client = createClient({
  projectId: "wgwm1nif",
  dataset: "production",
  apiVersion: "2024-01-01",
  token,
  useCdn: false,
});

// ── Site Settings ──────────────────────────────────────────────────
const siteSettings = {
  _id: "siteSettings",
  _type: "siteSettings",
  title: "Mood Abitare",
  description:
    "Oltre 30 anni di esperienza in serramenti, porte, ristrutturazioni e arredo casa nella provincia di Varese.",
  phone: "0331.1588159",
  whatsapp: "351.7278053",
  email: "info@moodabitare.it",
  address: "Viale Europa, 65 — 21050 Gorla Maggiore (VA)",
};

// ── Services (6) ───────────────────────────────────────────────────
const services = [
  {
    title: "Consulenza progettuale",
    description:
      "Analisi delle esigenze e delle specifiche dello spazio da rinnovare. Progetto personalizzato per migliorare estetica, efficienza energetica e comfort.",
    icon: "compass",
    order: 1,
  },
  {
    title: "Preventivi e sopralluoghi gratuiti",
    description:
      "Sopralluoghi gratuiti con tecnico qualificato. Preventivi dettagliati, chiari e trasparenti con stima precisa dei costi e delle tempistiche.",
    icon: "clipboard",
    order: 2,
  },
  {
    title: "Installazione e posa in opera",
    description:
      "Squadra di operatori formata direttamente dall'azienda. Montaggio dei serramenti in totale sicurezza con tecniche all'avanguardia. Posa in opera certificata con patentino.",
    icon: "wrench",
    order: 3,
  },
  {
    title: "Supporto detrazioni fiscali",
    description:
      "Gestione completa dell'aspetto burocratico per la sostituzione dei serramenti. Compilazione della documentazione e presentazione delle pratiche incluse.",
    icon: "receipt",
    order: 4,
  },
  {
    title: "Smaltimento vecchi serramenti",
    description:
      "Rimozione e trasporto dei vecchi infissi presso strutture di smaltimento autorizzate, nel rispetto dell'ambiente e delle normative vigenti.",
    icon: "recycle",
    order: 5,
  },
  {
    title: "Assistenza post-vendita",
    description:
      "Servizio completo di assistenza post-vendita: manutenzione, riparazioni e consigli. L'impegno non termina con l'installazione.",
    icon: "headset",
    order: 6,
  },
].map((s, i) => ({
  _id: `service-${i + 1}`,
  _type: "service",
  ...s,
}));

// ── Brand Partners (29) ────────────────────────────────────────────
const brandPartners = [
  { name: "Oknoplast", category: "Infissi PVC e Alluminio, Portoncini" },
  { name: "Korus", category: "Infissi Alluminio / Legno, Persiane" },
  { name: "Pail", category: "Infissi in Legno, Porte Interne" },
  { name: "Kopen", category: "Portoncini" },
  { name: "Alias", category: "Porte blindate" },
  { name: "Erreci", category: "Persiane, Grate, Porte blindate" },
  { name: "Pasini", category: "Tapparelle" },
  { name: "Persit", category: "Persiane, Pergole" },
  { name: "Lupak", category: "Frangisole" },
  { name: "Door Arreda", category: "Porte interne" },
  { name: "Ecomet", category: "Persiane blindate" },
  { name: "Inim", category: "Allarme e videosorveglianza" },
  { name: "Grifoflex", category: "Zanzariere" },
  { name: "Bettio", category: "Zanzariere" },
  { name: "Sharknet", category: "Tende tecniche, Zanzariere" },
  { name: "Zanzar Sistem", category: "Tende tecniche" },
  { name: "Sinfonia", category: "Scale e ringhiere" },
  { name: "Tendarredo", category: "Pergole, Tende da sole" },
  { name: "Mc Slide", category: "Vetrate panoramiche" },
  { name: "Arrex Cucine", category: "Cucine su misura" },
  { name: "Merati", category: "Arredo bagno" },
  { name: "Sani e Co", category: "Sanitari" },
  { name: "Fiore", category: "Rubinetteria" },
  { name: "Class Tile", category: "Ceramiche" },
  { name: "Ali Parquet", category: "Parquet" },
  { name: "Haier", category: "Climatizzatori" },
  { name: "Samsung", category: "Climatizzatori" },
  { name: "Ariston", category: "Pompe di calore" },
  { name: "Hermann", category: "Caldaie" },
].map((b, i) => ({
  _id: `brand-${b.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`,
  _type: "brandPartner",
  name: b.name,
  category: b.category,
  order: i + 1,
}));

// ── Testimonials (3) ───────────────────────────────────────────────
const testimonials = [
  {
    name: "Anna Forziati",
    location: "Gorla Maggiore",
    text: "Consiglio questa ditta, ci siamo trovati benissimo con i lavori di ristrutturazione. Molto professionali e gentili.",
    projectType: "Ristrutturazione",
    rating: 5,
    isFeatured: true,
  },
  {
    name: "Gigi Barbi",
    location: "Varese",
    text: "Impresa consigliatissima, ristrutturazione completa di un appartamento in condominio al terzo piano \u2014 impianti, infissi, pavimenti, insomma tutto. Nessun tipo di problema, hanno gestito loro tutte le pratiche. Oltretutto, hanno presentato il preventivo pi\u00F9 basso dei concorrenti!",
    projectType: "Ristrutturazione completa",
    rating: 5,
    isFeatured: true,
  },
  {
    name: "Francesco Cazzaniga",
    location: "Provincia di Varese",
    text: "5 stelle per la professionalit\u00E0, Carmine e il team sempre disponibili e attenti alle esigenze del cliente. Consigliatissimo.",
    projectType: "Serramenti",
    rating: 5,
    isFeatured: true,
  },
].map((t) => ({
  _id: `testimonial-${t.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`,
  _type: "testimonial",
  ...t,
}));

// ── Product Categories (35) ────────────────────────────────────────
const macroCategories = [
  {
    id: "serramenti-oscuranti-portoncini",
    products: [
      { slug: "infissi-pvc", name: "Infissi in PVC", brand: "Oknoplast" },
      { slug: "infissi-alluminio", name: "Infissi in Alluminio", brand: "Oknoplast" },
      { slug: "infissi-alluminio-legno", name: "Infissi in Alluminio / Legno", brand: "Korus" },
      { slug: "infissi-legno", name: "Infissi in Legno", brand: "Pail" },
      { slug: "portoncini", name: "Portoncini", brand: "Oknoplast / Kopen" },
      { slug: "persiane", name: "Persiane", brand: "Erreci / Persit / Korus" },
      { slug: "frangisole", name: "Frangisole", brand: "Lupak" },
      { slug: "tapparelle", name: "Tapparelle", brand: "Pasini" },
    ],
  },
  {
    id: "porte-interne-blindate",
    products: [
      { slug: "porte-interne", name: "Porte Interne", brand: "Pail / Door Arreda" },
      { slug: "porte-blindate", name: "Porte Blindate", brand: "Alias / Erreci" },
    ],
  },
  {
    id: "sistemi-sicurezza",
    products: [
      { slug: "grate-sicurezza", name: "Grate di Sicurezza", brand: "Erreci" },
      { slug: "persiane-blindate", name: "Persiane Blindate", brand: "Erreci / Ecomet" },
      { slug: "allarme-videosorveglianza", name: "Sistemi di Allarme e Videosorveglianza", brand: "Inim" },
    ],
  },
  {
    id: "comfort-complementi",
    products: [
      { slug: "zanzariere", name: "Zanzariere", brand: "Grifoflex / Bettio / Sharknet" },
      { slug: "tende-tecniche", name: "Tende Tecniche", brand: "Sharknet / Zanzar Sistem" },
      { slug: "scale-ringhiere", name: "Scale e Ringhiere", brand: "Sinfonia" },
    ],
  },
  {
    id: "outdoor",
    products: [
      { slug: "pergole", name: "Pergole", brand: "Tendarredo / Persit" },
      { slug: "gazebi-strutture-legno", name: "Gazebi e Strutture in Legno", brand: "" },
      { slug: "tende-da-sole", name: "Tende da Sole", brand: "Tendarredo" },
      { slug: "vetrate-panoramiche", name: "Vetrate Panoramiche", brand: "Mc Slide" },
      { slug: "piscine", name: "Piscine Interrate e Fuori Terra", brand: "" },
      { slug: "rivestimento-piscine", name: "Rivestimento Piscine Esistenti", brand: "" },
      { slug: "arredo-giardino", name: "Arredo Giardino", brand: "" },
    ],
  },
  {
    id: "casa-arredo",
    products: [
      { slug: "cucine-su-misura", name: "Cucine su Misura", brand: "Arrex Cucine" },
      { slug: "arredo-bagno", name: "Arredo Bagno", brand: "Merati" },
      { slug: "sanitari", name: "Sanitari", brand: "Sani e Co" },
      { slug: "rubinetteria", name: "Rubinetteria", brand: "Fiore" },
      { slug: "ceramiche", name: "Ceramiche", brand: "Class Tile" },
      { slug: "parquet", name: "Parquet", brand: "Ali Parquet" },
    ],
  },
  {
    id: "riscaldamento-rinnovabili",
    products: [
      { slug: "climatizzatori", name: "Climatizzatori", brand: "Haier / Samsung" },
      { slug: "pompe-di-calore", name: "Pompe di Calore", brand: "Ariston" },
      { slug: "caldaia", name: "Caldaia", brand: "Hermann" },
      { slug: "impianti-fotovoltaici", name: "Impianti Fotovoltaici", brand: "" },
      { slug: "impianti-elettrici", name: "Impianti Elettrici", brand: "" },
      { slug: "impianti-idraulici", name: "Impianti Idraulici", brand: "" },
    ],
  },
];

// Short descriptions for product categories (from product-content.ts cardDescription)
const cardDescriptions = {
  "infissi-pvc": "Isolamento termico e acustico superiore, fino al 40% di risparmio in bolletta",
  "infissi-alluminio": "Profili ultra-sottili, massima luce e resistenza per progetti contemporanei",
  "infissi-alluminio-legno": "Alluminio esterno e legno interno: prestazioni elevate e design naturale",
  "infissi-legno": "Calore autentico del legno massello con tecnologia moderna e produzione artigianale italiana",
  "portoncini": "Sicurezza, isolamento e design per l'ingresso di casa",
  "persiane": "Oscuramento, ventilazione e sicurezza con stile italiano",
  "frangisole": "Controllo solare intelligente per comfort e risparmio energetico",
  "tapparelle": "Isolamento, sicurezza e oscuramento in un'unica soluzione",
  "porte-interne": "Design italiano e qualit\u00E0 artigianale per ogni ambiente della casa",
  "porte-blindate": "Massima sicurezza certificata senza rinunciare all'estetica",
  "grate-sicurezza": "Protezione certificata per finestre e porte-finestre",
  "persiane-blindate": "Sicurezza antieffrazione con l'estetica della persiana tradizionale",
  "allarme-videosorveglianza": "Sistemi di sicurezza integrati per la protezione completa della casa",
  "zanzariere": "Protezione dagli insetti senza rinunciare a luce e ventilazione",
  "tende-tecniche": "Controllo luce e privacy con tessuti tecnici di design",
  "scale-ringhiere": "Scale e ringhiere di design per interni ed esterni",
  "pergole": "Spazi outdoor vivibili tutto l'anno con pergole bioclimatiche",
  "gazebi-strutture-legno": "Strutture in legno su misura per giardini e spazi esterni",
  "tende-da-sole": "Protezione solare e comfort per terrazzi e giardini",
  "vetrate-panoramiche": "Vetrate scorrevoli senza profili per una vista senza confini",
  "piscine": "Piscine interrate e fuori terra per il tuo giardino",
  "rivestimento-piscine": "Rinnova la tua piscina esistente con rivestimenti moderni",
  "arredo-giardino": "Arredi outdoor di qualit\u00E0 per vivere il giardino",
  "cucine-su-misura": "Cucine personalizzate per ogni spazio e stile di vita",
  "arredo-bagno": "Mobili bagno di design per ambienti funzionali ed eleganti",
  "sanitari": "Sanitari moderni: comfort, igiene e design",
  "rubinetteria": "Rubinetteria di design con tecnologia per il risparmio idrico",
  "ceramiche": "Pavimenti e rivestimenti in ceramica per ogni ambiente",
  "parquet": "Pavimenti in legno naturale per ambienti caldi e accoglienti",
  "climatizzatori": "Climatizzazione efficiente per il comfort in ogni stagione",
  "pompe-di-calore": "Riscaldamento e raffrescamento ecologico ad alta efficienza",
  "caldaia": "Caldaie a condensazione per il massimo risparmio energetico",
  "impianti-fotovoltaici": "Energia solare per l'autonomia energetica della tua casa",
  "impianti-elettrici": "Impianti elettrici sicuri, moderni e a norma",
  "impianti-idraulici": "Impianti idraulici efficienti per bagno, cucina e riscaldamento",
};

// Deduplicate products (porte-blindate appears in 2 categories)
const seen = new Set();
const productCategories = [];
for (const mc of macroCategories) {
  for (const p of mc.products) {
    if (seen.has(p.slug)) continue;
    seen.add(p.slug);
    productCategories.push({
      _id: `product-cat-${p.slug}`,
      _type: "productCategory",
      name: p.name,
      slug: { _type: "slug", current: p.slug },
      brand: p.brand || "Mood Abitare",
      macroCategoryId: mc.id,
      shortDescription: cardDescriptions[p.slug] || "",
    });
  }
}

// ── Hero Slides (3) ────────────────────────────────────────────────
const heroSlides = [
  {
    _id: "hero-slide-1",
    _type: "heroSlide",
    headline: "Il tuo progetto, la nostra passione",
    subheadline: "Serramenti, porte e ristrutturazioni su misura nella provincia di Varese",
    ctaText: "Scopri i prodotti",
    ctaLink: "/prodotti/infissi-pvc",
    order: 1,
  },
  {
    _id: "hero-slide-2",
    _type: "heroSlide",
    headline: "Premium Partner Oknoplast",
    subheadline: "Condizioni esclusive e garanzia estesa fino a 10 anni sui serramenti in PVC e alluminio",
    ctaText: "Scopri di pi\u00F9",
    ctaLink: "/premium-partner",
    order: 2,
  },
  {
    _id: "hero-slide-3",
    _type: "heroSlide",
    headline: "Ristrutturazioni chiavi in mano",
    subheadline: "Dalla progettazione alla consegna, gestiamo tutto noi \u2014 pratiche incluse",
    ctaText: "I nostri servizi",
    ctaLink: "/servizi-ristrutturazione",
    order: 3,
  },
];

// ── Execute ────────────────────────────────────────────────────────
async function seed() {
  const allDocs = [
    siteSettings,
    ...services,
    ...brandPartners,
    ...testimonials,
    ...productCategories,
    ...heroSlides,
  ];

  console.log(`Seeding ${allDocs.length} documents to Sanity...\n`);

  let transaction = client.transaction();
  for (const doc of allDocs) {
    transaction = transaction.createOrReplace(doc);
  }

  try {
    const result = await transaction.commit();
    console.log(`Done! Created/updated ${result.documentIds.length} documents.`);
    console.log("\nBreakdown:");
    console.log(`  - 1 siteSettings`);
    console.log(`  - ${services.length} services`);
    console.log(`  - ${brandPartners.length} brand partners`);
    console.log(`  - ${testimonials.length} testimonials`);
    console.log(`  - ${productCategories.length} product categories`);
    console.log(`  - ${heroSlides.length} hero slides`);
  } catch (err) {
    console.error("Seed failed:", err.message);
    process.exit(1);
  }
}

seed();
