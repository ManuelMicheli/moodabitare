import { client } from "./client";
import type {
  ProductCategory,
  Project,
  Testimonial,
  BlogPost,
  Service,
  BrandPartner,
  HeroSlide,
  SiteSettings,
} from "./types";

// ── Site Settings ──
export async function getSiteSettings(): Promise<SiteSettings | null> {
  return client.fetch(
    `*[_type == "siteSettings"][0]`,
    {},
    { next: { revalidate: 3600 } }
  );
}

// ── Hero Slides ──
export async function getHeroSlides(): Promise<HeroSlide[]> {
  return client.fetch(
    `*[_type == "heroSlide"] | order(order asc)`,
    {},
    { next: { revalidate: 3600 } }
  );
}

// ── Product Categories ──
export async function getAllProductCategories(): Promise<ProductCategory[]> {
  return client.fetch(
    `*[_type == "productCategory"] | order(name asc)`,
    {},
    { next: { revalidate: 3600 } }
  );
}

export async function getProductCategoryBySlug(
  slug: string
): Promise<ProductCategory | null> {
  return client.fetch(
    `*[_type == "productCategory" && slug.current == $slug][0]`,
    { slug },
    { next: { revalidate: 3600 } }
  );
}

export async function getProductCategorySlugs(): Promise<
  { slug: { current: string } }[]
> {
  return client.fetch(
    `*[_type == "productCategory"]{ slug }`,
    {},
    { next: { revalidate: 3600 } }
  );
}

// ── Projects ──
export async function getAllProjects(): Promise<Project[]> {
  return client.fetch(
    `*[_type == "project"] | order(_createdAt desc)`,
    {},
    { next: { revalidate: 3600 } }
  );
}

export async function getFeaturedProjects(): Promise<Project[]> {
  return client.fetch(
    `*[_type == "project" && isFeatured == true] | order(_createdAt desc)[0...6]`,
    {},
    { next: { revalidate: 3600 } }
  );
}

// ── Testimonials ──
export async function getAllTestimonials(): Promise<Testimonial[]> {
  return client.fetch(
    `*[_type == "testimonial"] | order(_createdAt desc)`,
    {},
    { next: { revalidate: 3600 } }
  );
}

export async function getFeaturedTestimonials(): Promise<Testimonial[]> {
  return client.fetch(
    `*[_type == "testimonial" && isFeatured == true] | order(_createdAt desc)[0...5]`,
    {},
    { next: { revalidate: 3600 } }
  );
}

// ── Blog ──
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  return client.fetch(
    `*[_type == "blogPost"] | order(publishedAt desc)`,
    {},
    { next: { revalidate: 3600 } }
  );
}

export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPost | null> {
  return client.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0]`,
    { slug },
    { next: { revalidate: 3600 } }
  );
}

export async function getBlogPostSlugs(): Promise<
  { slug: { current: string } }[]
> {
  return client.fetch(
    `*[_type == "blogPost"]{ slug }`,
    {},
    { next: { revalidate: 3600 } }
  );
}

// ── Services ──
export async function getAllServices(): Promise<Service[]> {
  return client.fetch(
    `*[_type == "service"] | order(order asc)`,
    {},
    { next: { revalidate: 3600 } }
  );
}

// ── Brand Partners ──
export async function getAllBrandPartners(): Promise<BrandPartner[]> {
  return client.fetch(
    `*[_type == "brandPartner"] | order(order asc)`,
    {},
    { next: { revalidate: 3600 } }
  );
}
