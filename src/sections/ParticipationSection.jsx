import { BadgeCheck } from "lucide-react";
import { participation } from "../data/constants";
import SectionHeader from "../components/ui/SectionHeader";
import ScrollReveal from "../components/ui/ScrollReveal";

export default function ParticipationSection() {
  return (
    <section className="bg-paper py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader title="There are multiple ways to participate." align="center" />
        </ScrollReveal>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {participation.map((item, index) => (
            <ScrollReveal key={item} delay={index * 0.06}>
              <div className="flex items-center gap-3 rounded-full border border-ink/10 bg-white px-4 py-3 shadow-[0_10px_28px_rgba(9,17,34,0.05)]">
                <BadgeCheck aria-hidden="true" className="h-5 w-5 shrink-0 text-mint" />
                <span className="font-bold text-ink">{item}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
