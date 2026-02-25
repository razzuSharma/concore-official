import React from "react";
import { TrendingUp, Users, Award, Globe } from "lucide-react";

const CompanyStats = () => {
  const stats = [
    {
      icon: TrendingUp,
      number: "300%",
      label: "Average Growth",
      description: "Client revenue growth after our solutions",
      color: "text-[#14B8A6]"
    },
    {
      icon: Users,
      number: "50+",
      label: "Team Members",
      description: "Dedicated professionals worldwide",
      color: "text-[#14B8A6]"
    },
    {
      icon: Award,
      number: "25+",
      label: "Awards Won",
      description: "Industry recognition and excellence",
      color: "text-[#14B8A6]"
    },
    {
      icon: Globe,
      number: "15+",
      label: "Countries",
      description: "Global presence and reach",
      color: "text-[#14B8A6]"
    },
  ];

  return (
    <section className="bg-[#0F172A] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold text-[#F8F9F5] md:text-4xl">
            Our Impact in Numbers
          </h2>
          <p className="mx-auto max-w-3xl text-base text-[#F8F9F5]/75 md:text-lg">
            The results speak for themselves. Here's how we've made a difference 
            for our clients and the industry.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="mb-6 inline-flex rounded-2xl bg-[#334155] p-4 transition-transform duration-300 group-hover:scale-110">
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
              
              <div className="mb-2 text-4xl font-bold text-[#F8F9F5] md:text-5xl">
                {stat.number}
              </div>
              
              <div className="mb-2 text-lg font-semibold text-[#F8F9F5] md:text-xl">
                {stat.label}
              </div>
              
              <div className="text-sm text-[#F8F9F5]/75">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyStats;
