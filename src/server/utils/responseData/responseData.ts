import { type PrivateAndPublicMessages, type StatusCode } from "./types";

export const statusCode: StatusCode = {
  ok: 200,
  badRequest: 400,
  unauthorized: 401,
  notFound: 404,
  internalServerError: 500,
};

export const privateMessage: PrivateAndPublicMessages = {
  ok: "ok",
  badRequest: "Validation Failed",
  unauthorized: "Wrong Credentials",
  notFound: "Endpoint not found",
  internalServerError: "Internal Server Error",
};

export const publicMessage: PrivateAndPublicMessages = {
  ok: "ok",
  badRequest: "Validation Failed",
  unauthorized: "Wrong Credentials",
  notFound: "The endpoint you provided doesn't exist",
  internalServerError: "General error, please try it in a few minutes",
};
