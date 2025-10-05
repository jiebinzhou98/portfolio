import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container mx-auto max-w-xl px-4 py-16 text-center">
      <h1 className="text-3xl font-bold">Proejct not found</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">
        Sorry, thsi project doesn't exist or was moved.
      </p>

      <div className="mt-6">
        <Link
          href={"/projects"}
          className="rounded-lg border border-slate-300 px-4 py-2 text-sm hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800 "
        >
          ← Back to projects
        </Link>
      </div>
    </main>
  )
}