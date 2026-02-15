import Link from "next/link";
import { ArrowRight, Bot, CloudCog, Layers, Palette, ShieldCheck, Smartphone } from "lucide-react";
import Container from "@/components/HomePage/Container";
import Section from "@/components/HomePage/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Layers,
    title: "Custom Web Development",
    description: "Build scalable web applications that support growth, internal operations, and revenue goals.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Launch high-performance mobile experiences that users adopt quickly and teams can maintain.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Design clear product flows and interfaces that improve conversion and reduce onboarding friction.",
  },
  {
    icon: Bot,
    title: "AI Integrations & Automation",
    description: "Integrate AI features and automation workflows that reduce repetitive work across teams.",
  },
  {
    icon: CloudCog,
    title: "Cloud & DevOps",
    description: "Set up resilient cloud infrastructure, deployment pipelines, and monitoring for safe releases.",
  },
  {
    icon: ShieldCheck,
    title: "Maintenance & Scaling",
    description: "Stabilize and evolve existing products with performance, security, and long-term support plans.",
  },
];

export default function ServicesPreview() {
  return (
    <Section id="services" className="bg-gray-950">
      <Container>
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">Commercial Software Services</h2>
          <p className="mt-4 text-lg text-gray-300">
            CONCORE TECHNOLOGIES delivers full-cycle engineering for companies that need reliable execution,
            transparent communication, and measurable outcomes.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="border-gray-800 bg-gray-900 py-0 text-white">
              <CardHeader className="px-5 pt-5 pb-3">
                <div className="mb-3 inline-flex w-fit rounded-md border border-blue-400/30 bg-blue-500/10 p-2">
                  <service.icon className="h-5 w-5 text-blue-200" aria-hidden="true" />
                </div>
                <CardTitle className="text-xl leading-snug">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-5 pb-5">
                <p className="text-sm leading-relaxed text-gray-300">{service.description}</p>
                <Link
                  href="/services"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-300 transition hover:text-blue-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
