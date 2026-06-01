const steps = [
  {
    num: "01",
    emoji: "✍️",
    title: "Tell your story",
    desc: "Share your vision, your journey, and what makes your startup worth believing in.",
    bg: "bg-peach",
  },
  {
    num: "02",
    emoji: "🤝",
    title: "Get matched",
    desc: "Our community surfaces your profile to backers aligned with your mission and industry.",
    bg: "bg-mint",
  },
  {
    num: "03",
    emoji: "🚀",
    title: "Build together",
    desc: "Receive funding, mentorship, and ongoing community support as you scale.",
    bg: "bg-lavender",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-rose-deep">
            The Process
          </p>
          <h2 className="font-display text-3xl text-ink sm:text-4xl lg:text-5xl">
            Three steps to getting backed
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`fade-up group relative overflow-hidden rounded-3xl ${step.bg} p-8 transition-transform duration-300 hover:-translate-y-1`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Watermark number */}
              <span className="pointer-events-none absolute -bottom-4 -right-2 font-display text-[120px] font-bold leading-none text-ink/[0.04]">
                {step.num}
              </span>

              <span className="relative mb-4 block text-4xl">{step.emoji}</span>
              <p className="relative mb-1 text-xs font-bold uppercase tracking-widest text-ink-muted">
                Step {step.num}
              </p>
              <h3 className="relative mb-3 font-display text-xl text-ink">
                {step.title}
              </h3>
              <p className="relative text-sm leading-relaxed text-ink-soft">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
