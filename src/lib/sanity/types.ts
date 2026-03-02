import type { PortableTextBlock } from "@portabletext/types";

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
  hotspot?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}

export interface ProductCategory {
  _id: string;
  _type: "productCategory";
  name: string;
  slug: { current: string };
  brand: string;
  macroCategoryId: string;
  description?: PortableTextBlock[];
  shortDescription?: string;
  heroImage?: SanityImage;
  gallery?: SanityImage[];
  features?: string[];
  brandUrl?: string;
  seoTitle?: string;
  seoDescription?: string;
}

export interface Product {
  _id: string;
  _type: "product";
  name: string;
  slug: { current: string };
  category: { _ref: string };
  description?: PortableTextBlock[];
  image?: SanityImage;
  features?: string[];
  isFeatured?: boolean;
}

export interface Project {
  _id: string;
  _type: "project";
  title: string;
  slug: { current: string };
  description?: PortableTextBlock[];
  shortDescription?: string;
  category?: string;
  location?: string;
  year?: string;
  mainImage?: SanityImage;
  gallery?: SanityImage[];
  products?: string[];
  isFeatured?: boolean;
}

export interface Testimonial {
  _id: string;
  _type: "testimonial";
  name: string;
  location?: string;
  text: string;
  rating?: number;
  projectType?: string;
  date?: string;
  isFeatured?: boolean;
}

export interface BlogPost {
  _id: string;
  _type: "blogPost";
  title: string;
  slug: { current: string };
  excerpt?: string;
  body?: PortableTextBlock[];
  mainImage?: SanityImage;
  publishedAt?: string;
  author?: string;
  categories?: string[];
  seoTitle?: string;
  seoDescription?: string;
}

export interface Service {
  _id: string;
  _type: "service";
  title: string;
  description: string;
  icon?: string;
  order?: number;
}

export interface BrandPartner {
  _id: string;
  _type: "brandPartner";
  name: string;
  category: string;
  logo?: SanityImage;
  url?: string;
  order?: number;
}

export interface HeroSlide {
  _id: string;
  _type: "heroSlide";
  headline: string;
  subheadline?: string;
  ctaText?: string;
  ctaLink?: string;
  image?: SanityImage;
  order?: number;
}

export interface SiteSettings {
  _id: string;
  _type: "siteSettings";
  title?: string;
  description?: string;
  logo?: SanityImage;
  logoWhite?: SanityImage;
  ogImage?: SanityImage;
  phone?: string;
  whatsapp?: string;
  email?: string;
  address?: string;
}
