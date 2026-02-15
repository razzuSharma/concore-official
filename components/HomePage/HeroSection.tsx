import Link from "next/link";
import { ArrowRight, BrainCircuit, Globe, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Container from "@/components/HomePage/Container";
import Section from "@/components/HomePage/Section";

const capabilities = [
  {
    icon: Globe,
    title: "Web Apps",
    description: "Robust web platforms built for performance, scale, and maintainability.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native-feeling iOS and Android experiences with reliable release cycles.",
  },
  {
    icon: BrainCircuit,
    title: "AI Automation",
    description: "Applied AI workflows that cut manual tasks and improve decision speed.",
  },
];

export default function HeroSection() {
  return (
    <Section className="relative overflow-hidden bg-gray-950 pb-16 pt-28 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(30,64,175,0.35),transparent_48%),radial-gradient(circle_at_80%_20%,rgba(5,150,105,0.25),transparent_42%)]" />
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="font-mono mb-5 inline-flex rounded-full border border-blue-400/40 bg-blue-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-blue-200">
              CONCORE TECHNOLOGIES
            </p>
            <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-white md:text-6xl">
              CONCORE TECHNOLOGIES builds software that ships.
              <span className="font-mono mt-3 block bg-gradient-to-r from-blue-300 via-cyan-200 to-emerald-300 bg-clip-text text-2xl font-medium uppercase tracking-[0.06em] text-transparent md:text-4xl">
                Web • Mobile • AI • Cloud
              </span>
            </h1>
            <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-white/70">
              We partner with startups and established businesses to deliver production-ready
              systems fast, with clean architecture and long-term engineering support.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-500">
                <Link href="/contact-us" aria-label="Book a Call with CONCORE TECHNOLOGIES">
                  Book a Call
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-gray-600 bg-gray-900 text-gray-100 hover:bg-gray-800"
              >
                <Link href="/#work" aria-label="See work by CONCORE TECHNOLOGIES">
                  See Our Work
                </Link>
              </Button>
            </div>
          </div>

          <div className="space-y-4" aria-label="Concore capabilities">
            {capabilities.map((item) => (
              <Card
                key={item.title}
                className="border-gray-800/80 bg-gray-900/70 py-0 shadow-xl shadow-black/20 backdrop-blur"
              >
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="rounded-lg border border-blue-400/30 bg-blue-500/10 p-2">
                    <item.icon className="h-5 w-5 text-blue-200" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold leading-[1.1] tracking-[-0.02em] text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 font-sans text-sm leading-relaxed text-white/70">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
