import { type NextFunction, type Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Types } from "mongoose";
import {
  type UserCredentialsStructure,
  type UserCredentialsRequest,
  type CustomResponse,
} from "../../../types.js";
import { loginUser } from "../userControllers.js";
import User from "../../../../database/models/User.js";
import CustomError from "../../../../CustomError/CustomError.js";
import {
  privateMessage,
  statusCode,
} from "../../../utils/responseData/responseData.js";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given a loginUser controller", () => {
  const mockToken = "moked-token";

  const req: Pick<UserCredentialsRequest, "body"> = {
    body: {
      username: "009",
      password: "009",
    },
  };

  const res: CustomResponse = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };

  const next = jest.fn();

  const mockUser: UserCredentialsStructure = {
    _id: new Types.ObjectId().toString(),
    username: "009",
    password: "009",
  };

  User.findOne = jest.fn().mockReturnValue({
    exec: jest.fn().mockResolvedValue(mockUser),
  });

  bcrypt.compare = jest.fn().mockResolvedValue(true);

  jwt.sign = jest.fn().mockReturnValue(mockToken);

  describe("When it recieve a request with a valid credentials and a response", () => {
    test("Then it should call the response's method status code with 200", async () => {
      const expectedStatusCode = statusCode.ok;

      await loginUser(
        req as UserCredentialsRequest,
        res as Response,
        next as NextFunction
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the response's method json with the token", async () => {
      await loginUser(
        req as UserCredentialsRequest,
        res as Response,
        next as NextFunction
      );

      expect(res.json).toHaveBeenCalledWith({ token: mockToken });
    });
  });

  describe("When it recieve a request with a not valid credentials and a response", () => {
    test("Then it should call the recieved next function with a 401 'Wrong Credentials' error", async () => {
      const error = new CustomError(
        statusCode.unauthorized,
        privateMessage.unauthorized
      );

      User.findOne = jest.fn().mockReturnValue({
        exec: jest.fn().mockResolvedValue(undefined),
      });

      bcrypt.compare = jest.fn().mockResolvedValue(false);

      await loginUser(
        req as UserCredentialsRequest,
        res as Response,
        next as NextFunction
      );

      expect(next).toHaveBeenCalledWith(error);
    });
  });
});
