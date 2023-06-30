import * as dotenv from "dotenv";
import express, { json } from "express";
import "express-async-errors";
import router from "@routers/index.routes";
import { errorHandler } from "@middlewares/errorHandler";

dotenv.config();

const app = express();

app.use(json()).use(router).use(errorHandler);

const port = Number(process.env.PORT) || 5000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
