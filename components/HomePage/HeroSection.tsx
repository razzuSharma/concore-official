import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/HomePage/Container";
import Section from "@/components/HomePage/Section";
import ScribbleWord from "@/components/HomePage/ScribbleWord";

const team = ["RD", "NB", "DB", "SN"];

export default function HeroSection() {
  return (
    <Section className="relative overflow-hidden bg-[#070b12] pb-4 pt-20 md:pt-24">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-35" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(40,114,255,0.16),transparent_38%),radial-gradient(circle_at_80%_20%,rgba(232,213,163,0.09),transparent_32%)]" />
      <div className="noise-layer pointer-events-none absolute inset-0" />

      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[#91addb]">
            Software Engineering Studio • Kathmandu, Nepal
          </p>

          <h1 className="mt-6 text-6xl leading-[0.9] text-white md:text-7xl lg:text-8xl">
            SOFTWARE
            <span className="block text-[#e8d5a3]">THAT HOLDS UP</span>
            <span className="block text-[#6f7586]">
              IN{" "}
              <ScribbleWord className="inline-block mb-2 pb-2" strokeClassName="stroke-[#e8d5a3]/85">
                PRODUCTION.
              </ScribbleWord>
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#b6c4de] md:text-lg">
            Web, mobile, and AI systems built with documented architecture, visible delivery, and long-term maintainability.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="rounded-none bg-[#f0cf8a] text-[#0b1020] hover:bg-[#f7dda8]">
              <Link href="/contact-us">
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-none border-[#355487] bg-transparent text-[#dbe7fb] hover:bg-[#0d1a2f]"
            >
              <Link href="/#work">See Case Studies</Link>
            </Button>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <div className="flex -space-x-2">
              {team.map((member) => (
                <span
                  key={member}
                  className="font-mono inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#304e7c] bg-[#0a1222] text-[11px] text-[#c8d7f2]"
                >
                  {member}
                </span>
              ))}
            </div>
            <p className="text-sm text-[#cedaf1]">Raju Sharma Dahal · Ngamesh Bhandari · Dipesh Bhanadari · Saurav Niroula</p>
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-[#9ab5e0]">
              Talk directly to founder and lead engineers • No account-manager layer
            </p>
          </div>
        </div>

        <div className="mx-auto mt-6 max-w-6xl">
          <div className="relative overflow-hidden border border-[#2a436b] bg-[#090f1b]">
            <div className="flex items-center justify-between border-b border-[#213456] bg-[#0b1424] px-4 py-2">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#d76f6f]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#d1a868]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#77b07f]" />
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8da9d8]">
                app.arsbarista.edu.np/dashboard
              </p>
              <span className="w-14" />
            </div>

            <div className="grid gap-0 md:grid-cols-[220px_1fr]">
              <aside className="border-r border-[#1f3252] bg-[#0a1222] p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#7e9ecc]">ARS Barista Institute</p>
                <div className="mt-4 space-y-2">
                  {[
                    "Dashboard",
                    "Students",
                    "Schedule",
                    "Assessments",
                    "Certificates",
                  ].map((item, idx) => (
                    <p
                      key={item}
                      className={`font-mono rounded border px-2 py-1 text-[10px] uppercase tracking-[0.12em] ${
                        idx === 0
                          ? "border-[#c3a462] bg-[#c3a462]/10 text-[#eddab0]"
                          : "border-[#27406a] text-[#91addb]"
                      }`}
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </aside>

              <div className="p-5">
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="border border-[#27406a] bg-[#0a1222] p-3">
                    <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#89a8dc]">Enrolled</p>
                    <p className="mt-1 text-xl text-white">42</p>
                  </div>
                  <div className="border border-[#27406a] bg-[#0a1222] p-3">
                    <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#89a8dc]">Graduating</p>
                    <p className="mt-1 text-xl text-white">08</p>
                  </div>
                  <div className="border border-[#c3a462]/40 bg-[#c3a462]/10 p-3">
                    <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#d7be87]">Admin Load</p>
                    <p className="mt-1 text-xl text-[#f0dfbc]">-60%</p>
                  </div>
                </div>

                <div className="mt-4 overflow-hidden border border-[#27406a] bg-[#0a1222]">
                  <div className="grid grid-cols-4 border-b border-[#27406a] bg-[#0d1a2f] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[#8fa9d6]">
                    <span>Student</span>
                    <span>Batch</span>
                    <span>Attendance</span>
                    <span>Assessment</span>
                  </div>
                  {[
                    { name: "A. Shrestha", batch: "Thamel-Q1", attendance: "92%", score: "A-" },
                    { name: "R. Karki", batch: "Thamel-Q1", attendance: "88%", score: "B+" },
                    { name: "M. Gurung", batch: "Lalitpur-Q2", attendance: "95%", score: "A" },
                    { name: "S. Adhikari", batch: "Lalitpur-Q2", attendance: "90%", score: "A-" },
                  ].map((row) => (
                    <div
                      key={row.name}
                      className="grid grid-cols-4 border-b border-[#1f3252] px-3 py-2 text-sm text-[#d7e4fc] last:border-b-0"
                    >
                      <span>{row.name}</span>
                      <span className="text-[#b8c9e7]">{row.batch}</span>
                      <span>{row.attendance}</span>
                      <span>{row.score}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#070b12] to-transparent" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
