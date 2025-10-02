import { projects } from "@/libs/projects"
import ProjectCard from "@/components/project-card"

export default function Projects() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Projects</h1>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map(p => (
          <ProjectCard key={p.slug} project={p}/>
        ))}
      </div>
    </main>
  )
}