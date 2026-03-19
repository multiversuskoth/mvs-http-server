import fs from "node:fs";
import zlib from "zlib";
import {
  CODES,
  type HydraCustomType,
  type HydraFileRef,
  type Localization as HydraLocalization,
} from "./hydra";
import { HydraBufferReader } from "./hydraBufferReader";
export class HydraDecoder {
  private reader: HydraBufferReader;

  constructor(encodedStreamOrBuffer: Buffer) {
    this.reader = new HydraBufferReader(encodedStreamOrBuffer);
  }

  readArray(count, reader: HydraBufferReader) {
    const ret = new Array(count);

    for (let i = 0; i < count; i++) {
      const val = this.readValue(reader);

      if (val === null) continue;

      ret[i] = val;
    }

    return ret;
  }

  readMap(count, reader: HydraBufferReader) {
    const ret: Record<any, any> = {};

    for (let i = 0; i < count; i++) {
      const key = this.readValue(reader) as string;
      const value = this.readValue(reader);

      if (key === null) continue;

      ret[key] = value;
    }

    return ret;
  }

  readLocalization(reader: HydraBufferReader) {
    const emptyCode = this.readValue(reader);
    const defaultParam = this.readValue(reader);
    const key = this.readValue(reader) as string;
    const value = this.readValue(reader) as string;

    const localizations: HydraLocalization = {
      localizations: {
        [key]: value,
      },
    };

    return localizations;
  }

  readDate(reader: HydraBufferReader) {
    const unix_date = reader.read(4, CODES.UINT32) as number;

    const _hydra_date: HydraCustomType = {
      _hydra_unix_date: unix_date,
    };

    return _hydra_date;
  }

  readCalendar(reader: HydraBufferReader) {
    const defaultValue = this.readValue(reader) as boolean;
    const renderedValue = this.readValue(reader) as boolean;

    const calendar: HydraCustomType = {
      _hydra_calendar: {
        default: defaultValue,
        rendered: renderedValue,
      },
    };

    return calendar;
  }

  readFileRef(reader: HydraBufferReader) {
    const model_cls = this.readValue(reader) as string;
    const ref = this.readValue(reader) as string;

    const values = this.readValue(reader) as Record<string, any>;

    const hydraFileref: HydraFileRef = {
      _customType: "hydra_reference",
      value: values,
    };

    return hydraFileref;
  }

  readStoreEnabled(reader: HydraBufferReader) {
    const defaultValue = this.readValue(reader) as boolean;
    const renderedValue = this.readValue(reader) as boolean;
    const values = this.readValue(reader) as any;
    const hydraDefAndRen: HydraCustomType = {
      _hydra_StoreEnabed: values,
    };

    return hydraDefAndRen;
  }

  readWebSocket() {
    const size = this.reader.read(2, CODES.UINT16);
    return this.readValue();
  }

  readCompressedObject(reader: HydraBufferReader) {
    const index = reader.read(1, CODES.INT8) as number;
    if (index > 1) {
      console.log("WAT?");
    }
    const bytesForlength = reader.read(1, CODES.INT8) as number;
    let compressedData: Uint8Array<ArrayBuffer> | undefined;
    let dataLength: number | undefined;
    switch (bytesForlength) {
      case CODES.BYTES8:
        dataLength = reader.read(1, CODES.UINT8) as number;
        compressedData = reader._buffer.slice(reader.position, reader.position + dataLength);
        break;
      case CODES.BYTES16:
        dataLength = reader.read(2, CODES.UINT16) as number;
        compressedData = reader._buffer.slice(reader.position, reader.position + dataLength);
        break;
      case CODES.BYTES32:
        dataLength = reader.read(4, CODES.UINT32) as number;
        compressedData = reader._buffer.slice(reader.position, reader.position + dataLength);
        break;
    }
    if (compressedData && dataLength) {
      reader.position += dataLength;
      const decompressedData = zlib.unzipSync(compressedData);
      const bufferReader = new HydraBufferReader(decompressedData);
      const value = this.readValue(bufferReader);
      const _hydra_compressed = {
        _hydra_compressed: value,
      };
      return _hydra_compressed;
    }
    return 0;
  }

