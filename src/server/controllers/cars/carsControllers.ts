import { type Request, type NextFunction, type Response } from "express";
import Car from "../../../database/models/Car.js";

export const getCars = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const marcas = await Car.find().exec();

    res.status(200);
    res.json({ marcas });
  } catch (error: unknown) {
    next(error);
  }
};
