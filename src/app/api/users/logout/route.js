import { cookies } from "next/headers";

export async function GET() {
  cookies().set({ name: "token", value: "", httpOnly: true });
  return new Response(JSON.stringify({ message: "Logout Successful" }));
}
