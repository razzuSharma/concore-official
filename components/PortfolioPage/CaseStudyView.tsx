import React, { useEffect, useMemo, useState } from "react";
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
  Clock3,
} from "lucide-react";
import { Project } from "./projectsData";

interface CaseStudyViewProps {
  project: Project;
  onBack: () => void;
}

interface ExpandableTextProps {
  text: string;
  limit?: number;
  className?: string;
}

function ExpandableText({ text, limit = 260, className = "" }: ExpandableTextProps) {
  const [expanded, setExpanded] = useState(false);
  const shouldCollapse = text.length > limit;
  const content = expanded || !shouldCollapse ? text : `${text.slice(0, limit).trimEnd()}...`;

  return (
    <div>
      <p className={className}>{content}</p>
      {shouldCollapse && (
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="mt-2 font-mono text-xs uppercase tracking-[0.1em] text-blue-300 transition hover:text-blue-200"
        >
          {expanded ? "Show Less" : "Read More"}
        </button>
      )}
    </div>
  );
}

interface CollapsibleListProps {
  items: string[];
  initialCount?: number;
  textClassName?: string;
}

function CollapsibleList({
  items,
  initialCount = 2,
  textClassName = "font-sans text-sm leading-relaxed text-white/85",
}: CollapsibleListProps) {
  const [expanded, setExpanded] = useState(false);
  const shouldCollapse = items.length > initialCount;
  const visibleItems = expanded || !shouldCollapse ? items : items.slice(0, initialCount);

  return (
    <div>
      <div className="space-y-3">
        {visibleItems.map((item, index) => (
          <p key={index} className={textClassName}>
            {item}
          </p>
        ))}
      </div>
      {shouldCollapse && (
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="mt-3 font-mono text-xs uppercase tracking-[0.1em] text-blue-300 transition hover:text-blue-200"
        >
          {expanded ? "Show Less" : `Show ${items.length - initialCount} More`}
        </button>
      )}
    </div>
  );
}

const CaseStudyView: React.FC<CaseStudyViewProps> = ({ project, onBack }) => {
  const [readingProgress, setReadingProgress] = useState(0);

  const readTimeMinutes = useMemo(() => {
    const textBlocks = [
      project.description,
      project.overview,
      project.projectScope,
      project.problem,
      project.solution,
      ...project.objectives,
      ...project.features,
      ...project.deliveryPhases.map((phase) => phase.detail),
      ...project.architecture,
      ...project.qualityAndSecurity,
      ...project.challenges,
      ...project.businessImpact,
      ...project.results,
      ...project.lessons,
    ];

    const wordCount = textBlocks
      .join(" ")
      .trim()
      .split(/\s+/)
      .filter(Boolean).length;

    return Math.max(3, Math.round(wordCount / 220));
  }, [project]);

  useEffect(() => {
    const updateProgress = () => {
      const totalScrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScrollable <= 0) {
        setReadingProgress(0);
        return;
      }
      const progress = Math.min(100, Math.max(0, (window.scrollY / totalScrollable) * 100));
      setReadingProgress(progress);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const sectionLinks = [
    { id: "overview", label: "Overview" },
    { id: "context", label: "Context" },
    { id: "delivery", label: "Delivery" },
    { id: "architecture", label: "Architecture" },
    { id: "outcomes", label: "Outcomes" },
    { id: "stack", label: "Stack" },
  ];

  return (
    <section className="mx-auto max-w-6xl pb-16">
      <div className="pointer-events-none fixed inset-x-0 top-16 z-40 h-1">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 transition-[width] duration-150"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <button
        type="button"
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
            <div className="font-mono mt-5 inline-flex items-center gap-2 rounded-md border border-white/25 bg-black/15 px-3 py-2 text-xs uppercase tracking-[0.1em] text-white/90">
              <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
              {readTimeMinutes} min read
            </div>
          </div>
          <div className="text-7xl" aria-hidden="true">
            {project.image}
          </div>
        </div>
      </div>

      <nav className="sticky top-[4.8rem] z-30 mb-8 overflow-x-auto rounded-xl border border-gray-800 bg-gray-900/95 p-2 backdrop-blur">
        <ul className="flex min-w-max gap-2">
          {sectionLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="font-mono inline-flex rounded-md border border-gray-700 bg-gray-950 px-3 py-2 text-xs uppercase tracking-[0.1em] text-white/70 transition hover:border-blue-400/40 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

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

      <div id="overview" className="mt-8 scroll-mt-28 rounded-2xl border border-gray-800 bg-gray-900 p-7">
        <h2 className="font-display text-2xl font-semibold tracking-[-0.02em] text-white">Project Overview</h2>
        <div className="mt-4">
          <ExpandableText
            text={project.overview}
            className="font-sans text-base leading-relaxed text-white/75"
            limit={380}
          />
        </div>
        <div className="mt-4">
          <ExpandableText
            text={project.projectScope}
            className="font-sans text-base leading-relaxed text-white/75"
            limit={300}
          />
        </div>
      </div>

      <div id="context" className="mt-8 scroll-mt-28 grid gap-8 lg:grid-cols-2">
        <article className="rounded-2xl border border-red-500/30 bg-red-500/5 p-7">
          <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-red-200">Problem Context</h3>
          <div className="mt-4">
            <ExpandableText
              text={project.problem}
              className="font-sans text-base leading-relaxed text-red-100/90"
              limit={360}
            />
          </div>
        </article>

        <article className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-7">
          <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-emerald-200">Solution Approach</h3>
          <div className="mt-4">
            <ExpandableText
              text={project.solution}
              className="font-sans text-base leading-relaxed text-emerald-100/90"
              limit={360}
            />
          </div>
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

      <div id="delivery" className="mt-8 scroll-mt-28 rounded-2xl border border-gray-800 bg-gray-900 p-7">
        <div className="mb-5 flex items-center gap-2 text-cyan-200">
          <Wrench className="h-5 w-5" aria-hidden="true" />
          <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-white">Delivery Workflow</h3>
        </div>
        <div className="space-y-4">
          {project.deliveryPhases.map((phase) => (
            <div key={phase.phase} className="rounded-xl border border-gray-800 bg-gray-950 p-5">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-cyan-300">{phase.phase}</p>
              <div className="mt-2">
                <ExpandableText
                  text={phase.detail}
                  className="font-sans text-sm leading-relaxed text-white/75"
                  limit={220}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="architecture" className="mt-8 scroll-mt-28 grid gap-8 lg:grid-cols-2">
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
          <div className="mt-4">
            <CollapsibleList
              items={project.challenges}
              textClassName="font-sans text-sm leading-relaxed text-amber-100/90"
            />
          </div>
        </article>

        <article className="rounded-2xl border border-blue-500/25 bg-blue-500/5 p-7">
          <div className="mb-4 flex items-center gap-2 text-blue-200">
            <TrendingUp className="h-5 w-5" aria-hidden="true" />
            <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-blue-100">Business Impact</h3>
          </div>
          <div>
            <CollapsibleList
              items={project.businessImpact}
              textClassName="font-sans text-sm leading-relaxed text-blue-100/90"
            />
          </div>
        </article>
      </div>

      <div id="outcomes" className="mt-8 scroll-mt-28 rounded-2xl border border-gray-800 bg-gray-900 p-7">
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
        <article id="stack" className="scroll-mt-28 rounded-2xl border border-gray-800 bg-gray-900 p-7">
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
          <div>
            <CollapsibleList
              items={project.lessons}
              textClassName="font-sans text-sm leading-relaxed text-white/75"
            />
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
