import dgram from "dgram";
import {
  ClientMessageType,
  InputPayload,
  NewConnectionPayload,
  PlayerInputAckPayload,
  QualityDataPayload,
  ReadyToStartMatchPayload,
  UdpClientMessage,
  parseUdpClientOutboundMessage,
} from "./udpClientMessages";

import { MessageType as ServerMessageType, parseUdpServerMessage, Header as ServerHeader, InputAck } from "./udpServerMessage";
import { serializeServerMessage } from "./serializer";
import { compressPacket, decompressPacket } from "./compression";
import chalk from "chalk";

export const GAME_SERVER_PORT = 41234;

const regex = /(.{2})(?=.+)/g;

function space2(str: string) {
  return str.replace(regex, "$1 ");
}

function formatTime(date: Date) {
  let minutes = date.getMinutes().toString().padStart(2, "0");
  let seconds = date.getSeconds().toString().padStart(2, "0");
  let milliseconds = date.getMilliseconds().toString().padStart(3, "0");

  return `${minutes}:${seconds}.${milliseconds}`;
}

function logPacket(data: Buffer | null, type: string, direction: "RECV" | "SEND", json?: Object) {
  if (direction === "RECV") {
    console.log(chalk.green(direction), chalk.green(type), chalk.blue(formatTime(new Date())), data ? chalk.green(space2(data.toString("hex"))) : "");
  } else {
    console.log(
      chalk.yellow(direction),
      chalk.yellow(type),
      chalk.blue(formatTime(new Date())),
      data ? chalk.yellow(space2(data.toString("hex"))) : "",
    );
  }
  if (json) {
    console.log(JSON.stringify(json, null, 2));
  }
}

interface PlayerInfo {
  address: string;
  port: number;
  matchId: string;
  playerIndex: number;
  lastSeqRecv: number;
  lastSeqSent: number;
  // how many frames of each player this client has acked
  ackedFrames: number[];
  // timestamp when we last sent a PlayerInput to this client
  lastSentTime?: number;
  ping: number;
  ready: boolean;
  lastClientFrame: number;
  rift: number;
  missedInputs: number;
  pendingPings: Map<number, number>;
  emulated: boolean;
}

interface MatchState {
  matchId: string;
  players: PlayerInfo[];
  durationInFrames: number;
  tickIntervalMs: number;
  currentFrame: number;
  inputs: Map<number, number>[]; // one map per player: frame → input
  tickTimer?: NodeJS.Timeout;
  lastTickTime: number; // timestamp of the start of the last tick
  lastTickDuration: number; // ms duration of that tick

  sequenceCounter: number;
  pingPhaseCount: number; // how many pings sent so far
  pingPhaseTotal: number; // e.g. 65
}

const EMULATE_P2 = true;
let P2_CONNECTED = false;

function emulateP2NewConnection(server: RollbackServer, payload: NewConnectionPayload) {
  const rinfo = { address: "emulated", port: 1434 } as dgram.RemoteInfo;
  const p2Payload: NewConnectionPayload = {
    ...payload,
    playerData: {
      playerIndex: 1,
      teamId: 1,
    },
  };
  const player = server.handleNewConnection(p2Payload, rinfo, true);
  if (player) {
    const match = server.matches.get(player.matchId);
    if (!match) {
      return;
    }
  }
}

export class RollbackServer {
  private socket = dgram.createSocket("udp4");
  public matches = new Map<string, MatchState>();
  private players: PlayerInfo[] = [];

  constructor(
    private port = GAME_SERVER_PORT,
    private maxPlayers = 2,
  ) {
    this.socket.on("message", (msg, rinfo) => this.onMessage(msg, rinfo));
    this.socket.bind(this.port, () => {
      console.log(`Rollback server listening on UDP ${this.port}`);
    });
  }

