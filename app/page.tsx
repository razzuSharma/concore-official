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
    <div className="min-h-screen bg-gray-950">
      <main>
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
