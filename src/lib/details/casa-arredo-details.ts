import type { ProductDetail } from "../product-details";

/* ── CUCINE SU MISURA — Arrex Cucine ─────────────────────────── */

export const cucineDetails: Record<string, ProductDetail> = {
  "Arrex — Gea (EcoPet)": {
    name: "Gea (EcoPet)",
    brand: "Arrex Cucine",
    segment: "Moderna",
    description:
      "Cucina moderna con ante in EcoPet, materiale ecosostenibile ricavato dal riciclo di bottiglie in plastica PET. Superficie anti-impronta, resistente ai graffi e ai raggi UV. Design lineare e pulito per ambienti contemporanei.",
    highlight: "Ante in EcoPet riciclato — anti-impronta, antigraffio, 100% sostenibile",
    specs: [
      { label: "Anta", value: "EcoPet (PET riciclato ecosostenibile)" },
      { label: "Superficie", value: "Anti-impronta, antigraffio, resistente UV" },
      { label: "Finiture", value: "Opaco effetto seta, superopaco" },
      { label: "Maniglie", value: "Gola integrata o presa J" },
      { label: "Composizioni", value: "Lineare, angolare, con isola e penisola" },
      { label: "Produzione", value: "100% Made in Italy" },
    ],
    colors: "Bianco seta, grigio cenere, antracite, verde salvia, blu notte, tortora",
    features: ["EcoPet ecosostenibile", "Anti-impronta", "Antigraffio", "Design lineare"],
  },
  "Arrex — Loft 2.2": {
    name: "Loft 2.2",
    brand: "Arrex Cucine",
    segment: "Moderna",
    description:
      "Cucina dal carattere industriale rivisitato con moduli XXL e basi profonde. Ante in laminato effetto cemento, metallo e legno per un'estetica loft contemporanea. Piani di lavoro generosi e composizioni aperte verso il living.",
    highlight: "Stile loft industriale — moduli XXL, effetto cemento e metallo",
    specs: [
      { label: "Anta", value: "Laminato effetto cemento, metallo, legno" },
      { label: "Moduli", value: "XXL con basi profonde 65 cm" },
      { label: "Piano", value: "HPL, Fenix, gres o quarzo" },
      { label: "Maniglie", value: "Gola, presa integrata o tondina metallica" },
      { label: "Composizioni", value: "Lineare, angolare, con isola" },
      { label: "Produzione", value: "100% Made in Italy" },
    ],
    colors: "Effetto cemento, metallo ossidato, rovere nodoso, antracite, grigio piombo",
    features: ["Moduli XXL", "Estetica loft", "Basi profonde", "Living integrato"],
  },
  "Arrex — Gea (Zenitale)": {
    name: "Gea (Zenitale)",
    brand: "Arrex Cucine",
    segment: "Moderna",
    description:
      "Variante della linea Gea con anta in finitura Zenitale: superficie tattile superopaca che elimina ogni riflesso. Effetto vellutato al tatto con resistenza superiore a impronte e graffi.",
    highlight: "Finitura Zenitale superopaca — effetto vellutato, zero riflessi",
    specs: [
      { label: "Anta", value: "Finitura Zenitale superopaca" },
      { label: "Superficie", value: "Tattile vellutata, anti-impronta" },
      { label: "Finiture", value: "Superopaco effetto soft-touch" },
      { label: "Maniglie", value: "Gola integrata o presa J" },
      { label: "Composizioni", value: "Lineare, angolare, con isola e penisola" },
      { label: "Produzione", value: "100% Made in Italy" },
    ],
    colors: "Bianco assoluto, grigio titanio, nero profondo, verde bosco, blu notte",
    features: ["Finitura Zenitale", "Superopaco vellutato", "Anti-impronta totale", "Resistenza UV"],
  },
};

/* ── ARREDO BAGNO — Merati ───────────────────────────────────── */

