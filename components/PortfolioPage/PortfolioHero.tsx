import { projects } from "./projectsData";

const PortfolioHero = () => {
  const categories = new Set(projects.map((project) => project.category)).size;
  const shippedProjects = projects.filter((project) => project.status === "Shipped").length;

  const years = projects
    .map((project) => new Date(project.shippedAt).getFullYear())
    .filter((year) => !Number.isNaN(year));
  const earliest = Math.min(...years);
  const latest = Math.max(...years);

  const facts = [
    { value: String(shippedProjects).padStart(2, "0"), label: "Selected builds" },
    { value: String(categories).padStart(2, "0"), label: "Industries" },
    { value: "End to end", label: "Discovery to support" },
  ];

  return (
    <section className="relative bg-[#F5F4EF] text-[#16201D]">
      <div className="mx-auto max-w-[1180px] px-6 pb-12 pt-20 sm:px-8 md:pb-16 md:pt-28">
        <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-[#9A7B4F]">
          Selected Work
          <span className="mx-3 text-[#C9C6B8]">/</span>
          {earliest} — {latest}
        </p>

        <h1 className="mt-7 max-w-[16ch] font-serif text-[clamp(2.9rem,6.4vw,5.4rem)] font-normal leading-[1.02] tracking-[-0.015em] text-[#16201D]">
          Systems we shipped,
          <span className="block italic text-[#123B36]">and what they changed.</span>
        </h1>

        <p className="mt-8 max-w-[52ch] font-sans text-lg leading-relaxed text-[#5E6B63]">
          A short catalog of client builds across education, travel, commerce, and construction.
          Each entry is a system that went live — with the context it solved and the result it left behind.
        </p>

        <dl className="mt-12 flex flex-wrap gap-x-12 gap-y-6 border-t border-[#E2E0D6] pt-7">
          {facts.map((fact) => (
            <div key={fact.label} className="flex flex-col">
              <dt className="font-serif text-2xl leading-none text-[#16201D]">{fact.value}</dt>
              <dd className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#8A8676]">
                {fact.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default PortfolioHero;
