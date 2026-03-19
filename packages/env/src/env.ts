import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {
    MONGODB_URI: z.string(),
    REDIS_URI: z.string(),
    PUBLIC_URI: z.string(),
    WEBSOCKET_PORT: z.coerce.number(),
    SESSION_SECRET: z.string(),
    STEAM_KEY: z.string(),
    STEAM_RETURN_URL: z.string(),
    STEAM_REALM: z.string(),
    LOCAL_PUBLIC_IP: z.string(),
    GAME_VERSION: z.string(),
    UDP_PORT:  z.coerce.number(),
    HTTP_PORT: z.coerce.number(),
    PORT: z.coerce.number(),
    DATA_ASSET_TOKEN: z.string(),
    UDP_SERVER_IP : z.string(),

    STORAGE_REGION: z.string().optional(),
    STORAGE_BUCKET_NAME: z.string().optional(),
    STORAGE_ENDPOINT: z.string().optional(),
    STORAGE_ACCESS_KEY: z.string().optional(),
    STORAGE_SECRET_KEY: z.string().optional(),
  },

  /**
   * The prefix that client-side variables must have. This is enforced both at
   * a type-level and at runtime.
   */
  clientPrefix: "VITE_",

  client: {
    VITE_APP_TITLE: z.string().min(1).optional(),
  },

  /**
   * What object holds the environment variables at runtime. This is usually
   * `process.env` or `import.meta.env`.
   */
  runtimeEnv: process.env,

  /**
   * By default, this library will feed the environment variables directly to
   * the Zod validator.
   *
   * This means that if you have an empty string for a value that is supposed
   * to be a number (e.g. `PORT=` in a ".env" file), Zod will incorrectly flag
   * it as a type mismatch violation. Additionally, if you have an empty string
   * for a value that is supposed to be a string with a default value (e.g.
   * `DOMAIN=` in an ".env" file), the default value will never be applied.
   *
   * In order to solve these issues, we recommend that all new projects
   * explicitly specify this option as true.
   */
  emptyStringAsUndefined: true,
});
