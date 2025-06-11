#include "rollback_server.h"
#include "compression.h"
#include <iomanip>
#include <sstream>
#include <thread>
#include <chrono>
#include <algorithm>
#include <iostream>
#include <format>

#ifdef _WIN32
#include <windows.h>
#include <timeapi.h>
#pragma comment(lib, "winmm.lib") // Link with winmm.lib for timeBeginPeriod/timeEndPeriod
#endif

const float TARGET_FRAME_TIME = 1000 / 60;
// We’ll do a simple EWMA on ping:
static constexpr float PING_ALPHA = 0.1f;  // 0.1 means 10% of the new sample, 90% of the old
static constexpr float RIFT_ALPHA = 0.05f; // 0.1 means 10% of the new sample, 90% of the old
constexpr uint8_t MAX_INPUTS_PER_FRAME = 30;

namespace rollback
{

    using namespace std::chrono;

    RollbackServer::RollbackServer(uint16_t port, int maxPlayers)
        : io_context_(),
          socket_(io_context_, udp::endpoint(udp::v4(), port)),
          remote_endpoint_(std::make_shared<udp::endpoint>()),
          running_(false),
          max_players_(maxPlayers)
    {

        std::cout << "Initializing rollback server on port " << port << std::endl;

#ifdef _WIN32
        // Request 1ms timer resolution for more precise timing
        MMRESULT result = timeBeginPeriod(1);
        if (result == TIMERR_NOERROR)
        {
            std::cout << "Successfully set timer resolution to 1ms" << std::endl;
        }
        else
        {
            std::cerr << "Failed to set timer resolution to 1ms" << std::endl;
        }
#endif
    }

    RollbackServer::~RollbackServer()
    {
        stop();
    }

    void RollbackServer::start()
    {
        if (running_)
            return;
        running_ = true;

        // Start UDP listener thread
        udp_thread_ = std::thread([this]()
                                  {
				try {
					io_context_.restart();
					boost::asio::co_spawn(io_context_, runUdpServer(), boost::asio::detached);
					io_context_.run();
				}
				catch (const std::exception& e) {
					std::cerr << "Exception in UDP thread: " << e.what() << std::endl;
				} });

        std::cout << "Rollback server started" << std::endl;
    }

    void RollbackServer::stop()
    {
        if (!running_)
            return;
        running_ = false;

        // Stop IO context
        io_context_.stop();

        // Join threads
        if (udp_thread_.joinable())
        {
            udp_thread_.join();
        }

        if (tick_thread_.joinable())
        {
            tick_thread_.join();
        }

        // Close socket
        boost::system::error_code ec;
        socket_.close(ec);

        std::cout << "Rollback server stopped" << std::endl;
    }

    boost::asio::awaitable<void> RollbackServer::runUdpServer()
    {
        std::vector<uint8_t> recv_buffer(1024);

        while (running_)
        {
            try
            {
                // Wait for incoming message
                udp::endpoint remote;
                size_t bytes_received = co_await socket_.async_receive_from(
                    boost::asio::buffer(recv_buffer), remote,
                    boost::asio::use_awaitable);

                // Process message asynchronously
                boost::asio::co_spawn(io_context_,
                                      handleMessage(recv_buffer, bytes_received, remote),
                                      boost::asio::detached);
            }
            catch (const std::exception &e)
            {
                std::cerr << "Error in UDP server: " << e.what() << std::endl;
                if (!running_)
                    break;
            }
        }

        co_return;
    }