  readValue(reader?: HydraBufferReader) {
    if (!reader) {
      reader = this.reader;
    }
    if (reader.endOfRead) return null;
    const val = reader.read(1, CODES.INT8);
    switch (val) {
      case CODES.ZERO:
        return 0;
      case CODES.NULL:
        return null;
      case CODES.TRUE:
        return true;
      case CODES.FALSE:
        return false;
      case CODES.WEBSOCKET:
        return this.readWebSocket();
      case CODES.INT8:
        return reader.read(1, CODES.INT8);
      case CODES.UINT8:
        return reader.read(1, CODES.UINT8);
      case CODES.INT16:
        return reader.read(2, CODES.INT16);
      case CODES.UINT16:
        return reader.read(2, CODES.UINT16);
      case CODES.INT32:
        return reader.read(4, CODES.INT32);
      case CODES.UINT32:
        return reader.read(4, CODES.UINT32);
      case CODES.INT64:
        return reader.read(8, CODES.INT64);
      case CODES.UINT64:
        return reader.read(8, CODES.UINT64);
      case CODES.FLOAT:
        return reader.read(4, CODES.FLOAT);
      case CODES.DOUBLE:
        return reader.read(8, CODES.DOUBLE);
      case CODES.CHAR8:
        return reader.readString(reader.read(1, CODES.UINT8));
      case CODES.CHAR16:
        return reader.readString(reader.read(2, CODES.UINT16));
      case CODES.CHAR32:
        return reader.readString(reader.read(4, CODES.UINT32));
      case CODES.BYTES8:
        return reader.read(reader.read(1, CODES.UINT8) as number, CODES.BYTES8);
      case CODES.BYTES16:
        return reader.read(reader.read(2, CODES.UINT16) as number, CODES.BYTES16);
      case CODES.BYTES32:
        return reader.read(reader.read(4, CODES.UINT32) as number, CODES.BYTES32);
      case CODES.BIGINT:
        return reader.read(8, CODES.UINT64);
      case CODES.DATE:
        return this.readDate(reader);
      case CODES.ARRAY8:
        return this.readArray(reader.read(1, CODES.UINT8), reader);
      case CODES.ARRAY16:
        return this.readArray(reader.read(2, CODES.UINT16), reader);
      case CODES.ARRAY32:
        return this.readArray(reader.read(4, CODES.UINT32), reader);
      case CODES.ARRAY64:
        return this.readArray(reader.read(8, CODES.UINT64), reader);
      case CODES.MAP8:
        return this.readMap(reader.read(1, CODES.UINT8), reader);
      case CODES.MAP16:
        return this.readMap(reader.read(2, CODES.UINT16), reader);
      case CODES.MAP32:
        return this.readMap(reader.read(4, CODES.UINT32), reader);
      case CODES.MAP64:
        return this.readMap(reader.read(8, CODES.UINT64), reader);
      case CODES.COMPRESSED:
        return this.readCompressedObject(reader);
      case 0x68:
        return this.readLocalization(reader);
      case 0x69:
        return this.readCalendar(reader);
      case 0x70:
        return this.readFileRef(reader);
      case 0x71:
        return this.readStoreEnabled(reader);
      default: {
        console.log("HEX:", val.toString(16), "UNKNOW CODE:", val, "POS:", reader.position);
        return null;
      }
    }
  }
}
/* if (process.argv[2]) {
    fs.readFile(process.argv[2], (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
        const t0 = performance.now();
        const decoder = new HydraDecoder(data);
        const d = decoder.readValue();
        //console.log(JSON.stringify(d))

        const t1 = performance.now();
        console.log(`Execution time: ${t1 - t0} ms`);
        fs.writeFileSync("test1.json", JSON.stringify(d, null, 2))
    });
} */
