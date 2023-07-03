import {
  signUpController,
  updatePasswordController,
} from "@controllers/auth.controllers";
import { updateLanguagesController } from "@controllers/languages.controllers";
import { Router } from "express";
import { validateReqBody } from "@middlewares/validators";
import { signUpSchema, updatePasswordSchema } from "@schemas/users.schemas";
import { languagesSchema } from "@schemas/languages.schema";

const authRouter = Router();

authRouter
  .post("/", validateReqBody(signUpSchema), signUpController)
  .patch("/", validateReqBody(updatePasswordSchema), updatePasswordController)
  .patch(
    "/languages",
    validateReqBody(languagesSchema),
    updateLanguagesController
  );

export default authRouter;
