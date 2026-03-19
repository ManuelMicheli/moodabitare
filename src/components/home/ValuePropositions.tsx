"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { FadeInView } from "@/components/animations/FadeInView";
import { TextRevealByWord } from "@/components/animations/TextRevealByWord";
import { DrawLine } from "@/components/animations/DrawLine";
import { AboutSection } from "@/components/home/AboutSection";
import { RistrutturazioneBanner } from "@/components/home/RistrutturazioneBanner";
import { VALUE_PROPOSITIONS } from "@/lib/constants";

const marqueeImages = [
  { src: "/images/Home-bertolotto-opt.jpg", alt: "Interni con porte interne di design" },
  { src: "/images/Cucina-con-finestra-Prolux-Swing-opt.jpg", alt: "Cucina con finestra Prolux Swing" },
  { src: "/images/Zona-giorno-con-porta-balcone-Prolux-Evolution-copia-1536x768.jpg", alt: "Zona giorno con porta-finestra Prolux Evolution" },
  { src: "/images/Bilico_antracite-eff-legno_FINAL.jpg", alt: "Portoncino d'ingresso in alluminio effetto legno" },
  { src: "/images/Ekosol-frangisole_Grigio-scuro-soft_FINAL (1).jpg", alt: "Frangisole Ekosol grigio scuro" },
  { src: "/images/Oknoplast_2024_home.jpg", alt: "Serramenti Oknoplast" },
  { src: "/images/bertolotto.webp", alt: "Porte interne di design" },
  { src: "/images/Squareline_Tapparella_Vista_Ext_FINAL.jpg", alt: "Serramenti Squareline con tapparella" },
];

export function ValuePropositions() {
  return (
    <section>
      {/* Infinite scrolling images */}
      <div className="overflow-hidden">
        <div className="flex w-max gap-10 sm:gap-16 animate-marquee-scroll">
          {[...marqueeImages, ...marqueeImages].map((img, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 h-[40vw] sm:h-[50vw] rounded-sm overflow-hidden bg-warm-gray"
              style={{ width: "max(55vw, 500px)" }}
            />

          ))}
        </div>
      </div>

      <div className="py-10 sm:py-14 lg:py-16" />

      {/* Ristrutturazione banner */}
      <RistrutturazioneBanner />

      {/* About — scroll-reveal text */}
      <AboutSection />

      {/* Title + Stats */}
      <div className="py-12 lg:py-16 px-6 sm:px-10 lg:px-20">
        {/* Mobile layout */}
        <div className="lg:hidden">
          <div className="text-center mb-10">
            <FadeInView>
              <p className="text-label text-black-deep/40 mb-3">
                I numeri che ci definiscono
              </p>
            </FadeInView>
            <TextRevealByWord
              as="h2"
              className="font-section-title text-black-deep justify-center"
              stagger={0.05}
            >
              La nostra esperienza in cifre
            </TextRevealByWord>
          </div>
          <div className="grid grid-cols-2 gap-y-6 sm:gap-y-8 gap-x-6">
            {VALUE_PROPOSITIONS.map((item, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.12,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <div className="font-display text-3xl font-bold leading-none text-black-deep">
                  <AnimatedCounter target={item.number} suffix={item.suffix} />
                </div>
                <DrawLine className="!w-8 mx-auto mt-2 !bg-bordeaux/30" delay={i * 0.12 + 0.3} />
                <p className="text-caption text-black-deep/50 mt-2">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden lg:grid lg:grid-cols-5 lg:divide-x lg:divide-black/10">
          <div className="pr-10">
            <FadeInView>
              <p className="text-label text-black-deep/40 mb-4">
                I numeri che ci definiscono
              </p>
            </FadeInView>
            <TextRevealByWord
              as="h2"
              className="font-section-title text-black-deep"
              stagger={0.05}
            >
              La nostra esperienza in cifre
            </TextRevealByWord>
          </div>
          {VALUE_PROPOSITIONS.map((item, i) => (
            <motion.div
              key={i}
              className="px-10 last:pr-0 text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: 0.2 + i * 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <div className="font-display text-[clamp(2.5rem,4vw,4rem)] font-bold leading-none text-black-deep">
                <AnimatedCounter target={item.number} suffix={item.suffix} />
              </div>
              <DrawLine className="!w-10 mt-3 !bg-black-deep/15" delay={0.3 + i * 0.15} />
              <p className="text-caption text-black-deep/50 mt-3">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