  private onMessage(raw: Buffer, rinfo: dgram.RemoteInfo) {
    let clientMsg: UdpClientMessage;
    try {
      clientMsg = parseUdpClientOutboundMessage(decompressPacket(raw));
    } catch {
      return;
    }
    const { header, u } = clientMsg;
    const { type, sequence } = header;
    logPacket(raw.subarray(0, 10), ClientMessageType[type], "RECV", clientMsg);

    // NewConnection has no match yet
    let match = (u as NewConnectionPayload).matchData ? this.matches.get((u as NewConnectionPayload).matchData.matchId) : undefined;

    let player: PlayerInfo | undefined;
    if (type === ClientMessageType.NewConnection) {
      player = this.handleNewConnection(u as any, rinfo);
      match = this.matches.get((u as any).matchData.matchId)!;
    } else {
      // find existing
      player = this.players.find((p) => p.address === rinfo.address && p.port === rinfo.port);
      if (player) {
        match = this.matches.get(player.matchId);
      }
    }
    if (!player || !match) return;

    // filter out‑of‑order
    if (sequence <= player.lastSeqRecv) return;
    player.lastSeqRecv = sequence;

    if (type === ClientMessageType.QualityData) {
      // find the matching timestamp in this player’s pendingPings
      const ts0 = player.pendingPings.get((u as QualityDataPayload).serverMessageSequenceNumber);
      if (ts0 !== undefined) {
        player.ping = Date.now() - ts0;
        player.pendingPings.delete(sequence);
      }
    }

    switch (type) {
      case ClientMessageType.PlayerInputAck:
        this.handlePlayerInputAck(match, player, u as PlayerInputAckPayload);
        break;

      case ClientMessageType.ReadyToStartMatch:
        this.handleReady(match, player, (u as ReadyToStartMatchPayload).ready === 1);
        break;

      case ClientMessageType.Input:
        this.handleClientInput(match, player, u as InputPayload);
        break;
    }
  }

  public handleNewConnection(payload: NewConnectionPayload, rinfo: dgram.RemoteInfo, debug = false): PlayerInfo | undefined {
    const { matchData } = payload;
    let match = this.matches.get(matchData.matchId);
    if (!match) {
      match = {
        matchId: matchData.matchId,
        players: [],
        durationInFrames: 36000,
        tickIntervalMs: 1000 / 60,
        currentFrame: 0,
        inputs: Array(this.maxPlayers)
          .fill(0)
          .map(() => new Map<number, number>()),
        lastTickDuration: 0,
        lastTickTime: 0,
        pingPhaseCount: 0,
        pingPhaseTotal: 20,
        sequenceCounter: -1,
      };
      this.matches.set(matchData.matchId, match);
    }
    if (match.players.length >= this.maxPlayers) return;
    if (match.players.some((p) => p.address === rinfo.address && p.port === rinfo.port)) {
      return match.players.find((p) => p.address === rinfo.address && p.port === rinfo.port);
    }

    const newPlayer: PlayerInfo = {
      address: rinfo.address,
      port: rinfo.port,
      matchId: matchData.matchId,
      playerIndex: match.players.length,
      lastSeqRecv: 0,
      lastSeqSent: 0,
      ackedFrames: Array(this.maxPlayers).fill(0),
      ping: 0,
      ready: debug,
      lastClientFrame: 0,
      rift: 0,
      missedInputs: 0,
      pendingPings: new Map(),
      emulated: debug,
    };
    match.players.push(newPlayer);
    this.players.push(newPlayer);

    this.sendServerMessage(match, newPlayer, ServerMessageType.NewConnectionReply, {
      success: 0,
      matchNumPlayers: match.players.length,
      playerIndex: newPlayer.playerIndex,
      matchDurationInFrames: match.durationInFrames,
      isDebugMode: 0,
      isValidationServerDebugMode: 0,
    });

    // after you reply to the last connecting player:
    if (match.players.length === this.maxPlayers) {
      this.startPingPhase(match);
    }
    if (EMULATE_P2 && !P2_CONNECTED) {
      P2_CONNECTED = true;
      emulateP2NewConnection(this, payload);
    }
    return newPlayer;
  }

  /** 1) Start the RequestQualityData phase */
  private startPingPhase(match: MatchState) {
    // send immediately and then every 200ms (for example)
    const intervalMs = 50;

    const intervalID = setInterval(() => {
      if (match.pingPhaseCount >= match.pingPhaseTotal) {
        clearInterval(intervalID!);
        this.broadcastPlayersConfiguration(match);
        return;
      }
      this.broadcastRequestQuality(match);
      match.pingPhaseCount++;
    }, intervalMs);

    // fire the first round immediately:
    this.broadcastRequestQuality(match);
    match.pingPhaseCount++;
  }

  /** 2) Broadcast a single RequestQualityData to all players */
  private broadcastRequestQuality(match: MatchState) {
    const ts = Date.now();

    for (const p of match.players) {
      this.sendServerMessage(match, p, ServerMessageType.RequestQualityData, {
        ping: p.ping,
        packetsLossPercent: 0,
      });
      // record it *per player*
      p.pendingPings.set(match.sequenceCounter, ts);
    }
  }

