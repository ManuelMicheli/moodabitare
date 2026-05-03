"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ClipReveal } from "@/components/animations/ClipReveal";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { useIsMobile } from "@/hooks/useIsMobile";

export function FinanziamentoBanner() {
  const ref = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], isMobile ? ["0%", "0%"] : ["-15%", "15%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], isMobile ? [1, 1] as number[] : [1.05, 1] as number[]);

  return (
    <section ref={ref} className="relative bg-black-deep overflow-hidden">
      <motion.div
        className="absolute inset-0 h-[130%] -top-[15%]"
        style={{ y, scale: imgScale }}
      >
        <Image
          src="/images/oknoplast-2024-home.jpg"
          alt="Interni luminosi con serramenti Oknoplast"
          fill
          className="object-cover object-center"
          sizes="100vw"
          quality={90}
        />
      </motion.div>
      <div className="absolute inset-0 bg-black-deep/55" />
      <Link
        href="/finanziamento"
        className="group relative z-10 block px-6 sm:px-10 lg:px-20 py-20 lg:py-28"
      >
        <ClipReveal direction="right" duration={0.9}>
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            {/* Big percentage */}
            <motion.span
              className="font-display font-bold text-cream leading-none"
              style={{ fontSize: "clamp(3.5rem, 2.5rem + 5vw, 7rem)" }}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              50%
            </motion.span>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <p
                className="font-display font-bold text-cream leading-tight"
                style={{
                  fontSize: "clamp(1.15rem, 1rem + 0.8vw, 1.7rem)",
                }}
              >
                Detrazioni fiscali per la sostituzione dei serramenti
              </p>
              <p className="font-ui text-cream text-[0.85rem] sm:text-[0.95rem] mt-2">
                Cumulabile con finanziamento a tasso zero &mdash; TAN 0% |
                TAEG 0%
              </p>
            </motion.div>

            {/* Arrow CTA */}
            <MagneticButton as="span" strength={0.5}>
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-cream/50 group-hover:border-cream transition-all duration-300 mt-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="text-cream group-hover:text-cream transition-all duration-300 group-hover:translate-x-0.5"
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
            </MagneticButton>
          </div>
        </ClipReveal>
      </Link>
    </section>
  );
}
