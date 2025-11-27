import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/site/navbar";
import Footer from "@/components/site/footer";
import ThemeProvider from "@/components/site/theme-provider";

export const metadata: Metadata = {
  // 🔹 change this to your real deployed URL when you have it
  metadataBase: new URL("https://your-portfolio-domain.com"),

  title: {
    default: "Jiebin Zhou | Developer Portfolio",
    template: "%s | Jiebin Zhou",
  },
  description:
    "Portfolio of Jiebin (Ben) Zhou, a Toronto-based developer building clean, practical web and mobile apps with Next.js, TypeScript, Tailwind, shadcn/ui, Supabase, and SwiftUI.",
  keywords: [
    "Jiebin Zhou",
    "software developer",
    "frontend developer",
    "full-stack developer",
    "Next.js portfolio",
    "React",
    "TypeScript",
    "Toronto developer",
  ],
  authors: [{ name: "Jiebin (Ben) Zhou" }],
  creator: "Jiebin (Ben) Zhou",
  publisher: "Jiebin (Ben) Zhou",

  openGraph: {
    title: "Jiebin Zhou | Developer Portfolio",
    description:
      "Portfolio of Jiebin (Ben) Zhou, a Toronto-based frontend / full-stack developer building real, practical products with modern web tools.",
    url: "/",
    siteName: "Jiebin Zhou Portfolio",
    images: [
      {
        url: "/og-image.png", // 🔹 put this file into /public
        width: 1200,
        height: 630,
        alt: "Preview of Jiebin Zhou's developer portfolio website",
      },
    ],
    locale: "en_CA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Jiebin Zhou | Developer Portfolio",
    description:
      "Portfolio of Jiebin (Ben) Zhou, a Toronto-based frontend / full-stack developer.",
    images: ["/og-image.png"],
  },

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider>
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
