import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/HomePage/Container";
import Section from "@/components/HomePage/Section";
import { Button } from "@/components/ui/button";
import { projects } from "@/components/PortfolioPage/projectsData";

const shippedProjects = projects.slice(0, 4);

export default function ProjectsShowcase() {
  return (
    <Section id="projects" className="bg-[#070b12]">
      <Container>
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#8eabdb]">Project ledger</p>
            <h2 className="mt-3 text-5xl leading-[0.95] text-white md:text-6xl">PROJECTS WE SHIPPED</h2>
          </div>
          <Button asChild variant="outline" className="rounded-none border-[#355889] bg-transparent text-[#dce8ff] hover:bg-[#0d1a2f]">
            <Link href="/our-portfolio">
              Full Portfolio
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>

        <div className="overflow-hidden border border-[#26406b]">
          <table className="w-full border-collapse text-left">
            <thead className="bg-[#0c1629] font-mono text-xs uppercase tracking-[0.14em] text-[#89a8dc]">
              <tr>
                <th className="px-4 py-3">Project</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Timeline</th>
                <th className="px-4 py-3">Primary Result</th>
              </tr>
            </thead>
            <tbody>
              {shippedProjects.map((project) => (
                <tr key={project.id} className="border-t border-[#213456] bg-[#0a1222] text-sm text-[#d7e4fc]">
                  <td className="px-4 py-4 font-medium">{project.title}</td>
                  <td className="px-4 py-4 text-[#afc2e4]">{project.category}</td>
                  <td className="px-4 py-4 text-[#afc2e4]">{project.timeline}</td>
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
