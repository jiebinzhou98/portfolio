"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const links = [
  {href: "/", label: "Home"},
  {href: "/projects", label: "Projects"},
  {href: "/about", label: "About"},
]

function NavItem({href, label, onClick}: {href: string; label: string; onClick?: () => void}) {
  const pathname = usePathname()
  const isActive = pathname === href;
  return (
    <Link 
      href = {href}
      onClick={onClick}
      className={`text-sm transition hover:opacity-90 ${isActive ? "font-semibold text-slate-900 dark:text-slate-100" : "text-slate-600 dark:text-slate-300"}`}
      >
      {label}
      </Link>
  )
}

export default function Header(){
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {document.body.style.overflow = "";}
  }, [open])

  return (
    <header className={`sticky top-0 z-40 bg-white/70 backdrop-blur dark:bg-slate-950/70 ${scrolled ? "border-b border-slate-200 dark:border-slate-800" : ""}`}
    >
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <Link href="/" className="font-semibold tracking-tight">Jiebin Zhou</Link>

        <nav className="hidden items-center gap-5 sm:flex">
          {links.map(l => <NavItem key={l.href} href={l.href} label={l.label} />)}

          <a 
            href="/JiebinZhou_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-slate-600 transition hover:opacity-90 dark:text-slate-300"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  )
}