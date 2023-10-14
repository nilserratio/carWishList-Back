import "./loadEnvironment.js";
import createDebug from "debug";
import chalk from "chalk";
import app from "./server/app.js";
import connectToDatabase from "./database/connectToDatabase.js";

const debug = createDebug("Recomotor-api:root");

const port = process.env.PORT ?? 4000;
const mongoDbConnection = process.env.MONGODB_CONNECTION;

if (!mongoDbConnection) {
  debug(chalk.red("Missing enviroment variable"));
  process.exit(1);
}

app.listen(port, () => {
  debug(`Listening on ${chalk.green(`http://localhost:${port}`)}`);
});

try {
  await connectToDatabase(mongoDbConnection);

  debug(chalk.bgGreen("Connected to database"));
} catch (error: unknown) {
  debug(`Error connecting data base: ${chalk.red((error as Error).message)}`);
}