    boost::asio::awaitable<void> RollbackServer::handleMessage(
        std::vector<uint8_t> buffer, size_t bytesReceived, udp::endpoint remote)
    {

        try
        {
            // Decompress and parse message
            auto decompressed = decompressPacket(std::span<const uint8_t>(buffer.data(), bytesReceived));
            auto clientMsg = parseClientMessage(decompressed);

            if (!clientMsg)
            {
                co_return;
            }

            const auto &header = clientMsg->header;
            const auto &type = header.type;
            const auto &sequence = header.sequence;

            // Log packet
            // logPacket(buffer, std::to_string(static_cast<int>(type)), "RECV");

            // Get the match (if any)
            std::shared_ptr<MatchState> match;
            std::shared_ptr<PlayerInfo> player;

            if (type == ClientMessageType::NewConnection)
            {
                // Special case for new connection
                auto payload = std::get<NewConnectionPayload>(clientMsg->payload);
                player = handleNewConnection(payload, remote);
                if (player)
                {
                    auto matchOptional = matches_.find(player->matchId);
                    if (matchOptional.has_value())
                    {
                        match = matchOptional.value();
                    }
                }
            }
            else
            {
                // Find existing player
                auto ipStr = remote.address().to_string();
                auto portStr = std::to_string(remote.port());
                std::string key = ipStr + ":" + portStr;

                auto playerOptional = players_.find(key);
                if (playerOptional.has_value())
                {
                    player = playerOptional.value();
                }

                if (player)
                {
                    auto matchOptional = matches_.find(player->matchId);
                    if (matchOptional.has_value())
                    {
                        match = matchOptional.value();
                    }
                }
            }

            if (!player || !match)
            {
                co_return;
            }

            // Filter out-of-order packets
            if (sequence <= player->lastSeqRecv)
            {
                co_return;
            }
            player->lastSeqRecv = sequence;

            // Handle quality data
            if (type == ClientMessageType::QualityData)
            {
                auto payload = std::get<QualityDataPayload>(clientMsg->payload);

                // Find the matching timestamp in this player's pendingPings
                // auto it = player->pendingPings.find(payload.serverMessageSequenceNumber);
                auto pendingPingOpt = player->pendingPings.find(payload.serverMessageSequenceNumber);
                if (pendingPingOpt.has_value())
                {
                    player->ping = static_cast<int16_t>(
                        duration_cast<milliseconds>(steady_clock::now() - pendingPingOpt.value()).count());
                    player->pendingPings.erase(payload.serverMessageSequenceNumber);
                }
            }

            // Handle other message types
            switch (type)
            {
            case ClientMessageType::PlayerInputAck:
            {
                auto payload = std::get<PlayerInputAckPayload>(clientMsg->payload);
                handlePlayerInputAck(match, player, payload);
                break;
            }
            case ClientMessageType::ReadyToStartMatch:
            {
                auto payload = std::get<ReadyToStartMatchPayload>(clientMsg->payload);
                handleReady(match, player, payload.ready == 1);
                break;
            }
            case ClientMessageType::Input:
            {
                auto payload = std::get<InputPayload>(clientMsg->payload);
                handleClientInput(match, player, payload);
                break;
            }
            default:
                break;
            }
        }
        catch (const std::exception &e)
        {
            std::cerr << "Error handling message: " << e.what() << std::endl;
        }

        co_return;
    }

