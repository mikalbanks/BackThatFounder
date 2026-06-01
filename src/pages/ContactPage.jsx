import { useState } from "react";
import { CheckCircle2, Handshake, Mail, MessageSquare } from "lucide-react";
import SectionHeader from "../components/ui/SectionHeader";
import IconBadge from "../components/ui/IconBadge";
import ScrollReveal from "../components/ui/ScrollReveal";

const subjects = [
  "I'm a founder looking for support",
  "I want to partner or sponsor",
  "I want to join the community",
  "General question",
  "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-28">
        <div className="animated-gradient absolute inset-0 opacity-80" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-electric">
              Contact
            </p>
            <h1 className="max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Get in touch
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              Whether you want to share your founder story, explore a partnership,
              or just say hello — we'd love to hear from you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-paper py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <ScrollReveal>
            {submitted ? (
              <div className="flex flex-col items-center justify-center rounded-lg border border-mint/30 bg-mint/5 p-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-mint/10">
                  <CheckCircle2 className="h-8 w-8 text-[#087f5f]" />
                </div>
                <h2 className="mt-6 text-2xl font-black text-ink">
                  Message received!
                </h2>
                <p className="mt-3 max-w-md text-base leading-7 text-slate-700">
                  Thanks for reaching out. We'll get back to you as soon as we can.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-bold text-ink">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-ink/15 bg-white px-4 py-3 text-ink shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition focus:border-electric focus:outline-none focus:ring-4 focus:ring-electric/15"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-bold text-ink">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-ink/15 bg-white px-4 py-3 text-ink shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition focus:border-electric focus:outline-none focus:ring-4 focus:ring-electric/15"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="mb-1.5 block text-sm font-bold text-ink">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-ink/15 bg-white px-4 py-3 text-ink shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition focus:border-electric focus:outline-none focus:ring-4 focus:ring-electric/15"
                  >
                    <option value="" disabled>
                      Select a subject
                    </option>
                    {subjects.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-bold text-ink">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full resize-none rounded-lg border border-ink/15 bg-white px-4 py-3 text-ink shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition focus:border-electric focus:outline-none focus:ring-4 focus:ring-electric/15"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-electric px-6 py-3 text-sm font-bold text-white shadow-glow transition duration-200 hover:-translate-y-0.5 hover:bg-[#1268df] focus:outline-none focus-visible:ring-4 focus-visible:ring-electric/30"
                >
                  <MessageSquare className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            )}
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="space-y-6">
              <div className="rounded-lg border border-ink/10 bg-white p-6 shadow-soft">
                <IconBadge icon={Mail} tone="blue" />
                <h3 className="mt-4 text-xl font-black text-ink">Email us</h3>
                <p className="mt-2 text-base leading-7 text-slate-700">
                  Reach out directly at{" "}
                  <a
                    href="mailto:hello@backthatfounder.com"
                    className="font-bold text-electric hover:underline"
                  >
                    hello@backthatfounder.com
                  </a>
                </p>
              </div>

              <div className="rounded-lg border border-ink/10 bg-white p-6 shadow-soft">
                <IconBadge icon={Handshake} tone="green" />
                <h3 className="mt-4 text-xl font-black text-ink">Partner with us</h3>
                <p className="mt-2 text-base leading-7 text-slate-700">
                  Are you a company, accelerator, or service provider that wants to
                  offer perks, credits, or support to founders? We'd love to explore
                  how we can work together.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
