import { connect } from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import User from "@/models/userModel";

connect();

export async function GET(request) {
  try {
    const tokenData = getDataFromToken(request);
    let { id } = tokenData;
    let userExist = await User.findOne({ _id: id });
    return new Response(JSON.stringify({ userExist }));
  } catch (error) {
    return new Response(JSON.stringify({ error }));
  }
}
