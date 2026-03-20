import type { ProductDetail } from "./product-details";

/* ═══════════════════════════════════════════════════════════════════════
   COMFORT & COMPLEMENTI — Dettagli modello per brand
   ═══════════════════════════════════════════════════════════════════════ */

/* ── GRIFOFLEX — Zanzariere ──────────────────────────────────────────── */

export const grifoflexDetails: Record<string, ProductDetail> = {
  "Rollblock": {
    name: "Rollblock",
    brand: "Grifoflex",
    segment: "Zanzariere per porte finestra",
    description:
      "Zanzariera laterale brevettata per porte finestra, senza barriere a pavimento e con sistema antivento integrato. Dotata di spazzolini a setole rigide e accorgimenti tecnici di chiusura del telo che limitano l'accessibilità degli insetti, comprese le cimici.",
    highlight: "Zero barriere a terra — guida extra flat di soli 5 mm in alluminio",
    specs: [
      { label: "Tipologia", value: "Laterale a scorrimento per porta finestra" },
      { label: "Sistema antivento", value: "Spazzolini a setole rigide brevettati" },
      { label: "Guida a terra", value: "Extra flat 5 mm in alluminio" },
      { label: "Anti-intrusione", value: "Guarnizioni anti-cimice nel cassonetto" },
      { label: "Regolazione molla", value: "Veloce, dall'esterno del cassonetto" },
      { label: "Barra maniglia", value: "Simmetrica interno/esterno" },
    ],
    colors: "Bianco, avorio, silver, bronzo, marrone, testa di moro, grigio antracite RAL 7016, effetto legno",
    features: ["Scorrimento laterale", "Senza barriere a terra", "Sistema anticimice", "Posa smart rapida"],
  },
  "Dream Luce": {
    name: "Dream Luce",
    brand: "Grifoflex",
    segment: "Zanzariere per finestra",
    description:
      "Zanzariera a molla e catenella per finestra, installazione in luce con linee pulite e barra maniglia a scomparsa. Il sistema anticimice con guarnizioni nascoste nel cassonetto e il nastrino con bottoni integrati impediscono la fuoriuscita della rete dalle guide laterali.",
    highlight: "Installazione rapida in luce — maniglia retrattile e linee essenziali",
    specs: [
      { label: "Tipologia", value: "Verticale a molla e catenella per finestra" },
      { label: "Installazione", value: "In luce, posa semplice e veloce" },
      { label: "Anti-intrusione", value: "Guarnizioni anticimice nascoste nel cassonetto" },
      { label: "Antivento", value: "Nastrino con bottoni integrati nelle guide laterali" },
      { label: "Regolazione molla", value: "Veloce regolazione reattività molla" },
      { label: "Reti disponibili", value: "Glasstex grigia, nera, Panorama, Sunox, Fabrinet" },
    ],
    colors: "Bianco, avorio, silver, bronzo, marrone, testa di moro, grigio antracite, effetto legno",
    features: ["Scorrimento verticale", "Barra maniglia retrattile", "Sistema anticimice", "Installazione in luce"],
  },
  "Confort": {
    name: "Confort",
    brand: "Grifoflex",
    segment: "Zanzariere per porta finestra",
    description:
      "Zanzariera a scorrimento laterale per porte finestra con guida superiore telescopica e speciali grappe d'aggancio per la posa 'a scatto' del cassonetto. Guarnizioni anti-intrusive impediscono l'accesso agli insetti, mentre il nastrino con bottoni antivento mantiene la rete stabile nelle guide laterali.",
    highlight: "Posa a scatto — grappe d'aggancio rapide e guida telescopica",
    specs: [
      { label: "Tipologia", value: "Laterale a scorrimento per porta finestra" },
      { label: "Guida superiore", value: "Telescopica in alluminio" },
      { label: "Installazione", value: "A scatto con grappe d'aggancio dedicate" },
      { label: "Anti-intrusione", value: "Guarnizioni anti-intrusive anticimice" },
      { label: "Antivento", value: "Nastrino con bottoni integrati" },
      { label: "Altezza max consigliata", value: "2.500 mm" },
      { label: "Reti disponibili", value: "Glasstex grigia, nera, Panorama, Sunox, Fabrinet" },
    ],
    colors: "Bianco, avorio, silver, bronzo, marrone, testa di moro, grigio antracite, effetto legno",
    features: ["Scorrimento laterale", "Posa a scatto", "Barra maniglia con spazzolino", "Ganci antinfortunistici"],
  },
};

/* ── BETTIO — Zanzariere ─────────────────────────────────────────────── */

export const bettioDetails: Record<string, ProductDetail> = {
  "Scenica": {
    name: "Scenica",
    brand: "Bettio",
    segment: "Zanzariere senza barriere",
    description:
      "Zanzariera laterale a scorrimento senza barriere a pavimento e senza profili di riscontro laterali. Reversibile — installabile sia a destra che a sinistra del vano senza specificarlo in fase d'ordine. Il tappo compensatore di serie consente l'installazione anche in assenza di pareti posteriori al cassonetto.",
    highlight: "Zero barriere — pavimento completamente libero, ingombro 25 mm",
    specs: [
      { label: "Tipologia", value: "Laterale a scorrimento, senza barriere" },
      { label: "Ingombro profilo", value: "25 mm" },
      { label: "Reversibilità", value: "Sì, destro/sinistro senza modifica" },
      { label: "Tappo compensatore", value: "Di serie, posa senza parete posteriore" },
      { label: "Barriere a terra", value: "Nessuna" },
      { label: "Riscontro laterale", value: "Non necessario" },
    ],
    colors: "Silver, bronzo, bianco lucido RAL 9010, bianco opaco, avorio, nero lucido, grigio, marrone, effetto legno (ciliegio, acacia, rovere, noce, pino, douglas, iroko)",
    features: ["Senza barriere a terra", "Reversibile DX/SX", "Tappo compensatore di serie", "Adatta a porte finestra"],
  },
  "Miniscenica Evo": {
    name: "Miniscenica Evo",
    brand: "Bettio",
    segment: "Zanzariere a ingombro ridotto",
    description:
      "Zanzariera di concezione innovativa con profili dalle dimensioni contenute — solo 43 mm di ingombro totale (47 mm con cuffia). La barra maniglia si ferma in tutte le posizioni grazie a un sistema meccanico brevettato, senza bisogno di profili di riscontro laterali. Compensazione in altezza fino a +6 mm e in larghezza fino a +8 mm.",
    highlight: "Solo 43 mm di ingombro — blocco in ogni posizione senza riscontro",
    specs: [
      { label: "Tipologia", value: "Laterale a scorrimento, ingombro ridotto" },
      { label: "Ingombro totale", value: "43 mm (47 mm con cuffia)" },
      { label: "Compensazione altezza", value: "Fino a +6 mm" },
      { label: "Compensazione larghezza", value: "Fino a +8 mm" },
      { label: "Blocco maniglia", value: "Meccanico, in tutte le posizioni" },
      { label: "Rapporto H/L", value: "Altezza superiore di almeno 7 cm alla larghezza" },
    ],
    colors: "Silver, bronzo, bianco lucido RAL 9010, bianco opaco, avorio, nero lucido, grigio, marrone, effetto legno (ciliegio, acacia, rovere, noce, pino, douglas, iroko)",
    features: ["Ingombro ridotto 43 mm", "Blocco posizione senza riscontro", "Reversibile DX/SX", "Versione incasso disponibile"],
  },
  "Picoscenica": {
    name: "Picoscenica",
    brand: "Bettio",
    segment: "Zanzariere antivento ultracompatte",
    description:
      "Mantiene tutte le caratteristiche della famiglia Scenica con l'aggiunta della brevettata guida antivento, il tutto racchiuso in un ingombro di soli 25 mm. Compensazione in altezza da -3 a +11 mm senza biadesivo (+14 mm con biadesivo), compensazione in larghezza fino a +10 mm. La soluzione definitiva per chi cerca minimo ingombro e massima resistenza al vento.",
    highlight: "Guida antivento brevettata in soli 25 mm — la più compatta della gamma",
    specs: [
      { label: "Tipologia", value: "Laterale a scorrimento, ultracompatta antivento" },
      { label: "Ingombro totale", value: "25 mm (guida antivento inclusa)" },
      { label: "Compensazione altezza", value: "-3/+11 mm (senza biadesivo); +14 mm con biadesivo" },
      { label: "Compensazione larghezza", value: "Fino a +10 mm" },
      { label: "Guida antivento", value: "Brevettata, integrata nel profilo 25 mm" },
      { label: "Rapporto H/L", value: "Altezza superiore di almeno 8 cm alla larghezza" },
    ],
    colors: "Silver, bronzo, bianco lucido RAL 9010, bianco opaco, avorio, nero lucido, grigio, marrone, effetto legno (ciliegio, acacia, rovere, noce, pino, douglas, iroko)",
    features: ["Guida antivento brevettata", "Solo 25 mm di ingombro", "Compensazione versatile", "Stesse caratteristiche Scenica"],
  },
};

