import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  CloudCog,
  LayoutTemplate,
  ShieldCheck,
  Smartphone,
  Wrench,
} from "lucide-react";
import Container from "@/components/HomePage/Container";
import Section from "@/components/HomePage/Section";
import FinalCTA from "@/components/HomePage/FinalCTA";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Custom Software Services",
  description:
    "Explore Concore Technologies services for custom web apps, internal tools, AI workflows, deployment, and ongoing software support.",
  alternates: {
    canonical: "/services",
  },
};

const services = [
  {
    id: "custom-web-apps",
    icon: LayoutTemplate,
    title: "Custom Web Apps",
    what: "Business software, client portals, and custom web platforms built around your workflows, users, and data.",
    who: "For companies replacing manual operations, spreadsheets, or disconnected systems.",
    outcome: "A dependable web platform that centralizes work, improves visibility, and reduces operational friction.",
    deliverables: ["UX and system architecture", "Full-stack implementation", "Deployment-ready release"],
  },
  {
    id: "internal-tools",
    icon: Wrench,
    title: "Internal Tools",
    what: "Admin systems, dashboards, approval flows, reporting layers, and operations tooling for internal teams.",
    who: "For businesses that need faster execution, better reporting, and clearer day-to-day control.",
    outcome: "Cleaner processes, fewer repetitive tasks, and a system teams can actually operate from.",
    deliverables: ["Admin and ops dashboards", "Role-based permissions", "Reporting and workflow logic"],
  },
  {
    id: "ai-workflows",
    icon: Bot,
    title: "AI Workflows",
    what: "AI-enabled workflows for document handling, screening, assistance, classification, and repetitive task automation.",
    who: "For companies with high-volume operational work where consistency and speed matter.",
    outcome: "Reduced manual workload, faster turnaround, and more consistent internal execution.",
    deliverables: ["Workflow and prompt design", "Model integration", "Human review and fallback logic"],
  },
  {
    id: "deployment-support",
    icon: CloudCog,
    title: "Deployment And Support",
    what: "Release setup, production deployment, monitoring, maintenance, fixes, and post-launch support.",
    who: "For teams that need dependable launches and continuity after development is complete.",
    outcome: "Stable releases, fewer production issues, and a system that can keep growing safely.",
    deliverables: ["Release and hosting setup", "Monitoring and incident response", "Ongoing fixes and support"],
  },
];

const serviceSignals = [
  "Clear scope before build",
  "Direct access to engineers",
  "Maintainable codebase",
  "Production deployment included",
];

const deliveryModel = [
  {
    title: "Discovery",
    detail: "We map business workflows, constraints, priorities, and the technical shape of the system before implementation starts.",
  },
  {
    title: "Build",
    detail: "We deliver in short cycles with visible progress, practical review points, and adjustments based on real usage feedback.",
  },
  {
    title: "Launch",
    detail: "We handle deployment, production checks, and release hardening so the system goes live with fewer surprises.",
  },
  {
    title: "Support",
    detail: "We stay available for fixes, improvements, and the next phase of work once the product is in active use.",
  },
];

