import React from "react";
import { Star, Quote } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Sujan Subedi",
    role: "Founder, ARS Barista Training Institute",
    content:
      "Concore rebuilt our booking and internal operations flow. The new system is faster, easier to manage, and our team now saves hours every week.",
    rating: 5,
    avatar: "SJ",
  },
  {
    id: 2,
    name: "Sujan Adhikari",
    role: "Co-Founder, Tourgasm Travels",
    content:
      "Their team moved quickly, communicated clearly, and delivered features exactly when promised. We finally have a platform we can scale confidently.",
    rating: 5,
    avatar: "MC",
  },
  {
    id: 3,
    name: "Suraj Shah",
    role: "Assistant Manager, Shibam Marble & Furniture",
    content:
      "From planning to launch, the process was structured and transparent. The final product matched our goals and significantly improved operations.",
    rating: 5,
    avatar: "ER",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Teams Trust Us to Deliver
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We work closely with founders and business teams to ship dependable
            software on time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <Star
                    key={i}
                    className="h-4 w-4 text-yellow-400 fill-current"
                  />
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
          <div className="mb-6 inline-flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <span className="text-lg font-semibold">4.9/5 client rating</span>
          </div>
          <div>
            <Button asChild size="lg" className="rounded-xl px-8 py-6 text-lg">
              <Link href="/contact-us">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
