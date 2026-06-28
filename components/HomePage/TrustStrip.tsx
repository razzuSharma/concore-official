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
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-6">
          <p className="shrink-0 font-mono text-xs uppercase leading-none tracking-[0.18em] text-[#475569] md:pt-[0.6rem]">What we deliver</p>

          <div className="flex min-w-0 flex-wrap gap-2 md:justify-end">
            {signals.map((signal) => (
              <span
                key={signal}
                className="inline-flex items-center rounded-full border border-[#DCE3E8] bg-[#FFFFFF] px-3.5 py-1.5 text-sm leading-none text-[#334155]"
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
