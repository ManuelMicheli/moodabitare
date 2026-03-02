import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  phone: z.string().optional(),
  email: z.string().email(),
  subject: z.string().optional(),
  message: z.string().optional(),
  privacy: z.literal(true),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = contactSchema.parse(body);

    // If RESEND_API_KEY is configured, send email
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: "Mood Abitare <noreply@moodabitare.it>",
        to: "info@moodabitare.it",
        replyTo: data.email,
        subject: data.subject
          ? `[Sito Web] ${data.subject}`
          : `[Sito Web] Richiesta da ${data.name}`,
        html: `
          <h2>Nuova richiesta dal sito web</h2>
          <p><strong>Nome:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          ${data.phone ? `<p><strong>Telefono:</strong> ${data.phone}</p>` : ""}
          ${data.subject ? `<p><strong>Oggetto:</strong> ${data.subject}</p>` : ""}
          ${data.message ? `<p><strong>Messaggio:</strong><br/>${data.message}</p>` : ""}
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Dati non validi", details: error.issues },
        { status: 400 }
      );
    }
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Errore interno del server" },
      { status: 500 }
    );
  }
}
