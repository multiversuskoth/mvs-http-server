import express from "express";
import router from "./router";
import { hydraDecoderMiddleware } from "./middleware/hydraParser";
import * as https from "https";
import * as http from "http";
import * as fs from "fs";
import * as path from "path";
import { hydraTokenMiddleware } from "./middleware/auth";
import { connect } from "./database/client";
import { generate_hiss } from "./handlers/hiss_amalgation_get";
import { redisClient, redisGetMatchConfig, redisPublisdEndOfMatch } from "./config/redis";
import { GAME_SERVER_PORT } from "./game/udp";
import { sscRouter } from "./ssc/routes";
import {  getCurrentCRC, LoadConfig, MATCHMAKING_CRC } from "./data/config";
import { PlayerTesterModel } from "./database/PlayerTester";
import { RegExpMatcher, TextCensor, englishDataset, englishRecommendedTransformers, asteriskCensorStrategy } from "obscenity";
import env from "./env/env";
import { syncRouter } from "./dataAssetSync";
import { loadAssets } from "./loadAssets";

const matcher = new RegExpMatcher({
  ...englishDataset.build(),
  ...englishRecommendedTransformers,
});
const censor = new TextCensor();
censor.setStrategy(asteriskCensorStrategy());

export const app = express();
app.disable("x-powered-by");

//const port = 12181;
const port = env.HTTP_PORT || 8000;

process.on("warning", (e) => {
  console.warn(e.stack);
});


app.use(express.json());
app.use(express.urlencoded());
app.get("/global_configuration_types/eula/global_configurations/*", (req, res, next) => {
  res.json(200);
});

app.use(syncRouter);


app.get("/namechange", async (req, res) => {
  try {
    let ip = req.ip!.replace(/^::ffff:/, "");
    if (typeof ip !== "string") {
      res.status(400).send("Invalid IP");
      return;
    }
    let player = await PlayerTesterModel.findOne({ ip });
    // If no player exists, create a new document with empty name
    if (!player) {
      player = new PlayerTesterModel({ ip, name: "" });
      await player.save();
    }
    // Render a simple HTML form
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Edit Player</title>
      </head>
      <body>
        <h1>Edit Player: ${player.name}</h1>
        <form action="/namechange" method="POST">
          <label>
            Name:
            <input maxlength="15" type="text" id="name" name="name" value="${player.name}" />
          </label>
          <button type="submit">Save</button>
        </form>
      </body>
      </html>
    `);
  } catch (e) {
    console.log(e);
    res.send("");
  }
});

// POST /player - update or create player by IP
app.post("/namechange", async (req, res, next) => {
  try {
    let ip = req.ip!.replace(/^::ffff:/, "");
    console.log(req.body);
    const { name } = req.body;
    if (typeof ip !== "string" || typeof name !== "string") {
      res.json("ERROR");
      return;
    }
    // Upsert the player's name based on IP
    const matches = matcher.getAllMatches(name);
    const filtered = censor.applyTo(name, matches);
    await PlayerTesterModel.findOneAndUpdate({ ip }, { name: filtered.substring(0, 15) }, { upsert: true, new: true });
    // Redirect back to the form
    res.redirect(`/namechange`);
    console.log("Name Changed");
  } catch (e) {
    console.log(e);
    res.send("");
  }
});

app.post("/mvsi_register", async (req, res, next) => {
  console.log("GET REGISTRY");
  const body = req.body;
  const config = await redisGetMatchConfig(body.matchId);
  if (config.matchKey !== body.key) {
    res.send("");
    return;
  }
  const players = config.players.map((p) => {
    return {
      player_index: p.playerIndex,
      ip: p.ip,
      is_host: p.isHost,
    };
  });
  res.json({
    max_players: config.players.length,
    match_duration: 36000,
    players,
  });
});

app.post("/mvsi_end_match", async (req, res, next) => {
  console.log("mvsi_end_match");
  const body = req.body;
  const config = await redisGetMatchConfig(body.matchId);
  if (config.matchKey !== body.key) {
    res.send("");
    return;
  }
  if (config) {
    await redisPublisdEndOfMatch(
      config.players.map((p) => p.playerId),
      config.matchId,
    );
    res.send("");
  }
});

app.use(hydraDecoderMiddleware);
app.use(hydraTokenMiddleware);

app.use(router);
app.use(sscRouter);
app.get("/ssc/invoke/hiss_amalgamation", (req, res, next) => {
  console.log("Missing Crc, sending fresh one");
  res.send(generate_hiss());
});

app.use((req, res, next) => {
  console.log("NOT IMPLEMENTED - ", req.method, req.url);
  console.log(req.body);
  res.send({ body: { Crc: getCurrentCRC(), MatchmakingCrc: MATCHMAKING_CRC }, metadata: null, return_code: 200 });
});

export const MVSHTTPServer = http.createServer(app);
//export const MVSHTTPServer = https.createServer(options,app);

export async function start() {
  await connect();
  await loadAssets();
  await LoadConfig();

  MVSHTTPServer.listen(port, "0.0.0.0", () => {
    console.log(`MVS Server running on ${port}`);
  });
}
