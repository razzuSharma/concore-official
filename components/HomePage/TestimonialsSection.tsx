import Image from "next/image";
import Container from "@/components/HomePage/Container";
import Section from "@/components/HomePage/Section";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sujan Subedi",
    role: "Founder",
    company: "ARS Barista Training Institute",
    engagement: "Student Operations Platform",
    quote:
      "CONCORE TECHNOLOGIES brought structure to our entire delivery process. We had weekly visibility, clear technical decisions, and a launch that immediately improved day-to-day operations.",
    challenge:
      "Disconnected workflows across admissions, class scheduling, and certifications were slowing staff and frustrating students.",
    impact: ["60% less admin overhead", "35% higher completion rate", "Launch delivered on planned milestone"],
    image: "/about/team/sarah-johnson.jpg",
  },
  {
    name: "Sujan Adhikari",
    role: "Co-Founder",
    company: "Tourgasm Travels",
    engagement: "Experience Booking Platform",
    quote:
      "Their communication discipline stood out. Every sprint had clear deliverables, and the team translated business goals into a product we can scale confidently.",
    challenge:
      "The previous booking flow had low conversion and too much manual coordination between travelers and operators.",
    impact: ["28% faster booking operations", "Cleaner customer journey", "Reliable weekly release cadence"],
    image: "/about/team/michael-chen.jpg",
  },
  {
    name: "Suraj Shah",
    role: "Assistant Manager",
    company: "Shibam Marble & Furniture",
    engagement: "Catalog & Quote Workflow",
    quote:
      "From discovery to post-launch support, the process was transparent and practical. The final system matched our business model and improved decision speed across teams.",
    challenge:
      "High-value catalog requests were handled manually, creating response delays and inconsistent quotation tracking.",
    impact: ["50% faster quote turnaround", "Improved internal visibility", "Production-ready handover documentation"],
    image: "/about/team/lisa-wang.jpg",
  },
];

export default function TestimonialsSection() {
  return (
    <Section className="bg-gray-950">
      <Container>
        <div className="mb-12 max-w-4xl">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Client Stories: Why Teams Keep Choosing CONCORE TECHNOLOGIES
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-300">
            Detailed feedback from founders and operators on how we handle delivery, communication,
            and real business outcomes.
          </p>
        </div>

        <div className="space-y-6">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="overflow-hidden border-gray-800 bg-gradient-to-r from-gray-900 via-gray-900 to-gray-950 py-0"
            >
              <CardContent className="p-0">
                <article className="grid gap-0 lg:grid-cols-[280px_1fr]">
                  <div className="border-b border-gray-800 p-6 lg:border-b-0 lg:border-r">
                    <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full border border-gray-700">
                      <Image
                        src={testimonial.image}
                        alt={`${testimonial.name} testimonial profile image`}
                        fill
                        sizes="96px"
                        className="object-cover"
                      />
                    </div>

                    <div className="mt-5 text-center lg:text-left">
                      <p className="text-base font-semibold text-white">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">
                        {testimonial.role}, {testimonial.company}
                      </p>
                      <p className="mt-3 inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-200">
                        {testimonial.engagement}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 md:p-7">
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <div className="flex gap-1 text-amber-300" aria-label="Five star rating">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <Star key={idx} className="h-4 w-4 fill-current" aria-hidden="true" />
                        ))}
                      </div>
                      <Quote className="h-5 w-5 text-blue-300" aria-hidden="true" />
                    </div>

                    <p className="text-sm leading-relaxed text-gray-300">
                      <span className="font-semibold text-gray-100">Challenge:</span> {testimonial.challenge}
                    </p>

                    <p className="mt-4 text-base leading-relaxed text-gray-100">"{testimonial.quote}"</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {testimonial.impact.map((item) => (
                        <span
                          key={item}
                          className="rounded-md border border-emerald-400/25 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
