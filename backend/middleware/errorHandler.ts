import { Request, Response, NextFunction } from "express";
import CustomError from "../utils/CustomError";

/**
 * A middleware that handles errors and sends a JSON response with an error message.
 *
 * @param err
 * @param req
 * @param res
 * @param next
 * @returns A JSON response with an error message.
 */
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  console.error(err.stack);
  res.status(500).json({ error: "Internal server error" });
};
