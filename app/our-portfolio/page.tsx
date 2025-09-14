"use client";

import React, { useState } from "react";
import PortfolioHero from "@/components/PortfolioPage/PortfolioHero";
import ProjectsGrid from "@/components/PortfolioPage/ProjectsGrid";
import CaseStudyView from "@/components/PortfolioPage/CaseStudyView";
import PortfolioCTA from "@/components/PortfolioPage/PortfolioCTA";
import { projects, Project } from "@/components/PortfolioPage/projectsData";

const PortfolioPage = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  if (selectedProject) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-950 p-8">
        <CaseStudyView 
          project={selectedProject} 
          onBack={() => setSelectedProject(null)} 
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <PortfolioHero />
      <ProjectsGrid 
        projects={projects} 
        onProjectClick={setSelectedProject} 
      />
      <div className="max-w-7xl mx-auto px-8">
        <PortfolioCTA />
      </div>
    </div>
  );
};

export default PortfolioPage;