/* ── SHARKNET — Zanzariere + Tende Tecniche ──────────────────────────── */

export const sharknetZanzariereDetails: Record<string, ProductDetail> = {
  "SharkNet Apertura Centrale": {
    name: "SharkNet Apertura Centrale",
    brand: "SharkNet",
    segment: "Zanzariere plissettate per grandi aperture",
    description:
      "Zanzariera plissettata con apertura centrale a doppia anta, ideale per vetrate di grandi dimensioni fino a 5.000 mm di larghezza e 3.400 mm di altezza. Ingombro di soli 22 mm, rete in poliestere IdroScreen idrorepellente certificata — respinge l'acqua invece di assorbirla. Quadrupla certificazione Camera di Commercio e 15.000 cicli operativi testati.",
    highlight: "Vetrate fino a 5 metri — rete IdroScreen idrorepellente, ingombro 22 mm",
    specs: [
      { label: "Tipologia", value: "Plissettata, apertura centrale a doppia anta" },
      { label: "Ingombro profilo", value: "22 mm" },
      { label: "Larghezza max", value: "5.000 mm" },
      { label: "Altezza max", value: "3.400 mm (con rete grigia)" },
      { label: "Guida bassa", value: "4 mm o 8 mm a scelta" },
      { label: "Cicli testati", value: "15.000 cicli (certificati Camera di Commercio)" },
      { label: "Rete", value: "IdroScreen poliestere idrorepellente certificata" },
    ],
    colors: "Bianco, avorio, silver, marrone, testa di moro, grigio antracite RAL 7016, nero, colori RAL a richiesta",
    features: ["Apertura centrale", "Blocco in ogni posizione", "Sicura per bambini", "Installazione in 6 minuti"],
  },
  "SharkNet 08": {
    name: "SharkNet 08",
    brand: "SharkNet",
    segment: "Zanzariere plissettate senza ostacoli a terra",
    description:
      "Zanzariera plissettata dotata della brevettata piattina da 4 mm che non presenta alcun ostacolo a pavimento, ideale per porte finestra ad alto transito. Scorrimento laterale con ingombro di 22 mm, blocco in ogni posizione e rete IdroScreen idrorepellente. Guida bassa di 8 mm offre maggiore protezione contro il vento.",
    highlight: "Piattina 4 mm brevettata — nessun ostacolo a pavimento",
    specs: [
      { label: "Tipologia", value: "Plissettata laterale, senza ostacoli a terra" },
      { label: "Ingombro profilo", value: "22 mm" },
      { label: "Piattina a terra", value: "4 mm brevettata (nessun ostacolo)" },
      { label: "Guida bassa", value: "8 mm (protezione antivento)" },
      { label: "Cicli testati", value: "15.000 cicli (certificati Camera di Commercio)" },
      { label: "Rete", value: "IdroScreen poliestere idrorepellente" },
    ],
    colors: "Bianco, avorio, silver, marrone, testa di moro, grigio antracite RAL 7016, nero, colori RAL a richiesta",
    features: ["Piattina brevettata 4 mm", "Scorrimento laterale", "Blocco in ogni posizione", "Ideale alto transito"],
  },
  "SharkNet Apertura Verticale": {
    name: "SharkNet Apertura Verticale",
    brand: "SharkNet",
    segment: "Zanzariere plissettate per finestra",
    description:
      "Zanzariera plissettata con movimento verticale e totale assenza di guide inferiori, la soluzione perfetta per finestre standard e a vasistas. Rete IdroScreen idrorepellente in poliestere certificata con schermatura solare opzionale che respinge il calore mantenendo la trasparenza. Installazione rapida in soli 6 minuti.",
    highlight: "Verticale senza guide inferiori — schermatura solare opzionale",
    specs: [
      { label: "Tipologia", value: "Plissettata verticale per finestra" },
      { label: "Ingombro profilo", value: "22 mm" },
      { label: "Guide inferiori", value: "Assenti (modello SG)" },
      { label: "Schermatura solare", value: "Opzionale — rete metallizzata lato vetro" },
      { label: "Cicli testati", value: "15.000 cicli (certificati Camera di Commercio)" },
      { label: "Rete", value: "IdroScreen poliestere idrorepellente, grigia, colorata o antipolline" },
    ],
    colors: "Bianco, avorio, silver, marrone, testa di moro, grigio antracite RAL 7016, nero, colori RAL a richiesta",
    features: ["Apertura verticale", "Nessuna guida inferiore", "Schermatura solare opzionale", "100% Made in Italy"],
  },
};

export const sharknetTendeDetails: Record<string, ProductDetail> = {
  "SharkNet Schermatura Solare": {
    name: "SharkNet Schermatura Solare",
    brand: "SharkNet",
    segment: "Zanzariere con schermatura solare integrata",
    description:
      "Tutti i modelli SharkNet possono essere configurati con rete speciale a schermatura solare: una rete 'doppia' con lato metallizzato verso il vetro che respinge il calore solare, mantenendo dall'interno la normale visibilità verso l'esterno. Combinazione perfetta di protezione anti-insetto e controllo termico in un unico sistema.",
    highlight: "Doppia funzione: anti-insetto + schermatura solare in un solo prodotto",
    specs: [
      { label: "Tipologia", value: "Rete con schermatura solare su qualsiasi modello SharkNet" },
      { label: "Lato esterno", value: "Metallizzato, respinge il calore solare" },
      { label: "Lato interno", value: "Grigio, visibilità trasparente verso l'esterno" },
      { label: "Riduzione calore", value: "Significativa riduzione dell'irraggiamento solare" },
      { label: "Compatibilità", value: "Tutti i modelli SharkNet (nuovi e retrofit)" },
      { label: "Certificazione", value: "100% Made in Italy, normativa UE" },
    ],
    colors: "Rete metallizzata/grigia (profili: tutti i colori SharkNet disponibili)",
    features: ["Schermatura solare integrata", "Retrofit su SharkNet esistenti", "Visibilità mantenuta dall'interno", "Conformità incentivi fiscali"],
  },
  "SharkNet Antipolline": {
    name: "SharkNet Antipolline",
    brand: "SharkNet",
    segment: "Zanzariere con filtro antipolline",
    description:
      "Versione speciale di qualsiasi modello SharkNet con rete antipolline a maglia fitta, progettata per filtrare pollini e micro-particelle garantendo protezione a chi soffre di allergie stagionali. Mantiene lo stesso ingombro di 22 mm e l'idrorepellenza IdroScreen. Ideale per camere da letto e ambienti con soggetti allergici.",
    highlight: "Filtro antipolline certificato — aria pura per chi soffre di allergie",
    specs: [
      { label: "Tipologia", value: "Plissettata con rete antipolline" },
      { label: "Ingombro profilo", value: "22 mm" },
      { label: "Filtrazione", value: "Pollini e micro-particelle" },
      { label: "Rete", value: "Antipolline IdroScreen idrorepellente" },
      { label: "Compatibilità", value: "Tutti i modelli SharkNet" },
      { label: "Manutenzione", value: "Lavabile con acqua" },
    ],
    colors: "Bianco, avorio, silver, grigio antracite, marrone, nero, colori RAL a richiesta",
    features: ["Filtro antipolline", "Ingombro 22 mm", "Rete lavabile", "Ideale per soggetti allergici"],
  },
};

/* ── ZANZAR SISTEM — Tende Tecniche ──────────────────────────────────── */

