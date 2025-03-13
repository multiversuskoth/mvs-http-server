import { Request, Response } from "express";
import { MVSRequests } from "@/interfaces/requests_types";
import { MVSResponses } from "@/interfaces/responses_types";
import { MVSQueries } from "@/interfaces/queries_types";

export async function handleAccess(
  req: Request<
    {},
    MVSResponses.Access_RESPONSE,
    MVSRequests.Access_REQUEST,
    {}
  >,
  res: Response
) {
  
}
