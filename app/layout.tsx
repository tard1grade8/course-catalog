import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Course Catalog",
  description: "A course catalog for Advanced Web Technologies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-gray-200">
          <nav className="flex gap-6 p-4 max-w-4xl mx-auto font-medium text-sm">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <Link href="/courses" className="hover:text-blue-600">
              Courses
            </Link>
            <Link href="/about" className="hover:text-blue-600">
              About
            </Link>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}