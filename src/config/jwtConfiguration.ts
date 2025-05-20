import * as jwt from "jsonwebtoken";

const jwtConfiguration: {
  algorithm: jwt.Algorithm;
  expiresSeconds: number;
} = {
  algorithm: "RS256",
  expiresSeconds: 24 * 60 * 60,
};

export default jwtConfiguration;
