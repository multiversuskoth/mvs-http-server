import express from "express";
import router from "./router";
import { connect } from "./database/client";
import { hydraDecoderMiddleware as hydraMiddleware } from "./middleware/hydraParser";

const app = express();
const port = "3000";

app.use(express.json());
app.use(hydraMiddleware);
app.use(router);

async function start() {
  console.log("connecting to database...");
  await connect();
  console.log("connected to database!");

  app.listen(port, (error) => {
    if (error != undefined) {
      console.log("Error! ", error);
      return;
    }
    console.log("server started with port", port);
  });
}

start();
