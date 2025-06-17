import { configDotenv } from "dotenv";
import { cleanEnv, str } from "envalid";

configDotenv({ path: ".env" });

const env = cleanEnv(process.env, {
  MONGODB_URI: str(),
  LOCAL_PUBLIC_IP: str(),
  UDP_SERVER_IP: str(),
  UDP_SERVER_IP2: str(),
  GAME_VERSION: str(),
  GAME_DOMAIN: str(),
  WB_DOMAIN: str(),
  REDIS:str(),
  REDIS_USERNAME:str(),
  REDIS_PW:str(),
});

export default env;
