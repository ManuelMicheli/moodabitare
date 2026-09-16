import type { ProductDetail } from "../product-details";

/* ── CUCINE SU MISURA — Atra Cucine · Essebi Cucine ────────────── */

export const cucineDetails: Record<string, ProductDetail> = {
  /* Atra Cucine */
  "Atra — System22": {
    name: "System22",
    brand: "Atra Cucine",
    segment: "Moderna",
    description:
      "Il sistema più versatile di Atra: un unico progetto che accoglie materici, legni, PET lucidi e opachi, metallici e Fenix. Composizioni con isola, penisola o lineari che si adattano a ogni stile, dal loft industriale al living contemporaneo.",
    highlight: "Un sistema, oltre 60 finiture — dai materici al PET metal",
    specs: [
      { label: "Materiali anta", value: "Melaminico, laminato HPL, PET lucido, PET opaco, PET Metal, Fenix" },
      { label: "Effetti", value: "Talco, Calce, Malta, Skin, legni naturali, metallo Doha" },
      { label: "Finiture", value: "Superlucido, supermat, metallizzato" },
      { label: "Composizioni", value: "Lineare, angolare, con isola e penisola" },
      { label: "Produzione", value: "Made in Italy — Cordignano (TV)" },
    ],
    colors: "Talco bianco/grigio/visone, Malta grafite, Rovere biondo, Noce vogue, PET salvia, bordeaux, bronze, champagne, Fenix Bianco Kos, Grigio Londra, Verde Comodoro, Blu Fes",
    features: ["60+ finiture", "PET lucido e opaco", "Fenix anti-impronta", "Metal Doha"],
  },
  "Atra — Shine": {
    name: "Shine",
    brand: "Atra Cucine",
    segment: "Design",
    description:
      "Ante in GLAKS®, il vetro organico di nuova generazione che unisce polvere di silicio e PMMA trasparente. L'estetica del vetro, ma infrangibile, più leggera, resistente a graffi, agenti chimici, raggi UV e sbalzi di temperatura.",
    highlight: "Effetto vetro GLAKS® — infrangibile, antigraffio, anti-impronta",
    specs: [
      { label: "Anta", value: "GLAKS® — 2-3 mm di PMMA con polvere di vetro su pannello FSC®/PEFC" },
      { label: "Finiture", value: "Lucida e superopaca anti-impronta, Metallo Liquido" },
      { label: "Resistenza", value: "Infrangibile, antigraffio, termoresistente oltre 90 °C" },
      { label: "Igiene", value: "Antibatterico, basse emissioni VOC, non ingiallisce" },
      { label: "Sostenibilità", value: "Materiale riciclabile e atossico" },
      { label: "Produzione", value: "Made in Italy — Cordignano (TV)" },
    ],
    colors: "35+ tinte: Bianco, Talco, Tortora, Argilla, Grigio Reale, Nero, Blu Indigo, Verde Salvia, Verde Foresta, Rosso Veneziano; Metallo Liquido Argento, Ottone, Rame",
    features: ["Vetro organico", "Infrangibile", "Superopaco anti-impronta", "Metallo Liquido"],
  },
  "Atra — Lab": {
    name: "Lab",
    brand: "Atra Cucine",
    segment: "Moderna",
    description:
      "Cucina dal carattere essenziale che gioca con le superfici effetto pietra e marmo in laminato HPL e con il Fenix nero. Volumi netti e piani lavoro importanti per una cucina da vivere come un laboratorio creativo.",
    highlight: "Effetto marmo e pietra in HPL — carattere materico e resistenza",
    specs: [
      { label: "Anta", value: "Laminato HPL, Fenix" },
      { label: "Effetti", value: "Marmo Statuario, Patagonia, Botticino, Texstone" },
      { label: "Composizioni", value: "Lineare, angolare, con isola" },
      { label: "Produzione", value: "Made in Italy — Cordignano (TV)" },
    ],
    colors: "Marmo Statuario, Patagonia, Botticino Antique, Texstone Gray, Texstone Wraky, Bianco Shiky, Fenix Nero Ingo",
    features: ["Effetto marmo", "HPL resistente", "Fenix Nero Ingo", "Design essenziale"],
  },
  "Atra — Avantgarde": {
    name: "Avantgarde",
    brand: "Atra Cucine",
    segment: "Moderna",
    description:
      "Linea contemporanea che accosta il calore dei roveri melaminici alla morbidezza tattile del Fenix. Ante pulite e composizioni aperte verso il living per una cucina elegante e facile da vivere.",
    highlight: "Rovere e Fenix — calore del legno, superficie soft-touch",
    specs: [
      { label: "Anta", value: "Melaminico effetto legno, Fenix" },
      { label: "Superficie Fenix", value: "Superopaca, anti-impronta, soft-touch" },
      { label: "Composizioni", value: "Lineare, angolare, con isola e penisola" },
      { label: "Produzione", value: "Made in Italy — Cordignano (TV)" },
    ],
    colors: "Rovere Effra, Rovere Tybrun, Fenix Castoro Ottawa, Fenix Bianco Kos, Fenix Grigio Londra",
    features: ["Roveri naturali", "Fenix soft-touch", "Anti-impronta", "Living integrato"],
  },
  "Atra — Essenza": {
    name: "Essenza",
    brand: "Atra Cucine",
    segment: "Moderna",
    description:
      "Il legno protagonista: ante in rovere nodato dalla venatura viva e naturale, per una cucina calda e autentica che porta in casa la materia del bosco con linee contemporanee.",
    highlight: "Rovere nodato — la naturalezza del legno in chiave moderna",
    specs: [
      { label: "Anta", value: "Finitura Rovere Nodato" },
      { label: "Stile", value: "Contemporaneo naturale" },
      { label: "Composizioni", value: "Lineare, angolare, con isola e penisola" },
      { label: "Produzione", value: "Made in Italy — Cordignano (TV)" },
    ],
    colors: "Rovere Nodato, abbinabile a tinte unite e top materici",
    features: ["Rovere nodato", "Venatura naturale", "Stile caldo", "Composizioni libere"],
  },
  "Atra — Intesa": {
    name: "Intesa",
    brand: "Atra Cucine",
    segment: "Classica",
    description:
      "Uno stile fusion di classico e moderno, di country e metropolitano. Materiali resistenti e ricca modularità per una cucina funzionale e abitabile: un'interpretazione contemporanea della sobrietà classica.",
    highlight: "Classico contemporaneo — frassino, decapé e colori pieni",
    specs: [
      { label: "Anta", value: "Finiture frassino, tinta unita e decapé" },
      { label: "Struttura", value: "Bianco" },
      { label: "Maniglie", value: "Eden, Intesa satinata, Intesa brunito" },
      { label: "Composizioni", value: "Lineare, angolare, con penisola" },
      { label: "Produzione", value: "Made in Italy — Cordignano (TV)" },
    ],
    colors: "Frassino mielato, Bianco, Crema, Bianco decapé, Crema decapé, Grigio muschio, Grigio fumo, Rosso, Nero",
    features: ["Stile fusion", "Finiture decapé", "Ricca modularità", "Maniglie classiche"],
  },
  "Atra — Maya": {
    name: "Maya",
    brand: "Atra Cucine",
    segment: "Classica",
    description:
      "Un ambiente raffinato ispirato alla natura: colori caldi e tenui, atmosfere accoglienti e tutto il calore del legno massello. Eclettica e dalla forte personalità, Maya lascia libera la creatività.",
    highlight: "Legno massello e tinte naturali — calore classico",
    specs: [
      { label: "Anta", value: "Legno massello" },
      { label: "Struttura", value: "Bianco" },
      { label: "Maniglie", value: "Intesa satinata o anticata" },
      { label: "Composizioni", value: "Lineare, angolare, con isola" },
      { label: "Produzione", value: "Made in Italy — Cordignano (TV)" },
    ],
    colors: "Bianco, Tortora, Canapa, Visone",
    features: ["Legno massello", "Tinte naturali", "Stile country chic", "Grande versatilità"],
  },

  /* Essebi Cucine */
  "Essebi — Materia": {
    name: "Materia",
    brand: "Essebi Cucine",
    segment: "Moderna",
    description:
      "Non solo tinte ma vere sensazioni tattili: 6 colori materici che portano calore e autenticità. Abbinabile al piano in gres della stessa tinta per un effetto monolitico e puro.",
    highlight: "6 finiture materiche — da toccare, con top in gres coordinato",
    specs: [
      { label: "Anta", value: "Conglomerato ligneo nobilitato termostrutturato" },
      { label: "Spessore", value: "22 mm" },
      { label: "Piano", value: "Gres in tinta con i frontali (opzionale)" },
      { label: "Composizioni", value: "Lineare, angolare, con isola e penisola" },
      { label: "Produzione", value: "Made in Italy" },
    ],
    colors: "Gesso, Calce, Tufo, Agata, Limo, Coccio",
    features: ["Superficie materica", "Top in gres coordinato", "22 mm", "Effetto monolitico"],
  },
  "Essebi — Gloss": {
    name: "Gloss",
    brand: "Essebi Cucine",
    segment: "Design",
    description:
      "Superfici laccate lucide per il massimo dell'eleganza. Ante in MDF con bordi stondati sui 4 lati, laccatura lucida spazzolata all'esterno e laccato lucido diretto all'interno per un aspetto impeccabile.",
    highlight: "Laccato lucido spazzolato — luce e raffinatezza",
    specs: [
      { label: "Anta", value: "MDF laccato lucido spazzolato" },
      { label: "Spessore", value: "22 mm, bordi stondati 4 lati (r = 2 mm)" },
      { label: "Interno anta", value: "Laccato lucido diretto" },
      { label: "Finiture", value: "Bianco lucido o colori RAL lucidi" },
      { label: "Produzione", value: "Made in Italy" },
    ],
    colors: "Bianco lucido, intera mazzetta RAL lucida",
    features: ["Laccato lucido", "Bordi stondati", "Colori RAL", "Luminosità"],
  },
  "Essebi — Seta": {
    name: "Seta",
    brand: "Essebi Cucine",
    segment: "Moderna",
    description:
      "Eleganza senza tempo con frontali laccati opachi di alta qualità. Disponibile nei raffinati bianco, canapa e carbone o in tutta la gamma di tonalità RAL opache.",
    highlight: "Laccato opaco — stile contemporaneo senza tempo",
    specs: [
      { label: "Anta", value: "Laccato opaco" },
      { label: "Finiture", value: "Bianco, Canapa, Carbone, RAL opaco" },
      { label: "Composizioni", value: "Lineare, angolare, con isola e penisola" },
      { label: "Produzione", value: "Made in Italy" },
    ],
    colors: "Bianco, Canapa, Carbone, colori RAL opachi",
    features: ["Laccato opaco", "Colori RAL", "Eleganza sobria", "Durata nel tempo"],
  },
  "Essebi — Astro": {
    name: "Astro",
    brand: "Essebi Cucine",
    segment: "Moderna",
    description:
      "Un universo di possibilità con una ricca varietà di nobilitati melaminici: dai toni chiari a quelli profondi, fino ai legni caldi. Composizioni dinamiche per una cucina in cui creare e condividere.",
    highlight: "12 finiture tra tinte unite e legni — versatilità totale",
    specs: [
      { label: "Anta", value: "Nobilitato melaminico barrierato, classe E1" },
      { label: "Spessore", value: "22 mm" },
      { label: "Finiture", value: "Poro evo (tinte legno), simil-laccato perla" },
      { label: "Composizioni", value: "Lineare, angolare, con isola e penisola" },
      { label: "Produzione", value: "Made in Italy" },
    ],
    colors: "Bianco, Grigio, Perla, Tortora, Timo, Fumo, Antracite, Rovere vintage, Ghianda, Quercia, Noce chiaro, Noce scuro",
    features: ["Melaminico E1", "Effetto legno", "Tinte unite", "Grande versatilità"],
  },
  "Essebi — Jazz": {
    name: "Jazz",
    brand: "Essebi Cucine",
    segment: "Classica",
    description:
      "Ante telaio in 5 pezzi per uno stile contemporaneo dal gusto classico. In PET bianco, laminato Rovere Malto o nella versione Color laccata opaca in qualsiasi tinta RAL o NCS.",
    highlight: "Anta telaio 5 pezzi — PET, rovere o laccato in ogni colore",
    specs: [
      { label: "Anta", value: "Telaio 5 pezzi in MDF rivestito PET o laminato" },
      { label: "Spessore", value: "22 mm" },
      { label: "Certificazioni", value: "Classe E1, CARB2, incollaggio poliuretanico" },
      { label: "Versione Color", value: "Laccato opaco RAL, NCS e oltre" },
      { label: "Produzione", value: "Made in Italy" },
    ],
    colors: "Bianco PET opaco, Malto Rovere laminato, laccato opaco RAL/NCS",
    features: ["Anta telaio", "PET riciclabile", "Colori illimitati", "Stile shaker"],
  },
  "Essebi — Just24": {
    name: "Just24",
    brand: "Essebi Cucine",
    segment: "Moderna",
    description:
      "Estetica e innovazione in un unico modello: tinte unite, legno, cemento e pietra si fondono in un'unica collezione con finiture all'avanguardia e infinite possibilità di personalizzazione.",
    highlight: "Marmo, legno, cemento e tinte unite — in un solo modello",
    specs: [
      { label: "Anta", value: "Nobilitato melaminico barrierato, classe E1" },
      { label: "Spessore", value: "22 mm" },
      { label: "Effetti", value: "Marmo, pietra, cemento, legno, cannettato" },
      { label: "Composizioni", value: "Lineare, angolare, con isola e penisola" },
      { label: "Produzione", value: "Made in Italy" },
    ],
    colors: "Statuario, Botticino, Kaspio, Oro, Luna, Piombo, Riso, Cobalto, Dark, Mandorla, Cannettato, Novello, Nordico, Nocciola",
    features: ["Effetto marmo", "Cannettato", "14 finiture", "Massima personalizzazione"],
  },
  "Essebi — Nadir": {
    name: "Nadir",
    brand: "Essebi Cucine",
    segment: "Design",
    description:
      "L'essenza del design contemporaneo: ante laccate lucide o opache con profilo maniglia integrato di testa, per linee pulite e un'apertura pratica e fluida.",
    highlight: "Maniglia integrata di testa — laccato lucido o opaco",
    specs: [
      { label: "Anta", value: "MDF laccato spazzolato" },
      { label: "Spessore", value: "22 mm, bordi stondati 3 lati (r = 2 mm)" },
      { label: "Apertura", value: "Profilo maniglia integrato di testa" },
      { label: "Finiture", value: "RAL lucido o RAL opaco" },
      { label: "Produzione", value: "Made in Italy" },
    ],
    colors: "Bianco e intera mazzetta RAL, lucido o opaco",
    features: ["Maniglia integrata", "Laccato RAL", "Lucido o opaco", "Linee pulite"],
  },
  "Essebi — Azimut": {
    name: "Azimut",
    brand: "Essebi Cucine",
    segment: "Moderna",
    description:
      "Stile metropolitano e seducente con finiture originali. Superficie con texture poro a registro 3D che dona profondità e un tocco naturale, bordi in ABS e incollaggio poliuretanico per una resistenza superiore.",
    highlight: "Poro a registro 3D — effetto legno realistico al tatto",
    specs: [
      { label: "Anta", value: "Conglomerato ligneo nobilitato" },
      { label: "Spessore", value: "22 mm" },
      { label: "Superficie", value: "Texture poro a registro 3D" },
      { label: "Bordi", value: "ABS 1 mm, incollaggio poliuretanico" },
      { label: "Produzione", value: "Made in Italy" },
    ],
    colors: "Naturale, Noce, Bruciato, Champagne, Primavera, Muschio, Terra",
    features: ["Poro a registro 3D", "Bordi ABS", "Stile urbano", "Alta resistenza"],
  },
  "Essebi — York e J-York": {
    name: "York e J-York",
    brand: "Essebi Cucine",
    segment: "Moderna",
    description:
      "Stile urban morbido e avvolgente con frontali in MDF rivestiti in PET riciclabile al 100%. Nella versione J-York con presa a J integrata. Design, sostenibilità e praticità quotidiana.",
    highlight: "PET 100% riciclabile — 18 finiture opache, lucide e liquide",
    specs: [
      { label: "Anta", value: "MDF rivestito in PET, retro melaminico in tinta" },
      { label: "Spessore", value: "22 mm" },
      { label: "Certificazioni", value: "Classe E1, CARB2, incollaggio poliuretanico" },
      { label: "Versioni", value: "York (liscia) e J-York (presa a J)" },
      { label: "Sostenibilità", value: "PET riciclabile al 100%" },
      { label: "Produzione", value: "Made in Italy" },
    ],
    colors: "Opachi: Bianco, Grigio, Lino, Cashmere, Moro, Salvia, Cipria, Amarone, Blu, Antracite, Nero; Oro e Bronzo liquido; Lucidi: Bianco, Grigio, Cappuccino",
    features: ["PET riciclabile", "Presa a J", "Finiture liquide", "Eco-sostenibile"],
  },
  "Essebi — Stella": {
    name: "Stella",
    brand: "Essebi Cucine",
    segment: "Moderna",
    description:
      "Le ultime tendenze in cucina: ispirazioni creative, materiali tecnologici ed elettrodomestici innovativi per una cucina dal carattere forte, con finiture effetto cemento e spatolato.",
    highlight: "Effetto cemento e spatolato — carattere deciso",
    specs: [
      { label: "Anta", value: "Conglomerato ligneo nobilitato termostrutturato" },
      { label: "Spessore", value: "22 mm" },
      { label: "Certificazioni", value: "Classe E1, CARB2, incollaggio poliuretanico" },
      { label: "Composizioni", value: "Lineare, angolare, con isola e penisola" },
      { label: "Produzione", value: "Made in Italy" },
    ],
    colors: "Bianco spatolato, Cemento, Sabbia, Cemento visone, Antracite",
    features: ["Effetto cemento", "Termostrutturato", "Stile industrial", "Alta resistenza"],
  },
  "Essebi — Alba": {
    name: "Alba",
    brand: "Essebi Cucine",
    segment: "Classica",
    description:
      "La cucina classica giovane e informale: telaio in frassino e pannelli impiallacciati a vena orizzontale, valorizzati da accostamenti cromatici nuovi e di tendenza. Tradizione con un tocco di modernità.",
    highlight: "Frassino a vena orizzontale — classica, giovane e luminosa",
    specs: [
      { label: "Anta", value: "Telaio in frassino 103 × 23 mm" },
      { label: "Pannello", value: "Frassino impiallacciato a vena orizzontale" },
      { label: "Finiture", value: "Bianco laccato, laccato RAL opaco, decapé color" },
      { label: "Composizioni", value: "Lineare, angolare, con isola" },
      { label: "Produzione", value: "Made in Italy" },
    ],
    colors: "Laccato bianco, laccato RAL opaco, decapé color",
    features: ["Telaio in frassino", "Stile classico", "Decapé", "Colori di tendenza"],
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
