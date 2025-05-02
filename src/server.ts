import express from "express";
import router from "./router";
import { hydraDecoderMiddleware } from "./middleware/hydraParser";
import * as https from "https";
import * as http from "http";
import * as fs from "fs";
import * as path from "path";
import { hydraTokenMiddleware } from "./middleware/auth";
import { connect } from "./database/client";
import { hiss_amalgamation_get } from "./handlers/hiss_amalgation_get";

const app = express();
app.disable("x-powered-by");

//const port = 12181;
const port = 443;

process.on("warning", (e) => {
  console.warn(e.stack);
});

const options = {
  key: fs.readFileSync(path.join(__dirname, "../dokken-api.wbagora.com-key.pem")),
  cert: fs.readFileSync(path.join(__dirname, "../dokken-api.wbagora.com.pem")),
};

app.use(express.json());
app.use(hydraDecoderMiddleware);
app.use(hydraTokenMiddleware);

app.use(router);
app.get("/ssc/invoke/hiss_amalgamation", (req, res, next) => {
  console.log("GETTING  hiss.bin")
  fs.readFile("hiss.bin", (err) => {
    if (err) {
      console.log(err);
      return;
    }
  });
  res.send(hiss_amalgamation_get);
});
app.use((req, res, next) => {
  console.log("UNKNOWN - ", req.method, req.url);
  res.send({});
});

export const MVSHTTPServer = https.createServer(options, app);

export async function start() {
  await connect();

  MVSHTTPServer.listen(port, () => {
    console.log(`MVS Server running on ${port}`);
  });
}
