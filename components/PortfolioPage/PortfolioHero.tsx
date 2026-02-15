import React from "react";

const PortfolioHero = () => {
  return (
    <section className="relative overflow-hidden border-b border-gray-800 bg-gray-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.3),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(16,185,129,0.2),transparent_38%)]" />
      <div className="relative mx-auto max-w-7xl px-8 py-20">
        <div className="max-w-4xl">
          <p className="font-mono inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-blue-200">
            CONCORE TECHNOLOGIES PORTFOLIO
          </p>
          <h1 className="font-display mt-5 text-5xl font-semibold leading-[1.05] tracking-[-0.02em] text-white md:text-6xl">
            Detailed Case Studies From Real Product Delivery
          </h1>
          <p className="mt-6 max-w-3xl font-sans text-lg leading-relaxed text-white/70">
            Explore in-depth project work across education, travel, commerce, manufacturing,
            and construction. Each case study covers the business context, engineering approach,
            delivery workflow, technical architecture, and measurable outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
