import Link from "next/link";

export default function CourseNotFound() {
  return (
    <main className="p-8 space-y-4">
      <h1 className="text-2xl font-bold text-red-600">Course not found</h1>
      <p className="text-gray-600">The requested course does not exist.</p>
      <div>
        <Link 
          href="/courses" 
          className="inline-block bg-gray-200 px-4 py-2 rounded text-sm hover:bg-gray-300"
        >
          Back to all courses
        </Link>
      </div>
    </main>
  );
}