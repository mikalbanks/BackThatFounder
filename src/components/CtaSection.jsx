export default function CtaSection() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden py-24 sm:py-32"
      style={{
        background: "linear-gradient(135deg, #F7C5C0 0%, #DDD6F3 50%, #C9E8F5 100%)",
      }}
    >
      {/* Radial overlay for depth */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.45) 0%, transparent 70%)",
        }}
      />

      <div className="fade-up relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-ink-soft">
          Ready?
        </p>
        <h2 className="font-display text-3xl text-ink sm:text-4xl lg:text-5xl">
          Your idea deserves a believer
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg font-light leading-relaxed text-ink-soft">
          Whether you&rsquo;re a founder looking for backing or a backer looking
          for the next great idea — this is where it starts.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#"
            className="rounded-full bg-ink px-8 py-4 text-sm font-semibold text-cream transition hover:bg-ink-soft"
          >
            Apply as a Founder &rarr;
          </a>
          <a
            href="#"
            className="rounded-full border-2 border-ink/20 bg-white/50 px-8 py-4 text-sm font-semibold text-ink transition hover:border-ink/40"
          >
            Become a Backer
          </a>
        </div>
      </div>
    </section>
  );
}
