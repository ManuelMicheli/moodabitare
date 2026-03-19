export interface ProductDetail {
  name: string;
  brand: string;
  segment: string;
  description: string;
  highlight: string;
  specs: { label: string; value: string }[];
  colors: string;
  features: string[];
}

/* ── INFISSI ALLUMINIO — Oknoplast ─────────────────────────────── */

export const aluminumDetails: Record<string, ProductDetail> = {
  "Titano": {
    name: "Titano",
    brand: "Oknoplast",
    segment: "Design",
    description:
      "Finestra in alluminio a taglio termico con fermavetro squadrato a 90° e tripla guarnizione di serie. Il vetro extra-chiaro basso-emissivo con gas argon e canalina Swisspacer garantisce prestazioni termiche ai vertici della categoria.",
    highlight: "Prestazioni titaniche — tripla guarnizione, Uw fino a 0,78",
    specs: [
      { label: "Profondità profilo", value: "alluminio a taglio termico" },
      { label: "Guarnizioni", value: "3 di serie (elastomero termoplastico)" },
      { label: "Trasmittanza Uw", value: "fino a 0,78 W/m²K (con Swisspacer)" },
      { label: "Isolamento acustico", value: "elevato (tripla guarnizione)" },
      { label: "Classe sicurezza", value: "fino a RC2" },
      { label: "Vetro", value: "Extra-chiaro basso-emissivo, doppio o triplo, argon" },
    ],
    colors: "RAL standard, metallizzato, effetto legno, anodizzato, bicolore",
    features: ["Battente", "Anta-ribalta", "Vasistas", "Fermavetro 90°"],
  },
  "Titano EVO": {
    name: "Titano EVO",
    brand: "Oknoplast",
    segment: "Premium",
    description:
      "Evoluzione del Titano con maniglia centrata e nodo centrale ridotto per simmetria perfetta e massima superficie vetrata. I profili snelli dell'anta ampliano la visuale e il vetro extra-chiaro aumenta la trasparenza.",
    highlight: "Maniglia centrata, nodo ridotto — simmetria e luce al massimo",
    specs: [
      { label: "Profondità profilo", value: "alluminio a taglio termico evoluto" },
      { label: "Guarnizioni", value: "3 di serie (elastomero termoplastico)" },
      { label: "Trasmittanza Uw", value: "fino a 0,78 W/m²K (con Swisspacer)" },
      { label: "Isolamento acustico", value: "elevato (tripla guarnizione)" },
      { label: "Classe sicurezza", value: "fino a RC2" },
      { label: "Vetro", value: "Extra-chiaro basso-emissivo, doppio o triplo, argon" },
    ],
    colors: "RAL standard, metallizzato, effetto legno, anodizzato, bicolore",
    features: ["Battente", "Anta-ribalta", "Vasistas", "Maniglia centrata"],
  },
  "Titano OC": {
    name: "Titano OC",
    brand: "Oknoplast",
    segment: "Design",
    description:
      "Versione OC (Anta a Scomparsa) del Titano: il telaio si incassa nella muratura, lasciando visibile dall'esterno solo la superficie vetrata. Profili ultra-sottili e tripla guarnizione in elastomero termoplastico per tenuta perfetta.",
    highlight: "Anta a scomparsa — dall'esterno solo vetro, Uw 0,77",
    specs: [
      { label: "Profondità profilo", value: "alluminio a taglio termico, anta a scomparsa" },
      { label: "Guarnizioni", value: "3 in elastomero termoplastico a memoria di forma" },
      { label: "Trasmittanza Uw", value: "fino a 0,77 W/m²K (con Swisspacer)" },
      { label: "Isolamento acustico", value: "elevato (tripla guarnizione)" },
      { label: "Classe sicurezza", value: "fino a RC2 (con sensori anti-intrusione)" },
      { label: "Vetro", value: "Extra-chiaro basso-emissivo ad alta trasparenza, argon" },
    ],
    colors: "RAL standard, metallizzato, effetto legno, anodizzato, bicolore",
    features: ["Anta a scomparsa", "Battente", "Anta-ribalta", "Fermavetro 90°"],
  },
  "Titano EVO OC": {
    name: "Titano EVO OC",
    brand: "Oknoplast",
    segment: "Top di gamma",
    description:
      "Il top di gamma assoluto: unisce la maniglia centrata e il nodo ridotto del Titano EVO con l'anta a scomparsa della versione OC. Profilo perimetrale completamente nascosto nella muratura per simmetria e trasparenza in perfetta armonia.",
    highlight: "EVO + anta a scomparsa — il vertice dell'alluminio Oknoplast",
    specs: [
      { label: "Profondità profilo", value: "alluminio a taglio termico evoluto, anta a scomparsa" },
      { label: "Guarnizioni", value: "3 in elastomero termoplastico a memoria di forma" },
      { label: "Trasmittanza Uw", value: "fino a 0,77 W/m²K (con Swisspacer)" },
      { label: "Isolamento acustico", value: "elevato (tripla guarnizione)" },
      { label: "Classe sicurezza", value: "fino a RC2" },
      { label: "Vetro", value: "Extra-chiaro basso-emissivo super trasparente, argon" },
    ],
    colors: "RAL standard, metallizzato, effetto legno, anodizzato, bicolore",
    features: ["Anta a scomparsa", "Maniglia centrata", "Nodo ridotto", "Fermavetro 90°"],
  },
  "Titano Steel": {
    name: "Titano Steel",
    brand: "Oknoplast",
    segment: "Design",
    description:
      "Stile industrial autentico: profili decorativi sagomati su telaio e anta richiamano le finestre in acciaio delle architetture industriali. Terza guarnizione di serie, testata contro raffiche fino a 160 km/h e oltre 12 ore di pioggia battente.",
    highlight: "Design industrial — testata a 160 km/h di vento, Uw 0,80",
    specs: [
      { label: "Profondità profilo", value: "alluminio a taglio termico con profili sagomati" },
      { label: "Guarnizioni", value: "3 di serie (terza guarnizione centrale)" },
      { label: "Trasmittanza Uw", value: "fino a 0,80 W/m²K (con isolante termico)" },
      { label: "Resistenza al vento", value: "testata fino a 160 km/h" },
      { label: "Tenuta pioggia", value: "oltre 12 ore di pioggia battente" },
      { label: "Classe sicurezza", value: "fino a RC2" },
      { label: "Vetro", value: "Doppio o triplo vetro basso-emissivo" },
    ],
    colors: "RAL standard, metallizzato, effetto legno, anodizzato spazzolato/sabbiato",
    features: ["Battente", "Anta-ribalta", "Profili industrial", "Fermavetro 90°"],
  },
  "Futural": {
    name: "Futural",
    brand: "Oknoplast",
    segment: "Design",
    description:
      "Finestra in alluminio dalle linee squadrate e minimali con taglio termico e isolamento aggiuntivo. Le guarnizioni in elastomero termoplastico a memoria di forma garantiscono tenuta perfetta nel tempo. Vetro extra-chiaro basso-emissivo con gas argon.",
    highlight: "Design squadrato minimale — Uw fino a 0,96 con doppio vetro",
    specs: [
      { label: "Profondità profilo", value: "alluminio a taglio termico squadrato" },
      { label: "Guarnizioni", value: "in elastomero termoplastico a memoria di forma" },
      { label: "Trasmittanza Uw", value: "fino a 0,96 W/m²K" },
      { label: "Isolamento acustico", value: "elevato (struttura robusta)" },
      { label: "Classe sicurezza", value: "fino a RC2" },
      { label: "Vetro", value: "Extra-chiaro basso-emissivo, doppio o triplo, argon" },
    ],
    colors: "Oltre 2000 colori RAL, Decoral, Timeless, effetto legno, bicolore",
    features: ["Battente", "Anta-ribalta", "Vasistas", "Portafinestra", "Fermavetro 90°"],
  },
  "Futural OC": {
    name: "Futural OC",
    brand: "Oknoplast",
    segment: "Premium",
    description:
      "La finestra invisibile: il telaio scompare completamente nella muratura, lasciando visibile solo il vetro. Nodo centrale di soli 77 mm di larghezza per un effetto tutto-vetro dall'esterno. Disponibile con doppio o triplo vetro.",
    highlight: "La finestra invisibile — nodo 77 mm, Uw fino a 1,2 con triplo vetro",
    specs: [
      { label: "Nodo centrale", value: "77 mm" },
      { label: "Guarnizioni", value: "in elastomero termoplastico a memoria di forma" },
      { label: "Trasmittanza Uw", value: "fino a 1,2 W/m²K (con triplo vetro)" },
      { label: "Isolamento acustico", value: "elevato (struttura robusta)" },
      { label: "Classe sicurezza", value: "fino a RC2" },
      { label: "Vetro", value: "Extra-chiaro basso-emissivo, doppio o triplo, argon" },
    ],
    colors: "Oltre 2000 colori RAL, Decoral, Timeless, effetto legno, bicolore",
    features: ["Anta a scomparsa", "Battente", "Anta-ribalta", "Effetto tutto-vetro"],
  },
  "Prolux ALU": {
    name: "Prolux ALU",
    brand: "Oknoplast",
    segment: "Premium",
    description:
      "La piattaforma Prolux sbarca nell'alluminio: profilo ultra-sottile senza fermavetro tradizionale, con vetro incollato direttamente al profilo per un effetto frameless. Tre guarnizioni di serie e riduzione acustica fino a 38 dB certificati.",
    highlight: "Vetro incollato frameless — 3 guarnizioni, 38 dB, Uw 1,00",
    specs: [
      { label: "Profondità profilo", value: "alluminio ultra-sottile, vetro incollato" },
      { label: "Guarnizioni", value: "3 di serie" },
      { label: "Trasmittanza Uw", value: "fino a 1,00 W/m²K" },
      { label: "Isolamento acustico", value: "fino a 38 dB" },
      { label: "Classe sicurezza", value: "fino a RC2" },
      { label: "Vetro", value: "Incollato al profilo, doppio o triplo, basso-emissivo" },
    ],
    colors: "Standard, Decoral, Timeless, effetto legno, RAL personalizzato",
    features: ["Vetro incollato (no fermavetro)", "Battente", "Anta-ribalta", "Anta nascosta"],
  },
};

