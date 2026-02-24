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
    <Section className="border-y border-[#1e3151] bg-[#070b12] py-8">
      <Container>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#91addb]">Trusted by recently shipped clients</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#e7eefc]">
            {clients.map((client) => (
              <span key={client} className="border-b border-[#2a456f] pb-1">
                {client}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
