import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { KeyRound, Menu, X } from "lucide-react";
import CTAButton from "../ui/CTAButton";

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
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8"
      >
        <Link to="/" className="flex items-center gap-3 text-ink">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink text-white shadow-soft">
            <KeyRound aria-hidden="true" className="h-5 w-5" />
          </span>
          <span className="text-base font-black sm:text-lg">BackThatFounder</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className={`text-sm font-semibold transition hover:text-ink ${
                location.pathname === to ? "text-electric" : "text-slate-700"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        <CTAButton className="hidden px-4 py-2.5 text-xs sm:text-sm md:inline-flex" />

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-ink transition hover:bg-cloud md:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`mobile-menu overflow-hidden border-t border-ink/10 bg-paper md:hidden ${
          mobileOpen ? "mobile-menu-open" : ""
        }`}
      >
        <div className="mx-auto max-w-7xl space-y-1 px-4 pb-6 pt-4 sm:px-6">
          {navLinks.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className={`block rounded-lg px-4 py-3 text-base font-semibold transition hover:bg-cloud ${
                location.pathname === to ? "text-electric" : "text-ink"
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="pt-3">
            <CTAButton className="w-full" />
          </div>
        </div>
      </div>
    </header>
  );
}
