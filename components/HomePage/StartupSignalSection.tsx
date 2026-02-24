import Container from "@/components/HomePage/Container";
import Section from "@/components/HomePage/Section";
import { startupFacts, startupProofItems } from "@/content/home/startup";

export default function StartupSignalSection() {
  return (
    <Section className="bg-[#070b12] py-6 md:py-8">
      <Container>
        <div className="border-t border-[#253d64] pt-6">
          <div className="grid gap-4 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-5">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#8eabdb]">Real shipped systems</p>
              <h2 className="mt-2 text-4xl leading-[0.95] text-white md:text-5xl">STARTUP TEAM, SERIOUS EXECUTION</h2>
            </div>
            <p className="text-sm leading-relaxed text-[#b4c3df] md:text-base lg:col-span-7">
              We are a new studio. We earn trust by shipping and by keeping delivery fully visible.
            </p>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {startupFacts.map((fact) => (
                  <div key={fact.label} className="border border-[#27406a] bg-[#0a1222] p-4">
                    <p className="text-3xl text-white">{fact.value}</p>
                    <p className="font-mono mt-1 text-[11px] uppercase tracking-[0.12em] text-[#91addb]">{fact.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="divide-y divide-[#253d64] border-y border-[#253d64]">
                {startupProofItems.map((item) => (
                  <article key={item.title} className="grid gap-2 py-4 md:grid-cols-12 md:gap-4">
                    <h3 className="text-2xl leading-[0.95] text-white md:col-span-4">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-[#c7d5ee] md:col-span-8">{item.detail}</p>
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
