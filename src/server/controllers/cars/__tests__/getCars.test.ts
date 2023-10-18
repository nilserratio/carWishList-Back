import { type Request, type Response } from "express";
import { type CustomResponse } from "../../../types.js";
import Car from "../../../../database/models/Car.js";
import { carsMock } from "../../../../mocks/cars/carsMocks.js";
import { statusCode } from "../../../utils/responseData/responseData.js";
import { getCars } from "../carsControllers.js";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given a getCars controller", () => {
  const req = {};
  const res: CustomResponse = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };
  const next = jest.fn();

  describe("When it receives a response", () => {
    Car.find = jest
      .fn()
      .mockReturnValue({ exec: jest.fn().mockResolvedValue(carsMock) });

    test("Then it should call the response's method status with 200", async () => {
      const expectedStatusCode = statusCode.ok;

      await getCars(req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the response's method json with a list of cars", async () => {
      const expectedResponseBody = {
        cars: carsMock,
      };

      await getCars(req as Request, res as Response, next);

      expect(res.json).toHaveBeenCalledWith(expectedResponseBody);
    });
  });
});
