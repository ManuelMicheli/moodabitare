"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import { R2_CDN } from "@/lib/constants";
import { AccentText } from "@/components/ui/AccentText";
import { LinkPreview } from "@/components/ui/LinkPreview";
import { useIsMobile } from "@/hooks/useIsMobile";

/* ── Types ────────────────────────────────────────────────────────── */

type LinkData = { href: string; image: string; title: string };
type Part = string | { text: string; link: LinkData };

/* ── Copy ─────────────────────────────────────────────────────────── */

const HEADLINE: Part[] = [
  "Mood Abitare è il punto di riferimento per serramenti, porte e ristrutturazioni nella provincia di Varese. Da oltre trent'anni lavoriamo al fianco delle famiglie del territorio, trasformando ogni progetto in uno spazio dove sentirsi davvero a casa.",
];

const BODY_1: Part[] = [
  "Nel nostro ",
  {
    text: "showroom di 300 mq",
    link: { href: "/contatti", image: "/images/cf8f30fe-4d69-4594-aa12-0d7137fcfeae-opt.jpg", title: "Showroom Mood Abitare" },
  },
  " a Gorla Maggiore trovate tutto per la vostra casa: dai ",
  {
    text: "serramenti",
    link: { href: "/prodotti/infissi-pvc", image: "/images/Prolux-4.jpg", title: "Infissi in PVC Oknoplast" },
  },
  " in PVC, alluminio e legno alle ",
  {
    text: "porte interne",
    link: { href: "/prodotti/porte-interne", image: "/images/Home-bertolotto-opt.jpg", title: "Porte Interne" },
  },
  " e blindate, dalle ",
  {
    text: "cucine su misura",
    link: { href: "/prodotti/cucine-su-misura", image: "/images/Cucina-con-finestra-Prolux-Swing-opt.jpg", title: "Cucine su Misura" },
  },
  " ai ",
  {
    text: "pavimenti",
    link: { href: "/prodotti/parquet", image: "/images/Hero3.jpg", title: "Parquet" },
  },
  ", dall'",
  {
    text: "arredo bagno",
    link: { href: "/prodotti/arredo-bagno", image: "/images/Gemini_Generated_Image_3jexw73jexw73jex.jpg", title: "Arredo Bagno" },
  },
  " alle ",
  {
    text: "scale e ringhiere",
    link: { href: "/prodotti/scale-ringhiere", image: "/images/Gemini_Generated_Image_ykx5j2ykx5j2ykx5.jpg", title: "Scale e Ringhiere" },
  },
  " — insieme a persiane, avvolgibili, zanzariere, grate di sicurezza, monoblocchi e VMC.",
];

const BODY_2: Part[] = [
  "Selezioniamo con cura i nostri ",
  {
    text: "partner",
    link: { href: "/premium-partner", image: "/images/Oknoplast-azienda-vista-aerea-opt.jpg", title: "I Nostri Brand Partner" },
  },
  ": solo 17 marchi in oltre trent'anni, scelti tra le aziende più innovative d'Italia e d'Europa. Ogni soluzione che vi proponiamo unisce funzionalità, design personalizzabile e la qualità di chi lavora con noi da anni.",
];

const BODY_3: Part[] = [
  "Dalla ",
  {
    text: "progettazione su misura",
    link: { href: "/progettazione-design", image: "/images/Gemini_Generated_Image_dy1qxpdy1qxpdy1q.jpg", title: "Progettazione e Design" },
  },
  " alla ",
  {
    text: "ristrutturazione",
    link: { href: "/servizi-ristrutturazione", image: "/images/Gemini_Generated_Image_elyr5pelyr5pelyr-opt.jpg", title: "Servizi di Ristrutturazione" },
  },
  " chiavi in mano, vi accompagniamo in ogni fase. Render 3D, posatori con patentino certificato, soluzioni di ",
  {
    text: "finanziamento",
    link: { href: "/finanziamento", image: "/images/Gemini_Generated_Image_agqw18agqw18agqw-opt.jpg", title: "Opzioni di Finanziamento" },
  },
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
          <LinkPreview
            key={`l${pIdx}`}
            href={part.link.href}
            previewImage={part.link.image}
            previewTitle={part.link.title}
          >
            {rendered}
          </LinkPreview>
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
          <LinkPreview
            key={idx}
            href={part.link.href}
            previewImage={part.link.image}
            previewTitle={part.link.title}
          >
            <span className="text-bordeaux">
              <AccentText>{part.text}</AccentText>
            </span>
          </LinkPreview>
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
      className="py-20 lg:py-56 px-6 sm:px-10 lg:px-20"
    >
      <div className="max-w-6xl mx-auto lg:flex lg:gap-16 lg:items-stretch">
        {/* Card verticali con video — solo desktop (video non caricato su mobile) */}
        <div className="hidden lg:flex flex-[2.33] gap-3 self-stretch" style={{ marginLeft: "calc(-50vw + 50%)" }}>
          <div className="flex-1 h-full rounded-sm bg-warm-gray" />
          <div className="flex-shrink-0 relative rounded-sm overflow-hidden aspect-[9/16] self-center" style={{ height: "min(100%, 80vh)" }}>
            <video
              src={`${R2_CDN}/videos/1nuovo.mp4`}
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Divisore centrale per effetto 2 card */}
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-3 bg-cream z-10" />
          </div>
        </div>

        <div className="flex-1">
        {/* Label */}
        <p className="text-label text-black-deep/30 mb-10 lg:mb-14">
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

              {/* Mobile: two horizontal cards with split video */}
              <motion.div
                className="my-10 flex flex-col gap-3 lg:hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {/* Top card */}
                <div className="relative w-full aspect-[16/9] rounded-sm overflow-hidden">
                  <video
                    src={`${R2_CDN}/videos/1nuovo.mp4`}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                    className="absolute w-full object-cover"
                    style={{ height: "calc(200% + 0.75rem)", top: 0 }}
                  />
                </div>
                {/* Bottom card */}
                <div className="relative w-full aspect-[16/9] rounded-sm overflow-hidden">
                  <video
                    src={`${R2_CDN}/videos/1nuovo.mp4`}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                    className="absolute w-full object-cover"
                    style={{ height: "calc(200% + 0.75rem)", bottom: 0 }}
                  />
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
