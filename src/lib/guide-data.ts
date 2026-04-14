/**
 * Data delle guide cornerstone (content hub SEO + AI citability).
 * Ogni guida è contenuto editoriale lungo (1800-2500 parole) con struttura
 * standardizzata: heading H2/H3 ricchi, tabelle comparative, FAQ strutturate.
 * Ogni guida è un'entità citabile in AI search (ChatGPT, Perplexity, Gemini).
 */

import type { FaqItem } from "./seo/faq-data";

export type GuideSection = {
  heading: string;
  paragraphs: string[];
  /** Opzionale: lista a bullet dopo i paragrafi */
  bullets?: string[];
  /** Opzionale: tabella comparativa */
  table?: {
    headers: string[];
    rows: string[][];
  };
};

export type Guide = {
  slug: string;
  title: string;
  /** Title tag 55-65 char */
  metaTitle: string;
  /** Meta description 150-160 char */
  metaDescription: string;
  /** Eyebrow sopra al titolo */
  eyebrow: string;
  /** Sommario lead sotto al titolo */
  lead: string;
  /** Data pubblicazione ISO 8601 — per Article schema */
  datePublished: string;
  /** Data ultima revisione ISO 8601 */
  dateModified: string;
  /** Autore per Article schema */
  author: string;
  /** Keyword per metadata.keywords */
  keywords: string[];
  /** Indice sezioni in ordine */
  sections: GuideSection[];
  /** FAQ correlate — JSON-LD + sezione visibile */
  faqs: FaqItem[];
  /** Link correlati interni — card suggerite in fondo pagina */
  related?: { label: string; href: string; description: string }[];
};

