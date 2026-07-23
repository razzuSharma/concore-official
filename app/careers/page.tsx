import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Briefcase, Code, Globe, Heart, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Concore Technologies and help build production-grade web, mobile, and AI systems. We are hiring engineers, designers, and product thinkers.",
  alternates: {
    canonical: "/careers",
  },
  openGraph: {
    title: "Careers | Concore Technologies",
    description:
      "Join Concore Technologies and help build production-grade web, mobile, and AI systems.",
    url: "https://www.concoretechnologies.com.np/careers",
  },
};

const values = [
  {
    icon: Code,
    title: "Engineering-first culture",
    description:
      "We write production code, not demo code. Every engineer works on systems that ship and serve real users.",
  },
  {
    icon: Users,
    title: "Small teams, high ownership",
    description:
      "You own features end-to-end. No hand-offs, no ticket shuffling — just direct responsibility and visible impact.",
  },
  {
    icon: Globe,
    title: "Remote-friendly",
    description:
      "We work across time zones with clear async communication, focused sprint cycles, and minimal meetings.",
  },
  {
    icon: Zap,
    title: "Ship fast, learn faster",
    description:
      "We deliver in short cycles, gather feedback early, and iterate based on real usage rather than assumptions.",
  },
  {
    icon: Heart,
    title: "Sustainable pace",
    description:
      "We plan work realistically and respect boundaries. Sustainable delivery beats crunch every time.",
  },
  {
    icon: Briefcase,
    title: "Growth through real work",
    description:
      "Your growth comes from building complex systems, not from internal politics or performative work.",
  },
];

const openRoles = [
  {
    code: "REQ-FS01",
    title: "Full-Stack Engineer",
    type: "Full-time",
    location: "Remote",
    stack: ["Next.js", "PostgreSQL", "TypeScript"],
    description:
      "Build and maintain production web applications using modern frameworks, databases, and deployment workflows.",
  },
  {
    code: "REQ-FE02",
    title: "Frontend Engineer",
    type: "Full-time",
    location: "Remote",
    stack: ["React", "Next.js", "Tailwind"],
    description:
      "Craft performant, accessible user interfaces with React, Next.js, and modern CSS tooling.",
  },
  {
    code: "REQ-BE03",
    title: "Backend Engineer",
    type: "Full-time",
    location: "Remote",
    stack: ["Node.js", "APIs", "Data modeling"],
    description:
      "Design and implement APIs, data models, and server-side logic for custom business platforms.",
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#F8F9F5]">
      <section className="relative overflow-hidden border-b border-[#E2E8F0] bg-[#F6F7F2] py-16 md:py-20">
        <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-60" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,255,255,0.85),transparent_34%),radial-gradient(circle_at_78%_45%,rgba(20,184,166,0.06),transparent_28%)]" />
        <div className="relative mx-auto max-w-6xl px-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-[#3F7C7A]">
            Careers
            <span className="mx-3 text-[#B7C2C9]">/</span>
            {String(openRoles.length).padStart(2, "0")} open roles
          </p>
          <h1 className="mt-6 max-w-3xl text-[clamp(2.8rem,6vw,4.5rem)] leading-[0.92] text-[#0F172A]">
            BUILD SOFTWARE
            <span className="block text-[#3F7C7A]">THAT ACTUALLY MATTERS.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#667085] md:text-lg">
            We are looking for engineers and product thinkers who want to work on
            real systems — not prototypes. If you care about craft, ownership, and
            shipping production software, we want to hear from you.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button
              asChild
              className="h-11 rounded-[8px] bg-[#123F43] px-5 text-white hover:bg-[#0F3538]"
            >
              <Link href="#open-roles" className="group inline-flex items-center gap-2">
                View Open Roles
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-11 rounded-[8px] border border-[#DCE3E8] px-5 text-[#475569] hover:bg-[#FFFFFF]"
            >
              <Link href="/about">Learn About Us</Link>
            </Button>
          </div>

          <dl className="mt-12 flex flex-wrap gap-x-12 gap-y-6 border-t border-[#DCE3E8] pt-7">
            {[
              { value: "Remote-first", label: "Where we work" },
              { value: "Async, focused", label: "How we work" },
              { value: "Direct", label: "Client access" },
            ].map((fact) => (
              <div key={fact.label} className="flex flex-col">
                <dt className="text-xl font-semibold text-[#0F172A]">{fact.value}</dt>
                <dd className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#8A929C]">
                  {fact.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-[#F8F9F5] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 max-w-3xl">
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] leading-[0.95] text-[#0F172A]">
              Why Concore
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#475569] md:text-lg">
              We are a small, focused engineering team building production-grade
              software for businesses that need reliable systems and real delivery.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <article
                key={value.title}
                className="relative border border-[#E2E8F0] bg-[#FFFFFF] p-6 shadow-[0_8px_24px_rgba(15,23,42,0.03)]"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="inline-flex h-10 w-10 items-center justify-center border border-[#D9E7E4] bg-[#F0FDFA] text-[#3F7C7A]">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#B7C2C9]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-[#0F172A]">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#475569]">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="open-roles" className="border-t border-[#E2E8F0] bg-[#F8F9F5] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 max-w-3xl">
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] leading-[0.95] text-[#0F172A]">
              Open Roles
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#475569] md:text-lg">
              We are always interested in talking to talented engineers. If you
              do not see a perfect fit, reach out anyway.
            </p>
          </div>

          <div className="border border-[#E2E8F0] bg-[#FFFFFF] shadow-[0_8px_24px_rgba(15,23,42,0.03)]">
            {openRoles.map((role, index) => (
              <article
                key={role.title}
                className={`flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between md:p-8 ${
                  index !== 0 ? "border-t border-[#E2E8F0]" : ""
                }`}
              >
                <div className="min-w-0">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#14B8A6]">
                    {role.code}
                    <span className="mx-2 text-[#B7C2C9]">/</span>
                    {role.type}
                    <span className="mx-2 text-[#B7C2C9]">/</span>
                    {role.location}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-[#0F172A]">
                    {role.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#475569]">
                    {role.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {role.stack.map((item) => (
                      <span
                        key={item}
                        className="font-mono rounded border border-[#E2E8F0] bg-[#F8F9F5] px-2 py-0.5 text-[10px] uppercase tracking-[0.08em] text-[#475569]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="shrink-0 rounded-[8px] border border-[#DCE3E8] px-5 text-[#475569] hover:bg-[#F0FDFA]"
                >
                  <Link
                    href="/contact-us"
                    className="group inline-flex items-center gap-2"
                  >
                    Apply
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0F172A] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-[clamp(2rem,4vw,3rem)] leading-[0.95] text-[#F8F9F5]">
            Do Not See Your Role?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#9BA3AD] md:text-lg">
            We value initiative. Send us a note about what you would like to
            build at Concore, and we will get back to you.
          </p>
          <div className="mt-8">
            <Button
              asChild
              className="h-11 rounded-[8px] bg-[#14B8A6] px-6 text-[#0F172A] hover:bg-[#14B8A6]/90"
            >
              <Link
                href="mailto:careers@concoretechnologies.com?subject=Open%20Application"
                className="group inline-flex items-center gap-2"
              >
                Send Us an Email
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