    std::shared_ptr<PlayerInfo> RollbackServer::handleNewConnection(
        const NewConnectionPayload &payload, const udp::endpoint &remote, bool debug)
    {

        auto ipStr = remote.address().to_string();
        auto portStr = std::to_string(remote.port());
        std::string key = ipStr + ":" + portStr;

        const auto &matchData = payload.matchData;
        std::shared_ptr<MatchState> match;

        {
            // std::shared_lock read_lock(matches_mutex_);
            // auto it = matches_.find(matchData.matchId);
            auto matchOpt = matches_.find(matchData.matchId);
            if (matchOpt.has_value())
            {
                match = matchOpt.value();
            }
        }

        if (!match)
        {
            // Create new match
            match = std::make_shared<MatchState>();
            match->matchId = matchData.matchId;
            match->durationInFrames = 36000;
            match->tickIntervalMs = 1000.0f / 60.0f;
            match->currentFrame = 0;
            match->inputs.resize(max_players_);
            match->pingPhaseCount = 0;
            match->pingPhaseTotal = 20;
            match->sequenceCounter = -1;
            match->tickRunning = false;

            matches_.insert_or_assign(matchData.matchId, match);
        }

        auto existingPlayer = players_.find(key);
        if (existingPlayer.has_value())
        {
            return existingPlayer.value();
        }

        // Create new player
        auto newPlayer = std::make_shared<PlayerInfo>();
        newPlayer->address = remote.address();
        newPlayer->port = remote.port();
        newPlayer->matchId = matchData.matchId;
        newPlayer->playerIndex = payload.playerData.playerIndex;
        newPlayer->lastSeqRecv = 0;
        newPlayer->lastSeqSent = 0;
        newPlayer->ackedFrames.resize(max_players_, 0);
        newPlayer->ping = 0;
        newPlayer->ready = debug;
        newPlayer->lastClientFrame = 0;
        newPlayer->rift = 0;
        newPlayer->emulated = debug;

        // Add player to match and global list
        {

            match->players.insert_or_assign(key, newPlayer);
            players_.insert_or_assign(key, newPlayer);
        }
        std::cout << "Player index " << payload.playerData.playerIndex << " joined" << std::endl;

        // Send connection reply
        NewConnectionReplyPayload replyPayload;
        replyPayload.success = 0;
        replyPayload.matchNumPlayers = static_cast<uint8_t>(match->players.size());
        replyPayload.playerIndex = newPlayer->playerIndex;
        replyPayload.matchDurationInFrames = match->durationInFrames;
        replyPayload.unknown = 0;
        replyPayload.isValidationServerDebugMode = 0;

        boost::asio::co_spawn(io_context_,
                              sendServerMessage(match, newPlayer, ServerMessageType::NewConnectionReply, replyPayload),
                              boost::asio::detached);

        // Start ping phase if all players have connected
        {

            if (match->players.size() == static_cast<size_t>(max_players_))
            {
                startPingPhase(match);
            }
        }

        return newPlayer;
    }

    void RollbackServer::startPingPhase(std::shared_ptr<MatchState> match)
    {
        // Create a shared_ptr to a struct that will own the match and remain alive
        // through the entire asynchronous operation
        struct PingContext
        {
            std::shared_ptr<MatchState> match;
            const std::chrono::milliseconds intervalMs{50};
        };
        std::cout << "Starting Ping Phase" << std::endl;
        auto context = std::make_shared<PingContext>();
        context->match = match; // Store a copy of the match

        // Create a self-contained coroutine that captures the context by value
        // This ensures the context (and thus the match) stays alive until the coroutine completes
        boost::asio::co_spawn(io_context_, [this, context]() -> boost::asio::awaitable<void>
                              {
				try {
					// First broadcast immediately
					co_await broadcastRequestQuality(context->match);
					context->match->pingPhaseCount++;

					// Then repeat at intervals
					for (uint32_t i = 1; i < context->match->pingPhaseTotal && running_; ++i) {
						// Create a timer for each iteration
						boost::asio::steady_timer timer(io_context_);
						timer.expires_after(context->intervalMs);
						co_await timer.async_wait(boost::asio::use_awaitable);

						// The context is captured by value and stays alive throughout,
						// so the match pointer remains valid
						co_await broadcastRequestQuality(context->match);
						context->match->pingPhaseCount++;
					}

					co_await broadcastPlayersConfiguration(context->match);
				}
				catch (const std::exception& e) {
					std::cerr << "Exception in ping phase: " << e.what() << std::endl;
				} }, boost::asio::detached);
    }

    boost::asio::awaitable<void> RollbackServer::broadcastRequestQuality(std::shared_ptr<MatchState> match)
    {
        auto ts = steady_clock::now();

        for (const auto &p : match->players.snapshot())
        {
            auto player = p.second;
            RequestQualityDataPayload payload;
            {
                std::shared_lock lock(player->mutex);
                payload.ping = player->ping;
            }

            // std::cout << "Sending Ping for " << player->playerIndex << ":" << player->address << std::endl;
            auto sequence = co_await sendServerMessage(match, player, ServerMessageType::RequestQualityData, payload);

            // Record it per player
            player->pendingPings.insert_or_assign(sequence, ts);
        }

        co_return;
    }