export const zanzarSistemDetails: Record<string, ProductDetail> = {
  "Perfecta": {
    name: "Perfecta",
    brand: "Zanzar Sistem",
    segment: "Tende tecniche indoor a rullo o plissettate",
    description:
      "Tenda tecnica da interno frizionata con doppia meccanica disponibile — a rullo o plissettata. L'ampia gamma di teli oscuranti e filtranti ne permette l'applicazione in diversi ambienti, integrandola cromaticamente con il colore dell'infisso. Ideale per il controllo della luce e della privacy in ambito residenziale e contract.",
    highlight: "Doppia meccanica rullo/plissé — perfetta integrazione con l'infisso",
    specs: [
      { label: "Tipologia", value: "Tenda tecnica indoor frizionata" },
      { label: "Meccanica", value: "A rullo o plissettata" },
      { label: "Movimento", value: "Frizionato, blocco in qualsiasi posizione" },
      { label: "Tessuti", value: "Oscuranti, filtranti, screen, tecnici" },
      { label: "Installazione", value: "A parete, a soffitto o su infisso" },
      { label: "Personalizzazione", value: "Colore profilo coordinato all'infisso" },
    ],
    colors: "Bianco, argento, bronzo, marrone, grigio antracite, nero, RAL personalizzabili; tessuti in 50+ varianti",
    features: ["Meccanica a rullo o plissé", "Frizionata con blocco", "Oscurante o filtrante", "Installazione versatile"],
  },
  "Nanoblind": {
    name: "Nanoblind",
    brand: "Zanzar Sistem",
    segment: "Tende tecniche vetro-integrate",
    description:
      "Tenda tecnica da interno con innovativo sistema di installazione adesiva direttamente sul vetro tramite nastro Velcro Clip lungo il perimetro — nessun foro, nessuna vite. Cassonetto singolo per altezze fino a 1.400 mm, doppio per altezze fino a 2.300 mm. L'ingombro ridotto la rende invisibile quando aperta, garantendo oscuramento totale quando chiusa.",
    highlight: "Zero fori — applicazione adesiva sul vetro, cassonetto a scomparsa",
    specs: [
      { label: "Tipologia", value: "Tenda tecnica indoor a rullo, applicazione su vetro" },
      { label: "Installazione", value: "Adesiva con Velcro Clip, zero fori" },
      { label: "Cassonetto singolo", value: "Altezza max 1.400 mm" },
      { label: "Cassonetto doppio", value: "Altezza max 1.800 mm (2.300 mm cat. B)" },
      { label: "Tessuti", value: "Oscuranti e filtranti con ampia scelta cromatica" },
      { label: "Posizionamento", value: "Direttamente sulla superficie vetrata" },
    ],
    colors: "Bianco, argento, grigio, nero; tessuti oscuranti e filtranti in 40+ varianti",
    features: ["Applicazione adesiva su vetro", "Zero fori e zero viti", "Cassonetto a scomparsa", "Ideale per affitti e ristrutturazioni"],
  },
  "Linea Plissettata": {
    name: "Linea Plissettata",
    brand: "Zanzar Sistem",
    segment: "Tende tecniche plissettate indoor",
    description:
      "Sistema di tende plissettate da interno con tessuto che si raccoglie in morbide pieghe regolari, offrendo una gestione elegante della luce e della privacy. Disponibile con movimento alto-basso e basso-alto per un controllo totale della zona oscurata. Adatta a finestre standard, portefinestre e finestre a forma speciale (triangolari, trapezoidali, ad arco).",
    highlight: "Movimento alto-basso e basso-alto — adatta anche a forme speciali",
    specs: [
      { label: "Tipologia", value: "Tenda plissettata indoor" },
      { label: "Movimento", value: "Alto-basso e basso-alto, frizionato" },
      { label: "Forme speciali", value: "Triangolari, trapezoidali, ad arco" },
      { label: "Tessuti", value: "Filtranti, oscuranti, riflettenti, Plissé Duette" },
      { label: "Installazione", value: "Su infisso, a parete, a soffitto" },
      { label: "Manutenzione", value: "Tessuto antistatico, lavabile" },
    ],
    colors: "Bianco, crema, grigio chiaro, grigio scuro, tortora, nero; tessuti in 60+ tonalità e texture",
    features: ["Doppio movimento alto-basso", "Forme speciali", "Tessuto Plissé Duette isolante", "Frizionata con blocco"],
  },
};

/* ── SINFONIA — Scale e Ringhiere ────────────────────────────────────── */

export const sinfoniaDetails: Record<string, ProductDetail> = {
  "Aurea": {
    name: "Aurea",
    brand: "Sinfonia",
    segment: "Scale elicoidali di design",
    description:
      "Scala elicoidale di grande impatto visivo con struttura portante in acciaio inox satinato AISI 304, gradini in vetro extra-chiaro 'cracklè' e ringhiera R20 con cornice, montanti verticali ed elementi orizzontali in acciaio inox satinato. Ogni scala è progettata su misura per integrarsi armoniosamente nello spazio architettonico.",
    highlight: "Vetro cracklè e acciaio satinato — scultura elicoidale per interni di prestigio",
    specs: [
      { label: "Tipologia", value: "Scala elicoidale su misura" },
      { label: "Struttura", value: "Acciaio inox satinato AISI 304" },
      { label: "Gradini", value: "Vetro extra-chiaro cracklè" },
      { label: "Ringhiera", value: "R20 in acciaio inox AISI 304 satinato" },
      { label: "Produzione", value: "Su misura, progettazione personalizzata" },
      { label: "Certificazioni", value: "Conforme normativa UNI EN ISO 14122" },
    ],
    colors: "Acciaio inox satinato naturale; vetro extra-chiaro; possibilità di verniciatura struttura a richiesta",
    features: ["Elicoidale su misura", "Vetro cracklè", "Acciaio inox AISI 304", "Ringhiera R20 coordinata"],
  },
  "Bolero": {
    name: "Bolero",
    brand: "Sinfonia",
    segment: "Scale in legno dal design moderno",
    description:
      "Scala a giorno leggera e sinuosa con struttura a fascia portante a muro e gradini sospesi in legno massello. Il design contemporaneo è impreziosito dalla ringhiera R20 con corrimano, colonnine e orizzontali in acciaio inox AISI 304 satinato. Disponibile in diverse essenze di legno per adattarsi a qualsiasi stile d'arredo.",
    highlight: "Gradini sospesi su fascia a muro — leggerezza e sinuosità del legno",
    specs: [
      { label: "Tipologia", value: "Scala a giorno con fascia portante a muro" },
      { label: "Struttura", value: "Fascia portante in acciaio, fissaggio a muro" },
      { label: "Gradini", value: "Legno massello (faggio, rovere, noce, iroko)" },
      { label: "Ringhiera", value: "R20 in acciaio inox AISI 304 satinato" },
      { label: "Design", value: "Gradini sospesi, effetto flottante" },
      { label: "Produzione", value: "Su misura, progettazione personalizzata" },
    ],
    colors: "Faggio naturale, rovere sbiancato, rovere naturale, noce nazionale, iroko; verniciatura struttura a scelta",
    features: ["Gradini sospesi flottanti", "Fascia portante a muro", "Legno massello", "Design contemporaneo"],
  },
  "Laser": {
    name: "Laser",
    brand: "Sinfonia",
    segment: "Scale in acciaio taglio laser",
    description:
      "Scala rettilinea o a L con struttura portante in acciaio verniciato, gradini in legno massello e ringhiera R60 in vetro extra-chiaro inserito tra le strutture. Il taglio laser consente motivi decorativi unici sulla struttura metallica, trasformando la scala in un elemento d'arte funzionale. Versione Laser_Recta² con struttura Snow RAL 9010.",
    highlight: "Taglio laser decorativo su acciaio — la scala diventa opera d'arte",
    specs: [
      { label: "Tipologia", value: "Scala rettilinea o a L, taglio laser" },
      { label: "Struttura", value: "Acciaio verniciato con decorazioni taglio laser" },
      { label: "Gradini", value: "Legno massello (rovere miele e altre essenze)" },
      { label: "Ringhiera", value: "R60 in vetro extra-chiaro tra le strutture" },
      { label: "Versione", value: "Laser_Recta² (Snow RAL 9010)" },
      { label: "Produzione", value: "Su misura, progettazione personalizzata" },
    ],
    colors: "Struttura: Snow RAL 9010, grigio antracite, corten, nero opaco; gradini: rovere miele, rovere naturale, noce",
    features: ["Decorazione taglio laser", "Ringhiera in vetro R60", "Scala rettilinea o a L", "Elemento d'arredo"],
  },
  "Special": {
    name: "Special",
    brand: "Sinfonia",
    segment: "Scale speciali e a volte",
    description:
      "Linea di scale speciali progettate per contesti architettonici particolari — scale a volte, su archi, con pianerottoli intermedi e configurazioni non convenzionali. Ogni progetto è unico, con materiali, finiture e dimensioni personalizzati per rispondere alle esigenze strutturali e stilistiche più complesse.",
    highlight: "Scale uniche per architetture complesse — ogni progetto è un pezzo unico",
    specs: [
      { label: "Tipologia", value: "Scale speciali, a volte, configurazioni non convenzionali" },
      { label: "Struttura", value: "Acciaio, legno, vetro — su progetto" },
      { label: "Gradini", value: "Legno massello, vetro, pietra — su progetto" },
      { label: "Ringhiera", value: "R20, R60 o custom — su progetto" },
      { label: "Progettazione", value: "Rilievo in loco e progettazione 3D dedicata" },
      { label: "Produzione", value: "Artigianale, pezzo unico" },
    ],
    colors: "Tutti i colori RAL, essenze legno, vetro chiaro/satinato/colorato — su progetto",
    features: ["Progetto su misura integrale", "Rilievo e render 3D", "Materiali misti", "Pezzi unici artigianali"],
  },
  "Ringhiere e Balaustre": {
    name: "Ringhiere e Balaustre",
    brand: "Sinfonia",
    segment: "Ringhiere e balaustre per scale e balconi",
    description:
      "Gamma completa di ringhiere e balaustre adatte a scale in muratura e strutture esistenti. Quattro diverse tipologie per materiale, estetica e impatto visivo — dall'acciaio inox satinato al vetro, dal ferro battuto ai cavi in acciaio. Barre e corrimano in acciaio inox AISI 304, disponibili in quattro linee distinte che si adattano a qualsiasi contesto.",
    highlight: "4 linee per ogni stile — dall'acciaio inox al vetro, dal classico al contemporaneo",
    specs: [
      { label: "Tipologia", value: "Ringhiere e balaustre per scale e balconi" },
      { label: "Materiale", value: "Acciaio inox AISI 304 satinato" },
      { label: "Linee disponibili", value: "4 linee: R20, R40, R60, R80" },
      { label: "Applicazione", value: "Scale in muratura, balconi, terrazzi" },
      { label: "Altezza standard", value: "100 cm (personalizzabile)" },
      { label: "Normativa", value: "Conforme UNI EN ISO 14122" },
    ],
    colors: "Acciaio inox satinato, acciaio verniciato (tutti RAL), vetro chiaro/satinato, combinazioni miste",
    features: ["4 linee stilistiche", "Acciaio inox AISI 304", "Adatte a muratura esistente", "Personalizzabili su misura"],
  },
};

