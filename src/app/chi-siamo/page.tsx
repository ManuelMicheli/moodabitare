import type { Metadata } from "next";
import { FadeInView } from "@/components/animations/FadeInView";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

export const metadata: Metadata = {
  title: "Chi Siamo",
  description:
    "Mood Abitare by Moschiano Solution: oltre 30 anni di esperienza in serramenti, porte e ristrutturazioni nella provincia di Varese. Showroom di 300mq a Gorla Maggiore.",
};

const timeline = [
  { year: "1990", title: "Fondazione", description: "Nasce Moschiano Solution, con la passione per l'artigianato e la qualità." },
  { year: "2000", title: "Espansione", description: "Ampliamento dell'offerta a porte, arredo bagno e complementi d'arredo." },
  { year: "2010", title: "Showroom", description: "Apertura dello showroom di 300mq in Viale Europa 65, Gorla Maggiore." },
  { year: "2020", title: "Premium Partner", description: "Riconoscimento come Premium Partner Oknoplast per la provincia di Varese." },
  { year: "Oggi", title: "Mood Abitare", description: "Un punto di riferimento per serramenti, ristrutturazioni e arredo casa." },
];

const values = [
  { title: "Esperienza", description: "Oltre 30 anni di attività nel settore, con posatori qualificati e patentino di posa certificata." },
  { title: "Qualità", description: "Selezione attenta dei fornitori: solo aziende innovative e affidabili, italiane ed europee." },
  { title: "Consulenza", description: "Supporto di un architetto per la scelta prodotti, con render 3D per visualizzare il risultato." },
  { title: "Efficienza", description: "Focus su efficienza energetica: aiuto nella scelta delle soluzioni più adeguate alla zona climatica." },
  { title: "Chiavi in mano", description: "Un unico referente dalla progettazione allo smaltimento dei vecchi serramenti." },
  { title: "Territorio", description: "Forte radicamento nella provincia di Varese, con conoscenza delle specificità climatiche locali." },
];

export default function ChiSiamo() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end bg-black-deep text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black-deep/90 via-transparent to-transparent" />
        <div className="relative z-10 w-full pb-20 lg:pb-28 px-6 sm:px-10 lg:px-20">
          <FadeInView>
            <p className="text-label text-white/40 mb-6">
              La nostra storia
            </p>
            <h1 className="font-section-title max-w-4xl">
              Il partner ideale per la tua casa
            </h1>
            <p className="mt-8 text-body text-white/35 max-w-xl">
              Mood Abitare by Moschiano Solution è il punto di riferimento nella provincia di Varese per serramenti, ristrutturazioni e nuove costruzioni.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* About Text — empty per richiesta utente */}
      <section className="py-20 lg:py-28" />

      {/* Timeline */}
      <section className="py-32 lg:py-44 bg-white">
        <div className="px-6 sm:px-10 lg:px-20">
          <FadeInView>
            <p className="text-label text-black-deep/30 mb-6">
              La nostra storia
            </p>
            <h2 className="font-section-title text-black-deep mb-16 lg:mb-24">
              Un percorso di crescita
            </h2>
          </FadeInView>

          <StaggerContainer className="space-y-0">
            {timeline.map((item) => (
              <StaggerItem key={item.year}>
                <div className="grid grid-cols-[80px_1fr] gap-8 lg:grid-cols-[120px_1fr] lg:gap-16 py-8 lg:py-12 border-t border-black/5">
                  <span className="font-display text-2xl lg:text-3xl font-bold text-black-deep/15">
                    {item.year}
                  </span>
                  <div>
                    <h3 className="font-display text-xl lg:text-2xl font-bold text-black-deep tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-caption text-black-deep/40 max-w-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 lg:py-44 bg-black-deep text-white">
        <div className="px-6 sm:px-10 lg:px-20">
          <FadeInView>
            <p className="text-label text-white/30 mb-6">
              I nostri valori
            </p>
            <h2 className="font-section-title mb-16 lg:mb-24">
              Cosa ci distingue
            </h2>
          </FadeInView>

          <StaggerContainer className="grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
            {values.map((value, i) => (
              <StaggerItem key={value.title}>
                <div className="bg-black-deep p-8 lg:p-12 h-full">
                  <span className="text-caption font-medium text-white/15">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold text-white tracking-tight">
                    {value.title}
                  </h3>
                  <p className="mt-4 text-caption text-white/35">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Showroom CTA */}
      <section className="py-32 lg:py-44 bg-white">
        <div className="px-6 sm:px-10 lg:px-20 text-center">
          <FadeInView>
            <p className="text-label text-black-deep/30 mb-8">
              Vieni a trovarci
            </p>
            <h2 className="font-section-title text-black-deep max-w-3xl mx-auto">
              Visita il nostro showroom di 300mq
            </h2>
            <p className="mt-8 text-body text-black-deep/35 max-w-md mx-auto">
              Viale Europa, 65 — 21050 Gorla Maggiore (VA)
            </p>
            <a
              href="/contatti"
              className="inline-block mt-12 text-button text-black-deep border-b border-black-deep/20 pb-1 hover:border-black-deep transition-colors"
            >
              Prenota una visita
            </a>
          </FadeInView>
        </div>
      </section>
    </main>
  );
}
