"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./container";
import ThemeToggle from "./theme-toggle";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight transition-opacity hover:opacity-80"
          >
            My Portfolio
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {nav.map((item) => {
              const active = pathname === item.href;

              return (
                <Button
                  key={item.href}
                  asChild
                  size="sm"
                  variant={active ? "secondary" : "ghost"}
                  className={`rounded-lg px-3 transition-all duration-150 ${active ? "font-medium" : "font-normal"
                    }`}
                >
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />

            <Button
              asChild
              size="sm"
              className="hidden md:inline-flex rounded-lg px-4 transition-transform duration-150 hover:-translate-y-0.5"
            >
              <Link href="/contact">Let&apos;s Talk</Link>
            </Button>

            {/* Mobile dropdown menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="end"
                sideOffset={10}
                className="w-52 rounded-xl p-2 border shadow-sm md:hidden"
              >
                {nav.map((item) => {
                  const active = pathname === item.href;

                  return (
                    <DropdownMenuItem
                      key={item.href}
                      asChild
                      className={`rounded-xl px-3 py-3 text-base cursor-pointer ${active ? "bg-muted font-medium text-foreground" : ""
                        }`}
                    >
                      <Link href={item.href}>{item.label}</Link>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </Container>
    </header>
  );
}