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
    slug: "notion-lite",
    title: "Notion Lite Notes",
    description:
      "A lightweight Notion-style note app with TipTap editor, PWA support, offline caching, and Supabase auth.",
    tags: ["Next.js", "Supabase", "TipTap", "PWA"],
    github: "https://github.com/yourname/notion-lite",
  },
  {
    slug: "taskpilot",
    title: "TaskPilot",
    description:
      "Personal task + expense tracker with priority, dark mode, and clean mobile-first UI.",
    tags: ["Next.js", "Postgres", "Shadcn UI"],
    github: "https://github.com/yourname/taskpilot",
  },
  {
    slug: "autofoodfinder",
    title: "AutoFoodFinder (iOS)",
    description:
      "SwiftUI app to discover nearby restaurants using MapKit and CoreLocation.",
    tags: ["SwiftUI", "MapKit", "iOS"],
    github: "https://github.com/yourname/autofoodfinder",
  },
  {
    slug: "excel-webapp",
    title: "Excel-to-Web App",
    description:
      "Browser-only data app that imports Excel/CSV/PDF and enables structured editing + export.",
    tags: ["React", "TypeScript", "Shadcn UI"],
    github: "https://github.com/yourname/excel-webapp",
  },
];
