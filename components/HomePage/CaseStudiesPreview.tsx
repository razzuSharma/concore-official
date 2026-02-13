import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const caseStudies = [
  {
    title: "Barista Student Management Platform",
    industry: "Education Technology",
    summary:
      "Built a centralized web platform for training operations, student progress tracking, and certification management.",
    outcomes: [
      "60% reduction in administrative workload",
      "35% increase in course completion",
    ],
    stack: ["Next.js", "Supabase", "Tailwind CSS"],
  },
  {
    title: "Tourgasm Experience Booking Platform",
    industry: "Travel & Tourism",
    summary:
      "Designed and developed a traveler-focused product with booking flow, local experience discovery, and operator dashboards.",
    outcomes: [
      "10,000+ travelers served",
      "$2M+ bookings generated for local partners",
    ],
    stack: ["Next.js", "PostgreSQL", "Vercel"],
  },
  {
    title: "Shibam Premium Catalog Commerce",
    industry: "E-commerce & Design",
    summary:
      "Implemented a premium catalog and quote-driven commerce workflow for high-value marble and furniture products.",
    outcomes: [
      "45% lower product returns",
      "80% growth in average order value",
    ],
    stack: ["Next.js", "Supabase", "Shadcn UI"],
  },
];

const CaseStudiesPreview = () => {
  return (
    <section className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Case Studies
            </p>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
              Work That Drives Business Results
            </h2>
          </div>
          <Button asChild variant="outline" className="rounded-lg">
            <Link href="/our-portfolio">
              See All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article
              key={study.title}
              className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900"
            >
              <p className="mb-3 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
                {study.industry}
              </p>
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                {study.title}
              </h3>
              <p className="mb-5 leading-relaxed text-gray-600 dark:text-gray-300">
                {study.summary}
              </p>

              <div className="mb-5 space-y-2">
                {study.outcomes.map((outcome) => (
                  <div key={outcome} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600 dark:text-green-400" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {outcome}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {study.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesPreview;