/* ═══════════════════════════════════════════════════════════════════════
   OUTDOOR — Dettagli modello per brand
   ═══════════════════════════════════════════════════════════════════════ */

/* ── TENDARREDO (TA Design) — Pergole ────────────────────────────────── */

export const tendarredoPergoleDetails: Record<string, ProductDetail> = {
  "P-190": {
    name: "P-190",
    brand: "Tendarredo (TA Design)",
    segment: "Pergola bioclimatica a lame orientabili",
    description:
      "Pergola bioclimatica con copertura a lamelle frangisole orientabili da 0° a 135°, motorizzate di serie a bassa tensione (24V CC). Le lamelle con guarnizione in gomma si chiudono ermeticamente garantendo impermeabilità totale, con acqua piovana che defluisce attraverso i pluviali integrati nei montanti. Moduli aggregabili per coperture di grandi dimensioni.",
    highlight: "Lamelle 0°–135° motorizzate — impermeabilità totale, garanzia fino a 8 anni",
    specs: [
      { label: "Tipologia", value: "Pergola bioclimatica a lame orientabili" },
      { label: "Orientamento lame", value: "Da 0° a 135°, motorizzato" },
      { label: "Motore", value: "Di serie, bassa tensione 24V CC" },
      { label: "Impermeabilità", value: "Totale con lame chiuse + pluviali integrati" },
      { label: "Struttura", value: "Alluminio estruso verniciato a polvere" },
      { label: "Modularità", value: "Moduli aggregabili per grandi superfici" },
      { label: "Garanzia", value: "Fino a 8 anni" },
    ],
    colors: "Bianco RAL 9010, grigio antracite RAL 7016, marrone corten, nero opaco RAL 9005, colori RAL a richiesta",
    features: ["Lame motorizzate 0°–135°", "Impermeabilità totale", "Pluviali integrati", "Moduli aggregabili", "Garanzia 8 anni"],
  },
  "P-150": {
    name: "P-150",
    brand: "Tendarredo (TA Design)",
    segment: "Pergola bioclimatica compatta",
    description:
      "Versione compatta della P-190 con identiche caratteristiche di orientamento lame, motorizzazione e impermeabilità, ma con dimensioni massime raggiungibili di L 6.000 x H 3.000 x P 5.000 mm. Ideale per terrazzi, balconi e spazi di dimensioni contenute dove si desidera il massimo delle prestazioni bioclimatiche senza ingombri strutturali eccessivi.",
    highlight: "Bioclimatica compatta fino a 6×5 m — tutte le prestazioni della P-190",
    specs: [
      { label: "Tipologia", value: "Pergola bioclimatica compatta a lame orientabili" },
      { label: "Dimensioni max", value: "L 6.000 × H 3.000 × P 5.000 mm" },
      { label: "Orientamento lame", value: "Da 0° a 135°, motorizzato" },
      { label: "Motore", value: "Di serie, bassa tensione 24V CC" },
      { label: "Impermeabilità", value: "Totale con lame chiuse + pluviali integrati" },
      { label: "Struttura", value: "Alluminio estruso verniciato a polvere" },
      { label: "Garanzia", value: "Fino a 8 anni" },
    ],
    colors: "Bianco RAL 9010, grigio antracite RAL 7016, marrone corten, nero opaco RAL 9005, colori RAL a richiesta",
    features: ["Versione compatta", "Lame motorizzate 0°–135°", "Ideale terrazzi e balconi", "Garanzia 8 anni"],
  },
  "Oskura Waterproof": {
    name: "Oskura Waterproof",
    brand: "Tendarredo (TA Design)",
    segment: "Pergola con lame orientabili e retrattili",
    description:
      "Pergola bioclimatica di ultima generazione con lame non solo orientabili ma anche completamente retrattili — si impacchettano su un lato aprendo il cielo sopra lo spazio living. Struttura in alluminio con chiusure laterali personalizzabili (vetrate, tende, zip screen). Automazione completa con sensori pioggia e vento opzionali per la gestione autonoma.",
    highlight: "Lame retrattili — cielo aperto o copertura totale con un solo gesto",
    specs: [
      { label: "Tipologia", value: "Pergola bioclimatica con lame orientabili e retrattili" },
      { label: "Lame", value: "Orientabili e retrattili (impacchettamento laterale)" },
      { label: "Struttura", value: "Alluminio estruso, verniciatura a polvere" },
      { label: "Chiusure laterali", value: "Vetrate, tende, zip screen (opzionali)" },
      { label: "Automazione", value: "Sensori pioggia/vento opzionali" },
      { label: "Illuminazione", value: "LED integrati opzionali" },
    ],
    colors: "Bianco RAL 9010, grigio antracite RAL 7016, marrone corten, nero opaco RAL 9005, colori RAL a richiesta",
    features: ["Lame retrattili impacchettabili", "Chiusure laterali opzionali", "Sensori automatici", "LED integrati"],
  },
};

/* ── TENDARREDO (TA Design) — Tende da Sole ──────────────────────────── */

