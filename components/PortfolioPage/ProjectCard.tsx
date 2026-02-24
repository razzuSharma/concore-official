import React from "react";
import Image from "next/image";
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
        <div className={`relative h-36 bg-gradient-to-br ${project.color}`}>
          {project.previewImage ? (
            <Image
              src={project.previewImage}
              alt={`${project.title} product preview`}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          ) : (
            <div className="h-full px-6 py-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/80">
                Snapshot pending client approval
              </p>
              <p className="mt-2 max-w-[16rem] text-sm font-medium leading-snug text-white/90">{project.title}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.tech.slice(0, 3).map((item) => (
                  <span key={item} className="font-mono rounded border border-white/25 bg-black/20 px-2 py-0.5 text-[10px] text-white/85">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          <ArrowRight className="absolute right-5 top-5 h-5 w-5 text-white/90 transition-transform duration-200 group-hover:translate-x-1" />
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

          <p className="mt-5 border-l-2 border-blue-400 pl-3 font-sans text-sm font-medium leading-relaxed text-blue-100">
            {primaryResult}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag: string, index: number) => (
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
