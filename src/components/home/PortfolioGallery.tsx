"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeInView } from "@/components/animations/FadeInView";
import { TextRevealByWord } from "@/components/animations/TextRevealByWord";
import { AccentText } from "@/components/ui/AccentText";
import { ShowroomBanner } from "@/components/home/ShowroomBanner";

const projects = [
  { title: "Villa Moderna a Varese", category: "Serramenti" },
  { title: "Appartamento Contemporaneo", category: "Serramenti" },
  { title: "Residenza di Lusso", category: "Serramenti" },
  { title: "Zona Giorno con Prolux Evolution", category: "Porte finestre" },
  { title: "Loft Industriale", category: "Serramenti" },
];

/* Scale-in animation variant for cards */
const cardVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  }),
};

export function PortfolioGallery() {
  return (
    <section className="py-20 lg:py-44">
      <div className="px-6 sm:px-10 lg:px-20">
        <div className="text-center mb-10 lg:mb-24">
          <FadeInView>
            <p className="text-label text-black-deep/50 mb-6">
              I nostri progetti
            </p>
          </FadeInView>
          <TextRevealByWord
            as="h2"
            className="font-display font-bold uppercase leading-[0.85] tracking-[-0.03em] text-black-deep justify-center"
            style={{ fontSize: "clamp(2rem, 1.2rem + 5vw, 5.5rem)" }}
            stagger={0.04}
          >
            Lavori realizzati
          </TextRevealByWord>
          <FadeInView delay={0.3}>
            <Link
              href="/progetti"
              className="text-button inline-block text-black-deep border-b border-black-deep/20 pb-1 hover:border-black-deep transition-colors mt-8 link-draw"
            >
              Vedi tutti i progetti
            </Link>
          </FadeInView>
        </div>

        {/* Top row — 3 equal cards with scale entrance */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-6">
          {projects.slice(0, 3).map((project, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-warm-gray flex items-center justify-center group cursor-pointer border-glow">
                <span className="text-mid-gray/40 font-ui text-sm uppercase tracking-widest group-hover:text-mid-gray/60 transition-colors duration-500">{project.category}</span>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black-deep/0 group-hover:bg-black-deep/5 transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom row — 2 cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6 mt-4 lg:mt-6">
          {projects.slice(3, 5).map((project, i) => (
            <motion.div
              key={i}
              custom={i + 3}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-warm-gray flex items-center justify-center group cursor-pointer border-glow">
                <span className="text-mid-gray/40 font-ui text-sm uppercase tracking-widest group-hover:text-mid-gray/60 transition-colors duration-500">{project.category}</span>
                <div className="absolute inset-0 bg-black-deep/0 group-hover:bg-black-deep/5 transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Showroom card */}
        <div className="mt-4 lg:mt-6">
          <ShowroomBanner />
        </div>
      </div>
    </section>
  );
}
