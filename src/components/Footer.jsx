export default function Footer() {
  return (
    <footer className="relative bg-[#0A0A0F] text-[#A0A0B0] border-t border-[#2A2A35] py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        <div>
          <div className="font-semibold tracking-wider text-white">THE SACRED UNKNOWN</div>
          <p className="mt-3 text-sm">Mystery isn\'t a bug; it\'s an architectural feature of reality.</p>
        </div>
        <nav className="grid grid-cols-2 gap-2 text-sm">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Contact</a>
          <a href="#" className="hover:text-white">Support</a>
        </nav>
        <div className="space-y-3">
          <div className="text-sm">Stay in the loop</div>
          <form className="flex gap-2">
            <input aria-label="Email" type="email" placeholder="you@cosmos.com" className="flex-1 h-12 px-4 rounded-lg bg-[#141419] border border-[#2A2A35] placeholder-[#A0A0B0]/50 focus:outline-none focus:ring-2 focus:ring-[var(--cyan)]" />
            <button className="btn-primary h-12 px-4 rounded-lg">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-10 text-xs text-[#808090]">© 2024 The Sacred Unknown. All rights reserved.</div>
    </footer>
  );
}
