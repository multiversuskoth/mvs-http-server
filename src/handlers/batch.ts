import express, { Request, Response } from "express";
import { MVSQueries } from "../interfaces/queries_types";

import { handle_batch_custom } from "../middleware/batchMiddleware";

export async function handleBatch(req: Request<{}, {}, {}, {}>, res: Response) {
  await handle_batch_custom(req, res);
}