    boost::asio::awaitable<void> RollbackServer::broadcastPlayersConfiguration(std::shared_ptr<MatchState> match)
    {
        std::cout << "broadcastPlayersConfiguration" << std::endl;
        auto playersSnapshot = match->players.snapshot();
        for (const auto &p : playersSnapshot)
        {
            auto player = p.second;
            PlayersConfigurationDataPayload payload;
            {
                payload.numPlayers = static_cast<uint8_t>(playersSnapshot.size());
            }

            payload.configValues.resize(max_players_);

            for (int i = 0; i < max_players_; i++)
            {
                const std::array<uint16_t, 4> PlayerConfigValues = {0, 257, 512, 769};
                payload.configValues[i] = PlayerConfigValues[i % PlayerConfigValues.size()];
            }

            co_await sendServerMessage(match, player, ServerMessageType::PlayersConfigurationData, payload);
        }

        co_return;
    }

    void RollbackServer::handlePlayerInputAck(
        std::shared_ptr<MatchState> match,
        std::shared_ptr<PlayerInfo> player,
        const PlayerInputAckPayload &payload)
    {
        std::shared_lock lock(player->mutex);
        // Update client's view of acked frames
        for (size_t i = 0; i < payload.ackFrame.size() && i < player->ackedFrames.size(); i++)
        {
            const uint32_t playerAckedFrame = payload.ackFrame[i];
            if (playerAckedFrame && player->ackedFrames[i] < playerAckedFrame)
            {
                player->ackedFrames[i] = playerAckedFrame;
            }
        }

        // Compute raw ping (RTT)
        // auto it = player->pendingPings.find(payload.serverMessageSequenceNumber);
        auto pendingPingOpt = player->pendingPings.find(payload.serverMessageSequenceNumber);
        if (pendingPingOpt.has_value())
        {
            int16_t newPing = static_cast<int16_t>(
                duration_cast<milliseconds>(steady_clock::now() - pendingPingOpt.value()).count());

            if (newPing > 255)
            {
                newPing = 255; // Cap ping to 255ms;
            }

            if (newPing > -1)
            {
                // === EWMA smoothing ===
                if (!player->pingInitialized)
                {
                    // First measurement: initialize smoothedPing exactly to the first sample
                    player->smoothedPing = static_cast<float>(newPing);
                    player->pingInitialized = true;
                }
                else
                {
                    // EWMA update:
                    player->smoothedPing =
                        PlayerInfo::clampFloat(PING_ALPHA * static_cast<float>(newPing) + (1.0f - PING_ALPHA) * player->smoothedPing, 255.0f);
                }
                // Store raw ping for backwards‐compat/logging if needed
                player->ping = newPing;

                // Flag that we have a truly new ping‐sample
                player->hasNewPing = true;
            }

            player->pendingPings.erase(payload.serverMessageSequenceNumber);
        }
    }

    void RollbackServer::handleReady(
        std::shared_ptr<MatchState> match,
        std::shared_ptr<PlayerInfo> player,
        bool isReady)
    {

        player->ready = isReady;
        auto playersSnapshot = match->players.snapshot();
        bool allReady = true;
        for (const auto &p : playersSnapshot)
        {
            auto player = p.second;
            std::shared_lock lock(match->mutex);
            if (!player->ready)
            {
                allReady = false;
                break;
            }
        }

        if (allReady)
        {
            // Broadcast StartGame to all players
            for (const auto &p : playersSnapshot)
            {
                auto player = p.second;
                boost::asio::co_spawn(io_context_,
                                      sendServerMessage(match, player, ServerMessageType::StartGame, std::monostate{}),
                                      boost::asio::detached);
            }

            // Start tick loop if not already running
            if (!match->tickRunning)
            {
                startTickLoop(match);
            }
        }
    }

