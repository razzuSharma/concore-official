import Container from "@/components/HomePage/Container";
import Section from "@/components/HomePage/Section";

const signals = [
  "Custom web apps",
  "Internal tools",
  "AI workflows",
  "Deployment and support",
  "Kathmandu-based, remote worldwide",
];

export default function TrustStrip() {
  return (
    <Section className="border-y border-[#E2E8F0] bg-[#F8F9F5] py-5 md:py-6">
      <Container>
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#475569]">What we deliver</p>

          <div className="flex flex-wrap gap-2.5">
            {signals.map((signal) => (
              <span
                key={signal}
                className="inline-flex items-center rounded-full border border-[#DCE3E8] bg-[#FFFFFF] px-4 py-1.5 text-sm leading-none text-[#334155]"
              >
                {signal}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
