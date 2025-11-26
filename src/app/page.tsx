import Link from "next/link";
import Container from "@/components/site/container";
import SectionTitle from "@/components/site/section-title";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/site/project-card";
import FadeIn from "@/components/site/fade-in";

export default function HomePage() {
  return (
    <Container>
      {/* Hero */}
      <FadeIn>
        <section className="py-16 md:py-24">
          <div className="flex flex-col gap-7">
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="w-fit" variant="secondary">
                Frontend / Full-stack Developer
              </Badge>
              <Badge className="w-fit" variant="outline">
                Based in Toronto 🇨🇦
              </Badge>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              I build small, focused products{" "}
              <span className="text-primary">that people actually use.</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              I’m Ben, an early-career developer who enjoys turning ideas into
              clean, fast web apps. I work mostly with Next.js, TypeScript,
              Tailwind, shadcn/ui, and Supabase — plus the occasional SwiftUI
              project on iOS.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="rounded-2xl px-7 transition-transform hover:-translate-y-0.5"
              >
                <Link href="/projects">View my projects</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-2xl px-7 transition-transform hover:-translate-y-0.5"
              >
                <Link href="/about">More about me</Link>
              </Button>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Featured Projects */}
      <FadeIn delay={0.15}>
        <section className="py-8 md:py-12">
          <SectionTitle
            title="Featured work"
            subtitle="A selection of projects that show how I think and build."
          />

          <div className="grid gap-4 md:grid-cols-2">
            {projects.slice(0, 4).map((project, i) => (
              <FadeIn key={project.slug} delay={0.1 * i}>
                <ProjectCard project={project} />
              </FadeIn>
            ))}
          </div>

          <div className="mt-6">
            <Button asChild variant="ghost" className="px-0">
              <Link href="/projects">See all projects →</Link>
            </Button>
          </div>
        </section>
      </FadeIn>
    </Container>
  );
}