    void RollbackServer::handleClientInput(
        std::shared_ptr<MatchState> match,
        std::shared_ptr<PlayerInfo> player,
        const InputPayload &payload)
    {
        const auto &startFrame = payload.startFrame;
        const auto &clientFrame = payload.clientFrame;
        const auto &numFrames = payload.numFrames;
        const auto &inputPerFrame = payload.inputPerFrame;

        {
            std::unique_lock lock(player->mutex);
            player->lastClientFrame = clientFrame;
            player->hasNewFrame = true;
        }

        // Store each new input in the map
        {
            auto &histMap = match->inputs[player->playerIndex];
            for (uint8_t i = 0; i < numFrames && i < inputPerFrame.size(); i++)
            {
                const uint32_t f = startFrame + i;
                if (histMap.find(f).has_value())
                {
                    // If we already have an input for this frame, skip it
                    // This happens when the server overwrites an input or player is sending previous input due to ping
                    continue;
                }
                histMap.insert_or_assign(f, inputPerFrame[i]);
            }
        }
    }

    void RollbackServer::calcRiftVariableTick(
        std::shared_ptr<PlayerInfo> player,
        uint32_t serverFrame)
    {

        std::unique_lock lock(player->mutex);
        // If we have a freshly smoothed ping AND a freshly received frame stamp:
        if (player->hasNewPing && player->hasNewFrame)
        {
            // Convert half of smoothedPing from ms → frames
            float halfPingFrames = (player->smoothedPing * 0.5f) / TARGET_FRAME_TIME;

            // Predict where the client “must be” in terms of frames
            float predictedClientFrame = static_cast<float>(player->lastClientFrame) + halfPingFrames;

            // Compute raw rift (client vs. server):
            if (!player->riftInit)
            {
                player->riftInit = true;
                float rawRift = predictedClientFrame - static_cast<float>(serverFrame);

                player->smoothRift = rawRift;
            }
            else
            {
                float rawRift = predictedClientFrame - float(serverFrame);
                float absR = fabs(rawRift);
                player->rift = rawRift;

                if (absR < 1.0f)
                {
                    // blend toward zero instead of toward rawRift
                    // e.g. kill half of the remaining smoothed error every tick
                    player->smoothRift *= 0.5f;

                    // once it's tiny, zero it out completely:
                    if (fabs(player->smoothRift) < 0.01f)
                        player->smoothRift = 0.0f;
                }
                else
                {
                    player->smoothRift = RIFT_ALPHA * rawRift + (1.0f - RIFT_ALPHA) * player->smoothRift;
                }
            }

            player->smoothRift = PlayerInfo::clampFloat(player->smoothRift, 20.0f);

            // Update the ping to the smoothed value
            player->ping = player->smoothedPing;

            // Reset the “new” flags after using them
            player->hasNewPing = false;
            player->hasNewFrame = false;
            if (player->smoothRift > 1 || player->smoothRift < -1 || player->smoothedPing > 100)
            {
                std::cout << "PIndex:" << player->playerIndex << " PING:" << player->ping << " RIFT:" << player->smoothRift << " RAWRIFT:" << player->rift << " clientFrame:" << predictedClientFrame << " serverFrame:" << serverFrame << std::endl;
            }
        }
    }

    void RollbackServer::startTickLoop(std::shared_ptr<MatchState> match)
    {
        // Already running check
        {
            bool expected = false;
            if (!match->tickRunning.compare_exchange_strong(expected, true))
            {
                return; // Already running
            }
        }

        // Start tick thread
        tick_thread_ = std::thread([this, match]()
                                   {
				try {
					boost::asio::io_context tick_io;
					boost::asio::co_spawn(tick_io, runTickLoop(match), boost::asio::detached);
					tick_io.run();
				}
				catch (const std::exception& e) {
					std::cerr << "Exception in tick thread: " << e.what() << std::endl;
				} });
    }

