import type { PremiumCategory } from "@/components/products/PremiumCatalog";

export interface PremiumCatalogConfig {
  brandLabel: string;
  title: string;
  description: string;
  stats: { n: number; label: string; suffix?: string }[];
  categories?: PremiumCategory[];
}

/**
 * Contenuti editoriali e configurazione catalogo premium per ogni prodotto.
 * I prodotti con `categories` mostrano navigazione a tab; gli altri griglia piatta.
 */
export const premiumCatalogData: Record<string, PremiumCatalogConfig> = {
  /* ═══════════════════════════════════════════════════════════════
   *  SERRAMENTI
   * ═══════════════════════════════════════════════════════════════ */

  "infissi-alluminio": {
    brandLabel: "Catalogo Oknoplast",
    title: "Serramenti in alluminio per la massima luminosità",
    description:
      "Profili ultra-sottili che massimizzano la superficie vetrata e la luce naturale. L\u2019alluminio garantisce resistenza strutturale eccezionale, durata nel tempo e oltre 200 colori RAL per un\u2019estetica senza compromessi.",
    stats: [
      { n: 8, label: "Modelli" },
      { n: 3, label: "Famiglie" },
      { n: 200, label: "Colori RAL", suffix: "+" },
    ],
    categories: [
      {
        id: "titano",
        label: "Titano",
        tagline: "La famiglia ammiraglia: profili minimal, prestazioni massime e versatilità assoluta per grandi vetrate e scorrevoli.",
        products: [
          { src: "/images/oknoplast-alu-titano.png", name: "Titano" },
          { src: "/images/oknoplast-alu-titano-evo.png", name: "Titano EVO" },
          { src: "/images/oknoplast-alu-titano-oc.png", name: "Titano OC" },
          { src: "/images/oknoplast-alu-titano-evo-oc.png", name: "Titano EVO OC" },
          { src: "/images/oknoplast-alu-titano-steel.png", name: "Titano Steel" },
        ],
      },
      {
        id: "futural",
        label: "Futural",
        tagline: "Design contemporaneo con profili sottili e isolamento termico di livello superiore, ideale per architetture moderne.",
        products: [
          { src: "/images/oknoplast-alu-futural.png", name: "Futural" },
          { src: "/images/oknoplast-alu-futural-oc.png", name: "Futural OC" },
        ],
      },
      {
        id: "prolux-alu",
        label: "Prolux ALU",
        tagline: "Il bestseller Prolux in versione alluminio: l\u2019equilibrio perfetto tra prestazioni collaudate e leggerezza strutturale.",
        products: [
          { src: "/images/oknoplast-alu-prolux-alu.png", name: "Prolux ALU" },
        ],
      },
    ],
  },

  "infissi-alluminio-legno": {
    brandLabel: "Catalogo Korus",
    title: "Infissi in alluminio e legno Korus",
    description:
      "Le finestre in Alluminio/Legno sono la punta di diamante degli infissi Korus. Realizzate con materiali di primissima fattura, hanno un design unico e certificazioni che creano ambienti gradevoli, caldi e accoglienti. Le performance termiche sono straordinarie e la loro lunga durata nel tempo è assicurata dalla qualità dei materiali utilizzati.",
    stats: [
      { n: 7, label: "Modelli" },
      { n: 3, label: "Linee" },
    ],
  },

  "persiane": {
    brandLabel: "Catalogo Erreci \u00B7 Persit \u00B7 Korus",
    title: "Persiane di sicurezza per ogni facciata",
    description:
      "Sicurezza antieffrazione e oscuramento in un\u2019unica soluzione elegante. Alluminio e acciaio con lamelle orientabili, verniciatura a polvere resistente a sole e intemperie, personalizzabili in gamma RAL completa.",
    stats: [
      { n: 6, label: "Modelli" },
      { n: 3, label: "Brand" },
    ],
    categories: [
      {
        id: "erreci",
        label: "Erreci",
        tagline: "Persiane in alluminio di alta sicurezza con cerniere antistrappo e profili antintrusione, dal design pulito e contemporaneo.",
        products: [
          { src: "/prodotti/maxima-plus.png", name: "Erreci \u2014 Maxima Plus" },
          { src: "/prodotti/maxima-light.png", name: "Erreci \u2014 Maxima Light" },
        ],
      },
      {
        id: "persit",
        label: "Persit",
        tagline: "Persiane orientabili di design: lamelle regolabili per dosare luce e ventilazione con la massima flessibilit\u00E0.",
        products: [
          { src: "/prodotti/persit-elisa.jpg", name: "Persit \u2014 Elisa" },
          { src: "/prodotti/persit-clara.jpg", name: "Persit \u2014 Clara" },
        ],
      },
      {
        id: "korus",
        label: "Korus",
        tagline: "Persiane in alluminio Korus: integrazione perfetta con i serramenti alluminio/legno per un sistema coordinato.",
        products: [
          { src: "/prodotti/korus-dione.jpg", name: "Korus \u2014 SK45 Dione" },
          { src: "/prodotti/korus-crono.jpg", name: "Korus \u2014 Crono" },
        ],
      },
    ],
  },

  "frangisole": {
    brandLabel: "Catalogo Lupak",
    title: "Frangisole per architetture di luce",
    description:
      "Sistemi di schermatura solare a lamelle orientabili che proteggono dal surriscaldamento estivo mantenendo luminosit\u00E0 e ventilazione naturale. Motorizzabili con sensori automatici sole e vento.",
    stats: [
      { n: 12, label: "Modelli" },
      { n: 3, label: "Serie" },
      { n: 75, label: "Riduzione calore", suffix: "%" },
    ],
    categories: [
      {
        id: "lume",
        label: "Lume",
        tagline: "La serie Lume: lamelle ellittiche ad alta prestazione per facciate residenziali e commerciali, massima resa estetica.",
        products: [
          { src: "/prodotti/wmremove-transformed (41).png", name: "Lupak \u2014 Lume Pro" },
          { src: "/prodotti/lupak-lume.jpg", name: "Lupak \u2014 Lume" },
          { src: "/prodotti/lupak-lume-esse.jpg", name: "Lupak \u2014 Lume Esse" },
          { src: "/prodotti/lupak-lume-light.jpg", name: "Lupak \u2014 Lume Light" },
        ],
      },
      {
        id: "filo",
        label: "Filo",
        tagline: "Profili Filo a sezione ridotta per un\u2019estetica minimale: dal Filo 90 al Filo 65, la schermatura che non si vede.",
        products: [
          { src: "/prodotti/lupak-filo-90.jpg", name: "Lupak \u2014 Filo 90" },
          { src: "/prodotti/lupak-filo-90-esse.jpg", name: "Lupak \u2014 Filo 90 Esse" },
          { src: "/prodotti/lupak-filo-80.jpg", name: "Lupak \u2014 Filo 80" },
          { src: "/prodotti/lupak-filo-70.jpg", name: "Lupak \u2014 Filo 70" },
          { src: "/prodotti/lupak-filo-65.jpg", name: "Lupak \u2014 Filo 65" },
        ],
      },
      {
        id: "lupafix",
        label: "Lupafix",
        tagline: "Soluzioni fisse e impacchettabili per grandi facciate: protezione permanente con impatto visivo zero.",
        products: [
          { src: "/prodotti/lupak-lupafix-ic120.jpg", name: "Lupak \u2014 Lupafix IC120" },
          { src: "/prodotti/lupak-lupafix-fc180.jpg", name: "Lupak \u2014 Lupafix FC180" },
          { src: "/prodotti/lupak-lupafix-ff108.jpg", name: "Lupak \u2014 Lupafix FF108" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
   *  SICUREZZA
   * ═══════════════════════════════════════════════════════════════ */

  "grate-sicurezza": {
    brandLabel: "Catalogo Erreci",
    title: "Grate di sicurezza per la protezione che non si vede",
    description:
      "Protezione antieffrazione certificata fino a Classe 4 con un design discreto che non compromette vista e luminosit\u00E0. Dall\u2019acciaio carbonitrurato all\u2019inox, dalla grata estensibile a quella apribile: 9 modelli per ogni contesto.",
    stats: [
      { n: 9, label: "Modelli" },
      { n: 4, label: "Classe max" },
    ],
    categories: [
      {
        id: "apribili",
        label: "Apribili",
        tagline: "Grate apribili con snodo autobloccante brevettato: sicurezza certificata con la massima praticità d\u2019uso quotidiano.",
        products: [
          { src: "/prodotti/erreci-sikura.jpg", name: "Erreci \u2014 Sikura (Classe 4)" },
          { src: "/prodotti/erreci-libera.jpg", name: "Erreci \u2014 Libera (Classe 3)" },
          { src: "/prodotti/erreci-libera-ce.jpg", name: "Erreci \u2014 Libera CE (Classe 3)" },
          { src: "/prodotti/erreci-evoluta18.jpg", name: "Erreci \u2014 Evoluta 18 (Classe 3)" },
          { src: "/prodotti/erreci-edilia2.jpg", name: "Erreci \u2014 Edilia 2 (Classe 2)" },
        ],
      },
      {
        id: "speciali",
        label: "Speciali",
        tagline: "Grate estensibili, in acciaio inox e in alluminio marino: soluzioni per ogni contesto, dal balconcino alla zona costiera.",
        products: [
          { src: "/prodotti/erreci-kiusa.jpg", name: "Erreci \u2014 Kiusa (Estensibile)" },
          { src: "/prodotti/erreci-tenace.jpg", name: "Erreci \u2014 Tenace (Inox AISI 304)" },
          { src: "/prodotti/erreci-superior.jpg", name: "Erreci \u2014 Superior (Inox Classe 3)" },
          { src: "/prodotti/erreci-marina.jpg", name: "Erreci \u2014 Marina (Alluminio)" },
        ],
      },
    ],
  },

  "persiane-blindate": {
    brandLabel: "Catalogo Erreci \u00B7 Ecomet",
    title: "Persiane blindate: sicurezza in forma classica",
    description:
      "Massima protezione antieffrazione con l\u2019aspetto estetico di una persiana tradizionale. Struttura rinforzata in acciaio, cerniere antistrappo e serrature di sicurezza multipunto.",
    stats: [
      { n: 6, label: "Modelli" },
      { n: 2, label: "Brand" },
    ],
    categories: [
      {
        id: "erreci",
        label: "Erreci",
        tagline: "Persiane blindate Erreci in acciaio zincato con lamelle rinforzate e cerniere antistrappo brevettate.",
        products: [
          { src: "/prodotti/erreci-maxima-scudo.jpg", name: "Erreci \u2014 Maxima Scudo (Classe 3)" },
          { src: "/prodotti/erreci-combi-ce.jpg", name: "Erreci \u2014 Combi CE (Classe 3)" },
          { src: "/prodotti/erreci-combi-slim.jpg", name: "Erreci \u2014 Combi Slim (Classe 2)" },
        ],
      },
      {
        id: "ecomet",
        label: "Ecomet",
        tagline: "Soluzioni Ecomet con sistema combinato persiana + grata per doppia protezione in un unico serramento.",
        products: [
          { src: "/prodotti/ecomet-persiana-eco.jpg", name: "Ecomet \u2014 Persiana ECO (Classe 3)" },
          { src: "/prodotti/ecomet-grata-eco.jpg", name: "Ecomet \u2014 Grata ECO Apribile" },
          { src: "/prodotti/ecomet-persiana-eco-2.jpg", name: "Ecomet \u2014 ECO Combinato" },
        ],
      },
    ],
  },

  "allarme-videosorveglianza": {
    brandLabel: "Catalogo Inim",
    title: "Sistemi Inim per la casa sempre protetta",
    description:
      "Protezione completa e intelligente: centrali antintrusione certificate IMQ, sensori perimetrali e volumetrici, telecamere IP ad alta risoluzione e gestione da app smartphone in tempo reale.",
    stats: [
      { n: 4, label: "Sistemi" },
      { n: 3, label: "Grado sicurezza" },
    ],
    categories: [
      {
        id: "centrali",
        label: "Centrali",
        tagline: "Centrali antintrusione Inim: dalla Sol wireless alla SmartLiving ibrida, fino alla Prime professionale con grado 3.",
        products: [
          { src: "/prodotti/inim-sol-g.png", name: "Inim \u2014 Sol/G Evo (Wireless)" },
          { src: "/prodotti/inim-sol-p.png", name: "Inim \u2014 Sol/P (Touch Screen)" },
          { src: "/prodotti/inim-smartliving-505.png", name: "Inim \u2014 SmartLiving 505" },
          { src: "/prodotti/inim-smartliving-1050.png", name: "Inim \u2014 SmartLiving 1050" },
        ],
      },
      {
        id: "videosorveglianza",
        label: "Videosorveglianza",
        tagline: "Sistema InVista: telecamere IP 4 MP con deep learning, visione notturna e NVR per la gestione completa da app.",
        products: [
          { src: "/prodotti/inim-invista-cam.jpg", name: "Inim \u2014 InVista Telecamera IP 4MP" },
          { src: "/prodotti/inim-invista-nvr.jpg", name: "Inim \u2014 InVista NVR 8 canali PoE" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
   *  COMFORT & COMPLEMENTI
   * ═══════════════════════════════════════════════════════════════ */

  "zanzariere": {
    brandLabel: "Catalogo Grifoflex \u00B7 Bettio \u00B7 Sharknet",
    title: "Zanzariere su misura per ogni serramento",
    description:
      "Protezione totale da insetti e pollini senza rinunciare a luce e ventilazione naturale. Scorrimento fluido e silenzioso con guide in alluminio e reti in fibra di vetro di alta qualit\u00E0.",
    stats: [
      { n: 9, label: "Modelli" },
      { n: 3, label: "Brand" },
    ],
    categories: [
      {
        id: "grifoflex",
        label: "Grifoflex",
        tagline: "Zanzariere a rullo e plissettate Grifoflex: scorrimento fluido, design minimal e massima durata nel tempo.",
        products: [
          { src: "/prodotti/grifoflex-rollblock.jpg", name: "Grifoflex \u2014 Rollblock" },
          { src: "/prodotti/grifoflex-dream-luce.jpg", name: "Grifoflex \u2014 Dream Luce" },
          { src: "/prodotti/grifoflex-confort.jpg", name: "Grifoflex \u2014 Confort" },
        ],
      },
      {
        id: "bettio",
        label: "Bettio",
        tagline: "La gamma Scenica Bettio: zanzariere a scomparsa totale con meccanismo brevettato e scorrimento ultra-silenzioso.",
        products: [
          { src: "/prodotti/bettio-scenica.jpg", name: "Bettio \u2014 Neoscenica" },
          { src: "/prodotti/bettio-miniscenica-evo.jpg", name: "Bettio \u2014 Miniscenica Evo" },
          { src: "/prodotti/bettio-picoscenica.jpg", name: "Bettio \u2014 Picoscenica" },
        ],
      },
      {
        id: "sharknet",
        label: "Sharknet",
        tagline: "Sistemi Sharknet plissettati con apertura centrale e verticale: massima praticit\u00E0 per porte-finestra e grandi luci.",
        products: [
          { src: "/prodotti/sharknet-apertura-centrale.jpg", name: "Sharknet \u2014 Apertura Centrale" },
          { src: "/prodotti/sharknet-laterale.jpg", name: "Sharknet \u2014 04 Laterale" },
        ],
      },
    ],
  },

  "tende-tecniche": {
    brandLabel: "Catalogo Sharknet \u00B7 Zanzar Sistem",
    title: "Tende tecniche per il controllo perfetto della luce",
    description:
      "Filtra, oscura o modula la luce in ogni ambiente con precisione e stile. Adatte a finestre di qualsiasi forma \u2014 anche triangolari, trapezoidali o ad arco \u2014 con tessuti tecnici che bloccano fino al 99% dei raggi UV.",
    stats: [
      { n: 5, label: "Modelli" },
      { n: 2, label: "Brand" },
      { n: 99, label: "Protezione UV", suffix: "%" },
    ],
    categories: [
      {
        id: "sharknet",
        label: "Sharknet Eclypser",
        tagline: "Tende tecniche Eclypser by Sharknet: oscuranti honeycomb e filtranti, installazione senza fori sugli infissi.",
        products: [
          { src: "/prodotti/sharknet-eclypser.jpg", name: "Sharknet \u2014 Eclypser Laterale Blackout" },
          { src: "/prodotti/sharknet-apertura-centrale.jpg", name: "Sharknet \u2014 Eclypser Verticale Filtrante" },
        ],
      },
      {
        id: "zanzar-sistem",
        label: "Zanzar Sistem",
        tagline: "Gamma Zanzar Sistem con pliss\u00E8, rullo e sistemi integrati nel profilo del serramento per un risultato pulito e minimal.",
        products: [
          { src: "/prodotti/zanzarsistem-perfecta.jpg", name: "Zanzar Sistem \u2014 Perfecta" },
          { src: "/prodotti/zanzarsistem-nanoblind.jpg", name: "Zanzar Sistem \u2014 Nanoblind" },
        ],
      },
    ],
  },

  "scale-ringhiere": {
    brandLabel: "Catalogo Sinfonia",
    title: "Scale e ringhiere di design per collegare i tuoi spazi",
    description:
      "Ingegneria strutturale e design contemporaneo: scale in legno, acciaio, vetro e combinazioni di materiali, configurabili su misura e certificate per la massima sicurezza.",
    stats: [
      { n: 5, label: "Modelli" },
      { n: 120, label: "cm diametro min" },
    ],
    categories: [
      {
        id: "scale",
        label: "Scale",
        tagline: "Scale Sinfonia su misura in legno, acciaio e vetro: dall\u2019elicoidale al taglio laser, ogni progetto \u00E8 unico.",
        products: [
          { src: "/prodotti/sinfonia-aurea.jpg", name: "Sinfonia \u2014 Aurea (Elicoidale)" },
          { src: "/prodotti/sinfonia-bolero.jpg", name: "Sinfonia \u2014 Bolero (Legno)" },
          { src: "/prodotti/sinfonia-laser.png", name: "Sinfonia \u2014 Laser (Taglio laser)" },
          { src: "/prodotti/sinfonia-special.jpg", name: "Sinfonia \u2014 Special (Scale a volte)" },
        ],
      },
      {
        id: "ringhiere",
        label: "Ringhiere",
        tagline: "Ringhiere e balaustre in vetro, acciaio inox e combinazioni miste per interni ed esterni.",
        products: [
          { src: "/prodotti/sinfonia-ringhiere.png", name: "Sinfonia \u2014 Fulgur (Vetro + Inox)" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
   *  OUTDOOR
   * ═══════════════════════════════════════════════════════════════ */

  "pergole": {
    brandLabel: "Catalogo Tendarredo \u00B7 Persit",
    title: "Pergole bioclimatiche per vivere l\u2019outdoor",
    description:
      "Terrazzi e giardini vivibili tutto l\u2019anno. Strutture in alluminio con copertura bioclimatica a lamelle orientabili, integrabili con chiusure laterali, illuminazione LED e sistemi di riscaldamento.",
    stats: [
      { n: 6, label: "Modelli" },
      { n: 2, label: "Brand" },
      { n: 130, label: "km/h resistenza vento" },
    ],
    categories: [
      {
        id: "tendarredo",
        label: "Tendarredo",
        tagline: "Pergole bioclimatiche Tendarredo con lamelle orientabili e versione waterproof: eleganza e protezione per terrazzi e giardini.",
        products: [
          { src: "/prodotti/tendarredo-anima.jpg", name: "Tendarredo \u2014 Anima" },
          { src: "/prodotti/tendarredo-p150.jpg", name: "Tendarredo \u2014 P-150" },
          { src: "/prodotti/tendarredo-oskura.jpg", name: "Tendarredo \u2014 Oskura Waterproof" },
        ],
      },
      {
        id: "persit",
        label: "Persit",
        tagline: "Pergole bioclimatiche Persit con lamelle orientabili a 0\u00B0\u2013160\u00B0: regola sole, aria e pioggia con un gesto.",
        products: [
          { src: "/prodotti/persit-pergola-autoportante.jpg", name: "Persit \u2014 Bioclimatica Autoportante" },
          { src: "/prodotti/persit-pergola-addossata.jpg", name: "Persit \u2014 Bioclimatica Addossata" },
        ],
      },
    ],
  },

  "tende-da-sole": {
    brandLabel: "Catalogo Tendarredo",
    title: "Tende da sole per ogni terrazzo e balcone",
    description:
      "Tende a bracci estensibili con cassonetto protettivo, motorizzate e gestibili da telecomando. Tessuti tecnici resistenti a UV, pioggia e vento per un\u2019ombra perfetta in ogni stagione.",
    stats: [
      { n: 4, label: "Modelli" },
    ],
    categories: [
      {
        id: "bracci",
        label: "A bracci",
        tagline: "Tende a bracci estensibili Tendarredo con cassonetto protettivo, Classe 3 di resistenza al vento e garanzia 8 anni.",
        products: [
          { src: "/prodotti/tendarredo-minerva.jpg", name: "Tendarredo \u2014 Minerva (A scomparsa)" },
          { src: "/prodotti/tendarredo-kelisis.jpg", name: "Tendarredo \u2014 Kelisis (LED integrato)" },
          { src: "/prodotti/tendarredo-mercurio-gold.png", name: "Tendarredo \u2014 Mercurio Gold" },
        ],
      },
      {
        id: "caduta",
        label: "A caduta",
        tagline: "Tende a caduta con guide laterali e cassonetto, ideali per verande e condomini con resistenza al vento.",
        products: [
          { src: "/prodotti/tendarredo-smart.jpg", name: "Tendarredo \u2014 Smart (A caduta)" },
        ],
      },
    ],
  },

  "vetrate-panoramiche": {
    brandLabel: "Catalogo Mc Slide",
    title: "Vetrate panoramiche per spazi senza confini",
    description:
      "Chiusure in vetro a pacchetto e scorrevoli che trasformano terrazzi e verande in ambienti luminosi e protetti. Vetro temperato di sicurezza, guide a pavimento minimal e apertura totale per unire interno ed esterno.",
    stats: [
      { n: 4, label: "Sistemi" },
    ],
    categories: [
      {
        id: "exterior",
        label: "Exterior",
        tagline: "Sistemi MC Slide Exterior: vetrate panoramiche impacchettabili, scorrevoli e pieghevoli per balconi, terrazzi e verande.",
        products: [
          { src: "/prodotti/mcslide-starglass.jpg", name: "MC Slide \u2014 StarGlass" },
          { src: "/prodotti/mcslide-sliding-floor.jpg", name: "MC Slide \u2014 Sliding Floor" },
          { src: "/prodotti/mcslide-folding.jpg", name: "MC Slide \u2014 Folding" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
   *  CASA & ARREDO
   * ═══════════════════════════════════════════════════════════════ */

  "cucine-su-misura": {
    brandLabel: "Catalogo Arrex",
    title: "Cucine Arrex su misura per il cuore della casa",
    description:
      "Cucine made in Italy progettate su misura: dall\u2019isola centrale alla composizione lineare, ogni cucina Arrex combina funzionalit\u00E0, materiali di qualit\u00E0 e design contemporaneo per uno spazio che rispecchia il tuo stile.",
    stats: [
      { n: 6, label: "Collezioni" },
    ],
    categories: [
      {
        id: "moderna",
        label: "Moderna",
        tagline: "Cucine Arrex dalla linea contemporanea: superfici laccate, Fenix, gres e moduli XXL per il massimo della funzionalit\u00E0.",
        products: [
          { src: "/prodotti/arrex-gea.jpg", name: "Arrex \u2014 Gea (EcoPet)" },
          { src: "/prodotti/arrex-loft.jpg", name: "Arrex \u2014 Loft 2.2" },
          { src: "/prodotti/arrex-gea-2.jpg", name: "Arrex \u2014 Gea (Zenitale)" },
        ],
      },
    ],
  },

  "arredo-bagno": {
    brandLabel: "Catalogo Merati",
    title: "Arredo bagno Merati per ambienti di carattere",
    description:
      "Mobili bagno sospesi e a terra, piani in cristallo e ceramica, specchiere retroilluminate: ogni collezione Merati \u00E8 pensata per trasformare il bagno in uno spazio di benessere e design.",
    stats: [
      { n: 7, label: "Collezioni" },
    ],
    categories: [
      {
        id: "torana",
        label: "Torana",
        tagline: "Collezione Torana: frontali smussati a 45\u00B0, spalle a scomparsa e finiture in legno naturale, laccato e marmo.",
        products: [
          { src: "/prodotti/merati-torana-3.jpg", name: "Merati \u2014 Torana 3.0" },
          { src: "/prodotti/merati-torana-pull.jpg", name: "Merati \u2014 Torana Pull" },
        ],
      },
      {
        id: "plane",
        label: "Plane",
        tagline: "Collezione Plane: effetto tridimensionale ispirato al mare, gres porcellanato e antiche essenze per un bagno d\u2019autore.",
        products: [
          { src: "/prodotti/merati-plane-3d.jpg", name: "Merati \u2014 Plane 3D" },
          { src: "/prodotti/merati-plane-2d.jpg", name: "Merati \u2014 Plane 2D" },
          { src: "/prodotti/merati-plane-gres.jpg", name: "Merati \u2014 Plane Gres" },
        ],
      },
      {
        id: "complementi",
        label: "Complementi",
        tagline: "Easy, Round e Bath Table: soluzioni versatili per ogni metratura, dallo spazio compatto al bagno padronale.",
        products: [
          { src: "/prodotti/merati-easy.jpg", name: "Merati \u2014 Easy" },
          { src: "/prodotti/merati-round.jpg", name: "Merati \u2014 Round" },
          { src: "/prodotti/merati-bath-table.jpg", name: "Merati \u2014 Bath Table" },
        ],
      },
    ],
  },

  "sanitari": {
    brandLabel: "Catalogo Sani e Co",
    title: "Sanitari dal design essenziale e funzionale",
    description:
      "Sanitari rimless sospesi e a terra con tecnologia di scarico a risparmio idrico. Linee pulite, ceramica di alta qualit\u00E0 e finiture contemporanee per un bagno che unisce estetica e praticit\u00E0.",
    stats: [
      { n: 4, label: "Collezioni" },
    ],
    categories: [
      {
        id: "sanitari",
        label: "Sanitari",
        tagline: "WC e bidet Rimless Sani e Co con rivestimento antibatterico nano e scarico a soli 3,5 litri per il massimo risparmio.",
        products: [
          { src: "/prodotti/sanico-dara.jpg", name: "Sani e Co \u2014 Dara (Filomuro)" },
          { src: "/prodotti/sanico-sophia.jpg", name: "Sani e Co \u2014 Sophia (Sospesi)" },
        ],
      },
    ],
  },

  "rubinetteria": {
    brandLabel: "Catalogo Fiore",
    title: "Rubinetteria Fiore per il tocco finale",
    description:
      "Miscelatori di design in acciaio inox e ottone cromato per bagno e cucina. Tecnologia a risparmio idrico, cartucce ceramiche di precisione e finiture che resistono nel tempo.",
    stats: [
      { n: 9, label: "Serie" },
      { n: 7, label: "Finiture Emozioni" },
    ],
    categories: [
      {
        id: "contemporary",
        label: "Contemporary",
        tagline: "Linee contemporanee Fiore: Kube, Xenon in acciaio inox 316L e Katana per un bagno dal design deciso e minimale.",
        products: [
          { src: "/prodotti/sanico-dara.jpg", name: "Fiore \u2014 Kube (Squadrato)" },
          { src: "/prodotti/sanico-sophia.jpg", name: "Fiore \u2014 Xenon (Inox 316L)" },
        ],
      },
      {
        id: "contract",
        label: "Contract",
        tagline: "Serie Kevon e Kevon Chic: design essenziale con variante bicolore nero opaco + cromo per installazioni professionali.",
        products: [
          { src: "/prodotti/sanico-dara.jpg", name: "Fiore \u2014 Kevon Chic (Bicolore)" },
          { src: "/prodotti/sanico-sophia.jpg", name: "Fiore \u2014 King (Cucina)" },
        ],
      },
    ],
  },

  "ceramiche": {
    brandLabel: "Catalogo Class Tile",
    title: "Ceramiche Class Tile per superfici d\u2019autore",
    description:
      "Gres porcellanato di alta gamma con effetto marmo, legno, pietra e cemento. Lastre di grande formato, resistenti a graffi, macchie e agenti chimici, per pavimenti e rivestimenti di grande impatto visivo.",
    stats: [
      { n: 12, label: "Collezioni" },
      { n: 4, label: "Effetti" },
    ],
    categories: [
      {
        id: "marmo",
        label: "Effetto marmo",
        tagline: "Collezione Divina: 15 marmi preziosi in gres porcellanato per interni dal look contemporaneo e sofisticato.",
        products: [
          { src: "/prodotti/classtile-divina-calacatta.jpg", name: "Class Tile \u2014 Divina Calacatta" },
          { src: "/prodotti/classtile-divina-carrara.jpg", name: "Class Tile \u2014 Divina Carrara" },
          { src: "/prodotti/classtile-divina-onice.jpg", name: "Class Tile \u2014 Divina Onice Verde" },
        ],
      },
      {
        id: "legno-pietra",
        label: "Legno e pietra",
        tagline: "Effetto legno e pietra naturale: dalle doghe Arch\u00E8 alle lastre MyStone ispirate alla Borgogna francese.",
        products: [
          { src: "/prodotti/classtile-arche.jpg", name: "Class Tile \u2014 Arch\u00E8 (Effetto legno)" },
          { src: "/prodotti/classtile-mystone.jpg", name: "Class Tile \u2014 MyStone (Effetto pietra)" },
        ],
      },
    ],
  },

  "parquet": {
    brandLabel: "Catalogo Ali Parquet",
    title: "Parquet Ali Parquet per pavimenti senza tempo",
    description:
      "Parquet in legno massello e prefinito: rovere, noce, teak e essenze pregiate lavorate in Italia. Compatibile con riscaldamento a pavimento, trattamento a olio o vernice per una finitura naturale e duratura.",
    stats: [
      { n: 4, label: "Linee" },
      { n: 9, label: "Finiture" },
    ],
    categories: [
      {
        id: "premass",
        label: "PreMass",
        tagline: "Il primo prefinito in legno massello: dal 1989 unisce la qualit\u00E0 del massello alla praticit\u00E0 della posa senza finiture aggiuntive.",
        products: [
          { src: "/prodotti/classtile-arche.jpg", name: "Ali Parquet \u2014 PreMass Classic" },
          { src: "/prodotti/classtile-mystone.jpg", name: "Ali Parquet \u2014 SuperPreMass Trend" },
        ],
      },
      {
        id: "extramass",
        label: "ExtraMass",
        tagline: "Grande formato con spessore nobile 14 mm, bisellatura e spazzolatura per un pavimento dalla personalit\u00E0 decisa.",
        products: [
          { src: "/prodotti/classtile-arche.jpg", name: "Ali Parquet \u2014 ExtraMass Living" },
          { src: "/prodotti/classtile-mystone.jpg", name: "Ali Parquet \u2014 ExtraMass Oil" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
   *  RISCALDAMENTO / ENERGIE RINNOVABILI
   * ═══════════════════════════════════════════════════════════════ */

  "climatizzatori": {
    brandLabel: "Catalogo Haier \u00B7 Samsung",
    title: "Climatizzatori per il comfort in ogni stagione",
    description:
      "Climatizzatori inverter di ultima generazione in classe A+++ per raffrescamento estivo e riscaldamento invernale. Tecnologia WindFree Samsung e soluzioni Haier con filtri antibatterici e gestione smart da app.",
    stats: [
      { n: 7, label: "Modelli" },
      { n: 2, label: "Brand" },
    ],
    categories: [
      {
        id: "haier",
        label: "Haier",
        tagline: "Climatizzatori Haier con design premium, purificatore IFD integrato, connettivit\u00E0 Wi-Fi e gestione da app hOn.",
        products: [
          { src: "/prodotti/haier-jade.jpg", name: "Haier \u2014 Jade (A+++ \u00B7 15 dB)" },
          { src: "/prodotti/haier-flexis.webp", name: "Haier \u2014 Flexis Plus (UV-C)" },
        ],
      },
      {
        id: "samsung",
        label: "Samsung",
        tagline: "Tecnologia WindFree Samsung: climatizzazione senza getti d\u2019aria diretti, comfort silenzioso e risparmio energetico AI.",
        products: [
          { src: "/prodotti/samsung-windfree-elite.png", name: "Samsung \u2014 WindFree Elite S2" },
          { src: "/prodotti/samsung-windfree-avant.png", name: "Samsung \u2014 WindFree Avant S2" },
          { src: "/prodotti/samsung-cebu.png", name: "Samsung \u2014 Cebu S2" },
        ],
      },
    ],
  },

  "pompe-di-calore": {
    brandLabel: "Catalogo Ariston",
    title: "Pompe di calore Ariston per il riscaldamento efficiente",
    description:
      "Sistemi aria-acqua Ariston di ultima generazione per riscaldamento, raffrescamento e acqua calda sanitaria. Efficienza fino a COP 5,0 e gestione smart da app per monitorare consumi e comfort.",
    stats: [
      { n: 5, label: "Sistemi Nimbus" },
      { n: 5, label: "COP max", suffix: ".0" },
    ],
    categories: [
      {
        id: "nimbus",
        label: "Nimbus NET R32",
        tagline: "Gamma Nimbus NET R32: pompe di calore inverter aria-acqua in versione split, monoblocco e compatta con bollitore integrato.",
        products: [
          { src: "/prodotti/ariston-nimbus-plus.jpg", name: "Ariston \u2014 Nimbus Plus M (Monoblocco)" },
          { src: "/prodotti/ariston-nimbus-plus.jpg", name: "Ariston \u2014 Nimbus Compact S (Bollitore)" },
          { src: "/prodotti/ariston-nimbus-plus.jpg", name: "Ariston \u2014 Nimbus Pocket M (Compatta)" },
        ],
      },
    ],
  },

  "caldaia": {
    brandLabel: "Catalogo Hermann",
    title: "Caldaie Hermann a condensazione per ogni abitazione",
    description:
      "Caldaie murali a condensazione Hermann con rendimento fino al 109% e classe energetica A. Compatte, silenziose e connesse: gestione da app, diagnostica remota e manutenzione semplificata.",
    stats: [
      { n: 5, label: "Modelli" },
      { n: 109, label: "Rendimento", suffix: "%" },
    ],
    categories: [
      {
        id: "interno",
        label: "Da interno",
        tagline: "Caldaie murali a condensazione Hermann per interno con tecnologia FlameFit e sistema Aquaspeed per acqua calda istantanea.",
        products: [
          { src: "/prodotti/hermann-thema-condens.webp", name: "Hermann \u2014 Thema Condens" },
          { src: "/prodotti/hermann-thema-condens.jpg", name: "Hermann \u2014 ThemaFast Condens" },
          { src: "/prodotti/hermann-thema-condens.webp", name: "Hermann \u2014 Master 4 Condensing" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
   *  INFISSI IN LEGNO — Pail
   * ═══════════════════════════════════════════════════════════════ */

  "infissi-legno": {
    brandLabel: "Catalogo Pail",
    title: "Il calore autentico del legno massello",
    description:
      "Infissi in legno massello lamellare realizzati artigianalmente in Italia con legni selezionati e certificati FSC/PEFC. Il legno è tra i migliori isolanti naturali: unisce prestazioni termiche eccellenti al calore tattile ed estetico che nessun altro materiale può offrire.",
    stats: [
      { n: 5, label: "Modelli" },
      { n: 1, label: "Uw W/m²K", suffix: ",0" },
      { n: 100, label: "Made in Italy", suffix: "%" },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
   *  OUTDOOR — Gazebi, Piscine, Arredo Giardino
   * ═══════════════════════════════════════════════════════════════ */

  "gazebi-strutture-legno": {
    brandLabel: "Soluzioni Mood Abitare",
    title: "Gazebi e strutture in legno lamellare su misura",
    description:
      "Strutture in legno lamellare certificato, trattato in autoclave per resistere a intemperie, insetti e funghi. Gazebi autoportanti, carport, pergolati addossati e dehor commerciali: ogni progetto è dimensionato secondo normativa NTC 2018 e realizzato su misura.",
    stats: [
      { n: 4, label: "Soluzioni" },
      { n: 100, label: "Su misura", suffix: "%" },
    ],
  },

  "piscine": {
    brandLabel: "Soluzioni Mood Abitare",
    title: "Piscine interrate e fuori terra su misura",
    description:
      "Dalla piscina in cemento armato alla soluzione prefabbricata in pannelli d'acciaio, dalla fuori terra con rivestimento in legno alla copertura automatica di sicurezza. Servizio chiavi in mano: progettazione con render 3D, scavo, struttura, impianto e rivestimento.",
    stats: [
      { n: 4, label: "Tipologie" },
      { n: 10, label: "Anni garanzia" },
    ],
  },

  "rivestimento-piscine": {
    brandLabel: "Soluzioni Mood Abitare",
    title: "Rinnova la tua piscina senza ricostruirla",
    description:
      "Servizio specializzato di rivestimento per piscine esistenti: PVC armato saldato a caldo, mosaico vetroso o pietra ricostruita. Rinnoviamo completamente l'aspetto e la funzionalità della tua piscina con impermeabilizzazione garantita e senza interventi strutturali invasivi.",
    stats: [
      { n: 3, label: "Materiali" },
      { n: 10, label: "Anni garanzia" },
    ],
  },

  "arredo-giardino": {
    brandLabel: "Soluzioni Mood Abitare",
    title: "Arreda il tuo giardino con stile e comfort",
    description:
      "Set pranzo in teak e alluminio, divani lounge con cuscini Quick Dry, barbecue e cucine outdoor in acciaio inox, illuminazione LED e complementi coordinati. Materiali selezionati per resistere a sole, pioggia e intemperie con zero manutenzione.",
    stats: [
      { n: 4, label: "Categorie" },
      { n: 3, label: "Anni garanzia" },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
   *  IMPIANTI
   * ═══════════════════════════════════════════════════════════════ */

  "impianti-fotovoltaici": {
    brandLabel: "Soluzioni Mood Abitare",
    title: "Energia dal sole, indipendenza dalla bolletta",
    description:
      "Impianti fotovoltaici residenziali da 3 a 15 kWp con pannelli monocristallini ad alta efficienza, inverter ibridi e sistemi di accumulo a batterie LFP. Servizio chiavi in mano dalla progettazione all'allaccio, con detrazione fiscale al 50%.",
    stats: [
      { n: 4, label: "Configurazioni" },
      { n: 25, label: "Anni garanzia" },
      { n: 50, label: "Detrazione", suffix: "%" },
    ],
  },

  "impianti-elettrici": {
    brandLabel: "Soluzioni Mood Abitare",
    title: "Sicurezza e innovazione per la tua casa",
    description:
      "Progettazione e realizzazione di impianti elettrici civili a norma CEI 64-8: dal nuovo impianto all'adeguamento, dalla domotica KNX alla wallbox per auto elettriche. Ogni lavoro è certificato con Dichiarazione di Conformità (DiCo).",
    stats: [
      { n: 4, label: "Servizi" },
      { n: 100, label: "Certificati", suffix: "%" },
    ],
  },

  "impianti-idraulici": {
    brandLabel: "Soluzioni Mood Abitare",
    title: "Acqua e comfort, progettati su misura",
    description:
      "Impianti idraulici completi con distribuzione a collettore, riscaldamento a pavimento radiante, sostituzione tubazioni datate e sistemi di ricircolo per acqua calda istantanea. Ogni impianto è collaudato a 10 bar e certificato con Dichiarazione di Conformità.",
    stats: [
      { n: 4, label: "Soluzioni" },
      { n: 10, label: "Bar collaudo" },
    ],
  },
};
