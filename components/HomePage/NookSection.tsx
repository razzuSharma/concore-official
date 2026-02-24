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
    <Section className="bg-[#070b12] py-10 md:py-12">
      <Container>
        <div className="border border-[#2a436b] bg-[#090f1b] p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#8eabdb]">{nookContent.badge}</p>
              <h2 className="mt-3 text-4xl leading-[0.95] text-white md:text-5xl">
                <ScribbleWord
                  className="pb-1 text-[#e8d5a3]"
                  strokeClassName="stroke-[#e8d5a3]/85"
                  svgClassName="-bottom-0.5 h-4"
                >
                  {titleLead}
                </ScribbleWord>
                {titleRest ? `: ${titleRest}` : ""}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#b4c3df] md:text-base">{nookContent.summary}</p>
              <p className="font-mono mt-4 text-xs uppercase tracking-[0.12em] text-[#e8d5a3]">Stage: {nookContent.stage}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-none bg-[#f0cf8a] text-[#0b1020] hover:bg-[#f7dda8]">
                  <Link href={nookContent.primaryCta.href}>
                    {nookContent.primaryCta.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-none border-[#355487] bg-transparent text-[#dbe7fb] hover:bg-[#0d1a2f]"
                >
                  <Link href={nookContent.secondaryCta.href}>{nookContent.secondaryCta.label}</Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="divide-y divide-[#253d64] border-y border-[#253d64]">
                {nookContent.milestones.map((item) => (
                  <div key={item.phase} className="py-4">
                    <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#8eabdb]">{item.phase}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[#c7d5ee]">{item.detail}</p>
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
