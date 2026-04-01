import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/HomePage/Container";
import Section from "@/components/HomePage/Section";

export default function HeroSection() {
  return (
    <Section className="relative overflow-hidden border-b border-[#E2E8F0] bg-[#F6F7F2] pt-14 md:pt-[4.5rem]">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_28%,rgba(255,255,255,0.85),transparent_34%),radial-gradient(circle_at_76%_50%,rgba(20,184,166,0.05),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px bg-[linear-gradient(180deg,transparent,rgba(226,232,240,0.9),transparent)] lg:block" />

      <Container className="relative">
        <div className="grid min-h-[calc(100vh-7rem)] items-center gap-16 py-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)] lg:gap-8 lg:py-16">
          <div className="max-w-[40rem]">
            <h1 className="text-[clamp(4.5rem,11vw,8.8rem)] leading-[0.84] tracking-[-0.06em] text-[#1F2933]">
              CUSTOM
              <span className="block">SOFTWARE</span>
              <span className="block">FOR REAL</span>
              <span className="block text-[#3F7C7A]">OPERATIONS.</span>
            </h1>

            <p className="mt-8 max-w-[31rem] border-l border-[#D5DDE5] pl-5 text-[1.08rem] leading-[1.55] text-[#667085]">
              We build custom web platforms, internal tools, and AI-enabled systems for companies that need reliable
              software delivery, clear communication, and maintainable systems.
            </p>

            <div className="mt-6 max-w-[34rem] border border-[#DCE3E8] bg-[#FBFCFA]/92 px-5 py-4">
              <p className="mt-2 text-[1rem] leading-[1.6] text-[#475467]">
                Concore Technologies builds custom software for growing companies that need better operations, faster
                execution, and dependable long-term systems.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button
                asChild
                className="h-11 rounded-none border border-[#1B4E52] bg-[#1B4E52] px-5 font-mono text-[11px] uppercase tracking-[0.16em] text-white hover:bg-[#163F42]"
              >
                <Link href="/contact-us" className="group inline-flex items-center gap-2">
                  Start A Project
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </Button>

              <Link
                href="/#services"
                className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#7B8794] transition hover:text-[#1F2933]"
              >
                View Services
              </Link>
            </div>
          </div>

          <div className="relative hidden min-h-[560px] lg:block">
            <div className="absolute inset-[10%] rotate-45 border border-[#E8EDF1]" />
            <div className="absolute inset-[24%] border border-[#EDF2F6]" />
            <div className="absolute left-1/2 top-[14%] h-[72%] w-px -translate-x-1/2 bg-[#D5DDE5]" />
            <div className="absolute left-[18%] top-1/2 h-px w-[64%] -translate-y-1/2 bg-[#D5DDE5]" />

            <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 border border-[#94A3B8] bg-[#FBFCFA] shadow-[0_0_0_10px_rgba(255,255,255,0.72)]">
              <div className="absolute inset-[0.65rem] border border-[#3F7C7A]" />
              <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#3F7C7A] bg-[#3F7C7A]" />
              <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F6F7F2]" />
            </div>

            <div className="absolute inset-y-[22%] left-1/2 w-[8.5rem] -translate-x-1/2 bg-[radial-gradient(circle,rgba(255,255,255,0.9),rgba(255,255,255,0))]" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
