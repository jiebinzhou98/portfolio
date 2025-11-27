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

          <Card className="mt-6 border-muted/40 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <CardContent className="pt-6">
              <div className="prose prose-neutral dark:prose-invert max-w-2xl leading-relaxed">
                <p>
                  I’m <strong>Ben Zhou</strong>, a developer based in Toronto.
                  Over the last little while I’ve been teaching myself how to
                  design and ship real products — not just tutorial apps.
                </p>

                <p>
                  I enjoy the mix of frontend and full-stack work: designing
                  interfaces, wiring up APIs, and making sure everything feels
                  fast and intentional. My recent projects include a
                  Notion-style notes app, an expense tracker, and an iOS
                  restaurant finder.
                </p>

                <p>
                  Right now I’m looking for opportunities where I can keep
                  growing as a builder: collaborating with a team, owning
                  features end-to-end, and learning from production codebases.
                </p>
              </div>

              <Separator className="my-8" />

              <h3 className="text-lg font-semibold mb-3">Core skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "React",
                  "TypeScript",
                  "Tailwind CSS",
                  "shadcn/ui",
                  "Supabase",
                  "Postgres",
                  "SwiftUI",
                  "iOS development",
                  "Git & GitHub",
                ].map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-3 py-1 rounded-full"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </FadeIn>
    </Container>
  );
}
