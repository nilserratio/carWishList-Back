import { type NextFunction, type Response } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import {
  type FavouritesRequest,
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
  req: FavouritesRequest,
  res: Response,
  next: NextFunction
) => {
  const { carId, _id } = req.body;

  try {
    const user = await User.findById(_id).exec();

    if (!user) {
      const error = new CustomError(
        statusCode.unauthorized,
        privateMessage.unauthorized,
        publicMessage.unauthorized
      );

      throw error;
    }

    const carObjectId = new mongoose.Types.ObjectId(carId);

    const isFavorite = user.favoriteCars.some((favoriteCar) =>
      favoriteCar.equals(carObjectId)
    );

    if (!isFavorite) {
      user.favoriteCars.push(carObjectId);
    }

    await user.save();

    res.status(200).json({ message: "Car added to favorites" });
  } catch (error) {
    next(error);
  }
};

export const removeFromFavorites = async (
  req: FavouritesRequest,
  res: Response,
  next: NextFunction
) => {
  const { carId, _id } = req.body;

  try {
    const user = await User.findById(_id).exec();

    if (!user) {
      const error = new CustomError(
        statusCode.unauthorized,
        privateMessage.unauthorized,
        publicMessage.unauthorized
      );

      throw error;
    }

    const index = user.favoriteCars.indexOf(carId);
    if (index !== -1) {
      user.favoriteCars.splice(index, 1);
      await user.save();
    }

    res.status(200).json({ message: "Car eliminated from favorites" });
  } catch (error) {
    next(error);
  }
};

export const getUserFavorites = async (
  req: FavouritesRequest,
  res: Response,
  next: NextFunction
) => {
  const { _id } = req.params;

  try {
    const userById = await User.findById(_id).exec();

    if (!userById) {
      const error = new CustomError(
        statusCode.unauthorized,
        privateMessage.unauthorized,
        publicMessage.unauthorized
      );

      throw error;
    }

    const { favoriteCars } = userById;

    res.status(200).json({ favoriteCars });
  } catch (error) {
    next(error);
  }
};
