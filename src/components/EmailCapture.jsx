import { useState } from 'react';

export default function EmailCapture() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    // In a full app, send to backend/email service.
    setTimeout(() => setSent(true), 500);
  };

  if (sent) {
    return (
      <div className="mt-6 text-emerald-300 text-sm">Check your inbox for a free sample chapter. Welcome aboard.</div>
    );
  }

  return (
    <form onSubmit={submit} className="mt-6 flex flex-col sm:flex-row gap-3">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email for a free sample"
        className="flex-1 px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700/60 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
      />
      <button className="px-6 py-3 rounded-xl bg-cyan-500/20 text-cyan-200 border border-cyan-400/40 hover:bg-cyan-500/30">
        Send Sample
      </button>
    </form>
  );
}
