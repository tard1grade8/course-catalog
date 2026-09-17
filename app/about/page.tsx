export default function AboutPage() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 py-16">
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
        About the project
      </p>
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">
        Course Catalog
      </h1>
      <div className="mt-6 space-y-4 text-lg leading-8 text-slate-600">
        <p>
          Course Catalog is a small application for exploring available
          university courses.
        </p>
        <p>
          It is being built for the Advanced Web Technologies course with
          React, Next.js, and TypeScript.
        </p>
      </div>
    </main>
  );
}
