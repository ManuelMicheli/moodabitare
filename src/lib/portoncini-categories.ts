import type { GalleryImage } from "@/components/products/HorizontalGallery";

export interface PortonciniSubCategory {
  id: string;
  label: string;
  tagline: string;
  products: GalleryImage[];
}

/**
 * Macro-categorie portoncini Oknoplast + Kopen,
 * organizzate come sul sito ufficiale Oknoplast.
 *
 * Sezioni:
 *  1. Alluminio (Tenvis) — 9 linee
 *  2. PVC — 5 portoncini ingresso
 *  3. Cosmo — 14 porte esterne PVC HPL
 *  4. Kopen — 3 portoncini premium
 */
export const portonciniCategories: PortonciniSubCategory[] = [
  {
    id: "alluminio",
    label: "Alluminio Tenvis",
    tagline: "9 linee in alluminio a taglio termico con profilo 75 mm, pannello XPS e Ud fino a 0,84 W/m\u00B2K",
    products: [
      { src: "/images/oknoplast-tenvis-design-pro.png", name: "Oknoplast — Tenvis Design Pro" },
      { src: "/images/oknoplast-tenvis-black-design.png", name: "Oknoplast — Tenvis Black Design" },
      { src: "/images/oknoplast-tenvis-infinity.png", name: "Oknoplast — Tenvis Infinity" },
      { src: "/images/oknoplast-tenvis-groove.png", name: "Oknoplast — Tenvis Groove" },
      { src: "/images/oknoplast-tenvis-classic.png", name: "Oknoplast — Tenvis Classic" },
      { src: "/images/oknoplast-tenvis-intarsio.png", name: "Oknoplast — Tenvis Intarsio" },
      { src: "/images/oknoplast-tenvis-inox.png", name: "Oknoplast — Tenvis Inox" },
      { src: "/images/oknoplast-tenvis-eco.png", name: "Oknoplast — Tenvis ECO" },
      { src: "/images/oknoplast-tenvis-vintage.png", name: "Oknoplast — Tenvis Vintage" },
    ],
  },
  {
    id: "pvc",
    label: "PVC",
    tagline: "5 portoncini d'ingresso in PVC con profilo 70 mm, doppio vetro 24 mm e chiusura multipoint",
    products: [
      { src: "/prodotti/oknoplast-pvc-napoli.jpg", name: "Oknoplast — Napoli" },
      { src: "/prodotti/oknoplast-pvc-torino.jpg", name: "Oknoplast — Torino" },
      { src: "/prodotti/oknoplast-pvc-milano.jpg", name: "Oknoplast — Milano" },
      { src: "/prodotti/oknoplast-pvc-venezia.jpg", name: "Oknoplast — Venezia" },
      { src: "/prodotti/oknoplast-pvc-roma.jpg", name: "Oknoplast — Roma" },
    ],
  },
  {
    id: "cosmo",
    label: "Cosmo",
    tagline: "14 porte esterne in PVC con pannello HPL 36 mm, decorazioni in alluminio opzionali e isolamento fino a 1,2 W/m\u00B2K",
    products: [
      { src: "/prodotti/oknoplast-cosmo-quarzite.jpg", name: "Oknoplast — Cosmo Quarzite" },
      { src: "/prodotti/oknoplast-cosmo-orientite.jpg", name: "Oknoplast — Cosmo Orientite" },
      { src: "/prodotti/oknoplast-cosmo-manganite.jpg", name: "Oknoplast — Cosmo Manganite" },
      { src: "/prodotti/oknoplast-cosmo-froodite.jpg", name: "Oknoplast — Cosmo Froodite" },
      { src: "/prodotti/oknoplast-cosmo-dellaite.jpg", name: "Oknoplast — Cosmo Dellaite" },
      { src: "/prodotti/oknoplast-cosmo-barite.jpg", name: "Oknoplast — Cosmo Barite" },
      { src: "/prodotti/oknoplast-cosmo-heyite.jpg", name: "Oknoplast — Cosmo Heyite" },
      { src: "/prodotti/oknoplast-cosmo-turchese.jpg", name: "Oknoplast — Cosmo Turchese" },
      { src: "/prodotti/oknoplast-cosmo-perla.jpg", name: "Oknoplast — Cosmo Perla" },
      { src: "/prodotti/oknoplast-cosmo-giada.jpg", name: "Oknoplast — Cosmo Giada" },
      { src: "/prodotti/oknoplast-cosmo-fluorite.jpg", name: "Oknoplast — Cosmo Fluorite" },
      { src: "/prodotti/oknoplast-cosmo-azzurrite.jpg", name: "Oknoplast — Cosmo Azzurrite" },
      { src: "/prodotti/oknoplast-cosmo-ambra.jpg", name: "Oknoplast — Cosmo Ambra" },
      { src: "/prodotti/oknoplast-cosmo-acquamarina.jpg", name: "Oknoplast — Cosmo Acquamarina" },
    ],
  },
  {
    id: "kopen",
    label: "Kopen",
    tagline: "3 portoncini premium in alluminio KDS 100 Made in Italy, fino a RC4 e serratura biometrica",
    products: [
      { src: "/prodotti/Gemini_Generated_Image_4q0l7f4q0l7f4q0l.png", name: "Kopen — Vitrum" },
      { src: "/prodotti/Gemini_Generated_Image_mz0642mz0642mz06.png", name: "Kopen — Materika" },
      { src: "/prodotti/Gemini_Generated_Image_sudnkrsudnkrsudn.png", name: "Kopen — Pure" },
    ],
  },
];
