import { useState } from "react";
import { CheckCircle2, Rocket } from "lucide-react";
import ScrollReveal from "../components/ui/ScrollReveal";

/**
 * FounderApplyPage — Sign-up form for founders seeking in-kind support.
 * Collects basic info and requires consent acknowledging the donation model.
 */

const stages = [
  "Idea stage",
  "Pre-seed / MVP",
  "Seed",
  "Series A+",
];

const supportTypes = [
  "Mentorship & advice",
  "Software tools & credits",
  "Legal or accounting help",
  "Co-working or office space",
  "Design or marketing support",
  "Introductions & networking",
  "Other",
];

export default function FounderApplyPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    startupName: "",
    stage: "",
    bio: "",
    supportNeeded: [],
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && name === "consent") {
      setForm((prev) => ({ ...prev, consent: checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  }

  function handleSupportToggle(item) {
    setForm((prev) => ({
      ...prev,
      supportNeeded: prev.supportNeeded.includes(item)
        ? prev.supportNeeded.filter((s) => s !== item)
        : [...prev.supportNeeded, item],
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: Connect to backend / Supabase / email service
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink py-20 sm:py-28">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(circle at 30% 40%, #F7C5C0, transparent 50%), radial-gradient(circle at 70% 60%, #DDD6F3, transparent 50%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-rose">
              Apply as a Founder
            </p>
            <h1 className="max-w-4xl font-display text-4xl leading-tight text-cream sm:text-5xl lg:text-6xl">
              Tell us about your idea
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-cream/70">
              BackThatFounder connects you with people who want to help through
              time, expertise, and resources — not financial investment. Fill out
              the form below to get started.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Form */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            {submitted ? (
              <div className="flex flex-col items-center justify-center rounded-3xl border border-mint/30 bg-mint/10 p-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-mint/20">
                  <CheckCircle2 className="h-8 w-8 text-mint-deep" />
                </div>
                <h2 className="mt-6 font-display text-2xl text-ink">
                  Application received!
                </h2>
                <p className="mt-3 max-w-md text-base leading-7 text-ink-soft">
                  Thanks for sharing your story. We&rsquo;ll review your
                  application and get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-ink">
                    Your name
                  </label>
                  <input
                    type="text" id="name" name="name" required
                    value={form.name} onChange={handleChange}
                    className="w-full rounded-2xl border border-rose/30 bg-white px-4 py-3 text-ink transition focus:border-rose-deep focus:outline-none focus:ring-4 focus:ring-rose/20"
                    placeholder="Jane Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-ink">
                    Email
                  </label>
                  <input
                    type="email" id="email" name="email" required
                    value={form.email} onChange={handleChange}
                    className="w-full rounded-2xl border border-rose/30 bg-white px-4 py-3 text-ink transition focus:border-rose-deep focus:outline-none focus:ring-4 focus:ring-rose/20"
                    placeholder="you@startup.com"
                  />
                </div>

                {/* Startup name */}
                <div>
                  <label htmlFor="startupName" className="mb-1.5 block text-sm font-semibold text-ink">
                    Startup name
                  </label>
                  <input
                    type="text" id="startupName" name="startupName" required
                    value={form.startupName} onChange={handleChange}
                    className="w-full rounded-2xl border border-rose/30 bg-white px-4 py-3 text-ink transition focus:border-rose-deep focus:outline-none focus:ring-4 focus:ring-rose/20"
                    placeholder="Your startup or project name"
                  />
                </div>

                {/* Stage */}
                <div>
                  <label htmlFor="stage" className="mb-1.5 block text-sm font-semibold text-ink">
                    What stage are you at?
                  </label>
                  <select
                    id="stage" name="stage" required
                    value={form.stage} onChange={handleChange}
                    className="w-full rounded-2xl border border-rose/30 bg-white px-4 py-3 text-ink transition focus:border-rose-deep focus:outline-none focus:ring-4 focus:ring-rose/20"
                  >
                    <option value="" disabled>Select a stage</option>
                    {stages.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Bio / pitch */}
                <div>
                  <label htmlFor="bio" className="mb-1.5 block text-sm font-semibold text-ink">
                    Tell us about your idea
                  </label>
                  <textarea
                    id="bio" name="bio" required rows={4}
                    value={form.bio} onChange={handleChange}
                    className="w-full resize-none rounded-2xl border border-rose/30 bg-white px-4 py-3 text-ink transition focus:border-rose-deep focus:outline-none focus:ring-4 focus:ring-rose/20"
                    placeholder="What problem are you solving and why does it matter to you?"
                  />
                </div>

                {/* Support types */}
                <fieldset>
                  <legend className="mb-2 text-sm font-semibold text-ink">
                    What kind of support would help most? (select all that apply)
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    {supportTypes.map((item) => {
                      const selected = form.supportNeeded.includes(item);
                      return (
                        <button
                          key={item}
                          type="button"
                          onClick={() => handleSupportToggle(item)}
                          className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                            selected
                              ? "border-rose-deep bg-rose/30 text-ink"
                              : "border-rose/30 bg-white text-ink-soft hover:border-rose-deep/50"
                          }`}
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                {/* Consent */}
                <div className="rounded-2xl border border-rose/20 bg-peach/20 p-4">
                  <label className="flex items-start gap-3 text-sm text-ink-soft">
                    <input
                      type="checkbox" name="consent" required
                      checked={form.consent} onChange={handleChange}
                      className="mt-0.5 h-4 w-4 rounded border-rose/30 accent-rose-deep"
                    />
                    <span>
                      I understand that BackThatFounder facilitates{" "}
                      <strong>in-kind donations</strong> (time, resources,
                      expertise) — not equity investments, loans, or financial
                      transfers. No ownership or financial stake is exchanged.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream transition hover:bg-ink-soft"
                >
                  <Rocket className="h-4 w-4" />
                  Submit Application
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
