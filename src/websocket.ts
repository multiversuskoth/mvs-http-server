import { WebSocket, WebSocketServer } from "ws";
import { MVSHTTPServer } from "./server";
import { randomUUID } from "crypto";
import { HydraDecoder, HydraEncoder } from "mvs-dump";
import { buffer } from "stream/consumers";
import { decodeToken } from "./middleware/auth";
import { AccountToken } from "./handlers";
import {
  ALL_PERKS_LOCKED_CHANNEL,
  initRedisSubscriber,
  MATCH_FOUND_NOTIFICATION,
  ON_GAMEPLAY_CONFIG_NOTIFIED_CHANNEL,
  GAME_SERVER_INSTANCE_READY_CHANNEL,
  ON_MATCH_MAKER_STARTED_CHANNEL,
  ON_MATCH_MAKER_STARTED_NOTIFICATION,
  redisClient,
  redisGetPlayerPerk,
  RedisPlayerConfig,
  RedisGameServerInstanceReadyNotification,
  RedisClient,
  redisGetAllPlayersEquippedComsetics,
  redisGetPlayers,
  RedisAllPerksLockedNotification,
  MATCHMAKING_COMPLETE_CHANNEL,
  RedisMatchMakingCompleteNotification,
} from "./config/redis";
import { Server } from "https";
import { Server as HttpServer} from "http";
import { GAME_SERVER_PORT } from "./game/udp";
import { logger } from "./config/logger";
import { MVSTime } from "./utils/date";
import ObjectID from "bson-objectid";
import { RedisClientType } from "@redis/client";

export class WebSocketPlayer {
  init: boolean = false;
  ws: WebSocket;
  deleted?: boolean;
  account: AccountToken | undefined;
  matchTick: NodeJS.Timeout | undefined;
  matchConfig?: GameNotification;

  constructor(_ws: WebSocket) {
    this.ws = _ws;
  }

  send(data: Object) {
    const encoder = new HydraEncoder(true);
    encoder.encodeValue(data);
    if (!this.deleted) {
      this.ws.send(encoder.returnValue());
    }
  }

  sendRaw(data: Buffer<ArrayBuffer>) {
    if (!this.deleted) {
      this.ws.send(data);
    }
  }
}

interface MatchData {
  MatchId: string;
  GameplayConfig: GameplayConfig;
  template_id: string;
}

interface GameplayConfig {
  ArenaModeInfo: null | string;
  RiftNodeId: string;
  ScoreEvaluationRule: string;
  bIsPvP: boolean;
  ScoreAttributionRule: string;
  MatchDurationSeconds: number;
  Created: {
    _hydra_unix_date: number;
  };
  EventQueueSlug: string;
  bModeGrantsProgress: boolean;
  TeamData: any[];
  Spectators: object;
  bIsRanked: boolean;
  bIsCustomGame: boolean;
  Players: { [key: string]: PlayerConfig };
  CustomGameSettings: CustomGameSettings;
  HudSettings: HudSettings;
  bIsCasualSpecial: boolean;
  bAllowMapHazards: boolean;
  RiftNodeAttunement: string;
  CountdownDisplay: string;
  Cluster: string;
  WorldBuffs: any[];
  bIsTutorial: boolean;
  MatchId: string;
  bIsOnlineMatch: boolean;
  ModeString: string;
  Map: string;
  bIsRift: boolean;
}

interface CustomGameSettings {
  bHazardsEnabled: boolean;
  bShieldsEnabled: boolean;
  MatchTime: number;
  NumRingouts: number;
}

interface HudSettings {
  bDisplayPortraits: boolean;
  bDisplayStocks: boolean;
  bDisplayTimer: boolean;
}

interface Payload {
  match: {
    id: string;
  };
  custom_notification: string;
}

interface GameNotification {
  data: MatchData;
  payload: Payload;
  header: string;
  cmd: string;
}

export interface PlayerConfig {
  Taunts: string[];
  BotBehaviorOverride: string;
  AccountId: string;
  bAutoPartyPreference: boolean;
  Gems: any[]; // Assuming Gems is an array of any type, replace with specific type if known
  PartyMember: any | null; // Replace `any` with the specific type if known
  GameplayPreferences: number;
  BotDifficultyMax: number;
  bIsBot: boolean;
  RankedDivision: any | null; // Replace `any` with the specific type if known
  bUseCharacterDisplayName: boolean;
  StartingDamage: number;
  TeamIndex: number;
  ProfileIcon: string;
  WinStreak: any | null; // Replace `any` with the specific type if known
  RankedTier: any | null; // Replace `any` with the specific type if known
  Handicap: number;
  RingoutVfx: string;
  Character: string;
  Banner: string;
  StatTrackers: [string, number][];
  Perks: string[];
  PlayerIndex: number;
  PartyId: string;
  Username: Record<string, any>; // Assuming Username is an object, replace with specific type if known
  Buffs: any[]; // Replace `any` with the specific type if known
  Skin: string;
  BotDifficultyMin: number;
}

