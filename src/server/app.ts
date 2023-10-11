import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

const trustedOrigins = [process.env.ALLOWED_ORIGIN_DEV!];

app.use(cors({ origin: trustedOrigins }));

app.disable("x-powered-by");

app.use(morgan("dev"));

app.use(express.json);

export default app;
