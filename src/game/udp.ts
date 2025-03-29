import * as dgram from "dgram";
import { GAME_MATCH_STATE, GAME_SERVER_STATE, OP_CODES, PLAYER_NUMBER, Player_STATE } from "./opcodes";

export const GAME_SERVER_PORT = 41234;

const INIT_RESPONSE = Buffer.from([0x02, 0x03, 0xa0, 0x8c]);
const PHASE2_DATA = Buffer.from([0x02, 0x03, 0x01, 0x01]);

export class GameServer {
  gameMatches: Map<string, GameMatch> = new Map();
  players: Map<string, Player> = new Map();
  udp = dgram.createSocket("udp4");
  state = GAME_SERVER_STATE.INIT;
  buffer = Buffer.alloc(128);

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
      console.log("Received:",msg.toString("hex"));
      const bufferRead = new BufferReader(msg);
      const opCode = bufferRead.readUint16BE();

      switch (opCode) {
        case OP_CODES.CLIENT_UDP_HOLE_PUNCH_P1: {
          console.log("UDP:", "CLIENT_UDP_HOLE_PUNCH_P1");
          const matchID = bufferRead.readToHexString();
          const match = this.registerMatch(matchID);
          this.registerPlayer(match, PLAYER_NUMBER.ONE, rinfo);

          break;
        }
        case OP_CODES.CLIENT_INIT_CONNECTION_P1: {
          console.log("UDP:", "CLIENT_INIT_CONNECTION_P1");
          let { player, success } = this.getPlayer(msg, rinfo);
          if (!success) {
            return;
          }
          if (!player) {
            const receivedPacketNumber = bufferRead.readUint8();
            const matchID = bufferRead.readToHexString();
            const match = this.checkIfMatchExists(matchID);
            player = this.registerPlayer(match, PLAYER_NUMBER.ONE, rinfo);
            player.currentPacket = receivedPacketNumber;
          }

          await this.sendMessage(player, this.craftMessage(player.match, OP_CODES.SERVER_INITIAL_RESPONSE_P1, INIT_RESPONSE, false), rinfo);
          await this.sendMessage(player, this.craftMessage(player.match, OP_CODES.SERVER_INITIAL2_RESPONSE_P1, INIT_RESPONSE), rinfo);
          await this.sendMessage(player, this.craftMessage(player.match, OP_CODES.SERVER_PHASE1_1, null), rinfo);

          break;
        }

        case OP_CODES.CLIENT_PHASE1_RESPONSE: {
          console.log("UDP:", "CLIENT_PHASE1_RESPONSE");
          const { player, success } = this.getPlayer(msg, rinfo);
          if (!success) {
            return;
          }

          if (!player) {
            //this.udp.disconnect()
            return;
          }

          if (player.lastPacketSentTimeStamp && player.match.state === GAME_MATCH_STATE.PLAYERS_CONNECTED) {
            // TODO: I don't think it changes a 3f but when both clients packets ==3f? need more capturing to verify
            if (player.currentPacket === 0x3f) {
              await this.sendMessage(player, this.craftMessage(player.match, OP_CODES.SERVER_PHASE2, PHASE2_DATA), rinfo);
              player.state = Player_STATE.PHASE2;
              //TODO Implement resends incase packet is lost
              return;
            }

            await this.sendMessage(
              player,
              this.craftMessage(
                player.match,
                OP_CODES.SERVER_PHASE1_2,
                Buffer.from([player.lastPacketReceivedTimeStamp - player.lastPacketSentTimeStamp])
              ),
              rinfo
            );
            return;
          }

          await this.sendMessage(player, this.craftMessage(player.match, OP_CODES.SERVER_PHASE1_1, null), rinfo);
          player.lastPacketSentTimeStamp = new Date().getTime();

          //TODO: Both players need to be connected before changing to the next state
          player.match.state = GAME_MATCH_STATE.PLAYERS_CONNECTED;
          break;
        }

        case OP_CODES.CLIENT_PHASE2_WAIT: {
          console.log("UDP:", "CLIENT_PHASE2_WAIT");
          let { player, success } = this.getPlayer(msg, rinfo);
          if (!success) {
            return;
          }
          if (!player) {
            //this.udp.disconnect()
            return;
          }
          const retryInterval = setInterval(async () => {
            if (player.state === Player_STATE.PHASE2) {
              await this.sendMessage(player, this.craftMessage(player.match, OP_CODES.SERVER_PHASE2, PHASE2_DATA), rinfo);
            } else {
              clearInterval(retryInterval);
            }
          }, 196);
          break;
        }

        case OP_CODES.CLIENT_PHASE2_LOADING: {
          console.log("UDP:", "CLIENT_PHASE2_LOADING");
          let { player, success } = this.getPlayer(msg, rinfo);
          if (!success) {
            return;
          }
          if (!player) {
            //this.udp.disconnect()
            return;
          }
          player.state = Player_STATE.PHASE3;
          setTimeout(async () => {
            // Send this when both clients have caught up
            await this.sendMessage(player, this.craftMessage(player.match, OP_CODES.SERVER_CLIENT_PHASE3, null), rinfo);
          }, 4000);
          break;
        }

        case OP_CODES.SERVER_CLIENT_PHASE3: {
          console.log("UDP:", "SERVER_CLIENT_PHASE3");
          let { player, success } = this.getPlayer(msg, rinfo);
          if (!success) {
            return;
          }
          if (!player) {
            //this.udp.disconnect()
            return;
          }
          player.state = Player_STATE.PHASE3;
          await this.sendMessage(player, this.craftMessage(player.match, OP_CODES.SERVER_CLIENT_PHASE3, null), rinfo);
          break;
        }
      }
    });
  }

  craftMessage(match: GameMatch, opcode: OP_CODES, data: Buffer | null, packetNumber = true) {
    this.buffer.writeUInt16BE(opcode);
    const headerLength = !packetNumber ? 2 : 3;
    if (packetNumber) {
      this.buffer.writeUIntBE(match.packetNumber, 2, 1);
    }
    if (data) {
      data.copy(this.buffer, headerLength);
    }
    const dataByteLength = data ? data.byteLength : 0;
    let messageLength = headerLength + dataByteLength;
    if (messageLength < 4) {
      messageLength = 4;
      this.buffer[3] = 0;
    }
    return this.buffer.subarray(0, messageLength);
  }

  registerMatch(matchId: string) {
    const match = new GameMatch();
    this.gameMatches.set(matchId, match);
    return match;
  }

  getPlayer(rcvBuffer: Buffer, rinfo: dgram.RemoteInfo) {
    const playerId = `${rinfo.address}:${rinfo.port}`;
    const player = this.players.get(playerId);
    if (player) {
      const receivedPacketNumber = rcvBuffer.readUint8(2);
      if (receivedPacketNumber < player.currentPacket) {
        // Packet out of order
        console.log("Packet out of order");
        return { player: null, success: false };
      }
      player.currentPacket = receivedPacketNumber;
      player.lastPacketReceivedTimeStamp = new Date().getTime();
      return { player, success: true };
    }
    return { player: null, success: true };
  }

  sendMessage(player: Player, buffer: Buffer, rinfo: dgram.RemoteInfo) {
    return new Promise((resolve) => {
      this.udp.send(buffer, rinfo.port, rinfo.address, () => {
        console.log(buffer.toString("hex"));
        resolve(true);
      });
      player.match.packetNumber++;
      player.lastPacketSentTimeStamp = new Date().getTime();
    });
  }

  registerPlayer(match: GameMatch, player_number: PLAYER_NUMBER.ONE, rinfo: dgram.RemoteInfo) {
    const playerId = `${rinfo.address}:${rinfo.port}`;
    const player = new Player(match, rinfo);
    this.players.set(playerId, player);

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
