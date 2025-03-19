import express, { Request, Response } from "express";
import { MVSQueries } from "../interfaces/queries_types";

export async function handleGlobal_configuration_types_calendarflags_global_configurations(
  req: Request<{}, {}, {}, MVSQueries.Global_configuration_types_calendarflags_global_configurations_QUERY>,
  res: Response
) {
  res.send("");
}

export async function handleGlobal_configuration_types_wwshopconfiguration_global_configurations(
  req: Request<{}, {}, {}, MVSQueries.Global_configuration_types_wwshopconfiguration_global_configurations_QUERY>,
  res: Response
) {
  res.send("");
}
