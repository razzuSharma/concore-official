import React from "react";
import ProjectCard from "./ProjectCard";
import { Project } from "./projectsData";

interface ProjectsGridProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects, onProjectClick }) => {
  return (
    <div className="max-w-7xl mx-auto px-8 pb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 mt-10">
          Featured Case Studies
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Click on any project to explore the detailed case study
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {projects.map((project: Project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => onProjectClick(project)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsGrid;
