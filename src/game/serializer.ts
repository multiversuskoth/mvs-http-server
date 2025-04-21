import { Buffer } from "buffer";
import { Header as ServerHeader, MessageType as ServerMsgType } from "./udpServerMessage";

const PlayerConfigValues = [0, 257, 512, 769];

/**
 * Serialize a server message header + payload into a Buffer using big-endian encoding.
 * @param header       The message header (type and sequence).
 * @param data         The payload data object matching the message type.
 * @param maxPlayers   Maximum number of players (for array lengths).
 * @param maxFrames    Maximum frames per player (for inputPerFrame arrays).
 */
export function serializeServerMessage(header: ServerHeader, data: any, maxPlayers: number, maxFrames: number = 30): Buffer {
  // 1) Header = Type:uint8 + Sequence:uint32BE
  const headerBuf = Buffer.alloc(1 + 4);
  headerBuf.writeUInt8(header.type, 0);
  headerBuf.writeUInt32LE(header.sequence, 1);

  let payloadBuf: Buffer;
  switch (header.type) {
    case ServerMsgType.NewConnectionReply: {
      // uint8 Success; uint8 MatchNumPlayers; uint8 PlayerIndex;
      // uint32BE MatchDurationInFrames;
      // uint8 IsDebugMode; uint8 IsValidationServerDebugMode;
      payloadBuf = Buffer.alloc(1 + 1 + 1 + 4 + 1 + 1);
      payloadBuf.writeUInt8(data.success, 0);
      payloadBuf.writeUInt8(data.matchNumPlayers, 1);
      payloadBuf.writeUInt8(data.playerIndex, 2);
      payloadBuf.writeUInt32LE(data.matchDurationInFrames, 3);
      payloadBuf.writeUInt8(data.isDebugMode ? 1 : 0, 7);
      payloadBuf.writeUInt8(data.isValidationServerDebugMode ? 1 : 0, 8);
      break;
    }

    case ServerMsgType.InputAck: {
      // uint32BE AckFrame;
      payloadBuf = Buffer.alloc(4);
      payloadBuf.writeUInt32LE(data.ackFrame, 0);
      break;
    }

    case ServerMsgType.PlayerInput: {
      /**
       * uint8  NumPlayers;
       * uint32BE StartFrame[maxPlayers];
       * uint8  NumFrames[maxPlayers];
       * uint16BE NumPredictedOverrides;
       * uint16BE NumZeroedOverrides;
       * int16BE  Ping;
       * int16BE  PacketsLossPercent;
       * int16BE  Rift;
       * uint32BE ChecksumAckFrame;
       * uint32BE InputPerFrame[maxPlayers][maxFrames];
       */
      const size = 1 + 4 * maxPlayers + maxPlayers + 2 + 2 + 2 + 2 + 2 + 4 + 4 * maxPlayers * maxFrames;
      payloadBuf = Buffer.alloc(size);
      let off = 0;
      payloadBuf.writeUInt8(data.numPlayers, off);
      off += 1;

      // StartFrame[]
      for (let i = 0; i < maxPlayers; i++) {
        const sf = data.startFrame[i] || 0;
        payloadBuf.writeUInt32LE(sf, off);
        off += 4;
      }

      // NumFrames[]
      for (let i = 0; i < maxPlayers; i++) {
        const nf = data.numFrames[i] || 0;
        payloadBuf.writeUInt8(nf, off);
        off += 1;
      }

      // Overrides
      payloadBuf.writeUInt16LE(data.numPredictedOverrides || 0, off);
      off += 2;
      payloadBuf.writeUInt16LE(data.numZeroedOverrides || 0, off);
      off += 2;

      // Ping, PacketsLossPercent, Rift
      payloadBuf.writeInt16LE(data.ping || 0, off);
      off += 2;
      payloadBuf.writeInt16LE(data.packetsLossPercent || 0, off);
      off += 2;
      payloadBuf.writeInt16LE(data.rift || 0, off);
      off += 2;

      // ChecksumAckFrame
      payloadBuf.writeUInt32LE(data.checksumAckFrame || 0, off);
      off += 4;

      // InputPerFrame[][
      for (let pi = 0; pi < maxPlayers; pi++) {
        const arr: number[] = data.inputPerFrame[pi] || [];
        for (let f = 0; f < maxFrames; f++) {
          const v = arr[f] || 0;
          payloadBuf.writeUInt32LE(v, off);
          off += 4;
        }
      }
      break;
    }

    case ServerMsgType.RequestQualityData: {
      // int16BE Ping; int16BE PacketsLossPercent
      payloadBuf = Buffer.alloc(4);
      payloadBuf.writeInt16LE(data.ping || 0, 0);
      payloadBuf.writeInt16LE(data.packetsLossPercent || 0, 2);
      break;
    }

    case ServerMsgType.PlayersStatus: {
      // uint8 NumPlayers; int16BE AveragePing[maxPlayers]
      payloadBuf = Buffer.alloc(1 + 2 * maxPlayers);
      payloadBuf.writeUInt8(data.numPlayers, 0);
      let o = 1;
      for (let i = 0; i < maxPlayers; i++) {
        const avg = data.status?.[i]?.averagePing || 0;
        payloadBuf.writeInt16LE(avg, o);
        o += 2;
      }
      break;
    }

    case ServerMsgType.Kick: {
      // uint16BE Reason; uint32BE Param1;
      payloadBuf = Buffer.alloc(2 + 4);
      payloadBuf.writeUInt16LE(data.reason || 0, 0);
      payloadBuf.writeUInt32LE(data.param1 || 0, 2);
      break;
    }

    case ServerMsgType.ChecksumAck: {
      // uint32BE AckFrame;
      payloadBuf = Buffer.alloc(4);
      payloadBuf.writeUInt32LE(data.ackFrame, 0);
      break;
    }

    case ServerMsgType.PlayersConfigurationData: {
      // uint8 NumPlayers; PfgPlayerConfigurationData[maxPlayers]
      // each { uint16BE TeamId; uint16BE PlayerIndex; }
      payloadBuf = Buffer.alloc(1 + maxPlayers * 4);
      let offset = 0;
      payloadBuf.writeUInt8(data.numPlayers, offset++);
      for (let i = 0; i < maxPlayers; i++) {
        payloadBuf.writeUInt16LE(PlayerConfigValues[i], offset);
        offset += 2;
      }
      break;
    }

    case ServerMsgType.PlayerDisconnected: {
      // uint8 PlayerIndex; uint8 ShouldAITakeControl;
      // uint32BE AITakeControlFrame; uint16BE PlayerDisconnectedArrayIndex;
      payloadBuf = Buffer.alloc(1 + 1 + 4 + 2);
      payloadBuf.writeUInt8(data.playerIndex, 0);
      payloadBuf.writeUInt8(data.shouldAITakeControl ? 1 : 0, 1);
      payloadBuf.writeUInt32LE(data.AITakeControlFrame || 0, 2);
      payloadBuf.writeUInt16LE(data.playerDisconnectedArrayIndex || 0, 6);
      break;
    }

    case ServerMsgType.ChangePort: {
      // uint16BE Port;
      payloadBuf = Buffer.alloc(2);
      payloadBuf.writeUInt16LE(data.port || 0, 0);
      break;
    }

    case ServerMsgType.StartGame:
    default:
      payloadBuf = Buffer.alloc(0);
  }

  return Buffer.concat([headerBuf, payloadBuf]);
}
