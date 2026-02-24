import Container from "@/components/HomePage/Container";
import Section from "@/components/HomePage/Section";

const rows = [
  {
    label: "Engineering ownership",
    concore: "Senior engineers involved from discovery to deployment",
    typical: "Freelance or rotating contributors with fragmented context",
  },
  {
    label: "Communication model",
    concore: "Direct Slack/Meet access with delivery lead and engineers",
    typical: "Account-manager relay and delayed technical decisions",
  },
  {
    label: "Architecture quality",
    concore: "Documented system design, code reviews, release checklists",
    typical: "Feature-first delivery with limited long-term maintainability",
  },
  {
    label: "Timezone reliability",
    concore: "Planned overlap windows for APAC, EU, and US teams",
    typical: "Inconsistent overlap and async bottlenecks",
  },
];

export default function OffshoreComparisonSection() {
  return (
    <Section className="bg-[#070b12]">
      <Container>
        <div className="mb-8 max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#8eabdb]">Differentiation</p>
          <h2 className="mt-3 text-5xl leading-[0.95] text-white md:text-6xl">WHY TEAMS PICK CONCORE OVER GENERIC OFFSHORE</h2>
        </div>

        <div className="overflow-hidden border border-[#26406b]">
          <table className="w-full border-collapse text-left">
            <thead className="bg-[#0c1629] font-mono text-xs uppercase tracking-[0.14em] text-[#89a8dc]">
              <tr>
                <th className="px-4 py-3">Criteria</th>
                <th className="px-4 py-3">Concore</th>
                <th className="px-4 py-3">Typical offshore setup</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="border-t border-[#213456] bg-[#0a1222] align-top text-sm">
                  <td className="px-4 py-4 font-medium text-[#e8eefc]">{row.label}</td>
                  <td className="px-4 py-4 text-[#c9d8f2]">{row.concore}</td>
                  <td className="px-4 py-4 text-[#aebfdd]">{row.typical}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </Section>
  );
}
