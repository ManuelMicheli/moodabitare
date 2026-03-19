"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

export function FormulaCard() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="border border-black-deep/10 divide-y divide-black-deep/10">
      {/* 50% you pay */}
      <div className="p-8 lg:p-10">
        <div className="flex items-baseline justify-between mb-4">
          <span className="text-label text-black-deep/30 text-[0.75rem]">
            Paghi subito
          </span>
          <CountUp value={50} suffix="%" isInView={isInView} />
        </div>
        <AnimatedBar targetWidth={50} isInView={isInView} dark />
      </div>

      {/* 50% financed */}
      <div className="p-8 lg:p-10">
        <div className="flex items-baseline justify-between mb-4">
          <span className="text-label text-black-deep/30 text-[0.75rem]">
            Finanziato a tasso 0
          </span>
          <CountUp value={50} suffix="%" isInView={isInView} delay={0.3} />
        </div>
        <AnimatedBar targetWidth={50} isInView={isInView} delay={0.3} />
        <p className="mt-5 font-ui text-[0.8rem] text-black-deep/35">
          Suddiviso in 10 rate annuali
        </p>
      </div>
    </div>
  );
}

/* ── Animated number counter ── */
function CountUp({
  value,
  suffix = "",
  isInView,
  delay = 0,
}: {
  value: number;
  suffix?: string;
  isInView: boolean;
  delay?: number;
}) {
  return (
    <motion.span
      className="font-display font-bold text-black-deep leading-none"
      style={{ fontSize: "clamp(2rem, 1.5rem + 2vw, 3.5rem)" }}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      <AnimatedDigits target={value} isInView={isInView} delay={delay} />
      {suffix}
    </motion.span>
  );
}

/* ── Digit roller using requestAnimationFrame ── */
function AnimatedDigits({
  target,
  isInView,
  delay = 0,
}: {
  target: number;
  isInView: boolean;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!isInView || !ref.current) return;

    const el = ref.current;
    const duration = 1600;
    let start: number | null = null;
    let raf: number;

    const tick = (ts: number) => {
      if (!start) start = ts;
      const elapsed = ts - start - delay * 1000;
      if (elapsed < 0) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = String(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isInView, target, delay]);

  return <span ref={ref}>0</span>;
}

/* ── Animated progress bar ── */
function AnimatedBar({
  targetWidth,
  isInView,
  dark = false,
  delay = 0,
}: {
  targetWidth: number;
  isInView: boolean;
  dark?: boolean;
  delay?: number;
}) {
  return (
    <div className="h-1.5 w-full bg-black-deep/5 overflow-hidden">
      <motion.div
        className={`h-full ${dark ? "bg-black-deep" : "bg-black-deep/20"}`}
        initial={{ width: "0%" }}
        animate={isInView ? { width: `${targetWidth}%` } : {}}
        transition={{
          duration: 1.4,
          delay: delay + 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
    </div>
  );
}
