import fs from "node:fs";
import { ObjectId } from "mongodb";
import zlib, { constants } from "zlib";
import { BYTESIZE, CODES } from "./hydra";

export class HydraCommand {
  code: number;
  bufferSizeBytes: number;
  offset = 0;
}
export class HydraEncoder {
  private chunks: Buffer[] = [];
  private totalLength = 0;
  private isWebsocket: boolean;

  constructor(_isWebsocket = false) {
    this.isWebsocket = _isWebsocket;
  }

  encodeValue(data: any[] | Object) {
    if (data === null) {
      return this.encodeNull();
    }
    if (typeof data === "boolean") {
      return this.encodeBoolean(data);
    }
    if (data instanceof Date) {
      return this.encodeDate(data);
    }
    if (data instanceof ObjectId) {
      return this.encodeString(data.toHexString());
    }
    if (typeof data === "object") {
      if (Array.isArray(data)) {
        return this.encodeArray(data);
      } else {
        return this.encodeObject(data);
      }
    } else if (typeof data === "string") {
      return this.encodeString(data);
    } else if (!Number.isNaN(data)) {
      return this.encodeNumber(data);
    }
  }

  encodeNull() {
    const buffer = Buffer.alloc(1);
    buffer.writeInt8(1, 0);
    this.pushBuffer(buffer);
  }

  encodeBoolean(value: boolean) {
    const buffer = Buffer.alloc(1);
    if (value === true) {
      buffer.writeInt8(2, 0);
    } else if (value === false) {
      buffer.writeInt8(3, 0);
    }
    this.pushBuffer(buffer);
  }

  encodeDate(time: Date) {
    const hydraCmd = new HydraCommand();
    hydraCmd.code = CODES.DATE;
    hydraCmd.bufferSizeBytes = 4;

    const buffer = Buffer.alloc(1 + hydraCmd.bufferSizeBytes);
    this.writeInt(buffer, hydraCmd.code, 1, hydraCmd.offset);
    hydraCmd.offset++;
    this.writeInt(buffer, time.getTime() / 1000, hydraCmd.bufferSizeBytes, hydraCmd.offset);
    this.pushBuffer(buffer);
  }

  encodeHydraDate(time: any) {
    const hydraCmd = new HydraCommand();
    hydraCmd.code = CODES.DATE;
    hydraCmd.bufferSizeBytes = 4;

    const buffer = Buffer.alloc(1 + hydraCmd.bufferSizeBytes);
    this.writeInt(buffer, hydraCmd.code, 1, hydraCmd.offset);
    hydraCmd.offset++;
    this.writeInt(buffer, time, hydraCmd.bufferSizeBytes, hydraCmd.offset);
    this.pushBuffer(buffer);
  }

  encodeCompressed(data: any) {
    const hydraCmd = new HydraCommand();
    const newEncoder = new HydraEncoder();
    newEncoder.encodeValue(data);
    const compressedBuffer = zlib.deflateSync(newEncoder.returnValue(), {
      level: constants.Z_BEST_SPEED,
    });

    hydraCmd.code = CODES.COMPRESSED;

    const size = compressedBuffer.byteLength;

    if (size <= BYTESIZE.BYTE8) {
      hydraCmd.bufferSizeBytes = 1;
    } else if (size <= BYTESIZE.BYTE16) {
      hydraCmd.bufferSizeBytes = 2;
    } else if (size <= BYTESIZE.BYTE32) {
      hydraCmd.bufferSizeBytes = 4;
    } else if (size <= BYTESIZE.BYTE64) {
      hydraCmd.bufferSizeBytes = 8;
    }

    const buffer = Buffer.alloc(3 + hydraCmd.bufferSizeBytes);

    // Header
    this.writeInt(buffer, hydraCmd.code, 1, hydraCmd.offset);
    hydraCmd.offset++;

    // Index
    this.writeInt(buffer, 1, 1, hydraCmd.offset);
    hydraCmd.offset++;

    // BYTES TYPE
    if (size <= BYTESIZE.BYTE8) {
      this.writeInt(buffer, CODES.BYTES8, 1, hydraCmd.offset);
      hydraCmd.offset++;
      this.writeInt(buffer, size, 1, hydraCmd.offset);
    } else if (size <= BYTESIZE.BYTE16) {
      this.writeInt(buffer, CODES.BYTES16, 1, hydraCmd.offset);
      hydraCmd.offset++;
      this.writeInt(buffer, size, 2, hydraCmd.offset);
    } else if (size <= BYTESIZE.BYTE32) {
      this.writeInt(buffer, CODES.BYTES32, 1, hydraCmd.offset);
      hydraCmd.offset++;
      this.writeInt(buffer, size, 4, hydraCmd.offset);
    }

    this.pushBuffer(buffer);
    this.pushBuffer(compressedBuffer);
  }

