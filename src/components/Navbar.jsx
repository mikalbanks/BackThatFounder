import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "How It Works", to: "/how-it-works" },
  { label: "For Founders", to: "/apply" },
  { label: "For Backers", to: "/back" },
  { label: "About", to: "/about" },
  { label: "FAQ", to: "/faq" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-rose/40 bg-cream/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="font-display text-xl text-ink sm:text-2xl">
          Back That <em className="text-rose-deep">Founder</em>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className="text-sm font-medium text-ink-soft transition hover:text-ink"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          to="/apply"
          className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-ink-soft md:inline-flex"
        >
          Get Started &rarr;
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-ink transition hover:bg-rose/30 md:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-rose/30 bg-cream px-4 pb-6 pt-4 md:hidden">
          {navLinks.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-4 py-3 text-base font-medium text-ink transition hover:bg-rose/20"
            >
              {label}
            </Link>
          ))}
          <Link
            to="/apply"
            onClick={() => setMobileOpen(false)}
            className="mt-3 block rounded-full bg-ink px-5 py-3 text-center text-sm font-semibold text-cream"
          >
            Get Started &rarr;
          </Link>
        </div>
      )}
    </header>
  );
}
