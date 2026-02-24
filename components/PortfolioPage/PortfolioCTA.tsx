import React from "react";
import Link from "next/link";

const PortfolioCTA = () => {
  return (
    <section className="mt-16 rounded-2xl border border-gray-800 bg-gradient-to-r from-blue-900/40 via-gray-900 to-emerald-900/30 p-8 text-white">
      <h3 className="font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-white">
        Have a product with delivery pressure and zero room for engineering debt?
      </h3>
      <p className="mt-4 max-w-3xl font-sans text-base leading-relaxed text-white/75">
        Share your scope, constraints, and target timeline. We will send a clear execution plan with
        architecture approach, delivery phases, and an accountable team structure.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/contact-us"
          className="rounded-lg bg-blue-600 px-7 py-3 font-medium text-white transition hover:bg-blue-500"
        >
          Get Execution Plan
        </Link>
        <Link
          href="/services"
          className="rounded-lg border border-gray-600 bg-gray-900 px-7 py-3 font-medium text-white transition hover:bg-gray-800"
        >
          Review Delivery Model
        </Link>
      </div>
    </section>
  );
};

export default PortfolioCTA;
