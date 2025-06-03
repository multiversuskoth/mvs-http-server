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
import { redisClient, redisGetMatchConfig } from "./config/redis";
import { GAME_SERVER_PORT } from "./game/udp";
import { sscRouter } from "./ssc/routes";

export const expressApp = express();
expressApp.disable("x-powered-by");

//const port = 12181;
const port = 8000;

process.on("warning", (e) => {
  console.warn(e.stack);
});

const options = {
  key: fs.readFileSync(path.join(__dirname, "../dokken-api.wbagora.com-key.pem")),
  cert: fs.readFileSync(path.join(__dirname, "../dokken-api.wbagora.com.pem")),
};

expressApp.use(express.json());

expressApp.get("/hello", (req, res, next) => {
  console.log("HMM");
  res.send("HELLO");
});

expressApp.get("/global_configuration_types/eula/global_configurations/en-US", (req, res, next) => {
  res.json(200);
});

expressApp.post("/mvsi_register", async (req, res, next) => {
  console.log("GET REGISTRY");
  const body = req.body;
  const config = await redisGetMatchConfig(body.matchId);
  console.log(config);
  const players = config.players.map((p) => {
    return {
      player_index: p.playerIndex,
      ip: p.ip,
      is_host: p.isHost
    };
  });
  console.log(players);
  res.json({
    max_players: 2,
    match_duration: 36000,
    players,
  });
});

expressApp.use(hydraDecoderMiddleware);
expressApp.use(hydraTokenMiddleware);

expressApp.use(router);
expressApp.use(sscRouter);
expressApp.get("/ssc/invoke/hiss_amalgamation", (req, res, next) => {
  console.log("GETTING  hiss.bin");

  res.send(hiss_amalgamation_get);
});

expressApp.use((req, res, next) => {
  console.log("UNKNOWN - ", req.method, req.url);
  res.send({ body: { Crc: 1167552915, MatchmakingCrc: 1291076274 }, metadata: null, return_code: 200 });
});

export const MVSHTTPServer = http.createServer(expressApp);
//export const MVSHTTPServer = https.createServer(options,app);

export async function start() {
  await connect();

  MVSHTTPServer.listen(port, "0.0.0.0", () => {
    console.log(`MVS Server running on ${port}`);
  });
}
