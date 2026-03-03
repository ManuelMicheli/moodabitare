"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { AccentText } from "@/components/ui/AccentText";

/* ── Copy ────────────────────────────────────────────────────────── */

const TOP_LEFT =
  "La casa è il luogo dove inizia tutto. Dove i tuoi figli muovono i primi passi, dove torni dopo una giornata lunga e finalmente ti senti al sicuro. Noi questo lo sappiamo bene.";

const TOP_LEFT_2 =
  "Da oltre trent'anni entriamo nelle case delle famiglie della provincia di Varese. Non vendiamo semplicemente finestre o porte — aiutiamo le persone a vivere meglio, ogni giorno, nel posto che amano di più.";

const CENTER =
  "Scegliamo i nostri partner con la stessa cura con cui sceglieresti chi lavora a casa tua. Solo brand di cui ci fidiamo in prima persona, solo materiali che installeremmo a casa nostra. Perché quando un cliente ci apre la porta, per noi è un atto di fiducia — e la fiducia non si tradisce mai.";

const BOTTOM_RIGHT =
  "Un architetto dedicato, 17 brand selezionati, render 3D per vedere il risultato prima ancora di iniziare. Un team che ti segue dall'idea alla consegna, senza sorprese.";

const BOTTOM_RIGHT_2 =
  "Questo è Moschiano Srl. Vieni a trovarci — il caffè lo offriamo noi.";

/* ── Helpers ──────────────────────────────────────────────────────── */

function Word({
  children,
  progress,
  range,
  baseColor = "white",
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  baseColor?: "white" | "bordeaux";
}) {
  const opacity = useTransform(progress, range, [0.1, 1]);

  return (
    <motion.span
      style={{ opacity }}
      className={`inline-block mr-[0.3em] ${baseColor === "bordeaux" ? "text-bordeaux" : "text-white"}`}
    >
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
  baseColor = "white",
}: {
  text: string;
  progress: MotionValue<number>;
  startWord: number;
  totalWords: number;
  className?: string;
  style?: React.CSSProperties;
  baseColor?: "white" | "bordeaux";
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
            baseColor={baseColor}
          >
            {word}
          </Word>
        );
      })}
    </p>
  );
}

/* ── Component ───────────────────────────────────────────────────── */

export function IntroEmozionale() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.6", "end 0.8"],
  });

  const topLeftWords = TOP_LEFT.split(" ").length;
  const topLeft2Words = TOP_LEFT_2.split(" ").length;
  const centerWords = CENTER.split(" ").length;
  const bottomRightWords = BOTTOM_RIGHT.split(" ").length;
  const bottomRight2Words = BOTTOM_RIGHT_2.split(" ").length;
  const totalWords =
    topLeftWords + topLeft2Words + centerWords + bottomRightWords + bottomRight2Words;

  const fontSize = {
    fontSize: "clamp(1.15rem, 0.95rem + 1.2vw, 1.85rem)" as string,
  };

  return (
    <section ref={containerRef} className="py-5 lg:py-6 px-6 sm:px-10 lg:px-20 bg-cream">
      {/* Top-left */}
      <div className="max-w-3xl">
        <ScrollParagraph
          text={TOP_LEFT}
          progress={scrollYProgress}
          startWord={0}
          totalWords={totalWords}
          className="font-display font-medium leading-[1.25] tracking-[-0.015em]"
          style={fontSize}
          baseColor="bordeaux"
        />
        <ScrollParagraph
          text={TOP_LEFT_2}
          progress={scrollYProgress}
          startWord={topLeftWords}
          totalWords={totalWords}
          className="mt-4 font-display font-medium leading-[1.25] tracking-[-0.015em]"
          style={fontSize}
          baseColor="bordeaux"
        />
      </div>

      {/* Center — inverted colors */}
      <div className="mt-6 lg:mt-8 -mx-6 sm:-mx-10 lg:-mx-20 px-6 sm:px-10 lg:px-20 py-6 lg:py-8 bg-bordeaux">
        <div className="max-w-2xl mx-auto">
          <ScrollParagraph
            text={CENTER}
            progress={scrollYProgress}
            startWord={topLeftWords + topLeft2Words}
            totalWords={totalWords}
            className="font-display font-medium leading-[1.25] tracking-[-0.015em]"
            style={fontSize}
          />
        </div>
      </div>

      {/* Bottom-right */}
      <div className="mt-6 lg:mt-8 max-w-2xl ml-auto text-right">
        <ScrollParagraph
          text={BOTTOM_RIGHT}
          progress={scrollYProgress}
          startWord={topLeftWords + topLeft2Words + centerWords}
          totalWords={totalWords}
          className="font-display font-medium leading-[1.25] tracking-[-0.015em]"
          style={fontSize}
          baseColor="bordeaux"
        />
        <ScrollParagraph
          text={BOTTOM_RIGHT_2}
          progress={scrollYProgress}
          startWord={topLeftWords + topLeft2Words + centerWords + bottomRightWords}
          totalWords={totalWords}
          className="mt-3 font-display font-medium leading-[1.25] tracking-[-0.015em]"
          style={fontSize}
          baseColor="bordeaux"
        />
      </div>
    </section>
  );
}