export const arredoBagnoDetails: Record<string, ProductDetail> = {
  "Merati — Torana 3.0": {
    name: "Torana 3.0",
    brand: "Merati",
    segment: "Design",
    description:
      "Evoluzione della collezione Torana con sistema modulare sospeso di terza generazione. Superfici laccate, specchi e luci integrate con nuove finiture materiche e profili in metallo brunito.",
    highlight: "Terza generazione modulare — finiture materiche, profili metallo brunito",
    specs: [
      { label: "Tipologia", value: "Sistema modulare sospeso 3ª generazione" },
      { label: "Struttura", value: "Pannelli multistrato, struttura antracite" },
      { label: "Piano", value: "HPL nero afgano, marmo o gres" },
      { label: "Essenze", value: "Noce canaletto, rovere naturale, quercia fumé" },
      { label: "Lavabo", value: "Integrato o da appoggio" },
      { label: "Illuminazione", value: "LED integrata nello specchio e nei pensili" },
    ],
    colors: "Laccato bianco, antracite, noce canaletto, rovere spazzolato, nero afgano, quercia fumé",
    features: ["Moduli componibili 3.0", "Specchiera LED", "Soft-close", "Artigianale italiana"],
  },
  "Merati — Torana Pull": {
    name: "Torana Pull",
    brand: "Merati",
    segment: "Design",
    description:
      "Variante della collezione Torana con sistema di apertura a gola integrata Pull. Linee pulite senza maniglia a vista per un minimalismo contemporaneo. Cassettoni con estrazione totale e chiusura ammortizzata.",
    highlight: "Apertura Pull senza maniglia — minimalismo assoluto, estrazione totale",
    specs: [
      { label: "Tipologia", value: "Mobile sospeso con apertura Pull" },
      { label: "Apertura", value: "Gola integrata Pull (senza maniglia)" },
      { label: "Cassetti", value: "Estrazione totale con soft-close" },
      { label: "Piano", value: "HPL, marmo o gres porcellanato" },
      { label: "Essenze", value: "Noce canaletto, rovere, laccato opaco" },
      { label: "Illuminazione", value: "LED integrata opzionale" },
    ],
    colors: "Laccato bianco opaco, antracite, noce canaletto, rovere grigio, tortora",
    features: ["Apertura Pull", "Senza maniglia", "Estrazione totale", "Soft-close ammortizzato"],
  },
  "Merati — Plane 3D": {
    name: "Plane 3D",
    brand: "Merati",
    segment: "Design",
    description:
      "Collezione dal design planare con ante tridimensionali che creano giochi di luce e ombra. Superfici con lavorazione 3D fresata per un effetto scultoreo di grande impatto visivo.",
    highlight: "Ante 3D frestate — giochi di luce e ombra, effetto scultoreo",
    specs: [
      { label: "Tipologia", value: "Mobile sospeso con ante 3D" },
      { label: "Ante", value: "Lavorazione 3D fresata" },
      { label: "Profondità", value: "45–50 cm, su misura disponibile" },
      { label: "Piano", value: "Legno massello, marmo, HPL o ceramica" },
      { label: "Lavabo", value: "Da incasso, soprapiano o integrato" },
      { label: "Cassetti", value: "Estrazione totale con soft-close" },
    ],
    colors: "Laccato bianco, grigio perla, antracite, tortora, colori RAL su richiesta",
    features: ["Ante 3D frestate", "Effetto scultoreo", "Materiali pregiati", "Su misura"],
  },
  "Merati — Plane 2D": {
    name: "Plane 2D",
    brand: "Merati",
    segment: "Design",
    description:
      "Versione essenziale della linea Plane con superfici completamente lisce e planari. Design rigoroso dove volumi puri e ante senza cornice definiscono un mobile bagno di grande pulizia formale.",
    highlight: "Superfici pure e lisce — rigore formale, ante senza cornice",
    specs: [
      { label: "Tipologia", value: "Mobile sospeso con cassettoni" },
      { label: "Ante", value: "Lisce planari senza cornice" },
      { label: "Profondità", value: "45–50 cm, su misura disponibile" },
      { label: "Piano", value: "Legno massello, marmo, HPL o ceramica" },
      { label: "Lavabo", value: "Da incasso, soprapiano o integrato" },
      { label: "Produzione", value: "Artigianale Made in Italy" },
    ],
    colors: "Rovere naturale, tinto, noce canaletto, laccato bianco, grigio, antracite",
    features: ["Design planare minimale", "Cassettoni a estrazione totale", "Ante senza cornice", "Su misura"],
  },
  "Merati — Plane Gres": {
    name: "Plane Gres",
    brand: "Merati",
    segment: "Premium",
    description:
      "Variante della linea Plane con top e ante rivestiti in gres porcellanato sottile. Resistenza superiore a graffi, macchie e agenti chimici con l'eleganza delle grandi lastre effetto marmo o pietra.",
    highlight: "Ante e top in gres porcellanato — resistenza estrema, effetto marmo",
    specs: [
      { label: "Tipologia", value: "Mobile sospeso con rivestimento gres" },
      { label: "Top", value: "Gres porcellanato sottile 6 mm" },
      { label: "Ante", value: "Rivestite in gres coordinato al top" },
      { label: "Resistenza", value: "Antigraffio, antimacchia, agenti chimici" },
      { label: "Lavabo", value: "Integrato nel gres o da appoggio" },
      { label: "Produzione", value: "Artigianale Made in Italy" },
    ],
    colors: "Effetto Calacatta, Statuario, Marquinia, Travertino, Sahara Noir",
    features: ["Top in gres porcellanato", "Ante coordinate in gres", "Antimacchia", "Effetto marmo pregiato"],
  },
  "Merati — Easy": {
    name: "Easy",
    brand: "Merati",
    segment: "Moderna",
    description:
      "Programma lineare e funzionale: mobile contenitore personalizzabile con ante, cassetti o consolle, integrato con il lavabo Zen. Versatile, ottimizza lo spazio bagno con design essenziale.",
    highlight: "Essenzialità funzionale — lavabo Zen integrato, massima personalizzazione",
    specs: [
      { label: "Tipologia", value: "Mobile contenitore sospeso" },
      { label: "Configurazioni", value: "Ante, cassetti o consolle aperta" },
      { label: "Lavabo", value: "Zen integrato nel piano" },
      { label: "Larghezze", value: "Da 60 a 140 cm" },
      { label: "Materiali", value: "Legno multistrato, laccato o impiallacciato" },
      { label: "Chiusure", value: "Soft-close di serie" },
    ],
    colors: "Laccato bianco, grigio, tortora, rovere naturale, rovere grigio, noce",
    features: ["Lavabo Zen integrato", "Configurazione personalizzabile", "Soft-close", "Specchiera coordinata"],
  },
  "Merati — Round": {
    name: "Round",
    brand: "Merati",
    segment: "Contemporanea",
    description:
      "Collezione caratterizzata da forme arrotondate e angoli smussati per un'estetica morbida e accogliente. Cassettoni curvi con chiusura ammortizzata e lavabo integrato dalle linee organiche.",
    highlight: "Forme arrotondate e organiche — angoli smussati, estetica morbida",
    specs: [
      { label: "Tipologia", value: "Mobile sospeso con profilo arrotondato" },
      { label: "Design", value: "Angoli smussati, profilo curvo" },
      { label: "Cassetti", value: "Cassettoni curvi con soft-close" },
      { label: "Lavabo", value: "Integrato dalle linee organiche" },
      { label: "Larghezze", value: "Da 80 a 160 cm" },
      { label: "Produzione", value: "Artigianale Made in Italy" },
    ],
    colors: "Laccato bianco opaco, salvia, cipria, tortora, rovere naturale, noce canaletto",
    features: ["Profilo arrotondato", "Cassettoni curvi", "Lavabo organico", "Soft-close"],
  },
  "Merati — Bath Table": {
    name: "Bath Table",
    brand: "Merati",
    segment: "Design",
    description:
      "Elemento d'arredo bagno ispirato al concetto di tavolo: struttura aperta con gambe a vista e piano in materiali pregiati. Unisce funzionalità contenitiva a leggerezza visiva per ambienti dal gusto ricercato.",
    highlight: "Struttura aperta a tavolo — gambe a vista, leggerezza e design",
    specs: [
      { label: "Tipologia", value: "Mobile bagno a struttura aperta" },
      { label: "Struttura", value: "Gambe metalliche a vista" },
      { label: "Piano", value: "Legno massello, marmo o gres" },
      { label: "Contenitori", value: "Cassetti sospesi sotto piano" },
      { label: "Lavabo", value: "Da appoggio o sottopiano" },
      { label: "Produzione", value: "Artigianale Made in Italy" },
    ],
    colors: "Struttura nero opaco, ottone spazzolato, cromo; piano rovere, noce, marmo",
    features: ["Struttura a tavolo", "Gambe metalliche a vista", "Leggerezza visiva", "Materiali pregiati"],
  },
};

