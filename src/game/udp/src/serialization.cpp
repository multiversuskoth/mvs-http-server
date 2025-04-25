#include "serialization.h"
#include <string.h>
#include <array>

namespace rollback {

// Little endian utility functions
template<typename T>
void writeLittleEndian(std::vector<uint8_t>& buffer, size_t offset, T value) {
    for (size_t i = 0; i < sizeof(T); ++i) {
        buffer[offset + i] = static_cast<uint8_t>((value >> (i * 8)) & 0xFF);
    }
}

template<typename T>
T readLittleEndian(std::span<const uint8_t> buffer, size_t offset) {
    T value = 0;
    for (size_t i = 0; i < sizeof(T); ++i) {
        if (offset + i < buffer.size()) {
            value |= static_cast<T>(buffer[offset + i]) << (i * 8);
        }
    }
    return value;
}

// Constants for the PlayerConfig values
constexpr std::array<uint16_t, 4> PlayerConfigValues = {0, 257, 512, 769};

std::optional<ClientMessageComplete> parseClientMessage(std::span<const uint8_t> buffer) {
    const size_t HEADER_SIZE = 5; // type:uint8 + sequence:uint32LE
    
    if (buffer.size() < HEADER_SIZE) {
        return std::nullopt;
    }
    
    size_t offset = 0;
    
    // Read header
    ClientHeader header;
    header.type = static_cast<ClientMessageType>(buffer[offset++]);
    header.sequence = readLittleEndian<uint32_t>(buffer, offset);
    offset += 4;
    
    ClientMessageComplete result;
    result.header = header;

    // Parse payload based on message type
    switch (header.type) {
        case ClientMessageType::NewConnection: {
            NewConnectionPayload payload;
            payload.messageVersion = readLittleEndian<uint16_t>(buffer, offset);
            offset += 2;
            
            payload.playerData.teamId = readLittleEndian<uint16_t>(buffer, offset);
            offset += 2;
            payload.playerData.playerIndex = readLittleEndian<uint16_t>(buffer, offset);
            offset += 2;
            
            // Read strings
            auto readString = [&buffer, &offset](size_t maxLen) -> std::string {
                std::string result;
                size_t end = offset;
                while (end < buffer.size() && end < offset + maxLen && buffer[end] != 0) {
                    end++;
                }
                result.assign(reinterpret_cast<const char*>(&buffer[offset]), end - offset);
                offset += maxLen; // Skip to end of string field
                return result;
            };
            
            payload.matchData.matchId = readString(25);
            payload.matchData.key = readString(45);
            payload.matchData.environmentId = readString(25);
            
            result.payload = payload;
            break;
        }
        case ClientMessageType::Input: {
            InputPayload payload;
            payload.startFrame = readLittleEndian<uint32_t>(buffer, offset);
            offset += 4;
            payload.clientFrame = readLittleEndian<uint32_t>(buffer, offset);
            offset += 4;
            payload.numFrames = buffer[offset++];
            payload.numChecksums = buffer[offset++];
            
            // Read input data
            for (uint8_t i = 0; i < payload.numFrames; ++i) {
                if (offset + 4 <= buffer.size()) {
                    payload.inputPerFrame.push_back(readLittleEndian<uint32_t>(buffer, offset));
                    offset += 4;
                }
            }
            
            // Read checksum data
            for (uint8_t i = 0; i < payload.numChecksums; ++i) {
                if (offset + 4 <= buffer.size()) {
                    payload.checksumPerFrame.push_back(readLittleEndian<uint32_t>(buffer, offset));
                    offset += 4;
                }
            }
            
            result.payload = payload;
            break;
        }
        case ClientMessageType::PlayerInputAck: {
            PlayerInputAckPayload payload;
            payload.numPlayers = buffer[offset++];
            
            // Read ack frames
            for (uint8_t i = 0; i < payload.numPlayers; ++i) {
                if (offset + 4 <= buffer.size()) {
                    payload.ackFrame.push_back(readLittleEndian<uint32_t>(buffer, offset));
                    offset += 4;
                }
            }
            
            payload.serverMessageSequenceNumber = readLittleEndian<uint32_t>(buffer, offset);
            
            result.payload = payload;
            break;
        }
        case ClientMessageType::MatchResult: {
            MatchResultPayload payload;
            payload.numPlayers = buffer[offset++];
            payload.lastFrameChecksum = readLittleEndian<uint32_t>(buffer, offset);
            offset += 4;
            payload.winningTeamIndex = buffer[offset++];
            
            result.payload = payload;
            break;
        }
        case ClientMessageType::QualityData: {
            QualityDataPayload payload;
            payload.serverMessageSequenceNumber = readLittleEndian<uint32_t>(buffer, offset);
            
            result.payload = payload;
            break;
        }
        case ClientMessageType::Disconnecting: {
            DisconnectingPayload payload;
            payload.reason = buffer[offset++];
            
            result.payload = payload;
            break;
        }
        case ClientMessageType::PlayerDisconnectedAck: {
            PlayerDisconnectedAckPayload payload;
            payload.playerDisconnectedArrayIndex = buffer[offset++];
            
            result.payload = payload;
            break;
        }
        case ClientMessageType::ReadyToStartMatch: {
            ReadyToStartMatchPayload payload;
            payload.ready = buffer[offset++];
            
            result.payload = payload;
            break;
        }
        default:
            return std::nullopt; // Unknown message type
    }
    
    return result;
}

std::vector<uint8_t> serializeServerMessage(const ServerHeader& header, 
                                           const ServerMessageVariant& payload,
                                           int maxPlayers) {
    // First calculate the size
    size_t size = 5; // Header size (1 byte type + 4 bytes sequence)
    
    // Calculate payload size
    std::visit([&size, maxPlayers](auto&& arg) {
        using T = std::decay_t<decltype(arg)>;
        
        if constexpr (std::is_same_v<T, NewConnectionReplyPayload>) {
            size += 9; // uint8 + uint8 + uint8 + uint32 + uint8 + uint8
        }
        else if constexpr (std::is_same_v<T, InputAckPayload>) {
            size += 4; // uint32
        }
        else if constexpr (std::is_same_v<T, RequestQualityDataPayload>) {
            size += 4; // int16 + int16
        }
        else if constexpr (std::is_same_v<T, PlayerInputPayload>) {
            // numPlayers + startFrame[] + numFrames[] + numPredicted + numZeroed
            // + ping + packetsLoss + rift + checksumAck + inputPerFrame[][]
            const auto& p = arg;
            size += 1; // numPlayers
            size += maxPlayers * 4; // startFrame
            size += maxPlayers; // numFrames
            size += 2 + 2; // numPredicted + numZeroed
            size += 2 + 2 + 2; // ping + packetsLoss + rift
            size += 4; // checksumAck
            
            // inputPerFrame
            for (int i = 0; i < maxPlayers && i < static_cast<int>(p.numFrames.size()); ++i) {
                size += p.numFrames[i] * 4;
            }
        }
        else if constexpr (std::is_same_v<T, PlayersStatusPayload>) {
            size += 1; // numPlayers
            size += maxPlayers * 2; // averagePing[]
        }
        else if constexpr (std::is_same_v<T, KickPayload>) {
            size += 2 + 4; // reason + param1
        }
        else if constexpr (std::is_same_v<T, ChecksumAckPayload>) {
            size += 4; // ackFrame
        }
        else if constexpr (std::is_same_v<T, PlayersConfigurationDataPayload>) {
            size += 1; // numPlayers
            size += maxPlayers * 4; // config data
        }
        else if constexpr (std::is_same_v<T, PlayerDisconnectedPayload>) {
            size += 1 + 1 + 4 + 2; // playerIndex + shouldAI + AIFrame + arrayIndex
        }
        else if constexpr (std::is_same_v<T, ChangePortPayload>) {
            size += 2; // port
        }
        // else: std::monostate for StartGame, which has no payload
    }, payload);
    
    // Now create the buffer and serialize
    std::vector<uint8_t> buffer(size);
    size_t offset = 0;
    
    // Write header
    buffer[offset++] = static_cast<uint8_t>(header.type);
    writeLittleEndian<uint32_t>(buffer, offset, header.sequence);
    offset += 4;
    
    // Write payload
    std::visit([&buffer, &offset, maxPlayers](auto&& arg) {
        using T = std::decay_t<decltype(arg)>;
        
        if constexpr (std::is_same_v<T, NewConnectionReplyPayload>) {
            const auto& p = arg;
            buffer[offset++] = p.success;
            buffer[offset++] = p.matchNumPlayers;
            buffer[offset++] = p.playerIndex;
            writeLittleEndian<uint32_t>(buffer, offset, p.matchDurationInFrames);
            offset += 4;
            buffer[offset++] = p.isDebugMode;
            buffer[offset++] = p.isValidationServerDebugMode;
        }
        else if constexpr (std::is_same_v<T, InputAckPayload>) {
            writeLittleEndian<uint32_t>(buffer, offset, arg.ackFrame);
            offset += 4;
        }
        else if constexpr (std::is_same_v<T, PlayerInputPayload>) {
            const auto& p = arg;
            buffer[offset++] = p.numPlayers;
            
            // StartFrame[]
            for (int i = 0; i < maxPlayers; ++i) {
                uint32_t sf = (i < static_cast<int>(p.startFrame.size())) ? p.startFrame[i] : 0;
                writeLittleEndian<uint32_t>(buffer, offset, sf);
                offset += 4;
            }
            
            // NumFrames[]
            for (int i = 0; i < maxPlayers; ++i) {
                uint8_t nf = (i < static_cast<int>(p.numFrames.size())) ? p.numFrames[i] : 0;
                buffer[offset++] = nf;
            }
            
            // Overrides
            writeLittleEndian<uint16_t>(buffer, offset, p.numPredictedOverrides);
            offset += 2;
            writeLittleEndian<uint16_t>(buffer, offset, p.numZeroedOverrides);
            offset += 2;
            
            // Ping, PacketsLossPercent, Rift
            writeLittleEndian<int16_t>(buffer, offset, p.ping);
            offset += 2;
            writeLittleEndian<int16_t>(buffer, offset, p.packetsLossPercent);
            offset += 2;
            
            // Convert rift to int16 with 2 decimal places of precision
            int16_t riftInt = static_cast<int16_t>(p.rift * 100);
            writeLittleEndian<int16_t>(buffer, offset, riftInt);
            offset += 2;
            
            // ChecksumAckFrame
            writeLittleEndian<uint32_t>(buffer, offset, p.checksumAckFrame);
            offset += 4;
            
            // InputPerFrame[][]
            for (int pi = 0; pi < maxPlayers; ++pi) {
                const auto& arr = (pi < static_cast<int>(p.inputPerFrame.size())) ? p.inputPerFrame[pi] : std::vector<uint32_t>{};
                uint8_t numFrames = (pi < static_cast<int>(p.numFrames.size())) ? p.numFrames[pi] : 0;
                
                for (uint8_t f = 0; f < numFrames; ++f) {
                    uint32_t v = (f < arr.size()) ? arr[f] : 0;
                    writeLittleEndian<uint32_t>(buffer, offset, v);
                    offset += 4;
                }
            }
        }
        else if constexpr (std::is_same_v<T, RequestQualityDataPayload>) {
            writeLittleEndian<int16_t>(buffer, offset, arg.ping);
            offset += 2;
            writeLittleEndian<int16_t>(buffer, offset, arg.packetsLossPercent);
            offset += 2;
        }
        else if constexpr (std::is_same_v<T, PlayersStatusPayload>) {
            const auto& p = arg;
            buffer[offset++] = p.numPlayers;
            
            for (int i = 0; i < maxPlayers; ++i) {
                int16_t avg = (i < static_cast<int>(p.status.size())) ? p.status[i].averagePing : 0;
                writeLittleEndian<int16_t>(buffer, offset, avg);
                offset += 2;
            }
        }
        else if constexpr (std::is_same_v<T, KickPayload>) {
            writeLittleEndian<uint16_t>(buffer, offset, arg.reason);
            offset += 2;
            writeLittleEndian<uint32_t>(buffer, offset, arg.param1);
            offset += 4;
        }
        else if constexpr (std::is_same_v<T, ChecksumAckPayload>) {
            writeLittleEndian<uint32_t>(buffer, offset, arg.ackFrame);
            offset += 4;
        }
        else if constexpr (std::is_same_v<T, PlayersConfigurationDataPayload>) {
            const auto& p = arg;
            buffer[offset++] = p.numPlayers;
            
            for (int i = 0; i < maxPlayers; ++i) {
                uint16_t value = PlayerConfigValues[i % PlayerConfigValues.size()];
                writeLittleEndian<uint16_t>(buffer, offset, value);
                offset += 2;
            }
        }
        else if constexpr (std::is_same_v<T, PlayerDisconnectedPayload>) {
            const auto& p = arg;
            buffer[offset++] = p.playerIndex;
            buffer[offset++] = p.shouldAITakeControl;
            writeLittleEndian<uint32_t>(buffer, offset, p.AITakeControlFrame);
            offset += 4;
            writeLittleEndian<uint16_t>(buffer, offset, p.playerDisconnectedArrayIndex);
            offset += 2;
        }
        else if constexpr (std::is_same_v<T, ChangePortPayload>) {
            writeLittleEndian<uint16_t>(buffer, offset, arg.port);
            offset += 2;
        }
        // else: std::monostate for StartGame, which has no payload
    }, payload);
    
    // Resize if needed (shouldn't be, but just in case)
    if (offset < buffer.size()) {
        buffer.resize(offset);
    }
    
    return buffer;
}

} // namespace rollback