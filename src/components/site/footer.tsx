import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="mx-auto max-w-5xl px-6 py-6 flex items-center justify-between text-sm text-muted-foreground">

        <p>© {new Date().getFullYear()} Jiebin Zhou</p>

        <div className="flex items-center gap-4">

          <Link
            href="https://github.com/jiebinzhou98"
            target="_blank"
            className="hover:text-foreground"
          >
            <Github size={18} />
          </Link>

          <Link
            href="https://www.linkedin.com/in/jiebin-zhou-5897911a3/"
            target="_blank"
            className="hover:text-foreground"
          >
            <Linkedin size={18} />
          </Link>

          <Link
            href="mailto:benzhou98@outlook.com"
            className="hover:text-foreground"
          >
            <Mail size={18} />
          </Link>

        </div>

      </div>
    </footer>
  )
}