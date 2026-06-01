import { ShieldCheck } from "lucide-react";
import CTAButton from "../components/ui/CTAButton";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-midnight text-white">
      <img
        src="/assets/backthatfounder-hero.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,31,0.94)_0%,rgba(7,17,31,0.78)_42%,rgba(7,17,31,0.28)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(31,123,255,0.42),transparent_28%),radial-gradient(circle_at_48%_70%,rgba(21,197,139,0.18),transparent_30%)]" />

      <div className="relative mx-auto flex min-h-[calc(100svh-13rem)] max-w-7xl items-center px-4 py-10 sm:min-h-[calc(100vh-14rem)] sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-4xl">
          <div className="hero-fade-in mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold text-white shadow-soft backdrop-blur sm:text-sm [animation-delay:100ms]">
            <ShieldCheck aria-hidden="true" className="h-4 w-4 text-mint" />
            Built for founders, by founders and community builders.
          </div>
          <h1 className="hero-fade-in max-w-4xl text-[2.55rem] font-black leading-[1.02] text-white sm:text-6xl sm:leading-[0.95] lg:text-7xl [animation-delay:200ms]">
            Backing founders through the expenses no one talks about.
          </h1>
          <p className="hero-fade-in mt-5 max-w-2xl text-base leading-7 text-white/90 sm:mt-6 sm:text-xl sm:leading-8 [animation-delay:350ms]">
            BackThatFounder is learning what founders need most right now — from
            housing and travel to visas, investor meetings, software, and
            critical operating costs.
          </p>
          <div className="hero-fade-in mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center [animation-delay:500ms]">
            <CTAButton variant="light" />
            <span className="text-sm font-semibold text-white/75">
              Takes less than 3 minutes.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
