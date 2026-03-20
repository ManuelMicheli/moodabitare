import type { ProductDetail } from "../product-details";

/* ── PORTONCINI — Oknoplast Tenvis / Kopen KDS 100 ──────────── */

export const portoncinoDetails: Record<string, ProductDetail> = {
  "Oknoplast — Tenvis Design Pro": {
    name: "Tenvis Design Pro",
    brand: "Oknoplast",
    segment: "Top di gamma",
    description:
      "Portoncino in alluminio dal design ultra-moderno: la maniglia tradizionale è sostituita da un'elegante gola incassata nel pannello con retroilluminazione LED opzionale. Pannelli in alluminio con riempimento in polistirene estruso XPS per isolamento termico e resistenza al fuoco eccezionali.",
    highlight: "Maniglia a gola integrata con LED — design purista, Ud 0,84",
    specs: [
      { label: "Sistema", value: "Tenvis — alluminio a taglio termico" },
      { label: "Trasmittanza Ud", value: "fino a 0,84 W/m²K" },
      { label: "Pannello", value: "61 o 76 mm con XPS" },
      { label: "Profilo", value: "75 mm" },
      { label: "Sicurezza", value: "Blocco automatico 3 punti + rosetta anti-scasso" },
      { label: "Smart Home", value: "Smartphone, telecomando, lettore impronte" },
    ],
    colors: "RAL standard, metallizzato, Renolit/Decoral effetto legno, Timeless, bicolore",
    features: ["Maniglia a gola integrata retroilluminabile LED", "Pannello XPS resistente al fuoco", "Chiusura automatica 3 punti", "Smart Home compatibile"],
  },
  "Oknoplast — Tenvis Black Design": {
    name: "Tenvis Black Design",
    brand: "Oknoplast",
    segment: "Design",
    description:
      "Portoncini in alluminio con inserti decorativi in nero anodizzato che creano un contrasto magnetico con le finiture effetto legno o le tonalità chiare del pannello. Il nero enfatizza le linee geometriche, donando all'ingresso un fascino contemporaneo e deciso.",
    highlight: "Inserti black anodizzati su alluminio — contrasto magnetico",
    specs: [
      { label: "Sistema", value: "Tenvis — alluminio a taglio termico" },
      { label: "Trasmittanza Ud", value: "fino a 0,84 W/m²K" },
      { label: "Pannello", value: "61 o 76 mm con XPS" },
      { label: "Inserti", value: "Nero anodizzato" },
      { label: "Sicurezza", value: "Blocco automatico 3 punti + rosetta anti-scasso" },
      { label: "Modelli", value: "12 varianti (Black 1 – Black 12)" },
    ],
    colors: "Effetto legno (rovere, noce, mogano), grigi RAL, bicolore — oltre 30 finiture",
    features: ["Decorazioni nero anodizzato", "Effetto legno naturale", "Chiusura automatica 3 punti", "Configuratore online Tenvis"],
  },
  "Oknoplast — Tenvis Intarsio": {
    name: "Tenvis Intarsio",
    brand: "Oknoplast",
    segment: "Premium",
    description:
      "Portoncini in alluminio con eleganti intarsi in acciaio inox e inserti in vetro che generano affascinanti giochi di luce. Ogni modello è pensato per catturare lo sguardo con un design di alto livello che unisce artigianalità e tecnologia.",
    highlight: "Intarsi in acciaio inox e vetro — giochi di luce unici",
    specs: [
      { label: "Sistema", value: "Tenvis — alluminio a taglio termico" },
      { label: "Trasmittanza Ud", value: "fino a 0,84 W/m²K" },
      { label: "Pannello", value: "61 o 76 mm con XPS" },
      { label: "Vetrocamera", value: "50 o 64 mm" },
      { label: "Decorazioni", value: "Acciaio inox" },
      { label: "Sicurezza", value: "Blocco automatico 3 punti + rosetta anti-scasso" },
    ],
    colors: "RAL opachi, metallizzati, effetto legno, Corten, Concrete, bicolore",
    features: ["Intarsi in acciaio inox", "Inserti vetrocamera", "Chiusura automatica 3 punti", "Smart Home compatibile"],
  },
  "Oknoplast — Tenvis ECO": {
    name: "Tenvis ECO",
    brand: "Oknoplast",
    segment: "Classic",
    description:
      "Portoncino in alluminio dal design sobrio e minimale, pensato per chi cerca prestazioni elevate a un prezzo accessibile. L'estetica pulita ed essenziale si adatta a qualsiasi contesto architettonico, senza rinunciare ai vantaggi della linea Tenvis.",
    highlight: "Qualità Tenvis al miglior prezzo — design essenziale, Ud 0,84",
    specs: [
      { label: "Sistema", value: "Tenvis — alluminio a taglio termico" },
      { label: "Trasmittanza Ud", value: "fino a 0,84 W/m²K" },
      { label: "Pannello", value: "61 o 76 mm con XPS" },
      { label: "Profilo", value: "75 mm" },
      { label: "Sicurezza", value: "Blocco automatico 3 punti + rosetta anti-scasso" },
      { label: "Modelli", value: "15+ varianti" },
    ],
    colors: "RAL 9016, grigi, Renolit/Decoral, Timeless, bicolore",
    features: ["Design minimale essenziale", "Modelli con o senza vetro", "Chiusura automatica 3 punti", "Rapporto qualità-prezzo ottimale"],
  },
  "Kopen — Vitrum": {
    name: "Vitrum",
    brand: "Kopen",
    segment: "Design",
    description:
      "Portoncino di design in cui il vetro diventa protagonista assoluto. Le ampie superfici vetrate conferiscono luminosità e raffinatezza, mentre il sistema KDS 100 in alluminio a taglio termico garantisce isolamento e sicurezza ai massimi livelli.",
    highlight: "Il vetro come protagonista assoluto — luminosità, KDS 100",
    specs: [
      { label: "Sistema", value: "KDS 100 — alluminio a taglio termico" },
      { label: "Trasmittanza Ud", value: "da 0,75 a 0,90 W/m²K" },
      { label: "Telaio", value: "84 mm" },
      { label: "Anta", value: "98 / 102 / 121 mm" },
      { label: "Classe antieffrazione", value: "RC2, RC3 o RC4 certificata" },
      { label: "Produzione", value: "100% Made in Italy, su misura" },
    ],
    colors: "70 colori standard, bicolore, rivestimenti in alluminio, legno, cemento o ceramica",
    features: ["Ampie superfici vetrate", "Serratura meccanica, automatica o biometrica", "Fino a RC4", "Su misura"],
  },
  "Kopen — Materika": {
    name: "Materika",
    brand: "Kopen",
    segment: "Top di gamma",
    description:
      "Portoncino esclusivo in cui materiali tradizionali e innovativi si fondono: rivestimenti in cemento, ceramica, pietra o metallo si integrano con la struttura in alluminio KDS 100. Ogni esemplare è unico e realizzato su misura.",
    highlight: "Materia come icona di stile — cemento, ceramica, pietra su alluminio",
    specs: [
      { label: "Sistema", value: "KDS 100 — alluminio a taglio termico" },
      { label: "Trasmittanza Ud", value: "da 0,75 a 0,90 W/m²K" },
      { label: "Telaio", value: "84 mm" },
      { label: "Classe antieffrazione", value: "RC2, RC3 o RC4 certificata" },
      { label: "Rivestimenti", value: "Cemento, ceramica, pietra, metallo, legno" },
      { label: "Produzione", value: "100% Made in Italy, su misura" },
    ],
    colors: "70 colori standard, bicolore, materiali speciali (cemento, ceramica, pietra, Corten)",
    features: ["Rivestimenti in materiali pregiati", "Serratura biometrica opzionale", "Formato XL fino a 2.800 mm", "Su misura"],
  },
  "Kopen — Pure": {
    name: "Pure",
    brand: "Kopen",
    segment: "Design",
    description:
      "Portoncino dal carattere minimale ed elegante, in cui la ricerca del dettaglio costruttivo si traduce in superfici pulite e linee essenziali. La struttura KDS 100 è completamente nascosta, lasciando in primo piano la purezza del pannello.",
    highlight: "Purezza minimale — linee essenziali, dettaglio perfetto",
    specs: [
      { label: "Sistema", value: "KDS 100 — alluminio a taglio termico" },
      { label: "Trasmittanza Ud", value: "da 0,75 a 0,90 W/m²K" },
      { label: "Telaio", value: "84 mm" },
      { label: "Anta", value: "98 / 102 / 121 mm" },
      { label: "Classe antieffrazione", value: "RC2, RC3 o RC4 certificata" },
      { label: "Produzione", value: "100% Made in Italy, su misura" },
    ],
    colors: "70 colori standard, bicolore, finiture opache e metallizzate, legno interno",
    features: ["Design minimale", "Serratura biometrica opzionale", "Fino a RC4", "Su misura"],
  },
};

