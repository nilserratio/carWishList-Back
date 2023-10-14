import { type NextFunction, type Request, type Response } from "express";
import createDebug from "debug";
import chalk from "chalk";
import CustomError from "../../CustomError/CustomError.js";
import {
  privateMessage,
  publicMessage,
  statusCode,
} from "../../utils/responseData/responseData.js";

const debug = createDebug("Recomotor-api:server:middleware:errorMiddlewares");

export const notFoundError = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const error = new CustomError(
    statusCode.notFound,
    privateMessage.notFound,
    publicMessage.notFound
  );

  next(error);
};

export const generalError = (
  error: CustomError,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  debug(`Error: ${chalk.red.bold(error.message)}`);

  const responseStatusCode = error.statusCode || statusCode.internalServerError;

  const message = error.statusCode
    ? error.message
    : privateMessage.internalServerError;

  res.status(responseStatusCode).json({ message });
};
