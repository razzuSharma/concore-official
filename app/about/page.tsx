import type { Metadata } from "next";
import React from "react";
import AboutHero from "@/components/AboutPage/AboutHero";
import OurMission from "@/components/AboutPage/OurMission";
import TeamSection from "@/components/AboutPage/TeamSection";
import CompanyTimeline from "@/components/AboutPage/CompanyTimeline";

export const metadata: Metadata = {
  title: "About Our Web Development Team",
  description:
    "Meet the Concore Technologies team delivering custom web development, product strategy, and engineering support for businesses in Nepal and beyond.",
  alternates: {
    canonical: "/about",
  },
};

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#F8F9F5]">
      <AboutHero />
      <OurMission />
      <TeamSection />
      <CompanyTimeline />
    </div>
  );
};

export default AboutPage;
