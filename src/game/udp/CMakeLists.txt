cmake_minimum_required(VERSION 3.15)
project(rollback_server)

# Set C++20 standard
set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# vcpkg integration
if(DEFINED ENV{VCPKG_ROOT} AND NOT DEFINED CMAKE_TOOLCHAIN_FILE)
    set(CMAKE_TOOLCHAIN_FILE "$ENV{VCPKG_ROOT}/scripts/buildsystems/vcpkg.cmake" CACHE STRING "")
endif()

if(NOT DEFINED CMAKE_TOOLCHAIN_FILE AND EXISTS "${CMAKE_CURRENT_SOURCE_DIR}/vcpkg/scripts/buildsystems/vcpkg.cmake")
    set(CMAKE_TOOLCHAIN_FILE "${CMAKE_CURRENT_SOURCE_DIR}/vcpkg/scripts/buildsystems/vcpkg.cmake" CACHE STRING "")
endif()

# Find Boost
find_package(Boost 1.76.0 REQUIRED COMPONENTS system thread)

# Include directories
include_directories(
    ${Boost_INCLUDE_DIRS}
    ${CMAKE_CURRENT_SOURCE_DIR}/include
)

# Source files
set(SOURCES
    src/main.cpp
    src/rollback_server.cpp
    src/compression.cpp
    src/serialization.cpp
)

# Headers
set(HEADERS
    include/message_types.h
    include/compression.h
    include/serialization.h
    include/rollback_server.h
)

# Create executable
add_executable(rollback_server ${SOURCES} ${HEADERS})

# Link libraries
target_link_libraries(rollback_server
    ${Boost_LIBRARIES}
)

# Windows/MSVC specific options
target_compile_options(rollback_server PRIVATE /W4 /MP)
target_compile_definitions(rollback_server PRIVATE _WIN32_WINNT=0x0A00 _CRT_SECURE_NO_WARNINGS)