import { Request, Response, NextFunction } from "express";
import { ResponseError } from "@errors/index";
import { ResponseStatus } from "@proto/index";
import { Prisma } from "@prisma/client";

export function errorHandler(
  err: Error | ResponseError | Prisma.PrismaClientKnownRequestError,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  if (err instanceof ResponseError) {
    return res.sendStatus(err.responseStatusCode);
  }

  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === "P2025") {
      return res.status(ResponseStatus.BAD_REQUEST).send({
        detail: "one or more provided languages does not exist in database",
      });
    }
  }

  console.error(err);
  return res.sendStatus(ResponseStatus.INTERNAL_SERVER_ERROR);
}
