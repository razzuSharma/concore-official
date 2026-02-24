import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/HomePage/Container";
import Section from "@/components/HomePage/Section";
import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <Section className="bg-[#070b12] pt-6">
      <Container>
        <div className="border border-[#26406b] bg-[#0a1222] p-8 md:p-12">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#8eabdb]">Start with clarity</p>
          <h2 className="mt-3 max-w-3xl text-5xl leading-[0.95] text-white md:text-6xl">
            Tell us what you are building. We reply in 24 hours with a concrete execution plan.
          </h2>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-none bg-[#1f71f4] text-white hover:bg-[#3383ff]">
              <Link href="/contact-us">
                Book a Call
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-none border-[#355889] bg-transparent text-[#dce8ff] hover:bg-[#0d1a2f]"
            >
              <Link href="/contact-us">Get Estimate</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
