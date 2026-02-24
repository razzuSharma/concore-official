import type { StartupFact, StartupProofItem } from "@/types/content";

export const startupFacts: StartupFact[] = [
  { value: "5", label: "Client projects shipped" },
  { value: "9-12", label: "Week delivery windows" },
  { value: "Weekly", label: "Sprint demos and notes" },
];

export const startupProofItems: StartupProofItem[] = [
  {
    title: "Real shipped systems",
    detail: "Case studies show actual clients, delivery windows, and implementation details.",
  },
  {
    title: "Direct builder access",
    detail: "You work directly with founder and engineers handling architecture and delivery.",
  },
  {
    title: "Transparent execution",
    detail: "Weekly progress updates, risk tracking, and decision logs from week one.",
  },
];
