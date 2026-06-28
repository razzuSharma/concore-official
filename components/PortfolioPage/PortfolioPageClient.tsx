"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import PortfolioHero from "@/components/PortfolioPage/PortfolioHero";
import ProjectsGrid from "@/components/PortfolioPage/ProjectsGrid";
import CaseStudyView from "@/components/PortfolioPage/CaseStudyView";
import PortfolioCTA from "@/components/PortfolioPage/PortfolioCTA";
import { projects, Project } from "@/components/PortfolioPage/projectsData";

export default function PortfolioPageClient() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (selectedProject) return;
    const projectId = searchParams.get("projectId");
    if (!projectId) return;
    const matchedProject = projects.find((project) => project.id === Number(projectId));
    if (matchedProject) {
      setSelectedProject(matchedProject);
    }
  }, [searchParams, selectedProject]);

  if (selectedProject) {
    return (
      <div className="min-h-screen bg-[#F8F9F5] px-5 py-8 sm:px-6 md:px-8 md:py-10">
        <CaseStudyView
          project={selectedProject}
          onBack={() => setSelectedProject(null)}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F4EF]">
      <PortfolioHero />
      <ProjectsGrid
        projects={projects}
        onProjectClick={setSelectedProject}
      />
      <PortfolioCTA />
    </div>
  );
}
