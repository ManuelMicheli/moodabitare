import type { Metadata } from "next";
import Script from "next/script";
import { buildBreadcrumbJsonLd } from "@/lib/seo/breadcrumb-jsonld";
import Image from "next/image";
import Link from "next/link";
import { FadeInView } from "@/components/animations/FadeInView";
import { ClipReveal } from "@/components/animations/ClipReveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { AccentText } from "@/components/ui/AccentText";

export const metadata: Metadata = {
  title: "Servizi di Ristrutturazione — Chiavi in Mano a Varese",
  description:
    "Ristrutturazioni chiavi in mano Mood Abitare: rifacimento bagni, impianti elettrici e idraulici, climatizzazione Haier, caldaie Hermann e pompe di calore Samsung. Project manager dedicato a Varese.",
  keywords: [
    "ristrutturazione casa Varese",
    "ristrutturazione chiavi in mano",
    "rifacimento bagno Varese",
    "ristrutturazione appartamento Varese",
    "climatizzazione Haier",
    "caldaie Hermann",
    "pompe di calore Samsung",
    "ristrutturazione completa Varese",
  ],
  alternates: {
    canonical: "https://www.moschianosrl.it/servizi-ristrutturazione",
  },
  openGraph: {
    title: "Servizi di Ristrutturazione — Mood Abitare",
    description:
      "Ristrutturazioni chiavi in mano nella provincia di Varese. Project manager dedicato, preventivi gratuiti.",
    url: "https://www.moschianosrl.it/servizi-ristrutturazione",
  },
};

