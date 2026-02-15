import React from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ExternalLink,
  Github,
  CheckCircle2,
  ShieldCheck,
  Layers,
  Wrench,
  Target,
  TrendingUp,
  Lightbulb,
} from "lucide-react";
import { Project } from "./projectsData";

interface CaseStudyViewProps {
  project: Project;
  onBack: () => void;
}

const CaseStudyView: React.FC<CaseStudyViewProps> = ({ project, onBack }) => {
  return (
    <section className="mx-auto max-w-6xl pb-16">
      <button
        onClick={onBack}
        className="font-mono mb-7 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.08em] text-blue-300 transition hover:text-blue-200"
      >
        <ChevronLeft className="h-4 w-4" />
        Back to Portfolio
      </button>

      <div className={`mb-8 rounded-2xl border border-gray-800 bg-gradient-to-br ${project.color} p-8`}>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-white/80">
              {project.category}
            </p>
            <h1 className="font-display mt-3 text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-white md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-3xl font-sans text-lg leading-relaxed text-white/90">
              {project.description}
            </p>
          </div>
          <div className="text-7xl" aria-hidden="true">
            {project.image}
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-gray-800 bg-gray-900 p-5">
          <p className="font-mono text-xs uppercase tracking-[0.1em] text-white/50">Client Profile</p>
          <p className="mt-2 font-sans text-sm leading-relaxed text-white/80">{project.clientProfile}</p>
        </div>
        <div className="rounded-xl border border-gray-800 bg-gray-900 p-5">
          <p className="font-mono text-xs uppercase tracking-[0.1em] text-white/50">Timeline</p>
          <p className="mt-2 font-sans text-sm leading-relaxed text-white/80">{project.timeline}</p>
        </div>
        <div className="rounded-xl border border-gray-800 bg-gray-900 p-5">
          <p className="font-mono text-xs uppercase tracking-[0.1em] text-white/50">Delivery Team</p>
          <p className="mt-2 font-sans text-sm leading-relaxed text-white/80">{project.team}</p>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-gray-800 bg-gray-900 p-7">
        <h2 className="font-display text-2xl font-semibold tracking-[-0.02em] text-white">Project Overview</h2>
        <p className="mt-4 font-sans text-base leading-relaxed text-white/75">{project.overview}</p>
        <p className="mt-4 font-sans text-base leading-relaxed text-white/75">{project.projectScope}</p>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <article className="rounded-2xl border border-red-500/30 bg-red-500/5 p-7">
          <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-red-200">Problem Context</h3>
          <p className="mt-4 font-sans text-base leading-relaxed text-red-100/90">{project.problem}</p>
        </article>

        <article className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-7">
          <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-emerald-200">Solution Approach</h3>
          <p className="mt-4 font-sans text-base leading-relaxed text-emerald-100/90">{project.solution}</p>
        </article>
      </div>

      <div className="mt-8 rounded-2xl border border-gray-800 bg-gray-900 p-7">
        <div className="mb-5 flex items-center gap-2 text-blue-200">
          <Target className="h-5 w-5" aria-hidden="true" />
          <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-white">Project Objectives</h3>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {project.objectives.map((objective, index) => (
            <div key={index} className="flex items-start gap-3 rounded-lg border border-gray-800 bg-gray-950 p-4">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-300" aria-hidden="true" />
              <p className="font-sans text-sm leading-relaxed text-white/75">{objective}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-gray-800 bg-gray-900 p-7">
        <div className="mb-5 flex items-center gap-2 text-cyan-200">
          <Wrench className="h-5 w-5" aria-hidden="true" />
          <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-white">Delivery Workflow</h3>
        </div>
        <div className="space-y-4">
          {project.deliveryPhases.map((phase) => (
            <div key={phase.phase} className="rounded-xl border border-gray-800 bg-gray-950 p-5">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-cyan-300">{phase.phase}</p>
              <p className="mt-2 font-sans text-sm leading-relaxed text-white/75">{phase.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <article className="rounded-2xl border border-gray-800 bg-gray-900 p-7">
          <div className="mb-5 flex items-center gap-2 text-violet-200">
            <Layers className="h-5 w-5" aria-hidden="true" />
            <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-white">Architecture Decisions</h3>
          </div>
          <div className="space-y-3">
            {project.architecture.map((item, index) => (
              <div key={index} className="flex items-start gap-3 rounded-lg border border-gray-800 bg-gray-950 p-4">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-300" aria-hidden="true" />
                <p className="font-sans text-sm leading-relaxed text-white/75">{item}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-2xl border border-gray-800 bg-gray-900 p-7">
          <div className="mb-5 flex items-center gap-2 text-emerald-200">
            <ShieldCheck className="h-5 w-5" aria-hidden="true" />
            <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-white">Quality & Security</h3>
          </div>
          <div className="space-y-3">
            {project.qualityAndSecurity.map((item, index) => (
              <div key={index} className="flex items-start gap-3 rounded-lg border border-gray-800 bg-gray-950 p-4">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-300" aria-hidden="true" />
                <p className="font-sans text-sm leading-relaxed text-white/75">{item}</p>
              </div>
            ))}
          </div>
        </article>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <article className="rounded-2xl border border-amber-500/25 bg-amber-500/5 p-7">
          <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-amber-100">Key Challenges Addressed</h3>
          <div className="mt-4 space-y-3">
            {project.challenges.map((challenge, index) => (
              <p key={index} className="font-sans text-sm leading-relaxed text-amber-100/90">
                {challenge}
              </p>
            ))}
          </div>
        </article>

        <article className="rounded-2xl border border-blue-500/25 bg-blue-500/5 p-7">
          <div className="mb-4 flex items-center gap-2 text-blue-200">
            <TrendingUp className="h-5 w-5" aria-hidden="true" />
            <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-blue-100">Business Impact</h3>
          </div>
          <div className="space-y-3">
            {project.businessImpact.map((impact, index) => (
              <p key={index} className="font-sans text-sm leading-relaxed text-blue-100/90">
                {impact}
              </p>
            ))}
          </div>
        </article>
      </div>

      <div className="mt-8 rounded-2xl border border-gray-800 bg-gray-900 p-7">
        <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-white">Core Features Delivered</h3>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {project.features.map((feature: string, index: number) => (
            <div
              key={index}
              className="flex items-start gap-3 rounded-lg border border-gray-800 bg-gray-950 p-4"
            >
              <div className="mt-2 h-2 w-2 rounded-full bg-blue-400" />
              <span className="font-sans text-sm leading-relaxed text-white/75">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-gray-800 bg-gray-900 p-7">
        <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-white">Results & Metrics</h3>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {project.results.map((result: string, index: number) => (
            <div
              key={index}
              className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-4"
            >
              <p className="font-sans text-sm font-medium leading-relaxed text-blue-100">{result}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <article className="rounded-2xl border border-gray-800 bg-gray-900 p-7">
          <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-white">Technology Stack</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((tech: string, index: number) => (
              <span
                key={index}
                className="font-mono rounded-md border border-gray-700 bg-gray-950 px-3 py-1.5 text-xs font-medium text-white/75"
              >
                {tech}
              </span>
            ))}
          </div>
        </article>

        <article className="rounded-2xl border border-gray-800 bg-gray-900 p-7">
          <div className="mb-4 flex items-center gap-2 text-yellow-200">
            <Lightbulb className="h-5 w-5" aria-hidden="true" />
            <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-white">Key Delivery Learnings</h3>
          </div>
          <div className="space-y-3">
            {project.lessons.map((lesson, index) => (
              <p key={index} className="font-sans text-sm leading-relaxed text-white/75">
                {lesson}
              </p>
            ))}
          </div>
        </article>
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        {project.liveUrl ? (
          <Link
            href={project.liveUrl}
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-500"
          >
            <ExternalLink className="h-4 w-4" />
            View Live Project
          </Link>
        ) : (
          <button className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white opacity-80" disabled>
            <ExternalLink className="h-4 w-4" />
            Live Project Available on Request
          </button>
        )}

        {project.codeUrl ? (
          <Link
            href={project.codeUrl}
            className="inline-flex items-center gap-2 rounded-lg bg-gray-800 px-6 py-3 font-medium text-white transition hover:bg-gray-700"
          >
            <Github className="h-4 w-4" />
            View Code
          </Link>
        ) : (
          <button className="inline-flex items-center gap-2 rounded-lg bg-gray-800 px-6 py-3 font-medium text-white opacity-80" disabled>
            <Github className="h-4 w-4" />
            Code Access Restricted
          </button>
        )}
      </div>
    </section>
  );
};

export default CaseStudyView;
