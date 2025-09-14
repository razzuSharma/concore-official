import React from 'react';
import { TrendingUp, Users, Award, Globe } from 'lucide-react';

const CompanyStats = () => {
  const stats = [
    {
      icon: TrendingUp,
      number: "300%",
      label: "Average Growth",
      description: "Client revenue growth after our solutions",
      color: "text-green-500"
    },
    {
      icon: Users,
      number: "50+",
      label: "Team Members",
      description: "Dedicated professionals worldwide",
      color: "text-blue-500"
    },
    {
      icon: Award,
      number: "25+",
      label: "Awards Won",
      description: "Industry recognition and excellence",
      color: "text-purple-500"
    },
    {
      icon: Globe,
      number: "15+",
      label: "Countries",
      description: "Global presence and reach",
      color: "text-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            The results speak for themselves. Here's how we've made a difference 
            for our clients and the industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="inline-flex p-4 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
              
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              
              <div className="text-xl font-semibold text-white mb-2">
                {stat.label}
              </div>
              
              <div className="text-blue-100 text-sm">
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