const services = [
  {
    title: "Ristrutturazioni chiavi in mano",
    description:
      "Servizio completo dalla A alla Z. La formula comprende: progettazione, gestione pratiche burocratiche, coordinamento lavori, fornitura materiali e supervisione dell\u2019intero cantiere. Consegna della casa completamente rinnovata e pronta per essere abitata. Un project manager aggiorna costantemente sull\u2019avanzamento dei lavori e garantisce il rispetto dei tempi e del budget concordato.",
    highlights: ["Progettazione inclusa", "Project manager dedicato", "Chiavi in mano"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Rifacimento completo bagni",
    description:
      "Demolizione, rifacimento pavimenti e rivestimenti, sostituzione sanitari e rubinetteria, realizzazione impianti idraulici ed elettrici a norma. Dalla progettazione alla scelta dei materiali, con i migliori marchi del settore.",
    highlights: ["Impianti a norma", "Migliori marchi", "Progettazione inclusa"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8" />
        <path d="M1 12s4 8 11 8 11-8 11-8" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Impianti elettrici e idraulici certificati",
    description:
      "Impianti a norma di legge con tutte le certificazioni necessarie. Per gli impianti elettrici: distribuzione, illuminazione, domotica, predisposizioni per elettrodomestici. Per quelli idraulici: adduzione, scarichi, riscaldamento e condizionamento. Ogni impianto viene collaudato e certificato.",
    highlights: ["Certificazioni incluse", "Domotica", "Collaudo garantito"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "Impianti allarmi e videosorveglianza",
    description:
      "Sistemi antifurto e videosorveglianza personalizzati per casa o ufficio. Tecnologie con app per smartphone per monitoraggio a distanza. Consulenza gratuita per valutare i punti critici e progettare la soluzione pi\u00f9 efficace.",
    highlights: ["App smartphone", "Consulenza gratuita", "Personalizzazione"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Climatizzazione Haier",
    description:
      "Sistemi di climatizzazione Haier, marchio leader mondiale. Soluzioni per raffrescamento e riscaldamento. Dimensionamento corretto degli impianti, installazione e messa in servizio. Sistemi ad alta efficienza energetica con tecnologie innovative.",
    highlights: ["Haier leader mondiale", "Alta efficienza", "Raffrescamento e riscaldamento"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 16a5 5 0 01-.916-9.916A7 7 0 0120.832 9.5" />
        <path d="M13 11l-3 5h4l-3 5" />
      </svg>
    ),
  },
  {
    title: "Caldaie Hermann",
    description:
      "Qualit\u00e0 tedesca per il riscaldamento. Elevata efficienza energetica e massima affidabilit\u00e0. Rimozione vecchia caldaia, installazione nuova, collegamento impianti esistenti e messa in servizio. Servizi di manutenzione programmata.",
    highlights: ["Qualit\u00e0 tedesca", "Manutenzione programmata", "Efficienza energetica"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M6.34 6.34l2.83 2.83M2 12h4M6.34 17.66l2.83-2.83M12 18v4M17.66 17.66l-2.83-2.83M18 12h4M17.66 6.34l-2.83 2.83" />
      </svg>
    ),
  },
  {
    title: "Pompe di calore Samsung",
    description:
      "Riscaldamento e raffrescamento rispettando l\u2019ambiente. Tecnologie avanzate come inverter e gestione intelligente per ottimizzare le prestazioni in ogni condizione climatica. Consumi ridotti.",
    highlights: ["Samsung", "Tecnologia inverter", "Consumi ridotti"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12a4 4 0 018 0" />
        <path d="M12 8v8" />
      </svg>
    ),
  },
];

const steps = [
  { number: "01", title: "Sopralluogo", description: "Valutiamo gli spazi e ascoltiamo le vostre esigenze" },
  { number: "02", title: "Progetto", description: "Proponiamo un progetto su misura con preventivo dettagliato" },
  { number: "03", title: "Lavori", description: "Coordiniamo il cantiere con un project manager dedicato" },
  { number: "04", title: "Consegna", description: "La vostra casa, completamente rinnovata e pronta da vivere" },
];

export default function ServiziRistrutturazione() {
  return (
    <main>
      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumbJsonLd([
              { name: "Servizi di Ristrutturazione", url: "https://www.moschianosrl.it/servizi-ristrutturazione" },
            ])
          ),
        }}
      />
      {/* Hero */}
      <section className="relative min-h-[50vh] sm:min-h-[70vh] flex items-end bg-black-deep text-white overflow-hidden">
        <Image
          src="/images/ristrutturazione-hero.jpg"
          alt="Ristrutturazione chiavi in mano"
          fill
          className="object-cover"
          sizes="100vw"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black-deep via-black-deep/50 to-black-deep/20" />
        <div className="relative z-10 w-full pb-14 lg:pb-28 px-6 sm:px-10 lg:px-20">
          <FadeInView>
            <p className="text-label text-white/80 mb-6">
              Servizi di Ristrutturazione
            </p>
          </FadeInView>
          <ClipReveal direction="up" delay={0.15} duration={0.9}>
            <h1 className="font-page-title max-w-5xl">
              <AccentText>Ristrutturazioni chiavi in mano</AccentText>
            </h1>
          </ClipReveal>
          <FadeInView delay={0.4}>
            <p className="mt-8 text-body text-white/80 max-w-xl">
              Un servizio completo per rinnovare la tua casa: dalla
              progettazione alla consegna, con un unico referente per tutto.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Process steps — horizontal timeline */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="px-6 sm:px-10 lg:px-20">
          <FadeInView>
            <p className="text-label text-black-deep/60 mb-4 text-center">
              Il nostro metodo
            </p>
          </FadeInView>
          <StaggerContainer className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-px bg-black-deep/8">
            {steps.map((step) => (
              <StaggerItem key={step.number}>
                <div className="bg-cream px-5 sm:px-6 py-8 lg:py-10 text-center">
                  <span className="font-display text-[2.5rem] lg:text-[3rem] font-bold text-bordeaux leading-none">
                    {step.number}
                  </span>
                  <h3 className="mt-3 font-display text-[1.15rem] font-semibold text-black-deep tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-caption text-black-deep leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Services — card grid */}
      <section className="py-16 lg:py-32">
        <div className="px-6 sm:px-10 lg:px-20">
          <div className="text-center mb-14 lg:mb-20">
            <FadeInView>
              <p className="text-label text-black-deep/60 mb-5">
                Cosa facciamo
              </p>
            </FadeInView>
            <ClipReveal direction="up" duration={0.8}>
              <h2
                className="font-display font-bold uppercase leading-[0.9] tracking-[-0.03em] text-black-deep"
                style={{ fontSize: "clamp(1.75rem, 4vw, 4.5rem)" }}
              >
                <AccentText>Tutti i nostri servizi di ristrutturazione</AccentText>
              </h2>
            </ClipReveal>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black-deep/8" staggerDelay={0.08}>
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <div className="group bg-white p-8 lg:p-10 h-full flex flex-col hover:bg-cream transition-colors duration-500">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-full border border-black-deep/10 flex items-center justify-center text-bordeaux/70 group-hover:border-bordeaux/30 group-hover:text-bordeaux transition-colors duration-500">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 font-display text-[clamp(1.15rem,1rem+0.5vw,1.4rem)] font-semibold text-black-deep tracking-tight leading-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-caption text-black-deep leading-relaxed flex-1">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.highlights.map((h) => (
                      <span
                        key={h}
                        className="inline-block px-3 py-1.5 text-[0.75rem] font-ui font-medium tracking-wide uppercase text-black-deep/60 bg-black-deep/[0.04] border border-black-deep/[0.06] group-hover:border-bordeaux/15 group-hover:text-bordeaux/50 transition-colors duration-500"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}

            {/* Extra card — CTA */}
            <StaggerItem>
              <Link
                href="/contatti"
                className="group bg-black-deep p-8 lg:p-10 h-full flex flex-col justify-center items-center text-center hover:bg-charcoal-soft transition-colors duration-500"
              >
                <div className="w-14 h-14 rounded-full border border-cream/15 flex items-center justify-center group-hover:border-cream/40 transition-colors duration-500">
                  <svg width="20" height="20" viewBox="0 0 16 16" fill="none" className="text-cream/60 group-hover:text-cream transition-colors">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="mt-6 font-display text-[1.25rem] font-semibold text-cream tracking-tight">
                  Richiedi un preventivo
                </h3>
                <p className="mt-3 text-caption text-cream/80 leading-relaxed max-w-[26ch]">
                  Sopralluogo gratuito e preventivo dettagliato senza impegno
                </p>
              </Link>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Brand partners strip */}
      <section className="py-14 lg:py-20 bg-cream">
        <div className="px-6 sm:px-10 lg:px-20">
          <FadeInView>
            <p className="text-label text-black-deep/60 mb-8 text-center">
              I brand con cui lavoriamo
            </p>
          </FadeInView>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            {["Haier", "Hermann", "Samsung"].map((brand) => (
              <FadeInView key={brand} delay={0.1}>
                <span className="font-display text-[clamp(1.5rem,1.2rem+1vw,2rem)] font-bold text-black-deep/15 tracking-tight">
                  {brand}
                </span>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-36 bg-black-deep text-white">
        <div className="px-6 sm:px-10 lg:px-20 text-center">
          <FadeInView>
            <h2 className="font-section-title text-white max-w-2xl mx-auto">
              <AccentText>Vuoi ristrutturare la tua casa?</AccentText>
            </h2>
            <p className="mt-6 text-body text-white/80 max-w-md mx-auto">
              Contattaci per un sopralluogo gratuito e un preventivo
              dettagliato senza impegno.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-6">
              <Link
                href="/contatti"
                className="text-button inline-block bg-white text-black-deep px-8 py-4 btn-press hover:bg-white/90 transition-colors"
              >
                Richiedi preventivo
              </Link>
              <Link
                href="/finanziamento"
                className="text-button inline-block text-white border-b border-white/20 pb-1 hover:border-white/60 transition-colors link-draw"
              >
                Scopri il finanziamento
              </Link>
            </div>
          </FadeInView>
        </div>
      </section>
    </main>
  );
}
