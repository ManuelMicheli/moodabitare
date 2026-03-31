/** Cloudflare R2 CDN base URL for video assets */
export const R2_CDN = "https://pub-7ff329c7d3de4b8fa141f32872a7b34e.r2.dev";

export const SITE_CONFIG = {
  name: "Mood Abitare",
  company: "Mood Abitare",
  tagline: "Serramenti, Porte e Ristrutturazioni",
  description:
    "Da oltre 30 anni al vostro fianco per serramenti, porte, ristrutturazioni e arredo casa nella provincia di Varese.",
  url: "https://www.moschianosrl.it",
};

export const CONTACT_INFO = {
  address: "Viale Europa, 65",
  city: "Gorla Maggiore",
  province: "VA",
  cap: "21050",
  fullAddress: "Viale Europa, 65 — 21050 Gorla Maggiore (VA), Italia",
  phone: "0331.1588159",
  phoneHref: "tel:+3903311588159",
  whatsapp: "351.7278053",
  whatsappHref: "https://wa.me/3517278053",
  email: "info@moodabitare.it",
  emailCommerciale: "commerciale@moschianosrl.it",
  emailAmministrazione: "amministrazione@moschianosrl.it",
  piva: "03940950128",
  sdi: "M5UXCR1",
  googleMapsUrl:
    "https://www.google.com/maps/place/Viale+Europa,+65,+21050+Gorla+Maggiore+VA",
  coordinates: { lat: 45.6278, lng: 8.8847 },
};

export const OPENING_HOURS = {
  weekdays: {
    label: "Lunedì – Venerdì",
    morning: "9:30–12:30",
    afternoon: "14:30–19:00",
  },
  saturday: {
    label: "Sabato",
    morning: "9:30–12:30",
    afternoon: "14:00–17:00",
  },
};

export type MacroCategory = {
  id: string;
  label: string;
  products: ProductCategory[];
};

export type ProductCategory = {
  slug: string;
  name: string;
  brand?: string;
  macroCategoryId: string;
};

export const MACRO_CATEGORIES: MacroCategory[] = [
  {
    id: "serramenti-oscuranti-portoncini",
    label: "Serramenti, Oscuranti, Portoncini",
    products: [
      { slug: "infissi-pvc", name: "Infissi in PVC", brand: "Oknoplast", macroCategoryId: "serramenti-oscuranti-portoncini" },
      { slug: "infissi-alluminio", name: "Infissi in Alluminio", brand: "Oknoplast", macroCategoryId: "serramenti-oscuranti-portoncini" },
      { slug: "infissi-alluminio-legno", name: "Infissi in Alluminio / Legno", brand: "Korus", macroCategoryId: "serramenti-oscuranti-portoncini" },
      { slug: "infissi-legno", name: "Infissi in Legno", brand: "Pail", macroCategoryId: "serramenti-oscuranti-portoncini" },
      { slug: "portoncini", name: "Portoncini", brand: "Oknoplast / Kopen", macroCategoryId: "serramenti-oscuranti-portoncini" },
      { slug: "persiane", name: "Persiane", brand: "Erreci / Persit / Korus", macroCategoryId: "serramenti-oscuranti-portoncini" },
      { slug: "frangisole", name: "Frangisole", brand: "Lupak", macroCategoryId: "serramenti-oscuranti-portoncini" },
      { slug: "tapparelle", name: "Tapparelle", brand: "Pasini", macroCategoryId: "serramenti-oscuranti-portoncini" },
    ],
  },
  {
    id: "porte-interne-blindate",
    label: "Porte Interne & Blindate",
    products: [
      { slug: "porte-interne", name: "Porte Interne", brand: "Pail / Door Arreda", macroCategoryId: "porte-interne-blindate" },
      { slug: "porte-blindate", name: "Porte Blindate", brand: "Alias / Erreci", macroCategoryId: "porte-interne-blindate" },
    ],
  },
  {
    id: "sistemi-sicurezza",
    label: "Sistemi di Sicurezza",
    products: [
      { slug: "grate-sicurezza", name: "Grate di Sicurezza", brand: "Erreci", macroCategoryId: "sistemi-sicurezza" },
      { slug: "persiane-blindate", name: "Persiane Blindate", brand: "Erreci / Ecomet", macroCategoryId: "sistemi-sicurezza" },
      { slug: "allarme-videosorveglianza", name: "Sistemi di Allarme e Videosorveglianza", brand: "Inim", macroCategoryId: "sistemi-sicurezza" },
    ],
  },
  {
    id: "comfort-complementi",
    label: "Comfort & Complementi",
    products: [
      { slug: "zanzariere", name: "Zanzariere", brand: "Grifoflex / Bettio / Sharknet", macroCategoryId: "comfort-complementi" },
      { slug: "tende-tecniche", name: "Tende Tecniche", brand: "Sharknet / Zanzar Sistem", macroCategoryId: "comfort-complementi" },
      { slug: "scale-ringhiere", name: "Scale e Ringhiere", brand: "Sinfonia", macroCategoryId: "comfort-complementi" },
    ],
  },
  {
    id: "outdoor",
    label: "Outdoor",
    products: [
      { slug: "pergole", name: "Pergole", brand: "Tendarredo / Persit", macroCategoryId: "outdoor" },
      { slug: "gazebi-strutture-legno", name: "Gazebi e Strutture in Legno", macroCategoryId: "outdoor" },
      { slug: "tende-da-sole", name: "Tende da Sole", brand: "Tendarredo", macroCategoryId: "outdoor" },
      { slug: "vetrate-panoramiche", name: "Vetrate Panoramiche", brand: "Mc Slide", macroCategoryId: "outdoor" },
      { slug: "piscine", name: "Piscine Interrate e Fuori Terra", macroCategoryId: "outdoor" },
      { slug: "rivestimento-piscine", name: "Rivestimento Piscine Esistenti", macroCategoryId: "outdoor" },
      { slug: "arredo-giardino", name: "Arredo Giardino", macroCategoryId: "outdoor" },
    ],
  },
  {
    id: "casa-arredo",
    label: "Casa & Arredo",
    products: [
      { slug: "cucine-su-misura", name: "Cucine su Misura", brand: "Arrex Cucine", macroCategoryId: "casa-arredo" },
      { slug: "arredo-bagno", name: "Arredo Bagno", brand: "Merati", macroCategoryId: "casa-arredo" },
      { slug: "sanitari", name: "Sanitari", brand: "Sani e Co", macroCategoryId: "casa-arredo" },
      { slug: "rubinetteria", name: "Rubinetteria", brand: "Fiore", macroCategoryId: "casa-arredo" },
      { slug: "ceramiche", name: "Ceramiche", brand: "Class Tile", macroCategoryId: "casa-arredo" },
      { slug: "parquet", name: "Parquet", brand: "Ali Parquet", macroCategoryId: "casa-arredo" },
    ],
  },
  {
    id: "riscaldamento-rinnovabili",
    label: "Riscaldamento / Energie Rinnovabili",
    products: [
      { slug: "climatizzatori", name: "Climatizzatori", brand: "Haier / Samsung", macroCategoryId: "riscaldamento-rinnovabili" },
      { slug: "pompe-di-calore", name: "Pompe di Calore", brand: "Ariston", macroCategoryId: "riscaldamento-rinnovabili" },
      { slug: "caldaia", name: "Caldaia", brand: "Hermann", macroCategoryId: "riscaldamento-rinnovabili" },
      { slug: "impianti-fotovoltaici", name: "Impianti Fotovoltaici", macroCategoryId: "riscaldamento-rinnovabili" },
      { slug: "impianti-elettrici", name: "Impianti Elettrici", macroCategoryId: "riscaldamento-rinnovabili" },
      { slug: "impianti-idraulici", name: "Impianti Idraulici", macroCategoryId: "riscaldamento-rinnovabili" },
    ],
  },
];

