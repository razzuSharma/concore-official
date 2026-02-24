import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "./projectsData";

const PortfolioHero = () => {
  const categories = new Set(projects.map((project) => project.category)).size;

  return (
    <section className="relative overflow-hidden border-b border-gray-800/80 bg-gray-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(59,130,246,0.32),transparent_38%),radial-gradient(circle_at_85%_0%,rgba(20,184,166,0.25),transparent_40%),linear-gradient(to_bottom,rgba(3,7,18,0),rgba(3,7,18,0.8))]" />
      <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-16 sm:px-8 md:pb-16 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="max-w-4xl">
            <p className="font-mono inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-blue-200">
              Case Studies
            </p>
            <h1 className="font-display mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-white sm:text-5xl md:text-6xl">
              Portfolio That Shows How We Build, Not Just What We Built
            </h1>
            <p className="mt-6 max-w-3xl font-sans text-base leading-relaxed text-white/75 sm:text-lg">
              Explore detailed project stories across education, travel, commerce, manufacturing, and operations.
              Each case study breaks down business context, architecture decisions, delivery execution, and impact.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-500"
              >
                Explore Projects
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center rounded-lg border border-gray-700 bg-gray-900 px-5 py-3 font-medium text-white transition hover:bg-gray-800"
              >
                Start Your Project
              </Link>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            <div className="rounded-xl border border-gray-800 bg-gray-900/80 p-4">
              <p className="font-display text-3xl font-semibold tracking-[-0.02em] text-white">{projects.length}+</p>
              <p className="font-mono mt-1 text-xs uppercase tracking-[0.12em] text-white/65">Projects Featured</p>
            </div>
            <div className="rounded-xl border border-gray-800 bg-gray-900/80 p-4">
              <p className="font-display text-3xl font-semibold tracking-[-0.02em] text-white">{categories}</p>
              <p className="font-mono mt-1 text-xs uppercase tracking-[0.12em] text-white/65">Industries</p>
            </div>
            <div className="rounded-xl border border-gray-800 bg-gray-900/80 p-4">
              <p className="font-display text-3xl font-semibold tracking-[-0.02em] text-white">End-to-End</p>
              <p className="font-mono mt-1 text-xs uppercase tracking-[0.12em] text-white/65">Discovery to Launch</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative border-t border-gray-800/70 bg-gray-950/80">
        <div className="mx-auto max-w-7xl px-6 py-4 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-white/55">
            CONCORE TECHNOLOGIES PORTFOLIO
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
