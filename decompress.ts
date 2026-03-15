export enum MessageType {
  NewConnectionReply = 1,
  StartGame = 2,
  InputAck = 3,
  PlayerInput = 4,
  RequestQualityData = 6,
  PlayersStatus = 7,
  Kick = 8,
  ChecksumAck = 9,
  PlayersConfigurationData = 10,
  PlayerDisconnected = 11,
  ChangePort = 12,
}

export interface Header {
  type: MessageType;
  sequence: number;
}

export interface NewConnectionReply {
  success: number;
  matchNumPlayers: number;
  playerIndex: number;
  matchDurationInFrames: number;
  isDebugMode: number;
  isValidationServerDebugMode: number;
}

export interface InputAck {
  ackFrame: number;
}

export interface PlayerInput {
  numPlayers: number;
  startFrame: number[]; // length 4
  numFrames: number[]; // length 4
  numPredictedOverrides: number;
  numZeroedOverrides: number;
  ping: number;
  packetsLossPercent: number;
  rift: number;
  checksumAckFrame: number;
  inputPerFrame: number[][]; // [player][frame] = uint32, 4×30
}

export interface RequestQualityData {
  ping: number;
  packetsLossPercent: number;
}

export interface PlayerStatusData {
  averagePing: number;
}

export interface PlayersStatus {
  numPlayers: number;
  data: PlayerStatusData[]; // length 4
}

export interface Kick {
  reason: number;
  param1: number;
}

export interface ChecksumAck {
  ackFrame: number;
}

export interface PlayersConfigurationData {
  numPlayers: number;
  // raw slice of the PfgPlayerConfigurationData[4]
  rawData: Buffer;
}

export interface PlayerDisconnected {
  playerIndex: number;
  shouldAITakeControl: number;
  aiTakeControlFrame: number;
  playerDisconnectedArrayIndex: number;
}

export interface ChangePort {
  port: number;
}

export interface Empty {}

export type MessageTypeUnion =
  | NewConnectionReply
  | InputAck
  | PlayerInput
  | RequestQualityData
  | PlayersStatus
  | Kick
  | ChecksumAck
  | PlayersConfigurationData
  | PlayerDisconnected
  | ChangePort
  | Empty;

export interface UdpServerMessage {
  header: Header;
  u: MessageTypeUnion;
  //buffer: Buffer; // the original full decompressed buffer
}

const HEADER_SIZE = 5;

