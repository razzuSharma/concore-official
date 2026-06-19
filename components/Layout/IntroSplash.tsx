"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import ConcoreMark from "@/components/HomePage/ConcoreMark";

export const INTRO_STORAGE_KEY = "concore-intro-seen";

const VISIBLE_MS = 2600; // long enough for one full inward wave
const FADE_MS = 700;

type Phase = "idle" | "playing" | "exiting" | "done";

export default function IntroSplash() {
  const [phase, setPhase] = useState<Phase>("idle");

  useEffect(() => {
    let seen = false;
    try {
      seen = Boolean(localStorage.getItem(INTRO_STORAGE_KEY));
    } catch {
      seen = false;
    }
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const finish = () => {
      try {
        localStorage.setItem(INTRO_STORAGE_KEY, "1");
      } catch {
        // ignore storage failures (private mode, etc.)
      }
      document.documentElement.classList.remove("intro-pending");
      document.body.style.overflow = "";
    };

    // Returning visitor or reduced motion: never show the splash.
    if (seen || reduced) {
      finish();
      setPhase("done");
      return;
    }

    document.body.style.overflow = "hidden";
    setPhase("playing");
    const toExit = window.setTimeout(() => setPhase("exiting"), VISIBLE_MS);
    const toDone = window.setTimeout(() => {
      finish();
      setPhase("done");
    }, VISIBLE_MS + FADE_MS);

    return () => {
      window.clearTimeout(toExit);
      window.clearTimeout(toDone);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={cn(
        "intro-splash fixed inset-0 z-[80] flex-col items-center justify-center gap-10 bg-[#FBFCFA] transition-opacity ease-out",
        phase === "exiting" ? "pointer-events-none opacity-0" : "opacity-100"
      )}
      style={{ transitionDuration: `${FADE_MS}ms` }}
      aria-hidden="true"
    >
      <div className="blueprint-grid blueprint-grid-fade pointer-events-none absolute inset-0 opacity-30" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(20,184,166,0.08),transparent_55%)]" />

      <ConcoreMark variant="loader" className="relative h-auto w-[17rem] sm:w-[21rem]" />

      <div className="relative flex flex-col items-center gap-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-[#475569]">Concore Technologies</p>
        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#94A3B8]">Loading</p>
      </div>
    </div>
  );
}
