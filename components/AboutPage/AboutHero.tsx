import Image from "next/image";

const companySignals = [
  "Kathmandu-based, remote worldwide",
  "Custom software delivery",
  "Direct access to engineers",
];

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden border-b border-[#E2E8F0] bg-[#F6F7F2] py-16 md:py-20">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-55" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.88),transparent_34%),radial-gradient(circle_at_78%_38%,rgba(20,184,166,0.05),transparent_30%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(340px,0.95fr)]">
          <div className="max-w-[40rem]">
            <h1 className="text-[clamp(3.6rem,8vw,6rem)] leading-[0.92] text-[#0F172A]">
              ABOUT THE TEAM
              <span className="block text-[#3F7C7A]">BEHIND CONCORE.</span>
            </h1>

            <p className="mt-6 max-w-[34rem] border-l border-[#D5DDE5] pl-5 text-[1.05rem] leading-[1.6] text-[#667085]">
              We design and build custom software for companies that need better internal systems, clearer workflows,
              and reliable long-term delivery.
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {companySignals.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full border border-[#DCE3E8] bg-[#FFFFFF] px-3 py-1.5 text-sm text-[#334155]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 max-w-[35rem] border border-[#DCE3E8] bg-[#FBFCFA]/92 px-5 py-4">
              <p className="text-[1rem] leading-[1.6] text-[#475467]">
                Concore combines product thinking, engineering discipline, and practical delivery management so clients
                can work directly with the people responsible for planning and shipping the system.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 hidden border border-[#E6EDF1] lg:block" />
            <div className="relative h-[25rem] overflow-hidden border border-[#DCE3E8] bg-[#FFFFFF] shadow-[0_10px_28px_rgba(15,23,42,0.05)]">
              <Image
                src="/about/team-meeting.png"
                alt="Concore Technologies team in a collaborative meeting"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
