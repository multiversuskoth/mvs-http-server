cmake_minimum_required(VERSION 3.15)
# Enable vcpkg integration if available
set(CMAKE_TOOLCHAIN_FILE "$ENV{VCPKG_ROOT}/scripts/buildsystems/vcpkg.cmake" CACHE STRING "Vcpkg toolchain file")

project(rollback-server LANGUAGES CXX)

# Set C++ standard
set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)


# Platform-specific options (optional, can be extended)
if(WIN32)
    message(STATUS "Configuring for Windows")
elseif(APPLE)
    message(STATUS "Configuring for macOS")
elseif(UNIX)
    message(STATUS "Configuring for Linux")
endif()

message(STATUS "CMAKE_TOOLCHAIN_FILE: ${CMAKE_TOOLCHAIN_FILE}")
message(STATUS "CMAKE_PREFIX_PATH: ${CMAKE_PREFIX_PATH}")
message(STATUS "Boost_INCLUDE_DIRS: ${Boost_INCLUDE_DIRS}")

# Help CMake find Boost installed by vcpkg
set(Boost_USE_STATIC_LIBS ON)
set(Boost_USE_MULTITHREADED ON)
set(Boost_USE_STATIC_RUNTIME OFF)

# Find Boost (system, thread)
find_package(Boost REQUIRED COMPONENTS system thread)

# Include directories
include_directories(${Boost_INCLUDE_DIRS} include)

# Source files
file(GLOB SOURCES src/*.cpp)

# Create executable
add_executable(rollback-server ${SOURCES})

# Link Boost libraries
target_link_libraries(rollback-server PRIVATE Boost::system Boost::thread)
