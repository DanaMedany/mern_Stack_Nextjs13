import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export function middleware(request) {
  const path = request.nextUrl.pathname;
  console.log(path);
  const isPublic = path === "/login" || path === "/signup";
  const token = request.cookies.get("token")?.value || "";

  if (isPublic && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
  if (!isPublic && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

export const config = {
  matcher: [
    // Matches all requests starting with
    "/",
    "/login",
    "/signup",
    "/profile",
  ],
};