/* ── SANITARI — Sani e Co ────────────────────────────────────── */

export const sanitariDetails: Record<string, ProductDetail> = {
  "Sani e Co — Dara (Filomuro)": {
    name: "Dara (Filomuro)",
    brand: "Sani e Co",
    segment: "Contemporanea",
    description:
      "Collezione dal design squadrato e compatto nella versione filomuro: installazione a filo parete per una pulizia estetica totale. Linee geometriche nette con Rimless per igiene impeccabile e facilità di pulizia.",
    highlight: "Installazione filomuro — geometrie nette, Rimless, pulizia totale",
    specs: [
      { label: "Tipologia", value: "Vaso e bidet filomuro" },
      { label: "Installazione", value: "A filo parete (filomuro)" },
      { label: "Risciacquo", value: "Rimless (senza brida)" },
      { label: "Consumo", value: "3,5 / 4,5 litri doppio scarico" },
      { label: "Smalto", value: "Antibatterico idrorepellente" },
      { label: "Sedile", value: "Slim soft-close con sgancio rapido" },
    ],
    colors: "Bianco lucido, bianco opaco, nero opaco, color cemento",
    features: ["Filomuro a filo parete", "Rimless", "Sedile slim", "Smalto antibatterico"],
  },
  "Sani e Co — Sophia (Sospesi)": {
    name: "Sophia (Sospesi)",
    brand: "Sani e Co",
    segment: "Design",
    description:
      "Linea sanitari dalle forme morbide e avvolgenti nella versione sospesa: installazione a parete per massima igiene e facilità di pulizia del pavimento. Tecnologia Rimless con smalto antibatterico.",
    highlight: "Sospesi a parete — forme morbide, Rimless, igiene superiore",
    specs: [
      { label: "Tipologia", value: "Vaso e bidet sospesi" },
      { label: "Installazione", value: "Sospesa a parete con staffe" },
      { label: "Risciacquo", value: "Rimless (senza brida)" },
      { label: "Consumo", value: "3,5 / 4,5 litri doppio scarico" },
      { label: "Smalto", value: "Antibatterico idrorepellente" },
      { label: "Carico testato", value: "400 kg" },
    ],
    colors: "Bianco lucido, bianco opaco, nero opaco, grigio cemento, tortora",
    features: ["Installazione sospesa", "Tecnologia Rimless", "Smalto antibatterico", "Fissaggi nascosti"],
  },
};

