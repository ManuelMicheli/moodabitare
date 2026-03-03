import type { Metadata } from "next";
import Link from "next/link";
import { FadeInView } from "@/components/animations/FadeInView";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

export const metadata: Metadata = {
  title: "Servizi",
  description:
    "I servizi di Mood Abitare: consulenza progettuale, preventivi gratuiti, installazione certificata, supporto detrazioni fiscali, smaltimento e assistenza post-vendita.",
};

const services = [
  {
    title: "Consulenza progettuale",
    summary: "Ti guidiamo nella scelta con esperienza e competenza.",
    detail:
      "I nostri consulenti esperti ti guidano nella scelta dei prodotti più adeguati alle caratteristiche della tua casa, tenendo conto della zona climatica, dell'esposizione e delle tue esigenze estetiche e funzionali. Offriamo anche il supporto di un architetto e render 3D per visualizzare il risultato finale.",
    highlights: ["Analisi zona climatica", "Supporto architetto", "Render 3D"],
  },
  {
    title: "Preventivi e sopralluoghi gratuiti",
    summary: "Sopralluogo gratuito e preventivo trasparente, senza impegno.",
    detail:
      "Organizziamo sopralluoghi gratuiti con un tecnico qualificato che analizza la situazione esistente, consiglia la realizzazione più adatta e fornisce un preventivo accurato, dettagliato e completamente trasparente. Nessun costo nascosto, nessun impegno.",
    highlights: ["Sopralluogo gratuito", "Preventivo dettagliato", "Zero costi nascosti"],
  },
  {
    title: "Installazione e posa in opera",
    summary: "Posatori certificati, formati direttamente dall'azienda.",
    detail:
      "La nostra squadra di posatori è formata direttamente dall'azienda e possiede il patentino di posa certificata. Ogni montaggio viene eseguito in totale sicurezza per garantire la perfetta funzionalità nel tempo e le massime prestazioni di isolamento termico e acustico.",
    highlights: ["Patentino posa certificata", "Formazione diretta", "Garanzia funzionalità"],
  },
  {
    title: "Supporto detrazioni fiscali",
    summary: "Gestiamo tutta la burocrazia per le detrazioni al 50%.",
    detail:
      "Gestiamo completamente l'aspetto burocratico per la sostituzione dei serramenti: dall'invio dei dati all'Istituto preposto per usufruire delle detrazioni statali (attualmente al 50%), alla preparazione di tutta la documentazione necessaria.",
    highlights: ["Detrazioni 50%", "Gestione documenti", "Invio dati ENEA"],
  },
  {
    title: "Smaltimento vecchi serramenti",
    summary: "Smaltimento a norma presso centri autorizzati.",
    detail:
      "Ci occupiamo dello smaltimento dei vecchi serramenti presso centri autorizzati, nel pieno rispetto dell'ambiente e delle normative vigenti. Un pensiero in meno per te: pensiamo a tutto noi dalla rimozione al trasporto.",
    highlights: ["Centri autorizzati", "A norma di legge", "Ritiro incluso"],
  },
  {
    title: "Assistenza post-vendita",
    summary: "Il nostro servizio non finisce con l'installazione.",
    detail:
      "Offriamo assistenza post-vendita completa con massima disponibilità, per garantire che i tuoi serramenti mantengano prestazioni ottimali nel tempo. Manutenzione programmata, regolazioni e interventi rapidi quando necessario.",
    highlights: ["Manutenzione programmata", "Interventi rapidi", "Disponibilità continua"],
  },
];

const processSteps = [
  { step: "Contatto", desc: "Ci contatti per telefono, WhatsApp o tramite il modulo online." },
  { step: "Sopralluogo", desc: "Un tecnico visita la tua casa per valutare le esigenze." },
  { step: "Preventivo", desc: "Ricevi un preventivo dettagliato e trasparente, senza impegno." },
  { step: "Installazione", desc: "I nostri posatori certificati eseguono il lavoro a regola d'arte." },
  { step: "Assistenza", desc: "Restiamo a disposizione per qualsiasi necessità futura." },
];

