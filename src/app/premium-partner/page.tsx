import type { Metadata } from "next";
import Image from "next/image";
import { FadeInView } from "@/components/animations/FadeInView";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { AccentText } from "@/components/ui/AccentText";

export const metadata: Metadata = {
  title: "Premium Partner Oknoplast",
  description:
    "Mood Abitare è Premium Partner Oknoplast per la provincia di Varese. Scopri i vantaggi di scegliere un partner certificato per i tuoi serramenti.",
};

const benefits = [
  { title: "Qualità certificata", description: "Prodotti con le più alte certificazioni internazionali presso istituti indipendenti europei." },
  { title: "Assistenza dedicata", description: "Un team sempre aggiornato sulle ultime novità in termini di prodotti e tecniche di installazione." },
  { title: "Garanzia estesa", description: "Garanzia completa su prodotti e installazione, con assistenza post-vendita dedicata." },
  { title: "Design innovativo", description: "Soluzioni brevettate e originali con estetica di altissimo livello e prestazioni eccezionali." },
];

const oknoplastFeatures = [
  "Azienda multinazionale specializzata nella progettazione e produzione di serramenti in PVC e alluminio di design",
  "Fondata a Cracovia nel 1994",
  "Serramenti brevettati e originali con estetica di altissimo livello",
  "Prestazioni eccezionali di isolamento termico e acustico",
  "Personalizzabili in ogni parte: finiture, maniglie, accessori estetici e funzionali",
  "Numerose certificazioni internazionali presso prestigiosi istituti indipendenti europei",
];

export default function PremiumPartner() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end bg-black-deep text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black-deep/90 via-transparent to-transparent" />
        <div className="relative z-10 w-full pb-14 lg:pb-28 px-6 sm:px-10 lg:px-20">
          <FadeInView>
            <p className="text-label text-white/40 mb-6">
              Premium Partner
            </p>
            <h1 className="font-page-title max-w-5xl">
              <AccentText>Mood Abitare è Premium Partner Oknoplast</AccentText>
            </h1>
            <p className="mt-8 text-body text-white/35 max-w-xl">
              Mood Abitare è stata selezionata da Oknoplast come Premium Partner per la provincia di Varese. Fa parte di una ristretta rete di operatori che garantiscono ai propri clienti un&apos;elevata qualità dei prodotti e dei servizi offerti.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Oknoplast image banner */}
      <section className="relative h-[65vh] min-h-[450px] flex items-end justify-end text-white overflow-hidden">
        <Image
          src="/images/Oknoplast-azienda-vista-aerea-opt.jpg"
          alt="Oknoplast azienda vista aerea"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-tl from-black-deep/85 via-black-deep/50 to-transparent" />

        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-20 pb-12 lg:pb-16">
          <div className="flex flex-col items-end text-right">
            <FadeInView>
              <p className="text-label text-white/50 mb-4">
                Premium Partner Oknoplast
              </p>
            </FadeInView>

            <FadeInView delay={0.1}>
              <h2 className="font-section-title text-white">
                Il partner ideale
                <br />
                per la tua casa
              </h2>
            </FadeInView>

            <FadeInView delay={0.2}>
              <p className="mt-5 text-body text-white/60 max-w-md">
                Mood Abitare è stata selezionata come Premium Partner Oknoplast per la provincia di Varese.
                Una ristretta rete di operatori che garantisce qualità ed eccellenza.
              </p>
            </FadeInView>

            <FadeInView delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-8 lg:gap-10">
                {[
                  { value: "30+", label: "Anni di esperienza" },
                  { value: "100%", label: "PVC riciclabile" },
                  { value: "RC2", label: "Classe antieffrazione" },
                  { value: "A+", label: "Efficienza energetica" },
                ].map((item) => (
                  <div key={item.label} className="text-right">
                    <div className="font-display text-[clamp(1.5rem,2.5vw,2rem)] font-bold text-white leading-none">
                      {item.value}
                    </div>
                    <div className="mt-3 h-px w-8 bg-white/20 ml-auto" />
                    <p className="mt-3 text-caption text-white/50">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* What it means */}
      <section className="py-20 lg:py-44">
        <div className="px-6 sm:px-10 lg:px-20">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <FadeInView direction="left">
              <p className="text-label text-black-deep/30 mb-6">
                Il nostro riconoscimento
              </p>
              <h2 className="font-section-title text-black-deep">
                Cosa significa essere Premium Partner
              </h2>
              <div className="mt-10 space-y-5 text-caption text-black-deep/40 max-w-lg">
                <p>
                  La qualifica di Premium Partner Oknoplast è il riconoscimento della qualità del nostro lavoro, della nostra esperienza trentennale e della grande conoscenza dell&apos;area di Varese.
                </p>
                <p>
                  Siamo costantemente aggiornati sulle ultime novità in termini di prodotti e tecniche di installazione, garantendo ai nostri clienti le soluzioni più avanzate del mercato.
                </p>
              </div>
            </FadeInView>

            <FadeInView direction="right">
              <StaggerContainer className="grid grid-cols-1 gap-px bg-black/5 sm:grid-cols-2" staggerDelay={0.08}>
                {benefits.map((benefit, i) => (
                  <StaggerItem key={benefit.title}>
                    <div className="bg-white p-8 lg:p-10 h-full">
                      <span className="text-caption font-medium text-black-deep/15">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-4 font-display text-base font-medium text-black-deep tracking-tight">
                        <AccentText>{benefit.title}</AccentText>
                      </h3>
                      <p className="mt-3 text-caption text-black-deep/35">
                        {benefit.description}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* About Oknoplast */}
      <section className="py-20 lg:py-44 bg-black-deep text-white">
        <div className="px-6 sm:px-10 lg:px-20">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
            <FadeInView direction="left">
              <div className="aspect-[4/3] bg-white/5" />
            </FadeInView>

            <FadeInView direction="right">
              <p className="text-label text-white/30 mb-6">
                Il brand
              </p>
              <h2 className="font-section-title">
                <AccentText>Chi è Oknoplast</AccentText>
              </h2>
              <ul className="mt-10 space-y-4">
                {oknoplastFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-4">
                    <span className="flex-shrink-0 mt-1.5 h-px w-4 bg-white/20" />
                    <span className="text-caption text-white/40">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/prodotti/finestre-pvc-oknoplast"
                className="inline-block mt-12 text-button text-white border-b border-white/20 pb-1 hover:border-white/60 transition-colors"
              >
                Scopri le finestre Oknoplast
              </a>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-44">
        <div className="px-6 sm:px-10 lg:px-20 text-center">
          <FadeInView>
            <h2 className="font-section-title text-black-deep max-w-3xl mx-auto">
              <AccentText>Scegli la qualità Premium Partner</AccentText>
            </h2>
            <p className="mt-8 text-body text-black-deep/35 max-w-md mx-auto">
              Contattaci per scoprire tutti i vantaggi.
            </p>
            <a
              href="/contatti"
              className="inline-block mt-12 text-button bg-black-deep text-white px-8 py-4 hover:bg-black-soft transition-colors"
            >
              Richiedi una consulenza
            </a>
          </FadeInView>
        </div>
      </section>
    </main>
  );
}
