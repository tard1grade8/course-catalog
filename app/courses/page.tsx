import { getCourses } from "../../lib/courses";;
import CourseCard from "@/components/CourseCard";

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Available Courses</h1>

      <div className="grid gap-4 sm:grid-cols-2">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            id={course.id}
            title={course.title}
            description={course.description}
            credits={course.credits}
            isElective={course.isElective}
            likes={course.likes}
          />
        ))}
      </div>
    </main>
  );
}