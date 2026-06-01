import { Link } from "react-router-dom";

const links = [
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "FAQ", to: "/faq" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Terms & Privacy", to: "/terms" },
];

export default function Footer() {
  return (
    <footer className="border-t border-rose/30 bg-cream py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <Link to="/" className="font-display text-lg text-ink transition hover:text-rose-deep">
            Back That <em className="text-rose-deep">Founder</em>
          </Link>
          <p className="mt-1 text-sm text-ink-muted">
            Founder-first support for real-world startup obstacles.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          {links.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className="text-sm font-medium text-ink-soft transition hover:text-ink"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl border-t border-rose/20 px-4 pt-6 sm:px-6 lg:px-8">
        <p className="text-center text-xs text-ink-muted">
          &copy; {new Date().getFullYear()} Back That Founder. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
