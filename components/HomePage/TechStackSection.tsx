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
    icon: <Boxes className="h-10 w-10 text-[#0F172A]" />,
  },
  { name: "React.js", icon: <Layers className="h-10 w-10 text-[#14B8A6]" /> },
  {
    name: "Tailwind CSS",
    icon: <Palette className="h-10 w-10 text-[#14B8A6]" />,
  },
  { name: "Supabase", icon: <Database className="h-10 w-10 text-[#475569]" /> },
  { name: "Node.js", icon: <Server className="h-10 w-10 text-[#475569]" /> },
  { name: "Spring Boot", icon: <Leaf className="h-10 w-10 text-[#475569]" /> },
  { name: "ASP.NET", icon: <Terminal className="h-10 w-10 text-[#14B8A6]" /> },
  { name: "WordPress", icon: <Globe className="h-10 w-10 text-[#475569]" /> },
];

export default function TechStackSection() {
  return (
    <section className="bg-[#F8F9F5] py-16">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h1 className="mb-10 text-5xl font-bold text-[#0F172A]">
          Built with Proven Technology
        </h1>
        <h3 className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-[#475569]">
          We choose stable, modern tools that keep your product fast,
          maintainable, and ready to scale.
        </h3>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center rounded-2xl border border-[#E2E8F0] bg-[#FFFFFF] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              {tech.icon}
              <span className="mt-3 text-lg font-medium text-[#0F172A]">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