export const tendarredoTendeDetails: Record<string, ProductDetail> = {
  "Perseo": {
    name: "Perseo",
    brand: "Tendarredo (TA Design)",
    segment: "Tende da sole a bracci estensibili",
    description:
      "Tenda da sole a bracci estensibili in alluminio con catena in acciaio, progettata per grandi sporgenze e coperture importanti. Il sistema a bracci garantisce una tensione uniforme del telo su tutta la superficie, offrendo un'ombreggiatura perfetta e costante. Motorizzabile con automazioni domotiche e sensori vento/sole.",
    highlight: "Bracci in alluminio con catena in acciaio — tensione perfetta su grandi sporgenze",
    specs: [
      { label: "Tipologia", value: "Tenda a bracci estensibili" },
      { label: "Bracci", value: "Alluminio con catena in acciaio" },
      { label: "Motorizzazione", value: "Opzionale, compatibile domotica" },
      { label: "Sensori", value: "Vento e sole opzionali" },
      { label: "Telo", value: "Tessuto acrilico o microforato (300+ varianti)" },
      { label: "Installazione", value: "A parete o a soffitto" },
    ],
    colors: "Struttura: bianco, grigio, antracite, avorio; teli: 300+ varianti tinta unita, righe, fantasia",
    features: ["Bracci in alluminio", "Grandi sporgenze", "Motorizzabile", "300+ tessuti disponibili"],
  },
  "Febe 36 Cassonata": {
    name: "Febe 36 Cassonata",
    brand: "Tendarredo (TA Design)",
    segment: "Tende da sole cassonata a scomparsa",
    description:
      "Tenda a bracci con cassonetto integrale che protegge il telo e il meccanismo dagli agenti atmosferici quando richiusa. Il cassonetto dal profilo arrotondato si integra con eleganza in ogni contesto architettonico. Motorizzazione con telecomando e possibilità di automazioni domotiche, sensori pioggia e vento.",
    highlight: "Cassonetto integrale — telo e meccanismo sempre protetti",
    specs: [
      { label: "Tipologia", value: "Tenda a bracci cassonata" },
      { label: "Cassonetto", value: "Integrale, profilo arrotondato" },
      { label: "Bracci", value: "Alluminio con catena in acciaio" },
      { label: "Motorizzazione", value: "Con telecomando, compatibile domotica" },
      { label: "Sensori", value: "Pioggia e vento opzionali" },
      { label: "Telo", value: "Tessuto acrilico o microforato (300+ varianti)" },
    ],
    colors: "Struttura: bianco, grigio, antracite, avorio; teli: 300+ varianti tinta unita, righe, fantasia",
    features: ["Cassonetto integrale", "Protezione telo totale", "Motorizzata con telecomando", "Design elegante"],
  },
  "Venere": {
    name: "Venere",
    brand: "Tendarredo (TA Design)",
    segment: "Tende da sole a bracci per balconi",
    description:
      "Tenda a bracci in alluminio con catena in acciaio dal design compatto, ideale per balconi e spazi residenziali. Bracci estensibili con tensione regolabile, ampia scelta di tessuti acrilici in oltre 300 varianti cromatiche. Motorizzazione disponibile con gestione da telecomando o smartphone tramite app dedicata.",
    highlight: "Compatta e versatile — perfetta per balconi, 300+ varianti tessuto",
    specs: [
      { label: "Tipologia", value: "Tenda a bracci estensibili per balconi" },
      { label: "Bracci", value: "Alluminio con catena in acciaio" },
      { label: "Tensione", value: "Regolabile" },
      { label: "Motorizzazione", value: "Opzionale, gestione via app/telecomando" },
      { label: "Telo", value: "Tessuto acrilico o microforato (300+ varianti)" },
      { label: "Installazione", value: "A parete o a soffitto" },
    ],
    colors: "Struttura: bianco, grigio, antracite, avorio; teli: 300+ varianti tinta unita, righe, fantasia",
    features: ["Design compatto", "Ideale per balconi", "Tensione regolabile", "Gestione via app"],
  },
  "Kelisis": {
    name: "Kelisis",
    brand: "Tendarredo (TA Design)",
    segment: "Tende da sole con illuminazione LED",
    description:
      "Tenda a bracci con sistema di illuminazione LED integrato nella struttura, perfetta per vivere gli spazi esterni anche nelle ore serali. I bracci in alluminio con catena in acciaio garantiscono prestazioni meccaniche elevate, mentre la strip LED lungo il profilo crea un'atmosfera suggestiva e funzionale.",
    highlight: "Illuminazione LED integrata — lo spazio esterno vive anche di sera",
    specs: [
      { label: "Tipologia", value: "Tenda a bracci con LED integrato" },
      { label: "Bracci", value: "Alluminio con catena in acciaio" },
      { label: "Illuminazione", value: "Strip LED integrata nel profilo" },
      { label: "Motorizzazione", value: "Di serie con telecomando" },
      { label: "Telo", value: "Tessuto acrilico o microforato (300+ varianti)" },
      { label: "Installazione", value: "A parete o a soffitto" },
    ],
    colors: "Struttura: bianco, grigio, antracite, avorio; teli: 300+ varianti; LED bianco caldo/freddo",
    features: ["LED integrato nella struttura", "Atmosfera serale", "Motorizzata di serie", "Design contemporaneo"],
  },
};

/* ── PERSIT — Pergole ────────────────────────────────────────────────── */

export const persitDetails: Record<string, ProductDetail> = {
  "Pergola Bioclimatica Persit": {
    name: "Pergola Bioclimatica Persit",
    brand: "Persit",
    segment: "Pergole bioclimatiche a lame orientabili",
    description:
      "Pergola bioclimatica con lame orientabili in alluminio che consentono di controllare l'ingresso della luce solare a piacimento — un raggio caldo al mattino, ombra piacevole nelle ore intense, brezza leggera che rinfresca le giornate estive. Le lame si chiudono ermeticamente convogliando l'acqua in modo ordinato lungo i bordi. Motorizzazione a pulsante o telecomando.",
    highlight: "Lame orientabili a chiusura ermetica — comfort outdoor in ogni stagione",
    specs: [
      { label: "Tipologia", value: "Pergola bioclimatica a lame orientabili" },
      { label: "Struttura", value: "Alluminio estruso verniciato a polvere" },
      { label: "Lame", value: "Orientabili, chiusura ermetica con guarnizioni" },
      { label: "Drenaggio", value: "Acqua convogliata lungo i bordi" },
      { label: "Motorizzazione", value: "Pulsante o telecomando" },
      { label: "Installazione", value: "Addossata a muro o autoportante" },
    ],
    colors: "Bianco RAL 9010, grigio antracite RAL 7016, bronzo, marrone corten, nero opaco, colori RAL a richiesta",
    features: ["Lame orientabili", "Chiusura ermetica", "Addossata o autoportante", "Motorizzata"],
  },
  "Pergola Bioclimatica Addossata": {
    name: "Pergola Bioclimatica Addossata",
    brand: "Persit",
    segment: "Pergole bioclimatiche addossate",
    description:
      "Versione addossata a muro della pergola bioclimatica Persit, ideale per terrazzi, patii e spazi adiacenti all'edificio. La struttura in alluminio si ancora saldamente alla parete portante, riducendo il numero di montanti a terra e massimizzando lo spazio utilizzabile. Completa di lame orientabili motorizzate e sistema di raccolta acque integrato.",
    highlight: "Addossata a muro — massimo spazio, montanti ridotti",
    specs: [
      { label: "Tipologia", value: "Pergola bioclimatica addossata" },
      { label: "Ancoraggio", value: "A parete portante" },
      { label: "Struttura", value: "Alluminio estruso, montanti ridotti" },
      { label: "Lame", value: "Orientabili, motorizzate con chiusura ermetica" },
      { label: "Raccolta acque", value: "Integrata nei montanti laterali" },
      { label: "Chiusure laterali", value: "Zip screen, vetrate, tende (opzionali)" },
    ],
    colors: "Bianco RAL 9010, grigio antracite RAL 7016, bronzo, marrone corten, nero opaco, colori RAL a richiesta",
    features: ["Fissaggio a muro", "Montanti ridotti", "Chiusure laterali opzionali", "Raccolta acque integrata"],
  },
  "Pergola Bioclimatica Autoportante": {
    name: "Pergola Bioclimatica Autoportante",
    brand: "Persit",
    segment: "Pergole bioclimatiche autoportanti",
    description:
      "Versione autoportante su 4 montanti indipendenti, posizionabile liberamente nel giardino, in piscina o in qualsiasi spazio aperto senza necessità di ancoraggio a pareti. Struttura robusta in alluminio estruso con lame orientabili motorizzate e sistema di raccolta acque nei montanti perimetrali. Aggregabile in moduli per creare coperture di ampia superficie.",
    highlight: "Autoportante 4 montanti — libertà di posizionamento, moduli aggregabili",
    specs: [
      { label: "Tipologia", value: "Pergola bioclimatica autoportante" },
      { label: "Montanti", value: "4 indipendenti, nessun ancoraggio a muro" },
      { label: "Struttura", value: "Alluminio estruso ad alta resistenza" },
      { label: "Lame", value: "Orientabili, motorizzate con chiusura ermetica" },
      { label: "Modularità", value: "Aggregabile per grandi superfici" },
      { label: "Raccolta acque", value: "Integrata nei montanti perimetrali" },
    ],
    colors: "Bianco RAL 9010, grigio antracite RAL 7016, bronzo, marrone corten, nero opaco, colori RAL a richiesta",
    features: ["Autoportante", "Posizionamento libero", "Moduli aggregabili", "Ideale giardini e piscine"],
  },
};

/* ── MC SLIDE — Vetrate Panoramiche ──────────────────────────────────── */

