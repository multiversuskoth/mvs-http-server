#pragma once

#include <vector>
#include <cstdint>
#include <stdexcept>
#include <span>

namespace rollback
{

    /**
     * Compresses a buffer using an 8-byte zero-suppression bitmask algorithm,
     * writing into a buffer.
     *
     * @param input The data to compress
     * @return Vector containing the compressed data
     * @throws std::runtime_error If the compressed output would exceed 1024 bytes
     */
    std::vector<uint8_t> compressPacket(std::span<const uint8_t> input);

    /**
     * Decompresses a buffer that was compressed with the zero-suppression bitmask algorithm.
     *
     * @param compressedBuffer The compressed input (mask + non-zero bytes)
     * @param originalLength The expected length of the decompressed data
     * @return Vector containing the decompressed data
     * @throws std::runtime_error If the compressed data is malformed or the decompressed
     *         output would overflow 1024 bytes
     */
    std::vector<uint8_t> decompressPacket(std::span<const uint8_t> compressedBuffer,
                                          size_t originalLength = 1024);

} // namespace rollback