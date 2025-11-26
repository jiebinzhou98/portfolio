import Container from "@/components/site/container";
import SectionTitle from "@/components/site/section-title";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/site/project-card";
import FadeIn from "@/components/site/fade-in";

export default function ProjectsPage() {
  return (
    <Container>
      <FadeIn>
        <section className="py-12 md:py-16">
          <SectionTitle
            title="Projects"
            subtitle="Things I’ve built to learn new tools, solve real problems, or just satisfy my curiosity."
          />

          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project, i) => (
              <FadeIn key={project.slug} delay={0.06 * i}>
                <ProjectCard project={project} />
              </FadeIn>
            ))}
          </div>
        </section>
      </FadeIn>
    </Container>
  );
}
