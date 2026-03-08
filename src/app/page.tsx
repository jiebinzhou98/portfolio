import Link from "next/link";
import Container from "@/components/site/container";
import FadeIn from "@/components/site/fade-in";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

export default function HomePage() {
  return (
    <Container>
      <FadeIn>
        <section className="py-24">
          <div className="flex flex-col gap-6 max-w-2xl">

            <p className="text-sm text-muted-foreground">
              Full-stack Developer · Toronto, Canada
            </p>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hi, I’m Jiebin Zhou.
            </h1>

            <p className="text-lg text-muted-foreground">
              I build practical web applications using Next.js,
              TypeScript, and Supabase.
            </p>

            <div className="flex items-center gap-3 pt-4">
              <Button asChild size="lg">
                <Link href="/projects">View Projects</Link>
              </Button>

              <Button asChild variant="outline" size="lg">
                <Link href="/about">About Me</Link>
              </Button>

              <Link
                href="https://github.com/YOUR_GITHUB"
                target="_blank"
                className="p-3 border rounded-full hover:bg-muted"
              >
                <Github size={18} />
              </Link>

              <Link
                href="https://linkedin.com/in/YOUR_LINKEDIN"
                target="_blank"
                className="p-3 border rounded-full hover:bg-muted"
              >
                <Linkedin size={18} />
              </Link>

            </div>

          </div>
        </section>
      </FadeIn>
    </Container>
  );
}