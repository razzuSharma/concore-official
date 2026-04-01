import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/HomePage/Container";
import Section from "@/components/HomePage/Section";
import { Button } from "@/components/ui/button";
import { projects } from "@/components/PortfolioPage/projectsData";

const featuredProjects = projects
  .filter((project) => project.status === "Shipped" && project.shippedAt)
  .sort((a, b) => Date.parse(b.shippedAt) - Date.parse(a.shippedAt))
  .slice(0, 3);

const splitOutcome = (result: string) => {
  const dividers = [" in ", " for ", " from "];
  const divider = dividers.find((token) => result.includes(token));
  if (!divider) {
    return { metric: result, context: "" };
  }
  const [metric, rest] = result.split(divider);
  return { metric: metric.trim(), context: `${divider}${rest.trim()}` };
};

export default function ProjectsShowcase() {
  return (
    <Section id="projects" className="bg-[#F8F9F5]">
      <Container>
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#475569]">Selected projects</p>
            <h2 className="mt-3 text-5xl leading-[0.95] text-[#0F172A] md:text-6xl">RECENT WORK</h2>
            <p className="mt-4 text-sm text-[#475569]">
              A few recent projects showing the companies we worked with, what we built, and the business result.
            </p>
          </div>
          <Button asChild variant="outline" className="rounded-none border-[#475569] bg-transparent text-[#475569] hover:bg-[#F0FDFA]">
            <Link href="/our-portfolio">
              View All Projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {featuredProjects.map((project) => {
            const primaryOutcome = project.results[0] ?? "";
            const { metric, context } = splitOutcome(primaryOutcome);

            return (
              <article
                key={project.id}
                className="group overflow-hidden border border-[#E2E8F0] bg-[#FFFFFF] shadow-[0_8px_24px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(15,23,42,0.08)]"
              >
                <div className={`h-1.5 w-full bg-gradient-to-r ${project.color}`} />

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#7B8794]">Client / Company</p>
                      <h3 className="mt-2 text-3xl leading-[0.95] text-[#0F172A]">{project.clientName}</h3>
                    </div>
                    <span className="font-mono inline-flex rounded-full border border-[#DCE3E8] bg-[#F8F9F5] px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-[#475569]">
                      {project.category}
                    </span>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="rounded-xl border border-[#EEF2F5] bg-[#FBFCFA] p-4">
                      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#7B8794]">What was built</p>
                      <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                      {project.title}. {project.description}
                      </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-xl border border-[#EEF2F5] bg-[#FBFCFA] p-4">
                        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#7B8794]">Timeline</p>
                        <p className="mt-2 text-sm leading-relaxed text-[#475569]">{project.timeline}</p>
                      </div>

                      <div className="rounded-xl border border-[#D7ECE7] bg-[#F0FDFA] p-4">
                        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#3F7C7A]">Outcome</p>
                        <p className="mt-2 text-sm leading-relaxed text-[#0F172A]">
                          <span className="font-semibold">{metric}</span>
                          {context && <span className="text-[#475569]">{context}</span>}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
