import { Request, Response } from "express";
import { MVSQueries } from "../interfaces/queries_types";

export async function handleFriends_me(req: Request<{}, {}, {}, MVSQueries.Friends_me_QUERY>, res: Response) {
  res.send({
    total: 0,
    page: 1,
    page_size: 1000,
    results: [],
  });
}

export async function handleFriends_me_invitations_incoming(
  req: Request<{}, {}, {}, MVSQueries.Friends_me_invitations_incoming_QUERY>,
  res: Response,
) {
  res.send({
    total: 0,
    page: 1,
    page_size: 1000,
    results: [],
  });
}

export async function handleFriends_me_invitations_outgoing(
  req: Request<{}, {}, {}, MVSQueries.Friends_me_invitations_outgoing_QUERY>,
  res: Response,
) {
  res.send({
    total: 0,
    page: 1,
    page_size: 1000,
    results: [],
  });
}
