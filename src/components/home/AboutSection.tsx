"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { AccentText } from "@/components/ui/AccentText";

/* ── Copy ────────────────────────────────────────────────────────── */

const HEADLINE =
  "Se devi acquistare nuove porte e finestre in provincia di Varese puoi fare affidamento su Moschiano Srl. L'azienda vanta oltre trent'anni di attività nel settore, una lunga esperienza che ha permesso di diventare un vero e proprio punto di riferimento nell'area di Varese per tutto quanto concerne le ristrutturazioni e le nuove costruzioni.";

const BODY_1 =
  "Accanto a un'ampia selezione di infissi e serramenti dalle eccellenti capacità isolanti, nel punto vendita di Gorla Maggiore si trovano solide porte blindate, persiane, avvolgibili e altri oscuranti, grate e inferriate di sicurezza, zanzariere, monoblocchi, VMC, parquet, cucine su misura, arredo bagno, scale, ringhiere, sanitari, rubinetteria e molto altro.";

const BODY_2 =
  "L'azienda seleziona attentamente i propri fornitori scegliendo soltanto le aziende più innovative e affidabili, in Italia e in Europa, per offrire ai clienti soluzioni moderne che coniugano perfetta funzionalità e design accattivante e altamente personalizzabile.";

const BODY_3 =
  "Moschiano Srl propone ai suoi clienti una vasta scelta di infissi e serramenti in grado di migliorare l'efficienza termica della casa, così da ridurre i consumi energetici e i relativi costi in bolletta. Tutti i posatori sono altamente qualificati e in possesso del patentino di posa certificata.";

/* ── Helpers ──────────────────────────────────────────────────────── */

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.1, 1]);

  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.3em]">
      <AccentText>{children}</AccentText>
    </motion.span>
  );
}

function ScrollParagraph({
  text,
  progress,
  startWord,
  totalWords,
  className,
  style,
}: {
  text: string;
  progress: MotionValue<number>;
  startWord: number;
  totalWords: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const words = text.split(" ");

  return (
    <p className={className} style={style}>
      {words.map((word, i) => {
        const idx = startWord + i;
        const start = idx / totalWords;
        const end = start + 3 / totalWords;
        return (
          <Word
            key={i}
            progress={progress}
            range={[start, Math.min(end, 1)]}
          >
            {word}
          </Word>
        );
      })}
    </p>
  );
}

/* ── Component ───────────────────────────────────────────────────── */

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.45", "end end"],
  });

  const headlineWords = HEADLINE.split(" ").length;
  const body1Words = BODY_1.split(" ").length;
  const body2Words = BODY_2.split(" ").length;
  const body3Words = BODY_3.split(" ").length;
  const totalWords = headlineWords + body1Words + body2Words + body3Words;

  const bodyStyle = {
    fontSize: "clamp(1.05rem, 0.95rem + 0.5vw, 1.35rem)" as string,
  };

  return (
    <section
      ref={containerRef}
      className="py-36 lg:py-56 px-6 sm:px-10 lg:px-20"
    >
      <div className="max-w-5xl mx-auto">
        {/* Label — always visible */}
        <p className="text-label text-black-deep/30 mb-10 lg:mb-14">
          Chi siamo
        </p>

        {/* Headline — large display text */}
        <ScrollParagraph
          text={HEADLINE}
          progress={scrollYProgress}
          startWord={0}
          totalWords={totalWords}
          className="font-display font-medium leading-[1.15] tracking-[-0.02em] text-black-deep"
          style={{ fontSize: "clamp(1.75rem, 1.2rem + 2.5vw, 3.25rem)" }}
        />

        {/* Separator */}
        <motion.div
          className="my-14 lg:my-20 h-px w-16 bg-black-deep/15"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ transformOrigin: "left" }}
        />

        {/* Body paragraphs */}
        <div className="space-y-8 lg:space-y-10 max-w-3xl">
          <ScrollParagraph
            text={BODY_1}
            progress={scrollYProgress}
            startWord={headlineWords}
            totalWords={totalWords}
            className="font-display leading-[1.5] tracking-[-0.01em] text-black-deep"
            style={bodyStyle}
          />

          <ScrollParagraph
            text={BODY_2}
            progress={scrollYProgress}
            startWord={headlineWords + body1Words}
            totalWords={totalWords}
            className="font-display leading-[1.5] tracking-[-0.01em] text-black-deep"
            style={bodyStyle}
          />

          <ScrollParagraph
            text={BODY_3}
            progress={scrollYProgress}
            startWord={headlineWords + body1Words + body2Words}
            totalWords={totalWords}
            className="font-display leading-[1.5] tracking-[-0.01em] text-black-deep"
            style={bodyStyle}
          />
        </div>
      </div>
    </section>
  );
}
