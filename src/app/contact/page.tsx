import Container from "@/components/site/container";
import SectionTitle from "@/components/site/section-title";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <Container>
      <section className="py-12 md:py-16">
        <SectionTitle
          title="Contact"
          subtitle="Want to chat? Send me a message."
        />

        <Card className="max-w-2xl">
          <CardContent className="pt-6 space-y-4">
            {/* This is static for now — we can wire it to EmailJS / Resend later */}
            <div className="grid md:grid-cols-2 gap-3">
              <Input placeholder="Your name" />
              <Input type="email" placeholder="Your email" />
            </div>
            <Input placeholder="Subject" />
            <Textarea rows={6} placeholder="Your message..." />
            <Button className="w-full md:w-fit">Send</Button>

            <p className="text-sm text-muted-foreground">
              Or email me directly:{" "}
              <a className="underline" href="mailto:benzhou98@outlook.com">
                benzhou98@outlook.com
              </a>
            </p>
          </CardContent>
        </Card>
      </section>
    </Container>
  );
}
