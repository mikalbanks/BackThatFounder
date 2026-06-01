import { useState } from "react";
import { CheckCircle2, Heart } from "lucide-react";
import ScrollReveal from "../components/ui/ScrollReveal";

/**
 * BackerSignupPage — Sign-up form for backers who want to offer in-kind support.
 * Collects basic info and requires consent acknowledging the donation model.
 */

const helpTypes = [
  "Mentorship & advising",
  "Software or tool credits",
  "Design or creative work",
  "Legal or financial guidance",
  "Workspace or housing",
  "Introductions & connections",
  "Marketing or PR support",
  "Other",
];

const interests = [
  "HealthTech",
  "EdTech",
  "FinTech",
  "Climate & Sustainability",
  "SaaS / Developer Tools",
  "Consumer / Social",
  "Hardware / IoT",
  "Non-profit / Social Impact",
  "Open to anything",
];

export default function BackerSignupPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    bio: "",
    helpTypes: [],
    interests: [],
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

  function handleToggle(field, item) {
    setForm((prev) => ({
      ...prev,
      [field]: prev[field].includes(item)
        ? prev[field].filter((s) => s !== item)
        : [...prev[field], item],
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
              "radial-gradient(circle at 30% 40%, #C7EAD9, transparent 50%), radial-gradient(circle at 70% 60%, #DDD6F3, transparent 50%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-mint">
              Become a Backer
            </p>
            <h1 className="max-w-4xl font-display text-4xl leading-tight text-cream sm:text-5xl lg:text-6xl">
              Support a founder with what you have
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-cream/70">
              BackThatFounder is built on in-kind generosity — your time,
              expertise, tools, or connections can help a founder clear the
              obstacles that slow them down. No money changes hands.
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
                  You&rsquo;re in!
                </h2>
                <p className="mt-3 max-w-md text-base leading-7 text-ink-soft">
                  Thanks for signing up as a backer. We&rsquo;ll match you with
                  founders who need exactly what you can offer.
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
                    placeholder="Your full name"
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
                    placeholder="you@company.com"
                  />
                </div>

                {/* Organization */}
                <div>
                  <label htmlFor="organization" className="mb-1.5 block text-sm font-semibold text-ink">
                    Company or organization (optional)
                  </label>
                  <input
                    type="text" id="organization" name="organization"
                    value={form.organization} onChange={handleChange}
                    className="w-full rounded-2xl border border-rose/30 bg-white px-4 py-3 text-ink transition focus:border-rose-deep focus:outline-none focus:ring-4 focus:ring-rose/20"
                    placeholder="Acme Corp, freelancer, etc."
                  />
                </div>

                {/* Bio */}
                <div>
                  <label htmlFor="bio" className="mb-1.5 block text-sm font-semibold text-ink">
                    How would you like to help founders?
                  </label>
                  <textarea
                    id="bio" name="bio" required rows={3}
                    value={form.bio} onChange={handleChange}
                    className="w-full resize-none rounded-2xl border border-rose/30 bg-white px-4 py-3 text-ink transition focus:border-rose-deep focus:outline-none focus:ring-4 focus:ring-rose/20"
                    placeholder="Tell us about your skills, experience, or resources you'd like to share..."
                  />
                </div>

                {/* Help types */}
                <fieldset>
                  <legend className="mb-2 text-sm font-semibold text-ink">
                    What can you offer? (select all that apply)
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    {helpTypes.map((item) => {
                      const selected = form.helpTypes.includes(item);
                      return (
                        <button
                          key={item}
                          type="button"
                          onClick={() => handleToggle("helpTypes", item)}
                          className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                            selected
                              ? "border-mint-deep bg-mint/30 text-ink"
                              : "border-rose/30 bg-white text-ink-soft hover:border-mint-deep/50"
                          }`}
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                {/* Interests */}
                <fieldset>
                  <legend className="mb-2 text-sm font-semibold text-ink">
                    Industries you&rsquo;re interested in (select all that apply)
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((item) => {
                      const selected = form.interests.includes(item);
                      return (
                        <button
                          key={item}
                          type="button"
                          onClick={() => handleToggle("interests", item)}
                          className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                            selected
                              ? "border-lavender bg-lavender/30 text-ink"
                              : "border-rose/30 bg-white text-ink-soft hover:border-lavender/50"
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
                      I understand that contributions through BackThatFounder are{" "}
                      <strong>in-kind donations</strong> (time, resources,
                      expertise) offered as gifts. They do not entitle me to
                      equity, ownership, financial returns, or repayment of any
                      kind.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream transition hover:bg-ink-soft"
                >
                  <Heart className="h-4 w-4" />
                  Sign Up as a Backer
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
