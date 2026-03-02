import { defineType, defineField } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Impostazioni Sito",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titolo Sito",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Descrizione Sito",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Testo alternativo",
        },
      ],
    }),
    defineField({
      name: "logoWhite",
      title: "Logo (versione bianca)",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Testo alternativo",
        },
      ],
    }),
    defineField({
      name: "ogImage",
      title: "Immagine Open Graph",
      type: "image",
    }),
    defineField({
      name: "phone",
      title: "Telefono",
      type: "string",
    }),
    defineField({
      name: "whatsapp",
      title: "WhatsApp",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Indirizzo",
      type: "string",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Impostazioni Sito" };
    },
  },
});
