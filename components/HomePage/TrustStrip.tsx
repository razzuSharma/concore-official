import Container from "@/components/HomePage/Container";
import Section from "@/components/HomePage/Section";

const logos = ["Partner A", "Partner B", "Partner C", "Partner D", "Partner E"];

const stats = [
  { value: "20+", label: "projects shipped by CONCORE TECHNOLOGIES" },
  { value: "4-8 weeks", label: "average MVP timeline" },
  { value: "95%", label: "on-time delivery rate" },
];

export default function TrustStrip() {
  return (
    <Section className="border-y border-gray-800 bg-gray-950 py-14">
      <Container>
        <h2 className="font-display text-center text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-white md:text-4xl">
          Trusted Delivery Record
        </h2>
        <p className="mt-3 text-center font-sans text-sm font-medium uppercase tracking-[0.15em] text-white/70">
          Trusted by teams building in Nepal and global markets
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5" aria-label="Company logo placeholders">
          {logos.map((logo) => (
            <div
              key={logo}
              className="font-mono rounded-lg border border-gray-800 bg-gray-900 px-4 py-3 text-center text-xs font-medium uppercase tracking-[0.12em] text-white/60"
            >
              {logo}
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-gray-800 bg-gray-900/80 p-4 text-center">
              <p className="font-display text-2xl font-semibold tracking-[-0.02em] text-white">{stat.value}</p>
              <p className="font-mono mt-1 text-sm text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
