import FounderCard from "./FounderCard";

const avatarInitials = ["AJ", "MR", "KL", "DP"];
const avatarColors = [
  "bg-rose text-ink",
  "bg-mint text-ink",
  "bg-lavender text-ink",
  "bg-peach text-ink",
];

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
            Now accepting applications &middot; Spring 2025
          </div>

          <h1 className="font-display text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
            Where{" "}
            <em className="text-rose-deep">bold</em>{" "}
            ideas find their{" "}
            <span className="italic">believers</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg font-light leading-relaxed text-ink-soft">
            A community-powered platform connecting visionary founders with
            backers who believe in people, not just pitches.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#cta"
              className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-cream transition hover:bg-ink-soft"
            >
              Start Your Journey &rarr;
            </a>
            <a
              href="#how-it-works"
              className="rounded-full border-2 border-ink/20 px-7 py-3.5 text-sm font-semibold text-ink transition hover:border-ink/40 hover:bg-ink/5"
            >
              See How It Works
            </a>
          </div>

          {/* Trust row */}
          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-2">
              {avatarInitials.map((init, i) => (
                <span
                  key={init}
                  className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-cream text-xs font-bold ${avatarColors[i]}`}
                >
                  {init}
                </span>
              ))}
            </div>
            <p className="text-sm text-ink-muted">
              <span className="font-semibold text-ink">240+</span> founders
              backed this year across{" "}
              <span className="font-semibold text-ink">18</span> industries
            </p>
          </div>
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
            <span className="mr-1">🎉</span> Just backed! <span className="font-bold text-rose-deep">+$5k</span>
          </div>
          <div className="animate-badge-float-2 absolute -right-2 bottom-16 z-20 rounded-2xl bg-white px-4 py-2.5 text-sm font-medium shadow-lg">
            <span className="mr-1">⭐</span> Featured Founder
          </div>
        </div>
      </div>
    </section>
  );
}
