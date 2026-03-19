import { CODES } from "./hydra.js";

export class HydraBufferReader {
    _buffer: Uint8Array;
    position: number;

    textEncoder = new TextDecoder('utf-8');
    constructor(buffer: Buffer) {
        this._buffer = buffer
        this.position = 0;
    }

    get endOfRead() {
        return this.position >= this._buffer.byteLength;
    }

    read(length: number, code: CODES) {

        let result: number | ArrayBufferLike = 0;
        try {
            const slice = this._buffer.slice(this.position, this.position + length)
            const buffer = Buffer.from(slice);

            switch (code) {
                case CODES.INT8: {
                    result = buffer.readInt8(0)
                    break;
                }
                case CODES.UINT8: {
                    result = buffer.readUInt8(0);
                    break;
                }
                case CODES.INT16: {
                    result = buffer.readInt16BE(0);
                    break;
                }
                case CODES.UINT16: {
                    result = buffer.readUInt16BE(0);
                    break;
                }
                case CODES.INT32: {
                    result = buffer.readInt32BE(0);
                    break;
                }
                case CODES.UINT32: {
                    result = buffer.readUInt32BE(0);
                    break;
                }
                case CODES.INT64: {
                    result = Number(buffer.readBigInt64BE(0));
                    break;
                }
                case CODES.UINT64: {
                    result = Number(buffer.readBigUInt64BE(0));
                    break;
                }
                case CODES.FLOAT: {
                    result = buffer.readFloatBE(0);
                    break;
                }
                case CODES.DOUBLE: {
                    result = buffer.readDoubleBE(0);
                    if (Number.isInteger(result)) {
                        // Special encoding for trailing zeros since javascript does not suport trailing zeros in double (0.0000)
                        //@ts-ignore
                        result = {
                            //@ts-ignore
                            "_hydra_double": result
                        }
                    }

                    break;
                }
                case CODES.BYTES8,
                    CODES.BYTES16,
                    CODES.BYTES32
                    : {
                        result = this._buffer.buffer
                        break;
                    }
            }
        } catch (e) {
            console.log(e);
            return result;
        }
        this.position += length;
        return result;
    }

    readToByte(length) {
        const bytes = this._buffer.slice(this.position, this.position + length);
        this.position += length;
        return bytes;
    }

    readString(length) {
        const bytes = this.readToByte(length)
        const text = this.textEncoder.decode(bytes); // Assumes ASCII encoding;
        return text;
    }
}