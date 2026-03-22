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
  /* infissi-pvc ora usa InfissiPvcCatalog con categorie — vedi infissi-pvc-categories.ts */
  "infissi-pvc": [],
  "infissi-alluminio-legno": [
    { src: "/prodotti/Korus-allumunio-legno2.jpg", name: "Skywood EVO Original Energy 1.0" },
    { src: "/prodotti/Korus-allumunio-legno3.jpg", name: "Skywood EVO Original" },
    { src: "/prodotti/Korus-allumunio-legno4.jpg", name: "Skywood EVO Linear Energy 1.0" },
    { src: "/prodotti/Korus-allumunio-legno5.jpg", name: "Skywood EVO Linear" },
    { src: "/prodotti/Korus-allumunio-legno6.jpg", name: "Skywood EVO Energy 1.0" },
    { src: "/prodotti/Korus-allumunio-legno7.jpg", name: "Skywood EVO" },
    { src: "/prodotti/Korus-alluminio-legno8.jpg", name: "Air SlideWood" },
  ],
  /* porte-interne ora usa PorteInterneCatalog con categorie — vedi porte-interne-categories.ts */
  "porte-interne": [],
  "porte-blindate": [
    /* ── Alias ── */
    { src: "/prodotti/alias-steel.jpg", name: "Alias — Steel" },
    { src: "/prodotti/alias-vega-plus.jpg", name: "Alias — Vega Plus" },
    { src: "/prodotti/alias-silver.jpg", name: "Alias — Silver" },
    { src: "/prodotti/alias-gold.jpg", name: "Alias — Gold" },
    { src: "/prodotti/alias-platinum.jpg", name: "Alias — Platinum" },
    { src: "/prodotti/alias-wall-rasomuro.jpg", name: "Alias — Wall" },
    { src: "/prodotti/alias-twenty-led.jpg", name: "Alias — Twenty LED" },
    { src: "/prodotti/alias-flat.jpg", name: "Alias — Flat" },
    { src: "/prodotti/alias-slalom.jpg", name: "Alias — Slalom" },
    { src: "/prodotti/alias-dream.jpg", name: "Alias — Dream" },
    { src: "/prodotti/alias-dream-principale.jpg", name: "Alias — Dream One" },
    { src: "/prodotti/alias-due-ante.jpg", name: "Alias — Due Ante" },
    { src: "/prodotti/alias-wing-wall-head.jpg", name: "Alias — Magma" },
    /* ── Erreci ── */
    { src: "/prodotti/erreci-capri-cover.jpg", name: "Erreci — Capri" },
    { src: "/prodotti/erreci-ischia.jpg", name: "Erreci — Ischia" },
    { src: "/prodotti/erreci-lampedusa.jpg", name: "Erreci — Lampedusa" },
    { src: "/prodotti/erreci-maddalena.jpg", name: "Erreci — Maddalena" },
    { src: "/prodotti/erreci-panarea.jpg", name: "Erreci — Panarea" },
    { src: "/prodotti/erreci-pianosa.jpg", name: "Erreci — Pianosa" },
    { src: "/prodotti/erreci-marettimo.jpg", name: "Erreci — Marettimo" },
    { src: "/prodotti/erreci-vulcano.jpg", name: "Erreci — Vulcano" },
  ],

  /* portoncini ora usa PortonciniCatalog con categorie — vedi portoncini-categories.ts */
  "portoncini": [],
  "persiane": [
    { src: "/prodotti/maxima-plus.png", name: "Erreci — Maxima Plus" },
    { src: "/prodotti/maxima-light.png", name: "Erreci — Maxima Light" },
    { src: "/prodotti/persit-elisa.jpg", name: "Persit — Elisa" },
    { src: "/prodotti/persit-clara.jpg", name: "Persit — Clara" },
    { src: "/prodotti/korus-dione.jpg", name: "Korus — SK45 Dione" },
    { src: "/prodotti/korus-crono.jpg", name: "Korus — Crono" },
  ],
  "frangisole": [
    { src: "/prodotti/wmremove-transformed (41).png", name: "Lupak — Lume Pro" },
    { src: "/prodotti/lupak-lume.jpg", name: "Lupak — Lume" },
    { src: "/prodotti/lupak-lume-esse.jpg", name: "Lupak — Lume Esse" },
    { src: "/prodotti/lupak-lume-light.jpg", name: "Lupak — Lume Light" },
    { src: "/prodotti/lupak-filo-90.jpg", name: "Lupak — Filo 90" },
    { src: "/prodotti/lupak-filo-90-esse.jpg", name: "Lupak — Filo 90 Esse" },
    { src: "/prodotti/lupak-filo-80.jpg", name: "Lupak — Filo 80" },
    { src: "/prodotti/lupak-filo-70.jpg", name: "Lupak — Filo 70" },
    { src: "/prodotti/lupak-filo-65.jpg", name: "Lupak — Filo 65" },
    { src: "/prodotti/lupak-lupafix-ic120.jpg", name: "Lupak — Lupafix IC120" },
    { src: "/prodotti/lupak-lupafix-fc180.jpg", name: "Lupak — Lupafix FC180" },
    { src: "/prodotti/lupak-lupafix-ff108.jpg", name: "Lupak — Lupafix FF108" },
  ],
  /* tapparelle ora usa TapparelleCatalog con categorie — vedi tapparelle-categories.ts */
  "tapparelle": [],

  /* ── Sicurezza (placeholder) ────────────── */
  "grate-sicurezza": [
    { src: "/prodotti/erreci-sikura-main.jpg", name: "Erreci — Sikura" },
    { src: "/prodotti/erreci-evoluta18-main.jpg", name: "Erreci — Evoluta 18" },
    { src: "/prodotti/erreci-libera-main.jpg", name: "Erreci — Libera" },
    { src: "/prodotti/erreci-libera-ce-main.jpg", name: "Erreci — Libera CE" },
    { src: "/prodotti/erreci-edilia2-main.jpg", name: "Erreci — Edilia 2" },
    { src: "/prodotti/erreci-kiusa-main.jpg", name: "Erreci — Kiusa" },
    { src: "/prodotti/erreci-tenace-main.jpg", name: "Erreci — Tenace" },
    { src: "/prodotti/erreci-superior-main.jpg", name: "Erreci — Superior" },
    { src: "/prodotti/erreci-marina-main.jpg", name: "Erreci — Marina" },
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
