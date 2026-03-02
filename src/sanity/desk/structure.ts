import type { StructureBuilder } from "sanity/structure";

export const structure = (S: StructureBuilder) =>
  S.list()
    .title("Contenuti")
    .items([
      // Singleton: Site Settings
      S.listItem()
        .title("Impostazioni Sito")
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("siteSettings")
        ),
      S.divider(),
      // Hero Slides
      S.listItem()
        .title("Hero Slides")
        .child(S.documentTypeList("heroSlide").title("Hero Slides")),
      S.divider(),
      // Products
      S.listItem()
        .title("Categorie Prodotto")
        .child(
          S.documentTypeList("productCategory").title("Categorie Prodotto")
        ),
      S.listItem()
        .title("Prodotti")
        .child(S.documentTypeList("product").title("Prodotti")),
      S.divider(),
      // Services
      S.listItem()
        .title("Servizi")
        .child(S.documentTypeList("service").title("Servizi")),
      // Brand Partners
      S.listItem()
        .title("Brand Partner")
        .child(S.documentTypeList("brandPartner").title("Brand Partner")),
      S.divider(),
      // Projects
      S.listItem()
        .title("Progetti")
        .child(S.documentTypeList("project").title("Progetti")),
      // Testimonials
      S.listItem()
        .title("Testimonianze")
        .child(S.documentTypeList("testimonial").title("Testimonianze")),
      // Blog
      S.listItem()
        .title("Blog")
        .child(S.documentTypeList("blogPost").title("Articoli Blog")),
    ]);
