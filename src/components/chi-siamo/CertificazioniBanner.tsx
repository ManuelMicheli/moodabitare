import Image from "next/image";
import { FadeInView } from "@/components/animations/FadeInView";

/* ── Oknoplast certifications (image-based) ───────────────────────── */

const certificazioniOknoplast = [
  {
    src: "/certificazioni/cert1.jpg",
    alt: "Certificato VOC classe A+ Oknoplast",
    title: "VOC Classe A+",
    description:
      "I prodotti non rilasciano nell'ambiente alcuna sostanza nociva per la salute.",
  },
  {
    src: "/certificazioni/cert2.jpg",
    alt: "Marchio di qualità europeo ift Rosenheim",
    title: "ift Rosenheim",
    description:
      "Il marchio di qualità europeo certifica la qualità dei prodotti e gli standard di produzione.",
  },
  {
    src: "/certificazioni/cert3.jpg",
    alt: "Partner KlimaHaus CasaClima Oknoplast",
    title: "CasaClima",
    description:
      "Partner CasaClima certificati per le competenze tecniche in materia di efficienza energetica.",
  },
  {
    src: "/certificazioni/cert4.jpg",
    alt: "Certificazione ift Zertifiziert Oknoplast",
    title: "ift Zertifiziert",
    description:
      "Processo produttivo e controllo qualità conformi alla normativa EN 14351-1:2006+A1:2010.",
  },
  {
    src: "/certificazioni/cert5.jpg",
    alt: "Certificazione BSI Oknoplast",
    title: "BSI ISO 14001",
    description:
      "Processi di gestione ambientale conformi ai requisiti ISO 14001:2015.",
  },
  {
    src: "/certificazioni/cert6.jpg",
    alt: "Marcatura CE Oknoplast",
    title: "Marcatura CE",
    description:
      "Conformità dei serramenti alla norma UNI EN 14351-1 e alla Direttiva Europea 89/106.",
  },
];

/* ── Professional certifications (icon-based) ─────────────────────── */

const certificazioniProfessionali = [
  {
    id: "elettrica",
    title: "Cert. Elettrica",
    subtitle: "DM 37/08",
    description:
      "Abilitazione per progettazione, installazione e manutenzione di impianti elettrici civili e industriali.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16">
        <circle cx="32" cy="32" r="29" strokeWidth="1.2" strokeDasharray="4 3" />
        <path d="M36 6L18 34h12l-4 24 22-30H34l2-22z" />
      </svg>
    ),
  },
  {
    id: "idraulica",
    title: "Cert. Idraulica",
    subtitle: "DM 37/08",
    description:
      "Qualifica per installazione e manutenzione di impianti idrosanitari, riscaldamento e condizionamento.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16">
        <circle cx="32" cy="32" r="29" strokeWidth="1.2" strokeDasharray="4 3" />
        <path d="M32 8C32 8 16 26 16 38a16 16 0 0 0 32 0C48 26 32 8 32 8z" />
        <path d="M26 40a6 6 0 0 0 6 6" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: "fgas",
    title: "Cert. F-Gas",
    subtitle: "Reg. UE 517/2014",
    description:
      "Certificazione per imprese che operano su apparecchiature contenenti gas fluorurati ad effetto serra.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16">
        <circle cx="32" cy="32" r="29" strokeWidth="1.2" strokeDasharray="4 3" />
        <path d="M20 44c0-8 6-10 6-18a6 6 0 0 1 12 0c0 8 6 10 6 18a12 12 0 0 1-24 0z" />
        <path d="M28 36h8" strokeWidth="1.5" />
        <path d="M26 40h12" strokeWidth="1.5" />
        <path d="M28 44h8" strokeWidth="1.5" />
        <path d="M32 8v10" strokeWidth="1.5" />
        <path d="M22 12l4 6" strokeWidth="1.5" />
        <path d="M42 12l-4 6" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: "posaclima",
    title: "Posa Clima",
    subtitle: "UNI 11673 · EQF3",
    description:
      "Patentino nazionale Posatore/Installatore Senior EQF3, certificato Accredia per posa serramenti.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16">
        <circle cx="32" cy="32" r="29" strokeWidth="1.2" strokeDasharray="4 3" />
        <rect x="14" y="16" width="36" height="26" rx="3" />
        <path d="M14 24h36" />
        <path d="M22 30h10" strokeWidth="1.5" />
        <path d="M22 35h6" strokeWidth="1.5" />
        <rect x="38" y="28" width="8" height="10" rx="1.5" />
        <path d="M32 42v8" strokeWidth="1.5" />
        <path d="M26 50h12" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: "posatore-esperto",
    title: "Posatore Esperto",
    subtitle: "PosaClima",
    description:
      "Qualifica Posatore Esperto PosaClima e Tecnico per la Riqualificazione Energetica del Foro Finestra.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16">
        <circle cx="32" cy="32" r="29" strokeWidth="1.2" strokeDasharray="4 3" />
        <path d="M16 46V18h32v28" />
        <path d="M12 46h40" />
        <rect x="24" y="24" width="16" height="18" rx="1" />
        <path d="M28 24v18" strokeWidth="1.5" />
        <path d="M36 24v18" strokeWidth="1.5" />
        <path d="M24 32h16" strokeWidth="1.5" />
        <path d="M20 14l4 4" strokeWidth="1.5" />
        <path d="M44 14l-4 4" strokeWidth="1.5" />
        <path d="M32 10v8" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: "inim",
    title: "Installatore INIM",
    subtitle: "INIM Electronics",
    description:
      "Qualifica per progettazione e installazione di sistemi antintrusione, antincendio e domotica.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16">
        <circle cx="32" cy="32" r="29" strokeWidth="1.2" strokeDasharray="4 3" />
        <path d="M32 10L14 22v16c0 10 8 16 18 18 10-2 18-8 18-18V22L32 10z" />
        <path d="M24 33l5 5 11-11" />
      </svg>
    ),
  },
];

