import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017/test"; // Replace with your connection string
const client = new MongoClient(url);

export async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
  }
}
