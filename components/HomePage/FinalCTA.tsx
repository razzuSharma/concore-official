import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/HomePage/Container";
import Section from "@/components/HomePage/Section";
import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <Section className="bg-gray-950 pt-8">
      <Container>
        <div className="rounded-2xl border border-gray-800 bg-gradient-to-r from-blue-900/50 via-gray-900 to-emerald-900/30 p-8 sm:p-10">
          <h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-white md:text-4xl">
            Ready to build with CONCORE TECHNOLOGIES?
          </h2>
          <p className="mt-4 max-w-2xl font-sans text-lg leading-relaxed text-white/70">
            Tell us what you are building. We offer a free discovery call and a clear next-step plan.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-500">
              <Link href="/contact-us" aria-label="Book a call with CONCORE TECHNOLOGIES">
                Book a Call
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-gray-500 bg-transparent text-gray-100 hover:bg-gray-800"
            >
              <Link href="/contact-us" aria-label="Get a quote from CONCORE TECHNOLOGIES">
                Get a Quote
              </Link>
            </Button>
          </div>

          <p className="font-mono mt-4 text-sm tracking-wide text-white/70">Usually replies within 24 hours.</p>
        </div>
      </Container>
    </Section>
  );
}
