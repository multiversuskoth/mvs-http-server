#include "rollback_server.h"
#include "compression.h"
#include <iomanip>
#include <sstream>
#include <thread>
#include <chrono>
#include <algorithm>
#include <iostream>
#include <format>
#include <curl/curl.h>
#include <nlohmann/json.hpp>

#include <windows.h>
#include <timeapi.h>
#include <ratio>
#pragma comment(lib, "winmm.lib")  // Link with winmm.lib for timeBeginPeriod/timeEndPeriod
#pragma comment (lib, "crypt32.lib")
#pragma comment (lib, "zlib.lib")

namespace rollback
{
	using namespace std::chrono;
	using json = nlohmann::json;

	// HTTP response callback
	static size_t WriteCallback(void* contents, size_t size, size_t nmemb, std::string* userp) {
		userp->append((char*)contents, size * nmemb);
		return size * nmemb;
	}



	RollbackServer::RollbackServer(uint16_t port, int maxPlayers, const std::string& httpUrl)
		: io_context_(),
		socket_(io_context_, udp::endpoint(udp::v4(), port)),
		remote_endpoint_(std::make_shared<udp::endpoint>()),
		running_(false),
		max_players_(maxPlayers),
		http_url_(httpUrl),
		host_found_(false),
		single_match_(nullptr),
		is_proxy_mode_(false)
	{
		std::cout << "Initializing peer-to-peer rollback server on port " << port << std::endl;

		// Request 1ms timer resolution for more precise timing
		MMRESULT result = timeBeginPeriod(1);
		if (result == TIMERR_NOERROR) {
			std::cout << "Successfully set timer resolution to 1ms" << std::endl;
		}
		else {
			std::cerr << "Failed to set timer resolution to 1ms" << std::endl;
		}

		// Initialize curl
		curl_global_init(CURL_GLOBAL_DEFAULT);
	}

	RollbackServer::~RollbackServer()
	{
		stop();
		curl_global_cleanup();
	}

	void RollbackServer::start()
	{
		if (running_)
			return;
		running_ = true;

		io_context_.restart();
		boost::asio::co_spawn(io_context_, runUdpServer(), boost::asio::detached);
		io_context_.run();
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

		std::cout << "Peer-to-peer rollback server stopped" << std::endl;
	}