/* ── PERSIANE — Erreci / Persit / Korus ──────────────────────── */

export const persianeDetails: Record<string, ProductDetail> = {
  "Erreci — Maxima Plus": {
    name: "Maxima Plus",
    brand: "Erreci",
    segment: "Sicurezza blindata",
    description:
      "Persiana blindata in alluminio con profili maggiorati che nascondono una griglia in acciaio inox completamente invisibile dall'esterno. Serratura a 3 punti con cilindro europeo antiperforazione. Certificata Classe 3 antieffrazione dall'Istituto Giordano.",
    highlight: "Blindatura nascosta in acciaio inox — Classe 3 antieffrazione certificata",
    specs: [
      { label: "Materiale", value: "Alluminio estruso maggiorato + blindatura acciaio inox" },
      { label: "Classe antieffrazione", value: "Classe 3 (certificata Istituto Giordano)" },
      { label: "Serratura", value: "Ad infilare, 3 punti di chiusura, corsa 25 mm" },
      { label: "Cilindro", value: "Mezzo cilindro europeo antiperforazione" },
      { label: "Cerniere", value: "Acciaio ad alta resistenza meccanica" },
      { label: "Verniciatura", value: "A polvere Classe 2, resistenza UV" },
    ],
    colors: "Gamma RAL completa, finiture effetto legno, colori standard a catalogo",
    features: ["Blindatura nascosta", "Rostri antistrappo", "Lamelle orientabili ovali o trapezoidali", "Versioni ad arco"],
  },
  "Erreci — Maxima Light": {
    name: "Maxima Light",
    brand: "Erreci",
    segment: "Sicurezza",
    description:
      "Persiana in alluminio con blindatura in acciaio inox nascosta, protezione Classe 2 con peso ridotto. Ideale per installazioni su edifici esistenti dove il carico sui cardini è un fattore critico.",
    highlight: "Blindatura leggera in acciaio inox — Classe 2, ideale per ristrutturazioni",
    specs: [
      { label: "Materiale", value: "Alluminio estruso maggiorato + acciaio inox" },
      { label: "Classe antieffrazione", value: "Classe 2" },
      { label: "Serratura", value: "Di sicurezza multipunto" },
      { label: "Cerniere", value: "Acciaio ad alta resistenza" },
      { label: "Lamelle", value: "Fisse aperte o orientabili" },
      { label: "Verniciatura", value: "A polvere Classe 2, resistenza UV e salsedine" },
    ],
    colors: "Gamma RAL completa, finiture effetto legno",
    features: ["Blindatura nascosta", "Peso ridotto", "Lamelle orientabili", "Adatta a ristrutturazioni"],
  },
  "Persit — Elisa": {
    name: "Elisa",
    brand: "Persit",
    segment: "Classica su telaio",
    description:
      "Persiana battente su telaio dalle forme squadrate con anta a sormonto. Telaio standard con aletta 40 mm, disponibile con aletta 70 mm o telaio storico. Lamelle orientabili con maniglieria cremonese in tinta. Disponibile in versione RC2 con serratura a 5 punti.",
    highlight: "Design classico con anta a sormonto — disponibile antieffrazione RC2",
    specs: [
      { label: "Materiale", value: "Alluminio estruso verniciato a polvere" },
      { label: "Telaio", value: "Aletta 40 mm standard, opzionale 70 mm o storico" },
      { label: "Lamelle", value: "Orientabili con meccanismi in tinta" },
      { label: "Maniglieria", value: "Cremonese di serie, spagnoletta storica opzionale" },
      { label: "Versione sicurezza", value: "RC2 con serratura a 5 punti e barre acciaio" },
      { label: "Motorizzazione", value: "PERSINT disponibile" },
    ],
    colors: "RAL Raffaello, effetti legno a catalogo, qualunque RAL su richiesta",
    features: ["Battente su telaio", "Anta a sormonto", "Lamelle orientabili", "Versione RC2", "Motorizzabile"],
  },
  "Persit — Clara": {
    name: "Clara",
    brand: "Persit",
    segment: "Moderna complanare",
    description:
      "Persiana battente con telaio e anta complanare dal design contemporaneo e lineare. Le forme squadrate e la complanarità donano un'estetica moderna ed elegante. Telaio standard con aletta 35 mm, opzionale 70 mm.",
    highlight: "Anta complanare al telaio — design moderno e linee pulite",
    specs: [
      { label: "Materiale", value: "Alluminio estruso verniciato a polvere" },
      { label: "Telaio", value: "Aletta 35 mm standard, opzionale 70 mm" },
      { label: "Design", value: "Complanare — anta e telaio sullo stesso piano" },
      { label: "Lamelle", value: "Orientabili con meccanismi in tinta" },
      { label: "Maniglieria", value: "Cremonese in tinta abbinata" },
      { label: "Motorizzazione", value: "PERSINT disponibile" },
    ],
    colors: "RAL Raffaello, effetti legno a catalogo, qualunque RAL su richiesta",
    features: ["Battente complanare", "Design contemporaneo", "Profilo squadrato", "Motorizzabile"],
  },
  "Korus — SK45 Dione": {
    name: "SK45 Dione",
    brand: "Korus",
    segment: "Classica",
    description:
      "Persiana in alluminio con telaio rustico e profilo anta 45 mm. Verniciatura esclusiva ThermoReflex con pigmenti termoriflettenti che respingono i raggi infrarossi, migliorando l'isolamento termico estivo. Trattamento anticorrosivo SEASIDE di serie.",
    highlight: "Verniciatura ThermoReflex termoriflettente — garanzia 30 anni",
    specs: [
      { label: "Materiale", value: "Alluminio estruso 100% Made in Italy" },
      { label: "Profilo anta", value: "45 mm" },
      { label: "Telaio", value: "Rustico" },
      { label: "Lamelle", value: "Classica fissa o orientabile a goccia" },
      { label: "Verniciatura", value: "ThermoReflex termoriflettente a polvere" },
      { label: "Garanzia", value: "30 anni sulla verniciatura" },
    ],
    colors: "Gamma RAL completa, effetti legno, colori personalizzati",
    features: ["Telaio rustico", "Lamelle orientabili a goccia", "ThermoReflex", "SEASIDE anticorrosione", "Garanzia 30 anni"],
  },
  "Korus — Crono": {
    name: "Crono",
    brand: "Korus",
    segment: "Premium",
    description:
      "Persiana in alluminio con profilo anta 53 mm per massima robustezza. Disponibile in 7 stili di lamella: classica, a goccia, fiorentina, storica, chiusa, verticale e ovale orientabile. Verniciatura ThermoReflex e trattamento SEASIDE di serie.",
    highlight: "Profilo 53 mm, 7 stili di lamella — la persiana Korus più versatile",
    specs: [
      { label: "Materiale", value: "Alluminio estruso 100% Made in Italy" },
      { label: "Profilo anta", value: "53 mm" },
      { label: "Lamelle", value: "Classica, goccia, fiorentina, storica, chiusa, verticale, ovale" },
      { label: "Verniciatura", value: "ThermoReflex termoriflettente a polvere" },
      { label: "Trattamento", value: "SEASIDE anticorrosivo certificato Qualicoat" },
      { label: "Garanzia", value: "30 anni sulla verniciatura" },
    ],
    colors: "Gamma RAL completa, effetti legno, colori personalizzati",
    features: ["7 stili di lamella", "Versione Security disponibile", "ThermoReflex", "SEASIDE anticorrosione", "Garanzia 30 anni"],
  },
};

