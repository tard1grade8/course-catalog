import Link from "next/link";

export default function HomePage() {
  return (
    <main className="p-8">
      <p className="text-sm font-semibold text-blue-600">
        Advanced Web Technologies
      </p>
      
      <h1 className="text-3xl font-bold mt-2">
        Course Catalog
      </h1>
      
      <p className="text-gray-600 mt-4">
        Welcome to a catalog of courses created for the Advanced Web Technologies course.
      </p>

      <div className="mt-6">
        <Link
          href="/courses"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded"
        >
          Browse courses
        </Link>
      </div>
    </main>
  );
}