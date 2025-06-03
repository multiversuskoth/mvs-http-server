#include "rollback_server.h"
#include <iostream>
#include <csignal>

namespace
{
    volatile std::sig_atomic_t g_signal_status = 0;
}

void signal_handler(int signal)
{
    g_signal_status = signal;
}

int main(int argc, char *argv[])
{
    // Parse command line arguments
    uint16_t port = rollback::GAME_SERVER_PORT;
    int maxPlayers = rollback::MAX_PLAYERS;

    if (argc > 1)
    {
        try
        {
            port = static_cast<uint16_t>(std::stoi(argv[1]));
        }
        catch (...)
        {
            std::cerr << "Invalid port number. Using default: " << port << std::endl;
        }
    }

    if (argc > 2)
    {
        try
        {
            maxPlayers = std::stoi(argv[2]);
            if (maxPlayers <= 0 || maxPlayers > 4)
            {
                std::cerr << "Max players must be between 1 and 4. Using default: " << maxPlayers << std::endl;
                maxPlayers = rollback::MAX_PLAYERS;
            }
        }
        catch (...)
        {
            std::cerr << "Invalid max players. Using default: " << maxPlayers << std::endl;
        }
    }

    // Set up signal handling
    std::signal(SIGINT, signal_handler);
    std::signal(SIGTERM, signal_handler);

    try
    {
        // Create and start server
        rollback::RollbackServer server(port, maxPlayers);
        server.start();

        std::cout << "Server running. Press Ctrl+C to stop." << std::endl;

        // Wait for termination signal
        while (g_signal_status == 0)
        {
            std::this_thread::sleep_for(std::chrono::milliseconds(100));
        }

        std::cout << "Shutting down server..." << std::endl;
        server.stop();
    }
    catch (const std::exception &e)
    {
        std::cerr << "Error: " << e.what() << std::endl;
        return 1;
    }

    return 0;
}