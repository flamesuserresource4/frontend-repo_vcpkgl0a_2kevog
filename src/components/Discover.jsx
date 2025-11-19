import { Sparkles, Eye, Atom, ScanLine, Infinity, BrainCircuit } from 'lucide-react';

const features = [
  { icon: Atom, title: 'The Planck Wall', desc: 'Discover why the universe has a built-in privacy setting.' },
  { icon: BrainCircuit, title: "Heisenberg's Gift", desc: 'Learn to dance with uncertainty as a path to freedom.' },
  { icon: Eye, title: 'The Observer Effect', desc: 'Understand your role as co-creator of reality.' },
  { icon: Infinity, title: 'The Fertile Void', desc: 'Explore quantum vacuum as creative emptiness.' },
  { icon: ScanLine, title: 'Sacred Chaos', desc: "Why glitches aren't bugs—they're features of consciousness." },
  { icon: Sparkles, title: 'The Witness', desc: 'Cultivate expanded awareness across all scales of existence.' },
];

export default function Discover() {
  return (
    <section id="discover" className="py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">What You\'ll Discover</h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="card hover-card p-10 text-left">
              <Icon className="w-12 h-12 text-[var(--cyan)]" />
              <h3 className="mt-6 text-[20px] font-semibold">{title}</h3>
              <p className="mt-3 text-[15px] leading-6 text-[var(--muted)]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
