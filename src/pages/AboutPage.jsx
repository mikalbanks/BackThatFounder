import { Link } from "react-router-dom";
import { Heart, Lightbulb, Shield, Users } from "lucide-react";
import ScrollReveal from "../components/ui/ScrollReveal";

const values = [
  {
    title: "Founder-first",
    body: "Every decision starts with the question: does this actually help a founder move forward?",
    icon: Lightbulb,
    bg: "bg-peach",
  },
  {
    title: "Transparency",
    body: "We share what we learn, how we operate, and where your data goes. No black boxes.",
    icon: Shield,
    bg: "bg-mint",
  },
  {
    title: "Community-driven",
    body: "The best support systems are built by people who understand the journey firsthand.",
    icon: Users,
    bg: "bg-lavender",
  },
  {
    title: "Practical impact",
    body: "We focus on removing real obstacles — not theoretical ones. Tangible help, fast.",
    icon: Heart,
    bg: "bg-rose",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink py-20 sm:py-28">
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 30% 40%, #F7C5C0, transparent 50%), radial-gradient(circle at 70% 60%, #DDD6F3, transparent 50%)" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-rose">
              About us
            </p>
            <h1 className="max-w-4xl font-display text-4xl leading-tight text-cream sm:text-5xl lg:text-6xl">
              We believe founders deserve better support infrastructure.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-cream/70">
              BackThatFounder exists because too many promising startups stall — not
              from bad ideas, but from the practical costs and access gaps that pile
              up before stable funding arrives.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <ScrollReveal>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-rose-deep">Our Story</p>
              <h2 className="font-display text-3xl text-ink sm:text-4xl">
                Started with a question most people overlook.
              </h2>
              <div className="mt-6 space-y-4 text-base leading-7 text-ink-soft">
                <p>
                  What if the biggest threat to a startup isn&rsquo;t competition or
                  product-market fit — but the invisible costs of just staying in the
                  game? Flights to investor meetings. Temporary housing in a new
                  city. Visa fees. Conference badges. Legal setup. Software tools.
                </p>
                <p>
                  These aren&rsquo;t glamorous problems. They don&rsquo;t make headlines. But
                  they quietly drain founders — financially and emotionally — at the
                  exact moment they need to be building.
                </p>
                <p>
                  BackThatFounder was created to listen first. We&rsquo;re gathering real
                  data from real founders to understand which obstacles matter most,
                  and then building the partnerships, community, and support models
                  to address them.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="rounded-3xl border border-rose/30 bg-white p-8 shadow-soft">
                <h3 className="font-display text-2xl text-ink">Where we are now</h3>
                <div className="mt-6 space-y-4">
                  {[
                    "Gathering founder needs data through our survey",
                    "Identifying patterns in the most urgent obstacles",
                    "Building partnerships with B2B providers and sponsors",
                    "Designing pilot programs for the highest-impact interventions",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose/30 text-xs font-bold text-ink">
                        {i + 1}
                      </span>
                      <span className="text-base leading-7 text-ink-soft">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-peach/30 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-center font-display text-3xl text-ink sm:text-4xl">What we stand for</h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.08}>
                <article className={`rounded-3xl ${value.bg}/40 p-6`}>
                  <value.icon className="h-7 w-7 text-ink" />
                  <h3 className="mt-5 font-display text-xl text-ink">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{value.body}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-display text-3xl text-ink sm:text-4xl">Want to be part of the journey?</h2>
            <p className="mx-auto mt-4 max-w-xl text-ink-soft">
              Whether you&rsquo;re a founder, a community builder, or a company that
              wants to support startups — your input shapes what we build next.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link to="/apply" className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-cream transition hover:bg-ink-soft">
                Apply as a Founder &rarr;
              </Link>
              <Link to="/back" className="rounded-full border-2 border-ink/20 px-7 py-3.5 text-sm font-semibold text-ink transition hover:border-ink/40">
                Become a Backer
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
