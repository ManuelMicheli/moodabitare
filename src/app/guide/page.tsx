import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { GUIDES } from "@/lib/guide-data";
import { buildBreadcrumbJsonLd } from "@/lib/seo/breadcrumb-jsonld";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FadeInView } from "@/components/animations/FadeInView";

export const metadata: Metadata = {
  title: "Guide — Serramenti, ristrutturazioni, sicurezza, energia",
  description:
    "Guide Mood Abitare: come scegliere infissi, detrazioni fiscali serramenti 2026, ristrutturazione chiavi in mano, porte blindate, pompe di calore. Contenuti aggiornati.",
  keywords: [
    "guide serramenti",
    "guida ristrutturazione casa",
    "detrazioni fiscali 2026",
    "come scegliere infissi",
    "guide Mood Abitare",
    "consigli casa Varese",
  ],
  alternates: {
    canonical: "https://www.moodabitare.it/guide",
  },
  openGraph: {
    title: "Guide — Mood Abitare",
    description:
      "Tutto quello che serve sapere su serramenti, ristrutturazioni, sicurezza ed energia. Guide aggiornate a cura di Mood Abitare.",
    url: "https://www.moodabitare.it/guide",
    type: "website",
    locale: "it_IT",
    siteName: "Mood Abitare",
  },
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Guide Mood Abitare",
  description:
    "Raccolta di guide Mood Abitare su serramenti, ristrutturazioni, sicurezza ed energia.",
  numberOfItems: GUIDES.length,
  itemListElement: GUIDES.map((g, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `https://www.moodabitare.it/guide/${g.slug}`,
    name: g.title,
  })),
};

export default function GuideIndexPage() {
  return (
    <main>
      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumbJsonLd([
              { name: "Guide", url: "https://www.moodabitare.it/guide" },
            ])
          ),
        }}
      />
      <Script
        id="itemlist-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <div className="pt-20 sm:pt-24 lg:pt-28" />
      <div className="px-6 sm:px-10 lg:px-20 py-4">
        <Breadcrumb items={[{ label: "Guide" }]} />
      </div>

      <section className="px-6 sm:px-10 lg:px-20 pt-8 sm:pt-14 lg:pt-20 pb-14 sm:pb-20 lg:pb-32 max-w-6xl mx-auto">
        <FadeInView>
          <p className="text-label text-bordeaux mb-6">Guide</p>
        </FadeInView>
        <FadeInView delay={0.1}>
          <h1 className="font-display font-medium leading-[1.02] tracking-[-0.025em] text-black-deep text-4xl sm:text-5xl lg:text-7xl mb-8 sm:mb-12">
            Tutto quello che serve sapere
          </h1>
        </FadeInView>
        <FadeInView delay={0.2}>
          <p className="font-body text-lg sm:text-xl lg:text-2xl text-black-deep/80 leading-relaxed max-w-3xl mb-14 sm:mb-20">
            Approfondimenti aggiornati per scegliere con consapevolezza: serramenti, ristrutturazioni chiavi in mano, sicurezza antieffrazione, efficienza energetica, detrazioni fiscali 2026.
          </p>
        </FadeInView>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {GUIDES.map((g, i) => (
            <li key={g.slug}>
              <FadeInView delay={0.1 + i * 0.05}>
                <Link
                  href={`/guide/${g.slug}`}
                  className="group block border-t-2 border-black-deep pt-6 sm:pt-8 hover:border-bordeaux transition-colors duration-300"
                >
                  <p className="text-label text-black-deep/60 mb-4">{g.eyebrow}</p>
                  <h2 className="font-display font-medium leading-[1.1] tracking-[-0.02em] text-black-deep text-2xl sm:text-3xl lg:text-4xl mb-5 group-hover:text-bordeaux transition-colors">
                    {g.title}
                  </h2>
                  <p className="font-body text-base sm:text-lg text-black-deep/75 leading-relaxed mb-6">
                    {g.lead}
                  </p>
                  <span className="inline-block font-ui text-xs uppercase tracking-widest text-black-deep/50 group-hover:text-bordeaux transition-colors">
                    Leggi la guida →
                  </span>
                </Link>
              </FadeInView>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
