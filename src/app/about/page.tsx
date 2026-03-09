import Container from "@/components/site/container";
import SectionTitle from "@/components/site/section-title";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import FadeIn from "@/components/site/fade-in";

export default function AboutPage() {
  return (
    <Container>
      <FadeIn>
        <section className="py-16 md:py-20">
          <SectionTitle
            title="About me"
            subtitle="A quick snapshot of who I am and how I work."
          />

          <Card className="mt-6 border-muted/40 bg-background/70 backdrop-blur supports-backdrop-filter:bg-background/60">
            <CardContent className="pt-6">
              <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">

                {/* LEFT SIDE — ABOUT TEXT */}
                <div className="prose prose-neutral dark:prose-invert max-w-none leading-relaxed">

                  <p>
                    I’m Jiebin Zhou, a developer based in Toronto. I graduated from
                    Centennial College’s Software Engineering Technology program in 2025.
                  </p>

                  <p>
                    I enjoy building practical web applications and turning ideas into
                    small, useful products. My work focuses on clean interfaces, simple
                    user experiences, and connecting frontend applications with real
                    backend systems.
                  </p>

                  <p>
                    Some projects I’ve built include <b>Second Brain</b>, a personal
                    knowledge management tool for organizing ideas and resources;
                    <b> Notion Lite</b>, a lightweight note-taking app inspired by Notion;
                    and <b>Time Calculator</b>, a small utility web app for calculating
                    time durations.
                  </p>

                  <p>
                    I'm currently looking for opportunities where I can continue growing as
                    a developer — collaborating with a team, owning features end-to-end,
                    and learning from production codebases.
                  </p>

                </div>


                {/* RIGHT SIDE — SKILLS */}
                <div className="space-y-6 lg:sticky lg:top-24 h-fit">

                  <h3 className="text-lg font-semibold">Core skills</h3>

                  {/* Frontend */}
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Frontend</p>
                    <div className="flex flex-wrap gap-2">
                      {["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"].map(skill => (
                        <Badge key={skill} variant="secondary" className="px-3 py-1 rounded-full">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Backend */}
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Backend</p>
                    <div className="flex flex-wrap gap-2">
                      {["Supabase", "Postgres"].map(skill => (
                        <Badge key={skill} variant="secondary" className="px-3 py-1 rounded-full">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Tools */}
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Tools</p>
                    <div className="flex flex-wrap gap-2">
                      {["Git", "GitHub"].map(skill => (
                        <Badge key={skill} variant="secondary" className="px-3 py-1 rounded-full">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </CardContent>
          </Card>
        </section>
      </FadeIn>
    </Container>
  );
}
