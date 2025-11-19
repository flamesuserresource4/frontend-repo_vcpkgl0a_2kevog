import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { href: "#discover", label: "Features" },
    { href: "#inside", label: "What's Inside" },
    { href: "#quotes", label: "Testimonials" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0F]/70 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 grid grid-cols-3 items-center">
        <a href="#hero" className="text-sm tracking-[0.05em] text-white font-medium">THE SACRED UNKNOWN</a>

        <nav className="hidden md:flex items-center justify-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-[14px] text-[#A0A0B0] hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex justify-end items-center gap-3">
          <a href="#pricing" className="hidden sm:inline-flex btn-primary h-10 px-4 rounded-lg text-[14px]">Buy Now - $21</a>
          <button className="md:hidden text-white" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-[#0A0A0F]/90">
          <div className="max-w-7xl mx-auto px-6 py-4 grid gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block text-[15px] text-[#A0A0B0] hover:text-white" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#pricing" className="mt-2 btn-primary h-10 px-4 rounded-lg inline-flex" onClick={() => setOpen(false)}>
              Buy Now - $21
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
