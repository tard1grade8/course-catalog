"use client";
import { useState } from "react";
import type { Course } from "@/lib/courses";

const API = process.env.NEXT_PUBLIC_API_URL;

type LikeButtonProps = {
  courseId: string;
  initialLikes: number; 
}; 

export default function LikeButton({ courseId, initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState<number>(initialLikes);
  const [failed, setFailed] = useState(false);

  async function handleClick() {
    setFailed(false);
    try {
      const res = await fetch(`${API}/courses/${courseId}/like`, {
        method: "POST",
      });

      if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
      }

      const updatedCourse: Course = await res.json();
      setLikes(updatedCourse.likes);
    } catch (error) {
      setFailed(true);
    }
  }

  return ( 
    <div> 
      <button 
        onClick={handleClick} 
        className="rounded-md border border-slate-300 px-3 py-1" 
      > 
        ❤ {likes} 
      </button> 
      {failed && <p className="text-red-600">Failed to like the course</p>} 
    </div>
  ); 
}