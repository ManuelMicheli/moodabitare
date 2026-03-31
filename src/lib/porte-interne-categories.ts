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
      { src: "/porte-interne/Gemini_Generated_Image_1zmsfm1zmsfm1zms-ezremove.png", name: "Pail — Laccate" },
      { src: "/porte-interne/Gemini_Generated_Image_tu2tyntu2tyntu2t-ezremove.png", name: "Pail — Essenze" },
      { src: "/porte-interne/Gemini_Generated_Image_ekcw2cekcw2cekcw-ezremove.png", name: "Pail — Boiserie" },
      { src: "/porte-interne/Gemini_Generated_Image_l1msiwl1msiwl1ms-ezremove.png", name: "Pail — Dolcevita" },
      { src: "/porte-interne/Gemini_Generated_Image_77iwll77iwll77iw-ezremove.png", name: "Pail — Vetro" },
    ],
  },
  {
    id: "doorarreda",
    label: "Door Arreda",
    tagline:
      "Italian doors for living — 85+ varianti su misura senza costi aggiuntivi. Collezioni Tineo, Seven, Fila, Meraki, Pandora, Green.",
    products: [
      { src: "/porte-interne/wmremove-transformed (43).png", name: "Door Arreda — Tineo" },
      { src: "/porte-interne/Gemini_Generated_Image_29kgge29kgge29kg-ezremove.png", name: "Door Arreda — Fila" },
      { src: "/porte-interne/wmremove-transformed (42).png", name: "Door Arreda — Pandora" },
      { src: "/porte-interne/Gemini_Generated_Image_aidxo9aidxo9aidx-ezremove.png", name: "Door Arreda — Seven" },
      { src: "/porte-interne/Gemini_Generated_Image_p5igomp5igomp5ig-ezremove.png", name: "Door Arreda — Meraki" },
      { src: "/porte-interne/Gemini_Generated_Image_xy5fo3xy5fo3xy5f-ezremove.png", name: "Door Arreda — Green" },
    ],
  },
];
