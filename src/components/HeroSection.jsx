import { Link } from "react-router-dom";
import FounderCard from "./FounderCard";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28 sm:pt-36">
      {/* Animated blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Left: Copy */}
        <div>
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-butter px-4 py-2 text-sm font-medium text-ink-soft">
            <span className="animate-pulse-dot h-2 w-2 rounded-full bg-orange-400" />
            Applications for 2026 now open
          </div>

          <h1 className="font-display text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
            Where{" "}
            <em className="text-rose-deep">bold</em>{" "}
            ideas find their{" "}
            <span className="italic">believers</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg font-light leading-relaxed text-ink-soft">
            Connecting visionary founders with people who want to help — through
            time, advice, and resources, not financial returns.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/apply"
              className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-cream transition hover:bg-ink-soft"
            >
              Apply as a Founder &rarr;
            </Link>
            <Link
              to="/how-it-works"
              className="rounded-full border-2 border-ink/20 px-7 py-3.5 text-sm font-semibold text-ink transition hover:border-ink/40 hover:bg-ink/5"
            >
              See How It Works
            </Link>
          </div>

          {/* In-kind notice */}
          <p className="mt-6 max-w-md text-xs leading-relaxed text-ink-muted">
            BackThatFounder facilitates in-kind donations only. Backers
            contribute time, expertise, and resources as gifts — no equity or
            financial returns are involved.
          </p>
        </div>

        {/* Right: Card stack */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Ghost cards behind */}
          <div className="absolute right-8 top-8 h-72 w-72 rotate-6 rounded-3xl bg-peach/50 sm:h-80 sm:w-80" />
          <div className="absolute right-4 top-4 h-72 w-72 -rotate-3 rounded-3xl bg-mint/40 sm:h-80 sm:w-80" />

          {/* Main card */}
          <div className="relative z-10">
            <FounderCard />
          </div>

          {/* Floating badges */}
          <div className="animate-badge-float absolute -left-4 top-12 z-20 rounded-2xl bg-white px-4 py-2.5 text-sm font-medium shadow-lg">
            <span className="mr-1">🎉</span> Just matched!
          </div>
          <div className="animate-badge-float-2 absolute -right-2 bottom-16 z-20 rounded-2xl bg-white px-4 py-2.5 text-sm font-medium shadow-lg">
            <span className="mr-1">⭐</span> Featured Founder
          </div>
        </div>
      </div>
    </section>
  );
}
