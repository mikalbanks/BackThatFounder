import { audiences } from "../data/constants";
import SectionHeader from "../components/ui/SectionHeader";
import IconBadge from "../components/ui/IconBadge";
import ScrollReveal from "../components/ui/ScrollReveal";

export default function AudienceSection() {
  const tones = ["blue", "purple", "green"];

  return (
    <section className="bg-cloud py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader title="Who should complete the survey?" align="center" />
        </ScrollReveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {audiences.map((audience, index) => (
            <ScrollReveal key={audience.title} delay={index * 0.1}>
              <article className="rounded-lg border border-ink/10 bg-paper p-6 shadow-[0_18px_50px_rgba(9,17,34,0.07)]">
                <IconBadge icon={audience.icon} tone={tones[index]} />
                <h3 className="mt-5 text-2xl font-black text-ink">
                  {audience.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  {audience.body}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
