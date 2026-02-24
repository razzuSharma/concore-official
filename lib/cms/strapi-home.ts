import { nookContent } from "@/content/home/nook";
import { startupFacts, startupProofItems } from "@/content/home/startup";

// Local fallback content shape prepared for future Strapi mapping.
// Replace these exports with fetchers once Strapi is integrated.
export const homeContentFallback = {
  startup: {
    facts: startupFacts,
    proofItems: startupProofItems,
  },
  nook: nookContent,
};

export type HomeContentFallback = typeof homeContentFallback;
