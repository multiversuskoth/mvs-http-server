import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { HydraDecoder, HydraEncoder } from "mvs-dump";

const HYDRA_CONTENT_TYPE = "application/x-ag-binary";

export const hydraDecoderMiddleware = <T>(req: Request, res: Response, next: NextFunction) => {
  if (req.headers["Content-Type"] === HYDRA_CONTENT_TYPE) {
    const dataChunks: Buffer[] = [];

    // Listen for data chunks
    req.on("data", (chunk) => {
      // TODO : Can we start parsing in smaller chunks?
      dataChunks.push(chunk);
    });

    // When all data is received
    req.on("end", () => {
      try {
        // Attempt to parse hydra encoding
        const binaryData = Buffer.concat(dataChunks);
        const decodedBody = new HydraDecoder(binaryData).readValue();
        req.body = decodedBody;
      } catch (e) {
        // If parsing fails, handle the error or set req.body to an empty object
        req.body = {};
      }
      next(); // Call next to move to the next middleware or route handler
    });

    res.json = (data: T) => {
      res.setHeader("Content-Type", HYDRA_CONTENT_TYPE);
      res.setHeader("X-Hydra-Server-Time", (Date.now() / 1000).toString());
      res.setHeader("X-Hydra-Info", "mvs-infinite");

      const start = performance.now();
      const encoder = new HydraEncoder();
      encoder.encodeValue(data as any);
      const end = performance.now();
      res.setHeader("X-Hydra-Processing-Time", start - end);

      res.send(encoder.returnValue());
      return res;
    };
  } else {
    res.sendStatus(StatusCodes.BAD_REQUEST);
  }
};
