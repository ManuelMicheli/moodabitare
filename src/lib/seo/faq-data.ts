type FAQ = { question: string; answer: string };

export const FAQ_FINANZIAMENTO: FAQ[] = [
  {
    question: "Come funziona il finanziamento a tasso zero per i serramenti?",
    answer:
      "Il finanziamento prevede un anticipo del 50% e il restante importo finanziato a TAN 0% e TAEG 0% con rate annuali tramite Agos Ducato. È cumulabile con le detrazioni fiscali del 50%.",
  },
  {
    question: "Il finanziamento è cumulabile con le detrazioni fiscali?",
    answer:
      "Sì, il finanziamento a tasso zero è completamente cumulabile con le detrazioni fiscali previste per la sostituzione dei serramenti, fino al 50% dell'importo totale.",
  },
  {
    question: "Quanto anticipo serve per il finanziamento serramenti?",
    answer:
      "L'anticipo richiesto è del 50% dell'importo totale dei lavori, versato all'avvio. Il restante 50% viene finanziato a tasso zero con rate annuali.",
  },
  {
    question: "Chi eroga il finanziamento per i serramenti Mood Abitare?",
    answer:
      "Il finanziamento è un prestito finalizzato Agos One erogato da Agos Ducato S.p.A., soggetto ad approvazione. Mood Abitare gestisce tutta la pratica.",
  },
];

export const FAQ_SERVIZI: FAQ[] = [
  {
    question: "Il sopralluogo e il preventivo sono gratuiti?",
    answer:
      "Sì, offriamo sopralluoghi gratuiti con tecnico qualificato e preventivi dettagliati, chiari e trasparenti senza alcun impegno.",
  },
  {
    question: "I vostri posatori sono certificati?",
    answer:
      "Sì, i nostri posatori sono formati direttamente dall'azienda e dispongono di patentino di posa certificata per l'installazione a regola d'arte.",
  },
  {
    question: "Vi occupate anche dello smaltimento dei vecchi serramenti?",
    answer:
      "Sì, ci occupiamo della rimozione e del trasporto dei vecchi infissi presso strutture di smaltimento autorizzate, nel rispetto delle normative vigenti.",
  },
  {
    question: "Gestite anche le pratiche per le detrazioni fiscali?",
    answer:
      "Sì, il nostro team si occupa di tutta la parte burocratica: compilazione della documentazione e presentazione delle pratiche per le detrazioni fiscali del 50%.",
  },
];

export const FAQ_CONTATTI: FAQ[] = [
  {
    question: "Quali sono gli orari di apertura dello showroom Mood Abitare?",
    answer:
      "Lo showroom è aperto dal lunedì al venerdì dalle 9:30 alle 12:30 e dalle 14:30 alle 19:00, il sabato dalle 9:30 alle 12:30 e dalle 14:00 alle 17:00.",
  },
  {
    question: "Dove si trova lo showroom Mood Abitare?",
    answer:
      "Lo showroom si trova in Viale Europa 65, 21050 Gorla Maggiore (VA). Siamo facilmente raggiungibili da Varese, Busto Arsizio, Gallarate, Saronno e Legnano.",
  },
  {
    question: "Come posso richiedere un preventivo gratuito?",
    answer:
      "Puoi contattarci telefonicamente al 0331.1588159, via WhatsApp al 351.7278053, oppure compilando il modulo di contatto nella pagina Contatti del nostro sito.",
  },
];

export const FAQ_PROGETTAZIONE: FAQ[] = [
  {
    question: "Offrite un servizio di progettazione e consulenza per interni?",
    answer:
      "Sì, offriamo un servizio completo di progettazione e design: consulenza su misura per serramenti, cucine, arredo bagno e interni, con un approccio personalizzato per ogni progetto.",
  },
  {
    question: "La consulenza progettuale è gratuita?",
    answer:
      "Sì, la prima consulenza in showroom è gratuita. Il nostro team analizza le esigenze e propone soluzioni su misura per migliorare estetica, efficienza energetica e comfort.",
  },
];

export const FAQ_RISTRUTTURAZIONE: FAQ[] = [
  {
    question: "Cosa include la ristrutturazione chiavi in mano?",
    answer:
      "La ristrutturazione chiavi in mano include: progettazione, rifacimento bagni, impianti elettrici e idraulici, serramenti, pavimentazione, climatizzazione e finiture. Un project manager dedicato coordina tutti i lavori.",
  },
  {
    question: "In quali zone effettuate ristrutturazioni?",
    answer:
      "Effettuiamo ristrutturazioni in tutta la provincia di Varese: Gorla Maggiore, Busto Arsizio, Gallarate, Saronno, Legnano, Castellanza, Tradate e comuni limitrofi.",
  },
  {
    question: "Quanto tempo richiede una ristrutturazione completa?",
    answer:
      "I tempi variano in base all'entità dei lavori. Per un appartamento completo, indicativamente 6-12 settimane. Il project manager fornisce un cronoprogramma dettagliato prima dell'inizio dei lavori.",
  },
];

export function buildFaqJsonLd(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
