import React from "react";
import AboutHero from "@/components/AboutPage/AboutHero";
import OurMission from "@/components/AboutPage/OurMission";
import TeamSection from "@/components/AboutPage/TeamSection";
import CompanyTimeline from "@/components/AboutPage/CompanyTimeline";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <AboutHero />
      <OurMission />
      <TeamSection />
      <CompanyTimeline />
    </div>
  );
};

export default AboutPage;
