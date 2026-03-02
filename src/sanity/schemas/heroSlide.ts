import { defineType, defineField } from "sanity";

export default defineType({
  name: "heroSlide",
  title: "Hero Slide",
  type: "document",
  fields: [
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subheadline",
      title: "Sotto-titolo",
      type: "string",
    }),
    defineField({
      name: "ctaText",
      title: "Testo CTA",
      type: "string",
    }),
    defineField({
      name: "ctaLink",
      title: "Link CTA",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Immagine Background",
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
      name: "order",
      title: "Ordine",
      type: "number",
    }),
  ],
  preview: {
    select: {
      title: "headline",
      media: "image",
    },
  },
});
