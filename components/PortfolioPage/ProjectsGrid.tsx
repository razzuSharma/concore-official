"use client";

import React, { useMemo, useState } from "react";
import { Search } from "lucide-react";
import ProjectRow from "./ProjectRow";
import { Project } from "./projectsData";

interface ProjectsGridProps {
  projects: Project[];
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
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
    <section id="projects" className="bg-[#F5F4EF]">
      <div className="mx-auto max-w-[1180px] px-6 pb-24 sm:px-8">
        {/* Quiet filter bar: category as text links, search as a single underline */}
        <div className="flex flex-col gap-6 py-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`relative pb-1 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors focus-visible:outline-none ${
                    isActive ? "text-[#16201D]" : "text-[#9C988A] hover:text-[#16201D]"
                  }`}
                >
                  {category}
                  {isActive && (
                    <span className="absolute inset-x-0 bottom-0 h-px bg-[#9A7B4F]" aria-hidden="true" />
                  )}
                </button>
              );
            })}
          </div>

          <label className="relative flex items-center border-b border-[#D8D5C8] focus-within:border-[#123B36] lg:w-72">
            <Search className="h-4 w-4 shrink-0 text-[#9C988A]" aria-hidden="true" />
            <input
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              type="search"
              placeholder="Search work"
              aria-label="Search projects"
              className="w-full bg-transparent px-3 py-2 font-sans text-sm text-[#16201D] placeholder:text-[#9C988A] focus:outline-none"
            />
          </label>
        </div>

        <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#9C988A]">
          {String(filteredProjects.length).padStart(2, "0")}{" "}
          {filteredProjects.length === 1 ? "project" : "projects"}
        </p>

        {filteredProjects.length > 0 ? (
          <div className="border-b border-[#E2E0D6]">
            {filteredProjects.map((project, index) => (
              <ProjectRow
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="border-y border-[#E2E0D6] py-20 text-center">
            <p className="font-serif text-2xl text-[#16201D]">Nothing matches that yet</p>
            <p className="mt-3 font-sans text-sm text-[#5E6B63]">
              Try a broader term, or clear the filter to see every build.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-[#9A7B4F] underline-offset-4 hover:underline"
            >
              Clear filter
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsGrid;
