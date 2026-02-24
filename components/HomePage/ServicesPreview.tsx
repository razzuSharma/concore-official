import Container from "@/components/HomePage/Container";
import Section from "@/components/HomePage/Section";

const services = [
  {
    title: "Web Product Engineering",
    scope: "SaaS dashboards, operations systems, internal tooling",
    output: "Architecture decisions, API contracts, CI pipeline, and deployment checklist.",
  },
  {
    title: "Mobile Delivery",
    scope: "React Native products with offline sync and release automation",
    output: "Store-ready mobile app with telemetry, crash reporting, and handover docs.",
  },
  {
    title: "AI Workflow Systems",
    scope: "Ops copilots, screening pipelines, and task automation",
    output: "Measured reduction in repetitive operations and faster internal response cycles.",
  },
  {
    title: "Rescue + Scale",
    scope: "Legacy stabilization, migration, and performance hardening",
    output: "Reliable baseline architecture teams can safely ship on every sprint.",
  },
];

export default function ServicesPreview() {
  return (
    <Section id="services" className="bg-[#070b12]">
      <Container>
        <div className="mb-10 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#8eabdb]">Capability</p>
          <h2 className="mt-3 text-5xl leading-[0.95] text-white md:text-6xl">WHAT WE BUILD</h2>
          <p className="mt-4 text-base leading-relaxed text-[#b4c3df] md:text-lg">
            Focused engineering engagements with clearly defined scope, delivery artifacts, and business outcomes.
          </p>
        </div>

        <div className="divide-y divide-[#253d64] border-y border-[#253d64]">
          {services.map((service) => (
            <article key={service.title} className="grid gap-3 py-6 md:grid-cols-12 md:gap-6">
              <h3 className="text-3xl leading-[0.95] text-white md:col-span-4">{service.title}</h3>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#88a8de] md:col-span-3">{service.scope}</p>
              <p className="text-sm leading-relaxed text-[#c7d5ee] md:col-span-5">{service.output}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
