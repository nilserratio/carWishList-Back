import { type Response, type Request } from "express";
import { type Types } from "mongoose";

export type CustomResponse = Pick<Response, "status" | "json">;

export interface UserCredentials {
  username: string;
  password: string;
}

export interface UserCredentialsStructure extends UserCredentials {
  _id: string;
}

export type UserCredentialsRequest = Request<
  Record<string, unknown>,
  Record<string, unknown>,
  UserCredentials
>;

export interface CustomRequest extends UserCredentialsStructure {
  carId: Types.ObjectId;
}

export type FavouritesRequest = Request<
  Record<string, unknown>,
  Record<string, unknown>,
  CustomRequest
>;
