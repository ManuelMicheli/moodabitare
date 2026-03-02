import type { Metadata } from "next";
import Link from "next/link";
import { FadeInView } from "@/components/animations/FadeInView";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const title = slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  return (
    <main>
      <article>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-end bg-black-deep text-white">
          <div className="relative z-10 w-full pb-20 lg:pb-28 px-6 sm:px-10 lg:px-20">
            <FadeInView>
              <Link href="/blog" className="inline-flex items-center gap-2 text-label text-white/30 hover:text-white/60 transition-colors mb-8">
                ← Blog
              </Link>
              <span className="block text-label text-white/25 mb-4">
                Blog
              </span>
              <h1 className="font-section-title max-w-3xl">
                {title}
              </h1>
              <p className="mt-6 text-caption text-white/25">
                15 Gennaio 2024 — Mood Abitare
              </p>
            </FadeInView>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 lg:py-28">
          <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-20">
            <FadeInView>
              <div className="space-y-6 text-caption text-black-deep/45 leading-[1.8]">
                <p>Contenuto dell&apos;articolo — verrà caricato da Sanity CMS una volta configurato il progetto.</p>
                <p>Questo è un placeholder per l&apos;articolo &ldquo;{title}&rdquo;.</p>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 border-t border-black/5">
          <div className="px-6 sm:px-10 lg:px-20 text-center">
            <FadeInView>
              <h2 className="font-display text-2xl font-bold text-black-deep tracking-tight">
                Hai domande sui nostri prodotti?
              </h2>
              <a href="/contatti" className="inline-block mt-8 text-button bg-black-deep text-white px-8 py-4 hover:bg-black-soft transition-colors">
                Contattaci
              </a>
            </FadeInView>
          </div>
        </section>
      </article>
    </main>
  );
}
