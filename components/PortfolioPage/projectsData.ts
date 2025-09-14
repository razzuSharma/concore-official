export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  color: string;
  tags: string[];
  problem: string;
  solution: string;
  features: string[];
  results: string[];
  tech: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Barista Student Management System",
    category: "Education Technology",
    description:
      "A comprehensive platform for managing barista training programs and student progress.",
    image: "☕",
    color: "from-amber-500 to-orange-600",
    tags: ["Next.js", "Tailwind CSS", "Shadcn UI", "Supabase", "Vercel"],
    problem:
      "Coffee training institutes struggled with manual tracking of student progress, scheduling classes, and managing certifications. Students had no centralized way to access materials or track their learning journey.",
    solution:
      "Developed a full-stack web application with separate dashboards for instructors and students. Features include progress tracking, automated scheduling, digital certificates, and interactive learning modules.",
    features: [
      "Student progress tracking with visual analytics",
      "Automated class scheduling and notifications",
      "Digital certification system with blockchain verification",
      "Interactive coffee brewing tutorials and quizzes",
      "Instructor dashboard for managing multiple cohorts",
      "Mobile-responsive design for on-the-go access",
    ],
    results: [
      "Reduced administrative workload by 60%",
      "Improved student completion rates by 35%",
      "Generated digital certificates for 500+ students",
      "Streamlined operations for 15+ training institutes",
    ],
    tech: [
      "Next.js",
      "Tailwind CSS",
      "Shadcn UI",
      "Supabase",
      "Vercel",
      "Framer Motion",
    ],
  },
  {
    id: 2,
    title: "Tourgasm - Tourist Experience Platform",
    category: "Travel & Tourism",
    description:
      "An immersive platform connecting travelers with unique local experiences and hidden gems.",
    image: "🗺️",
    color: "from-blue-500 to-purple-600",
    tags: ["Next.js", "Tailwind CSS", "Shadcn UI", "Supabase", "Vercel"],
    problem:
      "Tourists often miss authentic local experiences and rely on generic tourist traps. Local guides and experience providers lacked a platform to showcase their unique offerings to the right audience.",
    solution:
      "Created a mobile-first platform that uses AI-powered recommendations and geolocation to connect travelers with curated local experiences, complete with booking system and real-time chat.",
    features: [
      "AI-powered personalized experience recommendations",
      "Real-time geolocation-based discovery",
      "Integrated booking and payment system",
      "Live chat between tourists and local guides",
      "Augmented reality city exploration features",
      "Social sharing and review system",
    ],
    results: [
      "Connected 10,000+ tourists with local experiences",
      "Generated $2M+ in bookings for local providers",
      "Achieved 4.8/5 average user rating",
      "Expanded to 25+ cities across 8 countries",
    ],
    tech: ["Next.js", "Tailwind CSS", "Shadcn UI", "Supabase", "Vercel"],
  },
  {
    id: 3,
    title: "Shibam - Premium Furniture & Marble Showcase",
    category: "E-commerce & Design",
    description:
      "An elegant e-commerce platform showcasing premium furniture and marble collections.",
    image: "🏛️",
    color: "from-gray-600 to-stone-700",
    tags: ["Next.js", "Tailwind CSS", "Shadcn UI", "Supabase", "Vercel"],
    problem:
      "High-end furniture and marble retailers struggled to showcase the true quality and craftsmanship of their products online. Customers couldn't visualize how pieces would look in their spaces, leading to high return rates.",
    solution:
      "Built a premium e-commerce platform with 3D product visualization, AR room placement, and virtual showroom experiences. Integrated with inventory management and custom quote systems.",
    features: [
      "360° product visualization with zoom capabilities",
      "AR-powered room placement and sizing",
      "Virtual showroom tours with VR support",
      "Custom quote system for bulk orders",
      "Material sample request and tracking",
      "Interior designer collaboration tools",
    ],
    results: [
      "Reduced product returns by 45%",
      "Increased average order value by 80%",
      "Generated 200+ high-value custom quotes monthly",
      "Improved customer satisfaction scores to 4.9/5",
    ],
    tech: ["Next.js", "Tailwind CSS", "Shadcn UI", "Supabase", "Vercel"],
  },
];
