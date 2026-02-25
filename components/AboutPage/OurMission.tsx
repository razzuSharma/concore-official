import React from "react";
import { Target, Users, Lightbulb, Heart } from "lucide-react";

const OurMission = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "Build dependable digital products that solve real business problems and create measurable outcomes for our clients.",
      color: "bg-[#14B8A6]"
    },
    {
      icon: Users,
      title: "Our Vision",
      description:
        "Be the most trusted technology partner for teams that want to move fast without compromising quality.",
      color: "bg-[#14B8A6]"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We experiment thoughtfully, adopt tools with clear value, and turn new ideas into practical product improvements.",
      color: "bg-[#14B8A6]"
    },
    {
      icon: Heart,
      title: "Our Values",
      description:
        "Integrity, accountability, and collaboration guide every engagement. We communicate clearly and deliver what we promise.",
      color: "bg-[#14B8A6]"
    },
  ];

  return (
    <section className="bg-[#F8F9F5] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold text-[#0F172A] md:text-4xl">
            Our Mission & Values
          </h2>
          <p className="mx-auto max-w-3xl text-base text-[#475569] md:text-lg">
            The principles behind how we build, collaborate, and support our
            partners from discovery to delivery.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-[#E2E8F0] bg-[#FFFFFF] p-8 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div className={`mb-6 inline-flex rounded-2xl p-4 ${value.color} transition-transform duration-300 group-hover:scale-110`}>
                <value.icon className="h-8 w-8 text-white" />
              </div>

              <h3 className="mb-4 text-xl font-bold text-[#0F172A]">
                {value.title}
              </h3>

              <p className="text-sm leading-relaxed text-[#475569]">
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
