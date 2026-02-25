"use client";

import React, { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { Project } from "./projectsData";

interface ProjectsGridProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects, onProjectClick }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    return ["All", ...new Set(projects.map((project) => project.category))];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesCategory = activeCategory === "All" || project.category === activeCategory;
      const matchesSearch =
        query.length === 0 ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, projects, searchQuery]);

  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 pb-20 pt-12 sm:px-8">
      <div className="mb-8 max-w-4xl">
        <h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-[#0F172A] md:text-4xl">
          Project Library
        </h2>
        <p className="mt-4 font-sans text-base leading-relaxed text-[#475569]">
          Use filters to quickly find relevant case studies. Every project includes business context,
          solution strategy, system architecture, and measurable outcomes.
        </p>
      </div>

      <div className="mb-8 rounded-2xl border border-[#E2E8F0] bg-[#FFFFFF] p-4 backdrop-blur sm:p-5">
        <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
          <label className="relative block">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0F172A]/45" aria-hidden="true" />
            <input
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              type="search"
              placeholder="Search by project title, service, or tech"
              className="w-full rounded-lg border border-[#E2E8F0] bg-[#F8F9F5] px-10 py-2.5 font-sans text-sm text-[#0F172A] outline-none transition focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/20"
              aria-label="Search projects"
            />
          </label>

          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-md border border-[#E2E8F0] bg-[#F8F9F5] px-3 py-2 font-mono text-xs uppercase tracking-[0.12em] text-[#475569]">
              <SlidersHorizontal className="h-3.5 w-3.5" aria-hidden="true" />
              Filter
            </span>
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-md border px-3 py-2 font-mono text-xs uppercase tracking-[0.1em] transition ${
                  activeCategory === category
                    ? "border-[#14B8A6] bg-[#F0FDFA] text-[#14B8A6]"
                    : "border-[#E2E8F0] bg-[#F8F9F5] text-[#475569] hover:border-[#E2E8F0] hover:text-[#0F172A]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-[#475569]">
          {filteredProjects.length} Results
        </p>
        {(searchQuery || activeCategory !== "All") && (
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setActiveCategory("All");
            }}
            className="inline-flex items-center gap-2 rounded-md border border-[#E2E8F0] bg-[#FFFFFF] px-3 py-2 font-mono text-xs uppercase tracking-[0.1em] text-[#475569] transition hover:border-[#E2E8F0] hover:text-[#0F172A]"
          >
            <X className="h-3.5 w-3.5" aria-hidden="true" />
            Clear Filters
          </button>
        )}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project: Project) => (
          <ProjectCard key={project.id} project={project} onClick={() => onProjectClick(project)} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="mt-8 rounded-2xl border border-[#E2E8F0] bg-[#FFFFFF] px-6 py-10 text-center">
          <p className="font-display text-2xl text-[#0F172A]">No matching projects found</p>
          <p className="mt-2 font-sans text-sm text-[#475569]">
            Try a broader search term or switch to a different category.
          </p>
        </div>
      )}
    </section>
  );
};

export default ProjectsGrid;