const capabilityRows = [
  {
    label: "Platforms we build",
    value: "Business platforms, internal systems, client portals, AI-assisted workflows",
  },
  {
    label: "Typical clients",
    value: "Growing companies, operations-heavy teams, service businesses, product-led startups",
  },
  {
    label: "Delivery style",
    value: "Practical scope, direct communication, weekly visibility, production-minded execution",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-transparent">
      <Section className="relative overflow-hidden border-b border-[#E2E8F0] bg-[#F6F7F2] py-16 md:py-20">
        <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-60" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,255,255,0.85),transparent_34%),radial-gradient(circle_at_78%_45%,rgba(20,184,166,0.06),transparent_28%)]" />
        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(380px,0.95fr)] lg:items-center">
            <div className="max-w-[44rem]">
              <h1 className="text-[clamp(3.6rem,8vw,6.6rem)] leading-[0.9] text-[#0F172A]">
                SERVICES BUILT
                <span className="block text-[#3F7C7A]">FOR OPERATIONS,</span>
                <span className="block">NOT PRESENTATIONS.</span>
              </h1>
              <p className="mt-6 max-w-[36rem] border-l border-[#D5DDE5] pl-5 text-[1.08rem] leading-[1.6] text-[#667085]">
                We design and build custom software for companies that need better internal systems, clearer workflows,
                and reliable long-term delivery.
              </p>

              <div className="mt-8 flex flex-wrap gap-2.5">
                {serviceSignals.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full border border-[#DCE3E8] bg-[#FFFFFF] px-3 py-1.5 text-sm text-[#334155]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button asChild className="h-11 rounded-[8px] bg-[#123F43] px-5 text-white hover:bg-[#0F3538]">
                  <Link href="/contact-us" className="group inline-flex items-center gap-2">
                    Start A Project
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                </Button>
                <Link href="#service-list" className="text-sm font-medium text-[#475569] transition hover:text-[#0F172A]">
                  Review service offers
                </Link>
              </div>
            </div>

            <div className="border border-[#DCE3E8] bg-[#FBFCFA]/92 p-6">
              <div className="grid gap-4">
                {capabilityRows.map((row, index) => (
                  <div
                    key={row.label}
                    className={`grid gap-2 ${index < capabilityRows.length - 1 ? "border-b border-[#E6EDF1] pb-4" : ""}`}
                  >
                    <p className="text-sm font-medium text-[#0F172A]">{row.label}</p>
                    <p className="text-sm leading-relaxed text-[#667085]">{row.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="service-list" className="bg-[#F8F9F5] py-16 md:py-20">
        <Container>
          <div className="mb-10 max-w-3xl">
            <h2 className="text-[clamp(3rem,6vw,4.8rem)] leading-[0.94] text-[#0F172A]">Service Offers</h2>
            <p className="mt-4 text-base leading-relaxed text-[#475569] md:text-lg">
              Four focused service tracks for companies that need software that supports real work and real growth.
            </p>
          </div>

          <div className="grid gap-5 xl:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.id}
                id={service.id}
                className="overflow-hidden border border-[#E2E8F0] bg-[#FFFFFF] shadow-[0_8px_24px_rgba(15,23,42,0.03)]"
              >
                <div className="flex items-center justify-between border-b border-[#E8EEF2] bg-[#FBFCFA] px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#D9E7E4] bg-[#F0FDFA] text-[#3F7C7A]">
                      <service.icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-3xl leading-[0.95] text-[#0F172A]">{service.title}</h3>
                  </div>
                </div>

                <div className="grid gap-6 p-6">
                  <div className="rounded-xl border border-[#EEF2F5] bg-[#FBFCFA] p-4">
                    <p className="text-sm font-medium text-[#0F172A]">What it is</p>
                    <p className="mt-2 text-sm leading-relaxed text-[#475569]">{service.what}</p>
                  </div>

                  <div className="rounded-xl border border-[#EEF2F5] bg-[#FBFCFA] p-4">
                    <p className="text-sm font-medium text-[#0F172A]">Who it is for</p>
                    <p className="mt-2 text-sm leading-relaxed text-[#475569]">{service.who}</p>
                  </div>

                  <div className="rounded-xl border border-[#D7ECE7] bg-[#F0FDFA] p-4">
                    <p className="text-sm font-medium text-[#0F172A]">Outcome</p>
                    <p className="mt-2 text-sm leading-relaxed text-[#0F172A]">{service.outcome}</p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-[#0F172A]">Typical deliverables</p>
                    <div className="mt-3 grid gap-2">
                      {service.deliverables.map((item) => (
                        <div key={item} className="flex items-start gap-2 text-sm text-[#475569]">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#3F7C7A]" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-[#F8F9F5] pt-0 md:pt-0">
        <Container>
          <div className="grid gap-10 border-t border-[#E2E8F0] pt-16 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:pt-20">
            <div className="max-w-[30rem]">
              <h2 className="text-[clamp(2.8rem,5vw,4.2rem)] leading-[0.95] text-[#0F172A]">How Engagement Works</h2>
              <p className="mt-4 text-base leading-relaxed text-[#475569] md:text-lg">
                We keep engagements simple: align on what needs to be built, deliver in clear phases, and stay
                accountable through launch and support.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {deliveryModel.map((step) => (
                <article key={step.title} className="border border-[#E2E8F0] bg-[#FFFFFF] p-5">
                  <p className="text-2xl leading-[0.98] text-[#0F172A]">{step.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">{step.detail}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="border border-[#E2E8F0] bg-[#FFFFFF] p-5">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-[#3F7C7A]" />
                <p className="text-lg text-[#0F172A]">Production-minded delivery</p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                Releases, permissions, and core workflows are treated as operational concerns from the start.
              </p>
            </div>

            <div className="border border-[#E2E8F0] bg-[#FFFFFF] p-5">
              <div className="flex items-center gap-3">
                <Smartphone className="h-5 w-5 text-[#3F7C7A]" />
                <p className="text-lg text-[#0F172A]">Cross-platform thinking</p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                When needed, we plan for web, mobile, and internal admin operations as one connected system.
              </p>
            </div>

            <div className="border border-[#E2E8F0] bg-[#FFFFFF] p-5">
              <div className="flex items-center gap-3">
                <Wrench className="h-5 w-5 text-[#3F7C7A]" />
                <p className="text-lg text-[#0F172A]">Built to keep evolving</p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                The work is structured so your team can maintain, extend, and operate the system after launch.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </div>
  );
}
