import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyView from "@/components/PortfolioPage/CaseStudyView";
import { projects } from "@/components/PortfolioPage/projectsData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `/our-portfolio/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Concore Technologies`,
      description: project.description,
      url: `https://www.concoretechnologies.com.np/our-portfolio/${project.slug}`,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#F8F9F5] px-5 py-8 sm:px-6 md:px-8 md:py-10">
      <CaseStudyView project={project} />
    </div>
  );
}
