import express, { Request, Response } from "express";
import { MVSQueries } from "../interfaces/queries_types";

export async function handleDatarouter_api_v1_public_data_clients(
  req: Request<{}, {}, {}, MVSQueries.Datarouter_api_v1_public_data_clients_QUERY>,
  res: Response,
) {
  res.send({});
}
