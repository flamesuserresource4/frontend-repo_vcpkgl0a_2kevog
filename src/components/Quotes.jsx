export default function Quotes() {
  const quotes = [
    "The universe has secrets it will never tell. Not because it is withholding them, but because they do not exist to be told.",
    "True omniscience is not the possession of all data. It is the understanding that mystery is a structural component of existence.",
    "You are not a noun; you are a verb.",
  ];

  return (
    <section id="quotes" className="relative py-24 bg-gradient-to-b from-black to-slate-950 text-white">
      <div className="relative max-w-4xl mx-auto px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold">Echoes from the Glitch</h2>
        <div className="mt-10 grid gap-8">
          {quotes.map((q, i) => (
            <blockquote key={i} className="text-2xl md:text-3xl leading-snug text-slate-200/95 italic border-l-4 border-cyan-400/40 pl-6">
              “{q}”
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