/* ── RUBINETTERIA — Fiore ────────────────────────────────────── */

export const rubinetteriaDetails: Record<string, ProductDetail> = {
  "Fiore — Kube (Squadrato)": {
    name: "Kube (Squadrato)",
    brand: "Fiore",
    segment: "Design",
    description:
      "Miscelatori dalle linee rigorosamente squadrate e geometrie cubiche. Corpo in ottone con finitura cromata di alta qualità. Design architettonico che trasforma il rubinetto in elemento d'arredo.",
    highlight: "Geometrie cubiche rigorose — design architettonico, cromo di alta qualità",
    specs: [
      { label: "Materiale", value: "Ottone cromato" },
      { label: "Design", value: "Geometrico squadrato (cubico)" },
      { label: "Cartuccia", value: "Ceramica Ø 35 mm" },
      { label: "Aeratore", value: "Anticalcare con risparmio idrico" },
      { label: "Attacchi", value: "Standard 3/8\"" },
      { label: "Gamma", value: "Lavabo, bidet, vasca, doccia" },
    ],
    colors: "Cromo lucido, nero opaco, nickel spazzolato",
    features: ["Design cubico squadrato", "Cromo alta qualità", "Risparmio idrico", "Made in Italy"],
  },
  "Fiore — Xenon (Inox 316L)": {
    name: "Xenon (Inox 316L)",
    brand: "Fiore",
    segment: "Premium",
    description:
      "Serie realizzata interamente in acciaio inox AISI 316L: atossico, privo di piombo e nichel. Design sostenibile con la purezza dell'acciaio per ambienti bagno e cucina di alto livello.",
    highlight: "Acciaio inox 316L — zero piombo, zero nichel, 100% atossico",
    specs: [
      { label: "Materiale", value: "Acciaio inox AISI 316L" },
      { label: "Cartuccia", value: "Ceramica Ø 25 mm" },
      { label: "Aeratore", value: "Con limitatore di portata ECO" },
      { label: "Finitura", value: "Acciaio spazzolato" },
      { label: "Attacchi", value: "Standard 3/8\"" },
      { label: "Garanzia", value: "Made in Italy dal 1965" },
    ],
    colors: "Acciaio inox spazzolato, satinato",
    features: ["100% acciaio inox 316L", "Atossico", "Anticorrosione", "Risparmio idrico"],
  },
  "Fiore — Kevon Chic (Bicolore)": {
    name: "Kevon Chic (Bicolore)",
    brand: "Fiore",
    segment: "Design",
    description:
      "Versione Chic della linea Kevon con esclusiva finitura bicolore: corpo e leva in tonalità contrastanti per un effetto cromatico ricercato. Disponibile nelle combinazioni più attuali della palette Emozioni.",
    highlight: "Finitura bicolore esclusiva — corpo e leva a contrasto, palette Emozioni",
    specs: [
      { label: "Materiale", value: "Ottone con finitura PVD bicolore" },
      { label: "Design", value: "Bicolore corpo/leva a contrasto" },
      { label: "Cartuccia", value: "Ceramica Ø 35 mm" },
      { label: "Finiture", value: "Nero/oro, nero/rame, cromo/nero, bianco/cromo" },
      { label: "Aeratore", value: "Con risparmio idrico" },
      { label: "Gamma", value: "Lavabo, bidet, vasca, doccia" },
    ],
    colors: "Nero/oro, nero/rame, cromo/nero, bianco/cromo, grafite/nickel",
    features: ["Bicolore a contrasto", "Finitura PVD", "Palette Emozioni", "Made in Italy"],
  },
  "Fiore — King (Cucina)": {
    name: "King (Cucina)",
    brand: "Fiore",
    segment: "Moderna",
    description:
      "Miscelatore da cucina con bocca alta girevole e doccetta estraibile a doppio getto. Design robusto e funzionale per uso intensivo. Disponibile in cromo, nero opaco e acciaio spazzolato.",
    highlight: "Cucina professionale — bocca alta girevole, doccetta estraibile doppio getto",
    specs: [
      { label: "Materiale", value: "Ottone cromato" },
      { label: "Bocca", value: "Alta girevole 360°" },
      { label: "Doccetta", value: "Estraibile con doppio getto" },
      { label: "Cartuccia", value: "Ceramica Ø 35 mm" },
      { label: "Attacchi", value: "Standard 3/8\"" },
      { label: "Aeratore", value: "Anticalcare con limitatore portata" },
    ],
    colors: "Cromo lucido, nero opaco, acciaio spazzolato",
    features: ["Bocca alta girevole", "Doccetta estraibile", "Doppio getto", "Made in Italy"],
  },
};

