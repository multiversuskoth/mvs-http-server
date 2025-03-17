import express, { Request, Response } from "express";
import { MVSQueries } from "../interfaces/queries_types";

export async function handleDrives_multiversus_sync(req: Request<{}, {}, {}, {}>, res: Response) {
  res.send({ additions: [], deletions: [] });
}
