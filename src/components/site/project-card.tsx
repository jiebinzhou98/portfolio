import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group relative overflow-hidden border-muted/60 hover:border-foreground/20 transition-all hover:-translate-y-0.5 hover:shadow-md">
      {/* glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity
        bg-linear-to-br from-primary/10 via-transparent to-secondary/10" />

      <CardHeader>
        <CardTitle className="text-xl md:text-2xl">
          {project.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        <p className="text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <Badge key={t} variant="secondary" className="rounded-full px-3 py-1">
              {t}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 pt-1">
          {project.href && (
            <Button asChild size="sm" className="rounded-xl">
              <a href={project.href} target="_blank" rel="noreferrer">
                Live Demo
              </a>
            </Button>
          )}
          {project.github && (
            <Button asChild variant="outline" size="sm" className="rounded-xl">
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
