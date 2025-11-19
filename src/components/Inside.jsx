import { BookOpen, Sparkles, Brain, Infinity, Waves, User } from 'lucide-react';

export default function Inside() {
  const feats = [
    { icon: BookOpen, text: '12 Transformative Chapters' },
    { icon: Sparkles, text: '12 Contemplative Practices' },
    { icon: Brain, text: 'Quantum Physics Made Spiritual' },
    { icon: Infinity, text: 'Ancient Wisdom Made Modern' },
    { icon: Waves, text: '80+ Pages of Deep Exploration' },
    { icon: User, text: 'Written by The Witness' },
  ];

  return (
    <section id="inside" className="relative py-24 bg-slate-950 text-white">
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center">What's Inside</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {feats.map(({ icon: Icon, text }) => (
            <div key={text} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-700/60 hover:border-amber-400/40 transition-colors">
              <Icon className="text-amber-300 mb-3" />
              <p className="text-slate-300/90">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
