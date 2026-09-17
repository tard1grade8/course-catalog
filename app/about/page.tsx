export default function AboutPage() {
  return (
    <main className="p-8 max-w-2xl">
      <p className="text-sm font-semibold uppercase text-blue-600">
        About the project
      </p>

      <h1 className="text-3xl font-bold mt-2">
        Course Catalog
      </h1>

      <div className="mt-4 space-y-3 text-gray-600">
        <p>
          Course Catalog is a small application for exploring available university courses.
        </p>
        <p>
          It is being built for the Advanced Web Technologies course with React, Next.js, and TypeScript.
        </p>
      </div>
    </main>
  );
}