import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card
      className="
        group relative overflow-hidden h-full
        bg-card border border-border/40

        transition-all duration-300
        hover:-translate-y-1 hover:scale-[1.01]

        hover:border-primary/50
        hover:shadow-xl hover:shadow-primary/10

        dark:bg-neutral-900/60
        dark:hover:bg-neutral-900/80
        dark:hover:border-primary/50
        dark:hover:shadow-primary/20
      "
    >
      {/* hover glow */}
      <div
        className="
          absolute inset-0 pointer-events-none opacity-0
          group-hover:opacity-40 transition-opacity duration-300
          bg-linear-to-br from-primary/20 via-transparent to-secondary/20
        "
      />

      <CardHeader className="relative">
        <CardTitle className="text-xl md:text-2xl font-semibold flex items-center justify-between gap-2">
          {project.title}

          <span className="text-xs font-normal text-muted-foreground transition-transform group-hover:translate-x-1">
            {/* View → */}
          </span>
        </CardTitle>
      </CardHeader>

      <CardContent className="relative flex flex-col gap-4 h-full">
        <p className="text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <Badge
              key={t}
              variant="secondary"
              className="rounded-full px-3 py-1 text-xs"
            >
              {t}
            </Badge>
          ))}
        </div>

        {/* push buttons to bottom */}
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.href && (
            <Button asChild size="sm">
              <a href={project.href} target="_blank" rel="noreferrer">
                Live Demo
              </a>
            </Button>
          )}

          {project.github && (
            <Button asChild variant="outline" size="sm">
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}