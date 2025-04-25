#pragma once

#include "message_types.h"
#include "serialization.h"
#include <boost/asio.hpp>
#include <boost/asio/co_spawn.hpp>
#include <boost/asio/detached.hpp>
#include <boost/asio/experimental/awaitable_operators.hpp>
#include <memory>
#include <thread>
#include <atomic>
#include <mutex>
#include <shared_mutex>
#include <map>
#include <chrono>
#include <iostream>
#include <optional>
#include <functional>

namespace rollback
{

    using boost::asio::ip::udp;
    using namespace boost::asio::experimental::awaitable_operators;
    using namespace std::chrono;

    // Structure to hold player information
    struct PlayerInfo
    {
        boost::asio::ip::address address;
        uint16_t port;
        std::string matchId;
        uint8_t playerIndex;
        uint32_t lastSeqRecv;
        uint32_t lastSeqSent;
        std::vector<uint32_t> ackedFrames;                    // how many frames of each player this client has acked
        std::optional<time_point<steady_clock>> lastSentTime; // timestamp when we last sent a PlayerInput
        int16_t ping;
        bool ready;
        uint32_t lastClientFrame;
        float rift;
        uint32_t missedInputs;
        std::map<uint32_t, time_point<steady_clock>> pendingPings;
        bool emulated;
    };

    // Structure to hold match state
    struct MatchState
    {
        std::string matchId;
        std::vector<std::shared_ptr<PlayerInfo>> players;
        uint32_t durationInFrames;
        float tickIntervalMs;
        uint32_t currentFrame;
        std::vector<std::map<uint32_t, uint32_t>> inputs;     // one map per player: frame → input
        std::optional<time_point<steady_clock>> lastTickTime; // timestamp of the start of the last tick
        float lastTickDuration;                               // ms duration of that tick

        uint32_t sequenceCounter;
        uint32_t pingPhaseCount; // how many pings sent so far
        uint32_t pingPhaseTotal; // e.g. 65

        std::atomic<bool> tickRunning;         // Signal to start/stop tick thread
        std::condition_variable tickCondition; // CV for tick thread synchronization
        std::mutex tickMutex;                  // Mutex for CV
    };

    class RollbackServer
    {
    public:
        RollbackServer(uint16_t port = GAME_SERVER_PORT, int maxPlayers = MAX_PLAYERS);
        ~RollbackServer();

        void start();
        void stop();

    private:
        // Network methods
        std::vector<std::shared_ptr<MatchState>> active_ping_matches_;
        std::mutex active_ping_mutex_;
        boost::asio::awaitable<void> runUdpServer();
        boost::asio::awaitable<void> handleMessage(
            std::vector<uint8_t> buffer,
            size_t bytesReceived,
            udp::endpoint remote);

        // Game logic methods
        std::shared_ptr<PlayerInfo> handleNewConnection(
            const NewConnectionPayload &payload,
            const udp::endpoint &remote,
            bool debug = false);

        void startPingPhase(std::shared_ptr<MatchState> match);
        boost::asio::awaitable<void> broadcastRequestQuality(std::shared_ptr<MatchState> match);
        boost::asio::awaitable<void> broadcastPlayersConfiguration(std::shared_ptr<MatchState> match);

        void handlePlayerInputAck(
            std::shared_ptr<MatchState> match,
            std::shared_ptr<PlayerInfo> player,
            const PlayerInputAckPayload &payload);

        void handleReady(
            std::shared_ptr<MatchState> match,
            std::shared_ptr<PlayerInfo> player,
            bool isReady);

        void handleClientInput(
            std::shared_ptr<MatchState> match,
            std::shared_ptr<PlayerInfo> player,
            const InputPayload &payload);

        float calcRiftVariableTick(
            uint32_t serverFrame,
            uint32_t clientFrame,
            int16_t ping,
            float lastTickDuration);

        void startTickLoop(std::shared_ptr<MatchState> match);
        boost::asio::awaitable<void> runTickLoop(std::shared_ptr<MatchState> match);
        boost::asio::awaitable<void> tick(std::shared_ptr<MatchState> match);

        boost::asio::awaitable<void> sendPlayerInput(
            std::shared_ptr<MatchState> match,
            std::shared_ptr<PlayerInfo> player,
            const PlayerInputPayload &payload);

        boost::asio::awaitable<void> sendServerMessage(
            std::shared_ptr<MatchState> match,
            std::shared_ptr<PlayerInfo> player,
            ServerMessageType type,
            const ServerMessageVariant &payload);

        // Utility methods
        void logPacket(const std::vector<uint8_t> &data, const std::string &type,
                       const std::string &direction, const std::string &jsonData = "");

        // Emulation method
        void emulateP2NewConnection(const NewConnectionPayload &payload);

        // Server state
        boost::asio::io_context io_context_;
        udp::socket socket_;
        std::shared_ptr<udp::endpoint> remote_endpoint_;

        std::atomic<bool> running_;
        std::thread udp_thread_;
        std::thread tick_thread_;

        int max_players_;
        std::map<std::string, std::shared_ptr<MatchState>> matches_;
        std::vector<std::shared_ptr<PlayerInfo>> players_;

        mutable std::shared_mutex matches_mutex_;
        mutable std::shared_mutex players_mutex_;

        std::atomic<bool> p2_connected_ = false;
    };

} // namespace rollback