export const mcSlideDetails: Record<string, ProductDetail> = {
  "StarGlass H 15": {
    name: "StarGlass H 15",
    brand: "MC Slide",
    segment: "Vetrate panoramiche impacchettabili senza barriere",
    description:
      "Sistema impacchettabile 'tuttovetro' con guida ribassata stondata di soli 15 mm che, secondo normativa, non costituisce barriera architettonica. Prima anta a battente e successive ante scorrevoli, con innovativo sistema di pinze a pressione che accoglie vetri con spessori 8-8,76-10-10,76 mm senza alcuna lavorazione nel vetro. Non necessita di lavori di muratura.",
    highlight: "Guida 15 mm — nessuna barriera architettonica, nessuna lavorazione vetro",
    specs: [
      { label: "Tipologia", value: "Vetrata impacchettabile tuttovetro" },
      { label: "Guida inferiore", value: "15 mm ribassata stondata" },
      { label: "Spessore vetro", value: "8 / 8,76 / 10 / 10,76 mm" },
      { label: "Sistema fissaggio", value: "Pinze a pressione (no lavorazione vetro)" },
      { label: "Apertura", value: "Prima anta battente + successive scorrevoli" },
      { label: "Barriera architettonica", value: "No (conforme normativa)" },
      { label: "Muratura", value: "Non necessaria" },
    ],
    colors: "Profili: alluminio naturale, bianco, grigio antracite, nero; vetro: trasparente, satinato, basso-emissivo",
    features: ["Nessuna barriera architettonica", "Pinze a pressione", "No lavori muratura", "Veletta ad aggancio rapido"],
  },
  "StarGlass H 00": {
    name: "StarGlass H 00",
    brand: "MC Slide",
    segment: "Vetrate panoramiche senza guida inferiore",
    description:
      "Versione senza alcuna guida inferiore del sistema StarGlass: le ante scorrono su un binario superiore con totale assenza di elementi a pavimento. Perfetta per la suddivisione di spazi interni — uffici, showroom, sale riunioni — e per ogni applicazione dove la continuità della pavimentazione è essenziale. Stesse pinze a pressione per vetri 8-10,76 mm.",
    highlight: "Zero guida a terra — continuità totale della pavimentazione",
    specs: [
      { label: "Tipologia", value: "Vetrata impacchettabile tuttovetro senza guida inferiore" },
      { label: "Guida inferiore", value: "Nessuna (H 00)" },
      { label: "Spessore vetro", value: "8 / 8,76 / 10 / 10,76 mm" },
      { label: "Sistema fissaggio", value: "Pinze a pressione (no lavorazione vetro)" },
      { label: "Apertura", value: "Prima anta battente + successive scorrevoli" },
      { label: "Applicazione", value: "Interni: uffici, showroom, divisori" },
    ],
    colors: "Profili: alluminio naturale, bianco, grigio antracite, nero; vetro: trasparente, satinato, extrachiaro",
    features: ["Zero guida inferiore", "Continuità pavimento", "Ideale divisori interni", "Pinze a pressione"],
  },
  "Sliding Floor": {
    name: "Sliding Floor",
    brand: "MC Slide",
    segment: "Vetrate scorrevoli per pergole e verande",
    description:
      "Sistema scorrevole con fascioni in alluminio, soluzione solida e minimale progettata specificamente per la chiusura di pergole, verande e dehors. I pannelli scorrevoli si impacchettano lateralmente liberando l'apertura totale. Isolamento termico e acustico efficace per prolungare l'utilizzo degli spazi outdoor anche nei mesi freddi. Ideale anche per bar, ristoranti e gelaterie.",
    highlight: "Fascioni in alluminio per pergole — dalla stagionalità alla vivibilità annuale",
    specs: [
      { label: "Tipologia", value: "Vetrata scorrevole con fascioni in alluminio" },
      { label: "Struttura", value: "Fascioni in alluminio estruso" },
      { label: "Scorrimento", value: "Impacchettamento laterale" },
      { label: "Isolamento", value: "Termico e acustico" },
      { label: "Applicazione", value: "Pergole, verande, dehors, locali commerciali" },
      { label: "Apertura", value: "Totale con impacchettamento laterale" },
    ],
    colors: "Alluminio naturale, bianco RAL 9010, grigio antracite RAL 7016, nero RAL 9005, colori RAL a richiesta",
    features: ["Fascioni in alluminio", "Impacchettamento laterale", "Isolamento termico/acustico", "Ideale pergole e verande"],
  },
  "StarGlass H 34": {
    name: "StarGlass H 34",
    brand: "MC Slide",
    segment: "Vetrate panoramiche per balconi e terrazzi",
    description:
      "Versione classica del sistema StarGlass con guida inferiore standard, ideale per balconi e terrazzi dove la guida a pavimento garantisce massima stabilità e resistenza al vento. Il sistema di pinze a pressione accoglie vetri di diversi spessori senza forature, la veletta superiore con aggancio rapido semplifica l'installazione. La soluzione di riferimento per la chiusura trasparente di terrazzi panoramici.",
    highlight: "La soluzione classica per balconi — massima stabilità e resistenza al vento",
    specs: [
      { label: "Tipologia", value: "Vetrata impacchettabile tuttovetro con guida standard" },
      { label: "Guida inferiore", value: "34 mm standard" },
      { label: "Spessore vetro", value: "8 / 8,76 / 10 / 10,76 mm" },
      { label: "Sistema fissaggio", value: "Pinze a pressione (no lavorazione vetro)" },
      { label: "Resistenza al vento", value: "Massima (guida a pavimento)" },
      { label: "Applicazione", value: "Balconi, terrazzi panoramici" },
    ],
    colors: "Profili: alluminio naturale, bianco, grigio antracite, nero; vetro: trasparente, satinato, basso-emissivo",
    features: ["Guida standard massima stabilità", "Ideale balconi/terrazzi", "Resistenza al vento", "Installazione rapida"],
  },
};

/* ═══════════════════════════════════════════════════════════════════════
   RISCALDAMENTO / ENERGIE RINNOVABILI — Dettagli modello per brand
   ═══════════════════════════════════════════════════════════════════════ */

/* ── HAIER — Climatizzatori ──────────────────────────────────────────── */

export const haierDetails: Record<string, ProductDetail> = {
  "Jade": {
    name: "Jade",
    brand: "Haier",
    segment: "Climatizzatori top di gamma",
    description:
      "Il top di gamma Haier: classe energetica A+++/A+++ con SEER 8,75 e SCOP 5,10. Silenziosità ai vertici della categoria con soli 15 dB(A). Doppi sensori di movimento rilevano la presenza delle persone fino a 8 metri di distanza, regolando automaticamente intensità e direzione del flusso d'aria. Purificazione avanzata con filtro IFD, Steri-Clean 56°C e Self-Hygiene.",
    highlight: "Solo 15 dB(A) — il climatizzatore più silenzioso, A+++ in caldo e freddo",
    specs: [
      { label: "Classe energetica", value: "A+++/A+++" },
      { label: "SEER / SCOP", value: "8,75 / 5,10" },
      { label: "Rumorosità", value: "Da 15 dB(A)" },
      { label: "Tecnologia", value: "DC Inverter, 3D Airflow, Eco Sensor" },
      { label: "Purificazione", value: "Filtro IFD, Steri-Clean 56°C, Self-Hygiene" },
      { label: "Connettività", value: "Wi-Fi, App hOn, comandi vocali (Alexa/Google)" },
      { label: "Taglie", value: "9.000 / 12.000 / 18.000 / 24.000 BTU" },
    ],
    colors: "Bianco, nero (Black Mirror)",
    features: ["15 dB(A) ultrasilenzioso", "Doppi sensori di movimento", "Filtro IFD purificante", "Steri-Clean 56°C", "Self-Hygiene"],
  },
  "Flexis Plus": {
    name: "Flexis Plus",
    brand: "Haier",
    segment: "Climatizzatori di design",
    description:
      "Design ultracompatto con classe A+++/A++, SEER fino a 8,50 e SCOP 4,60. Sensore di movimento che rileva la presenza delle persone fino a 8 metri e regola automaticamente l'intensità del flusso d'aria. Purificazione con lampada UV-C LED, Steri-Clean 56°C, Self-Clean e Self-Hygiene. Disponibile in 5 taglie per ogni esigenza abitativa.",
    highlight: "Design compatto premium — UV-C LED, sensore di movimento, A+++/A++",
    specs: [
      { label: "Classe energetica", value: "A+++/A++" },
      { label: "SEER / SCOP", value: "Fino a 8,50 / 4,60" },
      { label: "Tecnologia", value: "DC Inverter, sensore di movimento (8 m)" },
      { label: "Purificazione", value: "UV-C LED, Steri-Clean 56°C, Self-Hygiene" },
      { label: "Connettività", value: "Wi-Fi hOn, comandi vocali (Alexa/Google)" },
      { label: "Taglie", value: "9.000 / 12.000 / 15.000 / 18.000 / 26.000 BTU" },
      { label: "Garanzia", value: "2+1 anni" },
    ],
    colors: "Bianco, nero, silver",
    features: ["Design ultracompatto", "Lampada UV-C LED", "Sensore di movimento", "Self-Clean automatico", "5 taglie disponibili"],
  },
  "Pearl": {
    name: "Pearl",
    brand: "Haier",
    segment: "Climatizzatori comfort",
    description:
      "Climatizzatore residenziale con tecnologia Coanda Plus che minimizza il getto diretto dell'aria, distribuendola lungo il soffitto per un comfort diffuso senza correnti fastidiose. Classe energetica A++/A+ con SEER fino a 7,50 e SCOP 4,00. Design elegante con pannello frontale curvo e finitura perlata. Self-Clean di serie per la pulizia automatica dello scambiatore.",
    highlight: "Tecnologia Coanda Plus — aria diffusa, zero getto diretto",
    specs: [
      { label: "Classe energetica", value: "A++/A+" },
      { label: "SEER / SCOP", value: "Fino a 7,50 / 4,00" },
      { label: "Tecnologia", value: "DC Inverter, Coanda Plus" },
      { label: "Purificazione", value: "Self-Clean automatico" },
      { label: "Connettività", value: "Wi-Fi hOn, comandi vocali" },
      { label: "Taglie", value: "9.000 / 12.000 / 18.000 / 26.000 BTU" },
      { label: "Garanzia", value: "2+1 anni" },
    ],
    colors: "Bianco perlato",
    features: ["Coanda Plus anti-getto", "Design curvo perlato", "Self-Clean automatico", "4 taglie disponibili"],
  },
};

