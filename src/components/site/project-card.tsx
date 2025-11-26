import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group relative overflow-hidden border border-muted/60 bg-background/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/40">
      {/* glow layer */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/10 via-transparent to-secondary/15" />

      <CardHeader className="relative">
        <CardTitle className="text-xl md:text-2xl flex items-center justify-between gap-2">
          <span>{project.title}</span>
          <span className="text-xs font-normal text-muted-foreground group-hover:translate-x-1 transition-transform">
            View →
          </span>
        </CardTitle>
      </CardHeader>

      <CardContent className="relative flex flex-col gap-4">
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

        <div className="flex flex-wrap gap-2 pt-1">
          {project.href && (
            <Button
              asChild
              size="sm"
              className="rounded-xl transition-transform hover:-translate-y-0.5"
            >
              <a href={project.href} target="_blank" rel="noreferrer">
                Live demo
              </a>
            </Button>
          )}
          {project.github && (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="rounded-xl transition-transform hover:-translate-y-0.5"
            >
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
