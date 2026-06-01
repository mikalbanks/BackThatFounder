const items = [
  "Relationship-first investing",
  "240+ founders backed",
  "Community-powered capital",
  "Not just funding — belief",
  "18 industries represented",
  "Built for the underestimated",
];

function MarqueeTrack() {
  return (
    <div className="flex shrink-0 items-center gap-8">
      {items.map((item) => (
        <span key={item} className="flex items-center gap-8">
          <span className="whitespace-nowrap font-display text-lg italic text-ink/80">
            {item}
          </span>
          <span className="text-rose-deep" aria-hidden="true">✦</span>
        </span>
      ))}
    </div>
  );
}

export default function MarqueeBar() {
  return (
    <section className="overflow-hidden border-y border-rose-deep/30 bg-rose py-4">
      <div className="animate-marquee flex w-max gap-8">
        <MarqueeTrack />
        <MarqueeTrack />
      </div>
    </section>
  );
}
