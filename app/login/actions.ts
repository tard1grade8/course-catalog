"use server";

import { redirect } from "next/navigation";
import { API_URL } from "@/lib/api";
import { saveToken } from "@/lib/session";

export type LoginState = {
  error: string | null;
  email: string;
};

export async function login(
  _prev: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  const body = new URLSearchParams({
    username: email,
    password,
  });

  let accessToken: string;
  try {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      body,
      cache: "no-store",
    });

    if (!res.ok) {
      return { error: "Invalid e-mail or password", email };
    }

    const data = await res.json();
    accessToken = data.access_token;
  } catch {
    return { error: "Invalid e-mail or password", email };
  }

  await saveToken(accessToken, 900);
  redirect("/account");
}