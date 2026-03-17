import type { Metadata } from "next";
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
  },
  {
    title: "Rifacimento completo bagni",
    description:
      "Demolizione, rifacimento pavimenti e rivestimenti, sostituzione sanitari e rubinetteria, realizzazione impianti idraulici ed elettrici a norma. Dalla progettazione alla scelta dei materiali, con i migliori marchi del settore.",
    highlights: ["Impianti a norma", "Migliori marchi", "Progettazione inclusa"],
  },
  {
    title: "Impianti elettrici e idraulici certificati",
    description:
      "Impianti a norma di legge con tutte le certificazioni necessarie. Per gli impianti elettrici: distribuzione, illuminazione, domotica, predisposizioni per elettrodomestici. Per quelli idraulici: adduzione, scarichi, riscaldamento e condizionamento. Ogni impianto viene collaudato e certificato.",
    highlights: ["Certificazioni incluse", "Domotica", "Collaudo garantito"],
  },
  {
    title: "Impianti allarmi e videosorveglianza",
    description:
      "Sistemi antifurto e videosorveglianza personalizzati per casa o ufficio. Tecnologie con app per smartphone per monitoraggio a distanza. Consulenza gratuita per valutare i punti critici e progettare la soluzione pi\u00f9 efficace.",
    highlights: ["App smartphone", "Consulenza gratuita", "Personalizzazione"],
  },
  {
    title: "Climatizzazione Haier",
    description:
      "Sistemi di climatizzazione Haier, marchio leader mondiale. Soluzioni per raffrescamento e riscaldamento. Dimensionamento corretto degli impianti, installazione e messa in servizio. Sistemi ad alta efficienza energetica con tecnologie innovative.",
    highlights: ["Haier leader mondiale", "Alta efficienza", "Raffrescamento e riscaldamento"],
  },
  {
    title: "Caldaie Hermann",
    description:
      "Qualit\u00e0 tedesca per il riscaldamento. Elevata efficienza energetica e massima affidabilit\u00e0. Rimozione vecchia caldaia, installazione nuova, collegamento impianti esistenti e messa in servizio. Servizi di manutenzione programmata.",
    highlights: ["Qualit\u00e0 tedesca", "Manutenzione programmata", "Efficienza energetica"],
  },
  {
    title: "Pompe di calore Samsung",
    description:
      "Riscaldamento e raffrescamento rispettando l\u2019ambiente. Tecnologie avanzate come inverter e gestione intelligente per ottimizzare le prestazioni in ogni condizione climatica. Consumi ridotti.",
    highlights: ["Samsung", "Tecnologia inverter", "Consumi ridotti"],
  },
];

export default function ServiziRistrutturazione() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end bg-black-deep text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black-deep/90 via-transparent to-transparent" />
        <div className="relative z-10 w-full pb-14 lg:pb-28 px-6 sm:px-10 lg:px-20">
          <FadeInView>
            <p className="text-label text-white/40 mb-6">
              Servizi di Ristrutturazione
            </p>
          </FadeInView>
          <ClipReveal direction="up" delay={0.15} duration={0.9}>
            <h1 className="font-page-title max-w-5xl">
              <AccentText>Ristrutturazioni chiavi in mano</AccentText>
            </h1>
          </ClipReveal>
          <FadeInView delay={0.4}>
            <p className="mt-8 text-body text-white/35 max-w-xl">
              Un servizio completo per rinnovare la tua casa: dalla
              progettazione alla consegna, con un unico referente per tutto.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Services — full detail */}
      <section className="py-16 lg:py-36">
        <div className="px-6 sm:px-10 lg:px-20">
          <StaggerContainer className="space-y-0">
            {services.map((service, i) => (
              <StaggerItem key={service.title}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 py-14 lg:py-20 border-t border-black/5 items-start">
                  {/* Left */}
                  <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                    <span className="text-label text-black-deep/20">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="mt-3 font-display text-[clamp(1.375rem,1.1rem+1.5vw,2rem)] font-medium text-black-deep tracking-tight leading-tight">
                      {service.title}
                    </h2>
                  </div>

                  {/* Right */}
                  <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                    <p className="text-body text-black-deep/60 leading-relaxed">
                      {service.description}
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

      {/* CTA */}
      <section className="py-16 lg:py-36 bg-black-deep text-white">
        <div className="px-6 sm:px-10 lg:px-20 text-center">
          <FadeInView>
            <h2 className="font-section-title text-white max-w-2xl mx-auto">
              <AccentText>Vuoi ristrutturare la tua casa?</AccentText>
            </h2>
            <p className="mt-6 text-body text-white/45 max-w-md mx-auto">
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
