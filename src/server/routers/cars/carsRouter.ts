import { Router } from "express";
import { getCars } from "../../controllers/cars/carsControllers.js";
import { paths } from "../../utils/paths/paths.js";

const carsRouter = Router();

carsRouter.get(paths.root, getCars);

export default carsRouter;
