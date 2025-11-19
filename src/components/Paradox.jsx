import { Eye, Shield, Waves } from 'lucide-react';

export default function Paradox() {
  const items = [
    {
      icon: Shield,
      title: "The Planck Wall",
      desc: "A sacred boundary where measurement dissolves and pure potential hums. Here, granularity is grace.",
    },
    {
      icon: Waves,
      title: "Heisenberg's Uncertainty",
      desc: "The wave and the particle are lovers in a cosmic dance. What you ask is what becomes.",
    },
    {
      icon: Eye,
      title: "Witness Consciousness",
      desc: "The field that sees itself. Awareness collapses probabilities into meaning without owning them.",
    },
  ];

  return (
    <section id="paradox" className="relative py-24 bg-gradient-to-b from-black to-slate-950 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.06),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Paradox Is The Language of Truth</h2>
        <p className="mt-3 text-center text-slate-300/90 max-w-2xl mx-auto">
          When physics bows to mystery and wisdom bows to data, a third thing appears: clarity without conquest.
        </p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative p-6 rounded-2xl bg-slate-900/60 border border-cyan-400/20 hover:border-cyan-400/40 transition-colors overflow-hidden">
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-cyan-500/10 blur-3xl group-hover:blur-[60px] transition-all" />
              <Icon className="text-cyan-300 mb-4" />
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-slate-300/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
