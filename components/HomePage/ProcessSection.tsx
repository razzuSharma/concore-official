import Container from "@/components/HomePage/Container";
import Section from "@/components/HomePage/Section";

const timeline = [
  {
    week: "Week 1",
    title: "Discovery + System Framing",
    detail: "Workshops, scope mapping, technical constraints, and initial architecture direction.",
  },
  {
    week: "Week 2",
    title: "UX + Technical Blueprint",
    detail: "Workflow wireframes, data model, API contracts, sprint plan, and acceptance criteria.",
  },
  {
    week: "Week 3-4",
    title: "Build + QA Loops",
    detail: "Feature delivery in short cycles with demos, code review, and continuous QA coverage.",
  },
  {
    week: "Week 5",
    title: "Launch + Enablement",
    detail: "Production deployment, handover docs, monitoring setup, and post-launch support channel.",
  },
];

export default function ProcessSection() {
  return (
    <Section id="process" className="bg-[#070b12]">
      <Container>
        <div className="mb-10 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#8eabdb]">Engagement model</p>
          <h2 className="mt-3 text-5xl leading-[0.95] text-white md:text-6xl">WHAT WEEK 1-5 LOOKS LIKE</h2>
          <p className="mt-4 text-base leading-relaxed text-[#b4c3df] md:text-lg">
            No black box. You see scope, progress, risks, and decisions in writing every week.
          </p>
        </div>

        <div className="relative border-l border-[#2e4b79] pl-6">
          {timeline.map((step) => (
            <article key={step.week} className="relative mb-8 last:mb-0">
              <span className="absolute -left-[30px] top-1 h-3 w-3 border border-[#5d7eb0] bg-[#0a1222]" />
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#8eabdb]">{step.week}</p>
              <h3 className="mt-2 text-3xl leading-[0.95] text-white">{step.title}</h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#c1d1ec]">{step.detail}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
