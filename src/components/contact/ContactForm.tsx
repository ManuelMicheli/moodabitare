"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Il nome è obbligatorio"),
  phone: z.string().optional(),
  email: z.string().email("Inserisci un indirizzo email valido"),
  subject: z.string().optional(),
  message: z.string().optional(),
  privacy: z.literal(true, { message: "Devi accettare la privacy policy" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Errore nell'invio");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="py-16 text-center">
        <h3 className="font-display text-2xl font-medium text-black-deep mb-3">
          Messaggio inviato
        </h3>
        <p className="text-caption text-black-deep/40">
          Ti risponderemo il prima possibile.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-label text-black-deep/30 mb-3">
            Nome *
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            className={cn(
              "w-full border-0 border-b px-0 py-3 text-caption text-black-deep bg-transparent outline-none transition-colors focus:border-black-deep",
              errors.name ? "border-red-400" : "border-black/10"
            )}
            placeholder="Il tuo nome"
          />
          {errors.name && <p className="mt-2 text-caption text-red-400">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-label text-black-deep/30 mb-3">
            Telefono
          </label>
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            className="w-full border-0 border-b border-black/10 px-0 py-3 text-caption text-black-deep bg-transparent outline-none transition-colors focus:border-black-deep"
            placeholder="Il tuo numero"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-label text-black-deep/30 mb-3">
          Email *
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className={cn(
            "w-full border-0 border-b px-0 py-3 text-caption text-black-deep bg-transparent outline-none transition-colors focus:border-black-deep",
            errors.email ? "border-red-400" : "border-black/10"
          )}
          placeholder="La tua email"
        />
        {errors.email && <p className="mt-2 text-caption text-red-400">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="subject" className="block text-label text-black-deep/30 mb-3">
          Oggetto
        </label>
        <input
          id="subject"
          type="text"
          {...register("subject")}
          className="w-full border-0 border-b border-black/10 px-0 py-3 text-caption text-black-deep bg-transparent outline-none transition-colors focus:border-black-deep"
          placeholder="Oggetto del messaggio"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-label text-black-deep/30 mb-3">
          Messaggio
        </label>
        <textarea
          id="message"
          rows={4}
          {...register("message")}
          className="w-full border-0 border-b border-black/10 px-0 py-3 text-caption text-black-deep bg-transparent outline-none transition-colors focus:border-black-deep resize-none"
          placeholder="Scrivi il tuo messaggio..."
        />
      </div>

      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" {...register("privacy")} className="mt-0.5 h-4 w-4 accent-black" />
          <span className={cn("text-caption text-black-deep/35", errors.privacy && "text-red-400")}>
            Dichiaro di aver letto l&apos;informativa sulla{" "}
            <a href="/privacy-policy" className="text-black-deep/60 underline" target="_blank" rel="noopener noreferrer">privacy</a>{" "}
            e autorizzo il trattamento dei miei dati personali.
          </span>
        </label>
        {errors.privacy && <p className="mt-2 text-caption text-red-400">{errors.privacy.message}</p>}
      </div>

      {status === "error" && (
        <p className="text-caption text-red-400">Si è verificato un errore. Riprova o contattaci telefonicamente.</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="text-button bg-black-deep text-white px-8 py-4 hover:bg-black-soft transition-colors disabled:opacity-50"
      >
        {status === "sending" ? "Invio in corso..." : "Invia messaggio"}
      </button>
    </form>
  );
}
