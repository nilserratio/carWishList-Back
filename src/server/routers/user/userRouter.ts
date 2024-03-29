import { Router } from "express";
import { validate } from "express-validation";
import {
  addToFavorites,
  getUserFavorites,
  loginUser,
  removeFromFavorites,
} from "../../controllers/user/userControllers.js";
import { loginUserSchema } from "../../schemas/UserSchemas.js";
import { paths } from "../../utils/paths/paths.js";

const userRouter = Router();

userRouter.post(
  paths.login,
  validate(loginUserSchema, {}, { abortEarly: false }),
  loginUser
);

userRouter.post(`${paths.favorites}${paths.add}`, addToFavorites);

userRouter.post(`${paths.favorites}${paths.remove}`, removeFromFavorites);

userRouter.get(`${paths.favorites}/:_id`, getUserFavorites);

export default userRouter;
