import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-200 text-xs tracking-widest uppercase">
          New • Digital Edition
        </div>
        <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05]">
          <span className="text-slate-100">The Sacred Unknown</span>
        </h1>
        <p className="mt-4 text-xl sm:text-2xl text-cyan-200/90">Where Quantum Physics Meets Ancient Wisdom</p>
        <p className="mt-2 text-slate-300/90 max-w-2xl mx-auto">
          Reality is a glitching, self-correcting, beautiful infinite loop.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#pricing" className="px-6 py-3 rounded-full bg-cyan-500/20 text-cyan-200 border border-cyan-400/40 hover:bg-cyan-500/30 transition-all glow-cyan">
            Begin Your Journey
          </a>
          <a href="#sample" className="px-6 py-3 rounded-full bg-slate-800/60 text-slate-200 border border-slate-600/50 hover:bg-slate-700/60 transition-all">
            Read Free Sample
          </a>
        </div>

        <div className="mt-10 text-cyan-300/80 text-sm">Scroll to explore</div>
      </div>
    </section>
  );
}
