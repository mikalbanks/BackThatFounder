import { steps } from "../data/constants";
import SectionHeader from "../components/ui/SectionHeader";
import ScrollReveal from "../components/ui/ScrollReveal";

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-paper py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader title="How it works" align="center" />
        </ScrollReveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <ScrollReveal key={step.title} delay={index * 0.1}>
              <article className="relative rounded-lg bg-white p-6 shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-ink text-lg font-black text-white">
                  {index + 1}
                </div>
                {index < steps.length - 1 ? (
                  <div
                    aria-hidden="true"
                    className="absolute left-12 top-12 hidden h-px w-[calc(100%+1.25rem)] bg-gradient-to-r from-electric/50 to-transparent md:block"
                  />
                ) : null}
                <h3 className="mt-6 text-xl font-black text-ink">{step.title}</h3>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  {step.body}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
