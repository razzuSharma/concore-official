import type { NookContent } from "@/types/content";

export const nookContent: NookContent = {
  badge: "Now Building",
  title: "NOOK: collaboration workspace for focused teams",
  summary:
    "Alongside client work, we are building NOOK to improve async collaboration, execution clarity, and team alignment.",
  stage: "MVP in progress",
  milestones: [
    { phase: "Current", detail: "Core workspace architecture and real-time collaboration flows" },
    { phase: "Next", detail: "Pilot onboarding for early product and operations teams" },
    { phase: "Goal", detail: "Public release with structured project and handoff workflows" },
  ],
  primaryCta: {
    label: "Join NOOK Pilot",
    href: "/contact-us",
  },
  secondaryCta: {
    label: "Book 20-min Fit Call",
    href: "/contact-us",
  },
};
