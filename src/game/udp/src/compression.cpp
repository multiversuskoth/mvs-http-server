#include "compression.h"
#include <stdexcept>

namespace rollback {

std::vector<uint8_t> compressPacket(std::span<const uint8_t> input) {
    const size_t n = input.size();
    if (n == 0) return {};

    // Pre-allocate exactly 1024 bytes
    std::vector<uint8_t> outBuf(1024, 0);
    size_t inPos = 0;
    size_t outPos = 0;

    while (inPos < n) {
        // Make sure we have at least 1 byte free for the mask
        if (outPos >= 1024) {
            throw std::runtime_error("compressPacket: output buffer overflow (1024 bytes)");
        }

        const size_t maskPos = outPos++;
        uint8_t mask = 0;

        // Pack up to 8 input bytes
        for (uint8_t bit = 0; bit < 8 && inPos < n; ++bit, ++inPos) {
            const uint8_t v = input[inPos];
            if (v != 0) {
                mask |= 1 << bit;
                // Make sure we have space for this byte
                if (outPos >= 1024) {
                    throw std::runtime_error("compressPacket: output buffer overflow (1024 bytes)");
                }
                outBuf[outPos++] = v;
            }
        }

        outBuf[maskPos] = mask;
    }

    // Return only the used portion
    outBuf.resize(outPos);
    return outBuf;
}

std::vector<uint8_t> decompressPacket(std::span<const uint8_t> compressedBuffer, size_t originalLength) {
    if (originalLength > 1024) {
        throw std::runtime_error("decompressPacket: originalLength must be between 0 and 1024");
    }

    // Pre-allocate exactly 1024 bytes for the output
    std::vector<uint8_t> outBuf(1024, 0);
    size_t readPos = 0;
    size_t writePos = 0;

    while (readPos < compressedBuffer.size() && writePos < originalLength) {
        // Read the mask byte
        if (readPos >= compressedBuffer.size()) {
            throw std::runtime_error("decompressPacket: unexpected end of compressed data");
        }
        
        const uint8_t mask = compressedBuffer[readPos++];
        for (uint8_t bit = 0; bit < 8 && writePos < originalLength; ++bit) {
            const bool isNonZero = (mask & (1 << bit)) != 0;
            if (isNonZero) {
                if (readPos >= compressedBuffer.size()) {
                    throw std::runtime_error("decompressPacket: truncated compressed data");
                }
                if (writePos >= 1024) {
                    throw std::runtime_error("decompressPacket: output buffer overflow (1024 bytes)");
                }
                outBuf[writePos++] = compressedBuffer[readPos++];
            } else {
                if (writePos >= 1024) {
                    throw std::runtime_error("decompressPacket: output buffer overflow (1024 bytes)");
                }
                outBuf[writePos++] = 0;
            }
        }
    }

    // Return only the requested portion
    outBuf.resize(originalLength);
    return outBuf;
}

} // namespace rollback