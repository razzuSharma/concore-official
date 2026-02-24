import Container from "@/components/HomePage/Container";
import Section from "@/components/HomePage/Section";

const clients = [
  "ARS Barista Training Institute",
  "Tourgasm Travels",
  "Shibam Marble & Furniture",
  "Dipak Suppliers",
];

export default function TrustStrip() {
  return (
    <Section className="border-y border-[#1e3151] bg-[#070b12] py-5 md:py-6">
      <Container>
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#91addb]">Trusted by recently shipped clients</p>
          <div className="flex flex-wrap gap-2 text-sm text-[#e7eefc]">
            {clients.map((client) => (
              <span key={client} className="border border-[#2a456f] bg-[#0a1222] px-3 py-1.5">
                {client}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
