"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { AccentText } from "@/components/ui/AccentText";

/* ── Copy ────────────────────────────────────────────────────────── */

const HEADLINE =
  "Una casa che funziona davvero cambia il modo in cui vivi ogni giorno. Da oltre trent'anni aiutiamo le famiglie della provincia di Varese a scegliere serramenti, porte e soluzioni d'arredo che migliorano concretamente il comfort, riducono i costi energetici e valorizzano gli ambienti nel tempo.";

const BODY_1 =
  "Con Mood Abitare hai un unico interlocutore per tutto il progetto: dalla consulenza gratuita con il nostro architetto al render 3D della tua casa, fino alla posa certificata e allo smaltimento dei vecchi serramenti. Niente subappalti, niente sorprese. I nostri posatori lavorano con noi da anni e sono certificati direttamente dai produttori — il risultato si vede nella durata e nella resa di ogni installazione.";

const BODY_2 =
  "Nel nostro showroom di 300 mq a Gorla Maggiore puoi vedere, toccare e confrontare le soluzioni di 14 brand selezionati tra i migliori in Italia e in Europa. Come unico Premium Partner Oknoplast della provincia di Varese, ti garantiamo accesso a condizioni esclusive, garanzie estese e prodotti con le più alte certificazioni internazionali di isolamento termico e acustico.";

const BODY_3 =
  "Ci occupiamo anche di tutta la parte burocratica: detrazioni fiscali al 50%, pratiche ENEA e documentazione tecnica. Tu scegli come vuoi vivere la tua casa, al resto pensiamo noi.";

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