/* ── FRANGISOLE — Lupak Metal ────────────────────────────────── */

export const frangisoleDetails: Record<string, ProductDetail> = {
  "Lupak — Lume Pro": {
    name: "Lume Pro",
    brand: "Lupak",
    segment: "Top di gamma",
    description:
      "Evoluzione del frangisole a catena Lume con lamella in alluminio estruso da 13/10 mm e bordo anti-riflesso che ottimizza la gestione della luce naturale. Resistenza al vento 150 km/h, parti mobili interamente in acciaio inox.",
    highlight: "Resistenza al vento 150 km/h, bordo anti-riflesso — oscuramento superiore",
    specs: [
      { label: "Tipologia", value: "Sistema a catena orientabile e impacchettabile" },
      { label: "Lamella", value: "Alluminio estruso 13/10 mm con bordo anti-riflesso" },
      { label: "Orientamento", value: "Da 0° a 87° in qualsiasi posizione" },
      { label: "Resistenza al vento", value: "150 km/h (su 3000×3000 mm)" },
      { label: "Parti mobili", value: "Interamente in acciaio inox, garanzia 5 anni" },
      { label: "Normative", value: "UNI EN 13659, UNI EN 1932" },
    ],
    colors: "Gamma RAL completa, marmorizzate, effetto legno, metallizzate, sublimazione",
    features: ["Bordo anti-riflesso", "Fissaggio lamella invisibile", "Motorizzabile con sensori", "Guarnizione settoriale"],
  },
  "Lupak — Lume Esse": {
    name: "Lume Esse",
    brand: "Lupak",
    segment: "Premium",
    description:
      "Frangisole a catena con lamelle in alluminio estruso 13/10 mm per grandi dimensioni fino a 9 m². Fissaggio lamella completamente invisibile dall'esterno per una facciata pulita e contemporanea. Oscuramento fino al 92%.",
    highlight: "Fino a 9 m², oscuramento 92% — fissaggio invisibile dall'esterno",
    specs: [
      { label: "Tipologia", value: "Sistema a catena orientabile e impacchettabile" },
      { label: "Lamella", value: "Alluminio estruso 13/10 mm" },
      { label: "Superficie massima", value: "9 m²" },
      { label: "Resistenza al vento", value: "140 km/h (930 Pa su 3000×3000 mm)" },
      { label: "Oscuramento", value: "Fino al 92%" },
      { label: "Normative", value: "UNI EN 13659, UNI EN 1932" },
    ],
    colors: "Gamma RAL completa, marmorizzate, effetto legno, metallizzate, sublimazione",
    features: ["Fissaggio invisibile", "Guide autoportanti", "Motorizzabile con sensori", "Grandi superfici"],
  },
  "Lupak — Lume Light": {
    name: "Lume Light",
    brand: "Lupak",
    segment: "Residenziale",
    description:
      "Frangisole a catena leggero con lamelle in alluminio profilato 0,75 mm, ideale per il residenziale. Chiusura completa delle lamelle in posizione abbassata per privacy e oscuramento totale. Meccanismo di sollevamento silenziato.",
    highlight: "Leggero e compatto 120 km/h — meccanismo silenziato, ideale per il residenziale",
    specs: [
      { label: "Tipologia", value: "Sistema a catena orientabile e impacchettabile" },
      { label: "Lamella", value: "Alluminio profilato 0,75 mm" },
      { label: "Orientamento", value: "Da 35° a 80°; 0° a −80° abbassata" },
      { label: "Resistenza al vento", value: "120 km/h (su 3000×3000 mm)" },
      { label: "Chiusura", value: "Completa in posizione abbassata" },
      { label: "Normative", value: "UNI EN 13659, UNI EN 1932" },
    ],
    colors: "Gamma RAL completa, marmorizzate, effetto legno, metallizzate, sublimazione",
    features: ["Leggero e compatto", "Sollevamento silenziato", "Chiusura completa", "Motorizzabile"],
  },
  "Lupak — Filo 90": {
    name: "Filo 90",
    brand: "Lupak",
    segment: "Tecnico",
    description:
      "Frangisole a filo con lamella a Z da 92 mm e guarnizione in gomma che riduce le infiltrazioni di luce e migliora l'oscuramento fino al 90%. Superficie copribile fino a 12,5 m², rotazione lame 180°.",
    highlight: "Lamella a Z con guarnizione — oscuramento 90%, superficie fino a 12,5 m²",
    specs: [
      { label: "Tipologia", value: "Sistema a filo impacchettabile" },
      { label: "Lamella", value: "Lega di alluminio a Z, 92 mm, 0,47 mm" },
      { label: "Superficie massima", value: "12,5 m²" },
      { label: "Oscuramento", value: "Fino al 90%" },
      { label: "Rotazione lame", value: "180°" },
      { label: "Normative", value: "UNI EN 13659, UNI EN 1932" },
    ],
    colors: "Gamma RAL completa, marmorizzate, effetto legno, metallizzate, sublimazione",
    features: ["Guarnizione anti-infiltrazione", "Design a Z", "Grandi aperture", "Motorizzabile"],
  },
  "Lupak — Filo 65": {
    name: "Filo 65",
    brand: "Lupak",
    segment: "Compatto",
    description:
      "Il più compatto della gamma: lamella curva a coppo da 65 mm con vernice antigraffio su entrambi i lati. Rotazione 180°, guide laterali anodizzate con gommini antirumore. Ideale per aperture di dimensioni contenute.",
    highlight: "Il più compatto — lamella curva a coppo, vernice antigraffio bilaterale",
    specs: [
      { label: "Tipologia", value: "Sistema a filo impacchettabile" },
      { label: "Lamella", value: "Lega di alluminio curva a coppo, 65 mm, 0,45 mm" },
      { label: "Finitura", value: "Termolaccatura antigraffio su entrambi i lati" },
      { label: "Rotazione lame", value: "180°" },
      { label: "Guide laterali", value: "20×21 mm anodizzate con gommini antirumore" },
      { label: "Normative", value: "UNI EN 13659, UNI EN 1932" },
    ],
    colors: "Gamma RAL completa, marmorizzate, effetto legno, metallizzate, sublimazione",
    features: ["Compatto", "Vernice antigraffio bilaterale", "Gommini antirumore", "Motorizzabile"],
  },
};

