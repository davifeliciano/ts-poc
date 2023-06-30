import { Schema } from "joi";
import { Request, Response, NextFunction } from "express";
import { ResponseStatus } from "@proto/index";

export function validateReqBody(schema: Schema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, {
      abortEarly: false,
      convert: false,
    });

    if (error) {
      const details = error.details.map((detail) => detail.message);
      return res.status(ResponseStatus.BAD_REQUEST).send({ details });
    }

    next();
  };
}
