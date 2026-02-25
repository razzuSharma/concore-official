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
    <Section className="bg-[#F8F9F5]">
      <Container>
        <div className="mb-10 max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#475569]">Engineering evidence</p>
          <h2 className="mt-3 text-5xl leading-[0.95] text-[#0F172A] md:text-6xl">HOW WE PROVE QUALITY</h2>
          <p className="mt-4 text-base leading-relaxed text-[#475569] md:text-lg">
            Precision is not a tagline. It is the delivery artifacts, quality gates, and architecture rules we enforce on every project.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="divide-y divide-[#E2E8F0] border-y border-[#E2E8F0]">
              {deliveryArtifacts.map((item, idx) => (
                <article key={item.title} className="py-6">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#64748B]">{`0${idx + 1}`}</span>
                    <h3 className="text-3xl leading-[0.95] text-[#0F172A]">{item.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-[#334155]">{item.detail}</p>

                  {item.title === "Release Checklist + QA Gates" ? (
                    <div className="mt-5 overflow-hidden rounded-md border border-[#E2E8F0]">
                      <table className="w-full border-collapse text-left">
                        <thead className="bg-[#0F2E45] font-mono text-xs uppercase tracking-[0.14em] text-[#EAF3FF]">
                          <tr>
                            <th className="px-4 py-3">Quality gate</th>
                            <th className="px-4 py-3">Enforcement rule</th>
                          </tr>
                        </thead>
                        <tbody>
                          {qualityGates.map((row) => (
                            <tr key={row.gate} className="border-t border-[#E2E8F0] bg-[#FFFFFF] text-sm text-[#0F172A]">
                              <td className="px-4 py-3">{row.gate}</td>
                              <td className="px-4 py-3 text-[#334155]">{row.rule}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <p className="font-mono inline-flex items-center border-l-2 border-[#14B8A6] pl-3 text-xs uppercase tracking-[0.14em] text-[#334155]">
              Guardrail example
            </p>
            <pre className="mt-3 overflow-x-auto whitespace-pre-wrap break-words border border-[#E2E8F0] bg-[#FFFFFF] p-4 text-[13px] leading-relaxed text-[#334155]">
              <code>{architectureExample}</code>
            </pre>
            <p className="mt-3 text-sm leading-relaxed text-[#334155]">
              Example logic from our delivery approach: encode domain rules directly in code to prevent invalid state transitions in production.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
