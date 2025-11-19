import { useState } from 'react';

const faqs = [
  { q: 'What format is this?', a: 'A beautifully designed, DRM‑free PDF you can read on any device.' },
  { q: 'Do I need a background in physics?', a: 'No. The book is written to be accessible while honoring the depth of the subject.' },
  { q: 'Is this religious?', a: 'No. It is a contemplative, non-dogmatic approach grounded in lived practice and clear reasoning.' },
  { q: 'What makes this different from other spiritual books?', a: 'It treats mystery as structural, not as a gap to be filled — integrating quantum metaphors with ancient wisdom.' },
  { q: 'Can I share this?', a: 'You may share quotes with attribution. Please purchase additional copies for friends to support the work.' },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="relative py-24 bg-slate-950 text-white">
      <div className="relative max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Questions</h2>
        <div className="mt-8 divide-y divide-slate-700/60 border border-slate-700/60 rounded-2xl overflow-hidden">
          {faqs.map((item, i) => (
            <details key={i} open={open === i} onClick={() => setOpen(open === i ? -1 : i)} className="group bg-slate-900/60">
              <summary className="cursor-pointer list-none px-6 py-5 flex justify-between items-center">
                <span className="font-medium text-slate-200">{item.q}</span>
                <span className="text-cyan-300 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-slate-300/90">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
