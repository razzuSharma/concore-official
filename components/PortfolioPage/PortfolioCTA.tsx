import React from "react";
import Link from "next/link";

const PortfolioCTA = () => {
  return (
    <section className="mt-16 rounded-2xl border border-[#334155] bg-[#0F172A] p-8 text-[#F8F9F5]">
      <h3 className="font-display text-2xl font-semibold leading-[1.1] tracking-[-0.02em] text-[#F8F9F5] md:text-3xl">
        Have a product with delivery pressure and zero room for engineering debt?
      </h3>
      <p className="mt-4 max-w-3xl font-sans text-base leading-relaxed text-[#F8F9F5]/75">
        Share your scope, constraints, and target timeline. We will send a clear execution plan with
        architecture approach, delivery phases, and an accountable team structure.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/contact-us"
          className="rounded-lg bg-[#14B8A6] px-7 py-3 font-medium text-[#FFFFFF] transition hover:bg-[#14B8A6]"
        >
          Get Execution Plan
        </Link>
        <Link
          href="/services"
          className="rounded-lg border border-[#E2E8F0] bg-transparent px-7 py-3 font-medium text-[#F8F9F5] transition hover:bg-[#334155]"
        >
          Review Delivery Model
        </Link>
      </div>
    </section>
  );
};

export default PortfolioCTA;
