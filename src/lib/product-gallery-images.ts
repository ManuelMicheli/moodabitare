import type { GalleryImage } from "@/components/products/HorizontalGallery";

/**
 * Tutte le gallery images per ogni slug prodotto.
 * Il `name` DEVE corrispondere esattamente alla chiave nel Record `details` in sheetMap.
 */
export const productGalleryImages: Record<string, GalleryImage[]> = {
  /* ── Serramenti esistenti ───────────────── */
  "infissi-legno": [
    { src: "/images/finestralegno.jpg", name: "Pail — Belvedere" },
    { src: "/images/finestre-legno2.jpg", name: "Pail — DolceVita" },
    { src: "/images/finestralegno3.jpg", name: "Pail — Classica" },
    { src: "/images/finestralegno4.jpg", name: "Pail — Scorrevole Legno" },
    { src: "/images/finestralegno5.jpg", name: "Pail — Persiana Legno" },
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
    { src: "/prodotti/erreci-sikura-main.jpg", name: "Erreci — Sikura (Classe 4)" },
    { src: "/prodotti/erreci-evoluta18-main.jpg", name: "Erreci — Evoluta 18 (Classe 3)" },
    { src: "/prodotti/erreci-libera-main.jpg", name: "Erreci — Libera (Classe 3)" },
    { src: "/prodotti/erreci-libera-ce-main.jpg", name: "Erreci — Libera CE (Classe 3)" },
    { src: "/prodotti/erreci-edilia2-main.jpg", name: "Erreci — Edilia 2 (Classe 2)" },
    { src: "/prodotti/erreci-kiusa-main.jpg", name: "Erreci — Kiusa (Estensibile)" },
    { src: "/prodotti/erreci-tenace-main.jpg", name: "Erreci — Tenace (Inox AISI 304)" },
    { src: "/prodotti/erreci-superior-main.jpg", name: "Erreci — Superior (Inox Classe 3)" },
    { src: "/prodotti/erreci-marina-main.jpg", name: "Erreci — Marina (Alluminio)" },
  ],
  "persiane-blindate": [
    { src: "/prodotti/placeholder.svg", name: "Erreci — Maxima Scudo (Classe 3)" },
    { src: "/prodotti/placeholder.svg", name: "Erreci — Combi CE (Classe 3)" },
    { src: "/prodotti/placeholder.svg", name: "Erreci — Combi Slim (Classe 2)" },
    { src: "/prodotti/placeholder.svg", name: "Ecomet — Persiana ECO (Classe 3)" },
    { src: "/prodotti/placeholder.svg", name: "Ecomet — Grata ECO Apribile" },
    { src: "/prodotti/placeholder.svg", name: "Ecomet — ECO Combinato" },
  ],
  "allarme-videosorveglianza": [
    { src: "/prodotti/placeholder.svg", name: "Inim — Sol/G Evo (Wireless)" },
    { src: "/prodotti/placeholder.svg", name: "Inim — Sol/P (Touch Screen)" },
    { src: "/prodotti/placeholder.svg", name: "Inim — SmartLiving 505" },
    { src: "/prodotti/placeholder.svg", name: "Inim — SmartLiving 1050" },
    { src: "/prodotti/placeholder.svg", name: "Inim — InVista Telecamera IP 4MP" },
    { src: "/prodotti/placeholder.svg", name: "Inim — InVista NVR 8 canali PoE" },
  ],

  /* ── Comfort & Complementi (placeholder) ── */
  "zanzariere": [
    { src: "/prodotti/placeholder.svg", name: "Grifoflex — Rollblock" },
    { src: "/prodotti/placeholder.svg", name: "Grifoflex — Dream Luce" },
    { src: "/prodotti/placeholder.svg", name: "Grifoflex — Confort" },
    { src: "/prodotti/placeholder.svg", name: "Bettio — Neoscenica" },
    { src: "/prodotti/placeholder.svg", name: "Bettio — Miniscenica Evo" },
    { src: "/prodotti/placeholder.svg", name: "Bettio — Picoscenica" },
    { src: "/prodotti/placeholder.svg", name: "Sharknet — Apertura Centrale" },
    { src: "/prodotti/placeholder.svg", name: "Sharknet — 04 Laterale" },
  ],
  "tende-tecniche": [
    { src: "/prodotti/placeholder.svg", name: "Sharknet — Eclypser Laterale Blackout" },
    { src: "/prodotti/placeholder.svg", name: "Sharknet — Eclypser Verticale Filtrante" },
    { src: "/prodotti/placeholder.svg", name: "Zanzar Sistem — Perfecta" },
    { src: "/prodotti/placeholder.svg", name: "Zanzar Sistem — Nanoblind" },
  ],
  "scale-ringhiere": [
    { src: "/prodotti/placeholder.svg", name: "Sinfonia — Aurea (Elicoidale)" },
    { src: "/prodotti/placeholder.svg", name: "Sinfonia — Bolero (Legno)" },
    { src: "/prodotti/placeholder.svg", name: "Sinfonia — Laser (Taglio laser)" },
    { src: "/prodotti/placeholder.svg", name: "Sinfonia — Special (Scale a volte)" },
    { src: "/prodotti/placeholder.svg", name: "Sinfonia — Fulgur (Vetro + Inox)" },
  ],

  /* ── Outdoor (placeholder) ──────────────── */
  "pergole": [
    { src: "/prodotti/placeholder.svg", name: "Tendarredo — Anima" },
    { src: "/prodotti/placeholder.svg", name: "Tendarredo — P-150" },
    { src: "/prodotti/placeholder.svg", name: "Tendarredo — Oskura Waterproof" },
    { src: "/prodotti/placeholder.svg", name: "Persit — Bioclimatica Autoportante" },
    { src: "/prodotti/placeholder.svg", name: "Persit — Bioclimatica Addossata" },
  ],
  "tende-da-sole": [
    { src: "/prodotti/placeholder.svg", name: "Tendarredo — Minerva (A scomparsa)" },
    { src: "/prodotti/placeholder.svg", name: "Tendarredo — Kelisis (LED integrato)" },
    { src: "/prodotti/placeholder.svg", name: "Tendarredo — Mercurio Gold" },
    { src: "/prodotti/placeholder.svg", name: "Tendarredo — Smart (A caduta)" },
  ],
  "vetrate-panoramiche": [
    { src: "/prodotti/placeholder.svg", name: "MC Slide — StarGlass" },
    { src: "/prodotti/placeholder.svg", name: "MC Slide — Sliding Floor" },
    { src: "/prodotti/placeholder.svg", name: "MC Slide — Folding" },
  ],

  /* ── Casa & Arredo (placeholder) ────────── */
  "cucine-su-misura": [
    { src: "/prodotti/placeholder.svg", name: "Arrex — Gea (EcoPet)" },
    { src: "/prodotti/placeholder.svg", name: "Arrex — Loft 2.2" },
    { src: "/prodotti/placeholder.svg", name: "Arrex — Gea (Zenitale)" },
  ],
  "arredo-bagno": [
    { src: "/prodotti/placeholder.svg", name: "Merati — Torana 3.0" },
    { src: "/prodotti/placeholder.svg", name: "Merati — Torana Pull" },
    { src: "/prodotti/placeholder.svg", name: "Merati — Plane 3D" },
    { src: "/prodotti/placeholder.svg", name: "Merati — Plane 2D" },
    { src: "/prodotti/placeholder.svg", name: "Merati — Plane Gres" },
    { src: "/prodotti/placeholder.svg", name: "Merati — Easy" },
    { src: "/prodotti/placeholder.svg", name: "Merati — Round" },
    { src: "/prodotti/placeholder.svg", name: "Merati — Bath Table" },
  ],
  "sanitari": [
    { src: "/prodotti/placeholder.svg", name: "Sani e Co — Dara (Filomuro)" },
    { src: "/prodotti/placeholder.svg", name: "Sani e Co — Sophia (Sospesi)" },
  ],
  "rubinetteria": [
    { src: "/prodotti/placeholder.svg", name: "Fiore — Kube (Squadrato)" },
    { src: "/prodotti/placeholder.svg", name: "Fiore — Xenon (Inox 316L)" },
    { src: "/prodotti/placeholder.svg", name: "Fiore — Kevon Chic (Bicolore)" },
    { src: "/prodotti/placeholder.svg", name: "Fiore — King (Cucina)" },
  ],
  "ceramiche": [
    { src: "/prodotti/classtile-divina-calacatta-new.jpg", name: "Class Tile — Divina Calacatta" },
    { src: "/prodotti/classtile-divina-carrara-new.jpg", name: "Class Tile — Divina Carrara" },
    { src: "/prodotti/classtile-divina-onice-new.jpg", name: "Class Tile — Divina Onice Verde" },
    { src: "/prodotti/classtile-arche-new.jpg", name: "Class Tile — Archè (Effetto legno)" },
    { src: "/prodotti/classtile-mystone-new.jpg", name: "Class Tile — MyStone (Effetto pietra)" },
  ],
  "parquet": [
    { src: "/prodotti/ali-premass-classic.jpg", name: "Ali Parquet — PreMass Classic" },
    { src: "/prodotti/ali-superpremass-trend.jpg", name: "Ali Parquet — SuperPreMass Trend" },
    { src: "/prodotti/ali-extramass-living.jpg", name: "Ali Parquet — ExtraMass Living" },
    { src: "/prodotti/ali-extramass-oil.jpg", name: "Ali Parquet — ExtraMass Oil" },
  ],

  /* ── Riscaldamento (placeholder) ────────── */
  "climatizzatori": [
    { src: "/prodotti/placeholder.svg", name: "Haier — Jade (A+++ \u00B7 15 dB)" },
    { src: "/prodotti/placeholder.svg", name: "Haier — Flexis Plus (UV-C)" },
    { src: "/prodotti/placeholder.svg", name: "Samsung — WindFree Elite S2" },
    { src: "/prodotti/placeholder.svg", name: "Samsung — WindFree Avant S2" },
    { src: "/prodotti/placeholder.svg", name: "Samsung — Cebu S2" },
  ],
  "pompe-di-calore": [
    { src: "/prodotti/placeholder.svg", name: "Ariston — Nimbus Plus M (Monoblocco)" },
    { src: "/prodotti/placeholder.svg", name: "Ariston — Nimbus Compact S (Bollitore)" },
    { src: "/prodotti/placeholder.svg", name: "Ariston — Nimbus Pocket M (Compatta)" },
  ],
  "caldaia": [
    { src: "/prodotti/placeholder.svg", name: "Hermann — ThemaFast Condens" },
    { src: "/prodotti/placeholder.svg", name: "Hermann — Thema Condens" },
    { src: "/prodotti/placeholder.svg", name: "Hermann — Master 4 Condensing" },
  ],

  /* ── Outdoor ─────────────────────────────── */
  "gazebi-strutture-legno": [
    { src: "/prodotti/placeholder.svg", name: "Gazebo Autoportante" },
    { src: "/prodotti/placeholder.svg", name: "Carport in Legno" },
    { src: "/prodotti/placeholder.svg", name: "Pergolato Addossato" },
    { src: "/prodotti/placeholder.svg", name: "Dehor Commerciale" },
  ],
  "piscine": [
    { src: "/prodotti/placeholder.svg", name: "Interrata in Cemento Armato" },
    { src: "/prodotti/placeholder.svg", name: "Interrata Prefabbricata" },
    { src: "/prodotti/placeholder.svg", name: "Fuori Terra" },
    { src: "/prodotti/placeholder.svg", name: "Piscina con Copertura Automatica" },
  ],
  "rivestimento-piscine": [
    { src: "/prodotti/placeholder.svg", name: "Rivestimento in PVC Armato" },
    { src: "/prodotti/placeholder.svg", name: "Rivestimento in Mosaico" },
    { src: "/prodotti/placeholder.svg", name: "Rivestimento in Pietra Ricostruita" },
  ],
  "arredo-giardino": [
    { src: "/prodotti/placeholder.svg", name: "Set Pranzo da Esterno" },
    { src: "/prodotti/placeholder.svg", name: "Divani e Lounge da Giardino" },
    { src: "/prodotti/placeholder.svg", name: "Barbecue e Cucine Outdoor" },
    { src: "/prodotti/placeholder.svg", name: "Complementi e Illuminazione" },
  ],

  /* ── Impianti ────────────────────────────── */
  "impianti-fotovoltaici": [
    { src: "/prodotti/placeholder.svg", name: "Impianto Residenziale 3 kWp" },
    { src: "/prodotti/placeholder.svg", name: "Impianto Residenziale 6 kWp" },
    { src: "/prodotti/placeholder.svg", name: "Impianto con Accumulo Batterie" },
    { src: "/prodotti/placeholder.svg", name: "Impianto Premium Integrato" },
  ],
  "impianti-elettrici": [
    { src: "/prodotti/placeholder.svg", name: "Impianto Civile Nuovo" },
    { src: "/prodotti/placeholder.svg", name: "Adeguamento e Messa a Norma" },
    { src: "/prodotti/placeholder.svg", name: "Impianto Domotico" },
    { src: "/prodotti/placeholder.svg", name: "Ricarica Auto Elettrica" },
  ],
  "impianti-idraulici": [
    { src: "/prodotti/placeholder.svg", name: "Impianto Idraulico Completo" },
    { src: "/prodotti/placeholder.svg", name: "Riscaldamento a Pavimento" },
    { src: "/prodotti/placeholder.svg", name: "Sostituzione Tubazioni" },
    { src: "/prodotti/placeholder.svg", name: "Ricircolo Acqua Calda Sanitaria" },
  ],
};
