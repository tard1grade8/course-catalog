import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Course Catalog",
  description: "A course catalog for Advanced Web Technologies.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
