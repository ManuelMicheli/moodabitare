"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform, MotionValue, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { AccentText } from "@/components/ui/AccentText";
import { useIsMobile } from "@/hooks/useIsMobile";

/* ── Types ────────────────────────────────────────────────────────── */

type LinkData = { href: string; label: string };
type Part = string | { text: string; link: LinkData };

/* ── Copy ─────────────────────────────────────────────────────────── */

const HEADLINE: Part[] = [
  "Mood Abitare è il punto di riferimento per serramenti, porte e ristrutturazioni nella provincia di Varese. Da oltre trent'anni lavoriamo al fianco delle famiglie del territorio, trasformando ogni progetto in uno spazio dove sentirsi davvero a casa.",
];

const BODY_1: Part[] = [
  "Nel nostro ",
  { text: "showroom di 300 mq", link: { href: "/showroom", label: "Showroom" } },
  " a Gorla Maggiore trovate tutto per la vostra casa: dai ",
  { text: "serramenti", link: { href: "/prodotti/infissi-pvc", label: "Infissi in PVC" } },
  " in PVC, alluminio e legno alle ",
  { text: "porte interne", link: { href: "/prodotti/porte-interne", label: "Porte Interne" } },
  " e blindate, dalle ",
  { text: "cucine su misura", link: { href: "/prodotti/cucine-su-misura", label: "Cucine su Misura" } },
  " ai ",
  { text: "pavimenti", link: { href: "/prodotti/parquet", label: "Parquet" } },
  ", dall'",
  { text: "arredo bagno", link: { href: "/prodotti/arredo-bagno", label: "Arredo Bagno" } },
  " alle ",
  { text: "scale e ringhiere", link: { href: "/prodotti/scale-ringhiere", label: "Scale e Ringhiere" } },
  " — insieme a persiane, avvolgibili, zanzariere, grate di sicurezza, monoblocchi e VMC.",
];

const BODY_2: Part[] = [
  "Selezioniamo con cura i nostri ",
  { text: "partner", link: { href: "/premium-partner", label: "Premium Partner" } },
  ": solo 17 marchi in oltre trent'anni, scelti tra le aziende più innovative d'Italia e d'Europa. Ogni soluzione che vi proponiamo unisce funzionalità, design personalizzabile e la qualità di chi lavora con noi da anni.",
];

const BODY_3: Part[] = [
  "Dalla ",
  { text: "progettazione su misura", link: { href: "/progettazione-design", label: "Progettazione e Design" } },
  " alla ",
  { text: "ristrutturazione", link: { href: "/servizi-ristrutturazione", label: "Ristrutturazione" } },
  " chiavi in mano, vi accompagniamo in ogni fase. Render 3D, posatori con patentino certificato, soluzioni di ",
  { text: "finanziamento", link: { href: "/finanziamento", label: "Finanziamento" } },
  " e assistenza post-vendita — il nostro impegno non si ferma alla consegna.",
];

/* ── Helpers ──────────────────────────────────────────────────────── */

function countWords(parts: Part[]): number {
  return parts.reduce((n, p) => {
    const t = typeof p === "string" ? p : p.text;
    return n + t.split(/\s+/).filter(Boolean).length;
  }, 0);
}

const IS_PUNCT = /^[,;:.!?]+$/;

/* ── Animated word (desktop scroll reveal) ────────────────────────── */

function AnimatedWord({
  children,
  progress,
  index,
  total,
  isLink = false,
}: {
  children: string;
  progress: MotionValue<number>;
  index: number;
  total: number;
  isLink?: boolean;
}) {
  const start = index / total;
  const end = start + 3 / total;
  const opacity = useTransform(progress, [start, Math.min(end, 1)], [0.1, 1]);
  const punct = IS_PUNCT.test(children);

  return (
    <motion.span
      style={{ opacity }}
      className={[
        "inline-block",
        punct ? "ml-[-0.25em] mr-[0.25em]" : "mr-[0.3em]",
        isLink ? "text-bordeaux" : "",
      ].join(" ")}
    >
      <AccentText>{children}</AccentText>
    </motion.span>
  );
}

/* ── Hover link with tooltip ─────────────────────────────────────── */

function HoverLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const [show, setShow] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const handleEnter = useCallback(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setShow(true), 150);
  }, []);

  const handleLeave = useCallback(() => {
    clearTimeout(timeoutRef.current);
    setShow(false);
  }, []);

  return (
    <span className="relative inline">
      <Link
        href={href}
        className="inline cursor-pointer"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        {children}
      </Link>
      <AnimatePresence>
        {show && (
          <motion.span
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50 pointer-events-none whitespace-nowrap"
          >
            <span className="flex items-center gap-1.5 bg-black-deep text-white font-ui text-[11px] tracking-wide px-3 py-1.5 rounded-full shadow-lg">
              Vai a {label}
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}

/* ── Desktop: rich paragraph with scroll animation ────────────────── */

function ScrollRichParagraph({
  parts,
  progress,
  startWord,
  total,
  className,
  style,
}: {
  parts: Part[];
  progress: MotionValue<number>;
  startWord: number;
  total: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  let idx = startWord;

  return (
    <p className={className} style={style}>
      {parts.map((part, pIdx) => {
        if (typeof part === "string") {
          const words = part.split(/\s+/).filter(Boolean);
          return words.map((w, wIdx) => (
            <AnimatedWord
              key={`t${pIdx}-${wIdx}`}
              progress={progress}
              index={idx++}
              total={total}
            >
              {w}
            </AnimatedWord>
          ));
        }

        const words = part.text.split(/\s+/).filter(Boolean);
        const rendered = words.map((w, wIdx) => (
          <AnimatedWord
            key={wIdx}
            progress={progress}
            index={idx++}
            total={total}
            isLink
          >
            {w}
          </AnimatedWord>
        ));

        return (
          <HoverLink key={`l${pIdx}`} href={part.link.href} label={part.link.label}>
            {rendered}
          </HoverLink>
        );
      })}
    </p>
  );
}

/* ── Mobile: simple fade paragraph ────────────────────────────────── */

function SimpleRichParagraph({
  parts,
  className,
  style,
  delay = 0,
}: {
  parts: Part[];
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}) {
  return (
    <motion.p
      className={className}
      style={style}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {parts.map((part, idx) =>
        typeof part === "string" ? (
          <AccentText key={idx}>{part}</AccentText>
        ) : (
          <HoverLink key={idx} href={part.link.href} label={part.link.label}>
            <span className="text-bordeaux">
              <AccentText>{part.text}</AccentText>
            </span>
          </HoverLink>
        )
      )}
    </motion.p>
  );
}

/* ── Component ───────────────────────────────────────────────────── */

export function AboutSection() {
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.45", "end end"],
  });

  const hw = countWords(HEADLINE);
  const b1w = countWords(BODY_1);
  const b2w = countWords(BODY_2);
  const b3w = countWords(BODY_3);
  const total = hw + b1w + b2w + b3w;

  const bodyStyle = {
    fontSize: "clamp(1.05rem, 0.95rem + 0.5vw, 1.35rem)" as string,
  };

  return (
    <section
      ref={containerRef}
      className="pt-10 pb-20 lg:pt-16 lg:pb-56 px-6 sm:px-10 lg:px-20"
    >
      <div className="max-w-6xl mx-auto lg:flex lg:gap-16 lg:items-stretch">
        {/* Card verticali placeholder — solo desktop */}
        <div className="hidden lg:flex flex-[2.33] gap-3 self-stretch" style={{ marginLeft: "calc(-50vw + 50%)" }}>
          <div className="flex-1 h-full rounded-sm overflow-hidden flex flex-col gap-1">
            <div className="flex-1 min-h-0 bg-warm-gray" />
            <div className="flex-1 min-h-0 bg-warm-gray" />
          </div>
          <div className="flex-1 h-full rounded-sm overflow-hidden flex flex-col gap-1">
            <div className="flex-1 min-h-0 bg-warm-gray" />
            <div className="flex-1 min-h-0 bg-warm-gray" />
          </div>
        </div>

        <div className="flex-1">
        {/* Label */}
        <p className="text-label text-black-deep/60 mb-10 lg:mb-14">
          Chi siamo
        </p>

        {/* Headline */}
        {isMobile ? (
          <SimpleRichParagraph
            parts={HEADLINE}
            className="font-display font-medium leading-[1.15] tracking-[-0.02em] text-black-deep"
            style={{ fontSize: "clamp(1.75rem, 1.2rem + 2.5vw, 3.25rem)" }}
          />
        ) : (
          <ScrollRichParagraph
            parts={HEADLINE}
            progress={scrollYProgress}
            startWord={0}
            total={total}
            className="font-display font-medium leading-[1.15] tracking-[-0.02em] text-black-deep"
            style={{ fontSize: "clamp(1.75rem, 1.2rem + 2.5vw, 3.25rem)" }}
          />
        )}

        {/* Separator */}
        <motion.div
          className="my-14 lg:my-20 h-px w-16 bg-black-deep/15"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ transformOrigin: "left" }}
        />

        {/* Body paragraphs — with mobile video cards between p1 and p2 */}
        <div className="max-w-3xl">
          {isMobile ? (
            <>
              <SimpleRichParagraph
                parts={BODY_1}
                className="font-display leading-[1.5] tracking-[-0.01em] text-black-deep"
                style={bodyStyle}
                delay={0.1}
              />

              {/* Mobile: two placeholder cards */}
              <motion.div
                className="my-10 flex gap-3 lg:hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="flex-1 aspect-[3/4] rounded-sm overflow-hidden flex flex-col gap-1">
                  <div className="flex-1 min-h-0 bg-warm-gray" />
                  <div className="flex-1 min-h-0 bg-warm-gray" />
                </div>
                <div className="flex-1 aspect-[3/4] rounded-sm overflow-hidden flex flex-col gap-1">
                  <div className="flex-1 min-h-0 bg-warm-gray" />
                  <div className="flex-1 min-h-0 bg-warm-gray" />
                </div>
              </motion.div>

              <div className="space-y-8">
                <SimpleRichParagraph
                  parts={BODY_2}
                  className="font-display leading-[1.5] tracking-[-0.01em] text-black-deep"
                  style={bodyStyle}
                  delay={0.1}
                />
                <SimpleRichParagraph
                  parts={BODY_3}
                  className="font-display leading-[1.5] tracking-[-0.01em] text-black-deep"
                  style={bodyStyle}
                  delay={0.1}
                />
              </div>
            </>
          ) : (
            <div className="space-y-8 lg:space-y-10">
              <ScrollRichParagraph
                parts={BODY_1}
                progress={scrollYProgress}
                startWord={hw}
                total={total}
                className="font-display leading-[1.5] tracking-[-0.01em] text-black-deep"
                style={bodyStyle}
              />
              <ScrollRichParagraph
                parts={BODY_2}
                progress={scrollYProgress}
                startWord={hw + b1w}
                total={total}
                className="font-display leading-[1.5] tracking-[-0.01em] text-black-deep"
                style={bodyStyle}
              />
              <ScrollRichParagraph
                parts={BODY_3}
                progress={scrollYProgress}
                startWord={hw + b1w + b2w}
                total={total}
                className="font-display leading-[1.5] tracking-[-0.01em] text-black-deep"
                style={bodyStyle}
              />
            </div>
          )}
        </div>
        </div>
      </div>
    </section>
  );
}