/* ── PORTE INTERNE — Pail + Door Arreda ────────────────────────── */

export const interiorDoorDetails: Record<string, ProductDetail> = {
  "Pail — Tratto Boiserie": {
    name: "Tratto Boiserie",
    brand: "Pail",
    segment: "Design",
    description:
      "Reinterpretazione contemporanea della tradizione francese del XVII-XVIII secolo: un fitto disegno di linee verticali in rilievo dona movimento e profondità alla superficie. Il sistema boiserie integrato trasforma l'intera parete in un elemento d'arredo coordinato con l'anta.",
    highlight: "Porta + boiserie integrata — linee verticali in rilievo, la parete diventa arredo",
    specs: [
      { label: "Materiale", value: "Tecnorovere (essenza tecnica)" },
      { label: "Finitura", value: "Tecnorovere Naturale, varianti colore, laccato" },
      { label: "Struttura", value: "Porta + pannelli boiserie coordinati" },
      { label: "Telaio", value: "Line SP con boiserie integrata" },
      { label: "Maniglia", value: "AGB Wave cromo-satinato" },
      { label: "Produzione", value: "Made in Italy" },
    ],
    colors: "Tecnorovere Naturale, laccato RAL, finiture coordinate alla boiserie",
    features: ["Battente", "Scorrevole (Attraction)", "Filomuro", "Boiserie parete"],
  },
  "Pail — Belvedere": {
    name: "Belvedere",
    brand: "Pail",
    segment: "Premium",
    description:
      "Porta panoramica con ampie vetrate incorniciate interamente in legno di rovere verniciato a cera. La luminosità e l'eleganza sono i tratti distintivi: le finestre trasparenti, satinate o bronzo creano una connessione visiva tra gli ambienti.",
    highlight: "Vetrate panoramiche in rovere verniciato a cera — luce e artigianalità",
    specs: [
      { label: "Materiale", value: "Rovere verniciato a cera (Tecnorovere)" },
      { label: "Finitura", value: "Tecnorovere grigio, naturale, sabbia" },
      { label: "Vetro", value: "Trasparente grigio, satinato, bronzo satinato" },
      { label: "Telaio battente", value: "Semicassa Era 70×10×15 mm" },
      { label: "Telaio scorrevole", value: "Semicassa 40×10×15 mm" },
      { label: "Produzione", value: "Made in Italy" },
    ],
    colors: "Tecnorovere grigio, naturale, sabbia — vetro trasparente/satinato/bronzo",
    features: ["Battente", "Scorrevole parallelo", "Scorrevole interno muro (EVO/ERA)"],
  },
  "Pail — Luna": {
    name: "Luna",
    brand: "Pail",
    segment: "Design",
    description:
      "Collezione di porte laccate pantografate disegnate per armonizzarsi con ambienti diversi. Cinque varianti cittadine — Londra, Madrid, Parigi, Berlino, Zagabria — con colori e linee che creano nuove forme avvicinando le venature del legno. Disponibile nella linea Rapido Pail con consegna in 15 giorni.",
    highlight: "5 varianti laccate pantografate — consegna rapida in 15 giorni",
    specs: [
      { label: "Materiale", value: "Pannello pantografato laccato" },
      { label: "Varianti", value: "Londra, Madrid, Parigi, Berlino, Zagabria" },
      { label: "Telaio", value: "Evo, Line SP" },
      { label: "Consegna", value: "Rapido Pail — 15 giorni lavorativi" },
      { label: "Vetro", value: "Vetro satinato bianco opzionale (Gesso)" },
      { label: "Produzione", value: "Made in Italy" },
    ],
    colors: "Laccato ardesia, RAL 7044, canapa, sabbia, latte, gesso",
    features: ["Battente", "Scorrevole interno muro singolo", "Scorrevole interno muro doppio"],
  },
  "Pail — Filomuro": {
    name: "Filomuro (Mimetica)",
    brand: "Pail",
    segment: "Design",
    description:
      "Sistema filomuro \"Mimetica\" che elimina coprifili e cornici visibili: la superficie dell'anta diventa complanare alla parete per una continuità estetica totale. Disponibile in tre telai (Mimetica 43, 43 SP, 28 Efficient) e finiture che spaziano dal laccato alle essenze, dai pattern geometrici in rilievo alle carte da parati.",
    highlight: "Sistema Mimetica — la porta scompare, zero coprifili, parete continua",
    specs: [
      { label: "Materiale", value: "Legno, derivati, finiture speciali" },
      { label: "Telaio Mimetica 43", value: "Telaio standard rasomuro" },
      { label: "Telaio Mimetica 43 SP", value: "Versione speciale" },
      { label: "Telaio Mimetica 28", value: "Efficient — salvaspazio 28 mm" },
      { label: "Coprifilo", value: "Assente — filo muro totale" },
      { label: "Produzione", value: "Made in Italy" },
    ],
    colors: "Stuccabile/tinteggiabile, laccato RAL, Tecnorovere, Quercia 4D, effetto cemento Nuvola, pattern Cammeo/Riga/Intarsio/Tratto, carte da parati, pattern animalier",
    features: ["Battente filomuro", "Scorrevole interno muro", "Piega (libro)", "Cabin Pull", "Efficient 28"],
  },
  "Pail — Scorrevoli": {
    name: "Scorrevoli",
    brand: "Pail",
    segment: "Design",
    description:
      "Sistemi scorrevoli con tre meccanismi: Magic Slide a scomparsa totale nel muro, scorrevole esterno parete con binario a vista, e scorrevole interno muro classico. Ideali per open space e ambienti dove lo spazio è prezioso.",
    highlight: "3 sistemi: Magic Slide, esterno parete, interno muro — salvaspazio totale",
    specs: [
      { label: "Magic Slide", value: "Scomparsa totale nel muro" },
      { label: "Scorrevole esterno", value: "Binario a vista design industriale" },
      { label: "Scorrevole interno", value: "Controtelaio nel muro" },
      { label: "Configurazione", value: "Singola o doppia anta, parallela" },
      { label: "Spessore anta", value: "40-44 mm" },
      { label: "Produzione", value: "Made in Italy" },
    ],
    colors: "Laccato, Tecnorovere (Olmo, Rovere, Quercia, Noce), vetro, 4D rilievo, inserti metallo",
    features: ["Magic Slide (scomparsa totale)", "Scorrevole esterno parete", "Scorrevole interno muro", "Doppia anta parallela"],
  },
  "Pail — Dolcevita": {
    name: "Dolcevita",
    brand: "Pail",
    segment: "Classic",
    description:
      "Collezione che rappresenta l'essenza del Made in Italy con la linea Incanto: dettagli artigianali di pregio, pantografature eleganti e finiture calde che richiamano la tradizione ebanistica italiana. Perfetta per ambienti classici e senza tempo.",
    highlight: "Linea Incanto — essenza del Made in Italy classico",
    specs: [
      { label: "Materiale", value: "Legno impiallacciato" },
      { label: "Linea", value: "Incanto (pantografato classico)" },
      { label: "Finitura", value: "Laccato latte, pantografato, patinato" },
      { label: "Vetro", value: "Vetri decorati opzionali" },
      { label: "Spessore anta", value: "44 mm" },
      { label: "Produzione", value: "Made in Italy" },
    ],
    colors: "Laccato latte, avorio, bianco anticato, noce, ciliegio, rovere",
    features: ["Battente", "Scorrevole esterno", "Doppia anta"],
  },
  "Door Arreda — Pandora": {
    name: "Pandora Design",
    brand: "Door Arreda",
    segment: "Design",
    description:
      "Porte tamburate con incisioni grafiche che creano volumi geometrici a sbalzo di minimo spessore: l'effetto di luci e ombre sulla superficie dell'anta trasforma la porta in un elemento scultoreo. Disponibile in finiture laccate e Sable.",
    highlight: "Volumi geometrici a sbalzo — effetti scultorei di luce e ombra",
    specs: [
      { label: "Materiale", value: "Pannello tamburato con incisioni" },
      { label: "Finitura laccato", value: "Bianco DA" },
      { label: "Finitura Sable", value: "Canapa, avorio, cocoa, corda" },
      { label: "Decorazione", value: "Incisioni geometriche a sbalzo" },
      { label: "Altezza max", value: "Fino a 270 cm" },
      { label: "Produzione", value: "Made in Italy" },
    ],
    colors: "Laccato Bianco DA, Sable canapa, Sable avorio, Sable cocoa, Sable corda",
    features: ["Battente"],
  },
  "Door Arreda — Seven": {
    name: "Seven",
    brand: "Door Arreda",
    segment: "Design",
    description:
      "Porte in vetro con cornice in alluminio, completamente su misura. Una gamma praticamente infinita di combinazioni con varianti Sendy, Shine, Shop e Simple. Perfette per ambienti contemporanei, studi e loft.",
    highlight: "Vetro + alluminio su misura — gamma infinita di combinazioni",
    specs: [
      { label: "Materiale", value: "Vetro temperato + cornice alluminio" },
      { label: "Varianti", value: "Sendy, Shine, Shop, Simple" },
      { label: "Personalizzazione", value: "Completamente su misura" },
      { label: "Finitura alluminio", value: "Bianco, moka, larice antico, laccato RAL" },
      { label: "Vetro", value: "Temperato trasparente o satinato" },
      { label: "Produzione", value: "Made in Italy" },
    ],
    colors: "Alluminio bianco, moka, nero, larice antico, laccato RAL personalizzato",
    features: ["Battente", "Scorrevole", "Filomuro"],
  },
  "Door Arreda — Meraki Elysia": {
    name: "Meraki Elysia",
    brand: "Door Arreda",
    segment: "Premium",
    description:
      "Collezione inedita che rivoluziona gli schemi abituali: un segno grafico distintivo attraversa la superficie della porta, personalizzandola in modo unico. L'inserto puo essere in alluminio, metallo nero opaco, oro satinato, pietra o legno. Varianti Metal e Wood disponibili.",
    highlight: "Segno grafico unico — inserti in metallo, pietra, oro satinato o legno",
    specs: [
      { label: "Dimensione standard", value: "80×240 cm (largh. 68-88 cm, alt. 214 cm)" },
      { label: "Inserti", value: "Alluminio, metallo nero opaco, oro satinato, pietra, legno" },
      { label: "Laccature", value: "Bianco DA, Sable avorio/bianco/canapa/cocoa/corda/RAL" },
      { label: "Verniciature", value: "Graphite 28, Nuvola 02, Perla 22, Tortora 07" },
      { label: "Cerniere", value: "Pivot visibile o pivot nascosta" },
      { label: "Produzione", value: "Made in Italy" },
    ],
    colors: "Laccato Bianco DA, Sable (6 varianti), Texture Sable, Graphite/Nuvola/Perla/Tortora",
    features: ["Battente (cerniera pivot)", "Cerniera nascosta", "Filomuro", "TOP", "TREND", "TREND S (push)"],
  },
  "Door Arreda — Tineo": {
    name: "Tineo",
    brand: "Door Arreda",
    segment: "Classic",
    description:
      "Porte in legno tamburato liscio, svetrato o inciso con fiammatura a vista. Disponibili con telaio cassa tradizionale o filo muro, in apertura a spingere o a tirare. Innumerevoli finiture rendono ogni porta un elemento di design.",
    highlight: "Innumerevoli finiture — liscia, vetrata o incisa, telaio cassa o filomuro",
    specs: [
      { label: "Materiale", value: "Pannello tamburato legno" },
      { label: "Varianti pannello", value: "Liscio, svetrato (vetro), inciso" },
      { label: "Telaio", value: "Cassa tradizionale o filo muro" },
      { label: "Apertura", value: "A spingere o a tirare" },
      { label: "Essenze", value: "Rovere, cedro bianco, frassino bianco" },
      { label: "Produzione", value: "Made in Italy" },
    ],
    colors: "Rovere, cedro bianco, frassino bianco, Arbol bianco/Sable, laccato Sable canapa, Texture 45, Texture Sable, RAL personalizzato",
    features: ["Battente a spingere", "Battente a tirare", "Filomuro", "Scorrevole"],
  },
};

