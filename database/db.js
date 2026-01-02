import mongoose from "mongoose";

async function dbConnection() {
  await mongoose.connect("mongodb://myappuser:pass123@13.218.84.226:27017/myappdb?authSource=admin");
  console.log("MongoDB connected successfully");
}

export default dbConnection;
