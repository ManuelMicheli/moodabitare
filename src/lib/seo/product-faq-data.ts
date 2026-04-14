/**
 * FAQ specifiche per ogni categoria prodotto (36 slug).
 * Usate in due punti:
 * 1) JSON-LD FAQPage per ogni pagina prodotto (aiuta featured snippets e AI extraction).
 * 2) Sezione visibile <ProductFaq /> sotto le specs.
 *
 * Linee guida:
 * - Domande long-tail in italiano naturale (come le scriverebbe un utente reale).
 * - Risposte 60-180 parole: abbastanza ricche per essere citabili, abbastanza brevi per leggibilità.
 * - Nessuna promessa di prezzo secco (fascia di mercato va bene), rimandare sempre al preventivo gratuito.
 * - Copre: costi, detrazioni, tempi, differenze materiali/modelli, manutenzione, garanzia.
 */

import type { FaqItem } from "./faq-data";

export const PRODUCT_FAQS: Record<string, FaqItem[]> = {
  /* ── SERRAMENTI ───────────────────────────────────────────────── */

  "infissi-pvc": [
    {
      question: "Quanto costano gli infissi in PVC Oknoplast a Varese?",
      answer:
        "Il prezzo di una finestra in PVC Oknoplast dipende da dimensioni, modello (Prolux, Prismatic, Winergetic), tipo di vetro e accessori. In media, per una finestra a due ante di dimensioni standard (120×140 cm), il prezzo posato si colloca tra 700 e 1.300 €, iva esclusa. Come Premium Partner Oknoplast per la provincia di Varese garantiamo condizioni esclusive e preventivi gratuiti con sopralluogo a domicilio.",
    },
    {
      question: "Posso detrarre l'acquisto delle finestre in PVC dalle tasse?",
      answer:
        "Sì. La sostituzione di serramenti esistenti rientra nell'ecobonus (detrazione fino al 50% in 10 quote annuali, secondo la normativa aggiornata al 2026) e nel bonus ristrutturazioni. Noi gestiamo l'intera pratica fiscale: asseverazione del tecnico abilitato, trasmissione ENEA entro 90 giorni dalla posa, modulistica per il bonifico parlante. Valuta anche il Conto Termico per abitazioni private esistenti.",
    },
    {
      question: "Quanto isolano le finestre in PVC rispetto a quelle in alluminio?",
      answer:
        "A parità di vetro, il PVC isola meglio del legno e dell'alluminio non a taglio termico. Le finestre Oknoplast raggiungono valori di trasmittanza termica Uw da 0,6 a 1,0 W/m²K — tra i migliori sul mercato residenziale. I profili multicamera con anime in acciaio rinforzato combinano tenuta termica e stabilità meccanica. Per un confronto dettagliato vedi la nostra guida 'Come scegliere tra infissi PVC, alluminio e legno'.",
    },
    {
      question: "Quanto tempo serve per sostituire le finestre di casa?",
      answer:
        "La sostituzione dei serramenti di un appartamento medio (6-8 finestre) richiede normalmente 1-2 giorni lavorativi. I tempi di consegna dal momento dell'ordine sono di circa 4-6 settimane per i modelli Oknoplast standard. La posa è eseguita dalla nostra squadra interna certificata, con patentino di posatore qualificato e rispetto della norma UNI 11673 sulla posa in opera.",
    },
  ],

  "infissi-alluminio": [
    {
      question: "Quando conviene scegliere l'alluminio invece del PVC per le finestre?",
      answer:
        "L'alluminio è la scelta ideale quando servono profili sottili per massimizzare la superficie vetrata (grandi vetrate, scorrevoli oltre 3 metri), per progetti architettonici contemporanei, o in zone costiere dove la salsedine aggredisce altri materiali. Gli infissi in alluminio Oknoplast a taglio termico raggiungono Uw fino a 0,90 W/m²K, prestazioni paragonabili al PVC di fascia alta.",
    },
    {
      question: "Gli infissi in alluminio si possono personalizzare nel colore?",
      answer:
        "Sì. La verniciatura a polvere permette oltre 200 finiture nella gamma RAL, più effetti legno e finiture bicolore (colore diverso interno/esterno). Le verniciature sono resistenti ai raggi UV e agli agenti atmosferici e mantengono l'aspetto originale per decenni senza manutenzione. È possibile ottenere finiture sabbiate, spazzolate o lucide.",
    },
    {
      question: "Quanto durano le finestre in alluminio?",
      answer:
        "Un serramento in alluminio a taglio termico di qualità ha vita utile stimata oltre i 40 anni senza degrado strutturale. L'alluminio non marcisce, non si deforma e non è attaccato da insetti xilofagi. La verniciatura richiede al massimo una pulizia periodica con acqua e detergente neutro. Le guarnizioni vanno sostituite indicativamente ogni 15-20 anni.",
    },
    {
      question: "L'alluminio isola bene dal freddo?",
      answer:
        "I moderni profili in alluminio a taglio termico con barriera in poliammide e multicamera isolante raggiungono valori di isolamento molto elevati (Uw fino a 0,90 W/m²K), perfettamente adeguati anche a zone climatiche rigide come la provincia di Varese. Sul mercato residenziale italiano si installa esclusivamente alluminio a taglio termico — i vecchi profili senza barriera sono fuori norma da oltre 15 anni.",
    },
  ],

  "infissi-alluminio-legno": [
    {
      question: "Che differenza c'è tra infissi alluminio-legno e solo legno?",
      answer:
        "Gli infissi alluminio-legno Korus hanno il legno all'interno (calore estetico, isolamento naturale) e un rivestimento in alluminio verniciato all'esterno che elimina completamente la manutenzione esposta agli agenti atmosferici. Rispetto al legno puro, non richiedono riverniciature periodiche e hanno durata strutturale superiore; rispetto all'alluminio puro, offrono calore estetico interno e migliore isolamento termico.",
    },
    {
      question: "Quali essenze di legno sono disponibili per gli infissi alluminio-legno?",
      answer:
        "Le essenze più richieste sono rovere (naturale o tinto), frassino lamellare e pino nordico. Tutte sono disponibili in diverse finiture: naturale trasparente, tinto, sbiancato, anticato. Il legno è FSC/PEFC certificato (foreste a gestione responsabile). L'alluminio esterno è personalizzabile in qualsiasi colore RAL, permettendo abbinamenti estetici ricercati tra interno ed esterno.",
    },
    {
      question: "Gli infissi alluminio-legno richiedono manutenzione?",
      answer:
        "La parte esterna in alluminio verniciato richiede solo pulizia periodica con acqua e sapone neutro, nessuna verniciatura. La parte interna in legno va trattata una volta ogni 5-8 anni con prodotti specifici per rinfrescare la finitura — intervento molto leggero, eseguibile in autonomia. Nel complesso la manutenzione è inferiore all'80% rispetto agli infissi in legno puro.",
    },
    {
      question: "Sono adatti a case di pregio o storiche?",
      answer:
        "Sì, sono una delle scelte più richieste per ristrutturazioni di pregio e case storiche dove si vuole mantenere l'aspetto estetico del legno a vista (spesso richiesto anche dai vincoli di sovrintendenza) ma con prestazioni energetiche moderne e manutenzione minima. Korus produce anche profili storici e ferramenta a vista su richiesta.",
    },
  ],

  "infissi-legno": [
    {
      question: "Gli infissi in legno richiedono molta manutenzione?",
      answer:
        "La manutenzione moderna è molto più leggera rispetto al passato. I serramenti in legno Pail vengono trattati con vernici ecologiche ad acqua multistrato che proteggono il legno per 8-12 anni prima che sia necessaria una riverniciatura. È sufficiente una pulizia annuale con panno umido e una verifica delle guarnizioni. Su richiesta forniamo kit manutenzione e assistenza programmata.",
    },
    {
      question: "Che essenze di legno sono disponibili?",
      answer:
        "Le finestre Pail sono disponibili in pino nordico lamellare (ottimo rapporto qualità/prezzo), rovere lamellare (elevata stabilità e prestigio), mogano e douglas. Le finiture includono verniciatura trasparente, tinta, sbiancata, effetto anticato. Tutto il legno utilizzato è FSC/PEFC certificato, proveniente da foreste a gestione sostenibile.",
    },
    {
      question: "Il legno si deforma con l'umidità?",
      answer:
        "Il legno lamellare utilizzato per i serramenti moderni è dimensionalmente molto più stabile del legno massello tradizionale. La lamellazione incrociata e i trattamenti in autoclave rendono il serramento resistente a umidità e variazioni di temperatura. I serramenti Pail sono garantiti contro la deformazione per tutta la durata della garanzia commerciale.",
    },
    {
      question: "Gli infissi in legno isolano come quelli in PVC?",
      answer:
        "Il legno è un isolante naturale eccellente: i serramenti Pail raggiungono Uw fino a 1,0 W/m²K, valori in linea con il PVC di buona qualità. Il legno offre in più un comfort tattile e acustico percepibile (attenua meglio le vibrazioni sonore). Per raggiungere prestazioni estreme (Uw 0,6-0,8) il PVC multicamera rimane la scelta più economica.",
    },
  ],

  portoncini: [
    {
      question: "Che differenza c'è tra un portoncino d'ingresso e una porta blindata?",
      answer:
        "Il portoncino d'ingresso è pensato come facciata dell'abitazione: unisce estetica, isolamento termico e una buona sicurezza di base (classi RC2-RC3 sui modelli premium Kopen). La porta blindata è invece focalizzata sulla sicurezza antieffrazione (fino a RC5) con estetica più essenziale. In molti casi si sceglie un portoncino Oknoplast Tenvis per villette unifamiliari, e una blindata per appartamenti di palazzi.",
    },
    {
      question: "I portoncini Oknoplast si possono personalizzare?",
      answer:
        "Sì, profondamente. La linea Tenvis conta 9 collezioni con oltre 30 modelli base, declinabili in bicolore, finiture in alluminio spazzolato, vetro acidato, pannelli HPL decorati, pannelli LED integrati. Sono disponibili anche versioni smart con apertura biometrica, app Bluetooth e campanello video integrato.",
    },
    {
      question: "Quanto isolano i portoncini rispetto a una porta blindata?",
      answer:
        "I portoncini premium in alluminio a taglio termico (Tenvis) raggiungono Ud fino a 0,75 W/m²K — prestazione da serramento passivo. Le porte blindate tradizionali arrivano indicativamente a Ud 1,0-1,5 W/m²K, migliorabili con tamponi aerogel. Se l'ingresso si apre direttamente sull'abitato riscaldato, un portoncino premium riduce significativamente la bolletta.",
    },
    {
      question: "È possibile sostituire solo il portoncino senza toccare l'ingresso?",
      answer:
        "Sì, nella maggior parte dei casi. I nostri posatori rilevano a domicilio le misure precise e realizzano un portoncino su misura che si adatta al vano esistente con controtelaio termo-acustico. L'intervento dura generalmente 4-6 ore, senza necessità di opere murarie invasive.",
    },
  ],

  persiane: [
    {
      question: "Conviene scegliere persiane in alluminio o in legno?",
      answer:
        "Le persiane in alluminio (Erreci, Persit) non richiedono manutenzione, resistono a sole, pioggia e salsedine, e pesano meno del legno (utile per facciate in muratura debole). Le persiane in legno hanno estetica più calda e sono spesso richieste per edifici storici vincolati. Oggi la maggior parte delle sostituzioni sceglie alluminio effetto-legno per avere il meglio dei due mondi.",
    },
    {
      question: "Le persiane possono avere lamelle orientabili?",
      answer:
        "Sì. Le persiane con lamelle orientabili permettono di regolare luce, ventilazione e privacy mantenendo la persiana chiusa — utilissime nelle camere da letto in estate. Sono disponibili sia in versione manuale (manovra interna) sia motorizzata con telecomando e integrazione domotica.",
    },
    {
      question: "Si possono montare persiane al posto delle tapparelle esistenti?",
      answer:
        "Sì, nella maggior parte dei casi. Dopo un sopralluogo tecnico si valuta la presenza e le condizioni del cassonetto, l'ingombro laterale disponibile e la struttura del muro. Se necessario si realizza un controtelaio integrato. L'intervento è rapido e permette di trasformare completamente l'estetica della facciata mantenendo la funzionalità di oscuramento.",
    },
    {
      question: "Le persiane in alluminio possono essere antieffrazione?",
      answer:
        "Esistono persiane di sicurezza con lamelle rinforzate, cerniere antistrappo, serrature multipunto e certificazione antieffrazione fino a classe RC3. Per chi vuole massimizzare la protezione c'è la linea persiane blindate, una categoria dedicata che coniuga estetica tradizionale e sicurezza certificata.",
    },
  ],

  frangisole: [
    {
      question: "A cosa servono i frangisole?",
      answer:
        "I frangisole sono sistemi di schermatura solare a lamelle orientabili, montati all'esterno degli edifici. Bloccano l'irraggiamento diretto sulle vetrate riducendo il surriscaldamento estivo fino al 75%, senza impedire la vista né la ventilazione. Risultato: meno uso del climatizzatore, bollette più basse e maggior comfort. Sono frequenti su facciate contemporanee, uffici e abitazioni con grandi vetrate a sud/ovest.",
    },
    {
      question: "I frangisole possono essere motorizzati?",
      answer:
        "Sì, tutti i modelli Lupak sono motorizzabili. Le lamelle si orientano automaticamente in base alla posizione del sole tramite sensori astronomici e a sensori vento (sicurezza anti-ribaltamento). Sono integrabili con domotica KNX, BTicino Living Now, Home Assistant, Google Home e Alexa per gestione centralizzata.",
    },
    {
      question: "Il frangisole sostituisce la tapparella?",
      answer:
        "Può affiancarla o sostituirla, a seconda del progetto. Il frangisole è più efficace nel controllo solare estivo ma non oscura completamente (le lamelle lasciano passare un minimo di luce). Se serve oscuramento totale notturno, la soluzione migliore è abbinarlo a tende interne oscuranti.",
    },
    {
      question: "Quanto dura un frangisole esterno?",
      answer:
        "Un frangisole in alluminio estruso anodizzato o verniciato a polvere ha vita utile oltre i 25-30 anni senza degradi visibili. I motori elettrici hanno garanzia tipica 5 anni e vita utile 15+ anni. La manutenzione si limita a una pulizia annuale con acqua e una verifica dei componenti mobili.",
    },
  ],

  tapparelle: [
    {
      question: "Quando conviene sostituire le tapparelle?",
      answer:
        "La sostituzione è consigliata quando la tapparella presenta stecche rotte, scorrimento rumoroso o bloccato, spifferi consistenti dal cassonetto (sintomo di ponte termico), o semplicemente perché si vuole passare alla motorizzazione. Una tapparella Pasini coibentata con cassonetto di nuova generazione riduce le dispersioni termiche del foro finestra fino al 30%.",
    },
    {
      question: "Le tapparelle motorizzate si possono controllare da smartphone?",
      answer:
        "Sì. I motori tubolari Somfy, Nice o equivalenti integrati da Pasini sono compatibili con app dedicate, gruppi domotici (KNX, BTicino), Google Home, Alexa e Apple HomeKit (tramite hub). È possibile impostare scenari (es. chiusura automatica al tramonto), timer, comandi vocali.",
    },
    {
      question: "Le tapparelle in PVC sono più economiche di quelle in alluminio?",
      answer:
        "Sì, il PVC è tipicamente il 20-30% più economico dell'alluminio coibentato. Il PVC ha vita utile più breve (circa 15-20 anni vs 25-30 dell'alluminio) e prestazioni di isolamento leggermente inferiori. Per immobili da ristrutturare in ottica lunga l'alluminio coibentato è la scelta consigliata; per usi secondari o budget contenuti il PVC è un'ottima alternativa.",
    },
    {
      question: "Il cassonetto attuale va sostituito insieme alla tapparella?",
      answer:
        "Dipende dallo stato del cassonetto esistente. Se è ancora integro e coibentato correttamente, può essere mantenuto. Se presenta ponti termici evidenti (condensa, spifferi), è fortemente consigliato sostituirlo con un cassonetto isolato di nuova generazione: in questo caso l'intervento rientra pienamente nell'ecobonus.",
    },
  ],

  /* ── PORTE INTERNE & BLINDATE ──────────────────────────── */

  "porte-interne": [
    {
      question: "Quali tipologie di porte interne sono disponibili?",
      answer:
        "Offriamo tutte le tipologie principali: a battente standard, scorrevoli a vista con binario esterno, scorrevoli a scomparsa interno parete, filomuro (porta rasomuro), a libro per spazi ridotti, pivot per porte di grandi dimensioni, vetrate e bilico. Ogni soluzione è disponibile con finiture laccate, in vera impiallacciatura di legno, laminato tecnico, vetro, tessuto e effetto cemento.",
    },
    {
      question: "Che differenza c'è tra una porta filomuro e una porta tradizionale?",
      answer:
        "La porta filomuro è priva di stipite a vista: quando chiusa è perfettamente complanare al muro, diventando un elemento architettonico pulito. Richiede un controtelaio specifico da incassare in fase di cartongesso o muratura. È una soluzione molto ricercata nel design contemporaneo. Le porte tradizionali con stipite sono più economiche e più facili da installare in una ristrutturazione leggera.",
    },
    {
      question: "Le porte interne si possono fonoisolare?",
      answer:
        "Sì. Esistono modelli specifici con anima fonoassorbente, guarnizioni perimetrali e paraspifferi a ghigliottina che raggiungono un abbattimento acustico fino a 38 dB — utili per camere da letto, studio, home cinema. Durante il sopralluogo valutiamo l'esigenza acustica effettiva e consigliamo il modello più idoneo.",
    },
    {
      question: "Quanto costa una porta interna di qualità?",
      answer:
        "Il prezzo di una porta interna di qualità si colloca tipicamente tra 400 e 1.500 € posata (iva esclusa), a seconda di tipologia (battente standard vs filomuro o scorrevole a scomparsa), finitura (laccato vs impiallacciatura di pregio) e personalizzazioni. Durante il sopralluogo realizziamo un preventivo dettagliato e trasparente, con stima precisa dei costi e dei tempi.",
    },
  ],

  "porte-blindate": [
    {
      question: "Che differenza c'è tra porta blindata classe 3, 4 e 5?",
      answer:
        "Le classi di antieffrazione (norma UNI EN 1627) misurano il tempo di resistenza a un tentativo di effrazione con attrezzi standard: classe 3 — resistenza a ladro occasionale con attrezzi semplici (3 minuti); classe 4 — ladro esperto con attrezzi elettrici (10 minuti); classe 5 — ladro professionista con flex e trapano (15 minuti). Per appartamenti urbani la classe 3 è adeguata, per villette isolate o piani terra è consigliata la classe 4.",
    },
    {
      question: "La porta blindata isola anche dal freddo e dai rumori?",
      answer:
        "Le moderne porte blindate Alias raggiungono valori di isolamento termico Ud fino a 0,8 W/m²K (con pannello aerogel) e abbattimento acustico fino a 42 dB — prestazioni paragonabili a una finestra di buona qualità. Questo è importante quando la blindata separa l'abitato riscaldato da un vano scala non riscaldato o rumoroso.",
    },
    {
      question: "La serratura della porta blindata si può sostituire con una digitale?",
      answer:
        "Sì. Tutte le porte blindate Alias ed Erreci sono predisposte per serrature evolute: cilindro europeo di sicurezza antimanomissione, serratura elettronica con codice, serratura biometrica con lettore impronte, serratura smart con apertura da app Bluetooth. La sostituzione è possibile anche su porte già installate, previa verifica di compatibilità.",
    },
    {
      question: "La porta blindata si può personalizzare esteticamente?",
      answer:
        "Completamente. L'aspetto esterno ed interno sono indipendenti: puoi avere una porta laccata bianca all'interno (in linea con la casa) e un pannello effetto legno o HPL decorato all'esterno. Sono disponibili anche versioni a bilico, coplanari con le altre porte interne, con inserti LED integrati o con pannello smart. La blindata moderna è un elemento di design, non un compromesso estetico.",
    },
  ],

  /* ── SICUREZZA ─────────────────────────────────────────── */

  "grate-sicurezza": [
    {
      question: "Le grate di sicurezza riducono la luminosità interna?",
      answer:
        "Le grate moderne Erreci utilizzano barre tonde piene di piccola sezione (14 mm) con interassi calcolati per ridurre al minimo l'ingombro visivo. L'impatto sulla luminosità è limitato al 5-8% rispetto a una finestra senza grata. Esistono anche modelli estensibili (grata Kiusa) che si possono aprire completamente durante il giorno per liberare la vista.",
    },
    {
      question: "Le grate si possono installare su qualsiasi finestra?",
      answer:
        "Sì, sia su finestre a battente che su porte-finestra. L'installazione richiede un fissaggio strutturale al muro portante tramite zanche chimiche o meccaniche. Per edifici storici vincolati esistono versioni con finitura verniciata effetto ferro battuto o con disegni tradizionali, approvabili dalla Soprintendenza.",
    },
    {
      question: "Le grate estensibili sono sicure come le grate fisse?",
      answer:
        "Sì, le grate estensibili (modello Kiusa e simili) sono certificate fino alla classe RC2-RC3. La struttura a pantografo in acciaio carbonitrurato e la serratura multipunto garantiscono resistenza antieffrazione. La differenza con le grate fisse è la praticità: durante il giorno possono essere ripiegate lateralmente liberando completamente il vano.",
    },
    {
      question: "Le grate rientrano nel bonus ristrutturazione?",
      answer:
        "Sì, l'installazione di grate di sicurezza rientra nel bonus ristrutturazione (detrazione del 50% secondo la normativa 2026) e nel bonus sicurezza quando previsto. Gestiamo l'intera pratica fiscale: fattura parlante, istruzioni per il bonifico dedicato, eventuale asseverazione tecnica.",
    },
  ],

  "persiane-blindate": [
    {
      question: "Quando conviene installare persiane blindate invece di grate?",
      answer:
        "Le persiane blindate sono preferibili quando si vuole mantenere l'estetica tradizionale della persiana (frequente su ville e case d'epoca) o quando si cerca una protezione dinamica — aperta di giorno, chiusa e bloccata di notte. Le grate sono più discrete ma fisse. Le persiane blindate offrono anche oscuramento e riduzione degli spifferi oltre alla sicurezza.",
    },
    {
      question: "Le persiane blindate sono più costose di quelle normali?",
      answer:
        "Sì, indicativamente il 40-60% in più a parità di dimensioni. La differenza è giustificata dallo spessore maggiore delle lamelle, dalle cerniere rinforzate antistrappo, dalla serratura multipunto e dalla certificazione antieffrazione. Per immobili esposti (piani terra, villette isolate) il sovrapprezzo è ampiamente compensato dalla sicurezza aggiuntiva.",
    },
    {
      question: "Sono compatibili con le finestre esistenti?",
      answer:
        "Sì, nella maggior parte dei casi. Si installano all'esterno tramite un telaio rinforzato ancorato al muro perimetrale della finestra. Richiedono uno spazio laterale adeguato per l'apertura a battente o scorrevole. Durante il sopralluogo gratuito verifichiamo le misure e la fattibilità tecnica specifica.",
    },
    {
      question: "Le persiane blindate richiedono manutenzione?",
      answer:
        "La manutenzione è minima: pulizia periodica con acqua e detergente neutro, lubrificazione della serratura ogni 2-3 anni, controllo delle cerniere ogni 5 anni. Essendo in acciaio zincato e verniciato a polvere, resistono a sole, pioggia e salsedine per decenni senza degradi strutturali.",
    },
  ],

  "allarme-videosorveglianza": [
    {
      question: "Come funziona un impianto di allarme Inim?",
      answer:
        "L'impianto Inim si basa su una centrale antintrusione certificata IMQ che comunica via radio o filo con sensori perimetrali (contatti magnetici su finestre e porte), sensori volumetrici interni (rilevano movimento) e sirene esterne. In caso di allarme, la centrale invia notifiche push all'app dello smartphone, attiva sirene e può allertare un istituto di vigilanza. Il grado di sicurezza (2 o 3) è certificato secondo la norma EN 50131.",
    },
    {
      question: "Posso vedere le telecamere di casa dal cellulare?",
      answer:
        "Sì. Le telecamere IP Full HD o 4K Inim si collegano all'app Inim Home che permette visualizzazione live da qualsiasi luogo con connessione internet, riproduzione delle registrazioni, notifiche push a rilevazione di movimento e gestione di più impianti. L'app è gratuita e disponibile su iOS e Android.",
    },
    {
      question: "L'impianto funziona anche senza internet?",
      answer:
        "Sì. La centrale Inim utilizza connettività ridondante: Wi-Fi primaria, GSM/4G come backup automatico, LAN opzionale. Se internet cade, l'allarme continua a funzionare localmente (sirene, chiamate) e comunica via SMS o tramite rete cellulare. La registrazione delle telecamere continua localmente su NVR.",
    },
    {
      question: "Si può integrare l'allarme con la domotica di casa?",
      answer:
        "Sì. I sistemi Inim dispongono di moduli di integrazione con le principali piattaforme domotiche (KNX, BTicino, Home Assistant) e con Google Home / Alexa per comandi vocali (es. 'attiva allarme totale'). È possibile creare scenari complessi: chiusura tapparelle e attivazione allarme al comando 'uscita casa'.",
    },
  ],

  /* ── COMFORT & COMPLEMENTI ─────────────────────────────── */

  zanzariere: [
    {
      question: "Che tipo di zanzariera scegliere per una finestra?",
      answer:
        "Dipende dalla tipologia di serramento. Per finestre a battente si usano zanzariere a rullo avvolgibili verticali (le più comuni) o plissettate (più compatte). Per porte-finestra sono preferibili le zanzariere laterali a scorrimento (plissé o a rullo) o le magnetiche per uso saltuario. Per portoni e grandi aperture si installano zanzariere a battente o scorrevoli a binario.",
    },
    {
      question: "Le zanzariere filtrano anche i pollini?",
      answer:
        "Le reti standard (18×16 maglie) bloccano insetti ma non i pollini più piccoli. Per chi soffre di allergie esistono reti speciali antipolline con maglia più fitta che trattengono gran parte degli allergeni pur mantenendo passaggio d'aria sufficiente. L'installazione è identica ma il costo è leggermente superiore.",
    },
    {
      question: "Le zanzariere possono essere danneggiate dai gatti?",
      answer:
        "Le reti standard sì, dalle unghiate. Per chi ha animali domestici esistono reti rinforzate 'petscreen' in fibra di vetro ad alta resistenza, con trama fitta e trattamento specifico. Resistono a graffi e pressione senza strapparsi. Sono installabili su qualsiasi tipologia di zanzariera.",
    },
    {
      question: "Le zanzariere rientrano nell'ecobonus?",
      answer:
        "Le zanzariere schermanti certificate (con fattore solare gtot ≤ 0,35) rientrano nell'ecobonus al 50% come schermature solari. I modelli ordinari non rientrano in agevolazioni specifiche. Durante il sopralluogo valutiamo la certificazione del modello scelto e la convenienza fiscale complessiva.",
    },
  ],

  "tende-tecniche": [
    {
      question: "Le tende tecniche si installano sul serramento o in controsoffitto?",
      answer:
        "Le tende tecniche a rullo, plissé e veneziane Sharknet / Zanzar Sistem si installano normalmente direttamente sul telaio del serramento (installazione a vista) o incassate nel cassonetto dedicato (installazione a scomparsa). L'installazione a scomparsa richiede una predisposizione in fase di ristrutturazione ma garantisce un risultato estetico più pulito.",
    },
    {
      question: "Le tende plissé funzionano su finestre di forma non standard?",
      answer:
        "Sì, è una delle loro caratteristiche distintive. I sistemi plissé si adattano a finestre triangolari, trapezoidali, tonde e ad arco — forme su cui le tende a rullo non funzionano. Ogni tenda è realizzata su misura con rilievo tecnico preciso durante il sopralluogo.",
    },
    {
      question: "Le tende tecniche proteggono dai raggi UV?",
      answer:
        "I tessuti tecnici screen di qualità (es. Sergé 600, Satiné 5500) bloccano fino al 99% dei raggi UV preservando arredi, pavimenti in legno e tessuti da scolorimento. Contribuiscono anche al controllo del calore estivo riflettendo parte della radiazione solare. Il fattore di apertura (Ov) determina il bilanciamento tra protezione e visuale verso l'esterno.",
    },
    {
      question: "Le tende motorizzate consumano molta energia?",
      answer:
        "No. I motori tubolari moderni assorbono potenza solo durante i pochi secondi di movimento (circa 60-100W di picco). In standby il consumo è trascurabile (meno di 0,5W). Su base annuale, il consumo energetico di una tenda motorizzata è inferiore a quello di una lampadina LED accesa 10 ore al giorno.",
    },
  ],

  "scale-ringhiere": [
    {
      question: "Quanto spazio serve per una scala a chiocciola?",
      answer:
        "Una scala a chiocciola Sinfonia può partire da un ingombro di soli 120 cm di diametro per scale di servizio (es. collegamento a mansarda), fino a 200+ cm per scale principali comode. Il diametro determina pedata, pendenza e comfort d'uso. Le scale a giorno (diritte, a L, a U) richiedono più metratura ma offrono maggiore comfort.",
    },
    {
      question: "Le scale interne devono essere certificate?",
      answer:
        "Sì. Le scale interne per civile abitazione devono rispettare il DM 236/89 e la norma UNI EN ISO 14122 per pendenza massima, altezza pedata/alzata, parapetti. Le scale Sinfonia sono fornite con dichiarazione di conformità e — se richiesto — calcolo strutturale firmato da tecnico abilitato.",
    },
    {
      question: "È possibile abbinare materiali diversi nella stessa scala?",
      answer:
        "Sì, è una delle richieste più frequenti. Combinazioni tipiche: struttura in acciaio verniciato + pedate in rovere + ringhiera in vetro temperato; oppure acciaio inox + pedate in cemento levigato. Il configuratore Sinfonia permette di visualizzare l'abbinamento prima della produzione.",
    },
    {
      question: "Le ringhiere in vetro sono sicure?",
      answer:
        "Sì, se realizzate in vetro temperato stratificato di sezione adeguata (normalmente 8+8 mm). Il vetro temperato è 5-7 volte più resistente del vetro normale e, in caso di rottura, si frammenta in piccole schegge non taglienti. Lo strato intermedio in PVB trattiene i frammenti mantenendo l'integrità del parapetto.",
    },
  ],

  /* ── OUTDOOR ───────────────────────────────────────────── */

  pergole: [
    {
      question: "Qual è la differenza tra pergola bioclimatica e tenda?",
      answer:
        "La pergola bioclimatica ha una struttura fissa in alluminio con lamelle orientabili sul tetto: protegge da pioggia, sole, vento e si adatta alle condizioni meteo. La tenda da sole (a bracci o cassonata) ha un telo retrattile che si apre/chiude, protegge solo dal sole ed è pensata per uso saltuario. La pergola bioclimatica è una struttura abitativa a tutti gli effetti; la tenda è un'ombreggiatura temporanea.",
    },
    {
      question: "La pergola bioclimatica richiede permessi edilizi?",
      answer:
        "Dipende dal Comune e dalle dimensioni. In genere le pergole bioclimatiche sono strutture amovibili soggette a CILA o SCIA. Per installazioni su beni vincolati servono autorizzazioni aggiuntive dalla Soprintendenza. Forniamo supporto tecnico durante la pratica: rilievo, progetto firmato da tecnico abilitato, asseverazione.",
    },
    {
      question: "Le pergole bioclimatiche rientrano nel bonus ristrutturazione?",
      answer:
        "Sì, le pergole bioclimatiche con lamelle schermanti certificate (valori di trasmittanza adeguati) rientrano nell'ecobonus al 50% come schermature solari, a condizione che siano installate su edificio esistente e legate a parete. Gestiamo la pratica fiscale completa.",
    },
    {
      question: "Una pergola bioclimatica resiste alla neve e al vento forte?",
      answer:
        "Sì. Le pergole Tendarredo e Persit sono certificate per carichi neve fino a 200 kg/m² (a seconda del modello e della luce tra i pilastri) e resistenza al vento fino a 130 km/h. Per installazioni in zone particolarmente esposte si utilizzano versioni rinforzate con traverse aggiuntive.",
    },
  ],

  "gazebi-strutture-legno": [
    {
      question: "Quanto dura una struttura in legno lamellare esterna?",
      answer:
        "Un gazebo in legno lamellare trattato in autoclave classe 3/4 ha vita utile oltre i 20-25 anni se installato correttamente (fondazione solida, aerazione sotto la base, trattamenti periodici). Il trattamento in autoclave impregna il legno in profondità con prodotti fungicidi e insetticidi, prevenendo marcescenza e attacchi parassitari.",
    },
    {
      question: "Posso fare un carport in legno al posto del box auto?",
      answer:
        "Sì. Il carport in legno lamellare è una soluzione sempre più richiesta: più economico di un garage in muratura, esteticamente piacevole, installabile in tempi brevi. Per legge può essere esente da concessione edilizia se amovibile e sotto determinate superfici (varia per Comune). Valutiamo la normativa locale durante il sopralluogo.",
    },
    {
      question: "Il legno lamellare per esterni va verniciato ogni anno?",
      answer:
        "No. Dopo il trattamento in autoclave, il legno mantiene la protezione di base per anni. Un impregnante superficiale protettivo va applicato ogni 3-5 anni, con intervento rapido eseguibile anche in autonomia. Se si vuole cambiare colore o rinfrescare l'aspetto si può verniciare con prodotti specifici per legno esterno.",
    },
    {
      question: "I gazebi sono trasportabili o fissi?",
      answer:
        "Realizziamo sia gazebi fissi ancorati a plinti di fondazione (struttura stabile, protezione completa) sia soluzioni amovibili con piedi appoggiati (facili da smontare, utili per spazi condominiali o in locazione). La scelta dipende dall'uso previsto, dalla normativa locale e dall'esigenza di stabilità strutturale.",
    },
  ],

  "tende-da-sole": [
    {
      question: "Che tipo di tenda da sole scegliere per un balcone?",
      answer:
        "Per un balcone di dimensioni medie (fino a 4 m) è ideale una tenda a bracci estensibili con cassonetto integrale, che protegge completamente il tessuto quando la tenda è chiusa. Per balconi stretti è più adatta una tenda a caduta (verticale). Per logge e terrazze ampie si usano tende a cassonetto a bracci di grandi dimensioni o pergole con telo retrattile.",
    },
    {
      question: "Le tende da sole servono davvero a risparmiare in bolletta?",
      answer:
        "Sì. Una tenda da sole esterna ben posizionata (esposizione sud/ovest) può ridurre la temperatura interna delle stanze fino a 5°C in estate, diminuendo significativamente l'uso del climatizzatore. Lo schermo all'esterno blocca la radiazione solare prima che colpisca il vetro — è molto più efficace di qualsiasi tenda interna. L'investimento si ripaga tipicamente in 4-6 anni di uso.",
    },
    {
      question: "Le tende rientrano nell'ecobonus?",
      answer:
        "Sì, le tende da sole con certificazione schermante (fattore solare gtot ≤ 0,35) installate su edifici esistenti rientrano nell'ecobonus al 50%. Il tessuto deve essere certificato e installato su finestre/porte-finestra o vetrate. Gestiamo la certificazione e la pratica ENEA.",
    },
    {
      question: "I sensori vento delle tende motorizzate sono affidabili?",
      answer:
        "Sì. I sensori vento Somfy/Tendarredo rilevano raffiche oltre una soglia impostabile (tipicamente 30-40 km/h) e richiudono automaticamente la tenda per prevenire danni ai bracci. Il sensore sole invece può essere impostato per aprire la tenda al superamento di una soglia di luminosità. Entrambi sono configurabili via telecomando o app.",
    },
  ],

  "vetrate-panoramiche": [
    {
      question: "Le vetrate panoramiche a pacchetto sono termiche?",
      answer:
        "Le vetrate panoramiche Mc Slide sono principalmente pensate per chiudere verande, logge e dehors — non sostituiscono un infisso termico di un'abitazione riscaldata. Esistono versioni con vetro basso-emissivo che migliorano l'isolamento, ma per ambienti abitabili riscaldati si consigliano infissi tradizionali a taglio termico. Per verande stagionali non riscaldate sono la soluzione ideale.",
    },
    {
      question: "Quanto sono sicure le vetrate panoramiche?",
      answer:
        "Sono realizzate in vetro temperato di sicurezza (spessore 8-10 mm) che, in caso di rottura, si frammenta in piccoli granuli non taglienti. Sono disponibili opzioni con vetro stratificato per sicurezza aggiuntiva e serratura antiintrusione per chiusura notturna. L'altezza massima standard è 3 metri.",
    },
    {
      question: "Si possono aprire completamente per avere un effetto 'open'?",
      answer:
        "Sì, è la caratteristica principale. I pannelli scorrono su guida a binario e si impacchettano lateralmente in un angolo, liberando completamente la luce di apertura. L'effetto è scenografico e permette di trasformare una veranda chiusa in uno spazio aperto in pochi secondi.",
    },
    {
      question: "Le guide dei profili minimali si ostruiscono facilmente?",
      answer:
        "Le guide minimali sono progettate con sistemi di drenaggio e accesso facilitato per la pulizia periodica. Una pulizia ogni 2-3 mesi in stagione d'uso è sufficiente per mantenere scorrevolezza perfetta. I cuscinetti a sfera sottostanti i pannelli non richiedono lubrificazione.",
    },
  ],

  piscine: [
    {
      question: "Quanto tempo serve per realizzare una piscina interrata?",
      answer:
        "Una piscina interrata in pannelli d'acciaio o vetroresina richiede indicativamente 4-8 settimane: scavo (1 settimana), posa struttura e impianti (2-3 settimane), rivestimento e finiture (1-2 settimane), collaudo e messa in funzione (1 settimana). Una piscina in cemento armato richiede 8-14 settimane. I tempi variano con il meteo e la complessità del progetto.",
    },
    {
      question: "Che permessi servono per costruire una piscina in giardino?",
      answer:
        "Dipende dal Comune e dalla tipologia. Le piscine fuori terra stagionali sono spesso esenti da permesso. Le piscine interrate di dimensioni sopra certi limiti richiedono CILA, SCIA o permesso di costruire. Gestiamo tutta la pratica edilizia tramite tecnico abilitato: rilievo, progetto, deposito pratica e direzione lavori.",
    },
    {
      question: "Quali sono i costi indicativi di manutenzione annua?",
      answer:
        "Una piscina residenziale di medie dimensioni comporta costi annui indicativi di: prodotti chimici 200-400 €, energia per pompa e riscaldamento 400-1.200 €, manutenzione straordinaria 100-200 € in media. Con coperture automatiche e pompe a velocità variabile i consumi energetici si riducono significativamente.",
    },
    {
      question: "Posso avere una piscina riscaldata?",
      answer:
        "Sì. Le soluzioni più efficienti sono pompe di calore dedicate alle piscine (coefficiente COP 5-6) o abbinamento con impianto fotovoltaico dedicato. Il riscaldamento permette di estendere la stagione balneare da aprile a ottobre. In abbinamento con copertura isotermica, il consumo è contenuto.",
    },
  ],

  "rivestimento-piscine": [
    {
      question: "Quando va sostituito il liner di una piscina?",
      answer:
        "Un liner in PVC ha vita utile tipica di 8-12 anni, dopo i quali inizia a perdere elasticità e può presentare infiltrazioni. Segnali di sostituzione: scolorimento marcato, rughe permanenti, consumo d'acqua superiore al normale (possibile infiltrazione). La sostituzione è l'intervento più rapido: 3-5 giorni lavorativi.",
    },
    {
      question: "Qual è la differenza tra liner e PVC armato?",
      answer:
        "Il liner è una membrana in PVC posata come un 'sacco' dentro la piscina: economico, rapido da installare, durata 8-12 anni. Il PVC armato è un tessuto in PVC ad alta resistenza saldato a caldo in opera: più spesso (1,5 mm vs 0,75 del liner), più resistente ai raggi UV e agli urti, durata 20+ anni. Il PVC armato è la scelta standard per piscine pubbliche e residenziali di qualità.",
    },
    {
      question: "Posso cambiare il rivestimento senza demolire la piscina?",
      answer:
        "Sì, assolutamente. È l'intervento tipico del rivestimento piscine: si svuota la vasca, si prepara il fondo (rasatura, impermeabilizzazione), si posa il nuovo rivestimento (liner, PVC armato, mosaico o pietra ricostruita). La struttura esistente viene mantenuta. Tempi: 5-15 giorni lavorativi a seconda del materiale.",
    },
    {
      question: "Il mosaico in piscina è ancora una scelta attuale?",
      answer:
        "Sì, il mosaico vetroso di qualità rimane la soluzione più prestigiosa e duratura (vita utile 30+ anni). Richiede più tempo di posa e un budget superiore ma offre effetti estetici impareggiabili (trasparenze, cromatismi, decori). Per chi cerca alternative contemporanee il gres porcellanato grande formato certificato piscina è un'opzione moderna molto richiesta.",
    },
  ],

  "arredo-giardino": [
    {
      question: "Quali materiali resistono meglio alle intemperie?",
      answer:
        "I materiali più resistenti all'esterno sono: alluminio verniciato a polvere (nessuna manutenzione, durata decennale), teak (legno nobile, richiede oliatura occasionale), rattan sintetico in fibra di polietilene HDPE (resistente UV, lavabile). Materiali da evitare o proteggere: ferro non verniciato (ruggine), legni non trattati (marcescenza), tessuti non outdoor (scolorimento).",
    },
    {
      question: "Quanto devo proteggere l'arredo giardino d'inverno?",
      answer:
        "L'arredo outdoor di qualità (alluminio, rattan sintetico, teak) resiste all'inverno senza protezioni. È comunque consigliabile coprire cuscini e tessuti con teli impermeabili o, se possibile, ricoverarli in garage. Per il legno non trattato è indispensabile un ricovero invernale o una copertura integrale.",
    },
    {
      question: "Offrite consulenza per arredare un terrazzo completo?",
      answer:
        "Sì. Il servizio di progettazione outdoor comprende sopralluogo, moodboard estetico, proposta di layout in render 3D, selezione dei complementi (sedute, tavoli, illuminazione, vasi, tessili) e pianificazione della posa. Lavoriamo su budget concordato con il cliente, dal terrazzo urbano alla villa con giardino esteso.",
    },
    {
      question: "I barbecue a gas o a carbonella sono permessi in condominio?",
      answer:
        "Dipende dal regolamento condominiale. Generalmente i barbecue a gas sono accettati (fumo e odore limitati) mentre quelli a carbonella possono essere vietati. Esistono anche barbecue elettrici a induzione con fumi quasi nulli, adatti anche a balconi ristretti. Verificare sempre il regolamento condominiale prima dell'acquisto.",
    },
  ],

  /* ── CASA & ARREDO ─────────────────────────────────────── */

  "cucine-su-misura": [
    {
      question: "Quanto costa una cucina su misura Arrex?",
      answer:
        "Il prezzo di una cucina su misura Arrex varia molto con le scelte progettuali. Come riferimento: cucina lineare 3 metri con elettrodomestici base 5.000-8.000 €; cucina ad angolo 4+2 metri finitura media 9.000-15.000 €; cucina con isola e finiture premium 18.000-35.000 € e oltre. Durante la progettazione 3D forniamo un preventivo dettagliato con tutte le alternative.",
    },
    {
      question: "Quanto dura la progettazione e realizzazione di una cucina?",
      answer:
        "Dalla prima consulenza alla posa: 2-3 settimane di progettazione (moodboard, render 3D, revisioni), 4-6 settimane di produzione in fabbrica Arrex, 2-4 giorni di installazione in casa. In totale 7-10 settimane. Nei casi di cucine con elementi particolarmente complessi (isole con finiture speciali) i tempi possono allungarsi.",
    },
    {
      question: "Si può sostituire solo ante e top senza rifare tutta la cucina?",
      answer:
        "Sì, è un servizio richiesto soprattutto per cucine ben strutturate ma esteticamente datate. Si mantengono basi, colonne e cassetti; si sostituiscono ante (anche su misura), maniglie, top (laminato, quarzo, dekton, laminam) e lavello. Risparmio tipico 40-60% rispetto a cucina nuova. La fattibilità dipende dallo stato delle strutture esistenti.",
    },
    {
      question: "Gli elettrodomestici integrati sono inclusi?",
      answer:
        "Nella maggior parte dei casi sì, ma in modo modulare: possiamo fornire i principali brand (Bosch, Siemens, Miele, Samsung, Haier) con condizioni dedicate, oppure il cliente può acquistare gli elettrodomestici altrove e noi li integriamo nel progetto. Consigliamo di definire marchio e modelli in fase di progettazione 3D per garantire incassi precisi.",
    },
  ],

  "arredo-bagno": [
    {
      question: "Come si progetta un bagno su misura?",
      answer:
        "Il processo inizia con un sopralluogo per rilievo delle misure e valutazione degli impianti esistenti. Segue una fase di progettazione 3D in cui si posizionano sanitari, doccia/vasca, mobili, illuminazione e rivestimenti, esplorando 2-3 varianti estetiche. Una volta approvato il progetto si passa alla fornitura e posa, coordinata con eventuali lavori di idraulica ed elettrico.",
    },
    {
      question: "Meglio una doccia a filo pavimento o con piatto?",
      answer:
        "La doccia a filo pavimento è esteticamente più pulita, accessibile (anche per utenti con ridotta mobilità) e pratica da pulire. Richiede però uno scarico lineare o a pavimento ben progettato e un pavimento perfettamente impermeabilizzato. La doccia con piatto tradizionale è più economica e compatibile con qualsiasi scarico esistente. In ristrutturazioni profonde consigliamo quasi sempre il filo pavimento.",
    },
    {
      question: "I mobili bagno Merati resistono all'umidità?",
      answer:
        "Sì. I mobili Merati sono realizzati in pannelli nobilitati idrorepellenti o laminato HPL per resistere all'umidità tipica del bagno. Le ante e i frontali sono disponibili in finiture laccate opache, laminato, impiallacciatura di legno e materiali effetto pietra. Con una ventilazione adeguata del bagno, hanno vita utile di 15+ anni senza degrado.",
    },
    {
      question: "Quanto costa rifare completamente un bagno?",
      answer:
        "Il costo di un bagno rifatto completamente chiavi in mano (demolizione, impianti nuovi, sanitari, rivestimenti, doccia, mobili) si colloca tipicamente tra 8.000 e 20.000 € per un bagno di 5-8 m², a seconda del livello di finitura e della complessità impiantistica. Durante il sopralluogo forniamo un preventivo trasparente. Si applica il bonus ristrutturazione al 50%.",
    },
  ],

  sanitari: [
    {
      question: "Meglio sanitari sospesi o a pavimento?",
      answer:
        "I sanitari sospesi sono la scelta preferita nelle ristrutturazioni moderne: esteticamente più puliti, facilitano la pulizia del pavimento, liberano visivamente lo spazio. Richiedono un telaio di installazione a parete (geberit o simile) che va previsto in fase di impianti. I sanitari a pavimento sono più economici e compatibili con qualsiasi scarico esistente, utili in ristrutturazioni leggere.",
    },
    {
      question: "I sanitari filo muro funzionano sempre?",
      answer:
        "I sanitari filo muro (back-to-wall) si appoggiano al pavimento e si spingono a contatto con la parete, nascondendo i tubi. Sono più puliti esteticamente dei tradizionali ma meno dei sospesi. Compatibili con la maggior parte degli impianti esistenti. Rappresentano un buon compromesso tra estetica contemporanea e semplicità installativa.",
    },
    {
      question: "Il bidet è obbligatorio in Italia?",
      answer:
        "Sì, per legge in Italia ogni abitazione deve avere almeno un bidet (regio decreto 1265/1934 e regolamenti successivi, non sempre applicati rigorosamente ma tecnicamente vigenti). In ristrutturazioni è sempre consigliato mantenerlo sia per convenienza funzionale sia per rispetto normativo ai fini del valore immobiliare.",
    },
    {
      question: "Quali sono i sanitari più facili da pulire?",
      answer:
        "I sanitari con tecnologia rimless (senza brida interna) sono decisamente più facili da pulire: niente punti nascosti dove si accumulano calcare e batteri. La maggior parte dei sanitari Sani e Co è disponibile in versione rimless. In combinazione con ceramica trattata con smalti antibatterici (tipo Aqua-zero), la manutenzione è ulteriormente semplificata.",
    },
  ],

  rubinetteria: [
    {
      question: "Meglio un miscelatore a leva singola o a due leve?",
      answer:
        "Il miscelatore a leva singola (più comune) è comodo e rapido: una sola mano regola sia portata che temperatura. Quello a due leve (classico) offre regolazione più precisa della temperatura ed estetica tradizionale, adatta a bagni di stile vintage o classico. Per bambini e anziani il leva singola è più intuitivo.",
    },
    {
      question: "Che differenza c'è tra cromato e PVD?",
      answer:
        "La cromatura è il rivestimento standard dei rubinetti: lucido, resistente, riconoscibile. Il PVD (Physical Vapor Deposition) è una tecnologia più avanzata che crea rivestimenti colorati (nero opaco, oro satinato, bronzo, canna di fucile) estremamente resistenti a graffi e usura. Il PVD costa circa il 30-50% in più del cromato ma ha vita utile superiore.",
    },
    {
      question: "I rubinetti a risparmio idrico funzionano bene?",
      answer:
        "Sì. I rubinetti con aeratore a basso flusso miscelano aria all'acqua mantenendo sensazione di getto pieno con consumo ridotto (tipicamente 4-6 l/min vs 10-12 l/min tradizionali). Il risparmio idrico ed energetico (meno acqua calda da scaldare) è significativo sul lungo periodo, senza compromessi sulla resa. Tutti i rubinetti Fiore possono essere dotati di aeratori a risparmio.",
    },
    {
      question: "I miscelatori termostatici doccia valgono la spesa?",
      answer:
        "Sì, soprattutto per famiglie con bambini. Il miscelatore termostatico mantiene una temperatura costante anche se qualcun altro in casa apre un rubinetto o scarica uno sciacquone. Previene gli sbalzi bruschi di temperatura e possibili scottature. Il sovrapprezzo rispetto a un miscelatore standard è giustificato dalla sicurezza e dal comfort d'uso.",
    },
  ],

  ceramiche: [
    {
      question: "Cosa distingue il gres porcellanato dalle ceramiche tradizionali?",
      answer:
        "Il gres porcellanato è una ceramica cotta ad alte temperature (1200-1300°C) che la rende impermeabile, densissima e resistente a urti, graffi, macchie, gelo e sollecitazioni meccaniche. Le ceramiche tradizionali (bicottura, monocottura) sono più porose, più facili da posare ma meno performanti. Oggi oltre il 90% delle nuove pavimentazioni residenziali è in gres porcellanato.",
    },
    {
      question: "I grandi formati 120x280 cm sono difficili da posare?",
      answer:
        "Richiedono posatori esperti e attrezzature specifiche (ventose, sistemi livellanti, tavolo da taglio per grande formato). Il risultato estetico — pochissime fughe, effetto monolitico — giustifica la complessità. Tutti i nostri posatori sono formati sulla posa di grande formato. Il costo di posa è il 20-40% superiore rispetto ai formati standard 60x60.",
    },
    {
      question: "Il gres effetto marmo si distingue dal marmo vero?",
      answer:
        "I gres effetto marmo di nuova generazione (stampa digitale ad alta definizione, venature tridimensionali, superficie lucida o satinata) raggiungono un livello di realismo visivo altissimo. A distanza sono difficilmente distinguibili dal marmo vero. Il vantaggio è pratico: il gres non si macchia, non richiede trattamenti periodici e costa una frazione del marmo naturale.",
    },
    {
      question: "Si può posare la ceramica nuova sopra a quella vecchia?",
      answer:
        "Sì, in molti casi. Il 'sopra-posa' riduce tempi e costi di demolizione, non produce rifiuti speciali, mantiene i sottoservizi intatti. Richiede però che la ceramica esistente sia ben aderente al massetto, che il livello finale non crei problemi con le porte, e che si utilizzino primer e collanti adatti. Durante il sopralluogo valutiamo la fattibilità.",
    },
  ],

  parquet: [
    {
      question: "Meglio parquet massello o prefinito?",
      answer:
        "Il prefinito multistrato è oggi lo standard: costituito da un substrato stabile in betulla o abete e uno strato superiore in legno nobile (3-5 mm), è dimensionalmente più stabile, si posa più rapidamente, compatibile con riscaldamento a pavimento e già verniciato o oliato in fabbrica. Il massello (tavole in legno pieno) è la scelta tradizionale più pregiata ma più delicata a umidità e richiede lamatura e finitura in opera.",
    },
    {
      question: "Il parquet è compatibile con il riscaldamento a pavimento?",
      answer:
        "Il parquet prefinito multistrato con spessore 14-15 mm e legni stabili (rovere, noce) è pienamente compatibile con riscaldamento a pavimento a bassa temperatura (mandata 35-40°C). È consigliato evitare essenze molto termo-sensibili (faggio, acero) e massello sopra 18 mm. L'installazione richiede uno schema di posa specifico con adesivi elastici.",
    },
    {
      question: "Ogni quanto va trattato il parquet?",
      answer:
        "Un parquet verniciato richiede manutenzione molto leggera: pulizia periodica con prodotti specifici, rinfrescatura del film verniciante ogni 8-12 anni. Un parquet oliato richiede rioliatura ogni 2-4 anni — intervento più frequente ma di tipo 'cosmetico', che ravviva colore e profondità. Entrambe le finiture durano decenni con cura adeguata.",
    },
    {
      question: "Cosa fare se un listello di parquet si danneggia?",
      answer:
        "Sui parquet incollati è possibile intervenire su un singolo listello: rimozione con fresatura, sostituzione con pezzo compatibile, incollaggio e eventuale verniciatura di raccordo. Su parquet flottante la sostituzione è più semplice (smontaggio fino al punto danneggiato). Per questo è sempre utile conservare 2-3 mq di scarti come riserva per riparazioni future.",
    },
  ],

  /* ── RISCALDAMENTO ED ENERGIE RINNOVABILI ──────────────── */

  climatizzatori: [
    {
      question: "Quanti BTU servono per una stanza?",
      answer:
        "Indicativamente 340 BTU per m² per stanze con isolamento standard. Una camera da 15 m² richiede un climatizzatore da 9.000 BTU (2,5 kW); un soggiorno da 30 m² richiede 12.000-18.000 BTU. La scelta corretta dipende anche da esposizione, numero finestre, isolamento termico, piano. Un dimensionamento preciso è compito del tecnico durante il sopralluogo.",
    },
    {
      question: "Conviene un multi-split a un mono-split?",
      answer:
        "Se serve raffrescare 2+ stanze, il multi-split (un motore esterno, più unità interne) è più conveniente: un solo esterno, minore impatto estetico in facciata, efficienza complessiva alta. I mono-split singoli hanno flessibilità maggiore (si può accendere solo una stanza) ma richiedono più unità esterne. Oltre le 3 unità interne le prestazioni del multi-split iniziano a penalizzarsi — valutare uno split autonomo aggiuntivo.",
    },
    {
      question: "I climatizzatori Haier e Samsung sono compatibili con il bonus?",
      answer:
        "Sì. Climatizzatori in classe energetica A++ o superiore rientrano nel bonus ristrutturazione al 50% e/o nell'ecobonus, a seconda del tipo di intervento complessivo. Gestiamo la pratica fiscale e l'eventuale comunicazione ENEA per le pompe di calore aria-aria inverter.",
    },
    {
      question: "Quanto consuma un climatizzatore moderno in estate?",
      answer:
        "Un climatizzatore inverter classe A+++ consuma significativamente meno di un modello vecchio (-40-60%). Uso stagionale tipico per una camera da 15 m² (mesi estivi, 8 ore al giorno): 120-180 kWh totali, circa 30-50 € di bolletta. L'inverter modula la potenza in continuo evitando accensioni/spegnimenti che consumano di più.",
    },
  ],

  "pompe-di-calore": [
    {
      question: "La pompa di calore sostituisce davvero la caldaia?",
      answer:
        "Sì, in case con buon isolamento termico e distribuzione a bassa temperatura (pavimento radiante o radiatori sovradimensionati). Una pompa di calore aria-acqua Ariston moderna copre riscaldamento, raffrescamento e acqua calda sanitaria con un COP di 3,5-5 — produce cioè 3,5-5 kWh di calore per ogni kWh elettrico consumato. In abitazioni ben isolate, elimina totalmente il gas metano.",
    },
    {
      question: "Quanto costa installare una pompa di calore aria-acqua?",
      answer:
        "L'investimento per una pompa di calore Ariston per villetta unifamiliare si colloca indicativamente tra 9.000 e 16.000 € installata (include unità esterna, split interno o modulo idronico, bollitore ACS, collegamenti). Dopo ecobonus 65% o conto termico, l'importo netto scende tipicamente sotto i 7.000 €. Rientro dell'investimento tipico 6-10 anni.",
    },
    {
      question: "Le pompe di calore funzionano anche con il freddo di Varese?",
      answer:
        "Sì. Le pompe di calore moderne Ariston mantengono buone prestazioni fino a -15°C esterni — condizioni molto più rigide dei minimi storici della provincia di Varese. A temperature esterne attorno a 0°C il COP resta sopra 3, garantendo piena efficienza. Nelle zone più fredde si può prevedere una resistenza elettrica di back-up per i picchi invernali.",
    },
    {
      question: "Posso abbinare pompa di calore e fotovoltaico?",
      answer:
        "È l'abbinamento ideale. Il fotovoltaico produce energia elettrica che alimenta la pompa di calore — che a sua volta la converte in calore con efficienza 3-5x. Risultato: climatizzazione ed acqua calda praticamente a costo zero nei mesi soleggiati. Con un accumulo batteria si estende l'autoconsumo anche alla sera. Soluzione energetica pienamente integrata e sostenibile.",
    },
  ],

  caldaia: [
    {
      question: "Conviene ancora installare una caldaia a gas nel 2026?",
      answer:
        "Dipende dal contesto. Per sostituire una caldaia obsoleta in un condominio senza pompe di calore, la caldaia a condensazione Hermann di ultima generazione resta una soluzione efficiente (rendimento 108-110%) e meno invasiva rispetto al cambio di sistema. Per ristrutturazioni profonde in villetta con buon isolamento, oggi si tende a orientare il cliente verso pompa di calore + fotovoltaico.",
    },
    {
      question: "Cos'è una caldaia ibrida?",
      answer:
        "La caldaia ibrida combina caldaia a condensazione + pompa di calore in un unico sistema. Una logica di controllo sceglie automaticamente la fonte più efficiente in base alla temperatura esterna: pompa di calore con meteo mite (più efficiente), caldaia nei giorni più freddi (potenza superiore). Ottimo compromesso per ristrutturazioni progressive, senza imporre l'isolamento spinto richiesto dalla sola pompa di calore.",
    },
    {
      question: "Ogni quanto serve la manutenzione della caldaia?",
      answer:
        "Per legge la manutenzione ordinaria di una caldaia va effettuata annualmente (controllo e pulizia). Il controllo fumi (obbligatorio per Varese, zona E) va fatto ogni 2 anni sulle caldaie a metano. Proponiamo contratti di manutenzione programmata che includono visita, pulizia, controllo fumi e libretto compilato a norma.",
    },
    {
      question: "Quanto dura una caldaia moderna?",
      answer:
        "Una caldaia a condensazione Hermann di qualità ha vita utile attesa di 15-20 anni con manutenzione annuale regolare. Componenti come scambiatore primario in acciaio inox sono garantiti fino a 5-10 anni. La sostituzione è spesso anticipata non per guasto ma per upgrade tecnologico (migliore efficienza, integrazione domotica).",
    },
  ],

  "impianti-fotovoltaici": [
    {
      question: "Quanto costa un impianto fotovoltaico da 6 kW?",
      answer:
        "Un impianto fotovoltaico residenziale da 6 kW chiavi in mano si colloca tipicamente tra 9.000 e 14.000 € (iva agevolata 10%), a seconda di marchio pannelli, inverter e ottimizzatori. Con accumulo batteria da 10 kWh l'investimento sale a 16.000-22.000 €. Con detrazione fiscale al 50% e autoconsumo 50-70%, il ritorno dell'investimento è tipicamente 6-9 anni.",
    },
    {
      question: "Quanto produce un impianto fotovoltaico in provincia di Varese?",
      answer:
        "Un impianto da 6 kW orientato a sud con tilt ottimale produce in provincia di Varese tra 6.500 e 7.500 kWh/anno. Con consumi domestici medi di 3.000-4.500 kWh/anno (maggiori se c'è pompa di calore o auto elettrica), l'impianto copre largamente il fabbisogno, con surplus immesso in rete.",
    },
    {
      question: "È obbligatorio l'accumulo con batteria?",
      answer:
        "No, ma è fortemente consigliato. Senza batteria l'energia prodotta quando non c'è consumo viene immessa in rete e remunerata a tariffa agevolata (Scambio sul Posto o prezzo zonale, molto meno di quanto si paga l'acquisto). Con batteria si può autoconsumare anche la sera e la notte, massimizzando il risparmio. L'accumulo rientra nelle stesse detrazioni fiscali.",
    },
    {
      question: "Quanto durano i pannelli fotovoltaici?",
      answer:
        "I pannelli fotovoltaici di qualità hanno garanzia prestazionale 25-30 anni (produzione minima garantita) e vita utile attesa 35-40 anni. Il degrado tipico è 0,3-0,5% annuo. Gli inverter hanno garanzia 10-12 anni e vita utile 15-20 anni. Le batterie al litio hanno garanzia 10 anni (tipicamente 6.000-8.000 cicli) e vita utile simile.",
    },
  ],

  "impianti-elettrici": [
    {
      question: "Quando va rifatto l'impianto elettrico di casa?",
      answer:
        "L'impianto va rifatto quando è fuori norma (manca il salvavita differenziale, manca la messa a terra, prese non a norma) o insufficiente (interruttori che scattano spesso, mancanza di linee dedicate per cucina, lavatrice, climatizzatori). Generalmente impianti antecedenti al 1990 sono da rifare integralmente. Un rifacimento completo rilascia la Dichiarazione di Conformità obbligatoria per atti notarili.",
    },
    {
      question: "Quanto costa rifare l'impianto elettrico di un appartamento?",
      answer:
        "Il costo indicativo per rifare completamente l'impianto elettrico di un appartamento di 80-100 m² è di 5.000-12.000 € (iva esclusa), a seconda di livello di domotica, numero punti luce, cablaggi speciali (rete dati, TV, diffusione audio). L'intervento rientra nel bonus ristrutturazione al 50%.",
    },
    {
      question: "Cos'è un impianto elettrico domotico?",
      answer:
        "Un impianto domotico unifica in un unico sistema gestione luci, tapparelle, clima, sicurezza, irrigazione, audio/video. Protocolli diffusi: KNX (standard professionale europeo), BTicino Living Now/Now, Home Assistant (open source). Vantaggi: scenari personalizzati ('buonanotte' spegne tutto e chiude le tapparelle), ottimizzazione energetica, controllo da smartphone, valorizzazione immobile.",
    },
    {
      question: "L'impianto elettrico va predisposto per l'auto elettrica?",
      answer:
        "Sì, è sempre più richiesto. In fase di ristrutturazione predisponiamo una linea dedicata trifase o monofase 32A verso il garage/posto auto con predisposizione per wallbox fino a 22 kW. Questo evita di sovraccaricare l'impianto esistente quando si installerà la wallbox. La pre-predisposizione costa poche centinaia di euro se fatta in fase di impianto, contro migliaia di euro se eseguita dopo.",
    },
  ],

  "impianti-idraulici": [
    {
      question: "Quando conviene rifare l'impianto idraulico?",
      answer:
        "Il rifacimento è consigliato in presenza di tubi in ferro (soggetti a ossidazione, tipici di edifici pre-1980), cali di pressione cronici, perdite ripetute, acqua con particelle di ruggine. Il rifacimento con tubo in multistrato (rame/polietilene) garantisce durata 50+ anni e prestazioni perfette. È sempre consigliato durante una ristrutturazione profonda.",
    },
    {
      question: "Quanto dura un impianto idraulico moderno?",
      answer:
        "Un impianto realizzato con tubazioni in multistrato (tipo Pex-Al-Pex) o rame moderno ha vita utile attesa di 50+ anni senza interventi strutturali. I raccordi a pressare hanno affidabilità superiore ai vecchi giunti filettati o saldobrasati. Collettori e valvole sono componenti sostituibili in pochi anni di vita con interventi localizzati.",
    },
    {
      question: "Devo fare un addolcitore d'acqua?",
      answer:
        "In provincia di Varese e alto milanese l'acqua ha durezza medio-alta (25-35°F). L'addolcitore riduce il calcare, protegge caldaie, scaldabagni, elettrodomestici, aumenta la vita delle rubinetterie e migliora sensibilmente il comfort (pelle, capelli, tessuti). L'investimento si ripaga in qualche anno tra risparmio energetico (caldaia più efficiente) e vita utile degli elettrodomestici.",
    },
    {
      question: "Posso avere una rete idrica separata per l'acqua potabile e quella di servizio?",
      answer:
        "Sì, è un'evoluzione sempre più richiesta. Si prevede una rete dedicata con impianto di filtrazione e microfiltrazione (eventualmente con osmosi inversa) per l'acqua potabile ai rubinetti della cucina, mentre la rete generale alimenta gli altri usi. Si elimina la necessità di acquistare acqua in bottiglia, riducendo costi e plastica.",
    },
  ],
};
