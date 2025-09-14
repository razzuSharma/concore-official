import React from 'react';
import Image from 'next/image';

const CompanyTimeline = () => {
  const milestones = [
    {
      year: "2019",
      title: "Company Founded",
      description: "Started with a vision to revolutionize digital solutions",
      image: "/about/timeline/2019-founding.jpg",
      highlight: true
    },
    {
      year: "2020",
      title: "First Major Client",
      description: "Secured our first enterprise client, marking our entry into the market",
      image: "/about/timeline/2020-first-client.jpg",
      highlight: false
    },
    {
      year: "2021",
      title: "Team Expansion",
      description: "Grew from 5 to 25 team members, expanding our capabilities",
      image: "/about/timeline/2021-team-expansion.jpg",
      highlight: false
    },
    {
      year: "2022",
      title: "AI Integration",
      description: "Launched our AI-powered solutions division",
      image: "/about/timeline/2022-ai-launch.jpg",
      highlight: true
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Opened offices in 3 new countries",
      image: "/about/timeline/2023-global-expansion.jpg",
      highlight: false
    },
    {
      year: "2024",
      title: "Future Vision",
      description: "Continuing to innovate and shape the future of technology",
      image: "/about/timeline/2024-future.jpg",
      highlight: true
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From humble beginnings to industry leadership, here's how we've grown 
            and evolved over the years.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white dark:border-gray-950 ${
                  milestone.highlight 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600' 
                    : 'bg-gray-300 dark:bg-gray-600'
                } z-10`}></div>

                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className={`bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 ${
                    milestone.highlight ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
                  }`}>
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {milestone.description}
                    </p>
                    <div className="relative w-full h-32 rounded-xl overflow-hidden">
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
