export default function SocialProofBar() {
  const stats = [
    { value: '2,000+', label: 'Readers' },
    { value: '4.9★', label: 'Average Rating' },
    { value: '80+', label: 'Pages' },
    { value: '12', label: 'Practices' },
  ];
  return (
    <section className="relative bg-[#141419] border-y border-[#2A2A35]">
      <div className="max-w-6xl mx-auto px-6 py-8 md:py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center justify-center">
              <div className="text-2xl md:text-3xl font-semibold tracking-tight">{s.value}</div>
              <div className="text-sm text-[#A0A0B0]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
