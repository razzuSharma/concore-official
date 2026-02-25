import type { Metadata } from "next";
import React from "react";
import Container from "@/components/HomePage/Container";
import Section from "@/components/HomePage/Section";

export const metadata: Metadata = {
  title: "Web Development and Custom Software Services",
  description:
    "Explore Concore Technologies services: custom web development, UI/UX design, cloud engineering, and long-term software maintenance for growth-focused businesses.",
  alternates: {
    canonical: "/services",
  },
};

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <Section className="py-24 md:py-28">
        <Container>
          <div className="mx-auto max-w-4xl">
            <span className="mb-3 block h-1.5 w-14 bg-[#14B8A6]" />
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#475569]">Concore services</p>
            <h1 className="mt-3 text-[clamp(3.1rem,7vw,5rem)] leading-[0.94] text-[#0F172A]">Services page</h1>
            <p className="mt-5 text-base leading-relaxed text-[#334155] md:text-lg">
              Detailed service breakdown is being finalized. We are preparing full scope models, delivery artifacts, and engagement options.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {["Product Engineering", "Delivery Systems", "Scale & Stabilization"].map((item) => (
              <div key={item} className="rounded-xl border border-[#D9E2E0] bg-[#FFFFFF]/85 p-5 backdrop-blur-sm">
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-[#475569]">{item}</p>
                <p className="mt-2 text-sm leading-relaxed text-[#334155]">Full details are being prepared for this service track.</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default ServicesPage;
