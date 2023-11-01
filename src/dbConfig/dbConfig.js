import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    const connection = mongoose.connection;
    connection.on("Connected", () => console.log("MongoDB is Connected"));
    connection.on("Error", () => {
      console.log("MongoDB is Connected Error");
      process.exit();
    });
  } catch (error) {
    console.log("Error while connecting to Database" + error);
  }
}
