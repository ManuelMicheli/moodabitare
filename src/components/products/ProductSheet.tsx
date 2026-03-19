"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { WindowDetail } from "@/lib/window-details";

interface ProductSheetProps {
  detail: WindowDetail | null;
  imageSrc: string;
  onClose: () => void;
}

const segmentColor: Record<string, string> = {
  "Classic": "bg-black-deep/10 text-black-deep/60",
  "Comfort": "bg-blue-50 text-blue-700",
  "Design": "bg-amber-50 text-amber-700",
  "Scorrevoli": "bg-emerald-50 text-emerald-700",
  "Premium": "bg-bordeaux/10 text-bordeaux",
  "Top di gamma": "bg-bordeaux/15 text-bordeaux",
  "Passive House": "bg-green-50 text-green-700",
};

const specs = (d: WindowDetail) => [
  { label: "Profondità profilo", value: d.profileDepth },
  { label: "Camere", value: d.chambers },
  { label: "Trasmittanza Uw", value: d.thermalUw },
  { label: "Isolamento acustico", value: d.acousticDb },
  { label: "Classe sicurezza", value: d.security },
  { label: "Vetro", value: d.glassType },
];

export function ProductSheet({ detail, imageSrc, onClose }: ProductSheetProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!detail) return;
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [detail, onClose]);

  return (
    <AnimatePresence>
      {detail && (
        <motion.div
          ref={overlayRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-end sm:items-center sm:justify-center"
          onClick={(e) => {
            if (e.target === overlayRef.current) onClose();
          }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black-deep/60 backdrop-blur-sm" />

          {/* Sheet */}
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="relative z-10 w-full sm:max-w-lg lg:max-w-xl bg-white sm:rounded-2xl overflow-hidden max-h-[92vh] sm:max-h-[85vh] flex flex-col rounded-t-2xl"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-11 h-11 flex items-center justify-center rounded-full bg-black-deep/5 hover:bg-black-deep/10 transition-colors"
              aria-label="Chiudi"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>

            {/* Drag handle (mobile) */}
            <div className="sm:hidden flex justify-center pt-3 pb-1">
              <div className="w-10 h-1 rounded-full bg-black-deep/15" />
            </div>

            {/* Scrollable content */}
            <div className="overflow-y-auto overscroll-contain flex-1">
              {/* Image */}
              <div className="relative aspect-[4/3] bg-gradient-to-b from-warm-gray/50 to-white mx-6 mt-2 sm:mt-6">
                <Image
                  src={imageSrc}
                  alt={detail.name}
                  fill
                  className="object-contain drop-shadow-lg"
                  sizes="(max-width: 640px) 90vw, 500px"
                />
              </div>

              {/* Content */}
              <div className="px-6 pb-8 pt-4">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-black-deep">
                      {detail.name}
                    </h3>
                    <p className="text-label text-black-deep/30 mt-1">Oknoplast</p>
                  </div>
                  <span
                    className={`flex-shrink-0 text-[0.75rem] font-ui font-semibold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full ${segmentColor[detail.segment] || "bg-black-deep/5 text-black-deep/50"}`}
                  >
                    {detail.segment}
                  </span>
                </div>

                {/* Highlight */}
                <p className="mt-4 text-sm font-medium text-bordeaux leading-snug">
                  {detail.highlight}
                </p>

                {/* Description */}
                <p className="mt-3 text-caption text-black-deep/55 leading-relaxed">
                  {detail.description}
                </p>

                {/* Specs grid */}
                <div className="mt-6">
                  <p className="text-label text-black-deep/25 mb-3">
                    Specifiche tecniche
                  </p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {specs(detail).map((s) => (
                      <div
                        key={s.label}
                        className="bg-warm-gray/20 px-3 py-2.5 rounded-md"
                      >
                        <span className="text-[0.75rem] uppercase tracking-wider text-black-deep/30">
                          {s.label}
                        </span>
                        <span className="text-sm text-black-deep block mt-0.5">
                          {s.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Colors + Opening types */}
                <div className="mt-5 grid grid-cols-1 gap-3">
                  <div className="py-2.5 border-b border-black-deep/5">
                    <span className="text-[0.75rem] font-ui text-black-deep/35 uppercase tracking-wide">
                      Finiture disponibili
                    </span>
                    <p className="text-sm text-black-deep/70 mt-0.5">
                      {detail.colors}
                    </p>
                  </div>
                  <div className="py-2.5">
                    <span className="text-[0.75rem] font-ui text-black-deep/35 uppercase tracking-wide">
                      Aperture
                    </span>
                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                      {detail.openingTypes.map((type) => (
                        <span
                          key={type}
                          className="text-[0.75rem] font-ui text-black-deep/50 bg-black-deep/[0.03] px-2 py-0.5 rounded"
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sticky CTA */}
            <div className="border-t border-black-deep/5 px-6 py-4 bg-white flex gap-3" style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom, 0px))" }}>
              <a
                href="/contatti"
                className="flex-1 text-button text-center bg-black-deep text-white py-3.5 hover:bg-black-soft transition-colors"
              >
                Richiedi preventivo
              </a>
              <a
                href="https://wa.me/393517278053"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-[52px] border border-black-deep/10 text-black-deep/60 hover:border-black-deep/30 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
