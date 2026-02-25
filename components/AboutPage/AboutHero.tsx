import React from "react";
import Image from "next/image";

const AboutHero = () => {
  return (
    <section className="relative bg-[#F8F9F5] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="mb-6 text-4xl font-bold text-[#0F172A] md:text-5xl">
              About
              <span className="block text-[#14B8A6]">
                Concore Technologies
              </span>
            </h1>
            <p className="mb-8 text-base leading-relaxed text-[#475569] md:text-lg">
              We help businesses design, build, and scale reliable digital
              products. Our team combines product strategy, engineering, and
              design to deliver solutions that are practical, measurable, and
              built for long-term growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="rounded-full border border-[#E2E8F0] bg-[#FFFFFF] px-6 py-3 shadow-sm">
                <span className="text-sm font-semibold text-[#475569]">
                  Founded in 2025
                </span>
              </div>
              <div className="rounded-full border border-[#E2E8F0] bg-[#FFFFFF] px-6 py-3 shadow-sm">
                <span className="text-sm font-semibold text-[#475569]">
                  Product-First Execution
                </span>
              </div>
              <div className="rounded-full border border-[#E2E8F0] bg-[#FFFFFF] px-6 py-3 shadow-sm">
                <span className="text-sm font-semibold text-[#475569]">
                  Quality Over Quantity
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-96 w-full overflow-hidden rounded-2xl border border-[#E2E8F0] shadow-sm">
              <Image
                src="/about/team-meeting.png"
                alt="Our team in a collaborative meeting"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
