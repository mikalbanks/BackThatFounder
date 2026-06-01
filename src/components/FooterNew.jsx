import { Link } from "react-router-dom";

const linkColumns = [
  {
    title: "Platform",
    links: [
      { label: "How It Works", to: "/how-it-works" },
      { label: "Apply as a Founder", to: "/apply" },
      { label: "Become a Backer", to: "/back" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "FAQ", to: "/faq" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", to: "/terms" },
      { label: "Privacy Policy", to: "/terms" },
    ],
  },
];

export default function FooterNew() {
  return (
    <footer className="bg-ink py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Disclaimer banner */}
        <div className="mb-10 rounded-2xl border border-cream/10 bg-cream/5 p-5 text-center">
          <p className="text-sm leading-relaxed text-cream/60">
            <strong className="text-cream/80">In-kind donations only.</strong>{" "}
            BackThatFounder facilitates non-financial, in-kind donations to help
            founders launch their ideas. No ownership or financial stake is
            exchanged. All contributions are gifts with no expectation of return.
          </p>
        </div>

        {/* Top row */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-display text-xl text-cream">
              Back That <em className="text-rose">Founder</em>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-cream/50">
              Connecting visionary founders with people who want to help —
              through time, advice, and resources.
            </p>
          </div>

          {/* Link columns */}
          {linkColumns.map((col) => (
            <div key={col.title}>
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-cream/70">
                {col.title}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-cream/50 transition hover:text-cream"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-cream/10" />

        {/* Bottom row */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-cream/40">
            &copy; {new Date().getFullYear()} Back That Founder. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/contact"
              className="text-sm text-cream/40 transition hover:text-cream"
            >
              Contact
            </Link>
            <Link
              to="/terms"
              className="text-sm text-cream/40 transition hover:text-cream"
            >
              Terms &amp; Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