/* ── SAMSUNG — Climatizzatori ────────────────────────────────────────── */

export const samsungDetails: Record<string, ProductDetail> = {
  "WindFree Elite S2": {
    name: "WindFree Elite S2",
    brand: "Samsung",
    segment: "Climatizzatori top di gamma",
    description:
      "Il vertice della climatizzazione Samsung: tecnologia WindFree con 23.000 microfori che diffondono aria fresca senza getto diretto. Classe energetica A+++/A+++ con SEER fino a 9,5 e SCOP 5,1 (modello 9000 BTU). Compressore AI Twin Rotary con intelligenza artificiale che apprende le abitudini e ottimizza consumi e comfort. Telecomando SolarCell ricaricabile a energia solare.",
    highlight: "23.000 microfori WindFree — A+++/A+++, compressore AI, telecomando solare",
    specs: [
      { label: "Classe energetica", value: "A+++/A+++" },
      { label: "SEER / SCOP", value: "Fino a 9,5 / 5,1 (9000 BTU)" },
      { label: "Rumorosità", value: "Da 16 dB(A)" },
      { label: "Tecnologia", value: "WindFree 23.000 microfori, AI Auto Cooling, AI Energy" },
      { label: "Filtrazione", value: "Tri-Care Filter, Auto Clean, Freeze Wash" },
      { label: "Connettività", value: "Wi-Fi SmartThings, comandi vocali" },
      { label: "Telecomando", value: "SolarCell a ricarica solare" },
    ],
    colors: "Bianco",
    features: ["WindFree 23.000 microfori", "Compressore AI Twin Rotary", "Telecomando SolarCell solare", "Freeze Wash pulizia profonda", "AI Auto Cooling"],
  },
  "WindFree Avant S2": {
    name: "WindFree Avant S2",
    brand: "Samsung",
    segment: "Climatizzatori alta efficienza",
    description:
      "Tecnologia WindFree con 23.000 microfori per una climatizzazione senza getto diretto, in una scocca dal design contemporaneo. Classe energetica A+++/A++ con SEER fino a 9,0 e SCOP 4,8. Filtro Tri-Care per catturare polveri, batteri e allergeni, funzione Auto Clean per mantenere lo scambiatore sempre pulito. Wi-Fi integrato con gestione tramite app SmartThings.",
    highlight: "WindFree senza getto diretto — design contemporaneo, A+++/A++",
    specs: [
      { label: "Classe energetica", value: "A+++/A++" },
      { label: "SEER / SCOP", value: "Fino a 9,0 / 4,8 (7000 BTU)" },
      { label: "Tecnologia", value: "WindFree 23.000 microfori" },
      { label: "Filtrazione", value: "Tri-Care Filter, Auto Clean" },
      { label: "Connettività", value: "Wi-Fi SmartThings, comandi vocali" },
      { label: "Taglie", value: "7.000 / 9.000 / 12.000 / 18.000 BTU" },
      { label: "Gas refrigerante", value: "R32" },
    ],
    colors: "Bianco",
    features: ["WindFree 23.000 microfori", "Tri-Care Filter", "Auto Clean", "Wi-Fi SmartThings", "Gas R32 ecologico"],
  },
  "WindFree Black": {
    name: "WindFree Black",
    brand: "Samsung",
    segment: "Climatizzatori design nero",
    description:
      "La versione black della serie WindFree, pensata per chi desidera integrare il climatizzatore in ambienti dal design moderno e sofisticato. Stessa tecnologia WindFree con 23.000 microfori per la distribuzione uniforme dell'aria senza getto diretto. Pannello frontale nero opaco con finitura premium. Tutte le funzionalità smart della serie Elite con Wi-Fi SmartThings integrato.",
    highlight: "Finitura nero opaco premium — WindFree per ambienti di design",
    specs: [
      { label: "Classe energetica", value: "A+++/A++" },
      { label: "Tecnologia", value: "WindFree 23.000 microfori" },
      { label: "Filtrazione", value: "Tri-Care Filter, Auto Clean" },
      { label: "Design", value: "Pannello frontale nero opaco premium" },
      { label: "Connettività", value: "Wi-Fi SmartThings, comandi vocali" },
      { label: "Gas refrigerante", value: "R32" },
    ],
    colors: "Nero opaco (Black Edition)",
    features: ["Finitura nero opaco", "WindFree 23.000 microfori", "Design d'arredo", "Wi-Fi SmartThings", "Gas R32"],
  },
  "Cebu S2": {
    name: "Cebu S2",
    brand: "Samsung",
    segment: "Climatizzatori essenziali Wi-Fi",
    description:
      "Climatizzatore Samsung di ultima generazione nella fascia essenziale, con Wi-Fi integrato e gestione tramite app SmartThings. Design compatto e funzionale con modalità Fast Cooling per raggiungere rapidamente la temperatura desiderata. Filtro HD per la cattura di polvere e allergeni, funzione Auto Clean per lo scambiatore. Ottimo rapporto qualità-prezzo con promo extra garanzia Samsung.",
    highlight: "Wi-Fi integrato nella fascia essenziale — ottimo rapporto qualità-prezzo",
    specs: [
      { label: "Classe energetica", value: "A++/A+" },
      { label: "Tecnologia", value: "Fast Cooling, modalità Good Sleep" },
      { label: "Filtrazione", value: "Filtro HD, Auto Clean" },
      { label: "Connettività", value: "Wi-Fi SmartThings integrato" },
      { label: "Taglie", value: "9.000 / 12.000 / 18.000 / 24.000 BTU" },
      { label: "Gas refrigerante", value: "R32" },
      { label: "Garanzia", value: "Standard + extra garanzia Samsung" },
    ],
    colors: "Bianco",
    features: ["Wi-Fi integrato", "Fast Cooling", "Auto Clean", "Good Sleep", "Extra garanzia Samsung"],
  },
};

/* ── ARISTON — Pompe di Calore ───────────────────────────────────────── */

