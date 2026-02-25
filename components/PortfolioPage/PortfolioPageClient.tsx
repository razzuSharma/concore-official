"use client";

import React, { useState } from "react";
import PortfolioHero from "@/components/PortfolioPage/PortfolioHero";
import ProjectsGrid from "@/components/PortfolioPage/ProjectsGrid";
import CaseStudyView from "@/components/PortfolioPage/CaseStudyView";
import PortfolioCTA from "@/components/PortfolioPage/PortfolioCTA";
import { projects, Project } from "@/components/PortfolioPage/projectsData";

export default function PortfolioPageClient() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
    <div className="min-h-screen bg-[#F8F9F5]">
      <PortfolioHero />
      <ProjectsGrid
        projects={projects}
        onProjectClick={setSelectedProject}
      />
      <div className="mx-auto max-w-7xl px-8">
        <PortfolioCTA />
      </div>
    </div>
  );
}
