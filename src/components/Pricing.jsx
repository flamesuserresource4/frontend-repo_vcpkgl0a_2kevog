import { Check } from 'lucide-react';

const includes = [
  '80+ pages of transformative content',
  '12 guided practices',
  'Lifetime access',
  'DRM-free PDF',
  'Instant download',
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-6 grid place-items-center">
        <div className="max-w-sm w-full gradient-border p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.5)] text-center">
          <div className="text-2xl font-semibold">The Sacred Unknown</div>
          <div className="mt-1 text-sm text-[var(--muted)]">Digital Book (PDF)</div>
          <div className="mt-6 flex items-end justify-center gap-3">
            <div className="text-6xl font-bold">$21</div>
            <div className="text-sm text-[var(--muted)] mb-2">one-time payment</div>
          </div>
          <ul className="mt-8 space-y-3 text-left">
            {includes.map((t) => (
              <li key={t} className="flex items-start gap-3"><Check className="w-5 h-5 text-[#00E676]" /> <span>{t}</span></li>
            ))}
          </ul>
          <a href="#checkout" className="mt-10 btn-primary w-full h-14 rounded-lg text-[16px]">Get Instant Access</a>
          <div className="mt-4 text-sm text-[var(--muted)]">Secure Checkout • Money-back Guarantee • Instant Delivery</div>
        </div>
      </div>
    </section>
  );
}
