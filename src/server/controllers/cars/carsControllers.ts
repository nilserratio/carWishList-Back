import { type Request, type NextFunction, type Response } from "express";
import Car from "../../../database/models/Car";

export const getCars = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const cars = await Car.find().limit(20).exec();

    res.status(200);
    res.json({ cars });
  } catch (error: unknown) {
    next(error);
  }
};
