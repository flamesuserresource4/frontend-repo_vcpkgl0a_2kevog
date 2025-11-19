export default function Footer() {
  return (
    <footer className="relative bg-black text-slate-400 py-10 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm">© 2024 The Witness. All rights reserved.</div>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#" className="hover:text-slate-200">Contact</a>
          <a href="#" className="hover:text-slate-200">Privacy</a>
          <a href="#" className="hover:text-slate-200">Terms</a>
        </nav>
      </div>
    </footer>
  );
}
