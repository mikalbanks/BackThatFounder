export default function SectionHeader({ kicker, title, children, align = "left", tone = "light" }) {
  const centered = align === "center";
  const isDark = tone === "dark";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {kicker ? (
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-electric">
          {kicker}
        </p>
      ) : null}
      <h2
        className={`text-3xl font-black leading-tight sm:text-4xl lg:text-5xl ${
          isDark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {children ? (
        <div className="mt-5 text-base leading-8 text-slate-700 sm:text-lg">
          {children}
        </div>
      ) : null}
    </div>
  );
}
