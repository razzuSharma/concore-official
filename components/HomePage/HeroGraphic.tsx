import { cn } from "@/lib/utils";

const CX = 520;
const CY = 400;

const GUIDE_RINGS: ReadonlyArray<{ r: number; dash: string; rev?: boolean }> = [
  { r: 50, dash: "3 4" },
  { r: 130, dash: "3 6", rev: true },
  { r: 220, dash: "2 7" },
  { r: 320, dash: "2 8", rev: true },
  { r: 435, dash: "1 9" },
];

const NODE_RINGS: ReadonlyArray<{ r: number; count: number; dot: number }> = [
  { r: 50, count: 6, dot: 3.4 },
  { r: 130, count: 10, dot: 4.8 },
  { r: 220, count: 14, dot: 6.6 },
  { r: 320, count: 18, dot: 9 },
  { r: 435, count: 24, dot: 12 },
];

type Node = { x: number; y: number; r: number; pulse: boolean };

const NODES: Node[] = NODE_RINGS.flatMap((ring, ri) => {
  const offset = (ri % 2 ? Math.PI / ring.count : 0) - Math.PI / 2;
  return Array.from({ length: ring.count }, (_, k) => {
    const a = offset + (k / ring.count) * Math.PI * 2;
    return {
      x: +(CX + Math.cos(a) * ring.r).toFixed(2),
      y: +(CY + Math.sin(a) * ring.r).toFixed(2),
      r: ring.dot,
      pulse: (ri >= 2 && k % 5 === 0) || (ri === 3 && k % 7 === 3),
    };
  });
});

export default function HeroGraphic({
  className,
  animate = true,
}: {
  className?: string;
  animate?: boolean;
}) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute right-0 top-1/2 hidden w-[45%] -translate-y-1/2 lg:block",
        "h-full",
        className,
      )}
      style={{
        maskImage: "linear-gradient(to left, black 60%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to left, black 60%, transparent 100%)",
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 640 800"
        preserveAspectRatio="xMaxYMid slice"
        className={cn("bp-field h-full w-full", animate && "bp-field-animate")}
        role="img"
        aria-label="Radial blueprint field"
        shapeRendering="geometricPrecision"
      >
        <g fill="none" stroke="#0F172A" strokeWidth="1">
          {GUIDE_RINGS.map((g) => (
            <g
              key={g.r}
              className={g.rev ? "bp-spin-rev" : "bp-spin"}
              style={
                { transformBox: "fill-box", transformOrigin: "center" } as React.CSSProperties
              }
            >
              <circle cx={CX} cy={CY} r={g.r} strokeOpacity={0.16} strokeDasharray={g.dash} />
            </g>
          ))}
          <line x1={CX - 480} y1={CY} x2={CX + 200} y2={CY} strokeOpacity={0.08} />
          <line x1={CX} y1={CY - 480} x2={CX} y2={CY + 480} strokeOpacity={0.08} />
        </g>

        <g fill="#121212">
          {NODES.map((n, i) => (
            <circle
              key={i}
              cx={n.x}
              cy={n.y}
              r={n.r}
              className={n.pulse ? "bp-pulse" : undefined}
              style={
                n.pulse
                  ? ({ "--bp-delay": `${(i % 6) * 0.4}s` } as React.CSSProperties)
                  : undefined
              }
            />
          ))}
        </g>

        <circle cx={CX} cy={CY} r={22} fill="#121212" />
        <circle cx={CX} cy={CY} r={34} fill="none" stroke="#0F172A" strokeWidth="1" strokeOpacity={0.35} />
      </svg>
    </div>
  );
}
