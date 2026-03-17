import type { Metadata } from "next";
import { FadeInView } from "@/components/animations/FadeInView";

export const metadata: Metadata = {
  title: "Privacy e Cookie Policy",
  description:
    "Informativa sulla privacy e cookie policy di Mood Abitare ai sensi del GDPR e della normativa italiana. Ultimo aggiornamento: marzo 2026.",
  alternates: {
    canonical: "https://www.moschianosrl.it/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const LAST_UPDATED = "16 marzo 2026";

const sections = [
  {
    title: "1. Titolare del trattamento",
    content: `Il Titolare del trattamento dei dati personali è Mood Abitare, con sede legale in Viale Europa, 65 — 21050 Gorla Maggiore (VA), Italia.\n\nP.IVA: 03940950128 — SDI: M5UXCR1\nEmail: info@moodabitare.it\nTelefono: 0331.1588159`,
  },
  {
    title: "2. Tipologie di dati raccolti",
    content: `a) Dati forniti volontariamente: attraverso il modulo di contatto, l'utente può fornire nome, indirizzo email, numero di telefono e messaggio. L'invio del modulo è subordinato all'accettazione esplicita della presente informativa.\n\nb) Dati di navigazione: il Sito raccoglie automaticamente dati tecnici quali indirizzo IP (anonimizzato), tipo di browser, sistema operativo e pagine visitate, esclusivamente tramite cookie tecnici necessari al funzionamento del Sito.\n\nc) Dati raccolti tramite cookie analitici: previo consenso esplicito dell'utente, il Sito utilizza Google Analytics per raccogliere dati aggregati e anonimizzati sulle modalità di utilizzo del Sito.`,
  },
  {
    title: "3. Finalità del trattamento",
    content: `I dati personali sono trattati per le seguenti finalità:\n\n• Rispondere alle richieste inviate tramite il modulo di contatto\n• Fornire preventivi e informazioni commerciali sui servizi offerti\n• Migliorare l'esperienza di navigazione e le prestazioni del Sito (solo previo consenso)\n• Adempiere ad obblighi di legge e regolamentari`,
  },
  {
    title: "4. Base giuridica del trattamento",
    content: `Il trattamento dei dati si fonda sulle seguenti basi giuridiche ai sensi dell'art. 6 del GDPR:\n\n• Consenso dell'interessato (art. 6, par. 1, lett. a): per l'invio del modulo di contatto e per l'attivazione dei cookie analitici\n• Legittimo interesse del Titolare (art. 6, par. 1, lett. f): per il corretto funzionamento del Sito e per la sicurezza informatica`,
  },
  {
    title: "5. Modalità di trattamento e conservazione",
    content: `I dati personali sono trattati con strumenti informatici e telematici, con logiche strettamente correlate alle finalità sopra indicate e, comunque, in modo da garantirne la sicurezza e la riservatezza.\n\nI dati raccolti tramite il modulo di contatto vengono inoltrati via email al Titolare e non sono conservati in alcun database del Sito. I dati analitici anonimi sono conservati da Google per un periodo massimo di 14 mesi.`,
  },
  {
    title: "6. Comunicazione e diffusione dei dati",
    content: `I dati personali non saranno diffusi né ceduti a terzi, salvo che per i seguenti soggetti, necessari all'erogazione dei servizi:\n\n• Resend Inc. — servizio di invio email transazionali (per il recapito dei messaggi del modulo di contatto)\n• Google LLC — servizio Google Analytics (solo previo consenso, con dati anonimizzati)\n\nEntrambi i fornitori operano in qualità di Responsabili del trattamento ai sensi dell'art. 28 del GDPR e garantiscono adeguati livelli di protezione dei dati.`,
  },
  {
    title: "7. Cookie Policy",
    content: `Il Sito utilizza le seguenti tipologie di cookie:\n\na) Cookie tecnici necessari (sempre attivi):\n• mood_cookie_consent — Registra la scelta dell'utente relativa ai cookie. Durata: 365 giorni. Cookie di prima parte.\n\nb) Cookie analitici (previo consenso):\n• _ga, _ga_* — Cookie di Google Analytics utilizzati per distinguere gli utenti e raccogliere dati statistici anonimi sulla navigazione. Durata: fino a 14 mesi. Cookie di terza parte (Google LLC).\n\nL'utente può gestire le proprie preferenze sui cookie in qualsiasi momento tramite il banner presente sul Sito o attraverso le impostazioni del proprio browser.\n\nPer disattivare Google Analytics su tutti i siti web: https://tools.google.com/dlpage/gaoptout`,
  },
  {
    title: "8. Diritti dell'utente",
    content: `Ai sensi degli articoli 15-22 del Regolamento UE 2016/679 (GDPR), l'utente ha il diritto di:\n\n• Accedere ai propri dati personali (art. 15)\n• Rettificare dati inesatti o incompleti (art. 16)\n• Ottenere la cancellazione dei dati (art. 17)\n• Limitare il trattamento (art. 18)\n• Ricevere i propri dati in formato strutturato — portabilità (art. 20)\n• Opporsi al trattamento (art. 21)\n• Revocare il consenso in qualsiasi momento, senza pregiudicare la liceità del trattamento basato sul consenso precedente\n\nPer esercitare i propri diritti, l'utente può contattare il Titolare all'indirizzo email: info@moodabitare.it`,
  },
  {
    title: "9. Reclamo all'Autorità di controllo",
    content: `L'utente che ritiene che il trattamento dei propri dati violi il GDPR ha il diritto di proporre reclamo al Garante per la Protezione dei Dati Personali:\n\nGarante per la Protezione dei Dati Personali\nPiazza Venezia, 11 — 00187 Roma\nwww.garanteprivacy.it — protocollo@pec.gpdp.it`,
  },
  {
    title: "10. Modifiche alla presente informativa",
    content: `Il Titolare si riserva il diritto di modificare la presente informativa in qualsiasi momento. La data dell'ultimo aggiornamento è riportata in cima a questa pagina. Si consiglia di consultare periodicamente questa sezione per restare informati sulle modalità di trattamento dei dati.`,
  },
];

export default function PrivacyPolicy() {
  return (
    <main>
      <section className="relative min-h-[50vh] flex items-end bg-black-deep text-white">
        <div className="relative z-10 w-full pb-14 lg:pb-28 px-6 sm:px-10 lg:px-20">
          <FadeInView>
            <h1 className="font-section-title">Privacy e Cookie Policy</h1>
          </FadeInView>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-20">
          <FadeInView>
            <div className="space-y-10">
              <div>
                <p className="text-xs text-mid-gray mb-6">
                  Ultimo aggiornamento: {LAST_UPDATED}
                </p>
                <p className="text-caption text-black-deep/40 leading-[1.8]">
                  La presente informativa descrive le modalità di trattamento
                  dei dati personali degli utenti che consultano il sito web{" "}
                  <strong className="text-black-deep/60">
                    www.moschianosrl.it
                  </strong>
                  , gestito da Mood Abitare, ai sensi del Regolamento UE
                  2016/679 (GDPR) e del D.Lgs. 196/2003 (Codice Privacy) come
                  modificato dal D.Lgs. 101/2018.
                </p>
              </div>

              {sections.map((section) => (
                <div
                  key={section.title}
                  className="pt-8 border-t border-black/5"
                >
                  <h2 className="font-display text-lg font-medium text-black-deep tracking-tight mb-4">
                    {section.title}
                  </h2>
                  <p className="text-caption text-black-deep/40 leading-[1.8] whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </FadeInView>
        </div>
      </section>
    </main>
  );
}
