import { Check } from 'lucide-react';

const items = [
  '12 Transformative Chapters',
  '12 Guided Contemplative Practices',
  '80+ Pages of Deep Exploration',
  'Extensive References & Further Reading',
  'Quantum Physics Made Accessible',
  'Ancient Wisdom for Modern Seekers',
  'DRM-Free PDF Format',
  'Lifetime Access & Updates',
];

export default function Inside() {
  return (
    <section id="inside" className="py-20 sm:py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Everything You Get</h2>
        <div className="mt-10 text-left grid sm:grid-cols-2 gap-x-10 gap-y-4">
          {items.map((t) => (
            <div key={t} className="flex items-center gap-4 p-3 rounded-xl hover:bg-[var(--surface)]/60 transition-colors">
              <div className="w-6 h-6 rounded-full flex items-center justify-center bg-[#0a1f1f] border border-[var(--border)]">
                <Check className="w-4 h-4 text-[#00E676]" />
              </div>
              <span className="text-[18px]">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
