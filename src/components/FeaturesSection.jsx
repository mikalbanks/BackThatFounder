const features = [
  {
    emoji: "🧡",
    color: "bg-rose/20",
    title: "People-first profiles",
    desc: "Go beyond pitch decks. Share your story, your why, and the human side of your startup.",
  },
  {
    emoji: "🌱",
    color: "bg-mint/20",
    title: "Curated backer network",
    desc: "Connect with backers who offer the exact skills and resources you need — mentorship, tools, intros, and more.",
  },
  {
    emoji: "✨",
    color: "bg-lavender/20",
    title: "No strings attached",
    desc: "All support is in-kind. No equity given, no financial returns expected. Just genuine help from people who believe.",
  },
  {
    emoji: "📡",
    color: "bg-sky/20",
    title: "Ongoing community",
    desc: "Support doesn't stop at one introduction. Access a growing network of backers, mentors, and fellow founders.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-rose">
            Why Back That Founder
          </p>
          <h2 className="font-display text-3xl text-cream sm:text-4xl lg:text-5xl">
            Built different, on purpose
          </h2>
        </div>

        <div className="fade-up grid gap-px overflow-hidden rounded-3xl border border-cream/10 bg-cream/10 sm:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-ink p-8 transition-colors duration-300 hover:bg-ink-soft/20 sm:p-10"
            >
              <span className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-2xl ${f.color}`}>
                {f.emoji}
              </span>
              <h3 className="mb-2 text-lg font-semibold text-cream">
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed text-cream/60">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
