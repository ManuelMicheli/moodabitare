import type { ProductDetail } from "../product-details";

/* ── CUCINE SU MISURA — Arrex Cucine ─────────────────────────── */

export const cucineDetails: Record<string, ProductDetail> = {
  "Arrex — AL 32": {
    name: "AL 32",
    brand: "Arrex Cucine",
    segment: "Design",
    description:
      "Programma di cucine moderne con telaio in alluminio riciclabile al 100%, disponibile in 6 tipologie di materiali e 70 varianti di anta. Vetro, gres, Fenix, HPL e legno si combinano con profili in bronzo, champagne, bianco e antracite.",
    highlight: "Telaio alluminio 100% riciclabile — 70 varianti anta, 6 materiali",
    specs: [
      { label: "Struttura", value: "Telaio in alluminio 100% riciclabile" },
      { label: "Materiali anta", value: "Vetro, gres, Fenix, HPL, legno, laccato" },
      { label: "Varianti", value: "70 combinazioni anta" },
      { label: "Colori telaio", value: "Bronzo, champagne, bianco, antracite" },
      { label: "Pannelli", value: "Certificati CARB II ecologici" },
      { label: "Produzione", value: "100% Made in Italy" },
    ],
    colors: "70 varianti: laccati opachi e lucidi, effetto legno, Fenix NTM, vetro",
    features: ["Telaio alluminio riciclabile", "Isola e penisola", "Colonne dispensa", "Living integrato"],
  },
  "Arrex — Lola": {
    name: "Lola",
    brand: "Arrex Cucine",
    segment: "Contemporanea",
    description:
      "Cucina in legno eclettica che traduce ogni stile: dal contemporaneo al classico chic. L'anta in finitura décapé propone cromie dall'elegante ghiaccio all'intenso antracite, con profili dorati e argentati.",
    highlight: "Versatilità assoluta — décapé, laccata, profili oro e argento",
    specs: [
      { label: "Anta", value: "Legno massello con telaio, décapé o laccata" },
      { label: "Finiture décapé", value: "Ghiaccio, antracite, tonalità naturali" },
      { label: "Laccatura", value: "Centinaia di colori RAL e NCS" },
      { label: "Profili", value: "Dorati, argentati o tono su tono" },
      { label: "Composizioni", value: "Lineare, angolare, con isola" },
      { label: "Produzione", value: "100% Made in Italy" },
    ],
    colors: "Décapé ghiaccio, antracite, laccato RAL/NCS, profili oro e argento",
    features: ["Anta legno massello", "Décapé artigianale", "Stile eclettico", "Accessori ergonomici"],
  },
  "Arrex — Queen": {
    name: "Queen",
    brand: "Arrex Cucine",
    segment: "Moderna",
    description:
      "Cucina moderna con anta a telaio dal design essenziale, disponibile in P.E.T. monocolore, laminato effetto legno o laccato. Concetto versatile che unisce eleganza ed equilibrio per ambienti living contemporanei.",
    highlight: "Anta a telaio moderna — P.E.T., laminato effetto legno, laccato",
    specs: [
      { label: "Anta", value: "Telaio moderno con profilo sottile" },
      { label: "Finiture", value: "P.E.T. monocolore, laminato legno, laccato" },
      { label: "Maniglie", value: "Gola integrata o presa a profilo" },
      { label: "Piano", value: "HPL, laminato, quarzo, gres" },
      { label: "Composizioni", value: "Lineare, angolare, con isola e penisola" },
      { label: "Produzione", value: "100% Made in Italy" },
    ],
    colors: "P.E.T. bianco/grigio/antracite, laminato rovere/noce, laccati opachi e lucidi",
    features: ["Anta telaio design", "P.E.T. antigraffio", "Sistema gola", "Living coordinato"],
  },
  "Arrex — Cannella": {
    name: "Cannella",
    brand: "Arrex Cucine",
    segment: "Moderna",
    description:
      "Cucina moderna dalle geometrie contemporanee con pensili, contenitori e mobili in vari colori anche a contrasto. Piani di lavoro ergonomici e composizioni modulari per spazi di ogni dimensione.",
    highlight: "Geometrie contemporanee — colori a contrasto, ergonomia totale",
    specs: [
      { label: "Anta", value: "Liscia, laminato o laccato opaco" },
      { label: "Finiture", value: "Monocolore, bicolore a contrasto, effetto legno" },
      { label: "Piano", value: "Ergonomico, HPL o laminato stratificato" },
      { label: "Contenitori", value: "Pensili, basi, colonne con cestelli estraibili" },
      { label: "Composizioni", value: "Lineare, angolare, con penisola" },
      { label: "Produzione", value: "100% Made in Italy" },
    ],
    colors: "Bianco, grigio, antracite, verde salvia, blu notte, rovere, combinazioni bicolore",
    features: ["Design geometrico", "Bicolore a contrasto", "Cestelli estraibili", "LED integrata"],
  },
  "Arrex — Magda": {
    name: "Magda",
    brand: "Arrex Cucine",
    segment: "Classica",
    description:
      "Cucina classica con il tono caldo del ciliegio e le delicate varianti décapé. Reinventa lo stile classico con ante in legno massello e decorazioni curate nei minimi dettagli.",
    highlight: "Classica reinventata — ciliegio naturale, décapé, dettagli preziosi",
    specs: [
      { label: "Anta", value: "Legno massello con bugnatura classica" },
      { label: "Essenza", value: "Ciliegio, noce, rovere" },
      { label: "Finiture", value: "Naturale, décapé, laccato patinato" },
      { label: "Decorazioni", value: "Cornici, capitelli, mensole intagliate" },
      { label: "Cappa", value: "A cornice in muratura o in legno" },
      { label: "Produzione", value: "100% Made in Italy" },
    ],
    colors: "Ciliegio naturale, noce scuro, décapé avorio, décapé bianco, laccato patinato",
    features: ["Legno massello", "Dettagli artigianali", "Cappa a cornice", "Pensili con vetrina"],
  },
  "Arrex — Costanza": {
    name: "Costanza",
    brand: "Arrex Cucine",
    segment: "Classica",
    description:
      "Cucina in legno dalla grande modularità, con ante intagliate e decorazioni per ambienti tradizionali. Struttura robusta e finiture raffinate per un risultato di eleganza senza tempo.",
    highlight: "Modularità classica — ante intagliate, decorazioni artigianali",
    specs: [
      { label: "Anta", value: "Legno massello con intagli e bugnature" },
      { label: "Struttura", value: "Moduli componibili ad alta modularità" },
      { label: "Finiture", value: "Legno naturale, décapé, laccato anticato" },
      { label: "Dettagli", value: "Cornici, pilastri, capitelli, maniglie porcellana" },
      { label: "Piano", value: "Marmo, granito o top in massello" },
      { label: "Produzione", value: "100% Made in Italy" },
    ],
    colors: "Noce classico, ciliegio, décapé avorio, bianco anticato, miele",
    features: ["Modularità elevata", "Intagli artigianali", "Maniglie porcellana", "Cappa decorata"],
  },
};

