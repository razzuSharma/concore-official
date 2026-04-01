import Container from "@/components/HomePage/Container";
import Section from "@/components/HomePage/Section";

const services = [
  {
    title: "Custom Web Apps",
    what: "Business software, client portals, and web platforms built around your workflows and data.",
    who: "For companies replacing manual operations, spreadsheets, or disconnected tools.",
    outcome: "A reliable system that gives teams one place to work and reduces operational friction.",
  },
  {
    title: "Internal Tools",
    what: "Admin systems, dashboards, approval flows, and internal platforms for day-to-day operations.",
    who: "For teams that need better visibility, faster execution, and cleaner process control.",
    outcome: "Fewer repetitive tasks, clearer reporting, and faster coordination across the business.",
  },
  {
    title: "AI Workflows",
    what: "AI-enabled workflows for document handling, screening, assistance, and repetitive task automation.",
    who: "For companies with high-volume operational work where speed and consistency matter.",
    outcome: "Reduced manual workload, quicker turnaround, and more consistent internal execution.",
  },
  {
    title: "Deployment And Support",
    what: "Release setup, production deployment, monitoring, fixes, and ongoing technical support.",
    who: "For teams that need dependable launches and post-release continuity, not just development.",
    outcome: "Stable releases, fewer production issues, and a system the business can keep growing on.",
  },
];

export default function ServicesPreview() {
  return (
    <Section id="services" className="bg-[#F8F9F5] pt-20 md:pt-28">
      <Container>
        <div className="mb-10 max-w-3xl">
          <span className="mb-3 block h-1.5 w-14 bg-[#14B8A6]" />
          <h2 className="mt-3 text-[clamp(3.5rem,7.2vw,5.4rem)] leading-[0.94] text-[#0F172A]">What We Do</h2>
          <p className="mt-4 text-base leading-relaxed text-[#475569] md:text-lg">
            Four focused service offers for companies that need practical software delivery and dependable execution.
          </p>
        </div>

        <div className="divide-y divide-[#E2E8F0] border-y border-[#E2E8F0]">
          {services.map((service) => (
            <article key={service.title} className="grid gap-5 py-7 md:grid-cols-12 md:gap-6">
              <div className="md:col-span-4">
                <h3 className="text-3xl leading-[0.95] text-[#0F172A]">{service.title}</h3>
              </div>
              <div className="space-y-4 md:col-span-8">
                <div>
                  <p className="text-sm font-medium text-[#0F172A]">What it is</p>
                  <p className="mt-1 text-sm leading-relaxed text-[#475569]">{service.what}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#0F172A]">Who it is for</p>
                  <p className="mt-1 text-sm leading-relaxed text-[#475569]">{service.who}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#0F172A]">Outcome</p>
                  <p className="mt-1 text-sm leading-relaxed text-[#0F172A]">{service.outcome}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
