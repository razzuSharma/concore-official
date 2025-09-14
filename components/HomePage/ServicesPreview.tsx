import React from 'react';
import { Code, Cloud, Smartphone, Database, Shield, Zap } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored solutions built with modern technologies to meet your specific business requirements.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services for enhanced performance and reliability.",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Transform your data into actionable insights with our advanced analytics solutions.",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and ensure compliance.",
    color: "from-red-500 to-red-600"
  },
  {
    icon: Zap,
    title: "AI & Machine Learning",
    description: "Intelligent automation and AI-powered solutions to drive innovation and efficiency.",
    color: "from-pink-500 to-pink-600"
  }
];

const ServicesPreview = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive technology solutions designed to accelerate your business growth and digital transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {service.description}
              </p>
              
              <div className="text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                Learn More →
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="text-lg px-8 py-6 rounded-xl">
            <Link href="/services">
              View All Services
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
