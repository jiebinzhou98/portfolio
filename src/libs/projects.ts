export type Project = {
  slug: string;
  title: string;
  summary: string;
  tech: string[];
  year?: string;
  link?: string;
}

export const projects: Project[] = [
  {
    slug: "notion-lite",
    title: "Notion Lite",
    summary: "A note taking PWA built with Next.js, supabase, and TipTap.",
    tech: ["Next.js", "Supabase", "PWA"],
    year: "2025",
    link: "https://notion-lite.vercel.app",
  },
    {
    slug: "taskpilot",
    title: "TaskPilot",
    summary: "A lightweight task manager with localStorage and charts.",
    tech: ["Next.js", "PWA", "Charts"],
    year: "2025",
  },
]