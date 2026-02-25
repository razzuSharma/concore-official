import type { Metadata } from "next";
import React from "react";

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
    <div className="min-h-screen bg-[#F8F9F5]">
      <div className="mx-auto grid min-h-screen max-w-5xl place-items-center px-6 py-16">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#475569]">
            Concore Services
          </p>
          <h1 className="mt-3 text-4xl font-bold text-[#0F172A] md:text-5xl">
            Services Page
          </h1>
          <p className="mt-4 text-base text-[#475569] md:text-lg">
            Detailed service breakdown is being finalized.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
