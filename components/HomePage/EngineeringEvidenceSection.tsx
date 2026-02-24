import Container from "@/components/HomePage/Container";
import Section from "@/components/HomePage/Section";

const deliveryArtifacts = [
  {
    title: "Architecture Decision Records (ADR)",
    detail: "Key system choices are documented with tradeoffs before high-impact implementation starts.",
  },
  {
    title: "Release Checklist + QA Gates",
    detail: "Every release passes regression checks, role-permission validation, and deployment checklist sign-off.",
  },
  {
    title: "Sprint Demo Notes",
    detail: "Clients receive weekly demo outcomes, pending risks, and next-sprint plan in writing.",
  },
];

const qualityGates = [
  { gate: "Code review", rule: "Required for all mergeable branches" },
  { gate: "Critical flow QA", rule: "Validated before every production release" },
  { gate: "Access control checks", rule: "Role rules verified on write operations" },
  { gate: "Deployment rollback plan", rule: "Prepared for all high-impact changes" },
];

const architectureExample = `// Example: booking state transition guard
if (booking.status !== "PENDING") {
  throw new Error("Invalid transition: only PENDING booking can be confirmed");
}

await db.booking.update({
  where: { id: booking.id },
  data: { status: "CONFIRMED", confirmedAt: new Date() }
});`;

export default function EngineeringEvidenceSection() {
  return (
    <Section className="bg-[#070b12]">
      <Container>
        <div className="mb-10 max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#8eabdb]">Engineering evidence</p>
          <h2 className="mt-3 text-5xl leading-[0.95] text-white md:text-6xl">HOW WE PROVE QUALITY</h2>
          <p className="mt-4 text-base leading-relaxed text-[#b4c3df] md:text-lg">
            Precision is not a tagline. It is the delivery artifacts, quality gates, and architecture rules we enforce on every project.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="divide-y divide-[#253d64] border-y border-[#253d64]">
              {deliveryArtifacts.map((item) => (
                <article key={item.title} className="py-5">
                  <h3 className="text-3xl leading-[0.95] text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#c2d0ea]">{item.detail}</p>
                </article>
              ))}
            </div>

            <div className="mt-8 overflow-hidden border border-[#26406b]">
              <table className="w-full border-collapse text-left">
                <thead className="bg-[#0c1629] font-mono text-xs uppercase tracking-[0.14em] text-[#89a8dc]">
                  <tr>
                    <th className="px-4 py-3">Quality gate</th>
                    <th className="px-4 py-3">Enforcement rule</th>
                  </tr>
                </thead>
                <tbody>
                  {qualityGates.map((row) => (
                    <tr key={row.gate} className="border-t border-[#213456] bg-[#0a1222] text-sm text-[#d7e4fc]">
                      <td className="px-4 py-3">{row.gate}</td>
                      <td className="px-4 py-3 text-[#b7c9e7]">{row.rule}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#8eaadb]">Guardrail example</p>
            <pre className="mt-3 overflow-x-auto border border-[#27406a] bg-[#0a1222] p-4 text-xs leading-relaxed text-[#d6e4fd]">
              <code>{architectureExample}</code>
            </pre>
            <p className="mt-3 text-sm leading-relaxed text-[#afc2e4]">
              Example logic from our delivery approach: encode domain rules directly in code to prevent invalid state transitions in production.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
