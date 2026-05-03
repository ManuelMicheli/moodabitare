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
      { src: "/porte-interne/gen-1zmsfm1zmsfm1zms-ezremove.png", name: "Pail — Laccate" },
      { src: "/porte-interne/gen-tu2tyntu2tyntu2t-ezremove.png", name: "Pail — Essenze" },
      { src: "/porte-interne/gen-ekcw2cekcw2cekcw-ezremove.png", name: "Pail — Boiserie" },
      { src: "/porte-interne/gen-l1msiwl1msiwl1ms-ezremove.png", name: "Pail — Dolcevita" },
      { src: "/porte-interne/gen-77iwll77iwll77iw-ezremove.png", name: "Pail — Vetro" },
    ],
  },
  {
    id: "doorarreda",
    label: "Door Arreda",
    tagline:
      "Italian doors for living — 85+ varianti su misura senza costi aggiuntivi. Collezioni Tineo, Seven, Fila, Meraki, Pandora, Green.",
    products: [
      { src: "/porte-interne/wm-43.png", name: "Door Arreda — Tineo" },
      { src: "/porte-interne/gen-29kgge29kgge29kg-ezremove.png", name: "Door Arreda — Fila" },
      { src: "/porte-interne/wm-42.png", name: "Door Arreda — Pandora" },
      { src: "/porte-interne/gen-aidxo9aidxo9aidx-ezremove.png", name: "Door Arreda — Seven" },
      { src: "/porte-interne/gen-p5igomp5igomp5ig-ezremove.png", name: "Door Arreda — Meraki" },
      { src: "/porte-interne/gen-xy5fo3xy5fo3xy5f-ezremove.png", name: "Door Arreda — Green" },
    ],
  },
];
