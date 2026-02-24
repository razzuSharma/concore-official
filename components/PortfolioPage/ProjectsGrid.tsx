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
        <h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-white md:text-4xl">
          Project Library
        </h2>
        <p className="mt-4 font-sans text-base leading-relaxed text-white/70">
          Use filters to quickly find relevant case studies. Every project includes business context,
          solution strategy, system architecture, and measurable outcomes.
        </p>
      </div>

      <div className="mb-8 rounded-2xl border border-gray-800 bg-gray-900/70 p-4 backdrop-blur sm:p-5">
        <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
          <label className="relative block">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/45" aria-hidden="true" />
            <input
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              type="search"
              placeholder="Search by project title, service, or tech"
              className="w-full rounded-lg border border-gray-700 bg-gray-950 px-10 py-2.5 font-sans text-sm text-white outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20"
              aria-label="Search projects"
            />
          </label>

          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-md border border-gray-700 bg-gray-950 px-3 py-2 font-mono text-xs uppercase tracking-[0.12em] text-white/65">
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
                    ? "border-blue-400/40 bg-blue-500/15 text-blue-100"
                    : "border-gray-700 bg-gray-950 text-white/70 hover:border-gray-600 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-white/60">
          {filteredProjects.length} Results
        </p>
        {(searchQuery || activeCategory !== "All") && (
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setActiveCategory("All");
            }}
            className="inline-flex items-center gap-2 rounded-md border border-gray-700 bg-gray-900 px-3 py-2 font-mono text-xs uppercase tracking-[0.1em] text-white/70 transition hover:border-gray-600 hover:text-white"
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
        <div className="mt-8 rounded-2xl border border-gray-800 bg-gray-900 px-6 py-10 text-center">
          <p className="font-display text-2xl text-white">No matching projects found</p>
          <p className="mt-2 font-sans text-sm text-white/65">
            Try a broader search term or switch to a different category.
          </p>
        </div>
      )}
    </section>
  );
};

export default ProjectsGrid;
