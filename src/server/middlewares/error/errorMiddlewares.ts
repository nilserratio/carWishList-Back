import { type NextFunction, type Request, type Response } from "express";
import createDebug from "debug";
import chalk from "chalk";
import type CustomError from "../../CustomError/CustomError.js";

const debug = createDebug("Recomotor-api:server:middleware:errorMiddlewares");

export const generalError = (
  error: CustomError,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  debug(`Error: ${chalk.red.bold(error.message)}`);

  const statusCode = error.statusCode || 500;

  const message = error.statusCode
    ? error.message
    : "General error, please try it in a few minutes";

  res.status(statusCode).json({ message });
};
