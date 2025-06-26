/**
 * Compresses a Buffer/Uint8Array using an 8‑byte zero‑suppression bitmask algorithm,
 * writing into a fixed 1024‑byte buffer.
 *
 * @param input
 *   The data to compress.
 * @returns
 *   A Buffer containing the compressed data (≤1024 bytes).
 * @throws
 *   If the compressed output would exceed 1024 bytes.
 */
export function compressPacket(input: Buffer | Uint8Array): Buffer {
  const inBuf = Buffer.isBuffer(input) ? input : Buffer.from(input);
  const n = inBuf.length;
  if (n === 0) return Buffer.alloc(0);

  // Pre‑allocate exactly 1024 bytes
  const outBuf = Buffer.allocUnsafe(1024);
  let inPos = 0;
  let outPos = 0;

  while (inPos < n) {
    // Make sure we have at least 1 byte free for the mask
    if (outPos >= 1024) {
      throw new Error("compressPacket: output buffer overflow (1024 bytes)");
    }

    const maskPos = outPos++;
    let mask = 0;

    // Pack up to 8 input bytes
    for (let bit = 0; bit < 8 && inPos < n; bit++, inPos++) {
      const v = inBuf[inPos];
      if (v !== 0) {
        mask |= 1 << bit;
        // Make sure we have space for this byte
        if (outPos >= 1024) {
          throw new Error("compressPacket: output buffer overflow (1024 bytes)");
        }
        outBuf[outPos++] = v;
      }
    }

    outBuf[maskPos] = mask;
  }

  // Return only the used portion
  return outBuf.subarray(0, outPos);
}

/**
 * Decompresses a buffer that was compressed with the zero‑suppression bitmask algorithm,
 * writing into a fixed 1024‑byte buffer.
 *
 * @param compressedBuffer
 *   The compressed input (mask + non‑zero bytes).
 * @param originalLength
 *   The expected length of the decompressed data.
 *   If the decompressed data would exceed originalLength, it’s truncated;
 *   if originalLength > 1024, an error is thrown.
 * @returns
 *   A Buffer containing the decompressed data (≤ originalLength ≤ 1024).
 * @throws
 *   If the compressed data is malformed or the decompressed output would overflow 1024 bytes.
 */
export function decompressPacket(compressedBuffer: Buffer | Uint8Array, originalLength: number = 1024): Buffer {
  if (originalLength < 0 || originalLength > 1024) {
    throw new Error(`decompressPacket: originalLength (${originalLength}) must be between 0 and 1024`);
  }

  const compressed = Buffer.isBuffer(compressedBuffer) ? compressedBuffer : Buffer.from(compressedBuffer);

  // Pre‑allocate exactly 1024 bytes for the output
  const outBuf = Buffer.alloc(1024);
  let readPos = 0;
  let writePos = 0;

  while (readPos < compressed.length && writePos < originalLength) {
    // Read the mask byte
    const mask = compressed[readPos++];
    for (let bit = 0; bit < 8 && writePos < originalLength; bit++) {
      const isNonZero = (mask & (1 << bit)) !== 0;
      if (isNonZero) {
        if (readPos >= compressed.length) {
          throw new Error("decompressPacket: truncated compressed data");
        }
        if (writePos >= 1024) {
          throw new Error("decompressPacket: output buffer overflow (1024 bytes)");
        }
        outBuf[writePos++] = compressed[readPos++];
      } else {
        if (writePos >= 1024) {
          throw new Error("decompressPacket: output buffer overflow (1024 bytes)");
        }
        outBuf[writePos++] = 0;
      }
    }
  }


  // Return only the requested portion
  return outBuf.subarray(0, originalLength);
}
