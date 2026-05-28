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

const fieldBase =
  "peer w-full border-b bg-transparent px-0 py-3.5 text-caption text-black-deep placeholder:text-black-deep/30 outline-none transition-colors duration-300";

const labelBase =
  "mb-2.5 block text-label text-black-deep transition-colors duration-300 group-focus-within:text-bordeaux";

// Bordeaux accent line that draws in on focus
function FocusLine() {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute -bottom-px left-0 h-[1.5px] w-full origin-left scale-x-0 bg-bordeaux transition-transform duration-500 ease-out peer-focus:scale-x-100"
    />
  );
}

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
      <div className="flex flex-col items-center justify-center rounded-sm border border-black/5 bg-cream/60 px-8 py-20 text-center">
        <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-bordeaux/10 text-bordeaux">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </span>
        <h3 className="font-display text-2xl font-medium text-black-deep">Messaggio inviato</h3>
        <p className="mt-3 max-w-sm text-caption text-black-deep/70">
          Grazie per averci contattato. Ti risponderemo il prima possibile.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10" noValidate>
      <div className="grid gap-8 sm:grid-cols-2 sm:gap-10">
        <div className="group relative">
          <label htmlFor="name" className={labelBase}>
            Nome <span className="text-bordeaux">*</span>
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            className={cn(fieldBase, errors.name ? "border-red-400" : "border-black/15")}
            placeholder="Il tuo nome"
          />
          <FocusLine />
          {errors.name && <p className="mt-2 text-caption text-red-400">{errors.name.message}</p>}
        </div>
        <div className="group relative">
          <label htmlFor="phone" className={labelBase}>
            Telefono
          </label>
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            className={cn(fieldBase, "border-black/15")}
            placeholder="Il tuo numero"
          />
          <FocusLine />
        </div>
      </div>

      <div className="group relative">
        <label htmlFor="email" className={labelBase}>
          Email <span className="text-bordeaux">*</span>
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className={cn(fieldBase, errors.email ? "border-red-400" : "border-black/15")}
          placeholder="La tua email"
        />
        <FocusLine />
        {errors.email && <p className="mt-2 text-caption text-red-400">{errors.email.message}</p>}
      </div>

      <div className="group relative">
        <label htmlFor="subject" className={labelBase}>
          Oggetto
        </label>
        <input
          id="subject"
          type="text"
          {...register("subject")}
          className={cn(fieldBase, "border-black/15")}
          placeholder="Oggetto del messaggio"
        />
        <FocusLine />
      </div>

      <div className="group relative">
        <label htmlFor="message" className={labelBase}>
          Messaggio
        </label>
        <textarea
          id="message"
          rows={4}
          {...register("message")}
          className={cn(fieldBase, "resize-none border-black/15")}
          placeholder="Raccontaci il tuo progetto..."
        />
        <FocusLine />
      </div>

      <div>
        <label className="flex cursor-pointer items-start gap-3.5">
          <input
            type="checkbox"
            {...register("privacy")}
            className={cn(
              "mt-0.5 h-5 w-5 shrink-0 appearance-none rounded-[3px] border bg-transparent transition-all duration-200",
              "checked:border-bordeaux checked:bg-bordeaux",
              "bg-[length:14px_14px] bg-center bg-no-repeat checked:bg-[url('data:image/svg+xml;utf8,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2024%2024%22%20fill=%22none%22%20stroke=%22white%22%20stroke-width=%223%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%3E%3Cpath%20d=%22M20%206%209%2017l-5-5%22/%3E%3C/svg%3E')]",
              errors.privacy ? "border-red-400" : "border-black/25"
            )}
          />
          <span className={cn("text-caption leading-relaxed text-black-deep/60", errors.privacy && "text-red-400")}>
            Dichiaro di aver letto l&apos;informativa sulla{" "}
            <a href="/privacy-policy" className="text-black-deep underline decoration-bordeaux/40 underline-offset-2 transition-colors hover:text-bordeaux" target="_blank" rel="noopener noreferrer">
              privacy
            </a>{" "}
            e autorizzo il trattamento dei miei dati personali.
          </span>
        </label>
        {errors.privacy && <p className="mt-2 text-caption text-red-400">{errors.privacy.message}</p>}
      </div>

      {status === "error" && (
        <p className="rounded-sm border border-red-400/30 bg-red-50 px-4 py-3 text-caption text-red-500">
          Si è verificato un errore. Riprova o contattaci telefonicamente.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-press group/btn inline-flex w-full items-center justify-center gap-3 bg-bordeaux px-10 py-4 text-button text-cream transition-colors hover:bg-bordeaux-dark disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? (
          <>
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden>
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
              <path className="opacity-90" fill="currentColor" d="M4 12a8 8 0 0 1 8-8v3a5 5 0 0 0-5 5H4z" />
            </svg>
            Invio in corso
          </>
        ) : (
          <>
            Invia messaggio
            <svg className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
