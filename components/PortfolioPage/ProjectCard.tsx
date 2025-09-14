import React from "react";
import { ArrowRight } from "lucide-react";
import { Project } from "./projectsData";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div
      className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-xl hover:shadow-2xl transition-all duration-300">
        <div
          className={`h-32 bg-gradient-to-br ${project.color} flex items-center justify-center`}
        >
          <span className="text-6xl">{project.image}</span>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {project.category}
            </span>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-200" />
          </div>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag: string, index: number) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
