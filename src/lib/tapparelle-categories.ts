import type { GalleryImage } from "@/components/products/HorizontalGallery";

export interface TapparelleSubCategory {
  id: string;
  label: string;
  tagline: string;
  products: GalleryImage[];
}

/**
 * Macro-categorie tapparelle Pasini organizzate per materiale,
 * come sul catalogo ufficiale Pasini.
 *
 * Le immagini vanno in /public/prodotti/tapparelle/
 * Naming convention: pasini-{modello-kebab}.jpg
 */
export const tapparelleCategories: TapparelleSubCategory[] = [
  {
    id: "alluminio",
    label: "Alluminio",
    tagline: "11 modelli con coibentazione in poliuretano, protezione antigraffio e consegna ONEday",
    products: [
      { src: "/prodotti/roll55.png", name: "Pasini — Roll 55" },
      { src: "/prodotti/roll55se.png", name: "Pasini — Roll 55 Eco" },
      { src: "/prodotti/img-roll50air.png", name: "Pasini — Roll 50 Air" },
      { src: "/prodotti/roll45.png", name: "Pasini — Roll 45" },
      { src: "/prodotti/roll39.png", name: "Pasini — Roll 39" },
      { src: "/prodotti/maxiroll55.png", name: "Pasini — Maxi Roll 55" },
      { src: "/prodotti/maxiroll55tp.png", name: "Pasini — Maxi Roll 55 TP" },
      { src: "/prodotti/maxiroll50air.png", name: "Pasini — Maxi Roll 50 Air" },
      { src: "/prodotti/maxiroll41.png", name: "Pasini — Maxi Roll 41" },
      { src: "/prodotti/blind45.png", name: "Pasini — Blind 45" },
      { src: "/prodotti/blind27.png", name: "Pasini — Blind 27" },
    ],
  },
  {
    id: "acciaio",
    label: "Acciaio",
    tagline: "Massima resistenza antieffrazione con profili in acciaio zincato",
    products: [
      { src: "/tapparelle/download.png", name: "Pasini — Blind 55" },
      { src: "/tapparelle/download-1.png", name: "Pasini — Blind 41" },
    ],
  },
  {
    id: "pvc",
    label: "PVC",
    tagline: "Leggerezza, resistenza alla salsedine e isolamento termico",
    products: [
      { src: "/tapparelle/futura2.0.png", name: "Pasini — Futura 2.0" },
      { src: "/tapparelle/futura4.png", name: "Pasini — Futura 4.0" },
      { src: "/tapparelle/futura4-top.png", name: "Pasini — Futura 4.0 Top" },
      { src: "/tapparelle/magnum.png", name: "Pasini — Magnum" },
    ],
  },
  {
    id: "screen",
    label: "Screen",
    tagline: "Oscuramento tecnico con tessuto microforato per luce filtrata e sicurezza",
    products: [
      { src: "/tapparelle/vision.png", name: "Pasini — Vision" },
      { src: "/tapparelle/microvision.png", name: "Pasini — Microvision" },
      { src: "/tapparelle/safeblind.png", name: "Pasini — Safeblind" },
      { src: "/tapparelle/safeblind-light.png", name: "Pasini — Safeblind Light" },
    ],
  },
];
