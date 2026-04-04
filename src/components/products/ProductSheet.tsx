"use client";

import { useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { ProductDetail } from "@/lib/product-details";

interface ProductSheetProps {
  detail: ProductDetail | null;
  imageSrc: string;
  onClose: () => void;
}

const segmentStyle: Record<string, string> = {
  Classic: "border-black-deep/20 text-black-deep/70",
  Comfort: "border-blue-400/30 text-blue-600",
  Design: "border-amber-400/30 text-amber-700",
  Scorrevoli: "border-emerald-400/30 text-emerald-700",
  Premium: "border-bordeaux/30 text-bordeaux",
  "Top di gamma": "border-bordeaux/40 text-bordeaux",
  "Passive House": "border-green-400/30 text-green-700",
  Sicurezza: "border-red-400/30 text-red-700",
};

/* ── Stagger children ── */
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] as const } },
};

function SheetContent({
  detail,
  imageSrc,
  onClose,
}: {
  detail: ProductDetail;
  imageSrc: string;
  onClose: () => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  /* Lock page scroll & pause Lenis while sheet is open */
  useEffect(() => {
    const scrollY = window.scrollY;
    document.documentElement.style.setProperty("overflow", "hidden", "important");
    document.body.style.setProperty("overflow", "hidden", "important");
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    window.dispatchEvent(new CustomEvent("productsheet:open"));

    return () => {
      document.documentElement.style.removeProperty("overflow");
      document.body.style.removeProperty("overflow");
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY);
      window.dispatchEvent(new CustomEvent("productsheet:close"));
    };
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const onBackdropTouchMove = useCallback((e: React.TouchEvent) => {
    e.preventDefault();
  }, []);

  return (
    <div className="fixed inset-0 z-[100]" onWheel={(e) => e.stopPropagation()}>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
        className="absolute inset-0 bg-black-deep/70 backdrop-blur-md"
        onClick={onClose}
        onTouchMove={onBackdropTouchMove}
      />

      {/* ─────────── Mobile: bottom sheet ─────────── */}
      <div className="absolute inset-0 flex items-end lg:hidden pointer-events-none">
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
          className="pointer-events-auto w-full bg-white rounded-t-2xl relative"
          style={{ maxHeight: "92svh" }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black-deep/5 hover:bg-black-deep/10 transition-colors"
            aria-label="Chiudi"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          <div className="flex justify-center pt-3 pb-1">
            <div className="w-10 h-1 rounded-full bg-black-deep/15" />
          </div>

          <div
            ref={scrollRef}
            data-lenis-prevent
            onWheel={(e) => e.stopPropagation()}
            style={{
              overflowY: "scroll",
              maxHeight: "calc(92svh - 72px)",
              overscrollBehavior: "contain",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {/* Product image */}
            <div className="relative aspect-[4/3] bg-gradient-to-b from-warm-gray/40 to-white mx-5 mt-2 rounded-lg overflow-hidden">
              <Image
                src={imageSrc}
                alt={detail.name}
                fill
                className="object-contain drop-shadow-lg p-4"
                sizes="90vw"
              />
              {detail.segment && (
                <span
                  className={`absolute top-3 right-3 text-[0.6rem] font-ui font-semibold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full border ${segmentStyle[detail.segment] || "border-black-deep/10 text-black-deep"}`}
                >
                  {detail.segment}
                </span>
              )}
            </div>

            <div className="px-5 pb-5 pt-5">
              {/* Brand + Name */}
              <span className="font-ui text-[0.65rem] uppercase tracking-[0.18em] text-black-deep font-semibold">
                {detail.brand}
              </span>
              <h3 className="mt-1 font-display text-[1.4rem] sm:text-2xl font-bold tracking-tight text-black-deep leading-tight">
                {detail.name}
              </h3>

              {/* Highlight */}
              <p className="mt-3 text-[0.85rem] font-ui font-medium text-bordeaux leading-snug">
                {detail.highlight}
              </p>

              {/* Description */}
              <p className="mt-3 text-[0.9rem] font-body text-black-deep leading-relaxed">
                {detail.description}
              </p>

              {/* Divider */}
              <div className="mt-5 mb-5 h-px bg-black-deep/10" />

              {/* Specs */}
              <p className="font-ui text-[0.7rem] uppercase tracking-[0.18em] text-black-deep font-semibold mb-3">
                Specifiche tecniche
              </p>
              <div className="space-y-0">
                {detail.specs.map((s, i) => (
                  <div key={s.label} className={`flex justify-between items-baseline py-2.5 ${i < detail.specs.length - 1 ? "border-b border-black-deep/8" : ""}`}>
                    <span className="font-ui text-[0.8rem] uppercase tracking-[0.05em] text-black-deep">{s.label}</span>
                    <span className="font-ui text-[0.85rem] text-black-deep font-semibold text-right ml-4 uppercase">{s.value}</span>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="mt-5 mb-5 h-px bg-black-deep/10" />

              {/* Finiture */}
              <p className="font-ui text-[0.7rem] uppercase tracking-[0.18em] text-black-deep font-semibold mb-2">
                Finiture disponibili
              </p>
              <p className="text-[0.9rem] font-body text-black-deep leading-relaxed uppercase">{detail.colors}</p>

              {/* Caratteristiche */}
              <p className="mt-4 font-ui text-[0.7rem] uppercase tracking-[0.18em] text-black-deep font-semibold mb-2.5">
                Caratteristiche
              </p>
              <div className="flex flex-wrap gap-2">
                {detail.features.map((feat) => (
                  <span key={feat} className="text-[0.8rem] font-ui text-black-deep uppercase border border-black-deep/15 px-3 py-1.5 rounded-full">
                    {feat}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky bottom CTA */}
          <div
            className="border-t border-black-deep/10 px-5 py-3.5 bg-white flex gap-3"
            style={{ paddingBottom: "calc(0.875rem + env(safe-area-inset-bottom, 0px))" }}
          >
            <a href="/contatti" className="flex-1 font-ui text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-center bg-black-deep text-white py-3.5 rounded-lg hover:bg-black-soft transition-colors">
              Richiedi preventivo
            </a>
            <a
              href="https://wa.me/393517278053"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-[52px] border border-black-deep/15 text-black-deep rounded-lg hover:border-black-deep/30 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>

      {/* ─────────── Desktop: premium fullscreen overlay ─────────── */}
      <div className="hidden lg:flex absolute inset-0 items-center justify-center pointer-events-none p-8 xl:p-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="pointer-events-auto w-full max-w-[1200px] xl:max-w-[1340px] bg-white rounded-[20px] relative overflow-hidden shadow-2xl"
          style={{ maxHeight: "88vh" }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-20 w-11 h-11 flex items-center justify-center rounded-full border border-black-deep/8 text-black-deep/40 hover:text-black-deep hover:border-black-deep/20 transition-all duration-300 bg-white/80 backdrop-blur-sm"
            aria-label="Chiudi"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          <div className="grid grid-cols-[1fr_1fr] h-full" style={{ maxHeight: "88vh" }}>
            {/* ── Left: Image ── */}
            <div className="relative bg-cream/60 flex items-center justify-center overflow-hidden">
              {/* Subtle grain texture */}
              <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />

              <div className="relative w-full h-full min-h-[500px] p-12 xl:p-16">
                <Image
                  src={imageSrc}
                  alt={detail.name}
                  fill
                  className="object-contain p-12 xl:p-16 drop-shadow-xl"
                  sizes="600px"
                />
              </div>

              {/* Brand watermark */}
              <span className="absolute bottom-6 left-8 font-ui text-[0.7rem] uppercase tracking-[0.2em] text-black-deep/15 select-none">
                {detail.brand}
              </span>
            </div>

            {/* ── Right: Content ── */}
            <div
              data-lenis-prevent
              className="overflow-y-auto"
              style={{
                maxHeight: "88vh",
                overscrollBehavior: "contain",
              }}
              onWheel={(e) => e.stopPropagation()}
            >
              <motion.div
                variants={stagger}
                initial="hidden"
                animate="visible"
                className="px-10 xl:px-14 py-10 xl:py-12"
              >
                {/* Header */}
                <motion.div variants={fadeUp}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-ui text-[0.7rem] uppercase tracking-[0.2em] text-black-deep">
                      {detail.brand}
                    </span>
                    <span className="w-6 h-px bg-black-deep/15" />
                    <span
                      className={`text-[0.65rem] font-ui font-medium uppercase tracking-[0.15em] px-3 py-1 rounded-full border ${segmentStyle[detail.segment] || "border-black-deep/10 text-black-deep/70"}`}
                    >
                      {detail.segment}
                    </span>
                  </div>
                  <h3 className="font-display text-[2rem] xl:text-[2.5rem] font-bold tracking-tight text-black-deep leading-[1.1]">
                    {detail.name}
                  </h3>
                </motion.div>

                {/* Highlight */}
                <motion.p
                  variants={fadeUp}
                  className="mt-5 text-[0.95rem] xl:text-base font-ui font-medium text-bordeaux leading-relaxed"
                >
                  {detail.highlight}
                </motion.p>

                {/* Description */}
                <motion.p
                  variants={fadeUp}
                  className="mt-4 text-[1.05rem] xl:text-[1.1rem] font-body text-black leading-[1.75]"
                >
                  {detail.description}
                </motion.p>

                {/* Divider */}
                <motion.div variants={fadeUp} className="mt-8 mb-8 h-px bg-black-deep/8" />

                {/* Specs — clean table rows */}
                <motion.div variants={fadeUp}>
                  <p className="font-ui text-[0.8rem] uppercase tracking-[0.2em] text-black-deep mb-5">
                    Specifiche tecniche
                  </p>
                  <div className="space-y-0">
                    {detail.specs.map((s, i) => (
                      <motion.div
                        key={s.label}
                        variants={fadeUp}
                        className={`grid grid-cols-[1fr_1.2fr] gap-6 py-4 ${i < detail.specs.length - 1 ? "border-b border-black-deep/5" : ""}`}
                      >
                        <span className="font-ui text-[1rem] xl:text-[1.05rem] text-black-deep uppercase tracking-[0.06em]">
                          {s.label}
                        </span>
                        <span className="font-ui text-[1rem] xl:text-[1.05rem] text-black-deep font-medium text-right uppercase">
                          {s.value}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Divider */}
                <motion.div variants={fadeUp} className="mt-8 mb-8 h-px bg-black-deep/8" />

                {/* Finiture */}
                <motion.div variants={fadeUp}>
                  <p className="font-ui text-[0.8rem] uppercase tracking-[0.2em] text-black-deep mb-5">
                    Finiture
                  </p>
                  <div className="grid grid-cols-2 xl:grid-cols-3 gap-3">
                    {detail.colors.split(",").map((c) => (
                      <span
                        key={c.trim()}
                        className="font-ui text-[0.85rem] text-black-deep uppercase text-center border border-black-deep/10 bg-cream/40 px-4 py-3 rounded-lg"
                      >
                        {c.trim()}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Divider */}
                <motion.div variants={fadeUp} className="mt-8 mb-8 h-px bg-black-deep/8" />

                {/* Tipologie */}
                <motion.div variants={fadeUp}>
                  <p className="font-ui text-[0.8rem] uppercase tracking-[0.2em] text-black-deep mb-5">
                    Tipologie
                  </p>
                  <div className="grid grid-cols-2 xl:grid-cols-3 gap-3">
                    {detail.features.map((feat) => (
                      <span
                        key={feat}
                        className="font-ui text-[0.85rem] text-black-deep uppercase text-center border border-black-deep/10 bg-cream/40 px-4 py-3 rounded-lg hover:border-black-deep/25 hover:bg-cream/70 transition-all duration-300"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* CTA */}
                <motion.div variants={fadeUp} className="mt-10 flex items-center gap-4">
                  <a
                    href="/contatti"
                    className="group relative flex-1 text-center font-ui text-[0.8rem] font-semibold uppercase tracking-[0.14em] bg-black-deep text-white py-4 overflow-hidden transition-all duration-300 hover:bg-bordeaux-dark"
                  >
                    Richiedi preventivo
                  </a>
                  <a
                    href="https://wa.me/393517278053"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-[52px] h-[52px] border border-black-deep/10 text-black-deep/60 hover:text-black-deep hover:border-black-deep/30 rounded-full transition-all duration-300"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function ProductSheet({ detail, imageSrc, onClose }: ProductSheetProps) {
  if (typeof window === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {detail && (
        <SheetContent detail={detail} imageSrc={imageSrc} onClose={onClose} />
      )}
    </AnimatePresence>,
    document.body,
  );
}