	boost::asio::awaitable<void> RollbackServer::runUdpServer()
	{
		std::vector<uint8_t> recv_buffer(1024);

		while (true)
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
			catch (const std::exception& e)
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
			// Check if we're in proxy mode and handle forwarding
			if (is_proxy_mode_.load())
			{
				// Check if message is from localhost (127.0.0.1) - forward to host
				if (remote.address().is_loopback())
				{
					// Store the local client endpoint for future responses
					local_client_endpoint_ = remote;

					// Forward to host
					co_await forwardToHost(buffer, bytesReceived);
					co_return;
				}
				// Check if message is from host - forward to local client
				else if (host_endpoint_.has_value() &&
					remote.address() == host_endpoint_->address() &&
					remote.port() == host_endpoint_->port())
				{
					co_await forwardToLocal(buffer, bytesReceived);
					co_return;
				}
				// Unknown sender in proxy mode - ignore
				else
				{
					std::cout << "Proxy mode: Ignoring message from unknown sender: "
						<< remote.address().to_string() << ":" << remote.port() << std::endl;
					co_return;
				}
			}

			// Normal processing (host mode or initial connection)
			// Decompress and parse message
			auto decompressed = decompressPacket(std::span<const uint8_t>(buffer.data(), bytesReceived));
			auto clientMsg = parseClientMessage(decompressed);

			if (!clientMsg)
			{
				co_return;
			}

			const auto& header = clientMsg->header;
			const auto& type = header.type;
			const auto& sequence = header.sequence;

			// Log packet
			//logPacket(buffer, std::to_string(static_cast<int>(type)), "RECV");

			// Get the single match and player
			std::shared_ptr<PlayerInfo> player;

			if (type == ClientMessageType::NewConnection)
			{
				// Special case for new connection
				auto payload = std::get<NewConnectionPayload>(clientMsg->payload);
				player = co_await handleNewConnection(payload, remote);
			}
			else
			{
				// Find existing player
				std::shared_lock lock(players_mutex_);
				for (const auto& p : players_)
				{
					if (p->address == remote.address() && p->port == remote.port())
					{
						player = p;
						break;
					}
				}
			}

			if (!player || !single_match_)
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
				handlePlayerInputAck(single_match_, player, payload);
				break;
			}
			case ClientMessageType::ReadyToStartMatch:
			{
				auto payload = std::get<ReadyToStartMatchPayload>(clientMsg->payload);
				handleReady(single_match_, player, payload.ready == 1);
				break;
			}
			case ClientMessageType::Input:
			{
				auto payload = std::get<InputPayload>(clientMsg->payload);
				handleClientInput(single_match_, player, payload);
				break;
			}
			default:
				break;
			}
		}
		catch (const std::exception& e)
		{
			std::cerr << "Error handling message: " << e.what() << std::endl;
		}

		co_return;
	}

	boost::asio::awaitable<std::shared_ptr<PlayerInfo>> RollbackServer::handleNewConnection(
		const NewConnectionPayload& payload, const udp::endpoint& remote, bool debug)
	{
		// Only make HTTP call if host hasn't been found yet
		if (!host_found_)
		{
			// Make HTTP POST request to get match configuration
			MVSIMatchConfig matchConfig;
			bool httpSuccess = co_await makeHttpRequest(payload, matchConfig);

			if (!httpSuccess)
			{
				std::cerr << "Failed to get match configuration from HTTP endpoint" << std::endl;
				co_return nullptr;
			}

			// Store the HTTP data
			http_data_ = matchConfig;

			// Create single match if it doesn't exist
			if (!single_match_)
			{
				single_match_ = std::make_shared<MatchState>();
				single_match_->matchId = payload.matchData.matchId;
				single_match_->durationInFrames = matchConfig.match_duration;
				single_match_->tickIntervalMs = 1000.0f / 60.0f;
				single_match_->currentFrame = 0;
				single_match_->inputs.resize(matchConfig.max_players);
				single_match_->lastTickDuration = 0;
				single_match_->lastTickTime = std::nullopt;
				single_match_->pingPhaseCount = 0;
				single_match_->pingPhaseTotal = 20;
				single_match_->sequenceCounter = -1;
				single_match_->tickRunning = false;
			}

			// Check if this player is the host
			bool isHost = false;
			std::string hostIp;
			std::cout << "Player Index " << payload.playerData.playerIndex << " Joined " << remote.address() << std::endl;
			for (const auto& mvsiPlayer : matchConfig.players)
			{
				if (mvsiPlayer.player_index == payload.playerData.playerIndex)
				{
					isHost = mvsiPlayer.is_host;
				}
				if (mvsiPlayer.is_host)
				{
					hostIp = mvsiPlayer.ip;
				}
			}

			if (isHost)
			{
				host_found_ = true;
				std::cout << "Host player found, initiating UDP hole punching..." << std::endl;

				// Start UDP hole punching to all non-host players
				boost::asio::co_spawn(io_context_,
					initiateUdpHolePunching(matchConfig),
					boost::asio::detached);
			}
			else
			{
				// Non-host player - enter proxy mode
				std::cout << "Non-host player, entering proxy mode. Host IP: " << hostIp << std::endl;
				is_proxy_mode_ = true;

				// Set up host endpoint for forwarding
				try
				{
					boost::asio::ip::address hostAddr = boost::asio::ip::make_address(hostIp);
					host_endpoint_ = udp::endpoint(hostAddr, 41234); // Use same port as hole punching
					std::cout << "Proxy mode enabled. Will forward messages to host at "
						<< hostIp << ":41234" << std::endl;
				}
				catch (const std::exception& e)
				{
					std::cerr << "Failed to parse host IP address: " << e.what() << std::endl;
					co_return nullptr;
				}

				// In proxy mode, we don't create a match or player info locally
				// Just act as a forwarder
				co_return nullptr;
			}
		}

		// Check if player already exists
		std::shared_ptr<PlayerInfo> existingPlayer;
		{
			std::shared_lock lock(players_mutex_);
			for (const auto& p : players_)
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
			co_return existingPlayer;
		}

		// Create new player
		auto newPlayer = std::make_shared<PlayerInfo>();
		newPlayer->address = remote.address();
		newPlayer->port = remote.port();
		newPlayer->matchId = payload.matchData.matchId;
		newPlayer->playerIndex = payload.playerData.playerIndex;
		newPlayer->lastSeqRecv = 0;
		newPlayer->lastSeqSent = 0;
		newPlayer->ackedFrames.resize(max_players_, 0);
		newPlayer->ping = 0;
		newPlayer->ready = false;
		newPlayer->lastClientFrame = 0;
		newPlayer->rift = 0;
		newPlayer->missedInputs = 0;
		newPlayer->emulated = false;

		// Add player to match and global list
		{
			std::unique_lock lock(players_mutex_);
			single_match_->players.push_back(newPlayer);
			players_.push_back(newPlayer);
		}

		// Send connection reply
		NewConnectionReplyPayload replyPayload;
		replyPayload.success = 0;
		replyPayload.matchNumPlayers = static_cast<uint8_t>(single_match_->players.size());
		replyPayload.playerIndex = newPlayer->playerIndex;
		replyPayload.matchDurationInFrames = single_match_->durationInFrames;
		replyPayload.isDebugMode = 0;
		replyPayload.isValidationServerDebugMode = 0;

		boost::asio::co_spawn(io_context_,
			sendServerMessage(single_match_, newPlayer, ServerMessageType::NewConnectionReply, replyPayload),
			boost::asio::detached);

		// Start ping phase if all players have connected
		if (http_data_.has_value() && single_match_->players.size() == static_cast<size_t>(http_data_->max_players))
		{
			startPingPhase(single_match_);
		}

		co_return newPlayer;
	}

	boost::asio::awaitable<bool> RollbackServer::makeHttpRequest(
		const NewConnectionPayload& payload, MVSIMatchConfig& matchConfig)
	{
		// Create JSON payload
		json requestJson;
		requestJson["matchId"] = payload.matchData.matchId;
		requestJson["key"] = payload.matchData.key;

		std::string jsonString = requestJson.dump();
		std::string response;

		// Initialize curl handle
		CURL* curl = curl_easy_init();
		if (!curl)
		{
			co_return false;
		}

		// Set curl options
		curl_easy_setopt(curl, CURLOPT_URL, http_url_.c_str());
		curl_easy_setopt(curl, CURLOPT_POSTFIELDS, jsonString.c_str());
		curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
		curl_easy_setopt(curl, CURLOPT_WRITEDATA, &response);

		// Set headers
		struct curl_slist* headers = nullptr;
		headers = curl_slist_append(headers, "Content-Type: application/json");
		curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);

		// Perform the request
		CURLcode res = curl_easy_perform(curl);

		// Clean up
		curl_slist_free_all(headers);
		curl_easy_cleanup(curl);

		if (res != CURLE_OK)
		{
			std::cerr << "HTTP request failed: " << curl_easy_strerror(res) << std::endl;
			co_return false;
		}

		try
		{
			// Parse JSON response
			json responseJson = json::parse(response);

			matchConfig.max_players = responseJson["max_players"];
			matchConfig.match_duration = responseJson["match_duration"];

			for (const auto& playerJson : responseJson["players"])
			{
				MVSIPlayer player;
				player.player_index = playerJson["player_index"];
				player.ip = playerJson["ip"];
				player.is_host = playerJson["is_host"];
				matchConfig.players.push_back(player);
			}

			co_return true;
		}
		catch (const std::exception& e)
		{
			std::cerr << "Failed to parse HTTP response: " << e.what() << std::endl;
			co_return false;
		}
	}

	boost::asio::awaitable<void> RollbackServer::initiateUdpHolePunching(
		MVSIMatchConfig matchConfig)
	{
		const int PUNCH_ATTEMPTS = 3;
		const int PUNCH_INTERVAL_MS = 100;
		const uint16_t TARGET_PORT = 41234;

		for (int attempt = 0; attempt < PUNCH_ATTEMPTS; ++attempt)
		{
			for (const auto& player : matchConfig.players)
			{
				if (!player.is_host) // Don't send to ourselves (we are the host)
				{
					try
					{
						// Create UDP hole punch message
						std::vector<uint8_t> punchMessage = { 'P', 'U', 'N', 'C', 'H' };

						// Create endpoint for the target player
						boost::asio::ip::address targetAddr = boost::asio::ip::make_address(player.ip);
						udp::endpoint targetEndpoint(targetAddr, TARGET_PORT);

						// Send hole punch message
						co_await socket_.async_send_to(
							boost::asio::buffer(punchMessage),
							targetEndpoint,
							boost::asio::use_awaitable);

						std::cout << "Sent UDP hole punch " << (attempt + 1)
							<< " to player " << player.player_index
							<< " at " << player.ip << ":" << TARGET_PORT << std::endl;
					}
					catch (const std::exception& e)
					{
						std::cerr << "Error sending UDP hole punch to " << player.ip
							<< ": " << e.what() << std::endl;
					}
				}
			}

			if (attempt < PUNCH_ATTEMPTS - 1)
			{
				// Wait before next attempt
				boost::asio::steady_timer timer(co_await boost::asio::this_coro::executor);
				timer.expires_after(std::chrono::milliseconds(PUNCH_INTERVAL_MS));
				co_await timer.async_wait(boost::asio::use_awaitable);
			}
		}

		std::cout << "UDP hole punching completed" << std::endl;
		co_return;
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

		for (const auto& p : match->players)
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
		for (const auto& p : match->players)
		{
			PlayersConfigurationDataPayload payload;
			payload.numPlayers = static_cast<uint8_t>(match->players.size());
			payload.configValues.resize(max_players_);

			for (int i = 0; i < max_players_; i++)
			{
				const std::array<uint16_t, 4> PlayerConfigValues = { 0, 257, 512, 769 };
				payload.configValues[i] = PlayerConfigValues[i % PlayerConfigValues.size()];
			}

			co_await sendServerMessage(match, p, ServerMessageType::PlayersConfigurationData, payload);
		}

		co_return;
	}

	void RollbackServer::handlePlayerInputAck(
		std::shared_ptr<MatchState> match,
		std::shared_ptr<PlayerInfo> player,
		const PlayerInputAckPayload& payload)
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
			auto newPing = static_cast<int16_t>(
				duration_cast<milliseconds>(steady_clock::now() - it->second).count());;
			if (newPing > 0) {
				player->ping = newPing;
			}
			player->pendingPings.erase(it);
		}

		// If this is the host player and we have HTTP data, share ping with peers
		if (http_data_.has_value() && !is_proxy_mode_.load())
		{
			// Check if current player is the host
			bool isCurrentPlayerHost = false;
			for (const auto& mvsiPlayer : http_data_->players)
			{
				if (mvsiPlayer.player_index == player->playerIndex && mvsiPlayer.is_host)
				{
					isCurrentPlayerHost = true;
					break;
				}
			}

			if (isCurrentPlayerHost)
			{
				// Calculate average ping of all connected players
				int16_t totalPing = 0;
				int16_t playerCount = 0;

				for (const auto& p : match->players)
				{
					if (p->ping > 0) // Only count players with valid ping
					{
						totalPing += p->ping;
						playerCount++;
					}
				}

				if (playerCount > 0)
				{
					int16_t averagePing = totalPing / playerCount;

					// Set the average ping for the host player
					player->ping = averagePing;
				}
			}
		}
	}

	void RollbackServer::handleReady(
		std::shared_ptr<MatchState> match,
		std::shared_ptr<PlayerInfo> player,
		bool isReady)
	{
		player->ready = isReady;

		bool allReady = true;
		for (const auto& p : match->players)
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
			for (const auto& p : match->players)
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
		const InputPayload& payload)
	{
		const auto& startFrame = payload.startFrame;
		const auto& clientFrame = payload.clientFrame;
		const auto& numFrames = payload.numFrames;
		const auto& inputPerFrame = payload.inputPerFrame;

		// Record clientFrame
		player->lastClientFrame = clientFrame;

		// Store each new input in the map
		{
			std::lock_guard<std::mutex> lk(inputs_mutex_);
			auto& histMap = match->inputs[player->playerIndex];
			for (uint8_t i = 0; i < numFrames && i < inputPerFrame.size(); i++)
			{
				const uint32_t f = startFrame + i;
				histMap[f] = inputPerFrame[i];
			}
		}

		// Prune any frames older than (currentServerFrame - 50)
		/* const uint32_t minFrame = match->currentFrame > 9500 ? match->currentFrame - 9500 : 0;
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
		*/

		// Compute the serverFrame as global tick count
		const uint32_t serverFrame = match->currentFrame;

		// Update this player's rift
		player->rift = calcRiftVariableTick(player->playerIndex, serverFrame, clientFrame, player->ping,
			match->lastTickDuration);


	}

	float RollbackServer::calcRiftVariableTick(
		uint16_t playerIndex,
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
		float rift = (clientFrame + (ping / TARGET_FRAME_TIME / 2.0f)) - serverFrame;

		rift = std::max(-49.0f, std::min(rift, 49.0f));

		if (rift > 2.7 || rift < -2.7) {


			std::cout
				<< "PlayerIndex: " << playerIndex
				<< ", serverFrame: " << serverFrame
				<< ", clientFrame: " << clientFrame
				<< ", ping: " << ping
				<< ", lastTick: " << lastTickDuration
				<< ", FRAME_ADV: " << rift << std::endl;
		}
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
				}
				catch (const std::exception& e) {
					std::cerr << "Exception in tick thread: " << e.what() << std::endl;
				} });
	}

	// Now update the runTickLoop function to take advantage of this higher resolution:
	boost::asio::awaitable<void>
		RollbackServer::runTickLoop(std::shared_ptr<MatchState> match)
	{
		using namespace std::chrono;

		// Precompute our fixed interval
		const nanoseconds targetInterval =
			duration_cast<nanoseconds>(duration<double, std::milli>(match->tickIntervalMs));

		// Anchor point for all timing
		const auto startTime = steady_clock::now();
		match->currentFrame = 0;

		// For stats
		int ticksLogged = 0;
		auto monitorStart = startTime;
		nanoseconds maxDeviation{ 0 };

		// One reusable timer
		boost::asio::steady_timer timer(co_await boost::asio::this_coro::executor);

		while (match->tickRunning && running_)
		{
			// 1) Run the game‐logic tick
			co_await tick(match);

			// 2) Compute absolute “should‐be” frame based on elapsed time
			auto now = steady_clock::now();
			auto elapsed = now - startTime;
			uint64_t absoluteFrame = static_cast<uint64_t>(elapsed / targetInterval);

			if (absoluteFrame > match->currentFrame)
			{
				// Jump forward if we’ve fallen behind
				auto missed = absoluteFrame - match->currentFrame;

				match->currentFrame = static_cast<uint32_t>(absoluteFrame);
			}
			else
			{
				// Otherwise, advance by one
				match->currentFrame++;
			}

			// 3) Calculate next deadline and timer error
			auto nextTarget = startTime + (match->currentFrame + 1) * targetInterval;
			now = steady_clock::now();
			auto waitTime = nextTarget - now;

			// Track worst deviation
			auto deviation = (now + waitTime) - nextTarget;
			maxDeviation = max(maxDeviation,
				nanoseconds{ std::llabs(deviation.count()) });

			// 4) Sleep until exactly nextTarget
			timer.expires_at(nextTarget);
			try {
				co_await timer.async_wait(boost::asio::use_awaitable);
			}
			catch (const boost::system::system_error& e) {
				std::cerr << "Timer error: " << e.what() << "\n";
				break;
			}

			// 5) Periodic logging every 100 ticks
			if (++ticksLogged >= 100)
			{
				auto monitorEnd = steady_clock::now();
				auto monitorDuration = monitorEnd - monitorStart;
				auto avgInterval = monitorDuration / ticksLogged;

				std::cout << "--- Timing stats over " << ticksLogged << " ticks ---\n";
				std::cout << "  Avg interval: "
					<< duration_cast<microseconds>(avgInterval).count()
					<< "μs (target "
					<< duration_cast<microseconds>(targetInterval).count()
					<< "μs)\n";
				std::cout << "  Max deviation: "
					<< duration_cast<microseconds>(maxDeviation).count()
					<< "μs\n\n";

				ticksLogged = 0;
				monitorStart = monitorEnd;
				maxDeviation = nanoseconds{ 0 };
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
		//tch->currentFrame++;

		// Check if we have enough inputs
		bool exit = false;
		for (const auto& input : match->inputs)
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
			for (const auto& recipient : match->players)
			{
				co_await sendServerMessage(match, recipient, ServerMessageType::StartGame, std::monostate{});
			}
			co_return;
		}

		// For each recipient, build a totally individualized payload
		for (const auto& recipient : match->players)
		{
			std::vector<uint32_t> startFrame(max_players_, 0);
			std::vector<uint8_t> numFrames(max_players_, 0);
			std::vector<std::vector<uint32_t>> inputPerFrame(max_players_);
			uint16_t numPredictedOverrides = 0;

			// For each "peer" p, decide what frames to send
			for (size_t p = 0; p < match->players.size(); p++)
			{
				const auto& peer = match->players[p];
				std::map<uint32_t, uint32_t> histMap;
				{
					// grab the lock, copy the map, then immediately release
					std::lock_guard<std::mutex> lk(inputs_mutex_);
					histMap = match->inputs[p];
				}
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
		const PlayerInputPayload& payload)
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
		const ServerMessageVariant& payload)
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
		//logPacket(compressedBuf, std::to_string(static_cast<int>(type)), "SEND");

		// Send the packet
		udp::endpoint remote(player->address, player->port);

		co_await socket_.async_send_to(
			boost::asio::buffer(compressedBuf), remote,
			boost::asio::use_awaitable);

		co_return;
	}

	void RollbackServer::logPacket(
		const std::vector<uint8_t>& data,
		const std::string& type,
		const std::string& direction,
		const std::string& jsonData)
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

	boost::asio::awaitable<void> RollbackServer::forwardToHost(
		const std::vector<uint8_t>& buffer, size_t bytesReceived)
	{
		if (!host_endpoint_.has_value())
		{
			std::cerr << "Cannot forward to host: host endpoint not set" << std::endl;
			co_return;
		}

		try
		{
			// Forward the message directly to the host
			co_await socket_.async_send_to(
				boost::asio::buffer(buffer.data(), bytesReceived),
				*host_endpoint_,
				boost::asio::use_awaitable);

		}
		catch (const std::exception& e)
		{
			std::cerr << "Error forwarding to host: " << e.what() << std::endl;
		}

		co_return;
	}

	boost::asio::awaitable<void> RollbackServer::forwardToLocal(
		const std::vector<uint8_t>& buffer, size_t bytesReceived)
	{
		if (!local_client_endpoint_.has_value())
		{
			std::cerr << "Cannot forward to local client: endpoint not set" << std::endl;
			co_return;
		}

		try
		{
			// Forward the message back to the local client
			co_await socket_.async_send_to(
				boost::asio::buffer(buffer.data(), bytesReceived),
				*local_client_endpoint_,
				boost::asio::use_awaitable);
		}
		catch (const std::exception& e)
		{
			std::cerr << "Error forwarding to local client: " << e.what() << std::endl;
		}

		co_return;
	}

} // namespace rollback