  encodeArray(data: Object[]) {
    const size = data.length;
    const hydraCmd = new HydraCommand();

    if (size <= BYTESIZE.BYTE8) {
      hydraCmd.code = CODES.ARRAY8;
      hydraCmd.bufferSizeBytes = 1;
    } else if (size <= BYTESIZE.BYTE16) {
      hydraCmd.code = CODES.ARRAY16;
      hydraCmd.bufferSizeBytes = 2;
    } else if (size <= BYTESIZE.BYTE32) {
      hydraCmd.code = CODES.ARRAY32;
      hydraCmd.bufferSizeBytes = 4;
    } else if (size <= BYTESIZE.BYTE64) {
      hydraCmd.code = CODES.ARRAY64;
      hydraCmd.bufferSizeBytes = 8;
    }

    const buffer = Buffer.alloc(1 + hydraCmd.bufferSizeBytes);
    this.writeInt(buffer, hydraCmd.code, 1, hydraCmd.offset);
    hydraCmd.offset++;

    this.writeInt(buffer, size, hydraCmd.bufferSizeBytes, hydraCmd.offset);
    this.pushBuffer(buffer);

    for (const inner of data) {
      this.encodeValue(inner);
    }
  }

  encodeObject(data: Object) {
    const size = Object.keys(data).length;
    const hydraCmd = new HydraCommand();

    if (size <= BYTESIZE.BYTE8) {
      hydraCmd.code = CODES.MAP8;
      hydraCmd.bufferSizeBytes = 1;
    } else if (size <= BYTESIZE.BYTE16) {
      hydraCmd.code = CODES.MAP16;
      hydraCmd.bufferSizeBytes = 2;
    } else if (size <= BYTESIZE.BYTE32) {
      hydraCmd.code = CODES.MAP32;
      hydraCmd.bufferSizeBytes = 4;
    } else if (size <= BYTESIZE.BYTE64) {
      hydraCmd.code = CODES.MAP64;
      hydraCmd.bufferSizeBytes = 8;
    }
    const buffer = Buffer.alloc(1 + hydraCmd.bufferSizeBytes);
    this.writeInt(buffer, hydraCmd.code, 1, hydraCmd.offset);
    hydraCmd.offset++;

    this.writeInt(buffer, size, hydraCmd.bufferSizeBytes, hydraCmd.offset);
    hydraCmd.offset++;
    this.pushBuffer(buffer);

    for (const [key, value] of Object.entries(data)) {
      if (key === "file_reference") {
        this.encodeString(key);
        this.encodeFileReference(value.value);
      } else if (key === "localizations") {
        const removedBuffer = this.chunks.pop();
        this.totalLength -= removedBuffer!.length;
        this.encodeLocalizations(value);
      } else if (key === "_hydra_StoreEnabed") {
        const removedBuffer = this.chunks.pop();
        this.totalLength -= removedBuffer!.length;
        this.encodeStoreEnabled(value);
      } else if (key === "_hydra_unix_date") {
        const removedBuffer = this.chunks.pop();
        this.totalLength -= removedBuffer!.length;
        this.encodeHydraDate(value);
      } else if (key === "_hydra_compressed") {
        const removedBuffer = this.chunks.pop();
        this.totalLength -= removedBuffer!.length;
        this.encodeCompressed(value);
      } else if (key === "_hydra_double") {
        const removedBuffer = this.chunks.pop();
        this.totalLength -= removedBuffer!.length;
        this.encodeDouble(value);
      } else if (key === "_hydra_calendar") {
        const removedBuffer = this.chunks.pop();
        this.totalLength -= removedBuffer!.length;
        this.encodeCalendar(value);
      } else {
        this.encodeString(key);
        this.encodeValue(value);
      }
    }
  }

  encodeCalendar(data: Record<string, any>) {
    const buffer = Buffer.from([0x69]);
    this.pushBuffer(buffer);
    this.encodeValue(data.default);
    this.encodeValue(data.rendered);
  }

  encodeLocalizations(data: Record<string, any>) {
    const buffer = Buffer.from([0x68, 0x1, 0x1]);
    this.pushBuffer(buffer);
    const key = Object.keys(data)[0];
    this.encodeString(key);
    this.encodeString(data[key]);
  }

  encodeFileReference(data: Record<string, any>) {
    const buffer = Buffer.from([0x70]);
    this.pushBuffer(buffer);
    this.encodeString("hydra_file");
    this.encodeString(data.id);
    this.encodeObject(data);
  }

  encodeStoreEnabled(data) {
    const buffer = Buffer.from([0x71, 0x3, 0x3]);
    this.pushBuffer(buffer);
    this.encodeArray(data);
  }

