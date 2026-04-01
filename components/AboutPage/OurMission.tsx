import { Lightbulb, ShieldCheck, Target, Users } from "lucide-react";

const principles = [
  {
    icon: Target,
    title: "Mission",
    description: "Build dependable software systems that solve real business problems and create measurable operational value.",
  },
  {
    icon: Users,
    title: "How We Work",
    description: "Clients work directly with the people planning, building, and shipping the system from start to finish.",
  },
  {
    icon: ShieldCheck,
    title: "Delivery Standard",
    description: "We care about maintainability, production quality, and software that teams can keep operating after launch.",
  },
  {
    icon: Lightbulb,
    title: "Approach",
    description: "We use new tools when they create clear value, but we prioritize practical outcomes over novelty.",
  },
];

const OurMission = () => {
  return (
    <section className="bg-[#F8F9F5] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 max-w-4xl">
          <h2 className="text-[clamp(2.8rem,5vw,4.4rem)] leading-[0.95] text-[#0F172A]">What Guides The Work</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#475569] md:text-lg">
            Concore is built around straightforward delivery principles: clear communication, accountable engineering,
            and software that works in the real conditions clients operate in.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {principles.map((item) => (
            <article key={item.title} className="border border-[#E2E8F0] bg-[#FFFFFF] p-6">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#D9E7E4] bg-[#F0FDFA] text-[#3F7C7A]">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-2xl leading-[0.98] text-[#0F172A]">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#475569]">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMission;
