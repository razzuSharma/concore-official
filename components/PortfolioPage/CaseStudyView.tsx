import React from "react";
import {
  ChevronLeft,
  ExternalLink,
  Github,
} from "lucide-react";
import { Project } from "./projectsData";

interface CaseStudyViewProps {
  project: Project;
  onBack: () => void;
}

const CaseStudyView: React.FC<CaseStudyViewProps> = ({ project, onBack }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-6 transition-colors"
      >
        <ChevronLeft className="w-4 h-4" />
        Back to Portfolio
      </button>

      <div
        className={`h-48 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center mb-8`}
      >
        <span className="text-8xl">{project.image}</span>
      </div>

      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
            {project.description}
          </p>
          <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
            {project.category}
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-red-800 dark:text-red-300 mb-3">
              Problem
            </h3>
            <p className="text-red-700 dark:text-red-200">{project.problem}</p>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-green-800 dark:text-green-300 mb-3">
              Solution
            </h3>
            <p className="text-green-700 dark:text-green-200">
              {project.solution}
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Key Features
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            {project.features.map((feature: string, index: number) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700 dark:text-gray-300">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Results & Impact
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {project.results.map((result: string, index: number) => (
              <div
                key={index}
                className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-blue-800 dark:text-blue-200 font-medium">
                    {result}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Technology Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech: string, index: number) => (
              <span
                key={index}
                className="px-3 py-2 bg-gray-800 dark:bg-gray-700 text-white text-sm rounded-lg font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <ExternalLink className="w-4 h-4" />
            View Live Project
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors">
            <Github className="w-4 h-4" />
            View Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyView;
