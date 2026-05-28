import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { R2_CDN } from "@/lib/constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Warm the showroom hero video into HTTP cache on navigation intent (hover/tap),
// so arriving on /showroom shows it immediately instead of buffering from scratch.
let showroomVideoWarmed = false;
export function warmShowroomVideo() {
  if (showroomVideoWarmed || typeof window === "undefined") return;
  showroomVideoWarmed = true;
  const v = document.createElement("video");
  v.preload = "auto";
  v.muted = true;
  v.src = `${R2_CDN}/videos/hero-home-1080.mp4`;
  v.load();
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}
