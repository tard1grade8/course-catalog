import { getCourse, getCourses } from "../../../lib/courses";
import { notFound } from "next/navigation";
import Link from "next/link";
import LikeButton from "@/components/LikeButton";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const courses = await getCourses();
  return courses.map((course) => ({
    id: course.id,
  }));
}

export default async function CourseDetailPage({ params }: Props) {
  const { id } = await params;
  const course = await getCourse(id);

  if (!course) {
    notFound();
  }

  return (
    <main className="p-8 max-w-2xl">
      <Link 
        href="/courses" 
        className="text-sm text-blue-600 hover:underline mb-4 inline-block"
      >
        ← Back to courses
      </Link>

      <div className="flex items-center justify-between mt-2">
        <h1 className="text-3xl font-bold">{course.title}</h1>
        {course.isElective && (
          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded font-semibold">
            Elective
          </span>
        )}
      </div>

      <p className="text-gray-600 mt-4">{course.description}</p>
      
      <p className="mt-4 font-medium text-gray-700">
        Credits: {course.credits}
      </p>

      <div className="mt-6 flex items-center justify-between border-t pt-4">
        <span className="text-sm text-gray-600">Like this course:</span>
        <LikeButton initialLikes={course.likes} />
      </div>
    </main>
  );
}