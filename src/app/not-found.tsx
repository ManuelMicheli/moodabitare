export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <div className="text-center px-6">
        <span className="font-display text-[clamp(6rem,15vw,12rem)] font-bold text-black-deep/5 leading-none">
          404
        </span>
        <h1 className="mt-4 font-display text-2xl font-medium text-black-deep tracking-tight">
          Pagina non trovata
        </h1>
        <p className="mt-4 text-caption text-black-deep/35 max-w-sm mx-auto">
          La pagina che stai cercando non esiste o è stata spostata.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <a href="/" className="text-button bg-black-deep text-white px-8 py-4 hover:bg-black-soft transition-colors">
            Torna alla home
          </a>
          <a href="/contatti" className="text-button text-black-deep border-b border-black-deep/20 pb-1 hover:border-black-deep transition-colors">
            Contattaci
          </a>
        </div>
      </div>
    </main>
  );
}
