import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/HomePage/Container";
import Section from "@/components/HomePage/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const workflow = [
  {
    title: "Discover",
    points: ["Scope requirements and constraints", "Define milestones and delivery plan", "Align success metrics and timelines"],
  },
  {
    title: "Build",
    points: ["Execute in focused weekly sprints", "Run QA and code reviews continuously", "Share demos and decisions with stakeholders"],
  },
  {
    title: "Launch",
    points: ["Deploy with release checklists", "Monitor performance and reliability", "Provide handover and post-launch support"],
  },
];

export default function ProcessSection() {
  return (
    <Section id="process" className="bg-gray-950">
      <Container>
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">Delivery Process: Discover → Build → Launch</h2>
          <p className="mt-4 text-lg text-gray-300">
            CONCORE TECHNOLOGIES uses a structured workflow so teams always know what is shipping, when, and why.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {workflow.map((step) => (
            <Card key={step.title} className="border-gray-800 bg-gray-900 py-0">
              <CardHeader className="px-5 pt-5 pb-3">
                <CardTitle className="text-xl text-white">{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-5 pb-5">
                <ul className="space-y-2 text-sm text-gray-300">
                  {step.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-300" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8">
          <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-500">
            <Link href="/contact-us" aria-label="Start a software project with CONCORE TECHNOLOGIES">
              Start a Project
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
