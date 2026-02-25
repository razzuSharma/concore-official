export interface ProjectPhase {
  phase: string;
  detail: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  previewImage?: string;
  color: string;
  tags: string[];
  problem: string;
  solution: string;
  features: string[];
  results: string[];
  tech: string[];
  clientProfile: string;
  projectScope: string;
  timeline: string;
  team: string;
  overview: string;
  objectives: string[];
  deliveryPhases: ProjectPhase[];
  architecture: string[];
  qualityAndSecurity: string[];
  challenges: string[];
  businessImpact: string[];
  lessons: string[];
  liveUrl?: string;
  codeUrl?: string;
  testimonialQuote?: string;
  testimonialAuthor?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Barista Student Management System",
    category: "Education Technology",
    description:
      "A full operations platform for managing barista training, assessments, scheduling, instructor workflows, and student certification.",
    image: "BSMS",
    color: "from-[#14B8A6] to-[#0F172A]",
    tags: ["Next.js", "Supabase", "Tailwind CSS", "Training Ops", "Role-Based Access"],
    problem:
      "The institute relied on spreadsheets, chat threads, and manual checklists to run admissions, class schedules, attendance, practical evaluations, and certificate issuance. This created delays, inconsistent records, and no real-time visibility into student performance.",
    solution:
      "CONCORE TECHNOLOGIES designed and implemented a centralized web platform with role-based dashboards for operations, instructors, and students. The system unified enrollment, timetable logic, attendance, assessment scoring, and certificate publishing under one workflow.",
    features: [
      "Role-based dashboards for operations team, instructors, and students",
      "Attendance and practical score tracking by batch and module",
      "Automated scheduling with conflict validation",
      "Digital certificate generation and verification links",
      "Curriculum progress maps and milestone alerts",
      "Reporting panel for completion, dropout risk, and instructor load",
    ],
    results: [
      "60% reduction in routine admin overhead",
      "35% increase in course completion consistency",
      "Faster certificate turnaround from days to same-day",
      "Single source of truth across all active cohorts",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Vercel"],
    clientProfile:
      "A high-volume coffee training institute expanding across multiple cohorts and partner locations.",
    projectScope:
      "Discovery, UX architecture, data modeling, web app implementation, QA, deployment, and handover documentation.",
    timeline: "10-week delivery with weekly stakeholder demos",
    team: "1 Product Engineer Lead, 1 Full-Stack Engineer, 1 UI/UX Designer, 1 QA",
    overview:
      "This engagement focused on turning an operations-heavy training business into a systemized digital workflow. Beyond building screens, the project required deep process mapping across admissions, trainer workflows, and compliance reporting. The final platform was designed to support current operations while giving leadership predictable visibility into student outcomes and training quality.",
    objectives: [
      "Centralize student lifecycle workflows from admission to certification",
      "Reduce operational bottlenecks in class planning and assessment",
      "Improve decision-making with reliable reporting and cohort analytics",
      "Create a maintainable architecture that internal teams can extend",
    ],
    deliveryPhases: [
      {
        phase: "Discovery & Process Mapping",
        detail:
          "Mapped current-state workflows with operations and instructors, identified failure points, and translated process constraints into product requirements and system rules.",
      },
      {
        phase: "Build & Validation",
        detail:
          "Delivered prioritized modules in weekly increments, validated with real cohorts, and iterated on scheduling, attendance, and grading logic based on operational feedback.",
      },
      {
        phase: "Launch & Enablement",
        detail:
          "Migrated active cohort data, onboarded staff with SOP guides, and provided post-launch support for adoption, monitoring, and reporting consistency.",
      },
    ],
    architecture: [
      "Modular domain model for admissions, cohorts, attendance, and certification",
      "Row-level access controls aligned to role permissions",
      "Event-driven notifications for schedule changes and milestones",
      "Reporting layer optimized for operational dashboard queries",
    ],
    qualityAndSecurity: [
      "Role-based authorization for all write operations",
      "Validation constraints for grading and certification states",
      "Audit-friendly activity logs for sensitive workflow changes",
      "Release checklist with regression coverage for core modules",
    ],
    challenges: [
      "Inconsistent historical data required cleanup and mapping",
      "Scheduling logic had multiple real-world exceptions",
      "Stakeholders needed feature rollout without disrupting active classes",
    ],
    businessImpact: [
      "60% reduction in routine admin overhead during active cohort operations",
      "35% increase in course completion consistency",
      "Same-day certificate turnaround replacing multi-day manual process",
      "Improved reporting confidence for partner and compliance discussions",
    ],
    lessons: [
      "Operational software adoption improves significantly when staff SOPs are included in delivery",
      "Weekly demos reduced decision lag and avoided late-stage requirement changes",
    ],
    testimonialQuote:
      "Concore brought structure to our delivery process with clear weekly visibility and a launch that improved daily operations immediately.",
    testimonialAuthor: "Sujan Subedi, Founder",
  },
  {
    id: 2,
    title: "Tourgasm Experience Booking Platform",
    category: "Travel & Tourism",
    description:
      "A traveler-focused platform for local experience discovery, booking coordination, and operator-side management.",
    image: "TEBP",
    color: "from-[#14B8A6] to-[#0F172A]",
    tags: ["Marketplace", "Booking Flow", "Operations Dashboard", "Growth"],
    problem:
      "The team had demand from travelers but lacked a robust digital flow for discovery, booking, availability management, and operator coordination. Existing processes depended on manual chat follow-ups and ad-hoc confirmations.",
    solution:
      "CONCORE TECHNOLOGIES built a conversion-focused booking platform with structured experience listings, guided booking flow, availability controls, and operator dashboards to reduce manual coordination overhead.",
    features: [
      "Experience catalog with curated filters and regional discovery",
      "Booking workflow with status transitions and confirmation logic",
      "Operator dashboard for availability, requests, and updates",
      "Traveler profile and trip context capture",
      "Review and social proof module for trust building",
      "Admin layer for content moderation and quality control",
    ],
    results: [
      "28% faster booking operations in operator workflows",
      "23% reduction in booking-flow drop-offs during pilot period",
      "40% fewer manual coordination follow-ups between travelers and operators",
      "Improved visibility into top-performing experiences and bottlenecks",
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "Tailwind CSS", "Vercel"],
    clientProfile:
      "A travel startup scaling curated local experiences for domestic and international travelers.",
    projectScope:
      "Product architecture, UX, full-stack development, admin tooling, analytics instrumentation, and post-launch optimization.",
    timeline: "12-week phased release, including pilot launch and optimization sprint",
    team: "1 Product Lead, 2 Full-Stack Engineers, 1 Designer, 1 QA",
    overview:
      "This project centered on operational reliability in a marketplace-style product. The challenge was balancing traveler UX simplicity with robust operator-side workflows. The resulting platform combined conversion-focused front-end experiences with practical tools for on-ground teams managing availability and trip quality.",
    objectives: [
      "Increase traveler conversion from discovery to confirmed booking",
      "Systemize operator workflows with less manual intervention",
      "Improve trust through transparent listings and review context",
      "Build an extensible foundation for regional expansion",
    ],
    deliveryPhases: [
      {
        phase: "Product Framing",
        detail:
          "Defined booking journey states, operator roles, and failure-path handling before UI implementation to reduce downstream rework.",
      },
      {
        phase: "Core Platform Build",
        detail:
          "Implemented listing, booking, operator panel, and admin moderation modules with weekly walkthroughs and conversion-focused iterations.",
      },
      {
        phase: "Launch Optimization",
        detail:
          "Instrumented funnel analytics, tuned booking friction points, and prioritized operational improvements based on early user behavior.",
      },
    ],
    architecture: [
      "Service boundaries for traveler, operator, booking, and moderation domains",
      "State-driven booking model to support clear operational transitions",
      "Reusable UI patterns for listing cards, filters, and detail templates",
      "Analytics events aligned to acquisition and conversion milestones",
    ],
    qualityAndSecurity: [
      "Input validation and booking-state guardrails to prevent invalid transitions",
      "Access controls for operator and admin dashboards",
      "Monitoring hooks for booking and request failure detection",
      "Release validation for high-impact booking paths",
    ],
    challenges: [
      "Experience quality varied across providers and needed moderation workflows",
      "Booking edge cases required explicit operational fallback logic",
      "Balancing rich discovery content with speed and mobile usability",
    ],
    businessImpact: [
      "Created a dependable digital sales channel for experience operators",
      "28% faster operational handling in booking workflows",
      "Reduced manual coordination load through state-based booking flow",
      "Enabled data-driven prioritization for growth decisions",
    ],
    lessons: [
      "Marketplace products benefit from strong operational state modeling early",
      "Operator tooling quality directly impacts traveler-side satisfaction",
    ],
    testimonialQuote:
      "Every sprint had clear deliverables and the platform gave us a reliable base to scale experiences with confidence.",
    testimonialAuthor: "Sujan Adhikari, Co-Founder",
  },
  {
    id: 3,
    title: "Shibam Premium Catalog Commerce",
    category: "Interior Commerce",
    description:
      "A premium digital catalog and quote workflow platform for high-value marble and furniture inquiries.",
    image: "SPCC",
    color: "from-[#334155] to-[#0F172A]",
    tags: ["Catalog Commerce", "Quote Workflow", "Design Industry", "B2B"],
    problem:
      "The business handled high-value catalog requests through fragmented channels, leading to inconsistent responses, weak lead tracking, and limited visibility into which products converted best.",
    solution:
      "CONCORE TECHNOLOGIES developed a premium digital catalog experience integrated with structured inquiry and quote workflows, enabling the sales team to respond faster and track lead quality more effectively.",
    features: [
      "Product catalog with material, finish, and collection structuring",
      "Quote request pipeline with lead metadata capture",
      "Internal status dashboard for inquiry progression",
      "Showcase pages optimized for visual-first high-value products",
      "Content blocks for project references and trust-building",
      "Lead follow-up support with centralized context",
    ],
    results: [
      "50% faster quote turnaround for catalog-driven inquiries",
      "Higher visibility into high-intent leads across collections",
      "Improved average order value from qualified inquiries",
      "More consistent sales communication across team members",
    ],
    tech: ["Next.js", "Supabase", "PostgreSQL", "Tailwind CSS", "Shadcn UI", "Vercel"],
    clientProfile:
      "A premium furniture and marble brand serving custom residential and commercial interior projects.",
    projectScope:
      "UX strategy, catalog architecture, quote workflow design, full-stack implementation, and sales-team enablement.",
    timeline: "9-week delivery with design and engineering overlap",
    team: "1 Product Designer, 1 Full-Stack Engineer, 1 QA, 1 Delivery Lead",
    overview:
      "Unlike commodity e-commerce, this engagement required a consultation-oriented buying journey. Product storytelling quality and inquiry handling discipline were both business-critical. The platform was intentionally designed to improve pre-sales clarity and reduce qualification friction for the internal team.",
    objectives: [
      "Create a premium digital experience aligned with brand positioning",
      "Reduce delay and inconsistency in quote handling",
      "Capture better lead context for faster follow-up",
      "Support future expansion of catalog depth and segments",
    ],
    deliveryPhases: [
      {
        phase: "Content & Journey Definition",
        detail:
          "Structured product and collection taxonomy, then mapped inquiry paths based on customer intent and purchase stage.",
      },
      {
        phase: "Platform Implementation",
        detail:
          "Built catalog, detail, and quote workflow modules with attention to performance and content maintainability.",
      },
      {
        phase: "Sales Workflow Enablement",
        detail:
          "Configured internal inquiry states, follow-up conventions, and reporting views to improve response consistency.",
      },
    ],
    architecture: [
      "Structured content model for products, collections, and references",
      "Lead pipeline model with status transitions and assignment fields",
      "Reusable product blocks for rapid catalog expansion",
      "Performance-optimized media delivery for visual assets",
    ],
    qualityAndSecurity: [
      "Validation rules for quote submissions and lead records",
      "Role-aware access controls for internal operations",
      "Data hygiene checks for inquiry and contact workflows",
      "Deployment checklist covering SEO and core conversion pages",
    ],
    challenges: [
      "High visual quality requirements with performance constraints",
      "Need for consultation-style flow instead of direct checkout",
      "Legacy lead data with inconsistent formatting",
    ],
    businessImpact: [
      "50% faster quote operations for high-value catalog requests",
      "More efficient handoffs between sales and operations",
      "Improved visibility into product-level inquiry performance",
      "Stronger digital credibility for premium segment buyers",
    ],
    lessons: [
      "High-ticket commerce needs process design as much as UI polish",
      "Quote workflows should be treated as first-class product journeys",
    ],
  },
  {
    id: 4,
    title: "Dipak Suppliers Digital Presence Platform",
    category: "B2B Supplier Platform",
    description:
      "A modern bilingual web platform positioning a traditional supplier as a trusted digital-first brand.",
    image: "DSDP",
    color: "from-[#14B8A6] to-[#334155]",
    tags: ["Bilingual UX", "Lead Capture", "Product Showcase", "Brand Trust"],
    problem:
      "The business had strong offline trust but limited online visibility. Product discovery and lead capture were inconsistent, especially across language preferences and mobile devices.",
    solution:
      "CONCORE TECHNOLOGIES built a responsive bilingual platform that presents product lines clearly, highlights trust signals, and routes inquiries through structured contact actions.",
    features: [
      "Bilingual interface support for regional accessibility",
      "Segmented product presentation for filters and agricultural tools",
      "Trust-focused content modules and business proof markers",
      "Lead capture CTA placements optimized for mobile flow",
      "Dark/light mode compatibility and visual consistency",
      "Performance-oriented frontend architecture",
    ],
    results: [
      "2.1x increase in qualified web inquiries in the first 90 days",
      "38% increase in mobile engagement depth post-launch",
      "More consistent brand presentation across product segments",
      "Faster first-contact quality with structured bilingual inquiry paths",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Framer Motion"],
    clientProfile:
      "A long-running supplier business modernizing its customer acquisition and brand communication channels.",
    projectScope:
      "Positioning strategy, bilingual UI planning, frontend implementation, and conversion-focused content structure.",
    timeline: "6-week delivery with stakeholder content workshops",
    team: "1 Frontend Engineer, 1 Designer, 1 Content Strategist",
    overview:
      "The engagement required translating offline trust into a credible digital experience. The platform was designed to reduce confusion in product communication, improve accessibility for diverse customer groups, and create clearer conversion paths from discovery to inquiry.",
    objectives: [
      "Modernize brand perception without losing existing trust",
      "Support bilingual customer communication at scale",
      "Improve lead capture from mobile-first browsing behavior",
      "Create a maintainable structure for future product additions",
    ],
    deliveryPhases: [
      {
        phase: "Messaging & Information Architecture",
        detail:
          "Defined product hierarchy, trust content sequencing, and bilingual structure to reduce navigation friction.",
      },
      {
        phase: "Design & Frontend Development",
        detail:
          "Implemented responsive UI with performance-aware interactions and clear CTA placement for inquiry capture.",
      },
      {
        phase: "Launch & Optimization",
        detail:
          "Performed content QA across languages, tuned mobile readability, and refined conversion entry points.",
      },
    ],
    architecture: [
      "Modular section system for product and trust storytelling",
      "Language-ready content model for bilingual expansion",
      "Reusable CTA blocks mapped to customer intent",
      "Lightweight frontend stack optimized for load speed",
    ],
    qualityAndSecurity: [
      "Cross-device UI and readability testing",
      "Content consistency checks across language variants",
      "Form validation for inquiry capture reliability",
      "Deployment audit for performance and accessibility baselines",
    ],
    challenges: [
      "Balancing rich product detail with simple navigation",
      "Maintaining messaging consistency across two languages",
      "Ensuring mobile readability for older device profiles",
    ],
    businessImpact: [
      "2.1x growth in qualified inquiry volume within 90 days",
      "Higher confidence from buyers discovering products online",
      "More structured lead inflow for sales follow-up",
      "Foundation set for future digital campaigns",
    ],
    lessons: [
      "Bilingual UX quality directly affects conversion confidence",
      "Trust-oriented storytelling can significantly improve lead quality",
    ],
  },
  {
    id: 5,
    title: "Yatharoop Construction Portfolio Platform",
    category: "Construction Portfolio",
    description:
      "A premium project portfolio site for architecture and construction services with consultation-focused conversion flow.",
    image: "YCPP",
    color: "from-[#14B8A6] to-[#0F172A]",
    tags: ["Real Estate", "Portfolio Experience", "Consultation Flow", "Lead Generation"],
    problem:
      "The firm had a strong project track record but lacked a digital platform capable of communicating project quality, service depth, and consultation pathways to premium clients.",
    solution:
      "CONCORE TECHNOLOGIES delivered a visual-first portfolio platform with structured project storytelling, service clarity, and conversion-ready consultation actions for residential and commercial prospects.",
    features: [
      "Project-first content architecture with narrative sections",
      "Service detail modules aligned to buyer intent",
      "Consultation conversion flow with qualification prompts",
      "High-resolution gallery treatment with performance safeguards",
      "Credibility modules for process and execution standards",
      "Responsive experience tuned for investor and client review",
    ],
    results: [
      "34% increase in consultation inquiries from portfolio traffic",
      "29% improvement in high-intent lead quality for design consultations",
      "More confident presentation of project references to premium buyers",
      "Better internal alignment around digital lead handling",
    ],
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "TypeScript"],
    clientProfile:
      "A construction and real-estate firm targeting higher-value residential and commercial development projects.",
    projectScope:
      "Portfolio strategy, UX, frontend engineering, performance optimization, and consultation funnel design.",
    timeline: "8-week delivery with iterative visual review cycles",
    team: "1 Product Designer, 1 Frontend Engineer, 1 QA, 1 Project Coordinator",
    overview:
      "This case required balancing visual richness and professional credibility. The platform needed to present design and construction outcomes with clarity while supporting sales conversations through structured consultation touchpoints.",
    objectives: [
      "Elevate digital brand perception for premium client segments",
      "Improve consultation conversion from portfolio traffic",
      "Present service capability with clearer decision context",
      "Build reusable foundations for future project additions",
    ],
    deliveryPhases: [
      {
        phase: "Portfolio Narrative Design",
        detail:
          "Defined how project stories, service strengths, and proof points should be sequenced for decision-makers.",
      },
      {
        phase: "Implementation & Refinement",
        detail:
          "Built responsive portfolio sections, optimized media handling, and refined readability across device sizes.",
      },
      {
        phase: "Conversion Optimization",
        detail:
          "Integrated consultation CTAs with clearer qualification prompts and route-to-contact workflows.",
      },
    ],
    architecture: [
      "Component-based page system for project story reuse",
      "Media strategy balancing visual quality and performance",
      "Content hierarchy tuned for service and project intent",
      "Scalable structure for adding future portfolio entries",
    ],
    qualityAndSecurity: [
      "Visual QA across breakpoints and high-density screens",
      "Performance checks on media-heavy pages",
      "Form and CTA behavior validation for conversion reliability",
      "Accessibility review for navigation and content legibility",
    ],
    challenges: [
      "High image quality expectations with strict load-time goals",
      "Need to satisfy both marketing and technical stakeholders",
      "Consolidating inconsistent legacy project content",
    ],
    businessImpact: [
      "Increased credibility in early-stage client conversations",
      "34% lift in consultation pipeline volume from digital channels",
      "Reduced friction in showcasing project capabilities",
      "Clearer digital foundation for brand growth initiatives",
    ],
    lessons: [
      "Portfolio platforms perform better when tied to clear conversion intent",
      "Visual excellence must be paired with disciplined information architecture",
    ],
  },
];
