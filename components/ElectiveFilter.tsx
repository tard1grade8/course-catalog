"use client";

import { useState } from "react";
import useSWR from "swr";
import type { Course } from "@/lib/courses";

const API = process.env.NEXT_PUBLIC_API_URL;

async function fetcher(url: string): Promise<Course[]> {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
    }
    return res.json();
}

export default function ElectiveFilter() {
    const [onlyElective, setOnlyElective] = useState(false);
    const query = onlyElective ? "?is_elective=true" : "";

    const { data, error, isLoading } = useSWR<Course[]>(`${API}/courses${query}`, fetcher);

    return (
    <div>
      <label className="flex items-center gap-2 mb-4 cursor-pointer font-medium text-gray-700">
        <input
          type="checkbox"
          checked={onlyElective}
          onChange={(e) => setOnlyElective(e.target.checked)}
          className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
        />
        Electives only
      </label>

      {error && <p className="text-red-500">Failed to load courses</p>}
      {isLoading && <p className="text-gray-500">Loading...</p>}

      {data && (
        <ul className="list-disc pl-6 space-y-1">
          {data.map((c) => (
            <li key={c.id}>
              {c.title} – {c.credits} cr.
              {c.isElective && " · elective"}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}