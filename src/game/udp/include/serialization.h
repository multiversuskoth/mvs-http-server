#pragma once

#include "message_types.h"
#include <vector>
#include <cstdint>
#include <span>
#include <variant>
#include <optional>

namespace rollback {

// Client message variant
using ClientMessageVariant = std::variant<
    NewConnectionPayload,
    InputPayload,
    PlayerInputAckPayload,
    MatchResultPayload,
    QualityDataPayload,
    DisconnectingPayload,
    PlayerDisconnectedAckPayload,
    ReadyToStartMatchPayload
>;

// Server message variant
using ServerMessageVariant = std::variant<
    NewConnectionReplyPayload,
    InputAckPayload,
    PlayerInputPayload,
    RequestQualityDataPayload,
    PlayersStatusPayload,
    KickPayload,
    ChecksumAckPayload,
    PlayersConfigurationDataPayload,
    PlayerDisconnectedPayload,
    ChangePortPayload,
    std::monostate  // For empty message types like StartGame
>;

struct ClientMessageComplete {
    ClientHeader header;
    ClientMessageVariant payload;
};

struct ServerMessageComplete {
    ServerHeader header;
    ServerMessageVariant payload;
};

/**
 * Parse a raw buffer into a client message
 */
std::optional<ClientMessageComplete> parseClientMessage(std::span<const uint8_t> buffer);

/**
 * Serialize a server message into a buffer
 */
std::vector<uint8_t> serializeServerMessage(const ServerHeader& header, 
                                           const ServerMessageVariant& payload,
                                           int maxPlayers);

} // namespace rollback