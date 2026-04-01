import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "./projectsData";

const PortfolioHero = () => {
  const categories = new Set(projects.map((project) => project.category)).size;
  const shippedProjects = projects.filter((project) => project.status === "Shipped").length;

  return (
    <section className="relative overflow-hidden border-b border-[#E2E8F0] bg-[#F6F7F2]">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-55" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(255,255,255,0.88),transparent_34%),radial-gradient(circle_at_80%_28%,rgba(20,184,166,0.05),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-16 sm:px-8 md:pb-16 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="max-w-4xl">
            <h1 className="text-[clamp(3.4rem,7vw,5.8rem)] leading-[0.93] text-[#0F172A]">
              SELECTED PROJECTS
              <span className="block text-[#3F7C7A]">AND DELIVERY WORK.</span>
            </h1>
            <p className="mt-6 max-w-3xl border-l border-[#D5DDE5] pl-5 text-base leading-relaxed text-[#667085] md:text-lg">
              Explore recent client projects across education, travel, commerce, construction, and operations. Each
              project shows what was built, the business context, and the outcome.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 rounded-[8px] bg-[#123F43] px-5 py-3 font-medium text-[#FFFFFF] transition hover:bg-[#0F3538]"
              >
                Explore Projects
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center rounded-[8px] border border-[#D7E0E6] bg-[#FFFFFF] px-5 py-3 font-medium text-[#0F172A] transition hover:bg-[#FBFCFA]"
              >
                Start Your Project
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            <div className="border border-[#DCE3E8] bg-[#FFFFFF] p-5 shadow-[0_8px_24px_rgba(15,23,42,0.03)]">
              <p className="text-3xl text-[#0F172A]">{shippedProjects}</p>
              <p className="mt-2 text-sm text-[#667085]">Selected client projects</p>
            </div>
            <div className="border border-[#DCE3E8] bg-[#FFFFFF] p-5 shadow-[0_8px_24px_rgba(15,23,42,0.03)]">
              <p className="text-3xl text-[#0F172A]">{categories}</p>
              <p className="mt-2 text-sm text-[#667085]">Industry categories</p>
            </div>
            <div className="border border-[#DCE3E8] bg-[#FFFFFF] p-5 shadow-[0_8px_24px_rgba(15,23,42,0.03)]">
              <p className="text-3xl text-[#0F172A]">End-to-end</p>
              <p className="mt-2 text-sm text-[#667085]">Discovery, build, deployment, support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