/* ── ARREDO BAGNO — Merati ───────────────────────────────────── */

export const arredoBagnoDetails: Record<string, ProductDetail> = {
  "Merati — Torana": {
    name: "Torana",
    brand: "Merati",
    segment: "Design",
    description:
      "Collezione ispirata ai portali dei templi induisti. Soluzioni d'arredo modulari con superfici laccate, specchi e luci integrate. Linee pulite e minimalismo contemporaneo per ambienti bagno di grande impatto.",
    highlight: "Minimalismo modulare — superfici laccate, specchi e luci integrate",
    specs: [
      { label: "Tipologia", value: "Sistema modulare sospeso" },
      { label: "Struttura", value: "Pannelli multistrato, struttura antracite" },
      { label: "Piano", value: "HPL nero afgano o marmo" },
      { label: "Essenze", value: "Noce canaletto, rovere naturale" },
      { label: "Lavabo", value: "Integrato o da appoggio" },
      { label: "Illuminazione", value: "LED integrata nello specchio" },
    ],
    colors: "Laccato bianco, antracite, noce canaletto, rovere spazzolato, nero afgano",
    features: ["Moduli componibili", "Specchiera LED", "Soft-close", "Artigianale italiana"],
  },
  "Merati — Glamour": {
    name: "Glamour",
    brand: "Merati",
    segment: "Premium",
    description:
      "La collezione più lussuosa di Merati con finiture preziose in oro, argento e rame. Superfici laccate lucide e dettagli metallici per un'atmosfera sofisticata in ambienti bagno di alta rappresentanza.",
    highlight: "Lusso assoluto — finiture in oro, argento e rame",
    specs: [
      { label: "Tipologia", value: "Mobile sospeso o a terra" },
      { label: "Finiture metalliche", value: "Oro, argento, rame, bronzo" },
      { label: "Superficie", value: "Laccato lucido e opaco" },
      { label: "Lavabo", value: "Ceramica, cristallo o marmo" },
      { label: "Specchiera", value: "Con cornice metallica coordinata" },
      { label: "Produzione", value: "Artigianale Made in Italy" },
    ],
    colors: "Laccato lucido bianco, nero, bordeaux, oro, argento, rame, bronzo",
    features: ["Finiture metalliche", "Laccatura a specchio", "Maniglie gioiello", "Su misura"],
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
  "Merati — Domino": {
    name: "Domino",
    brand: "Merati",
    segment: "Contemporanea",
    description:
      "Sistema a moduli 20x60 cm per composizioni a parete su misura, con funzione decorativa e contenitiva. Si integra con lavabi, specchi, luci e accessori per configurazioni illimitate.",
    highlight: "Modulo 20x60 componibile — boiserie, contenitori e decorazione a parete",
    specs: [
      { label: "Modulo base", value: "20 × 60 cm, replicabile a piacere" },
      { label: "Funzione", value: "Decorativa e contenitiva" },
      { label: "Finiture boiserie", value: "Rovere sbiancato, naturale, noce canaletto" },
      { label: "Finiture moduli", value: "Effetto cemento, metallo, ardesia, opaco" },
      { label: "Integrazione", value: "Lavabi, specchi, luci, accessori" },
      { label: "Montaggio", value: "A parete, composizione libera" },
    ],
    colors: "Effetto cemento, metallo, ardesia, rovere sbiancato, naturale, noce canaletto",
    features: ["Moduli 20×60 componibili", "Boiserie coordinata", "Composizione libera", "Artigianale italiana"],
  },
  "Merati — Plane": {
    name: "Plane",
    brand: "Merati",
    segment: "Design",
    description:
      "Collezione dal design rigoroso e planare, dove superfici continue e volumi puri definiscono un mobile bagno di grande pulizia formale. Finiture in legno naturale e laccati opachi.",
    highlight: "Superfici pure e continue — rigore formale, finiture naturali",
    specs: [
      { label: "Tipologia", value: "Mobile sospeso con cassettoni" },
      { label: "Profondità", value: "45–50 cm, su misura disponibile" },
      { label: "Piano", value: "Legno massello, marmo, HPL o ceramica" },
      { label: "Lavabo", value: "Da incasso, soprapiano o integrato" },
      { label: "Cassetti", value: "Estrazione totale con soft-close" },
      { label: "Produzione", value: "Artigianale Made in Italy" },
    ],
    colors: "Rovere naturale, tinto, noce canaletto, laccato bianco, grigio, antracite",
    features: ["Design planare minimale", "Cassettoni a estrazione totale", "Materiali pregiati", "Su misura"],
  },
};

/* ── SANITARI — Sani e Co ────────────────────────────────────── */

export const sanitariDetails: Record<string, ProductDetail> = {
  "Sani e Co — Sophia": {
    name: "Sophia",
    brand: "Sani e Co",
    segment: "Design",
    description:
      "Linea sanitari dalle forme morbide e avvolgenti con tecnologia Rimless. Risciacquo ottimale con 3,5 litri e smalto antibatterico che previene l'accumulo di germi. Design italiano che unisce estetica e igiene superiore.",
    highlight: "Forme morbide — Rimless, 3,5 litri, smalto antibatterico",
    specs: [
      { label: "Tipologia", value: "Vaso e bidet sospesi o filomuro" },
      { label: "Risciacquo", value: "Rimless (senza brida)" },
      { label: "Consumo", value: "3,5 / 4,5 litri doppio scarico" },
      { label: "Smalto", value: "Antibatterico idrorepellente" },
      { label: "Sedile", value: "Soft-close con sgancio rapido" },
      { label: "Carico testato", value: "400 kg" },
    ],
    colors: "Bianco lucido, bianco opaco, nero opaco, grigio cemento, tortora",
    features: ["Tecnologia Rimless", "Smalto antibatterico", "Soft-close sgancio rapido", "Fissaggi nascosti"],
  },
  "Sani e Co — Dara": {
    name: "Dara",
    brand: "Sani e Co",
    segment: "Contemporanea",
    description:
      "Collezione dal design squadrato e compatto per bagni contemporanei. Linee geometriche nette e proporzioni studiate per ottimizzare lo spazio, con Rimless per igiene impeccabile.",
    highlight: "Design squadrato compatto — geometrie nette, Rimless di serie",
    specs: [
      { label: "Tipologia", value: "Vaso e bidet sospesi o filomuro" },
      { label: "Risciacquo", value: "Rimless (senza brida)" },
      { label: "Consumo", value: "3,5 / 4,5 litri doppio scarico" },
      { label: "Smalto", value: "Antibatterico idrorepellente" },
      { label: "Sedile", value: "Slim soft-close con sgancio rapido" },
      { label: "Dimensioni", value: "Compatte per spazi ridotti" },
    ],
    colors: "Bianco lucido, bianco opaco, nero opaco, color cemento",
    features: ["Rimless", "Design squadrato", "Sedile slim", "Filomuro o sospesa"],
  },
  "Sani e Co — Plano": {
    name: "Plano",
    brand: "Sani e Co",
    segment: "Moderna",
    description:
      "Lavabi d'arredo dalle linee essenziali e geometrie pure, disponibili da appoggio, sospesi e da incasso. Bordi sottili per estetica minimale, ceramica con smalto antibatterico.",
    highlight: "Lavabi d'arredo — linee pure, bordi sottili, antibatterico",
    specs: [
      { label: "Tipologia", value: "Lavabo da appoggio, sospeso o da incasso" },
      { label: "Materiale", value: "Ceramica di alta qualità" },
      { label: "Smalto", value: "Antibatterico idrorepellente" },
      { label: "Spessore bordo", value: "Sottile, design minimal" },
      { label: "Foro rubinetto", value: "Predisposto o senza foro" },
      { label: "Carico testato", value: "100 kg" },
    ],
    colors: "Bianco lucido, bianco opaco, nero opaco, tortora, grigio perla",
    features: ["Design minimale", "Bordi ultra-sottili", "Antibatterico", "Molteplici installazioni"],
  },
  "Sani e Co — Young": {
    name: "Young",
    brand: "Sani e Co",
    segment: "Design",
    description:
      "Lavabi dal design giovane con forme organiche dal tondo al rettangolare arrotondato. Per ambienti bagno dove la personalità del complemento d'arredo fa la differenza.",
    highlight: "Design giovane — forme organiche, personalità contemporanea",
    specs: [
      { label: "Tipologia", value: "Lavabo da appoggio su piano" },
      { label: "Materiale", value: "Ceramica fine smaltata" },
      { label: "Forme", value: "Tonda, ovale, rettangolare arrotondata" },
      { label: "Smalto", value: "Antibatterico di serie" },
      { label: "Dimensioni", value: "Diverse misure disponibili" },
      { label: "Foro troppopieno", value: "Con o senza, a scelta" },
    ],
    colors: "Bianco lucido, bianco opaco, nero opaco, colori su richiesta",
    features: ["Forme organiche", "Antibatterico", "Design versatile", "Ceramica Made in Italy"],
  },
};

/* ── RUBINETTERIA — Fiore ────────────────────────────────────── */

export const rubinetteriaDetails: Record<string, ProductDetail> = {
  "Fiore — Xenon Steel": {
    name: "Xenon Steel",
    brand: "Fiore",
    segment: "Premium",
    description:
      "Serie realizzata interamente in acciaio inox AISI 316L: atossico, privo di piombo e nichel. Design sostenibile con la purezza dell'acciaio per ambienti bagno di alto livello.",
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
  "Fiore — Kevon": {
    name: "Kevon",
    brand: "Fiore",
    segment: "Design",
    description:
      "Linea elegante con corpo in ottone cromato e linee geometriche. Disponibile nella variante Kevon NN in nero opaco con sei finiture speciali della collezione Emozioni.",
    highlight: "Design geometrico — nero opaco con 6 finiture speciali Emozioni",
    specs: [
      { label: "Materiale", value: "Ottone cromato" },
      { label: "Cartuccia", value: "Ceramica Ø 35 mm" },
      { label: "Aeratore", value: "Con risparmio idrico" },
      { label: "Variante", value: "Kevon NN (nero opaco)" },
      { label: "Gamma", value: "Lavabo, bidet, vasca, doccia" },
      { label: "Finiture", value: "Cromo, nero opaco, bronzo, rame, oro, nickel, grafite" },
    ],
    colors: "Cromo, nero opaco PVD, bronzo, rame, oro spazzolato, nickel, grafite",
    features: ["Geometrie pulite", "6 finiture Emozioni", "Gamma completa", "Made in Italy"],
  },
  "Fiore — Primavera": {
    name: "Primavera",
    brand: "Fiore",
    segment: "Design",
    description:
      "Collezione che usa il colore come firma. Toni pastello per sfumature delicate e colori vivaci per personalità forti. Haute couture applicata alla rubinetteria.",
    highlight: "Il colore come firma — pastello o vivace, haute couture per il bagno",
    specs: [
      { label: "Materiale", value: "Ottone con rivestimento colorato" },
      { label: "Cartuccia", value: "Ceramica di precisione" },
      { label: "Finitura", value: "Verniciatura opaca e lucida multicolore" },
      { label: "Aeratore", value: "Con limitatore di portata" },
      { label: "Attacchi", value: "Standard 3/8\"" },
      { label: "Gamma", value: "Lavabo, bidet, doccia incasso" },
    ],
    colors: "Rosa, azzurro, verde menta, giallo, rosso, verde, bianco opaco, nero opaco",
    features: ["Finitura colorata", "Pastello e vivaci", "Haute couture", "Made in Italy"],
  },
  "Fiore — XS": {
    name: "XS",
    brand: "Fiore",
    segment: "Moderna",
    description:
      "Miscelatori dalle linee geometriche essenziali e squadrate per il bagno contemporaneo. Disponibile nella variante XS Sky con bocca a cascata.",
    highlight: "Geometrie squadrate essenziali — variante Sky con bocca a cascata",
    specs: [
      { label: "Materiale", value: "Ottone cromato" },
      { label: "Cartuccia", value: "Ceramica Ø 35 mm" },
      { label: "Design", value: "Geometrico squadrato" },
      { label: "Variante", value: "XS Sky con bocca a cascata" },
      { label: "Aeratore", value: "Anticalcare con risparmio idrico" },
      { label: "Gamma", value: "Lavabo, bidet, vasca, doccia" },
    ],
    colors: "Cromo lucido, nero opaco, nickel spazzolato",
    features: ["Squadrate essenziali", "Cascata XS Sky", "Compatto", "Risparmio idrico"],
  },
  "Fiore — Doria": {
    name: "Doria",
    brand: "Fiore",
    segment: "Classica",
    description:
      "Serie classica in ottone cromato per bagni dal gusto tradizionale. Linee morbide e proporzioni armoniose con leva ergonomica e finitura brillante.",
    highlight: "Eleganza classica — linee morbide, finitura cromo brillante",
    specs: [
      { label: "Materiale", value: "Ottone cromato" },
      { label: "Cartuccia", value: "Ceramica Ø 40 mm" },
      { label: "Leva", value: "Ergonomica arrotondata" },
      { label: "Aeratore", value: "Anticalcare" },
      { label: "Attacchi", value: "Flessibili 3/8\"" },
      { label: "Gamma", value: "Lavabo, bidet, vasca" },
    ],
    colors: "Cromo lucido",
    features: ["Design classico", "Leva ergonomica", "Cromo brillante", "Made in Italy"],
  },
  "Fiore — Kima": {
    name: "Kima",
    brand: "Fiore",
    segment: "Moderna",
    description:
      "Design sinuoso e organico con corpo affusolato. Cartuccia ceramica di ultima generazione per controllo preciso di portata e temperatura.",
    highlight: "Design sinuoso e organico — corpo affusolato, controllo preciso",
    specs: [
      { label: "Materiale", value: "Ottone cromato" },
      { label: "Cartuccia", value: "Ceramica di ultima generazione" },
      { label: "Design", value: "Corpo affusolato sinuoso" },
      { label: "Aeratore", value: "Con limitatore di portata" },
      { label: "Attacchi", value: "Flessibili 3/8\"" },
      { label: "Gamma", value: "Lavabo, bidet, vasca, cucina" },
    ],
    colors: "Cromo lucido, cromo satinato",
    features: ["Organico sinuoso", "Affusolato ergonomico", "Risparmio idrico", "Bagno e cucina"],
  },
};

/* ── CERAMICHE — Class Tile ──────────────────────────────────── */

export const ceramicheDetails: Record<string, ProductDetail> = {
  "Class Tile — Essenze": {
    name: "Essenze",
    brand: "Class Tile",
    segment: "Premium",
    description:
      "Gres porcellanato effetto legno che riproduce fedelmente venature e matericità delle essenze naturali. Adatto per interni ed esterni, certificato LEED con minimo 40% materiale riciclato.",
    highlight: "Effetto legno autentico — gres per interni ed esterni, certificato LEED",
    specs: [
      { label: "Materiale", value: "Gres porcellanato smaltato" },
      { label: "Effetto", value: "Legno naturale" },
      { label: "Formati", value: "20×122, 15×60, 30×122 cm" },
      { label: "Spessore", value: "9 mm" },
      { label: "Utilizzo", value: "Pavimento e rivestimento, interno ed esterno" },
      { label: "Certificazioni", value: "LEED, Made in Italy" },
    ],
    colors: "Vaniglia, Cannella, Sandalo, Gelsomino",
    features: ["Effetto legno", "Rettificato", "Resistente al gelo", "LEED"],
  },
  "Class Tile — Castlestone": {
    name: "Castlestone",
    brand: "Class Tile",
    segment: "Premium",
    description:
      "Gres ispirato alla pietra dei castelli rinascimentali francesi. Tre formati modulari e tre colori di tendenza. Disponibile anche in versione 20 mm per esterni.",
    highlight: "Pietra rinascimentale — 3 formati modulari, disponibile 20 mm esterno",
    specs: [
      { label: "Materiale", value: "Gres porcellanato" },
      { label: "Effetto", value: "Pietra dei castelli rinascimentali" },
      { label: "Formati", value: "90×60, 60×60, 30×60 cm" },
      { label: "Spessore", value: "9 mm interno, 20 mm esterno" },
      { label: "Superficie", value: "Naturale antiscivolo" },
      { label: "Certificazioni", value: "LEED, Made in Italy" },
    ],
    colors: "Ivory, Beige, Gray",
    features: ["3 formati modulari", "Versione 20 mm esterno", "Antiscivolo R10", "LEED"],
  },
  "Class Tile — MyWood": {
    name: "MyWood",
    brand: "Class Tile",
    segment: "Contemporanea",
    description:
      "Gres effetto legno dal formato contemporaneo con sfumature e nodi del legno naturale. Resa cromatica calda in tonalità dal chiaro allo scuro.",
    highlight: "Legno contemporaneo — resa cromatica calda, formato moderno",
    specs: [
      { label: "Materiale", value: "Gres porcellanato smaltato" },
      { label: "Effetto", value: "Legno naturale con nodi" },
      { label: "Formato", value: "Listoni rettificati" },
      { label: "Spessore", value: "9 mm" },
      { label: "Utilizzo", value: "Pavimento interno residenziale" },
      { label: "Certificazioni", value: "LEED, Made in Italy" },
    ],
    colors: "Betulla, Ciliegio, Noce, Rovere, Teak",
    features: ["Resa cromatica realistica", "Listoni rettificati", "Facile manutenzione", "LEED"],
  },
  "Class Tile — Archè": {
    name: "Archè",
    brand: "Class Tile",
    segment: "Design",
    description:
      "Gres con nodi e venature naturali, versatile per contesti privati e pubblici. Spessore 20 mm ideale per pavimentazioni esterne con posa su erba, ghiaia o piedini.",
    highlight: "Versatilità naturale — 20 mm per esterno, posa su erba e ghiaia",
    specs: [
      { label: "Materiale", value: "Gres porcellanato" },
      { label: "Effetto", value: "Pietra naturale con venature" },
      { label: "Spessore", value: "20 mm" },
      { label: "Posa esterna", value: "Su erba, ghiaia, sabbia o piedini" },
      { label: "Superficie", value: "Antiscivolo R11" },
      { label: "Certificazioni", value: "LEED, Made in Italy" },
    ],
    colors: "Bianco, Beige, Grigio, Antracite",
    features: ["20 mm per esterno", "Posa a secco", "Antiscivolo R11", "Resistente al gelo"],
  },
  "Class Tile — Divina": {
    name: "Divina",
    brand: "Class Tile",
    segment: "Premium",
    description:
      "Gres effetto marmo con venature profonde che riproducono i marmi più pregiati. Superficie levigata lucida per pavimenti e rivestimenti interni di alta gamma.",
    highlight: "Effetto marmo pregiato — venature profonde, eleganza senza manutenzione",
    specs: [
      { label: "Materiale", value: "Gres porcellanato levigato" },
      { label: "Effetto", value: "Marmo pregiato" },
      { label: "Formati", value: "60×60, 30×60 cm" },
      { label: "Spessore", value: "9 mm" },
      { label: "Superficie", value: "Levigata lucida" },
      { label: "Certificazioni", value: "LEED, Made in Italy" },
    ],
    colors: "Bianco Statuario, Grigio Carnico, Crema Marfil, Nero Marquina",
    features: ["Effetto marmo realistico", "Levigata lucida", "Resistente a macchie", "LEED"],
  },
  "Class Tile — Calcarea": {
    name: "Calcarea",
    brand: "Class Tile",
    segment: "Contemporanea",
    description:
      "Gres effetto pietra calcarea con texture uniforme e antiscivolo, perfetto per pavimentazioni esterne. Spessore 20 mm per terrazze, bordi piscina e percorsi pedonali.",
    highlight: "Pietra calcarea — 20 mm antiscivolo per esterno, bordi piscina",
    specs: [
      { label: "Materiale", value: "Gres porcellanato" },
      { label: "Effetto", value: "Pietra calcarea naturale" },
      { label: "Spessore", value: "20 mm" },
      { label: "Superficie", value: "Strutturata antiscivolo" },
      { label: "Utilizzo", value: "Esterno: terrazze, piscine, percorsi" },
      { label: "Certificazioni", value: "Antiscivolo R11, LEED, Made in Italy" },
    ],
    colors: "Avorio, Sabbia, Grigio chiaro, Grigio scuro",
    features: ["20 mm per esterno", "Antiscivolo R11", "Bordi piscina", "Resistente al gelo"],
  },
};

/* ── PARQUET — Ali Parquet ───────────────────────────────────── */

export const parquetDetails: Record<string, ProductDetail> = {
  "Ali Parquet — PreMass": {
    name: "PreMass",
    brand: "Ali Parquet",
    segment: "Premium",
    description:
      "Parquet prefinito in legno 100% massello monostrato, pronto per la posa. Zero colle, zero emissioni nocive. Disponibile in rovere con otto varianti cromatiche sulla venatura profonda di ogni elemento.",
    highlight: "100% massello monostrato — zero colle, zero emissioni, pronto posa",
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
  "Ali Parquet — ExtraMass": {
    name: "ExtraMass",
    brand: "Ali Parquet",
    segment: "Premium",
    description:
      "Il grande formato della linea massello: tavole larghe e lunghe in massello monostrato, con spazzolatura e bisellatura per un effetto materico e contemporaneo.",
    highlight: "Grande formato massello — tavole larghe, spazzolato, effetto materico",
    specs: [
      { label: "Struttura", value: "Monostrato 100% legno massello" },
      { label: "Spessore", value: "14 mm" },
      { label: "Dimensioni", value: "600–1400 × 120–140 mm" },
      { label: "Lavorazione", value: "Spazzolato bisellato" },
      { label: "Finitura", value: "Vernice opaca ecologica" },
      { label: "Posa", value: "Incollata, prefinito pronto posa" },
    ],
    colors: "Rovere naturale, sbiancato, grigio, miele, tabacco, caffè, wengé, anticato",
    features: ["Grande formato", "Spazzolatura materica", "100% massello", "8 varianti"],
  },
  "Ali Parquet — SuperPreMass": {
    name: "SuperPreMass",
    brand: "Ali Parquet",
    segment: "Premium",
    description:
      "Formato intermedio della linea massello: tavole più lunghe e larghe del PreMass con spessore 14 mm per maggiore robustezza. Lavorazione liscia bisellata.",
    highlight: "Formato intermedio 14 mm — più lungo e largo, massello robusto",
    specs: [
      { label: "Struttura", value: "Monostrato 100% legno massello" },
      { label: "Spessore", value: "14 mm" },
      { label: "Dimensioni", value: "600–1000 × 70–90 mm" },
      { label: "Lavorazione", value: "Liscio bisellato" },
      { label: "Finitura", value: "Vernice opaca ecologica" },
      { label: "Posa", value: "Incollata, prefinito pronto posa" },
    ],
    colors: "Rovere naturale, sbiancato, grigio, miele, tabacco, caffè, wengé, anticato",
    features: ["14 mm rinforzato", "Formato intermedio", "Restaurabile", "8 varianti"],
  },
  "Ali Parquet — Mass": {
    name: "Mass",
    brand: "Ali Parquet",
    segment: "Classica",
    description:
      "Parquet tradizionale in legno massello grezzo per posa a spina italiana, ungherese, francese o mosaico. Disponibile in rovere, noce, teak, acero, doussiè, iroko, jatobà e frassino.",
    highlight: "Tradizionale grezzo — spina italiana/ungherese, 8+ essenze",
    specs: [
      { label: "Struttura", value: "Massello tradizionale grezzo" },
      { label: "Spessore", value: "10–14 mm" },
      { label: "Essenze", value: "Rovere, noce, teak, acero, doussiè, iroko, jatobà, frassino" },
      { label: "Pose", value: "Spina italiana, ungherese, francese, mosaico" },
      { label: "Finitura", value: "Da levigare e verniciare in opera" },
      { label: "Produzione", value: "Made in Italy dal 1941" },
    ],
    colors: "Colore naturale di ogni essenza",
    features: ["8+ essenze", "Posa a disegno", "Restaurabile", "Tradizione dal 1941"],
  },
  "Ali Parquet — Legni del Titano": {
    name: "Legni del Titano",
    brand: "Ali Parquet",
    segment: "Design",
    description:
      "Parquet multistrato premium con lamella nobile di elevato spessore. Oltre 20 varianti cromatiche in molteplici formati, con composizioni asimmetriche personalizzabili.",
    highlight: "Multistrato premium — 20+ colori, composizioni asimmetriche personalizzabili",
    specs: [
      { label: "Struttura", value: "Multistrato con lamella nobile alto spessore" },
      { label: "Essenze", value: "Rovere, noce, wengé" },
      { label: "Varianti", value: "Oltre 20 colorazioni" },
      { label: "Formati", value: "Molteplici, classico e contemporaneo" },
      { label: "Personalizzazione", value: "Giunto, composizioni asimmetriche" },
      { label: "Stabilità", value: "Multistrato per massima stabilità" },
    ],
    colors: "Rovere naturale, sbiancato, grigio, miele, tabacco, fumé, wengé, noce e 20+ varianti",
    features: ["Lamella nobile", "20+ varianti", "Composizioni asimmetriche", "Stabilità dimensionale"],
  },
  "Ali Parquet — Woodì": {
    name: "Woodì",
    brand: "Ali Parquet",
    segment: "Contemporanea",
    description:
      "Parquet multistrato prefinito con gamma attuale e formati contemporanei. Stabilità superiore, ideale per posa su riscaldamento a pavimento.",
    highlight: "Multistrato contemporaneo — ideale su riscaldamento a pavimento",
    specs: [
      { label: "Struttura", value: "Multistrato prefinito con nobile in legno" },
      { label: "Essenze", value: "Rovere, noce e altre selezionate" },
      { label: "Formati", value: "Plancia larga e lunga contemporanea" },
      { label: "Finitura", value: "Verniciata o oliata, opaca o satinata" },
      { label: "Posa", value: "Incollata o flottante" },
      { label: "Compatibilità", value: "Riscaldamento a pavimento" },
    ],
    colors: "Rovere naturale, sbiancato, grigio, fumé, noce europeo, noce americano",
    features: ["Riscaldamento a pavimento", "Posa incollata o flottante", "Stabilità superiore", "Gamma attuale"],
  },
};
