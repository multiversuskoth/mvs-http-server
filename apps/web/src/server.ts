// src/server.ts
import handler, { createServerEntry } from "@tanstack/react-start/server-entry";
import dotenv from "dotenv";

dotenv.config();

import { connect } from "@mvsi/database";

await connect();

export default createServerEntry({
  fetch(request) {
    return handler.fetch(request);
  },
});
