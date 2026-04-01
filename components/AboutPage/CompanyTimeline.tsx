const milestones = [
  {
    year: "2025",
    title: "Concore was founded",
    description: "The company was established to deliver custom software systems with a stronger focus on quality, clarity, and practical business use.",
  },
  {
    year: "2025",
    title: "Initial client delivery",
    description: "Early projects focused on operations-heavy systems and set the foundation for long-term client relationships.",
  },
  {
    year: "2026",
    title: "Service range expanded",
    description: "The delivery model expanded across web platforms, internal tools, AI workflows, deployment, and ongoing support.",
  },
  {
    year: "2026",
    title: "Delivery model matured",
    description: "Processes were standardized around clearer scope, faster iteration, maintainable systems, and stronger release quality.",
  },
];

const CompanyTimeline = () => {
  return (
    <section className="bg-[#F8F9F5] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 max-w-4xl">
          <h2 className="text-[clamp(2.8rem,5vw,4.4rem)] leading-[0.95] text-[#0F172A]">Company Timeline</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#475569] md:text-lg">
            A short view of how the company has developed its client work, delivery model, and service focus.
          </p>
        </div>

        <div className="relative border-l border-[#DCE3E8] pl-6 md:pl-8">
          {milestones.map((milestone) => (
            <article key={`${milestone.year}-${milestone.title}`} className="relative mb-8 last:mb-0">
              <span className="absolute -left-[2.05rem] top-1 h-3.5 w-3.5 rounded-full border border-[#3F7C7A] bg-[#F0FDFA] md:-left-[2.55rem]" />
              <p className="text-sm font-medium text-[#3F7C7A]">{milestone.year}</p>
              <h3 className="mt-2 text-3xl leading-[0.98] text-[#0F172A]">{milestone.title}</h3>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#475569]">{milestone.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyTimeline;
