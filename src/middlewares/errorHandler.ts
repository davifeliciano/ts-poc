import { Request, Response, NextFunction } from "express";
import { ResponseError } from "@errors/index";
import { ResponseStatus } from "@proto/index";

export function errorHandler(
  err: Error | ResponseError,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  if (err instanceof ResponseError) {
    return res.sendStatus(err.responseStatusCode);
  }

  return res.sendStatus(ResponseStatus.INTERNAL_SERVER_ERROR);
}
