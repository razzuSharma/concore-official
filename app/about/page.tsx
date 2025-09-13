import React from 'react';
import AboutHero from '@/components/AboutHero';
import OurMission from '@/components/OurMission';
import TeamSection from '@/components/TeamSection';
import CompanyStats from '@/components/CompanyStats';
import CompanyTimeline from '@/components/CompanyTimeline';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <AboutHero />
      <OurMission />
      <TeamSection />
      <CompanyStats />
      <CompanyTimeline />
    </div>
  );
};

export default AboutPage;