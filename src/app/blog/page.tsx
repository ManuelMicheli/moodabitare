import type { Metadata } from "next";
import Link from "next/link";
import { FadeInView } from "@/components/animations/FadeInView";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

export const metadata: Metadata = {
  title: "Blog",
  description: "News e approfondimenti su serramenti, ristrutturazioni, efficienza energetica e design.",
};

const placeholderPosts = [
  { slug: "detrazioni-fiscali-serramenti-2024", title: "Detrazioni fiscali serramenti: guida completa", excerpt: "Tutto quello che devi sapere sulle detrazioni fiscali del 50% per la sostituzione dei serramenti.", category: "Efficienza Energetica", date: "15 Gennaio 2024" },
  { slug: "come-scegliere-finestre-pvc", title: "Come scegliere le finestre in PVC", excerpt: "I fattori da considerare nella scelta delle finestre in PVC per la tua casa.", category: "Serramenti", date: "8 Dicembre 2023" },
  { slug: "tendenze-porte-interne", title: "Le tendenze per le porte interne", excerpt: "Design minimal, finiture naturali e soluzioni a filo muro: le novità per le porte interne.", category: "Design", date: "22 Novembre 2023" },
];

export default function Blog() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end bg-black-deep text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black-deep/90 via-transparent to-transparent" />
        <div className="relative z-10 w-full pb-20 lg:pb-28 px-6 sm:px-10 lg:px-20">
          <FadeInView>
            <p className="text-label text-white/40 mb-6">Blog</p>
            <h1 className="font-section-title max-w-3xl">
              News e approfondimenti
            </h1>
          </FadeInView>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-32 lg:py-44">
        <div className="px-6 sm:px-10 lg:px-20">
          <StaggerContainer className="grid grid-cols-1 gap-16 lg:grid-cols-3 lg:gap-10">
            {placeholderPosts.map((post) => (
              <StaggerItem key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="aspect-[16/10] bg-warm-gray/10 mb-8 overflow-hidden">
                    <div className="h-full w-full bg-warm-gray/5 group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <span className="text-label text-black-deep/25">
                    {post.category}
                  </span>
                  <h3 className="mt-3 font-display text-xl lg:text-2xl font-bold text-black-deep tracking-tight group-hover:text-black-deep/60 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="mt-4 text-caption text-black-deep/35">
                    {post.excerpt}
                  </p>
                  <span className="inline-block mt-6 text-caption text-black-deep/25">
                    {post.date}
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </main>
  );
}
