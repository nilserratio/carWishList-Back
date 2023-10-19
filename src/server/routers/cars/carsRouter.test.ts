import "../../../loadEnvironment.js";
import request from "supertest";
import { MongoMemoryServer } from "mongodb-memory-server";
import connectToDatabase from "../../../database/connectToDatabase";
import mongoose from "mongoose";
import app from "../../app.js";
import { paths } from "../../utils/paths/paths.js";
import { statusCode } from "../../utils/responseData/responseData.js";
import Car from "../../../database/models/Car.js";
import { carsMock } from "../../../mocks/cars/carsMocks.js";

let server: MongoMemoryServer;

beforeAll(async () => {
  server = await MongoMemoryServer.create();
  await connectToDatabase(server.getUri());
});

afterAll(async () => {
  await mongoose.connection.close();
  await server.stop();
});

afterEach(async () => {
  await Car.deleteMany();
});

describe("Given a GET '/cars' endpoint", () => {
  beforeEach(async () => {
    await Car.create(carsMock);
  });

  describe("When it recieve a request ", () => {
    test("Then it should return a statusCode 200 and a list of cars", async () => {
      const response = await request(app).get(paths.cars).expect(statusCode.ok);

      expect(response.body.marcas).toHaveLength(2);
    });
  });
});
