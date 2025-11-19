import { useState } from 'react';

const faqs = [
  { q: 'What format is this book?', a: 'A beautifully designed, DRM‑free PDF you can read on any device.' },
  { q: 'Do I need a physics background?', a: 'No. The book is written to be accessible while honoring the depth of the subject.' },
  { q: 'Is this religious or secular?', a: 'Secular and contemplative. It integrates scientific metaphors with wisdom traditions without dogma.' },
  { q: 'What makes this different from other spiritual books?', a: 'It treats mystery as structural, not a gap to be filled—integrating quantum insights with practical contemplative practice.' },
  { q: 'Can I share this with others?', a: 'Please purchase additional copies for friends to support the work. You may share brief quotes with attribution.' },
  { q: "What if I don't like it?", a: '30‑day money‑back guarantee. Just reach out and we will make it right.' },
];

export default function FAQ() {
  const [open, setOpen] = useState(-1);
  return (
    <section id="faq" className="py-20 sm:py-24">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-center">Frequently Asked Questions</h2>
        <div className="mt-10 divide-y divide-[var(--border)]">
          {faqs.map((item, i) => (
            <details key={i} open={open === i} onClick={() => setOpen(open === i ? -1 : i)} className="group py-4">
              <summary className="cursor-pointer list-none py-3 text-[18px] font-semibold flex items-center justify-between">
                <span className="group-hover:text-[var(--cyan)] transition-colors">{item.q}</span>
                <span className={`ml-6 text-[var(--muted)] transition-transform ${open === i ? 'rotate-45' : ''}`}>+</span>
              </summary>
              <div className="pr-10 pb-4 text-[16px] leading-7 text-[var(--muted)]">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
