import express from "express";
import router from "./router";
import { hydraDecoderMiddleware } from "./middleware/hydraParser";
import * as https from "https";
import * as fs from "fs";
import * as path from "path";
import { hydraTokenMiddleware } from "./middleware/auth";
const app = express();
app.disable("x-powered-by");

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
app.use((req, res, next) => {
  console.log("UNKNOWN - ", req.method, req.url);
  res.send({ body: { Crc: 1167552915, MatchmakingCrc: 1291076274 }, metadata: null, return_code: 200 });
});

export const MVSHTTPServer = https.createServer(options, app);

export async function start() {
  console.log("connecting to database...");
  //await connect();
  console.log("connected to database!");

  MVSHTTPServer.listen(port, () => {
    console.log(`MVS Server running on ${port}`);
  });
}
