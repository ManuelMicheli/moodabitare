"use client";

import { useState, useCallback, useEffect, Suspense } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { useIsMobile } from "@/hooks/useIsMobile";
import { cn } from "@/lib/utils";
import { ProductSheet } from "./ProductSheet";
import { FadeInView } from "@/components/animations/FadeInView";
import { DrawLine } from "@/components/animations/DrawLine";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { HoverTilt } from "@/components/animations/HoverTilt";
import type { GalleryImage } from "./HorizontalGallery";
import type { ProductDetail } from "@/lib/product-details";

const segmentColor: Record<string, string> = {
  Classic: "bg-white/75 text-black-deep/60 backdrop-blur-sm",
  Comfort: "bg-blue-50/80 text-blue-700 backdrop-blur-sm",
  Compact: "bg-sky-50/80 text-sky-700 backdrop-blur-sm",
  Premium: "bg-bordeaux/10 text-bordeaux backdrop-blur-sm",
  "Top di gamma": "bg-bordeaux/15 text-bordeaux backdrop-blur-sm",
  Design: "bg-amber-50/80 text-amber-700 backdrop-blur-sm",
  Scorrevoli: "bg-emerald-50/80 text-emerald-700 backdrop-blur-sm",
  "Passive House": "bg-green-50/80 text-green-700 backdrop-blur-sm",
  Sicurezza: "bg-red-50/80 text-red-700 backdrop-blur-sm",
};

function splitName(name: string): [string | null, string] {
  const idx = name.indexOf(" — ");
  if (idx === -1) return [null, name];
  return [name.slice(0, idx), name.slice(idx + 3)];
}

