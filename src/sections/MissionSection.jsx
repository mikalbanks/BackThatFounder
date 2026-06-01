import { CheckCircle2, Compass } from "lucide-react";
import SectionHeader from "../components/ui/SectionHeader";
import IconBadge from "../components/ui/IconBadge";
import ScrollReveal from "../components/ui/ScrollReveal";

export default function MissionSection() {
  return (
    <section
      id="mission"
      className="relative overflow-hidden bg-ink py-20 text-white sm:py-24"
    >
      <div className="animated-gradient absolute inset-0 opacity-80" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <ScrollReveal>
          <SectionHeader
            kicker="Mission"
            title="We want to understand what support actually moves founders forward."
            tone="dark"
          >
            <p className="text-white/80">
              BackThatFounder is starting with a simple question: what obstacle,
              if removed in the next 30 days, would meaningfully help a founder
              keep building?
            </p>
            <p className="mt-5 text-white/80">
              This survey helps us identify patterns, learn what founders actually
              need, and shape future pilots, partnerships, and community support.
            </p>
          </SectionHeader>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="rounded-lg border border-white/20 bg-white/10 p-6 shadow-soft backdrop-blur">
            <div className="flex items-center gap-3">
              <IconBadge icon={Compass} tone="green" />
              <h3 className="text-xl font-black">30-day obstacle lens</h3>
            </div>
            <p className="mt-5 text-base leading-8 text-white/75">
              Instead of guessing from the outside, BackThatFounder is listening
              for the practical costs that change founder momentum when removed
              quickly.
            </p>
            <div className="mt-6 grid gap-3">
              {["Urgency", "Access gap", "Practical impact"].map((label) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-lg border border-white/20 bg-white/10 px-4 py-3"
                >
                  <CheckCircle2 aria-hidden="true" className="h-5 w-5 text-mint" />
                  <span className="font-bold text-white">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