    // Now update the runTickLoop function to take advantage of this higher resolution:
    boost::asio::awaitable<void> RollbackServer::runTickLoop(std::shared_ptr<MatchState> match)
    {
        // Convert tick interval to nanoseconds for higher precision
        const auto targetInterval = std::chrono::duration_cast<std::chrono::nanoseconds>(
            std::chrono::duration<double, std::milli>(match->tickIntervalMs));

        auto nextTickTime = std::chrono::steady_clock::now() + targetInterval;

        // Track accumulated error for drift compensation
        std::chrono::nanoseconds accumulatedError{0};

        // For performance monitoring
        int tickCount = 0;
        auto monitorStart = std::chrono::steady_clock::now();
        std::chrono::nanoseconds maxDeviation{0};

        const auto startTime = steady_clock::now();

        while (match->tickRunning && running_)
        {
            // Process the current tick
            co_await tick(match);

            // Calculate actual time spent in tick processing
            auto now = std::chrono::steady_clock::now();
            auto elapsed = now - startTime;
            uint32_t absoluteFrame = static_cast<uint32_t>(elapsed / targetInterval);
            match->currentFrame = absoluteFrame;

            // Calculate the next tick time with drift compensation
            nextTickTime += targetInterval;

            // Apply drift compensation - correct the accumulated error
            if (accumulatedError != std::chrono::nanoseconds::zero())
            {
                // Only correct a portion of the error each tick to avoid overcorrection
                auto correction = accumulatedError / 4; // With timeBeginPeriod(1), we can be more aggressive
                nextTickTime -= correction;
                accumulatedError -= correction;
            }

            // Calculate wait time, ensuring we don't wait a negative amount
            auto waitTime = nextTickTime - now;
            if (waitTime < std::chrono::nanoseconds::zero())
            {
                // We're behind schedule - update accumulatedError and reset wait time
                accumulatedError += waitTime; // Negative value increases the error
                nextTickTime = now;           // Don't wait, run immediately

                // Limit maximum accumulated error to prevent extreme corrections
                const auto maxError = targetInterval * 3; // Smaller limit with higher resolution
                if (accumulatedError < -maxError)
                {
                    accumulatedError = -maxError;
                }

                // Log significant drift for debugging
                if (waitTime < -std::chrono::milliseconds(2))
                { // Lower threshold for logging
                  // std::cout << "Tick loop running behind schedule by "<< std::chrono::duration_cast<std::chrono::microseconds>(waitTime).count() << "μs" << std::endl;
                }

                continue; // Skip waiting, run next tick immediately
            }

            // Wait until the next tick time using high-precision timer
            boost::asio::steady_timer timer(co_await boost::asio::this_coro::executor);
            timer.expires_at(nextTickTime);

            try
            {
                co_await timer.async_wait(boost::asio::use_awaitable);
            }
            catch (const boost::system::system_error &e)
            {
                // Handle timer cancellation or errors
                std::cerr << "Timer error: " << e.what() << std::endl;
                break;
            }

            // After wait, check how accurate our timing was
            auto afterWait = std::chrono::steady_clock::now();
            auto actualWaitTime = afterWait - now;
            auto timerError = actualWaitTime - waitTime;

            // Update tracking of maximum deviation
            if (std::abs(timerError.count()) > std::abs(maxDeviation.count()))
            {
                maxDeviation = timerError;
            }

            // Add to accumulated error for future compensation
            accumulatedError += timerError;

            // Performance monitoring
            tickCount++;
            if (tickCount >= 100)
            { // Report every 100 ticks
                auto monitorEnd = std::chrono::steady_clock::now();
                auto monitorDuration = monitorEnd - monitorStart;
                auto avgTickTime = monitorDuration / tickCount;

                std::cout << "Timing stats for last " << tickCount << " ticks:" << std::endl;
                std::cout << "  Average tick interval: "
                          << std::chrono::duration_cast<std::chrono::microseconds>(avgTickTime).count()
                          << "us (target: "
                          << std::chrono::duration_cast<std::chrono::microseconds>(targetInterval).count()
                          << "us)" << std::endl;
                std::cout << "  Maximum deviation: "
                          << std::chrono::duration_cast<std::chrono::microseconds>(maxDeviation).count()
                          << "us" << std::endl;
                std::cout << "  Current accumulated error: "
                          << std::chrono::duration_cast<std::chrono::microseconds>(accumulatedError).count()
                          << "us" << std::endl;

                // Reset monitoring variables
                tickCount = 0;
                monitorStart = monitorEnd;
                maxDeviation = std::chrono::nanoseconds{0};
            }
        }

        co_return;
    }

