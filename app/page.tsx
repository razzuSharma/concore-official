import HeroSection from "@/components/HeroSection";
import ServicesPreview from "@/components/ServicesPreview";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <main>
        <HeroSection />
        <ServicesPreview />
        <TestimonialsSection />
      </main>
    </div>
  );
}
