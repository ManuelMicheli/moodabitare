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
  /* ── SERRAMENTI ─────────────────────────────────────────────────── */

  "finestre-pvc-oknoplast": {
    tagline: "Isolamento superiore, bollette più leggere",
    description:
      "Le finestre in PVC Oknoplast combinano profili multicamera ad alta densità con vetri basso-emissivi per offrirti il massimo isolamento termico e acustico. Risultato concreto: fino al 40% di risparmio in bolletta e una casa silenziosa anche in contesti urbani. Come Premium Partner Oknoplast selezionati per la provincia di Varese, ti garantiamo condizioni esclusive e garanzia estesa fino a 10 anni.",
    specs: [
      { label: "Materiale", value: "PVC multicamera rinforzato in acciaio" },
      { label: "Trasmittanza termica", value: "Uw fino a 0,71 W/m²K" },
      { label: "Abbattimento acustico", value: "Fino a 47 dB" },
      { label: "Classe antieffrazione", value: "Fino a RC2" },
      { label: "Garanzia", value: "Fino a 10 anni" },
      { label: "Certificazioni", value: "CE, Passivhaus, PVC riciclabile" },
    ],
    benefits: [
      "Risparmio fino al 40% sui costi di riscaldamento e raffrescamento",
      "Zero manutenzione: non servono verniciature o trattamenti nel tempo",
      "Profili slim per massima luminosità negli ambienti",
      "Ampia gamma di colori e finiture effetto legno",
      "Accesso diretto a detrazioni fiscali al 50% con pratica gestita da noi",
    ],
    cardDescription: "Isolamento termico e acustico superiore, fino al 40% di risparmio in bolletta",
  },

  "finestre-alluminio-oknoplast": {
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

  "serramenti-legno-giannattasio": {
    tagline: "Il calore autentico del legno, con tecnologia moderna",
    description:
      "I serramenti in legno Giannattasio uniscono la bellezza naturale e il calore tattile del legno massello a prestazioni termiche di ultima generazione. Ogni serramento è realizzato artigianalmente in Italia con legni selezionati e certificati, trattati per resistere nel tempo senza perdere la loro eleganza naturale.",
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

  "monoblocchi-vmc-alpac": {
    tagline: "Finestra, isolamento e ricambio d'aria in un'unica soluzione",
    description:
      "I monoblocchi Alpac integrano cassonetto coibentato, sistema oscurante e ventilazione meccanica controllata (VMC) in un unico elemento prefabbricato. Elimini i ponti termici del vecchio cassonetto, migliori la qualità dell'aria indoor e semplifichi l'installazione con un solo intervento. La VMC filtra l'aria esterna e recupera fino al 91% del calore, garantendoti ambienti salubri senza sprechi energetici.",
    specs: [
      { label: "Tipologia", value: "Monoblocco prefabbricato con VMC integrata" },
      { label: "Isolamento cassonetto", value: "EPS ad alta densità, spessore 40-60 mm" },
      { label: "Recupero calore VMC", value: "Fino al 91%" },
      { label: "Filtrazione aria", value: "Filtri F7 antipolline e polveri sottili" },
      { label: "Certificazioni", value: "Blower Door Test, classe energetica A" },
      { label: "Compatibilità", value: "Tutti i tipi di serramento e oscurante" },
    ],
    benefits: [
      "Elimina i ponti termici del vecchio cassonetto: addio muffa e condensa",
      "Aria sempre pulita e filtrata senza aprire le finestre",
      "Recupero energetico fino al 91%: riscaldi meno, risparmi di più",
      "Un solo intervento per cassonetto, oscurante e VMC",
      "Detrazioni fiscali al 50% con pratica gestita da noi",
    ],
    cardDescription: "Cassonetto, oscurante e VMC integrati: zero ponti termici, aria sempre pulita",
  },

  /* ── PORTONCINI ────────────────────────────────────────────────── */

  "portoncini-alluminio-oknoplast": {
    tagline: "L'ingresso che accoglie con stile e sicurezza",
    description:
      "I portoncini in alluminio Oknoplast della linea Tenvis offrono un'ampia gamma di modelli personalizzabili con accessori e finiture di pregio. Design contemporaneo e prestazioni elevate di isolamento termico e sicurezza antieffrazione, per un ingresso che valorizza l'intera facciata della tua casa.",
    specs: [
      { label: "Materiale", value: "Alluminio a taglio termico" },
      { label: "Linea", value: "Tenvis — ampia gamma modelli" },
      { label: "Sicurezza", value: "Prestazioni antieffrazione certificate" },
      { label: "Isolamento termico", value: "Elevate prestazioni di isolamento" },
      { label: "Personalizzazione", value: "Accessori e finiture personalizzabili" },
      { label: "Garanzia", value: "Garanzia estesa Oknoplast" },
    ],
    benefits: [
      "Ampia scelta di modelli della linea Tenvis",
      "Personalizzabile con accessori e finiture di pregio",
      "Elevate prestazioni di isolamento termico",
      "Sicurezza antieffrazione certificata",
      "Detrazioni fiscali con pratica gestita da noi",
    ],
    cardDescription: "Portoncini Oknoplast linea Tenvis: design, isolamento e sicurezza antieffrazione",
  },

  /* ── PORTE ──────────────────────────────────────────────────────── */

  "porte-blindate-alias": {
    tagline: "Sicurezza certificata, design che si integra nella tua casa",
    description:
      "Le porte blindate Alias combinano struttura in acciaio ad alta resistenza con finiture eleganti che si adattano a qualsiasi stile d'interni. Ogni porta è certificata in classe antieffrazione fino a 4 e garantisce isolamento termico e acustico superiore, proteggendo la tua famiglia senza compromessi estetici.",
    specs: [
      { label: "Struttura", value: "Acciaio zincato, spessore lamiera 20/10" },
      { label: "Classe antieffrazione", value: "Fino a Classe 4 (UNI ENV 1627)" },
      { label: "Punti di chiusura", value: "Fino a 15 punti di ancoraggio" },
      { label: "Isolamento termico", value: "Uw fino a 1,0 W/m²K" },
      { label: "Abbattimento acustico", value: "Fino a 40 dB" },
      { label: "Finiture", value: "Laccato, legno, laminato, effetto pietra" },
    ],
    benefits: [
      "Massima sicurezza per la tua famiglia con certificazione antieffrazione fino a Classe 4",
      "Isolamento termico e acustico: la porta d'ingresso non è più il punto debole",
      "Finiture personalizzabili: da fuori protegge, da dentro arreda",
      "Serrature europee di ultima generazione con cilindro antitrapano",
      "Installazione e assistenza diretta con garanzia Mood Abitare",
    ],
    cardDescription: "Protezione fino a Classe 4, isolamento termico e acustico, finiture eleganti",
  },

  "porte-interne-bertolotto": {
    tagline: "Design italiano che trasforma ogni passaggio",
    description:
      "Le porte interne Bertolotto sono realizzate interamente in Italia con materiali di alta qualità e un'attenzione artigianale al dettaglio. Dalla porta filomuro che scompare nella parete alla porta scorrevole salvaspazio, ogni soluzione è pensata per valorizzare i tuoi ambienti con linee pulite, finiture ricercate e un funzionamento silenzioso e preciso.",
    specs: [
      { label: "Produzione", value: "100% italiana, stabilimento piemontese" },
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

  /* ── OSCURANTI & SICUREZZA ──────────────────────────────────────── */

  "persiane-erreci": {
    tagline: "Sicurezza e oscuramento con l'eleganza delle persiane",
    description:
      "Le persiane Erreci Sicurezza uniscono la funzione oscurante tradizionale alla protezione antieffrazione, senza rinunciare all'estetica. Disponibili in alluminio e acciaio con lamelle orientabili, ti permettono di regolare luce e ventilazione mantenendo la massima sicurezza. Verniciatura a polvere per resistenza totale agli agenti atmosferici.",
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

  "grate-inferriate-alias": {
    tagline: "Protezione invisibile, tranquillità visibile",
    description:
      "Le grate e inferriate Alias offrono protezione antieffrazione certificata con un design discreto che non compromette la vista e la luminosità dei tuoi ambienti. Disponibili in versione fissa o apribile, si integrano con qualsiasi tipo di serramento e si adattano a ogni contesto architettonico, dalla villa alla palazzina.",
    specs: [
      { label: "Materiale", value: "Acciaio zincato e verniciato" },
      { label: "Barre", value: "Tonde o quadre, sezione da 12 a 16 mm" },
      { label: "Tipologie", value: "Fissa, a battente, scorrevole, estensibile" },
      { label: "Certificazione", value: "UNI EN 1627 fino a Classe 3" },
      { label: "Verniciatura", value: "A polvere, gamma colori RAL" },
      { label: "Serratura", value: "A cilindro europeo con chiave di sicurezza" },
    ],
    benefits: [
      "Protezione certificata senza compromettere luce e panorama",
      "Modelli apribili per uscita di sicurezza conforme alle normative",
      "Design discreto che si adatta a qualsiasi facciata",
      "Verniciatura a polvere: resistente, durevole e personalizzabile",
      "Sopralluogo e preventivo gratuiti per la soluzione su misura",
    ],
    cardDescription: "Sicurezza certificata con design discreto, per luce e panorama senza compromessi",
  },

  "avvolgibili-pasini": {
    tagline: "Isolamento, sicurezza e comfort a portata di pulsante",
    description:
      "Gli avvolgibili Pasini offrono un sistema completo di oscuramento, isolamento e protezione in un'unica soluzione. Disponibili in alluminio coibentato o PVC ad alta densità, possono essere motorizzati per il massimo comfort e si integrano perfettamente con monoblocchi e cassonetti di nuova generazione per eliminare i ponti termici.",
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
      "Compatibili con monoblocchi Alpac per eliminare i ponti termici",
    ],
    cardDescription: "Oscuramento coibentato e motorizzabile, con antisollevamento integrato",
  },

  "zanzariere-zanzar-sistem": {
    tagline: "Aria fresca in casa, insetti fuori",
    description:
      "Le zanzariere Zanzar Sistem sono progettate per integrarsi perfettamente con qualsiasi tipo di serramento, garantendo protezione totale da insetti e pollini senza rinunciare a luce e ventilazione naturale. Il sistema a scorrimento laterale o verticale è fluido, silenzioso e resistente nel tempo grazie a guide in alluminio e reti in fibra di vetro di alta qualità.",
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

  "tende-tecniche-sharknet": {
    tagline: "Gestisci la luce, controlla la temperatura",
    description:
      "Le tende tecniche e plissè Sharknet ti permettono di filtrare, oscurare o modulare la luce in ogni ambiente con precisione e stile. Ideali per finestre di qualsiasi forma — anche triangolari, trapezoidali o ad arco — si integrano direttamente nel serramento per un risultato pulito e minimal. La gamma di tessuti tecnici protegge dai raggi UV e contribuisce all'isolamento termico estivo.",
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

  /* ── ARREDO CASA ────────────────────────────────────────────────── */

  "cucine-cucinesse": {
    tagline: "La tua cucina, progettata intorno alla tua vita",
    description:
      "Le cucine Cucinesse sono progettate su misura e realizzate in Italia con materiali di prima scelta. Dal layout funzionale alle finiture, ogni dettaglio nasce dalla tua quotidianità: come cucini, come vivi, quanto spazio hai. Il nostro architetto ti segue dalla progettazione con render 3D alla realizzazione finale, per una cucina che è davvero tua.",
    specs: [
      { label: "Produzione", value: "100% italiana, stabilimento dedicato" },
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

  "arredo-bagno-merati": {
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

  "parquet-laminati-skema": {
    tagline: "Il pavimento che trasforma l'atmosfera di casa",
    description:
      "I parquet e laminati Skema offrono superfici di altissima qualità estetica e prestazionale per ogni ambiente della casa. Dal parquet in legno massello per chi cerca autenticità al laminato ad alta resistenza per le zone ad alto traffico, ogni soluzione garantisce durabilità, facilità di manutenzione e un impatto visivo che valorizza l'intero ambiente.",
    specs: [
      { label: "Tipologie", value: "Parquet massello, multistrato, laminato, LVT" },
      { label: "Classi d'uso", value: "Da residenziale a commerciale intenso (AC5)" },
      { label: "Spessori", value: "Da 7 mm (laminato) a 15 mm (massello)" },
      { label: "Resistenza", value: "Antigraffio, antimacchia, resistente all'umidità" },
      { label: "Posa", value: "Click, incollata, flottante — anche su riscaldamento a pavimento" },
      { label: "Certificazioni", value: "CE, classe E1 (bassa emissione formaldeide)" },
    ],
    benefits: [
      "Compatibile con riscaldamento a pavimento per massimo comfort",
      "Laminati ad alta resistenza: ideali per famiglie con bambini e animali",
      "Vasta gamma di decori: effetto legno, pietra, cemento, marmo",
      "Posa rapida con sistema click: meno tempo, meno disagi",
      "Classe E1 per la qualità dell'aria indoor della tua famiglia",
    ],
    cardDescription: "Parquet e laminati per ogni ambiente, compatibili con riscaldamento a pavimento",
  },

  "sanitari-rubinetteria-karag": {
    tagline: "Comfort e igiene quotidiana con design contemporaneo",
    description:
      "I sanitari e la rubinetteria Karag combinano design contemporaneo, funzionalità evoluta e facilità di pulizia. Sanitari rimless (senza brida) per la massima igiene, rubinetteria con cartucce ceramiche di lunga durata e finiture resistenti al calcare: ogni elemento è pensato per semplificare la tua routine quotidiana e durare nel tempo.",
    specs: [
      { label: "Sanitari", value: "Ceramica di alta qualità, tecnologia rimless" },
      { label: "Scarico WC", value: "Dual flush 3/4,5 L (risparmio idrico)" },
      { label: "Rubinetteria", value: "Cartuccia ceramica, portata regolabile" },
      { label: "Finiture", value: "Cromo, nero opaco, oro spazzolato, nickel" },
      { label: "Tipologie sanitari", value: "Sospesi, a terra, compatti" },
      { label: "Garanzia", value: "5 anni su ceramica, 2 anni su rubinetteria" },
    ],
    benefits: [
      "Sanitari rimless: igiene superiore, pulizia più facile e veloce",
      "Risparmio idrico con scarico dual flush da soli 3 litri",
      "Rubinetteria con cartuccia ceramica: niente gocciolamenti per anni",
      "Finiture anticalcare per mantenere la lucentezza nel tempo",
      "Ampia scelta di stili: dal minimal al classico contemporaneo",
    ],
    cardDescription: "Sanitari rimless e rubinetteria di design, igiene superiore e risparmio idrico",
  },

  "scale-ringhiere-fontanot": {
    tagline: "Collegare i piani, valorizzare gli spazi",
    description:
      "Le scale e ringhiere Fontanot uniscono ingegneria strutturale e design contemporaneo per creare collegamenti verticali che diventano elementi d'arredo. Disponibili in legno, acciaio, vetro e combinazioni di materiali, ogni scala è configurabile su misura e certificata per la massima sicurezza. Dalla scala a chiocciola salvaspazio alla scala a giorno con struttura a vista, trovi la soluzione per ogni contesto.",
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
};
