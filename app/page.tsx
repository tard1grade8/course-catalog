import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-16">
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
        Advanced Web Technologies
      </p>
      <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
        Course Catalog
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
        Welcome to a catalog of courses created for the Advanced Web
        Technologies course.
      </p>
      <Link
        className="mt-8 w-fit rounded-md bg-blue-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
        href="/courses"
      >
        Browse courses
      </Link>
    </main>
  );
}
