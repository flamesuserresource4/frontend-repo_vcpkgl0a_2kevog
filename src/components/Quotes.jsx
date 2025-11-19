const quotes = [
  {
    text: 'The universe has secrets it will never tell. Not because it is withholding them, but because they do not exist to be told.',
    by: 'From Chapter 3'
  },
  {
    text: 'True omniscience is not the possession of all data. It is the understanding that mystery is a structural component of existence.',
    by: 'From Chapter 5'
  },
  {
    text: 'You are not a noun; you are a verb. A dynamic process of becoming.',
    by: 'From Chapter 8'
  },
];

export default function Quotes() {
  return (
    <section id="quotes" className="py-20 sm:py-24">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-6">
        <div className="gradient-border p-12">
          <blockquote className="text-2xl italic leading-[1.6]">{quotes[0].text}</blockquote>
          <div className="mt-6 font-semibold text-[var(--cyan)]">— {quotes[0].by}</div>
        </div>
        <div className="grid gap-6">
          {quotes.slice(1).map((q, i) => (
            <div className="gradient-border p-8" key={i}>
              <blockquote className="text-xl italic leading-[1.6]">{q.text}</blockquote>
              <div className="mt-4 font-semibold text-[var(--cyan)]">— {q.by}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
