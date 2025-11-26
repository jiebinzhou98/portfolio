import Container from "@/components/site/container";
import SectionTitle from "@/components/site/section-title";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  return (
    <Container>
      <section className="py-12 md:py-20">
        <SectionTitle
          title="About Me"
          subtitle="A little more about who I am and what I build."
        />

        <Card className="mt-6 border-muted/40 bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/40">
          <CardContent className="pt-6">

            {/* Main Text */}
            <div className="prose prose-neutral dark:prose-invert max-w-none leading-relaxed">
              <p>
                I’m <strong>Ben Zhou</strong>, a developer based in Toronto with a
                growing focus on frontend and full-stack development. I’m early in
                my career, but I’ve already built a number of practical apps that
                I use daily — from productivity tools to iOS utilities.
              </p>

              <p>
                I enjoy crafting clean UI, building smooth UX flows, and turning
                ideas into working products quickly. My comfort stack includes
                <strong> Next.js</strong>, <strong>Supabase</strong>,
                <strong> Tailwind CSS</strong>, and <strong>shadcn/ui</strong>, 
                with experience also in SwiftUI for iOS.
              </p>

              <p>
                My goal is simple: keep improving through building — one project
                at a time — while preparing for full-time opportunities in
                frontend, full-stack, or mobile engineering.
              </p>
            </div>

            <Separator className="my-8" />

            {/* Skills */}
            <h3 className="text-lg font-semibold mb-3">Core Skills</h3>
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
                "iOS Development",
                "Git",
              ].map((skill) => (
                <Badge key={skill} variant="secondary" className="px-3 py-1 rounded-full">
                  {skill}
                </Badge>
              ))}
            </div>

          </CardContent>
        </Card>
      </section>
    </Container>
  );
}
