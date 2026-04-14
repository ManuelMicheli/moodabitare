import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  phone: z.string().max(30).optional(),
  email: z.string().email().max(254),
  subject: z.string().max(200).optional(),
  message: z.string().max(5000).optional(),
  privacy: z.literal(true),
});

/** Escape HTML entities to prevent injection in email templates */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = contactSchema.parse(body);

    // Escape all user input for safe HTML embedding
    const safeName = escapeHtml(data.name);
    const safeEmail = escapeHtml(data.email);
    const safePhone = data.phone ? escapeHtml(data.phone) : "";
    const safeSubject = data.subject ? escapeHtml(data.subject) : "";
    const safeMessage = data.message
      ? escapeHtml(data.message).replace(/\n/g, "<br/>")
      : "";

    // If RESEND_API_KEY is configured, send email
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: "Mood Abitare <noreply@moodabitare.it>",
        to: "info@moodabitare.it",
        replyTo: data.email,
        subject: data.subject
          ? `[Sito Web] ${safeSubject}`
          : `[Sito Web] Richiesta da ${safeName}`,
        html: `
          <h2>Nuova richiesta dal sito web</h2>
          <p><strong>Nome:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          ${safePhone ? `<p><strong>Telefono:</strong> ${safePhone}</p>` : ""}
          ${safeSubject ? `<p><strong>Oggetto:</strong> ${safeSubject}</p>` : ""}
          ${safeMessage ? `<p><strong>Messaggio:</strong><br/>${safeMessage}</p>` : ""}
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Dati non validi" },
        { status: 400 }
      );
    }
    console.error("Contact form error:", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json(
      { error: "Errore interno del server" },
      { status: 500 }
    );
  }
}
