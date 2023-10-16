import { Router } from "express";
import { validate } from "express-validation";
import { loginUser } from "../../controllers/user/userControllers.js";
import { loginUserSchema } from "../../schemas/UserSchemas.js";
import { paths } from "../../utils/paths/paths.js";

const userRouter = Router();

userRouter.post(
  paths.login,
  validate(loginUserSchema, {}, { abortEarly: false }),
  loginUser
);

export default userRouter;
