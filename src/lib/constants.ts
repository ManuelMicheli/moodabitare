export const SITE_CONFIG = {
  name: "Mood Abitare",
  company: "Moschiano Solution",
  tagline: "Serramenti, Porte e Ristrutturazioni",
  description:
    "Oltre 30 anni di esperienza in serramenti, porte, ristrutturazioni e arredo casa nella provincia di Varese.",
  url: "https://www.moodabitare.it",
};

export const CONTACT_INFO = {
  address: "Viale Europa, 65",
  city: "Gorla Maggiore",
  province: "VA",
  cap: "21050",
  fullAddress: "Viale Europa, 65 — 21050 Gorla Maggiore (VA), Italia",
  phone: "0331.1588159",
  phoneHref: "tel:+390331158815",
  whatsapp: "351.7278053",
  whatsappHref: "https://wa.me/393517278053",
  email: "info@moodabitare.it",
  emailCommerciale: "commerciale@moodabitare.it",
  emailAmministrazione: "amministrazione@moodabitare.it",
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
    morning: "9:00–12:30",
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
    id: "porte",
    label: "Porte",
    products: [
      { slug: "porte-blindate-alias", name: "Porte Blindate", brand: "Alias", macroCategoryId: "porte" },
      { slug: "porte-interne-bertolotto", name: "Porte Interne", brand: "Bertolotto", macroCategoryId: "porte" },
    ],
  },
  {
    id: "oscuranti-sicurezza",
    label: "Oscuranti & Sicurezza",
    products: [
      { slug: "persiane-erreci", name: "Persiane", brand: "Erreci Sicurezza", macroCategoryId: "oscuranti-sicurezza" },
      { slug: "grate-inferriate-alias", name: "Grate e Inferriate", brand: "Alias", macroCategoryId: "oscuranti-sicurezza" },
      { slug: "avvolgibili-pasini", name: "Avvolgibili", brand: "Pasini", macroCategoryId: "oscuranti-sicurezza" },
      { slug: "zanzariere-zanzar-sistem", name: "Zanzariere", brand: "Zanzar Sistem", macroCategoryId: "oscuranti-sicurezza" },
      { slug: "tende-tecniche-sharknet", name: "Tende Tecniche e Plissè", brand: "Sharknet", macroCategoryId: "oscuranti-sicurezza" },
    ],
  },
  {
    id: "arredo-casa",
    label: "Arredo Casa",
    products: [
      { slug: "cucine-cucinesse", name: "Cucine su Misura", brand: "Cucinesse", macroCategoryId: "arredo-casa" },
      { slug: "arredo-bagno-merati", name: "Arredo Bagno", brand: "Merati", macroCategoryId: "arredo-casa" },
      { slug: "parquet-laminati-skema", name: "Parquet e Laminati", brand: "Skema", macroCategoryId: "arredo-casa" },
      { slug: "sanitari-rubinetteria-karag", name: "Sanitari e Rubinetteria", brand: "Karag", macroCategoryId: "arredo-casa" },
      { slug: "scale-ringhiere-fontanot", name: "Scale e Ringhiere", brand: "Fontanot", macroCategoryId: "arredo-casa" },
    ],
  },
];

export const ALL_PRODUCTS: ProductCategory[] = MACRO_CATEGORIES.flatMap(
  (mc) => mc.products
);

export const BRAND_PARTNERS = [
  { name: "Oknoplast", category: "Finestre PVC e Alluminio", color: "#009FE3" },
  { name: "Giannattasio", category: "Serramenti in legno", color: "#5C3D2E" },
  { name: "Alias", category: "Porte blindate, Grate e inferriate", color: "#5b5b5b" },
  { name: "Bertolotto", category: "Porte interne", color: "#001034" },
  { name: "Erreci Sicurezza", category: "Persiane", color: "#1B6B3A" },
  { name: "Pasini", category: "Avvolgibili", color: "#0f3c63" },
  { name: "Alpac", category: "Monoblocchi e VMC", color: "#0072DF" },
  { name: "Zanzar Sistem", category: "Zanzariere", color: "#761f2b" },
  { name: "Sharknet", category: "Tende tecniche e plissè", color: "#007CBA" },
  { name: "Fontanot", category: "Scale e ringhiere", color: "#E63946" },
  { name: "Cucinesse", category: "Cucine su misura", color: "#C41E3A" },
  { name: "Merati", category: "Arredo bagno", color: "#0C4DA2" },
  { name: "Skema", category: "Parquet e laminati", color: "#2ea3f2" },
  { name: "Karag", category: "Sanitari e rubinetteria", color: "#d3906d" },
];

export const SERVICES = [
  {
    title: "Consulenza progettuale",
    description:
      "Assistenza nella scelta dei prodotti più adeguati alle caratteristiche della casa, con consulenti esperti.",
    icon: "compass",
  },
  {
    title: "Preventivi e sopralluoghi gratuiti",
    description:
      "Sopralluoghi gratuiti con tecnico qualificato che consiglia la realizzazione più adatta e fornisce preventivi accurati e trasparenti.",
    icon: "clipboard",
  },
  {
    title: "Installazione e posa in opera",
    description:
      "Squadra di operatori formata direttamente dall'azienda. Montaggio in totale sicurezza per garantire la perfetta funzionalità nel tempo.",
    icon: "wrench",
  },
  {
    title: "Supporto detrazioni fiscali",
    description:
      "Gestione completa dell'aspetto burocratico per la sostituzione serramenti: invio dati per usufruire delle detrazioni statali (50%).",
    icon: "receipt",
  },
  {
    title: "Smaltimento vecchi serramenti",
    description:
      "Smaltimento dei vecchi serramenti presso centri autorizzati, nel rispetto dell'ambiente e delle normative vigenti.",
    icon: "recycle",
  },
  {
    title: "Assistenza post-vendita",
    description:
      "Servizio completo di assistenza post-vendita con massima disponibilità e gentilezza.",
    icon: "headset",
  },
];

export const NAV_ITEMS = [
  { label: "Chi Siamo", href: "/chi-siamo" },
  { label: "Servizi", href: "/servizi" },
  { label: "Prodotti", href: "/prodotti", hasMegaMenu: true },
  { label: "Premium Partner", href: "/premium-partner" },
  { label: "Progetti", href: "/progetti" },
  { label: "Blog", href: "/blog" },
  { label: "Contatti", href: "/contatti" },
];

export const VALUE_PROPOSITIONS = [
  { number: 30, suffix: "+", label: "Anni di Esperienza" },
  { number: 300, suffix: "mq", label: "Showroom Espositivo" },
  { number: 14, suffix: "", label: "Brand Partner" },
  { number: 1, suffix: "", label: "Premium Partner Oknoplast", isSpecial: true },
];
