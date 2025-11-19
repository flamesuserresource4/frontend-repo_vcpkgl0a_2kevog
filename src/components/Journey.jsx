import { useState } from 'react';

const parts = [
  { name: 'Part I', title: 'The Threshold of Knowing', desc: 'Stand at the shimmering edge where data meets myth.' },
  { name: 'Part II', title: 'The Architecture of Mystery', desc: 'Blueprints of the sacred unknown, hidden in plain sight.' },
  { name: 'Part III', title: 'The Paradox of Omniscience', desc: 'Knowing that not-knowing is the most intimate knowledge.' },
  { name: 'Part IV', title: 'Living with the Unknown', desc: 'Practice the dance: precise, humble, radiant.' }
];

export default function Journey() {
  const [active, setActive] = useState(0);

  return (
    <section id="journey" className="relative py-24 bg-gradient-to-b from-slate-950 to-black text-white">
      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-square max-w-md mx-auto">
          <div className="absolute inset-0 rounded-full border border-cyan-400/30 animate-spin [animation-duration:18s]" />
          <div className="absolute inset-6 rounded-full border border-amber-400/30 animate-spin [animation-duration:28s] [animation-direction:reverse]" />
          <div className="absolute inset-12 rounded-full border border-fuchsia-400/30 animate-spin [animation-duration:36s]" />
          {parts.map((p, i) => (
            <button key={p.name} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)}
              className={`absolute -translate-x-1/2 -translate-y-1/2 text-xs sm:text-sm px-3 py-1 rounded-full border transition-colors ${active===i? 'bg-cyan-500/20 text-cyan-200 border-cyan-400/40':'bg-slate-900/60 text-slate-300 border-slate-600/40'}`}
              style={{
                left: `${50 + 38*Math.cos((i/parts.length)*2*Math.PI)}%`,
                top: `${50 + 38*Math.sin((i/parts.length)*2*Math.PI)}%`
              }}
            >
              {p.name}
            </button>
          ))}
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">The Journey</h2>
          <div className="mt-6 p-6 rounded-2xl bg-slate-900/60 border border-cyan-400/20">
            <h3 className="text-xl font-semibold text-cyan-200">{parts[active].title}</h3>
            <p className="mt-2 text-slate-300/90">{parts[active].desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
