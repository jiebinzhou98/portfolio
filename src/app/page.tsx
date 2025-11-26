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
            <div className="flex items-center gap-2">
              <Badge className="w-fit" variant="secondary">
                Frontend / Full-stack Developer
              </Badge>
              <Badge className="w-fit" variant="outline">
                Toronto, Canada
              </Badge>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
              Hi, I’m Ben. <br />
              I build useful, clean web apps.
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Early-career developer based in Toronto. I love building practical
              products with Next.js, Supabase, and modern UI systems.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-2xl px-7">
                <Link href="/projects">View Projects</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-2xl px-7">
                <Link href="/about">About Me</Link>
              </Button>
            </div>
          </div>
        </section>
      </FadeIn>



      {/* Featured Projects */}
      <FadeIn delay={0.2}>
        <section className="py-8 md:py-12">
          <SectionTitle
            title="Featured Projects"
            subtitle="A few things I’ve been building lately."
          />

          <div className="grid gap-4 md:grid-cols-2">
            {projects.slice(0, 4).map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>

          <div className="mt-6">
            <Button asChild variant="ghost">
              <Link href="/projects">See all projects →</Link>
            </Button>
          </div>
        </section>
      </FadeIn>
    </Container>
  );
}
