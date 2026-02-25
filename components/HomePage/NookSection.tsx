import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/HomePage/Container";
import Section from "@/components/HomePage/Section";
import { Button } from "@/components/ui/button";
import { nookContent } from "@/content/home/nook";
import ScribbleWord from "@/components/HomePage/ScribbleWord";

export default function NookSection() {
  const [titleLead, ...titleRestParts] = nookContent.title.split(":");
  const titleRest = titleRestParts.join(":").trim();

  return (
    <Section className="bg-[#F8F9F5] py-10 md:py-12">
      <Container>
        <div className="rounded-xl border border-[#133449] bg-[#0F2E45] p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#2DD4BF]">{nookContent.badge}</p>
              <h2 className="mt-3 text-[clamp(2.6rem,6vw,4.8rem)] leading-[0.9] text-[#EAF3FF]">
                <ScribbleWord
                  className="pb-1 text-[#2DD4BF]"
                  strokeClassName="stroke-[#2DD4BF]"
                  svgClassName="-bottom-0.5 h-4"
                >
                  {titleLead}
                </ScribbleWord>
                {titleRest ? `: ${titleRest}` : ""}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#C7D6EA] md:text-base">{nookContent.summary}</p>
              <p className="font-mono mt-4 text-xs uppercase tracking-[0.12em] text-[#2DD4BF]">Stage: {nookContent.stage}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-[9px] bg-[#14B8A6] text-[#FFFFFF] hover:bg-[#0D9488]">
                  <Link href={nookContent.primaryCta.href}>
                    {nookContent.primaryCta.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-[9px] border-[#D6E4F7]/70 bg-transparent text-[#F8FCFF] hover:bg-[#123953]"
                >
                  <Link href={nookContent.secondaryCta.href}>{nookContent.secondaryCta.label}</Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="h-full rounded-lg border border-[#305273] bg-[#123953] px-5 py-4">
                {nookContent.milestones.map((item, idx) => (
                  <div key={item.phase} className="relative pl-8 pb-6 last:pb-0">
                    <span
                      className={`absolute left-1.5 top-1.5 h-2.5 w-2.5 rounded-full ${
                        idx === 0
                          ? "bg-[#2DD4BF] shadow-[0_0_0_3px_rgba(45,212,191,0.22)]"
                          : idx === 1
                            ? "border border-[#58C2B6] bg-transparent"
                            : "bg-[#36597A]"
                      }`}
                    />
                    {idx < nookContent.milestones.length - 1 ? (
                      <span className="absolute left-[0.56rem] top-4 h-[calc(100%-0.1rem)] w-px bg-[#3F6384]" />
                    ) : null}
                    <p
                      className={`font-mono text-[11px] uppercase tracking-[0.12em] ${
                        idx === 0 ? "text-[#CFE7FF]" : idx === 1 ? "text-[#8FB3D6]" : "text-[#6E8EAF]"
                      }`}
                    >
                      {item.phase}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[#D6E4F7]">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
