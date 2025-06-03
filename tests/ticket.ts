import { parseEncryptedAppTicket } from "steam-appticket";

const decryptionKey = Buffer.from([
  0xed, 0x93, 0x86, 0x07, 0x36, 0x47, 0xce, 0xa5, 0x8b, 0x77, 0x21, 0x49, 0x0d, 0x59, 0xed, 0x44, 0x57, 0x23, 0xf0, 0xf6, 0x6e, 0x74, 0x14, 0xe1,
  0x53, 0x3b, 0xa3, 0x3c, 0xd8, 0x03, 0xbd, 0xbd,
]);

const ticket = Buffer.from(
  "080210f7ceb791091800204e2a800120d4dca0aeb6842eddecfd3d557391f8b3e4b879d2b1dbe7fff59f7b3f802e18d07ed50afb81359739be09cfe8cdb00311205dc5b60d4108a798f0768974aa8c8ade822c57839222c3349418de77eb206f53cc518f73bb7c4cb6d17fceb40afd8fc63912a5bf5125f0a270bd34fef9405b00530aba14b3d764ccb479eccbf3fd",
  "hex"
);
console.log(parseEncryptedAppTicket(ticket, decryptionKey));
