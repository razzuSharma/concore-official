import Image from "next/image";
import Link from "next/link";
import Container from "@/components/HomePage/Container";
import Section from "@/components/HomePage/Section";

const testimonials = [
  {
    client: "ARS Barista Training Institute",
    person: "Sujan Subedi",
    role: "Founder",
    image: "/testimonials/ARS-BARISTA.png",
    quote:
      "Concore brought structure to a messy operations setup. We had weekly visibility, clear decisions, and a launch that improved day-to-day execution immediately.",
    caseStudyHref: "/our-portfolio",
  },
  {
    client: "Tourgasm Travels",
    person: "Sujan Adhikari",
    role: "Co-Founder",
    image: "/testimonials/TOURGASM.png",
    quote:
      "Their communication discipline stood out. Every sprint had clear deliverables and the final platform matched exactly what our team needed to scale.",
    caseStudyHref: "/our-portfolio",
  },
];

export default function TestimonialsSection() {
  return (
    <Section className="bg-[#070b12] py-8 md:py-10">
      <Container>
        <div className="mb-10 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#8eabdb]">Client voice</p>
          <h2 className="mt-3 text-5xl leading-[0.95] text-white md:text-6xl">WHAT CLIENTS SAY</h2>
        </div>

        <div className="space-y-12">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.client}
              className="group relative border-b border-[#253d64] pb-12 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1"
            >
              <div className="grid gap-8 md:grid-cols-[46%_54%] md:items-center">
                <div className={`relative ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_40%_45%,rgba(232,207,138,0.16),transparent_60%)] blur-2xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-[radial-gradient(circle_at_40%_45%,rgba(232,207,138,0.24),transparent_62%)] group-hover:blur-3xl" />
                  <div className="relative h-[360px] overflow-hidden md:h-[420px]">
                    <Image
                      src={testimonial.image}
                      alt={`${testimonial.person} from ${testimonial.client}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 46vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className={`relative ${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <span className="pointer-events-none absolute -left-4 -top-16 text-[190px] leading-none text-[#f0cf8a]/[0.06] blur-[1px] md:-left-6 md:-top-20 md:text-[250px]">
                    “
                  </span>

                  <p className="font-quote relative max-w-[41ch] text-[30px] leading-[1.28] text-[#e9d8ae] md:text-[40px] md:leading-[1.24]">
                    {testimonial.quote}
                  </p>

                  <div className="mt-6">
                    <p className="text-base font-semibold text-[#d9e4fb]">{testimonial.person}</p>
                    <p className="font-mono text-xs uppercase tracking-[0.12em] text-[#7594bf]">{testimonial.role}</p>
                    <p className="font-mono mt-1 text-[11px] uppercase tracking-[0.12em] text-[#6f8cb6]">{testimonial.client}</p>
                    <Link
                      href={testimonial.caseStudyHref}
                      className="font-mono mt-3 inline-block text-[11px] uppercase tracking-[0.14em] text-[#c6ae79] transition hover:text-[#e9cf93]"
                    >
                      ↗ Case Study
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
