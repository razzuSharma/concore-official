import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/HomePage/Container";
import Section from "@/components/HomePage/Section";
import { Button } from "@/components/ui/button";
import { projects } from "@/components/PortfolioPage/projectsData";

const shippedProjects = projects.slice(0, 4);

export default function ProjectsShowcase() {
  return (
    <Section id="projects" className="bg-[#F8F9F5]">
      <Container>
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#475569]">Project ledger</p>
            <h2 className="mt-3 text-5xl leading-[0.95] text-[#0F172A] md:text-6xl">PROJECTS WE SHIPPED</h2>
          </div>
          <Button asChild variant="outline" className="rounded-none border-[#475569] bg-transparent text-[#475569] hover:bg-[#F0FDFA]">
            <Link href="/our-portfolio">
              Full Portfolio
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>

        <div className="overflow-hidden border border-[#E2E8F0]">
          <table className="w-full border-collapse text-left">
            <thead className="bg-[#F0FDFA] font-mono text-xs uppercase tracking-[0.14em] text-[#475569]">
              <tr>
                <th className="px-4 py-3">Project</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Timeline</th>
                <th className="px-4 py-3">Primary Result</th>
              </tr>
            </thead>
            <tbody>
              {shippedProjects.map((project) => (
                <tr key={project.id} className="border-t border-[#E2E8F0] bg-[#FFFFFF] text-sm text-[#0F172A]">
                  <td className="px-4 py-4 font-medium">{project.title}</td>
                  <td className="px-4 py-4 text-[#475569]">{project.category}</td>
                  <td className="px-4 py-4 text-[#475569]">{project.timeline}</td>
                  <td className="px-4 py-4">{project.results[0]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </Section>
  );
}