export const ALL_PRODUCTS: ProductCategory[] = [
  ...new Map(
    MACRO_CATEGORIES.flatMap((mc) => mc.products).map((p) => [p.slug, p])
  ).values(),
];

export const BRAND_PARTNERS = [
  { name: "Oknoplast", category: "Infissi PVC e Alluminio, Portoncini", color: "#009FE3" },
  { name: "Korus", category: "Infissi Alluminio / Legno, Persiane", color: "#5C3D2E" },
  { name: "Pail", category: "Infissi in Legno, Porte Interne", color: "#6B4226" },
  { name: "Kopen", category: "Portoncini", color: "#4A4A4A" },
  { name: "Alias", category: "Porte blindate", color: "#5b5b5b" },
  { name: "Erreci", category: "Persiane, Grate, Porte blindate", color: "#1B6B3A" },
  { name: "Pasini", category: "Tapparelle", color: "#0f3c63" },
  { name: "Persit", category: "Persiane, Pergole", color: "#4E6E50" },
  { name: "Lupak", category: "Frangisole", color: "#6E6E6E" },
  { name: "Door Arreda", category: "Porte interne", color: "#8B4513" },
  { name: "Ecomet", category: "Persiane blindate", color: "#3D5C3A" },
  { name: "Inim", category: "Allarme e videosorveglianza", color: "#D32F2F" },
  { name: "Grifoflex", category: "Zanzariere", color: "#2E7D32" },
  { name: "Bettio", category: "Zanzariere", color: "#1565C0" },
  { name: "Sharknet", category: "Tende tecniche, Zanzariere", color: "#007CBA" },
  { name: "Zanzar Sistem", category: "Tende tecniche", color: "#761f2b" },
  { name: "Sinfonia", category: "Scale e ringhiere", color: "#E63946" },
  { name: "Tendarredo", category: "Pergole, Tende da sole", color: "#FF8F00" },
  { name: "Mc Slide", category: "Vetrate panoramiche", color: "#0288D1" },
  { name: "Arrex Cucine", category: "Cucine su misura", color: "#C41E3A" },
  { name: "Merati", category: "Arredo bagno", color: "#0C4DA2" },
  { name: "Sani e Co", category: "Sanitari", color: "#00796B" },
  { name: "Fiore", category: "Rubinetteria", color: "#B0BEC5" },
  { name: "Class Tile", category: "Ceramiche", color: "#d3906d" },
  { name: "Ali Parquet", category: "Parquet", color: "#795548" },
  { name: "Haier", category: "Climatizzatori", color: "#E31937" },
  { name: "Samsung", category: "Climatizzatori", color: "#1428A0" },
  { name: "Ariston", category: "Pompe di calore", color: "#388E3C" },
  { name: "Hermann", category: "Caldaie", color: "#003D7C" },
];

