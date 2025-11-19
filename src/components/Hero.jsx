export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden text-white">
      <div className="absolute inset-0 -z-10 bg-mesh" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 grain opacity-[0.06] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto w-full px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        {/* Left */}
        <div>
          <span className="inline-flex items-center gap-2 px-3 h-7 rounded-full border border-[var(--cyan)]/30 bg-[var(--cyan)]/10 text-[var(--cyan)] text-[12px] tracking-widest uppercase">NEW BOOK</span>
          <h1 className="mt-4 text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.1] tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
            Where Quantum Physics Meets Ancient Wisdom
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[var(--muted)] max-w-xl leading-7">
            Explore the limits of knowledge and discover why mystery isn't a bug—it's the universe's most essential feature.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-2">
            <a href="#pricing" className="btn-primary h-12 px-5 text-[16px] rounded-lg">Get the Book - $21</a>
            <a href="#sample" className="btn-outline h-12 px-5 text-[16px] rounded-lg">Read Sample Chapter</a>
          </div>
          <div className="mt-8 text-[14px] text-[var(--muted)] flex items-center gap-3">
            <div className="flex -space-x-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <img key={i} src={`https://i.pravatar.cc/48?img=${i+5}`} alt="Reader avatar" className="w-6 h-6 rounded-full ring-2 ring-[#0A0A0F]" loading="lazy" />
              ))}
            </div>
            <span>Join 2,000+ readers exploring the Sacred Unknown</span>
          </div>
        </div>
        {/* Right */}
        <div className="relative flex justify-center md:justify-end">
          <div className="relative w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px] aspect-[3/4]">
            <div className="absolute -inset-6 rounded-3xl blur-2xl opacity-60" style={{background: 'radial-gradient(120px 160px at 60% 10%, rgba(0,217,255,0.35), transparent 60%), radial-gradient(180px 200px at 20% 90%, rgba(255,184,0,0.25), transparent 60%)'}} />
            <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop" alt="Book cover of The Sacred Unknown" className="relative z-10 w-full h-full object-cover rounded-2xl border border-[var(--border)] shadow-[0_40px_120px_rgba(0,217,255,0.25)] animate-float" />
          </div>
        </div>
      </div>
    </section>
  );
}
