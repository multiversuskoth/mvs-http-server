import express from "express";
import router from "./router";
import { connectDB } from "./db";

const app = express();
const port = "3000";

await connectDB();

app.use(router);

app.listen(port, () => {
  console.log("MVS HTTP Server Running");
});
