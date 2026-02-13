"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const principles = [
  "Build for scale",
  "Ship weekly",
  "Clean architecture",
  "Ownership mindset",
];

const stats = [
  { value: "20+", label: "Products shipped with startup teams" },
  { value: "4-8 weeks", label: "Typical MVP delivery window" },
  { value: "95%", label: "Milestones delivered on schedule" },
];

const steps = [
  {
    title: "Discover",
    description: "Define scope, risks, and success metrics in week one.",
  },
  {
    title: "Build",
    description: "Ship in weekly sprints with clear demos and decisions.",
  },
  {
    title: "Launch",
    description: "Go live with stable architecture and handover support.",
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pb-20 pt-28 dark:bg-gray-950">
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl dark:bg-indigo-900/30" />
      <div className="pointer-events-none absolute -right-24 top-20 h-80 w-80 rounded-full bg-purple-200/40 blur-3xl dark:bg-purple-900/30" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <h1 className="text-5xl font-semibold tracking-tight text-gray-900 dark:text-white md:text-6xl">
              Launch without
              <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                technical debt.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              We help founders turn product ideas into production-ready MVPs
              that ship fast, hold up under growth, and stay maintainable after
              launch.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact-us"
                aria-label="Book a discovery call with Concore Technologies"
                className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-black dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
              >
                Book a Discovery Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/our-portfolio"
                aria-label="View case studies from Concore Technologies"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 transition hover:-translate-y-0.5 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-900"
              >
                View Case Studies
              </Link>
            </div>

            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              Founder-led, small senior team. You work directly with builders.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.value}
                  className="hover-lift rounded-xl border border-gray-200 bg-white/80 p-4 backdrop-blur transition dark:border-gray-800 dark:bg-gray-900/80"
                >
                  <p className="text-xl font-semibold text-gray-900 dark:text-white">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-gray-600 dark:text-gray-300">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="float-soft">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-xl dark:border-gray-800 dark:bg-gray-900">
              <div className="mb-4 flex items-center justify-between">
                <div className="h-2.5 w-28 rounded bg-gray-200 dark:bg-gray-700" />
                <div className="h-2.5 w-14 rounded bg-indigo-200 dark:bg-indigo-800" />
              </div>

              <div className="grid gap-4">
                <div className="rounded-xl border border-gray-200 p-4 dark:border-gray-800">
                  <p className="mb-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                    Product Dashboard
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-14 rounded bg-gray-100 dark:bg-gray-800" />
                    <div className="h-14 rounded bg-gray-100 dark:bg-gray-800" />
                    <div className="h-14 rounded bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/40 dark:to-purple-900/40" />
                  </div>
                </div>

                <div className="rounded-xl border border-gray-200 p-4 dark:border-gray-800">
                  <p className="mb-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                    Code Snapshot
                  </p>
                  <pre className="overflow-hidden rounded bg-gray-950 p-3 text-xs text-indigo-200">
{`const mvp = build({
  stack: "Next.js + Postgres",
  quality: "clean architecture",
  cadence: "weekly shipping"
});`}
                  </pre>
                </div>

                <div className="rounded-xl border border-gray-200 p-4 dark:border-gray-800">
                  <p className="mb-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                    Timeline
                  </p>
                  <div className="space-y-2">
                    <div className="h-2 rounded bg-indigo-500/90" style={{ width: "92%" }} />
                    <div className="h-2 rounded bg-indigo-400/80" style={{ width: "76%" }} />
                    <div className="h-2 rounded bg-indigo-300/80" style={{ width: "58%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-4 rounded-2xl border border-gray-200 bg-white/70 p-5 backdrop-blur dark:border-gray-800 dark:bg-gray-900/70 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title} className="rounded-lg px-2 py-1">
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                {step.title}
              </p>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle) => (
            <div
              key={principle}
              className="hover-lift rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-800 transition dark:border-gray-800 dark:bg-gray-900 dark:text-gray-100"
            >
              {principle}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .hero-glow {
          background: radial-gradient(
              circle at 30% 20%,
              rgba(99, 102, 241, 0.08),
              transparent 45%
            ),
            radial-gradient(
              circle at 75% 35%,
              rgba(168, 85, 247, 0.08),
              transparent 48%
            );
        }
        .hover-lift:hover {
          transform: translateY(-2px);
        }
        .float-soft {
          animation: floatSoft 7s ease-in-out infinite;
        }
        @keyframes floatSoft {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
      `}</style>
    </section>
  );
}
