import { ArrowRight } from "lucide-react";
import { SURVEY_URL } from "../../data/constants";

export default function CTAButton({ className = "", variant = "primary", href, children }) {
  const isLight = variant === "light";

  return (
    <a
      href={href || SURVEY_URL}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-electric/30 sm:px-6 ${
        isLight
          ? "bg-white text-ink shadow-soft hover:-translate-y-0.5 hover:bg-cloud"
          : "bg-electric text-white shadow-glow hover:-translate-y-0.5 hover:bg-[#1268df]"
      } ${className}`}
    >
      {children || "Take the Founder Survey"}
      <ArrowRight
        aria-hidden="true"
        className="h-4 w-4 transition duration-200 group-hover:translate-x-0.5"
      />
    </a>
  );
}
