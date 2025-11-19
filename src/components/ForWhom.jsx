import { CheckCircle2, XCircle } from 'lucide-react';

const left = [
  "You're curious about quantum physics and spirituality",
  'You find peace in mystery rather than certainty',
  'You want depth over quick fixes',
  "You're ready to embrace paradox",
  'You value both science and mysticism',
];

const right = [
  'You need all the answers right now',
  "You're looking for a get-enlightened-quick scheme",
  "You're uncomfortable with not-knowing",
  'You prefer dogma over inquiry',
];

export default function ForWhom() {
  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-[var(--cyan)] uppercase tracking-[0.2em]">This is for you if</h3>
            <ul className="mt-6 space-y-4">
              {left.map((t) => (
                <li key={t} className="flex items-start gap-3 text-lg"><CheckCircle2 className="mt-1 w-5 h-5 text-[#00E676]" /> {t}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-rose-400 uppercase tracking-[0.2em]">Not for you if</h3>
            <ul className="mt-6 space-y-4">
              {right.map((t) => (
                <li key={t} className="flex items-start gap-3 text-lg"><XCircle className="mt-1 w-5 h-5 text-rose-400" /> {t}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
