import ScrollReveal from "../components/ui/ScrollReveal";

/**
 * TermsPage — Terms of Service and Privacy Policy.
 * Covers the in-kind donation model, eligibility, data practices, and disclaimers.
 */

const sections = [
  {
    title: "1. About BackThatFounder",
    content: `BackThatFounder is a platform that connects startup founders with individuals and organizations ("backers") who wish to provide in-kind support. In-kind support includes, but is not limited to: mentorship, professional services, software tools, workspace access, and introductions. BackThatFounder does not facilitate financial transactions, equity exchanges, loans, or any form of monetary investment between founders and backers.`,
  },
  {
    title: "2. In-Kind Donation Model",
    content: `All contributions facilitated through BackThatFounder are in-kind donations — non-monetary gifts of time, expertise, or resources. Backers do not receive equity, ownership stakes, financial returns, or repayment of any kind. By using this platform, both founders and backers acknowledge and agree to this model.`,
  },
  {
    title: "3. Eligibility",
    content: `Founders: You must be 18 years or older and working on a legitimate startup, project, or business idea. You do not need to be incorporated to apply, but you must accurately represent yourself and your project.\n\nBackers: You must be 18 years or older. You agree that any support you offer is given voluntarily as a gift, with no expectation of compensation, equity, or financial return.`,
  },
  {
    title: "4. User Responsibilities",
    content: `You agree to provide accurate information when creating your profile or submitting forms. You will not use the platform for fraudulent purposes, spam, or harassment. BackThatFounder reserves the right to remove any user who violates these terms or misrepresents their identity or intentions.`,
  },
  {
    title: "5. No Financial Advice",
    content: `Nothing on this platform constitutes financial, legal, or investment advice. BackThatFounder is not a broker, investment advisor, or financial institution. We do not evaluate or guarantee the viability of any startup or the quality of any backer's support.`,
  },
  {
    title: "6. Privacy & Data",
    content: `We collect the information you provide through our forms (name, email, bio, interests). This data is used solely to match founders with backers and improve the platform. We do not sell your personal information to third parties. We may use anonymized, aggregated data to identify trends and improve our services. For details, see our Privacy Practices section below.`,
  },
  {
    title: "7. Privacy Practices",
    content: `Data we collect: Name, email address, startup or organization details, areas of interest, and form responses.\n\nHow we use it: To create your profile, match founders with backers, communicate with you about your application, and improve our platform.\n\nData sharing: We share your profile information only with matched founders or backers on the platform. We do not sell data to advertisers or third-party marketers.\n\nCookies: Our website uses essential cookies for functionality. We do not use tracking cookies for advertising purposes.\n\nData retention: Your information is retained for as long as your account is active. You may request deletion of your data at any time by contacting us.\n\nYour rights: You may request access to, correction of, or deletion of your personal data by emailing hello@backthatfounder.com.`,
  },
  {
    title: "8. Limitation of Liability",
    content: `BackThatFounder serves as a connector between founders and backers. We do not guarantee the quality, reliability, or outcomes of any match or support provided. We are not liable for any disputes, losses, or damages arising from interactions between users. All support is provided at the backer's discretion and the founder's acceptance.`,
  },
  {
    title: "9. Changes to These Terms",
    content: `We may update these terms from time to time. Material changes will be communicated via email or a notice on our website. Continued use of the platform after changes constitutes acceptance of the updated terms.`,
  },
  {
    title: "10. Contact",
    content: `If you have questions about these terms or our practices, contact us at hello@backthatfounder.com.`,
  },
];

export default function TermsPage() {
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
              Legal
            </p>
            <h1 className="max-w-4xl font-display text-4xl leading-tight text-cream sm:text-5xl lg:text-6xl">
              Terms of Service &amp; Privacy
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-cream/70">
              Transparency is one of our core values. Here&rsquo;s how
              BackThatFounder works, what we expect from users, and how we
              handle your data.
            </p>
            <p className="mt-4 text-sm text-cream/50">
              Last updated: June 1, 2026
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {sections.map((section, i) => (
              <ScrollReveal key={i} delay={i * 0.03}>
                <div className="rounded-2xl border border-rose/20 bg-white p-6 shadow-sm sm:p-8">
                  <h2 className="mb-4 font-display text-xl text-ink">
                    {section.title}
                  </h2>
                  {section.content.split("\n\n").map((para, j) => (
                    <p
                      key={j}
                      className="mb-3 text-base leading-7 text-ink-soft last:mb-0"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
