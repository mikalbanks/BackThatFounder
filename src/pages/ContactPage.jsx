import { useState } from "react";
import { CheckCircle2, Handshake, Mail, MessageSquare } from "lucide-react";
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
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink py-20 sm:py-28">
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 30% 40%, #F7C5C0, transparent 50%), radial-gradient(circle at 70% 60%, #DDD6F3, transparent 50%)" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-rose">Contact</p>
            <h1 className="max-w-4xl font-display text-4xl leading-tight text-cream sm:text-5xl lg:text-6xl">
              Get in touch
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-cream/70">
              Whether you want to share your founder story, explore a partnership,
              or just say hello — we'd love to hear from you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <ScrollReveal>
            {submitted ? (
              <div className="flex flex-col items-center justify-center rounded-3xl border border-mint/30 bg-mint/10 p-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-mint/20">
                  <CheckCircle2 className="h-8 w-8 text-mint-deep" />
                </div>
                <h2 className="mt-6 font-display text-2xl text-ink">Message received!</h2>
                <p className="mt-3 max-w-md text-base leading-7 text-ink-soft">
                  Thanks for reaching out. We'll get back to you as soon as we can.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-ink">Name</label>
                  <input
                    type="text" id="name" name="name" required
                    value={form.name} onChange={handleChange}
                    className="w-full rounded-2xl border border-rose/30 bg-white px-4 py-3 text-ink transition focus:border-rose-deep focus:outline-none focus:ring-4 focus:ring-rose/20"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-ink">Email</label>
                  <input
                    type="email" id="email" name="email" required
                    value={form.email} onChange={handleChange}
                    className="w-full rounded-2xl border border-rose/30 bg-white px-4 py-3 text-ink transition focus:border-rose-deep focus:outline-none focus:ring-4 focus:ring-rose/20"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="mb-1.5 block text-sm font-semibold text-ink">Subject</label>
                  <select
                    id="subject" name="subject" required
                    value={form.subject} onChange={handleChange}
                    className="w-full rounded-2xl border border-rose/30 bg-white px-4 py-3 text-ink transition focus:border-rose-deep focus:outline-none focus:ring-4 focus:ring-rose/20"
                  >
                    <option value="" disabled>Select a subject</option>
                    {subjects.map((s) => (<option key={s} value={s}>{s}</option>))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-ink">Message</label>
                  <textarea
                    id="message" name="message" required rows={5}
                    value={form.message} onChange={handleChange}
                    className="w-full resize-none rounded-2xl border border-rose/30 bg-white px-4 py-3 text-ink transition focus:border-rose-deep focus:outline-none focus:ring-4 focus:ring-rose/20"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream transition hover:bg-ink-soft"
                >
                  <MessageSquare className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            )}
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="space-y-6">
              <div className="rounded-3xl border border-rose/30 bg-white p-6 shadow-soft">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-rose/30">
                  <Mail className="h-5 w-5 text-ink" />
                </div>
                <h3 className="font-display text-xl text-ink">Email us</h3>
                <p className="mt-2 text-base leading-7 text-ink-soft">
                  Reach out directly at{" "}
                  <a href="mailto:hello@backthatfounder.com" className="font-semibold text-rose-deep hover:underline">
                    hello@backthatfounder.com
                  </a>
                </p>
              </div>

              <div className="rounded-3xl border border-rose/30 bg-white p-6 shadow-soft">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-mint/30">
                  <Handshake className="h-5 w-5 text-ink" />
                </div>
                <h3 className="font-display text-xl text-ink">Partner with us</h3>
                <p className="mt-2 text-base leading-7 text-ink-soft">
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
