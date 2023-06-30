import {
  signUpController,
  updatePasswordController,
} from "@controllers/auth.controllers";
import { Router } from "express";
import { validateReqBody } from "@middlewares/validators";
import { signUpSchema, updatePasswordSchema } from "@schemas/auth.schemas";

const authRouter = Router();

authRouter
  .post("/", validateReqBody(signUpSchema), signUpController)
  .patch("/", validateReqBody(updatePasswordSchema), updatePasswordController);

export default authRouter;
