import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "./projectsData";

interface ProjectRowProps {
  project: Project;
  index: number;
}

const ProjectRow: React.FC<ProjectRowProps> = ({ project, index }) => {
  const year = new Date(project.shippedAt).getFullYear();
  const yearLabel = Number.isNaN(year) ? "—" : `’${String(year).slice(2)}`;
  const primaryResult = project.results[0] ?? "Outcome detailed in the full case study";

  return (
    <Link
      href={`/our-portfolio/${project.slug}`}
      aria-label={`Open case study for ${project.title}`}
      style={{ animationDelay: `${index * 70}ms` }}
      className="hero-rise group block w-full cursor-pointer border-t border-[#E2E0D6] text-left transition-colors duration-300 hover:bg-[#EFEDE2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9A7B4F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F4EF]"
    >
      <div className="grid grid-cols-[3.5rem_1fr] items-start gap-x-5 gap-y-5 px-3 py-8 sm:grid-cols-[4.5rem_1fr_auto] sm:gap-x-8 sm:px-5 md:py-10">
        {/* Year rail — recency carries real meaning for a prospect */}
        <div className="pt-1">
          <span className="font-serif text-2xl leading-none text-[#9A7B4F] sm:text-[1.75rem]">
            {yearLabel}
          </span>
        </div>

        {/* Title block */}
        <div className="min-w-0">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#8A8676]">
            {project.category}
          </p>
          <h3 className="mt-3 inline font-serif text-[1.7rem] font-normal leading-[1.08] tracking-[-0.01em] text-[#16201D] transition-colors duration-300 group-hover:text-[#123B36] sm:text-[2.2rem] md:text-[2.6rem]">
            {project.title}
          </h3>
          <span className="mt-3 block h-px w-0 bg-[#9A7B4F] transition-all duration-500 ease-out group-hover:w-16" aria-hidden="true" />
          <p className="mt-4 max-w-[58ch] font-sans text-[0.98rem] leading-relaxed text-[#5E6B63] line-clamp-2">
            {project.description}
          </p>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[#123B36]">
            {primaryResult}
          </p>
        </div>

        {/* Monogram tile — muted at rest, warms to evergreen on hover */}
        <div className="col-start-2 row-start-1 justify-self-end sm:col-start-3 sm:row-start-auto sm:self-center">
          <div className="relative flex h-[5.5rem] w-[5.5rem] items-center justify-center overflow-hidden rounded-[3px] border border-[#E2E0D6] bg-[#ECEADF] transition-colors duration-300 group-hover:border-[#123B36] group-hover:bg-[#123B36] md:h-28 md:w-28">
            {project.previewImage ? (
              <Image
                src={project.previewImage}
                alt={`${project.title} preview`}
                fill
                sizes="112px"
                className="object-cover opacity-80 grayscale transition duration-500 group-hover:opacity-100 group-hover:grayscale-0"
              />
            ) : (
              <span className="font-serif text-xl tracking-[0.04em] text-[#9A8E6E] transition-colors duration-300 group-hover:text-[#F5F4EF] md:text-2xl">
                {project.image}
              </span>
            )}
            <ArrowUpRight
              className="absolute bottom-2 right-2 h-4 w-4 text-[#C9C6B8] opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100 group-hover:text-[#F5F4EF]"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectRow;
