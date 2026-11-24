import "server-only";
import { cookies } from "next/headers";

const COOKIE = "session";

// The token is stored in an httpOnly cookie: the page's JavaScript can't read it.
export async function saveToken(token: string, maxAgeSeconds: number) {
  (await cookies()).set(COOKIE, token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: maxAgeSeconds,
  });
}

export async function readToken() {
  return (await cookies()).get(COOKIE)?.value;
}

export async function deleteSession() {
  (await cookies()).delete(COOKIE);
}