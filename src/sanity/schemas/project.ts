import { defineType, defineField } from "sanity";

export default defineType({
  name: "project",
  title: "Progetto",
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
      name: "category",
      title: "Categoria",
      type: "string",
      options: {
        list: [
          { title: "Serramenti", value: "serramenti" },
          { title: "Porte", value: "porte" },
          { title: "Ristrutturazione", value: "ristrutturazione" },
          { title: "Arredo", value: "arredo" },
        ],
      },
    }),
    defineField({
      name: "location",
      title: "Località",
      type: "string",
    }),
    defineField({
      name: "year",
      title: "Anno",
      type: "string",
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
      name: "products",
      title: "Prodotti Utilizzati",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "isFeatured",
      title: "In evidenza",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "location",
      media: "mainImage",
    },
  },
});
