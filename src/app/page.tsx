import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-16">
      <header className="space-y-5">
        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          Hi, I’m <span className="underline decoration-slate-300 dark:decoration-slate-700">____</span>
        </h1>

        <p className="text-lg text-slate-700 dark:text-slate-300">
          Recent graduate in Software Engineering Technology, seeking a junior full-stack developer role.
          Experienced in building web apps with <strong>Next.js</strong>, <strong>TypeScript</strong>, and <strong>React</strong>.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90 dark:bg-white dark:text-slate-900"
          >
            See Projects
          </Link>
          <a
            href="/JiebinZhou_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            Download Resume
          </a>
          <a
            href="mailto:your.email@example.com"
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            Contact
          </a>
        </div>
      </header>

      {/* 卖点/标签（先放 4 条，后面可换成项目预览） */}
      <section className="mt-10 grid gap-3 sm:grid-cols-2">
        {[
          "PWA-ready, mobile-first",
          "Supabase + RLS",
          "Shadcn/ui + Tailwind",
          "AI / RAG demo experience",
        ].map((item) => (
          <div
            key={item}
            className="rounded-xl border border-slate-200 p-4 text-sm text-slate-700 dark:border-slate-800 dark:text-slate-200"
          >
            {item}
          </div>
        ))}
      </section>
    </main>
  );
}
