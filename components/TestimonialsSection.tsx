import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "Concore Technologies transformed our digital infrastructure completely. Their expertise in cloud solutions helped us scale 300% in just 6 months.",
    rating: 5,
    avatar: "SJ"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO, InnovateCorp",
    content: "The AI solutions provided by Concore are game-changing. Their team's technical depth and innovative approach exceeded all our expectations.",
    rating: 5,
    avatar: "MC"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Manager, DataFlow",
    content: "Outstanding service and support. Concore delivered our project ahead of schedule with exceptional quality. Highly recommended!",
    rating: 5,
    avatar: "ER"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Founder, NextGen Solutions",
    content: "Working with Concore has been a fantastic experience. Their attention to detail and commitment to excellence is unmatched in the industry.",
    rating: 5,
    avatar: "DT"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders have to say about working with Concore Technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.avatar}
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="relative">
                <Quote className="absolute -top-2 -left-2 h-6 w-6 text-blue-200 dark:text-blue-800" />
                <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed pl-4">
                  "{testimonial.content}"
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <span className="text-lg font-semibold">4.9/5</span>
            <span className="text-sm">Average Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