export const aristonDetails: Record<string, ProductDetail> = {
  "Nimbus Plus S Net": {
    name: "Nimbus Plus S Net",
    brand: "Ariston",
    segment: "Pompe di calore split aria/acqua",
    description:
      "Pompa di calore inverter split aria/acqua ad alta efficienza per il riscaldamento e il raffrescamento degli ambienti. Classe energetica A+++ in riscaldamento con tecnologia inverter per modulare la potenza in base al fabbisogno reale, riducendo i consumi energetici. Collegamento Wi-Fi con app Ariston NET per il controllo remoto e comandi vocali tramite Google Home e Amazon Alexa.",
    highlight: "Split A+++ con Wi-Fi — gestione completa da app e comandi vocali",
    specs: [
      { label: "Tipologia", value: "Pompa di calore inverter split aria/acqua" },
      { label: "Classe energetica", value: "A+++" },
      { label: "Funzione", value: "Riscaldamento + raffrescamento" },
      { label: "Potenza", value: "Disponibile da 50 a 150 (5-15 kW)" },
      { label: "Gas refrigerante", value: "R410A (versione R32 disponibile)" },
      { label: "Connettività", value: "Wi-Fi Ariston NET, Alexa, Google Home" },
      { label: "Compatibilità", value: "Impianti radianti, radiatori, fancoil" },
    ],
    colors: "Unità interna: bianco; unità esterna: bianco/grigio",
    features: ["Inverter split ad alta efficienza", "App Ariston NET", "Comandi vocali", "Riscaldamento + raffrescamento", "Compatibile impianti radianti"],
  },
  "Nimbus Compact S Net R32": {
    name: "Nimbus Compact S Net R32",
    brand: "Ariston",
    segment: "Pompe di calore compatte con bollitore integrato",
    description:
      "Pompa di calore inverter split aria/acqua con bollitore integrato per la produzione di acqua calda sanitaria — una soluzione all-in-one che elimina la necessità di uno scaldacqua separato. Gas refrigerante R32 a basso impatto ambientale. Classe energetica A+++ in riscaldamento, controllo completo tramite app Ariston NET e comandi vocali.",
    highlight: "All-in-one con bollitore integrato e gas R32 — riscaldamento + ACS in un unico sistema",
    specs: [
      { label: "Tipologia", value: "Pompa di calore split con bollitore integrato" },
      { label: "Classe energetica", value: "A+++" },
      { label: "Funzione", value: "Riscaldamento + raffrescamento + ACS" },
      { label: "Gas refrigerante", value: "R32 (basso GWP)" },
      { label: "Bollitore", value: "Integrato (produzione ACS)" },
      { label: "Connettività", value: "Wi-Fi Ariston NET, Alexa, Google Home" },
      { label: "Compatibilità", value: "Impianti radianti, radiatori, fancoil" },
    ],
    colors: "Unità interna: bianco; unità esterna: bianco/grigio",
    features: ["Bollitore ACS integrato", "Gas R32 ecologico", "All-in-one", "App Ariston NET", "Classe A+++"],
  },
  "Nimbus Pocket M Net": {
    name: "Nimbus Pocket M Net",
    brand: "Ariston",
    segment: "Pompe di calore monoblocco compatte",
    description:
      "Pompa di calore monoblocco inverter aria/acqua di dimensioni compatte — l'intera unità è installata all'esterno senza split interno, ideale per ristrutturazioni dove lo spazio è limitato. Disponibile da 5 a 15 kW (monofase e trifase) con gas refrigerante R32. Classe energetica A+++/A+++ in riscaldamento e raffrescamento. Abbinabile a scaldacqua Nuos per la produzione di ACS.",
    highlight: "Monoblocco compatto — nessuna unità interna, installazione semplificata",
    specs: [
      { label: "Tipologia", value: "Pompa di calore monoblocco inverter aria/acqua" },
      { label: "Classe energetica", value: "A+++/A+++" },
      { label: "Funzione", value: "Riscaldamento + raffrescamento" },
      { label: "Potenza", value: "Da 5 a 15 kW (monofase e trifase)" },
      { label: "Gas refrigerante", value: "R32" },
      { label: "Installazione", value: "Solo unità esterna (monoblocco)" },
      { label: "Connettività", value: "Wi-Fi Ariston NET, Alexa, Google Home" },
    ],
    colors: "Bianco/grigio",
    features: ["Monoblocco senza split", "Installazione semplificata", "Gas R32", "A+++/A+++", "Abbinabile a Nuos ACS"],
  },
  "Nuos Evo": {
    name: "Nuos Evo",
    brand: "Ariston",
    segment: "Scaldacqua a pompa di calore",
    description:
      "Scaldacqua a pompa di calore murale in acciaio smaltato al titanio, alternativa ad alta efficienza energetica ai tradizionali scaldacqua elettrici ad accumulo. Design monoblocco compatto, ideale per chi dispone di spazi ridotti. Funzionamento efficiente in un range di temperature dell'aria da -5°C a 42°C. Classe energetica A+ per un significativo risparmio sui consumi di produzione ACS.",
    highlight: "Scaldacqua murale in pompa di calore — risparmio fino al 70% rispetto all'elettrico",
    specs: [
      { label: "Tipologia", value: "Scaldacqua a pompa di calore murale" },
      { label: "Classe energetica", value: "A+" },
      { label: "Serbatoio", value: "Acciaio smaltato al titanio" },
      { label: "Range temperature aria", value: "Da -5°C a 42°C" },
      { label: "Installazione", value: "Murale, monoblocco compatto" },
      { label: "Risparmio", value: "Fino a 70% vs scaldacqua elettrico" },
    ],
    colors: "Bianco",
    features: ["Murale compatto", "Acciaio smaltato al titanio", "Funziona da -5°C", "Risparmio 70%", "Classe A+"],
  },
};

/* ── HERMANN SAUNIER DUVAL — Caldaie a Condensazione ─────────────────── */

export const hermannDetails: Record<string, ProductDetail> = {
  "ThemaFast Condens": {
    name: "ThemaFast Condens",
    brand: "Hermann Saunier Duval",
    segment: "Caldaie a condensazione combinata",
    description:
      "Caldaia murale a condensazione combinata (riscaldamento + ACS) con esclusiva tecnologia Aquaspeed FAST e scambiatore a piastre in acciaio inox con microaccumulo integrato. Rendimento fino al 109,5% con efficienza eta del 94%. Sistema FlameFit di nuova generazione che consente l'utilizzo con miscele di gas contenenti fino al 20% di idrogeno, pronta per la transizione energetica.",
    highlight: "Aquaspeed FAST con microaccumulo — pronta per miscele gas con 20% idrogeno",
    specs: [
      { label: "Tipologia", value: "Caldaia murale a condensazione combinata" },
      { label: "Potenza", value: "25 / 30 / 35 kW" },
      { label: "Classe energetica", value: "A" },
      { label: "Rendimento", value: "Fino a 109,5% (eta 94%)" },
      { label: "ACS", value: "Aquaspeed FAST con microaccumulo in acciaio inox" },
      { label: "FlameFit", value: "Compatibile miscele gas fino a 20% H₂" },
      { label: "Combustibile", value: "Metano o GPL" },
    ],
    colors: "Bianco",
    features: ["Aquaspeed FAST", "FlameFit (20% H₂)", "Microaccumulo integrato", "Rendimento 109,5%", "Kit fumi incluso"],
  },
  "Thema Condens": {
    name: "Thema Condens",
    brand: "Hermann Saunier Duval",
    segment: "Caldaie a condensazione con Aquaspeed",
    description:
      "Caldaia murale a condensazione per riscaldamento e produzione di acqua calda sanitaria con tecnologia Aquaspeed che garantisce acqua calda istantanea. Scambiatore primario in acciaio inox di lunga durata, classificazione 4 stelle secondo normativa 92/42/CEE con rendimento fino al 108,4%. Disponibile nei modelli 26 e 30 kW a metano e 26 kW a GPL.",
    highlight: "Aquaspeed — acqua calda istantanea, 4 stelle, rendimento 108,4%",
    specs: [
      { label: "Tipologia", value: "Caldaia murale a condensazione combinata" },
      { label: "Potenza", value: "26 / 30 kW (metano); 26 kW (GPL)" },
      { label: "Classificazione", value: "4 stelle (92/42/CEE)" },
      { label: "Rendimento", value: "Fino a 108,4%" },
      { label: "ACS", value: "Aquaspeed (acqua calda istantanea)" },
      { label: "Scambiatore", value: "Primario in acciaio inox" },
      { label: "Comfort sanitario", value: "3 stelle (EN 13203-1)" },
    ],
    colors: "Bianco",
    features: ["Aquaspeed ACS istantanea", "4 stelle efficienza", "Scambiatore inox", "Metano o GPL", "Dimensioni compatte"],
  },
  "Thema Condens SB": {
    name: "Thema Condens SB",
    brand: "Hermann Saunier Duval",
    segment: "Caldaie a condensazione solo riscaldamento",
    description:
      "Versione solo riscaldamento della Thema Condens, ideale per impianti con produzione ACS separata (boiler, pompa di calore ACS, solare termico). Potenza 25 kW con scambiatore primario in acciaio inox e classificazione energetica A. Dimensioni compatte per installazione in nicchie e spazi ridotti. Compatibile con sistema Solar Easy di Hermann Saunier Duval.",
    highlight: "Solo riscaldamento — ideale con ACS separata o solare termico",
    specs: [
      { label: "Tipologia", value: "Caldaia murale a condensazione solo riscaldamento" },
      { label: "Potenza", value: "25 kW" },
      { label: "Classe energetica", value: "A" },
      { label: "Scambiatore", value: "Primario in acciaio inox" },
      { label: "Combustibile", value: "Metano o GPL" },
      { label: "Compatibilità solare", value: "Solar Easy Hermann Saunier Duval" },
    ],
    colors: "Bianco",
    features: ["Solo riscaldamento", "Compatta per spazi ridotti", "Compatibile Solar Easy", "Scambiatore inox"],
  },
  "Micra 4 Condensing": {
    name: "Micra 4 Condensing",
    brand: "Hermann Saunier Duval",
    segment: "Caldaie a condensazione smart Wi-Fi",
    description:
      "Caldaia murale a condensazione di ultima generazione con centralina Wi-Fi MiGo inclusa per il controllo remoto da smartphone. Classificazione 4 stelle con rendimento fino al 109,2% e comfort sanitario 3 stelle grazie alla tecnologia Aquaspeed. Disponibile in versione combinata (25 e 30 kW) e solo riscaldamento (12, 26 e 30 kW). Pronta per la gestione da remoto fin dal primo giorno.",
    highlight: "Wi-Fi MiGo incluso — gestione completa da smartphone, rendimento 109,2%",
    specs: [
      { label: "Tipologia", value: "Caldaia murale a condensazione con Wi-Fi" },
      { label: "Potenza combinata", value: "25 / 30 kW" },
      { label: "Potenza solo riscaldamento", value: "12 / 26 / 30 kW" },
      { label: "Classificazione", value: "4 stelle (92/42/CEE), rendimento 109,2%" },
      { label: "ACS", value: "Aquaspeed (3 stelle EN 13203-1)" },
      { label: "Connettività", value: "Wi-Fi MiGo incluso (gestione da smartphone)" },
      { label: "Combustibile", value: "Metano o GPL" },
    ],
    colors: "Bianco",
    features: ["Wi-Fi MiGo incluso di serie", "Rendimento 109,2%", "Aquaspeed", "Combinata o solo riscaldamento", "Gestione remota smartphone"],
  },
};
