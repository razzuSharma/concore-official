import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "./projectsData";

const PortfolioHero = () => {
  const categories = new Set(projects.map((project) => project.category)).size;

  return (
    <section className="relative overflow-hidden border-b border-[#E2E8F0] bg-[#F8F9F5]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(20,184,166,0.12),transparent_38%),radial-gradient(circle_at_85%_0%,rgba(71,85,105,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-16 sm:px-8 md:pb-16 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="max-w-4xl">
            <p className="font-mono inline-flex rounded-full border border-[#E2E8F0] bg-[#F0FDFA] px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-[#14B8A6]">
              Case Studies
            </p>
            <h1 className="font-display mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-[#0F172A] md:text-5xl">
              Portfolio That Shows How We Build, Not Just What We Built
            </h1>
            <p className="mt-6 max-w-3xl font-sans text-base leading-relaxed text-[#475569] md:text-lg">
              Explore detailed project stories across education, travel, commerce, manufacturing, and operations.
              Each case study breaks down business context, architecture decisions, delivery execution, and impact.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-[#14B8A6] px-5 py-3 font-medium text-[#FFFFFF] transition hover:bg-[#14B8A6]"
              >
                Explore Projects
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center rounded-lg border border-[#E2E8F0] bg-[#FFFFFF] px-5 py-3 font-medium text-[#0F172A] transition hover:bg-[#F0FDFA]"
              >
                Start Your Project
              </Link>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            <div className="rounded-xl border border-[#E2E8F0] bg-[#FFFFFF] p-4">
              <p className="font-display text-3xl font-semibold tracking-[-0.02em] text-[#0F172A]">{projects.length}+</p>
              <p className="font-mono mt-1 text-xs uppercase tracking-[0.12em] text-[#475569]">Projects Featured</p>
            </div>
            <div className="rounded-xl border border-[#E2E8F0] bg-[#FFFFFF] p-4">
              <p className="font-display text-3xl font-semibold tracking-[-0.02em] text-[#0F172A]">{categories}</p>
              <p className="font-mono mt-1 text-xs uppercase tracking-[0.12em] text-[#475569]">Industries</p>
            </div>
            <div className="rounded-xl border border-[#E2E8F0] bg-[#FFFFFF] p-4">
              <p className="font-display text-3xl font-semibold tracking-[-0.02em] text-[#0F172A]">End-to-End</p>
              <p className="font-mono mt-1 text-xs uppercase tracking-[0.12em] text-[#475569]">Discovery to Launch</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative border-t border-[#E2E8F0] bg-[#F8F9F5]/80">
        <div className="mx-auto max-w-7xl px-6 py-4 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-[#475569]">
            CONCORE TECHNOLOGIES PORTFOLIO
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
