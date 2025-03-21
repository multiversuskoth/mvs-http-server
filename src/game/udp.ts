import * as dgram from "dgram";
import { GAME_MATCH_STATE, GAME_SERVER_STATE, OP_CODES, PLAYER_NUMBER, Player_STATE } from "./opcodes";

export const GAME_SERVER_PORT = 41234;

export class GameServer {
  gameMatches: Map<string, GameMatch> = new Map();
  players: Map<string, Player> = new Map();
  udp = dgram.createSocket("udp4");
  state = GAME_SERVER_STATE.INIT;

  starServer() {
    this.handleMessages();
    this.udp.on("listening", () => {
      const address = this.udp.address();
      this.state = GAME_SERVER_STATE.READY;
      console.log(`Game Server listening on ${address.address}:${address.port}`);
    });

    this.udp.on("error", (err) => {
      console.error("Server error:", err);
      this.udp.close();
    });

    this.udp.bind(GAME_SERVER_PORT);
  }

  handleMessages() {
    this.udp.on("message", async (msg, rinfo) => {
      const bufferRead = new BufferReader(msg);
      const opCode = bufferRead.readUint16BE();

      switch (opCode) {
        case OP_CODES.CLIENT_UDP_HOLE_PUNCH_P1: {
          console.log("UDP:", "CLIENT_UDP_HOLE_PUNCH_P1");
          const matchID = bufferRead.readToHexString();
          const match = this.registerMatch(matchID);
          const player = this.checkIfPlayerJoinedMatch(match, PLAYER_NUMBER.ONE, rinfo);

          break;
        }
        case OP_CODES.CLIENT_INIT_CONNECTION_P1: {
          console.log("UDP:", "CLIENT_INIT_CONNECTION_P1");
          const receivedPacketNumber = bufferRead.readUint8();
          let player = this.getPlayer(rinfo);
          if (!player) {
            const matchID = bufferRead.readToHexString();
            const match = this.checkIfMatchExists(matchID);
            player = this.checkIfPlayerJoinedMatch(match, PLAYER_NUMBER.ONE, rinfo);
          }
          if (receivedPacketNumber < player.currentPacket) {
            // Packet out of order
            return;
          }
          player.currentPacket = receivedPacketNumber;

          let sendBuffer = Buffer.alloc(8);

          sendBuffer.writeUInt16BE(OP_CODES.SERVER_INITIAL_RESPONSE_P1);
          sendBuffer.writeUIntBE(OP_CODES.SERVER_INITIAL_RESPONSE_DATA, 2, 4);
          await this.sendMessage(player.match, sendBuffer, 6, rinfo);

          sendBuffer.writeUInt16BE(OP_CODES.SERVER_INITIAL2_RESPONSE_P1);
          sendBuffer.writeUIntBE(player.match.packetNumber, 2, 1);
          sendBuffer.writeUIntBE(OP_CODES.SERVER_INITIAL_RESPONSE_DATA, 3, 4);
          await this.sendMessage(player.match, sendBuffer, 7, rinfo);

          sendBuffer.writeUInt16BE(OP_CODES.SERVER_PHASE1_1);
          sendBuffer.writeUIntBE(player.match.packetNumber, 2, 1);
          await this.sendMessage(player.match, sendBuffer, 4, rinfo);
          player.lastPacketSentTimeStamp = new Date().getTime();
          break;
        }

        case OP_CODES.CLIENT_PHASE1_RESPONSE: {
          console.log("UDP:", "CLIENT_PHASE1_RESPONSE");
          const receivedPacketNumber = bufferRead.readUint8();
          const player = this.getPlayer(rinfo);
          if (!player) {
            //this.udp.disconnect()
            return;
          }

          if (receivedPacketNumber < player.currentPacket) {
            // Packet out of order
            return;
          }
          player.currentPacket = receivedPacketNumber;
          player.lastPacketReceivedTimeStamp = new Date().getTime();
          console.log("PING:", player.lastPacketReceivedTimeStamp - player.lastPacketSentTimeStamp);
          let sendBuffer = Buffer.alloc(8);

          if (player.lastPacketSentTimeStamp && player.match.state === GAME_MATCH_STATE.PLAYERS_CONNECTED) {
            sendBuffer.writeUInt16BE(OP_CODES.SERVER_PHASE1_2);
            sendBuffer.writeUIntBE(player.match.packetNumber, 2, 1);
            sendBuffer.writeUInt8(player.lastPacketReceivedTimeStamp - player.lastPacketSentTimeStamp, 3);
            await this.sendMessage(player.match, sendBuffer, 4, rinfo);
            player.lastPacketSentTimeStamp = new Date().getTime();
            return;
          }

          sendBuffer.writeUInt16BE(OP_CODES.SERVER_PHASE1_1);
          sendBuffer.writeUIntBE(player.match.packetNumber, 2, 1);
          await this.sendMessage(player.match, sendBuffer, 4, rinfo);
          player.lastPacketSentTimeStamp = new Date().getTime();

          //TODO: Both players need to be connected before changing to the next state
          player.match.state = GAME_MATCH_STATE.PLAYERS_CONNECTED;
          break;
        }
      }
    });
  }

