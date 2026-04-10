import type { VideoSources2, VideoSources3 } from "@/types/video";

/**
 * Genera l'oggetto sources completo dato il base path e il nome del video.
 * Assume la naming convention dello script di encoding.
 */
export function buildVideoSources(
  basePath: string,
  name: string,
  include4k?: boolean
): VideoSources3;
export function buildVideoSources(
  basePath: string,
  name: string,
  include4k: false
): VideoSources2;
export function buildVideoSources(
  basePath: string,
  name: string,
  include4k = true
): VideoSources2 | VideoSources3 {
  const base = `${basePath}/${name}`;

  if (include4k) {
    return {
      mp4: {
        sd: `${base}/${name}-720.mp4`,
        hd: `${base}/${name}-1080.mp4`,
        uhd: `${base}/${name}-4k.mp4`,
      },
      webm: {
        sd: `${base}/${name}-720.webm`,
        hd: `${base}/${name}-1080.webm`,
        uhd: `${base}/${name}-4k.webm`,
      },
    };
  }

  return {
    mp4: {
      sd: `${base}/${name}-720.mp4`,
      hd: `${base}/${name}-1080.mp4`,
    },
    webm: {
      sd: `${base}/${name}-720.webm`,
      hd: `${base}/${name}-1080.webm`,
    },
  };
}

/**
 * Genera il path del poster.
 */
export function buildPosterPath(basePath: string, name: string): string {
  return `${basePath}/${name}/${name}-poster.webp`;
}
