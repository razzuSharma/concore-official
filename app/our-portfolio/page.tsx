import type { Metadata } from "next";
import PortfolioPageClient from "@/components/PortfolioPage/PortfolioPageClient";

export const metadata: Metadata = {
  title: "Portfolio of Custom Web Application Projects",
  description:
    "Review real client case studies by Concore Technologies, including business websites, operations platforms, and scalable custom web app builds.",
  alternates: {
    canonical: "/our-portfolio",
  },
};

export default function PortfolioPage() {
  return <PortfolioPageClient />;
}
