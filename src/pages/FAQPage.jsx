import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "../components/ui/ScrollReveal";

const faqs = [
  {
    q: "What is BackThatFounder?",
    a: "BackThatFounder is an initiative designed to understand and address the practical, often invisible costs that slow founders down — things like housing, travel, visas, software, legal fees, and conference access. We start by listening through our founder survey, then use the data to build partnerships, pilot programs, and community support.",
  },
  {
    q: "Who is this for?",
    a: "Our survey is for startup founders facing real-world expenses and access gaps, community builders who want to help organize and support founders, and B2B partners (companies, accelerators, sponsors) who want to offer perks, services, or credits to founders.",
  },
  {
    q: "How does the survey work?",
    a: "The survey takes less than 3 minutes. It asks about your current challenges, which expenses put the most pressure on you, and what one obstacle — if removed in the next 30 days — would meaningfully help you keep building. Your responses help us identify patterns across the founder community.",
  },
  {
    q: "Is BackThatFounder free?",
    a: "Yes. Taking the survey is completely free. Our goal is to gather data that helps us build the right support infrastructure. There is no cost to participate, and we'll never sell your data.",
  },
  {
    q: "How is my data used?",
    a: "Your responses are used to identify patterns in founder needs — which obstacles are most common, most urgent, and most impactful to remove. We use this data to design partnerships, pilots, and community programs. We never share individual responses without your permission.",
  },
  {
    q: "How can my company partner with BackThatFounder?",
    a: "If you're a service provider, accelerator, sponsor, or B2B company that wants to support founders, we'd love to hear from you. Visit our Contact page or select 'B2B collaborator' or 'Sponsor or supporter' in the survey to express interest.",
  },
  {
    q: "When will pilot programs launch?",
    a: "We're currently in the data-gathering phase. Once we've identified the most impactful areas, we'll begin designing and launching pilot programs. Strong-fit survey respondents may be invited to participate early.",
  },
  {
    q: "Can I help build the community?",
    a: "Absolutely. We're looking for community builders who want to help recruit founders, organize events, share resources, and amplify the mission. Select 'Community builder' in the survey, and we'll follow up.",
  },
];

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="rounded-2xl border border-rose/30 bg-white shadow-sm">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-peach/20"
      >
        <span className="text-base font-semibold text-ink sm:text-lg">{faq.q}</span>
        <span className={`shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
          <ChevronDown className="h-5 w-5 text-ink-muted" />
        </span>
      </button>
      {isOpen && (
        <div className="border-t border-rose/20 px-6 py-5">
          <p className="text-base leading-7 text-ink-soft">{faq.a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <section className="relative overflow-hidden bg-ink py-20 sm:py-28">
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 30% 40%, #F7C5C0, transparent 50%), radial-gradient(circle at 70% 60%, #DDD6F3, transparent 50%)" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-rose">FAQ</p>
            <h1 className="max-w-4xl font-display text-4xl leading-tight text-cream sm:text-5xl lg:text-6xl">
              Frequently asked questions
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-cream/70">
              Everything you need to know about BackThatFounder, our survey, and how you can get involved.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <FAQItem
                  faq={faq}
                  isOpen={openIndex === index}
                  onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-peach/30 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-display text-3xl text-ink sm:text-4xl">Still have questions?</h2>
            <p className="mx-auto mt-4 max-w-xl text-ink-soft">
              Take the survey to share your needs, or reach out to us directly.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a href="/" className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-cream transition hover:bg-ink-soft">
                Get Started &rarr;
              </a>
              <a href="/contact" className="rounded-full border-2 border-ink/20 px-7 py-3.5 text-sm font-semibold text-ink transition hover:border-ink/40">
                Contact Us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
