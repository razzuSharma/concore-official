import React from "react";
import { ArrowRight } from "lucide-react";
import { Project } from "./projectsData";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <button
      className="group w-full cursor-pointer text-left transition-all duration-300 hover:-translate-y-1"
      onClick={onClick}
      aria-label={`Open detailed case study for ${project.title}`}
      type="button"
    >
      <article className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 shadow-xl transition-all duration-300 group-hover:border-gray-700 group-hover:shadow-2xl">
        <div
          className={`h-36 bg-gradient-to-br ${project.color} flex items-center justify-between px-6`}
        >
          <span className="text-6xl">{project.image}</span>
          <ArrowRight className="h-5 w-5 text-white/90 transition-transform duration-200 group-hover:translate-x-1" />
        </div>

        <div className="p-6">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-blue-300">
            {project.category}
          </p>

          <h3 className="font-display mt-3 text-2xl font-semibold leading-[1.1] tracking-[-0.02em] text-white">
            {project.title}
          </h3>

          <p className="mt-3 font-sans text-sm leading-relaxed text-white/70">
            {project.description}
          </p>

          <p className="mt-3 font-sans text-sm leading-relaxed text-white/60 line-clamp-3">
            {project.overview}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag: string, index: number) => (
              <span
                key={index}
                className="font-mono rounded-md border border-gray-700 bg-gray-800 px-2.5 py-1 text-xs font-medium text-white/70"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-gray-800 bg-gray-950 p-3">
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-white/50">Timeline</p>
              <p className="mt-1 font-sans text-sm text-white/80">{project.timeline}</p>
            </div>
            <div className="rounded-lg border border-gray-800 bg-gray-950 p-3">
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-white/50">Team</p>
              <p className="mt-1 font-sans text-sm text-white/80 line-clamp-2">{project.team}</p>
            </div>
          </div>

          <p className="font-mono mt-5 text-xs font-medium uppercase tracking-[0.12em] text-blue-300">
            Read Full Case Study
          </p>
        </div>
      </article>
    </button>
  );
};

export default ProjectCard;
