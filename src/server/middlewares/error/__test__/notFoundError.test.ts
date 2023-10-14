import { type Response, type Request } from "express";
import { notFoundError } from "../errorMiddlewares";
import { type NextFunction } from "connect";
import CustomError from "../../../CustomError/CustomError";

describe("Given a notFoundError middleware function", () => {
  describe("When it recieve a request and a next function", () => {
    test("Then it should call the recieved next function with a 404 'Endpoint not found' error", () => {
      const expectedError = new CustomError(404, "Endpoint not found");

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
