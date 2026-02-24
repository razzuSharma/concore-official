import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/HomePage/Container";
import Section from "@/components/HomePage/Section";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    client: "ARS Barista Training Institute",
    build: "Student Operations Platform",
    challenge: "Admissions, scheduling, and certification workflows were spreadsheet-dependent.",
    result: "60% reduction in routine admin overhead",
    timeline: "10 weeks",
    stack: "Next.js, TypeScript, Supabase",
  },
  {
    client: "Tourgasm Travels",
    build: "Experience Booking Platform",
    challenge: "Manual booking coordination caused conversion drop-offs and slow operator response.",
    result: "Improved booking consistency and reduced operational back-and-forth",
    timeline: "12 weeks",
    stack: "Next.js, PostgreSQL, Supabase",
  },
  {
    client: "Shibam Marble & Furniture",
    build: "Premium Catalog + Quote Workflow",
    challenge: "High-ticket inquiry handling lacked structure and internal visibility.",
    result: "Lower inquiry response turnaround and better lead quality visibility",
    timeline: "9 weeks",
    stack: "Next.js, Supabase, Tailwind",
  },
];

export default function CaseStudiesPreview() {
  return (
    <Section id="work" className="bg-[#070b12]">
      <Container>
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#8eabdb]">Proof</p>
            <h2 className="mt-3 text-5xl leading-[0.95] text-white md:text-6xl">CASE STUDIES</h2>
            <p className="mt-4 text-base leading-relaxed text-[#b4c3df] md:text-lg">
              Each case includes client context, constraints, delivery timeline, and measurable result.
            </p>
          </div>
          <Button asChild variant="outline" className="rounded-none border-[#355889] bg-transparent text-[#dce8ff] hover:bg-[#0d1a2f]">
            <Link href="/our-portfolio">
              View All Case Studies
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>

        <div className="divide-y divide-[#253d64] border-y border-[#253d64]">
          {caseStudies.map((study) => (
            <article key={study.client} className="grid gap-3 py-6 md:grid-cols-12 md:gap-6">
              <div className="md:col-span-3">
                <p className="font-mono text-xs uppercase tracking-[0.14em] accent-text">{study.client}</p>
                <h3 className="mt-2 text-3xl leading-[0.95] text-white">{study.build}</h3>
              </div>
              <p className="text-sm leading-relaxed text-[#c2d0ea] md:col-span-4">Challenge: {study.challenge}</p>
              <div className="text-sm text-[#d8e4fb] md:col-span-5">
                <p>Result: {study.result}</p>
                <p className="mt-1">Timeline: {study.timeline}</p>
                <p className="mt-1">Stack: {study.stack}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
