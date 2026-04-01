import React from "react";
import Link from "next/link";

const PortfolioCTA = () => {
  return (
    <section className="mt-16 overflow-hidden border border-[#D7E0E6] bg-[linear-gradient(135deg,#12393D_0%,#102B2E_100%)] p-8 text-[#F8F9F5] md:p-10">
      <h3 className="font-display text-2xl font-semibold leading-[1.1] tracking-[-0.02em] text-[#F8F9F5] md:text-3xl">
        Need a team to plan and build the right system for your business?
      </h3>
      <p className="mt-4 max-w-3xl font-sans text-base leading-relaxed text-[#D5E3E4]">
        Share your scope, constraints, and timeline. We will help you define the right delivery approach and next steps.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/contact-us"
          className="rounded-[8px] bg-[#F4FAFA] px-7 py-3 font-medium text-[#12393D] transition hover:bg-[#EAF5F4]"
        >
          Book A Discovery Call
        </Link>
      </div>
    </section>
  );
};

export default PortfolioCTA;
