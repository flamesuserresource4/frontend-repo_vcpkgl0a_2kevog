export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 bg-slate-950 text-white">
      <div className="relative max-w-5xl mx-auto px-6">
        <div className="rounded-3xl overflow-hidden border border-cyan-400/30 bg-gradient-to-br from-slate-900 to-slate-950 p-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Get The Sacred Unknown</h2>
          <p className="mt-3 text-slate-300/90">80+ pages • 12 practices • Lifetime access</p>
          <div className="mt-6 text-6xl font-extrabold tracking-tight"><span className="text-cyan-300">$21</span></div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#checkout" className="px-8 py-4 rounded-full bg-cyan-500/20 text-cyan-200 border border-cyan-400/40 hover:bg-cyan-500/30 glow-cyan">
              Get The Sacred Unknown
            </a>
            <a href="#sample" className="px-8 py-4 rounded-full bg-slate-800/60 text-slate-200 border border-slate-600/50 hover:bg-slate-700/60">
              Read Free Sample
            </a>
          </div>
          <div className="mt-6 text-sm text-slate-400">Instant PDF Download • DRM‑Free • Read on Any Device • 30‑day guarantee</div>
        </div>
      </div>
    </section>
  );
}
