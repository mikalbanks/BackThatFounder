import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "../components/ui/ScrollReveal";

const faqs = [
  {
    q: "What is BackThatFounder?",
    a: "BackThatFounder is a platform that connects startup founders with backers who want to help through in-kind donations — things like mentorship, software credits, legal guidance, workspace, and introductions. We don't facilitate financial investments, equity exchanges, or loans.",
  },
  {
    q: "What does 'in-kind support' mean?",
    a: "In-kind support means non-monetary contributions — a backer might donate their time for mentorship, provide free access to software tools, offer legal consultations, or share their professional network. No money changes hands between founders and backers on our platform.",
  },
  {
    q: "Who is this for?",
    a: "Founders: If you're building a startup and need practical help (mentorship, tools, advice, introductions), you can apply to be listed. Backers: If you have skills, resources, or expertise you'd like to share with early-stage founders, you can sign up to offer support.",
  },
  {
    q: "Is BackThatFounder free to use?",
    a: "Yes. Applying as a founder and signing up as a backer are both free. Our goal is to connect people who can help each other. There is no cost to participate, and we'll never sell your data.",
  },
  {
    q: "Do backers get equity or financial returns?",
    a: "No. All support on BackThatFounder is given as a gift. Backers do not receive equity, ownership stakes, financial returns, or repayment of any kind. This is clearly communicated during sign-up and in our Terms of Service.",
  },
  {
    q: "How does the matching process work?",
    a: "After you submit your application (as a founder) or sign-up (as a backer), our team reviews your profile and matches you with the best fit based on industry, stage, skills needed, and resources offered. We'll introduce you when we find a strong match.",
  },
  {
    q: "How is my data used?",
    a: "Your information is used to create your profile and match you with founders or backers. We don't sell your data to third parties. We may use anonymized, aggregated data to improve our platform. See our Terms & Privacy page for full details.",
  },
  {
    q: "How can my company partner with BackThatFounder?",
    a: "If you're a company, accelerator, or service provider that wants to offer tools, credits, or support to founders, we'd love to hear from you. Visit our Contact page to get in touch.",
  },
  {
    q: "Can I help build the community?",
    a: "Absolutely. We're looking for community builders who want to help recruit founders, organize events, share resources, and amplify the mission. Sign up as a backer and mention community-building in your bio.",
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
              Apply as a founder, sign up as a backer, or reach out to us directly.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link to="/apply" className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-cream transition hover:bg-ink-soft">
                Apply as a Founder &rarr;
              </Link>
              <Link to="/contact" className="rounded-full border-2 border-ink/20 px-7 py-3.5 text-sm font-semibold text-ink transition hover:border-ink/40">
                Contact Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
