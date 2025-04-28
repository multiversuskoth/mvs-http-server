import { WebSocket, WebSocketServer } from "ws";
import { MVSHTTPServer } from "./server";
import { randomUUID } from "crypto";
import { HydraDecoder, HydraEncoder } from "mvs-dump";
import { buffer } from "stream/consumers";
import { decodeToken } from "./middleware/auth";
import { AccountToken } from "./handlers";
import { initRedisSubscriber, redisClient } from "./config/redis";
import { Server } from "https";
import { GAME_SERVER_PORT } from "./game/udp";
import { logger } from "./config/logger";
import { TeamEntry } from "./types/match";

export class WebSocketPlayer {
  init: boolean = false;
  ws: WebSocket;
  deleted?: boolean;
  account: AccountToken | undefined;
  matchTick: NodeJS.Timeout | undefined;

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

export interface MVS_NOTIFICATION {}

export interface PARTY_QUEUED_NOTIFICATION extends MVS_NOTIFICATION {
  playerIds: string[];
  matchmakingRequestId: string;
  partyId: string;
}

export interface MATCH_FOUND_NOTIFICATION extends MVS_NOTIFICATION {
  players: TeamEntry[];
  matchId: string;
  matchKey: string;
  map: string;
}

export interface PlayerConfig {
  taunts: string[];
  RingoutVfx: string;
  Character: string;
  Banner: string;
  StatTrackers: StatTrackerEntry[];
  Perks: string[];
}

type StatTrackerEntry = [statKey: string, statValue: number];

const redisSub = initRedisSubscriber();

const PING_BUFFER = Buffer.from([0x0c]);

export const MATCH_NOTIFICATION_CHANNEL = "match:notifications";
export const PARTY_QUEUED_CHANNEL = "party:queued";
export const PLAYER_DEQUEUED_CHANNEL = "party:dequeued";

export class WebSocketService {
  private ws: WebSocketServer;
  clients: Map<string, WebSocketPlayer> = new Map();

  constructor(server: Server) {
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

  handlePartyQueued(notification: PARTY_QUEUED_NOTIFICATION) {
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

  handleMatchTick(client: WebSocketPlayer, notification: PARTY_QUEUED_NOTIFICATION) {
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
        logger.info(`Sent match notification to player ${matchPlayer} for match ${notification.matchId}`);
        this.handleSendGamePlayConfig(notification);
      }
    }
  }

  async handleSendGamePlayConfig(notification: MATCH_FOUND_NOTIFICATION) {
    const multi = redisClient.multi();
    for (const player of notification.players) {
      multi.hGetAll(`playerConfig:${player.playerId}`);
    }

    const results = await multi.exec();
    const a = results.map((reply) => reply as PlayerConfig);

    const playerConfigs = redisClient.hmGet;
    const message = {
      data: {
        MatchId: notification.matchId,
        GameplayConfig: {
          ArenaModeInfo: null,
          RiftNodeId: "",
          ScoreEvaluationRule: "TargetScoreIsWin",
          bIsPvP: true,
          ScoreAttributionRule: "AttributeToAttacker",
          MatchDurationSeconds: 420,
          Created: {
            _hydra_unix_date: 1742265276,
          },
          EventQueueSlug: "",
          bModeGrantsProgress: true,
          TeamData: [],
          Spectators: {},
          bIsRanked: false,
          bIsCustomGame: false,
          Players: {
            "63b3b7c7fc8aef5b5da03139": {
              Taunts: [
                "taunt_wonder_woman_hands_on_hips",
                "taunt_wonder_woman_hands_on_hips",
                "taunt_wonder_woman_hands_on_hips",
                "taunt_wonder_woman_hands_on_hips",
              ],
              BotBehaviorOverride: "",
              AccountId: "63b3b7c7fc8aef5b5da03139",
              bAutoPartyPreference: true,
              Gems: [],
              PartyMember: null,
              GameplayPreferences: 964,
              BotDifficultyMax: 0,
              bIsBot: false,
              RankedDivision: null,
              bUseCharacterDisplayName: false,
              StartingDamage: 0,
              TeamIndex: playersIndexes[playerIndexCount][0],
              ProfileIcon: "",
              WinStreak: null,
              RankedTier: null,
              Handicap: 0,
              RingoutVfx: "ring_out_vfx_rising_stars",
              Character: "character_wonder_woman",
              Banner: "banner_foretold_champion_epic2",
              StatTrackers: [
                ["stattracking_ranked_seasonfive_charactersingold_1v1", 1],
                ["stat_tracking_bundle_ranked_season_two_wins_1v1", 779],
              ],
              Perks: [],
              PlayerIndex: playersIndexes[playerIndexCount][0],
              PartyId: "67d8dba624caa7eb9f093373",
              Username: {},
              Buffs: [],
              Skin: "skin_wonder_woman_default",
              BotDifficultyMin: 0,
            },
            [client.account.id]: {
              Taunts: [
                "taunt_wonder_woman_hands_on_hips",
                "taunt_wonder_woman_hands_on_hips",
                "taunt_wonder_woman_hands_on_hips",
                "taunt_wonder_woman_hands_on_hips",
              ],
              BotBehaviorOverride: "",
              AccountId: client.account.id,
              bAutoPartyPreference: true,
              Gems: [],
              PartyMember: null,
              GameplayPreferences: 544,
              BotDifficultyMax: 0,
              bIsBot: false,
              RankedDivision: null,
              bUseCharacterDisplayName: false,
              StartingDamage: 0,
              TeamIndex: playersIndexes[playerIndexCount][1],
              ProfileIcon: "",
              WinStreak: null,
              RankedTier: null,
              Handicap: 0,
              RingoutVfx: "ring_out_vfx_default",
              Character: "character_wonder_woman",
              Banner: "banner_foretold_champion_rare",
              StatTrackers: [
                ["stattracking_ranked_seasonfive_charactersingold_1v1", 1],
                ["stat_tracking_bundle_ranked_season_two_wins_1v1", 779],
              ],
              Perks: [],
              PlayerIndex: playersIndexes[playerIndexCount][1],
              PartyId: "67d8db9c0bd3637fea0c872e",
              Username: {},
              Buffs: [],
              Skin: "skin_wonder_woman_default",
              BotDifficultyMin: 0,
            },
          },
          CustomGameSettings: {
            bHazardsEnabled: true,
            bShieldsEnabled: true,
            MatchTime: 420,
            NumRingouts: 3,
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
          MatchId: matchId.toHexString(),
          bIsOnlineMatch: true,
          ModeString: "1v1",
          Map: "M016_V3",
          bIsRift: false,
        },
        template_id: "OnGameplayConfigNotified",
      },
      payload: {
        match: {
          id: matchId.toHexString(),
        },
        custom_notification: "realtime",
      },
      header: "",
      cmd: "update",
    };
  }

  handlePlayerDequeued() {}

  private setupRedisSubscription() {
    // Subscribe to channels
    redisSub.subscribe(MATCH_NOTIFICATION_CHANNEL, (message) => {
      const notification = JSON.parse(message) as MATCH_FOUND_NOTIFICATION;
      this.handleMatchFound(notification);
    });
    redisSub.subscribe(PARTY_QUEUED_CHANNEL, (message) => {
      const notification = JSON.parse(message) as PARTY_QUEUED_NOTIFICATION;
      this.handlePartyQueued(notification);
    });

    redisSub.subscribe(PLAYER_DEQUEUED_CHANNEL, (message) => {
      this.handlePlayerDequeued();
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
