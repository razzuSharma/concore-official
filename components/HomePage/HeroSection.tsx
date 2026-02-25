import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/HomePage/Container";
import Section from "@/components/HomePage/Section";
import ScribbleWord from "@/components/HomePage/ScribbleWord";

const team = ["RD", "NB", "DB", "SN"];

export default function HeroSection() {
  return (
    <Section className="relative overflow-hidden bg-[#F0FAFA] pb-8 pt-20 md:pt-24">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(20,184,166,0.05),transparent_42%)]" />

      <Container className="relative">
        <div className="mx-auto max-w-[980px] text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#14B8A6]">
            Software Engineering Studio • Kathmandu, Nepal
          </p>

          <h1 className="mt-6 text-[clamp(3.2rem,8.8vw,8.8rem)] leading-[0.9] text-[#0F172A]">
            BUILT AT THE CORE,
            <span className="block text-[#14B8A6]">TESTED IN REALITY,</span>
            <span className="block text-[#475569]">
              TRUSTED IN{" "}
              <ScribbleWord className="inline-block mb-2 pb-2" strokeClassName="stroke-[#14B8A6]">
                PRODUCTION.
              </ScribbleWord>
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-[760px] text-[1.18rem] leading-8 text-[#334155] md:text-[1.28rem]">
            Web, mobile, and AI systems built with documented architecture, visible delivery, and long-term maintainability.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="rounded-[9px] bg-[#14B8A6] text-[#FFFFFF] hover:bg-[#0D9488]">
              <Link href="/contact-us" className="group">
                Book a Call
                <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1 motion-reduce:transform-none" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-[9px] border-[#CBD5E1] bg-transparent text-[#64748B] hover:bg-[#F8FAFC] hover:text-[#0F172A]"
            >
              <Link href="/contact-us">Get Estimate</Link>
            </Button>
          </div>

          <div className="mx-auto mt-14 max-w-3xl rounded-xl border border-[#DCE7E5] bg-[#FFFFFF]/80 px-5 py-4 shadow-[0_8px_26px_rgba(15,23,42,0.06)] backdrop-blur-sm">
            <div className="mb-3 flex flex-wrap items-center justify-center gap-3 border-b border-[#E2E8F0] pb-3">
              <div className="flex -space-x-3">
              {team.map((member) => (
                <span
                  key={member}
                  className="font-mono inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#CBD5E1] bg-[#FFFFFF] text-xs text-[#334155]"
                >
                  {member}
                </span>
              ))}
              </div>
              <p className="text-sm text-[#475569]">Raju Sharma Dahal · Ngamesh Bhandari · Dipesh Bhanadari · Saurav Niroula</p>
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#334155]">
              Talk directly to founder and lead engineers • No account-manager layer
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href="/#services"
              className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-[#64748B] transition-colors hover:text-[#0F172A]"
            >
              Scroll to explore
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-[#CBD5E1] transition-transform duration-200 ease-out group-hover:translate-y-0.5 motion-reduce:transform-none">
                ↓
              </span>
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-6xl">
          <div className="relative overflow-hidden border border-[#E2E8F0] bg-[#FFFFFF]">
            <div className="flex items-center justify-between border-b border-[#E2E8F0] bg-[#F0FDFA] px-4 py-2">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#14B8A6]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#334155]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#E2E8F0]" />
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#475569]">
                app.arsbarista.edu.np/dashboard
              </p>
              <span className="w-14" />
            </div>

            <div className="grid gap-0 md:grid-cols-[220px_1fr]">
              <aside className="border-r border-[#E2E8F0] bg-[#FFFFFF] p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#475569]">ARS Barista Institute</p>
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
                          ? "border-[#14B8A6] bg-[#F0FDFA] text-[#14B8A6]"
                          : "border-[#E2E8F0] text-[#475569]"
                      }`}
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </aside>

              <div className="p-5">
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="border border-[#E2E8F0] bg-[#FFFFFF] p-3">
                    <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#475569]">Enrolled</p>
                    <p className="mt-1 text-xl text-[#0F172A]">42</p>
                  </div>
                  <div className="border border-[#E2E8F0] bg-[#FFFFFF] p-3">
                    <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#475569]">Graduating</p>
                    <p className="mt-1 text-xl text-[#0F172A]">08</p>
                  </div>
                  <div className="border border-[#E2E8F0] bg-[#F0FDFA] p-3">
                    <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#14B8A6]">Admin Load</p>
                    <p className="mt-1 text-xl text-[#14B8A6]">-60%</p>
                  </div>
                </div>

                <div className="mt-4 overflow-hidden border border-[#E2E8F0] bg-[#FFFFFF]">
                  <div className="grid grid-cols-4 border-b border-[#E2E8F0] bg-[#F0FDFA] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[#475569]">
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
                      className="grid grid-cols-4 border-b border-[#E2E8F0] px-3 py-2 text-sm text-[#0F172A] last:border-b-0"
                    >
                      <span>{row.name}</span>
                      <span className="text-[#475569]">{row.batch}</span>
                      <span>{row.attendance}</span>
                      <span>{row.score}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#F8F9F5] to-transparent" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
