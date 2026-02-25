import React from "react";
import Image from "next/image";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Raju Sharma Dahal",
      role: "CEO & Founder",
      image: "/about/team/sarah-johnson.jpg",
      description:
        "Leads company strategy and client partnerships with a focus on sustainable digital growth.",
      social: { linkedin: "#", twitter: "#" },
    },  
    {
      name: "Ngamesh Bhandari",
      role: "CTO",
      image: "/about/team/michael-chen.jpg",
      description:
        "Owns technical direction, architecture, and engineering quality across product delivery.",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Dipesh Bhanadari",
      role: "Lead Engineer",
      image: "/about/team/emily-rodriguez.jpg",
      description:
        "Leads delivery execution and engineering implementation quality across client systems.",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Saurav Niroula",
      role: "Engineering Operations",
      image: "/about/team/david-thompson.jpg",
      description:
        "Coordinates engineering operations, delivery communication, and workflow reliability.",
      social: { linkedin: "#", twitter: "#" },
    },
  ];

  return (
    <section className="bg-[#F8F9F5] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold text-[#0F172A] md:text-4xl">
            Leadership Team
          </h2>
          <p className="mx-auto max-w-3xl text-base text-[#475569] md:text-lg">
            The people responsible for strategy, delivery, and operations at
            Concore Technologies.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-[#E2E8F0] bg-[#FFFFFF] p-6 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div className="relative w-full h-64 mb-6 rounded-xl overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <h3 className="mb-2 text-xl font-bold text-[#0F172A]">
                {member.name}
              </h3>

              <p className="mb-3 font-semibold text-[#14B8A6]">
                {member.role}
              </p>

              <p className="mb-4 text-sm leading-relaxed text-[#475569]">
                {member.description}
              </p>

              <div className="flex space-x-3">
                <a
                  href={member.social.linkedin}
                  className="text-[#475569] transition-colors hover:text-[#14B8A6]"
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
                  className="text-[#475569] transition-colors hover:text-[#14B8A6]"
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
