import { Heart, Lightbulb, Shield, Users } from "lucide-react";
import SectionHeader from "../components/ui/SectionHeader";
import IconBadge from "../components/ui/IconBadge";
import ScrollReveal from "../components/ui/ScrollReveal";
import CTAButton from "../components/ui/CTAButton";

const values = [
  {
    title: "Founder-first",
    body: "Every decision starts with the question: does this actually help a founder move forward?",
    icon: Lightbulb,
    tone: "blue",
  },
  {
    title: "Transparency",
    body: "We share what we learn, how we operate, and where your data goes. No black boxes.",
    icon: Shield,
    tone: "green",
  },
  {
    title: "Community-driven",
    body: "The best support systems are built by people who understand the journey firsthand.",
    icon: Users,
    tone: "purple",
  },
  {
    title: "Practical impact",
    body: "We focus on removing real obstacles — not theoretical ones. Tangible help, fast.",
    icon: Heart,
    tone: "amber",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-28">
        <div className="animated-gradient absolute inset-0 opacity-80" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-electric">
              About us
            </p>
            <h1 className="max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              We believe founders deserve better support infrastructure.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              BackThatFounder exists because too many promising startups stall — not
              from bad ideas, but from the practical costs and access gaps that pile
              up before stable funding arrives.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-paper py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <ScrollReveal>
              <SectionHeader
                kicker="Our Story"
                title="Started with a question most people overlook."
              >
                <p>
                  What if the biggest threat to a startup isn't competition or
                  product-market fit — but the invisible costs of just staying in the
                  game? Flights to investor meetings. Temporary housing in a new
                  city. Visa fees. Conference badges. Legal setup. Software tools.
                </p>
                <p className="mt-4">
                  These aren't glamorous problems. They don't make headlines. But
                  they quietly drain founders — financially and emotionally — at the
                  exact moment they need to be building.
                </p>
                <p className="mt-4">
                  BackThatFounder was created to listen first. We're gathering real
                  data from real founders to understand which obstacles matter most,
                  and then building the partnerships, community, and support models
                  to address them.
                </p>
              </SectionHeader>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="rounded-lg border border-ink/10 bg-white p-8 shadow-soft">
                <h3 className="text-2xl font-black text-ink">Where we are now</h3>
                <div className="mt-6 space-y-4">
                  {[
                    "Gathering founder needs data through our survey",
                    "Identifying patterns in the most urgent obstacles",
                    "Building partnerships with B2B providers and sponsors",
                    "Designing pilot programs for the highest-impact interventions",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-electric/10 text-xs font-black text-electric">
                        {i + 1}
                      </span>
                      <span className="text-base leading-7 text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-cloud py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader title="What we stand for" align="center" />
          </ScrollReveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.08}>
                <article className="rounded-lg border border-ink/10 bg-paper p-6 shadow-soft">
                  <IconBadge icon={value.icon} tone={value.tone} />
                  <h3 className="mt-5 text-xl font-black text-ink">{value.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-700">{value.body}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              title="Want to be part of the journey?"
              align="center"
            >
              <p>
                Whether you're a founder, a community builder, or a company that
                wants to support startups — your input shapes what we build next.
              </p>
            </SectionHeader>
            <div className="mt-8">
              <CTAButton />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
