import React from "react";
import ProjectCard from "./ProjectCard";
import { Project } from "./projectsData";

interface ProjectsGridProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects, onProjectClick }) => {
  return (
    <section className="mx-auto max-w-7xl px-8 pb-20 pt-14">
      <div className="mb-12 max-w-4xl">
        <h2 className="font-display text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-white">
          Project Library
        </h2>
        <p className="mt-4 font-sans text-base leading-relaxed text-white/70">
          Every project includes detailed context on business challenges, system design,
          delivery workflow, and impact metrics. Select a case study to review full implementation
          depth, not just top-level highlights.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project: Project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => onProjectClick(project)}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;
