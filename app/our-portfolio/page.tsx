import type { Metadata } from "next";
import PortfolioHero from "@/components/PortfolioPage/PortfolioHero";
import ProjectsGrid from "@/components/PortfolioPage/ProjectsGrid";
import PortfolioCTA from "@/components/PortfolioPage/PortfolioCTA";
import { projects } from "@/components/PortfolioPage/projectsData";

export const metadata: Metadata = {
  title: "Selected Software Projects",
  description:
    "Review selected client projects by Concore Technologies, including operations platforms, business systems, and custom software builds.",
  alternates: {
    canonical: "/our-portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#F5F4EF]">
      <PortfolioHero />
      <ProjectsGrid projects={projects} />
      <PortfolioCTA />
    </div>
  );
}