/* ── TAPPARELLE — Pasini ─────────────────────────────────────── */

export const tapparelleDetails: Record<string, ProductDetail> = {
  "Pasini — Roll 55": {
    name: "Roll 55",
    brand: "Pasini",
    segment: "Classic",
    description:
      "L'avvolgibile più venduto della gamma Pasini. Profilo in alluminio preverniciato 14×55 mm con anima in poliuretano espanso a media densità. Struttura arcuata con nervature longitudinali e protezione antigraffio trasparente di serie.",
    highlight: "Il best-seller Pasini — massimo rapporto qualità-prezzo, consegna ONEday",
    specs: [
      { label: "Materiale", value: "Alluminio preverniciato con PU media densità" },
      { label: "Profilo", value: "14 × 55 mm — spessore 0,36 mm" },
      { label: "Peso", value: "~3,7 kg/m²" },
      { label: "Larghezza massima", value: "3.900 mm" },
      { label: "Lamelle al m²", value: "18,2" },
      { label: "Movimentazione", value: "Cinghia, manovella o motore tubolare" },
    ],
    colors: "24 colori pieni, 8 effetto legno, 4 metallizzate Raffaello",
    features: ["Protezione antigraffio di serie", "Nervature longitudinali", "Consegna ONEday 24h", "Motorizzabile"],
  },
  "Pasini — Roll 45": {
    name: "Roll 45",
    brand: "Pasini",
    segment: "Classic",
    description:
      "Avvolgibile compatto con profilo ridotto 9×45 mm, perfetto per cassonetti di dimensioni contenute e ristrutturazioni con spazi limitati. Leggero (2,9 kg/m²) per manovre agevoli anche manuali.",
    highlight: "Profilo compatto 9×45 mm — la soluzione ideale per cassonetti ridotti",
    specs: [
      { label: "Materiale", value: "Alluminio preverniciato con PU media densità" },
      { label: "Profilo", value: "9 × 45 mm — spessore 0,33 mm" },
      { label: "Peso", value: "~2,9 kg/m²" },
      { label: "Larghezza massima", value: "3.200 mm" },
      { label: "Lamelle al m²", value: "22,2" },
      { label: "Movimentazione", value: "Cinghia, manovella o motore tubolare" },
    ],
    colors: "14 colori pieni, effetto legno chiaro e scuro, 4 metallizzate Raffaello",
    features: ["Ultra-compatto", "Peso contenuto", "Protezione antigraffio", "Consegna ONEday 24h"],
  },
  "Pasini — Maxi Roll 55": {
    name: "Maxi Roll 55",
    brand: "Pasini",
    segment: "Premium",
    description:
      "Avvolgibile ad alte prestazioni con poliuretano espanso ad alta densità per il massimo isolamento termico. Profilo 14×55 mm rinforzato, progettato per grandi luci fino a 4 metri.",
    highlight: "Alta densità per grandi luci — isolamento superiore fino a 4 metri",
    specs: [
      { label: "Materiale", value: "Alluminio preverniciato con PU alta densità" },
      { label: "Profilo", value: "14 × 55 mm — spessore 0,36 mm" },
      { label: "Peso", value: "~5,1 kg/m²" },
      { label: "Larghezza massima", value: "4.000 mm" },
      { label: "Lamelle al m²", value: "18,2" },
      { label: "Movimentazione", value: "Motore tubolare, telecomando, domotica" },
    ],
    colors: "18 colori pieni, 7 effetto legno, 4 metallizzate Raffaello",
    features: ["PU alta densità", "Grandi aperture fino a 4 m", "Protezione antigraffio", "Consegna ONEday 24h"],
  },
  "Pasini — Roll 50 Air": {
    name: "Roll 50 Air",
    brand: "Pasini",
    segment: "Design",
    description:
      "Avvolgibile innovativo con asole longitudinali da 180 mm che garantiscono luce e aerazione naturale anche a tapparella abbassata. Privacy mantenuta: la luce entra ma lo sguardo resta fuori.",
    highlight: "Luce e aerazione a tapparella chiusa — asole da 180 mm",
    specs: [
      { label: "Materiale", value: "Alluminio con poliuretano espanso" },
      { label: "Profilo", value: "12 × 50 mm — spessore ~0,50 mm" },
      { label: "Peso", value: "~5,0 kg/m²" },
      { label: "Larghezza massima", value: "4.200 mm" },
      { label: "Asole di aerazione", value: "180 mm (10× lo standard)" },
      { label: "Movimentazione", value: "Motore tubolare, telecomando, domotica" },
    ],
    colors: "25+ colori pieni, 8 effetto legno, 3 metallizzate Raffaello",
    features: ["Asole 180 mm", "Luminosità anche chiusa", "Privacy mantenuta", "Domotica compatibile"],
  },
  "Pasini — Blind 45 AE": {
    name: "Blind 45 AE",
    brand: "Pasini",
    segment: "Sicurezza",
    description:
      "Avvolgibile blindato in alluminio estruso con spessore di 1 mm per la massima resistenza all'effrazione. Struttura senza nervature per un aspetto lineare e moderno. Motorizzazione consigliata dato il peso di 8 kg/m².",
    highlight: "Alluminio estruso 1 mm — massima resistenza antieffrazione",
    specs: [
      { label: "Materiale", value: "Alluminio estruso — spessore 1,0 mm" },
      { label: "Profilo", value: "12 × 45 mm — struttura piatta" },
      { label: "Peso", value: "~8,0 kg/m²" },
      { label: "Larghezza massima", value: "4.000 mm" },
      { label: "Lamelle al m²", value: "22,2" },
      { label: "Movimentazione", value: "Motore tubolare consigliato" },
    ],
    colors: "6 colori pieni standard, 2 effetto legno, RAL personalizzati su richiesta",
    features: ["Alluminio estruso 1 mm", "Struttura piatta senza nervature", "Antieffrazione", "RAL personalizzabili"],
  },
};