/* ── Component ────────────────────────────────────────────────────── */

export function CertificazioniBanner() {
  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="px-6 sm:px-10 lg:px-20">
        <FadeInView>
          <p className="text-label text-black-deep/60 text-center mb-4">
            Garanzia di qualità
          </p>
          <h2 className="font-section-title text-black-deep text-center mb-14 lg:mb-20">
            Le Nostre Certificazioni
          </h2>
        </FadeInView>

        {/* ─── Oknoplast (images) ──────────────────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-14 w-full">
          {certificazioniOknoplast.map((cert, i) => (
            <FadeInView key={i} delay={i * 0.08}>
              <div className="flex flex-col items-center text-center">
                <div className="relative w-full h-20 sm:h-24 lg:h-28 mb-5">
                  <Image
                    src={cert.src}
                    alt={cert.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 40vw, (max-width: 1024px) 30vw, 250px"
                  />
                </div>
                <p className="font-display text-sm sm:text-base text-black-deep leading-relaxed max-w-[280px]">
                  {cert.description}
                </p>
              </div>
            </FadeInView>
          ))}
        </div>

        {/* ─── Divider ─────────────────────────────────────────────── */}
        <div className="my-14 lg:my-20 w-full h-px bg-black-deep/10" />

        {/* ─── Professional (icons) ────────────────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-14 w-full">
          {certificazioniProfessionali.map((cert, i) => (
            <FadeInView key={cert.id} delay={i * 0.08}>
              <div className="flex flex-col items-center text-center">
                <div className="text-black-deep/80 mb-5">
                  {cert.icon}
                </div>
                <h3 className="font-display text-sm sm:text-base font-medium text-black-deep mb-1">
                  {cert.title}
                </h3>
                <p className="font-ui text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.1em] text-bordeaux mb-3">
                  {cert.subtitle}
                </p>
                <p className="font-display text-xs sm:text-sm text-black-deep leading-relaxed max-w-[280px]">
                  {cert.description}
                </p>
              </div>
            </FadeInView>
          ))}
        </div>

        {/* ─── Footer note ─────────────────────────────────────────── */}
        <FadeInView delay={0.3}>
          <p className="mt-14 lg:mt-20 text-center font-ui text-[13px] text-black-deep leading-relaxed">
            Tutte le certificazioni sono regolarmente aggiornate e disponibili per consultazione presso il nostro showroom.
          </p>
        </FadeInView>
      </div>
    </section>
  );
}
