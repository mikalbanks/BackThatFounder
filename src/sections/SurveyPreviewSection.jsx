import { ClipboardList } from "lucide-react";
import { surveyQuestions } from "../data/constants";
import SectionHeader from "../components/ui/SectionHeader";
import IconBadge from "../components/ui/IconBadge";
import CTAButton from "../components/ui/CTAButton";
import ScrollReveal from "../components/ui/ScrollReveal";

export default function SurveyPreviewSection() {
  return (
    <section id="survey" className="bg-cloud py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
        <ScrollReveal>
          <div>
            <SectionHeader title="The survey asks about what matters most.">
              <p>
                Short, practical questions help surface the difference between a
                minor inconvenience and an obstacle that could slow a company down.
              </p>
            </SectionHeader>
            <div className="mt-8">
              <CTAButton />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="rounded-lg border border-ink/10 bg-paper p-5 shadow-soft sm:p-7">
            <div className="flex items-center justify-between gap-4 border-b border-ink/10 pb-5">
              <div className="flex items-center gap-3">
                <IconBadge icon={ClipboardList} tone="purple" />
                <h3 className="text-xl font-black text-ink">Survey preview</h3>
              </div>
              <span className="rounded-full bg-mint/10 px-3 py-1 text-sm font-bold text-[#087f5f]">
                Less than 3 min
              </span>
            </div>

            <ol className="mt-6 grid gap-4">
              {surveyQuestions.map((question, index) => (
                <li
                  key={question}
                  className="flex gap-4 rounded-lg border border-ink/10 bg-white px-4 py-4"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-electric/10 text-sm font-black text-electric">
                    {index + 1}
                  </span>
                  <span className="font-semibold leading-7 text-ink">{question}</span>
                </li>
              ))}
            </ol>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
