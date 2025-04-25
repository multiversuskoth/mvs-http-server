#include "rollback_server.h"
#include "compression.h"
#include <iomanip>
#include <sstream>
#include <thread>
#include <chrono>
#include <algorithm>
#include <iostream>
#include <format>

#include <windows.h>
#include <timeapi.h>
#pragma comment(lib, "winmm.lib")  // Link with winmm.lib for timeBeginPeriod/timeEndPeriod

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

        // Request 1ms timer resolution for more precise timing
        MMRESULT result = timeBeginPeriod(1);
        if (result == TIMERR_NOERROR) {
            std::cout << "Successfully set timer resolution to 1ms" << std::endl;
        }
        else {
            std::cerr << "Failed to set timer resolution to 1ms" << std::endl;
        }
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
        } catch (const std::exception& e) {
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
            logPacket(buffer, std::to_string(static_cast<int>(type)), "RECV");

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
                    std::shared_lock lock(matches_mutex_);
                    auto it = matches_.find(player->matchId);
                    if (it != matches_.end())
                    {
                        match = it->second;
                    }
                }
            }
            else
            {
                // Find existing player
                std::shared_lock lock(players_mutex_);
                for (const auto &p : players_)
                {
                    if (p->address == remote.address() && p->port == remote.port())
                    {
                        player = p;
                        break;
                    }
                }

                if (player)
                {
                    std::shared_lock lock(matches_mutex_);
                    auto it = matches_.find(player->matchId);
                    if (it != matches_.end())
                    {
                        match = it->second;
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
                auto it = player->pendingPings.find(payload.serverMessageSequenceNumber);
                if (it != player->pendingPings.end())
                {
                    player->ping = static_cast<int16_t>(
                        duration_cast<milliseconds>(steady_clock::now() - it->second).count());
                    player->pendingPings.erase(it);
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

        const auto &matchData = payload.matchData;
        std::shared_ptr<MatchState> match;

        {
            std::shared_lock read_lock(matches_mutex_);
            auto it = matches_.find(matchData.matchId);
            if (it != matches_.end())
            {
                match = it->second;
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
            match->lastTickDuration = 0;
            match->lastTickTime = std::nullopt;
            match->pingPhaseCount = 0;
            match->pingPhaseTotal = 20;
            match->sequenceCounter = -1;
            match->tickRunning = false;

            std::unique_lock write_lock(matches_mutex_);
            matches_[matchData.matchId] = match;
        }

        {
            std::shared_lock lock(matches_mutex_);
            if (match->players.size() >= static_cast<size_t>(max_players_))
            {
                return nullptr;
            }
        }

        // Check if player already exists
        std::shared_ptr<PlayerInfo> existingPlayer;
        {
            std::shared_lock lock(players_mutex_);
            for (const auto &p : players_)
            {
                if (p->address == remote.address() && p->port == remote.port())
                {
                    existingPlayer = p;
                    break;
                }
            }
        }

        if (existingPlayer)
        {
            return existingPlayer;
        }

        // Create new player
        auto newPlayer = std::make_shared<PlayerInfo>();
        newPlayer->address = remote.address();
        newPlayer->port = remote.port();
        newPlayer->matchId = matchData.matchId;
        newPlayer->playerIndex = static_cast<uint8_t>(match->players.size());
        newPlayer->lastSeqRecv = 0;
        newPlayer->lastSeqSent = 0;
        newPlayer->ackedFrames.resize(max_players_, 0);
        newPlayer->ping = 0;
        newPlayer->ready = debug;
        newPlayer->lastClientFrame = 0;
        newPlayer->rift = 0;
        newPlayer->missedInputs = 0;
        newPlayer->emulated = debug;

        // Add player to match and global list
        {
            std::unique_lock lock1(matches_mutex_);
            match->players.push_back(newPlayer);

            std::unique_lock lock2(players_mutex_);
            players_.push_back(newPlayer);
        }

        // Send connection reply
        NewConnectionReplyPayload replyPayload;
        replyPayload.success = 0;
        replyPayload.matchNumPlayers = static_cast<uint8_t>(match->players.size());
        replyPayload.playerIndex = newPlayer->playerIndex;
        replyPayload.matchDurationInFrames = match->durationInFrames;
        replyPayload.isDebugMode = 0;
        replyPayload.isValidationServerDebugMode = 0;

        boost::asio::co_spawn(io_context_,
                              sendServerMessage(match, newPlayer, ServerMessageType::NewConnectionReply, replyPayload),
                              boost::asio::detached);

        // Start ping phase if all players have connected
        {
            std::shared_lock lock(matches_mutex_);
            if (match->players.size() == static_cast<size_t>(max_players_))
            {
                startPingPhase(match);
            }
        }

        // Emulate P2 if needed
        if (EMULATE_P2 && !p2_connected_)
        {
            p2_connected_ = true;
            emulateP2NewConnection(payload);
        }

        return newPlayer;
    }

    void RollbackServer::startPingPhase(std::shared_ptr<MatchState> match) {
        // Create a shared_ptr to a struct that will own the match and remain alive 
        // through the entire asynchronous operation
        struct PingContext {
            std::shared_ptr<MatchState> match;
            const std::chrono::milliseconds intervalMs{ 50 };
        };

        auto context = std::make_shared<PingContext>();
        context->match = match; // Store a copy of the match

        // Create a self-contained coroutine that captures the context by value
        // This ensures the context (and thus the match) stays alive until the coroutine completes
        boost::asio::co_spawn(io_context_,
            [this, context]() -> boost::asio::awaitable<void> {
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
                }
            },
            boost::asio::detached);
    }

    boost::asio::awaitable<void> RollbackServer::broadcastRequestQuality(std::shared_ptr<MatchState> match)
    {
        auto ts = steady_clock::now();

        for (const auto &p : match->players)
        {
            RequestQualityDataPayload payload;
            payload.ping = p->ping;
            payload.packetsLossPercent = 0;

            co_await sendServerMessage(match, p, ServerMessageType::RequestQualityData, payload);

            // Record it per player
            p->pendingPings[match->sequenceCounter] = ts;
        }

        co_return;
    }

    boost::asio::awaitable<void> RollbackServer::broadcastPlayersConfiguration(std::shared_ptr<MatchState> match)
    {
        for (const auto &p : match->players)
        {
            PlayersConfigurationDataPayload payload;
            payload.numPlayers = static_cast<uint8_t>(match->players.size());
            payload.configValues.resize(max_players_);

            for (int i = 0; i < max_players_; i++)
            {
                const std::array<uint16_t, 4> PlayerConfigValues = {0, 257, 512, 769};
                payload.configValues[i] = PlayerConfigValues[i % PlayerConfigValues.size()];
            }

            co_await sendServerMessage(match, p, ServerMessageType::PlayersConfigurationData, payload);
        }

        co_return;
    }

    void RollbackServer::handlePlayerInputAck(
        std::shared_ptr<MatchState> match,
        std::shared_ptr<PlayerInfo> player,
        const PlayerInputAckPayload &payload)
    {

        // Update client's view of acked frames
        for (size_t i = 0; i < payload.ackFrame.size() && i < player->ackedFrames.size(); i++)
        {
            const uint32_t playerAckedFrame = payload.ackFrame[i];
            if (playerAckedFrame && player->ackedFrames[i] < playerAckedFrame)
            {
                player->ackedFrames[i] = playerAckedFrame;
            }
        }

        // Compute ping as RTT
        auto it = player->pendingPings.find(payload.serverMessageSequenceNumber);
        if (it != player->pendingPings.end())
        {
            player->ping = static_cast<int16_t>(
                duration_cast<milliseconds>(steady_clock::now() - it->second).count());
            player->pendingPings.erase(it);
        }
    }

    void RollbackServer::handleReady(
        std::shared_ptr<MatchState> match,
        std::shared_ptr<PlayerInfo> player,
        bool isReady)
    {

        player->ready = isReady;

        bool allReady = true;
        for (const auto &p : match->players)
        {
            if (!p->ready)
            {
                allReady = false;
                break;
            }
        }

        if (allReady)
        {
            // Broadcast StartGame to all players
            for (const auto &p : match->players)
            {
                boost::asio::co_spawn(io_context_,
                                      sendServerMessage(match, p, ServerMessageType::StartGame, std::monostate{}),
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

        // Record clientFrame
        player->lastClientFrame = clientFrame;

        // Store each new input in the map
        auto &histMap = match->inputs[player->playerIndex];
        for (uint8_t i = 0; i < numFrames && i < inputPerFrame.size(); i++)
        {
            const uint32_t f = startFrame + i;
            histMap[f] = inputPerFrame[i];
        }

        // Prune any frames older than (currentServerFrame - 50)
        const uint32_t minFrame = match->currentFrame > 9500 ? match->currentFrame - 9500 : 0;
        for (auto it = histMap.begin(); it != histMap.end();)
        {
            if (it->first < minFrame)
            {
                it = histMap.erase(it);
            }
            else
            {
                ++it;
            }
        }

        // Compute the serverFrame as global tick count
        const uint32_t serverFrame = match->currentFrame;

        // Update this player's rift
        player->rift = calcRiftVariableTick(serverFrame, clientFrame, player->ping,
                                            match->lastTickDuration);

        // Handle emulated P2 input if needed
        if (EMULATE_P2)
        {
            std::shared_ptr<PlayerInfo> emulatedPlayer = nullptr;

            {
                std::shared_lock lock(players_mutex_);
                for (const auto &p : players_)
                {
                    if (p->emulated)
                    {
                        emulatedPlayer = p;
                        break;
                    }
                }
            }

            if (emulatedPlayer)
            {
                // Record clientFrame
                emulatedPlayer->lastClientFrame = clientFrame;

                // Store each new input in the map
                auto &p2HistMap = match->inputs[emulatedPlayer->playerIndex];
                for (uint8_t i = 0; i < numFrames && i < inputPerFrame.size(); i++)
                {
                    const uint32_t f = startFrame + i;
                    p2HistMap[f] = inputPerFrame[i];
                }

                // Prune old frames
                for (auto it = p2HistMap.begin(); it != p2HistMap.end();)
                {
                    if (it->first < minFrame)
                    {
                        it = p2HistMap.erase(it);
                    }
                    else
                    {
                        ++it;
                    }
                }

                // Update rift
                emulatedPlayer->rift = calcRiftVariableTick(serverFrame, clientFrame,
                                                            emulatedPlayer->ping,
                                                            match->lastTickDuration);
            }
        }
    }

    float RollbackServer::calcRiftVariableTick(
        uint32_t serverFrame,
        uint32_t clientFrame,
        int16_t ping,
        float lastTickDuration)
    {

        const float TARGET_FRAME_TIME = lastTickDuration;

        // Calculate elapsed time since last tick
        auto currentTime = std::chrono::steady_clock::now();
        auto lastTickTimeMs = std::chrono::steady_clock::now() -
                              std::chrono::milliseconds(static_cast<int64_t>(lastTickDuration));

        // Calculate elapsed time in milliseconds
        float elapsed = std::chrono::duration<float, std::milli>(
                            currentTime - lastTickTimeMs)
                            .count();

        const float subFrameProgress = std::min(elapsed / TARGET_FRAME_TIME, 1.0f);
        const float preciseServerFrame = serverFrame + subFrameProgress;

        const float pingInFrames = ping / TARGET_FRAME_TIME;

        const float expectedClientFrame = preciseServerFrame - pingInFrames / 2.0f;
        float newRift = clientFrame - expectedClientFrame;
        float rift = (clientFrame + (ping / TARGET_FRAME_TIME / 2.0f)) - serverFrame;

        rift = std::max(-49.0f, std::min(rift, 49.0f));

        

        std::cout << "rift: " << newRift
                  << ", serverFrame: " << serverFrame
            << ", clientFrame: " << clientFrame
                  << ", ping: " << ping
                  << ", lastTick: " << lastTickDuration
                  << ", FRAME_ADV: " << rift << std::endl;

        return rift;
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

        // Seed the timing fields
        match->lastTickTime = steady_clock::now();
        match->lastTickDuration = match->tickIntervalMs;

        // Start tick thread
        tick_thread_ = std::thread([this, match]()
                                   {
        try {
            boost::asio::io_context tick_io;
            boost::asio::co_spawn(tick_io, runTickLoop(match), boost::asio::detached);
            tick_io.run();
        } catch (const std::exception& e) {
            std::cerr << "Exception in tick thread: " << e.what() << std::endl;
        } });
    }

    // Now update the runTickLoop function to take advantage of this higher resolution:
    boost::asio::awaitable<void> RollbackServer::runTickLoop(std::shared_ptr<MatchState> match) {
        // Convert tick interval to nanoseconds for higher precision
        const auto targetInterval = std::chrono::duration_cast<std::chrono::nanoseconds>(
            std::chrono::duration<double, std::milli>(match->tickIntervalMs));

        auto nextTickTime = std::chrono::steady_clock::now() + targetInterval;

        // Track accumulated error for drift compensation
        std::chrono::nanoseconds accumulatedError{ 0 };

        // For performance monitoring
        int tickCount = 0;
        auto monitorStart = std::chrono::steady_clock::now();
        std::chrono::nanoseconds maxDeviation{ 0 };

        while (match->tickRunning && running_) {
            // Process the current tick
            co_await tick(match);

            // Calculate actual time spent in tick processing
            auto now = std::chrono::steady_clock::now();

            // Calculate the next tick time with drift compensation
            nextTickTime += targetInterval;

            // Apply drift compensation - correct the accumulated error
            if (accumulatedError != std::chrono::nanoseconds::zero()) {
                // Only correct a portion of the error each tick to avoid overcorrection
                auto correction = accumulatedError / 4; // With timeBeginPeriod(1), we can be more aggressive
                nextTickTime -= correction;
                accumulatedError -= correction;
            }

            // Calculate wait time, ensuring we don't wait a negative amount
            auto waitTime = nextTickTime - now;
            if (waitTime < std::chrono::nanoseconds::zero()) {
                // We're behind schedule - update accumulatedError and reset wait time
                accumulatedError += waitTime; // Negative value increases the error
                nextTickTime = now; // Don't wait, run immediately

                // Limit maximum accumulated error to prevent extreme corrections
                const auto maxError = targetInterval * 3; // Smaller limit with higher resolution
                if (accumulatedError < -maxError) {
                    accumulatedError = -maxError;
                }

                // Log significant drift for debugging
                if (waitTime < -std::chrono::milliseconds(2)) { // Lower threshold for logging
                    std::cout << "Tick loop running behind schedule by "
                        << std::chrono::duration_cast<std::chrono::microseconds>(waitTime).count()
                        << "μs" << std::endl;
                }

                continue; // Skip waiting, run next tick immediately
            }

            // Wait until the next tick time using high-precision timer
            boost::asio::steady_timer timer(co_await boost::asio::this_coro::executor);
            timer.expires_at(nextTickTime);

            try {
                co_await timer.async_wait(boost::asio::use_awaitable);
            }
            catch (const boost::system::system_error& e) {
                // Handle timer cancellation or errors
                std::cerr << "Timer error: " << e.what() << std::endl;
                break;
            }

            // After wait, check how accurate our timing was
            auto afterWait = std::chrono::steady_clock::now();
            auto actualWaitTime = afterWait - now;
            auto timerError = actualWaitTime - waitTime;

            // Update tracking of maximum deviation
            if (std::abs(timerError.count()) > std::abs(maxDeviation.count())) {
                maxDeviation = timerError;
            }

            // Add to accumulated error for future compensation
            accumulatedError += timerError;

            // Performance monitoring
            tickCount++;
            if (tickCount >= 100) { // Report every 100 ticks
                auto monitorEnd = std::chrono::steady_clock::now();
                auto monitorDuration = monitorEnd - monitorStart;
                auto avgTickTime = monitorDuration / tickCount;

                std::cout << "Timing stats for last " << tickCount << " ticks:" << std::endl;
                std::cout << "  Average tick interval: "
                    << std::chrono::duration_cast<std::chrono::microseconds>(avgTickTime).count()
                    << "μs (target: "
                    << std::chrono::duration_cast<std::chrono::microseconds>(targetInterval).count()
                    << "μs)" << std::endl;
                std::cout << "  Maximum deviation: "
                    << std::chrono::duration_cast<std::chrono::microseconds>(maxDeviation).count()
                    << "μs" << std::endl;
                std::cout << "  Current accumulated error: "
                    << std::chrono::duration_cast<std::chrono::microseconds>(accumulatedError).count()
                    << "μs" << std::endl;

                // Reset monitoring variables
                tickCount = 0;
                monitorStart = monitorEnd;
                maxDeviation = std::chrono::nanoseconds{ 0 };
            }
        }

        co_return;
    }


    boost::asio::awaitable<void> RollbackServer::tick(std::shared_ptr<MatchState> match)
    {
        // Measure real tick duration
        auto now = steady_clock::now();
        if (match->lastTickTime)
        {
            match->lastTickDuration = duration_cast<milliseconds>(now - *match->lastTickTime).count();
        }
        match->lastTickTime = now;

        // Advance the global server frame count
        match->currentFrame++;

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
            for (const auto &recipient : match->players)
            {
                co_await sendServerMessage(match, recipient, ServerMessageType::StartGame, std::monostate{});
            }
            co_return;
        }

        // For each recipient, build a totally individualized payload
        for (const auto &recipient : match->players)
        {
            std::vector<uint32_t> startFrame(max_players_, 0);
            std::vector<uint8_t> numFrames(max_players_, 0);
            std::vector<std::vector<uint32_t>> inputPerFrame(max_players_);
            uint16_t numPredictedOverrides = 0;

            // For each "peer" p, decide what frames to send
            for (size_t p = 0; p < match->players.size(); p++)
            {
                const auto &peer = match->players[p];
                const auto &histMap = match->inputs[p];
                const uint32_t lastAck = recipient->ackedFrames[p];
                const uint32_t nextFrame = lastAck + 1;

                // If we have the next real input
                if (histMap.find(nextFrame) != histMap.end())
                {
                    startFrame[p] = nextFrame;
                    // Send everything we actually have
                    uint32_t f = nextFrame;
                    while (histMap.find(f) != histMap.end())
                    {
                        inputPerFrame[p].push_back(histMap.at(f));
                        numFrames[p]++;
                        f++;
                    }
                    peer->missedInputs = 0; // Reset miss counter
                }
                // If we've missed <=5 in a row, just re-send the last frame
                else if (peer->missedInputs < 5)
                {
                    startFrame[p] = lastAck;
                    peer->missedInputs++;
                    // Repeat the last real input once
                    const uint32_t lastVal = histMap.find(lastAck) != histMap.end() ? histMap.at(lastAck) : 0;
                    inputPerFrame[p].push_back(lastVal);
                    numFrames[p] = 1;
                }
                // If we've now missed >5, predict all the way up to currentFrame
                else
                {
                    startFrame[p] = nextFrame;
                    uint32_t predictedCount = 0;
                    uint32_t f = nextFrame;
                    const uint32_t lastVal = histMap.find(lastAck) != histMap.end() ? histMap.at(lastAck) : 0;

                    // Predict every missing frame up to server's currentFrame
                    while (f < match->currentFrame)
                    {
                        match->inputs[p][f] = lastVal;       // Inject into history
                        inputPerFrame[p].push_back(lastVal); // Include in payload
                        predictedCount++;
                        f++;
                    }

                    numFrames[p] = static_cast<uint8_t>(predictedCount);
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
            playerInputPayload.ping = recipient->ping;
            playerInputPayload.packetsLossPercent = 0;
            playerInputPayload.rift = recipient->rift;
            playerInputPayload.checksumAckFrame = 0;
            playerInputPayload.inputPerFrame = inputPerFrame;

            // Fire off the personalized PlayerInput
            auto ts = steady_clock::now();
            co_await sendPlayerInput(match, recipient, playerInputPayload);
            recipient->pendingPings[match->sequenceCounter] = ts;
        }

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

    boost::asio::awaitable<void> RollbackServer::sendServerMessage(
        std::shared_ptr<MatchState> match,
        std::shared_ptr<PlayerInfo> player,
        ServerMessageType type,
        const ServerMessageVariant &payload)
    {

        if (player->emulated)
        {
            co_return;
        }

        ServerHeader header;
        header.type = type;
        header.sequence = ++match->sequenceCounter;

        // Serialize the message
        auto buf = serializeServerMessage(header, payload, max_players_);

        // Compress the buffer
        auto compressedBuf = compressPacket(buf);

        // Log packet
        logPacket(compressedBuf, std::to_string(static_cast<int>(type)), "SEND");

        // Send the packet
        udp::endpoint remote(player->address, player->port);

        co_await socket_.async_send_to(
            boost::asio::buffer(compressedBuf), remote,
            boost::asio::use_awaitable);

        co_return;
    }

    void RollbackServer::logPacket(
        const std::vector<uint8_t> &data,
        const std::string &type,
        const std::string &direction,
        const std::string &jsonData)
    {

        std::stringstream ss;

        // Format time
        auto now = system_clock::now();
        auto now_time_t = system_clock::to_time_t(now);
        auto now_ms = duration_cast<milliseconds>(now.time_since_epoch()) % 1000;
        std::tm now_tm;

#ifdef _WIN32
        localtime_s(&now_tm, &now_time_t);
#else
        localtime_r(&now_time_t, &now_tm);
#endif

        ss << std::put_time(&now_tm, "%M:%S") << "." << std::setfill('0') << std::setw(3) << now_ms.count() << " ";

        // Format direction and type
        if (direction == "RECV")
        {
            ss << "\033[32m" << direction << "\033[0m "; // Green
            ss << "\033[32m" << type << "\033[0m ";
        }
        else
        {
            ss << "\033[33m" << direction << "\033[0m "; // Yellow
            ss << "\033[33m" << type << "\033[0m ";
        }

        // Format time (blue)
        ss << "\033[34m" << std::put_time(&now_tm, "%M:%S") << "." << std::setfill('0') << std::setw(3) << now_ms.count() << "\033[0m ";

        // Format data hex
        if (!data.empty())
        {
            if (direction == "RECV")
            {
                ss << "\033[32m"; // Green
            }
            else
            {
                ss << "\033[33m"; // Yellow
            }

            for (size_t i = 0; i < std::min(data.size(), size_t(10)); ++i)
            {
                ss << std::hex << std::setfill('0') << std::setw(2) << static_cast<int>(data[i]) << " ";
            }

            ss << "\033[0m";
        }

        std::cout << ss.str() << std::endl;

        if (!jsonData.empty())
        {
            std::cout << jsonData << std::endl;
        }
    }

    void RollbackServer::emulateP2NewConnection(const NewConnectionPayload &payload)
    {
        // Create endpoint for emulated player
        udp::endpoint remote(boost::asio::ip::address_v4::loopback(), 1434);

        // Modified payload for P2
        NewConnectionPayload p2Payload = payload;
        p2Payload.playerData.playerIndex = 1;
        p2Payload.playerData.teamId = 1;

        // Handle connection
        std::shared_ptr<PlayerInfo> player = handleNewConnection(p2Payload, remote, true);

        if (player)
        {
            std::shared_ptr<MatchState> match;
            {
                std::shared_lock lock(matches_mutex_);
                auto it = matches_.find(player->matchId);
                if (it != matches_.end())
                {
                    match = it->second;
                }
            }

            if (!match)
            {
                return;
            }
        }
    }

} // namespace rollback