function ProductCard({
  image,
  detail,
  isMobile,
  onClick,
  cover,
}: {
  image: GalleryImage;
  detail?: ProductDetail;
  isMobile: boolean;
  onClick: () => void;
  cover?: boolean;
}) {
  const [, product] = splitName(image.name);
  const isPlaceholder = image.src.includes("placeholder");

  const cardContent = (
    <button type="button" onClick={onClick} className="group/card flex flex-col text-left w-full">
      <div
        className={cn(
          "relative w-full overflow-hidden",
          isMobile ? "aspect-[4/3] rounded-lg" : "aspect-[4/3] rounded-xl",
          isPlaceholder ? "bg-warm-gray/60" : cover ? "bg-neutral-100" : "bg-white"
        )}
      >
        {!isPlaceholder ? (
          <Image
            src={image.src}
            alt={product}
            fill
            className={cn(
              "transition-all duration-700 ease-out",
              "object-contain",
              cover ? "" : isMobile ? "p-4" : "p-6 lg:p-8",
              "group-hover/card:scale-[1.06]"
            )}
            sizes={isMobile ? "45vw" : "(max-width: 1024px) 30vw, 22vw"}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-ui text-[0.6rem] uppercase tracking-[0.2em] text-black-deep/30">Foto in arrivo</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black-deep/[0.04] via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-[inherit]" />
        {detail?.segment && (
          <span className={cn("absolute top-3 right-3 text-[0.5rem] sm:text-[0.55rem] font-ui font-semibold uppercase tracking-[0.14em] px-2.5 py-1 rounded-full", segmentColor[detail.segment] || "bg-white/80 text-black-deep/60 backdrop-blur-sm")}>
            {detail.segment}
          </span>
        )}
      </div>
      {/* Expanding line */}
      <div className={cn("mx-auto bg-bordeaux/40 group-hover/card:bg-bordeaux transition-all duration-500 ease-out rounded-full", isMobile ? "mt-2.5 h-[1.5px] w-6 group-hover/card:w-full" : "mt-4 h-[2px] w-8 group-hover/card:w-full")} />
      <div className={isMobile ? "mt-2.5 px-0.5" : "mt-4"}>
        <h3 className={cn("font-display font-semibold leading-tight tracking-tight text-black-deep/90 group-hover/card:text-black-deep transition-colors duration-300", isMobile ? "text-sm" : "text-base lg:text-lg")}>
          {product}
        </h3>
        {!isMobile && detail?.highlight && (
          <p className="mt-1.5 font-body text-[0.8rem] text-black-deep/70 leading-snug line-clamp-1 group-hover/card:text-black-deep transition-colors duration-300">
            {detail.highlight.split("—")[0].trim()}
          </p>
        )}
        {detail && (
          <div className="mt-2 flex items-center gap-1.5 overflow-hidden">
            <span className={cn("font-ui text-[0.6rem] font-semibold uppercase tracking-[0.12em] transition-all duration-400", isMobile ? "text-bordeaux/50" : "text-bordeaux/0 group-hover/card:text-bordeaux/70 translate-y-3 group-hover/card:translate-y-0")}>
              Scheda tecnica
            </span>
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cn("w-3 h-3 transition-all duration-400", isMobile ? "text-bordeaux/40" : "text-bordeaux/0 group-hover/card:text-bordeaux/50 translate-y-3 group-hover/card:translate-y-0 -translate-x-1 group-hover/card:translate-x-0")}>
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </div>
        )}
      </div>
    </button>
  );

  if (isMobile) return cardContent;
  return <HoverTilt maxTilt={4} scale={1.01} glare>{cardContent}</HoverTilt>;
}

interface ProductGridCatalogProps {
  images: GalleryImage[];
  details?: Record<string, ProductDetail>;
  brandLabel: string;
  cover?: boolean;
}

function ProductGridCatalogInner({
  images,
  details,
  brandLabel,
  cover,
}: ProductGridCatalogProps) {
  const isMobile = useIsMobile(640);
  const searchParams = useSearchParams();

  const [selected, setSelected] = useState<GalleryImage | null>(null);

  useEffect(() => {
    const prodotto = searchParams.get("prodotto");
    if (prodotto && details) {
      const match = images.find((img) => img.name === prodotto);
      if (match && details[match.name]) {
        setTimeout(() => setSelected(match), 300);
      }
    }
  }, [searchParams, images, details]);

  const handleClick = useCallback(
    (img: GalleryImage) => {
      if (details?.[img.name]) setSelected(img);
    },
    [details]
  );
  const handleClose = useCallback(() => setSelected(null), []);
  const detail = selected && details ? details[selected.name] ?? null : null;

  return (
    <section className="py-20 sm:py-28 lg:py-36">
      <div className="px-6 sm:px-10 lg:px-20">

        <div className="flex items-center gap-4 mb-6">
          <DrawLine className="!w-12 !bg-bordeaux/40" duration={0.6} />
          <FadeInView delay={0.2}>
            <span className="font-ui text-[0.65rem] sm:text-[0.7rem] uppercase tracking-[0.25em] text-bordeaux/70 font-semibold">
              {brandLabel}
            </span>
          </FadeInView>
        </div>

        <DrawLine className="mt-6 !bg-black-deep/[0.06]" delay={0.4} />
        <FadeInView delay={0.5}>
          <div className="mt-8 flex items-center gap-8 sm:gap-12 lg:gap-16">
            <div className="flex items-baseline gap-2">
              <AnimatedCounter
                target={images.length}
                className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-black-deep tracking-tight"
                duration={1.8}
              />
              <span className="font-ui text-[0.55rem] sm:text-[0.6rem] uppercase tracking-[0.15em] text-black-deep/30 font-medium">
                Modelli
              </span>
            </div>
          </div>
        </FadeInView>

        <div
          className={cn(
            "mt-10 sm:mt-14 grid gap-6 sm:gap-8 lg:gap-10",
            isMobile
              ? "grid-cols-2"
              : "grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          )}
        >
          {images.map((img, i) => (
            <motion.div
              key={img.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.45,
                delay: i * 0.05,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <ProductCard
                image={img}
                detail={details?.[img.name]}
                isMobile={isMobile}
                onClick={() => handleClick(img)}
                cover={cover}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <ProductSheet detail={detail} imageSrc={selected?.src ?? ""} onClose={handleClose} />
    </section>
  );
}

export function ProductGridCatalog(props: ProductGridCatalogProps) {
  return (
    <Suspense>
      <ProductGridCatalogInner {...props} />
    </Suspense>
  );
}
