import type { Metadata } from "next";
import Script from "next/script";
import { buildBreadcrumbJsonLd } from "@/lib/seo/breadcrumb-jsonld";
import { FAQ_SERVIZI, buildFaqJsonLd } from "@/lib/seo/faq-data";
import Link from "next/link";
import { FadeInView } from "@/components/animations/FadeInView";
import { ClipReveal } from "@/components/animations/ClipReveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

export const metadata: Metadata = {
  title: "Servizi — Consulenza, Installazione e Assistenza",
  description:
    "I servizi di Mood Abitare: consulenza progettuale gratuita, preventivi e sopralluoghi, installazione certificata con posatori formati, supporto detrazioni fiscali 50%, smaltimento e assistenza post-vendita.",
  keywords: [
    "installazione serramenti Varese",
    "posa in opera certificata",
    "preventivo serramenti gratuito",
    "detrazioni fiscali 50 serramenti",
    "sostituzione serramenti Varese",
    "assistenza post-vendita serramenti",
    "consulenza serramenti",
  ],
  alternates: {
    canonical: "https://www.moodabitare.it/servizi",
  },
  openGraph: {
    title: "Servizi — Mood Abitare",
    description:
      "Consulenza progettuale, installazione certificata, detrazioni fiscali 50% e assistenza post-vendita a Gorla Maggiore (VA).",
    url: "https://www.moodabitare.it/servizi",
  },
};

const services = [
  {
    title: "Consulenza progettuale",
    summary: "Analisi delle esigenze e progetto personalizzato.",
    detail:
      "Analisi delle esigenze e delle specifiche dello spazio da rinnovare. Progetto personalizzato per assicurare che le soluzioni proposte migliorino l'estetica degli ambienti e ne aumentino l'efficienza energetica e il comfort.",
    highlights: ["Analisi personalizzata", "Efficienza energetica", "Comfort abitativo"],
  },
  {
    title: "Preventivi e sopralluoghi gratuiti",
    summary: "Sopralluogo gratuito e preventivo trasparente, senza impegno.",
    detail:
      "Sopralluoghi gratuiti con tecnico qualificato. Preventivi dettagliati, chiari e trasparenti con stima precisa dei costi e delle tempistiche. Nessun costo nascosto, nessun impegno.",
    highlights: ["Sopralluogo gratuito", "Preventivo dettagliato", "Stima tempistiche"],
  },
  {
    title: "Installazione e posa in opera",
    summary: "Posatori certificati, formati direttamente dall'azienda.",
    detail:
      "Squadra di operatori formata direttamente dall'azienda. Montaggio dei serramenti in totale sicurezza con tecniche all'avanguardia e materiali di alta qualità. Posa in opera certificata con patentino.",
    highlights: ["Patentino posa certificata", "Tecniche all'avanguardia", "Materiali di qualità"],
  },
  {
    title: "Supporto detrazioni fiscali",
    summary: "Gestiamo tutta la burocrazia per le detrazioni.",
    detail:
      "Gestione completa dell'aspetto burocratico per interventi di sostituzione dei serramenti. Il team si occupa dell'invio dei dati all'Istituto preposto per usufruire delle detrazioni statali. Compilazione della documentazione e presentazione delle pratiche incluse.",
    highlights: ["Detrazioni fiscali", "Gestione documenti", "Pratiche incluse"],
  },
  {
    title: "Smaltimento vecchi serramenti",
    summary: "Rimozione e trasporto a norma presso centri autorizzati.",
    detail:
      "Rimozione e trasporto dei vecchi infissi presso strutture di smaltimento autorizzate, nel rispetto dell'ambiente e delle normative vigenti in materia di gestione dei rifiuti.",
    highlights: ["Centri autorizzati", "A norma di legge", "Ritiro incluso"],
  },
  {
    title: "Assistenza post-vendita",
    summary: "Il nostro impegno non termina con l'installazione.",
    detail:
      "Servizio completo di assistenza post-vendita: manutenzione, riparazioni e consigli. L'impegno non termina con l'installazione. Intervento rapido e professionale per qualsiasi necessità.",
    highlights: ["Manutenzione", "Riparazioni", "Intervento rapido"],
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
      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumbJsonLd([
              { name: "Servizi", url: "https://www.moodabitare.it/servizi" },
            ])
          ),
        }}
      />
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildFaqJsonLd(FAQ_SERVIZI)),
        }}
      />
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end bg-black-deep text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black-deep/90 via-transparent to-transparent" />
        <div className="relative z-10 w-full pb-14 lg:pb-28 px-6 sm:px-10 lg:px-20">
          <FadeInView>
            <p className="text-label text-white/80 mb-4">
              I nostri servizi
            </p>
          </FadeInView>
          <ClipReveal direction="up" delay={0.15} duration={0.9}>
            <h1 className="font-page-title text-white max-w-5xl">
              Dalla consulenza alla posa in opera
            </h1>
          </ClipReveal>
          <FadeInView delay={0.4}>
            <p className="mt-6 text-body text-white/50 max-w-xl">
              Un servizio completo e professionale con un unico referente — dalla progettazione allo smaltimento dei vecchi serramenti.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Services — full detail, alternating layout */}
      <section className="py-16 lg:py-36">
        <div className="px-6 sm:px-10 lg:px-20">
          <StaggerContainer className="space-y-0">
            {services.map((service, i) => (
              <StaggerItem key={service.title}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 py-14 lg:py-20 border-t border-black/5 items-start">
                  {/* Left — number + title + summary */}
                  <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                    <span className="text-label text-black-deep/50">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="mt-3 font-section-title text-black-deep">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-body text-black-deep">
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
      <section className="py-16 lg:py-36 bg-cream">
        <div className="px-6 sm:px-10 lg:px-20">
          <FadeInView>
            <p className="text-label text-black-deep/60 mb-4">
              Come lavoriamo
            </p>
            <h2 className="font-section-title text-black-deep mb-10 lg:mb-24">
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
                  <h3 className="mt-3 font-card-title text-black-deep">
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
      <section className="py-16 lg:py-36">
        <div className="px-6 sm:px-10 lg:px-20">
          <FadeInView>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <p className="text-label text-black-deep/60 mb-4">
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
      <section className="py-16 lg:py-36 bg-black-deep text-white">
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
                className="text-button inline-block bg-white text-black-deep px-8 py-4 btn-press hover:bg-white/90 transition-colors"
              >
                Richiedi preventivo
              </Link>
              <Link
                href="/prodotti"
                className="text-button inline-block text-white border-b border-white/20 pb-1 hover:border-white/60 transition-colors link-draw"
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
