import Container from "@/components/site/container";
import SectionTitle from "@/components/site/section-title";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/site/project-card";

export default function ProjectsPage() {
  return (
    <Container>
      <section className="py-12 md:py-16">
        <SectionTitle
          title="Projects"
          subtitle="Selected work and experiments."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </Container>
  );
}