  encodeString(value: string) {
    const hydraCmd = new HydraCommand();
    const stringSize = Buffer.byteLength(value, "utf8");

    if (stringSize <= BYTESIZE.BYTE8) {
      hydraCmd.code = CODES.CHAR8;
      hydraCmd.bufferSizeBytes = 1;
    } else if (stringSize <= BYTESIZE.BYTE16) {
      hydraCmd.code = CODES.CHAR16;
      hydraCmd.bufferSizeBytes = 2;
    } else if (stringSize <= BYTESIZE.BYTE32) {
      hydraCmd.code = CODES.CHAR32;
      hydraCmd.bufferSizeBytes = 4;
    }

    const buffer = Buffer.alloc(1 + hydraCmd.bufferSizeBytes + stringSize);
    this.writeInt(buffer, hydraCmd.code, 1, hydraCmd.offset);
    hydraCmd.offset++;
    this.writeInt(buffer, stringSize, hydraCmd.bufferSizeBytes, hydraCmd.offset);
    hydraCmd.offset += hydraCmd.bufferSizeBytes;

    buffer.write(value, hydraCmd.offset);
    this.pushBuffer(buffer);
    return value;
  }

  encodeDouble(value: number) {
    const hydraCmd = new HydraCommand();
    hydraCmd.code = CODES.DOUBLE;
    hydraCmd.bufferSizeBytes = 8;

    const buffer = Buffer.alloc(1 + hydraCmd.bufferSizeBytes);
    buffer.writeUint8(hydraCmd.code);
    hydraCmd.offset++;
    buffer.writeDoubleBE(value, hydraCmd.offset);

    this.pushBuffer(buffer);
  }

  encodeNumber(value: number) {
    const hydraCmd = new HydraCommand();

    if (!Number.isInteger(value)) {
      hydraCmd.code = CODES.DOUBLE;
      hydraCmd.bufferSizeBytes = 8;
    } else if (value < 0) {
      hydraCmd.code = CODES.INT64;
      hydraCmd.bufferSizeBytes = 8;
    } else if (value <= BYTESIZE.BYTE8) {
      hydraCmd.code = CODES.UINT8;
      hydraCmd.bufferSizeBytes = 1;
    } else if (value <= BYTESIZE.BYTE16) {
      hydraCmd.code = CODES.UINT16;
      hydraCmd.bufferSizeBytes = 2;
    } else if (value <= BYTESIZE.BYTE32) {
      hydraCmd.code = CODES.UINT32;
      hydraCmd.bufferSizeBytes = 4;
    } else if (value <= BYTESIZE.BYTE64) {
      hydraCmd.code = CODES.UINT64;
      hydraCmd.bufferSizeBytes = 8;
    }

    const buffer = Buffer.alloc(1 + hydraCmd.bufferSizeBytes);
    buffer.writeUint8(hydraCmd.code);
    hydraCmd.offset++;

    this.writeInt(buffer, value, hydraCmd.bufferSizeBytes, hydraCmd.offset);

    this.pushBuffer(buffer);
  }

  writeInt(buffer: Buffer, value: number, bufferSize: number, offset: number) {
    switch (bufferSize) {
      case 1:
        buffer.writeUint8(value, offset);
        break;
      case 2:
        buffer.writeUint16BE(value, offset);
        break;
      case 4:
        buffer.writeUint32BE(value, offset);
        break;
      case 8:
        if (!Number.isInteger(value)) {
          buffer.writeDoubleBE(value, offset);
        } else if (value < 0) {
          buffer.writeBigInt64BE(BigInt(value), offset);
        } else {
          buffer.writeBigUint64BE(BigInt(value), offset);
        }

        break;
    }
  }

  pushBuffer(buffer: Buffer) {
    this.chunks.push(buffer);
    this.totalLength += buffer.length;
  }

  returnValue() {
    if (this.isWebsocket) {
      const buffer = Buffer.alloc(3);
      buffer.writeUint8(6, 0);
      buffer.writeUInt16BE(this.totalLength, 1);
      this.totalLength += 3;
      this.chunks.unshift(buffer);
    }
    return Buffer.concat(this.chunks, this.totalLength);
  }
}

/* if (process.argv[2]) {
  fs.readFile(process.argv[2], "utf-8", (err, data) => {
    let isWebsocket = false;
    const t0 = performance.now();
    if (process.argv[3]) {
      isWebsocket = true;
    }
    const encoder = new HydraEncoder(isWebsocket);
    encoder.encodeValue(JSON.parse(data));
    const buffer = encoder.returnValue();
    const t1 = performance.now();
    console.log(`Execution time: ${t1 - t0} ms`);
    fs.writeFileSync(`${process.argv[2]}.bin`, buffer);
    //console.log(buffer?.toString("hex"));
  });
}
 */
