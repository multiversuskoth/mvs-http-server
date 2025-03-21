import express, { NextFunction, Request, Response } from "express";
import router from "./router";
import { connect } from "./database/client";
import { hydraDecoderMiddleware } from "./middleware/hydraParser";
import { createServer } from "http";
import * as https from "https";
import { batchMiddleware, BatchResponse, urlSearchParamsToObject } from "./middleware/batchMiddleware";
import * as fs from "fs";
import * as path from "path";
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
app.get("/test", (req, res) => {
  res.send("test");
});
app.get("/test1", (req, res) => {
  res.statusCode = 304;
  res.send("test1");
});

app.post("/post", (req, res) => {
  res.statusCode = 304;
  res.send("test1");
});

/* app.get("/", batchMiddleware, (req: Request, res: Response) => {
  const customRes = res as BatchResponse;

  req.url = "/test";
  let res1 = app._router.handle(req, res);
  req.url = "/test1?query1=1&query2=2&query1=5";
  req.query = urlSearchParamsToObject(req.url);
  let res2 = app._router.handle(req, res);
  req.url = "/post";
  req.method = "post";
  req.body = "{}";
  app._router.handle(req, res);

  req.url = "/batch";
  res.statusCode = 200;
  res.send(customRes.batchedRequests);
}); */
app.use(router);

export const MVSHTTPServer = https.createServer(options, app);

export async function start() {
  console.log("connecting to database...");
  //await connect();
  console.log("connected to database!");

  MVSHTTPServer.listen(port, () => {
    console.log(`MVS Server running on ${port}`);
  });
}
