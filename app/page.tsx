import HeroSection from "@/components/HomePage/HeroSection";
import ServicesPreview from "@/components/HomePage/ServicesPreview";
import TechStackSection from "@/components/HomePage/TechStackSection";
import TestimonialsSection from "@/components/HomePage/TestimonialsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <main>
        <HeroSection />
        <ServicesPreview />
        <TechStackSection />
        <TestimonialsSection />
      </main>
    </div>
  );
}