/* ── CERAMICHE — Class Tile ──────────────────────────────────── */

export const ceramicheDetails: Record<string, ProductDetail> = {
  "Class Tile — Divina Calacatta": {
    name: "Divina Calacatta",
    brand: "Class Tile",
    segment: "Premium",
    description:
      "Gres porcellanato effetto marmo Calacatta con venature dorate su fondo bianco caldo. Superficie levigata lucida per pavimenti e rivestimenti interni di alta gamma, riproduce fedelmente il marmo più pregiato.",
    highlight: "Effetto Calacatta — venature dorate su bianco, eleganza senza manutenzione",
    specs: [
      { label: "Materiale", value: "Gres porcellanato levigato" },
      { label: "Effetto", value: "Marmo Calacatta con venature dorate" },
      { label: "Formati", value: "120×60, 60×60, 30×60 cm" },
      { label: "Spessore", value: "9 mm" },
      { label: "Superficie", value: "Levigata lucida" },
      { label: "Certificazioni", value: "LEED, Made in Italy" },
    ],
    colors: "Bianco caldo con venature dorate e grigio tenue",
    features: ["Effetto Calacatta realistico", "Levigata lucida", "Resistente a macchie", "LEED"],
  },
  "Class Tile — Divina Carrara": {
    name: "Divina Carrara",
    brand: "Class Tile",
    segment: "Premium",
    description:
      "Gres porcellanato che riproduce il marmo di Carrara con le caratteristiche venature grigie su fondo bianco luminoso. Superficie levigata per ambienti eleganti, dalla hall ai bagni di rappresentanza.",
    highlight: "Effetto Carrara — venature grigie su bianco luminoso, classico intramontabile",
    specs: [
      { label: "Materiale", value: "Gres porcellanato levigato" },
      { label: "Effetto", value: "Marmo Carrara con venature grigie" },
      { label: "Formati", value: "120×60, 60×60, 30×60 cm" },
      { label: "Spessore", value: "9 mm" },
      { label: "Superficie", value: "Levigata lucida" },
      { label: "Certificazioni", value: "LEED, Made in Italy" },
    ],
    colors: "Bianco luminoso con venature grigie delicate",
    features: ["Effetto Carrara autentico", "Levigata lucida", "Facile manutenzione", "LEED"],
  },
  "Class Tile — Divina Onice Verde": {
    name: "Divina Onice Verde",
    brand: "Class Tile",
    segment: "Premium",
    description:
      "Gres porcellanato effetto onice verde con le suggestive trasparenze e stratificazioni della pietra naturale. Superficie lucida dall'effetto scenografico per pareti d'accento e ambienti di grande personalità.",
    highlight: "Effetto Onice Verde — trasparenze naturali, scenografico e unico",
    specs: [
      { label: "Materiale", value: "Gres porcellanato levigato" },
      { label: "Effetto", value: "Onice verde con stratificazioni" },
      { label: "Formati", value: "120×60, 60×60 cm" },
      { label: "Spessore", value: "9 mm" },
      { label: "Superficie", value: "Levigata lucida effetto profondità" },
      { label: "Certificazioni", value: "LEED, Made in Italy" },
    ],
    colors: "Verde intenso con stratificazioni dorate e bianche",
    features: ["Effetto onice scenografico", "Profondità visiva", "Parete d'accento", "LEED"],
  },
  "Class Tile — Archè (Effetto legno)": {
    name: "Archè (Effetto legno)",
    brand: "Class Tile",
    segment: "Design",
    description:
      "Gres porcellanato effetto legno con nodi e venature naturali, versatile per contesti privati e pubblici. Formato listone rettificato per una resa realistica del parquet in gres.",
    highlight: "Effetto legno autentico — nodi naturali, versatile interno ed esterno",
    specs: [
      { label: "Materiale", value: "Gres porcellanato rettificato" },
      { label: "Effetto", value: "Legno naturale con nodi e venature" },
      { label: "Formati", value: "20×122, 15×90 cm (listone)" },
      { label: "Spessore", value: "9 mm (interno), 20 mm (esterno)" },
      { label: "Superficie", value: "Naturale antiscivolo R10" },
      { label: "Certificazioni", value: "LEED, Made in Italy" },
    ],
    colors: "Rovere naturale, Rovere grigio, Noce, Miele, Sbiancato",
    features: ["Effetto legno realistico", "Rettificato", "Antiscivolo R10", "Versione 20 mm esterno"],
  },
  "Class Tile — MyStone (Effetto pietra)": {
    name: "MyStone (Effetto pietra)",
    brand: "Class Tile",
    segment: "Premium",
    description:
      "Gres porcellanato effetto pietra naturale con texture minerali e sfumature uniformi. Ideale per ambienti contemporanei, disponibile in grandi formati per superfici continue senza fughe evidenti.",
    highlight: "Effetto pietra naturale — texture minerali, grandi formati contemporanei",
    specs: [
      { label: "Materiale", value: "Gres porcellanato" },
      { label: "Effetto", value: "Pietra naturale con texture minerale" },
      { label: "Formati", value: "90×90, 60×60, 30×60 cm" },
      { label: "Spessore", value: "9 mm (interno), 20 mm (esterno)" },
      { label: "Superficie", value: "Naturale antiscivolo" },
      { label: "Certificazioni", value: "LEED, Made in Italy" },
    ],
    colors: "Ivory, Sand, Grey, Anthracite, Taupe",
    features: ["Grandi formati", "Effetto pietra naturale", "Versione 20 mm esterno", "LEED"],
  },
};

