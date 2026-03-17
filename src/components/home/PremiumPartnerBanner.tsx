"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeInView } from "@/components/animations/FadeInView";
import { ClipReveal } from "@/components/animations/ClipReveal";
import { DrawLine } from "@/components/animations/DrawLine";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { MagneticButton } from "@/components/animations/MagneticButton";

const stats = [
  { value: 30, suffix: "+", label: "Anni di esperienza" },
  { value: 100, suffix: "%", label: "PVC riciclabile" },
];

const textStats = [
  { value: "RC2", label: "Classe antieffrazione" },
  { value: "A+", label: "Efficienza energetica" },
];

export function PremiumPartnerBanner() {
  return (
    <section className="relative min-h-[400px] sm:h-[75vh] sm:min-h-[500px] flex items-end justify-end text-white overflow-hidden">
      {/* Background image with parallax-like scale */}
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
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-tl from-black-deep/85 via-black-deep/50 to-transparent" />

      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-20 py-12 sm:py-0 sm:pb-12 lg:pb-16">
        <div className="flex flex-col items-center text-center sm:items-end sm:text-right">
          <FadeInView>
            <p className="text-label text-white/50 mb-4">
              Premium Partner Oknoplast
            </p>
          </FadeInView>

          <FadeInView delay={0.1}>
            <h2 className="font-section-title text-white">
              Il partner ideale
              <br />
              per la tua casa
            </h2>
          </FadeInView>

          <FadeInView delay={0.2}>
            <p className="mt-5 text-body text-white/60 max-w-md">
              Mood Abitare è stata selezionata come Premium Partner Oknoplast per la provincia di Varese.
              Una ristretta rete di operatori che garantisce qualità ed eccellenza.
            </p>
          </FadeInView>

          {/* Stats row with animated counters */}
          <FadeInView delay={0.3}>
            <div className="mt-8 grid grid-cols-2 gap-6 sm:flex sm:flex-wrap sm:gap-8 lg:gap-10">
              {stats.map((item) => (
                <div key={item.label} className="text-center sm:text-right">
                  <div className="font-display text-[clamp(1.5rem,2.5vw,2rem)] font-bold text-white leading-none">
                    <AnimatedCounter target={item.value} suffix={item.suffix} />
                  </div>
                  <motion.div
                    className="mt-3 h-px w-8 bg-white/20 mx-auto sm:ml-auto sm:mr-0"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    style={{ transformOrigin: "right" }}
                  />
                  <p className="mt-3 text-caption text-white/50">
                    {item.label}
                  </p>
                </div>
              ))}
              {textStats.map((item) => (
                <div key={item.label} className="text-center sm:text-right">
                  <div className="font-display text-[clamp(1.5rem,2.5vw,2rem)] font-bold text-white leading-none">
                    {item.value}
                  </div>
                  <motion.div
                    className="mt-3 h-px w-8 bg-white/20 mx-auto sm:ml-auto sm:mr-0"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    style={{ transformOrigin: "right" }}
                  />
                  <p className="mt-3 text-caption text-white/50">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeInView>

          <FadeInView delay={0.4}>
            <div className="mt-8">
              <MagneticButton>
                <Link
                  href="/premium-partner"
                  className="text-button inline-block bg-white text-black-deep px-8 py-4 btn-press hover:bg-white/85 transition-colors"
                >
                  Scopri i vantaggi
                </Link>
              </MagneticButton>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
