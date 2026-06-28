import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const PortfolioCTA = () => {
  return (
    <section className="bg-[#123B36] text-[#F5F4EF]">
      <div className="mx-auto max-w-[1180px] px-6 py-20 sm:px-8 md:py-28">
        <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-[#8FB3A5]">
          Start a build
        </p>
        <h2 className="mt-6 max-w-[20ch] font-serif text-[clamp(2.1rem,4vw,3.4rem)] font-normal leading-[1.06] tracking-[-0.01em] text-[#F5F4EF]">
          The next entry in this catalog could be yours.
        </h2>
        <p className="mt-6 max-w-[50ch] font-sans text-lg leading-relaxed text-[#BFD2CB]">
          Share the scope, the constraints, and the timeline. We will tell you the honest
          shortest path to a system that ships — and the result it should aim for.
        </p>
        <Link
          href="/contact-us"
          className="group mt-10 inline-flex items-center gap-3 bg-[#F5F4EF] px-7 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-[#123B36] transition-colors hover:bg-[#EAE8DC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9A7B4F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#123B36]"
        >
          Book a discovery call
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
};

export default PortfolioCTA;
