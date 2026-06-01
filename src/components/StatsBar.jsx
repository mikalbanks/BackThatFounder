const stats = [
  { value: "240", accent: "+", label: "Founders backed" },
  { value: "$4.2", accent: "M", label: "Capital deployed" },
  { value: "18", accent: "", label: "Industries" },
  { value: "94", accent: "%", label: "Founder satisfaction" },
];

export default function StatsBar() {
  return (
    <section id="stats" className="border-y border-rose/40 bg-white py-14 sm:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:gap-0 lg:px-8">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`text-center ${i < stats.length - 1 ? "lg:border-r lg:border-rose/30" : ""}`}
          >
            <p className="font-display text-4xl text-ink sm:text-5xl">
              {stat.value}
              <span className="text-rose-deep">{stat.accent}</span>
            </p>
            <p className="mt-1 text-sm font-medium text-ink-muted">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
