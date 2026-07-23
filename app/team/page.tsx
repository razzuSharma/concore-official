import type { Metadata } from "next";
import TeamSection from "@/components/AboutPage/TeamSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the leadership and engineering team behind Concore Technologies. Our people drive strategy, delivery, and long-term product quality.",
  alternates: {
    canonical: "/team",
  },
  openGraph: {
    title: "Our Team | Concore Technologies",
    description:
      "Meet the leadership and engineering team behind Concore Technologies.",
    url: "https://www.concoretechnologies.com/team",
  },
};

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#F8F9F5]">
      <section className="relative overflow-hidden border-b border-[#E2E8F0] bg-[#F6F7F2] py-16 md:py-20">
        <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-60" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,255,255,0.85),transparent_34%),radial-gradient(circle_at_78%_45%,rgba(20,184,166,0.06),transparent_28%)]" />
        <div className="relative mx-auto max-w-6xl px-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-[#3F7C7A]">
            Our Team
            <span className="mx-3 text-[#B7C2C9]">/</span>
            Leadership &amp; Engineering
          </p>
          <h1 className="mt-6 max-w-3xl text-[clamp(2.8rem,6vw,4.5rem)] leading-[0.92] text-[#0F172A]">
            THE PEOPLE
            <span className="block text-[#3F7C7A]">BEHIND THE WORK.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#667085] md:text-lg">
            Our team combines engineering depth with product thinking to deliver
            software that supports real operations and real growth.
          </p>
          <div className="mt-10">
            <Button
              asChild
              className="h-11 rounded-[8px] bg-[#123F43] px-5 text-white hover:bg-[#0F3538]"
            >
              <Link href="/contact-us" className="group inline-flex items-center gap-2">
                Work With Us
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <TeamSection />
    </div>
  );
}
