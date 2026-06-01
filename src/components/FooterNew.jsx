const linkColumns = [
  {
    title: "Platform",
    links: ["How It Works", "For Founders", "For Backers", "Success Stories"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Contact"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  },
];

export default function FooterNew() {
  return (
    <footer className="bg-ink py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top row */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <p className="font-display text-xl text-cream">
              Back That <em className="text-rose">Founder</em>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-cream/50">
              A community-powered platform connecting visionary founders with
              backers who believe in people, not just pitches.
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
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-cream/50 transition hover:text-cream"
                    >
                      {link}
                    </a>
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
          <div className="flex gap-6">
            {["Twitter", "LinkedIn", "Instagram"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm text-cream/40 transition hover:text-cream"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
