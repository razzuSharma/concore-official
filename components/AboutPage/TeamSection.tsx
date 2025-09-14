import React from "react";
import Image from "next/image";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Raju Sharma Dahal",
      role: "CEO & Founder",
      image: "/about/team/sarah-johnson.jpg",
      description:
        "Visionary leader with 5+ years in tech innovation and business development",
      social: { linkedin: "#", twitter: "#" },
    },  
    {
      name: "Projjwal Kharel",
      role: "CTO",
      image: "/about/team/michael-chen.jpg",
      description:
        "Technical architect passionate about scalable solutions and business development",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Rohit Kumar Poddar",
      role: "Lead Marketing",
      image: "/about/team/emily-rodriguez.jpg",
      description:
        "Marketing expert with a passion for growth and business development",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Binita Shrestha",
      role: "Head of HR & Operations",
      image: "/about/team/david-thompson.jpg",
      description: "HR & Operations expert with a passion for growth",
      social: { linkedin: "#", twitter: "#" },
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The brilliant minds behind our success. We're a diverse team of
            innovators, creators, and problem-solvers united by our passion for
            technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
            >
              <div className="relative w-full h-64 mb-6 rounded-xl overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {member.name}
              </h3>

              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
                {member.role}
              </p>

              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                {member.description}
              </p>

              <div className="flex space-x-3">
                <a
                  href={member.social.linkedin}
                  className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href={member.social.twitter}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
