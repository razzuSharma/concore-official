import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/HomePage/Container";
import Section from "@/components/HomePage/Section";
import HeroGraphic from "@/components/HomePage/HeroGraphic";

export default function HeroSection() {
  return (
    <Section className="relative overflow-hidden border-b border-[#E2E8F0] bg-[#FBFCFA] py-0 md:py-0">
      <div className="blueprint-grid blueprint-grid-fade pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(255,255,255,0.95),transparent_38%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(20,184,166,0.22),transparent)]" />

      <HeroGraphic />

      <Container className="relative">
        <div className="grid min-h-[calc(100vh-9rem)] items-center gap-16 pb-12 pt-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.82fr)] lg:gap-8 lg:pb-16 lg:pt-10">
          <div className="max-w-[38rem]">
            <h1 className="text-[clamp(4rem,9vw,7.5rem)] leading-[0.9] tracking-[-0.05em] text-[#1F2933]">
              <span className="hero-rise block">CUSTOM</span>
              <span className="hero-rise block [animation-delay:80ms]">
                SOFTWARE
              </span>
              <span className="hero-rise block [animation-delay:160ms]">
                FOR REAL
              </span>
              <span className="hero-rise block text-[#3F7C7A] [animation-delay:240ms]">
                OPERATIONS.
              </span>
            </h1>

            <p className="hero-rise mt-8 max-w-[33rem] text-[1.08rem] leading-[1.55] text-[#475467] [animation-delay:340ms]">
              Concore Technologies builds custom web platforms, internal tools,
              and AI-enabled systems for growing companies — engineered for
              reliable delivery, clear communication, and code that stays
              maintainable as you scale.
            </p>

            <div className="hero-rise mt-10 flex flex-wrap items-center gap-4 [animation-delay:460ms]">
              <Button
                asChild
                className="h-11 rounded-none border border-[#123F43] bg-[#123F43] px-6 font-mono text-[11px] uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#0F3538]"
              >
                <Link
                  href="/contact-us"
                  className="group inline-flex items-center gap-2"
                >
                  Start A Project
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </Button>

              <Link
                href="/#services"
                className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#7B8794] transition-colors hover:text-[#1F2933]"
              >
                View Services
              </Link>
            </div>
          </div>

          <div className="hidden lg:block" aria-hidden />
        </div>
      </Container>
    </Section>
  );
}
