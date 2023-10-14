import { type NextFunction, type Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Types } from "mongoose";
import {
  type UserCredentialsStructure,
  type UserCredentialsRequest,
} from "../../../types";
import { loginUser } from "../userControllers.js";
import User from "../../../../database/models/User.js";

describe("Given a loginUser controller", () => {
  describe("When it recieve a request with a valid credentials and a response", () => {
    const mockToken = "moked-token";

    const req: Pick<UserCredentialsRequest, "body"> = {
      body: {
        username: "009",
        password: "009",
      },
    };

    const res: Pick<Response, "status" | "json"> = {
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

    test("Then it should call the response's method status code with 200", async () => {
      const expectedStatusCode = 200;

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
});
