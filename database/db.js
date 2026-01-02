import mongoose from "mongoose";

async function dbConnection() {
  await mongoose.connect(
    "mongodb://myappuser:pass%40123@34.234.100.61:27017/myappdb"
  );

  console.log("MongoDB connected successfully");
}

export default dbConnection;
