import express from "express";
import cors from "cors";
import morgan from "morgan";
import { generalError } from "./middlewares/error/errorMiddlewares.js";

const app = express();

const trustedOrigins = [process.env.ALLOWED_ORIGIN_DEV!];

app.use(cors({ origin: trustedOrigins }));

app.disable("x-powered-by");

app.use(morgan("dev"));

app.use(express.json);

app.use(generalError);

export default app;
