import { cn } from "@/lib/utils";

// Crisp, parametric "radial dot field" for the hero — a technical / blueprint
// motif. Everything is computed from the ring tables below so the geometry
// stays precise and easy to tune. The core sits right-of-center so the field
// fans leftward and bleeds off the right edge when pinned with xMaxYMid.

const CX = 500;
const CY = 380;

// Concentric engineering guide lines: hairline strokes, dashed for the
// blueprint feel. Each entry is a radius + dash pattern.
const GUIDE_RINGS: ReadonlyArray<{ r: number; dash: string; rev?: boolean }> = [
  { r: 64, dash: "3 6" },
  { r: 150, dash: "3 6", rev: true },
  { r: 250, dash: "2 7" },
  { r: 360, dash: "2 8", rev: true },
  { r: 472, dash: "1 9" },
];

// Node rings: dots grow larger toward the rim, like a field expanding outward.
const NODE_RINGS: ReadonlyArray<{ r: number; count: number; dot: number }> = [
  { r: 64, count: 8, dot: 3.4 },
  { r: 150, count: 12, dot: 4.8 },
  { r: 250, count: 16, dot: 6.6 },
  { r: 360, count: 20, dot: 8.8 },
  { r: 472, count: 24, dot: 11.4 },
];

type Node = { x: number; y: number; r: number; pulse: boolean };

const NODES: Node[] = NODE_RINGS.flatMap((ring, ri) => {
  // Stagger alternate rings half a step so spokes don't line up rigidly.
  const offset = (ri % 2 ? Math.PI / ring.count : 0) - Math.PI / 2;
  return Array.from({ length: ring.count }, (_, k) => {
    const a = offset + (k / ring.count) * Math.PI * 2;
    return {
      x: +(CX + Math.cos(a) * ring.r).toFixed(2),
      y: +(CY + Math.sin(a) * ring.r).toFixed(2),
      r: ring.dot,
      // Light up a sparse, irregular handful of secondary nodes.
      pulse: (ri >= 2 && k % 5 === 0) || (ri === 3 && k % 7 === 3),
    };
  });
});

export default function BlueprintField({
  className,
  animate = true,
}: {
  className?: string;
  // When false the rings/nodes render static (also forced by reduced-motion).
  animate?: boolean;
}) {
  return (
    <svg
      viewBox="-20 -100 720 960"
      preserveAspectRatio="xMaxYMid meet"
      className={cn("bp-field h-full w-full", animate && "bp-field-animate", className)}
      role="img"
      aria-label="Radial field of nodes converging on a central core"
      shapeRendering="geometricPrecision"
    >
      {/* Engineering guide lines — razor-thin, dashed, slowly counter-rotating. */}
      <g fill="none" stroke="#0F172A" strokeWidth="1">
        {GUIDE_RINGS.map((g) => (
          <circle
            key={g.r}
            cx={CX}
            cy={CY}
            r={g.r}
            strokeOpacity={0.16}
            strokeDasharray={g.dash}
            className={g.rev ? "bp-spin-rev" : "bp-spin"}
          />
        ))}
        {/* Two precise crosshair axes through the core. */}
        <line x1={CX - 472} y1={CY} x2={CX + 472} y2={CY} strokeOpacity={0.08} />
        <line x1={CX} y1={CY - 472} x2={CX} y2={CY + 472} strokeOpacity={0.08} />
      </g>

      {/* Nodes — solid, crisp vector fills. No gradients, no blur. */}
      <g fill="#121212">
        {NODES.map((n, i) => (
          <circle
            key={i}
            cx={n.x}
            cy={n.y}
            r={n.r}
            className={n.pulse ? "bp-pulse" : undefined}
            style={n.pulse ? ({ "--bp-delay": `${(i % 6) * 0.4}s` } as React.CSSProperties) : undefined}
          />
        ))}
      </g>

      {/* The core: a clean solid disc ringed by a precise hairline. */}
      <circle cx={CX} cy={CY} r={28} fill="#121212" />
      <circle cx={CX} cy={CY} r={40} fill="none" stroke="#0F172A" strokeWidth="1" strokeOpacity={0.35} />
    </svg>
  );
}