const PING_BUFFER = Buffer.from([0x0c]);

export class WebSocketService {
  private ws: WebSocketServer;
  clients: Map<string, WebSocketPlayer> = new Map();
  redisSub: RedisClient;

  constructor(server: Server | HttpServer ) {
    this.redisSub = initRedisSubscriber();
    this.ws = new WebSocketServer({ server });
    this.setupSocketHandlers();
    this.setupRedisSubscription();
    this.handleHeartBeats();
  }

  handleHandshake(playerWS: WebSocketPlayer, message: Buffer) {
    const decodedBody = parseInitHydraWebsocketMessage(message);
    // Send ID, hard coded for now
    let buffer = Buffer.from([
      0x09, 0x01, 0x00, 0x24, 0x39, 0x35, 0x34, 0x65, 0x37, 0x37, 0x36, 0x30, 0x2d, 0x35, 0x33, 0x39, 0x62, 0x2d, 0x34, 0x33, 0x36, 0x63, 0x2d, 0x61,
      0x35, 0x37, 0x64, 0x2d, 0x62, 0x35, 0x36, 0x32, 0x33, 0x66, 0x36, 0x37, 0x61, 0x37, 0x34, 0x64,
    ]);
    playerWS.init = true;
    playerWS.account = decodedBody.account;
    playerWS.sendRaw(buffer);
    this.clients.set(playerWS.account.id, playerWS);
    console.log(`Player ${playerWS.account.id} connected to websocket`);
  }

  handleHeartBeats() {
    setInterval(() => {
      for (const [_, playerWS] of this.clients) {
        playerWS.sendRaw(PING_BUFFER);
      }
    }, 20000);
  }

  handleDisconnect(playerWS: WebSocketPlayer) {
    if (playerWS && playerWS.account) {
      playerWS.deleted = true;
      this.clients.delete(playerWS.account.id);
      console.log(`Player ${playerWS.account.id} disconnected from websocket`);
    }
  }

  setupSocketHandlers() {
    this.ws.on("connection", (ws, request) => {
      console.log("Client connected");
      const playerWS = new WebSocketPlayer(ws);
      ws.on("message", (message) => {
        if (!playerWS.init) {
          if (Buffer.isBuffer(message)) {
            this.handleHandshake(playerWS, message);
            // Need to send ping to client or client will disconnect
            playerWS.sendRaw(PING_BUFFER);
          }
        }
      });

      ws.on("close", () => {
        this.handleDisconnect(playerWS);
      });

      ws.on("error", (error) => {
        console.error("WebSocket error:", error);
      });
    });
  }

  stopMatchTick(player: WebSocketPlayer) {
    if (player.matchTick) {
      clearInterval(player.matchTick);
    }
  }

  handlePartyQueued(notification: ON_MATCH_MAKER_STARTED_NOTIFICATION) {
    for (const playerId of notification.playerIds) {
      const client = this.clients.get(playerId);
      if (client) {
        client.send({
          data: {
            template_id: "OnMatchmakerStarted",
            MatchmakingRequestId: notification.matchmakingRequestId,
          },
          payload: {
            match: {
              id: notification.partyId,
            },
            custom_notification: "realtime",
          },
          header: "",
          cmd: "update",
        });
        this.handleMatchTick(client, notification);
      }
    }
  }

  handleMatchTick(client: WebSocketPlayer, notification: ON_MATCH_MAKER_STARTED_NOTIFICATION) {
    setInterval(() => {
      client.send({
        data: {},
        payload: {
          id: notification.matchmakingRequestId,
          state: 2,
        },
        header: "matchmaking-tick",
        cmd: "matchmaking-tick",
      });
    }, 1000);
  }

