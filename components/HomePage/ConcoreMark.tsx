import { cn } from "@/lib/utils";

// Node positions of the Concore mark, in the 600x600 viewBox. [cx, cy, r]
const NODES: ReadonlyArray<readonly [number, number, number]> = [
  [300.0, 237.0, 7.8],
  [300.0, 165.0, 14.4],
  [300.0, 96.0, 19.8],
  [344.55, 255.45, 7.8],
  [395.46, 204.54, 14.4],
  [444.25, 155.75, 19.8],
  [493.04, 106.96, 27.6],
  [363.0, 300.0, 7.8],
  [435.0, 300.0, 14.4],
  [504.0, 300.0, 19.8],
  [573.0, 300.0, 27.6],
  [344.55, 344.55, 7.8],
  [395.46, 395.46, 14.4],
  [444.25, 444.25, 19.8],
  [493.04, 493.04, 27.6],
  [300.0, 363.0, 7.8],
  [300.0, 435.0, 14.4],
  [300.0, 504.0, 19.8],
  [300.0, 573.0, 27.6],
  [255.45, 344.55, 7.8],
  [204.54, 395.46, 14.4],
  [155.75, 444.25, 19.8],
  [106.96, 493.04, 27.6],
  [237.0, 300.0, 7.8],
  [165.0, 300.0, 14.4],
  [96.0, 300.0, 19.8],
  [27.0, 300.0, 27.6],
  [255.45, 255.45, 7.8],
  [204.54, 204.54, 14.4],
  [155.75, 155.75, 19.8],
  [106.96, 106.96, 27.6],
  [332.15, 222.39, 7.8],
  [363.14, 147.56, 12.6],
  [391.84, 78.27, 18.0],
  [377.61, 267.85, 7.8],
  [452.44, 236.86, 12.6],
  [521.73, 208.16, 18.0],
  [377.61, 332.15, 7.8],
  [452.44, 363.14, 12.6],
  [521.73, 391.84, 18.0],
  [332.15, 377.61, 7.8],
  [363.14, 452.44, 12.6],
  [391.84, 521.73, 18.0],
  [267.85, 377.61, 7.8],
  [236.86, 452.44, 12.6],
  [208.16, 521.73, 18.0],
  [222.39, 332.15, 7.8],
  [147.56, 363.14, 12.6],
  [78.27, 391.84, 18.0],
  [222.39, 267.85, 7.8],
  [147.56, 236.86, 12.6],
  [78.27, 208.16, 18.0],
  [267.85, 222.39, 7.8],
  [236.86, 147.56, 12.6],
  [208.16, 78.27, 18.0],
];

const CENTER = 300;
const MAX_DIST = 273; // distance of the outermost nodes from center
const DELAY_PER_UNIT = 4; // ms per px of inward travel (higher = slower ripple)
const CORE_DELAY = Math.round(MAX_DIST * DELAY_PER_UNIT); // wave reaches the core last

function inwardDelay(cx: number, cy: number) {
  const dist = Math.hypot(cx - CENTER, cy - CENTER);
  // Outer nodes fire first; the wave ripples inward toward the core.
  return Math.round((MAX_DIST - dist) * DELAY_PER_UNIT);
}

// "static" (default): no motion. "loader": auto-plays the inward energy loop.
type ConcoreMarkVariant = "static" | "loader";

export default function ConcoreMark({
  className,
  variant = "static",
}: {
  className?: string;
  variant?: ConcoreMarkVariant;
}) {
  return (
    <svg
      viewBox="-32 -32 664 664"
      className={cn("cm-root", variant === "loader" && "cm-loader", className)}
      role="img"
      aria-label="The Concore mark: a fixed core with nodes converging inward"
    >
      <defs>
        <radialGradient id="cmCoreHalo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.55" />
          <stop offset="55%" stopColor="#14B8A6" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#14B8A6" stopOpacity="0" />
        </radialGradient>
        <filter id="cmDotDepth" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#0c0c0a" floodOpacity="0.16" />
        </filter>
      </defs>

      <circle
        cx="300"
        cy="300"
        r="110"
        fill="url(#cmCoreHalo)"
        className="cm-halo-core"
        style={{ "--cm-delay": `${CORE_DELAY}ms` } as React.CSSProperties}
      />

      <g>
        <circle cx="300" cy="300" r="120" fill="none" stroke="#0c0c0a" strokeWidth="1" strokeOpacity="0.18" />
        <circle cx="300" cy="300" r="186" fill="none" stroke="#0c0c0a" strokeWidth="1" strokeOpacity="0.18" />
        <circle cx="300" cy="300" r="252" fill="none" stroke="#0c0c0a" strokeWidth="1" strokeOpacity="0.18" />
        <circle
          cx="300"
          cy="300"
          r="294"
          fill="none"
          stroke="#0c0c0a"
          strokeWidth="1"
          strokeOpacity="0.18"
          strokeDasharray="2 4"
        />
        <line x1="0" y1="300" x2="600" y2="300" stroke="#0c0c0a" strokeWidth="1" strokeOpacity="0.126" />
        <line x1="300" y1="0" x2="300" y2="600" stroke="#0c0c0a" strokeWidth="1" strokeOpacity="0.126" />
      </g>

      <g filter="url(#cmDotDepth)">
        {NODES.map(([cx, cy, r], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={r}
            fill="#0c0c0a"
            className="cm-energy"
            style={{ "--cm-delay": `${inwardDelay(cx, cy)}ms` } as React.CSSProperties}
          />
        ))}
      </g>

      <circle
        cx="300"
        cy="300"
        r="30"
        fill="#0c0c0a"
        filter="url(#cmDotDepth)"
        className="cm-core"
        style={{ "--cm-delay": `${CORE_DELAY}ms` } as React.CSSProperties}
      />
      <circle
        cx="300"
        cy="27"
        r="27.6"
        fill="#0c0c0a"
        filter="url(#cmDotDepth)"
        className="cm-energy"
        style={{ "--cm-delay": "0ms" } as React.CSSProperties}
      />
    </svg>
  );
}
