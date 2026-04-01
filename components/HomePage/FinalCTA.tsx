import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/HomePage/Container";
import Section from "@/components/HomePage/Section";
import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <Section className="bg-[#F8F9F5] pt-10 md:pt-14">
      <Container>
        <div className="overflow-hidden border border-[#D7E0E6] bg-[linear-gradient(135deg,#12393D_0%,#102B2E_100%)] px-8 py-10 md:px-12 md:py-14">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-[#C7D9DB]">Contact</p>
            <h2 className="mt-4 text-[clamp(3.2rem,6vw,5.4rem)] leading-[0.94] text-[#F8F9F5]">
              Let&apos;s plan the right system for your business.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#D5E3E4] md:text-lg">
              Book a discovery call to discuss your goals, scope, timeline, and the best technical approach.
            </p>

            <div className="mt-8 md:mt-10">
              <Button asChild size="lg" className="h-11 rounded-[8px] bg-[#F4FAFA] px-6 text-[#12393D] hover:bg-[#EAF5F4]">
                <Link href="/contact-us">
                  Book A Discovery Call
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
