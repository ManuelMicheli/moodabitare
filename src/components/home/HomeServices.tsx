"use client";

import Link from "next/link";
import { FadeInView } from "@/components/animations/FadeInView";

const services = [
  {
    title: "Consulenza progettuale",
    detail:
      "Analisi delle esigenze e delle specifiche dello spazio da rinnovare. Progetto personalizzato per assicurare che le soluzioni proposte migliorino l'estetica degli ambienti e ne aumentino l'efficienza energetica e il comfort.",
    highlights: ["Analisi personalizzata", "Efficienza energetica", "Comfort abitativo"],
  },
  {
    title: "Preventivi e sopralluoghi gratuiti",
    detail:
      "Sopralluoghi gratuiti con tecnico qualificato. Preventivi dettagliati, chiari e trasparenti con stima precisa dei costi e delle tempistiche. Nessun costo nascosto, nessun impegno.",
    highlights: ["Sopralluogo gratuito", "Preventivo dettagliato", "Stima tempistiche"],
  },
  {
    title: "Installazione e posa in opera",
    detail:
      "Squadra di operatori formata direttamente dall'azienda. Montaggio dei serramenti in totale sicurezza con tecniche all'avanguardia e materiali di alta qualità. Posa in opera certificata con patentino.",
    highlights: ["Patentino posa certificata", "Tecniche all'avanguardia", "Materiali di qualità"],
  },
  {
    title: "Supporto detrazioni fiscali",
    detail:
      "Gestione completa dell'aspetto burocratico per interventi di sostituzione dei serramenti. Il team si occupa dell'invio dei dati all'Istituto preposto per usufruire delle detrazioni statali. Compilazione della documentazione e presentazione delle pratiche incluse.",
    highlights: ["Detrazioni fiscali", "Gestione documenti", "Pratiche incluse"],
  },
  {
    title: "Smaltimento vecchi serramenti",
    detail:
      "Rimozione e trasporto dei vecchi infissi presso strutture di smaltimento autorizzate, nel rispetto dell'ambiente e delle normative vigenti in materia di gestione dei rifiuti.",
    highlights: ["Centri autorizzati", "A norma di legge", "Ritiro incluso"],
  },
  {
    title: "Assistenza post-vendita",
    detail:
      "Servizio completo di assistenza post-vendita: manutenzione, riparazioni e consigli. L'impegno non termina con l'installazione. Intervento rapido e professionale per qualsiasi necessità.",
    highlights: ["Manutenzione", "Riparazioni", "Intervento rapido"],
  },
];

export function HomeServices() {
  return (
    <section id="servizi" className="py-20 lg:py-36 bg-[#F7F5F2]">
      <div className="px-6 sm:px-10 lg:px-20">
        {/* Header */}
        <FadeInView>
          <div className="mb-12 lg:mb-20 text-center">
            <p className="text-label text-black-deep/30 mb-5">
              I nostri servizi
            </p>
            <h2
              className="font-display font-bold uppercase leading-[0.85] tracking-[-0.03em] text-black-deep"
              style={{ fontSize: "clamp(1.75rem, 4.2vw, 9rem)" }}
            >
              Dalla consulenza alla posa in opera
            </h2>
            <p
              className="mt-6 max-w-2xl mx-auto font-display text-black-deep/50"
              style={{ fontSize: "clamp(0.95rem, 0.85rem + 0.4vw, 1.2rem)" }}
            >
              Un servizio completo e professionale con un unico referente — dalla progettazione allo smaltimento dei vecchi serramenti.
            </p>
          </div>
        </FadeInView>

        {/* Service rows */}
        <div className="border-t border-[#E5E5E5]">
          {services.map((service, i) => (
            <FadeInView key={service.title} delay={i * 0.08}>
              <div className="group border-b border-[#E5E5E5]">
                <div className="relative py-5 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8 overflow-hidden bg-transparent group-hover:bg-bordeaux transition-all duration-500 ease-out">
                  {/* Default state — centered title */}
                  <div className="text-center transition-all duration-400 ease-out group-hover:opacity-0 group-hover:-translate-y-4">
                    <h3
                      className="font-display font-medium leading-[1.1] tracking-[-0.02em] uppercase text-bordeaux"
                      style={{
                        fontSize: "clamp(1.25rem, 1rem + 1vw, 2.75rem)",
                      }}
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* Hover state — full info overlay */}
                  <div className="absolute inset-0 px-4 sm:px-6 lg:px-8 py-5 sm:py-6 lg:py-8 flex items-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 ease-out">
                    <div className="w-full grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-3 lg:gap-10 items-center">
                      {/* Title — left aligned */}
                      <h3
                        className="font-display font-medium leading-[1.1] tracking-[-0.02em] uppercase text-bordeaux group-hover:text-white shrink-0 transition-colors duration-500"
                        style={{
                          fontSize: "clamp(1rem, 0.85rem + 0.6vw, 1.5rem)",
                        }}
                      >
                        {service.title}
                      </h3>

                      {/* Detail + highlights */}
                      <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-6">
                        <p
                          className="leading-relaxed text-black-deep/60 group-hover:text-white/80 font-display flex-1 transition-colors duration-500"
                          style={{ fontSize: "clamp(0.85rem, 0.78rem + 0.3vw, 1rem)" }}
                        >
                          {service.detail}
                        </p>
                        <div className="flex flex-wrap gap-1.5 shrink-0">
                          {service.highlights.map((h) => (
                            <span
                              key={h}
                              className="text-[0.65rem] sm:text-[0.7rem] font-ui font-medium tracking-wide uppercase text-black-deep/40 group-hover:text-white/60 border border-black-deep/10 group-hover:border-white/20 px-2.5 py-1 rounded-sm whitespace-nowrap transition-colors duration-500"
                            >
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>

        {/* CTA */}
        <FadeInView delay={0.5}>
          <div className="mt-12 text-center">
            <Link
              href="/contatti"
              className="inline-flex items-center gap-2 text-button text-black-deep/60 hover:text-black-deep transition-colors"
            >
              Richiedi un preventivo gratuito
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
