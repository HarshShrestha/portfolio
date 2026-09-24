# Content — single source of truth (from Harsh's CV)

`src/data/profile.ts` must contain EXACTLY this data. No invented claims. Links marked
TODO: replace with real repo URLs before deploy (P7 task).

```ts
export type Project = {
  slug: string; title: string; tagline: string;
  techStack: string[]; highlights: string[];
  accent: "emerald" | "violet" | "amber";
  github?: string; live?: string; order: number;
};

export const profile = {
  name: "Harsh Kumar Shrestha",
  role: "Full-Stack Developer",
  // typewriter rotation — derived from CV summary/skills, allowed verbatim:
  roles: ["Full-Stack Developer", "Agentic AI Builder", "Mathematics & Computing"],
  location: "Ranchi, Jharkhand, India",
  email: "harsh.work4365@gmail.com",
  phone: "+91 8092614546",
  socials: {
    github: "https://github.com/HarshShrestha",
    linkedin: "https://linkedin.com/in/harsh-kumar-shrestha",
    leetcode: "https://leetcode.com/harshshrestha",
  },
  summary:
    "Driven Full-Stack Developer skilled in Python, Node.js, and React.js. Experienced in " +
    "building scalable microservices, gRPC APIs, and integrating Agentic AI solutions. " +
    "Proficient in PostgreSQL, Redis, Docker, and system design, with a strong focus on " +
    "writing clean, testable code.",
  education: {
    school: "Birla Institute of Technology, Mesra",
    degree: "Integrated M.Sc. — Mathematics & Computing",
    grade: "GPA 9.10 / 10.00",
    period: "August 2023 — Expected May 2028",
    location: "Ranchi, Jharkhand",
    coursework: ["Data Structures & Algorithms", "Database Management Systems",
      "Operating Systems", "System Design", "Web Technologies"],
  },
  certifications: [
    { title: "Linux & SQL", issuer: "Google" },
    { title: "Data Analysis with Python", issuer: "Online Certification" },
  ],
};

export const stats = [
  { value: 70, suffix: "%", label: "user queries automated with LLMs" },
  { value: 10000, suffix: "+", label: "concurrent users supported" },
  { value: 5000, suffix: "+", label: "daily transactions processed" },
  { value: 9.1, decimals: 1, suffix: "", label: "GPA at BIT Mesra" },
];

export const projects: Project[] = [
  {
    slug: "agentic-ai-support", order: 1, accent: "emerald",
    title: "Agentic AI Customer Support Platform",
    tagline: "LLM-powered support platform automating 70% of user queries.",
    techStack: ["React.js", "Node.js", "Python", "LLMs", "Redis", "PostgreSQL", "gRPC"],
    highlights: [
      "Built a full-stack Agentic AI platform using React.js and Node.js, automating 70% of user queries via LLMs.",
      "Engineered Python backend microservices to process LLM prompts, reducing response latency by 50ms using Redis caching.",
      "Developed RESTful and gRPC APIs for frontend-backend communication, ensuring 99.9% uptime and persistent data in PostgreSQL.",
    ],
    github: "https://github.com/HarshShrestha", // TODO: real repo
  },
  {
    slug: "realtime-collab-tool", order: 2, accent: "violet",
    title: "Real-Time Event-Driven Collaboration Tool",
    tagline: "Event-driven collaboration tool supporting 10,000 concurrent users.",
    techStack: ["Node.js", "React.js", "WebSockets", "Redis", "Docker", "gRPC"],
    highlights: [
      "Built an event-driven collaboration tool supporting 10,000 concurrent users using Node.js, React.js, and WebSockets.",
      "Designed microservices architecture with gRPC APIs, improving inter-service communication speed by 40% compared to REST.",
      "Integrated Redis for session management and PostgreSQL for data storage, ensuring scalable and testable code.",
    ],
    github: "https://github.com/HarshShrestha", // TODO: real repo
  },
  {
    slug: "cloud-ecommerce-backend", order: 3, accent: "amber",
    title: "Cloud-Native E-Commerce Backend",
    tagline: "Scalable e-commerce backend processing 5,000+ daily transactions.",
    techStack: ["Python", "PostgreSQL", "Docker", "CI/CD", "Redis"],
    highlights: [
      "Developed a scalable Python backend processing 5,000+ daily transactions, utilizing PostgreSQL for data persistence.",
      "Containerized backend services using Docker and automated deployments via CI/CD pipelines, reducing release time by 30%.",
      "Optimized database load by 40% by implementing Redis caching and enterprise security protocols.",
    ],
    github: "https://github.com/HarshShrestha", // TODO: real repo
  },
];

export const skills = [
  { category: "Languages", items: ["Python", "JavaScript/TypeScript", "Java", "C++", "SQL"] },
  { category: "Frontend", items: ["React.js", "HTML/CSS"] },
  { category: "Backend", items: ["Node.js", "Express.js", "REST APIs", "gRPC"] },
  { category: "Architecture", items: ["Event-Driven Systems", "Microservices", "System Design"] },
  { category: "Databases & Caching", items: ["PostgreSQL", "MongoDB", "Redis", "WebSockets"] },
  { category: "AI & DevOps", items: ["Agentic AI", "LLMs", "Docker", "CI/CD"] },
  { category: "CS Fundamentals", items: ["Data Structures & Algorithms", "OOP", "Unit Testing"] },
];
