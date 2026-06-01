const tagColors = [
  "bg-rose/40 text-ink",
  "bg-mint/40 text-ink",
  "bg-lavender/40 text-ink",
];

/**
 * FounderCard — Sample founder profile card used in the hero section.
 * Updated to reflect in-kind support model (no financial metrics).
 */
export default function FounderCard({
  name = "Amara Johnson",
  role = "CEO, Solara Health",
  tags = ["HealthTech", "Seed Stage", "Impact"],
  supportProgress = 72,
  supportCount = 5,
  needs = "Mentorship, legal help",
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

      {/* Support progress */}
      <div className="mb-1 flex items-center justify-between text-sm">
        <span className="text-ink-soft">Support received</span>
        <span className="font-semibold text-ink">{supportProgress}%</span>
      </div>
      <div className="mb-4 h-2 overflow-hidden rounded-full bg-cream">
        <div
          className="h-full rounded-full bg-gradient-to-r from-rose to-lavender"
          style={{ width: `${supportProgress}%` }}
        />
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-ink-muted">
          <span className="font-semibold text-ink">{supportCount}</span> backers
          &middot; Needs: {needs}
        </div>
        <button className="rounded-full bg-ink px-4 py-2 text-xs font-semibold text-cream transition hover:bg-ink-soft">
          Support &rarr;
        </button>
      </div>
    </div>
  );
}