/** Brand name → official website URL */
export const BRAND_URLS: Record<string, string> = {
  Oknoplast: "https://www.oknoplast.it/",
  Korus: "https://korusweb.com/",
  Pail: "https://www.pailporte.com/",
  Kopen: "https://kopendoors.com/",
  Alias: "https://www.aliasblindate.com/",
  Erreci: "https://www.errecisicurezza.com/",
  Pasini: "https://www.pasinispa.it/",
  Persit: "https://www.persit.it/",
  Lupak: "https://www.lupakmetal.com/",
  "Door Arreda": "https://www.doorarreda.it/",
  Ecomet: "https://www.ecometsrl.com/",
  Inim: "https://www.inim.biz/",
  Grifoflex: "https://www.grifoflex.com/it/",
  Bettio: "https://www.bettio.it/",
  Sharknet: "https://www.shark-net.com/",
  "Zanzar Sistem": "https://zanzar.it/",
  Sinfonia: "https://www.sinfonia.sm/",
  Tendarredo: "https://www.tendarredo.com/",
  "Mc Slide": "https://www.mcslide.it/",
  "Arrex Cucine": "https://www.arrex.it/",
  Merati: "https://www.merati.com/",
  "Sani e Co": "https://www.sanieco.it/",
  Fiore: "https://www.fiore.it/",
  "Class Tile": "https://class-tile.it/",
  "Ali Parquet": "https://www.aliparquets.com/",
  Haier: "https://www.haier-europe.com/it_IT/",
  Samsung: "https://www.samsung.com/it/business/climate/",
  Ariston: "https://www.ariston.com/it-it/",
  Hermann: "https://www.hermann-saunierduval.it/",
};

export const SERVICES = [
  {
    title: "Consulenza progettuale",
    description:
      "Analisi delle esigenze e delle specifiche dello spazio da rinnovare. Progetto personalizzato per migliorare estetica, efficienza energetica e comfort.",
    icon: "compass",
  },
  {
    title: "Preventivi e sopralluoghi gratuiti",
    description:
      "Sopralluoghi gratuiti con tecnico qualificato. Preventivi dettagliati, chiari e trasparenti con stima precisa dei costi e delle tempistiche.",
    icon: "clipboard",
  },
  {
    title: "Installazione e posa in opera",
    description:
      "Squadra di operatori formata direttamente dall'azienda. Montaggio dei serramenti in totale sicurezza con tecniche all'avanguardia. Posa in opera certificata con patentino.",
    icon: "wrench",
  },
  {
    title: "Supporto detrazioni fiscali",
    description:
      "Gestione completa dell'aspetto burocratico per la sostituzione dei serramenti. Compilazione della documentazione e presentazione delle pratiche incluse.",
    icon: "receipt",
  },
  {
    title: "Smaltimento vecchi serramenti",
    description:
      "Rimozione e trasporto dei vecchi infissi presso strutture di smaltimento autorizzate, nel rispetto dell'ambiente e delle normative vigenti.",
    icon: "recycle",
  },
  {
    title: "Assistenza post-vendita",
    description:
      "Servizio completo di assistenza post-vendita: manutenzione, riparazioni e consigli. L'impegno non termina con l'installazione.",
    icon: "headset",
  },
];

export const NAV_ITEMS = [
  {
    label: "Azienda",
    href: "/chi-siamo",
    hasDropdown: true,
    children: [
      { label: "Chi Siamo", href: "/chi-siamo" },
      { label: "Premium Partner", href: "/premium-partner" },
      { label: "Progettazione e Design", href: "/progettazione-design" },
      { label: "Servizi di Ristrutturazione", href: "/servizi-ristrutturazione" },
    ],
  },
  { label: "Prodotti", href: "/prodotti", hasMegaMenu: true },
  { label: "Showroom", href: "/showroom" },
  { label: "Finanziamento", href: "/finanziamento" },
  { label: "Contatti", href: "/contatti" },
];

export const VALUE_PROPOSITIONS = [
  { number: 30, suffix: "+", label: "Anni di Esperienza" },
  { number: 300, suffix: "mq", label: "Showroom Espositivo" },
  { number: 29, suffix: "", label: "Brand Partner" },
  { number: 1, suffix: "", label: "Premium Partner Oknoplast", isSpecial: true },
];
