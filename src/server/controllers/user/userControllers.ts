import { type NextFunction, type Response } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken";
import bcrypt from "bcryptjs";
import {
  type CustomRequest,
  type UserCredentialsRequest,
} from "../../types.js";
import User from "../../../database/models/User.js";
import CustomError from "../../../CustomError/CustomError.js";
import {
  privateMessage,
  publicMessage,
  statusCode,
} from "../../utils/responseData/responseData.js";

export const loginUser = async (
  req: UserCredentialsRequest,
  res: Response,
  next: NextFunction
) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username }).exec();

    if (!user || !(await bcrypt.compare(password, user.password))) {
      const error = new CustomError(
        statusCode.unauthorized,
        privateMessage.unauthorized,
        publicMessage.unauthorized
      );

      throw error;
    }

    const tokenPayload: JwtPayload = {
      sub: user._id.toString(),
      name: user.username,
    };

    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET!, {
      expiresIn: "7d",
    });

    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

export const addToFavorites = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const { userId, carId } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      const error = new CustomError(
        statusCode.unauthorized,
        privateMessage.unauthorized,
        publicMessage.unauthorized
      );

      throw error;
    }

    if (!user.favoriteCars.includes(carId)) {
      user.favoriteCars.push(carId);
      await user.save();
    }

    res.status(200).json({ message: "Car added to favorites" });
  } catch (error) {
    next(error);
  }
};
