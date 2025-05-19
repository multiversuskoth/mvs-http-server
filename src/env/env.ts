import { configDotenv } from "dotenv";
import { cleanEnv, str } from "envalid";

configDotenv({ path: ".env" });

const env = cleanEnv(process.env, {
  MONGODB_URI: str(),
  JWT_SECRET: str(),
});

export default env;
