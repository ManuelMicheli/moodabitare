"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const STORAGE_KEY = "moschiano-promo-dismissed";

export function PromoPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const dismissed = sessionStorage.getItem(STORAGE_KEY);
      if (dismissed) return;
    } catch {
      // storage unavailable
    }

    // Show popup 1s after site loader finishes (~4.5s total)
    const timer = setTimeout(() => setVisible(true), 4500);
    return () => clearTimeout(timer);
  }, []);

  const close = useCallback(() => {
    setVisible(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label="Offerta Anniversario Oknoplast"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fadeIn" />

      {/* Modal */}
      <div
        className="relative w-full max-w-[95vw] sm:max-w-[90vw] lg:max-w-7xl animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={close}
          className="absolute -top-3 -right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-110 cursor-pointer"
          aria-label="Chiudi"
        >
          <svg className="h-5 w-5 text-charcoal-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image */}
        <div className="overflow-hidden rounded-2xl shadow-2xl">
          <Image
            src="/images/Offerta-anniversario-3-30.04-scaled.jpg"
            alt="Offerta Anniversario — 20 anni di Oknoplast in Italia. Sconto del 40% sulle finestre Koncept Plus. Detrazioni fiscali fino al 50%. Entro il 30.04.26"
            width={2560}
            height={1280}
            className="w-full h-auto"
            sizes="(max-width: 640px) 95vw, (max-width: 1280px) 90vw, 1280px"
          />
        </div>

        {/* CTA */}
        <div className="mt-4 flex justify-center">
          <a
            href="/contatti"
            onClick={close}
            className="rounded-full bg-bordeaux px-8 py-3 font-ui text-sm font-semibold uppercase tracking-widest text-white transition-all hover:bg-bordeaux-dark hover:shadow-lg"
          >
            Richiedi Preventivo
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .animate-scaleIn {
          animation: scaleIn 0.4s ease-out 0.1s forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
