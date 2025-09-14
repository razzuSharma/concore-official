"use client";

import {
  Server,
  Boxes,
  Palette,
  Database,
  Terminal,
  Leaf,
  Globe,
  Layers,
} from "lucide-react";

const techStack = [
  {
    name: "Next.js",
    icon: <Boxes className="w-10 h-10 text-gray-800 dark:text-white" />,
  },
  { name: "React.js", icon: <Layers className="w-10 h-10 text-sky-500" /> },
  {
    name: "Tailwind CSS",
    icon: <Palette className="w-10 h-10 text-cyan-400" />,
  },
  { name: "Supabase", icon: <Database className="w-10 h-10 text-green-500" /> },
  { name: "Node.js", icon: <Server className="w-10 h-10 text-green-600" /> },
  { name: "Spring Boot", icon: <Leaf className="w-10 h-10 text-green-700" /> },
  { name: "ASP.NET", icon: <Terminal className="w-10 h-10 text-blue-600" /> },
  { name: "WordPress", icon: <Globe className="w-10 h-10 text-slate-700" /> },
];

export default function TechStackSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold mb-10 text-gray-800 dark:text-white">
          Our Tech Stack
        </h1>
        <h3 className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          We use the latest and greatest technologies to build our projects. We
          are a team of passionate{" "}
          <span className="font-bold text-blue-600 dark:text-blue-400">
            developers
          </span>{" "}
          ,{" "}
          <span className="font-bold text-green-600 dark:text-green-400">
            engineers
          </span>{" "}
          ,{" "}
          <span className="font-bold text-teal-600 dark:text-teal-400">
            UI/UX designers
          </span>{" "}
          who are dedicated to building the best products possible.
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition"
            >
              {tech.icon}
              <span className="mt-3 text-lg font-medium text-gray-700 dark:text-gray-200">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
