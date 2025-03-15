import express from "express";
import router from "./router";
import { connect } from "./database/client";
import { hydraDecoderMiddleware as hydraMiddleware } from "./middleware/hydraParser";
import { createServer } from "http";

const app = express();
const port = 3000;

app.use(express.json());
app.use(hydraMiddleware);
app.use(router);

export const MVSHTTPServer = createServer(app);

export async function start() {
  console.log("connecting to database...");
  await connect();
  console.log("connected to database!");

  MVSHTTPServer.listen(port, () => {
    console.log(`MVS Server running on ${port}`);
  });
}
