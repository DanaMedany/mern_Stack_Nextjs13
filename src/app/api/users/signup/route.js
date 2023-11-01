import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";

import bcrypt from "bcryptjs";

connect();

export async function POST(request) {
  try {
    const { username, email, password } = await request.json();
    if (username === "" || password === "" || email === "") {
      return new Response(
        JSON.stringify({ error: "please fill all the field", status: 400 })
      );
    }
    // check if user already exist
    const userExist = await User.findOne({ email });
    if (userExist) {
      return new Response(
        JSON.stringify({ error: "Email Already Exist", status: 409 })
      );
    }
    //hash password
    const hashPassword = await bcrypt.hash(password, 10);
    //create new user object and save it to database
    const newUser = await new User({
      email,
      username,
      password: hashPassword,
    });
    const savedUser = await newUser.save();
    return new Response(
      JSON.stringify({
        message: "User has been created",
        status: 201,
      })
    );
  } catch (error) {
    return new Response(JSON.stringify({ error, status: 400 }));
  }
}