  handleMatchFound(notification: MATCH_FOUND_NOTIFICATION) {
    for (const matchPlayer of notification.players) {
      const player = this.clients.get(matchPlayer.playerId);
      if (player) {
        this.stopMatchTick(player);
        const message = {
          data: {
            MatchKey: notification.matchKey,
            MatchID: notification.matchId,
            Port: GAME_SERVER_PORT,
            template_id: "GameServerReadyNotification",
            IPAddress: "127.0.0.1",
          },
          payload: {
            match: {
              id: notification.matchId,
            },
            custom_notification: "realtime",
          },
          header: "",
          cmd: "update",
        };
        player.send(message);
        logger.info(`Sent match notification to player ${matchPlayer.playerId} for match ${notification.matchId}`);
      }
    }
    this.handleSendGamePlayConfig(notification);
  }

  async handleSendGamePlayConfig(notification: MATCH_FOUND_NOTIFICATION) {
    const MatchTime = 420;
    const NumRingouts = 3;

    // Get the player configs from redis
    const playerIds = notification.players.map((p) => p.playerId);
    const playerConfigs = await redisGetAllPlayersEquippedComsetics(playerIds);
    const playerLoadouts = await redisGetPlayers(playerIds);

    // Get the player configs from redis

    const Players: { [key: string]: PlayerConfig } = {};

    for (let i = 0; i < notification.players.length; i++) {
      const player = notification.players[i];
      const playerConfig = playerConfigs[i];
      const playerLoadout = playerLoadouts[i];
      Players[player.playerId] = {
        AccountId: player.playerId,
        Taunts: playerConfig.Taunts[playerLoadout.character].TauntSlots,
        BotBehaviorOverride: "",
        bAutoPartyPreference: true,
        Gems: [],
        PartyMember: null,
        GameplayPreferences: 964,
        BotDifficultyMax: 0,
        bIsBot: false,
        RankedDivision: null,
        bUseCharacterDisplayName: false,
        StartingDamage: 0,
        TeamIndex: player.teamIndex,
        ProfileIcon: "",
        WinStreak: null,
        RankedTier: null,
        Handicap: 0,
        RingoutVfx: playerConfig.RingoutVfx,
        Character: playerLoadout.character,
        Banner: playerConfig.Banner,
        StatTrackers: playerConfig.StatTrackers.StatTrackerSlots.map((s) => [s, 1]), // TODO: We should get this from database?
        Perks: [],
        PlayerIndex: player.playerIndex,
        PartyId: player.partyId,
        Username: {},
        Buffs: [],
        Skin: playerLoadout.skin,
        BotDifficultyMin: 0,
      };
    }

    console.log(Players)

    // Create the message to send to the players
    const message: GameNotification = {
      data: {
        MatchId: notification.matchId,
        GameplayConfig: {
          ArenaModeInfo: null,
          RiftNodeId: "",
          ScoreEvaluationRule: "TargetScoreIsWin",
          bIsPvP: true,
          ScoreAttributionRule: "AttributeToAttacker",
          MatchDurationSeconds: MatchTime,
          Created: {
            _hydra_unix_date: MVSTime(new Date()),
          },
          EventQueueSlug: "",
          bModeGrantsProgress: true,
          TeamData: [],
          Spectators: {},
          bIsRanked: false,
          bIsCustomGame: false,
          Players,
          CustomGameSettings: {
            bHazardsEnabled: true,
            bShieldsEnabled: true,
            MatchTime,
            NumRingouts,
          },
          HudSettings: {
            bDisplayPortraits: true,
            bDisplayStocks: true,
            bDisplayTimer: true,
          },
          bIsCasualSpecial: false,
          bAllowMapHazards: true,
          RiftNodeAttunement: "Attunements:None",
          CountdownDisplay: "CountdownTypes:XvY",
          Cluster: "ec2-us-east-1-dokken",
          WorldBuffs: [],
          bIsTutorial: false,
          MatchId: notification.matchId,
          bIsOnlineMatch: true,
          ModeString: notification.mode,
          Map: notification.map,
          bIsRift: false,
        },
        template_id: "OnGameplayConfigNotified",
      },
      payload: {
        match: {
          id: notification.matchId,
        },
        custom_notification: "realtime",
      },
      header: "",
      cmd: "update",
    };

    // Send the message to each player in the match
    for (const player of notification.players) {
      const client = this.clients.get(player.playerId);
      if (client) {
        client.send(message);
        client.matchConfig = message;
        logger.info(`Sent gameplay config to player ${client.account?.id} for match ${notification.matchId}`);
      }
    }
  }

