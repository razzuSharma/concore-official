import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/HomePage/Container";
import Section from "@/components/HomePage/Section";
import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <Section className="bg-[#0F172A] pt-6">
      <Container>
        <div className="border border-[#334155] bg-[#0F172A] p-8 md:p-12">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#F8F9F5]/70">Start with clarity</p>
          <h2 className="mt-3 max-w-3xl text-5xl leading-[0.95] text-[#F8F9F5] md:text-6xl">
            Tell us what you are building. We reply in 24 hours with a concrete execution plan.
          </h2>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-none bg-[#14B8A6] text-[#FFFFFF] hover:bg-[#14B8A6]">
              <Link href="/contact-us">
                Book a Call
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-none border-[#E2E8F0] bg-transparent text-[#F8F9F5] hover:bg-[#334155]"
            >
              <Link href="/contact-us">Get Estimate</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
