import type { Metadata } from "next";
import { FadeInView } from "@/components/animations/FadeInView";
import { ContactForm } from "@/components/contact/ContactForm";
import { CONTACT_INFO, OPENING_HOURS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contatti",
  description: "Contatta Mood Abitare per un preventivo gratuito. Showroom a Gorla Maggiore (VA).",
};

export default function Contatti() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end bg-black-deep text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black-deep/90 via-transparent to-transparent" />
        <div className="relative z-10 w-full pb-20 lg:pb-28 px-6 sm:px-10 lg:px-20">
          <FadeInView>
            <p className="text-label text-white/40 mb-6">
              Contattaci
            </p>
            <h1 className="font-section-title max-w-3xl">
              Parliamo del tuo progetto
            </h1>
            <p className="mt-8 text-body text-white/35 max-w-xl">
              Compila il form per richiedere un preventivo o informazioni. Ti risponderemo il prima possibile.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Map */}
      <section className="h-[450px] lg:h-[500px] bg-warm-gray/10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.5!2d8.8847!3d45.6278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDM3JzQwLjEiTiA4wrA1Myc1LjAiRQ!5e0!3m2!1sit!2sit!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mood Abitare — Gorla Maggiore"
        />
      </section>

      {/* Contact Info + Form */}
      <section className="py-32 lg:py-44">
        <div className="px-6 sm:px-10 lg:px-20">
          <div className="grid gap-16 lg:grid-cols-[1fr_2fr] lg:gap-24">
            {/* Contact Info */}
            <FadeInView direction="left">
              <p className="text-label text-black-deep/30 mb-10">
                Come trovarci
              </p>

              <div className="space-y-8">
                <div>
                  <p className="text-label text-black-deep/25 mb-2">Indirizzo</p>
                  <p className="text-caption text-black-deep/50">{CONTACT_INFO.fullAddress}</p>
                </div>
                <div>
                  <p className="text-label text-black-deep/25 mb-2">Telefono</p>
                  <a href={CONTACT_INFO.phoneHref} className="text-caption text-black-deep/50 hover:text-black-deep transition-colors">{CONTACT_INFO.phone}</a>
                </div>
                <div>
                  <p className="text-label text-black-deep/25 mb-2">WhatsApp</p>
                  <a href={CONTACT_INFO.whatsappHref} target="_blank" rel="noopener noreferrer" className="text-caption text-black-deep/50 hover:text-black-deep transition-colors">{CONTACT_INFO.whatsapp}</a>
                </div>
                <div>
                  <p className="text-label text-black-deep/25 mb-2">Email</p>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="block text-caption text-black-deep/50 hover:text-black-deep transition-colors">{CONTACT_INFO.email}</a>
                  <a href={`mailto:${CONTACT_INFO.emailCommerciale}`} className="block text-caption text-black-deep/50 hover:text-black-deep transition-colors mt-1">{CONTACT_INFO.emailCommerciale}</a>
                </div>
                <div className="pt-6 border-t border-black/5">
                  <p className="text-label text-black-deep/25 mb-2">Orari</p>
                  <p className="text-caption text-black-deep/40">{OPENING_HOURS.weekdays.label}: {OPENING_HOURS.weekdays.morning} / {OPENING_HOURS.weekdays.afternoon}</p>
                  <p className="text-caption text-black-deep/40 mt-1">{OPENING_HOURS.saturday.label}: {OPENING_HOURS.saturday.morning} / {OPENING_HOURS.saturday.afternoon}</p>
                </div>
              </div>
            </FadeInView>

            {/* Form */}
            <FadeInView direction="right">
              <p className="text-label text-black-deep/30 mb-10">
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