  async handleAllPerksLocked(notification: RedisAllPerksLockedNotification) {
    // Send the message to each player in the match
    for (const playerId of notification.playerIds) {
      const client = this.clients.get(playerId);
      if (client) {
        if (client.matchConfig) {
          const playerPerk = await redisGetPlayerPerk(notification.containerMatchId, playerId);
          if (playerPerk) {
            client.matchConfig.data.GameplayConfig.Players[playerId].Perks = playerPerk;
            client.matchConfig.data.template_id = "PerksLockedNotification";
          } else {
            logger.error("Match Perks are incomplete!!! This should not really happen");
          }
        }
      }
    }
    for (const playerId of notification.playerIds) {
      const client = this.clients.get(playerId);
      if (client && client.matchConfig) {
        client.send(client.matchConfig);
        logger.info(`Sent all perks lock to player ${playerId} for match ${notification.containerMatchId}`);
      }
    }
  }

  async handleGameServerInstanceReady(notification: RedisGameServerInstanceReadyNotification) {
    for (const playerId of notification.playerIds) {
      const client = this.clients.get(playerId);
      const message = {
        data: {},
        payload: {
          game_server_instance: {
            game_server_type_slug: "multiplay",
            port: GAME_SERVER_PORT,
            owner_id: notification.containerMatchId,
            host: "127.0.0.1",
            id: notification.resultId,
          },
          proxied_data: null,
        },
        header: "Your game server is ready to join.",
        cmd: "game-server-instance-ready",
      };
      if (client) {
        client.send(message);
      }
    }
  }

  handleMatchMakingComplete(notification: RedisMatchMakingCompleteNotification) {
    for (const playerId of notification.playerIds) {
      const client = this.clients.get(playerId);
      const message = {
        data: {},
        payload: {
          result: {
            id: notification.resultId,
          },
          match: {
            id: notification.containerMatchId,
          },
          id: notification.matchmakingRequestId,
          state: 2,
        },
        header: "Matchmaking request completed!",
        cmd: "matchmaking-complete",
      };
      if (client) {
        client.send(message);
      }
    }
  }

  private setupRedisSubscription() {
    // Subscribe to channels
    this.redisSub.subscribe(ON_GAMEPLAY_CONFIG_NOTIFIED_CHANNEL, (message) => {
      const notification = JSON.parse(message) as MATCH_FOUND_NOTIFICATION;
      this.handleMatchFound(notification);
    });

    this.redisSub.subscribe(ALL_PERKS_LOCKED_CHANNEL, (message) => {
      const notification = JSON.parse(message) as RedisAllPerksLockedNotification;
      this.handleAllPerksLocked(notification);
    });

    this.redisSub.subscribe(ON_MATCH_MAKER_STARTED_CHANNEL, (message) => {
      const notification = JSON.parse(message) as ON_MATCH_MAKER_STARTED_NOTIFICATION;
      this.handlePartyQueued(notification);
    });

    this.redisSub.subscribe(GAME_SERVER_INSTANCE_READY_CHANNEL, (message) => {
      const notification = JSON.parse(message) as RedisGameServerInstanceReadyNotification;
      this.handleGameServerInstanceReady(notification);
    });

    this.redisSub.subscribe(MATCHMAKING_COMPLETE_CHANNEL, (message) => {
      const notification = JSON.parse(message) as RedisMatchMakingCompleteNotification;
      this.handleMatchMakingComplete(notification);
    });
  }
}

// CHATGPT really figure this one out... Hats off to CHATGPT
export function parseInitHydraWebsocketMessage(buf: Buffer): { account: AccountToken; id: string } {
  // 1) JWT length prefix at byte 0x13 (19)
  const jwtLen = buf.readUInt16BE(0x13);

  // 2) extract JWT string
  const jwtStart = 0x15;
  const jwtEnd = jwtStart + jwtLen;
  const jwt = decodeToken(buf.toString("utf8", jwtStart, jwtEnd));

  // 3) extract the next 12 raw bytes as `id`
  // IT FIGURE OUT THAT THIS WAS AN ID!!! NEVER would of seen this one
  const idLenght = jwtEnd + 12;
  const idBuf = buf.subarray(jwtEnd, idLenght);
  const id = idBuf.toString("hex");

  // 4) now the TLV payload starts at the connection object:
  //    byte 0x1d1 is the MAP8 (0x60) that opens your
  //    { connection: { … } } block.
  const hydraObectStart = idLenght;

  // reuse your existing TLV decoder (from the last snippet)
  const rest = new HydraDecoder(buf.subarray(hydraObectStart)).readValue();

  return {
    account: jwt,
    id,
    ...rest,
  };
}