/* ── PORTE BLINDATE — Alias + Erreci ──────────────────────────── */

export const securityDoorDetails: Record<string, ProductDetail> = {
  "Alias — Wall": {
    name: "Wall",
    brand: "Alias",
    segment: "Premium",
    description:
      "L'unica vera porta blindata completamente rasomuro: complanare alla parete interna, senza coprifili ne cornici visibili. Certificata Classe RC3 secondo EN 1627 con isolamento termico Ud 1,0 W/m²K e acustico fino a 45 dB. Disponibile anche nella versione antincendio EI2-60.",
    highlight: "L'unica blindata rasomuro vera — RC3, Ud 1,0, fino a 45 dB",
    specs: [
      { label: "Classe antieffrazione", value: "RC3 (EN 1627)" },
      { label: "Trasmittanza Ud", value: "1,0 W/m²K" },
      { label: "Isolamento acustico", value: "fino a 45 dB (con kit acustico)" },
      { label: "Resistenza fuoco", value: "EI2-60 opzionale (EN 1634-1)" },
      { label: "Serratura", value: "Cilindro europeo, motorizzata opzionale" },
      { label: "Garanzia", value: "30 anni di durabilità testata" },
    ],
    colors: "Pannello grezzo con primer (stuccabile/tinteggiabile), laccato RAL, effetto legno",
    features: ["Rasomuro interno (ed esterno con Kit E-Wall)", "Pannello personalizzabile", "Maniglia MANU design Ivo Pellegri", "Versione antincendio EI2-60"],
  },
  "Alias — Twenty LED": {
    name: "Twenty",
    brand: "Alias",
    segment: "Design",
    description:
      "Porta blindata sensoriale che arricchisce la Wing Wall con linee luminose LED integrate nei profili laterali. L'illuminazione a LED crea un effetto cornice che dona vita agli ambienti anche al buio. Stesse prestazioni RC3 della Wall.",
    highlight: "LED perimetrale integrato — cornice luminosa, blindata RC3",
    specs: [
      { label: "Classe antieffrazione", value: "RC3 (EN 1627)" },
      { label: "Illuminazione", value: "LED integrato nei profili laterali" },
      { label: "Trasmittanza Ud", value: "1,0 W/m²K (come Wall)" },
      { label: "Isolamento acustico", value: "fino a 45 dB (con kit acustico)" },
      { label: "Serratura", value: "Cilindro europeo, motorizzata opzionale" },
      { label: "Garanzia", value: "30 anni di durabilità testata" },
    ],
    colors: "Pannello grezzo con primer (tinteggiabile), laccato RAL, personalizzabile",
    features: ["Filomuro interno", "LED integrato nei profili", "Maniglia Wall cromo satinato", "Pannello personalizzabile"],
  },
  "Alias — Dream": {
    name: "Dream",
    brand: "Alias",
    segment: "Design",
    description:
      "Porta blindata per interni firmata Alias: isolamento acustico Rw 33 dB di serie (il doppio di una porta interna tradizionale), classe RC2. Pensata per studi, camere e ambienti privati dove serve sicurezza senza compromessi estetici.",
    highlight: "Blindata per interni — RC2, Rw 33 dB (doppio di una porta normale)",
    specs: [
      { label: "Classe antieffrazione", value: "RC2" },
      { label: "Isolamento acustico", value: "Rw 33 dB di serie" },
      { label: "Set acustico", value: "Di serie" },
      { label: "Serratura", value: "Cilindro europeo di sicurezza" },
      { label: "Coordinabilità", value: "Abbinabile alle porte interne esistenti" },
      { label: "Garanzia", value: "30 anni di durabilità testata" },
    ],
    colors: "Laccato, essenza, pannelli decorativi, coordinabile con porte interne",
    features: ["Per interni (studi, camere, uffici)", "Pannelli intercambiabili", "Filomuro opzionale"],
  },
  "Alias — Dream One": {
    name: "Dream One",
    brand: "Alias",
    segment: "Premium",
    description:
      "Evoluzione del Dream con telaio in alluminio anodizzato rinforzato da struttura in ferro zincato. Classe RC3, isolamento acustico Rw 40 dB e trasmittanza Ud 1,2 W/m²K. Versatile e adattiva, si coordina con le porte interne gia presenti in casa.",
    highlight: "RC3, Rw 40 dB, Ud 1,2 — telaio alluminio anodizzato rinforzato",
    specs: [
      { label: "Classe antieffrazione", value: "RC3" },
      { label: "Trasmittanza Ud", value: "1,2 W/m²K" },
      { label: "Isolamento acustico", value: "Rw 40 dB" },
      { label: "Tenuta aria", value: "Classe 2" },
      { label: "Resistenza vento", value: "C2" },
      { label: "Telaio", value: "Alluminio anodizzato + ferro zincato" },
    ],
    colors: "Coprifilo laccato RAL (7032, 7044, 9010), collezioni (DE)SIGN e RENO",
    features: ["Telaio alluminio anodizzato", "Maniglia H4/Fenix", "Collezione (DE)SIGN", "Collezione RENO", "Coordinabile con porte interne"],
  },
  "Alias — Due Ante": {
    name: "Due Ante (Double)",
    brand: "Alias",
    segment: "Premium",
    description:
      "Porta blindata a doppia anta con cerniera nascosta, sinonimo di grandiosità e maestosità. Certificata Classe 3 con trasmittanza Ud 1,29 W/m²K e riduzione acustica 36 dB. Apertura singola o doppia per ingressi scenografici di ville e attici.",
    highlight: "Doppia anta Classe 3 — Ud 1,29, 36 dB, cerniera nascosta",
    specs: [
      { label: "Classe antieffrazione", value: "Classe 3 (cerniera nascosta, EN 1627)" },
      { label: "Trasmittanza Ud", value: "1,29 W/m²K" },
      { label: "Isolamento acustico", value: "36 dB" },
      { label: "Serratura", value: "Doppia serratura cilindro europeo" },
      { label: "Pannello", value: "Collezione Diamante (es. A111), 6-15 mm" },
      { label: "Garanzia", value: "30 anni di durabilità testata" },
    ],
    colors: "Collezione Diamante, pannelli legno, laccato, effetto pietra, RAL",
    features: ["Due ante blindate", "Cerniera nascosta", "Apertura singola o doppia", "Maniglia H4 cromo satinato"],
  },
  "Alias — Magma": {
    name: "Magma",
    brand: "Alias",
    segment: "Sicurezza",
    description:
      "Porta tagliafuoco blindata disponibile in tre versioni: Magma 30, 60 e 90 minuti di resistenza al fuoco (EI2-30/60/90 secondo EN 1634-1). Serratura motorizzata con possibilità di maniglione antipanico. Dimensioni standard e fuori misura disponibili.",
    highlight: "Tagliafuoco EI2 30-60-90 min — serratura motorizzata, antipanico",
    specs: [
      { label: "Resistenza fuoco", value: "EI2-30, EI2-60, EI2-90 (EN 1634-1)" },
      { label: "Trasmittanza Ud", value: "Magma 30: 2,00 / Magma 60: 1,60 / Magma 90: 2,00 W/m²K" },
      { label: "Isolamento acustico", value: "Magma 30: 42 dB / Magma 60: 40 dB / Magma 90: 42 dB" },
      { label: "Serratura", value: "Motorizzata, con/senza maniglione antipanico" },
      { label: "Dimensioni std", value: "L 80/85/90 cm × H 210 cm" },
      { label: "Dimensioni max", value: "L 80-103 cm × H 190-230 cm (max 2,16 m²)" },
    ],
    colors: "Pannelli personalizzabili a scelta",
    features: ["Tagliafuoco EI2 certificata", "Serratura motorizzata", "Maniglione antipanico opzionale", "Misure standard e fuori misura"],
  },
  "Erreci — Capri": {
    name: "Capri",
    brand: "Erreci",
    segment: "Sicurezza",
    description:
      "Porta blindata Classe 3 con lamiera esterna in acciaio zincato 12/10 e doppia nervatura omega di rinforzo. Isolamento termoacustico in EPS grafitato su entrambi i lati. 15 punti di chiusura totali con deviatore a tripla chiusura superiore/inferiore.",
    highlight: "Classe 3, Ud 1,2, 40 dB — 15 punti di chiusura, EPS grafitato",
    specs: [
      { label: "Classe antieffrazione", value: "Classe 3" },
      { label: "Trasmittanza Ud", value: "1,2 W/m²K" },
      { label: "Isolamento acustico", value: "40 dB" },
      { label: "Tenuta aria", value: "Classe 3" },
      { label: "Resistenza vento", value: "Classe 5c" },
      { label: "Punti chiusura", value: "15 totali (cerniere 3 assi + perni fissi + deviatore)" },
      { label: "Lamiera esterna", value: "Acciaio zincato monolamina 12/10 + doppia omega" },
      { label: "Controtelaio", value: "Acciaio zincato saldato 20/10" },
    ],
    colors: "Essenze pannello personalizzabili, telaio RAL 9010/9005/8019/7035, bicolore",
    features: ["15 punti di chiusura", "Deviatore tripla chiusura", "EPS grafitato", "Cerniere regolabili 3 assi", "6 perni fissi anti-scardinamento"],
  },
  "Erreci — Capri Serrature": {
    name: "Capri — Opzioni Serratura",
    brand: "Erreci",
    segment: "Sicurezza",
    description:
      "La porta blindata Capri offre un ampio ventaglio di serrature: dalla classica a cilindro singolo/doppio alle versioni motorizzate con transponder, tastiera digitale, biometria o riconoscimento combinato. Dimensioni standard 80-90×210 cm, su misura fino a 110×245 cm.",
    highlight: "7 tipi di serratura — da cilindro classico a biometrica Full",
    specs: [
      { label: "Serratura Normal", value: "Cilindro singolo/doppio con defender" },
      { label: "Serratura Simply", value: "Motorizzata con transponder" },
      { label: "Serratura Digit", value: "Motorizzata con tastiera numerica" },
      { label: "Serratura Bio", value: "Motorizzata biometrica (impronta)" },
      { label: "Serratura Full", value: "Motorizzata con riconoscimento combinato" },
      { label: "Dimensioni standard", value: "L 800/850/900 mm × H 2100 mm" },
      { label: "Dimensioni su misura", value: "L 700-1100 mm × H 1800-2450 mm" },
    ],
    colors: "Maniglie bronzo o alluminio argento, combinazioni pomolo/maniglia",
    features: ["Cilindro europeo con defender", "Serratura motorizzata", "Transponder", "Tastiera digitale", "Lettore biometrico", "Drop 20 barriera termica a pavimento"],
  },
};
