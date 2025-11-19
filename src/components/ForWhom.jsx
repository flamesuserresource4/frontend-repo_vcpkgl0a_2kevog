import { CheckCircle2, XCircle } from 'lucide-react';

export default function ForWhom() {
  const yes = [
    "You're fascinated by both science and spirituality",
    "You're tired of simplistic \"manifestation\" teachings",
    "You find peace in mystery rather than certainty",
    "You want to embrace the unknown as sacred",
    "You're ready for a non-dual perspective on reality",
  ];
  const no = [
    "You need all the answers",
    "You're looking for a quick fix",
    "You're uncomfortable with paradox",
  ];

  return (
    <section id="forwhom" className="relative py-24 bg-slate-950 text-white">
      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold flex items-center gap-2 text-emerald-300"><CheckCircle2/> This book is for you if…</h3>
          <ul className="mt-6 space-y-3">
            {yes.map((t) => (
              <li key={t} className="flex items-start gap-3 text-slate-300/90"><span className="text-emerald-400 mt-0.5">✓</span> {t}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold flex items-center gap-2 text-rose-300"><XCircle/> This book is not for you if…</h3>
          <ul className="mt-6 space-y-3">
            {no.map((t) => (
              <li key={t} className="flex items-start gap-3 text-slate-300/90"><span className="text-rose-400 mt-0.5">✕</span> {t}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
