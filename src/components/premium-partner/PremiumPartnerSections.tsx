"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { FadeInView } from "@/components/animations/FadeInView";
import { ClipReveal } from "@/components/animations/ClipReveal";
import { TextRevealByWord } from "@/components/animations/TextRevealByWord";
import { WordReveal } from "@/components/animations/WordReveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { DrawLine } from "@/components/animations/DrawLine";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { HoverTilt } from "@/components/animations/HoverTilt";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { AccentText } from "@/components/ui/AccentText";

/* ── Data ──────────────────────────────────────────────────────────── */

const benefits = [
  {
    title: "Qualità certificata",
    description:
      "Prodotti con le più alte certificazioni internazionali presso istituti indipendenti europei.",
  },
  {
    title: "Assistenza dedicata",
    description:
      "Un team sempre aggiornato sulle ultime novità in termini di prodotti e tecniche di installazione.",
  },
  {
    title: "Garanzia estesa",
    description:
      "Garanzia completa su prodotti e installazione, con assistenza post-vendita dedicata.",
  },
  {
    title: "Design innovativo",
    description:
      "Soluzioni brevettate e originali con estetica di altissimo livello e prestazioni eccezionali.",
  },
];

const brandFeatures = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Innovazione brevettata",
    description: "Serramenti brevettati e originali con estetica di altissimo livello",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Certificazioni europee",
    description: "Numerose certificazioni presso prestigiosi istituti indipendenti",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125V11M17.25 12l2.909 2.909a3.75 3.75 0 010 5.303M12 12l5.25-5.25" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Personalizzazione totale",
    description: "Finiture, maniglie e accessori personalizzabili in ogni dettaglio",
  },
];

const oknoplastProducts = [
  { slug: "infissi-pvc", name: "Infissi in PVC", description: "Serramenti in PVC di design con isolamento termico e acustico eccezionale" },
  { slug: "infissi-alluminio", name: "Infissi in Alluminio", description: "Profili in alluminio minimal per massima luminosità e prestazioni" },
  { slug: "portoncini", name: "Portoncini", description: "Portoncini d'ingresso blindati con design brevettato e sicurezza certificata" },
];


/* ── Component ─────────────────────────────────────────────────────── */

