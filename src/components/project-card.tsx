import Link from "next/link";
import type { Project } from "../libs/projects";

export default function ProjectCard({ project }: {project: Project}) {
  return (
    <div className="rounded border p-4">
      <h3 className="text-lg font-semibold">
        <Link href={`/project/${project.slug}`}>
          {project.title}
        </Link>
      </h3>
      <p className="text-sm text-slate-600">{project.summary}</p>
      <div className="mt-2 flex flex-wrap gap-2 text-xs text-slate-500">
        {project.tech.map(t => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </div>
  )
}