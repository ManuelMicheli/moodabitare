export const SITE_CONFIG = {
  name: "Mood Abitare",
  company: "Mood Abitare",
  tagline: "Serramenti, Porte e Ristrutturazioni",
  description:
    "Oltre 30 anni di esperienza in serramenti, porte, ristrutturazioni e arredo casa nella provincia di Varese.",
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
  brand: string;
  macroCategoryId: string;
};

export const MACRO_CATEGORIES: MacroCategory[] = [
  {
    id: "serramenti",
    label: "Serramenti",
    products: [
      { slug: "finestre-pvc-oknoplast", name: "Finestre in PVC", brand: "Oknoplast", macroCategoryId: "serramenti" },
      { slug: "finestre-alluminio-oknoplast", name: "Finestre in Alluminio", brand: "Oknoplast", macroCategoryId: "serramenti" },
      { slug: "serramenti-legno-giannattasio", name: "Serramenti in Legno", brand: "Giannattasio", macroCategoryId: "serramenti" },
      { slug: "monoblocchi-vmc-alpac", name: "Monoblocchi e VMC", brand: "Alpac", macroCategoryId: "serramenti" },
    ],
  },
  {
    id: "porte-sicurezza",
    label: "Porte & Sicurezza",
    products: [
      { slug: "porte-interne-bertolotto", name: "Porte Interne", brand: "Bertolotto", macroCategoryId: "porte-sicurezza" },
      { slug: "portoncini-alluminio-oknoplast", name: "Portoncini d'Ingresso", brand: "Oknoplast", macroCategoryId: "porte-sicurezza" },
      { slug: "porte-blindate-alias", name: "Porte Blindate", brand: "Alias", macroCategoryId: "porte-sicurezza" },
      { slug: "grate-inferriate-alias", name: "Grate e Inferriate", brand: "Alias", macroCategoryId: "porte-sicurezza" },
    ],
  },
  {
    id: "oscuranti-protezione",
    label: "Oscuranti & Protezione",
    products: [
      { slug: "avvolgibili-pasini", name: "Avvolgibili", brand: "Pasini", macroCategoryId: "oscuranti-protezione" },
      { slug: "persiane-erreci", name: "Persiane", brand: "Erreci Sicurezza", macroCategoryId: "oscuranti-protezione" },
      { slug: "tende-tecniche-sharknet", name: "Tende Tecniche e Plissé", brand: "Sharknet", macroCategoryId: "oscuranti-protezione" },
      { slug: "zanzariere-zanzar-sistem", name: "Zanzariere", brand: "Zanzar Sistem", macroCategoryId: "oscuranti-protezione" },
    ],
  },
  {
    id: "interni-arredo",
    label: "Interni & Arredo",
    products: [
      { slug: "cucine-cucinesse", name: "Cucine su Misura", brand: "Cucinesse", macroCategoryId: "interni-arredo" },
      { slug: "arredo-bagno-merati", name: "Arredo Bagno", brand: "Merati", macroCategoryId: "interni-arredo" },
      { slug: "sanitari-rubinetteria-karag", name: "Sanitari e Rubinetteria", brand: "Karag", macroCategoryId: "interni-arredo" },
      { slug: "parquet-laminati-skema", name: "Parquet e Laminati", brand: "Skema", macroCategoryId: "interni-arredo" },
      { slug: "scale-ringhiere-fontanot", name: "Scale e Ringhiere", brand: "Fontanot", macroCategoryId: "interni-arredo" },
    ],
  },
];

export const ALL_PRODUCTS: ProductCategory[] = MACRO_CATEGORIES.flatMap(
  (mc) => mc.products
);

export const BRAND_PARTNERS = [
  { name: "Oknoplast", category: "Finestre PVC e Alluminio, Portoncini", color: "#009FE3" },
  { name: "Giannattasio", category: "Serramenti in legno", color: "#5C3D2E" },
  { name: "Alias", category: "Porte blindate, Grate e inferriate", color: "#5b5b5b" },
  { name: "Bertolotto", category: "Porte interne", color: "#001034" },
  { name: "Erreci Sicurezza", category: "Persiane", color: "#1B6B3A" },
  { name: "Pasini", category: "Avvolgibili", color: "#0f3c63" },
  { name: "Alpac", category: "Monoblocchi e VMC", color: "#0072DF" },
  { name: "Zanzar Sistem", category: "Zanzariere", color: "#761f2b" },
  { name: "Sharknet", category: "Tende tecniche e plissé", color: "#007CBA" },
  { name: "Fontanot", category: "Scale e ringhiere", color: "#E63946" },
  { name: "Cucinesse", category: "Cucine su misura", color: "#C41E3A" },
  { name: "Merati", category: "Arredo bagno", color: "#0C4DA2" },
  { name: "Skema", category: "Parquet e laminati", color: "#2ea3f2" },
  { name: "Karag", category: "Sanitari e rubinetteria", color: "#d3906d" },
  { name: "Haier", category: "Climatizzazione", color: "#E31937" },
  { name: "Hermann", category: "Caldaie", color: "#003D7C" },
  { name: "Samsung", category: "Pompe di calore", color: "#1428A0" },
];

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
      { label: "Progettazione e Design", href: "/progettazione-design" },
      { label: "Servizi di Ristrutturazione", href: "/servizi-ristrutturazione" },
    ],
  },
  { label: "Prodotti", href: "/prodotti", hasMegaMenu: true },
  { label: "Premium Partner", href: "/premium-partner" },
  { label: "Finanziamento", href: "/finanziamento" },
  { label: "Contatti", href: "/contatti" },
];

export const VALUE_PROPOSITIONS = [
  { number: 30, suffix: "+", label: "Anni di Esperienza" },
  { number: 300, suffix: "mq", label: "Showroom Espositivo" },
  { number: 17, suffix: "", label: "Brand Partner" },
  { number: 1, suffix: "", label: "Premium Partner Oknoplast", isSpecial: true },
];
