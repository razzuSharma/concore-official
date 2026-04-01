import Container from "@/components/HomePage/Container";
import Section from "@/components/HomePage/Section";

const proofPoints = [
  {
    title: "Defined delivery scope",
    detail: "Every engagement starts with clear priorities, technical direction, and agreed deliverables.",
  },
  {
    title: "Quality checks before release",
    detail: "Core flows, permissions, and release steps are reviewed before anything goes live.",
  },
  {
    title: "Documentation and handover",
    detail: "Projects are delivered with the context and structure teams need to keep building after launch.",
  },
];

export default function EngineeringEvidenceSection() {
  return (
    <Section className="bg-[#F8F9F5]">
      <Container>
        <div className="mb-8 max-w-4xl">
          <h2 className="mt-3 text-5xl leading-[0.95] text-[#0F172A] md:text-6xl">How Delivery Stays Reliable</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#475569] md:text-lg">
            We keep software delivery dependable by making scope, release quality, and handover part of the work from the beginning.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {proofPoints.map((item) => (
            <article key={item.title} className="border border-[#E2E8F0] bg-[#FFFFFF] p-6">
              <h3 className="text-3xl leading-[0.95] text-[#0F172A]">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#475569]">{item.detail}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
