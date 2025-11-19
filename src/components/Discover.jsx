import { Atom, Infinity, CloudLightning, CircleDashed, Orbit, Webhook } from 'lucide-react';

export default function Discover() {
  const cards = [
    { icon: Atom, title: "The Universe's Built-In Privacy Setting" },
    { icon: CircleDashed, title: "Why Mystery is Not a Bug—It's a Feature" },
    { icon: Webhook, title: "The Fertile Void as Foundation" },
    { icon: CloudLightning, title: "Chaos as Sacred" },
    { icon: Orbit, title: "Living as a Conscious Node in the Infinite Loop" },
    { icon: Infinity, title: "The Architecture of Paradox" },
  ];

  return (
    <section id="discover" className="relative py-24 bg-slate-950 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(217,119,6,0.06),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center">What You'll Discover</h2>
        <p className="mt-3 text-center text-slate-300/90 max-w-2xl mx-auto">
          Six luminous portals into the heart of the glitch. Each one a practice in seeing.
        </p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map(({ icon: Icon, title }) => (
            <div key={title} className="group p-6 rounded-2xl bg-slate-900/60 border border-amber-400/20 hover:border-amber-400/40 transition-colors">
              <Icon className="text-amber-300 mb-4" />
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-slate-300/80">A concise exploration weaving quantum hints with mystical clarity.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
