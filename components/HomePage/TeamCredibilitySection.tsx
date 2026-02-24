import Image from "next/image";
import Container from "@/components/HomePage/Container";
import Section from "@/components/HomePage/Section";

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
  {
    name: "Saurav Niroula",
    role: "Engineering Operations",
    image: "/about/team/emily-rodriguez.jpg",
  },
];

export default function TeamCredibilitySection() {
  return (
    <Section className="bg-[#070b12]">
      <Container>
        <div className="mb-10 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#8eabdb]">People behind delivery</p>
          <h2 className="mt-3 text-5xl leading-[0.95] text-white md:text-6xl">THE TEAM YOU WORK WITH</h2>
          <p className="mt-4 text-base leading-relaxed text-[#b4c3df] md:text-lg">
            Clients work directly with the same core team that plans architecture and ships production.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {team.map((member) => (
            <article key={member.name} className="editorial-card p-4">
              <div className="relative h-64 w-full overflow-hidden border border-[#2c4772]">
                <Image src={member.image} alt={member.name} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" />
              </div>
              <h3 className="mt-4 text-3xl leading-[0.95] text-white">{member.name}</h3>
              <p className="font-mono mt-1 text-xs uppercase tracking-[0.12em] accent-text">{member.role}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
