import { defineType, defineField } from "sanity";

export default defineType({
  name: "blogPost",
  title: "Articolo Blog",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titolo",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Estratto",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "body",
      title: "Contenuto",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Testo alternativo",
            },
            {
              name: "caption",
              type: "string",
              title: "Didascalia",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "mainImage",
      title: "Immagine Principale",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Testo alternativo",
        },
      ],
    }),
    defineField({
      name: "publishedAt",
      title: "Data Pubblicazione",
      type: "datetime",
    }),
    defineField({
      name: "author",
      title: "Autore",
      type: "string",
    }),
    defineField({
      name: "categories",
      title: "Categorie",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Serramenti", value: "serramenti" },
          { title: "Ristrutturazioni", value: "ristrutturazioni" },
          { title: "Efficienza Energetica", value: "efficienza-energetica" },
          { title: "Design", value: "design" },
          { title: "Novità", value: "novita" },
        ],
      },
    }),
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 3,
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
  },
  orderings: [
    {
      title: "Data pubblicazione",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
});
