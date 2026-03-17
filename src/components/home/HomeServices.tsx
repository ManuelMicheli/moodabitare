"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeInView } from "@/components/animations/FadeInView";
import { TextRevealByWord } from "@/components/animations/TextRevealByWord";
import { DrawLine } from "@/components/animations/DrawLine";
import { ClipReveal } from "@/components/animations/ClipReveal";
import { MagneticButton } from "@/components/animations/MagneticButton";

const services = [
  {
    title: "Consulenza progettuale",
    detail:
      "Analisi delle esigenze e delle specifiche dello spazio da rinnovare. Progetto personalizzato per assicurare che le soluzioni proposte migliorino l'estetica degli ambienti e ne aumentino l'efficienza energetica e il comfort.",
    highlights: [
      "Analisi personalizzata",
      "Efficienza energetica",
      "Comfort abitativo",
    ],
  },
  {
    title: "Preventivi e sopralluoghi gratuiti",
    detail:
      "Sopralluoghi gratuiti con tecnico qualificato. Preventivi dettagliati, chiari e trasparenti con stima precisa dei costi e delle tempistiche. Nessun costo nascosto, nessun impegno.",
    highlights: [
      "Sopralluogo gratuito",
      "Preventivo dettagliato",
      "Stima tempistiche",
    ],
  },
  {
    title: "Installazione e posa in opera",
    detail:
      "Squadra di operatori formata direttamente dall'azienda. Montaggio dei serramenti in totale sicurezza con tecniche all'avanguardia e materiali di alta qualità. Posa in opera certificata con patentino.",
    highlights: [
      "Patentino posa certificata",
      "Tecniche all'avanguardia",
      "Materiali di qualità",
    ],
  },
  {
    title: "Supporto detrazioni fiscali",
    detail:
      "Gestione completa dell'aspetto burocratico per interventi di sostituzione dei serramenti. Il team si occupa dell'invio dei dati all'Istituto preposto per usufruire delle detrazioni statali. Compilazione della documentazione e presentazione delle pratiche incluse.",
    highlights: [
      "Detrazioni fiscali",
      "Gestione documenti",
      "Pratiche incluse",
    ],
  },
  {
    title: "Smaltimento vecchi serramenti",
    detail:
      "Rimozione e trasporto dei vecchi infissi presso strutture di smaltimento autorizzate, nel rispetto dell'ambiente e delle normative vigenti in materia di gestione dei rifiuti.",
    highlights: [
      "Centri autorizzati",
      "A norma di legge",
      "Ritiro incluso",
    ],
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
        <div className="mb-14 lg:mb-24 text-center">
          <FadeInView>
            <p className="text-label text-black-deep/30 mb-5">
              I nostri servizi
            </p>
          </FadeInView>
          <TextRevealByWord
            as="h2"
            className="font-display font-bold uppercase leading-[0.85] tracking-[-0.03em] text-black-deep justify-center"
            style={{ fontSize: "clamp(1.75rem, 4.2vw, 5rem)" }}
            stagger={0.03}
          >
            Dalla consulenza alla posa in opera
          </TextRevealByWord>
          <FadeInView delay={0.3}>
            <p
              className="mt-6 max-w-xl mx-auto font-display text-black-deep/50"
              style={{
                fontSize: "clamp(0.95rem, 0.85rem + 0.4vw, 1.15rem)",
              }}
            >
              Un servizio completo e professionale con un unico referente —
              dalla progettazione allo smaltimento dei vecchi serramenti.
            </p>
          </FadeInView>
        </div>

        {/* Service rows */}
        <div>
          {services.map((service, i) => (
            <ClipReveal key={service.title} direction="left" delay={i * 0.06} duration={0.7}>
              <div
                className={`group relative border-t border-black-deep/10 ${i === services.length - 1 ? "border-b" : ""}`}
              >
                {/* Bordeaux accent line — slides in on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-bordeaux origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out" />

                <div className="py-7 sm:py-8 lg:py-10 lg:pl-6 group-hover:lg:pl-8 transition-all duration-500 ease-out">
                  {/* Desktop: number | title | description + highlights */}
                  <div className="grid grid-cols-1 lg:grid-cols-[3.5rem_1fr_1.4fr] gap-4 lg:gap-8 items-start">
                    {/* Number */}
                    <span
                      className="hidden lg:block font-ui text-[0.8rem] font-medium text-black-deep/20 group-hover:text-bordeaux/60 pt-[0.35rem] tabular-nums transition-colors duration-500"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Title */}
                    <div className="flex items-start gap-3 lg:gap-0">
                      <span className="lg:hidden font-ui text-[0.75rem] font-medium text-black-deep/20 group-hover:text-bordeaux/60 pt-[0.2rem] tabular-nums shrink-0 transition-colors duration-500">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3
                        className="font-display font-semibold leading-[1.15] tracking-[-0.01em] text-black-deep"
                        style={{
                          fontSize:
                            "clamp(1.15rem, 0.95rem + 0.8vw, 1.65rem)",
                        }}
                      >
                        {service.title}
                      </h3>
                    </div>

                    {/* Description + Highlights */}
                    <div className="pl-8 lg:pl-0">
                      <p
                        className="leading-relaxed font-ui text-black-deep"
                        style={{
                          fontSize:
                            "clamp(0.875rem, 0.82rem + 0.2vw, 0.975rem)",
                        }}
                      >
                        {service.detail}
                      </p>
                      <div className="mt-3.5 flex flex-wrap gap-2">
                        {service.highlights.map((h) => (
                          <span
                            key={h}
                            className="inline-block px-3 py-1 rounded-full text-[0.7rem] font-ui font-medium tracking-wide uppercase text-black-deep/40 bg-black-deep/[0.04] border border-black-deep/[0.06] group-hover:border-bordeaux/15 group-hover:text-bordeaux/50 transition-colors duration-500"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ClipReveal>
          ))}
        </div>

        {/* CTA */}
        <FadeInView delay={0.45}>
          <div className="mt-14 lg:mt-20 flex justify-center">
            <MagneticButton>
              <Link
                href="/contatti"
                className="group/cta inline-flex items-center gap-3 text-button text-black-deep/60 hover:text-bordeaux transition-colors duration-300"
              >
                Richiedi un preventivo gratuito
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-current/30 group-hover/cta:border-bordeaux/50 transition-all duration-300 group-hover/cta:translate-x-1">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </MagneticButton>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
