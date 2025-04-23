// -----------------------------------------------------------------------------
// TYPES & INTERFACES
// -----------------------------------------------------------------------------

export enum ClientMessageType {
  NewConnection = 1,
  Input = 2,
  PlayerInputAck = 3,
  MatchResult = 4,
  QualityData = 5,
  Disconnecting = 6,
  PlayerDisconnectedAck = 7,
  ReadyToStartMatch = 8,
}

export interface Header {
  type: ClientMessageType;
  sequence: number;
}

export interface ClientPlayerConfigData {
  teamId: number;
  playerIndex: number;
}

export interface ClientMatchData {
  matchId: string; // up to 25 chars, zero‑terminated
  key: string; // up to 45 chars
  environmentId: string; // up to 25 chars
}

export interface NewConnectionPayload {
  messageVersion: number;
  playerData: ClientPlayerConfigData;
  matchData: ClientMatchData;
}

export interface InputPayload {
  startFrame: number;
  clientFrame: number;
  numFrames: number;
  numChecksums: number;
  inputPerFrame: number[];
  checksumPerFrame: number[];
}

export interface PlayerInputAckPayload {
  numPlayers: number;
  ackFrame: number[];
  serverMessageSequenceNumber: number;
}

export interface MatchResultPayload {
  numPlayers: number;
  lastFrameChecksum: number;
  winningTeamIndex: number;
}

export interface QualityDataPayload {
  serverMessageSequenceNumber: number;
}

export interface DisconnectingPayload {
  reason: number;
}

export interface PlayerDisconnectedAckPayload {
  playerDisconnectedArrayIndex: number;
}

export interface ReadyToStartMatchPayload {
  ready: number;
}

export type ClientUnion =
  | NewConnectionPayload
  | InputPayload
  | PlayerInputAckPayload
  | MatchResultPayload
  | QualityDataPayload
  | DisconnectingPayload
  | PlayerDisconnectedAckPayload
  | ReadyToStartMatchPayload;

export interface UdpClientMessage {
  header: Header;
  u: ClientUnion;
  //buffer: Buffer;
}

const HEADER_SIZE = 1 + 4; // type:uint8 + sequence:uint32LE

export function parseUdpClientOutboundMessage(buf: Buffer): UdpClientMessage {
  if (buf.length < HEADER_SIZE) {
    throw new Error(`Buffer too small for header (${buf.length} < ${HEADER_SIZE})`);
  }

  let offset = 0;
  // --- Read header ---
  const typeByte = buf.readUInt8(offset++);
  const sequence = buf.readUInt32LE(offset);
  offset += 4;

  const msgType = typeByte as ClientMessageType;
  const header: Header = { type: msgType, sequence };

  // --- Read union payload ---
  let u: ClientUnion;
  switch (msgType) {
    case ClientMessageType.NewConnection: {
      // struct size = 0x66
      const messageVersion = buf.readUInt16LE(offset);
      offset += 2;

      const teamId = buf.readUInt16LE(offset);
      const playerIndex = buf.readUInt16LE(offset + 2);
      offset += 4;

      // MatchData
      // Read as zero‑terminated ASCII/UTF‑8 strings:
      const readString = (len: number) => {
        const slice = buf.subarray(offset, offset + len);
        offset += len;
        // trim after first 0x00
        const zeroAt = slice.indexOf(0);
        return slice.subarray(0, zeroAt >= 0 ? zeroAt : slice.length).toString("utf8");
      };

      const matchId = readString(25);
      const key = readString(45);
      const environmentId = readString(25);

      u = {
        messageVersion,
        playerData: { teamId, playerIndex },
        matchData: { matchId, key, environmentId },
      };
      break;
    }

    case ClientMessageType.Input: {
      const startFrame = buf.readUInt32LE(offset);
      offset += 4;
      const clientFrame = buf.readUInt32LE(offset);
      offset += 4;
      const numFrames = buf.readUInt8(offset++);
      const numChecksums = buf.readUInt8(offset++);

      const inputPerFrame: number[] = [];
      for (let i = 0; i < numFrames; i++) {
        inputPerFrame.push(buf.readUInt32LE(offset));
        offset += 4;
      }

      const checksumPerFrame: number[] = [];
      for (let i = 0; i < numChecksums; i++) {
        checksumPerFrame.push(buf.readUInt32LE(offset));
        offset += 4;
      }

      u = { startFrame, clientFrame, numFrames, numChecksums, inputPerFrame, checksumPerFrame };
      break;
    }

    case ClientMessageType.PlayerInputAck: {
      const numPlayers = buf.readUInt8(offset++);
      const ackFrame: number[] = [];
      for (let i = 0; i < numPlayers; i++) {
        ackFrame.push(buf.readUInt32LE(offset));
        offset += 4;
      }
      const serverMessageSequenceNumber = buf.readUInt32LE(offset);
      offset += 4;
      u = { numPlayers, ackFrame, serverMessageSequenceNumber };
      break;
    }

    case ClientMessageType.MatchResult: {
      const numPlayers = buf.readUInt8(offset++);
      const lastFrameChecksum = buf.readUInt32LE(offset);
      offset += 4;
      const winningTeamIndex = buf.readUInt8(offset++);
      u = { numPlayers, lastFrameChecksum, winningTeamIndex };
      break;
    }

    case ClientMessageType.QualityData: {
      const serverMessageSequenceNumber = buf.readUInt32LE(offset);
      offset += 4;
      u = { serverMessageSequenceNumber };
      break;
    }

    case ClientMessageType.Disconnecting: {
      const reason = buf.readUInt8(offset++);
      u = { reason };
      break;
    }

    case ClientMessageType.PlayerDisconnectedAck: {
      const playerDisconnectedArrayIndex = buf.readUInt8(offset++);
      u = { playerDisconnectedArrayIndex };
      break;
    }

    case ClientMessageType.ReadyToStartMatch: {
      const ready = buf.readUInt8(offset++);
      u = { ready };
      break;
    }

    default:
      throw new Error(`Unknown client message type ${typeByte}`);
  }

  return { header, u };
}
