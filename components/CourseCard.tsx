import Link from "next/link";

type CourseCardProps = {
  id: string;
  title: string;
  description: string;
  credits: number;
  isElective: boolean;
  likes: number;
};

export default function CourseCard({
  id,
  title,
  description,
  credits,
  isElective,
  likes,
}: CourseCardProps) {
  return (
    <Link
      href={`/courses/${id}`}
      className="block p-5 border border-gray-200 rounded-lg shadow-sm hover:border-blue-500 hover:shadow-md transition"
    >
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        {isElective && (
          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">
            Elective
          </span>
        )}
      </div>
      
      <p className="text-gray-600 text-sm">{description}</p>
      
      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        <span>Credits: {credits}</span>
        <span>Likes: {likes}</span>
      </div>
    </Link>
  );
}