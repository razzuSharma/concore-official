import type { StartupFact, StartupProofItem } from "@/types/content";

export const startupFacts: StartupFact[] = [
  { value: "9-12", label: "Week delivery windows" },
  { value: "Weekly", label: "Sprint demos and notes" },
  { value: "5", label: "Shipped in year one" },
];

export const startupProofItems: StartupProofItem[] = [
  {
    title: "Real shipped systems",
    detail: "Case studies show delivery windows, outcomes, and implementation details.",
  },
  {
    title: "Direct builder access",
    detail: "You work directly with the build team handling architecture and delivery.",
  },
  {
    title: "Transparent execution",
    detail: "Progress updates, risk tracking, and decision logs are shared every sprint.",
  },
];
