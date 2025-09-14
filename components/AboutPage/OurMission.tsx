import React from 'react';
import { Target, Users, Lightbulb, Heart } from 'lucide-react';

const OurMission = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To revolutionize the digital landscape by delivering innovative technology solutions that empower businesses to achieve their full potential and create meaningful impact in the world.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Our Vision",
      description: "To be the leading technology partner that transforms ideas into reality, fostering a future where technology seamlessly integrates with human creativity and business success.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We believe in pushing the boundaries of what's possible, constantly exploring new technologies and methodologies to deliver cutting-edge solutions.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "Integrity, excellence, and collaboration are at the core of everything we do. We build lasting relationships through trust, transparency, and exceptional service.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Mission & Values
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We are driven by a passion for innovation and a commitment to delivering 
            exceptional results that exceed our clients' expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${value.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <value.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {value.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMission;
