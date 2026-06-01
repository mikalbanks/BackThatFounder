const testimonials = [
  {
    quote: "Back That Founder didn't just fund my startup — they believed in me when no one else would.",
    name: "Priya Sharma",
    company: "NovaBio",
    gradient: "from-rose to-peach",
    initials: "PS",
  },
  {
    quote: "The community here is unlike anything in traditional VC. Real people, real support, real relationships.",
    name: "Marcus Chen",
    company: "UrbanGrid",
    gradient: "from-mint to-sky",
    initials: "MC",
  },
  {
    quote: "I found backers who understood my mission and gave me the runway to build something meaningful.",
    name: "Aisha Mensah",
    company: "EduPath",
    gradient: "from-lavender to-sky",
    initials: "AM",
  },
];

function Stars() {
  return (
    <div className="mb-4 flex gap-0.5 text-rose-deep">
      {[...Array(5)].map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-peach/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-rose-deep">
            Founder Stories
          </p>
          <h2 className="font-display text-3xl text-ink sm:text-4xl lg:text-5xl">
            Backed by belief
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-3xl bg-white p-8 shadow-soft"
            >
              <Stars />
              <blockquote className="mb-6 font-display text-lg italic leading-relaxed text-ink">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${t.gradient} text-xs font-bold text-ink`}
                >
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-ink-muted">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
