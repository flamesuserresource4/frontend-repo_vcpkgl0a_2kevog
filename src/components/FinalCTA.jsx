export default function FinalCTA() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 -z-10" style={{background: 'linear-gradient(180deg, rgba(120,80,255,0.12), rgba(0,217,255,0.12))'}} />
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold">Ready to Explore the Sacred Unknown?</h2>
        <p className="mt-4 text-xl text-[var(--muted)]">Join thousands discovering why mystery isn\'t a problem to solve—it's the universe\'s most essential feature.</p>
        <a href="#pricing" className="mt-8 inline-flex btn-primary h-14 px-8 rounded-lg text-[18px]">Get the Book - $21</a>
        <div className="mt-4 text-sm text-[var(--muted)]">30-day money-back guarantee</div>
      </div>
    </section>
  );
}
