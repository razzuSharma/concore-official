export interface StartupProofItem {
  title: string;
  detail: string;
}

export interface StartupFact {
  value: string;
  label: string;
}

export interface NookMilestone {
  phase: string;
  detail: string;
}

export interface NookContent {
  badge: string;
  title: string;
  summary: string;
  stage: string;
  milestones: NookMilestone[];
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
}
