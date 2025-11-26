import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/site/navbar";
import Footer from "@/components/site/footer";
import ThemeProvider from "@/components/site/theme-provider";

export const metadata: Metadata = {
  title: "Jiebin Zhou | Portfolio",
  description: "Frontend / Full-stack developer portfolio.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
