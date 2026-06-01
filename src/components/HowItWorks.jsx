import { Link } from "react-router-dom";

const steps = [
  {
    num: "01",
    emoji: "✍️",
    title: "Submit your idea",
    desc: "Share your vision, your journey, and the kind of support that would help you move forward.",
    bg: "bg-peach",
  },
  {
    num: "02",
    emoji: "🤝",
    title: "Get matched",
    desc: "We connect you with backers whose skills and resources align with your specific needs.",
    bg: "bg-mint",
  },
  {
    num: "03",
    emoji: "🚀",
    title: "Receive support",
    desc: "Get in-kind help — mentorship, tools, introductions, and more — so you can focus on building.",
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
            Three steps to getting supported
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

        <div className="mt-10 text-center">
          <Link
            to="/how-it-works"
            className="text-sm font-semibold text-rose-deep underline underline-offset-4 transition hover:text-ink"
          >
            Learn more about the full process &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
