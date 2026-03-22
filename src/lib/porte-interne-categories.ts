import type { GalleryImage } from "@/components/products/HorizontalGallery";

export interface PorteInterneSubCategory {
  id: string;
  label: string;
  tagline: string;
  products: GalleryImage[];
}

/**
 * 2 macro-categorie: Pail e Door Arreda.
 * Le sotto-collezioni sono elencate dentro le schede tecniche.
 */
export const porteInterneCategories: PorteInterneSubCategory[] = [
  {
    id: "pail",
    label: "Pail",
    tagline:
      "75.000 porte/anno, 100% Made in Italy — laccate, essenze Tecnorovere, Dolcevita premium, vetrate Belvedere. Consegna Rapido Pail in 15 giorni.",
    products: [
      { src: "/prodotti/pail-linea-laccata.webp", name: "Pail — Laccate" },
      { src: "/prodotti/pail-riga.webp", name: "Pail — Pantografate" },
      { src: "/prodotti/pail-essenza-reflex.webp", name: "Pail — Essenze" },
      { src: "/prodotti/pail-tratto-boiserie.webp", name: "Pail — Boiserie" },
      { src: "/prodotti/pail-dolcevita-incanto.webp", name: "Pail — Dolcevita" },
      { src: "/prodotti/pail-belvedere.webp", name: "Pail — Vetro" },
      { src: "/prodotti/pail-one-prima-shiny.webp", name: "Pail — Shiny" },
    ],
  },
  {
    id: "doorarreda",
    label: "Door Arreda",
    tagline:
      "Italian doors for living — 85+ varianti su misura senza costi aggiuntivi. Collezioni Tineo, Seven, Fila, Meraki, Pandora, Green.",
    products: [
      { src: "/prodotti/doorarreda-tineo.webp", name: "Door Arreda — Tineo" },
      { src: "/prodotti/doorarreda-fila.webp", name: "Door Arreda — Fila" },
      { src: "/prodotti/doorarreda-pandora.webp", name: "Door Arreda — Pandora" },
      { src: "/prodotti/doorarreda-seven.webp", name: "Door Arreda — Seven" },
      { src: "/prodotti/doorarreda-meraki.webp", name: "Door Arreda — Meraki" },
      { src: "/prodotti/doorarreda-seven-minimo.webp", name: "Door Arreda — Seven Minimo" },
      { src: "/prodotti/doorarreda-green.webp", name: "Door Arreda — Green" },
    ],
  },
];
