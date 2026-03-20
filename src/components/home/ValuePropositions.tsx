"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { FadeInView } from "@/components/animations/FadeInView";
import { TextRevealByWord } from "@/components/animations/TextRevealByWord";
import { DrawLine } from "@/components/animations/DrawLine";
import { AboutSection } from "@/components/home/AboutSection";
import { RistrutturazioneBanner } from "@/components/home/RistrutturazioneBanner";
import { VALUE_PROPOSITIONS } from "@/lib/constants";

const marqueeImages = [
  { src: "/moodabitarereal/cucina-showroom.png", alt: "Cucina moderna nello showroom Mood Abitare", w: 1536, h: 2730 },
  { src: "/moodabitarereal/dettaglio-cucina.png", alt: "Dettaglio cucina con piano in marmo nero e accenti dorati", w: 1536, h: 2730 },
  { src: "/moodabitarereal/profili-serramenti.jpeg", alt: "Campioni profili serramenti nello showroom", w: 2048, h: 2048 },
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
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.w}
                height={img.h}
                className="absolute inset-0 w-full h-full object-cover"
                sizes="(max-width: 640px) 90vw, 55vw"
                quality={80}
              />
            </div>
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
