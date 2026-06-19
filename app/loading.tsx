import ConcoreMark from "@/components/HomePage/ConcoreMark";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-10 bg-[#FBFCFA]">
      <div className="blueprint-grid blueprint-grid-fade pointer-events-none absolute inset-0 opacity-30" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(20,184,166,0.08),transparent_55%)]"
      />

      <ConcoreMark variant="loader" className="relative h-auto w-[17rem] sm:w-[21rem]" />

      <div className="relative flex flex-col items-center gap-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-[#475569]">Concore Technologies</p>
        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#94A3B8]">Loading</p>
      </div>
    </div>
  );
}
