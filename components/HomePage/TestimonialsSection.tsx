import Container from "@/components/HomePage/Container";
import Section from "@/components/HomePage/Section";

const testimonials = [
  {
    quote:
      "Concore brought structure to a messy operations setup. We had weekly visibility, clear decisions, and a launch that improved day-to-day execution immediately.",
    name: "Sujan Subedi",
    role: "Founder, ARS Barista Training Institute",
  },
  {
    quote:
      "Their communication discipline stood out. Every sprint had clear deliverables and the final platform matched exactly what our team needed to scale.",
    name: "Sujan Adhikari",
    role: "Co-Founder, Tourgasm Travels",
  },
];

export default function TestimonialsSection() {
  return (
    <Section className="bg-[#070b12]">
      <Container>
        <div className="mb-10 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#8eabdb]">Client voice</p>
          <h2 className="mt-3 text-5xl leading-[0.95] text-white md:text-6xl">WHAT CLIENTS SAY</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="editorial-card p-6">
              <p className="text-base leading-relaxed text-[#e4edff]">"{testimonial.quote}"</p>
              <p className="mt-5 text-sm font-semibold text-white">{testimonial.name}</p>
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-[#90addc]">{testimonial.role}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