  registerMatch(matchId: string) {
    const match = new GameMatch();
    this.gameMatches.set(matchId, match);
    return match;
  }

  getPlayer(rinfo: dgram.RemoteInfo) {
    const playerId = `${rinfo.address}:${rinfo.port}`;
    return this.players.get(playerId);
  }

  sendMessage(match: GameMatch, buffer: Buffer, length: number, rinfo: dgram.RemoteInfo) {
    return new Promise((resolve) => {
      const bufferCut = buffer.subarray(0, length);
      this.udp.send(bufferCut, rinfo.port, rinfo.address, () => {
        console.log(bufferCut.toString("hex"));
        //Clear buffer
        buffer.fill(0);
        resolve(true);
      });
      match.packetNumber++;
    });
  }

  checkIfPlayerJoinedMatch(match: GameMatch, player_number: PLAYER_NUMBER.ONE, rinfo: dgram.RemoteInfo) {
    const playerId = `${rinfo.address}:${rinfo.port}`;
    let player = this.players.get(playerId);
    if (!player) {
      player = new Player(match, rinfo);
      this.players.set(playerId, player);
    }
    return player;
  }

  checkIfMatchExists(matchID: string) {
    let match = this.gameMatches.get(matchID);
    if (!match) {
      console.log("ADDING MATCH", matchID);
      match = new GameMatch();
      this.gameMatches.set(matchID, match);
    }
    return match;
  }
}

class GameMatch {
  state: GAME_MATCH_STATE = GAME_MATCH_STATE.INIT;
  packetNumber = 0;
}

class Player {
  lastPacketSentTimeStamp: number = 0;
  lastPacketReceivedTimeStamp: number = 0;
  ping = 0;
  state: Player_STATE = 0;
  currentPacket = 0;
  rinfo: dgram.RemoteInfo;
  match: GameMatch;
  constructor(match: GameMatch, rinfo: dgram.RemoteInfo) {
    this.match = match;
    this.rinfo = rinfo;
  }
}

class BufferReader {
  offset = 0;
  buffer: Buffer;
  constructor(_buffer: Buffer) {
    this.buffer = _buffer;
  }

  readToHexString() {
    return this.buffer.subarray(this.offset).toString("hex");
  }

  readUint8() {
    const data = this.buffer.readUint8(this.offset);
    this.offset += 1;
    return data;
  }
  readUint16BE() {
    const data = this.buffer.readUint16BE(this.offset);
    this.offset += 2;
    return data;
  }

  readUint32BE() {
    const data = this.buffer.readUint32BE(this.offset);
    this.offset += 4;
    return data;
  }
}
