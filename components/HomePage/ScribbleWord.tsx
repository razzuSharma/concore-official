import { cn } from "@/lib/utils";

export default function ScribbleWord({
  children,
  className,
  strokeClassName,
  svgClassName,
}: {
  children: React.ReactNode;
  className?: string;
  strokeClassName?: string;
  svgClassName?: string;
}) {
  return (
    <span className={cn("relative inline-block pb-3", className)}>
      <span>{children}</span>
      <svg
        viewBox="0 0 340 90"
        aria-hidden="true"
        className={cn("pointer-events-none absolute -bottom-2 left-0 h-7 w-full", svgClassName)}
        preserveAspectRatio="none"
      >
        <path
          d="M8 66 C 58 74, 118 62, 172 54 C 220 46, 275 44, 334 36"
          className={cn("scribble-path", strokeClassName)}
          fill="none"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 76 C 72 68, 126 64, 178 57 C 228 50, 278 47, 332 41"
          className={cn("scribble-path scribble-path-delay", strokeClassName)}
          fill="none"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
