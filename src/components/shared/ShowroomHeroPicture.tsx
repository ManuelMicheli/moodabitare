import { preload } from "react-dom";

// Pre-generated variants in /public/moodabitarereal/hero (AVIF + WebP).
// Served as static files instead of through the Next image optimizer so the
// LCP image never waits on a cold on-the-fly AVIF encode after a deploy.
const BASE = "/moodabitarereal/hero/facciata";
const WIDTHS = [640, 960, 1280, 1920, 2560, 3840];

const srcSet = (ext: "avif" | "webp") =>
  WIDTHS.map((w) => `${BASE}-${w}.${ext} ${w}w`).join(", ");

interface ShowroomHeroPictureProps {
  alt: string;
  className?: string;
  sizes?: string;
}

export function ShowroomHeroPicture({
  alt,
  className,
  sizes = "100vw",
}: ShowroomHeroPictureProps) {
  preload(`${BASE}-1920.avif`, {
    as: "image",
    type: "image/avif",
    imageSrcSet: srcSet("avif"),
    imageSizes: sizes,
    fetchPriority: "high",
  });

  return (
    <picture>
      <source type="image/avif" srcSet={srcSet("avif")} sizes={sizes} />
      <source type="image/webp" srcSet={srcSet("webp")} sizes={sizes} />
      <img
        src={`${BASE}-1920.jpg`}
        alt={alt}
        width={3840}
        height={2160}
        fetchPriority="high"
        loading="eager"
        decoding="async"
        className={className}
      />
    </picture>
  );
}
