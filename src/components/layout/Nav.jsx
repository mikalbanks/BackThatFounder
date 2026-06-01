import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-rose/40 bg-cream/90 backdrop-blur-md">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8"
      >
        <Link to="/" className="font-display text-xl text-ink sm:text-2xl">
          Back That <em className="text-rose-deep">Founder</em>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className={`text-sm font-medium transition hover:text-ink ${
                location.pathname === to ? "text-rose-deep" : "text-ink-soft"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        <Link
          to="/"
          className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-ink-soft md:inline-flex"
        >
          Get Started &rarr;
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-ink transition hover:bg-rose/30 md:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`mobile-menu overflow-hidden border-t border-rose/30 bg-cream md:hidden ${
          mobileOpen ? "mobile-menu-open" : ""
        }`}
      >
        <div className="mx-auto max-w-7xl space-y-1 px-4 pb-6 pt-4 sm:px-6">
          {navLinks.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className={`block rounded-lg px-4 py-3 text-base font-medium transition hover:bg-rose/20 ${
                location.pathname === to ? "text-rose-deep" : "text-ink"
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="pt-3">
            <Link
              to="/"
              className="block rounded-full bg-ink px-5 py-3 text-center text-sm font-semibold text-cream"
            >
              Get Started &rarr;
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
