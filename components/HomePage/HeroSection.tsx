import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/HomePage/Container";
import Section from "@/components/HomePage/Section";
import ConcoreMark from "@/components/HomePage/ConcoreMark";

export default function HeroSection() {
  return (
    <Section className="relative overflow-hidden border-b border-[#E2E8F0] bg-[#FBFCFA] py-0 md:py-0">
      <div className="blueprint-grid blueprint-grid-fade pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.95),transparent_36%),radial-gradient(circle_at_80%_45%,rgba(20,184,166,0.05),transparent_52%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(20,184,166,0.22),transparent)]" />
      <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px bg-[linear-gradient(180deg,transparent,rgba(226,232,240,0.9),transparent)] lg:block" />

      <Container className="relative">
        <div className="grid min-h-[calc(100vh-9rem)] items-center gap-16 pb-12 pt-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] lg:gap-8 lg:pb-16 lg:pt-10">
          <div className="max-w-[38rem]">
            <h1 className="text-[clamp(4rem,9vw,7.5rem)] leading-[0.8] tracking-[-0.055em] text-[#1F2933]">
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
                className="h-11 rounded-none border border-[#123F43] bg-[#123F43] px-5 font-mono text-[11px] uppercase tracking-[0.16em] text-white hover:bg-[#0F3538]"
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
                className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#7B8794] transition hover:text-[#1F2933]"
              >
                View Services
              </Link>
            </div>
          </div>

          <div className="relative hidden min-h-[560px] items-center justify-end lg:flex">
            <ConcoreMark className="h-auto w-full max-w-[40rem] lg:-mr-8 xl:-mr-16" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
