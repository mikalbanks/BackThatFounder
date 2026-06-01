import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "../components/ui/ScrollReveal";

/**
 * HowItWorksPage — Dedicated page explaining the 3-step process
 * for both founders and backers, emphasizing the in-kind model.
 */

const founderSteps = [
  {
    num: "01",
    emoji: "✍️",
    title: "Submit your idea",
    desc: "Tell us about your startup, the problem you're solving, and the kind of support that would make the biggest difference. No pitch deck required — just your story.",
    bg: "bg-peach",
  },
  {
    num: "02",
    emoji: "🔍",
    title: "Get reviewed & matched",
    desc: "Our team reviews your application and matches you with backers whose skills, experience, and resources align with your specific needs.",
    bg: "bg-mint",
  },
  {
    num: "03",
    emoji: "🚀",
    title: "Receive in-kind support",
    desc: "Connect with your backers and start receiving help — mentorship, tools, introductions, workspace, or other resources. No equity given, no money exchanged.",
    bg: "bg-lavender",
  },
];

const backerSteps = [
  {
    num: "01",
    emoji: "🙋",
    title: "Sign up as a backer",
    desc: "Tell us what you can offer — whether it's your time, expertise, software credits, office space, or professional services.",
    bg: "bg-sky",
  },
  {
    num: "02",
    emoji: "🤝",
    title: "Get matched with founders",
    desc: "We connect you with founders in industries and stages that match your interests and what you're offering.",
    bg: "bg-butter",
  },
  {
    num: "03",
    emoji: "🌱",
    title: "Make an impact",
    desc: "Your in-kind donation helps a founder clear a real obstacle. Watch their progress and stay connected through the community.",
    bg: "bg-rose",
  },
];

function StepCard({ step, index }) {
  return (
    <div
      className={`fade-up group relative overflow-hidden rounded-3xl ${step.bg} p-8 transition-transform duration-300 hover:-translate-y-1`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
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
  );
}

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink py-20 sm:py-28">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(circle at 30% 40%, #F7C5C0, transparent 50%), radial-gradient(circle at 70% 60%, #C7EAD9, transparent 50%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-rose">
              How It Works
            </p>
            <h1 className="max-w-4xl font-display text-4xl leading-tight text-cream sm:text-5xl lg:text-6xl">
              Real support, no strings attached
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-cream/70">
              BackThatFounder connects startup founders with backers who donate
              their time, expertise, and resources. No equity is exchanged, no
              financial returns are expected — just people helping people build
              something meaningful.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* For Founders */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-rose-deep">
              For Founders
            </p>
            <h2 className="font-display text-3xl text-ink sm:text-4xl">
              Three steps to getting supported
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-ink-soft">
              Whether you need mentorship, software credits, legal help, or
              workspace — here&rsquo;s how to get matched with the right backer.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {founderSteps.map((step, i) => (
              <StepCard key={step.num} step={step} index={i} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/apply"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-cream transition hover:bg-ink-soft"
            >
              Apply as a Founder <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* For Backers */}
      <section className="bg-peach/30 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-rose-deep">
              For Backers
            </p>
            <h2 className="font-display text-3xl text-ink sm:text-4xl">
              Three steps to making an impact
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-ink-soft">
              You don&rsquo;t need to write a check. Your skills, network, and
              resources can remove real obstacles for founders.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {backerSteps.map((step, i) => (
              <StepCard key={step.num} step={step} index={i} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/back"
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink/20 px-7 py-3.5 text-sm font-semibold text-ink transition hover:border-ink/40 hover:bg-ink/5"
            >
              Become a Backer <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* In-kind model explainer */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="rounded-3xl border border-rose/30 bg-white p-8 shadow-soft sm:p-10">
              <h3 className="mb-4 font-display text-2xl text-ink">
                What does &ldquo;in-kind&rdquo; mean?
              </h3>
              <div className="space-y-4 text-base leading-7 text-ink-soft">
                <p>
                  In-kind donations are <strong>non-monetary contributions</strong>{" "}
                  — things like mentorship hours, software licenses, legal
                  consultations, co-working space, design services, or
                  professional introductions.
                </p>
                <p>
                  Unlike traditional investing, backers on our platform{" "}
                  <strong>do not receive equity, ownership, or financial returns</strong>.
                  Contributions are gifts offered to help founders clear
                  practical obstacles.
                </p>
                <p>
                  This model keeps things simple, founder-friendly, and focused
                  on what matters most: removing the real-world barriers that
                  slow startups down before stable funding arrives.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
