const tagColors = [
  "bg-rose/40 text-ink",
  "bg-mint/40 text-ink",
  "bg-lavender/40 text-ink",
];

export default function FounderCard({
  name = "Amara Johnson",
  role = "CEO, Solara Health",
  tags = ["HealthTech", "Seed Stage", "Impact"],
  progress = 72,
  runway = "8 months",
  backerCount = 34,
  emoji = "👩🏾‍💻",
}) {
  return (
    <div className="animate-card-float w-full max-w-sm rounded-3xl bg-white p-6 shadow-soft">
      {/* Header */}
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-peach text-2xl">
          {emoji}
        </span>
        <div>
          <p className="font-semibold text-ink">{name}</p>
          <p className="text-sm text-ink-muted">{role}</p>
        </div>
      </div>

      {/* Tags */}
      <div className="mb-4 flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span
            key={tag}
            className={`rounded-full px-3 py-1 text-xs font-medium ${tagColors[i % tagColors.length]}`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Progress */}
      <div className="mb-1 flex items-center justify-between text-sm">
        <span className="text-ink-soft">Funding progress</span>
        <span className="font-semibold text-ink">{progress}%</span>
      </div>
      <div className="mb-4 h-2 overflow-hidden rounded-full bg-cream">
        <div
          className="h-full rounded-full bg-gradient-to-r from-rose to-lavender"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-ink-muted">
          <span className="font-semibold text-ink">{backerCount}</span> backers
          &middot; {runway} runway
        </div>
        <button className="rounded-full bg-ink px-4 py-2 text-xs font-semibold text-cream transition hover:bg-ink-soft">
          Back Her &rarr;
        </button>
      </div>
    </div>
  );
}
