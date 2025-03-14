import { configDotenv } from "dotenv";
import {cleanEnv, str} from "envalid";

configDotenv({ path: ".env" });

const env = cleanEnv(process.env,{
  MONGODB_URI: str()
})

export default env