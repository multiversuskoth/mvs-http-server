import { configDotenv } from "dotenv";
import { cleanEnv, str } from "envalid";

configDotenv({ path: ".env" });

const env = cleanEnv(process.env, {
  MONGODB_URI: str(),
  LOCAL_PUBLIC_IP: str(),
  GAME_VERSION: str(),
  GAME_DOMAIN: str(),
  WB_DOMAIN: str(),
});

export default env;
