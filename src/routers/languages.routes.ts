import {
  languageStatsController,
  listLanguagesController,
  updateLanguagesController,
} from "@controllers/languages.controllers";
import { validateReqBody } from "@middlewares/validators";
import { languagesSchema } from "@schemas/languages.schema";
import { Router } from "express";

const languagesRouter = Router();

languagesRouter
  .get("/", listLanguagesController)
  .get("/stats", languageStatsController);

export default languagesRouter;
