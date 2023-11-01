import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

connect();

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (email === "" || password === "") {
      return new Response(
        JSON.stringify({ error: "Please fill all fields", status: 400 })
      );
    }

    // check if user is exist
    let user = await User.findOne({ email });
    if (!user) {
      return new Response(
        JSON.stringify({ error: "User doesn't exist ", status: 400 })
      );
    }

    // check if password in correct
    const comparPassword = await bcrypt.compare(password, user.password);
    if (!comparPassword) {
      return new Response(
        JSON.stringify({
          error: "email or password are incorrect ",
          status: 400,
        })
      );
    }

    // create user token
    const userToken = jwt.sign(
      {
        id: user._id,
        email: user.email,
        password: user.password,
        username: user.username,
      },
      process.env.TOKEN_SECRET,
      { expiresIn: "1d" }
    );
    cookies().set({
      name: "token",
      value: userToken,
      httpOnly: true,
    });
    return new Response(
      JSON.stringify({ message: "Login successful", status: 200 })
    );
  } catch (error) {
    return new Response(JSON.stringify({ error, status: 400 }));
  }
}
