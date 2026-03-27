"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
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
  return (
    <>
      {/* ────────────────────── 1. HERO ────────────────────── */}
      <section className="bg-white">
        <div className="pt-32 sm:pt-40 lg:pt-48 pb-14 lg:pb-20 px-6 sm:px-10 lg:px-20">
          <FadeInView>
            <p className="text-label text-[#009FE3] mb-6">
              Premium Partner Oknoplast
            </p>
          </FadeInView>

          <ClipReveal direction="up" delay={0.15} duration={0.9}>
            <h1 className="font-page-title max-w-5xl text-[#003B73]">
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
        </div>
      </section>

      {/* Divider */}
      <div className="py-6 lg:py-10 bg-cream">
        <div className="px-6 sm:px-10 lg:px-20">
          <DrawLine delay={0.1} />
        </div>
      </div>

      {/* ────────────────── 2. STATS BANNER ──────────────────── */}
      <section className="relative min-h-[500px] sm:h-[75vh] sm:min-h-[500px] flex items-center text-white overflow-hidden">
        {/* Background image with scale-in */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
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

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tl from-black-deep/85 via-black-deep/50 to-transparent" />

        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-20 py-16 sm:py-0">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-20">
            {/* Decorative oversized text (desktop only) */}
            <FadeInView className="hidden lg:block flex-1">
              <p className="font-display font-bold text-white/[0.07] text-[clamp(3rem,2rem+5vw,7rem)] leading-[0.95] select-none pointer-events-none">
                30+ anni
                <br />
                di innovazione
              </p>
            </FadeInView>

            {/* Stats */}
            <div className="flex flex-col gap-0 sm:gap-0">
              {/* Numeric stats */}
              {[
                { value: 30, suffix: "+", label: "Anni di esperienza" },
                { value: 100, suffix: "%", label: "PVC riciclabile" },
              ].map((stat, i) => (
                <FadeInView key={stat.label} delay={i * 0.1}>
                  <div className="py-6 sm:py-8 flex items-center gap-6 sm:gap-10">
                    <div className="font-display text-[clamp(1.75rem,2.5vw,2.5rem)] font-bold text-white leading-none min-w-[100px] sm:min-w-[120px] text-right">
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    </div>
                    <div>
                      <DrawLine className="!w-10 !bg-bordeaux/60 mb-3" delay={0.3 + i * 0.1} />
                      <p className="text-caption text-white/80">{stat.label}</p>
                    </div>
                  </div>
                </FadeInView>
              ))}

              {/* Text stats */}
              {[
                { value: "RC2", label: "Classe antieffrazione" },
                { value: "A+", label: "Efficienza energetica" },
              ].map((stat, i) => (
                <FadeInView key={stat.label} delay={0.2 + i * 0.1}>
                  <div className="py-6 sm:py-8 flex items-center gap-6 sm:gap-10">
                    <div className="font-display text-[clamp(1.75rem,2.5vw,2.5rem)] font-bold text-white leading-none min-w-[100px] sm:min-w-[120px] text-right">
                      {stat.value}
                    </div>
                    <div>
                      <DrawLine className="!w-10 !bg-bordeaux/60 mb-3" delay={0.5 + i * 0.1} />
                      <p className="text-caption text-white/80">{stat.label}</p>
                    </div>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ────────────── 4. COSA SIGNIFICA ─────────────────── */}
      <section className="py-20 lg:py-44 bg-cream">
        <div className="px-6 sm:px-10 lg:px-20">
          {/* Editorial scroll-reveal headline */}
          <div className="mb-16 lg:mb-24">
            <FadeInView direction="none">
              <p className="text-label text-[#003B73]/60 mb-6">
                Il nostro riconoscimento
              </p>
            </FadeInView>

            <TextRevealByWord
              as="h2"
              className="font-display font-medium text-[#003B73] text-[clamp(1.5rem,1.2rem+1.8vw,2.75rem)] leading-[1.2] max-w-4xl"
              delay={0.1}
            >
              Essere Premium Partner Oknoplast significa offrire ai nostri clienti il massimo livello di qualità, assistenza e garanzia
            </TextRevealByWord>

            <DrawLine className="mt-10 max-w-xs" delay={0.3} />
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
      <section className="py-20 lg:py-44 bg-black-deep text-white">
        <div className="px-6 sm:px-10 lg:px-20">
          {/* Image — full width */}
          <ClipReveal direction="up" delay={0.1}>
            <div className="img-reveal rounded-sm overflow-hidden h-[30vh] sm:h-[35vh] lg:h-[40vh]">
              <Image
                src="/images/oknoplast-headquarter.jpg"
                alt="Oknoplast headquarter"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </ClipReveal>

          {/* Content below */}
          <div className="mt-12 lg:mt-20 max-w-4xl">
            <FadeInView>
              <p className="text-label text-white/80 mb-6">Il brand</p>
            </FadeInView>

            <FadeInView delay={0.1}>
              <h2 className="font-section-title">
                <AccentText>Chi è Oknoplast</AccentText>
              </h2>
            </FadeInView>

            <div className="mt-8">
              <WordReveal
                text="Azienda multinazionale fondata a Cracovia nel 1994, Oknoplast è oggi un riferimento nel settore dei serramenti in PVC e alluminio di design. Ogni prodotto nasce dalla ricerca di prestazioni eccezionali di isolamento termico e acustico, unite a un'estetica di altissimo livello."
                className="text-body text-white/80 leading-relaxed"
              />
            </div>

            {/* Feature highlights */}
            <StaggerContainer className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8" staggerDelay={0.1}>
              {brandFeatures.map((feature) => (
                <StaggerItem key={feature.title}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-0.5 text-bordeaux/80">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-display text-sm font-medium text-white tracking-tight">
                        {feature.title}
                      </h4>
                      <p className="mt-1 text-caption text-white/60">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeInView delay={0.4}>
              <div className="mt-12">
                <MagneticButton>
                  <Link
                    href="/prodotti/infissi-pvc"
                    className="text-button inline-block bg-white text-black-deep px-8 py-4 btn-press hover:bg-white/85 transition-colors"
                  >
                    Scopri le finestre Oknoplast
                  </Link>
                </MagneticButton>
              </div>
            </FadeInView>
          </div>
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

      {/* ────────────── 6. CTA PREMIUM ────────────────────── */}
      <section className="relative flex items-center justify-center bg-black-deep text-white overflow-hidden">
        {/* Animated gradient background */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at 20% 50%, rgba(122,38,56,0.15), transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(122,38,56,0.1), transparent 60%)",
          }}
        />

        <div className="relative z-10 text-center px-6 sm:px-10 lg:px-20 py-16 lg:py-20 w-full">
          <FadeInView direction="none">
            <p className="text-label text-white/80 mb-6">
              Inizia il tuo progetto
            </p>
          </FadeInView>

          <TextRevealByWord
            as="h2"
            className="font-hero text-white justify-center"
            delay={0.1}
          >
            Scegli la qualità Premium Partner
          </TextRevealByWord>

          <FadeInView delay={0.3}>
            <p className="mt-8 text-body text-white/80 max-w-lg mx-auto">
              Contattaci per una consulenza personalizzata. Sopralluogo gratuito
              e preventivo senza impegno.
            </p>
          </FadeInView>

          <DrawLine className="mx-auto !w-16 !bg-white/10 mt-10" delay={0.4} />

          <FadeInView delay={0.5}>
            <div className="mt-10 flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4 sm:gap-6">
              <MagneticButton>
                <Link
                  href="/contatti"
                  className="text-button block sm:inline-block text-center bg-white text-black-deep px-8 py-4 btn-press hover:bg-white/85 transition-colors"
                >
                  Richiedi una consulenza
                </Link>
              </MagneticButton>
              <MagneticButton>
                <a
                  href="https://wa.me/3517278053"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-button block sm:inline-block text-center border border-white/20 text-white px-8 py-4 btn-press hover:bg-white hover:text-black-deep transition-all duration-300"
                >
                  Scrivici su WhatsApp
                </a>
              </MagneticButton>
            </div>
          </FadeInView>
        </div>
      </section>
    </>
  );
}
