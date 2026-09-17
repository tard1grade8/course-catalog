"use client";
import { useState } from "react";

type LikeButtonProps = { 
  initialLikes: number; 
}; 

export default function LikeButton({ initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState<number>(initialLikes);

  return (
    <button
      onClick={() => setLikes((prev) => prev + 1)}
        className="flex items-center gap-2 border px-3 py-1.5 rounded-md hover:bg-gray-100 transition"
        >
            <span>❤</span>
            <span className="font-semibold">{likes}</span>
        </button>
    );
}