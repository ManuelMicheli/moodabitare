import type { MetadataRoute } from "next";

/**
 * robots.txt configuration.
 * Esplicita permessi per bot AI (GPTBot, ClaudeBot, PerplexityBot, Google-Extended)
 * così che Mood Abitare sia citabile nelle risposte di ChatGPT, Claude, Perplexity, Gemini.
 * Disallow pagine interne (studio Sanity, API, pagine errore).
 */
export default function robots(): MetadataRoute.Robots {
  const commonDisallow = ["/studio", "/studio/", "/api/", "/404", "/500"];

  return {
    rules: [
      // Bot generici (Google, Bing, Yandex, DuckDuckGo, ecc.)
      {
        userAgent: "*",
        allow: "/",
        disallow: commonDisallow,
      },
      // Google: opt-in per citabilità in SGE/Bard/Gemini
      {
        userAgent: "Google-Extended",
        allow: "/",
        disallow: commonDisallow,
      },
      // OpenAI: ChatGPT browsing + Plugins
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: commonDisallow,
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
        disallow: commonDisallow,
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
        disallow: commonDisallow,
      },
      // Anthropic Claude
      {
        userAgent: "ClaudeBot",
        allow: "/",
        disallow: commonDisallow,
      },
      {
        userAgent: "Claude-Web",
        allow: "/",
        disallow: commonDisallow,
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
        disallow: commonDisallow,
      },
      // Perplexity
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: commonDisallow,
      },
      // Apple Intelligence / Siri
      {
        userAgent: "Applebot-Extended",
        allow: "/",
        disallow: commonDisallow,
      },
      // ByteDance (Doubao / Tongyi)
      {
        userAgent: "Bytespider",
        allow: "/",
        disallow: commonDisallow,
      },
      // Common Crawl (usato per training di molti LLM)
      {
        userAgent: "CCBot",
        allow: "/",
        disallow: commonDisallow,
      },
      // Meta AI
      {
        userAgent: "Meta-ExternalAgent",
        allow: "/",
        disallow: commonDisallow,
      },
      // Cohere
      {
        userAgent: "cohere-ai",
        allow: "/",
        disallow: commonDisallow,
      },
    ],
    sitemap: [
      "https://www.moodabitare.it/sitemap.xml",
      "https://www.moodabitare.it/image-sitemap.xml",
      "https://www.moodabitare.it/video-sitemap.xml",
    ],
    host: "https://www.moodabitare.it",
  };
}
