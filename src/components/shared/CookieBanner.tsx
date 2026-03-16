"use client";

import { useState, useEffect, useRef } from "react";
import Cookies from "js-cookie";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";

const CONSENT_COOKIE = "mood_cookie_consent";

type ConsentLevel = "necessary" | "all";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analyticsChecked, setAnalyticsChecked] = useState(false);
  const gaLoadedRef = useRef(false);

  useEffect(() => {
    const consent = Cookies.get(CONSENT_COOKIE);
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
    // If analytics consented, load GA
    if (consent === "all") {
      loadGA();
    }
  }, []);

  const handleConsent = (level: ConsentLevel) => {
    Cookies.set(CONSENT_COOKIE, level, {
      expires: 365,
      sameSite: "Lax",
      secure: window.location.protocol === "https:",
    });
    setIsVisible(false);
    if (level === "all") {
      loadGA();
    }
  };

  const handleCustomConsent = () => {
    handleConsent(analyticsChecked ? "all" : "necessary");
  };

  const loadGA = () => {
    if (gaLoadedRef.current) return;
    const gaId = process.env.NEXT_PUBLIC_GA_ID;
    if (!gaId || typeof window === "undefined") return;

    gaLoadedRef.current = true;

    // Load gtag script
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    script.async = true;
    document.head.appendChild(script);

    // Configure gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    }
    gtag("js", new Date());
    gtag("config", gaId, { anonymize_ip: true });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          role="dialog"
          aria-label="Consenso cookie"
          className="fixed bottom-0 left-0 right-0 z-[60] bg-white border-t border-warm-gray/30 shadow-2xl"
        >
          <div className="mx-auto max-w-[1440px] px-4 py-6 sm:px-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex-1">
                <p className="text-sm text-black-deep font-medium mb-1">
                  Questo sito utilizza i cookie
                </p>
                <p className="text-xs text-mid-gray leading-relaxed">
                  Utilizziamo cookie tecnici necessari e, previo consenso,
                  cookie di analisi per migliorare la tua esperienza.{" "}
                  <a
                    href="/privacy-policy"
                    className="text-black-deep underline"
                  >
                    Privacy e Cookie Policy
                  </a>
                </p>

                <AnimatePresence>
                  {showDetails && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden mt-3 space-y-2"
                    >
                      <label className="flex items-center gap-2 text-xs text-mid-gray">
                        <input
                          type="checkbox"
                          checked
                          disabled
                          className="h-3 w-3 accent-bordeaux"
                        />
                        <span>
                          Cookie tecnici (necessari) — Funzionamento del sito
                        </span>
                      </label>
                      <label className="flex items-center gap-2 text-xs text-mid-gray">
                        <input
                          type="checkbox"
                          checked={analyticsChecked}
                          onChange={(e) =>
                            setAnalyticsChecked(e.target.checked)
                          }
                          className="h-3 w-3 accent-bordeaux"
                        />
                        <span>
                          Cookie analitici (Google Analytics) — Statistiche
                          anonime
                        </span>
                      </label>
                      <div className="pt-2">
                        <Button
                          onClick={handleCustomConsent}
                          variant="outline"
                          size="sm"
                          className="text-xs"
                        >
                          Salva preferenze
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="flex flex-wrap gap-2 items-center">
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="text-xs text-mid-gray underline hover:text-black-deep transition-colors"
                >
                  {showDetails ? "Nascondi" : "Personalizza"}
                </button>
                <Button
                  onClick={() => handleConsent("necessary")}
                  variant="outline"
                  size="sm"
                  className="text-xs"
                >
                  Solo necessari
                </Button>
                <Button
                  onClick={() => handleConsent("all")}
                  variant="bordeaux"
                  size="sm"
                  className="text-xs"
                >
                  Accetta tutti
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Extend Window for gtag
declare global {
  interface Window {
    dataLayer: unknown[];
  }
}
