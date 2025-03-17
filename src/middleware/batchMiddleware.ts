import { NextFunction, Request, Response } from "express";

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
  const customRes = res as BatchResponse;
  const send = res.send;

  customRes.batchedRequests = [];
  // @ts-ignore
  customRes.send = function (body: any) {
    if (req.url === "/batch") {
      send.call(this, body);
    } else {
      customRes.batchedRequests.push({
        body: body,
        headers: res.getHeaders() as any,
        status_code: res.statusCode,
      });
    }
  };
  next();
};

export async function handle_batch_custom(req: Request<{}, {}, {}, {}>, res: Response) {
  const batchBody = req.body as BatchRequest;
  const customRes = res as BatchResponse;
  //@ts-ignore
  req.batch = true;
  for (let request of batchBody.requests) {
    res.statusCode = 200;
    req.url = request.url;
    req.body = request.body;
    req.method = request.verb;
    req.query = urlSearchParamsToObject(req.url);
    req.app._router.handle(req, res);
  }
  req.url = "/batch";
  res.statusCode = 200;
  res.send({ responses: customRes.batchedRequests });
}
