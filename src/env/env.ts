import { configDotenv } from "dotenv";
import {cleanEnv, str} from "envalid";

configDotenv({ path: ".env" });

const env = cleanEnv(process.env,{
  MONGODB_URI: str(),
  LOCAL_PUBLIC_IP : str(),
})

export default env