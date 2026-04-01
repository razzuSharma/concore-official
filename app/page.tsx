import type { Metadata } from "next";
import HeroSection from "@/components/HomePage/HeroSection";
import TrustStrip from "@/components/HomePage/TrustStrip";
import ServicesPreview from "@/components/HomePage/ServicesPreview";
import EngineeringEvidenceSection from "@/components/HomePage/EngineeringEvidenceSection";
import ProjectsShowcase from "@/components/HomePage/ProjectsShowcase";
import OffshoreComparisonSection from "@/components/HomePage/OffshoreComparisonSection";
import TeamCredibilitySection from "@/components/HomePage/TeamCredibilitySection";
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
    <div className="min-h-screen bg-transparent">
      <main>
        <HeroSection />
        <TrustStrip />
        <ServicesPreview />
        <EngineeringEvidenceSection />
        <ProjectsShowcase />
        <OffshoreComparisonSection />
        <TeamCredibilitySection />
        <FinalCTA />
      </main>
    </div>
  );
}
