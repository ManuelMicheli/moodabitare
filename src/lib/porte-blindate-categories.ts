import type { GalleryImage } from "@/components/products/HorizontalGallery";

export interface PorteBlindateSubCategory {
  id: string;
  label: string;
  tagline: string;
  products: GalleryImage[];
}

/**
 * Categorie porte blindate Alias & Erreci organizzate per tipologia.
 *
 * Sezioni:
 *  1. Tradizionali    — 4 modelli (cerniere a vista, entry-level)
 *  2. Cerniere nascoste — 7 modelli (design pulito, da RC3 a RC5)
 *  3. Filomuro & Design — 4 modelli (rasomuro, coplanari, LED)
 *  4. Smart & Bilico    — 3 modelli (innovazione, domotica, pivot)
 *  5. Interni & Tagliafuoco — 4 modelli (per ambienti interni + REI)
 */
export const porteBlindateCategories: PorteBlindateSubCategory[] = [
  {
    id: "tradizionali",
    label: "Tradizionali",
    tagline: "Cerniere a vista, struttura rinforzata — dalla Classe 3 entry-level alla RC4 con tripli deviatori inclinati",
    products: [
      { src: "/prodotti/alias-steel.jpg", name: "Alias — Steel" },
      { src: "/prodotti/alias-vega-plus.jpg", name: "Alias — Vega Plus" },
      { src: "/prodotti/erreci-capri-cover.jpg", name: "Erreci — Capri" },
      { src: "/prodotti/erreci-capri-cover.jpg", name: "Erreci — Capri Serrature" },
    ],
  },
  {
    id: "cerniere-nascoste",
    label: "Cerniere Nascoste",
    tagline: "Estetica pulita e lineare — cerniere invisibili da Classe 3 a Classe 5 con acciaio al manganese",
    products: [
      { src: "/prodotti/alias-silver.jpg", name: "Alias — Silver" },
      { src: "/prodotti/alias-gold.jpg", name: "Alias — Gold" },
      { src: "/prodotti/alias-platinum.jpg", name: "Alias — Platinum" },
      { src: "/prodotti/erreci-maddalena.jpg", name: "Erreci — Maddalena" },
      { src: "/prodotti/erreci-panarea.jpg", name: "Erreci — Panarea" },
      { src: "/prodotti/erreci-ischia.jpg", name: "Erreci — Ischia" },
      { src: "/prodotti/erreci-lampedusa.jpg", name: "Erreci — Lampedusa" },
    ],
  },
  {
    id: "filomuro",
    label: "Filomuro & Design",
    tagline: "Rasomuro, coplanari e LED integrato — la porta scompare nella parete, la sicurezza resta",
    products: [
      { src: "/prodotti/alias-wall-rasomuro.jpg", name: "Alias — Wall" },
      { src: "/prodotti/alias-twenty-led.jpg", name: "Alias — Twenty LED" },
      { src: "/prodotti/alias-flat.jpg", name: "Alias — Flat" },
      { src: "/prodotti/erreci-pianosa.jpg", name: "Erreci — Pianosa" },
    ],
  },
  {
    id: "smart-bilico",
    label: "Smart & Bilico",
    tagline: "Innovazione e domotica — porta a bilico brevettata, LED programmabile, apertura biometrica via app",
    products: [
      { src: "/prodotti/alias-slalom.jpg", name: "Alias — Slalom" },
      { src: "/prodotti/erreci-marettimo.jpg", name: "Erreci — Marettimo" },
      { src: "/prodotti/alias-due-ante.jpg", name: "Alias — Due Ante" },
    ],
  },
  {
    id: "interni-tagliafuoco",
    label: "Interni & Tagliafuoco",
    tagline: "Sicurezza per ambienti interni, studi e hotel — porte blindate RC2/RC3 e tagliafuoco fino a REI 90",
    products: [
      { src: "/prodotti/alias-dream.jpg", name: "Alias — Dream" },
      { src: "/prodotti/alias-dream-principale.jpg", name: "Alias — Dream One" },
      { src: "/prodotti/alias-wing-wall-head.jpg", name: "Alias — Magma" },
      { src: "/prodotti/erreci-vulcano.jpg", name: "Erreci — Vulcano" },
    ],
  },
];