export function parseUdpServerMessage(buf: Buffer): UdpServerMessage {
  if (buf.length < HEADER_SIZE) {
    throw new Error(`Buffer too small for header: got ${buf.length}, need ≥${HEADER_SIZE}`);
  }

  let offset = 0;

  // —— 1) Read packed header ——
  const typeByte = buf.readUInt8(offset);
  offset += 1;

  const sequence = buf.readUInt32LE(offset);
  offset += 4;

  const msgType = typeByte as MessageType;
  const header: Header = { type: msgType, sequence };

  // —— 2) Read union payload ——
  let u: MessageTypeUnion;
  switch (msgType) {
    case MessageType.NewConnectionReply: {
      const success = buf.readUInt8(offset++);
      const numPlyrs = buf.readUInt8(offset++);
      const plIndex = buf.readUInt8(offset++);
      const duration = buf.readUInt32LE(offset);
      offset += 4;
      const dbgMode = buf.readUInt8(offset++);
      const valDbg = buf.readUInt8(offset++);
      u = {
        success,
        matchNumPlayers: numPlyrs,
        playerIndex: plIndex,
        matchDurationInFrames: duration,
        isDebugMode: dbgMode,
        isValidationServerDebugMode: valDbg,
      };
      break;
    }

    case MessageType.InputAck: {
      const ackFrame = buf.readUInt32LE(offset);
      offset += 4;
      u = { ackFrame };
      break;
    }

    case MessageType.PlayerInput: {
      const numPlayers = buf.readUInt8(offset++);
      // startFrame[numPlayers]
      const startFrame: number[] = [];
      for (let p = 0; p < numPlayers; p++) {
        startFrame[p] = buf.readUInt32LE(offset);
        offset += 4;
      }
      // numFrames[numPlayers]
      const numFrames: number[] = [];
      for (let p = 0; p < numPlayers; p++) {
        numFrames[p] = buf.readUInt8(offset++);
      }
      // fixed fields
      const numPredictedOverrides = buf.readUInt16LE(offset);
      offset += 2;
      const numZeroedOverrides = buf.readUInt16LE(offset);
      offset += 2;
      const ping = buf.readInt16LE(offset);
      offset += 2;
      const packetsLossPercent = buf.readInt16LE(offset);
      offset += 2;
      const rift = buf.readInt16LE(offset) / 100;
      offset += 2;
      const checksumAckFrame = buf.readUInt32LE(offset);
      offset += 4;

      // inputPerFrame[numPlayers][numFrames[p]]
      const inputPerFrame: number[][] = [];
      // struct reserves 4×30 uint32s, laid out player-major:
      for (let p = 0; p < numPlayers; p++) {
        inputPerFrame[p] = [];
        for (let f = 0; f < numFrames[p]; f++) {
          inputPerFrame[p][f] = buf.readUInt32LE(offset);
          offset += 4;
        }
      }

      u = {
        numPlayers,
        startFrame,
        numFrames,
        numPredictedOverrides,
        numZeroedOverrides,
        ping,
        packetsLossPercent,
        rift,
        checksumAckFrame,
        inputPerFrame,
      };
      break;
    }

    case MessageType.RequestQualityData: {
      const ping = buf.readInt16LE(offset);
      offset += 2;
      const packetsLossPercent = buf.readInt16LE(offset);
      offset += 2;
      u = { ping, packetsLossPercent };
      break;
    }

    case MessageType.PlayersStatus: {
      const numPlayers = buf.readUInt8(offset++);
      const data: PlayerStatusData[] = [];
      for (let i = 0; i < numPlayers; i++) {
        const avgPing = buf.readInt16LE(offset);
        offset += 2;
        data.push({ averagePing: avgPing });
      }
      u = { numPlayers, data };
      break;
    }

    case MessageType.Kick: {
      const reason = buf.readUInt16LE(offset);
      offset += 2;
      const param1 = buf.readUInt32LE(offset);
      offset += 4;
      u = { reason, param1 };
      break;
    }

    case MessageType.ChecksumAck: {
      const ackFrame = buf.readUInt32LE(offset);
      offset += 4;
      u = { ackFrame };
      break;
    }

    case MessageType.PlayersConfigurationData: {
      const numPlayers = buf.readUInt8(offset++);
      // raw PfgPlayerConfigurationData[4]; length = 16 bytes

      const rawData2 = [];
      for (let i = 0; i < numPlayers; i++) {
        const value1 = buf.readUInt16LE(offset);
        offset += 2;

        rawData2.push({ value1 });
      }

      u = { numPlayers, rawData2 };
      break;
    }

    case MessageType.PlayerDisconnected: {
      const playerIndex = buf.readUInt8(offset++);
      const shouldAITakeControl = buf.readUInt8(offset++);
      const aiTakeControlFrame = buf.readUInt32LE(offset);
      offset += 4;
      const playerDisconnectedArrayIndex = buf.readUInt16LE(offset);
      offset += 2;
      u = {
        playerIndex,
        shouldAITakeControl,
        aiTakeControlFrame,
        playerDisconnectedArrayIndex,
      };
      break;
    }

    case MessageType.ChangePort: {
      const port = buf.readUInt16LE(offset);
      offset += 2;
      u = { port };
      break;
    }

    case MessageType.StartGame: {
      u = {};
      break;
    }

    default:
      throw new Error(`Unknown message type ${typeByte}`);
  }

  return {
    header,
    u,
  };
}

export function decompressPacket(
  compressedBuffer: Buffer | Uint8Array,
  originalLength: number = 1024,
): Buffer {
  if (originalLength < 0 || originalLength > 1024) {
    throw new Error(
      `decompressPacket: originalLength (${originalLength}) must be between 0 and 1024`,
    );
  }

  const compressed = Buffer.isBuffer(compressedBuffer)
    ? compressedBuffer
    : Buffer.from(compressedBuffer);

  // Pre‑allocate exactly 1024 bytes for the output
  const outBuf = Buffer.alloc(1024);
  let readPos = 0;
  let writePos = 0;

  while (readPos < compressed.length && writePos < originalLength) {
    // Read the mask byte
    const mask = compressed[readPos++];
    for (let bit = 0; bit < 8 && writePos < originalLength; bit++) {
      const isNonZero = (mask & (1 << bit)) !== 0;
      if (isNonZero) {
        if (readPos >= compressed.length) {
          throw new Error("decompressPacket: truncated compressed data");
        }
        if (writePos >= 1024) {
          throw new Error("decompressPacket: output buffer overflow (1024 bytes)");
        }
        outBuf[writePos++] = compressed[readPos++];
      } else {
        if (writePos >= 1024) {
          throw new Error("decompressPacket: output buffer overflow (1024 bytes)");
        }
        outBuf[writePos++] = 0;
      }
    }
  }

  // Return only the requested portion
  return outBuf.subarray(0, originalLength);
}

const playerInputBuffer = parseUdpServerMessage(decompressPacket(
  Buffer.from([        
    0xa7, 0x03, 0x3e, 0x0c, 0x02, 0x06, 0xcc, 0x01,
    0x06, 0x95, 0x0c, 0x00
  ]),
  1024,
));



console.log(JSON.stringify(playerInputBuffer, null, 2));

export interface PlayerInput {
  packetType: number;
  sequenceNumber: number;
  numPlayers: number;
  startFrame: number[]; // length 4
  numFrames: number[]; // length 4
  numPredictedOverrides: number;
  numZeroedOverrides: number;
  ping: number;
  packetsLossPercent: number;
  rift: number;
  checksumAckFrame: number;
  inputPerFrame: number[][]; // [player][frame] = uint32, 4×30
}

