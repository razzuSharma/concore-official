import Container from "@/components/HomePage/Container";
import Section from "@/components/HomePage/Section";

const reasons = [
  {
    title: "Direct communication with engineers",
    detail: "Clients work directly with the team planning architecture and shipping the product, without an account-manager relay.",
  },
  {
    title: "Clear scope and delivery",
    detail: "Work is framed with defined priorities, concrete deliverables, and visible progress across each phase of execution.",
  },
  {
    title: "Maintainable codebase",
    detail: "Systems are built to be understandable, documented, and safe to extend after launch.",
  },
  {
    title: "Fast iteration",
    detail: "Short feedback loops keep decisions moving and reduce rework during active delivery.",
  },
  {
    title: "Post-launch support",
    detail: "Deployment, fixes, and ongoing support are part of the delivery model, not an afterthought.",
  },
];

export default function OffshoreComparisonSection() {
  return (
    <Section className="bg-[#F8F9F5]">
      <Container>
        <div className="mb-8 max-w-4xl">
          <h2 className="mt-3 text-5xl leading-[0.95] text-[#0F172A] md:text-6xl">Why Companies Hire Us</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#475569] md:text-lg">
            A practical delivery model for companies that need reliable software work, not presentation-heavy process.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {reasons.map((reason) => (
            <article key={reason.title} className="border border-[#E2E8F0] bg-[#FFFFFF] p-5">
              <h3 className="text-2xl leading-[0.98] text-[#0F172A]">{reason.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#475569]">{reason.detail}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
