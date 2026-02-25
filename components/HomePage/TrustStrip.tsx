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
    <Section className="border-y border-[#E2E8F0] bg-[#F8F9F5] py-5 md:py-6">
      <Container>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#475569]">Trusted by recently shipped clients</p>
          {clients.map((client, idx) => (
            <span key={client} className="inline-flex items-center gap-2 text-sm text-[#334155]">
              <span>{client}</span>
              {idx < clients.length - 1 ? <span className="text-[#94A3B8]">|</span> : null}
            </span>
          ))}
        </div>
      </Container>
    </Section>
  );
}
