"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/HomePage/Container";
import Section from "@/components/HomePage/Section";
import { Skeleton } from "@/components/ui/skeleton";

const team = [
  {
    name: "Raju Sharma Dahal",
    role: "CEO & Founder",
    image: "/about/team/sarah-johnson.jpg",
  },
  {
    name: "Ngamesh Bhandari",
    role: "CTO",
    image: "/about/team/michael-chen.jpg",
  },
  {
    name: "Dipesh Bhanadari",
    role: "Lead Engineer",
    image: "/about/team/david-thompson.jpg",
  },
];

function TeamMemberCard({
  name,
  role,
  image,
}: {
  name: string;
  role: string;
  image: string;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <article className="editorial-card p-4">
      <div className="relative h-64 w-full overflow-hidden border border-[#E2E8F0] bg-[#FFFFFF]">
        {!isLoaded ? (
          <Skeleton className="absolute inset-0 h-full w-full" />
        ) : null}
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width:768px) 100vw, 33vw"
          className={`object-cover transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      <h3 className="mt-4 text-3xl leading-[0.95] text-[#0F172A]">{name}</h3>
      <p className="font-mono mt-1 text-xs uppercase tracking-[0.12em] accent-text">
        {role}
      </p>
    </article>
  );
}

export default function TeamCredibilitySection() {
  return (
    <Section className="bg-[#F8F9F5]">
      <Container>
        <div className="mb-10 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#475569]">
            People behind delivery
          </p>
          <h2 className="mt-3 text-5xl leading-[0.95] text-[#0F172A] md:text-6xl">
            THE TEAM YOU WORK WITH
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#475569] md:text-lg">
            Clients work directly with the same core team that plans
            architecture and ships production.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {team.map((member) => (
            <TeamMemberCard
              key={member.name}
              name={member.name}
              role={member.role}
              image={member.image}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