export const GUIDES: Guide[] = [
  {
    slug: "detrazioni-fiscali-serramenti-2026",
    title: "Detrazioni fiscali serramenti 2026: ecobonus, bonus casa, conto termico",
    metaTitle: "Detrazioni fiscali serramenti 2026 — Guida completa",
    metaDescription:
      "Guida aggiornata 2026 alle detrazioni fiscali per serramenti: ecobonus 50%, bonus casa, conto termico. Massimali, tempistiche, documenti e pratica ENEA.",
    eyebrow: "Guida fiscale 2026",
    lead: "Tutto quello che serve sapere per ottenere il massimo risparmio fiscale sulla sostituzione dei serramenti nel 2026: agevolazioni attive, importi, procedure, errori da evitare. Aggiornato alle ultime normative.",
    datePublished: "2026-01-15",
    dateModified: "2026-04-14",
    author: "Mood Abitare",
    keywords: [
      "detrazioni fiscali serramenti 2026",
      "ecobonus finestre 2026",
      "bonus casa serramenti",
      "conto termico finestre",
      "pratica ENEA serramenti",
      "detrazione 50% infissi",
      "bonifico parlante ristrutturazione",
    ],
    sections: [
      {
        heading: "Quali agevolazioni sono attive nel 2026",
        paragraphs: [
          "Nel 2026 la sostituzione dei serramenti esistenti su edifici residenziali può beneficiare di tre canali agevolativi principali: l'ecobonus (detrazione IRPEF per interventi di risparmio energetico), il bonus casa (detrazione per manutenzione straordinaria e ristrutturazioni) e il conto termico (incentivo a fondo perduto gestito dal GSE). Le tre misure non sono cumulabili tra loro sullo stesso intervento, ma è possibile scegliere la più conveniente in base alla propria situazione.",
          "La Legge di Bilancio ha confermato le agevolazioni ridotte rispetto agli anni passati: l'aliquota standard dell'ecobonus per la sostituzione serramenti è al 50% in 10 quote annuali, con massimale di spesa di 60.000 € per unità immobiliare. Il bonus casa è al 50% con massimale 96.000 € per unità immobiliare. Il conto termico varia in base alla zona climatica e al tipo di intervento.",
        ],
      },
      {
        heading: "Ecobonus serramenti: a chi spetta e come funziona",
        paragraphs: [
          "L'ecobonus è riservato a interventi di sostituzione serramenti esistenti con nuovi serramenti aventi valori di trasmittanza termica (Uw) inferiori ai limiti di legge per la zona climatica. In provincia di Varese (zona E) il valore Uw massimo ammesso è 1,4 W/m²K. Tutti i serramenti Oknoplast, Korus e Pail installati da Mood Abitare soddisfano ampiamente questo requisito.",
          "La detrazione è del 50% della spesa sostenuta, ripartita in 10 quote annuali di pari importo. Il beneficiario deve essere il contribuente che sostiene la spesa e che utilizza l'immobile (proprietario, usufruttuario, comodatario, inquilino). È necessario inviare la comunicazione ENEA entro 90 giorni dal termine dei lavori — asseverazione obbligatoria firmata da tecnico abilitato.",
        ],
        bullets: [
          "Aliquota 2026: 50% (ridotta rispetto al 65% di alcuni anni precedenti)",
          "Massimale di spesa: 60.000 € per unità immobiliare",
          "Ripartizione: 10 quote annuali di pari importo",
          "Requisito tecnico: Uw ≤ 1,4 W/m²K in zona E (Varese)",
          "Comunicazione ENEA obbligatoria entro 90 giorni",
          "Pagamento con bonifico parlante (causale e codice fiscale dettagliati)",
        ],
      },
      {
        heading: "Bonus casa: quando è più conveniente dell'ecobonus",
        paragraphs: [
          "Il bonus casa (bonus ristrutturazioni edilizie) ha un massimale di spesa più elevato (96.000 € vs 60.000 €) e non richiede l'invio ENEA né asseverazione tecnica sui valori termici. È quindi preferibile quando la sostituzione serramenti rientra in un intervento di manutenzione straordinaria più ampio (es. ristrutturazione completa di un appartamento) o quando i serramenti sostituiti non raggiungerebbero i requisiti ecobonus.",
          "L'aliquota 2026 è del 50%, sempre in 10 quote annuali. Il vantaggio rispetto all'ecobonus è principalmente procedurale: meno documentazione tecnica, nessun rischio di contestazioni ENEA, possibilità di intervenire anche su parti comuni condominiali con quote proprietarie.",
        ],
      },
      {
        heading: "Conto termico: alternativa a fondo perduto",
        paragraphs: [
          "Il conto termico è un'agevolazione alternativa, gestita direttamente dal GSE (Gestore Servizi Energetici), che eroga un contributo a fondo perduto in 2-5 anni (vs 10 anni dell'ecobonus). L'importo varia in funzione della zona climatica, del tipo di intervento e del miglioramento energetico. Per la sostituzione di serramenti in zona E (Varese), il contributo copre indicativamente il 40-50% della spesa ammessa, versato direttamente sul conto corrente.",
          "Il vantaggio principale è il ritorno economico più rapido. Lo svantaggio è che il calcolo e la presentazione della domanda richiedono la compilazione di un portale GSE specifico. Per interventi di sostituzione serramenti su singola unità immobiliare privata, l'ecobonus resta generalmente la soluzione più semplice e conveniente.",
        ],
      },
      {
        heading: "Confronto sintetico delle tre agevolazioni",
        paragraphs: [
          "Per orientarsi rapidamente tra le tre misure, la tabella seguente riassume i parametri chiave. Lo scenario specifico va sempre verificato con il proprio commercialista o con il nostro ufficio tecnico.",
        ],
        table: {
          headers: ["Parametro", "Ecobonus", "Bonus casa", "Conto termico"],
          rows: [
            ["Aliquota 2026", "50% IRPEF", "50% IRPEF", "40-50% fondo perduto"],
            ["Massimale", "60.000 €", "96.000 €", "Variabile"],
            ["Ripartizione", "10 anni", "10 anni", "2-5 anni"],
            ["Requisito tecnico Uw", "≤ 1,4 W/m²K (zona E)", "Nessuno", "Variabile"],
            ["Asseverazione", "Obbligatoria", "Non richiesta", "Obbligatoria"],
            ["Comunicazione ENEA", "Sì (90 giorni)", "No", "No"],
            ["Pagamento", "Bonifico parlante", "Bonifico parlante", "Qualsiasi"],
          ],
        },
      },
      {
        heading: "Come si effettua correttamente il bonifico parlante",
        paragraphs: [
          "Il bonifico parlante è il requisito formale più delicato: un errore comporta la perdita dell'agevolazione. La causale deve contenere: riferimento normativo (Art. 16-bis DPR 917/1986 per bonus casa; Legge 296/2006 per ecobonus), codice fiscale del beneficiario della detrazione, partita IVA o codice fiscale del destinatario del pagamento, numero e data della fattura.",
          "Esempio di causale corretta per ecobonus: 'Pagamento fattura n. 12 del 10/03/2026 per interventi di risparmio energetico — Legge 296/2006 — beneficiario Mario Rossi CF RSSMRA80A01H501R — destinatario Mood Abitare PIVA 03940950128'. Molti istituti bancari offrono moduli precompilati per bonifico parlante: chiedere sempre in filiale o all'home banking.",
        ],
      },
      {
        heading: "Documenti da conservare per 10 anni",
        paragraphs: [
          "Chi beneficia della detrazione deve conservare per tutta la durata del beneficio (10 anni) tutti i documenti giustificativi. In caso di controllo dell'Agenzia delle Entrate, la mancata produzione comporta la revoca del beneficio e sanzioni.",
        ],
        bullets: [
          "Fattura dettagliata con voci separate (posa + materiali + smaltimento)",
          "Bonifico parlante (copia contabile con indicazione della causale)",
          "Asseverazione tecnica per ecobonus — rilasciata da tecnico abilitato",
          "Ricevuta di invio telematico comunicazione ENEA (per ecobonus)",
          "Dichiarazione sostitutiva di atto notorio del committente (se richiesta)",
          "Schede tecniche dei serramenti installati con certificazione Uw",
        ],
      },
      {
        heading: "Il servizio Mood Abitare per la pratica fiscale",
        paragraphs: [
          "Gestiamo internamente l'intero iter fiscale: asseverazione tecnica, trasmissione ENEA entro i termini, fattura con formato conforme, istruzioni scritte per il bonifico parlante, archiviazione decennale dei documenti. Per il cliente l'unico onere residuo è il pagamento (con bonifico parlante dal proprio conto) e l'inserimento della detrazione nella dichiarazione dei redditi — operazione che il commercialista esegue di routine.",
          "Il nostro ufficio è aggiornato alle ultime circolari dell'Agenzia delle Entrate e può fornire chiarimenti prospettici su casi specifici (prima casa, seconda casa, immobili locati, condominio, parti comuni, frazionamento dei benefici tra più beneficiari).",
        ],
      },
    ],
    faqs: [
      {
        question: "Si possono cumulare ecobonus e bonus casa sullo stesso intervento?",
        answer:
          "No. Su uno stesso intervento si può scegliere solo una delle due agevolazioni — quella più conveniente. È invece possibile applicare misure diverse a interventi distinti dello stesso cantiere (es. ecobonus sui serramenti, bonus casa sulla ristrutturazione del bagno).",
      },
      {
        question: "Devo essere proprietario dell'immobile per avere la detrazione?",
        answer:
          "No. La detrazione spetta a chi sostiene la spesa e ha il diritto di godimento dell'immobile: proprietario, usufruttuario, comodatario, inquilino con contratto registrato, familiari conviventi del proprietario. È importante che il bonifico parlante riporti il codice fiscale di chi beneficerà effettivamente della detrazione.",
      },
      {
        question: "Cosa succede se sbaglio il bonifico parlante?",
        answer:
          "Se manca la causale corretta, l'Agenzia delle Entrate può disconoscere la detrazione. Alcuni istituti bancari permettono di chiedere la rettifica della causale entro pochi giorni. In casi eccezionali, si può utilizzare una dichiarazione sostitutiva dell'istituto bancario che attesti che il pagamento è riferito all'intervento agevolato. È sempre meglio prevenire: usiamo moduli precompilati e controlliamo il bonifico.",
      },
      {
        question: "I serramenti Oknoplast rispettano i requisiti dell'ecobonus?",
        answer:
          "Sì, ampiamente. I serramenti Oknoplast (Prolux, Prismatic, Winergetic) raggiungono valori di trasmittanza Uw da 0,6 a 1,0 W/m²K — ben sotto il limite di 1,4 W/m²K richiesto in zona climatica E. Ogni serramento è fornito con certificazione CE e scheda tecnica valida per asseverazione e trasmissione ENEA.",
      },
      {
        question: "Quanto tempo serve per ottenere concretamente il rimborso?",
        answer:
          "Con ecobonus o bonus casa, il 'rimborso' avviene come minore imposta IRPEF nelle 10 dichiarazioni dei redditi successive al pagamento. Non è un rimborso diretto ma una riduzione dell'IRPEF dovuta. Chi ha IRPEF capiente recupera integralmente la detrazione; chi ha IRPEF bassa può valutare la cessione del credito a terzi (attualmente soggetta a vincoli normativi). Con il conto termico l'importo viene accreditato in 2-5 anni direttamente sul conto corrente.",
      },
    ],
    related: [
      {
        label: "Come scegliere tra infissi PVC, alluminio e legno",
        href: "/guide/come-scegliere-infissi-pvc-alluminio-legno",
        description: "Confronto tecnico e pratico tra i tre materiali più diffusi.",
      },
      {
        label: "Finanziamento a tasso zero",
        href: "/finanziamento",
        description: "TAN 0% TAEG 0%: cumulabile con le detrazioni.",
      },
      {
        label: "Infissi in PVC Oknoplast",
        href: "/prodotti/infissi-pvc",
        description: "Il nostro prodotto di punta per l'efficienza energetica.",
      },
    ],
  },

  {
    slug: "come-scegliere-infissi-pvc-alluminio-legno",
    title: "Come scegliere gli infissi: PVC, alluminio o legno",
    metaTitle: "Come scegliere infissi: PVC, alluminio o legno — Guida 2026",
    metaDescription:
      "Confronto completo tra infissi in PVC, alluminio e legno: prestazioni termiche, costi, durata, estetica. Guida pratica per scegliere il serramento giusto.",
    eyebrow: "Guida alla scelta",
    lead: "I tre materiali dominanti del mercato residenziale — PVC, alluminio e legno — hanno caratteristiche diverse che li rendono ideali per contesti specifici. Questa guida ti aiuta a scegliere consapevolmente.",
    datePublished: "2026-02-01",
    dateModified: "2026-04-14",
    author: "Mood Abitare",
    keywords: [
      "come scegliere infissi",
      "infissi PVC vs alluminio",
      "differenza PVC alluminio legno finestre",
      "miglior materiale infissi",
      "confronto serramenti",
      "guida acquisto finestre",
    ],
    sections: [
      {
        heading: "I tre materiali a confronto: quadro generale",
        paragraphs: [
          "Il PVC è il materiale più diffuso sul mercato residenziale italiano: combina prestazioni termiche eccellenti, zero manutenzione e costo competitivo. L'alluminio è la scelta di elezione per profili sottili e grandi vetrate, privilegiata nell'architettura contemporanea. Il legno conserva un valore estetico e comfort percettivo inimitabili, tornato in voga grazie alle finiture moderne a bassa manutenzione.",
          "Ognuno dei tre materiali, nella sua gamma premium (Oknoplast per PVC e alluminio, Pail per legno, Korus per alluminio/legno) raggiunge prestazioni energetiche eccellenti: la scelta difficilmente si gioca sull'efficienza, ma su estetica, budget, durata percepita e contesto architettonico.",
        ],
      },
      {
        heading: "PVC: il campione di efficienza a costo contenuto",
        paragraphs: [
          "I serramenti in PVC sono realizzati con profili estrusi multicamera rinforzati internamente con profilati in acciaio. Questa struttura combina eccellenti proprietà termiche (il PVC è un isolante naturale) con la robustezza strutturale dell'acciaio. I profili di fascia alta (Oknoplast Winergetic, Prismatic Evolution) raggiungono Uw fino a 0,6 W/m²K — valori da casa passiva.",
          "Il PVC è il materiale che offre il miglior rapporto prestazioni/prezzo, specialmente su misure standard. Zero manutenzione, resistenza a intemperie, vita utile 30+ anni. L'unico limite è estetico: i profili sono più spessi rispetto all'alluminio, quindi il PVC è meno adatto per grandi vetrate con mullion minimali.",
        ],
      },
      {
        heading: "Alluminio: linee sottili e durata infinita",
        paragraphs: [
          "L'alluminio con taglio termico (barriera in poliammide tra lato interno ed esterno) è l'unico alluminio utilizzabile oggi per finestre residenziali in Italia — i profili senza taglio termico sono fuori norma da oltre 15 anni. I moderni profili a taglio termico raggiungono Uw fino a 0,90 W/m²K, prestazioni paragonabili al PVC di fascia alta.",
          "Il vantaggio principale dell'alluminio è la possibilità di realizzare profili ultra-sottili che massimizzano la superficie vetrata — utilissimi per scorrevoli panoramici oltre 3 metri e vetrate a tutta altezza. La verniciatura a polvere permette oltre 200 colori RAL, effetti legno e finiture bicolore (colore diverso interno/esterno). Vita utile stimata oltre 40 anni senza degrado strutturale.",
        ],
      },
      {
        heading: "Legno: calore percettivo e pregio",
        paragraphs: [
          "I serramenti in legno moderno sono realizzati in legno lamellare (non più massello tradizionale) che garantisce stabilità dimensionale molto superiore ai vecchi infissi in legno. Il legno è un isolante naturale eccellente: i serramenti Pail raggiungono Uw fino a 1,0 W/m²K, in linea con il PVC.",
          "Le vernici moderne ad acqua multistrato proteggono il legno per 8-12 anni prima che sia necessaria una riverniciatura — intervento non ogni anno come si pensa spesso. Il calore estetico e la piacevolezza tattile del legno sono insostituibili: è spesso la scelta per case di pregio, ville, ristrutturazioni di edifici storici vincolati.",
        ],
      },
      {
        heading: "Alluminio-legno: il meglio dei due mondi",
        paragraphs: [
          "Gli infissi in alluminio-legno (es. Korus) hanno il legno all'interno (calore estetico, isolamento naturale) e un rivestimento in alluminio verniciato all'esterno che elimina la manutenzione sulla parte esposta agli agenti atmosferici. Il profilo interno in legno richiede solo interventi molto leggeri ogni 5-8 anni.",
          "Sono la soluzione ideale per chi vuole il legno a vista in casa ma non accetta la manutenzione esterna del legno puro. Costano il 15-25% in più degli infissi in legno di pari gamma, ma hanno durata e praticità superiori.",
        ],
      },
      {
        heading: "Confronto tecnico dei quattro materiali",
        paragraphs: [
          "Di seguito un confronto sintetico dei parametri principali, utile come bussola iniziale. Durante il sopralluogo approfondiamo la scelta in base a budget, esposizione, stile architettonico e preferenze estetiche.",
        ],
        table: {
          headers: ["Parametro", "PVC", "Alluminio", "Legno", "All/Legno"],
          rows: [
            ["Uw migliore (W/m²K)", "0,6", "0,90", "1,0", "0,80"],
            ["Manutenzione", "Nulla", "Nulla", "Leggera ogni 5-8 anni", "Nulla esterno, leggera interno"],
            ["Vita utile", "30+ anni", "40+ anni", "30-40 anni", "40+ anni"],
            ["Profili", "Spessi", "Ultra-slim", "Tradizionali", "Medi"],
            ["Colori", "Limitati (RAL + legno)", "200+ RAL", "Essenze + tinte", "RAL esterno + legno interno"],
            ["Costo relativo (base 100)", "100", "140-170", "180-250", "200-280"],
            ["Estetica", "Moderna, funzionale", "Contemporanea", "Calda, classica", "Calda interno + moderna esterno"],
          ],
        },
      },
      {
        heading: "Come orientarsi: casi tipici",
        paragraphs: [
          "Se l'obiettivo è massimizzare efficienza energetica e minimizzare il costo: PVC è la scelta ovvia (Oknoplast Winergetic Premium Passive per prestazioni massime).",
          "Se il progetto architettonico richiede grandi vetrate scorrevoli, profili sottili, estetica contemporanea: alluminio (linea Oknoplast in alluminio o profili Aluprof).",
          "Se la casa è di pregio, storica, o con vincoli paesaggistici: legno (Pail) o alluminio-legno (Korus) per rispetto estetico.",
          "Se cerchi il calore del legno senza la manutenzione esterna: alluminio-legno Korus è la scelta naturale.",
        ],
      },
    ],
    faqs: [
      {
        question: "Conviene sempre il PVC quando si può?",
        answer:
          "Non sempre. Il PVC è la scelta più razionale dal punto di vista prestazioni/prezzo, ma in contesti architettonici ricercati l'estetica può pesare più del prezzo. Inoltre per grandi scorrevoli panoramici oltre 3-4 metri, l'alluminio è tecnicamente preferibile per profili più sottili e maggiore rigidità. In abitazioni di pregio, la percezione del legno fa spesso parte dell'esperienza abitativa richiesta.",
      },
      {
        question: "Il legno è davvero così da manutenzione?",
        answer:
          "La manutenzione moderna è molto più leggera del passato. Un serramento in legno Pail con verniciatura ad acqua multistrato richiede una riverniciatura ogni 8-12 anni (non ogni anno come si pensa). Tra un ciclo e l'altro basta una pulizia con panno umido e occasionali piccoli ritocchi. Chi non ama neanche questo livello di cura sceglie alluminio-legno o PVC effetto legno.",
      },
      {
        question: "L'alluminio è davvero freddo in inverno?",
        answer:
          "No. I moderni profili in alluminio a taglio termico con barriera in poliammide e multicamera isolante raggiungono Uw 0,90 W/m²K, equivalenti al PVC di buona qualità. La sensazione di 'freddo al tatto' tipica dei vecchi profili senza taglio termico è completamente superata. In esercizio non si percepisce alcuna differenza di comfort tra alluminio a taglio termico e PVC.",
      },
      {
        question: "Quale materiale dura di più?",
        answer:
          "L'alluminio ha teoricamente la vita utile più lunga (40+ anni senza degrado strutturale). Il PVC è molto affidabile (30+ anni). Il legno moderno con manutenzione corretta supera i 30-40 anni. In pratica, tutti i serramenti di qualità installati a regola d'arte durano più a lungo della tecnologia vetrata al loro interno — che evolve ogni 15-20 anni portando a sostituzioni 'tecnologiche', non strutturali.",
      },
      {
        question: "Cambia molto il prezzo tra PVC e alluminio?",
        answer:
          "A parità di dimensioni e gamma, l'alluminio a taglio termico costa tipicamente il 40-70% in più del PVC. La differenza è giustificata dalla complessità produttiva e dai profili ultra-sottili. Su interi appartamenti il delta assoluto può essere significativo: vale la pena ragionare pezzo per pezzo (es. alluminio sul grande scorrevole del soggiorno, PVC sulle camere).",
      },
    ],
    related: [
      {
        label: "Infissi in PVC Oknoplast",
        href: "/prodotti/infissi-pvc",
        description: "20 modelli Oknoplast, Uw fino a 0,6 W/m²K.",
      },
      {
        label: "Infissi in alluminio",
        href: "/prodotti/infissi-alluminio",
        description: "Profili ultra-slim, 200+ colori RAL.",
      },
      {
        label: "Infissi alluminio-legno Korus",
        href: "/prodotti/infissi-alluminio-legno",
        description: "Legno interno, alluminio esterno.",
      },
      {
        label: "Detrazioni fiscali serramenti 2026",
        href: "/guide/detrazioni-fiscali-serramenti-2026",
        description: "Come recuperare il 50% della spesa.",
      },
    ],
  },

  {
    slug: "ristrutturazione-casa-chiavi-in-mano-tempi-costi",
    title: "Ristrutturazione casa chiavi in mano: tempi e costi",
    metaTitle: "Ristrutturazione chiavi in mano: tempi e costi — Guida 2026",
    metaDescription:
      "Quanto costa e quanto dura una ristrutturazione chiavi in mano in provincia di Varese: fasi, tempistiche, costi al mq, documenti. Guida pratica 2026.",
    eyebrow: "Guida alla ristrutturazione",
    lead: "Dalla prima consulenza alla consegna, cosa aspettarsi da una ristrutturazione chiavi in mano in termini di tempi, costi e coordinamento. I parametri reali e come non sorprendersi.",
    datePublished: "2026-02-15",
    dateModified: "2026-04-14",
    author: "Mood Abitare",
    keywords: [
      "ristrutturazione chiavi in mano",
      "costo ristrutturazione casa 2026",
      "tempi ristrutturazione appartamento",
      "ristrutturazione Varese",
      "ristrutturazione al mq",
      "quanto costa rifare casa",
    ],
    sections: [
      {
        heading: "Cosa significa 'chiavi in mano'",
        paragraphs: [
          "Una ristrutturazione chiavi in mano è un contratto integrato in cui un unico soggetto — il general contractor — si assume la responsabilità del coordinamento di tutte le lavorazioni: demolizioni, impianti elettrici e idraulici, opere murarie, serramenti, pavimenti, finiture, arredo. Il cliente ha un solo referente, un solo contratto, un solo preventivo, un unico responsabile del rispetto dei tempi.",
          "L'alternativa — appalti separati per idraulico, elettricista, muratore, serramentista, parquetista — è quasi sempre più economica sulla carta, ma in pratica si traduce in ritardi, rimpallo di responsabilità, sovrapposizioni tra squadre, errori di coordinamento. La ristrutturazione chiavi in mano costa tipicamente il 10-20% in più ma elimina il rischio organizzativo e garantisce tempi certi.",
        ],
      },
      {
        heading: "Le fasi di una ristrutturazione standard",
        paragraphs: [
          "Il processo si articola in cinque fasi principali, che nel nostro modello integriamo in un'unica timeline gestita da un project manager dedicato.",
        ],
        bullets: [
          "1. Sopralluogo e rilievo — gratuito, 1-2 settimane per prima proposta.",
          "2. Progettazione esecutiva e scelta finiture — 2-4 settimane con render 3D.",
          "3. Demolizioni e opere murarie — 1-2 settimane per appartamento medio.",
          "4. Impianti elettrici, idraulici, climatizzazione — 2-3 settimane in parallelo.",
          "5. Finiture, serramenti, sanitari, cucine, arredo — 3-6 settimane.",
        ],
      },
      {
        heading: "Quanto costa al metro quadro",
        paragraphs: [
          "Il costo al metro quadro per una ristrutturazione chiavi in mano in provincia di Varese varia principalmente con il livello di finitura e con la quota di demolizione. I costi indicativi 2026, iva e manodopera incluse:",
        ],
        table: {
          headers: ["Livello", "Costo al m²", "Cosa include"],
          rows: [
            ["Base (rinfresco)", "400 - 700 €/m²", "Tinteggiatura, ritocchi, alcuni sanitari. Poche opere."],
            ["Standard", "700 - 1.100 €/m²", "Rifacimento bagno, pavimenti in zona giorno, serramenti, tinteggiatura completa."],
            ["Medio-alto", "1.100 - 1.600 €/m²", "Rifacimento completo impianti, cucina su misura, pavimenti gres grande formato, climatizzazione."],
            ["Premium", "1.600 - 2.500+ €/m²", "Impianti domotici, cucine di design, bagni con vasca idromassaggio, materiali di pregio, arredo su misura."],
          ],
        },
      },
      {
        heading: "Quanto dura una ristrutturazione",
        paragraphs: [
          "I tempi dipendono dalla dimensione dell'unità immobiliare e dall'entità degli interventi. Come riferimento:",
        ],
        bullets: [
          "Appartamento 50-70 m² — ristrutturazione totale: 8-10 settimane",
          "Appartamento 80-120 m² — ristrutturazione totale: 10-14 settimane",
          "Appartamento 120-160 m² — ristrutturazione totale: 14-18 settimane",
          "Villa 180-250 m² — ristrutturazione totale: 18-26 settimane",
          "Sostituzione serramenti isolata: 1-3 giorni lavorativi",
          "Rifacimento bagno singolo: 2-3 settimane",
          "Rifacimento cucina senza impianti: 2-4 settimane",
        ],
      },
      {
        heading: "Documenti e permessi",
        paragraphs: [
          "La maggior parte delle ristrutturazioni residenziali ricade in regime di manutenzione straordinaria e richiede CILA (Comunicazione Inizio Lavori Asseverata) firmata da tecnico abilitato. Per interventi più importanti (modifica della sagoma, variazioni strutturali) serve SCIA o permesso di costruire. In condominio si acquisiscono inoltre le autorizzazioni amministrative richieste dal regolamento.",
          "Gestiamo tutto il percorso autorizzativo: sopralluogo tecnico, rilievo, progetto depositato, pratiche edilizie, direzione lavori, agibilità finale. Il cliente non deve preoccuparsi di navigare la burocrazia.",
        ],
      },
      {
        heading: "Gestione dei pagamenti e finanziamento",
        paragraphs: [
          "Una ristrutturazione standard prevede pagamenti scaglionati su avanzamento lavori, tipicamente: 30% all'ordine, 40% a metà cantiere, 30% al saldo dopo collaudo. Tutti i pagamenti possono essere effettuati con bonifico parlante per beneficiare della detrazione fiscale del 50%.",
          "È disponibile il finanziamento a tasso zero (TAN e TAEG 0%) gestito direttamente da Mood Abitare: anticipo 50% e restante importo in rate senza interessi. Cumulabile con le detrazioni fiscali. Questo permette di affrontare ristrutturazioni importanti senza immobilizzare liquidità e con ritorno economico nel medio termine grazie al recupero IRPEF.",
        ],
      },
    ],
    faqs: [
      {
        question: "Posso abitare in casa durante la ristrutturazione?",
        answer:
          "Dipende dall'entità dei lavori. Per interventi parziali (rifacimento bagno mantenendo gli altri ambienti funzionali) sì, con qualche disagio. Per ristrutturazioni complete consigliamo vivamente di trasferirsi altrove per le 8-18 settimane di cantiere — sia per comfort sia perché la presenza di persone rallenta il lavoro delle squadre.",
      },
      {
        question: "Quanto si può risparmiare con le agevolazioni fiscali?",
        answer:
          "Con il bonus ristrutturazioni al 50% su una spesa di 100.000 €, si recuperano 50.000 € in 10 anni (5.000 € all'anno di minore IRPEF). Questo riduce significativamente il costo reale della ristrutturazione. Altre agevolazioni possibili: ecobonus su serramenti, conto termico su pompa di calore, bonus mobili al 50% sull'arredo nuovo (fino a 5.000 € di spesa).",
      },
      {
        question: "I tempi dichiarati sono davvero rispettati?",
        answer:
          "Nel nostro modello il project manager sorveglia il cronoprogramma settimanalmente e comunica al cliente eventuali scostamenti. Ritardi superiori al 10-15% sono eccezionali e tipicamente legati a cause esterne (pratiche edilizie, consegna materiali speciali, scoperta di situazioni non prevedibili in fase di rilievo come amianto o strutture non conformi). Comunichiamo sempre tempestivamente ogni variazione.",
      },
      {
        question: "Cosa succede se scopriamo problemi nascosti durante i lavori?",
        answer:
          "È una delle situazioni tipiche delle ristrutturazioni: impianti non a norma nascosti nei muri, strutture portanti da consolidare, umidità emersa dopo la rimozione dei rivestimenti. In questi casi il project manager presenta una variante in corso d'opera con preventivo aggiuntivo, che il cliente approva prima di procedere. Non facciamo mai lavori extra senza approvazione scritta.",
      },
      {
        question: "Offrite garanzia post-ristrutturazione?",
        answer:
          "Sì. Sulle opere edili e impiantistiche applichiamo la garanzia biennale di legge. Sui prodotti installati valgono le garanzie del produttore (tipicamente 2-10 anni a seconda dell'elemento). Su posa di serramenti e blindate offriamo garanzia estesa 5 anni su tenuta e funzionamento. Il cliente riceve a fine lavori un dossier con tutte le garanzie, schede tecniche e istruzioni d'uso.",
      },
    ],
    related: [
      {
        label: "Servizi di ristrutturazione",
        href: "/servizi-ristrutturazione",
        description: "Il nostro processo integrato con project manager dedicato.",
      },
      {
        label: "Progettazione e design",
        href: "/progettazione-design",
        description: "Dall'idea al render 3D prima di partire con i lavori.",
      },
      {
        label: "Finanziamento a tasso zero",
        href: "/finanziamento",
        description: "TAN 0% TAEG 0%, cumulabile con le detrazioni.",
      },
    ],
  },

  {
    slug: "porte-blindate-classe-sicurezza",
    title: "Porte blindate: classi di sicurezza RC2, RC3, RC4",
    metaTitle: "Porte blindate classe 2 3 4 5: guida completa alle classi di sicurezza",
    metaDescription:
      "Classi di sicurezza delle porte blindate secondo norma EN 1627: RC2, RC3, RC4, RC5. Quale scegliere in base al contesto abitativo — guida 2026.",
    eyebrow: "Guida sicurezza",
    lead: "Le classi di sicurezza delle porte blindate (norma UNI EN 1627) misurano il tempo di resistenza a un tentativo di effrazione con attrezzi standard. Quale classe serve davvero per proteggere la tua casa?",
    datePublished: "2026-02-25",
    dateModified: "2026-04-14",
    author: "Mood Abitare",
    keywords: [
      "porte blindate classe sicurezza",
      "RC2 RC3 RC4 porta blindata",
      "UNI EN 1627 porte",
      "quale porta blindata scegliere",
      "porte blindate Alias Erreci",
      "antieffrazione porta",
    ],
    sections: [
      {
        heading: "La norma UNI EN 1627 e le classi di resistenza",
        paragraphs: [
          "Le porte blindate per uso residenziale e commerciale sono classificate secondo la norma europea UNI EN 1627, che definisce 6 classi di resistenza all'effrazione (da RC1 a RC6, Resistance Class). Ogni classe è associata a una tipologia di ladro e al tempo di resistenza in un test standardizzato eseguito da laboratori certificati.",
          "Le classi RC1 e RC2 sono pensate per resistere a tentativi opportunistici con attrezzi semplici. Le classi RC3 e RC4 resistono a ladri esperti con attrezzi elettrici. Le classi RC5 e RC6 sono riservate ad applicazioni militari/bancarie e non sono adatte al contesto residenziale civile.",
        ],
      },
      {
        heading: "RC2: la soglia minima per la residenza",
        paragraphs: [
          "Una porta blindata classe 2 (o 'classe 3' secondo la vecchia UNI 9569, ancora usata commercialmente) resiste a un tentativo di effrazione con attrezzi semplici (cacciavite, tenaglia, cunei) per almeno 3 minuti. È la soglia minima consigliata per un appartamento in condominio con ingresso sorvegliato.",
          "La maggior parte dei condomini urbani installa porte RC2 (o ex classe 3). La struttura ha spessori di acciaio 12/10 o 15/10, rinforzi omega perimetrali, serratura a cilindro europeo. È un buon compromesso tra sicurezza e costo.",
        ],
      },
      {
        heading: "RC3: il livello consigliato per piani terra e villette",
        paragraphs: [
          "La classe 3 EN 1627 (o 'classe 4' secondo la vecchia classificazione commerciale) resiste a un tentativo di effrazione con attrezzi elettrici portatili (trapano, piccoli flex) per almeno 5 minuti. Il tempo di resistenza extra disincentiva molti ladri — la maggior parte dei furti residenziali si conclude in meno di 3-5 minuti.",
          "Consigliamo RC3 per abitazioni ai piani terra, villette unifamiliari, case isolate, immobili in zone con statistiche di furto elevate. Il sovrapprezzo rispetto a RC2 è relativamente contenuto (15-25%) ma il livello di protezione reale è significativamente superiore.",
        ],
      },
      {
        heading: "RC4: la scelta per le situazioni esposte",
        paragraphs: [
          "La classe 4 EN 1627 resiste a un tentativo con attrezzi elettrici professionali (flex di grande dimensione, trapani potenti, leve) per almeno 10 minuti. A questo livello la porta è praticamente inviolabile senza attrezzatura molto specialistica e rumore inevitabile.",
          "È consigliata per ville isolate, immobili di pregio, seconde case in località turistiche (tipicamente bersaglio preferito in bassa stagione), ambulatori e studi con beni di valore. Il prezzo sale di 40-60% rispetto a RC2, ma è spesso l'unica scelta sensata in contesti esposti.",
        ],
      },
      {
        heading: "Confronto sintetico delle classi per uso residenziale",
        paragraphs: [
          "Di seguito un quadro riassuntivo delle classi residenziali di riferimento. Attenzione alla doppia denominazione — EN 1627 (europea, attuale) e UNI 9569 (italiana, legacy ma ancora molto usata commercialmente).",
        ],
        table: {
          headers: ["EN 1627", "UNI 9569 (ex)", "Resistenza", "Uso consigliato"],
          rows: [
            ["RC1", "Classe 1", "60 sec (attacco manuale)", "Ambienti non residenziali"],
            ["RC2", "Classe 3", "3 min (cacciavite, tenaglia)", "Appartamenti condominiali urbani"],
            ["RC3", "Classe 4", "5 min (trapano piccolo, flex compatto)", "Piani terra, villette"],
            ["RC4", "Classe 5", "10 min (flex grande, trapano potente)", "Ville isolate, seconde case"],
            ["RC5-RC6", "—", "15-20 min (attrezzatura professionale)", "Non residenziale (banche, militare)"],
          ],
        },
      },
      {
        heading: "Serrature: l'altro 50% della sicurezza",
        paragraphs: [
          "Una porta blindata certificata RC3 con serratura scadente è come un caveau con la chiave appesa alla porta. Il cilindro è spesso il punto più attaccato: la tecnica più diffusa è il 'key bumping' (colpo di martello su chiave generica) o l'estrazione del cilindro con pinza.",
          "I cilindri di sicurezza moderni (DOM, Evva, Mottura) incorporano protezioni antibumping, antitrapano, antiperforazione e antistrappo. Per porte RC3/RC4 è fondamentale abbinare un cilindro di classe almeno 6 stelle (secondo EN 1303) o serrature elettroniche/biometriche con sicurezza crittografica.",
        ],
      },
      {
        heading: "Isolamento termico e acustico",
        paragraphs: [
          "Le moderne porte blindate non sono solo sicurezza: offrono prestazioni termiche e acustiche paragonabili a una finestra di qualità. Le Alias di fascia alta con pannello in aerogel raggiungono Ud 0,8 W/m²K e abbattimento acustico fino a 42 dB — importanti quando la blindata separa l'abitato dalla scala condominiale non riscaldata o rumorosa.",
          "Queste prestazioni sono essenziali nelle classi energetiche A/A+ degli edifici: una blindata di pessima qualità vanifica l'investimento in isolamento dell'involucro. Nella valutazione complessiva della classe energetica, la blindata rientra tra i 'componenti opachi trasparenti' con peso non marginale.",
        ],
      },
    ],
    faqs: [
      {
        question: "La mia porta blindata è classe 3 o RC2?",
        answer:
          "Le porte installate prima del 2012 utilizzano normalmente la vecchia classificazione UNI 9569 (classe 1-2-3-4). Le porte installate dopo il 2012 utilizzano la nuova EN 1627 (RC1-RC6). La corrispondenza approssimativa è: ex classe 3 ≈ RC2; ex classe 4 ≈ RC3; ex classe 5 ≈ RC4. Sul certificato originale della porta è sempre riportato lo standard di riferimento.",
      },
      {
        question: "Serve davvero una RC4 per una villetta?",
        answer:
          "Dipende dal contesto. Per una villetta in centro urbano con vicini di casa e traffico pedonale, RC3 è spesso sufficiente. Per una villa isolata in collina, una casa di vacanza chiusa in bassa stagione, un immobile in zona rurale con vicini lontani, RC4 è fortemente consigliata — anche come deterrente visivo (i ladri professionisti riconoscono il livello di blindatura).",
      },
      {
        question: "Posso migliorare una porta blindata esistente?",
        answer:
          "Dipende dalla qualità di partenza. Su porte di qualità si può sostituire il cilindro con uno antibumping, installare rinforzi per il cilindro (defender), aggiungere una seconda serratura deviatrice, aggiungere un occhio magnetico digitale. Su porte economiche di fascia bassa, però, il punto debole è la struttura stessa: in questi casi conviene sostituirla integralmente.",
      },
      {
        question: "La porta blindata con serratura elettronica è più sicura di quella meccanica?",
        answer:
          "Le serrature elettroniche moderne (con cilindro europeo di sicurezza abbinato) offrono comodità (apertura con codice, impronta, telecomando) ma dal punto di vista antieffrazione sono equivalenti alle serrature meccaniche. La sicurezza elettronica reale dipende dalla qualità crittografica del protocollo. Per il massimo livello combinare serratura meccanica certificata + cilindro antibumping + sistema elettronico come livello aggiuntivo.",
      },
      {
        question: "Quanto costa una porta blindata di qualità?",
        answer:
          "Una porta blindata Alias o Erreci classe RC2 installata e rifinita costa tipicamente 1.500-2.500 €. Classe RC3 sale a 2.200-3.500 €. Classe RC4 si colloca tra 2.800-4.500 €. Le versioni con pannello in aerogel, finiture premium (laccate, coplanari, filomuro), serrature elettroniche possono arrivare fino a 6.000-8.000 € per configurazioni top di gamma. L'intervento rientra nel bonus ristrutturazione al 50% e nel bonus sicurezza.",
      },
    ],
    related: [
      {
        label: "Porte blindate",
        href: "/prodotti/porte-blindate",
        description: "Gamma Alias e Erreci classe RC2-RC5.",
      },
      {
        label: "Grate di sicurezza",
        href: "/prodotti/grate-sicurezza",
        description: "Protezione complementare per le finestre.",
      },
      {
        label: "Allarme e videosorveglianza",
        href: "/prodotti/allarme-videosorveglianza",
        description: "Impianti Inim: il terzo livello di protezione.",
      },
    ],
  },

  {
    slug: "pompe-di-calore-vs-caldaia-condensazione",
    title: "Pompe di calore vs caldaia a condensazione: confronto 2026",
    metaTitle: "Pompe di calore vs caldaia condensazione: guida confronto 2026",
    metaDescription:
      "Pompa di calore o caldaia a condensazione? Confronto 2026 su costi, consumi, COP, incentivi. Quale conviene in provincia di Varese.",
    eyebrow: "Guida energetica",
    lead: "Il passaggio da caldaia a pompa di calore è sempre più frequente. Ma è davvero conveniente in provincia di Varese? Confronto tecnico ed economico aggiornato.",
    datePublished: "2026-03-01",
    dateModified: "2026-04-14",
    author: "Mood Abitare",
    keywords: [
      "pompa di calore vs caldaia condensazione",
      "pompa di calore o caldaia",
      "confronto riscaldamento casa 2026",
      "pompa di calore Varese",
      "caldaia a condensazione Hermann",
      "efficienza energetica casa",
    ],
    sections: [
      {
        heading: "Come funziona una pompa di calore",
        paragraphs: [
          "La pompa di calore aria-acqua estrae calore dall'aria esterna (anche a temperature molto basse, fino a -15°C per i modelli moderni) e lo trasferisce all'impianto di riscaldamento interno — tipicamente pavimento radiante o radiatori sovradimensionati. Il processo si basa su un ciclo termodinamico simile a quello del frigorifero ma invertito.",
          "Il vantaggio chiave è l'efficienza: per ogni kWh elettrico consumato, una pompa di calore moderna fornisce 3-5 kWh di calore (coefficiente COP 3-5). Questo significa che il costo del calore prodotto è 3-5 volte inferiore al costo dell'elettricità consumata, molto più efficiente anche delle migliori caldaie a condensazione.",
        ],
      },
      {
        heading: "Come funziona una caldaia a condensazione",
        paragraphs: [
          "Le caldaie a condensazione bruciano metano (o GPL) in una camera di combustione e utilizzano l'energia sia della combustione sia del vapore acqueo presente nei fumi, che viene condensato recuperando il calore latente. Questo tecnologia porta il rendimento di una caldaia moderna al 108-110% (rendimento riferito al PCI — potere calorifico inferiore).",
          "Il rendimento elevato e la stabilità operativa rendono la caldaia a condensazione ancora una soluzione solida per edifici esistenti con radiatori tradizionali e isolamento termico non ottimale. Il suo limite è il legame con un combustibile fossile (metano), con prezzo soggetto a forti oscillazioni e roadmap europea verso la progressiva dismissione nel riscaldamento residenziale.",
        ],
      },
      {
        heading: "Quale conviene davvero?",
        paragraphs: [
          "La scelta giusta dipende da tre fattori principali: livello di isolamento termico dell'edificio, tipo di distribuzione del calore (pavimento radiante vs radiatori), disponibilità di spazio per l'unità esterna della pompa di calore e presenza di fotovoltaico.",
          "In un'abitazione ben isolata (classe energetica C o superiore) con pavimento radiante la pompa di calore è quasi sempre la scelta più conveniente economicamente ed ecologicamente. In un'abitazione meno isolata con radiatori tradizionali calibrati per 70-80°C di mandata, la pompa di calore funziona ma con efficienza inferiore — la caldaia a condensazione può essere preferibile o si può valutare una soluzione ibrida.",
        ],
      },
      {
        heading: "Confronto economico 2026 (casa 100 m² in provincia di Varese)",
        paragraphs: [
          "Simulazione di costi annuali per una casa tipica di 100 m² in zona climatica E (Varese), con consumo annuo per riscaldamento e acqua calda di circa 15.000 kWh termici.",
        ],
        table: {
          headers: ["Parametro", "Caldaia condensazione", "Pompa di calore (no FV)", "Pompa calore + FV"],
          rows: [
            ["Investimento iniziale", "4.500 - 6.500 €", "11.000 - 15.000 €", "22.000 - 30.000 €"],
            ["Costo energia/anno", "1.400 - 1.700 €", "900 - 1.200 €", "300 - 600 €"],
            ["Detrazione disponibile", "50% bonus casa", "65% ecobonus o CT", "65% + 50% FV"],
            ["Manutenzione/anno", "100 - 150 €", "120 - 180 €", "120 - 180 €"],
            ["Vita utile", "15-20 anni", "15-20 anni", "20-25 anni (FV)"],
            ["Emissioni CO₂", "~3.000 kg/anno", "~800 kg/anno (mix elettrico)", "~150 kg/anno"],
          ],
        },
      },
      {
        heading: "Pompa di calore e bassa temperatura",
        paragraphs: [
          "Le pompe di calore operano con massima efficienza a temperature di mandata relativamente basse (30-45°C). Un pavimento radiante funziona nativamente in questo range — è l'abbinamento ideale. I radiatori tradizionali, invece, sono dimensionati per 70-80°C: abbinati a pompa di calore richiedono una mandata più bassa, con compromesso tra comfort e potenza resa.",
          "La soluzione tipica è sovradimensionare i radiatori esistenti (più superficie radiante a bassa temperatura) o sostituirli con radiatori a ventilazione forzata (ventilconvettori) che rendono bene anche a 40-45°C di mandata. È un'analisi tecnica che facciamo durante il sopralluogo.",
        ],
      },
      {
        heading: "Le pompe di calore ibride",
        paragraphs: [
          "Per ristrutturazioni progressive in cui non si vuole sostituire subito il sistema di distribuzione del calore (radiatori), una soluzione elegante è la pompa di calore ibrida: sistema integrato che combina pompa di calore + caldaia a condensazione + sistema di controllo intelligente che sceglie automaticamente la fonte più efficiente in base alla temperatura esterna.",
          "Il risultato: la pompa di calore copre il 70-80% dei consumi annui (giornate miti), la caldaia entra in funzione solo nei picchi di freddo. Efficienza complessiva vicina a quella della pompa di calore pura, ma con la robustezza della caldaia come back-up. Investimento intermedio tra le due soluzioni.",
        ],
      },
    ],
    faqs: [
      {
        question: "La pompa di calore funziona davvero a -10°C?",
        answer:
          "Sì. Le pompe di calore moderne Ariston mantengono buone prestazioni fino a -15°C esterni — condizioni molto più rigide dei minimi storici della provincia di Varese (tipicamente -5/-8°C nelle notti invernali più fredde). A 0°C il COP resta sopra 3. Per i rarissimi giorni sotto -10°C, modelli con tecnologia 'zubadan' o sistemi ibridi garantiscono copertura totale.",
      },
      {
        question: "Posso installare una pompa di calore in condominio?",
        answer:
          "Sì, per l'uso personale dell'appartamento (sostituzione del proprio impianto autonomo). L'unità esterna va installata in una zona condominiale privata o concordata con il condominio (balcone, giardino assegnato). Ci sono vincoli acustici (limite 40-45 dB notturni) rispettati dalle pompe moderne. Vietata solo l'installazione dell'unità esterna su parti comuni senza autorizzazione assembleare.",
      },
      {
        question: "È vero che la pompa di calore raffredda l'acqua calda sanitaria?",
        answer:
          "No. Le pompe di calore moderne possono produrre acqua calda sanitaria fino a 55-60°C in modalità standard e fino a 65°C con ciclo antilegionella periodico. Servono un bollitore dedicato o un sistema integrato. Per temperature occasionali più elevate (bagni molto grandi, più prelievi simultanei) si può integrare con resistenza elettrica o solare termico.",
      },
      {
        question: "Quanto costa sostituire una caldaia con una pompa di calore?",
        answer:
          "L'investimento indicativo per una pompa di calore Ariston per villetta unifamiliare da 100 m² si colloca tra 11.000 e 16.000 € installata (include unità esterna, modulo idronico interno, bollitore ACS, collegamenti idraulici ed elettrici). Dopo ecobonus 65% o conto termico, l'importo netto scende spesso sotto i 7.000 €. Rientro dell'investimento tipico 6-10 anni sul risparmio in bolletta.",
      },
      {
        question: "Le caldaie a condensazione verranno proibite?",
        answer:
          "La direttiva europea EPBD (Energy Performance of Buildings Directive) approvata nel 2024 prevede il graduale phase-out delle caldaie a combustibile fossile nel residenziale: dal 2029 fine degli incentivi pubblici, dal 2040 tendenziale divieto di installazione in nuovi edifici. Per le sostituzioni di caldaie esistenti non è previsto un divieto secco, ma il trend va chiaramente verso elettrificazione del riscaldamento. Chi installa oggi una caldaia dovrebbe pensare che probabilmente sarà l'ultima.",
      },
    ],
    related: [
      {
        label: "Pompe di calore",
        href: "/prodotti/pompe-di-calore",
        description: "Pompe di calore Ariston aria-acqua.",
      },
      {
        label: "Caldaie Hermann",
        href: "/prodotti/caldaia",
        description: "Caldaie a condensazione ad alta efficienza.",
      },
      {
        label: "Impianti fotovoltaici",
        href: "/prodotti/impianti-fotovoltaici",
        description: "Abbinamento ideale con la pompa di calore.",
      },
      {
        label: "Detrazioni fiscali 2026",
        href: "/guide/detrazioni-fiscali-serramenti-2026",
        description: "Ecobonus e conto termico: come funzionano.",
      },
    ],
  },
];

export const GUIDES_BY_SLUG: Record<string, Guide> = Object.fromEntries(
  GUIDES.map((g) => [g.slug, g])
);
