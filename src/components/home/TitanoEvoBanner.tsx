"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeInView } from "@/components/animations/FadeInView";
import { TextRevealByWord } from "@/components/animations/TextRevealByWord";
import { DrawLine } from "@/components/animations/DrawLine";
import { AccentText } from "@/components/ui/AccentText";
import { useIsMobile } from "@/hooks/useIsMobile";

const features = [
  "Simmetria perfetta",
  "Maniglia tono su tono",
  "Design minimal",
  "Vetri extra-light",
  "Profilo a scomparsa",
];

export function TitanoEvoBanner() {
  const isMobile = useIsMobile();

  return (
    <section className="relative w-full pt-10 sm:pt-14 lg:pt-16 pb-10 sm:pb-14 lg:pb-0">
      {/* Section subtitle + main title — above banner */}
      <div className="text-center mb-8 sm:mb-10 px-6">
        <FadeInView>
          <p className="font-ui text-xs sm:text-sm font-medium text-bordeaux tracking-[0.25em] uppercase mb-4 sm:mb-5">
            <AccentText>Novità Oknoplast</AccentText>
          </p>
        </FadeInView>
        <TextRevealByWord
          as="h2"
          className="font-display font-bold text-black-deep uppercase leading-none tracking-[-0.02em] justify-center"
          style={{ fontSize: "clamp(2.2rem, 1.5rem + 3.5vw, 5rem)" }}
          stagger={0.06}
        >
          Titano EVO OC
        </TextRevealByWord>
      </div>

      {/* Banner full width — features left, image right */}
      <div className="relative bg-black-soft overflow-hidden">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-10 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4 sm:gap-6 lg:gap-12">
            {/* Feature list — mini-card grid on mobile, inline list on desktop */}
            <div className="flex justify-center lg:justify-end py-8 sm:py-10 lg:py-12 order-last lg:order-none">
              <FadeInView delay={0.2}>
                {/* Desktop: inline list with dashes */}
                <ul className="hidden lg:block space-y-5">
                  {features.map((feature, i) => (
                    <motion.li
                      key={feature}
                      className="flex items-center gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: 0.3 + i * 0.08,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                    >
                      <motion.span
                        className="w-8 h-[2px] bg-white shrink-0"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: 0.4 + i * 0.08,
                        }}
                        style={{ transformOrigin: "left" }}
                      />
                      <span
                        className="font-display text-white/60 uppercase tracking-[0.08em]"
                        style={{ fontSize: "clamp(0.75rem, 0.55rem + 0.4vw, 1.1rem)" }}
                      >
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>
                {/* Mobile: 2-col mini-card grid */}
                <div className="grid grid-cols-2 gap-2 lg:hidden">
                  {features.map((feature, i) => (
                    <motion.div
                      key={feature}
                      className="bg-white p-3 rounded-md"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: 0.3 + i * 0.06,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                    >
                      <span className="text-bordeaux">&#10003;</span>
                      <span className="text-[0.75rem] text-black-deep block mt-1">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </FadeInView>
            </div>

            {/* Image — first on mobile (via order-first), second on desktop */}
            <div className="relative flex items-center justify-center lg:justify-start py-6 lg:py-10 order-first lg:order-none">
              <motion.div
                className="relative w-full h-[220px] sm:w-[220px] sm:h-[250px] md:w-[320px] md:h-[350px] lg:w-[340px] lg:h-[370px] xl:w-[380px] xl:h-[410px]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <div className={`${isMobile ? "" : "animate-float"} relative w-full h-full`}>
                  <Image
                    src="/images/titano-evo-oc-eletto-prodotto-2024_copia-removebg-preview.png"
                    alt="Titano EVO OC — Eletto Prodotto dell'Anno 2024"
                    fill
                    className="object-contain"
                    style={{
                      filter: "drop-shadow(0 8px 40px rgba(0,0,0,0.12))",
                    }}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 300px, (max-width: 1024px) 360px, 440px"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