  /** 4) Now send PlayersConfigurationData to everyone */
  private broadcastPlayersConfiguration(match: MatchState) {
    for (const p of match.players) {
      this.sendServerMessage(match, p, ServerMessageType.PlayersConfigurationData, {
        numPlayers: match.players.length,
        rawData: Buffer.alloc(4 * this.maxPlayers, 0),
      });
    }
  }

  private handlePlayerInputAck(match: MatchState, player: PlayerInfo, u: PlayerInputAckPayload) {
    // update that client's view of acked frames
    for (let i = 0; i < u.ackFrame.length; i++) {
      const playerAckedFrame = u.ackFrame[i];
      if (playerAckedFrame && player.ackedFrames[i] < playerAckedFrame) {
        player.ackedFrames[i] = playerAckedFrame;
      }
    }

    // compute ping as RTT: now minus when we sent the last PlayerInput to this client
    // find the matching timestamp in this player’s pendingPings
    const ts0 = player.pendingPings.get(u.serverMessageSequenceNumber);
    if (ts0 !== undefined) {
      player.ping = Date.now() - ts0;
      player.pendingPings.delete(u.serverMessageSequenceNumber);
    }
  }

  public handleReady(match: MatchState, player: PlayerInfo, isReady: boolean) {
    player.ready = isReady;
    if (match.players.every((p) => p.ready)) {
      // broadcast StartGame
      match.players.forEach((p) => this.sendServerMessage(match, p, ServerMessageType.StartGame, {}));
      // once everyone is ready start startTickLoop
      if (!match.tickTimer) {
        this.startTickLoop(match);
      }
    }
  }

  public handleClientInput(match: MatchState, player: PlayerInfo, payload: InputPayload) {
    const { startFrame, clientFrame, numFrames, inputPerFrame } = payload;

    // 1) record clientFrame
    player.lastClientFrame = clientFrame;

    // 2) store each new input in the Map
    const histMap = match.inputs[player.playerIndex];
    for (let i = 0; i < numFrames; i++) {
      const f = startFrame + i;
      histMap.set(f, inputPerFrame[i]);
    }

    // 3) prune any frames older than (currentServerFrame - 50)
    //    we assume match.currentFrame is your global tick count
    const minFrame = match.currentFrame - 9500;
    for (const f of histMap.keys()) {
      if (f < minFrame) {
        histMap.delete(f);
      }
    }

    // compute the serverFrame as your global tick count:
    const serverFrame = match.currentFrame;

    // and update this player’s rift once, here:
    player.rift = this.calcRiftVariableTick(serverFrame, clientFrame, player.ping, match.lastTickDuration);

    if (EMULATE_P2) {
      const { startFrame, clientFrame, numFrames, inputPerFrame } = payload;
      const player = this.players.find((p) => p.address === "emulated");
      if (!player) {
        return;
      }
      // 1) record clientFrame
      player.lastClientFrame = clientFrame;

      // 2) store each new input in the Map
      const histMap = match.inputs[player.playerIndex];
      for (let i = 0; i < numFrames; i++) {
        const f = startFrame + i;
        histMap.set(f, inputPerFrame[i]);
      }

      // 3) prune any frames older than (currentServerFrame - 50)
      //    we assume match.currentFrame is your global tick count
      const minFrame = match.currentFrame - 9500;
      for (const f of histMap.keys()) {
        if (f < minFrame) {
          histMap.delete(f);
        }
      }

      // compute the serverFrame as your global tick count:
      const serverFrame = match.currentFrame;

      // and update this player’s rift once, here:
      player.rift = this.calcRiftVariableTick(serverFrame, clientFrame, player.ping, match.lastTickDuration);
    }
  }

  private calcRiftVariableTick(serverFrame: number, clientFrame: number, ping: number, lastTickDuration: number): number {
    const TARGET_FRAME_TIME = lastTickDuration;
    const elapsed = Date.now() - lastTickDuration;
    const subFrameProgress = Math.min(elapsed / TARGET_FRAME_TIME, 1.0);
    const preciseServerFrame = serverFrame + subFrameProgress;

    const pingInFrames = ping / TARGET_FRAME_TIME;

    const expectedClientFrame = preciseServerFrame - pingInFrames / 2;
    const newRift = clientFrame - expectedClientFrame + 5;

    const rift = clientFrame + ping / TARGET_FRAME_TIME / 2 - serverFrame;
    console.log("rift", newRift, "serverFrame", serverFrame, "ping", ping, "lastTickDuration", lastTickDuration, "FRAME_ADV", rift);
    return newRift;
  }

