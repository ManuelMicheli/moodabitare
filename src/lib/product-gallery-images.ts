import type { GalleryImage } from "@/components/products/HorizontalGallery";

/**
 * Tutte le gallery images per ogni slug prodotto.
 * Il `name` DEVE corrispondere esattamente alla chiave nel Record `details` in sheetMap.
 */
export const productGalleryImages: Record<string, GalleryImage[]> = {
  /* ── Serramenti esistenti ───────────────── */
  "infissi-legno": [
    { src: "/images/finestralegno.jpg", name: "Profilo bicolore" },
    { src: "/images/finestre-legno2.jpg", name: "Dettaglio cerniere" },
    { src: "/images/finestralegno3.jpg", name: "Profilo in legno" },
    { src: "/images/finestralegno4.jpg", name: "Dettaglio angolare" },
    { src: "/images/finestralegno5.jpg", name: "Sezione interna" },
  ],
  "infissi-alluminio": [
    { src: "/images/oknoplast-alu-titano.png", name: "Titano" },
    { src: "/images/oknoplast-alu-titano-evo.png", name: "Titano EVO" },
    { src: "/images/oknoplast-alu-titano-oc.png", name: "Titano OC" },
    { src: "/images/oknoplast-alu-titano-evo-oc.png", name: "Titano EVO OC" },
    { src: "/images/oknoplast-alu-titano-steel.png", name: "Titano Steel" },
    { src: "/images/oknoplast-alu-futural.png", name: "Futural" },
    { src: "/images/oknoplast-alu-futural-oc.png", name: "Futural OC" },
    { src: "/images/oknoplast-alu-prolux-alu.png", name: "Prolux ALU" },
  ],
  "infissi-pvc": [
    { src: "/images/1Finestra-Prolux-2017-1024x768.png", name: "Prolux" },
    { src: "/images/2Finestra-Prolux-Evolution-1024x768.png", name: "Prolux Evolution" },
    { src: "/images/SL_Prolux--1024x768.png", name: "Scorrevole Prolux" },
    { src: "/images/SL_Prolux-Plus-1024x768.png", name: "Scorrevole Prolux Plus" },
    { src: "/images/3Prolux-Swing-di-Oknoplast-1024x768.png", name: "Prolux Swing" },
    { src: "/images/4Prolux-Vitro-di-Oknoplast-1024x768.png", name: "Prolux Vitro" },
    { src: "/images/5Finestra-Platinium-Plus-1024x768.png", name: "Platinium Plus" },
    { src: "/images/6Finestra-Squareline-1024x768.png", name: "Squareline" },
    { src: "/images/7Finestra-Prismatic-1024x768.png", name: "Prismatic" },
    { src: "/images/8Prismatic-Evolution-1024x768.png", name: "Prismatic Evolution" },
    { src: "/images/9Finestra-Winergetic-Premium-1024x768.png", name: "Winergetic Premium" },
    { src: "/images/10Finestra-Winergetic-Premium-Passive-1024x768.png", name: "Winergetic Premium Passive" },
    { src: "/images/11Finestra-Winergetic-Alu-1024x768.png", name: "Winergetic Alu" },
  ],
  "infissi-alluminio-legno": [
    { src: "/prodotti/Korus-allumunio-legno2.jpg", name: "Skywood EVO Original Energy 1.0" },
    { src: "/prodotti/Korus-allumunio-legno3.jpg", name: "Skywood EVO Original" },
    { src: "/prodotti/Korus-allumunio-legno4.jpg", name: "Skywood EVO Linear Energy 1.0" },
    { src: "/prodotti/Korus-allumunio-legno5.jpg", name: "Skywood EVO Linear" },
    { src: "/prodotti/Korus-allumunio-legno6.jpg", name: "Skywood EVO Energy 1.0" },
    { src: "/prodotti/Korus-allumunio-legno7.jpg", name: "Skywood EVO" },
    { src: "/prodotti/Korus-alluminio-legno8.jpg", name: "Air SlideWood" },
  ],
  "porte-interne": [],
  "porte-blindate": [],

  /* ── Serramenti nuovi (placeholder) ─────── */
  "portoncini": [
    { src: "/prodotti/placeholder.svg", name: "Oknoplast — Tenvis Design Pro" },
    { src: "/prodotti/placeholder.svg", name: "Oknoplast — Tenvis Black Design" },
    { src: "/prodotti/placeholder.svg", name: "Oknoplast — Tenvis Intarsio" },
    { src: "/prodotti/placeholder.svg", name: "Oknoplast — Tenvis ECO" },
    { src: "/prodotti/placeholder.svg", name: "Kopen — Vitrum" },
    { src: "/prodotti/placeholder.svg", name: "Kopen — Materika" },
    { src: "/prodotti/placeholder.svg", name: "Kopen — Pure" },
  ],
  "persiane": [
    { src: "/prodotti/placeholder.svg", name: "Erreci — Maxima Plus" },
    { src: "/prodotti/placeholder.svg", name: "Erreci — Maxima Light" },
    { src: "/prodotti/placeholder.svg", name: "Persit — Elisa" },
    { src: "/prodotti/placeholder.svg", name: "Persit — Clara" },
    { src: "/prodotti/placeholder.svg", name: "Korus — SK45 Dione" },
    { src: "/prodotti/placeholder.svg", name: "Korus — Crono" },
  ],
  "frangisole": [
    { src: "/prodotti/placeholder.svg", name: "Lupak — Lume Pro" },
    { src: "/prodotti/placeholder.svg", name: "Lupak — Lume Esse" },
    { src: "/prodotti/placeholder.svg", name: "Lupak — Lume Light" },
    { src: "/prodotti/placeholder.svg", name: "Lupak — Filo 90" },
    { src: "/prodotti/placeholder.svg", name: "Lupak — Filo 65" },
  ],
  "tapparelle": [
    { src: "/prodotti/placeholder.svg", name: "Pasini — Roll 55" },
    { src: "/prodotti/placeholder.svg", name: "Pasini — Roll 45" },
    { src: "/prodotti/placeholder.svg", name: "Pasini — Maxi Roll 55" },
    { src: "/prodotti/placeholder.svg", name: "Pasini — Roll 50 Air" },
    { src: "/prodotti/placeholder.svg", name: "Pasini — Blind 45 AE" },
  ],

  /* ── Sicurezza (placeholder) ────────────── */
  "grate-sicurezza": [
    { src: "/prodotti/placeholder.svg", name: "Erreci — Sikura" },
    { src: "/prodotti/placeholder.svg", name: "Erreci — Evoluta 18" },
    { src: "/prodotti/placeholder.svg", name: "Erreci — Libera" },
    { src: "/prodotti/placeholder.svg", name: "Erreci — Marina" },
  ],
  "persiane-blindate": [
    { src: "/prodotti/placeholder.svg", name: "Erreci — Maxima Scudo" },
    { src: "/prodotti/placeholder.svg", name: "Erreci — Combi CE" },
    { src: "/prodotti/placeholder.svg", name: "Ecomet — ECO Persiana" },
    { src: "/prodotti/placeholder.svg", name: "Ecomet — ECO Combinato" },
  ],
  "allarme-videosorveglianza": [
    { src: "/prodotti/placeholder.svg", name: "Inim — SmartLiving 1050" },
    { src: "/prodotti/placeholder.svg", name: "Inim — Prime 060S" },
    { src: "/prodotti/placeholder.svg", name: "Inim — Sol" },
    { src: "/prodotti/placeholder.svg", name: "Inim — Air2 Sensori Wireless" },
  ],

  /* ── Comfort & Complementi (placeholder) ── */
  "zanzariere": [
    { src: "/prodotti/placeholder.svg", name: "Grifoflex — Rollblock" },
    { src: "/prodotti/placeholder.svg", name: "Grifoflex — Dream Luce" },
    { src: "/prodotti/placeholder.svg", name: "Grifoflex — Confort" },
    { src: "/prodotti/placeholder.svg", name: "Bettio — Scenica" },
    { src: "/prodotti/placeholder.svg", name: "Bettio — Miniscenica Evo" },
    { src: "/prodotti/placeholder.svg", name: "Bettio — Picoscenica" },
    { src: "/prodotti/placeholder.svg", name: "Sharknet — Apertura Centrale" },
    { src: "/prodotti/placeholder.svg", name: "Sharknet — 08" },
    { src: "/prodotti/placeholder.svg", name: "Sharknet — Apertura Verticale" },
  ],
  "tende-tecniche": [
    { src: "/prodotti/placeholder.svg", name: "Sharknet — Schermatura Solare" },
    { src: "/prodotti/placeholder.svg", name: "Sharknet — Antipolline" },
    { src: "/prodotti/placeholder.svg", name: "Zanzar Sistem — Perfecta" },
    { src: "/prodotti/placeholder.svg", name: "Zanzar Sistem — Nanoblind" },
    { src: "/prodotti/placeholder.svg", name: "Zanzar Sistem — Linea Plissettata" },
  ],
  "scale-ringhiere": [
    { src: "/prodotti/placeholder.svg", name: "Sinfonia — Aurea" },
    { src: "/prodotti/placeholder.svg", name: "Sinfonia — Bolero" },
    { src: "/prodotti/placeholder.svg", name: "Sinfonia — Laser" },
    { src: "/prodotti/placeholder.svg", name: "Sinfonia — Special" },
    { src: "/prodotti/placeholder.svg", name: "Sinfonia — Ringhiere e Balaustre" },
  ],

  /* ── Outdoor (placeholder) ──────────────── */
  "pergole": [
    { src: "/prodotti/placeholder.svg", name: "Tendarredo — P-190" },
    { src: "/prodotti/placeholder.svg", name: "Tendarredo — P-150" },
    { src: "/prodotti/placeholder.svg", name: "Tendarredo — Oskura Waterproof" },
    { src: "/prodotti/placeholder.svg", name: "Persit — Pergola Bioclimatica Persit" },
    { src: "/prodotti/placeholder.svg", name: "Persit — Pergola Bioclimatica Addossata" },
    { src: "/prodotti/placeholder.svg", name: "Persit — Pergola Bioclimatica Autoportante" },
  ],
  "tende-da-sole": [
    { src: "/prodotti/placeholder.svg", name: "Tendarredo — Perseo" },
    { src: "/prodotti/placeholder.svg", name: "Tendarredo — Febe 36 Cassonata" },
    { src: "/prodotti/placeholder.svg", name: "Tendarredo — Venere" },
    { src: "/prodotti/placeholder.svg", name: "Tendarredo — Kelisis" },
  ],
  "vetrate-panoramiche": [
    { src: "/prodotti/placeholder.svg", name: "Mc Slide — StarGlass H 15" },
    { src: "/prodotti/placeholder.svg", name: "Mc Slide — StarGlass H 00" },
    { src: "/prodotti/placeholder.svg", name: "Mc Slide — Sliding Floor" },
    { src: "/prodotti/placeholder.svg", name: "Mc Slide — StarGlass H 34" },
  ],

  /* ── Casa & Arredo (placeholder) ────────── */
  "cucine-su-misura": [
    { src: "/prodotti/placeholder.svg", name: "Arrex — AL 32" },
    { src: "/prodotti/placeholder.svg", name: "Arrex — Lola" },
    { src: "/prodotti/placeholder.svg", name: "Arrex — Queen" },
    { src: "/prodotti/placeholder.svg", name: "Arrex — Cannella" },
    { src: "/prodotti/placeholder.svg", name: "Arrex — Magda" },
    { src: "/prodotti/placeholder.svg", name: "Arrex — Costanza" },
  ],
  "arredo-bagno": [
    { src: "/prodotti/placeholder.svg", name: "Merati — Torana" },
    { src: "/prodotti/placeholder.svg", name: "Merati — Glamour" },
    { src: "/prodotti/placeholder.svg", name: "Merati — Easy" },
    { src: "/prodotti/placeholder.svg", name: "Merati — Domino" },
    { src: "/prodotti/placeholder.svg", name: "Merati — Plane" },
  ],
  "sanitari": [
    { src: "/prodotti/placeholder.svg", name: "Sani e Co — Sophia" },
    { src: "/prodotti/placeholder.svg", name: "Sani e Co — Dara" },
    { src: "/prodotti/placeholder.svg", name: "Sani e Co — Plano" },
    { src: "/prodotti/placeholder.svg", name: "Sani e Co — Young" },
  ],
  "rubinetteria": [
    { src: "/prodotti/placeholder.svg", name: "Fiore — Xenon Steel" },
    { src: "/prodotti/placeholder.svg", name: "Fiore — Kevon" },
    { src: "/prodotti/placeholder.svg", name: "Fiore — Primavera" },
    { src: "/prodotti/placeholder.svg", name: "Fiore — XS" },
    { src: "/prodotti/placeholder.svg", name: "Fiore — Doria" },
    { src: "/prodotti/placeholder.svg", name: "Fiore — Kima" },
  ],
  "ceramiche": [
    { src: "/prodotti/placeholder.svg", name: "Class Tile — Essenze" },
    { src: "/prodotti/placeholder.svg", name: "Class Tile — Castlestone" },
    { src: "/prodotti/placeholder.svg", name: "Class Tile — MyWood" },
    { src: "/prodotti/placeholder.svg", name: "Class Tile — Archè" },
    { src: "/prodotti/placeholder.svg", name: "Class Tile — Divina" },
    { src: "/prodotti/placeholder.svg", name: "Class Tile — Calcarea" },
  ],
  "parquet": [
    { src: "/prodotti/placeholder.svg", name: "Ali Parquet — PreMass" },
    { src: "/prodotti/placeholder.svg", name: "Ali Parquet — ExtraMass" },
    { src: "/prodotti/placeholder.svg", name: "Ali Parquet — SuperPreMass" },
    { src: "/prodotti/placeholder.svg", name: "Ali Parquet — Mass" },
    { src: "/prodotti/placeholder.svg", name: "Ali Parquet — Legni del Titano" },
    { src: "/prodotti/placeholder.svg", name: "Ali Parquet — Woodì" },
  ],

  /* ── Riscaldamento (placeholder) ────────── */
  "climatizzatori": [
    { src: "/prodotti/placeholder.svg", name: "Haier — Jade" },
    { src: "/prodotti/placeholder.svg", name: "Haier — Flexis Plus" },
    { src: "/prodotti/placeholder.svg", name: "Haier — Pearl" },
    { src: "/prodotti/placeholder.svg", name: "Samsung — WindFree Elite S2" },
    { src: "/prodotti/placeholder.svg", name: "Samsung — WindFree Avant S2" },
    { src: "/prodotti/placeholder.svg", name: "Samsung — WindFree Black" },
    { src: "/prodotti/placeholder.svg", name: "Samsung — Cebu S2" },
  ],
  "pompe-di-calore": [
    { src: "/prodotti/placeholder.svg", name: "Ariston — Nimbus Plus S Net" },
    { src: "/prodotti/placeholder.svg", name: "Ariston — Nimbus Compact S Net R32" },
    { src: "/prodotti/placeholder.svg", name: "Ariston — Nimbus Pocket M Net" },
    { src: "/prodotti/placeholder.svg", name: "Ariston — Nuos Evo" },
  ],
  "caldaia": [
    { src: "/prodotti/placeholder.svg", name: "Hermann — ThemaFast Condens" },
    { src: "/prodotti/placeholder.svg", name: "Hermann — Thema Condens" },
    { src: "/prodotti/placeholder.svg", name: "Hermann — Thema Condens SB" },
    { src: "/prodotti/placeholder.svg", name: "Hermann — Micra 4 Condensing" },
  ],
};
