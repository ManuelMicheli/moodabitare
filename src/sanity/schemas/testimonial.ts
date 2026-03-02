import { defineType, defineField } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonianza",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nome Cliente",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Località",
      type: "string",
    }),
    defineField({
      name: "text",
      title: "Testo",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "rating",
      title: "Valutazione (1-5)",
      type: "number",
      validation: (Rule) => Rule.min(1).max(5),
    }),
    defineField({
      name: "projectType",
      title: "Tipo di Lavoro",
      type: "string",
    }),
    defineField({
      name: "date",
      title: "Data",
      type: "date",
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
      title: "name",
      subtitle: "projectType",
    },
  },
});
