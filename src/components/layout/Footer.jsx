import { Link } from "react-router-dom";

const links = [
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "FAQ", to: "/faq" },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <Link to="/" className="text-lg font-black text-ink hover:text-electric transition">
            BackThatFounder
          </Link>
          <p className="mt-1 text-sm text-slate-600">
            Founder-first support for real-world startup obstacles.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          {links.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className="text-sm font-semibold text-slate-600 transition hover:text-ink"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl border-t border-ink/5 px-4 pt-6 sm:px-6 lg:px-8">
        <p className="text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} BackThatFounder. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
