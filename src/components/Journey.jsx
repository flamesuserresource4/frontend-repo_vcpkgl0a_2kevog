import { ArrowRight } from 'lucide-react';

const parts = [
  {
    k: 'I',
    title: 'The Threshold of Knowing',
    meta: '3 Chapters • 4 Practices',
    desc: 'Begin at the edge of certainty and learn to navigate the liminal space between facts and possibilities.'
  },
  {
    k: 'II',
    title: 'The Architecture of Mystery',
    meta: '3 Chapters • 2 Practices',
    desc: 'Map the structural role of unknowns in science, spirituality, and your inner life.'
  },
  {
    k: 'III',
    title: 'The Paradox of Omniscience',
    meta: '3 Chapters • 3 Practices',
    desc: 'Explore why all-knowing would collapse meaning—and how mystery preserves freedom.'
  },
  {
    k: 'IV',
    title: 'Living with the Unknown',
    meta: '3 Chapters • 3 Practices',
    desc: 'Integrate the practice of not-knowing as a courageous way of being in the world.'
  },
];

export default function Journey() {
  return (
    <section id="journey" className="py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-center">A 4-Part Journey</h2>
        <div className="mt-12 overflow-x-auto no-scrollbar">
          <div className="min-w-[900px] grid grid-cols-4 gap-6 relative">
            {/* connecting line */}
            <div className="absolute left-0 right-0 top-1/2 -z-10 h-[2px] bg-gradient-to-r from-[var(--cyan)]/60 via-[var(--cyan)]/0 to-[var(--gold)]/60" />
            {parts.map((p) => (
              <div key={p.k} className="card hover-card p-8 rounded-xl w-[280px]">
                <div className="text-[12px] font-mono text-[var(--cyan)]">PART {p.k}</div>
                <h3 className="mt-2 text-2xl font-semibold">{p.title}</h3>
                <div className="mt-1 text-sm text-[var(--muted)]">{p.meta}</div>
                <p className="mt-4 text-[14px] text-[var(--muted)] leading-6">{p.desc}</p>
                <ArrowRight className="w-5 h-5 ml-auto mt-6 text-[var(--cyan)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
