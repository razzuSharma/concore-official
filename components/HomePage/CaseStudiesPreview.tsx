import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/HomePage/Container";
import Section from "@/components/HomePage/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const caseStudies = [
  {
    type: "SaaS Platform",
    industry: "Education",
    result: "Reduced onboarding time by 35% and improved admin visibility across teams.",
  },
  {
    type: "Booking System",
    industry: "Travel",
    result: "Streamlined customer booking flow and increased operator efficiency by 28%.",
  },
  {
    type: "Operations Portal",
    industry: "Commerce",
    result: "Cut manual reporting workload by 50% with automated workflows and dashboards.",
  },
];

export default function CaseStudiesPreview() {
  return (
    <Section id="work" className="bg-gray-950">
      <Container>
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-white md:text-4xl">
              Work by CONCORE TECHNOLOGIES
            </h2>
            <p className="mt-4 font-sans text-lg leading-relaxed text-white/70">
              Selected builds focused on business impact, speed to delivery, and stable long-term operations.
            </p>
          </div>
          <Button asChild variant="outline" className="border-gray-700 bg-gray-900 text-gray-100 hover:bg-gray-800">
            <Link href="/our-portfolio" aria-label="View all case studies by CONCORE TECHNOLOGIES">
              View All Case Studies
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {caseStudies.map((study) => (
            <Card key={study.type} className="border-gray-800 bg-gray-900 py-0">
              <CardContent className="p-6">
                <p className="font-mono text-sm font-medium uppercase tracking-[0.14em] text-blue-300">{study.type}</p>
                <p className="font-mono mt-2 inline-flex rounded-full border border-gray-700 px-3 py-1 text-xs font-medium tracking-wide text-white/70">
                  {study.industry}
                </p>
                <p className="mt-4 font-sans text-sm leading-relaxed text-white/70">{study.result}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
