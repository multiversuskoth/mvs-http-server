#pragma once

#include <cstdint>
#include <string>
#include <vector>
#include <array>
#include <map>
#include <memory>

namespace rollback {

// Client message types
enum class ClientMessageType : uint8_t {
    NewConnection = 1,
    Input = 2,
    PlayerInputAck = 3,
    MatchResult = 4,
    QualityData = 5,
    Disconnecting = 6,
    PlayerDisconnectedAck = 7,
    ReadyToStartMatch = 8
};

// Server message types
enum class ServerMessageType : uint8_t {
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
    ChangePort = 12
};

// Client message header
struct ClientHeader {
    ClientMessageType type;
    uint32_t sequence;
};

// Server message header
struct ServerHeader {
    ServerMessageType type;
    uint32_t sequence;
};

// Player configuration data
struct ClientPlayerConfigData {
    uint16_t teamId;
    uint16_t playerIndex;
};

// Match data
struct ClientMatchData {
    std::string matchId;  // up to 25 chars
    std::string key;      // up to 45 chars
    std::string environmentId; // up to 25 chars
};

// New connection payload
struct NewConnectionPayload {
    uint16_t messageVersion;
    ClientPlayerConfigData playerData;
    ClientMatchData matchData;
};

// Input payload
struct InputPayload {
    uint32_t startFrame;
    uint32_t clientFrame;
    uint8_t numFrames;
    uint8_t numChecksums;
    std::vector<uint32_t> inputPerFrame;
    std::vector<uint32_t> checksumPerFrame;
};

// Player input ack payload
struct PlayerInputAckPayload {
    uint8_t numPlayers;
    std::vector<uint32_t> ackFrame;
    uint32_t serverMessageSequenceNumber;
};

// Match result payload
struct MatchResultPayload {
    uint8_t numPlayers;
    uint32_t lastFrameChecksum;
    uint8_t winningTeamIndex;
};

// Quality data payload
struct QualityDataPayload {
    uint32_t serverMessageSequenceNumber;
};

// Disconnecting payload
struct DisconnectingPayload {
    uint8_t reason;
};

// Player disconnected ack payload
struct PlayerDisconnectedAckPayload {
    uint8_t playerDisconnectedArrayIndex;
};

// Ready to start match payload
struct ReadyToStartMatchPayload {
    uint8_t ready;
};

// Server message payloads
struct NewConnectionReplyPayload {
    uint8_t success;
    uint8_t matchNumPlayers;
    uint8_t playerIndex;
    uint32_t matchDurationInFrames;
    uint8_t isDebugMode;
    uint8_t isValidationServerDebugMode;
};

struct InputAckPayload {
    uint32_t ackFrame;
};

struct PlayerInputPayload {
    uint8_t numPlayers;
    std::vector<uint32_t> startFrame;
    std::vector<uint8_t> numFrames;
    uint16_t numPredictedOverrides;
    uint16_t numZeroedOverrides;
    int16_t ping;
    int16_t packetsLossPercent;
    float rift;
    uint32_t checksumAckFrame;
    std::vector<std::vector<uint32_t>> inputPerFrame;
};

struct RequestQualityDataPayload {
    int16_t ping;
    int16_t packetsLossPercent;
};

struct PlayerStatusData {
    int16_t averagePing;
};

struct PlayersStatusPayload {
    uint8_t numPlayers;
    std::vector<PlayerStatusData> status;
};

struct KickPayload {
    uint16_t reason;
    uint32_t param1;
};

struct ChecksumAckPayload {
    uint32_t ackFrame;
};

struct PlayersConfigurationDataPayload {
    uint8_t numPlayers;
    std::vector<uint16_t> configValues; // simplified from the original raw buffer
};

struct PlayerDisconnectedPayload {
    uint8_t playerIndex;
    uint8_t shouldAITakeControl;
    uint32_t AITakeControlFrame;
    uint16_t playerDisconnectedArrayIndex;
};

struct ChangePortPayload {
    uint16_t port;
};

// Base message classes
struct ClientMessage {
    ClientHeader header;
    
    // We'll use a variant in the implementation file
    virtual ~ClientMessage() = default;
};

struct ServerMessage {
    ServerHeader header;
    
    // We'll use a variant in the implementation file
    virtual ~ServerMessage() = default;
};

// Constants
constexpr uint16_t GAME_SERVER_PORT = 41234;
constexpr int MAX_PLAYERS = 2;
constexpr bool EMULATE_P2 = false;

} // namespace rollback