import type { GalleryImage } from "@/components/products/HorizontalGallery";

export interface InfissiPvcSubCategory {
  id: string;
  label: string;
  tagline: string;
  products: GalleryImage[];
}

/**
 * Categorie infissi PVC Oknoplast organizzate per famiglia di profilo,
 * come sul sito ufficiale Oknoplast.
 *
 * Sezioni:
 *  1. Prolux       — 6 modelli (famiglia Prolux)
 *  2. Design       — 4 modelli (Squareline, Platinium Plus, Koncept Plus, Bilico)
 *  3. Prismatic    — 2 modelli (Prismatic, Prismatic Evolution)
 *  4. Winergetic   — 3 modelli (Premium, Premium Passive, Alu)
 *  5. Scorrevoli   — 5 modelli (Prolux Slide, HST Motion, HST Premium, PSK, Ekosol)
 */
export const infissiPvcCategories: InfissiPvcSubCategory[] = [
  {
    id: "prolux",
    label: "Prolux",
    tagline: "La famiglia best-seller: profili a 6 camere, fino al 22% di luce in pi\u00F9 e design brevettato",
    products: [
      { src: "/images/1Finestra-Prolux-2017-1024x768.png", name: "Prolux" },
      { src: "/images/2Finestra-Prolux-Evolution-1024x768.png", name: "Prolux Evolution" },
      { src: "/images/3Prolux-Swing-di-Oknoplast-1024x768.png", name: "Prolux Swing" },
      { src: "/images/oknoplast-prolux-plus.png", name: "Prolux Plus" },
      { src: "/images/oknoplast-prolux-piu.png", name: "Prolux Pi\u00F9" },
      { src: "/images/4Prolux-Vitro-di-Oknoplast-1024x768.png", name: "Prolux Vitro" },
    ],
  },
  {
    id: "design",
    label: "Design & Classic",
    tagline: "Profili squadrati, forme speciali e soluzioni innovative per ogni stile architettonico",
    products: [
      { src: "/images/6Finestra-Squareline-1024x768.png", name: "Squareline" },
      { src: "/images/5Finestra-Platinium-Plus-1024x768.png", name: "Platinium Plus" },
      { src: "/images/oknoplast-koncept-plus.png", name: "Koncept Plus" },
      { src: "/images/oknoplast-bilico.png", name: "Finestra a Bilico" },
    ],
  },
  {
    id: "prismatic",
    label: "Prismatic",
    tagline: "Profilo ultra-compatto da 76 mm con 3 guarnizioni e vetri fino a 48 mm — isolamento eccezionale",
    products: [
      { src: "/images/7Finestra-Prismatic-1024x768.png", name: "Prismatic" },
      { src: "/images/8Prismatic-Evolution-1024x768.png", name: "Prismatic Evolution" },
    ],
  },
  {
    id: "winergetic",
    label: "Winergetic",
    tagline: "Il top di gamma: 7 camere, 82 mm, triplo vetro di serie e certificazioni CasaClima",
    products: [
      { src: "/images/9Finestra-Winergetic-Premium-1024x768.png", name: "Winergetic Premium" },
      { src: "/images/10Finestra-Winergetic-Premium-Passive-1024x768.png", name: "Winergetic Premium Passive" },
      { src: "/images/11Finestra-Winergetic-Alu-1024x768.png", name: "Winergetic Alu" },
    ],
  },
  {
    id: "scorrevoli",
    label: "Scorrevoli",
    tagline: "Sistemi scorrevoli e alzanti per aperture panoramiche oltre 6 metri con soglia ribassata",
    products: [
      { src: "/images/oknoplast-prolux-slide.png", name: "Prolux Slide" },
      { src: "/images/SL_Prolux--1024x768.png", name: "Scorrevole Prolux" },
      { src: "/images/SL_Prolux-Plus-1024x768.png", name: "Scorrevole Prolux Plus" },
      { src: "/images/oknoplast-psk.png", name: "Traslante PSK" },
      { src: "/images/oknoplast-ekosol.png", name: "Ekosol" },
    ],
  },
];
