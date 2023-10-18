import { type Request, type NextFunction, type Response } from "express";
import Car from "../../../database/models/Car";

export const getCars = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const cars = await Car.find().exec();

    res.status(200);
    res.json({ cars });
  } catch (error: unknown) {
    next(error);
  }
};
