import Container from "@/components/site/container";
import SectionTitle from "@/components/site/section-title";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/site/fade-in";

export default function ContactPage() {
  return (
    <Container>
      <FadeIn>
        <section className="py-16 md:py-20">
          <SectionTitle
            title="Contact"
            subtitle="Want to chat about an opportunity or a project? Feel free to reach out."
          />

          <div className="grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]">
            {/* Form */}
            <Card className="border-muted/40 bg-background/70 backdrop-blur supports-backdrop-filter:bg-background/60">
              <CardContent className="pt-6 space-y-4">
                {/* Static for now; later we can wire this to email */}
                <div className="grid md:grid-cols-2 gap-3">
                  <Input placeholder="Your name" />
                  <Input type="email" placeholder="Your email" />
                </div>
                <Input placeholder="Subject" />
                <Textarea rows={6} placeholder="Your message..." />
                <Button className="w-full md:w-fit rounded-xl px-6 transition-transform duration-150 hover:-translate-y-0.5">
                  Send message
                </Button>
              </CardContent>
            </Card>

            {/* Side info */}
            <div className="space-y-4 text-sm text-muted-foreground max-w-sm">
              <p>
                You can also email me directly at{" "}
                <a
                  className="underline underline-offset-4 hover:opacity-80"
                  href="mailto:benzhou98@outlook.com"
                >
                  benzhou98@outlook.com
                </a>
                .
              </p>
              <p>
                I’m currently open to junior roles in frontend, full-stack, or
                mobile development, as well as internship or contract
                opportunities.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>
    </Container>
  );
}
