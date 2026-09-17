## Implementation details
Framework & Routing: Implemented App Router with dynamic routing (`/courses/[id]`) using `generateStaticParams` for Static Site Generation (SSG).
Components: Designed Server Components (`CourseCard`) for data display and Client Components (`LikeButton`) for local state management (`useState`).
Error Handling & Loading: Integrated `loading.tsx` for fallback states during data fetching and `not-found.tsx` for invalid course IDs.
Layout & Navigation: Created a global `layout.tsx` featuring responsive cross-page navigation.

## Running locally
Run the development server:
```bash
npm run dev
```
Build for production
```bash
npm run build 
```