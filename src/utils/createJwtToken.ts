import * as jwt from "jsonwebtoken";
import env from "../env/env";
import jwtConfiguration from "../config/jwtConfiguration";

export default function createJwtToken(steamID: string): string {
  const jwtToken = jwt.sign(
    {
      steam: steamID,
    },
    env.JWT_SECRET,
    {
      algorithm: jwtConfiguration.algorithm,
      expiresIn: `${jwtConfiguration.expiresSeconds}S`,
    },
  );

  return jwtToken;
}
