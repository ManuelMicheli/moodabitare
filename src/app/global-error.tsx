"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="it">
      <body style={{ fontFamily: "system-ui, sans-serif", padding: "2rem", background: "#f5f5f0" }}>
        <div style={{ maxWidth: "600px", margin: "4rem auto", textAlign: "center" }}>
          <h1 style={{ fontSize: "1.5rem", color: "#2b2b2b", marginBottom: "1rem" }}>
            Si è verificato un errore
          </h1>
          <p style={{ color: "#6b6b6b", marginBottom: "2rem" }}>
            {error.message || "Errore imprevisto durante il caricamento della pagina."}
          </p>
          <button
            onClick={reset}
            style={{
              background: "#2b2b2b",
              color: "white",
              border: "none",
              padding: "0.75rem 2rem",
              cursor: "pointer",
              fontSize: "0.875rem",
              letterSpacing: "0.05em",
            }}
          >
            Riprova
          </button>
        </div>
      </body>
    </html>
  );
}
