import type { Metadata } from "next";
import HeroSection from "@/components/HomePage/HeroSection";
import TrustStrip from "@/components/HomePage/TrustStrip";
import StartupSignalSection from "@/components/HomePage/StartupSignalSection";
import NookSection from "@/components/HomePage/NookSection";
import ServicesPreview from "@/components/HomePage/ServicesPreview";
import EngineeringEvidenceSection from "@/components/HomePage/EngineeringEvidenceSection";
import CaseStudiesPreview from "@/components/HomePage/CaseStudiesPreview";
import ProjectsShowcase from "@/components/HomePage/ProjectsShowcase";
import ProcessSection from "@/components/HomePage/ProcessSection";
import OffshoreComparisonSection from "@/components/HomePage/OffshoreComparisonSection";
import TeamCredibilitySection from "@/components/HomePage/TeamCredibilitySection";
import TestimonialsSection from "@/components/HomePage/TestimonialsSection";
import FinalCTA from "@/components/HomePage/FinalCTA";

export const metadata: Metadata = {
  title: "Production-Grade Web, Mobile, and AI Engineering",
  description:
    "Concore Technologies builds production-grade web, mobile, and AI systems for teams that ship fast.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#F8F9F5]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(226,232,240,0.78)_1px,transparent_1px),linear-gradient(90deg,rgba(226,232,240,0.78)_1px,transparent_1px)] bg-[size:42px_42px] opacity-45" />
      <main className="relative z-10">
        <HeroSection />
        <TrustStrip />
        <StartupSignalSection />
        <NookSection />
        <ServicesPreview />
        <EngineeringEvidenceSection />
        <CaseStudiesPreview />
        <ProjectsShowcase />
        <ProcessSection />
        <OffshoreComparisonSection />
        <TeamCredibilitySection />
        <TestimonialsSection />
        <FinalCTA />
      </main>
    </div>
  );
}