export function PremiumPartnerSections() {
  const oknoplastRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const { scrollYProgress: oknoplastScroll } = useScroll({
    target: oknoplastRef,
    offset: ["start end", "end start"],
  });
  const oknoplastY = useTransform(oknoplastScroll, [0, 1], isMobile ? ["0%", "0%"] : ["-15%", "15%"]);
  const oknoplastScale = useTransform(oknoplastScroll, [0, 1], isMobile ? [1, 1] as number[] : [1.05, 1] as number[]);

  return (
    <>
      {/* ────────────────────── 1. HERO ────────────────────── */}
      <section className="bg-white">
        <div className="pt-32 sm:pt-40 lg:pt-48 pb-14 lg:pb-20 px-6 sm:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-16">
            {/* Left — Text */}
            <div className="flex-1">
              <FadeInView>
                <div className="flex justify-center mb-10 lg:mb-12">
                  <a href="https://www.oknoplast.it/" target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-80 transition-opacity">
                    <Image
                      src="/brandpartner/oknoplast-logo.jpg"
                      alt="Oknoplast — Le finestre di Design"
                      width={500}
                      height={200}
                      className="w-[280px] sm:w-[360px] lg:w-[450px] h-auto"
                    />
                  </a>
                </div>
              </FadeInView>

              <FadeInView delay={0.1}>
                <p className="text-label text-[#009FE3] mb-6">
                  Premium Partner Oknoplast
                </p>
              </FadeInView>

              <ClipReveal direction="up" delay={0.2} duration={0.9}>
                <h1 className="font-page-title text-[#003B73]">
                  <AccentText>
                    La qualità di un Premium Partner, la passione di chi la vive ogni giorno
                  </AccentText>
                </h1>
              </ClipReveal>

              <FadeInView delay={0.4}>
                <p className="mt-8 text-body text-[#003B73]/70 max-w-xl">
                  Mood Abitare è stata selezionata da Oknoplast come Premium Partner
                  per la provincia di Varese. Fa parte di una ristretta rete di
                  operatori che garantiscono ai propri clienti un&apos;elevata
                  qualità dei prodotti e dei servizi offerti.
                </p>
              </FadeInView>

              <FadeInView delay={0.5}>
                <a
                  href="https://www.oknoplast.it/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-8 text-button text-[#003B73] border border-[#003B73]/20 px-6 py-3 btn-press hover:bg-[#003B73] hover:text-white transition-all duration-300"
                >
                  Visita oknoplast.it &rarr;
                </a>
              </FadeInView>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────── 2. STATS BANNER ──────────────────── */}
      <section className="bg-cream">
        {/* Image — full width */}
        <motion.div
          className="relative w-full h-[50vw] sm:h-[40vw] lg:h-[35vw] max-h-[550px] overflow-hidden"
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Image
            src="/images/Oknoplast-azienda-vista-aerea-opt.jpg"
            alt="Oknoplast azienda vista aerea"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>

        {/* Stats below */}
        <div className="px-6 sm:px-10 lg:px-20 py-10 lg:py-14">
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12 lg:gap-16">
            {[
              { value: 30, suffix: "+", label: "Anni di esperienza", isNumber: true },
              { value: 100, suffix: "%", label: "PVC riciclabile", isNumber: true },
              { value: "RC2", suffix: "", label: "Classe antieffrazione", isNumber: false },
              { value: "A+", suffix: "", label: "Efficienza energetica", isNumber: false },
            ].map((stat, i) => (
              <FadeInView key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="font-display text-[clamp(1.75rem,2.5vw,2.5rem)] font-bold text-[#003B73] leading-none">
                    {stat.isNumber ? (
                      <AnimatedCounter target={stat.value as number} suffix={stat.suffix} />
                    ) : (
                      stat.value
                    )}
                  </div>
                  <DrawLine className="!w-10 !bg-[#009FE3]/40 mx-auto mt-3 mb-3" delay={0.3 + i * 0.1} />
                  <p className="text-caption text-[#003B73]/70">{stat.label}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────── 4. COSA SIGNIFICA ─────────────────── */}
      <section className="py-20 lg:py-44 bg-cream">
        <div className="px-6 sm:px-10 lg:px-20">
          {/* Editorial scroll-reveal headline */}
          <div className="mb-16 lg:mb-24 text-center">
            <FadeInView direction="none">
              <p className="text-label text-[#003B73]/60 mb-6">
                Il nostro riconoscimento
              </p>
            </FadeInView>

            <TextRevealByWord
              as="h2"
              className="font-display font-medium text-[#003B73] text-[clamp(1.5rem,1.2rem+1.8vw,2.75rem)] leading-[1.2] max-w-4xl mx-auto justify-center"
              delay={0.1}
            >
              Essere Premium Partner Oknoplast significa offrire ai nostri clienti il massimo livello di qualità, assistenza e garanzia
            </TextRevealByWord>

            <DrawLine className="mt-10 mx-auto !w-16" delay={0.3} />
          </div>

          {/* Benefit cards with HoverTilt */}
          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-warm-gray/40"
            staggerDelay={0.08}
          >
            {benefits.map((benefit, i) => (
              <StaggerItem key={benefit.title}>
                <HoverTilt maxTilt={4} scale={1.01} glare>
                  <div className="bg-white border-glow p-8 lg:p-10 h-full">
                    <span className="font-display text-[clamp(1.5rem,1.2rem+1vw,2rem)] font-bold text-[#003B73]/[0.08] leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-4 font-display text-base font-medium text-[#003B73] tracking-tight">
                      <AccentText>{benefit.title}</AccentText>
                    </h3>
                    <p className="mt-3 text-caption text-[#003B73]/80">
                      {benefit.description}
                    </p>
                  </div>
                </HoverTilt>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ────────────── 5. BRAND STORY OKNOPLAST ──────────── */}
      <section ref={oknoplastRef} className="relative overflow-hidden">
        {/* Background image with parallax */}
        <motion.div
          className="absolute inset-0 h-[130%] -top-[15%]"
          style={{ y: oknoplastY, scale: oknoplastScale }}
        >
          <Image
            src="/images/oknoplast-headquarter_upscayl_4x_upscayl-standard-4x.png"
            alt="Oknoplast headquarter"
            fill
            className="object-cover object-[center_25%]"
            sizes="100vw"
          />
        </motion.div>

        {/* Banner with centered card dividing the image */}
        <div className="relative z-10 grid lg:grid-cols-[2fr_auto_1fr] items-stretch">
          {/* Left — image visible */}
          <div />

          {/* Center — cream card */}
          <div className="bg-cream px-8 sm:px-12 lg:px-14 py-16 sm:py-20 lg:py-24 w-full lg:w-[420px] text-center">
            <FadeInView direction="none">
              <p className="text-label text-[#009FE3] mb-4">Il brand</p>

              <h2 className="font-display font-bold text-[#003B73] leading-[0.93] tracking-[-0.02em]" style={{ fontSize: "clamp(1.75rem, 1.2rem + 2.5vw, 3rem)" }}>
                <AccentText>Chi è Oknoplast</AccentText>
              </h2>

              <p className="mt-5 text-body text-[#003B73]/75 leading-relaxed" style={{ fontSize: "clamp(0.875rem, 0.8rem + 0.2vw, 1.05rem)" }}>
                Azienda multinazionale fondata a Cracovia nel 1994, leader mondiale nei serramenti in PVC e alluminio di design.
              </p>

              <div className="mt-8">
                <MagneticButton>
                  <Link
                    href="/prodotti/infissi-pvc"
                    className="text-button inline-block bg-[#003B73] text-white px-8 py-4 btn-press hover:bg-[#003B73]/90 transition-colors"
                  >
                    Scopri le finestre Oknoplast
                  </Link>
                </MagneticButton>
              </div>
            </FadeInView>
          </div>

          {/* Right — image visible */}
          <div />
        </div>
      </section>

      {/* ────────────── 5. LE SOLUZIONI OKNOPLAST ──────────── */}
      <section className="py-20 lg:py-32">
        <div className="px-6 sm:px-10 lg:px-20">
          <FadeInView>
            <p className="text-label text-[#003B73]/60 mb-4">I prodotti</p>
          </FadeInView>
          <FadeInView delay={0.1}>
            <h2 className="font-section-title text-[#003B73]">
              <AccentText>Le soluzioni Oknoplast</AccentText>
            </h2>
          </FadeInView>

          <StaggerContainer
            className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-[6px] sm:gap-2"
            staggerDelay={0.08}
          >
            {oknoplastProducts.map((product) => (
              <StaggerItem key={product.slug} className="h-full">
                <Link
                  href={`/prodotti/${product.slug}`}
                  className="group flex flex-col h-full bg-white"
                  style={{
                    clipPath: `polygon(
                      8px 0, calc(100% - 8px) 0,
                      100% 8px, 100% calc(100% - 8px),
                      calc(100% - 8px) 100%, 8px 100%,
                      0 calc(100% - 8px), 0 8px
                    )`,
                  }}
                >
                  <div className="p-5 sm:p-6 lg:p-8">
                    <span className="text-label text-[0.6rem] sm:text-[0.65rem] text-[#003B73]/30">
                      Oknoplast
                    </span>
                    <h3 className="mt-1 sm:mt-2 font-card-title text-[0.875rem] sm:text-base text-[#003B73] group-hover:text-[#003B73]/60 transition-colors leading-tight">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-caption text-[0.8rem] text-[#003B73]/50 leading-snug">
                      {product.description}
                    </p>
                    <span className="inline-block mt-4 text-caption text-[0.8rem] text-[#003B73]/60 group-hover:text-[#003B73] transition-colors">
                      Scopri &rarr;
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

    </>
  );
}
