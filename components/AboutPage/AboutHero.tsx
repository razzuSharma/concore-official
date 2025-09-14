import React from "react";
import Image from "next/image";

const AboutHero = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              About
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Concore Technologies
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              We are a team of passionate innovators dedicated to transforming
              ideas into cutting-edge digital solutions. Our mission is to
              empower businesses with technology that drives growth and creates
              lasting impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-lg">
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  🚀 Founded 2025
                </span>
              </div>
              <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-lg">
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  🌍 Innovation First
                </span>
              </div>
              <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-lg">
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  🌝 Quality Over Quantity
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/about/team-meeting.png"
                alt="Our team in a collaborative meeting"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-xl opacity-20"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