/* ── PARQUET — Ali Parquet ───────────────────────────────────── */

export const parquetDetails: Record<string, ProductDetail> = {
  "Ali Parquet — PreMass Classic": {
    name: "PreMass Classic",
    brand: "Ali Parquet",
    segment: "Premium",
    description:
      "Parquet prefinito in legno 100% massello monostrato nella versione Classic con lavorazione liscia bisellata. Zero colle, zero emissioni nocive. Disponibile in rovere con otto varianti cromatiche.",
    highlight: "100% massello Classic — liscio bisellato, zero colle, pronto posa",
    specs: [
      { label: "Struttura", value: "Monostrato 100% legno massello" },
      { label: "Spessore", value: "10 mm" },
      { label: "Dimensioni", value: "400–500 × 65–70 mm" },
      { label: "Lavorazione", value: "Liscio bisellato" },
      { label: "Finitura", value: "Vernice opaca ecologica" },
      { label: "Posa", value: "Incollata, prefinito pronto posa" },
    ],
    colors: "Rovere naturale, sbiancato, grigio, miele, tabacco, caffè, wengé, anticato",
    features: ["100% massello", "Zero colle", "Zero emissioni", "8 varianti rovere"],
  },
  "Ali Parquet — SuperPreMass Trend": {
    name: "SuperPreMass Trend",
    brand: "Ali Parquet",
    segment: "Premium",
    description:
      "Formato intermedio della linea massello nella versione Trend: tavole più lunghe e larghe con spessore 14 mm per maggiore robustezza. Finiture di tendenza con lavorazioni spazzolate e oliate.",
    highlight: "Formato intermedio 14 mm Trend — spazzolato, oliato, finiture attuali",
    specs: [
      { label: "Struttura", value: "Monostrato 100% legno massello" },
      { label: "Spessore", value: "14 mm" },
      { label: "Dimensioni", value: "600–1000 × 70–90 mm" },
      { label: "Lavorazione", value: "Spazzolato bisellato" },
      { label: "Finitura", value: "Oliata o vernice opaca ecologica" },
      { label: "Posa", value: "Incollata, prefinito pronto posa" },
    ],
    colors: "Rovere naturale, sbiancato, grigio, miele, tabacco, caffè, wengé, anticato",
    features: ["14 mm rinforzato", "Spazzolatura Trend", "Restaurabile", "8 varianti rovere"],
  },
  "Ali Parquet — ExtraMass Living": {
    name: "ExtraMass Living",
    brand: "Ali Parquet",
    segment: "Premium",
    description:
      "Il grande formato della linea massello nella versione Living: tavole larghe e lunghe con finitura verniciata opaca per ambienti residenziali. Spazzolatura e bisellatura per un effetto materico contemporaneo.",
    highlight: "Grande formato Living — tavole larghe, verniciato opaco, effetto materico",
    specs: [
      { label: "Struttura", value: "Monostrato 100% legno massello" },
      { label: "Spessore", value: "14 mm" },
      { label: "Dimensioni", value: "600–1400 × 120–140 mm" },
      { label: "Lavorazione", value: "Spazzolato bisellato" },
      { label: "Finitura", value: "Vernice opaca ecologica" },
      { label: "Posa", value: "Incollata, prefinito pronto posa" },
    ],
    colors: "Rovere naturale, sbiancato, grigio, miele, tabacco, caffè, wengé, anticato",
    features: ["Grande formato", "Spazzolatura materica", "100% massello", "Verniciato opaco"],
  },
  "Ali Parquet — ExtraMass Oil": {
    name: "ExtraMass Oil",
    brand: "Ali Parquet",
    segment: "Premium",
    description:
      "Versione oliata della linea ExtraMass per chi cerca il tatto autentico del legno. Tavole larghe e lunghe con finitura ad olio naturale che esalta la venatura e la matericità del massello.",
    highlight: "Grande formato oliato — tatto autentico del legno, finitura naturale",
    specs: [
      { label: "Struttura", value: "Monostrato 100% legno massello" },
      { label: "Spessore", value: "14 mm" },
      { label: "Dimensioni", value: "600–1400 × 120–140 mm" },
      { label: "Lavorazione", value: "Spazzolato bisellato" },
      { label: "Finitura", value: "Olio naturale ecologico" },
      { label: "Posa", value: "Incollata, prefinito pronto posa" },
    ],
    colors: "Rovere naturale, sbiancato, grigio, miele, tabacco, caffè, wengé, anticato",
    features: ["Grande formato oliato", "Tatto naturale", "100% massello", "Finitura ad olio"],
  },
};
