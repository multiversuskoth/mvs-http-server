import { configDotenv } from "dotenv";
import { cleanEnv, str, num } from "envalid";

configDotenv({ path: ".env" });

const env = cleanEnv(process.env, {
  MONGODB_URI: str(),
  LOCAL_PUBLIC_IP: str(),
  GAME_VERSION: str(),
  GAME_DOMAIN: str(),
  WB_DOMAIN: str(),
  REDIS_HOST: str(),
  REDIS_PORT: num(),
  REDIS_PASSWORD: str(),
  REDIS_USERNAME: str(),
  JWT_SECRET: str(),
});

export default env;
