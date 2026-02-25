import { CheckCircle2, Gauge, Handshake, ShieldCheck, Timer } from "lucide-react";
import Container from "@/components/HomePage/Container";
import Section from "@/components/HomePage/Section";
import { Card, CardContent } from "@/components/ui/card";

const differentiators = [
  {
    icon: Timer,
    title: "Fast, Structured Delivery",
    description:
      "We ship in weekly increments with clear priorities, so progress is visible from week one.",
  },
  {
    icon: ShieldCheck,
    title: "Production-Ready Quality",
    description:
      "Architecture, QA, and deployment standards are built in from the start, not added later.",
  },
  {
    icon: Handshake,
    title: "True Partner Mindset",
    description:
      "You work directly with senior builders who care about outcomes, not just ticket completion.",
  },
  {
    icon: Gauge,
    title: "Built for Scale",
    description:
      "We design systems that support growth, team handovers, and long-term product evolution.",
  },
];

const outcomes = [
  "Clear scope and realistic timelines before development starts",
  "Transparent communication with weekly demos and milestone reviews",
  "Stable launches with monitoring, documentation, and support",
  "Business-first engineering decisions aligned to your goals",
];

export default function WhyChooseUsSection() {
  return (
    <Section className="bg-[#F8F9F5]">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-[#0F172A] md:text-4xl">
              Why Teams Choose CONCORE TECHNOLOGIES
            </h2>
            <p className="mt-4 font-sans text-lg leading-relaxed text-[#0F172A]/70">
              We are a commercial software development company focused on execution quality,
              delivery speed, and long-term maintainability. Our process is designed to reduce
              risk while keeping momentum high.
            </p>
            <p className="mt-4 font-sans text-base leading-relaxed text-[#0F172A]/70">
              Instead of one-off builds, we help companies ship dependable digital products that
              continue to perform as customer demand and internal complexity grow.
            </p>

            <ul className="mt-7 space-y-3">
              {outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3 font-sans text-sm text-[#0F172A]/80">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#14B8A6]" aria-hidden="true" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {differentiators.map((item) => (
              <Card key={item.title} className="border-[#E2E8F0] bg-[#FFFFFF] py-0">
                <CardContent className="p-5">
                  <div className="mb-3 inline-flex rounded-md border border-[#E2E8F0] bg-[#F0FDFA] p-2">
                    <item.icon className="h-5 w-5 text-[#14B8A6]" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-lg font-semibold leading-[1.1] tracking-[-0.02em] text-[#0F172A]">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-[#0F172A]/70">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
