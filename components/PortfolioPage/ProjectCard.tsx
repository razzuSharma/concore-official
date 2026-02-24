import React from "react";
import { ArrowRight } from "lucide-react";
import { Project } from "./projectsData";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const primaryResult = project.results[0] ?? "Impact details available in full case study";

  return (
    <button
      className="group w-full cursor-pointer text-left transition-all duration-300 hover:-translate-y-1"
      onClick={onClick}
      aria-label={`Open detailed case study for ${project.title}`}
      type="button"
    >
      <article className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 shadow-xl transition-all duration-300 group-hover:border-blue-400/40 group-hover:shadow-2xl">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(59,130,246,0.08),transparent_26%)] opacity-0 transition group-hover:opacity-100" />
        <div
          className={`flex h-36 items-center justify-between bg-gradient-to-br px-6 ${project.color}`}
        >
          <span className="text-6xl" aria-hidden="true">{project.image}</span>
          <ArrowRight className="h-5 w-5 text-white/90 transition-transform duration-200 group-hover:translate-x-1" />
        </div>

        <div className="relative p-6">
          <div className="mb-3 flex items-center justify-between gap-3">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-blue-300">
              {project.category}
            </p>
            <span className="font-mono rounded-md border border-emerald-400/25 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-emerald-200">
              Case Study
            </span>
          </div>

          <h3 className="font-display text-2xl font-semibold leading-[1.1] tracking-[-0.02em] text-white">
            {project.title}
          </h3>

          <p className="mt-3 font-sans text-sm leading-relaxed text-white/72 line-clamp-3">
            {project.description}
          </p>

          <div className="mt-5 rounded-lg border border-blue-500/25 bg-blue-500/10 p-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-blue-200/90">Business Impact</p>
            <p className="mt-1 font-sans text-sm font-medium leading-relaxed text-blue-100">{primaryResult}</p>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag: string, index: number) => (
              <span
                key={index}
                className="font-mono rounded-md border border-gray-700 bg-gray-800 px-2.5 py-1 text-xs font-medium text-white/70"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="font-mono rounded-md border border-gray-700 bg-gray-800 px-2.5 py-1 text-xs font-medium text-white/50">
                +{project.tags.length - 3} more
              </span>
            )}
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-gray-800 bg-gray-950 p-3">
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-white/50">Timeline</p>
              <p className="mt-1 line-clamp-2 font-sans text-sm text-white/85">{project.timeline}</p>
            </div>
            <div className="rounded-lg border border-gray-800 bg-gray-950 p-3">
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-white/50">Team</p>
              <p className="mt-1 line-clamp-2 font-sans text-sm text-white/85">{project.team}</p>
            </div>
          </div>

          <p className="font-mono mt-5 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-blue-300">
            Read Full Case Study
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </p>
        </div>
      </article>
    </button>
  );
};

export default ProjectCard;
