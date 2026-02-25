import Container from "@/components/HomePage/Container";
import Section from "@/components/HomePage/Section";
import { startupFacts, startupProofItems } from "@/content/home/startup";

export default function StartupSignalSection() {
  return (
    <Section className="relative overflow-hidden bg-[#F8F9F5] py-6 md:py-8">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-30" />
      <Container className="relative">
        <div className="border-t border-[#E2E8F0] pt-6">
          <div className="grid gap-4 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#475569]">Real shipped systems</p>
              <h2 className="mt-2 text-4xl leading-[0.95] text-[#0F172A] md:text-5xl">STARTUP TEAM, SERIOUS EXECUTION</h2>
            </div>
            <p className="text-sm leading-relaxed text-[#475569] md:text-base lg:col-span-7">
              We are a new studio. We earn trust by shipping and by keeping delivery fully visible.
            </p>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5 lg:self-start">
              <div className="grid gap-6 border-y border-[#E2E8F0] py-5 sm:grid-cols-3 sm:gap-4 lg:grid-cols-1 lg:gap-7">
                {startupFacts.map((fact) => (
                  <div key={fact.label}>
                    <p className="font-display text-[clamp(3.15rem,5vw,4.5rem)] leading-none tracking-[0.01em] text-[#0F172A]">
                      {fact.value.toUpperCase()}
                    </p>
                    <p className="font-mono mt-2 text-[11px] uppercase tracking-[0.12em] text-[#475569]">{fact.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 lg:self-start">
              <div className="divide-y divide-[#E2E8F0] border-y border-[#E2E8F0]">
                {startupProofItems.map((item) => (
                  <article key={item.title} className="grid gap-2 py-4 md:grid-cols-12 md:gap-4">
                    <h3 className="text-2xl leading-[0.95] text-[#0F172A] md:col-span-4">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-[#475569] md:col-span-8">{item.detail}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
