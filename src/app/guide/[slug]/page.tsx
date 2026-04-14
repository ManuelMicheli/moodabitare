import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GUIDES, GUIDES_BY_SLUG } from "@/lib/guide-data";
import { buildFaqJsonLd } from "@/lib/seo/faq-data";
import { buildBreadcrumbJsonLd } from "@/lib/seo/breadcrumb-jsonld";
import { ProductFaq } from "@/components/products/ProductFaq";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FadeInView } from "@/components/animations/FadeInView";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = GUIDES_BY_SLUG[slug];
  if (!guide) return {};
  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    keywords: guide.keywords,
    alternates: {
      canonical: `https://www.moodabitare.it/guide/${guide.slug}`,
    },
    openGraph: {
      title: guide.metaTitle,
      description: guide.metaDescription,
      url: `https://www.moodabitare.it/guide/${guide.slug}`,
      type: "article",
      locale: "it_IT",
      siteName: "Mood Abitare",
      publishedTime: guide.datePublished,
      modifiedTime: guide.dateModified,
      authors: [guide.author],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.metaTitle,
      description: guide.metaDescription,
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = GUIDES_BY_SLUG[slug];
  if (!guide) notFound();

  const pageUrl = `https://www.moodabitare.it/guide/${guide.slug}`;

  // Article JSON-LD — entità principale della pagina
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl}#article`,
    headline: guide.title,
    description: guide.metaDescription,
    url: pageUrl,
    datePublished: guide.datePublished,
    dateModified: guide.dateModified,
    inLanguage: "it-IT",
    author: {
      "@type": "Organization",
      name: guide.author,
      url: "https://www.moodabitare.it",
    },
    publisher: {
      "@type": "Organization",
      name: "Mood Abitare",
      url: "https://www.moodabitare.it",
      logo: {
        "@type": "ImageObject",
        url: "https://www.moodabitare.it/logo/logo-mood-abitare-transparent-opt.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    keywords: guide.keywords.join(", "),
  };

  return (
    <main>
      <Script
        id="article-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumbJsonLd([
              { name: "Guide", url: "https://www.moodabitare.it/guide" },
              { name: guide.title, url: pageUrl },
            ])
          ),
        }}
      />
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd(guide.faqs)) }}
      />

      {/* Spacer header */}
      <div className="pt-20 sm:pt-24 lg:pt-28" />

      {/* Breadcrumb */}
      <div className="px-6 sm:px-10 lg:px-20 py-4">
        <Breadcrumb
          items={[
            { label: "Guide", href: "/guide" },
            { label: guide.title },
          ]}
        />
      </div>

      {/* Hero guida */}
      <section className="px-6 sm:px-10 lg:px-20 pt-8 sm:pt-14 lg:pt-20 pb-12 sm:pb-16 lg:pb-24 max-w-5xl mx-auto">
        <FadeInView>
          <p className="text-label text-bordeaux mb-6">{guide.eyebrow}</p>
        </FadeInView>
        <FadeInView delay={0.1}>
          <h1 className="font-display font-medium leading-[1.02] tracking-[-0.025em] text-black-deep text-4xl sm:text-5xl lg:text-7xl mb-8 sm:mb-10">
            {guide.title}
          </h1>
        </FadeInView>
        <FadeInView delay={0.2}>
          <p className="font-body text-lg sm:text-xl lg:text-2xl text-black-deep/80 leading-relaxed max-w-3xl">
            {guide.lead}
          </p>
        </FadeInView>
        <FadeInView delay={0.3}>
          <p className="font-ui text-xs sm:text-sm text-black-deep/50 mt-8 tracking-wide uppercase">
            Pubblicato il{" "}
            <time dateTime={guide.datePublished}>
              {new Date(guide.datePublished).toLocaleDateString("it-IT", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            {guide.dateModified !== guide.datePublished && (
              <>
                {" · Aggiornato il "}
                <time dateTime={guide.dateModified}>
                  {new Date(guide.dateModified).toLocaleDateString("it-IT", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </>
            )}
            {" · "}di {guide.author}
          </p>
        </FadeInView>
      </section>

      {/* Article body */}
      <article className="px-6 sm:px-10 lg:px-20 pb-16 sm:pb-24 lg:pb-32 max-w-4xl mx-auto">
        {guide.sections.map((section) => (
          <section key={section.heading} className="mb-16 sm:mb-20 lg:mb-24">
            <h2 className="font-display font-medium leading-[1.1] tracking-[-0.02em] text-black-deep text-2xl sm:text-3xl lg:text-4xl mb-6 sm:mb-8">
              {section.heading}
            </h2>
            {section.paragraphs.map((p, i) => (
              <p
                key={i}
                className="font-body text-base sm:text-lg text-black-deep/85 leading-relaxed mb-5"
              >
                {p}
              </p>
            ))}
            {section.bullets && (
              <ul className="mt-6 space-y-3">
                {section.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 font-body text-base sm:text-lg text-black-deep/85 leading-relaxed"
                  >
                    <span className="mt-2.5 w-2 h-2 rounded-full bg-bordeaux flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
            {section.table && (
              <div className="mt-8 overflow-x-auto">
                <table className="w-full text-left border-collapse font-ui text-sm sm:text-base">
                  <thead>
                    <tr className="border-b-2 border-black-deep">
                      {section.table.headers.map((h) => (
                        <th
                          key={h}
                          className="py-3 px-3 font-medium uppercase tracking-wide text-xs sm:text-sm text-black-deep"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.rows.map((row, ri) => (
                      <tr key={ri} className="border-b border-black-deep/15">
                        {row.map((cell, ci) => (
                          <td
                            key={ci}
                            className="py-3 px-3 text-black-deep/85"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        ))}
      </article>

      {/* FAQ visibili */}
      {guide.faqs.length > 0 && <ProductFaq faqs={guide.faqs} title="Domande frequenti" eyebrow="FAQ" />}

      {/* Related */}
      {guide.related && guide.related.length > 0 && (
        <section className="py-14 sm:py-20 lg:py-28 px-6 sm:px-10 lg:px-20 bg-black-deep text-white">
          <div className="max-w-5xl mx-auto">
            <p className="text-label text-white/40 mb-8">Approfondimenti correlati</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mb-10 sm:mb-14 leading-tight">
              Continua a esplorare
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {guide.related.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="group block border-t border-white/20 pt-6 hover:border-white transition-colors duration-300"
                >
                  <h3 className="font-ui text-lg sm:text-xl font-medium leading-snug mb-3 group-hover:text-bordeaux transition-colors">
                    {r.label}
                  </h3>
                  <p className="font-body text-sm sm:text-base text-white/65 leading-relaxed">
                    {r.description}
                  </p>
                  <span className="mt-4 inline-block font-ui text-xs uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">
                    Leggi →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
