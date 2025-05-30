
import { decompressPacket } from "../src/game/compression";
import { parseUdpClientOutboundMessage } from "../src/game/udpClientMessages";
import { parseUdpServerMessage } from "../src/game/udpServerMessage";
let clientPacket = [];
let clientBuffer;
let packet = [];
let buffer;
let parsed;
let clientParsed;

clientPacket = [           0x67, 0x02, 0x32, 0x10, 0x5d, 0x08, 0xa6, 0x5d,
  0x08, 0x03, 0x04, 0x08, 0x04, 0x00];
clientBuffer = Buffer.from(clientPacket);
clientParsed = parseUdpClientOutboundMessage(decompressPacket(clientBuffer));
console.log(clientParsed.u);


clientPacket = [          0xe7, 0x04, 0xe9, 0x10, 0x02, 0x5c, 0x08, 0xcc,
  0x5a, 0x08, 0x02, 0x03, 0x10, 0x24, 0x03, 0xac,
  0xff, 0x40, 0x04, 0x44, 0x04, 0x04, 0x00];
clientBuffer = Buffer.from(clientPacket);
clientParsed = parseUdpServerMessage(decompressPacket(clientBuffer));
console.log(clientParsed.u);

packet = [       0xe7, 0x03, 0x07, 0x10, 0x02, 0x48, 0x08, 0xcc,
  0x46, 0x08, 0xbd, 0x10, 0x00];
buffer = Buffer.from(packet);
parsed = parseUdpClientOutboundMessage(decompressPacket(buffer));
console.log(parsed.header.sequence,parsed.u);