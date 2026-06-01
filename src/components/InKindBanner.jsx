import { Link } from "react-router-dom";

/**
 * InKindBanner — Prominent disclaimer/explainer about the in-kind donation model.
 * Replaces the old StatsBar section with honest, transparent messaging.
 */
export default function InKindBanner() {
  return (
    <section className="border-y border-rose/40 bg-peach/40 py-16 sm:py-20">
      <div className="fade-up mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-rose-deep">
          Our Model
        </p>
        <h2 className="font-display text-2xl text-ink sm:text-3xl">
          In-kind support, not financial investment
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-ink-soft">
          BackThatFounder facilitates <strong>non-financial, in-kind
          donations</strong> to help founders launch their ideas. Backers
          contribute time, expertise, tools, and resources as gifts.{" "}
          <strong>No ownership or financial stake is exchanged.</strong>
        </p>
        <div className="mt-6">
          <Link
            to="/how-it-works"
            className="text-sm font-semibold text-rose-deep underline underline-offset-4 transition hover:text-ink"
          >
            Learn how it works &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
