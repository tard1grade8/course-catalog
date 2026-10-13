## Implementation details
- Framework & Routing: Implemented App Router with dynamic routing (`/courses/[id]`) using `generateStaticParams` for Static Site Generation (SSG).
- Components: Designed Server Components (`CourseCard`) for data display and Client Components (`LikeButton`) for local state management (`useState`).
- Error Handling & Loading: Integrated `loading.tsx` for fallback states during data fetching and `not-found.tsx` for invalid course IDs.
- Layout & Navigation: Created a global `layout.tsx` featuring responsive cross-page navigation.

## Styling
- Integrated `shadcn/ui` (`Card`, `Button`) into `CourseCard` component.
- Implemented responsive grid layout (`1 / 2 / 3 / 4` columns) for the course catalog.
- Styled global navigation layout and added system-based dark mode support (`dark:` styles).

## Running locally
Run the development server:
```bash
npm run dev
```
Build for production:
```bash
npm run build 
```

- The `generateStaticParams` function was removed from `app/courses/[id]/page.tsx` because the list of courses is now stored and dynamically managed on the FastAPI backend, rather than being statically generated during the application build process.

## Breakage Journal

### Breakage 1: Remove CORS entirely
- **What I did**: Commented out the whole `app.add_middleware(CORSMiddleware, ...)` block in `main.py`.
- **Console**: Access to fetch at 'http://localhost:8001/courses' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
- **Network**: GET `/courses` has CORS error (red entry, 200 in backend logs). POST `/like` returns 200 OK and updates state on server. Form submission: `OPTIONS /enrollments` returns 405 Method Not Allowed, `POST` is not sent.
- **Cause**: Without `CORSMiddleware`, FastAPI does not handle preflight `OPTIONS` requests or return CORS headers.
- **How I found it**: Step 4 of the algorithm: `OPTIONS` returned status 405.

### Breakage 2: A trailing slash in allow_origins
- **What I did**: Changed `allow_origins` to `["http://localhost:3000/"]` in `main.py`.
- **Console**: Access to fetch at 'http://localhost:8001/courses' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
- **Network**: GET `/courses` has CORS error. Form submission: `OPTIONS /enrollments` returns 400 Bad Request, `POST` is not sent.
- **Cause**: Origin header sent by browser is `http://localhost:3000` (without trailing slash), so string matching failed.
- **How I found it**: Step 3 & 4 of the algorithm: `OPTIONS` returned 400 because origin was disallowed.

### Breakage 3: Remove allow_methods
- **What I did**: Removed `allow_methods=["*"]` line entirely from `add_middleware` in `main.py`.
- **Console**: Response to preflight request doesn't pass access control check: It does not have HTTP ok status.
- **Network**: GET `/courses` and POST `/like` work (simple requests). Form submission: `OPTIONS /enrollments` returns 400 Bad Request, `POST` is not sent.
- **Cause**: Default allowed methods list does not include `POST` for preflight checks.
- **How I found it**: Step 4 of the algorithm: `OPTIONS` returned 400 Bad Request.

### Breakage 4: A different origin
- **What I did**: Opened frontend at `http://127.0.0.1:3000/filter` while `allow_origins` contains `http://localhost:3000` (added `allowedDevOrigins: ["127.0.0.1"]` to `next.config.ts` during test).
- **Console**: Access to fetch at 'http://localhost:8001/courses' from origin 'http://127.0.0.1:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
- **Network**: Requests failed with CORS error.
- **Cause**: Browser treats `localhost` and `127.0.0.1` as different origins.
- **How I found it**: Step 3 of the algorithm: `Access-Control-Allow-Origin` header did not match the page's origin.

### Breakage 5: Bug in backend pretending to be CORS
- **What I did**: Replaced `p["offset"]` with `p["ofset"]` in `list_courses` in `main.py`.
- **Console**: Access to fetch at 'http://localhost:8001/courses' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
- **Network**: GET `/courses` shows CORS error (red line).
- **Cause**: Unhandled Python `KeyError` exception resulted in a 500 status code response generated outside of CORS middleware, omitting CORS headers.
- **How I found it**: Step 2 & 5 of the algorithm: Checked FastAPI terminal and saw a 500 error with Python traceback (`KeyError: 'ofset'`).