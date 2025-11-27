"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./container";
import ThemeToggle from "./theme-toggle";
import { Button } from "@/components/ui/button";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/80 backdrop-blur-lg supports-backdrop-filter:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-semibold tracking-tight text-lg hover:opacity-80 transition-opacity"
          >
            Jiebin Zhou
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Button
                  key={item.href}
                  asChild
                  size="sm"
                  variant={active ? "secondary" : "ghost"}
                  className={`rounded-lg px-3 transition-all duration-150 ${
                    active ? "font-medium" : "font-normal"
                  }`}
                >
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              asChild
              size="sm"
              className="hidden md:inline-flex rounded-lg px-4 transition-transform duration-150 hover:-translate-y-0.5"
            >
              <Link href="/contact">Let&apos;s Talk</Link>
            </Button>
          </div>
        </div>
      </Container>

      {/* Mobile nav */}
      <div className="border-t md:hidden bg-background/80 backdrop-blur">
        <Container>
          <nav className="flex items-center justify-between py-3 px-1 text-sm">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-2 transition-colors ${
                    active
                      ? "font-semibold text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </Container>
      </div>
    </header>
  );
}
