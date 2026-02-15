import React from "react";
import Link from "next/link";

const PortfolioCTA = () => {
  return (
    <section className="mt-16 rounded-2xl border border-gray-800 bg-gradient-to-r from-blue-900/40 via-gray-900 to-emerald-900/30 p-8 text-white">
      <h3 className="font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-white">
        Need This Level of Delivery Detail For Your Product?
      </h3>
      <p className="mt-4 max-w-3xl font-sans text-base leading-relaxed text-white/75">
        CONCORE TECHNOLOGIES works with founders and teams that care about quality execution,
        transparent communication, and measurable impact. If you want to plan, build, and launch
        with a senior delivery partner, we can map your next project clearly.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/contact-us"
          className="rounded-lg bg-blue-600 px-7 py-3 font-medium text-white transition hover:bg-blue-500"
        >
          Book a Call
        </Link>
        <Link
          href="/services"
          className="rounded-lg border border-gray-600 bg-gray-900 px-7 py-3 font-medium text-white transition hover:bg-gray-800"
        >
          Review Services
        </Link>
      </div>
    </section>
  );
};

export default PortfolioCTA;
