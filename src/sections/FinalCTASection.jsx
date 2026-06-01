import { Network } from "lucide-react";
import CTAButton from "../components/ui/CTAButton";
import ScrollReveal from "../components/ui/ScrollReveal";

export default function FinalCTASection() {
  return (
    <section className="bg-ink px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8">
      <ScrollReveal>
        <div className="mx-auto max-w-5xl overflow-hidden rounded-lg border border-white/20 bg-[radial-gradient(circle_at_top_left,rgba(31,123,255,0.38),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] p-8 text-center shadow-soft sm:p-12">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-lg bg-white/10">
            <Network aria-hidden="true" className="h-7 w-7 text-mint" />
          </div>
          <h2 className="mt-6 text-3xl font-black leading-tight sm:text-5xl">
            Tell us what founders actually need.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/75">
            Your response will help shape BackThatFounder&apos;s first pilots,
            partnerships, and community support model.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <CTAButton variant="light" />
            <span className="text-sm font-semibold text-white/70">
              Less than 3 minutes. No pitch deck required.
            </span>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
