import type { Metadata } from "next";
import { FadeInView } from "@/components/animations/FadeInView";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Informativa sulla privacy e cookie policy di Mood Abitare by Moschiano Solution.",
};

export default function PrivacyPolicy() {
  return (
    <main>
      <section className="relative min-h-[50vh] flex items-end bg-black-deep text-white">
        <div className="relative z-10 w-full pb-20 lg:pb-28 px-6 sm:px-10 lg:px-20">
          <FadeInView>
            <h1 className="font-section-title">
              Privacy Policy
            </h1>
          </FadeInView>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-20">
          <FadeInView>
            <div className="space-y-10">
              <div>
                <p className="text-caption text-black-deep/40 leading-[1.8]">
                  La presente informativa descrive le modalità di trattamento dei dati personali degli utenti che consultano il sito web www.moodabitare.it, di proprietà di Moschiano Solution.
                </p>
              </div>

              {[
                { title: "Titolare del trattamento", content: "Il Titolare del trattamento dei dati personali è Moschiano Solution, con sede in Viale Europa, 65 — 21050 Gorla Maggiore (VA), Italia. Email: info@moodabitare.it" },
                { title: "Tipologie di dati raccolti", content: "Il Sito raccoglie dati personali forniti volontariamente dall'utente attraverso la compilazione del form di contatto (nome, email, telefono, messaggio). Vengono inoltre raccolti automaticamente dati di navigazione (cookie tecnici)." },
                { title: "Finalità del trattamento", content: "I dati personali sono trattati per: rispondere alle richieste di contatto, fornire preventivi e informazioni commerciali, migliorare l'esperienza di navigazione." },
                { title: "Cookie", content: "Il Sito utilizza cookie tecnici necessari e, previo consenso, cookie di analisi (Google Analytics) per comprendere come gli utenti interagiscono con il Sito." },
                { title: "Diritti dell'utente", content: "L'utente può esercitare i diritti previsti dal GDPR (accesso, rettifica, cancellazione, limitazione, portabilità, opposizione) contattando il Titolare all'indirizzo info@moodabitare.it." },
              ].map((section) => (
                <div key={section.title} className="pt-8 border-t border-black/5">
                  <h2 className="font-display text-lg font-medium text-black-deep tracking-tight mb-4">
                    {section.title}
                  </h2>
                  <p className="text-caption text-black-deep/40 leading-[1.8]">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </FadeInView>
        </div>
      </section>
    </main>
  );
}
