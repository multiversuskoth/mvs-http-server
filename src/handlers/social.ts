import express, { Request, Response } from "express";
import { MVSQueries } from "../interfaces/queries_types";

export async function handleSocial_me_blocked(req: Request<{}, {}, {}, {}>, res: Response) {
  res.send({ total: 0, page: 1, page_size: 20, results: [] });
}
