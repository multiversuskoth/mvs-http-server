import { NextFunction, Request, Response } from "express";
import { HYDRA_CONTENT_TYPE } from "./hydraParser";
import { HYDRA_ACCESS_TOKEN } from "./auth";

export interface BatchRequest extends Request {
  requests: {
    body: any;
    headers: any;
    url: string;
    verb: string;
  }[];
}

export interface BatchResponse extends Response {
  batchEnd: void;
  batchedRequests: {
    status_code: number;
    body: any;
    headers: Headers;
  }[];
}
function substringFromFirstOccurrence(str: string, char: string) {
  const index = str.indexOf(char);
  if (index === -1) {
    return ""; // Character not found
  }
  return str.substring(index);
}

export function urlSearchParamsToObject(path: string) {
  const searchParams = new URLSearchParams(substringFromFirstOccurrence(path, "?"));
  const result: Record<string, string | string[]> = {};
  for (const [key, value] of searchParams.entries()) {
    if (result[key]) {
      if (!Array.isArray(result[key])) {
        result[key] = [result[key]];
      }
      result[key].push(value);
    } else {
      result[key] = value;
    }
  }
  return result;
}

export const batchMiddleware = (req: Request, res: Response, next: NextFunction) => {
  next();
};

interface BatchResponseItem {
  status_code: number;
  headers: Record<string, any>;
  body: any;
}

export async function handle_batch_custom(req: Request<{}, {}, {}, {}>, res: Response) {
  const batchBody = req.body as BatchRequest;
  const customRes = res as BatchResponse;
  //@ts-ignore
  req.batch = true;
  const results = await Promise.all(
    batchBody.requests.map((request) => {
      return new Promise<BatchResponseItem>((resolve, reject) => {
        const mockReq = Object.create(req) as Request;
        mockReq.statusCode = 200;
        mockReq.url = request.url;
        mockReq.body = request.body;
        mockReq.method = request.verb;
        mockReq.token = req.token;
        mockReq.rawToken = req.rawToken;
        mockReq.headers = request.headers;
        //@ts-ignore
        mockReq.batch = true;
        mockReq.headers["content-type"] = HYDRA_CONTENT_TYPE;
        mockReq.headers[HYDRA_ACCESS_TOKEN] = req.headers[HYDRA_ACCESS_TOKEN];
        mockReq.query = urlSearchParamsToObject(request.url);

        // fake res
        const headers: Record<string, any> = {};
        let status_code = 200;
        let sentBody: any;

        const mockRes = {
          status(code: number) {
            status_code = code;
            return this;
          },
          set(header: string, value: any) {
            headers[header.toLowerCase()] = value;
            return this;
          },
          get(header: string) {
            return headers[header.toLowerCase()];
          },
          json(body: any) {
            headers["content-type"] = "application/json";
            sentBody = body;
            resolve({ status_code, headers, body: sentBody });
            return this;
          },
          send(body: any) {
            sentBody = body;
            resolve({  status_code, headers, body: sentBody });
            return this;
          },
          end(body?: any) {
            if (body !== undefined) sentBody = body;
            resolve({  status_code, headers, body: sentBody });
            return this;
          },
        } as unknown as Response;

        req.app._router.handle(mockReq, mockRes);
      });
    })
  );

  req.url = "/batch";
  res.statusCode = 200;
  res.send({ responses: results });
}
