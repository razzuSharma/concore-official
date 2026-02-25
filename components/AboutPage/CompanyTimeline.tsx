import React from "react";
import Image from "next/image";

const CompanyTimeline = () => {
  const milestones = [
    {
      year: "2025",
      title: "Company Founded",
      description: "Concore Technologies was established to deliver modern, outcome-driven software solutions.",
      image: "/about/timeline/2020-first-client.jpg",
      highlight: true
    },
    {
      year: "2025",
      title: "Initial Client Partnerships",
      description: "Delivered the first production projects and built long-term relationships with early partners.",
      image: "/about/timeline/2020-first-client.jpg",
      highlight: false
    },
    {
      year: "2026",
      title: "Service Expansion",
      description: "Expanded services across product design, engineering, and digital marketing.",
      image: "/about/timeline/2021-team-expansion.jpg",
      highlight: false
    },
    {
      year: "2026",
      title: "Process Maturity",
      description: "Standardized delivery workflows to improve speed, quality, and predictability.",
      image: "/about/timeline/2022-ai-launch.jpg",
      highlight: true
    },
    {
      year: "Today",
      title: "Continuous Improvement",
      description: "We continue to refine our craft and support clients through every stage of digital growth.",
      image: "/about/timeline/2023-global-expansion.jpg",
      highlight: false
    },
  ];

  return (
    <section className="bg-[#F8F9F5] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold text-[#0F172A] md:text-4xl">
            Our Journey
          </h2>
          <p className="mx-auto max-w-3xl text-base text-[#475569] md:text-lg">
            A quick look at the milestones that shaped Concore Technologies.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 transform rounded-full bg-[#E2E8F0]" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className={`absolute left-1/2 z-10 h-6 w-6 -translate-x-1/2 transform rounded-full border-4 border-[#F8F9F5] ${
                  milestone.highlight 
                    ? "bg-[#14B8A6]"
                    : "bg-[#334155]"
                }`} />

                <div className={`w-5/12 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                  <div className={`rounded-2xl border border-[#E2E8F0] bg-[#FFFFFF] p-6 shadow-sm transition-all duration-300 hover:shadow-md ${
                    milestone.highlight ? "ring-2 ring-[#14B8A6]/35" : ""
                  }`}>
                    <div className="mb-2 text-2xl font-bold text-[#14B8A6]">
                      {milestone.year}
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-[#0F172A]">
                      {milestone.title}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-[#475569]">
                      {milestone.description}
                    </p>
                    <div className="relative h-32 w-full overflow-hidden rounded-xl">
                      <Image
                        src={milestone.image}
                        alt={milestone.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyTimeline;
