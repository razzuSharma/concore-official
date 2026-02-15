import HeroSection from "@/components/HomePage/HeroSection";
import TrustStrip from "@/components/HomePage/TrustStrip";
import WhyChooseUsSection from "@/components/HomePage/WhyChooseUsSection";
import ServicesPreview from "@/components/HomePage/ServicesPreview";
import CaseStudiesPreview from "@/components/HomePage/CaseStudiesPreview";
import ProcessSection from "@/components/HomePage/ProcessSection";
import TestimonialsSection from "@/components/HomePage/TestimonialsSection";
import FinalCTA from "@/components/HomePage/FinalCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950">
      <main>
        <HeroSection />
        <TrustStrip />
        <WhyChooseUsSection />
        <ServicesPreview />
        <CaseStudiesPreview />
        <ProcessSection />
        <TestimonialsSection />
        <FinalCTA />
      </main>
    </div>
  );
}
