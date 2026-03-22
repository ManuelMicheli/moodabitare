/**
 * Contenuti descrittivi per ogni categoria prodotto.
 * TOV: professionale, rassicurante, benefit-oriented.
 */

export interface ProductContent {
  tagline: string;
  description: string;
  specs: { label: string; value: string }[];
  benefits: string[];
  /** Breve descrizione per la card nel catalogo */
  cardDescription: string;
}

export const productContent: Record<string, ProductContent> = {
  /* ── SERRAMENTI, OSCURANTI, PORTONCINI ─────────────────────────── */

  "infissi-pvc": {
    tagline: "Isolamento superiore, bollette pi\u00F9 leggere",
    description:
      "20 modelli di finestre e scorrevoli in PVC Oknoplast: dalla famiglia Prolux alle linee Prismatic e Winergetic con certificazione CasaClima Gold (Uw fino a 0,6 W/m\u00B2K), fino ai sistemi scorrevoli panoramici oltre 6 metri. Profili multicamera, vetri basso-emissivi e fino al 40% di risparmio in bolletta. Come Premium Partner Oknoplast per la provincia di Varese, ti garantiamo condizioni esclusive e garanzia estesa fino a 10 anni.",
    specs: [
      { label: "Materiale", value: "PVC multicamera rinforzato in acciaio" },
      { label: "Trasmittanza termica", value: "Uw da 0,6 a 1,0 W/m\u00B2K" },
      { label: "Abbattimento acustico", value: "Fino a 47 dB" },
      { label: "Classe antieffrazione", value: "Fino a RC2" },
      { label: "Garanzia", value: "Fino a 10 anni" },
      { label: "Certificazioni", value: "CE, CasaClima, Passivhaus, PVC riciclabile" },
    ],
    benefits: [
      "20 modelli: Prolux, Prismatic, Winergetic e 5 scorrevoli",
      "Risparmio fino al 40% sui costi di riscaldamento e raffrescamento",
      "Zero manutenzione: non servono verniciature o trattamenti",
      "Scorrevoli panoramici oltre 6 metri con soglia ribassata",
      "Detrazioni fiscali al 50% con pratica gestita da noi",
    ],
    cardDescription: "Isolamento termico e acustico superiore, fino al 40% di risparmio in bolletta",
  },

  "infissi-alluminio": {
    tagline: "Linee sottili, prestazioni massime",
    description:
      "Le finestre in alluminio Oknoplast offrono profili ultra-sottili che massimizzano la superficie vetrata e la luce naturale in casa. L'alluminio garantisce resistenza strutturale eccezionale e durata nel tempo senza alterazioni estetiche, ideale per grandi vetrate e progetti architettonici contemporanei.",
    specs: [
      { label: "Materiale", value: "Alluminio a taglio termico" },
      { label: "Trasmittanza termica", value: "Uw fino a 0,90 W/m²K" },
      { label: "Abbattimento acustico", value: "Fino a 45 dB" },
      { label: "Classe antieffrazione", value: "Fino a RC2" },
      { label: "Garanzia", value: "Fino a 10 anni" },
      { label: "Finitura", value: "Verniciatura a polvere, 200+ colori RAL" },
    ],
    benefits: [
      "Profili ultra-slim: fino al 20% di vetro in più rispetto al PVC",
      "Resistenza superiore a sole, pioggia e salsedine — nessuna corrosione",
      "Perfette per grandi scorrevoli e vetrate a tutta altezza",
      "Colorazione personalizzabile su oltre 200 tonalità RAL",
      "Detrazioni fiscali al 50% con pratica gestita da noi",
    ],
    cardDescription: "Profili ultra-sottili, massima luce e resistenza per progetti contemporanei",
  },

  "infissi-alluminio-legno": {
    tagline: "L'eleganza del legno, la resistenza dell'alluminio",
    description:
      "Gli infissi in alluminio e legno Korus offrono il meglio dei due materiali: all'esterno l'alluminio protegge dagli agenti atmosferici senza manutenzione, all'interno il legno regala calore naturale e isolamento termico superiore. Una soluzione ideale per chi cerca prestazioni elevate senza rinunciare all'estetica del legno.",
    specs: [
      { label: "Materiale", value: "Alluminio esterno + legno interno" },
      { label: "Trasmittanza termica", value: "Uw fino a 0,80 W/m²K" },
      { label: "Abbattimento acustico", value: "Fino a 46 dB" },
      { label: "Classe antieffrazione", value: "Fino a RC2" },
      { label: "Essenze legno", value: "Rovere, frassino, pino lamellare" },
      { label: "Finitura alluminio", value: "RAL personalizzabile" },
    ],
    benefits: [
      "Doppio vantaggio: robustezza dell'alluminio all'esterno, calore del legno all'interno",
      "Zero manutenzione lato esterno grazie al rivestimento in alluminio",
      "Isolamento termico eccellente per il massimo comfort abitativo",
      "Estetica ricercata con essenze naturali a vista",
      "Detrazioni fiscali al 50% con pratica gestita da noi",
    ],
    cardDescription: "Alluminio esterno e legno interno: prestazioni elevate e design naturale",
  },

  "infissi-legno": {
    tagline: "Il calore autentico del legno, con tecnologia moderna",
    description:
      "Gli infissi in legno Pail uniscono la bellezza naturale e il calore tattile del legno massello a prestazioni termiche di ultima generazione. Ogni serramento è realizzato artigianalmente in Italia con legni selezionati e certificati, trattati per resistere nel tempo senza perdere la loro eleganza naturale.",
    specs: [
      { label: "Materiale", value: "Legno massello lamellare (pino, rovere, mogano)" },
      { label: "Trasmittanza termica", value: "Uw fino a 1,0 W/m²K" },
      { label: "Trattamento", value: "Verniciatura ad acqua ecologica multistrato" },
      { label: "Produzione", value: "100% artigianale italiana" },
      { label: "Personalizzazione", value: "Su misura, qualsiasi forma e colore" },
      { label: "Certificazioni", value: "CE, legno da foreste certificate FSC/PEFC" },
    ],
    benefits: [
      "Isolamento termico naturale: il legno è tra i migliori isolanti esistenti",
      "Estetica calda e naturale, perfetta per ristrutturazioni e case di pregio",
      "Completamente personalizzabili in forma, essenza e colore",
      "Verniciatura ecologica ad acqua: sicura per te e per l'ambiente",
      "Detrazioni fiscali al 50% con pratica gestita da noi",
    ],
    cardDescription: "Eleganza naturale e isolamento termico eccellente, made in Italy",
  },

  "portoncini": {
    tagline: "L'ingresso che accoglie con stile e sicurezza",
    description:
      "Oltre 30 modelli di portoncini Oknoplast e Kopen: dalla linea Tenvis in alluminio a taglio termico (9 collezioni, Ud fino a 0,84 W/m\u00B2K) ai portoncini in PVC, dalle porte esterne Cosmo con pannello HPL alla gamma premium Kopen con certificazione fino a RC4. Design, isolamento e sicurezza per ogni stile architettonico.",
    specs: [
      { label: "Materiale", value: "Alluminio a taglio termico / PVC" },
      { label: "Brand", value: "Oknoplast (Tenvis, PVC, Cosmo) / Kopen" },
      { label: "Sicurezza", value: "Chiusura 3 punti, fino a RC4 (Kopen)" },
      { label: "Isolamento termico", value: "Ud da 0,75 a 1,7 W/m\u00B2K" },
      { label: "Personalizzazione", value: "30+ finiture, bicolore, smart home" },
      { label: "Garanzia", value: "Garanzia estesa" },
    ],
    benefits: [
      "Oltre 30 modelli in alluminio, PVC e HPL",
      "9 linee Tenvis: Design Pro, Black Design, Infinity, Groove e altre",
      "Portoncini PVC e porte esterne Cosmo per ogni budget",
      "Sicurezza antieffrazione fino a RC4 certificata",
      "Detrazioni fiscali con pratica gestita da noi",
    ],
    cardDescription: "Portoncini di design: isolamento, sicurezza antieffrazione e personalizzazione completa",
  },

  "persiane": {
    tagline: "Sicurezza e oscuramento con l'eleganza delle persiane",
    description:
      "Le persiane Erreci, Persit e Korus uniscono la funzione oscurante tradizionale alla protezione antieffrazione, senza rinunciare all'estetica. Disponibili in alluminio e acciaio con lamelle orientabili, ti permettono di regolare luce e ventilazione mantenendo la massima sicurezza. Verniciatura a polvere per resistenza totale agli agenti atmosferici.",
    specs: [
      { label: "Materiali", value: "Alluminio estruso o acciaio zincato" },
      { label: "Lamelle", value: "Orientabili o fisse, profilo antintrusione" },
      { label: "Verniciatura", value: "A polvere poliestere, resistenza UV" },
      { label: "Sicurezza", value: "Cerniere antistrappo, serratura di sicurezza" },
      { label: "Colori", value: "Gamma RAL completa + effetto legno" },
      { label: "Tipologie", value: "A battente, scorrevole, libro, impacchettabile" },
    ],
    benefits: [
      "Doppia funzione: oscuramento e protezione antieffrazione in un unico elemento",
      "Lamelle orientabili per dosare luce e aria senza rinunciare alla sicurezza",
      "Zero manutenzione: verniciatura a polvere resistente a sole e intemperie",
      "Estetica classica o moderna, personalizzabile su misura",
      "Installazione professionale con garanzia Mood Abitare",
    ],
    cardDescription: "Oscuramento e sicurezza in un'unica soluzione, zero manutenzione",
  },

  "frangisole": {
    tagline: "Protezione solare e design architettonico",
    description:
      "I frangisole Lupak sono sistemi di schermatura solare a lamelle orientabili che proteggono dal surriscaldamento estivo mantenendo luminosità e ventilazione naturale. Ideali per facciate contemporanee, uniscono efficienza energetica ed estetica architettonica. Le lamelle motorizzabili si regolano automaticamente in base alla posizione del sole.",
    specs: [
      { label: "Materiale", value: "Alluminio estruso anodizzato" },
      { label: "Lamelle", value: "Orientabili 0°-90°, motorizzabili" },
      { label: "Riduzione calore", value: "Fino al 75% di riduzione apporti solari" },
      { label: "Automazione", value: "Sensori sole/vento, domotica compatibile" },
      { label: "Colori", value: "Gamma RAL completa" },
      { label: "Tipologie", value: "Fissi, scorrevoli, impacchettabili" },
    ],
    benefits: [
      "Riduzione fino al 75% del calore estivo: meno climatizzazione, più risparmio",
      "Lamelle orientabili per dosare luce naturale a piacimento",
      "Design contemporaneo che valorizza la facciata dell'edificio",
      "Motorizzazione smart con sensori automatici sole e vento",
      "Materiali resistenti a intemperie e raggi UV",
    ],
    cardDescription: "Schermatura solare a lamelle orientabili, design architettonico e risparmio energetico",
  },

  "tapparelle": {
    tagline: "Isolamento, sicurezza e comfort a portata di pulsante",
    description:
      "Le tapparelle Pasini offrono un sistema completo di oscuramento, isolamento e protezione in un'unica soluzione. Disponibili in alluminio coibentato o PVC ad alta densità, possono essere motorizzate per il massimo comfort e si integrano perfettamente con cassonetti di nuova generazione per eliminare i ponti termici.",
    specs: [
      { label: "Materiale", value: "Alluminio coibentato o PVC alta densità" },
      { label: "Coibentazione", value: "Schiuma poliuretanica ad alta densità" },
      { label: "Motorizzazione", value: "Motore tubolare con telecomando e domotica" },
      { label: "Sicurezza", value: "Dispositivo antisollevamento integrato" },
      { label: "Colori", value: "Gamma RAL + effetto legno e simil-acciaio" },
      { label: "Accessori", value: "Zanzariera integrata, sensori vento/sole" },
    ],
    benefits: [
      "Isolamento termico superiore grazie alla coibentazione in poliuretano",
      "Motorizzazione smart: gestisci tutto con telecomando, timer o domotica",
      "Dispositivo antisollevamento per sicurezza aggiuntiva",
      "Integrabili con sensori automatici vento e sole",
      "Detrazioni fiscali al 50% con pratica gestita da noi",
    ],
    cardDescription: "Oscuramento coibentato e motorizzabile, con antisollevamento integrato",
  },

  /* ── PORTE INTERNE & BLINDATE ──────────────────────────────────── */

  "porte-interne": {
    tagline: "Design italiano che trasforma ogni passaggio",
    description:
      "Le porte interne Pail e Door Arreda sono realizzate interamente in Italia con materiali di alta qualità e un'attenzione artigianale al dettaglio. Dalla porta filomuro che scompare nella parete alla porta scorrevole salvaspazio, ogni soluzione è pensata per valorizzare i tuoi ambienti con linee pulite, finiture ricercate e un funzionamento silenzioso e preciso.",
    specs: [
      { label: "Produzione", value: "100% italiana" },
      { label: "Tipologie", value: "Battente, scorrevole, filomuro, libro, pivot" },
      { label: "Finiture", value: "Laccato, legno, vetro, effetto cemento, tessuto" },
      { label: "Abbattimento acustico", value: "Fino a 38 dB (modelli fonoisolanti)" },
      { label: "Personalizzazione", value: "Misure fuori standard, colori su richiesta" },
      { label: "Certificazioni", value: "CE, certificazione ambientale" },
    ],
    benefits: [
      "Design made in Italy con finiture di alta gamma",
      "Soluzione per ogni esigenza: scorrevoli, filomuro, pivot, a libro",
      "Modelli fonoisolanti per privacy e comfort acustico",
      "Misure su misura anche per vani fuori standard",
      "Vasta gamma di finiture: dal minimal al materico, dal vetro al tessuto",
    ],
    cardDescription: "Design made in Italy, finiture di alta gamma e soluzioni per ogni ambiente",
  },

  "porte-blindate": {
    tagline: "Sicurezza certificata, design che si integra nella tua casa",
    description:
      "Le porte blindate Alias ed Erreci combinano struttura in acciaio ad alta resistenza con finiture eleganti che si adattano a qualsiasi stile d'interni. Dalla Classe 3 entry-level alla Classe 5 di massima sicurezza, ogni porta garantisce isolamento termico e acustico superiore. Soluzioni a cerniera nascosta, filomuro, coplanari, a bilico e smart con LED e apertura biometrica: protezione totale senza compromessi estetici.",
    specs: [
      { label: "Struttura", value: "Acciaio zincato 12/10 – 15/10, rinforzi omega" },
      { label: "Classe antieffrazione", value: "Da Classe 3 a Classe 5 (UNI-EN 1627)" },
      { label: "Punti di chiusura", value: "Fino a 17 punti di ancoraggio" },
      { label: "Isolamento termico", value: "Ud fino a 1,0 W/m²K (0,8 con aerogel)" },
      { label: "Abbattimento acustico", value: "Fino a 42 dB" },
      { label: "Finiture", value: "Laccato RAL, legno, laminato, LED, coplanare" },
    ],
    benefits: [
      "Massima sicurezza: da Classe 3 a Classe 5 con acciaio al manganese e cilindro Widia",
      "Isolamento termico e acustico ai vertici della categoria — Ud fino a 0,8 W/m²K",
      "Design contemporaneo: filomuro, coplanare, a bilico o con LED integrato",
      "Serrature smart: da cilindro europeo a biometrica con app Bluetooth",
      "Installazione e assistenza diretta con garanzia Mood Abitare",
    ],
    cardDescription: "Protezione da Classe 3 a Classe 5, isolamento termoacustico, design filomuro e smart",
  },

  /* ── SISTEMI DI SICUREZZA ──────────────────────────────────────── */

  "grate-sicurezza": {
    tagline: "Protezione invisibile, tranquillità visibile",
    description:
      "Le grate di sicurezza Erreci offrono protezione antieffrazione certificata fino a Classe 4 con un design discreto che non compromette la vista e la luminosità dei tuoi ambienti. 9 modelli — dall'acciaio carbonitrurato alla versione in alluminio anticorrosione, dalla grata estensibile a quella in acciaio inox — si integrano con qualsiasi serramento e contesto architettonico.",
    specs: [
      { label: "Materiale", value: "Acciaio zincato, carbonitrurato, inox AISI 304, alluminio" },
      { label: "Barre", value: "Tonde piene, sezione 14 mm" },
      { label: "Tipologie", value: "A battente, scorrevole, estensibile, in acciaio inox" },
      { label: "Certificazione", value: "UNI EN 1627 fino a Classe 4" },
      { label: "Verniciatura", value: "A polvere poliestere a forno 180°C, gamma RAL" },
      { label: "Serratura", value: "Cilindro europeo antitrapano con chiave unica" },
    ],
    benefits: [
      "9 modelli per ogni esigenza: dalla Classe 2 alla Classe 4 antieffrazione",
      "Modelli in acciaio inox e alluminio per zone costiere e ambienti corrosivi",
      "Grata estensibile Kiusa per aperture non standard",
      "Cerniere brevettate a scomparsa e flip per estetica senza sporgenze",
      "Verniciatura a polvere: resistente, durevole e personalizzabile in gamma RAL",
      "Sopralluogo e preventivo gratuiti per la soluzione su misura",
    ],
    cardDescription: "Sicurezza certificata fino a Classe 4, 9 modelli in acciaio, inox e alluminio",
  },

  "persiane-blindate": {
    tagline: "La forza dell'acciaio, l'eleganza della persiana",
    description:
      "Le persiane blindate Erreci ed Ecomet offrono la massima protezione antieffrazione mantenendo l'aspetto estetico di una persiana tradizionale. Struttura rinforzata in acciaio, cerniere antistrappo e serrature di sicurezza per una barriera impenetrabile che non rinuncia al design. Ideali per ville, piani terra e abitazioni in zone isolate.",
    specs: [
      { label: "Materiale", value: "Acciaio zincato con lamelle rinforzate" },
      { label: "Sicurezza", value: "Certificazione antieffrazione, cerniere antistrappo" },
      { label: "Serratura", value: "Multipunto con cilindro europeo" },
      { label: "Verniciatura", value: "A polvere poliestere, gamma RAL" },
      { label: "Tipologie", value: "A battente, scorrevole" },
      { label: "Isolamento", value: "Lamelle coibentate opzionali" },
    ],
    benefits: [
      "Massima sicurezza antieffrazione con aspetto di persiana tradizionale",
      "Cerniere antistrappo e serratura multipunto per protezione totale",
      "Ideali per piani terra, ville e abitazioni in zone isolate",
      "Verniciatura a polvere per resistenza duratura agli agenti atmosferici",
      "Installazione professionale con garanzia Mood Abitare",
    ],
    cardDescription: "Persiane con protezione antieffrazione certificata, estetica tradizionale",
  },

  "allarme-videosorveglianza": {
    tagline: "La tua casa protetta, ovunque tu sia",
    description:
      "I sistemi di allarme e videosorveglianza Inim offrono una protezione completa e intelligente per la tua abitazione. Centrali antintrusione certificate, sensori perimetrali e volumetrici, telecamere IP ad alta risoluzione e gestione da app: tutto integrato in un unico sistema affidabile e facile da usare.",
    specs: [
      { label: "Centrale", value: "Inim certificata IMQ e EN 50131" },
      { label: "Sensori", value: "Perimetrali, volumetrici, contatti magnetici" },
      { label: "Telecamere", value: "IP Full HD / 4K con visione notturna" },
      { label: "Gestione", value: "App smartphone, notifiche push in tempo reale" },
      { label: "Connettività", value: "Wi-Fi, GSM, LAN — backup multiplo" },
      { label: "Certificazioni", value: "IMQ, EN 50131, grado di sicurezza 2/3" },
    ],
    benefits: [
      "Controllo totale da smartphone: verifica lo stato della casa ovunque tu sia",
      "Notifiche push in tempo reale per qualsiasi evento sospetto",
      "Sistema certificato IMQ per la massima affidabilità",
      "Backup di connessione multiplo: funziona anche senza internet",
      "Installazione professionale e configurazione personalizzata inclusa",
    ],
    cardDescription: "Allarme e videosorveglianza Inim: certificati, smart e gestibili da app",
  },

  /* ── COMFORT & COMPLEMENTI ─────────────────────────────────────── */

  "zanzariere": {
    tagline: "Aria fresca in casa, insetti fuori",
    description:
      "Le zanzariere Grifoflex, Bettio e Sharknet sono progettate per integrarsi perfettamente con qualsiasi tipo di serramento, garantendo protezione totale da insetti e pollini senza rinunciare a luce e ventilazione naturale. Il sistema a scorrimento laterale o verticale è fluido, silenzioso e resistente nel tempo grazie a guide in alluminio e reti in fibra di vetro di alta qualità.",
    specs: [
      { label: "Struttura", value: "Alluminio estruso anodizzato o verniciato" },
      { label: "Rete", value: "Fibra di vetro, maglia 18x16 mm antinsetto" },
      { label: "Tipologie", value: "Laterale, verticale, plissettata, a battente" },
      { label: "Guida", value: "Binario in alluminio, scorrimento silenzioso" },
      { label: "Colori", value: "Bianco, marrone, avorio, RAL su richiesta" },
      { label: "Opzioni", value: "Rete antipolline, rete petscreen per animali" },
    ],
    benefits: [
      "Protezione da insetti e pollini con massima trasparenza e passaggio d'aria",
      "Scorrimento fluido e silenzioso, resistente nel tempo",
      "Rete antipolline disponibile per chi soffre di allergie",
      "Rete petscreen rinforzata per chi ha animali domestici",
      "Installazione su misura per ogni tipologia di finestra e porta-finestra",
    ],
    cardDescription: "Protezione da insetti e pollini, scorrimento silenzioso, rete antipolline disponibile",
  },

  "tende-tecniche": {
    tagline: "Gestisci la luce, controlla la temperatura",
    description:
      "Le tende tecniche Sharknet e Zanzar Sistem ti permettono di filtrare, oscurare o modulare la luce in ogni ambiente con precisione e stile. Ideali per finestre di qualsiasi forma — anche triangolari, trapezoidali o ad arco — si integrano direttamente nel serramento per un risultato pulito e minimal. La gamma di tessuti tecnici protegge dai raggi UV e contribuisce all'isolamento termico estivo.",
    specs: [
      { label: "Tipologie", value: "Plissè, rullo, veneziana, tenda a pannello" },
      { label: "Tessuti", value: "Filtranti, oscuranti, screen, termoriflettenti" },
      { label: "Forme speciali", value: "Triangolari, trapezoidali, ad arco" },
      { label: "Motorizzazione", value: "Disponibile con telecomando e domotica" },
      { label: "Protezione UV", value: "Fino al 99% di raggi UV bloccati" },
      { label: "Integrazione", value: "Installazione nel profilo del serramento" },
    ],
    benefits: [
      "Filtraggio preciso della luce: dalla penombra al buio totale",
      "Protezione UV fino al 99% per mobili, pavimenti e salute",
      "Adatte a finestre di qualsiasi forma, anche non standard",
      "Contribuiscono all'isolamento termico estivo: casa più fresca naturalmente",
      "Design minimal: si integrano nel serramento senza ingombro",
    ],
    cardDescription: "Filtraggio luce e protezione UV, adatte a ogni forma di finestra",
  },

  "scale-ringhiere": {
    tagline: "Collegare i piani, valorizzare gli spazi",
    description:
      "Le scale e ringhiere Sinfonia uniscono ingegneria strutturale e design contemporaneo per creare collegamenti verticali che diventano elementi d'arredo. Disponibili in legno, acciaio, vetro e combinazioni di materiali, ogni scala è configurabile su misura e certificata per la massima sicurezza.",
    specs: [
      { label: "Materiali", value: "Acciaio, legno massello, vetro, combinati" },
      { label: "Tipologie", value: "A chiocciola, a giorno, a rampa, modulare" },
      { label: "Normativa", value: "Conformi UNI EN ISO 14122" },
      { label: "Configurazione", value: "Su misura per altezza, ingombro e apertura" },
      { label: "Ringhiere", value: "Acciaio inox, vetro temperato, cavi in acciaio" },
      { label: "Finitura", value: "Verniciatura a polvere, legno naturale o tinto" },
    ],
    benefits: [
      "Soluzioni salvaspazio: scale a chiocciola da soli 120 cm di diametro",
      "Certificazione di sicurezza conforme alle normative europee",
      "Configuratore su misura per adattarsi a qualsiasi spazio e stile",
      "Materiali combinabili per un risultato unico e personale",
      "Montaggio guidato o servizio di installazione professionale",
    ],
    cardDescription: "Scale e ringhiere di design, su misura, certificate e salvaspazio",
  },

  /* ── OUTDOOR ───────────────────────────────────────────────────── */

  "pergole": {
    tagline: "Il tuo spazio all'aperto, protetto in ogni stagione",
    description:
      "Le pergole Tendarredo e Persit trasformano terrazzi e giardini in ambienti vivibili tutto l'anno. Strutture in alluminio con copertura bioclimatica a lamelle orientabili o telo retrattile, progettate per resistere a vento, pioggia e neve. Integrabili con chiusure laterali, illuminazione LED e sistemi di riscaldamento per un comfort totale.",
    specs: [
      { label: "Struttura", value: "Alluminio verniciato a polvere" },
      { label: "Copertura", value: "Lamelle bioclimatiche orientabili o telo retrattile" },
      { label: "Resistenza vento", value: "Fino a 130 km/h (modelli bioclimatici)" },
      { label: "Automazione", value: "Motorizzata con sensori pioggia/vento/sole" },
      { label: "Accessori", value: "Chiusure laterali, LED, riscaldatori IR" },
      { label: "Personalizzazione", value: "Su misura, colori RAL" },
    ],
    benefits: [
      "Spazio esterno vivibile tutto l'anno grazie alla copertura bioclimatica",
      "Lamelle orientabili per regolare sole, aria e protezione dalla pioggia",
      "Struttura autoportante: nessun intervento murario necessario",
      "Motorizzazione smart con sensori meteo automatici",
      "Valorizza l'immobile e aumenta la superficie abitabile",
    ],
    cardDescription: "Pergole bioclimatiche: lamelle orientabili, motorizzate, vivibili tutto l'anno",
  },

  "gazebi-strutture-legno": {
    tagline: "La naturalezza del legno per i tuoi spazi all'aperto",
    description:
      "Gazebi e strutture in legno lamellare per giardini, terrazzi e aree esterne. Soluzioni su misura progettate per integrarsi armoniosamente con l'ambiente circostante, offrendo riparo e un punto di aggregazione elegante e naturale. Legno trattato in autoclave per la massima durata nel tempo.",
    specs: [
      { label: "Materiale", value: "Legno lamellare trattato in autoclave" },
      { label: "Tipologie", value: "Gazebo, carport, pergolato, dehor" },
      { label: "Copertura", value: "Legno, policarbonato, telo impermeabile" },
      { label: "Trattamento", value: "Autoclave classe 3/4, impregnante" },
      { label: "Dimensioni", value: "Completamente su misura" },
      { label: "Installazione", value: "Montaggio professionale incluso" },
    ],
    benefits: [
      "Estetica naturale che si integra armoniosamente con il giardino",
      "Legno trattato per resistere ad agenti atmosferici e insetti",
      "Progettazione completamente su misura per ogni esigenza",
      "Versatili: gazebo, carport, pergolati, coperture per dehors",
      "Montaggio professionale rapido e senza opere murarie invasive",
    ],
    cardDescription: "Gazebi e strutture in legno lamellare su misura, trattato per durare nel tempo",
  },

  "tende-da-sole": {
    tagline: "Ombra e fresco con un gesto",
    description:
      "Le tende da sole Tendarredo proteggono terrazzi, balconi e vetrate dal sole estivo, riducendo la temperatura interna e il consumo di climatizzazione. Bracci estensibili, cassonetto integrale per la protezione del tessuto e motorizzazione con sensori automatici. Tessuti acrilici o screen per massima durata e resistenza UV.",
    specs: [
      { label: "Tipologie", value: "A bracci estensibili, a caduta, a cappottina" },
      { label: "Tessuto", value: "Acrilico tinto in massa o screen microforato" },
      { label: "Cassonetto", value: "Integrale o semi-integrale, protezione totale" },
      { label: "Motorizzazione", value: "Motore tubolare con telecomando e sensori" },
      { label: "Resistenza UV", value: "Tessuti con protezione UPF 50+" },
      { label: "Larghezza max", value: "Fino a 7 m in un unico elemento" },
    ],
    benefits: [
      "Riduzione della temperatura interna fino a 5°C nelle stanze esposte",
      "Tessuti UPF 50+ per protezione totale dai raggi UV",
      "Cassonetto integrale: il tessuto resta protetto quando la tenda è chiusa",
      "Motorizzazione smart con sensori sole e vento automatici",
      "Ampia gamma di tessuti e colori per personalizzare lo stile",
    ],
    cardDescription: "Tende da sole motorizzate con cassonetto, tessuti UPF 50+ e sensori automatici",
  },

  "vetrate-panoramiche": {
    tagline: "Apri la vista, chiudi il freddo",
    description:
      "Le vetrate panoramiche Mc Slide trasformano terrazzi e verande in spazi luminosi e protetti, con sistemi di apertura a pacchetto che scompaiono completamente. Vetro temperato di sicurezza, guide minimali e scorrimento silenzioso per un effetto scenografico che elimina le barriere tra interno ed esterno.",
    specs: [
      { label: "Vetro", value: "Temperato di sicurezza 8-10 mm" },
      { label: "Apertura", value: "A pacchetto, impacchettamento laterale totale" },
      { label: "Guide", value: "Alluminio minimale, profilo ribassato" },
      { label: "Altezza max", value: "Fino a 3 m di altezza" },
      { label: "Scorrimento", value: "Cuscinetti a sfera, silenzioso" },
      { label: "Opzioni", value: "Vetro basso-emissivo, serratura di sicurezza" },
    ],
    benefits: [
      "Panorama senza ostacoli: i pannelli scompaiono completamente",
      "Protezione da vento, pioggia e freddo senza rinunciare alla luce",
      "Vetro temperato di sicurezza: resistente e sicuro",
      "Profili minimali per un impatto estetico quasi invisibile",
      "Utilizzabili tutto l'anno: creano una veranda vivibile anche in inverno",
    ],
    cardDescription: "Vetrate a pacchetto con apertura totale, vetro temperato e profili minimali",
  },

  "piscine": {
    tagline: "Il tuo angolo di relax, a casa tua",
    description:
      "Piscine interrate e fuori terra progettate e installate su misura per il tuo giardino. Dalla piscina in cemento armato alla soluzione prefabbricata in pannelli d'acciaio o vetroresina, ti seguiamo dalla progettazione alla realizzazione completa, inclusi impianto di filtrazione, rivestimento e accessori.",
    specs: [
      { label: "Tipologie", value: "Interrata, fuori terra, seminterrata" },
      { label: "Struttura", value: "Cemento armato, pannelli acciaio, vetroresina" },
      { label: "Rivestimento", value: "PVC armato, liner, mosaico, pietra naturale" },
      { label: "Filtrazione", value: "Impianto completo a sabbia o a cartuccia" },
      { label: "Accessori", value: "Coperture, illuminazione LED, controcorrente" },
      { label: "Progettazione", value: "Su misura con render 3D" },
    ],
    benefits: [
      "Progettazione personalizzata con render 3D per visualizzare il risultato",
      "Servizio chiavi in mano: scavo, struttura, impianto e rivestimento",
      "Soluzioni per ogni budget: dal prefabbricato al cemento armato",
      "Accessori integrabili: coperture automatiche, LED, controcorrente",
      "Assistenza post-installazione e manutenzione periodica",
    ],
    cardDescription: "Piscine interrate e fuori terra su misura, servizio chiavi in mano",
  },

  "rivestimento-piscine": {
    tagline: "Rinnova la tua piscina, senza ricostruirla",
    description:
      "Servizio specializzato di rivestimento e ristrutturazione per piscine esistenti. Sostituzione del liner, applicazione di PVC armato, mosaico o pietra naturale per rinnovare completamente l'aspetto e la funzionalità della tua piscina senza interventi strutturali invasivi.",
    specs: [
      { label: "Interventi", value: "Sostituzione liner, rivestimento PVC, mosaico" },
      { label: "Materiali", value: "PVC armato, mosaico, pietra ricostruita" },
      { label: "Trattamento", value: "Impermeabilizzazione e preparazione fondo" },
      { label: "Tempistiche", value: "Da 5 a 15 giorni lavorativi" },
      { label: "Garanzia", value: "Garanzia sulla tenuta e impermeabilizzazione" },
      { label: "Sopralluogo", value: "Gratuito con valutazione stato attuale" },
    ],
    benefits: [
      "Rinnova completamente l'estetica della piscina senza ricostruirla",
      "Tempi di intervento ridotti rispetto a una nuova costruzione",
      "Ampia scelta di materiali e finiture per ogni stile",
      "Impermeabilizzazione garantita per anni di utilizzo senza problemi",
      "Sopralluogo e preventivo gratuiti e senza impegno",
    ],
    cardDescription: "Rivestimento e ristrutturazione piscine: rinnova senza ricostruire",
  },

  "arredo-giardino": {
    tagline: "Vivi il tuo giardino con stile e comfort",
    description:
      "Soluzioni complete di arredo giardino per trasformare i tuoi spazi esterni in ambienti accoglienti e funzionali. Tavoli, sedute, divani da esterno, barbecue e complementi selezionati per resistere alle intemperie mantenendo design e comfort. Consulenza personalizzata per creare l'ambiente outdoor perfetto per le tue esigenze.",
    specs: [
      { label: "Categorie", value: "Tavoli, sedute, divani, barbecue, complementi" },
      { label: "Materiali", value: "Teak, alluminio, rattan sintetico, acciaio" },
      { label: "Resistenza", value: "Trattamenti anti-UV e anti-intemperie" },
      { label: "Stili", value: "Moderno, classico, rustico, minimal" },
      { label: "Consulenza", value: "Progetto arredo esterno personalizzato" },
      { label: "Consegna", value: "Consegna e montaggio inclusi" },
    ],
    benefits: [
      "Materiali selezionati per resistere a sole, pioggia e intemperie",
      "Consulenza personalizzata per creare l'ambiente esterno ideale",
      "Ampia gamma di stili per adattarsi a ogni contesto architettonico",
      "Consegna e montaggio inclusi nel servizio",
      "Complementi coordinabili per un risultato armonioso e funzionale",
    ],
    cardDescription: "Arredo giardino resistente e di design, con consulenza personalizzata",
  },

  /* ── CASA & ARREDO ─────────────────────────────────────────────── */

  "cucine-su-misura": {
    tagline: "La tua cucina, progettata intorno alla tua vita",
    description:
      "Le cucine Arrex Cucine sono progettate su misura e realizzate in Italia con materiali di prima scelta. Dal layout funzionale alle finiture, ogni dettaglio nasce dalla tua quotidianità: come cucini, come vivi, quanto spazio hai. Il nostro architetto ti segue dalla progettazione con render 3D alla realizzazione finale, per una cucina che è davvero tua.",
    specs: [
      { label: "Produzione", value: "100% italiana" },
      { label: "Materiali top", value: "Quarzo, Dekton, laminato HPL, legno massello" },
      { label: "Tipologie", value: "Lineare, angolare, penisola, isola" },
      { label: "Elettrodomestici", value: "Partnership con i principali brand" },
      { label: "Progettazione", value: "Render 3D fotorealistico incluso" },
      { label: "Garanzia", value: "5 anni su struttura e meccanismi" },
    ],
    benefits: [
      "Progettazione 3D personalizzata: vedi la tua cucina prima di realizzarla",
      "Su misura per sfruttare ogni centimetro del tuo spazio",
      "Materiali top di gamma: quarzo, Dekton, HPL antibatterico",
      "Servizio chiavi in mano: progetto, consegna e montaggio inclusi",
      "Consulenza gratuita con il nostro architetto dedicato",
    ],
    cardDescription: "Progettazione 3D su misura, materiali di alta gamma, servizio chiavi in mano",
  },

  "arredo-bagno": {
    tagline: "Il bagno che meriti, progettato nei minimi dettagli",
    description:
      "L'arredo bagno Merati trasforma il bagno da semplice ambiente di servizio a spazio di benessere personale. Mobili sospesi, piani in materiali innovativi e finiture ricercate si combinano in composizioni su misura progettate con il nostro architetto, per un risultato che unisce estetica e funzionalità in ogni centimetro.",
    specs: [
      { label: "Produzione", value: "Made in Italy, manifattura artigianale" },
      { label: "Materiali", value: "Legno, laccato, Fenix, cristallo, Corian" },
      { label: "Tipologie", value: "Sospeso, a terra, composizione libera" },
      { label: "Lavabi", value: "Integrati, soprapiano, incasso" },
      { label: "Personalizzazione", value: "Misure, colori e finiture su richiesta" },
      { label: "Progettazione", value: "Render 3D fotorealistico incluso" },
    ],
    benefits: [
      "Composizioni su misura per bagni di ogni dimensione",
      "Materiali innovativi come Fenix e Corian: antigraffio e facili da pulire",
      "Mobili sospesi per facilitare la pulizia del pavimento",
      "Progettazione 3D inclusa per visualizzare il risultato prima dei lavori",
      "Consulenza gratuita con il nostro architetto dedicato",
    ],
    cardDescription: "Composizioni su misura con materiali premium, progettazione 3D inclusa",
  },

  "sanitari": {
    tagline: "Comfort e igiene quotidiana con design contemporaneo",
    description:
      "I sanitari Sani e Co combinano design contemporaneo, funzionalità evoluta e facilità di pulizia. Sanitari rimless (senza brida) per la massima igiene, con scarico dual flush per il risparmio idrico. Disponibili in versione sospesa o a terra, in diverse forme e finiture per adattarsi a ogni stile di bagno.",
    specs: [
      { label: "Materiale", value: "Ceramica di alta qualità, tecnologia rimless" },
      { label: "Scarico WC", value: "Dual flush 3/4,5 L (risparmio idrico)" },
      { label: "Tipologie", value: "Sospesi, a terra, compatti" },
      { label: "Finiture", value: "Bianco lucido, bianco opaco, colori su richiesta" },
      { label: "Garanzia", value: "5 anni su ceramica" },
      { label: "Certificazioni", value: "CE, risparmio idrico certificato" },
    ],
    benefits: [
      "Sanitari rimless: igiene superiore, pulizia più facile e veloce",
      "Risparmio idrico con scarico dual flush da soli 3 litri",
      "Design contemporaneo adatto a ogni stile di bagno",
      "Modelli compatti disponibili per bagni di piccole dimensioni",
      "Ampia scelta di stili: dal minimal al classico contemporaneo",
    ],
    cardDescription: "Sanitari rimless di design, igiene superiore e risparmio idrico",
  },

  "rubinetteria": {
    tagline: "Dettagli che fanno la differenza ogni giorno",
    description:
      "La rubinetteria Fiore unisce design italiano e tecnologia avanzata per bagno e cucina. Cartucce ceramiche di lunga durata, finiture resistenti al calcare e sistemi di risparmio idrico integrati. Disponibile in diverse finiture — cromo, nero opaco, oro spazzolato, nickel — per personalizzare ogni ambiente.",
    specs: [
      { label: "Cartuccia", value: "Ceramica di precisione, lunga durata" },
      { label: "Finiture", value: "Cromo, nero opaco, oro spazzolato, nickel" },
      { label: "Risparmio idrico", value: "Aeratore integrato, portata regolabile" },
      { label: "Tipologie", value: "Miscelatore, termostatico, a parete, a incasso" },
      { label: "Garanzia", value: "2 anni su rubinetteria" },
      { label: "Compatibilità", value: "Standard europeo, installazione universale" },
    ],
    benefits: [
      "Cartuccia ceramica: niente gocciolamenti per anni",
      "Finiture anticalcare per mantenere la lucentezza nel tempo",
      "Risparmio idrico grazie all'aeratore integrato",
      "Ampia scelta di finiture per coordinare con lo stile del bagno",
      "Design italiano funzionale e durevole",
    ],
    cardDescription: "Rubinetteria di design con cartuccia ceramica, finiture anticalcare e risparmio idrico",
  },

  "ceramiche": {
    tagline: "Superfici che trasformano gli ambienti",
    description:
      "Le ceramiche Class Tile offrono una gamma completa di piastrelle e rivestimenti per pavimenti e pareti di ogni ambiente. Dai grandi formati effetto marmo alle piastrelle in gres porcellanato per bagno e cucina, ogni superficie è pensata per durare nel tempo con un'estetica di alto livello.",
    specs: [
      { label: "Materiale", value: "Gres porcellanato, ceramica smaltata" },
      { label: "Formati", value: "Dai mosaici ai grandi formati (120x120 cm)" },
      { label: "Effetti", value: "Marmo, pietra, legno, cemento, metallo" },
      { label: "Spessori", value: "Da 6 mm (rivestimento) a 20 mm (esterno)" },
      { label: "Resistenza", value: "Antigraffio, antimacchia, antigelo" },
      { label: "Posa", value: "Consulenza e progettazione layout incluse" },
    ],
    benefits: [
      "Gres porcellanato: resistente, igienico e facile da pulire",
      "Effetti realistici che riproducono marmo, legno e pietra naturale",
      "Formati versatili: dal mosaico ai grandi formati per spazi ampi",
      "Adatte a interni ed esterni con versioni antigelo",
      "Consulenza gratuita per la scelta dei formati e layout di posa",
    ],
    cardDescription: "Ceramiche e gres porcellanato: effetti marmo, legno, pietra per ogni ambiente",
  },

  "parquet": {
    tagline: "Il pavimento che trasforma l'atmosfera di casa",
    description:
      "Il parquet Ali Parquet offre superfici di altissima qualità estetica e prestazionale per ogni ambiente della casa. Dal parquet in legno massello per chi cerca autenticità al prefinito per un'installazione rapida, ogni soluzione garantisce durabilità, facilità di manutenzione e un impatto visivo che valorizza l'intero ambiente.",
    specs: [
      { label: "Tipologie", value: "Parquet massello, prefinito, multistrato" },
      { label: "Essenze", value: "Rovere, noce, teak, iroko, frassino" },
      { label: "Spessori", value: "Da 10 mm (prefinito) a 22 mm (massello)" },
      { label: "Resistenza", value: "Trattamento UV, finitura olio o vernice" },
      { label: "Posa", value: "Incollata, flottante, chiodata — su riscaldamento a pavimento" },
      { label: "Certificazioni", value: "CE, legno da foreste certificate" },
    ],
    benefits: [
      "Compatibile con riscaldamento a pavimento per massimo comfort",
      "Calore naturale del legno per un'atmosfera accogliente e autentica",
      "Vasta gamma di essenze e formati per ogni stile d'arredo",
      "Posa professionale con garanzia sulla lavorazione",
      "Legno da foreste certificate per una scelta sostenibile",
    ],
    cardDescription: "Parquet in legno per ogni ambiente, compatibile con riscaldamento a pavimento",
  },

  /* ── RISCALDAMENTO / ENERGIE RINNOVABILI ────────────────────────── */

  "climatizzatori": {
    tagline: "Clima perfetto, consumi minimi",
    description:
      "I climatizzatori Haier e Samsung di ultima generazione garantiscono il massimo comfort termico con consumi energetici ridotti al minimo. Tecnologia inverter, filtri antibatterici e gestione smart da app per un clima ideale in ogni stagione. Disponibili in configurazione mono e multi-split per climatizzare più ambienti con una sola unità esterna.",
    specs: [
      { label: "Tecnologia", value: "Inverter DC, classe energetica A+++" },
      { label: "Configurazione", value: "Mono-split e multi-split" },
      { label: "Filtrazione", value: "Antibatterico, antiallergico, PM2.5" },
      { label: "Gestione", value: "Wi-Fi integrato, controllo da app" },
      { label: "Funzionalità", value: "Raffrescamento, riscaldamento, deumidifica" },
      { label: "Silenziosità", value: "Da 19 dB(A) unità interna" },
    ],
    benefits: [
      "Classe energetica A+++ per il massimo risparmio in bolletta",
      "Gestione smart da smartphone: accendi e regola ovunque tu sia",
      "Filtri antibatterici e antiallergici per aria sempre pulita",
      "Funzione caldo/freddo: comfort tutto l'anno con un solo apparecchio",
      "Installazione professionale con garanzia e assistenza dedicata",
    ],
    cardDescription: "Climatizzatori inverter A+++ con Wi-Fi, filtri antibatterici e gestione da app",
  },

  "pompe-di-calore": {
    tagline: "Riscaldamento efficiente, energia dall'aria",
    description:
      "Le pompe di calore Ariston rappresentano la soluzione più efficiente per il riscaldamento e la produzione di acqua calda sanitaria. Estraendo energia dall'aria esterna, producono fino a 4 kW di calore per ogni kW di elettricità consumato. Ideali per sostituire la vecchia caldaia e accedere agli incentivi fiscali per la riqualificazione energetica.",
    specs: [
      { label: "Tipologia", value: "Aria-acqua, split o monoblocco" },
      { label: "COP", value: "Fino a 4,5 (A7/W35)" },
      { label: "Classe energetica", value: "A+++" },
      { label: "Funzioni", value: "Riscaldamento, raffrescamento, ACS" },
      { label: "Gestione", value: "Controllo smart da app e cronotermostato" },
      { label: "Compatibilità", value: "Radiatori, pavimento radiante, fan coil" },
    ],
    benefits: [
      "Fino al 75% di risparmio rispetto a una caldaia tradizionale",
      "Riscaldamento + raffrescamento + acqua calda in un unico sistema",
      "Compatibile con impianti esistenti (radiatori e pavimento radiante)",
      "Accesso a detrazioni fiscali e incentivi Conto Termico",
      "Gestione smart per ottimizzare consumi e comfort automaticamente",
    ],
    cardDescription: "Pompe di calore Ariston A+++: fino al 75% di risparmio, incentivi fiscali",
  },

  "caldaia": {
    tagline: "Efficienza e affidabilità per il tuo comfort",
    description:
      "Le caldaie Hermann a condensazione offrono la massima efficienza per il riscaldamento e la produzione di acqua calda sanitaria. La tecnologia a condensazione recupera il calore dai fumi di scarico, riducendo i consumi fino al 30% rispetto a una caldaia tradizionale. Silenziose, compatte e compatibili con i sistemi domotici.",
    specs: [
      { label: "Tecnologia", value: "Condensazione ad alta efficienza" },
      { label: "Classe energetica", value: "A+" },
      { label: "Potenza", value: "Da 24 a 35 kW" },
      { label: "Produzione ACS", value: "Istantanea o con accumulo" },
      { label: "Gestione", value: "Cronotermostato smart, compatibile domotica" },
      { label: "Garanzia", value: "Garanzia estesa su scambiatore" },
    ],
    benefits: [
      "Fino al 30% di risparmio rispetto a una caldaia tradizionale",
      "Tecnologia a condensazione per la massima efficienza energetica",
      "Compatta e silenziosa: installazione anche in spazi ridotti",
      "Compatibile con cronotermostati smart e sistemi domotici",
      "Accesso a detrazioni fiscali per sostituzione caldaia",
    ],
    cardDescription: "Caldaie a condensazione Hermann: fino al 30% di risparmio, classe A+",
  },

  "impianti-fotovoltaici": {
    tagline: "Energia dal sole, indipendenza dalla bolletta",
    description:
      "Impianti fotovoltaici residenziali progettati su misura per massimizzare l'autoconsumo e ridurre la dipendenza dalla rete elettrica. Pannelli di ultima generazione ad alta efficienza, inverter intelligenti e sistemi di accumulo con batterie per utilizzare l'energia solare anche di sera. Servizio chiavi in mano dalla progettazione all'allaccio.",
    specs: [
      { label: "Pannelli", value: "Monocristallino alta efficienza (>21%)" },
      { label: "Inverter", value: "Ibrido con ottimizzatori di potenza" },
      { label: "Accumulo", value: "Batterie al litio da 5 a 15 kWh" },
      { label: "Monitoraggio", value: "App con dati produzione in tempo reale" },
      { label: "Garanzia pannelli", value: "25 anni su produzione" },
      { label: "Servizio", value: "Chiavi in mano: progetto, installazione, allaccio" },
    ],
    benefits: [
      "Risparmio fino all'80% sulla bolletta elettrica con accumulo",
      "Incentivi fiscali: detrazione 50% e Scambio Sul Posto",
      "Monitoraggio in tempo reale della produzione e dei consumi",
      "Garanzia 25 anni sulla produzione dei pannelli",
      "Servizio chiavi in mano senza pensieri: dalla pratica all'allaccio",
    ],
    cardDescription: "Fotovoltaico residenziale con accumulo: fino all'80% di risparmio, chiavi in mano",
  },

  "impianti-elettrici": {
    tagline: "Sicurezza e innovazione per la tua casa",
    description:
      "Progettazione e realizzazione di impianti elettrici civili a norma, dalla ristrutturazione completa all'adeguamento dell'impianto esistente. Quadri elettrici certificati, prese e punti luce posizionati strategicamente, predisposizione domotica e sistemi di protezione per la massima sicurezza della tua famiglia.",
    specs: [
      { label: "Tipologie", value: "Nuovo impianto, rifacimento, adeguamento" },
      { label: "Normativa", value: "CEI 64-8, dichiarazione di conformità" },
      { label: "Quadro elettrico", value: "Con protezioni differenziali e magnetotermiche" },
      { label: "Predisposizioni", value: "Domotica, ricarica auto elettrica" },
      { label: "Cablaggio", value: "Strutturato con guaine e scatole di derivazione" },
      { label: "Certificazione", value: "DiCo rilasciata a fine lavori" },
    ],
    benefits: [
      "Impianto a norma con dichiarazione di conformità certificata",
      "Predisposizione per domotica e ricarica auto elettrica",
      "Posizionamento strategico di prese e punti luce per il massimo comfort",
      "Protezioni elettriche di ultima generazione per la sicurezza della famiglia",
      "Assistenza post-installazione e pronto intervento",
    ],
    cardDescription: "Impianti elettrici a norma con predisposizione domotica, certificati DiCo",
  },

  "impianti-idraulici": {
    tagline: "Acqua e comfort, progettati su misura",
    description:
      "Progettazione e realizzazione di impianti idraulici per bagno, cucina e riscaldamento. Dalla ristrutturazione completa dell'impianto alla sostituzione di singoli elementi, con materiali di qualità e tecniche di installazione a norma. Tubazioni multistrato, collettori di distribuzione e sistemi di ricircolo per acqua calda istantanea.",
    specs: [
      { label: "Tipologie", value: "Nuovo impianto, rifacimento, riparazione" },
      { label: "Tubazioni", value: "Multistrato, PEX, rame" },
      { label: "Distribuzione", value: "Collettore per gestione indipendente zone" },
      { label: "Riscaldamento", value: "Radiatori, pavimento radiante, fan coil" },
      { label: "Certificazione", value: "A norma UNI, dichiarazione di conformità" },
      { label: "Assistenza", value: "Pronto intervento e manutenzione" },
    ],
    benefits: [
      "Impianto progettato su misura per le esigenze della tua casa",
      "Materiali di qualità per durata e affidabilità nel tempo",
      "Distribuzione a collettore per gestione indipendente di ogni zona",
      "Certificazione a norma con dichiarazione di conformità",
      "Assistenza post-installazione e pronto intervento",
    ],
    cardDescription: "Impianti idraulici su misura, materiali di qualità e certificazione a norma",
  },
};