    boost::asio::awaitable<void> RollbackServer::tick(std::shared_ptr<MatchState> match)
    {

        auto playersSnapshot = match->players.snapshot();
        // For each player, recalc rift only if they have both new ping & new frame ===
        {

            for (auto &p : playersSnapshot)
            {
                auto player = p.second;
                uint32_t serverFrame;
                {
                    std::shared_lock lock(match->mutex);
                    serverFrame = match->currentFrame;
                }
                calcRiftVariableTick(player, serverFrame);
            }
        }

        // Check if we have enough inputs
        bool exit = false;
        for (const auto &input : match->inputs)
        {
            if (input.size() < 10)
            {
                exit = true;
                break;
            }
        }

        if (exit)
        {
            // Let's build up some input first
            for (const auto &r : playersSnapshot)
            {
                auto recipient = r.second;
                co_await sendServerMessage(match, recipient, ServerMessageType::StartGame, std::monostate{});
            }
            co_return;
        }

        // build per-client payload and send
        for (const auto &r : playersSnapshot)
        {
            auto recipient = r.second;
            std::vector<uint32_t> startFrame(max_players_, 0);
            std::vector<uint8_t> numFrames(max_players_, 0);
            std::vector<std::vector<uint32_t>> inputPerFrame(max_players_);
            uint16_t numPredictedOverrides = 0;

            std::vector<uint32_t> ackedFrames;
            uint32_t lastClientFrame;
            int16_t ping;
            float smoothRift;
            {
                std::shared_lock lock(recipient->mutex);
                ackedFrames = recipient->ackedFrames;
                lastClientFrame = recipient->lastClientFrame;
                ping = recipient->ping;
                smoothRift = recipient->smoothRift;
            }

            // For each peer, decide what frames to send...
            for (const auto &pair : playersSnapshot)
            {

                const auto peer = pair.second;
                size_t idx = peer->playerIndex;

                std::map<uint32_t, uint32_t> histMap;
                {
                    // grab the lock, copy the map, then immediately release
                    // histMap = match->inputs[idx];
                    histMap = match->inputs[idx].snapshot();
                }
                const uint32_t lastAck = ackedFrames[idx];
                const uint32_t nextFrame = lastAck + 1;
                auto missedInputSnapshot = recipient->missedInputs.snapshot();
                // If we have the next real input
                if (histMap.find(nextFrame) != histMap.end())
                {
                    uint8_t sentCount = 0;
                    startFrame[idx] = nextFrame;
                    // Send everything we actually have
                    uint32_t f = nextFrame;
                    while (histMap.count(f) && sentCount < MAX_INPUTS_PER_FRAME)
                    {
                        inputPerFrame[idx].push_back(histMap.at(f));
                        numFrames[idx]++;
                        f++;
                        sentCount++;
                    }

                    recipient->missedInputs.insert_or_assign(idx, 0); // Reset miss counter
                }
                else if (missedInputSnapshot[idx] < 10)
                {
                    startFrame[idx] = lastAck;
                    recipient->missedInputs.insert_or_assign(idx, ++missedInputSnapshot[idx]);
                    const uint32_t lastVal = histMap.find(lastAck) != histMap.end() ? histMap.at(lastAck) : 0;
                    inputPerFrame[idx].push_back(lastVal);
                    numFrames[idx] = 1;
                }
                else
                {
                    startFrame[idx] = nextFrame;
                    uint32_t predictedCount = 0;
                    uint32_t f = nextFrame;
                    const uint32_t lastVal = histMap.find(lastAck) != histMap.end() ? histMap.at(lastAck) : 0;
                    {

                        // while (f < match->currentFrame)
                        while (f < lastClientFrame && predictedCount < MAX_INPUTS_PER_FRAME)
                        {
                            match->inputs[idx].insert_or_assign(f, lastVal);
                            inputPerFrame[idx].push_back(lastVal);
                            predictedCount++;
                            f++;
                        }
                    }
                    numFrames[idx] = static_cast<uint8_t>(predictedCount);
                    numPredictedOverrides = static_cast<uint16_t>(predictedCount);
                }
            }

            // Create player input payload
            PlayerInputPayload playerInputPayload;
            playerInputPayload.numPlayers = static_cast<uint8_t>(match->players.size());
            playerInputPayload.startFrame = startFrame;
            playerInputPayload.numFrames = numFrames;
            playerInputPayload.numPredictedOverrides = numPredictedOverrides;
            playerInputPayload.numZeroedOverrides = 0;
            playerInputPayload.ping = ping;
            playerInputPayload.packetsLossPercent = 0;
            playerInputPayload.rift = smoothRift;
            playerInputPayload.checksumAckFrame = 0;
            playerInputPayload.inputPerFrame = inputPerFrame;

            // Fire off the personalized PlayerInput
            auto ts = steady_clock::now();
            co_await sendPlayerInput(match, recipient, playerInputPayload);
            recipient->pendingPings.insert_or_assign(match->sequenceCounter, ts);
        }

        // === Cleanup histMap every 200 frames ===
        if (match->currentFrame % 200 == 0) {
            for (int idx = 0; idx < match->inputs.size(); ++idx) {
                auto &histMap = match->inputs[idx];
                if (histMap.size() > 100) {
                    // Remove all but the last 100 entries (by frame number)
                    std::vector<uint32_t> frames;
                    for (const auto &kv : histMap.snapshot()) {
                        frames.push_back(kv.first);
                    }
                    if (frames.size() > 100) {
                        std::sort(frames.begin(), frames.end());
                        size_t toRemove = frames.size() - 100;
                        for (size_t i = 0; i < toRemove; ++i) {
                            histMap.erase(frames[i]);
                        }
                    }
                }
            }
        }
        // === End cleanup ===

        co_return;
    }

