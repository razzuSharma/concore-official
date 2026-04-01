import type { Metadata } from "next";
import PortfolioPageClient from "@/components/PortfolioPage/PortfolioPageClient";

export const metadata: Metadata = {
  title: "Selected Software Projects",
  description:
    "Review selected client projects by Concore Technologies, including operations platforms, business systems, and custom software builds.",
  alternates: {
    canonical: "/our-portfolio",
  },
};

export default function PortfolioPage() {
  return <PortfolioPageClient />;
}
