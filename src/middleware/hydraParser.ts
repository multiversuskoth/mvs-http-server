import { NextFunction, Request, Response } from "express";

import { HydraDecoder, HydraEncoder } from "mvs-dump";

const HYDRA_CONTENT_TYPE = "application/x-ag-binary";

// Create a middleware function for custom response handling
export const hydraDecoderMiddleware = <T>(req: Request, res: Response, next: NextFunction) => {
  if (req.headers["content-type"] === HYDRA_CONTENT_TYPE) {
    const dataChunks: Buffer[] = [];

    // Listen for data chunks
    req.on("data", (chunk) => {
      dataChunks.push(chunk);
    });

    // When all data is received
    req.on("end", () => {
      try {
        // Attempt to parse the data (e.g., as JSON or other format)
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
      res.setHeader("content-type", HYDRA_CONTENT_TYPE);
      const encoder = new HydraEncoder();
      encoder.encodeValue(data as any);
      res.send(encoder.returnValue());
      return res;
    };
  }
  next();
};