  private startTickLoop(match: MatchState) {
    // seed the timing fields
    match.lastTickTime = Date.now();
    match.lastTickDuration = match.tickIntervalMs; // start with nominal

    match.tickTimer = setInterval(() => this.tick(match), match.tickIntervalMs);
  }

  private tick(match: MatchState) {
    // 1) Measure real tick duration
    const now = Date.now();
    match.lastTickDuration = now - match.lastTickTime;
    match.lastTickTime = now;

    // 2) Advance the global server frame count
    match.currentFrame++;

    let exit = false;
    for (const input of match.inputs) {
      if (input.size < 10) {
        exit = true;
      }
    }

    // 3) For each recipient, build a totally individualized payload
    match.players.forEach((recipient) => {
      if (exit) {
        // Lets build up some input first
        this.sendServerMessage(match, recipient, ServerMessageType.StartGame, null);
        return;
      }

      const startFrame: number[] = [];
      const numFrames: number[] = [];
      const inputPerFrame: number[][] = [];
      let numPredictedOverrides = 0;

      // prepare empty sub‑arrays for each peer
      for (let i = 0; i < this.maxPlayers; i++) {
        inputPerFrame.push([]);
        numFrames.push(0);
      }

      // 4) For each “peer” p, decide what frames to send
      match.players.forEach((peer, p) => {
        const histMap = match.inputs[p];
        const lastAck = recipient.ackedFrames[p];
        const nextFrame = lastAck + 1;

        // 4a) If we have the next real input
        if (histMap.has(nextFrame)) {
          startFrame[p] = nextFrame;
          // send everything we actually have
          let f = nextFrame;
          while (histMap.has(f)) {
            inputPerFrame[p].push(histMap.get(f)!);
            numFrames[p]++;
            f++;
          }
          peer.missedInputs = 0; // reset the miss counter

          // 4b) If we’ve missed <=5 in a row, just re‑send the last frame
        } else if (peer.missedInputs < 5) {
          startFrame[p] = lastAck;
          peer.missedInputs++;
          // repeat the last real input once
          const lastVal = histMap.get(lastAck) ?? 0;
          inputPerFrame[p].push(lastVal);
          numFrames[p] = 1;

          // 4c) If we’ve now missed >5, predict all the way up to currentFrame
        } else {
          startFrame[p] = nextFrame;
          let predictedCount = 0;
          let f = nextFrame;
          const lastVal = histMap.get(lastAck)!;

          // predict every missing frame up to server’s currentFrame
          while (f < match.currentFrame) {
            histMap.set(f, lastVal); // inject into history
            inputPerFrame[p].push(lastVal); // include in payload
            predictedCount++;
            f++;
          }

          numFrames[p] = predictedCount;
          numPredictedOverrides = predictedCount;
        }
      });
      const ts = Date.now();

      // 5) Fire off the personalized PlayerInput
      this.sendPlayerInput(match, recipient, {
        numPlayers: this.maxPlayers,
        startFrame,
        numFrames,
        inputPerFrame,
        numPredictedOverrides,
        numZeroedOverrides: 0,
        ping: recipient.ping,
        packetsLossPercent: 0,
        rift: recipient.rift,
        checksumAckFrame: 0,
      });
      recipient.pendingPings.set(match.sequenceCounter, ts);
    });
  }
  private sendPlayerInput(match: MatchState, player: PlayerInfo, data: any) {
    // record when we sent, for RTT
    player.lastSentTime = Date.now();
    this.sendServerMessage(match, player, ServerMessageType.PlayerInput, data);
  }

  private sendServerMessage(match: MatchState, player: PlayerInfo, type: ServerMessageType, data: any) {
    const header: ServerHeader = {
      type,
      sequence: ++match.sequenceCounter,
    };

    if (!player.emulated) {
      const buf = serializeServerMessage(
        header,
        data,
        this.maxPlayers, // pass in your configured player count
      );
      const compressBuf = compressPacket(buf);
      logPacket(compressBuf, ServerMessageType[type], "SEND", data);
      this.socket.send(compressBuf, player.port, player.address);
    }
  }
}
