import { Router } from "express";
import { getCars } from "../../controllers/cars/carsControllers.js";

const carsRouter = Router();

carsRouter.get("/", getCars);

export default carsRouter;
