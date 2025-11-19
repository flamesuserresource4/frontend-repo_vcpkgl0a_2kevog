import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { href: "#hero", label: "Home" },
    { href: "#paradox", label: "The Paradox" },
    { href: "#discover", label: "Discover" },
    { href: "#journey", label: "The Journey" },
    { href: "#inside", label: "What's Inside" },
    { href: "#quotes", label: "Quotes" },
    { href: "#pricing", label: "Get It" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/70 backdrop-blur-md border-b border-cyan-400/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="text-cyan-300 font-semibold tracking-wider">
          The Sacred Unknown
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-slate-300/90 hover:text-cyan-300 transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#pricing" className="ml-2 px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-200 border border-cyan-400/30 hover:bg-cyan-500/30 glow-cyan">
            Begin Your Journey
          </a>
        </nav>
        <button className="md:hidden text-slate-200" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-cyan-400/10 bg-slate-950/90">
          <div className="max-w-7xl mx-auto px-4 py-4 grid gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block text-slate-300/90 hover:text-cyan-300" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#pricing" className="mt-2 px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-200 border border-cyan-400/30 glow-cyan inline-block" onClick={() => setOpen(false)}>
              Begin Your Journey
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
