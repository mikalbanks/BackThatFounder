import { pressurePoints } from "../data/constants";
import SectionHeader from "../components/ui/SectionHeader";
import IconBadge from "../components/ui/IconBadge";
import ScrollReveal from "../components/ui/ScrollReveal";

export default function ProblemSection() {
  const tones = ["blue", "green", "purple", "amber", "blue", "green"];

  return (
    <section id="problem" className="bg-paper pb-20 pt-10 sm:pb-24 sm:pt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader title="The hardest founder costs are often the least visible.">
            <p>
              Founders are expected to move fast, show up, pitch, build, travel,
              network, and survive — often before they have stable funding. The
              real blockers are not always big strategic problems. Sometimes it is
              a flight, a visa, a month of housing, a conference badge, legal
              help, or the tools needed to keep building.
            </p>
          </SectionHeader>
        </ScrollReveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pressurePoints.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.08}>
              <article className="group rounded-lg border border-ink/10 bg-white/80 p-5 shadow-[0_12px_34px_rgba(9,17,34,0.05)] transition duration-200 hover:-translate-y-1 hover:border-electric/40 hover:shadow-soft">
                <IconBadge icon={item.icon} tone={tones[index]} />
                <h3 className="mt-5 text-lg font-black text-ink">{item.title}</h3>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
