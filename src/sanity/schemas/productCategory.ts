import { defineType, defineField } from "sanity";

export default defineType({
  name: "productCategory",
  title: "Categoria Prodotto",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nome",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "brand",
      title: "Brand Partner",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "macroCategoryId",
      title: "Macro Categoria",
      type: "string",
      options: {
        list: [
          { title: "Serramenti", value: "serramenti" },
          { title: "Porte", value: "porte" },
          { title: "Oscuranti & Sicurezza", value: "oscuranti-sicurezza" },
          { title: "Arredo Casa", value: "arredo-casa" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "shortDescription",
      title: "Descrizione Breve",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "description",
      title: "Descrizione Completa",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "heroImage",
      title: "Immagine Hero",
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
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Testo alternativo",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "features",
      title: "Caratteristiche",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "brandUrl",
      title: "Sito Brand",
      type: "url",
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
      title: "name",
      subtitle: "brand",
      media: "heroImage",
    },
  },
});
