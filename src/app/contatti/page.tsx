import type { Metadata } from "next";
import { FadeInView } from "@/components/animations/FadeInView";
import { ClipReveal } from "@/components/animations/ClipReveal";
import { AccentText } from "@/components/ui/AccentText";
import { ContactForm } from "@/components/contact/ContactForm";
import { CONTACT_INFO, OPENING_HOURS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contatti — Preventivo Gratuito Serramenti Varese",
  description:
    "Contatta Mood Abitare per un preventivo gratuito. Showroom in Viale Europa 65, Gorla Maggiore (VA). Tel. 0331.1588159 — WhatsApp 351.7278053. Aperto lun-ven 9:30-19:00, sab 9:30-17:00.",
  keywords: [
    "contatti Mood Abitare",
    "preventivo serramenti Varese",
    "preventivo gratuito finestre",
    "showroom serramenti Gorla Maggiore",
    "preventivo ristrutturazione Varese",
    "sopralluogo gratuito Varese",
  ],
  alternates: {
    canonical: "https://www.moschianosrl.it/contatti",
  },
  openGraph: {
    title: "Contatti — Mood Abitare",
    description:
      "Richiedi un preventivo gratuito per serramenti e ristrutturazioni. Showroom a Gorla Maggiore (VA).",
    url: "https://www.moschianosrl.it/contatti",
  },
};

export default function Contatti() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end bg-black-deep text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black-deep/90 via-transparent to-transparent" />
        <div className="relative z-10 w-full pb-14 lg:pb-28 px-6 sm:px-10 lg:px-20">
          <FadeInView>
            <p className="text-label text-white/80 mb-6">
              Contattaci
            </p>
          </FadeInView>
          <ClipReveal direction="up" delay={0.15} duration={0.9}>
            <h1 className="font-page-title max-w-5xl">
              <AccentText>Parliamo del tuo progetto</AccentText>
            </h1>
          </ClipReveal>
          <FadeInView delay={0.4}>
            <p className="mt-8 text-body text-white/80 max-w-xl">
              Compila il form per richiedere un preventivo o informazioni. Ti risponderemo il prima possibile.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Map */}
      <ClipReveal direction="up" duration={1}>
      <section className="h-[300px] sm:h-[400px] lg:h-[500px] bg-warm-gray/10">
        <iframe
          src="https://maps.google.com/maps?q=Viale+Europa+65,+21050+Gorla+Maggiore+VA,+Italy&t=&z=16&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mood Abitare — Gorla Maggiore"
        />
      </section>
      </ClipReveal>

      {/* Contact Info + Form */}
      <section className="py-20 lg:py-44">
        <div className="px-6 sm:px-10 lg:px-20">
          <div className="grid gap-16 lg:grid-cols-[1fr_2fr] lg:gap-24">
            {/* Contact Info */}
            <FadeInView direction="left">
              <p className="text-label text-black-deep/60 mb-10">
                Come trovarci
              </p>

              <div className="space-y-8">
                <div>
                  <p className="text-label text-black-deep/60 mb-2">Indirizzo</p>
                  <p className="text-caption text-black-deep">{CONTACT_INFO.fullAddress}</p>
                </div>
                <div>
                  <p className="text-label text-black-deep/60 mb-2">Telefono</p>
                  <a href={CONTACT_INFO.phoneHref} className="inline-block py-2 text-caption text-black-deep hover:text-black-deep transition-colors">{CONTACT_INFO.phone}</a>
                </div>
                <div>
                  <p className="text-label text-black-deep/60 mb-2">WhatsApp</p>
                  <a href={CONTACT_INFO.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-block py-2 text-caption text-black-deep hover:text-black-deep transition-colors">{CONTACT_INFO.whatsapp}</a>
                </div>
                <div>
                  <p className="text-label text-black-deep/60 mb-2">Email</p>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="block py-2 text-caption text-black-deep hover:text-black-deep transition-colors">{CONTACT_INFO.email}</a>
                  <a href={`mailto:${CONTACT_INFO.emailCommerciale}`} className="block py-2 text-caption text-black-deep hover:text-black-deep transition-colors">{CONTACT_INFO.emailCommerciale}</a>
                </div>
                <div className="pt-6 border-t border-black/5">
                  <p className="text-label text-black-deep/60 mb-2">Orari</p>
                  <p className="text-caption text-black-deep">{OPENING_HOURS.weekdays.label}: {OPENING_HOURS.weekdays.morning} / {OPENING_HOURS.weekdays.afternoon}</p>
                  <p className="text-caption text-black-deep mt-1">{OPENING_HOURS.saturday.label}: {OPENING_HOURS.saturday.morning} / {OPENING_HOURS.saturday.afternoon}</p>
                </div>
              </div>
            </FadeInView>

            {/* Form */}
            <FadeInView direction="right">
              <p className="text-label text-black-deep/60 mb-10">
                Richiedi informazioni
              </p>
              <ContactForm />
            </FadeInView>
          </div>
        </div>
      </section>
    </main>
  );
}
