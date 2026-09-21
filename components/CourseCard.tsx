import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
      href={`/courses/${id}`}>
      <Card className="hover:shadow-md hover:border-blue-300 h-full flex flex-col justify-between dark:hover:border-blue-500 transition dark:bg-slate-900 dark:border-slate-800">
        <CardHeader>
          <CardTitle className="text-lg dark:text-slate-100">{title}</CardTitle>
        </CardHeader>
        <CardContent  className="flex flex-col gap-3">
          {isElective && (
            <span className="w-fit text-xs bg-yellow-100 dark:bg-yellow-900/40 dark:text-yellow-300 text-yellow-800 px-2 py-0.5 rounded">
              Elective
            </span>
          )}
        
          <p className="text-gray-600 dark:text-slate-400 text-sm">{description}</p>
        
          <div className="mt-4 flex items-center justify-between text-sm text-gray-500 dark:text-slate-400">
            <span>Credits: {credits}</span>
            <Button variant="ghost" size="sm" className="flex items-center gap-1 dark:hover:bg-slate-800 dark:text-slate-300">
              Likes: {likes}
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}