import { type Response, type Request } from "express";
import { notFoundError } from "../errorMiddlewares.js";
import { type NextFunction } from "connect";
import CustomError from "../../../../CustomError/CustomError.js";
import {
  privateMessage,
  statusCode,
} from "../../../utils/responseData/responseData.js";

describe("Given a notFoundError middleware function", () => {
  describe("When it recieve a request and a next function", () => {
    test("Then it should call the recieved next function with a 404 'Endpoint not found' error", () => {
      const expectedError = new CustomError(
        statusCode.notFound,
        privateMessage.notFound
      );

      const req = {};
      const res: Pick<Response, "status" | "json"> = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const next = jest.fn();

      notFoundError(req as Request, res as Response, next as NextFunction);

      expect(next).toHaveBeenCalledWith(expectedError);
    });
  });
});