    boost::asio::awaitable<void> RollbackServer::sendPlayerInput(
        std::shared_ptr<MatchState> match,
        std::shared_ptr<PlayerInfo> player,
        const PlayerInputPayload &payload)
    {

        // Record when we sent, for RTT
        player->lastSentTime = steady_clock::now();
        co_await sendServerMessage(match, player, ServerMessageType::PlayerInput, payload);

        co_return;
    }

    boost::asio::awaitable<uint32_t> RollbackServer::sendServerMessage(
        std::shared_ptr<MatchState> match,
        std::shared_ptr<PlayerInfo> player,
        ServerMessageType type,
        const ServerMessageVariant &payload)
    {

        ServerHeader header;
        header.type = type;

        {
            std::unique_lock lock(match->mutex);
            header.sequence = ++match->sequenceCounter;
        }

        // Serialize the message
        auto buf = serializeServerMessage(header, payload, max_players_);

        // Compress the buffer
        auto compressedBuf = compressPacket(buf);

        boost::asio::ip::address address;
        uint16_t port;
        {
            address = player->address;
            port = player->port;
        }

        udp::endpoint remote(address, port);

        co_await socket_.async_send_to(boost::asio::buffer(compressedBuf), remote, boost::asio::use_awaitable);

        co_return header.sequence;
    }

} // namespace rollback