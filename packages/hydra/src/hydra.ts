export enum CODES {
  ZERO = 0x0,
  NULL = 0x1,
  TRUE = 0x2,
  FALSE = 0x3,
  WEBSOCKET = 0x6,
  INT8 = 0x10,
  UINT8 = 0x11,
  INT16 = 0x12,
  UINT16 = 0x13,
  INT32 = 0x14,
  UINT32 = 0x15,
  INT64 = 0x16,
  UINT64 = 0x17,
  FLOAT = 0x20,
  DOUBLE = 0x21,
  CHAR8 = 0x30,
  CHAR16 = 0x31,
  CHAR32 = 0x32,
  BYTES8 = 0x33,
  BYTES16 = 0x34,
  BYTES32 = 0x35,
  BIGINT = 0x36,
  DATE = 0x40,
  ARRAY8 = 0x50,
  ARRAY16 = 0x51,
  ARRAY32 = 0x52,
  ARRAY64 = 0x53,
  MAP8 = 0x60,
  MAP16 = 0x61,
  MAP32 = 0x62,
  MAP64 = 0x63,
  COMPRESSED = 0x67,
}

export const BYTESIZE = {
  BYTE8: 255,
  BYTE16: 65535,
  BYTE32: 4294967295,
  BYTE64: 18446744073709551615n,
} as const;

export interface Localization {
  localizations: Record<string, string>;
}

export interface HydraCustomType {
  [key: string]: any;
}

export interface HydraFileRef {
  _customType: "hydra_reference";
  value: Record<string, string>;
}

export interface HydraBatchRequest {
  options: {
    allow_failures: boolean;
    parallel: boolean;
  };
  requests: HydraRequest[];
}

export interface HydraRequest {
  body?: any;
  url: string;
  verb: string;
  headers: Record<string, string>;
}

export interface HydraBatchResponse {
  responses: HydraResponse[];
}

export interface HydraResponse {
  status_code: number;
  body?: any;
  headers: Record<string, string>;
}
