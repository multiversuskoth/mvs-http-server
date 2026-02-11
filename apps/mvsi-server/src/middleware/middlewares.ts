import { jwt } from "@elysiajs/jwt";
import { env } from "@mvsi/env";
import { HydraDecoder, HydraEncoder } from "@mvsi/hydra";
import { logger } from "@mvsi/logger";
import Elysia, { type Static, t } from "elysia";
import { getCurrentVersion } from "../data/config";
import { HYDRA_ACCESS_TOKEN, HYDRA_CONTENT_TYPE } from "../index.elysia";

export const MAIN_APP = new Elysia().onRequest(({ request }) => {
  console.log("request.url", request.url);
});
const JWT_CLAIMS_SCHEMA = t.Object({
  id: t.String(),
  public_id: t.String(),
  wb_network_id: t.String(),
  profile_id: t.String(),
  username: t.String(),
  hydraUsername: t.String(),
  steamId: t.String(),
});

const MVSI_JWT = new Elysia().use(
  jwt({
    name: "jwt",
    secret: env.SESSION_SECRET,
    schema: JWT_CLAIMS_SCHEMA,
  }),
);

export type JWT_CLAIMS = Static<typeof JWT_CLAIMS_SCHEMA>;

export const MVSI_HYDRA = new Elysia({ name: "MVSI_HYDRA" })
  .onError({ as: "global" }, ({ error, path, code, request }) => {
    if (code === "NOT_FOUND") {
      logger.info(`Unhandled route: ${request.method} ${request.url}`);
      return Response.json(
        { body: {}, metadata: null, return_code: 200 },
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    } else {
      logger.error(error.toString(), { path: path });
      return new Response();
    }
  })
  .onParse({ as: "global" }, async ({ request }) => {
    //console.log("request.url", request.url);
    if (request.headers.get("content-type") === HYDRA_CONTENT_TYPE) {
      try {
        const buffer = await request.arrayBuffer();
        const decoded = new HydraDecoder(Buffer.from(buffer)).readValue();
        return decoded;
      } catch (e) {
        logger.error("Error Deconding Hydra payload", e);
        return {};
      }
    }
  })
  .mapResponse({ as: "global" }, ({ request, responseValue, set }) => {
    if (request.headers.get("content-type") === HYDRA_CONTENT_TYPE) {
      const start = performance.now();
      const encoder = new HydraEncoder();
      encoder.encodeValue(responseValue as any);
      set.headers["Content-Type"] = HYDRA_CONTENT_TYPE;
      set.headers["X-Hydra-Server-Time"] = (Date.now() / 1000).toString();
      set.headers["X-Hydra-Info"] = getCurrentVersion();
      const end = performance.now();
      set.headers["X-Hydra-Processing-Time"] = end - start;
      return new Response(encoder.returnValue(), {
        headers: {
          "Content-Type": HYDRA_CONTENT_TYPE,
          "X-Hydra-Server-Time": (Date.now() / 1000).toString(),
          "X-Hydra-Info": getCurrentVersion().toString(),
          "X-Hydra-Processing-Time": (end - start).toString(),
        },
      });
    }
    return undefined;
  })
  .use(MVSI_JWT);

export const MVSI_HYDRA_WITH_JWT = new Elysia({ name: "MVSI_HYDRA_JWT" })
  .use(MVSI_HYDRA)
  .derive({ as: "scoped" }, async ({ jwt, headers, set }) => {
    const token = headers[HYDRA_ACCESS_TOKEN];
    if (!token) {
      set.status = 401;
      throw new Error("Unauthorized");
    }

    const claims = await jwt.verify(token);

    if (!claims) {
      set.status = 401;
      throw new Error("Invalid Token");
    }

    return { claims: claims };
  });
