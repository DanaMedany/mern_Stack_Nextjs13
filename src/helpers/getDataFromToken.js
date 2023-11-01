import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export function getDataFromToken(request) {
  try {
    const token = request.cookies.get("token")?.value || "";
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    return decodedToken;
  } catch (error) {
    console.log(error);
  }
}
