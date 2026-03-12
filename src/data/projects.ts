export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  href?: string; // live demo
  github?: string;
};

export const projects: Project[] = [
  {
    slug: "second-brain",
    title: "Second Brain",
    description:
      "A personal knowledge management tool for organizing ideas, tools, and resources with tagging and structured browsing.",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    href: "https://second-brain-five-iota.vercel.app/",   // deployed site
    github: "https://github.com/jiebinzhou98/second-brain",
  },
  {
    slug: "time-calculator",
    title: "Time Calculator",
    description:
      "A small utility web app for calculating time durations and differences with a clean and simple interface.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    href: "https://time-calculator-three-sand.vercel.app/", // deployed site
    github: "https://github.com/jiebinzhou98/time-calculator",
  },
];