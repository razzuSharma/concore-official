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
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Services
        </h1>
      </div>
    </div>
  );
};

export default ServicesPage;
