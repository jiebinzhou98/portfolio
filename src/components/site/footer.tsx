import Container from "./container";

export default function Footer() {
  return (
    <footer className="border-t py-8 mt-16">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Ben Zhou</p>
          <p>Built with Next.js + Tailwind + shadcn/ui</p>
        </div>
      </Container>
    </footer>
  );
}