export default function Servizi() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end bg-black-deep text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black-deep/90 via-transparent to-transparent" />
        <div className="relative z-10 w-full pb-20 lg:pb-28 px-6 sm:px-10 lg:px-20">
          <FadeInView>
            <p className="text-label text-white/40 mb-4">
              I nostri servizi
            </p>
            <h1
              className="font-display font-bold uppercase leading-[0.85] tracking-[-0.03em] text-white max-w-5xl"
              style={{ fontSize: "clamp(2rem, 1.5rem + 6vw, 7rem)" }}
            >
              Dalla consulenza alla posa in opera
            </h1>
            <p className="mt-6 text-body text-white/50 max-w-xl">
              Un servizio completo e professionale con un unico referente — dalla progettazione allo smaltimento dei vecchi serramenti.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Services — full detail, alternating layout */}
      <section className="py-24 lg:py-36">
        <div className="px-6 sm:px-10 lg:px-20">
          <StaggerContainer className="space-y-0">
            {services.map((service, i) => (
              <StaggerItem key={service.title}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 py-14 lg:py-20 border-t border-black/5 items-start">
                  {/* Left — number + title + summary */}
                  <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                    <span className="text-label text-black-deep/20">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="mt-3 font-display text-[clamp(1.375rem,1.1rem+1.5vw,2rem)] font-medium text-black-deep tracking-tight leading-tight">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-body text-black-deep/40">
                      {service.summary}
                    </p>
                  </div>

                  {/* Right — detail + highlights */}
                  <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                    <p className="text-body text-black-deep/60 leading-relaxed">
                      {service.detail}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      {service.highlights.map((h) => (
                        <span
                          key={h}
                          className="text-caption text-black-deep/50 border border-black/8 px-4 py-2 rounded-sm"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process — come lavoriamo */}
      <section className="py-24 lg:py-36 bg-cream">
        <div className="px-6 sm:px-10 lg:px-20">
          <FadeInView>
            <p className="text-label text-black-deep/40 mb-4">
              Come lavoriamo
            </p>
            <h2 className="font-section-title text-black-deep mb-16 lg:mb-24">
              5 passi verso casa tua
            </h2>
          </FadeInView>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6" staggerDelay={0.1}>
            {processSteps.map((item, i) => (
              <StaggerItem key={item.step}>
                <div>
                  <span className="font-display text-[clamp(2.5rem,3vw,3.5rem)] font-bold text-black-deep/10 leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-[clamp(1.125rem,1rem+0.5vw,1.375rem)] font-medium text-black-deep tracking-tight">
                    {item.step}
                  </h3>
                  <p className="mt-3 text-caption text-black-deep/45">
                    {item.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Perché sceglierci */}
      <section className="py-24 lg:py-36">
        <div className="px-6 sm:px-10 lg:px-20">
          <FadeInView>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <p className="text-label text-black-deep/40 mb-4">
                  Perché sceglierci
                </p>
                <h2 className="font-section-title text-black-deep">
                  Un unico referente per tutto
                </h2>
              </div>
              <div className="flex flex-col gap-6">
                <p className="text-body text-black-deep/60 leading-relaxed">
                  Con Mood Abitare hai un solo interlocutore che gestisce l&apos;intero progetto: dalla prima consulenza in showroom alla posa in opera, dallo smaltimento dei vecchi infissi al supporto per le detrazioni fiscali.
                </p>
                <p className="text-body text-black-deep/60 leading-relaxed">
                  Oltre 30 anni di esperienza nel settore, posatori con patentino di posa certificata e uno showroom di 300mq dove toccare con mano la qualità dei nostri prodotti.
                </p>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-36 bg-black-deep text-white">
        <div className="px-6 sm:px-10 lg:px-20 text-center">
          <FadeInView>
            <h2 className="font-section-title text-white max-w-2xl mx-auto">
              Hai bisogno di un preventivo?
            </h2>
            <p className="mt-6 text-body text-white/45 max-w-md mx-auto">
              Contattaci per un sopralluogo gratuito e un preventivo dettagliato senza impegno.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-6">
              <Link
                href="/contatti"
                className="text-button inline-block bg-white text-black-deep px-8 py-4 hover:bg-white/90 transition-colors"
              >
                Richiedi preventivo
              </Link>
              <Link
                href="/prodotti"
                className="text-button inline-block text-white border-b border-white/20 pb-1 hover:border-white/60 transition-colors"
              >
                Vedi i prodotti
              </Link>
            </div>
          </FadeInView>
        </div>
      </section>
    </main>
  );
}
